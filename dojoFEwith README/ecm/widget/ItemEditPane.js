/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare", //
	"dojo/_base/lang", //
	"dojo/_base/array", //
	"dojo/aspect", //
	"dojo/dom-construct", //
	"dojo/dom-style", //
	"dojo/dom-class",
	"dojo/store/Memory",
	"dijit/_TemplatedMixin", //
	"dijit/_WidgetsInTemplateMixin", //
	"dijit/layout/ContentPane", //         
	"dijit/layout/TabContainer", // 
	"ecm/widget/ComboBox",//
	"../MessagesMixin", //
	"../LoggerMixin", //
	"../model/ContentClass", //
	"./ItemPropertiesPane", //
	"./ItemSecurityPane", //
	"./ItemCollaborationPane", //
	"./VersionsPane", //
	"./FoldersFiledInPane", //
	"./ParentDocumentsPane", //
	"./ContentElementsPane", //	
	"./ItemCommentsPane", //
	"./ItemNotelogsPane", //
	"./EntryTemplateFolderAssociationsPane",//
	"dojo/text!./templates/ItemEditPane.html"
], //
function(declare, //
lang, //
array, //rea
aspect, //
domConstruct, //
domStyle, //
domClass,//
Memory,//
_TemplatedMixin, //
_WidgetsInTemplateMixin, //
ContentPane, //
TabContainer, //
ComboBox,//
MessagesMixin, //
LoggerMixin, //
ContentClass, //
ItemPropertiesPane, //
ItemSecurityPane, //
ItemCollaborationPane, //
VersionsPane, //
FoldersFiledInPane, //
ParentDocumentsPane, //
ContentElementsPane, //
ItemCommentsPane, //
ItemNotelogsPane, //
EntryTemplateFolderAssociationsPane,//
template) {

	/**
	 * @name ecm.widget.ItemEditPane
	 * @class Provides a widget that is used to edit a folder or a document in a repository.
	 * @augments dijit.layout.ContentPane
	 */
	return declare("ecm.widget.ItemEditPane", [
		ContentPane,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		LoggerMixin,
		MessagesMixin
	], {
		/** @lends ecm.widget.ItemEditPane.prototype */

		templateString: template,
		widgetsInTemplate: true,

		_item: null,
		_itemLockedForEdit: false,

		postCreate: function() {
			this.inherited(arguments);
		},

		/**
		 * Returns the folder or document that is being edited.
		 * 
		 * @return The folder or document {@link ecm.model.ContentItem}.
		 */
		getItem: function() {
			return this._item;
		},

		/**
		 * Sets the folder or document that will be edited.
		 * 
		 * @param item
		 *            A folder or document {@link ecm.model.ContentItem}.
		 * @param callback
		 *            A callback method that is called after the properties have been rendered.
		 * @param teamspace
		 *            The {@link ecm.model.Teamspace} for the current teamspace.
		 * @param entryTemplate
		 *            A {@link ecm.model.EntryTemplate} object to use for property rendering (@since 2.0.3)
		 */
		setItem: function(item, callback, teamspace, entryTemplate) {
			this.teamspace = teamspace;
			if (item) {
				this._item = item;
				this._entryTemplate = entryTemplate;

				// We do not want the attribute retrieval here to trigger an onChange for OD or it may cause text search summaries to disappear from the ContentList.
				var noOnChange = (this._item.repository.type == "od");
				
				//check if the application group is already in cache
				if(this._item.repository.type == "od" && this._item.application_group){
					this._item._odGetAppGrpUpdateable = true;
					if(this._item.repository._appGroupCache && this._item.repository._appGroupCache[this._item.application_group]){
						this._item._odGetAppGrpUpdateable = false;
					}
				}

				var retrieveClassAttrsCallback = lang.hitch(this, function() {
					this._updateAccessLevels();
					this._lock();
					this.own(aspect.after(this._item, "onChange", lang.hitch(this, function() {
						this._updateAccessLevels(true);
					})));
					this._renderTabContent();
					this._callback = callback;
					this._item.retrieveAttributes(lang.hitch(this, function(item) {
						if (this._itemPropertiesPane) {
							this._itemPropertiesPane.setItem(item, this._readOnly, {
								entryTemplate: this._entryTemplate,
								canModifyProperties: this._canModifyProperties,
								canModifyMetadata: this._canModifyMetadata
							});
						}
						if (this._itemSecurityPane) {
							this._itemSecurityPane.setItem(item, !this._canModifyPermissions);
							if (this._item.rootFolder) {
								this._itemSecurityPane.render();
							}
						}
						if (this._itemVersionsPane) {
							this._itemVersionsPane.setItem(item);
						}
						if (this._itemFoldersFileInPane) {
							this._itemFoldersFileInPane.setItem(item);
						}
						if (this._itemParentDocumentsPane) {
							this._itemParentDocumentsPane.setItem(item);
						}
						if (this._itemContentElementsPane) {
							this._itemContentElementsPane.setItem(item);
						}
						if (this._itemCommentsPane) {
							this._itemCommentsPane.set("item", item);
						}
						if (this._itemNotelogsPane) {
							this._itemNotelogsPane.setItem(item);
						}
						if (this._itemCollaborationPane){
							this._itemCollaborationPane.setItem(item, this._readOnly);
						}
					}), false, noOnChange, true);

					// Render other tabs the first time they are selected.
					if (this._tabContainer) {

						this._tabContainer.watch("selectedChildWidget", lang.hitch(this, function(name, oldWidget, newWidget) {
							if (this._itemSecurityPane && (newWidget.uuid == this._itemSecurityPane.uuid)) {
								this._itemSecurityPane.render();
							} else if (this._itemFoldersFileInPane && (newWidget.uuid == this._itemFoldersFileInPane.uuid)) {
								this._itemFoldersFileInPane.render();
							} else if (this._itemParentDocumentsPane && (newWidget.uuid == this._itemParentDocumentsPane.uuid)) {
								this._itemParentDocumentsPane.render();
							} else if (this._itemContentElementsPane && (newWidget.uuid == this._itemContentElementsPane.uuid)) {
								this._itemContentElementsPane.render();
							} else if (this._itemVersionsPane && (newWidget.uuid == this._itemVersionsPane.uuid)) {
								this._itemVersionsPane.render();
							} else if (this._itemCommentsPane && (newWidget.uuid == this._itemCommentsPane.uuid)) {
								this._itemCommentsPane.render();
							} else if (this._itemNotelogsPane && (newWidget.uuid == this._itemNotelogsPane.uuid)) {
								this._itemNotelogsPane.render();
							} else if (this._EntryTemplateFolderAssociationsPane && (newWidget.uuid == this._EntryTemplateFolderAssociationsPane.uuid)) {
								if (!this._EntryTemplateFolderAssociationsPane.rendered) {
									this._EntryTemplateFolderAssociationsPane.setItem(item, lang.hitch(this, "onFolderETChange"));
									this._EntryTemplateFolderAssociationsPane.rendered = true;
								}
							}
							else if (this._itemCollaborationPane && (newWidget.uuid == this._itemCollaborationPane.uuid)){
								this._itemCollaborationPane.render();
							}
						}));
					}
				});

				if (this._item.repository.type == "od") {
					retrieveClassAttrsCallback();
				} else {
					// Retrieve the class attributes & settings before rendering the tabs.
					if (this._item.getContentClass()) {
						this._item.getContentClass().retrieveAttributeDefinitions(retrieveClassAttrsCallback);
					}
				}
			}
		},

		_updateAccessLevels: function(updateSecurityPane) {
			// cm needs privEditProperties & checkout privilege
			if (this._item.repository._isCM()){
				this._readOnly = !this._item.hasPrivilege("privEditProperties") || !this._item.hasPrivilege("privCheckOutDoc");
				this._canModifyProperties = !this._readOnly;
				this._canModifyPermissions = !this._readOnly;
				this._canModifyMetadata = false;
			}
			else if (this._item.repository._isBox()){
				this._canModifyProperties = this._item.hasPrivilege("privEditProperties");
				if (this._item.isFolder()){
					this._canModifyMetadata = this._item.hasPrivilege("privAddToFolder");
				}
				else if (this._item.locked){
					this._canModifyMetadata = this._item.hasPrivilege("privCheckInDoc");
				}
				else {
					this._canModifyMetadata = this._item.hasPrivilege("privCheckOutDoc");
				}
				this._readOnly = !(this._canModifyProperties || this._canModifyMetadata)
			}
			else {
				this._readOnly = !this._item.hasPrivilege("privEditProperties");
				this._canModifyPermissions = this._item.hasPrivilege("privModifyPermissions");
				this._canModifyProperties = !this._readOnly;
				this._canModifyMetadata = false;
			}
			if (updateSecurityPane && this._itemSecurityPane){
				this._itemSecurityPane.setItem(this._item, !this._canModifyPermissions);
			}
		},

		/**
		 * @private
		 */
		_renderTabContent: function() {
			if (this._item.repository._isP8()) {
				this._addTabContainer();
				this._addPropertiesTab();
				this._addCommentsTab();

				// Show the security tab if:
				//			There is no entry template
				//		or  ...the entry template is not enabled to apply to the Properties dialog
				// 		or	...the entry template allows the user to see the security
				//  	or	...the user is allowed to modify permissions
				if (!this._entryTemplate || !this._entryTemplate.useForProperties || this._entryTemplate.allowUserSetSecurity || this._canModifyPermissions) {
					this._addSecurityTab();
				}

				if (!this._item.isFolder()) {
					this._addVersionsTab();
					this._addFoldersFiledInTab();
					this._addParentDocumentsTab();
		// suppressing the page for now. 			
					this._addContentElementsTab();
				}
				if (this._item.isFolder()) {
					this._addEntryTemplateAssociationTab();
				}
			} else if (this._item.repository._isCM()) {
				this._addTabContainer();

				this._addPropertiesTab();

				//story 26656 enter
				this._addNotelogsTab();
				//story 26656 leave

				// Show the security tab if:
				//			There is no entry template
				//		or  ...the entry template is not enabled to apply to the Properties dialog
				// 		or	...the entry template allows the user to see the security
				//  	or	...the user is allowed to modify permissions
				if (!this._entryTemplate || !this._entryTemplate.useForProperties || this._entryTemplate.allowUserSetSecurity || this._canModifyPermissions) {
					this._addSecurityTab();
				}

				this._addVersionsTab();
				this._addFoldersFiledInTab();
				// removal for now 
				//this._addContentElementsTab();
				// For CM entry templates must be enabled, and associations are only supported for hierarchical folders.
				if (this._item.repository.entryTemplatesEnabled && this._item.isFolder() && this._item.getContentClass().supportsEntryTemplateFolderAssociations) {
					this._addEntryTemplateAssociationTab();
				}
			} else if (this._item.repository._isOnDemand()) {
				this._addPropertiesPaneOnly();
			} else if (this._item.repository._isBox()) {
				if (this._item.isFolder()) {
					this._addTabContainer();
					this._addPropertiesTab();
					this._addCollaborationTab();
				} else {
					this._addTabContainer();
					this._addPropertiesTab();
					this._addCommentsTab();
					if (this._item.getContentType() != "application/x-box-web-link" && this._item.getContentType() != "application/x-box-note") {
						this._addVersionsTab();
					}
				}
			} else { // CMIS and ...?
				if (this._item.isFolder()) {
					this._addPropertiesPaneOnly();
				} else {
					this._addTabContainer();
					this._addPropertiesTab();
					this._addVersionsTab();

					if (this._item.repository._isCmis()) {
						this._addFoldersFiledInTab();
					}
				}
			}
			if (this._tabContainer) {
				this.own(aspect.after(this._tabContainer, "selectChild", lang.hitch(this, "_selectTab"), true));
			}
		},

		/**
		 * @private
		 */
		_selectTab: function(page) {
			if (this._itemVersionsPane && page.uuid == this._itemVersionsPane.uuid) {
				if (this._itemVersionsPane) {
					this._itemVersionsPane.resize();
				}
			} else if (this._itemFoldersFileInPane && page.uuid == this._itemFoldersFileInPane.uuid) {
				if (this._itemFoldersFileInPane) {
					this._itemFoldersFileInPane.resize();
				}
			} else if (this._itemParentDocumentsPane && page.uuid == this._itemParentDocumentsPane.uuid) {
				if (this._itemParentDocumentsPane) {
					this._itemParentDocumentsPane.resize();
				}
			} else if (this._itemContentElementsPane && page.uuid == this._itemContentElementsPane.uuid) {
				if (this._itemContentElementsPane) {
					this._itemContentElementsPane.resize();
				}
			}
		},

		/**
		 * @private
		 */
		_createPropertiesPane: function() {
			var propertiesPane = new ItemPropertiesPane({
				teamspace: this.teamspace,
				uuid: (this.id + "Properties")
			});

			this.own(aspect.after(propertiesPane, "onCompleteRendering", lang.hitch(this, "onCompleteRendering"), true));
			this.own(aspect.after(propertiesPane, "onChange", lang.hitch(this, "onChangeProperties"), true));
			this.own(aspect.after(propertiesPane, "onClickReferenceAttribute", lang.hitch(this, "onClickReferenceAttribute"), true));
			this.own(aspect.after(propertiesPane, "onMarkingPropertyChange", lang.hitch(this, "_onMarkingPropertyChange"), true));
			this.own(aspect.after(propertiesPane, "onClassChange", lang.hitch(this, "onClassChange"), true));
			this.own(aspect.after(propertiesPane, "onRetrySave", lang.hitch(this, "onRetrySave"), true));

			return propertiesPane;
		},

		/**
		 * @private
		 */
		_addPropertiesPaneOnly: function() {
			this._itemPropertiesPane = this._createPropertiesPane();
			domConstruct.place(this._itemPropertiesPane.domNode, this.domNode, "only");
			this._itemPropertiesPane.startup();
		},

		/**
		 * @private
		 */
		_addTabContainer: function() {
			this._tabContainer = new TabContainer();
			this._tabContainer.startup();
			this.set('content', this._tabContainer);
		},

		/**
		 * @private
		 */
		_addPropertiesTab: function() {
			this._itemPropertiesPane = this._createPropertiesPane();
			this._itemPropertiesPane.title = ecm.messages.add_document_properties_label;
			if (!this._item.rootFolder)
				this._tabContainer.addChild(this._itemPropertiesPane);
			this._isClassChanged = false;
			this._itemPropertiesPane.startup();
		},
		
		/**
		 * @private
		 * @since 3.0
		 */
		_addCollaborationTab: function() {
			this._itemCollaborationPane = new ItemCollaborationPane({
				uuid: (this.id + "Collaboration")
			});
			this._itemCollaborationPane.title = ecm.messages.add_document_security_label;
			this._tabContainer.addChild(this._itemCollaborationPane);
			this._isSecurityChanged = false;
			this.own(aspect.after(this._itemCollaborationPane, "onChange", lang.hitch(this, "onSecurityChange"), true));
		},

		/**
		 * @private
		 */
		_addSecurityTab: function() {
			this._itemSecurityPane = new ItemSecurityPane({
				uuid: (this.id + "Security")
			});
			this._itemSecurityPane.title = ecm.messages.add_document_security_label;
			this._tabContainer.addChild(this._itemSecurityPane);
			this._isSecurityChanged = false;
			this.own(aspect.after(this._itemSecurityPane, "onChange", lang.hitch(this, "onSecurityChange"), true));
		},

		/**
		 * @private
		 */
		_addVersionsTab: function() {
			this._itemVersionsPane = new VersionsPane({
				uuid: (this.id + "Versions")
			});
			this._itemVersionsPane.title = ecm.messages.object_versions_label;
			this._itemVersionsPane._editPropertiesDialog = this._editPropertiesDialog;
			this._tabContainer.addChild(this._itemVersionsPane);

		},

		/**
		 * @private
		 */
		_addFoldersFiledInTab: function() {
			this._itemFoldersFileInPane = new FoldersFiledInPane({
				uuid: (this.id + "FoldersFiledIn")
			});
			this._itemFoldersFileInPane.title = ecm.messages.properties_folders_filed_in_label;
			this._tabContainer.addChild(this._itemFoldersFileInPane);
		},

		/**
		 * @private
		 */
		_addParentDocumentsTab: function() {
			this._itemParentDocumentsPane = new ParentDocumentsPane({
				uuid: (this.id + "ParentDocuments")
			});
			this._itemParentDocumentsPane.title = ecm.messages.properties_parent_documents_label;
			this._tabContainer.addChild(this._itemParentDocumentsPane);
		},


		/**
		 * @private
		 */
		_addContentElementsTab: function() {
			this._itemContentElementsPane = new ContentElementsPane({
				uuid: (this.id + "ContentElements")
			});
			this._itemContentElementsPane.title =  ecm.messages.properties_content_elements_label;
			this._tabContainer.addChild(this._itemContentElementsPane);
		},
		
		/**
		 * @private
		 */
		_addCommentsTab: function() {
			if (!this._item.isCommentable(true))
				return;

			this._itemCommentsPane = new ItemCommentsPane({
				uuid: (this.id + "Comments")
			});
			this.own(aspect.after(this._itemCommentsPane, "onNewComment", lang.hitch(this, "onAnyOtherChange"), true));
			this.own(aspect.after(this._itemCommentsPane, "onCancelNewComment", lang.hitch(this, "onAnyOtherChange"), true));
			this.own(aspect.after(this._itemCommentsPane, "onAddComment", lang.hitch(this, "onAnyOtherChange"), true));
			this._itemCommentsPane.title = ecm.messages.comments;
			this._tabContainer.addChild(this._itemCommentsPane);
			this._itemCommentsPane.startup();
		},

		/**
		 * @private
		 */
		_addNotelogsTab: function() {
			if (!this._item.isNotelogable())
				return;

			this._itemNotelogsPane = new ItemNotelogsPane({
				_editPropertiesDialog: this._editPropertiesDialog,
				uuid: (this.id + "Notelogs")
			});
			this._itemNotelogsPane.title = ecm.messages.notelogs;
			this._tabContainer.addChild(this._itemNotelogsPane);
			this._itemNotelogsPane.startup();
			this.own(aspect.after(this._itemNotelogsPane, "onChange", lang.hitch(this, "onNotelogChange"), true));
		},
		/**
		 * @private
		 */
		_addEntryTemplateAssociationTab: function() {
			var isVisible = false;
			var foldering = true;
			if (this.teamspace && this.teamspace.type == "instance") {
				isVisible = this.teamspace.hasPrivilege("addRemoveClassesOrEntryTemplates") && (this.teamspace.repository.entryTemplatesEnabled);
			} else {
				if (this._item.repository.entryTemplatesEnabled && ecm.model.desktop.getFeatureById("manageEntryTemplates") != null) {
					isVisible = true;
				} else {
					isVisible = false;
				}
				foldering = this._item.hasPrivilege("privEditProperties") && this._item.hasPrivilege("privAddToFolder");
			}
			if (!isVisible)
				return;
			this._EntryTemplateFolderAssociationsPane = new EntryTemplateFolderAssociationsPane({
				uuid: (this.id + "EntryTemplateAssociation"),
				readOnly: !foldering,
				repositoryType: this._item.repository.type
			});
			this._EntryTemplateFolderAssociationsPane.title = ecm.messages.entry_template_folder_associations_title;
			this._tabContainer.addChild(this._EntryTemplateFolderAssociationsPane);
			this._EntryTemplateFolderAssociationsPane.startup();
			this.own(aspect.after(this._EntryTemplateFolderAssociationsPane, "onSelectionChange", lang.hitch(this, function(arg) {
				this._isDirty = true;
				this._isFolderETChanged = true;
				this.onFolderETChange(arg);
				this.onAnyOtherChange();
			}), true));
			this.own(aspect.after(this._EntryTemplateFolderAssociationsPane, "onInherit", lang.hitch(this, function(arg) {
				this._isDirty = false;
				this._isFolderETChanged = false;
				this.onFolderETChange(arg);
				this.onAnyOtherChange();
			}), true));
		},
//	resize: function() {
//		this.inherited(arguments);
//		if (this._tabContainer) {
//			this._tabContainer.resize();
//		}
//		this._itemPropertiesPane.resize();
//		if (this._itemVersionsPane) {
//			this._itemVersionsPane.resize();
//		}
//		if (this._itemFoldersFileInPane) {
//			this._itemFoldersFileInPane.resize();
//		}
//	},

		/**
		 * This event method is called when an item property field value is changed.
		 */
		onChangeProperties: function(evt) {
			if (evt && evt.target) { // onChange sometimes firing extra
				this._isDirty = true;
			}
		},

		/**
		 * This event method is called when item security is changed.
		 */
		onSecurityChange: function() {
			this._isSecurityChanged = true;
			this._isDirty = true;
		},

		/**
		 * This event method is called when the item content class is changed.
		 */
		onClassChange: function() {
			this._isClassChanged = true;
			this._isDirty = true;
		},

		/**
		 * This event method is called when the entry templates folder association is changed.
		 */

		onFolderETChange: function() {
			if (this._EntryTemplateFolderAssociationsPane._fileTypeError) {
				this._isDirty = false;
				this._isFolderETChanged = false;
				var message = ecm.messages.entry_template_fileType_error;
				if (this._EntryTemplateFolderAssociationsPane._missEntryTemplatesMessage) {
					message += this._EntryTemplateFolderAssociationsPane._missEntryTemplatesMessage;
				}
				this._editPropertiesDialog.setMessage(message);
			} else if (this._EntryTemplateFolderAssociationsPane._associationInherited && this._EntryTemplateFolderAssociationsPane._associationInheritedAtBeginning) {
				this._isDirty = false;
				this._isFolderETChanged = false;
				if (this._EntryTemplateFolderAssociationsPane._missEntryTemplatesMessageForInherit) {
					this._editPropertiesDialog.setMessage(this._EntryTemplateFolderAssociationsPane._missEntryTemplatesMessageForInherit);
				} else {
					this._editPropertiesDialog.clearMessage();
				}
			} else {
				if (this._EntryTemplateFolderAssociationsPane._missEntryTemplatesMessage) {
					this._editPropertiesDialog.setMessage(this._EntryTemplateFolderAssociationsPane._missEntryTemplatesMessage);
				} else {
					this._editPropertiesDialog.clearMessage();
				}
			}
			this.resize();
		},

		/**
		 * @since 2.0.3 This event method is called when the notelog is changed.
		 */
		onNotelogChange: function() {
			this.onAnyOtherChange();
		},

		/**
		 * This event is fired when a save operation can be retried. See {@link ecm.widget.ItemPropertiesPane}
		 * <code>onRetrySave</code>.
		 */
		onRetrySave: function() {
		},

		/**
		 * @private override
		 */
		_onMarkingPropertyChange: function() {
			if (this._item.repository._isP8() && this._itemSecurityPane) {
				// Include all read only, hidden, and empty property values.
				var properties = this._itemPropertiesPane.getPropertiesJSON(true, true, false);
				this._itemSecurityPane.setProperties(properties);
			}
		},

		/**
		 * This event method is called when the item properties have finished rendering.
		 */
		onCompleteRendering: function() {
			this._isDirty = false;
			this._onMarkingPropertyChange(); // triggers the event to let the security page handles any marking set.
			if (this._callback) { // callback after properties dijit has finished rendering
				this._callback();
			}
		},

		/**
		 * This event method is called when a reference attribute is clicked. This method is not called if the reference
		 * attribute field is disabled.
		 */
		onClickReferenceAttribute: function() {
		},

		/**
		 * Determines if security can be modified.
		 * 
		 * @return {Boolean} A value of <code>true</code> if security can be modified, otherwise <code>false</code>.
		 */
		canModifySecurity: function() {
			return this._canModifyPermissions;
		},

		/**
		 * Determines if the entire item is read only (properties, security, and so on.)
		 * 
		 * @return {Boolean} A value of <code>true</code> if the entire item is read only, otherwise
		 *         <code>false</code>. If the entire item is not read only, some settings (such as some properties
		 *         and security settings) can still be read only.
		 */
		isReadOnly: function() {
			return this._readOnly;
		},

		/**
		 * Determines if the item has been modified.
		 * 
		 * @return {Boolean} A value of <code>true</code> if the item has been modified, otherwise false.
		 */
		isDirty: function() {
			return this._isDirty == undefined ? false : this._isDirty;
		},

		/**
		 * Retrieves the content class selector widget.
		 * 
		 * @return A {@link ecm.widget.ContentClassSelector} widget.
		 */
		getContentClassSelector: function() {
			return this._itemPropertiesPane.getContentClassSelector();
		},

		/**
		 * Determines if any of the item's property field values have changed.
		 * 
		 * @return {Boolean} A value of <code>true</code> if an item property field value has changed, otherwise
		 *         <code>false</code>.
		 */
		getFieldsChanged: function() {
			return this._itemPropertiesPane._commonProperties.fieldschanged;
		},

		/**
		 * Determines if the item security has changed.
		 * 
		 * @return {Boolean} A value of <code>true</code> if the item's security has changed, otherwise
		 *         <code>false</code>.
		 */
		isSecurityChanged: function() {
			return this._isSecurityChanged ? this._isSecurityChanged : false;
		},

		/**
		 * Determines if the item's content class has changed.
		 * 
		 * @return {Boolean} A value of <code>true</code> if the item's content class has changed, otherwise
		 *         <code>false</code>.
		 */
		isClassChanged: function() {
			return this._isClassChanged ? this._isClassChanged : false;
		},

		/**
		 * Determines if the entry template folder association has changed.
		 * 
		 * @return {Boolean} A value of <code>true</code> if the selected entry template has changed, otherwise
		 *         <code>false</code>.
		 */
		isFolderETChanged: function() {
			return this._isFolderETChanged ? this._isFolderETChanged : false;
		},

		/**
		 * This event method is called when there has been a change made on anything other than properties, security,
		 * and class of the item.
		 */
		onAnyOtherChange: function() {
		},

		/**
		 * Determines if there has been a change in anything other than properties, security, and class of the item that
		 * needs to be saved such as a new comment that hasn't been saved yet.
		 * 
		 * @return {Boolean} A value of <code>true</code> if there has been a change hasn't been saved yet, otherwise
		 *         <code>false</code>.
		 */
		isAnyOtherChanged: function() {
			var changed = this._itemCommentsPane && this._itemCommentsPane.isDirty();
			changed = this._itemNotelogsPane && this._itemNotelogsPane._isDirty;
			if (!changed)
				changed = this.isFolderETChanged();
			return changed;
		},

		_cancelOtherChanges: function() {
			if (this._itemCommentsPane)
				this._itemCommentsPane.cancelNewComment();
			if (this.isFolderETChanged())
				this._isFolderETChanged = false;
			if (this._itemNotelogsPane)
				this._itemNotelogsPane._isDirty = false;
		},

		_getCancelConfirmationMessage: function() {
			var message = (this._itemCommentsPane && this._itemCommentsPane.isDirty()) ? ecm.messages.comments_save_new : "";

			if (this.isFolderETChanged()) {
				if (message)
					message += " ";
				message += ecm.messages.entry_template_folder_associations_save_new;
			}

			if (this._itemNotelogsPane && this._itemNotelogsPane._isDirty) {
				if (message)
					message += " ";
				message += ecm.messages.notelog_save_new;
			}

			return message;
		},

		/**
		 * Saves the changes made to the item.
		 * 
		 * @param callback
		 *            A method that is called after the item is saved.
		 */
		save: function(callback) {
			if ((this.getFieldsChanged() == true || this.isSecurityChanged() || this.isClassChanged()) && this.isValid(true, false, true) || (this._itemNotelogsPane && this._itemNotelogsPane._isDirty)) {
				// Include all read only, hidden, and empty property values.
				var properties = [];
				var childComponentValues = [];
				var params = {};
				if(!this._item.repository._isCM() || (this.getFieldsChanged() == true)){
					//for CM only add them when it is changed.
					properties = this._itemPropertiesPane.getPropertiesJSON(true, true, false);
					childComponentValues = this._itemPropertiesPane.getChildComponentValues();
					params.templateMetadata = this._itemPropertiesPane.getTemplateMetadataValues();
				}
				var contentClass = this._itemPropertiesPane.getContentClass();
				var permissions = null;
				var notelogData = null;
				if (this._itemNotelogsPane && this._itemNotelogsPane._isDirty) {
					notelogData = {};

					if (this._itemNotelogsPane._editMode) {
						notelogData.text = lang.trim(this._itemNotelogsPane._noteLogRawText.get("value"));
						notelogData.notelogType = "edit";
					} else {
						notelogData.notelogType = "add";
						notelogData.text = lang.trim(this._itemNotelogsPane._notelogAddingTextarea.get("value"));
					}
					notelogData.editMode = this._itemNotelogsPane._editMode;
					notelogData.createNewVersion = this._itemNotelogsPane._toggleCreateNewVersion.get("checked");
					properties.push(notelogData);
				}
				if (this._itemSecurityPane && (this._item.repository._isP8() || this._item.repository._isCM())) {
					permissions = this._itemSecurityPane.getPermissions();
				}
				else if (this._itemCollaborationPane && this._itemCollaborationPane.rendered && this._item.repository._isBox()){
					permissions = this._itemCollaborationPane.getUpdatedCollaborators();
				}

				var saveAttrsUnlock = this._itemLockedForEdit ? ((this._EntryTemplateFolderAssociationsPane && this.isFolderETChanged()) ? false : true) : false;
				var saveFolderETsUnlock = this._itemLockedForEdit; // Save folder ETs will handle the unlock, if there were folder ET changes and this item was locked for edit.

				this._item.saveAttributes(properties, contentClass.id, childComponentValues, permissions, saveAttrsUnlock, lang.hitch(this, function(response) {
					if (response && response.fieldErrors && response.fieldErrors.length > 0) {
						var fieldErrorMap = {};
						array.forEach(response.fieldErrors, function(fieldError) {
							this._itemPropertiesPane.setFieldError(fieldError.symbolicName, fieldError.errorMessage, fieldError.invalidItems);
							fieldErrorMap[fieldError.symbolicName] = fieldError;
						}, this);

						// Set the focus to the first invalid field, in the layout order.
						var props = this._itemPropertiesPane.getPropertiesJSON(true, true, false);
						array.some(props, function(prop) {
							if (fieldErrorMap[prop.name] == null) {
								return false;
							}
							this._itemPropertiesPane.setFieldFocus(prop.name);
							return true;
						}, this);

						// Handle the change in error state.
						this.onChangeProperties();
					} else if (response && response.templateMetadataErrors && response.templateMetadataErrors.length) {
						// Update fields with errors
						array.forEach(response.templateMetadataErrors, function(templateMetadataError) {
							array.forEach(templateMetadataError.fieldErrors, function(fieldError) {
								this._itemPropertiesPane.setTemplateMetadataFieldError(templateMetadataError.id, fieldError.symbolicName, fieldError.errorMessage);
							}, this);
						}, this);
						
						// Set the focus on the first invalid field
						this._itemPropertiesPane.setTemplateMetadataFieldFocus(response.templateMetadataErrors[0].id, response.templateMetadataErrors[0].fieldErrors[0].symbolicName);
						
						// Handle the change in error state
						this.onChangeProperties();
					} else {
						// Do not call unlock 
						// On a CM repository, if the item was checked out as part of the edit properties action (not already checked out)
						// then the item is unlocked at the server when the property changes are applied by the saveAttributes() call.
						this._itemLockedForEdit = false;

						if (this._itemCommentsPane && this._itemCommentsPane.isDirty())
							this._itemCommentsPane.save(callback, callback);
						else if (callback)
							callback();
						if (this._EntryTemplateFolderAssociationsPane && this.isFolderETChanged())
							this._EntryTemplateFolderAssociationsPane.save(callback, saveFolderETsUnlock);
						else if (callback)
							callback();
//						if (this._itemNotelogsPane && lang.trim(this._itemNotelogsPane._notelogAddingTextarea.get("value")).length > 0)
//							this._itemNotelogsPane.addNotelog(callback);
//						else if (callback)
//							callback();

					}
				}), null, null, params);
			} else if (this._itemCommentsPane && this._itemCommentsPane.isDirty()) {
				this._itemCommentsPane.save(callback, callback);
			} else if (this._EntryTemplateFolderAssociationsPane && this.isFolderETChanged()) {
				this._EntryTemplateFolderAssociationsPane.save(callback, this._itemLockedForEdit);
			}
//			else if (this._itemNotelogsPane && lang.trim(this._itemNotelogsPane._notelogAddingTextarea.get("value")).length > 0) {
//				this._itemNotelogsPane.addNotelog(callback);
//			}
		},

		/**
		 * Handles the the cancel event.
		 */
		onCancel: function() {
			this._unlock();
		},

		/**
		 * Enables or disables each data type <code>"xs:reference"</code> property field if it is not read only. See
		 * {@link ecm.widget.ItemPropertiesPane} <code>setDisabledNavigation</code>.
		 * 
		 * @param disableField
		 *            A boolean value. If a property field is not read only and contains data type
		 *            <code>"xs:reference"</code>, then the property field is disabled if <code>disableField</code>
		 *            is <code>true</code>, or enabled if <code>disableField</code> is <code>false</code>. If
		 *            the field is read only or is not for data type <code>"xs:reference"</code> then no change is
		 *            made to the field.
		 */
		setDisabledNavigation: function(disableField) {
			this._itemPropertiesPane.setDisabledNavigation(disableField);
		},

		/**
		 * Checks if the property fields contain valid values. See {@link ecm.widget.ItemPropertiesPane}
		 * <code>validate</code>.
		 * 
		 * @param focus
		 *            A boolean value. If <code>true</code> and there is a field with an invalid value, focus is
		 *            automatically set to the invalid field.
		 * @param onEditStatus
		 *            A boolean value. If <code>true</code>, item properties are being modified. Only property fields
		 *            that have been modified are checked.
		 * @param onSaveStatus
		 *            A boolean value. If <code>true</code>, changes are being saved.
		 * @return {Boolean} A value of <code>true</code> if all property fields contain valid values, otherwise
		 *         <code>false</code>.
		 */
		isValid: function(focus, onEditStatus, onSaveStatus) {
			var errorField = this._itemPropertiesPane.validate(focus, onEditStatus, onSaveStatus);
			if (errorField) {
				// Only force the tab switch on save.
				if (this._tabContainer && onSaveStatus) {
					this._tabContainer.selectChild(this._itemPropertiesPane);
				}
				return false;
			} else {
				return true;
			}
		},

		/**
		 * @private
		 */
		_lock: function() {
			// NOTE: mid-tier right now requires a lock when edit properties for CM
			if (!this._readonlyWithNotelog() && this._item && !this._item.locked && this._item.repository.type == "cm") {
				// Keep track of whether the item was checked out before editing it.
				this._itemLockedForEdit = true;
				this._item.repository.lockItems([
					this._item
				]);
			}
		},

		/**
		 * @private
		 */
		_unlock: function() {
			if ( this._needUnlock|| (!this._readonlyWithNotelog() && this._item && this._item.locked && this._itemLockedForEdit && !this._item.deleted)) {
				var unlockItem = this._item;
				if(this._cmCurrentVersionItem){
					unlockItem = this._cmCurrentVersionItem;
				}
				this._item.repository.unlockItems([
				    unlockItem
				]);
				this._needUnlock = false;
			}
		},
		
		/**
		 * @private
		 */
		_readonlyWithNotelog: function(){
			return (this._readOnly && !(this._item.isNotelogable()&&(this._item.hasPrivilege("privModifyNotes")||this._item.hasPrivilege("privAddNotes"))));
		},

		/**
		 * Destroys the widget.
		 */
		destroy: function() {
			if (this._tabContainer) {
				this._tabContainer.destroyRecursive();
				if (this._itemSecurityPane) {
					delete this._itemSecurityPane;
				}
				if (this._itemVersionsPane) {
					delete this._itemVersionsPane;
				}
				if (this._itemCollaborationPane){
					delete this._itemCollaborationPane;
				}
			} //else {
			if (this._itemPropertiesPane)
				this._itemPropertiesPane.destroy();
			//}
			delete this._itemPropertiesPane;
			this.inherited(arguments);
		}
	});
});
