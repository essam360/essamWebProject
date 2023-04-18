/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/config",
	"../../LoggerMixin",
	"../../MessagesMixin"
], //

function(declare, lang, config, LoggerMixin, MessagesMixin) {

	/**
	 * Creates a browser pop-up window to render the Form Template.
	 * 
	 * @name ecm.widget.dialog.EFormWindow
	 * @class Provides a mechanism that is used to display the IBM FileNet EForm widget in a separate browser window.
	 */
	var EFormWindow = declare("ecm.widget.dialog.EFormWindow", [
		LoggerMixin,
		MessagesMixin
	], {
		/** @lends ecm.widget.dialog.EFormWindow.prototype */

		/**
		 * String field holding a services URL that could be to another web-application
		 */
		servicesUrl: null,

		/**
		 * Integer field holding the initial default height of the eform window to open.
		 */
		height: 850,

		/**
		 * Integer field holding the initial default width of the eform window to open.
		 */
		width: 650,

		/**
		 * @private
		 */
		_openFormWindows: null,

		/**
		 * @private
		 */
		constructor: function() {
			if (!this._openFormWindows) {
				this._openFormWindows = {};
			}
		},

		/**
		 * Opens the browser pop-up window and renders the Form Template, Form Data, or document Form Policy.
		 * 
		 * @param item
		 *            A {@link ecm.model.ContentItem} object, can be Form Template, Form Data, or document Form Policy.
		 * @param callback
		 *            A function to be called after the Form Template is rendered.
		 */
		open: function(item, callback) {
			this.logEntry("open");
			if (item) {
				if (item.repository.connected) {
					this._openEForm(item, callback);
				} else {
					// Do not open the window yet, the repository has not been logged into
				}
			}
			this.logExit("open");
		},

		/**
		 * Returns a string holding the URL for the specified form object.
		 * 
		 * @param item
		 *            A {@link ecm.model.ContentItem} object, can be Form Template, Form Data, or Form Policy.
		 * @param formStateId
		 *            A string holding a unique forms state Id.
		 */
		getEFormUrl: function(item, formStateId) {
			var methodName = "getEFormUrl";
			this.logEntry(methodName);

			var eformUrl = null;
			if (item) {
				var repository = item.repository;
				var objectStoreId = repository.objectStoreName;
				var mimeType = item.mimetype;
				var id = item.id;

				var eformTemplate = null;
				if (this.servicesUrl != null) {
					// Use the eform plugin built to redirect over to Workplace XT integration commands
					eformTemplate = this.servicesUrl + "/integrationWebBasedCommand?_commandId=5600&objectStoreName={0}&id={1}&objectType=document&op=display";

					id = "release";
					this.height = 600;
					this.width = 800;
				} else {
					// Use the eform plugin built directly in ICN, supports only document policies.
					eformTemplate = ecm.model.desktop.getServicesUrl() + "/documentform.jsp?objectStoreId={0}&docid={1}";
				}

				// no longer putting formStateId on URL from outside the popup window
				eformUrl = lang.replace(eformTemplate, [
					encodeURIComponent(objectStoreId),
					encodeURIComponent(id)
				]);

				var vsId = item.vsId; // required for p8 documents
				if (vsId) {
					this.logDebug(methodName, "Adding vsId to Url");
					if (id == "release") {
						eformUrl = eformUrl + "&vsId=" + encodeURIComponent(vsId);
					} else if (item.resultSet && item.resultSet.parentFolder) {
						eformUrl = eformUrl + "&vsId=" + encodeURIComponent(vsId);
					}
				}

				if (item.version) {
					this.logDebug(methodName, "Adding item.version to Url");
					eformUrl = eformUrl + "&version=" + item.version;
				}

				eformUrl += this._createExtraUrlParameters(item);

				if (this.servicesUrl != null) {
					// Adding callback JavaScript parameters, if XT is in same Domain, we should be able to do an automatic refresh 
					// of the document. If running XT in another Domain, will just close the popup window (no way to refresh parent 
					// window object from another Domain).
					eformUrl += "&finishCallbackJs=" + "try{if (window.top.opener.ecm.widget.dialog.eformWindow.onFormWindowCompleted({id:\"" + item.id + "\"})) window.top.close();}catch(e){window.top.close()}";
					eformUrl += "&cancelCallbackJs=" + "try{if (window.top.opener.ecm.widget.dialog.eformWindow.onFormWindowCompleted({id:\"" + item.id + "\"})) window.top.close();}catch(e){window.top.close()}";
				}
			}
			this.logExit(methodName);
			return eformUrl;
		},

		_getTitle: function(item) {
			// Using document id, because that is what is returned in the JSON response from XT integration command
			// and we need to find our way back to the correct window handle (which contains the original item object)
			var id = item.id;
			// Check the format of the id, use only the actual static document id
			if (id.indexOf(",") > 0) {
				id = id.split(",")[2];
			}
			var title = "form_" + id.replace(/[{,\-,},~,\t,\/]/g, ""); // Remove some characters that can not be in window title
			return title;
		},

		_openEForm: function(item, callback) {
			var methodName = "_openEForm";
			this.logEntry(methodName);

			try {
				var title = this._getTitle(item);
				this.logInfo("_openEForm", "title = " + title);

				var eformUrl = this.getEFormUrl(item, title);
				this.logInfo("_openEForm", "eformUrl = " + eformUrl);

				var height = this.height;
				var width = this.width;
				var left = (screen.width - width) / 2;
				var top = (screen.height - height) / 2;

				var eformWindow = window.open(eformUrl, title, "status=yes,location=no,scrollbars=yes,menubar=no,toolbar=no,personalbar=no,resizable=yes,left=" + left + ",top=" + top + ",width=" + width + ",height=" + height + "\"", true);

				this._openFormWindows[title] = {
					window: eformWindow,
					callback: callback,
					item: item
				};
			} catch (e) {
				this.logError("_openEForm", "Error opening eform window.");
			}
			this.logExit(methodName);
		},

		_createExtraUrlParameters: function(item) {
			var extraUrlParameters = "";
			if (this.servicesUrl == null) {
				extraUrlParameters = "&repositoryId=" + encodeURIComponent(item.repository.id) + "&desktopId=" + ecm.model.desktop.id;
				if (config.isDebug) {
					extraUrlParameters += "&debug=true&logLevel=4";
				}
			} else {

			}
			return extraUrlParameters;
		},

		/**
		 * An event function that is called when the form window closes and the work item has been saved.
		 * 
		 * @param item
		 *            An object holding reference information.
		 */
		onFormWindowCompleted: function(item) {
			if (item != null && item.id) {
				item.docid = item.id;
				var title = this._getTitle(item);
				var eformWindow = this._openFormWindows[title];
				if (eformWindow) {
					if (eformWindow.callback) {
						eformWindow.callback(eformWindow.item);
					}
					ecm.model.desktop.onChange(eformWindow.item); // Will cause the content list to be refreshed

					delete this._openFormWindows[title];
				}
			}
			return true; // Returns true to tell the caller to close the form window.
		}

	});

	/**
	 * @name ecm.widget.dialog.eformWindow
	 * @description A global instance of {@link ecm.widget.dialog.EFormWindow} for the IBM Content Navigator toolkit.
	 */
	ecm.widget.dialog.eformWindow = new ecm.widget.dialog.EFormWindow();
	return EFormWindow;

});
