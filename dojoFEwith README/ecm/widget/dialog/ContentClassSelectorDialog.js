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
	"../../Messages",
	"./BaseDialog",
	"../ContentClassSelector",
	"dojo/text!./templates/ContentClassSelectorDialog.html"
],
function(declare, //
lang, //
domClass, //
domStyle, //
Messages, //
BaseDialog, //
ContentClassSelector, //
template) {

	/**
	 * @name ecm.widget.dialog.ContentClassSelectorDialog
	 * @class Provides a dialog box that is used to select content classes.
	 * @augments ecm.widget.dialog.BaseDialog
	 */
	return declare("ecm.widget.dialog.ContentClassSelectorDialog", [
		BaseDialog
	], {
		/** @lends ecm.widget.dialog.ContentClassSelectorDialog.prototype */

		contentString: template,
		widgetsInTemplate: true,
		_messages: ecm.messages,
		selectionMode: null,

		/**
		 * An {@link ecm.model.Repository} object associated with this dialog. The list of classes will come from this
		 * repository.
		 */
		repository: null,

		/**
		 * A callback function to be called when an item is selected. The selected item or items is passed as an
		 * argument of the callback function.
		 */
		callback: null,

		postCreate: function() {
			this.inherited(arguments);
			domClass.add(this.domNode, "ecmContentClassSelectorDialog");
			domStyle.set(this.domNode, "maxHeight", "none");
			domStyle.set(this.contentArea, "padding", "0");
			if (!this.title) {
				this.setTitle(this.messages.select_class);
			}
			this.okButton = this.addButton(this.messages.ok, "_onOk", true, true);
			this.okButton.set("disabled", true);
			this._render();
		},

		/**
		 * @private
		 */
		_render: function() {
			this.selectorWidget = new ContentClassSelector({
				selectorStyle: "tree",
				rootClassId: this.repository._isBox() ? "file" : "Document",
				hasAll: false,
				filterType: "",
				filterTemplateName: null,
				"class": "dijitInline",
				multiSelect: true,
				onlySelectable: true
			});

			this.contentClassSelector.appendChild(this.selectorWidget.domNode);
			this.selectorWidget.startup();
			
			this.connect(this.selectorWidget, "onSelected", function() {
				this.okButton.set('disabled', false);
			});
		},

		/**
		 * Shows the dialog.
		 * 
		 * @param callback
		 *            A callback function to be called when an item is selected. The selected item or items is passed as
		 *            an argument of the callback function.
		 */
		show: function(callback) {			
			var d = this.inherited(arguments);
			this._callback = callback;
			this.selectorWidget.setRepository(this.repository);
			return d;
		},

		/**
		 * @private Build array of items for multi select or single select mode
		 */
		_getSelectedFromSelectorWidget: function() {
			var selected = [];
			if (this.selectorWidget && this.selectorWidget.getSelected() != null) {
				var tempSelected = this.selectorWidget.getSelected();
				if (lang.isArray(tempSelected)) {
					selected = tempSelected;
				} else { // must be in single select mode
					selected.push(args);
				}
			}
			return selected;
		},

		/**
		 * @private
		 */
		_onOk: function() {
			var selectedItems = this._getSelectedFromSelectorWidget();
			if (this.callback)
				this.callback(selectedItems);
			this.onCancel();
		},
		
		destroy: function() {
			this.inherited(arguments);
			
			if (this.selectorWidget) {
				this.selectorWidget.destroy();
				this.selectorWidget = null;
			}
		}
	});
});
