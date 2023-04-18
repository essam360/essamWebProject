/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/sniff",
	"dijit/_Widget",
	"dojo/topic",
	"dojo/_base/connect",
	"ecm/Messages",
	"ecm/widget/dialog/MessageDialog",
	"ecm/widget/dialog/ConfirmationDialog"
], //

function(declare, lang, has, _Widget, topic, connect, Messages, MessageDialog, ConfirmationDialog) {

	/**
	 * @public
	 * @name ecm.widget.admin._AdminTabBase
	 * @class Provides a tab content view for an administration object.
	 */
	return declare("ecm.widget.admin._AdminTabBase", [
		_Widget
	], {
		/** @lends ecm.widget.admin._AdminTabBase.prototype */

		/*
		 * General variables
		 */

		// To be used as the icon on the Tab
		iconClass: "",

		// To note if this tab has dirty data or not
		_dirty: false,

		//bidi base  text direction
		textDir: has("text-direction"),

		/*
		 * Common setters and getters
		 */

		setTitle: function(title) {
			this.title = title;
			this._updateTabLabel();
		},

		getTitle: function() {
			return this.title;
		},

		setIconClass: function(iconClass) {
			this.iconClass = iconClass;
		},

		//---------------------------------------------------------------------------
		/*
		 * Functions to be overwritten by subclass
		 */

		/**
		 * To be overwritten to initialize this widget.
		 */
		initialize: function() {

		},

		/**
		 * To be overwritten to actually save the data and invoke onComplete() with the status.
		 */
		_saveData: function(/* function(success) */onComplete) {
			alert("Saving the Data");
			onComplete(true);
		},

		/**
		 * To be overwritten to check if all the data is valid.
		 */
		_validateData: function() {
			return true;
		},

		/**
		 * To be overwritten to perform whatever is necessary to update the tab when it is selected.
		 */
		onSelect: function() {
		},

		//---------------------------------------------------------------------------
		/*
		 * Basic functions
		 */

		/**
		 * Perform the save operation.
		 */
		onSave: function() {
			this.onSaveWithCallback(false, function() {
			});
		},

		/**
		 * Perform the save operation.
		 */
		onSaveWithCallback: function(closingAfterSave, callback) {
			//if (this._dirty) {
			if (this._validateData())
				this._saveData(lang.hitch(this, function(success) {
					if (success)
						this._markClean();
					if (callback)
						callback();
				}), closingAfterSave);
			else {
				var dialog = new MessageDialog({
					text: ecm.messages.admin_prompt_something_not_valid
				});
				dialog.show();
				if (callback)
					callback();
			}
			//} else {
			//if (callback)
			//callback();
			//}
		},

		/**
		 * Perform the close operation.
		 */
		onClose: function() {
			var doClose = true;
			if (this._dirty) {
				var self = this;
				var confirmClose = new ConfirmationDialog({
					text: ecm.messages.admin_prompt_close_without_save,
					title: ecm.messages.close,
					buttonLabel: ecm.messages.yes,
					cancelButtonLabel: ecm.messages.no,
					cancelButtonDefault: true,
					onExecute: function() {
						self._markClean();
						connect.publish("ecm.admin.AdminPane.closeTab", [
							[
								self
							]
						]);
					}
				});
				confirmClose.show();
				return false;
			}
			return true;
		},

		/**
		 * Mark this tab dirty: change the title and announce it.
		 */
		_markDirty: function() {
			if (!this._dirty) {
				this._dirty = true;
				this._updateTabLabel();
				this._announceDirtyTab();
			}
		},

		/**
		 * Mark this tab clean: change the title and announce it.
		 */
		_markClean: function() {
			if (this._dirty) {
				this._dirty = false;
				this._updateTabLabel();
				this._announceCleanTab();
			}
		},

		_updateTabLabel: function() {
			if (this.controlButton) {
				if (!has("text-direction")) {
					this.controlButton.set("label", (this._dirty ? "*" : "") + this.getTitle());
				} else {
					this.controlButton.set("label", (this._dirty ? "*" : "") + this.enforceTextDirWithUcc(null, this.getTitle()));
				}
			}
		},

		_getIdValueFromName: function(name) {
			var id = "";
			if (name) {
				for ( var i = 0; i < name.length; i++) {
					var ch = name[i].charCodeAt();
					if ((ch > 47 && ch < 58) || (ch > 64 && ch < 91) || (ch > 96 && ch < 123)) {
						id += name[i];
					}
				}
			}
			return id;
		},

		/**
		 * Send a message to AdminPane.js to mark this widget is dirty to enable the save all button.
		 */
		_announceDirtyTab: function() {
			topic.publish("ecm.admin.AdminPane.dirtyTab", [
				this
			]);
		},

		/**
		 * Send a message to AdminPane.js to mark this widget is clean to disable the save all button.
		 */
		_announceCleanTab: function() {
			topic.publish("ecm.admin.AdminPane.cleanTab", [
				this
			]);
		},

		_iconFormatter: function(data, id, rowIndex) {
			if (!data || !lang.isString(data)) {
				data = this._iconClass;
			}
			var IconValue = function(iconClass, iconClassTitle) {
				this.iconClass = iconClass;
				this.iconClassTitle = iconClassTitle;
			};
			IconValue.prototype = new Object();
			IconValue.prototype.toString = function() {
				return '<img class="' + this.iconClass + '" title="' + this.iconClassTitle + '" alt="' + this.iconClassTitle + '" src="dojo/resources/blank.gif" /><div class="dijitHidden">' + this.iconClassTitle + '</div>';
			};
			IconValue.prototype.replace = function() {
				return this;
			};
			return new IconValue(data, this._iconClassTitle);
		},

		_localeCompare: function (a, b) {
			var result;
			
			// Check for null or defined.
			if (a == null) {
				if (b == null) {
					result = 0;
				} else {
					// Put null or undefined at the end of the list.
					// Shouldn't be here...
					result = 1;
				}
			} else {
				if (b == null) {
					// Put null or undefined at the end of the list.
					// Shouldn't be here...
					result = -1;
				} else {
					result = a.localeCompare(b);
				}
			}
			return result;
		}
	});
});
