/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/aspect",
	"dojo/dom-class",
	"dojo/dom-style",
	"dijit/_Widget",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/layout/ContentPane",
	"ecm/widget/search/UnifiedSearchRepositorySelector",
	"../dialog/BaseDialog"
],

function(declare, //
lang, //
aspect,//
domClass, //
domStyle, //
_Widget, //
_TemplatedMixin, //
_WidgetsInTemplateMixin, //
ContentPane, //
UnifiedSearchRFCSelector, //
BaseDialog) {

	/**
	 * @name ecm.widget.search.UnifiedSearchRepositorySelectorDialog
	 * @class Provides a dialog box that is used to open and run saved searches.
	 * @augments ecm.widget.dialog.BaseDialog
	 * @private
	 */
	return declare("ecm.widget.search.UnifiedSearchRepositorySelectorDialog", [
		BaseDialog
	], {
		/** @lends ecm.widget.search.UnifiedSearchRepositorySelectorDialog.prototype */

		widgetsInTemplate: true,
		
		expandable: false,
		
		resizable: true,

		UnifiedSearchRFCSelector: null,

		/**
		 * @private Sets the title of the dialog and propagates the repository to SearchTab widget.
		 */
		postCreate: function() {
			this.inherited(arguments);
			this.setTitle(this.messages.add_repository);
			this.setIntroText(this.messages.unified_search_dialog_intro_text);
			domClass.add(this.domNode, "ecmUnifiedSearchSelectorDialog");
			this._OKButton = this.addButton(ecm.messages.ok_button_label, "onOkClicked", true);
			this.UnifiedSearchRFCSelector = new UnifiedSearchRFCSelector();
			this.contentArea.appendChild(this.UnifiedSearchRFCSelector.domNode);
			this.onSelectionCompleteConnect = aspect.after(this.UnifiedSearchRFCSelector, "onSelectionComplete", lang.hitch(this, "_enableOkButton"), true);

		},

		/**
		 * Preferred way to bring up the dialog for adding a repository
		 */
		showDialogForAddRepository: function(item) {
			this.setTitle(this.messages.add_repository);
			var self = this;
			this.show().then(function() {
				self.UnifiedSearchRFCSelector.addRepository(item);
			});

		},
		/**
		 * Preferred way to bring up the dialog edit a repository
		 */

		showDialogForEditRepository: function(item) {
			this.setTitle(this.messages.edit_repository);
			var self = this;
			this.show().then(function() {
				self.UnifiedSearchRFCSelector.editRepository(item);
			});
		},

		_enableOkButton: function(enableOkButton) {

			this._OKButton.set("disabled", !enableOkButton);
		},

		/**
		 * Invoked when the dialog's OK button is clicked . The UnifiedSearchRepositorySeletor has all the info
		 * necessary at this point for completing on "Add"
		 */
		onOkClicked: function() {
			if (this.UnifiedSearchRFCSelector.completeSelection()) {
				this.hide();
			}
		},

		onCancel: function() {
		}
	});
});
