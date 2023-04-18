/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/kernel",
	"dojo/string",
	"dojo/_base/json",
	"dojo/_base/sniff",
	"dojox/html/entities",
	"./_ModelObject",
	"./Request",
	"./Message",
	"./_appletUtils"
], function(declare, lang, kernel, string, dojojson, has, entities, _ModelObject, Request, Message, _appletUtils) {

	/**
	 * @name ecm.model.Print
	 * @class Provides the ability to access local printers using the workstation.
	 * @augments ecm.model._ModelObject
	 * @private
	 */
	var Print = declare("ecm.model.Print", [
		_ModelObject
	], {
		/** @lends ecm.model.Print.prototype */

		appletStarted: false,

		printApplet: null,

		_cancelPrinting: false,

		/**
		 * Creates the applet tag to include in the non-visual print applet.
		 * 
		 * @since 2.0.3.6
		 */
		startApplet: function(callback) {
			this._startPrintApplet(callback);
		},

		/**
		 * Destroys the applet tag for the non-visual print applet.
		 * 
		 * @since 2.0.3.6
		 */
		stopApplet: function() {
			this._stopPrintApplet();
		},

		/**
		 * Creates the applet tag to include in the non-visual print applet.
		 */
		_startPrintApplet: function(callback) {
			this.logEntry("_startPrintApplet");

			if (!this.appletStarted) {
				this.logDebug("_startPrintApplet", "using: serviceURL codebase: " + ecm.model.desktop.getServicesUrl() + "/applets");
				this.logDebug("_startPrintApplet", "same? _cServiceURL codebase: " + ecm.model.desktop._cServicesUrl + "/applets");
				var applet = this.createApplet("printApplet", "1px", "1px", "com.ibm.ecm.applets.print.PrintApplet.class", ecm.model.desktop._cServicesUrl + "/applets", "printapplet.jar");
				_appletUtils.loadApplet({
					applet: applet,
					callback: lang.hitch(this, function(loadedApplet) {
						this.printApplet = loadedApplet;
						if (lang.isFunction(callback))
							callback(loadedApplet);
						this.appletStarted = true;
					}),
					errorMessageKey: "print_applet_init_error"
				});
				this.logDebug("_startPrintApplet", "Print applet started");
			} else {
				if (lang.isFunction(callback))
					callback(this.printApplet);
				this.logDebug("_startPrintApplet", "did NOT start Print applet because it was already started");
			}

			this.logExit("_startPrintApplet");
		},

		/**
		 * Destroys the applet tag for the non-visual print applet.
		 */
		_stopPrintApplet: function() {
			if (this.appletStarted) {
				document.body.removeChild(this.printApplet);
				this.printApplet = null;
				this.appletStarted = false;
			}
		},

		/**
		 * Returns the list of printers.
		 */
		getLocalPrinters: function() {
			this.logEntry("getLocalPrinters");

			if (!this.appletStarted)
				this._startPrintApplet();

			var printers = null;
			if (this.printApplet) {
				printers = this.printApplet.getLocalPrinterNames();
				this.logDebug("getLocalPrinters", "printers: " + printers);
				if (printers)
					printers = dojojson.fromJson(printers);
				this.logDebug("getLocalPrinters", "json printers: " + printers);
			}

			this.logExit("getLocalPrinters");
			return printers;
		},

		/**
		 * Returns the default setting for the specified local printer.
		 * 
		 * @param printerName
		 *            Printer name to lookup.
		 */
		getLocalPrinterDefaults: function(printerName) {
			this.logEntry("getLocalPrinterDefaults");

			if (!this.appletStarted)
				this._startPrintApplet();

			var defaults = null;
			if (this.printApplet) {
				var getDefaultMarginsUrl = this.getDefaultMarginsUrl(printerName);
				defaults = this.printApplet.getDefaultsForPrinter(printerName, getDefaultMarginsUrl);
				if (defaults)
					defaults = dojojson.fromJson(defaults);
			}

			this.logExit("getLocalPrinterDefaults");
			return defaults;
		},

		/**
		 * Prints the item on the specified printer.
		 * 
		 * @param printerName
		 *            Printer to send the print request to.
		 * @param item
		 *            The {@link ecm.model.Item} object to print.
		 * @param param
		 *            Printer parameters (number of copies, orientation, margins).
		 */
		_printDocumentLocal: function(printerName, item, param, callback) {
			this.logEntry("_printDocumentLocal");
			var printRC = 0;

			if (printerName && item && this.printApplet) {
				var url = this.getDocumentUrl(item);
				var printParams = {};
				printParams.partNum = param.partNum;
				if (param.partNum) {
					url += "&part_number=" + param.partNum;
				}

				printParams.docURL = url;
				printParams.docId = item.id;
				printParams.contentType = item.mimetype || "";
				printParams.repositoryType = item.repository.type;
				printParams.docName = item.name;

				// Add to the recent items list
				item.repository.addRecentItem(item);

				printRC = this.printApplet.printDocument(dojojson.toJson(printParams));
			}

			//if (callback)
			//	callback(printRC, item, 0);

			this.logExit("_printDocumentLocal", "rc: " + printRC);
			return printRC;
		},

		/**
		 * Prints the items on the specified printer.
		 * 
		 * @param printerName
		 *            Printer to send the print request to.
		 * @param items
		 *            Array of {@link ecm.model.Item} objects to print.
		 * @param param
		 *            Printer parameters (number of copies, orientation, margins).
		 */
		printDocumentsLocal: function(printerName, items, param, callback, messageCallback) {
			this.logEntry("printDocumentsLocal", "printerName: " + printerName);
			var printRC = 0;

			if (printerName && items && items.length > 0) {
				var printVals = {};
				printVals.printerName = printerName;
				printVals.orientation = param.orientation;
				printVals.numCopies = param.printCopies;
				printVals.margins = [];
				printVals.margins.push(param.leftMargin);
				printVals.margins.push(param.rightMargin);
				printVals.margins.push(param.topMargin);
				printVals.margins.push(param.bottomMargin);

				if (!this.appletStarted)
					this._startPrintApplet();

				if (this.printApplet)
					this.printApplet.setPrinterValues(dojojson.toJson(printVals));

				for (var i = 0; i < items.length && printRC == 0; i++) {
					if (this._cancelPrinting == true)
						break;
					if (messageCallback)
						messageCallback(string.substitute(ecm.messages.print_message, [
							entities.encode(items[i].name)
						]), "info");
					printRC = this._printDocumentLocal(printerName, items[i], param, callback);
					if (messageCallback)
						messageCallback("");
				}
				this._cancelPrinting = false;

				// print_status_message: "${0} documents were sent to the ${1} printer."  
				// if print is cancelled, # of documents sent to the printer appears correct 
				if (printRC == undefined || printRC == 0) {
					ecm.model.desktop.addMessage(new Message({
						number: 0,
						level: 0,
						text: string.substitute(ecm.messages.print_status_message, [
							i,
							printerName
						])
					}));
				} else {
					// TODO needs a better message, one that indicates which document and index failed
					ecm.model.desktop.addMessage(new Message({
						id: "",
						number: 0,
						level: 4,
						text: ecm.messages.error_dialog_title,
						explanation: string.substitute(ecm.messages.viewer_warn_is_printing, [
							i,
							printerName
						])
					}));
				}
			}

			if (callback)
				callback(printRC, printRC == 0 ? null : items[i - 1], printRC == 0 ? -1 : i - 1);

			this.logExit("printDocumentsLocal", "printer rc: " + printRC);
		},

		/**
		 * This utility function creates the correct tags to use for invoking an applet.
		 * 
		 * @param name
		 *            The name of the applet, for reference by other applets.
		 * @param width
		 *            The width of the applet.
		 * @param height
		 *            The height of the applet.
		 * @param code
		 *            The Java class for the applet.
		 * @param codebase
		 *            The directory in which to search for the applet's class or jar.
		 * @param archive
		 *            The jars containing classes for the applet.
		 * @param params
		 *            Additional applet parameters.
		 */
		createApplet: function(name, width, height, code, codebase, archive, params) {
			var applet = 0;
			var logLevel = ecm.logger.getLogLevel();
			var proxyUrl = "";
			var platform = (navigator && navigator.platform ? navigator.platform : "Win32");
			var jniSignatureUri = Request.appendSecurityToken("getJNISignature.do");
			var jniUriConnector = (jniSignatureUri.indexOf("?") < 0 ? "?" : "&");
			var appletDiv;

			jniSignatureUri = jniSignatureUri + jniUriConnector + "platform=";

			// create the applet element
			if (has("ie")) { // for IE, use object tag
				var objectHTML = '<object name="' + name + '" width="' + width + '" height="' + height + '" classid="clsid:8AD9C840-044E-11D1-B3E9-00805F499D93">' + '<param name="code" value="' + code + '"></param>' + '<param name="codebase" value="' + codebase + '"></param>' + '<param name="archive" value="' + archive + '"></param>' + '<param name="logLevel" value="' + logLevel + '"></param>' + '<param name="scriptable" value="true"></param>' + '<param name="mayscript" value="true"></param>';
				for ( var param in params) {
					objectHTML += '<param name="' + param + '" value="' + params[param] + '"></param>';
				}
				objectHTML += '<param name="WCProxy" value="' + window.WCProxy + '"></param>';
				objectHTML += '<param name="logLevel" value="' + logLevel + '"></param>';
				objectHTML += '<param name="clientLocale" value="' + kernel.locale + '"></param>';
				objectHTML += '<param name="jniSignatureUri" value="' + jniSignatureUri + '"></param>';
				objectHTML += '<param name="platform" value="' + platform + '"></param>';
				objectHTML += '<div id="javaPluginNotFound"><p>&nbsp;<p></div></object>';
				appletDiv = document.createElement("div");
				appletDiv.innerHTML = objectHTML;
				applet = appletDiv.firstChild;
			} else { // for other browsers, use applet tag
				var appletHTML = '<applet name="' + name + '" width="' + width + '" height="' + height + '" code="' + code + '" codebase="' + proxyUrl + codebase + '"archive="' + archive + '" mayscript="true">';
				appletHTML = appletHTML + '<param name="' + 'logLevel' + '" value="' + logLevel + '"></param>';
				for ( var param in params) {
					appletHTML = appletHTML + '<param name="' + param + '" value="' + params[param] + '"></param>';
				}
				appletHTML = appletHTML + '<param name="' + 'WCProxy' + '" value="' + window.WCProxy + '"></param>';
				appletHTML = appletHTML + '<param name="' + 'clientLocale' + '" value="' + kernel.locale + '"></param>';
				appletHTML = appletHTML + '<param name="platform" value="' + platform + '"></param>';
				appletHTML = appletHTML + '<param name="jniSignatureUri" value="' + jniSignatureUri + '"></param>';
				appletHTML = appletHTML + '<param name="java_arguments" value="-Djava.net.preferIPv4Stack=true"></param>';
				appletHTML = appletHTML + '</applet>';
				appletDiv = document.createElement("div");
				appletDiv.innerHTML = appletHTML;
				applet = appletDiv.firstChild;
			}
			return applet;
		},

		getDefaultMarginsUrl: function(printerName) {
			this.logEntry("getDefaultMarginsUrl");

			var url = null;

			url = ecm.model.desktop._cServicesUrl + "/jaxrs/getDefaultPrintMargins?printername=" + encodeURIComponent(printerName) + "&desktop=" + encodeURIComponent(ecm.model.desktop.id);
			url = ecm.model.Request.setSecurityToken(url);

			this.logExit("getDefaultMarginsUrl");
			return url;
		},

		/**
		 * Generates a URL that can be used to retrieve the content for printing a document.
		 * 
		 * @param item
		 *            An instance of {@link ecm.model.ContentItem} for the document.
		 */
		getDocumentUrl: function(item) {
			var docId = item.id;
			//var docName = item.name;
			var template = item.getContentClass().id;
			var repositoryId = item.repository.id;
			var mimeType = item.mimetype || "";
			var serverType = item.repository.type;
			var vsId = item.vsId; // required for p8 documents
			var replicationGroup = item.replicationGroup; // replicationGroup
			var docUrl = null;

			docUrl = ecm.model.desktop._cServicesUrl + "/jaxrs/" + serverType + "/getDocument?docid=" + encodeURIComponent(docId) + "&template_name=" + encodeURIComponent(template) + "&repositoryId=" + encodeURIComponent(repositoryId);
			if (vsId)
				docUrl = docUrl + "&vsId=" + encodeURIComponent(vsId);

			if (item.version)
				docUrl = docUrl + "&version=" + item.version;

			if (replicationGroup)
				docUrl = docUrl + "&replicationGroup=" + replicationGroup;

			docUrl = ecm.model.Request.setSecurityToken(docUrl);

			docUrl = docUrl + "&printDoc=" + item.hasPrivilege("privPrintDoc");
			return docUrl;
		}
	});

	/**
	 * @name ecm.model.print.
	 * @description A global instance of {@link ecm.model.Print} for the IBM Content Navigator toolkit.
	 */
	ecm.model.print = new ecm.model.Print({});
	return ecm.model.print;
});
