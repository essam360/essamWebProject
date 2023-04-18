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
	"dijit/form/CheckBox",
	"dijit/form/FilteringSelect",
	"ecm/widget/NumberSpinner",
	"dijit/form/NumberTextBox",
	"dijit/form/RadioButton",
	"dijit/form/SimpleTextarea",
	"dijit/form/TextBox",
	"dijit/form/ValidationTextBox",
	"dijit/registry",
	"idx/layout/TitlePane",
	"../../model/Print",
	"./BaseDialog",
	"ecm/model/Message",
	"ecm/model/Request",
	"ecm/widget/dialog/ErrorDialog",
	"ecm/widget/dialog/MessageDialog",
	"ecm/LoggerMixin",
	"ecm/widget/_HasPluginMixin",
	"dojo/text!./templates/PrintDialogContent.html"
], function(declare, array, event, lang, has, domClass, domGeom, domStyle, //
ItemFileWriteStore, string, CheckBox, FilteringSelect, NumberSpinner, NumberTextBox, RadioButton, //
SimpleTextarea, TextBox, ValidationTextBox, registry, TitlePane, Print, BaseDialog, Message, //
Request, ErrorDialog, MessageDialog, LoggerMixin, _HasPluginMixin, template) {

	/**
	 * @name ecm.widget.dialog.PrintDialog
	 * @class Provides a dialog box that is used to print one or more documents.
	 * @augments ecm.widget.dialog.BaseDialog
	 */
	return declare("ecm.widget.dialog.PrintDialog", [
		BaseDialog,
		_HasPluginMixin
	], {
		/** @lends ecm.widget.dialog.PrintDialog.prototype */

		contentString: template,
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
			this.setTitle(this.messages.print_title);
			this.setMaximized(true);
			this.setResizable(true);

			this.printButton = this.addButton(this.messages.print_print_button, "_onPrint", true, true);

			this.printButton.set("disabled", !this.isValid());
			this.connect(this, "onValidStateChange", function(state) {
				this.printButton.set("disabled", !state);
			});
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
			this.localPrintFields.setTitle(this.messages.print_printer_properties);
			this.serverPrintFields.setTitle(this.messages.print_printer_properties);
			this.serverPrintOptions.setTitle(this.messages.print_printer_server_options);
			this.user_printclass.set("invalidMessage", this.messages.print_invalid_value_class);
			this.user_printpagedef.set("invalidMessage", this.messages.print_invalid_value_pagedef);
			this.user_printwriter.set("invalidMessage", this.messages.print_invalid_value_writer);
			this.user_printformdef.set("invalidMessage", this.messages.print_invalid_value_formdef);
			this.user_printforms.set("invalidMessage", this.messages.print_invalid_value_forms);

			this.logExit(methodName);
		},

		/**
		 * Show the current dialog
		 */
		show: function() {
			this.reset();

			var isIE = has("ie") || has("trident");
			if (!this._javaPluginNotFound || isIE || this._hasPlugin("application/x-java-applet")) {
				ecm.model.print._startPrintApplet();
				if (isIE) {
					// Check if the applet failed to load (IE doesn't support the tests made in _hasPlugin)
					var self = this, args = arguments;
					setTimeout(function() {
						var javaPluginNotFound = document.getElementById("javaPluginNotFound");
						if (javaPluginNotFound && javaPluginNotFound.offsetWidth > 0) {
							self._onJavaPluginNotFound();
						} else {
							self._init();
							self.inherited("show", args);
						}
					}, 1000);
				} else {
					this._init();
					this.inherited(arguments);
				}
			} else {
				this._onJavaPluginNotFound();
			}
		},

		_init: function() {
			this.connect(this.localPrintRadioButton, "onChange", "_typeSelection");
			this.connect(this.serverPrintRadioButton, "onChange", "_typeSelection");

			if (this.repository.type == "od") {
				domStyle.set(this.printerTypeSelectionArea, "display", "");
				this.repository.retrieveServerPrinters(lang.hitch(this, function(serverPrinters) {
					this.serverPrinters = serverPrinters;
					if (!serverPrinters || serverPrinters.length == 0) {
						this.serverPrintRadioButton.set("disabled", true);
						this.localPrintRadioButton.set("checked", true);
						this._typeSelection();
					} else {
						var defaultPrinter = this.repository.serverPrinterDefaults.user_printer;
						this.logDebug("show", "serverprinter default: " + defaultPrinter);
						for ( var printer in serverPrinters) {
							this.logDebug("show", "serverprinter properties: " + printer);
						}
						this.serverPrintRadioButton.set("disabled", false);
					}
				}));
			} else {
				// No need to even show the selection. Local print is the only available option
				// for non-OD repositories
				domStyle.set(this.printerTypeSelectionArea, "display", "none");
				this._currentSelection = "local";
			}

			// only retain a printer type selection on each show (d16954)
			if (this.initialized && this._currentSelection == "server") {
				this.serverPrintRadioButton.set("checked", true);
			} else {
				this.localPrintRadioButton.set("checked", true);
			}
		},

		_onJavaPluginNotFound: function() {
			this._javaPluginNotFound = true;
			if (this._messageDialog != null) {
				this._messageDialog.destroy();
				delete this._messageDialog;
			}
			this._messageDialog = new MessageDialog({
				text: ecm.messages.viewer_java_plugin_not_found
			});
			this._messageDialog.show();
		},

		_typeSelection: function() {
			var methodName = "_typeSelection";
			//this.logEntry(methodName, "local print: " + this.localPrintRadioButton.get("checked"));
			if (this.localPrintRadioButton.get("checked")) {
				this._currentSelection = "local";
				this._getLocalPrinters();
			} else {
				this._currentSelection = "server";
				// force the server list to reload
				this.initialized = false;
				this._getServerPrinters();
			}
			this.logExit(methodName);
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
			domStyle.set(this.localPrintFields.domNode, "display", "none");
			array.forEach(registry.findWidgets(this.localPrintFields.domNode), function(w) {
				w.set("disabled", true);
			}, this);

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

			if (this.domNode) {
				var height = domGeom.getContentBox(this.domNode).h;
				if (height <= 0)
					return;

				var th = domGeom.getMarginBox(this.titleBar).h;
				var mh = 25;
				if (this.inlineMessage && domStyle.get(this.inlineMessage, "display") != "none") {
					mh = domGeom.getMarginBox(this.inlineMessage).h;
				}

				var ah = domGeom.getMarginBox(this.actionBar).h;
				var ph = domGeom.getMarginBox(this.printerSelectArea).h;

				domGeom.setMarginBox(this.propertiesArea, {
					h: (height - th - mh - ah - ph)
				});

				this.localPrintFields.resize();
				this.serverPrintFields.resize();
				this.serverPrintOptions.resize();
				this.faxFields.resize();
			}
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
					}
				}));
				this.initialized = false;
				this.repositoryChanged = false;
				this._getServerPrinters();
				return;
			}

			if (!this.initialized) {
				var serverPrintDefaults = this.repository.serverPrinterDefaults;

				this.printProps = {};
				if (serverPrintDefaults.user_printer && serverPrintDefaults.user_printer.length > 0) {
					this.printProps.printer = serverPrintDefaults.user_printer;
					this.logDebug(methodName, "default server printer: " + this.printProps.printer);
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
			this.logExit(methodName);
		},

		_getLocalPrinters: function() {
			var methodName = "_getLocalPrinters";
			this.logEntry(methodName, "printer type selection: " + this._currentSelection);

			var printersJson = ecm.model.print.getLocalPrinters();
			if (printersJson) {
				var defaultPrinterName = printersJson.defaultPrinter;

				var defaultExists = false;
				var firstPrinter = null;

				var printers = [];
				if (printersJson.printers && printersJson.printers.length > 0) {
					for ( var i in printersJson.printers) {
						this.logDebug(methodName, "add local printer: " + printersJson.printers[i]);
						printers.push({
							value: printersJson.printers[i],
							printerType: "local",
							name: printersJson.printers[i]
						});
						if (i == 0)
							firstPrinter = printersJson.printers[i];
						if (printersJson.printers[i] == defaultPrinterName)
							defaultExists = true;
					}

					this._createNewPrinterStore(printers);
					this.printerBox.set("store", this.printerStore);

					if (defaultExists) {
						this.printerBox.set("value", defaultPrinterName);
						this._setPrinter(defaultPrinterName, "local");
						this.set("value", this.printProps);
						this.logDebug(methodName, "default printer: " + defaultPrinterName);
					} else if (firstPrinter) {
						this.printerBox.set("value", firstPrinter);
						this._setPrinter(firstPrinter, "local");
						this.set("value", this.printProps);
						this.logDebug(methodName, "Default printer not found, setting default to the first printer: " + firstPrinter);
					}
				} else {
					this.logWarning(methodName, "printersJson printers length: 0");
				}
			} else {
				this.logError(methodName, "printersJson: null");
			}
			this.logExit(methodName);
		},

		_setLocalDefaults: function(printer) {
			var methodName = "_setLocalDefaults";
			this.logEntry(methodName);
			var defaults = ecm.model.print.getLocalPrinterDefaults(printer);

			if (defaults) {
				this.printCopies.set("value", defaults.numCopies);

				var hConstraint = null;
				var vConstraint = null;
				var vConstraintMsg = null;
				var hConstraintMsg = null;

				if (defaults.orientation == "landscape") {
					this.landscapeRadioButton.set("checked", true);
					hConstraint = {
						min: defaults.margins[1].minimumMargin,
						max: defaults.margins[3].maxVertical
					};
					hConstraintMsg = string.substitute(this.messages.print_invalid_value_margin, [
						defaults.margins[1].minimumMargin,
						defaults.margins[3].maxVertical
					]);

					vConstraint = {
						min: defaults.margins[1].minimumMargin,
						max: defaults.margins[2].maxHorizontal
					};
					vConstraintMsg = string.substitute(this.messages.print_invalid_value_margin, [
						defaults.margins[1].minimumMargin,
						defaults.margins[2].maxHorizontal
					]);
				} else {
					this.portraitRadioButton.set("checked", true);
					hConstraint = {
						min: defaults.margins[1].minimumMargin,
						max: defaults.margins[2].maxHorizontal
					};
					hConstraintMsg = string.substitute(this.messages.print_invalid_value_margin, [
						defaults.margins[1].minimumMargin,
						defaults.margins[2].maxHorizontal
					]);

					vConstraint = {
						min: defaults.margins[1].minimumMargin,
						max: defaults.margins[3].maxVertical
					};
					vConstraintMsg = string.substitute(this.messages.print_invalid_value_margin, [
						defaults.margins[1].minimumMargin,
						defaults.margins[3].maxVertical
					]);
				}

				var cookieResult = this._findSessionCookie("topMargin");
				var defaultValue = ((defaults.storedDefaultMargins === null) ? defaults.margins[0].defaultMargin : defaults.storedDefaultMargins[0].topMargin);
				this.topMargin.set("value", ((cookieResult === null) ? defaultValue : cookieResult));
				this.topMargin.set("constraints", vConstraint);
				this.topMargin.set("invalidMessage", vConstraintMsg);

				cookieResult = this._findSessionCookie("bottomMargin");
				defaultValue = ((defaults.storedDefaultMargins === null) ? defaults.margins[0].defaultMargin : defaults.storedDefaultMargins[1].bottomMargin);
				this.bottomMargin.set("value", ((cookieResult === null) ? defaultValue : cookieResult));
				this.bottomMargin.set("constraints", vConstraint);
				this.bottomMargin.set("invalidMessage", vConstraintMsg);

				cookieResult = this._findSessionCookie("leftMargin");
				defaultValue = ((defaults.storedDefaultMargins === null) ? defaults.margins[0].defaultMargin : defaults.storedDefaultMargins[2].leftMargin);
				this.leftMargin.set("value", ((cookieResult === null) ? defaultValue : cookieResult));
				this.leftMargin.set("constraints", hConstraint);
				this.leftMargin.set("invalidMessage", hConstraintMsg);

				cookieResult = this._findSessionCookie("rightMargin");
				defaultValue = ((defaults.storedDefaultMargins === null) ? defaults.margins[0].defaultMargin : defaults.storedDefaultMargins[3].rightMargin);
				this.rightMargin.set("value", ((cookieResult === null) ? defaultValue : cookieResult));
				this.rightMargin.set("constraints", hConstraint);
				this.rightMargin.set("invalidMessage", hConstraintMsg);
			}
			this.logExit(methodName);
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

			this.printCopies.set("value", 1);
			this.user_printbanner.set("value", defaults.user_printbanner === "Y");
			this.logExit(methodName);
		},

		_onPrint: function() {
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
				this.repository.serverPrint(param, this.items, lang.hitch(this, function(response) {
					this.logDebug(methodName, "response: " + response);
					this.hide();
				}));
			} else {
				array.forEach(this.localPrintFields.getChildren(), function(child) {
					if (child.value) {
						param[child.name] = child.value;
					}
				}, this);
				(this.portraitRadioButton.get("checked") == true) ? (param["orientation"] = "portrait") : (param["orientation"] = "landscape");

				this.logDebug(methodName, "sent to printer: " + param.printer);

				var _this = this;
				ecm.model.print.printDocumentsLocal(param.printer, this.items, param, function(printReturnCode, item, index) {
					// if printReturnCode == 0 then item is null annd index = -1
					//_this.logDebug(methodName, "print rc: " + printReturnCode);
					if (printReturnCode == undefined || printReturnCode == 0) {
						//_this.logInfo(methodName, "print successful");
					} else {
						// need to set a dialog status indicating the error 
						// the actual exception message can not be returned to the user
						//_this.logInfo(methodName, "print failed: " + printReturnCode + ", index: " + index + ", item: " + item);
						// error is displayed by the desktop obj so displaying the error here is not necessary
					}
					_this.hide();
				}, function(message, type) {
					if (message && message.length > 0)
						_this.setMessage(message, ((!type) ? "info" : type));
					else
						_this.clearMessage();
				});

				document.cookie = "leftMargin=" + param.leftMargin;
				document.cookie = "rightMargin=" + param.rightMargin;
				document.cookie = "topMargin=" + param.topMargin;
				document.cookie = "bottomMargin=" + param.bottomMargin;
			}
			this.logExit(methodName);
		},

		_findSessionCookie: function(cname) {
			var name = cname + "=", ca = document.cookie.split(';'), i, c, ca_length = ca.length;
			for (i = 0; i < ca_length; i += 1) {
				c = ca[i];
				while (c.charAt(0) === ' ') {
					c = c.substring(1);
				}
				if (c.indexOf(name) !== -1) {
					if (name.length == c.length)
						return null;

					return c.substring(name.length, c.length);
				}
			}

			return null;
		},

		_onResetButtonClick: function() {
			this.topMargin.set("value", 0);
			this.bottomMargin.set("value", 0);
			this.leftMargin.set("value", 0);
			this.rightMargin.set("value", 0);

			this.validate();
		},

		onCancel: function() {
			this.logEntry("onCancel");
			if (ecm.model.print)
				ecm.model.print._cancelPrinting = true;
			//this.inherited(arguments);
			this.logExit("onCancel");
		}
	});
});
