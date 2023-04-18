/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/sniff",
	"dojo/dom-class",
	"dojo/dom-style",
	"dijit/form/ValidationTextBox",
	"dijit/form/CheckBox",
	"dijit/form/_TextBoxMixin",
	"ecm/MessagesMixin",
	"ecm/model/Desktop",
	"ecm/model/Favorite",
	"ecm/model/SearchTemplate",
	"./BaseDialog",
	"dojo/text!./templates/AddToFavoritesDialogContent.html"
], //
function(declare, //
lang, //
has, //
domClass, //
domStyle, //
ValidationTextBox, //
CheckBox, //
_TextBoxMixin, //
MessagesMixin, //
Desktop, //
Favorite, //
SearchTemplate, //
BaseDialog, //
template) {

	/**
	 * @name ecm.widget.dialog.AddToFavoritesDialog
	 * @class Provides a dialog box that is used to add a repository item as a favorite.
	 * @augments ecm.widget.dialog.BaseDialog
	 */
	return declare("ecm.widget.dialog.AddToFavoritesDialog", [
		BaseDialog,
		MessagesMixin
	], {
		/** @lends ecm.widget.dialog.AboutDialog.prototype */

		contentString: template,
		expandable: false,

		constructor: function() {
			this.messages = ecm.messages;
		},

		postCreate: function() {
			this.inherited(arguments);
			var _this = this;
			domClass.add(this.domNode, "ecmAddToFavorites");
			this.setWidth(400);
			this._saveButton = this.addButton(this.messages.save_template, "onSave", false, true);
			this.connect(this.alias, "_onInput", "_enableControl");
			this.connect(this.alias, "_setValueAttr", "_enableControl");
			this.alias.textDir = has("text-direction");
		},

		/**
		 * Set the item for the dialog to use.
		 * 
		 * @param item
		 *            Instance of {@link ecm.model.Item}.
		 */
		setItem: function(item) {
			this._item = item;
		},

		/**
		 * Set the mode.
		 * 
		 * @param mode
		 *            String with value "add" or "rename".
		 */
		setMode: function(mode) {
			if (Desktop.syncServer.enabled && this._item && this._item.repository.syncEnabled && !this._item.syncEnabled) {
				domStyle.set(this.syncArea, "display", "block");
			} else {
				domStyle.set(this.syncArea, "display", "none");
			}

			this._mode = mode;
			switch (this._mode) {
			case "add": {
				this.setTitle(this.messages.new_favorite_label);
				this.alias_label.innerHTML = this.messages.alias_label;
				domStyle.set(this.alias.domNode, "display", "block");
				
				// Include the description in the name if working with an OD search to be consistent with names in the search view
				var name = this._item.name;
				if (this._item.isInstanceOf && this._item.isInstanceOf(SearchTemplate) && this._item.description && this._item.description.trim().length)
					name += " - " + this._item.description;
				this.alias.set("value", name);
				this._saveButton.set("label", this.messages.add_tooltip);

				this.enableSync.set("checked", false);
				if (Desktop.syncServer.canSyncItem(this._item)) {
					this.enableSync.set("disabled", false);
				} else {
					this.enableSync.set("disabled", true);
				}

				break;
			}
			case "rename": {
				domStyle.set(this.syncArea, "display", "none");
				this.setTitle(this.messages.edit_favorite_label);
				this.alias_label.innerHTML = this.messages.alias_label;
				domStyle.set(this.alias.domNode, "display", "block");
				if (!(this._item.isInstanceOf && this._item.isInstanceOf(Favorite)))
					throw ("Invalid ecm.widget.AddToFavorites.getFavorites: Invalid object id - " + this._item.id);
				else {
					this.alias.set("value", this._item.name);
					this._saveButton.set("label", this.messages.ok_button_label);
				}
				break;
			}
			}
		},

		/**
		 * Shows the dialog.
		 */
		show: function() {
			return this.inherited(arguments);
		},

		/**
		 * Hides the dialog.
		 */
		hide: function() {
			return this.inherited(arguments);
		},

		/**
		 * @private Filter favorites by title.
		 */
		_enableControl: function() {
			if (this.alias.get("value") != null && this.alias.get("value") != "")
				this._saveButton.set("disabled", false);
			else
				this._saveButton.set("disabled", true);
		},

		/**
		 * Called when the user hits the ok/save button. If add, then creates the favorite item. If rename, then updates
		 * the favorite.
		 */
		onSave: function() {
			if (!this._saveButton.get("disabled")) {
				if (this._mode == "add") {
					var favorite = Favorite.createFromItem(this._item, this.alias.get("value"));
					Desktop.addFavorite(favorite, lang.hitch(this, function() {
						if (Desktop.syncServer.canSyncItem(this._item)) {
							if (this.enableSync.get("checked")) {
								favorite.syncEnabled = true;
								Desktop.syncServer.enableSyncForItems([
									this._item
								]);
							}
						}
					}));
				} else if (this._mode == "rename") {
					this._item.name = this.alias.get("value");
					Desktop.updateFavorite(this._item);
				}
				this.onCancel();
			}
		},

		/**
		 * Closes the dialog.
		 */
		onCancel: function() {
			_TextBoxMixin.selectInputText(this.alias.textbox, 0, 0);
			this.inherited(arguments);
			setTimeout(lang.hitch(this, this.cleanup), 1000);
		},

		/**
		 * Cleans up.
		 */
		cleanup: function() {
			this._saveButton.set("label", this.messages.save_template);
			domStyle.set(this.alias.domNode, "display", "block");
			domStyle.set(this.required_label, "display", "inline");
			this._saveButton.set("disabled", false);
			delete this._item;
		}
	});
});
