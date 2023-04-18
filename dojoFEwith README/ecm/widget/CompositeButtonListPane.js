/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array",
	"dojo/window",
	"dojo/aspect",
	"dojo/string",
	"dijit/_Widget",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"ecm/LoggerMixin",
	"ecm/MessagesMixin",
	"ecm/widget/CompositeButton",
	"dojo/text!./templates/CompositeButtonListPane.html"
], //
function(declare, lang, array, winUtils, aspect, string, _Widget, _TemplatedMixin, _WidgetsInTemplateMixin, LoggerMixin, MessagesMixin, CompositeButton, template) {

	/**
	 * @name ecm.widget.CompositeButtonListPane
	 * @class Displays a list of items as composite buttons.
	 * @augments dijit._Widget
	 * @since 2.0.3.5
	 */
	return declare("ecm.widget.CompositeButtonListPane", [
		_Widget,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		MessagesMixin
	], {
		/** @lends ecm.widget.CompositeButtonListPane.prototype */

		templateString: template,
		widgetsInTemplate: true,

		/**
		 * Instance of {@link ecm.model.Repository}.
		 */
		repository: null,

		/**
		 * Constructor.
		 */
		constructor: function() {
			this._items = new Array();
			this._buttons = new Array();
		},

		/**
		 * @private Returns the index in the items array for the input id.
		 */
		_getItemIndex: function(id) {
			for (var i = 0; i < this._items.length; i++) {
				if (this._items[i].id == id) {
					return i;
				}
			}
			return -1;
		},

		/**
		 * Adds the items as composite buttons.
		 */
		addItem: function(item) {
			var id = item.id;
			if (this._getItemIndex(id) >= 0) { // present
				return;
			}

			var label = item.displayName; 
			var button = new CompositeButton({
				label: label,
				"class": "member",
				iconClass: item.iconClass || "",
				iconAltText: item.iconAltText || "",
				actionIconClass: "removeMemberIcon",
				actionAltText: string.substitute(this.messages.remove_member, [
					label
				])
			});
			this.own(aspect.after(button, "_onActionButtonClick", lang.hitch(this, function() {
				var index = this._getItemIndex(id);
				this._items.splice(index, 1);
				this._buttons.splice(index, 1)[0].destroyRecursive();
				this.onItemRemoved();
			})));
			this._itemsNode.appendChild(button.domNode);
			winUtils.scrollIntoView(button.domNode);
			this._buttons.push(button);
			this._items.push(item);
			this.onItemAdded();
		},

		/**
		 * Event fired when a item is removed.
		 */
		onItemRemoved: function() {
		},

		/**
		 * Event fired when a item is added.
		 */
		onItemAdded: function() {
		},

		/**
		 * Returns the list of items.
		 */
		getItems: function() {
			return this._items;
		},

		/**
		 * Removes all items in the list.
		 * 
		 * @since 2.0.3.8
		 */
		removeAllItems: function() {
			if (this._items && this._items.length) {
				this.cleanUp();
				this._buttons = [];
				this._items = [];
				this.onItemRemoved();
			}
		},

		/**
		 * Cleans up the composite buttons.
		 */
		cleanUp: function() {
			if (this._buttons) {
				array.forEach(this._buttons, function(button) {
					if (!button._destroyed) {
						button.destroyRecursive();
					}
					delete button;
				});
			}
		},

		/**
		 * Destroy.
		 */
		destroy: function() {
			this.inherited(arguments);
			this.cleanUp();
			this._buttons = null;
		}
	});

});
