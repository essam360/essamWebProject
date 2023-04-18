/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/array",
	"dojo/_base/event",
	"dojo/_base/lang",
	"dojo/_base/sniff",
	"dojo/dom-class",
	"dojo/dom-geometry",
	"dojo/dom-style",
	"dojo/data/ItemFileWriteStore",
	"dojo/string",
	"dojo/cookie", //
	"dijit/form/CheckBox",
	"dijit/form/FilteringSelect",
	"ecm/widget/NumberSpinner",
	"dijit/form/NumberTextBox",
	"dijit/form/RadioButton",
	"dijit/form/SimpleTextarea",
	"dijit/form/TextBox",
	"dijit/form/ValidationTextBox",
	"dijit/registry",
	"dijit/layout/ContentPane", //
	"dijit/layout/TabContainer",
	"dijit/_TemplatedMixin", //
	"dijit/_WidgetsInTemplateMixin", //
	"idx/layout/TitlePane",
	"ecm/model/Print",
	"ecm/model/Message",
	"ecm/model/Request",
	"ecm/model/Conversion",
	"ecm/widget/dialog/ErrorDialog",
	"ecm/widget/dialog/MessageDialog",
	"ecm/LoggerMixin",
	"ecm/MessagesMixin",
	"ecm/widget/_HasPluginMixin",
	"dojo/text!./templates/PrintODPaneContent.html"
], function(
		declare, //
		array, //
		event, //
		lang, //
		has, //
		domClass,// 
		domGeom, //
		domStyle, //
		ItemFileWriteStore, // 
		string, //
		cookie, //
		CheckBox, //
		FilteringSelect, // 
		NumberSpinner, //
		NumberTextBox, //
		RadioButton, //
		SimpleTextarea, //
		TextBox, //
		ValidationTextBox, // 
		registry, //
		ContentPane, //
		TabContainer, //
		_TemplatedMixin, //
		_WidgetsInTemplateMixin, //
		TitlePane, //
		Print, //
		Message, //
		Request, //
		Conversion, //
		ErrorDialog, // 
		MessageDialog, // 
		LoggerMixin, //
		MessagesMixin, //
		_HasPluginMixin, //
		template) {

	/**
	 * @name ecm.widget.PrintODPane
	 * @class Provides a dialog box that is used to print one or more OD documents.
	 * @augments ecm.widget.ContentPane
	 */
	return declare("ecm.widget.PrintODPane", [
	    ContentPane,
		_TemplatedMixin, 
		_WidgetsInTemplateMixin,
		MessagesMixin, 
		LoggerMixin 
	], {
		/** @lends ecm.widget.PrintODPane.prototype */

		templateString : template,
		widgetsInTemplate: true,
		printProps: null,
		printerStore: null,
		initialized: false,

		postCreate: function() {
			var methodName = "postCreate";
			this.logEntry(methodName);

			ecm.logger.initLogger(4, true);

			this.inherited(arguments);

			this.faxFields.set("title", this.messages.print_printer_fax_properties);

			this.printProps = {};
			domClass.add(this.domNode, "ecmPrintDialog");
			this.connect(this.localPrintRadioButton, "onChange", "_typeSelection");
			this.connect(this.serverPrintRadioButton, "onChange", "_typeSelection");
			this.connect(this.printerBox, "onChange", "_onPrinterChange");
			this.printerBox.set("textDir", has("text-direction"));

			var self = this;
			this.connect(this.infoTo, "onKeyDown", function(evt) {
				if (evt.keyCode == 13) {
					var val = self.infoTo.get("value");
					val += "\n";
					self.infoTo.set("value", val);

					event.stop(evt);
				}
			});

			this.connect(this.infoFrom, "onKeyDown", function(evt) {
				if (evt.keyCode == 13) {
					var val = self.infoFrom.get("value");
					val += "\n";
					self.infoFrom.set("value", val);

					event.stop(evt);
				}
			});

			// when the current user logs off, clear the current values and
			// reinitialize with the next user
			this.connect(ecm.model.desktop, "logoff", lang.hitch(this, function() {
				this.reset();
				this.initialized = false;
				this.repositoryChanged = true;

				document.cookie = "leftMargin=";
				document.cookie = "rightMargin=";
				document.cookie = "topMargin=";
				document.cookie = "bottomMargin=";
			}));

			// Setting these strings must be done here, not in html, to avoid problems with embedded single
			// quotes in fr.
			//this.localPrintFields.setTitle(this.messages.print_printer_properties);
			this.serverPrintFields.setTitle(this.messages.print_printer_properties);
			this.serverPrintOptions.setTitle(this.messages.print_printer_server_options);
			this.user_printclass.set("invalidMessage", this.messages.print_invalid_value_class);
			this.user_printpagedef.set("invalidMessage", this.messages.print_invalid_value_pagedef);
			this.user_printwriter.set("invalidMessage", this.messages.print_invalid_value_writer);
			this.user_printformdef.set("invalidMessage", this.messages.print_invalid_value_formdef);
			this.user_printforms.set("invalidMessage", this.messages.print_invalid_value_forms);

			this.logExit(methodName);
		},

		// initialize the pane, fetch the server printers and set the defaults
		// Note: need to set the items and repositoryId attributes first 
		initialize: function() {
			if (this.repository.type == "od") {
				domStyle.set(this.printerTypeSelectionArea, "display", "");
				// default to local, retrieve settings may change it
				this.serverPrintRadioButton.set("checked", false);
				this.localPrintRadioButton.set("checked", true);
			}
			this._retrieveSettings();
			if (this._onlyAllowServerPrinter()) {
				// only allowing server print for line data/afp docs
				this.serverPrintRadioButton.set("checked", true);
				domStyle.set(this.printerTypeSelectionArea, "display", "none");
			}
//			else if (this.initialized && this._currentSelection == "server") {
//				// only retain a printer type selection on each show (d16954)
//				this.serverPrintRadioButton.set("checked", true);
//			} else {
//				this.localPrintRadioButton.set("checked", true);
//			}
		},

		_typeSelection: function() {
			var methodName = "_typeSelection";
			this.logEntry(methodName, "local print: " + this.localPrintRadioButton.get("checked"));
			if (this.localPrintRadioButton.get("checked")) {
				this._currentSelection = "local";
				domStyle.set(this.printerSelectionArea, "display", "none");
				domStyle.set(this.propertiesArea, "display", "none");
				
				//this._getLocalPrinters();
			} else {
				this._currentSelection = "server";
				domStyle.set(this.printerSelectionArea, "display", "");
				domStyle.set(this.propertiesArea, "display", "");
				// force the server list to reload
				this.initialized = false;
				this._getServerPrinters();
			}
			this.onPrinterTypeChange(this._currentSelection);
			this.logExit(methodName);
		},
		
		// called when the printer type is changed from local to server 
		onPrinterTypeChange: function(type) {
			
		},

		_onPrinterChange: function(value) {
			var methodName = "_onPrinterChange";
			this.logEntry(methodName);
			var store = this.printerStore;
			if (!store) {
				this.logDebug(methodName, "no printer store!");
				return;
			}

			store.fetchItemByIdentity({
				identity: value,
				scope: this,
				onItem: function(item) {
					if (item) {
						this._setPrinter(value, store.getValue(item, "printerType"));
					}
				}
			});
			this.logExit(methodName);
		},

		_setPrinter: function(printer, printerType) {
			var methodName = "_setPrinter";
			this.logEntry(methodName, "printer: " + printer + ", printerType: " + printerType);
			if (!printer) {
				return;
			}
			this.printProps.printer = printer;
			this.printProps.printerType = printerType;
			this._showOptions(printerType);

			if (printerType == "local") {
				this._setLocalDefaults(printer);
			} else {
				this._setServerDefaults();
			}

			this.validate();
			this.logExit(methodName);
		},

		_showOptions: function(printerType) {
			domStyle.set(this.serverPrintOptions.domNode, "display", "none");
			array.forEach(registry.findWidgets(this.serverPrintOptions.domNode), function(w) {
				w.set("disabled", true);
			}, this);
			domStyle.set(this.faxFields.domNode, "display", "none");
			array.forEach(registry.findWidgets(this.faxFields.domNode), function(w) {
				w.set("disabled", true);
			}, this);
			domStyle.set(this.serverPrintFields.domNode, "display", "none");
			array.forEach(registry.findWidgets(this.serverPrintFields.domNode), function(w) {
				w.set("disabled", true);
			}, this);
//			domStyle.set(this.localPrintFields.domNode, "display", "none");
//			array.forEach(registry.findWidgets(this.localPrintFields.domNode), function(w) {
//				w.set("disabled", true);
//			}, this);

			switch (printerType) {
			case "F":
				domStyle.set(this.serverPrintFields.domNode, "display", "block");
				array.forEach(registry.findWidgets(this.serverPrintFields.domNode), function(w) {
					w.set("disabled", false);
				}, this);

				domStyle.set(this.faxFields.domNode, "display", "block");
				array.forEach(registry.findWidgets(this.faxFields.domNode), function(w) {
					w.set("disabled", false);
				}, this);
				break;
			case "I":
				domStyle.set(this.serverPrintFields.domNode, "display", "block");
				array.forEach(registry.findWidgets(this.serverPrintFields.domNode), function(w) {
					w.set("disabled", false);
				}, this);

				domStyle.set(this.serverPrintOptions.domNode, "display", "block");
				array.forEach(registry.findWidgets(this.serverPrintOptions.domNode), function(w) {
					w.set("disabled", false);
				}, this);
				break;
			case "P":
				domStyle.set(this.serverPrintFields.domNode, "display", "block");
				array.forEach(registry.findWidgets(this.serverPrintFields.domNode), function(w) {
					w.set("disabled", false);
				}, this);
				break;
			case "local":
				domStyle.set(this.localPrintFields.domNode, "display", "block");
				array.forEach(registry.findWidgets(this.localPrintFields.domNode), function(w) {
					w.set("disabled", false);
				}, this);
				break;
			}
			this.resize();
		},

		/**
		 * Resize the current dialog so the controls flow correctly
		 */
		resize: function() {
			this.inherited(arguments);

//			if (this.domNode) {
//				var height = domGeom.getContentBox(this.domNode).h;
//				if (height <= 0)
//					return;
//
//				var th = domGeom.getMarginBox(this.titleBar).h;
//				var mh = 25;
//				if (this.inlineMessage && domStyle.get(this.inlineMessage, "display") != "none") {
//					mh = domGeom.getMarginBox(this.inlineMessage).h;
//				}
//
//				var ah = domGeom.getMarginBox(this.actionBar).h;
//				var ph = domGeom.getMarginBox(this.printerSelectArea).h;
//
//				domGeom.setMarginBox(this.propertiesArea, {
//					h: (height - th - mh - ah - ph)
//				});
//
//				//this.localPrintFields.resize();
//				this.serverPrintFields.resize();
//				this.serverPrintOptions.resize();
//				this.faxFields.resize();
//			}
		},

		_setItemsAttr: function(items) {
			this.items = items;
			if (items && items[0]) {
				this.printProps.template_name = (items[0])["template"];
				var r = this.repository = items[0].repository;
				this.repositoryDisconnectHandler = this.connect(this.repository, "onDisconnected", function() {
					this.reset();
					this.initialized = false;
				});
			}
		},

		_setRepositoryIdAttr: function(repositoryId) {
			if (this.printProps.repositoryId === repositoryId) {
				return;
			}
			this.printProps.repositoryId = repositoryId;

			this.repositoryChanged = true;
		},

		_createNewPrinterStore: function(printers) {
			if (this.printerStore) {
				delete this.printerStore;
			}

			this.printerStore = new ItemFileWriteStore({
				data: {
					identifier: "value",
					label: "name",
					items: printers
				}
			});
		},

		_getServerPrinters: function(force) {
			var methodName = "_getServerPrinters";
			this.logEntry(methodName, "printer type selection: " + this._currentSelection);

			if (this.repositoryChanged) {
				this.repository.retrieveServerPrinters(lang.hitch(this, function(serverPrinters) {
					this.serverPrinters = serverPrinters;
					if (!serverPrinters || serverPrinters.length == 0) {
						this.serverPrintRadioButton.set("disabled", true);
						this.localPrintRadioButton.set("checked", true);
						this._typeSelection();
					} else {
						//var defaultPrinter = this.repository.serverPrinterDefaults.user_printer;
						//this.logDebug("show", "serverPrinter default: " + defaultPrinter);
						//for ( var printer in serverPrinters) {
						//	this.logDebug("show", "serverPrinter properties: " + printer);
						//}
						this.serverPrintRadioButton.set("disabled", false);
						this.initialized = false;
						this.repositoryChanged = false;
						this._loadServerPrinters();
					}
					
				}));
				return;
			}
			this.logExit(methodName);
		},

		_loadServerPrinters: function() {
			var methodName = "_loadServerPrinters"; 
			if (!this.initialized) {
				var serverPrintDefaults = this.repository.serverPrinterDefaults;

				this.printProps = {};
				if (serverPrintDefaults) {
					if (serverPrintDefaults.user_printer && serverPrintDefaults.user_printer.length > 0) {
						this.printProps.printer = serverPrintDefaults.user_printer;
						this.logDebug(methodName, "default server printer: " + this.printProps.printer);
					}
				}

				var serverPrinters = this.serverPrinters;
				var printers = [];
				if (serverPrinters && serverPrinters.length > 0) {
					for ( var i in serverPrinters) {
						printers.push({
							value: serverPrinters[i].printer,
							printerType: serverPrinters[i].printerType,
							name: serverPrinters[i].printer
						});

						this.logDebug(methodName, "add printer: " + serverPrinters[i].printer);
						if (this.printProps.printer && this.printProps.printer == serverPrinters[i].printer) {
							this.printProps.printerType = serverPrinters[i].printerType;
						} else if (!this.printProps.printer && (i == 0)) {
							this.printProps.printer = serverPrinters[0].printer;
							this.printProps.printerType = serverPrinters[0].printerType;
						}
					}
				}

				this._createNewPrinterStore(printers);
				this.printerBox.set("store", this.printerStore);

				if (this.printProps.printer) {
					// preselect the default printer 
					this.printerBox.set("value", this.printProps.printer);
					this._setPrinter(this.printProps.printer, this.printProps.printerType);
					this.set("value", this.printProps);
					// set the default values for this printer
					this._setServerDefaults();
				}

				this.initialized = true;
				this.repositoryChanged = false;
			} else {
				this.printerBox.set("value", this.printProps.printer);
				this._setPrinter(this.printProps.printer, this.printProps.printerType);
			}
		},
		
		_setServerDefaults: function() {
			var methodName = "_setServerDefaults";
			this.logEntry(methodName);
			var defaults = this.repository.serverPrinterDefaults;

			for ( var property in defaults) {
				if (this[property]) {
					//this.logDebug(methodName, "set printer default: " + property + " = " + defaults[property]);
					this[property].set("value", defaults[property]);
				}
			}

			//this.printCopies.set("value", 1);
			this.user_printbanner.set("value", defaults.user_printbanner === "Y");
			this.logExit(methodName);
		},

		// send the items to the selected server printer
		print: function(items, callback) {
			var methodName = "_onPrint";
			this.logEntry(methodName, "printer type: " + this.printProps.printerType);
			var param = this.get("value");

			param.partNum = this.partNum;
			lang.mixin(param, this.printProps);
			if (this.printProps.printerType !== "local") {
				for ( var property in this.repository.serverPrinterDefaults) { // iterate the configuration property names based on what was loaded from the server.
					if (this[property]) {
						this.logDebug(methodName, "send to printer: " + param[property] + " = " + this[property].get("value"));
						param[property] = this[property].get("value");
						// instead of retrieving the default properties again, reset them in the defaults obj
						// important when printing more than one document
						// but mixin only if saving new defaults
						if (this.saveServerPrintOptions.get("value"))
							this.repository.serverPrinterDefaults[property] = this[property].get("value");
					}
				}

				// unable to set a default printer - always returns the first printer in the list 
				param.user_printer = this.printProps.printer;

				param.saveServerPrintOptions = this.saveServerPrintOptions.get("value") ? "on" : "off";
				param.user_printbanner = this.user_printbanner.get("value") ? "Y" : "N";

				// on next server print, choose the same server printer as currently selected for the next document
				this.repository.serverPrinterDefaults.user_printer = this.printProps.printer;

				this.logDebug(methodName, "sent to printer: " + param.user_printer);
				this.repository.serverPrint(param, items, lang.hitch(this, function(response) {
					this.logDebug(methodName, "response: " + response);
					if (callback)
						callback();
					//this.hide();
				}));
			}
			this.logExit(methodName);
		},

		validate: function() {
		},
		
		// return true if there are OD native doc types in the items (line data, afp)
		_onlyAllowServerPrinter: function() {
			var onlyServer = false;
			if (this._conversion == null) {
				this._conversion = new ecm.model.Conversion();	
			}
			if (this.items) {
				for (var i = 0; i < this.items.length; i++) {
					if (this.items[i].mimetype && !this._conversion.typeIsSupportedByPrintService(this.items[i].mimetype)) {
						onlyServer = true;
					}
					// check if it is OD types and PDF conversion is supported
					if (onlyServer && this.repository.isAFP2PDFEnabled && (this.items[i].mimetype == "application/afp" || this.items[i].mimetype == "application/line")) {
						onlyServer = false;
					}
					// can stop checking?
					if (onlyServer) {
						return onlyServer;
					}
				}
			}
			return onlyServer;
		},
		
		saveSettings: function() {
			var serverPrinter = this.serverPrintRadioButton.get("checked");
			cookie("ecm.widget.dialog.PrintODPane.serverPrinter", serverPrinter, {
				expires: 365
			});				
		},
		
		_retrieveSettings: function() {
			var serverPrinter = cookie("ecm.widget.dialog.PrintODPane.serverPrinter");
			if (serverPrinter != null) {
				this.serverPrintRadioButton.set("checked", (serverPrinter == "true"));
				this.localPrintRadioButton.set("checked", (serverPrinter != "true"));
			}
		},

		// return true if printing to the server
		isServerPrinterChosen: function() {
			return this.serverPrintRadioButton.get("checked");
		}
	});
});
