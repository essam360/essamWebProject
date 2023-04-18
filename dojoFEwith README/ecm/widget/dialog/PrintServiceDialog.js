/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/dom-class",
	"dojo/dom-style",
	"dojo/dom-attr",
	"dojo/aspect",
	"dojo/dom-geometry",
	"dijit/layout/TabContainer", 
	"./BaseDialog",
	"ecm/model/Message",
	"ecm/widget/dialog/BatchStatusDialog",
	"ecm/widget/dialog/ErrorDialog",
	"ecm/model/Conversion",
	"ecm/widget/PrintDocumentOptionsPane",
	"ecm/widget/PrintODPane",
	"dojo/text!./templates/PrintServiceDialogContent.html"
], function(declare, lang, domClass, domStyle, domAttr, aspect, domGeom, TabContainer, BaseDialog, Message, BatchStatusDialog, ErrorDialog, Conversion, PrintDocumentOptionsPane, PrintODPane, template) {

	/**
	 * @name ecm.widget.dialog.PrintServiceDialog
	 * @class Provides a dialog box used to print one or more documents using the Daeja Viewone service.
	 * @augments ecm.widget.dialog.BaseDialog
	 */
	return declare("ecm.widget.dialog.PrintServiceDialog", [
		BaseDialog
	], {
		/** @lends ecm.widget.dialog.PrintServiceDialog.prototype */

		contentString: template,
		widgetsInTemplate: true,
		
		postCreate: function() {
			this.inherited(arguments);
			this.setTitle(this.messages.print_title);
			this.setResizable(true);
			this.printButton = this.addButton(this.messages.print_print_button, "_onPrint", true, true);			
			// init the print API
			this._getConversion().initialize();
		},
		
		/**
		 * Sets the list of documents to print, need to call this before show()
		 * 
		 * 		items is a list of item objects 
		 * 
		 * 		for multi part/content element printing items is a list of objects in the format:
		 *  		{
		 *  			id: a unique identifier (eg: concatenate the item ID and the Index #  
		 *  			item : the content item the content element/part belongs to
		 *    			contentType: the content type/mime type of the content element/part
		 *    			index: the content element number or part number to print
		 *  		}
		 *  
		 */
		setItems: function(items) {
			this.items = items;
			this._documentOptionsPane.setItems(items);
			if (items[0].item) {
				this.repository = items[0].item.repository;
			}
			else {
				this.repository = items[0].repository;
			}
			
			// setup the OD panel:
			if (this.repository.type == "od") {
				this._addODPrintOptionsTab();
				this._odPrintOptionsPane.set("items", items);
				this._odPrintOptionsPane.set("repositoryId",  this.repository.id);			
				this._odPrintOptionsPane.initialize();
			}
		},
		
		/*
		 * Sets the part number to be sent to the print service, 
		 * can be "0", "1", "2", etc. or "all" for printing all parts of a multi-part document
		 */
		setPartNumber: function(partNumber) {
			this.partNumber = partNumber;
		},
		
		_addODPrintOptionsTab: function() {
			this._odPrintOptionsPane = new PrintODPane();
			this._tabContainer.addChild(this._odPrintOptionsPane);
			this._odPrintOptionsPane.title = this.messages.print_service_OD_print_tab_title;
			
			this.connect(this._odPrintOptionsPane, "onPrinterTypeChange", "_ODPrinterTypeChange");
		},
		
		_onPrint: function() {
			var methodName = "_onPrint";
			this.logEntry(methodName);
			
			// get the reordered list
			var newItems = this._documentOptionsPane.getSelectedItems();
			this.items = newItems;
			
			if (this.repository.type == "od" && this._odPrintOptionsPane && this._odPrintOptionsPane.isServerPrinterChosen()) {
				this._odPrintOptionsPane.print(newItems, lang.hitch(this, function() {
					this.hide();
				}));
			}
			else {
				this._printDocs(newItems);	
			}
			
			this._documentOptionsPane.saveSettings();
			if (this._odPrintOptionsPane) {
				this._odPrintOptionsPane.saveSettings();
			}
			
			this.logExit(methodName);
		},
				
		/**
		 * Show the current dialog
		 */		
		show: function() {
			this._documentOptionsPane.render();
			//this._pageSetupPane.render();
			var d = this.inherited(arguments);
			return d;
		},
		
		_getPrintParams: function() {
			var printAllParts = false;
			var partNum = null;
			if (this.partNumber) {
				if (this.partNumber != "0" && this.partNumber != "all") {
					partNum = this.partNumber; 
				} else if (this.partNumber == "all") {
					printAllParts = true;
				}				
			}
			var printParams = {
					items: this.items,
					allParts: printAllParts,
					header: null,
					footer: null,
					watermark: null,
					partNumber: partNum,
					includeAnnotationSummaryPage: false
				};
			lang.mixin(printParams, this._documentOptionsPane.getOptions());
			return printParams;			
		},

		/*
		 * Open a status dialog and then call the print service
		 */
		_printDocs: function(items, callback) {		
			if (this._batchStatusDialog) {
				this._batchStatusDialog.destroyRecursive();
			}

			this._batchStatusDialog = new BatchStatusDialog({
				title: ecm.messages.progress_message_general,
				cancellable: true,
				modeless: false,
				withProgressBar: true,
				withLoadingIcon: true,
				onShow: lang.hitch(this, function() {
					setTimeout(lang.hitch(this, function() {
						this._print(this._getPrintParams(), lang.hitch(this, function() {
							if (callback)
								callback();
							this._batchStatusDialog.hide();
						}), lang.hitch(this, function(err) {
							// Error handling
							this.logDebug("actionPrintDoc", "print error: " + err);
							this._batchStatusDialog.hide();
							this._showErrorMessage(err);
						}));
					}), 500);					
				}),		
			});

			var onQuitHandler = aspect.after(this._batchStatusDialog, "onQuit", lang.hitch(this, function() {				
				onQuitHandler.remove();
				this._conversion.cancel();
				this._batchStatusDialog.hide();
			}), true);

			this._batchStatusDialog.show();		
			this.onCancel();
		},
		
		/*
		 * Use the conversion object to call the viewer print service
		 */
		_print: function(printParams, callback, errorback) {
			this._getConversion().print(printParams, callback, errorback);
		},
		
		// create the print conversion object
		_getConversion: function() {
			if (!this._conversion) {
				// Gets the Virtual Viewer supported content types
				var viewOneViewer = ecm.model.desktop.viewers.filter(function(viewer){
					return viewer.id === "viewONEVirtualViewer";
				})
				var supportedContentTypes = {};
				
				// TODO: temporarily disable supportedContentTypes, this turns off using the daeja conversion service
				// for those types, and uses the ICN pdf conversion instead
//				if (viewOneViewer.length > 0) {
//					supportedContentTypes = viewOneViewer[0].supportedContentTypes 									
//				} 
				// Creates a new Conversion model object
				this._conversion = new ecm.model.Conversion({
					"supportedContentTypes": supportedContentTypes
				});
				
				// set up listener to update progress bar
				var handle = aspect.after(this._conversion, "onStatusUpdated", lang.hitch(this, function(status) {
					this._batchStatusDialog.updateLabelInProgressBar(status.message);
					this._batchStatusDialog.updateValueInProgressBar(status.percentage);
				}), true);
				
				//set up listener when the print api is loaded
				var handle = aspect.after(this._conversion, "viewerPrintReady", lang.hitch(this, function(status) {
					this.printButton.set("disabled", false);
				}), true);	
			}
			return this._conversion;
		},
		
		// the od printer type changed, hide cover page if a server printer is selected
		_ODPrinterTypeChange: function(type) {
			this._documentOptionsPane._hideCoverPageOption(type === "server");
		},
		
		_showErrorMessage: function(err) {
			if (!this._errorDialog)
				this._errorDialog = new ErrorDialog();
			this._errorDialog.showMessage(Message.createErrorMessage("print_service_error_printing"));
		},
		
		resize: function() {
			this.inherited(arguments);
			var size = domGeom.getMarginBox(this.contentArea);
			if (size && size.h > 0) {
				this._tabContainer.resize({
					w: size.w-20,
					h: size.h-20
				});
			}
		} 
	});
});
