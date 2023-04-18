/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/json",
	"dojo/_base/lang",
	"dojo/_base/array",
	"./_ModelObject",
	"./Request",
	"./ContentItem",
	"./WorkItem",
	"./UserGroup",
	"./Permission",
	"./SecurityPolicy",
	"./EntryTemplateOption",
	"./EntryTemplatePropertyOptions"
], function(declare, dojojson, lang, array, _ModelObject, Request, ContentItem, WorkItem, UserGroup, Permission, SecurityPolicy, EntryTemplateOption, EntryTemplatePropertyOptions) {

	/**
	 * Constructs the entry template model object.
	 * 
	 * @param properties
	 *            The properties for the entry template object. Can be any of the public fields as defined below and on
	 *            {@link ecm.model._ModelObject}.
	 * @name ecm.model.EntryTemplate
	 * @class Represents a single entry template in the repository. An entry template is used to manage the creation of
	 *        a new content item. Entry template settings can also be applied when a document is checked in.
	 *        <p>
	 *        For performance reasons, the entry template settings are not filled in until the asynchronous
	 *        {@link ecm.model.EntryTemplate} <code>retrieveEntryTemplate</code> method is called.
	 *        </p>
	 * @augments ecm.model._ModelObject
	 */
	var EntryTemplate = declare("ecm.model.EntryTemplate", [
		_ModelObject
	], {
		/** @lends ecm.model.EntryTemplate.prototype */

		/**
		 * A string value holding the version series id. (FileNet P8 only)
		 */
		vsId: null,

		/**
		 * A string value holding the item id. (IBM Content Manager only)
		 * 
		 * @since 2.0.3
		 */
		itemId: null,

		/**
		 * A string holding the entry template description text.
		 */
		description: "",

		/**
		 * The {@link ecm.model.Repository} object where the entry template is stored.
		 */
		repository: null,

		/**
		 * A string holding the type of object this entry template will add. One of the values in
		 * ecm.model.EntryTemplate.TYPE.
		 */
		type: "DOCUMENT",

		/**
		 * A string holding the MIME type of this entry template.
		 * 
		 * @since 2.0.3
		 */
		mimetype: "",

		/**
		 * A string holding the mode of <code>add</code>, <code>edit</code>, or <code>copy</code>.
		 * 
		 * @since 2.0.3
		 */
		mode: "",

		/**
		 * FileNet P8 only. The destination object store for content added using this entry template. The destination
		 * object store can be a different object store than the one that contains the entry template. It is also
		 * possible for there to be no repository configuration for the destination object store in the current desktop
		 * configuration. This is an object valued property where the object store information is stored in the
		 * properties <code>id</code>, <code>symbolicName</code>, and <code>displayName</code>.
		 */
		objectStore: null,

		/**
		 * FileNet P8 only. The destination repository for content added using this entry template. The destination
		 * repository can be a different repository in the same domain than the one that contains the entry template.
		 */
		targetRepository: null,

		/**
		 * A {@link ecm.model.ContentItem} folder in which to file a new entry template when it is added to the
		 * repository.
		 * 
		 * @since 2.0.3
		 */
		saveToFolder: null,

		/**
		 * FileNet P8 only. A boolean value indicating whether this entry template inherits security from the parent
		 * folder.
		 * 
		 * @since 2.0.3
		 */
		saveToFolderInheritParentSecurity: true,

		/**
		 * A boolean value indicating whether this entry template should be applied when a document added using this
		 * entry template is checked in.
		 */
		useForCheckin: true,

		/**
		 * A boolean value indicating whether this entry template should be used on the properties dialog.
		 * 
		 * @since 2.0.3
		 */
		useForProperties: true,

		/**
		 * A boolean value indicating whether this entry template should be used on the viewer properties pane.
		 * 
		 * @since 2.0.3
		 */
		useForViewerProperties: true,

		/**
		 * A boolean value indicating whether this entry template should be used on the document information pane.
		 * 
		 * @since 2.0.3
		 */
		useForDocumentInformationProperties: true,

		/**
		 * A boolean value indicating whether this entry template will allow the user to select the content file.
		 * Applies to pre-2.0.3 entry templates.
		 */
		allowUserSelectFile: true,

		/**
		 * FileNet P8 only. A boolean value indicating whether this entry template will allow duplicate file names when
		 * adding a content file.
		 */
		allowDuplicateFileNames: true,

		/**
		 * FileNet P8 only. A {@link ecm.model.EntryTemplateOption} object for enabling added documents to use compound
		 * documents. This setting is initialized to be hidden, read only, and false.
		 * 
		 * @since 2.0.3
		 */
		enableCompoundDocuments: null,

		/**
		 * A {@link ecm.model.ContentItem} folder object under which the new content item will be filed.
		 */
		folder: null,

		/**
		 * A boolean value indicating whether this entry template will allow the user to select the folder under which
		 * the new content item will be filed.
		 */
		allowUserSelectFolder: true,

		/**
		 * A boolean value indicating whether this entry template only allows the user to select the specified folder or
		 * a sub-folder as the folder under which the new content item will be filed.
		 */
		restrictToSelectedFolderOrDescendant: true,

		/**
		 * A boolean value indicating whether the user can select the repository as the destination without filing the
		 * document in a folder.
		 * 
		 * @since 2.0.3
		 */
		allowNoFolderSelected: true,

		/**
		 * FileNet P8 only. A {@link ecm.model.EntryTemplateOption} object for the add or check in as minor version
		 * setting. This setting is initialized to be shown, editable, and false. When the value is false add or check
		 * in creates a major version.
		 */
		asMinorVersion: null,

		/**
		 * IBM Content Manager only. A {@link ecm.model.EntryTemplateOption} object for the check in as new version
		 * setting. This setting is initialized to be shown, editable, and true. When the value is false check in
		 * replaces the current version. When the class does not allow new versions to be created the setting will
		 * always be false. When the CM class requires that new versions be created the setting will always be true.
		 * 
		 * @since 2.0.3
		 */
		checkinAsNewVersion: null,

		/**
		 * FileNet P8 only. A {@link ecm.model.EntryTemplateOption} object for the auto classify on add setting. This
		 * setting is initialized to be hidden, read only, and false.
		 */
		autoClassify: null,

		/**
		 * A string holding the content class name.
		 */
		addClassName: "",

		/**
		 * A string holding the content class display label.
		 */
		addClassLabel: "",

		/**
		 * A string holding the content class description text.
		 */
		addClassDescription: "",

		/**
		 * A boolean value indicating whether this entry template will allow the user to set property values.
		 */
		allowUserSetPropertyValues: true,

		/**
		 * An array of {@link ecm.model.EntryTemplatePropertyOptions} objects that specifies the property display order
		 * and property options such as hidden, read only, etc.
		 */
		propertiesOptions: null,

		/**
		 * FileNet P8 only. An optional {@link ecm.model.SecurityPolicy} object that is applied to the new content item.
		 */
		securityPolicy: null,

		/**
		 * An array of {@link ecm.model.Permission} objects specifying the security for the new content item.
		 */
		permissions: null,

		/**
		 * An array of {@link ecm.model.Permission} objects specifying the security for the entry template.
		 * 
		 * @since 2.0.3
		 */
		templatePermissions: null,

		/**
		 * A boolean value indicating whether this entry template allows the user to modify security settings.
		 */
		allowUserSetSecurity: true,

		/**
		 * A boolean value indicating whether this entry template overrides the security defined by the class.
		 * 
		 * @since 2.0.3
		 */
		overrideClassSecurity: true,

		/**
		 * FileNet P8 only. A boolean value indicating whether the new content item inherits security from the parent
		 * folder. This is optional only when adding documents. A new folder always inherits security from the parent
		 * folder.
		 * 
		 * @since 2.0.3
		 */
		inheritSecurityFromParentFolder: true,

		/**
		 * A boolean value indicating whether this entry template is editable.
		 */
		editable: true,

		/**
		 * A string holding the declare as record setting. One of the values in ecm.model.EntryTemplate.DECLARE.
		 */
		declareRecord: "NEVER_DECLARE",

		/**
		 * An optional {@link ecm.model.WorkItem} object that specifies the workflow to launch on the content item.
		 */
		workflow: null,

		/**
		 * A string holding the workflow version. One of the values in
		 * <code>ecm.model.EntryTemplate.WORKFLOW_VERSION</code>.
		 * 
		 * @since 2.0.3
		 */
		workflowVersion: "released",

		/**
		 * A boolean indicating that the workflow is a pre-defined workflow (versus a custom workflow).
		 * 
		 * @since 2.0.3
		 */
		workflowPredefined: false,

		/**
		 * A boolean value indicating whether the workflow is launched by the user.
		 * 
		 * @since 2.0.3
		 */
		userLaunchesWorkflow: true,

		/**
		 * A boolean value indicating whether the user can modify the launch step.
		 * 
		 * @since 2.0.3
		 */
		userModifiesLaunchStep: true,

		/**
		 * A boolean value indicating whether the <strong>What do you want to save</strong> pull-down menu is displayd
		 * to the user.
		 * 
		 * @since 2.0.3
		 */
		allowUserSelectSaveChoice: true,

		/**
		 * A boolean value indicating whether the <strong>What do you want to save</strong> pull-down menu contains
		 * <strong>Local document</strong>.
		 * 
		 * @since 2.0.3
		 */
		allowSaveLocalDocument: true,

		/**
		 * FileNet P8 only. A boolean value indicating whether the <strong>What do you want to save</strong> pull-down
		 * menu contains <strong>Link to an external document</strong>.
		 * 
		 * @since 2.0.3
		 */
		allowSaveExternalDocumentLink: true,

		/**
		 * A boolean value indicating whether the <strong>What do you want to save</strong> pull-down menu contains
		 * <strong>Information about a document</strong>.
		 * 
		 * @since 2.0.3
		 */
		allowSavePropertiesOnly: true,

		/**
		 * A string that indicates if this entry template is the default for a teamspace. If the string is empty ("")
		 * this entry template is not the default for a teamspace.
		 */
		teamspaceDefault: "",

		/**
		 * A boolean value indicating whether the settings for this template have been retrieved.
		 */
		isRetrieved: false,

		/**
		 * A string value holding custom HTML markup from the layout designer. (This value can be null.)
		 * 
		 * @since 2.0.3
		 */
		markup: null,

		/**
		 * A string value holding custom resources from the layout designer. (This value can be null.)
		 * 
		 * @since 2.0.3
		 */
		resources: null,

		/**
		 * A string value of the custom layout properties pane class to be created.
		 * 
		 * @since 2.0.3
		 */
		layoutPropertiesPaneClass: "ecm/widget/LayoutPropertiesPane",

		/**
		 * A string value holding the entry template builder that will be created for this entry template.
		 * Plugin-writers can override this to provide a custom builder to handle their own entry templates.
		 * 
		 * @since 2.0.3
		 */
		entryTemplateBuilderWidgetClass: "ecm/widget/entryTemplateBuilder/Builder",

		/**
		 * A string value of the custom layout properties model integration class to be created.
		 * 
		 * @since 2.0.3
		 */
		modelIntegrationClass: "ecm/model/configuration/ModelIntegration",

		/**
		 * A string value of the custom layout properties control registry class to be created.
		 * 
		 * @since 2.0.3
		 */
		controlRegistryClass: "ecm/model/configuration/ControlRegistry",

		/**
		 * @private
		 */
		constructor: function() {
			if (!this.asMinorVersion) {
				this.asMinorVersion = new EntryTemplateOption({
					id: "asMinorVersion",
					name: "asMinorVersion",
					on: false,
					readOnly: false,
					hidden: false
				});
			}
			if (!this.checkinAsNewVersion) {
				this.checkinAsNewVersion = new EntryTemplateOption({
					id: "checkinAsNewVersion",
					name: "checkinAsNewVersion",
					on: true,
					readOnly: false,
					hidden: false
				});
			}
			if (!this.autoClassify) {
				this.autoClassify = new EntryTemplateOption({
					id: "autoClassify",
					name: "autoClassify",
					on: false,
					readOnly: true,
					hidden: true
				});
			}
			if (!this.enableCompoundDocuments) {
				this.enableCompoundDocuments = new EntryTemplateOption({
					id: "enableCompoundDocuments",
					name: "enableCompoundDocuments",
					on: false,
					readOnly: true,
					hidden: true
				});
			}
			if (!this.propertiesOptions) {
				this.propertiesOptions = [];
			}
		},

		/**
		 * @private
		 */
		_onChange: function() {
			if (!this._disableOnChange) {
				this.onChange(this);
			}
		},

		/**
		 * Returns the JSON representation of this entry template.
		 * 
		 * @since 2.0.3
		 */
		toJson: function() {
			var json = {
				id: this.id,
				name: this.name,
				description: this.description || "",
				type: this.type,
				objectStore: this.objectStore && this.objectStore.id ? this.objectStore.id : null,
				targetRepositoryId: this.targetRepository && this.targetRepository.id ? this.targetRepository.id : null,
				saveToFolder: this.saveToFolder && this.saveToFolder.id ? this.saveToFolder.id : null,
				saveToFolderInheritParentSecurity: this.saveToFolderInheritParentSecurity,
				useForProperties: this.useForProperties,
				useForViewerProperties: this.useForViewerProperties,
				useForCheckin: this.useForCheckin,
				useForDocumentInformationProperties: this.useForDocumentInformationProperties,
				allowUserSelectFile: this.allowUserSelectFile,
				allowDuplicateFileNames: this.allowDuplicateFileNames,
				allowUserSelectFolder: this.allowUserSelectFolder,
				restrictToSelectedFolderOrDescendant: this.restrictToSelectedFolderOrDescendant,
				allowNoFolderSelected: this.allowNoFolderSelected,
				addClassName: this.addClassName || "",
				allowUserSetPropertyValues: this.allowUserSetPropertyValues,

				propertiesOptions: this.propertiesOptions,

				// Custom layout design information
				markup: this.markup || "",
				resources: this.resources,
				modelIntegrationClass: this.modelIntegrationClass,
				controlRegistryClass: this.controlRegistryClass,

				allowUserSetSecurity: this.allowUserSetSecurity,
				overrideClassSecurity: this.overrideClassSecurity,
				inheritSecurityFromParentFolder: this.inheritSecurityFromParentFolder,
				userLaunchesWorkflow: this.userLaunchesWorkflow,
				userModifiesLaunchStep: this.userModifiesLaunchStep,
				allowUserSelectSaveChoice: this.allowUserSelectSaveChoice,
				allowSaveLocalDocument: this.allowSaveLocalDocument,
				allowSaveExternalDocumentLink: this.allowSaveExternalDocumentLink,
				allowSavePropertiesOnly: this.allowSavePropertiesOnly,
				folder: this.folder && this.folder.id ? this.folder.id : null,
				asMinorVersion: {
					on: this.asMinorVersion.on,
					hidden: this.asMinorVersion.hidden,
					readOnly: this.asMinorVersion.readOnly
				},
				checkinAsNewVersion: {
					on: this.checkinAsNewVersion.on,
					hidden: this.checkinAsNewVersion.hidden,
					readOnly: this.checkinAsNewVersion.readOnly
				},
				autoClassify: {
					on: this.autoClassify.on,
					hidden: this.autoClassify.hidden,
					readOnly: this.autoClassify.readOnly
				},
				enableCompoundDocuments: {
					on: this.enableCompoundDocuments.on,
					hidden: this.enableCompoundDocuments.hidden,
					readOnly: this.enableCompoundDocuments.readOnly
				},
				securityPolicy: this.securityPolicy && this.securityPolicy.id ? this.securityPolicy.id : null,
				permissions: this.permissions || [],
				templatePermissions: this.templatePermissions || [],
				declareRecord: this.declareRecord,
				teamspaceDefault: this.teamspaceDefault,
				workflow: this.workflow && this.workflow.id ? this.workflow.id : null,
				workflowVersion: this.workflowVersion || null,
				workflowPredefined: this.workflowPredefined,
				workflowName: this.workflow && this.workflow.name ? this.workflow.name : null
			};
			return json;
		},

		/**
		 * Returns a clone of this entry template.
		 * 
		 * @since 2.0.3
		 */
		clone: function() {
			var clone = new this.constructor({
				id: this.id,
				name: this.name
			});
			lang.mixin(clone, this);
			if (this.objectStore) {
				clone.objectStore = lang.clone(this.objectStore);
			}
			if (this.saveToFolder && lang.isFunction(this.saveToFolder.clone)) {
				clone.saveToFolder = this.saveToFolder.clone();
			}
			if (this.folder && lang.isFunction(this.folder.clone)) {
				clone.folder = this.folder.clone();
			}
			clone.enableCompoundDocuments = lang.clone(this.enableCompoundDocuments);
			clone.asMinorVersion = lang.clone(this.asMinorVersion);
			clone.checkinAsNewVersion = lang.clone(this.checkinAsNewVersion);
			clone.autoClassify = lang.clone(this.autoClassify);
			clone.propertiesOptions = lang.clone(this.propertiesOptions);
			clone.securityPolicy = lang.clone(this.securityPolicy);
			clone.permissions = lang.clone(this.permissions);
			clone.templatePermissions = lang.clone(this.templatePermissions);
			if (this.workflow && lang.isFunction(this.workflow.clone)) {
				clone.workflow = this.workflow.clone();
			}
			return clone;
		},

		/**
		 * Retrieves the entry template object information.
		 * 
		 * @param callback
		 *            A function called when the entry template information has been retrieved, it is passed this
		 *            {@link ecm.model.EntryTemplate} object.
		 * @param editMode
		 *            A boolean flag indicating if the entry template should be retrieved for editing (true) or for use
		 *            with an item (false).
		 * @param allowFailure
		 *            A boolean flag that tells the server to ignore any failure to retrieve the entry template. This is
		 *            set to true when attempting to retrieve the entry template associated with a document during
		 *            checkin action processing. It allows the checkin to proceed without raising an error if the entry
		 *            template used to add the document was deleted from the repository.
		 */
		retrieveEntryTemplate: function(callback, editMode, allowFailure) {
			if (this.isRetrieved) {
				//call event before the callback so custom properties can be mixed into this entry template as well.
				this.onEntryTemplateRetrieved(this);

				if (callback) {
					callback(this);
				}
			} else {
				var self = this;
				var params = {
					repositoryId: this.repository.id,
					template_name: this.id,
					form_type: editMode ? "edit" : "apply",
					form_mode: this.mode,
					allow_failure: allowFailure ? true : false
				};
				if (this.itemId) {
					params.itemId = this.itemId;
				}

				var request = Request.invokeService("openEntryTemplate", this.repository.type, params, function(response) {
					self._retrieveEntryTemplateCompleted(response, callback);
				});
			}
		},

		/**
		 * @private
		 */
		_retrieveEntryTemplateCompleted: function(response, callback) {
			if (response.id) {
				this._disableOnChange = true;
				try {
					if (response.json) { // ICN Entry Template
						// If there are updates to the entry template content item (was checked out), update it.
						if (response.rows && response.rows[0]) {
							var contentItem = ContentItem.createFromJSON(response.rows[0], this.repository, null, null);
							this.repository.onChange([
								contentItem
							]);
						}

						// Start by mixing in the full entry template json.
						lang.mixin(this, response.json);

						// Template saveToFolder
						if (response.json.saveToFolder) {
							this.saveToFolder = ContentItem.createFromJSON(response.json.saveToFolder, this.repository, null, null);
						} else {
							this.saveToFolder = null;
						}

						// Template permissions
						if (response.json.templatePermissions) {
							this.templatePermissions = Permission.createFromJSON(response.json.templatePermissions);
						} else {
							this.templatePermissions = null;
						}

						// Target repository
						this.targetRepository = this.repository;
						if (response.json.targetRepositoryId) {
							var repository = ecm.model.desktop.getRepository(response.json.targetRepositoryId);
							if (!repository && this.objectStore && this.objectStore.symbolicName) { // If the repository isn't in the list of repositories, then find it by its objectstore
								repository = ecm.model.desktop.getRepositoryOfObjectStore(this.objectStore.symbolicName);
							}
							if (repository) {
								this.targetRepository = repository;
							}
						}

						// New item destination
						if (response.json.folder && response.json.folder.selected) {
							this.folder = ContentItem.createFromJSON(response.json.folder.selected, this.targetRepository, null, null);
						} else {
							this.folder = null;
						}

						// New item Properties
						if (response.json.propertiesOptions) {
							this.propertiesOptions = [];
							for ( var i in response.json.propertiesOptions) {
								var propOptionsJSON = response.json.propertiesOptions[i];
								this.propertiesOptions.push(new EntryTemplatePropertyOptions(propOptionsJSON));
							}
						}

						// New item permissions
						if (response.json.permissions) {
							this.permissions = Permission.createFromJSON(response.json.permissions);
						} else {
							this.permissions = null;
						}

						// New item security policy
						if (response.json.securityPolicy) {
							this.securityPolicy = new SecurityPolicy(response.json.securityPolicy);
						}

						// New item workflow
						if (response.json.workflow) {
							response.json.workflow.repository = this.repository;
							if (this.repository._isP8()) {
								response.json.workflow.connectionPoint = this.repository.connectionPoint;
							}
							this.workflow = new WorkItem(response.json.workflow);
							this.workflow.name = response.json.workflowName;
						}

						// Options
						if (response.json.asMinorVersion) {
							response.json.asMinorVersion.id = "asMinorVersion";
							response.json.asMinorVersion.name = "asMinorVersion";
							this.asMinorVersion = new EntryTemplateOption(response.json.asMinorVersion);
						}
						if (response.json.checkinAsNewVersion) {
							response.json.checkinAsNewVersion.id = "checkinAsNewVersion";
							response.json.checkinAsNewVersion.name = "checkinAsNewVersion";
							this.checkinAsNewVersion = new EntryTemplateOption(response.json.checkinAsNewVersion);
						}
						if (response.json.autoClassify) {
							response.json.autoClassify.id = "autoClassify";
							response.json.autoClassify.name = "autoClassify";
							this.autoClassify = new EntryTemplateOption(response.json.autoClassify);
						}
						if (response.json.enableCompoundDocuments) {
							response.json.enableCompoundDocuments.id = "enableCompoundDocuments";
							response.json.enableCompoundDocuments.name = "enableCompoundDocuments";
							this.enableCompoundDocuments = new EntryTemplateOption(response.json.enableCompoundDocuments);
						}

						// Now apply the current settings from the top level of the response.
						this.id = response.id;
						if (response.vsId) {
							this.vsId = response.vsId;
						}
						if (response.itemId) {
							this.itemId = response.itemId;
						}
						this.name = response.displayName;
						this.description = response.description;
						this.mimetype = response.mimetype;
						this.type = response.entrytemplate_type;
						this.objectStore = response.objectStore;
						this.addClassName = response.template.template_name;
						this.addClassLabel = response.template.template_label;
						this.addClassDescription = response.template.template_desc;
					} else { // XT Entry Template
						this.id = response.id;
						this.vsId = response.vsId;
						this.name = response.displayName;
						this.description = response.description;
						this.mimetype = response.mimetype;
						this.type = response.entrytemplate_type;
						if (this.repository._isP8()) {
							this.objectStore = response.objectStore;
						}
						this.addClassName = response.template.template_name;
						this.addClassLabel = response.template.template_label;
						this.addClassDescription = response.template.template_desc;

						this.useForCheckin = response.useForCheckin;

						this.allowUserSelectFile = response.file.allowUserSelect;
						this.allowDuplicateFileNames = response.file.allowDuplicateFileNames;

						if (response.folder.selected) {
							this.folder = ContentItem.createFromJSON(response.folder.selected, this.repository, null, null);
						}
						this.allowUserSelectFolder = response.folder.allowUserSelect;
						this.restrictToSelectedFolderOrDescendant = response.folder.restrictToSelectedFolderOrDescendant;

						response.asMinorVersion.id = "asMinorVersion";
						response.asMinorVersion.name = "asMinorVersion";
						this.asMinorVersion = new EntryTemplateOption(response.asMinorVersion);

						response.autoClassify.id = "autoClassify";
						response.autoClassify.name = "autoClassify";
						this.autoClassify = new EntryTemplateOption(response.autoClassify);

						this.allowUserSetPropertyValues = response.template.allowUserSetPropertyValues;

						if (response.template.propertiesOptions) {
							this.propertiesOptions = [];
							for ( var i in response.template.propertiesOptions) {
								var propOptionsJSON = response.template.propertiesOptions[i];
								var option = new EntryTemplatePropertyOptions(propOptionsJSON);
								if (option.name == "CompoundDocumentState") {
									this.enableCompoundDocuments.on = option.defaultValue && option.defaultValue.length > 0 && option.defaultValue[0] == 1 ? true : false;
								}
								this.propertiesOptions.push(option);
							}
						}

						if (response.security.policy) {
							this.securityPolicy = new SecurityPolicy(response.security.policy);
						}
						this.permissions = Permission.createFromJSON(response.security.acl);
						this.allowUserSetSecurity = response.security.allowUserSelect;
						this.inheritSecurityFromParentFolder = response.security.inheritSecurityFromParentFolder;
						this.declareRecord = response.record.declare;

						if (response.workflow) {
							var workflow = response.workflow;
							workflow.repository = this.repository;
							workflow.connectionPoint = this.repository.connectionPoint;
							this.workflow = new WorkItem(workflow);
						}
						// By default, these options should be false for XT entry templates.
						this.useForProperties = false;
						this.useForViewerProperties = false;
						this.useForDocumentInformationProperties = false;
					}
				} catch (e) {
					this.logDebug("_retrieveEntryTemplateCompleted", "Error processing entry template retrieve response [" + dojojson.toJson(response) + "]", e.message);
				}

				this.isRetrieved = true;
				delete this._disableOnChange;
				this._onChange();
			}

			//call event before the callback so custom properties can be mixed into this entry template as well.
			this.onEntryTemplateRetrieved(this, response);

			if (callback) {
				callback(this, response);
			}
		},

		/**
		 * An event function called when the entry template has been retrieved.
		 * 
		 * @param template
		 *            A {@link ecm.model.EntryTemplate} object
		 * @param response
		 *            The response object used to retrieve this entry template if it exists.
		 */
		onEntryTemplateRetrieved: function(template, response) {
		}
	});

	/**
	 * Static function that registers a factory for sub-classes of <code>EntryTemplate</code>.
	 * 
	 * @param factory
	 *            A factory object with <code>createFromJSON()</code> method to possibly create a sub-class of
	 *            <code>EntryTemplate</code> from JSON. The factory method should return null when the given JSON is
	 *            not one for known sub-classes, giving chances for other factories to create one or falling back to the
	 *            default <code>EntryTemplate</code> construction.
	 * @memberof ecm.model.EntryTemplate
	 */
	EntryTemplate.registerFactory = function(factory) {
		if (!EntryTemplate._factories) {
			EntryTemplate._factories = [];
		}
		EntryTemplate._factories.push(factory);
	};

	/**
	 * Static function that registers a model integration extension for enhancing the Property Layout Editor controls.
	 * 
	 * @param modelIntegration
	 * @memberof ecm.model.EntryTemplate
	 */
	EntryTemplate.registerModelIntegration = function(modelIntegration) {
		if (!EntryTemplate._modelIntegration) {
			EntryTemplate._modelIntegration = [];
		}
		EntryTemplate._modelIntegration.push(modelIntegration);
	};

	/**
	 * Static function that registers a control registry extension for enhancing the Property Layout Editor controls.
	 * 
	 * @param controlRegistry
	 * @memberof ecm.model.EntryTemplate
	 */
	EntryTemplate.registerControlRegistry = function(controlRegistry) {
		if (!EntryTemplate._controlRegistry) {
			EntryTemplate._controlRegistry = [];
		}
		EntryTemplate._controlRegistry.push(controlRegistry);
	};

	/**
	 * Constructs an EntryTemplate given a JSON representation of the item.
	 * 
	 * @param itemJSON
	 *            The JSON representation of the content item.
	 * @private
	 */
	EntryTemplate.createFromJSON = function(itemJSON) {
		var item = null;

		// visit factories to see if one of them can create a sub-class from this JSON
		EntryTemplate._factories && array.some(EntryTemplate._factories, function(factory) {
			if (factory && factory.createFromJSON) {
				item = factory.createFromJSON(itemJSON);
			}
			return !!item;
		});

		if (!item) {
			item = new EntryTemplate(itemJSON);
		}

		return item;
	};

	/**
	 * This is the list of entry templates workflow version types.
	 * 
	 * @since 2.0.3
	 */
	EntryTemplate.WORKFLOW_VERSION = {
		RELEASED: "released",
		CURRENT: "current"
	};

	/**
	 * This is the list of entry templates object types. An entry template instance is defined to create content items
	 * of one of these types. Entry templates that create custom objects (type <code>CUSTOMOBJECT</code>) are not
	 * supported.
	 */
	EntryTemplate.TYPE = {
		DOCUMENT: "DOCUMENT",
		FOLDER: "FOLDER",
		CUSTOMOBJECT: "CUSTOMOBJECT"
	};

	/**
	 * This is the list of declare as record settings.
	 */
	EntryTemplate.DECLARE = {
		ALWAYS_DECLARE: "ALWAYS_DECLARE",
		OPTIONALY_DECLARE: "OPTIONALY_DECLARE",
		CLASSIFY_DECLARE: "CLASSIFY_DECLARE",
		CLASSIFY_OPTIONALLY: "CLASSIFY_OPTIONALLY",
		NEVER_DECLARE: "NEVER_DECLARE"
	};

	return EntryTemplate;
});
