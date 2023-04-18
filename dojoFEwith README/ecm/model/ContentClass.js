/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/array",
	"dojo/_base/lang",
	"./_ModelObject",
	"./_HasAttributesMixin"
], function(declare, array, lang, _ModelObject, _HasAttributesMixin) {

	/**
	 * Constructs a content class model object.
	 * 
	 * @param properties
	 *            The properties for the content class. The properties can be any of the public fields as defined below
	 *            and on ecm.model._ModelObject.
	 * @name ecm.model.ContentClass
	 * @class Represents a single class of items in the repository. The type of class that is represented depends on the
	 *        repository: <table width="406" border="1">
	 *        <tr>
	 *        <th width="196" scope="col">Repository</th>
	 *        <th width="194" scope="col">Items in class </th>
	 *        </tr>
	 *        <tr>
	 *        <td>IBM Content Manager </td>
	 *        <td>Item type </td>
	 *        </tr>
	 *        <tr>
	 *        <td>IBM FileNet P8 </td>
	 *        <td>Class</td>
	 *        </tr>
	 *        <tr>
	 *        <td>IBM Content Manager OnDemand </td>
	 *        <td>Application</td>
	 *        </tr>
	 *        </table>
	 * @augments ecm.model._ModelObject
	 */
	var ContentClass = declare("ecm.model.ContentClass", [
		_ModelObject,
		_HasAttributesMixin
	], {
		/** @lends ecm.model.ContentClass.prototype */

		/**
		 * An instance of {@link ecm.model.Repository} for the content repository containing the content class.
		 */
		repository: null,

		/**
		 * An array of {@link ecm.model.AttributeDefinition} objects for the attributes of this content class.
		 */
		attributeDefinitions: null,

		/**
		 * An object that references, by attribute name, the {@link ecm.model.AttributeDefinition} objects for the
		 * attributes of this content class.
		 */
		attributeDefinitionsById: null,

		/**
		 * A boolean value indicating if this content class is a pseudo class.
		 */
		pseudoClass: false,

		/**
		 * A boolean value indicating if this content class can have instances on the server.
		 */
		allowsInstances: true,

		/**
		 * IBM FileNet P8 only. This is an object valued property where the object store information is stored in the
		 * properties <code>id</code>, <code>symbolicName</code>, and <code>displayName</code>.
		 */
		objectStore: null,

		/**
		 * The P8 content class id string (symbolic name) of the parent content class of this content class. The value
		 * is not assigned until after the {@link ecm.model.ContentClass} method
		 * <code>retrieveAttributeDefinitions</code> is called.
		 * 
		 * @since 2.0.2
		 */
		parentClassId: null,

		/**
		 * IBM Content Manager only. The classification, one of the ecm.model.ContentClass.CLASSIFICATION values.
		 */
		classification: null,

		/**
		 * A boolean value indicating if content item instances of this class can store content.
		 */
		storesContent: true,

		/**
		 * IBM Content Manager only. The version control, one of the ecm.model.ContentClass.VERSION_CONTROL values.
		 */
		versionControl: "OPTIONAL",

		/**
		 * An array of {@link ecm.model.ContentClass} objects holding sub classes of this content class
		 */
		subClasses: null,

		/**
		 * An array of {@link ecm.model.AttributeDefinition} objects. Used in Searches.
		 */
		allAttributeDefinitions: null, // include P8 subclass properties.  Use in searches

		/**
		 * A boolean value indicating when this class supports text based searching.
		 */
		textSearchable: false,

		/**
		 * A boolean value indicating whether this class is hierarchical.
		 */
		hierarchical: false,

		/**
		 * A boolean value indicating whether this content class is supported only for folders.
		 */
		forFoldersOnly: false,

		/**
		 * A boolean value indicating whether this content class is supported for objects other than folders.
		 */
		notForFolders: false,

		/**
		 * IBM Content Manager only. A boolean value indicating whether this content class uses the item type security
		 * for all {@link ecm.model.ContentItem} instances of this content class. If this value is false, security is
		 * assigned to each {@link ecm.model.ContentItem} instance of this content class.
		 */
		itemTypeSecurity: false,

		/**
		 * IBM Content Manager only. A boolean value indicating whether a new {@link ecm.model.ContentItem} instance of
		 * this content class will inherit the security settings from the folder where the new instance is filed. This
		 * setting applies when this content class is configured for item security (itemTypeSecurity is false).
		 * <p>
		 * For information about determining how an access control list (ACL) is assigned when an IBM Content Manager
		 * item is created, see: <a
		 * href="http://www.ibm.com/support/knowledgecenter/SSRS7Z_8.5.0/com.ibm.administeringcm.doc/mua20010.htm">ACL
		 * assignment when an item is created</a>.
		 * 
		 * @since 2.0.3
		 */
		inheritSecurityFromParentFolder: false,

		/**
		 * IBM Content Manager only. A boolean value indicating whether a new {@link ecm.model.ContentItem} instance of
		 * this content class will be assigned the item type security (true) or the current user's default security for
		 * new items (false). This setting applies when this content class is configured for item security
		 * (itemTypeSecurity is false).
		 * 
		 * @since 2.0.3
		 */
		defaultSecurityFromClass: null,

		/**
		 * IBM Content Manager only. A boolean value indicating whether or not this class supports tracking Box share
		 * items.
		 * 
		 * @since 2.0.3.6
		 */
		supportsBoxShareTracking: false,

		/**
		 * IBM Content Manager only. A boolean value indicating whether or not this class supports tracking the entry
		 * template used to create items of this class.
		 * 
		 * @since 2.0.3
		 */
		supportsEntryTemplateTracking: false,

		/**
		 * IBM Content Manager only. A boolean value indicating whether or not entry templates can be associated with
		 * hierarchical folder instances of this class.
		 * 
		 * @since 2.0.3
		 */
		supportsEntryTemplateFolderAssociations: false,

		/**
		 * IBM Content Manager only. A boolean value indicating whether or not entry templates can be associated with
		 * hierarchical folder instances of this class.
		 * 
		 * @since 2.0.3
		 */
		supportsOOSReferenceAttribute: false,
		
		/**
		 * A boolean value to indicate if this class is the default for a teamspace.
		 */
		teamspaceDefault: false,

		/**
		 * Holds the name attribute value for the content class.
		 */
		nameAttribute: null,

		/**
		 * The privilege properties granted by this content class. Privileges should be checked by calling the
		 * hasPrivilege(privilege) method.
		 * 
		 * @since 2.0.2
		 */
		privileges: null,

		/**
		 * A boolean value indicating if EDS is enabled for this class.
		 * 
		 * @since 2.0.3.6
		 */
		edsIsEnabled: false,
		
		/**
		 * Content Management Interoperability Services (CMIS) only. A boolean value indicating whether items of this class may be returned
		 * when you query against one of its ancestor classes.
		 * 
		 * @since 2.0.3.8
		 */
		includedInSuperClassQuery: null,

		/**
		 * @private
		 */
		constructor: function() {
			if (this.objectStore == null && this.repository && this.repository.objectStore) {
				this.objectStore = this.repository.objectStore;
			}
		},

		_retrieveAttributeDefinitionsCompleted: function(response, sharedRequestParams) {
			this.logEntry("_retrieveAttributeDefinitionsCompleted");

			// Updating the display name since Repository.getContentClass creates a content class using the id for the name.
			if (response.template_label)
				this.name = response.template_label;

			if (this.repository._isCM()) {
				response.allowsInstances = true;
				response.itemTypeSecurity = response.item_type_acl;
			}

			// Update the class settings. They may not have been retrieved when this content class was first created.
			lang.mixin(this, response);

			// Remove response parameters brought in by the mixin call that are assigned to other content class property names.
			delete this.parm_childcomponents;
			delete this.parm_securitypolicy;
			delete this.parm_name_attribute;
			delete this.item_type_acl;
			delete this.template_name;
			delete this.template_label;
			delete this.template_desc;

			this.inherited(arguments);

			// For CM, check to see if the class supports sharing.
			if (this.repository._isCM() && this.attributeDefinitionsById["clbShareId"] != null) {
				this.supportsBoxShareTracking = true;
			}
			
			// For CM, check to see if the class supports OOS reference attribute.
			if (this.repository._isCM() && this.attributeDefinitionsById["clbICMDraft"] != null) {
				this.supportsOOSReferenceAttribute = true;
			}

			this.logExit("_retrieveAttributeDefinitionsCompleted");
		},

		_createAttributeDefinitions: function(response) {
			this.logEntry("_createAttributeDefinitions");
			var attributeDefinitions = this.inherited(arguments);
			array.forEach(attributeDefinitions, function(criterion) {
				if (criterion.markingList) {
					if (!this.markingProperties) {
						this.markingProperties = {};
					}
					this.markingProperties[criterion.id] = criterion.markingList;
				}
			}, this);

			if (response.parm_securitypolicy) { // P8 Security Policy
				this.securityPolicy = new ecm.model.SecurityPolicy(response.parm_securitypolicy);
			}

			if (response.parm_name_attribute) { // CM Name attribute
				this.nameAttribute = response.parm_name_attribute;
			}
			this.logExit("_createAttributeDefinitions");
			return attributeDefinitions;
		},

		_retrieveAttributeDefinitionsForSearchesCompleted: function(response, callback) {
			this.logEntry("_retrieveAttributeDefinitionsForSearchesCompleted");
			//updating the name since Repository.getContentClass creates a content class using the id as the name.
			if (response.template_label)
				this.name = response.template_label;
			this.inherited(arguments);
			this.logExit("_retrieveAttributeDefinitionsForSearchesCompleted");
		},

		/**
		 * Retrieves the content classes that derive from this content class.
		 * 
		 * @param callback
		 *            A function that is invoked when the subclasses have been retrieved. An array of
		 *            {@link ecm.model.ContentClass} objects for the subclasses are passed to the function.
		 * @param filterType
		 *            A string specifying the type of filter.
		 */
		retrieveSubClasses: function(callback, filterType) {
			this.logEntry("retrieveSubClasses");

			if (this.repository.type != "p8" && this.repository.type != "cmis") { // p8 and cmis have subclasses
				if (callback) {
					callback([]);
				}
			} else {
				// Only CM filters the class list for "editItem".
				if (filterType == "editItem") {
					filterType = null;
				} else if (this.repository.type == "p8") { // P8 filtered class lists are the same as the full class list - except for "search"
					if (filterType != "search") {
						filterType = null;
					}
				}

				var subClasses;

				if (this.subClasses) {
					if (filterType) {
						if (this.subClasses.byFilterType) {
							subClasses = this.subClasses.byFilterType[filterType];
						}
					} else {
						subClasses = this.subClasses.all;
					}
				}

				if (subClasses) {
					if (callback) {
						callback(subClasses);
					}
				} else {
					var self = this;
					var request = ecm.model.Request.invokeService("getContentClasses", this.repository.type, {
						repositoryId: this.repository.id,
						objectStoreId: this.objectStore ? this.objectStore.id : "",
						class_name: this.id,
						filter_type: filterType
					}, function(response) {
						self._retrieveSubClassesCompleted(response, callback, filterType);
					});
				}
			}
			this.logExit("retrieveSubClasses");
			return request;
		},

		_retrieveSubClassesCompleted: function(response, callback, filterType) {
			this.logEntry("_retrieveSubClassesCompleted");
			var subClasses = [];
			for ( var i in response.datastore.items) {
				var templateJSON = response.datastore.items[i];
				//var template = new ecm.model.ContentClass(templateJSON.template_name, templateJSON.template_label, this.repository, false, (templateJSON.allowsInstances == 'true'));
				var subClass = this.repository.getContentClass(templateJSON.template_name, this.objectStore);
				subClass.name = templateJSON.template_label;
				subClass.allowsInstances = templateJSON.allowsInstances;
				subClass.includedInSuperClassQuery = templateJSON.includedInSuperClassQuery;
				subClass.pseudoClass = false;
				subClasses.push(subClass);
			}
			// cache subclass list
			if (!this.subClasses) {
				this.subClasses = {};
			}
			if (filterType) {
				if (!this.subClasses.byFilterType) {
					this.subClasses.byFilterType = {};
				}
				this.subClasses.byFilterType[filterType] = subClasses;
			} else {
				this.subClasses.all = subClasses;
			}

			// Update the class display name/info. Sometimes the class is created with just the
			// symbolic name as the display name, so update it here if it is available
			if (response.parentclass) {
				if (response.parentclass.name) {
					this.name = response.parentclass.name;
				}
				if (response.parentclass.allowsInstances != undefined) {
					this.allowsInstances = response.parentclass.allowsInstances;
				}
			}

			if (callback) {
				callback(subClasses);
			}
			this.logExit("_retrieveSubClassesCompleted");
		},

		/**
		 * Retrieves the default instance permissions from this content class.
		 * 
		 * @param callback
		 *            A function that is invoked when the default instance permissions have been retrieved. An
		 *            {@link ecm.model.Permission} object for the default instance permissions.
		 * @param callback
		 * @since 2.0.3 Set to true to not replacing the #CREATOR_OWNER account with the current signed in user.
		 *        (FileNet P8 only)
		 */
		retrieveDefaultInstancePermissions: function(callback, retainCreatorOwner) {
			this.logEntry("retrieveDefaultInstancePermissions");
			var defaultInstancePermissions;
			if (retainCreatorOwner && this.repository._isP8()) {
				defaultInstancePermissions = this.defaultInstancePermissionsWithCreatorOwner;
			} else {
				defaultInstancePermissions = this.defaultInstancePermissions;
			}
			// Return the cache permissions
			if (defaultInstancePermissions) {
				if (callback) {
					callback(defaultInstancePermissions);
				}
			} else { // Retrieve permission from the server
				var request = ecm.model.Request.invokeService("getDefaultInstancePermissions", this.repository.type, {
					repositoryId: this.repository.id,
					objectStoreId: this.objectStore ? this.objectStore.id : "",
					class_name: this.id,
					retainCreatorOwner: !!retainCreatorOwner
				}, lang.hitch(this, function(response) {
					defaultInstancePermissions = ecm.model.Permission.createFromJSON(response.acl);
					if (retainCreatorOwner && this.repository._isP8()) {
						this.defaultInstancePermissionsWithCreatorOwner = defaultInstancePermissions;
					} else {
						this.defaultInstancePermissions = defaultInstancePermissions;
					}
					if (callback) {
						callback(defaultInstancePermissions);
					}
				}));
			}
			this.logExit("retrieveDefaultInstancePermissions");
			return request;
		},

		/**
		 * Returns true if this content class grants the privilege. If the privilege name is not found then it is
		 * assumed to be granted.
		 * 
		 * @since 2.0.2
		 */
		hasPrivilege: function(privilege) {
			return this.privileges == null || this.privileges[privilege] == null || this.privileges[privilege];
		},

		/**
		 * Returns a clone of this content class. All contents are cloned except for the repository and subClasses
		 * properties. The references are copied. References to the content class are replaced with a reference to the
		 * cloned content class.
		 * 
		 * @since 2.0.3
		 */
		clone: function() {
			// First create a minimal attribute definition.
			var clone = new ecm.model.ContentClass({
				id: this.id,
				name: this.name
			});

			// Clone the contents.
			for ( var prop in this) {
				if (this.hasOwnProperty(prop)) {
					// Copy the reference to the repository and subClasses.
					if (prop == "repository" || prop == "subClasses") {
						clone[prop] = this[prop];
					} else if (prop == "attributeDefinitions" || prop == "allAttributeDefinitions" || prop == "childComponentDefinitions" || prop == "criterias") {
						if (this[prop]) {
							clone[prop] = [];
							array.forEach(this[prop], lang.hitch(this, function(entry) {
								if (lang.isObject(entry)) {
									var cloneEntry;
									if (lang.isFunction(entry.clone)) {
										cloneEntry = entry.clone();
									} else {
										cloneEntry = {};
										for ( var entryProp in entry) {
											if (entry.hasOwnProperty(entryProp)) {
												if (entryProp != "contentClass") {
													cloneEntry[entryProp] = lang.clone(entry[entryProp]);
												}
											}
										}
									}
									// Use the content class clone reference.
									if (entry.hasOwnProperty("contentClass")) {
										cloneEntry.contentClass = clone;
									}
									clone[prop].push(cloneEntry);
								} else {
									clone[prop].push(entry);
								}
							}));
						} else {
							clone[prop] = this[prop];
						}
					} else if (prop != "attributeDefinitionsById") { // This will be recreated from the cloned attribute definitions.
						clone[prop] = lang.clone(this[prop]);
					}
				}
			}

			if (clone.attributeDefinitions) {
				clone.attributeDefinitionsById = {};
				array.forEach(clone.attributeDefinitions, lang.hitch(this, function(attrDef) {
					clone.attributeDefinitionsById[attrDef.id] = attrDef;
				}));
			}

			return clone;
		}
	});

	/**
	 * IBM Content Manager only. Item type classifications.
	 */
	ContentClass.CLASSIFICATION = {
		ITEM: "ITEM",
		RESOURCE: "RESOURCE",
		DOCUMENT: "DOCUMENT"
	};

	/**
	 * IBM Content Manager only. Item type version control options.
	 */
	ContentClass.VERSION_CONTROL = {
		NEVER: "NEVER",
		ALWAYS: "ALWAYS",
		OPTIONAL: "OPTIONAL"
	};

	return ContentClass;
});
