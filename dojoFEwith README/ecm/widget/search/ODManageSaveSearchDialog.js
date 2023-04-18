/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/dom-class",
	"dojo/dom-construct",
	"dijit/form/MultiSelect",
	"../../LoggerMixin",
	"../dialog/BaseDialog",
	"dojo/text!./templates/ODManageSaveSearchDialogContent.html"
], function(declare, lang, domClass, domConstruct, MultiSelect, LoggerMixin, BaseDialog, template) {

	/**
	 * @private Part of {@link ecm.widget.search.SearchTab} widget
	 * @name ecm.widget.search.ODManageSaveSearchDialog
	 * @class Provides a dialog box that is used to edit saved searches in an IBM Content Manager OnDemand repository.
	 * @augments ecm.widget.dialog.BaseDialog
	 */
	return declare("ecm.widget.search.ODManageSaveSearchDialog", [
		BaseDialog
	], {
		/** @lends ecm.widget.search.ODManageSaveSearchDialog.prototype */
		contentString: template,

		constructor: function(args) {
			if (args) {
				this.repository = args.repository;
				this._callback = args.callback;
				this._viewPrivate = args.viewPrivate;
				this._viewPublic = args.viewPublic;
				this._searchTemplate = args.searchTemplate;
			}
		},

		postCreate: function() {
			this.inherited(arguments);
			domClass.add(this.domNode, "ecmODManageSaveSearchDialog");
			this.setTitle(this.messages.delete_save_searches);
			this.setIntroText(this.messages.od_delete_search_help_text);
			this._okButton = this.addButton(this.messages.delete_text, "_onDelete", true, true);
		},

		/**
		 * Shows the dialog.
		 */
		show: function() {
			var d = this.inherited(arguments);
			this._okButton.set("disabled", true);

			if (this._searchTemplate) {
				var self = this;

				this._searchTemplate.retrieveODSavedQueries(function(odSavedQueries) {
					var searchSelector = self.saveQuerySelector.domNode;
					domConstruct.empty(searchSelector);
					searchSelector.options.length = 0;

					for ( var i in odSavedQueries) {
						var newOption = document.createElement("OPTION");
						newOption.setAttribute("value", odSavedQueries[i]);
						newOption.appendChild(document.createTextNode(odSavedQueries[i]));
						newOption.title = odSavedQueries[i];
						searchSelector.appendChild(newOption);
					}
				});
			}
			this.resize();
			return d;
		},

		_onDelete: function() {
			var self = this;
			if (this._callback) {
				this._callback({
					searchesToDelete: self.saveQuerySelector.get("value")
				});
			}
			this.onCancel();
		},

		_onSelectionChange: function() {
			this._okButton.set("disabled", this.saveQuerySelector.get("value").length > 0 ? false : true);
		},

		onCancel: function() {
		}
	});

});
