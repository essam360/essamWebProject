/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array",
	"dojo/_base/sniff",
	"dojo/aspect",
	"dojo/dom-style",
	"dojo/dom-class",
	"dojo/dom-construct",
	"dojo/string",
	"dijit/_Widget",
	"dijit/focus",
	"dojox/html/entities",
	"idx/html",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/layout/ContentPane",
	"dijit/layout/BorderContainer",
	"dijit/layout/StackContainer",
	"dijit/layout/TabContainer",
	"dijit/form/Button",
	"ecm/widget/CheckBox",
	"ecm/widget/HoverHelp",
	"ecm/LoggerMixin",
	"ecm/MessagesMixin",
	"ecm/widget/ItemPropertiesPane",
	"idx/layout/TitlePane",
	"idx/form/Link",
	"ecm/widget/viewer/model/ViewerItem",
	"ecm/widget/dialog/ConfirmationDialog",
	"ecm/widget/dialog/StatusDialog",
	"ecm/widget/dialog/ErrorDialog",
	"ecm/widget/dialog/MessageDialog",
	"dojo/text!ecm/widget/templates/ContentListEditPane.html"
], //
function(declare, lang, array, has, aspect, domStyle, domClass, domConstruct, string, //
_Widget, focus, entities, idxHtml, // 
_TemplatedMixin, _WidgetsInTemplateMixin, //
ContentPane, BorderContainer, StackContainer, TabContainer, //
Button, CheckBox, HoverHelp, //
LoggerMixin, MessagesMixin, ItemPropertiesPane, TitlePane, Link, ViewerItem, //
ConfirmationDialog, StatusDialog, ErrorDialog, MessageDialog, //
template) {

	/**
	 * @name ecm.widget.ContentListEditPane
	 * @class Provides a widget that supports an edit properties pane for a single document.
	 * @augments dijit._Widget
	 * @since 2.0.2
	 */

	return declare("ecm.widget.ContentListEditPane", [
		BorderContainer,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		LoggerMixin,
		MessagesMixin
	], {
		/** @lends ecm.widget.viewer.ContentListEditPane.prototype */

		widgetsInTemplate: true, // has child widgets that get instantiated from the html declaration
		templateString: template,

		_isDirty: false,
		_contentList: null,
		_isReadOnly: false, // current item is readonly?
		_item: null, // current item
		_entryTemplate: null,
		design: "sidebar",

		// don't reuse any objects from any other source!!!
		repository: null,

		/**
		 * A string value of the CommonPropertiesPane class to be created. This allows plugin writers to provide a
		 * custom CommonPropertiesPane widget.
		 * 
		 * @since 2.0.2
		 */
		commonPropertiesPaneClass: "ecm/widget/CommonPropertiesPane",

		postCreate: function() {
			var methodName = "postCreate";
			this.logEntry(methodName);

			this.itemPropertiesPane.useContentClassSelector = false;
			this.itemPropertiesPane.autoScroll = false;
			this.own(aspect.after(this.itemPropertiesPane, "onChange", lang.hitch(this, "onChangeProperties"), true));
			this.own(aspect.after(this.itemPropertiesPane, "onChangeProperties", lang.hitch(this, "onChangeProperties"), true));
			this.own(aspect.after(this.itemPropertiesPane, "onCompleteRendering", lang.hitch(this, "onLoaded"), true));
			this.own(aspect.after(this.itemPropertiesPane, "onRetrySave", lang.hitch(this, "onSave"), true));

			if (this._checkedOutBy && this._checkedOutBy.domNode)
				domStyle.set(this._checkedOutBy.domNode, "display", "none");

			domClass.add(this.itemPropertiesPane._documentTypePane.domNode, "dijitTitlePaneTitleFocus");

			this._titlebarActionsNode = domConstruct.create("span", {
				"class": "editPropertiesLinkAction"
			});

			// save link
			this._saveLink = new Link({
				label: ecm.messages.save,
				tabIndex: 0,
				"class": "editPropertiesLink"
			});
			this._titlebarActionsNode.appendChild(this._saveLink.domNode);

			this.own(aspect.after(this._saveLink, "onClick", lang.hitch(this, function(/*Event*/event) {
				this.onSave();
			}), true));

			// separator
			this._sepLink = new Link({
				label: "|",
				tabIndex: -1,
				disabled: true,
				"class": "editPropertiesLink"
			});
			this._titlebarActionsNode.appendChild(this._sepLink.domNode);

			// cancel link
			this._cancelLink = new Link({
				label: ecm.messages.cancel,
				tabIndex: 0,
				"class": "editPropertiesLink"
			});
			this._titlebarActionsNode.appendChild(this._cancelLink.domNode);

			this.own(aspect.after(this._cancelLink, "onClick", lang.hitch(this, function(/*Event*/event) {
				this.onCancel();
			}), true));

			this.itemPropertiesPane._commonPropertiesTitlePane.titleBarNode.appendChild(this._titlebarActionsNode, "end");

			this._showButtons(false);
			this._enableButtons(false);

			this.logExit(methodName);
		},

		/**
		 * Destroys the widget.
		 */
		destroy: function() {
			if (this._confirmSaveChangesDialog) {
				this._confirmSaveChangesDialog.destroyRecursive();
				this._confirmSaveChangesDialog = null;
			}
			if (this._saveLink) {
				if (this._saveLink.domNode)
					this._titlebarActionsNode.removeChild(this._saveLink.domNode);
				this._saveLink.destroy();
				this._saveLink = null;
			}
			if (this._sepLink) {
				if (this._sepLink.domNode)
					this._titlebarActionsNode.removeChild(this._sepLink.domNode);
				this._sepLink.destroy();
				this._sepLink = null;
			}
			if (this._cancelLink) {
				if (this._cancelLink.domNode)
					this._titlebarActionsNode.removeChild(this._cancelLink.domNode);
				this._cancelLink.destroy();
				this._cancelLink = null;
			}
			this.inherited(arguments);
		},

		/**
		 * Item that is being used to display the properties, null if item is not set
		 * 
		 * @return {@link ecm.model.Item}
		 */
		getItem: function() {
			return this._item;
		},

		resetItem: function(item, isReadOnly, entryTemplate, propertiesReadOnly, metadataReadOnly) {
			var methodName = "resetItem";
			// Immediately clear the previous properties. 
			this.itemPropertiesPane.clearRendering(true);
			this._enableButtons(false);
			this._isReadOnly = isReadOnly;
			this.logDebug(methodName, "isReadOnly: " + this._isReadOnly);
			this._item = item;
			this._entryTemplate = null;
			if (entryTemplate) {
				this._entryTemplate = entryTemplate;
			}
			if (propertiesReadOnly){
				this._propertiesReadOnly = propertiesReadOnly;
			}
			if (metadataReadOnly){
				this._metadataReadOnly = metadataReadOnly;
			}
			if (this._item) {
				this.itemPropertiesPane.setItem(this._item, this._isReadOnly, {
					entryTemplate: this._entryTemplate,
					canModifyProperties: !this._propertiesReadOnly,
					canModifyMetadata: !this._metadataReadOnly
				});
			}
		},

		/**
		 * Set the item that will display the properties
		 * 
		 * @param item
		 *            {@link ecm.model.Item} item to retrieve to display the properties
		 * @param isReadOnly
		 *            is the item editable
		 * @param entryTemplate
		 *            A {@link ecm.model.EntryTemplate} object that should be applied when displaying properties.
		 *            (@since 2.0.3)
		 * @param propertiesReadOnly
		 *            A boolean indicating whether properties on the item are read only
		 *            @since 3.0.1
		 * @param metadataReadOnly
		 *            A boolean indicating whether metadata is read only. This only applies to Box repositories - for all 
		 *            other repository types, the value will be false.
		 *            @since 3.0.1
		 */
		setItem: function(item, isReadOnly, entryTemplate, propertiesReadOnly, metadataReadOnly) {
			var methodName = "setItem";
			this.logEntry(methodName, "repoType: " + item.repository.type);
			if (item && this._item && item.id == this._item.id) {
				this.logEntry(methodName, "same item is being set again: " + item.id);
				this.resetItem(item, isReadOnly, entryTemplate);
				this._setIsDirty(false);
			} else {
				if (this.isDirty()) {
					var onSaveCallback = lang.hitch(this, function() {
						this.logDebug(methodName, "switch to different item: " + item.name);
						this.setItem(item, isReadOnly, this._entryTemplate, this._propertiesReadOnly, this._metadataReadOnly);
					});
					var onCancelCallback = lang.hitch(this, function() {
						this.logDebug(methodName, "old selected item save was canceled: " + this._item.name);
						this.logDebug(methodName, "switch to different item: " + item.name);
						this._setIsDirty(false);
						this.setItem(item, isReadOnly, entryTemplate, propertiesReadOnly, metadataReadOnly);
					});
					this.onClose(onSaveCallback, onCancelCallback);
					return;
				} else {
					// Immediately clear the previous properties. 
					this.itemPropertiesPane.clearRendering(true);
					this._enableButtons(false);
					this._isReadOnly = isReadOnly;
					this.logDebug(methodName, "isReadOnly: " + this._isReadOnly);
					this._item = item;
					this._entryTemplate = null;
					if (entryTemplate) {
						this._entryTemplate = entryTemplate;
					}
					if (propertiesReadOnly){
						this._propertiesReadOnly = propertiesReadOnly;
					}
					if (metadataReadOnly){
						this._metadataReadOnly = metadataReadOnly;
					}
					if (this._item) {
						this.itemPropertiesPane.setItem(this._item, this._isReadOnly, {
							entryTemplate: this._entryTemplate,
							canModifyProperties: !this._propertiesReadOnly,
							canModifyMetadata: !this._metadataReadOnly
						});
						this._setIsDirty(false);
					}
				}

				var checkedOutByOther = (item.locked && item.lockedUser) ? (item.repository.userId.toUpperCase() != item.lockedUser.toUpperCase()) : false;
				this.logDebug(methodName, "checkedOutByOther: " + (checkedOutByOther ? "true - " + item.lockedUser : "false"));
				if (checkedOutByOther) {
					this._showButtons(false);
					//this._checkedOutBy.display = "visible";
					//this._checkedOutBy.innerHTML = string.substitute(this.messages.checked_out_icon_title, [
					//	item.lockedUser
					//]);
				} else {
					//this._checkedOutBy.display = "none";
					this._showButtons(true);
					//this._checkedOutBy.innerHTML = "";
				}
			}
			this.logExit(methodName);
		},

		/**
		 * Callback when the item properties are loaded Sets button and flag state plus forces a redraw of the
		 * properties container
		 */
		onLoaded: function() {
			var methodName = "onLoaded";
			this.logDebug(methodName, "item has loaded");
			this.inherited(arguments);
			this._showButtons(!this._isReadOnly);
			this.isValid(true, true, false);
		},

		/**
		 * Indicates if something has changed in the properties pane
		 */
		isDirty: function() {
			return this.getItem() && this._isDirty && (domStyle.get(this.domNode, "display") !== "none");
		},

		/**
		 * @private
		 * @param {boolean}
		 *            [bool=false]
		 */
		_setIsDirty: function(bool) {
			var methodName = "_setIsDirty";
			var was = this._isDirty;
			var is = undefined;
			if (bool == undefined || bool == false) {
				is = false;
			} else {
				is = true;
			}
			this._isDirty = is;
			if (was != is) {
				this.logDebug(methodName, "isDirty toggled from " + was + " to " + is);
			}
		},

		/**
		 * @private
		 * @param {boolean}
		 *            [show=true]
		 */
		_showButtons: function(show) {
			var methodName = "_showButtons";
			this.logDebug(methodName, "display: " + show);
			if (show != undefined && show == false) {
				domStyle.set(this._saveButton.domNode, "display", "none");
				domStyle.set(this._cancelButton.domNode, "display", "none");
//				if (this._checkedOutBy && this._checkedOutBy.domNode) // toggle the checked out
//					domStyle.set(this._checkedOutBy.domNode, "display", "");

				//domStyle.set(this._cancelLink.domNode, "display", "none");
			} else {
				//domStyle.set(this._saveButton.domNode, "display", "");
				//domStyle.set(this._cancelButton.domNode, "display", "");
				if (this._checkedOutBy && this._checkedOutBy.domNode) // toggle the checked out
					domStyle.set(this._checkedOutBy.domNode, "display", "none");
			}
		},

		/**
		 * @private
		 * @param {boolean}
		 *            [enabled=true]
		 */
		_enableButtons: function(enabled) {
			var methodName = "_enableButtons";
			enabled = (enabled != undefined) ? enabled : true;

			this.logDebug(methodName, "enable: " + enabled);
			this._saveButton.set("disabled", !enabled);
			this._cancelButton.set("disabled", false); // always enabled

			domStyle.set(this._saveLink.domNode, "display", (enabled ? "" : "none"));
			domStyle.set(this._sepLink.domNode, "display", (enabled ? "" : "none"));
		},

		/**
		 * Callback when an item property has changed, Sets button and flag state
		 */
		onChangeProperties: function(evt) {
			var methodName = "onChangeProperties";
			//if (evt && evt.target) { // onChange sometimes firing extra
			// Don't force the focus while a user is modifying property values.
			// Focus will be set to the first invalid input when Save is clicked.
			if (this.isValid(false, true, false)) {
				if (!this._isReadOnly) {
					this.logDebug(methodName, "some attribute changed");
					this._setIsDirty(true);
					this._enableButtons(true);
				}
			} else {
				this.logDebug(methodName, "invalid values are present");
				this._setIsDirty(true);
				// Always enable and display the Save button when properties have changed.
				// Focus will be directed to invalid input when the Save button is clicked.
				this._enableButtons(true);
			}
			//}
		},

		/**
		 * check if the properties are all valid
		 * 
		 * @param {Boolean}
		 *            focus set focus to the field if an error occurs
		 * @param {Boolean}
		 *            onEditStatus flag if the item is in edit mode
		 * @param {Boolean}
		 *            onSaveStaus flag if the item is in save mode for this class, always using (true, false, false)
		 * @returns boolean true if all fields are valid
		 */
		isValid: function(focus, onEditStatus, onSaveStatus) {
			var methodName = "isValid";
			var errorField = this.itemPropertiesPane.validate(focus, onEditStatus, onSaveStatus);
			this.logDebug(methodName, "errorField: " + errorField);
			return (errorField ? false : true);
		},

		/**
		 * handle saving and closing of the item properties onSave() is connected to the Save button for this dialog
		 * else use this onClose()
		 * 
		 * @param {function}
		 *            [onSaveCallback] function invoked if the save is successful
		 * @param {function}
		 *            [onCancelCallback] function invoked when the save is canceled
		 */
		onClose: function(onSaveCallback, onCancelCallback) {
			var methodName = "onClose";
			this.logEntry(methodName);
			var item = this.itemPropertiesPane.getItem();
			if (this.isDirty()) {
				this.logDebug(methodName, "call save of: " + item.name);
				// needs to fail on new item properties load until dirty one is saved or canceled
				this._enableButtons(false);
				// _save is asynchronous
				this._save(item, onSaveCallback, onCancelCallback, true);
			} else {
				// should not get here if buttons are managed correctly
				this.logDebug(methodName, "not dirty: " + item.name);
				this.logDebug(methodName, "ok'd to close: " + item.name);
				// does anything need to be cleaned up
			}
			this.logExit(methodName);
		},

		/**
		 * reset action when the Reset button is selected
		 */
		onCancel: function() {
			var methodName = "onCancel";
			this.logEntry(methodName);
			this._enableButtons(false);
			this._setIsDirty(false);
			this.resetItem(null, this._isReadOnly, this._entryTemplate, this._propertiesReadOnly, this._metadataReadOnly);
			this.logExit(methodName);
		},

		/**
		 * onSave is connected to the Save button for this dialog else use onClose no callbacks are defined for Save
		 * button press no callbacks defined for button press
		 */
		onSave: function() {
			var methodName = "onSave";
			this.logEntry(methodName);
			var item = this.itemPropertiesPane.getItem();
			this.logDebug(methodName, "item: " + item);
			// process the save then clean up
			this.logDebug(methodName, "isDirty: " + this.isDirty());
			if (this.isDirty()) {
				// disable the save button during saving operation
				this._enableButtons(false);

				this.logDebug(methodName, "isDirty and do not go to next");
				var onSaveCallback = lang.hitch(this, function(item) {
					this.logDebug(methodName, "item saved: " + item.name);
					this._setIsDirty(false);
					//ecm.model.desktop.onChange();
				});
				var onCancelCallback = lang.hitch(this, function(item) {
					this.logDebug(methodName, "item cancelled: " + item.name);
					this._setIsDirty(false);
				});
				this._save(item, onSaveCallback, onCancelCallback, false);
			} else {
				this.logDebug(methodName, "Save not required");
			}

			this.logExit(methodName);
		},

		/**
		 * @private open a dialog if prompt == true else execute the save
		 */
		_save: function(item, onSaveCallback, onCancelCallback, prompt) {
			var methodName = "_save";

			if (this._isReadOnly) {
				this.logEntry(methodName, "item state is read only: " + item.name);
				// set not dirty and continue on with whatever the callback operation is on a successful save
				this._setIsDirty(false);
				if (onSaveCallback && onSaveCallback != null) {
					onSaveCallback(item);
				}
			} else if (this.isValid(true, true, true)) {

				// by the time processing gets here - isDirty has already been checked
				this.logEntry(methodName, "start processing a save of: " + item.name);

				if (prompt == true) {
					var executeCalled = false;
					if (this._confirmSaveChangesDialog)
						this._confirmSaveChangesDialog.destroy();

					this._confirmSaveChangesDialog = new ConfirmationDialog({
						title: ecm.messages.viewer_editproperties_title,
						cancelButtonLabel: ecm.messages.no,
						text: string.substitute(ecm.messages.viewer_editproperties_prompt_save_changes, [
							!this.textDir ? item.name : this.enforceTextDirWithUcc(null, item.name)
						]),
						onExecute: lang.hitch(this, function() {
							this.logDebug(methodName, "onYes: execute save on: " + item.name);
							executeCalled = true;
							this._confirmSaveChangesDialog.hide();
							this._executeItemSave(item, onSaveCallback, onCancelCallback);
						}),
						onCancel: lang.hitch(this, function() {
							this.logDebug(methodName, "onCancel: " + item.name);
							// ??? this.onCancel();
							executeCalled = true;
							//set not dirty and continue on with the callback operation
							this._confirmSaveChangesDialog.hide();
							this._setIsDirty(false);
							if (onCancelCallback && onCancelCallback != null) {
								onCancelCallback();
							}
						}),
						onShow: lang.hitch(this, function() {
							this.logDebug(methodName, "onShow: " + item.name);
						}),
						onHide: lang.hitch(this, function() {
							this.logDebug(methodName, "onCancel: " + item.name);
							if (!executeCalled && onCancelCallback && onCancelCallback != null) {
								onCancelCallback();
								executeCalled = true;
							}
							this._enableButtons(true);
						})
					});
					this._confirmSaveChangesDialog.show();
				} else {
					this._executeItemSave(item, onSaveCallback, onCancelCallback);
				}
			} else {
				// Not valid. Enable the Save button so that the save can be attempted again.
				this._enableButtons(true);
			}

			this.logExit(methodName);
		},

		/**
		 * @private _save calls this function to execute the save locks the item if needed
		 */
		_executeItemSave: function(item, onSaveCallback, onCancelCallback) {
			var methodName = "_executeItemSave";
			this._executingItemSave = true;
			this.logEntry(methodName, "execute save on: " + item.name + ", last modified: " + item.getModifyDate());
			focus.focus(this.itemPropertiesPane._commonPropertiesTitlePane.focusNode);

			// Was the item locked - item must be locked for cm to save it
			if (!item.locked && item.repository.type == "cm") {
				this.logDebug(methodName, "lock: " + item.name);
				// check out before updating
				var items = [];
				items.push(item);
				item.repository.lockItems(items, lang.hitch(this, function(itemRowsJSON) {
					if (this.itemPropertiesDisplayPane && (!this.itemPropertiesDisplayPane._hasSystemProperties(item) || this.itemPropertiesDisplayPane._missingHiddenProperties(item))) {
						this._item.retrieveAttributes(lang.hitch(this, function() {
							this._itemSaveCallback(item, onSaveCallback, onCancelCallback, true);
						}), true, false, lang.hitch(this, function(response, errors) {
							delete this._executingItemSave;
							this.itemPropertiesDisplayPane._retrieveAttributesFailed(response, errors)
						}));
					} else {
						this._itemSaveCallback(item, onSaveCallback, onCancelCallback, true);
					}
				}), null, lang.hitch(this, function(response, errors) {
					delete this._executingItemSave;
				}));
			} else {
				this._itemSaveCallback(item, onSaveCallback, onCancelCallback, false);
			}
			this.logExit(methodName);
		},

		/**
		 * @private execute save function saves the item properties and if error then processes the cancel callback also
		 *          handles unlocking the item if it was saved in an unlocked state
		 */
		_itemSaveCallback: function(item, onSaveCallback, onCancelCallback, itemCheckedOutForEdit) {
			var methodName = "_itemSaveCallback";
			// Include all read only, hidden, and empty property values.
			var properties = this.itemPropertiesPane.getPropertiesJSON(true, true, false);
			var childComponentValues = this.itemPropertiesPane.getChildComponentValues();
			var contentClass = this.itemPropertiesPane.getContentClass();
			var permissions = null;
			var params = {
					templateMetadata: this.itemPropertiesPane.getTemplateMetadataValues()
			};

			this.logDebug(methodName, "start saveAttributes: " + item.name);
			
			// Set the _isDirty flag to false to prevent false-positives if another process inspects its value while
			// the attributes are bing saved (note that the flag is set back to true if any errors occur bellow)
			this._setIsDirty(false);
			try {
				item.saveAttributes(properties, contentClass.id, childComponentValues, permissions, false, lang.hitch(this, function(response) {
					this.logDebug(methodName, "response: " + response);
					// Stop ignoring item changes. This handler is called for both success and error, since no error callback was provided.
					delete this._executingItemSave;

					if (response && response.errors) {//this error is already displayed in a dialog and logged
						this._setIsDirty(true);
						this._enableButtons(true);

						if (onCancelCallback && onCancelCallback != null) {
							onCancelCallback();
						}
					} else if (response && response.fieldErrors && response.fieldErrors.length > 0) {
						var fieldErrorMap = {};
						array.forEach(response.fieldErrors, function(fieldError, i) {
							this.logDebug(methodName, "*** save error[" + i + "]: " + fieldError);
							this.itemPropertiesPane.setFieldError(fieldError.symbolicName, fieldError.errorMessage, fieldError.invalidItems);
							fieldErrorMap[fieldError.symbolicName] = fieldError;
						}, this);

						this._setIsDirty(true);
						this._enableButtons(true);

						// Set the focus to the first invalid field, in the layout order.
						array.some(properties, function(prop) {
							if (fieldErrorMap[prop.name] == null) {
								return false;
							}
							this.itemPropertiesPane.setFieldFocus(prop.name);
							return true;
						}, this);

						// Don't call the cancel callback, we're still editing.
					} else if (response && response.templateMetadataErrors && response.templateMetadataErrors.length) {
						// Update fields with errors
						array.forEach(response.templateMetadataErrors, function(templateMetadataError) {
							array.forEach(templateMetadataError.fieldErrors, function(fieldError) {
								this.itemPropertiesPane.setTemplateMetadataFieldError(templateMetadataError.id, fieldError.symbolicName, fieldError.errorMessage);
							}, this);
						}, this);
						this._setIsDirty(true);
						this._enableButtons(true);
						
						// Set the focus on the first invalid field
						this.itemPropertiesPane.setTemplateMetadataFieldFocus(response.templateMetadataErrors[0].id, response.templateMetadataErrors[0].fieldErrors[0].symbolicName);
					} else {
						if (response != null && response.rows && response.rows[0] != null) {
							this.logDebug(methodName, "response saved: " + response.rows[0].id);
						} else {
							this.logDebug(methodName, "item saved: " + item.name);
						}

						this._setIsDirty(false);
						this._enableButtons(false);

						if (item.repository.type == "cm") {
							// If the item was checked out for the edit, unlock it.
							if (itemCheckedOutForEdit) {
								this.logDebug(methodName, "unlock: " + item.name);
								item.repository.unlockItems([
									item
								], null, lang.hitch(this, function(response, errors) {
									// Changes have been ignored until now, notify self that the item has changed to update the fields.
									item.repository.onChange([
										item
									]);
								}));
							} else {
								this.logDebug(methodName, "relock: " + item.name);
								// check out before updating
								var items = [];
								items.push(item);
								item.repository.lockItems(items, lang.hitch(this, function(itemRowsJSON) {
									this.logDebug(methodName, "relocked: " + item.name);
								}), null, lang.hitch(this, function(response, errors) {
									// Changes have been ignored until now, notify self that the item has changed to update the fields.
									item.repository.onChange([
										item
									]);
								}));
							}
						} else {
							// Changes have been ignored until now, notify self that the item has changed to update the fields.
							item.repository.onChange([
								item
							]);
						}

						if (onSaveCallback && onSaveCallback != null) {
							// item refresh or other actions are needed in the callback
							this.logDebug(methodName, "calling onSaveCallback()");
							onSaveCallback(item);
						}

						this.logDebug(methodName, "completed saving item: " + item.id);
					}
				}), null, null, params);

			} catch (e) {
				this.logError(methodName, e);
				this._setIsDirty(true);
			}
			// will trigger to switch from edit to readonly mode
			//this.onCancel();
			this.logExit(methodName);
		}
	});
});
