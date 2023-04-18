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
	"dojo/string",
	"dijit/_Widget",
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
	"ecm/widget/viewer/model/ViewerItem",
	"ecm/widget/dialog/ConfirmationDialog",
	"ecm/widget/dialog/YesNoCancelDialog",
	"ecm/widget/dialog/StatusDialog",
	"ecm/widget/dialog/ErrorDialog",
	"ecm/widget/dialog/MessageDialog",
	"dojo/text!./templates/ContentViewerEditPaneTab.html"
], //
function(declare, lang, array, has, aspect, domStyle, domClass, string, //
_Widget, entities, idxHtml, // 
_TemplatedMixin, _WidgetsInTemplateMixin, //
ContentPane, BorderContainer, StackContainer, TabContainer, //
Button, CheckBox, HoverHelp, //
LoggerMixin, MessagesMixin, ItemPropertiesPane, ViewerItem, //
ConfirmationDialog, YesNoCancelDialog, StatusDialog, ErrorDialog, MessageDialog, //
template) {

	/**
	 * @name ecm.widget.viewer.ContentViewerEditPaneTab
	 * @class Provides a widget that supports an edit properties pane for a single document in the content viewer
	 * @private this widget is tightly tied into the content viewer actions - reuse is not recommended
	 * @augments dijit._Widget
	 * @since 2.0.1
	 */

	return declare("ecm.widget.viewer.ContentViewerEditPaneTab", [
		ContentPane,
		_Widget,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		LoggerMixin,
		MessagesMixin
	], {
		/** @lends ecm.widget.viewer.ContentViewerEditPaneTab.prototype */

		widgetsInTemplate: true, // has child widgets that get instantiated from the html declaration
		templateString: template,

		_isDirty: false,
		_contentViewer: null,
		_viewerTab: null,
		_isReadOnly: false,
		_propertiesReadOnly: false,
		_metadataReadOnly: false,
		_entryTemplate: null,

		/**
		 * @private
		 */
		postCreate: function() {
			var methodName = "postCreate";
			this.logEntry(methodName);
			this.itemPropertiesPane.useContentClassSelector = false;
			this.itemPropertiesPane.reason = "viewEditProperties"; // Set the property rendering mode to use default width rendering for values

			// for ItemPropertiesPane
			this.own(aspect.after(this.itemPropertiesPane, "onChange", lang.hitch(this, "onChange"), true));
			this.own(aspect.after(this.itemPropertiesPane, "onChangeProperties", lang.hitch(this, "onChangeProperties"), true));
			this.own(aspect.after(this.itemPropertiesPane, "onCompleteRendering", lang.hitch(this, "onLoaded"), true));
			this.own(aspect.after(this.itemPropertiesPane, "onRetrySave", lang.hitch(this, "onSave"), true));

			this._showButtons(false);
			this.textDir = has("text-direction");

			this.logExit(methodName);
		},

		/**
		 * Need a reference to the content viewer for the Get Next item and to layout the panels correctly only applies
		 * to the ContentViewer
		 * 
		 * @param parent
		 *            {@link ecm.widget.viewer.ContentViewer}
		 */
		setParent: function(parent) {
			var methodName = "setParent";
			this._contentViewer = parent;
			if (this._contentViewer && this._contentViewer != null) { //ecm.widget.viewer.ContentViewer
				this.logDebug(methodName, "parent set: " + this._contentViewer.declaredClass);
			}
		},

		/**
		 * Item that is being used to display the properties, null if item is not set
		 * 
		 * @return {@link ecm.model.Item}
		 */
		getItem: function() {
			return (this.itemPropertiesPane != null) ? this.itemPropertiesPane._item : null;
		},

		/**
		 * Set the item that will display the properties
		 * 
		 * @param item
		 *            {@link ecm.model.Item} item to retrieve to display the properties
		 * @param viewerTab
		 *            {@link ecm.widget.viewer.ContentViewerTab} reference needed to check the viewer state for
		 *            annotation changes
		 */
		setItem: function(item, viewerTab) {
			var methodName = "setItem";
			this.logEntry(methodName, "repoType: " + item.repository.type);

			// Immediately clear the previous properties.
			this.itemPropertiesPane.clearRendering(true);

			this._setIsDirty(false);
			this._enableButtons(false);
			this._renderingComplete=false;

			this._viewerTab = viewerTab;
			this.logDebug(methodName, "viewerPane set: " + this._viewerTab.declaredClass);

			if (item.repository._isCM()){
				this._isReadOnly = !item.hasPrivilege("privEditProperties") || !item.hasPrivilege("privCheckOutDoc");
				this._propertiesReadOnly = this._isReadOnly;
				this._metadataReadOnly = true;
			}
			else if (item.repository._isBox()){
				this._propertiesReadOnly = !item.hasPrivilege("privEditProperties");
				if (item.isFolder()){
					this._metadataReadOnly = !item.hasPrivilege("privAddToFolder");
				}
				else if (item.locked){
					this._metadataReadOnly = !item.hasPrivilege("privCheckInDoc");
				}
				else {
					this._metadataReadOnly = !item.hasPrivilege("privCheckOutDoc");
				}
				this._isReadOnly = (this._propertiesReadOnly && this._metadataReadOnly)
			}
			else {
				this._isReadOnly = !item.hasPrivilege("privEditProperties");
				this._propertiesReadOnly = this._isReadOnly;
				this._metadataReadOnly = true;
			}
			this.logDebug(methodName, "isReadOnly: " + this._isReadOnly);
			this.logDebug(methodName, "propertiesReadOnly: " + this._propertiesReadOnly);
			this.logDebug(methodName, "metadataReadOnlyReadOnly: " + this._metadataReadOnly);

			var checkedOutByOther = (item.locked && item.lockedUser) ? (item.repository.userId.toUpperCase() != item.lockedUser.toUpperCase()) : false;
			this.logDebug(methodName, "checkedOutByOther: " + (checkedOutByOther ? "true - " + item.lockedUser : "false"));
			this._isReadOnly = (this._isReadOnly | checkedOutByOther) == 0 ? false : true;
			this._propertiesReadOnly = (this._propertiesReadOnly | checkedOutByOther) == 0 ? false : true;
			this._metadataReadOnly = (this._metadataReadOnly | checkedOutByOther) == 0 ? false : true;

			// Look to see if this item has an entry template associated
			var entryTemplateId = item.entryTemplateId;
			if (entryTemplateId && (entryTemplateId.length > 0)) {
				var entryTemplate = item.repository.getEntryTemplateById(entryTemplateId);
				var propertiesEntryTemplateRetrievedHandler = lang.hitch(this, function(entryTemplate) {
					if (!entryTemplate.isRetrieved) {
						this._retrieveAttributes(item, null);
					} else if (entryTemplate.useForViewerProperties) {
						this._retrieveAttributes(item, entryTemplate);
						this._entryTemplate = entryTemplate; // Used for Reset action
					} else {
						this._retrieveAttributes(item, null);
					}
				});

				if (!entryTemplate.isRetrieved) {
					entryTemplate.retrieveEntryTemplate(propertiesEntryTemplateRetrievedHandler, false, true);
				} else {
					propertiesEntryTemplateRetrievedHandler(entryTemplate);
				}
			} else {
				this._retrieveAttributes(item, null);
			}
			this.logExit(methodName);
		},

		/**
		 * @private
		 */
		_retrieveAttributes: function(item, entryTemplate) {
			var methodName = "_retrieveAttributes";
			item.retrieveAttributes(lang.hitch(this, function(itemWithAttrs) {
				this.logDebug(methodName + "-Callback", "loaded item: " + itemWithAttrs.name + ", last modified: " + itemWithAttrs.getModifyDate());
				if(item.id == this._viewerTab.viewerItem.item.id || (this._viewerTab.viewerItem.item.contentElementParentId && item.id == this._viewerTab.viewerItem.item.contentElementParentId))
					this.itemPropertiesPane.setItem(itemWithAttrs, this._isReadOnly, {
						entryTemplate: entryTemplate,
						canModifyProperties: !this._propertiesReadOnly,
						canModifyMetadata: !this._metadataReadOnly
					});
			}), false);
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
			
			// Resize the properties pane now that it is rendered.
			this.itemPropertiesPane.resize();

			// Resize the parent content viewer layout.
			if (this._contentViewer) {
				this._contentViewer.mainBorderContainer.layout();
				this._contentViewer.mainBorderContainer.resize();
			}
			this._setIsDirty(false);
			this.enableButtons(false);
			this._renderingComplete = true;
		},
		
		_handleChange: function(evt) {
			var methodName = "_handleChange";
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
		},
		
		/**
		 * Callback when an item property has changed Sets button and flag state
		 */
		onChange: function(evt) {
			if(this._renderingComplete)
				this._handleChange(evt);
		},

		/**
		 * Callback when an item property has changed Sets button and flag state
		 */
		onChangeProperties: function(evt) {
			if(this._renderingComplete)
				this._handleChange(evt);
		},

		/**
		 * Handle saving and closing of the item properties onSave() is connected to the Save button for this dialog
		 * else use onClose()
		 * 
		 * @param {function}
		 *            [onProceedCallback] function invoked if processing should proceed
		 * @param {function}
		 *            [onCancelCallback] function invoked when processing should cancel
		 */
		onClose: function(onProceedCallback, onCancelCallback) {
			if (this._isDirty) {
				if (this.isValid(true, true, true)) {
					this._onClose(onProceedCallback, onCancelCallback);
				} else {
					this._onCloseInvalid(onProceedCallback, onCancelCallback);
				}
			} else {
				// should not get here if buttons are managed correctly unless multiple edit tabs are used
				this.logDebug(methodName, "not dirty: " + item.name);
				this.logDebug(methodName, "ok'd to close: " + item.name);
				// does anything need to be cleaned up
			}
		},

		_onClose: function(onSaveCallback, onCancelCallback) {
			var methodName = "onClose";
			this.logEntry(methodName);
			var item = this.itemPropertiesPane._item;
			this.logDebug(methodName, "call save of: " + item.name);
			// needs to fail on new item properties load until dirty one is saved or canceled
			this._enableButtons(false);
			// _save is asynchronous
			this._save(item, onSaveCallback, onCancelCallback, true);
			this.logExit(methodName);
		},

		_onCloseInvalid: function(onDiscardCallback, onKeepEditingCallback) {
			var methodName = "onCloseInvalid";
			this.logEntry(methodName);
			var item = this.itemPropertiesPane._item;
			this.logDebug(methodName, "ask to discard or not changes of: " + item.name);
			// confirmation dialog
			if (this._confirmDiscardChangesDialog)
				this._confirmDiscardChangesDialog.destroyRecursive();

			var executeCalled = false;

			this._confirmDiscardChangesDialog = new ConfirmationDialog({
				title: ecm.messages.viewer_editproperties_title_warning,
				cancelButtonLabel: ecm.messages.no,
				text: string.substitute(ecm.messages.viewer_editproperties_prompt_discard_changes, [
					item.name
				]),
				onExecute: lang.hitch(this, function() { // keep editing
					executeCalled = true;
					this._confirmDiscardChangesDialog.hide();
					// focus and show error tooltip of the first invalid property
					this.isValid(true, true, true);
					// callback
					if (onKeepEditingCallback && onKeepEditingCallback != null) {
						onKeepEditingCallback();
					}
				}),
				onCancel: lang.hitch(this, function() { // discard
					executeCalled = true;
					this._confirmDiscardChangesDialog.hide();
					// ignore changes
					this._setIsDirty(false);
					this._enableButtons(false);
					// callback
					if (onDiscardCallback && onDiscardCallback != null) {
						onDiscardCallback();
					}
				}),
				onShow: lang.hitch(this, function() {
				}),
				onHide: lang.hitch(this, function() {
					if (!executeCalled && onKeepEditingCallback && onKeepEditingCallback != null) {
						onKeepEditingCallback();
						executeCalled = true;
					}
				})
			});
			domClass.add(this._confirmDiscardChangesDialog.domNode, "ecmConfirmationWarningDialog viewerConfirmationDialog");
			this._confirmDiscardChangesDialog.show();
			this.logExit(methodName);
		},

		/**
		 * Indicates if something has changed in the properties pane
		 */
		isDirty: function() {
			return this._isDirty;
		},

		_okToClose: function() {
			return !this.isDirty();
		},

		/**
		 * @deprecated As of 2.0.2. This method will be made private.
		 */
		setIsDirty: function(bool) {
			this._setIsDirty(bool);
		},

		/**
		 * @deprecated As of 2.0.2. This method will be made private.
		 */
		showButtons: function(show) {
			this._showButtons(show);
		},

		/**
		 * @deprecated As of 2.0.2. This method will be made private.
		 */
		enableButtons: function(enabled) {
			this._enableButtons(enabled);
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
				domStyle.set(this._resetButton.domNode, "display", "none");
				domStyle.set(this._SaveThenGetNextPane.domNode, "display", "none");
			} else {
				domStyle.set(this._saveButton.domNode, "display", "");
				domStyle.set(this._resetButton.domNode, "display", "");
				if ( this._viewerTab.viewerItem.item.contentElementParentId ) {
					domStyle.set(this._SaveThenGetNextPane.domNode, "display", "none");
				} else {			
					domStyle.set(this._SaveThenGetNextPane.domNode, "display", "");
				}
			}
		},

		/** @private */
		layout: function() {
			this.inherited(arguments);
			this.itemPropertiesPane.layout();
			this.itemPropertiesPane.resize();
		},

		resize: function() {
			this.inherited(arguments);
			this.itemPropertiesPane.layout();
			this.itemPropertiesPane.resize();
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
			if (enabled == false) {
				this._saveButton.set("disabled", true);
				this._resetButton.set("disabled", true);
			} else {
				this._saveButton.set("disabled", false);
				this._resetButton.set("disabled", false);
			}
		},

		/**
		 * reset action when the reset button is selected, this function is invoked
		 */
		onReset: function() {
			var methodName = "onReset";
			this.logEntry(methodName);
			
			// unset the isDirty flag until item modified again
			this._setIsDirty(false);
			this._enableButtons(false);
			this._renderingComplete = false;

			// process the reset then clean up
			var item = this.itemPropertiesPane._item;
			this.logDebug(methodName, "item: " + item);
			this._executeItemReset(item, this._isReadOnly, lang.hitch(this, function(item, isReadOnly) {
				var methodName = "onResetCallback";
				this.logDebug(methodName, "reset item: " + item.name);
				this.itemPropertiesPane.setItem(item, isReadOnly, {
					entryTemplate: this._entryTemplate,
					canModifyProperties: !this._propertiesReadOnly,
					canModifyMetadata: !this._metadataReadOnly
				});
				this.logDebug(methodName, "completed reset of item: " + item.name);
			}));

			this.logExit(methodName);
		},

		/**
		 * flag indicating that if checked that on saving the current item then automatically load the next item from
		 * the results list the loaded item is not necessarily from the selected items in the list
		 */
		onSaveThenGetNext: function() {
			var methodName = "onSaveThenGetNext";
			this.logDebug(methodName, "set perform SaveThenGetNext: " + this._SaveThenGetNext.get('checked'));
			return this._SaveThenGetNext.get('checked');
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
		 * onSave is connected to the Save button for this dialog else use onClose no callbacks are defined for Save
		 * button press
		 */
		onSave: function() {
			var methodName = "onSave";
			this.logEntry(methodName);
			var item = this.itemPropertiesPane._item;
			this.logDebug(methodName, "item: " + item);
			// process the save then clean up
			this.logDebug(methodName, "isDirty: " + this._isDirty);
			if (this._isDirty) {
				// disable the save button during saving operation
				this._enableButtons(false);

				if (this._SaveThenGetNext.get('checked')) {
					// no prompt for next item if pressed the Save button
					this.logDebug(methodName, "save then get next item after: " + item.name);
					var onSaveCallback = lang.hitch(this, function(item) {
						this.logDebug(methodName, "item saved - go to next item");
						this._contentViewer.navigateNextHit(null, false);
					});
					var onCancelCallback = null;
					this._save(item, onSaveCallback, onCancelCallback, false);
				} else {
					this.logDebug(methodName, "isDirty and do not go to next");
					var onSaveCallback = lang.hitch(this, function(item) {
						this.logDebug(methodName, "item saved: " + item.name);
						this._viewerTab.openItem(new ViewerItem(item));
						this._viewerTab.refreshViewer();
					});
					var onCancelCallback = null;
					this._save(item, onSaveCallback, onCancelCallback, false);
				}
			} else {
				this.logDebug(methodName, "Save is enabled when it should not be");
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

					if (this._confirmDialog) {
						this._confirmDialog.destroyRecursive(false);
					}

					this._confirmDialog = new YesNoCancelDialog({
						title: ecm.messages.viewer_editproperties_title,
						text: string.substitute(ecm.messages.viewer_editproperties_prompt_save_changes, [
							!this.textDir ? item.name : this.enforceTextDirWithUcc(null, item.name)
						]),
						onYes: lang.hitch(this, function() {
							this.logDebug(methodName, "onYes: execute save on: " + item.name);
							executeCalled = true;
							this._confirmDialog.hide();

							this._executeItemSave(item, onSaveCallback, onCancelCallback);
						}),
						onNo: lang.hitch(this, function() {
							this.logDebug(methodName, "onNo: " + item.name);
							executeCalled = true;
							// set not dirty and continue on with whatever the callback operation is on a successful save
							this._confirmDialog.hide();
							this._setIsDirty(false);
							if (onSaveCallback && onSaveCallback != null) {
								onSaveCallback(item);
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
					domClass.add(this._confirmDialog.domNode, "ecmConfirmationWarningDialog viewerConfirmationDialog");

					this._confirmDialog.show();
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
			this.logEntry(methodName, "execute save on: " + item.name + ", last modified: " + item.getModifyDate());

			// Was the item locked, or was it locked by the viewer...
			var itemLocked = item.locked || this._viewerTab.contentViewerPane.isLocked();

			this.logDebug(methodName, "appletPane isDirty: " + this._viewerTab.contentViewerPane.isDirty());
			if (!this._viewerTab.contentViewerPane.isDirty() && !itemLocked && item.repository.type == "cm") {
				this.logDebug(methodName, "lock: " + item.name);
				// check out before updating
				var items = [];
				items.push(item);
				item.repository.lockItems(items, lang.hitch(this, function(itemRowsJSON) {
					this._itemSaveCallback(item, onSaveCallback, onCancelCallback, true);
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
			var params = {
					templateMetadata: this.itemPropertiesPane.getTemplateMetadataValues()
			};
			var contentClass = this.itemPropertiesPane.getContentClass();
			var permissions = null;

			this.logDebug(methodName, "start saveAttributes: " + item.name);
			try {
				
				// Keep track of whether template metadata is being changed.
				var templatesUpdated = false;
				if (params.templateMetadata) {
					templatesUpdated = true;
				}
				
				item.saveAttributes(properties, contentClass.id, childComponentValues, permissions, false, lang.hitch(this, function(response, isReindex) {

					this.logDebug(methodName, "response: " + response);
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

						this.logDebug(methodName, "viewerPane isDirty: " + this._viewerTab.contentViewerPane.isDirty());
						if (item.repository.type == "cm") {
							if (!this._viewerTab.contentViewerPane.isDirty()) {
								// If the item was checked out for the edit, unlock it.
								if (itemCheckedOutForEdit) {
									this.logDebug(methodName, "unlock: " + item.name);
									item.repository.unlockItems([
										item
									]);
								}
							} else {
								this.logDebug(methodName, "completed saved item: " + item.id);
								this.logDebug(methodName, "relock: " + item.name);
								// check out before updating
								var items = [];
								items.push(item);
								item.repository.lockItems(items, lang.hitch(this, function(itemRowsJSON) {
									this.logDebug(methodName, "relocked: " + item.name);
								}));
							}
						}

						// replace not only the pid, replace the item so the title and attributes get updated
						this.logDebug(methodName, "onChange: " + item.name);

						// notify search that the item has changed - with reindex the item pid changed?
						item.repository.onChange([
							item
						]);

						this._saveOrDiscardViewerChanges(item, lang.hitch(this, function() {
							// need to update the viewer tab title as well
							this.logDebug(methodName, "replace tab item: " + item.name);

							if (onSaveCallback && onSaveCallback != null) {
								// item refresh or other actions are needed in the callback
								this.logDebug(methodName, "calling onSaveCallback()");
								onSaveCallback(item);
							}

							// If there was an original ICN desktop source item, update it 
							// so that the ICN desktop display of the item is refreshed.
							if (item.origItem) {
								if (lang.isFunction(item.origItem._saveAttributesCompleted)) {
									// Preferred - this handles id changes.
									item.origItem._saveAttributesCompleted(response, isReindex, null, templatesUpdated);
								} else {
									item.origItem.retrieveAttributes(null, true);
								}
							}
						}));
					}
				}), null, null, params);

			} catch (e) {
				this.logError(methodName, e);
			}
			this.logExit(methodName);
		},

		_saveOrDiscardViewerChanges: function(item, completedCallback) {
			var methodName = "_saveOrDiscardViewerChanges";
			var docViewer = this._viewerTab.contentViewerPane.docViewer;
			if (docViewer.isDirty() && !docViewer.ignoreDirty()) {
				if (this._saveOrDiscardViewerDialog) {
					this._saveOrDiscardViewerDialog.destroyRecursive(false);
				}

				var executeCalled = false;
				this._saveOrDiscardViewerDialog = new ConfirmationDialog({
					title: ecm.messages.viewer_editproperties_title,
					cancelButtonLabel: ecm.messages.no,
					text: string.substitute(ecm.messages.viewer_prompt_save_changes, [
						!this.textDir ? item.name : this.enforceTextDirWithUcc(null, item.name)
					]),
					onExecute: lang.hitch(this, function() {
						this.logDebug(methodName, "onExecute: execute annotation save on: " + item.name);
						executeCalled = true;
						this._saveOrDiscardViewerDialog.hide();

						docViewer.saveAnnotations(lang.hitch(this, function() {
							if (completedCallback) {
								completedCallback();
							}
						}));
					}),
					onShow: lang.hitch(this, function() {
						this.logDebug(methodName, "onShow: " + item.name);
					}),
					onHide: lang.hitch(this, function() {
						this.logDebug(methodName, "onCancel: " + item.name);

						if (!executeCalled && completedCallback) {
							completedCallback();
						}
					})
				});
				domClass.add(this._saveOrDiscardViewerDialog.domNode, "ecmConfirmationWarningDialog viewerConfirmationDialog");

				this._saveOrDiscardViewerDialog.show();
			} else {
				if (completedCallback) {
					completedCallback();
				}
			}
		},

		/**
		 * @private function executed by onReset, retrieves the item properties and processes the reset callback if
		 *          provided
		 */
		_executeItemReset: function(item, isReadOnly, onResetCallback) {
			var methodName = "_executeItemReset";
			this.logEntry(methodName, "execute reset on: " + item.name + ", last modified: " + item.getModifyDate());

			item.retrieveAttributes(lang.hitch(this, function(itemOut) {
				// refresh the item to get the latest check in/out state
				this.logDebug(methodName, "retrieved item: " + itemOut.name + ", last modified: " + itemOut.getModifyDate());
				if (onResetCallback) {
					onResetCallback(itemOut, isReadOnly);
				}
			}), false);
		},

		destroy: function() {
			this.inherited(arguments);

			if (this._confirmDialog) {
				this._confirmDialog.destroyRecursive(false);
				this._confirmDialog = null;
			}

			if (this._saveOrDiscardViewerDialog) {
				this._saveOrDiscardViewerDialog.destroyRecursive(false);
				this._saveOrDiscardViewerDialog = null;
			}

			if (this._confirmDiscardChangesDialog) {
				this._confirmDiscardChangesDialog.destroyRecursive(false);
				this._confirmDiscardChangesDialog = null;
			}
		}
	});
});
