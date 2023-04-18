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
	"dijit/_Widget",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/Dialog",
	"ecm/Messages",
	"ecm/widget/search/SearchSelector",
	"ecm/widget/dialog/BaseDialog",
	"dojo/text!./templates/SearchSelectorDialog.html"
],

function(declare, //
lang, //
domClass, //
domStyle, //
_Widget, //
_TemplatedMixin, //
_WidgetsInTemplateMixin, //
Dialog, //
Messages, //
SearchSelector, //
BaseDialog, //
template) {

	/**
	 * @name ecm.widget.search.SearchSelectorDialog
	 * @class Provides a dialog box that is used to select search templates.
	 * @augments ecm.widget.dialog.BaseDialog
	 */
	return declare("ecm.widget.search.SearchSelectorDialog", [
		BaseDialog
	], {
		/** @lends ecm.widget.search.SearchSelectorDialog.prototype */
		contentString: template,
		widgetsInTemplate: true,

		_messages: ecm.messages,

		/**
		 * @deprecated As of release 2.0.1
		 */
		selectionMode: null,

		/**
		 * A {@link ecm.model.Repository} object of the searches to be selected
		 */
		repository: null,
		/**
		 * A callback function that's called after a selection is made
		 */
		callback: null,
		/**
		 * A boolean flag to enable a button to launch {@link ecm.model.SearchBuilder} widget and a text box to filter
		 * searches
		 */
		toolbarEnabled: false,

		/**
		 * @private Sets the title of the dialog and add the okay button that calls the callback function after a
		 *          selection is made.
		 */
		postCreate: function() {
			this.inherited(arguments);
			domStyle.set(this.domNode, "maxHeight", "none");
			domClass.add(this.domNode, "ecmSearchSelectorDialog");
			if (!this.title) {
				this.setTitle(this.messages.select_search);
			}
			this.okButton = this.addButton(this.messages.ok, "_onOk", true, true);
			this.okButton.set("disabled", true);
			this._render();
		},

		/**
		 * @private Adds {@link ecm.widget.search.SearchSelector} widget to this widget.
		 */
		_render: function() {
			this.selectorWidget = new SearchSelector({
				toolbarEnabled: this.toolbarEnabled
			});

			this.searchSelector.appendChild(this.selectorWidget.domNode);
			this.selectorWidget.setRepository(this.repository);
			this.connect(this.selectorWidget, "onSearchTemplateSelected", function() {
				this.okButton.set('disabled', false);
			});
		},

		/**
		 * Sets the repository used to populate the search list.
		 * 
		 * @param repository
		 *            An instance of an {@link ecm.model.Repository} object.
		 * @since 2.0.3
		 */
		setRepository: function(repository) {
			this.repository = repository;
			this.selectorWidget.setRepository(this.repository);
		},

		/**
		 * Calls super.show() function.
		 */
		show: function(callback) {
			var d = this.inherited(arguments);
			this._callback = callback;
			return d;
		},

		/**
		 * @private Calls the callback function with the selection made.
		 */
		_onOk: function() {
			var selectedItems = this.selectorWidget.getSelected();
			if (this._callback)
				this._callback(selectedItems);
			this.onCancel();
		}
	});
});
