/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/window",
	"dojo/_base/array",
	"dojo/io-query",
	"dojo/has",
	"dojo/dom-construct",
	"dojo/dom-attr",
	"./_ModelObject"
], function(declare, lang, win, array, ioQuery, has, domConstruct, domAttr, _ModelObject) {

	/**
	 * Constructs an item. Normally, subclasses of ecm.model.Item are constructed rather than ecm.model.Item itself, but
	 * ecm.model.Item objects can be constructed for situations where items are needed that do not actually exist on the
	 * server.
	 * 
	 * @param properties
	 *            The properties for the item. The properties can be any of the public fields as defined below and on
	 *            ecm.model._ModelObject.
	 * @name ecm.model.Item
	 * @class Represents an item in a repository. An item can be a document, folder, work item, or other resource that
	 *        is managed by the repository.
	 *        <p>
	 *        Typically, an item is obtained from a result set. However, an item can be obtained directly by using the
	 *        {@link ecm.model.Repository.retrieveItem} method.
	 *        </p>
	 *        <p>
	 *        <strong>Important:</strong> The attributes or properties of an item might not be completely retrieved
	 *        initially. To ensure that all attributes of an item are retrieved, call the
	 *        {@link ecm.model.Item.retrieveAttributes} method.
	 *        </p>
	 * @augments ecm.model._ModelObject
	 */
	var ItemFactory = declare("ecm.model.Item", [
		_ModelObject
	], {
		/** @lends ecm.model.Item.prototype */

		/**
		 * The type of the item. For simple documents this is MIME content type, but other items on the server are given
		 * mimetypes as well to distinguish them.
		 */
		mimetype: undefined,

		/**
		 * An instance of {@link ecm.model.Repository} representing the repository on which this item is (or will be)
		 * stored.
		 */
		repository: null,

		/**
		 * The attributes object contains the values for the user and system attributes associated with this item. There
		 * is a field for each attribute name. The field value is the attribute value.
		 */
		attributes: null,

		/**
		 * An instance of {@link ecm.model.ResultSet} representing the result set that this item was obtained from, if
		 * any.
		 */
		resultSet: null,

		/**
		 * An instance of {@link ecm.model.Item} for the item that is the parent of this item, if any.
		 */
		parent: null,

		/**
		 * A bitstring containing privileges for the item. The bits are as defined by Item.PrivilegeToBitmask.
		 */
		privileges: 0,

		/**
		 * A boolean indicating if the item is locked on the server.
		 */
		locked: false,

		/**
		 * The userid of the user who has locked the item on the server.
		 */
		lockedUser: "",

		/**
		 * The identifier of the entry template used to add this item, if any.
		 */
		entryTemplateId: undefined,

		/**
		 * A boolean indicating that the item is deleted on the server.
		 */
		deleted: false,

		/**
		 * A boolean indicating that this repository item is a simple property container. For P8 repositories, this is
		 * equivalent to a CustomObject. For CM Repositories, this is equivalent to a no content item.
		 * 
		 * @since 2.0.2
		 */
		dataObject: false,

		/**
		 * @private An object containing the labels for the user and system attributes associated with this item. There
		 *          is a field for each attribute name. The field value is the attribute label.
		 */
		attributeLabels: null,

		/**
		 * @private An object containing the types for the user and system attributes associated with this item. There
		 *          is a field for each attribute name. The field value is the attribute data type.
		 */
		attributeTypes: null,

		/**
		 * @private An object containing the formats for the user and system attributes associated with this item. There
		 *          is a field for each attribute name. The field value is the attribute string format.
		 */
		attributeFormats: null,

		/**
		 * @private An object containing the display values for the user and system attributes associated with this
		 *          item. There is a field for each attribute name. The field value contains the attribute display
		 *          values.
		 */
		attributeDisplayValues: null,

		/**
		 * @private An object containing the read only setting for the user and system attributes associated with this
		 *          item. There is a field for each attribute name. The field value contains the attribute read only
		 *          setting, true or false. The value does not necessarily take the class attribute definition read only
		 *          setting into account. The method isAttributeReadOnly() checks both the class attribute definition
		 *          read only setting and the setting for the property on this item.
		 */
		attributeReadOnly: null,

		/**
		 * @private List of system properties for this Item.
		 */
		attributeSystemProperty: null,

		/**
		 * @private An object containing the time zone offsets for date attributes associated with this item.
		 */
		attributeValueTimeZoneOffsets: null,

		/**
		 * @private An object containing the read only user information for system attributes associated with this item.
		 *          There is a field for each system property containing a user name. This object will only be populated
		 *          for items from P8 repositories.
		 */
		attributeUserInfo: null,

		/**
		 * @private An object containing Items for property values that reference other Items in a repository. There is
		 *          a field for each attribute name. the field value contains the Item referenced by the property value.
		 */
		attributeItems: null,

		/**
		 * @private
		 */
		constructor: function() {
			if (this.objectStore == null && this.objectStoreId != null) {
				this.objectStore = {
					id: this.objectStoreId,
					symbolicName: this.objectStoreName,
					displayName: this.objectStoreDisplayName,
					capabilityComment: this.capabilityComment,
					supportsDownloadCount: this.supportsDownloadCount,
					supportsRecommendation: this.supportsRecommendation,
					supportsTag: this.supportsTag,
					supportsBoxShare: this.supportsBoxShare
				};
			}
			if (!this.attributes) {
				this.attributes = {};
			}
			if (!this.attributeLabels) {
				this.attributeLabels = {};
			}
			if (!this.attributeTypes) {
				this.attributeTypes = {};
			}
			if (!this.attributeFormats) {
				this.attributeFormats = {};
			}
			if (!this.attributeDisplayValues) {
				this.attributeDisplayValues = {};
			}
			if (!this.attributeReadOnly) {
				this.attributeReadOnly = {};
			}
			if (!this.attributeSystemProperty) {
				this.attributeSystemProperty = {};
			}
			if (!this.attributeUserInfo) {
				this.attributeUserInfo = {};
			}
			if (!this.attributeItems) {
				this.attributeItems = {};
			}
			if (!this.attributeValueTimeZoneOffsets) {
				this.attributeValueTimeZoneOffsets = {};
			}
		},

		/**
		 * @private Returns the MIME content type for this item.
		 */
		getContentType: function() {
			// If no MIME type is assigned return empty string "" for the MIME type.
			return this.mimetype || "";
		},

		/**
		 * Returns an array of the complete path.
		 */
		getPath: function() {
			var array = [];
			var item = this;
			while (item) {
				array.push(item);
				item = item.parentFolder ? item.parentFolder : item.parent;
			}
			return array.reverse();
		},

		/**
		 * Retrieves all attributes for the item. Depending on how the item was originally created, it may only contain
		 * a subset of the attributes. This function will retrieve any additional missing attributes.
		 * 
		 * @param callback
		 *            A function that is called when the attribute refresh has completed.
		 */
		retrieveAttributes: function(callback) {
			this.logEntry("retrieveAttributes");
			if (callback) {
				callback(this);
			}
			this.logExit("retrieveAttributes");
		},

		/**
		 * Returns an instance of {@link ecm.model.ContentClass} for items of this class, if known. Some items, such as
		 * work items will not have an associated content class as they are not stored on the content repository
		 * directly. In such cases, this will return null.
		 */
		getContentClass: function() {
			if (!this.template) {
				return null;
			}
			return this.repository.getContentClass(this.template);
		},

		/**
		 * Returns true if the specified attribute has the value given. For multi-value attributes, this will return
		 * true if any value has the given value.
		 * 
		 * @param attribute
		 *            The identifier for the attribute.
		 * @param value
		 *            The value to test.
		 */
		containsValue: function(attribute, value) {
			var v = this.attributes[attribute];
			if (value == v) {
				return true;
			} else if (lang.isArray(v)) {
				for ( var i in v) {
					if (value == v[i]) {
						return true;
					}
				}
			}
			return false;
		},

		/**
		 * Returns the value of an attribute.
		 * 
		 * @param attribute
		 *            The attribute identifier.
		 */
		getValue: function(attribute) {
			return this.attributes[attribute];
		},

		/**
		 * Returns an array of values for the attribute. For a single-value attribute this will be an array of one
		 * value. For multi-value attributes, this will be an array with all values of the attribute.
		 * 
		 * @param attribute
		 *            The attribute identifier.
		 */
		getValues: function(attribute) {
			var v = this.attributes[attribute];
			if (v instanceof Array) {
				return v;
			} else {
				return [
					v
				];
			}
		},

		setValue: function(attribute, value) {
			this.attributes[attribute] = value;
		},

		setValues: function(attribute, values) {
			this.attributes[attribute] = values;
		},

		/**
		 * For xs:object property type, returns the Item value, if it was retrieved with this Item. This method can
		 * return null, even if the xs:object property has an assigned value. Use getValue to get the actual assigned
		 * value (the item id)
		 * 
		 * @since 2.0.2
		 * @param attribute
		 *            The attribute identifier.
		 */
		getItemValue: function(attribute) {
			var itemValue = null;
			if (this.attributeItems && this.attributeItems[attribute]) {
				itemValue = this.attributeItems[attribute];
			}

			return itemValue;
		},

		/**
		 * Returns the custom label for this System Property
		 * 
		 * @param attribute
		 *            The attribute identifier.
		 */
		getAttrLabel: function(attribute) {
			return this.attributeLabels[attribute];
		},

		/**
		 * Checks if a given attribute is a System Property
		 */
		isSystemProperty: function(attribute) {
			return this.attributeSystemProperty[attribute];
		},

		/**
		 * Returns the MIME class (file type) for this item's MIME type.
		 */
		getMimeClass: function() {
			var mimeType = this.mimetype || "";
			var iconClass;
			if (this.isFolder()) {
				if (this.syncEnabled) {
					iconClass = "ftFolderSyncedIcon";
				} else if (this.isExternal) {
					iconClass = "ftFolderSharedIcon";
				} else if (this.hasCollaborations) {
					iconClass = "ftFolderCollaborationIcon";
				} else {
					iconClass = "dijitIconFolderClosed";
				}
			} else {
				iconClass = ecm.model.Item.MimeTypeToFileType[mimeType];
				if (!iconClass) {
					if ((mimeType == "") || (mimeType == "item")) {
						iconClass = "ftNoContent";
					} else if (mimeType.substr(0, "audio/".length) == "audio/") {
						iconClass = ecm.model.Item.MimeTypeToFileType["audio/*"] || "ftAudio";
					} else if (mimeType.substr(0, "image/".length) == "image/") {
						iconClass = ecm.model.Item.MimeTypeToFileType["image/*"] || "ftGraphic";
					} else if (mimeType.substr(0, "video/".length) == "video/") {
						iconClass = ecm.model.Item.MimeTypeToFileType["video/*"] || "ftVideo";
					} else if (mimeType == "teamspace" || mimeType == "Teamspace") {
						iconClass = "ecmTeamspaceIcon";
					} else if (mimeType == "application/x-unifiedsearchtemplate") {
						iconClass = "ftUnifiedSearch";
					} else if (mimeType == "application/x-icn-documententrytemplate") {
						iconClass = "ftIcnDocumentEntryTemplate";
					} else if (mimeType == "application/x-icn-folderentrytemplate") {
						iconClass = "ftIcnFolderEntryTemplate";
					} else if (mimeType == "application/x-icn-declarerecordentrytemplate") {
						iconClass = "ftIcnDeclareRecordEntryTemplate";
					} else {
						iconClass = "ftDefault";
					}
				}
			}
			return iconClass;
		},

		/**
		 * Returns the State icon CSS class for that specified state
		 * 
		 * @param state
		 *            The id from Admin of the particular state class you are looking for
		 */
		getStateClass: function(state) {
			var stateClass = ecm.model.Item.StateToCssClass[state];
			if (!stateClass) {
				stateClass = "";
			}
			return stateClass;
		},

		/**
		 * Returns the attribute value in a format that can be displayed in the user interface.
		 * <p>
		 * Note: The display value is normally created by using ValueFormatter.formatValue based on the attribute value
		 * and thus will change if the attribute value is changed (using setValue). However, if a special display value
		 * was returned for the attribute from the the server then the display value will not change even if the value
		 * is changed using setValue.
		 * 
		 * @param attribute
		 *            The name of the attribute.
		 */
		getDisplayValue: function(attribute) {
			if (this.attributeDisplayValues[attribute]) {
				return this.attributeDisplayValues[attribute];
			}

			// Format P8 date/time properties as dates if hiding the time portion is configured in the desktop.
			var formatter = this.attributeFormats[attribute];
			var dataType = this.attributeTypes[attribute];
			var formattedValue;
			if (ecm.model.desktop.enableHideTimePortion && this.attributeTypes[attribute] == "xs:timestamp" && this.repository.type == "p8" && !this.attributeSystemProperty[attribute] && ecm.model.desktop.valueFormatter.formatTimestampHideTime) {
				formattedValue = ecm.model.desktop.valueFormatter.formatTimestampHideTime(this.attributes[attribute], this.attributeValueTimeZoneOffsets ? this.attributeValueTimeZoneOffsets[attribute] : null);
			} else {
				formattedValue = ecm.model.desktop.valueFormatter.formatValue(this.attributes[attribute], dataType, formatter, this.attributeValueTimeZoneOffsets ? this.attributeValueTimeZoneOffsets[attribute] : null);
			}
			return formattedValue;
		},

		/**
		 * Returns true if the attribute is read only, otherwise returns false. Includes checking the class attribute
		 * definition read only setting and the item read only setting.
		 * 
		 * @param attribute
		 *            The name of the attribute.
		 */
		isAttributeReadOnly: function(attribute) {
			// Default is not read only.
			var readOnly = false;

			// Retrieve the class read only setting for the attribute.
			var contentClass = this.getContentClass();
			var attrDef = contentClass && contentClass.attributeDefinitionsById && contentClass.attributeDefinitionsById[attribute];
			if (attrDef != null) {
				readOnly = attrDef.readOnly;
			}

			if (!readOnly && this.attributeReadOnly[attribute] === true) {
				readOnly = true;
			}

			return readOnly;
		},

		/**
		 * Returns true if the attribute exists on this item.
		 * 
		 * @param attribute
		 *            The attribute identifier to test.
		 */
		hasAttribute: function(attribute) {
			return (typeof this.attributes[attribute] != "undefined");
		},

		/**
		 * Returns the type of the attribute.
		 * 
		 * @param attribute
		 *            The attribute name
		 * @returns {string} The type of the attribute
		 */
		getAttributeType: function(attribute) {
			return this.attributeTypes[attribute];
		},

		/**
		 * Returns the format of the attribute.
		 * 
		 * @param attribute
		 *            The attribute name
		 * @returns {string} The format of the attribute
		 */
		getAttributeFormat: function(attribute) {
			return this.attributeFormats[attribute];
		},

		/**
		 * Returns true if the item is a container of other items.
		 */
		isFolder: function() {
			return this.mimetype == "folder";
		},

		/**
		 * Returns true if the item is an entry template that creates documents.
		 * 
		 * @since 2.0.3
		 */
		isDocumentEntryTemplate: function() {
			return this.mimetype && this.mimetype.indexOf("application/x-") == 0 && this.mimetype.indexOf("-documententrytemplate") != -1;
		},

		/**
		 * Returns true if the item is an entry template that creates folders.
		 * 
		 * @since 2.0.3
		 */
		isFolderEntryTemplate: function() {
			return this.mimetype && this.mimetype.indexOf("application/x-") == 0 && this.mimetype.indexOf("-folderentrytemplate") != -1;
		},

		/**
		 * Returns true if the item is an entry template that declares records.
		 * 
		 * @since 2.0.3
		 */
		isDeclareRecordEntryTemplate: function() {
			return this.mimetype && this.mimetype.indexOf("application/x-") == 0 && this.mimetype.indexOf("-declarerecordentrytemplate") != -1;
		},

		/**
		 * Returns true if the item is an entry template.
		 * 
		 * @since 2.0.3
		 */
		isEntryTemplate: function() {
			return this.isDocumentEntryTemplate() || this.isFolderEntryTemplate() || this.isDeclareRecordEntryTemplate() || (this.repository && (this.repository._isP8() && this.template == "EntryTemplate" || this.repository._isCM() && this.template == "ICMEntryTemplate"));
		},

		/**
		 * Returns true if the item content is a TIFF file.
		 * 
		 * @since 3.0.1
		 */
		isContentTiff: function() {
			return !!ItemFactory.TiffMimeTypes[this.mimetype];
		},

		/**
		 * Returns the date when this item was last modified.
		 */
		getModifyDate: function() {
			return this.attributes["Date Last Modified"] || this.attributes["DateLastModified"] || this.attributes["modifiedTimestamp"] || this.attributes["cmis:lastModificationDate"] || null;
		},

		/**
		 * Returns the user identifier for the user that last modified the item.
		 */
		getModifyUser: function() {
			return this.attributes["Last Modifier"] || this.attributes["LastModifier"] || this.attributes["modifiedBy"] || this.attributes["cmis:lastModifiedBy"] || null;
		},

		/**
		 * Returns the user information for the given property name.
		 * 
		 * @since 2.0.3
		 */
		getUserInfo: function(propertyName) {
			// for CM8, no User object is available, return the corresponding value in attributes
			return this.attributeUserInfo[propertyName] || (this.attributes && this.attributes[propertyName]);
		},

		/**
		 * Returns true if this item has the specified privilege.
		 */
		hasPrivilege: function(privilege) {
			var returnValue = false;

			// first check the privilege  bits
			if (this.privileges && ecm.model.Item.PrivilegeToBitmask[privilege]) {
				returnValue = (this.privileges & ecm.model.Item.PrivilegeToBitmask[privilege]) != 0;
			} else {
				// Otherwise, look for a property by the same name as the privilege
				returnValue = this[privilege] ? (this[privilege] == "true" || this[privilege] == true) : false;
			}

			if (returnValue && (this.locked == true || this.locked == "true")) {
				if (this.repository.type == "box") { // Box repository.userId is an id while the lockUser is a name.  Use repository.userDisplayName instead.
					if (privilege == "privEditDoc" || privilege == "privEditProperties") {
						returnValue = this.repository.userDisplayName.toUpperCase() == this.lockedUser.toUpperCase();
					}
				} else {
					if (privilege == "privEditDoc" || privilege == "privEditProperties" || (privilege == "privEditAnnotations" && this.repository.type == "cm")) {
						returnValue = this.repository.userId.toUpperCase() == this.lockedUser.toUpperCase();
					}
				}
			}
			return returnValue;
		},

		_getSearchVersion: function(resultSet, repository) {
			var version = null;
			var repo = repository ? repository : this.repository;

			if (!resultSet) {
				resultSet = this.resultSet;
			}

			if (repo) {
				if (resultSet && resultSet._versionLookup && resultSet._versionLookup[repo.id]) {
					var versionOption = resultSet._versionLookup[repo.id];
					if (versionOption == "releasedversion")
						version = "released";
					else if (versionOption == "currentversion")
						version = "current";
					else if (versionOption == "allversions")
						version = "specific";
				} else if (repo.type == "box" && this.attributes.version_number && this.attributes.version_number.length > 0) {
					version = this.attributes.version_number[0];
				}
			}
			if (!version && resultSet && resultSet.context == "PropertiesVersions")
				version = "specific";

			return version;
		}
	});

	ItemFactory.getBookmark = function(item, version, desktopId, repositoryId, repositoryType, templateName, wcProxy) {
		var linkUrl;
		var _templateName;

		if (item.isInstanceOf && item.isInstanceOf(ecm.model.Teamspace))
			_templateName = item.className;
		else
			_templateName = templateName ? templateName : item.template;

		var queryParams = {
			desktop: (desktopId ? desktopId : ecm.model.desktop.id),
			repositoryId: (repositoryId ? repositoryId : item.repository.id),
			repositoryType: (repositoryType ? repositoryType : item.repository.type),
			docid: item.id,
			mimeType: item.mimetype,
			template_name: _templateName
		};

		if (!repositoryType)
			repositoryType = item.repository.type;

		if( repositoryType == "od" && item && item.opendocid ){
			queryParams.docid = item.opendocid;
		}
		
		if( item.contentElementParentId ) {
			queryParams.docid = item.contentElementParentId;
		}
		
		if (item.celement != null)
		{
			queryParams.element =  item.element;
		}
		
		if (version && version != null) {
			queryParams.version = version;
			// Only add the vsId to the URL if the version status information is also specified, otherwise
			// mid tier will always try to return the "released" version when asking for a static version.
			if (!(item.isInstanceOf && item.isInstanceOf(ecm.model.Teamspace)) && item.vsId) {
				queryParams.vsId = item.vsId;
			}
		}

		if (wcProxy && wcProxy != null)
			queryParams.proxy = wcProxy;

		var mimeClass = item.getMimeClass();
		linkUrl = ecm.model.desktop._cServicesUrl + "/bookmark.jsp?" + ioQuery.objectToQuery(queryParams);

		return (window.location.protocol + "//" + window.location.host + linkUrl);
	};

	/**
	 * This maps privilege strings to individual bitmasks for lookup of individual privileges in the privileges
	 * property.
	 */
	ItemFactory.PrivilegeToBitmask = {
		"privEditProperties": 0x00000001,
		"privEditDoc": 0x00000002,
		"privViewNotes": 0x00000004,
		"privAddDoc": 0x00000008,
		"privAddItem": 0x00000010,
		"privEmailDoc": 0x00000020,
		"privExport": 0x00000040,
		"privAddToFolder": 0x00000080,
		"privRemoveFromFolder": 0x00000100,
		"privAddLink": 0x00000200,
		"privRemoveLink": 0x00000400,
		"privDelegate": 0x00000800,
		"privAddNotes": 0x00001000,
		"privPrintNotes": 0x00002000,
		"privPrintDoc": 0x00004000,
		"privCheckInOutDoc": 0x00008000,
		"privCheckInDoc": 0x00010000,
		"privCheckOutDoc": 0x00020000,
		"privCancelCheckOutDoc": 0x00040000,
		"privViewAnnotations": 0x00080000,
		"privEditAnnotations": 0x00100000,
		"privViewDoc": 0x00200000,
		"privDelete": 0x00400000,
		"privStartWorkflow": 0x00800000,
		"privHold": 0x01000000,
		"privMoveToFolder": 0x02000000,
		"privChangeClass": 0x04000000,
		"privMajorVersion": 0x08000000,
		"privMinorVersion": 0x10000000,
		"privIERRecordDeclare": 0x20000000,
		"privModifyNotes": 0x40000000,
		"privModifyPermissions": 0x80000000
	};

	/**
	 * This maps MIME types to file types. Multiple MIME types may map to the same file type. The following file types
	 * are defined:
	 * <ul>
	 * <li>ftDefault: An unknown file type
	 * <li>ftAudio: For audio files
	 * <li>ftVideo: For video files
	 * <li>ftGraphic: For image files
	 * <li>ftPdf: For PDF documents
	 * <li>ftPlain: For plain text documents
	 * <li>ftWeb: For web pages
	 * <li>ftCompressed: For ZIP and other compressed formats
	 * <li>ftCode: For XML formats that are not identified elsewhere
	 * <li>ftPresentation: For presentation formats like PowerPoint or Freelance
	 * <li>ftData: For spreadsheets such as Excel, or Lotus 1-2-3
	 * <li>ftWordProcessing: For word processing formats
	 * <li>ftMail: For mail formats
	 * <li>ftSearchTemplate: For stored search templates
	 * <li>ftUnifiedSearch: For unified search templates
	 * <li>ftEntryTemplate: Legacy entry template
	 * <li>ftFormTemplate: Form template
	 * <li>ftCustomObjectEntryTemplate: Custom object entry template
	 * <li>ftDocumentEntryTemplate: Filenet Document entry template
	 * <li>ftFolderEntryTemplate: Filnet Folder entry template
	 * <li>ftIcnDocumentEntryTemplate: Document entry template
	 * <li>ftIcnFolderEntryTemplate: Folder entry template
	 * <li>ftDeclareRecordEntryTemplate: Declare record entry template
	 * <li>ftWorkflow: For stored workflow definitions
	 * <li>ftExternalFile: Link to an external file
	 * </ul>
	 */
	ItemFactory.MimeTypeToFileType = {
		"": "ftNoContent",
		"item": "ftNoContent",

		"application/afp": "ftAfp",
		"application/vnd.ibm.afplinedata": "ftAfp",

		"application/pdf": "ftPdf",

		"text/plain": "ftPlain",
		"application/rtf": "ftPlain",
		"application/x-rtf": "ftPlain",
		"text/richtext": "ftPlain",
		"application/dca-rft": "ftPlain",

		"text/html": "ftWeb",
		"text/htm": "ftWeb",

		"application/x-compress": "ftCompressed",
		"application/x-compressed": "ftCompressed",
		"application/x-zip-compressed": "ftCompressed",
		"application/x-zip": "ftCompressed",
		"application/zip": "ftCompressed",
		"multipart/x-zip": "ftCompressed",
		"application/x-rar-compressed": "ftCompressed",
		"application/x-gzip": "ftCompressed",

		"text/xml": "ftCode",
		"application/xml": "ftCode",

		// "application/octet-stream": ???,

		"application/x-vnd.oasis.opendocument.presentation": "ftPresentation",
		"application/vnd.ms-powerpoint": "ftPresentation",
		"application/vnd.lotus-freelance": "ftPresentation",
		"application/vnd.oasis.opendocument.presentation": "ftPresentation",
		"application/vnd.oasis.opendocument.presentation-template": "ftPresentation",
		"application/vnd.openxmlformats-officedocument.presentationml.presentation": "ftPresentation",
		"application/vnd.openxmlformats-officedocument.presentationml.slideshow": "ftPresentation",
		"application/vnd.openxmlformats-officedocument.presentationml.template": "ftPresentation",
		"application/vnd.ms-powerpoint.addin.macroEnabled.12": "ftPresentation",
		"application/vnd.ms-powerpoint.presentation.macroEnabled.12": "ftPresentation",
		"application/vnd.ms-powerpoint.slideshow.macroEnabled.12": "ftPresentation",
		"application/vnd.ms-powerpoint.template.macroEnabled.12": "ftPresentation",
		"application/x-mspowerpoint": "ftPresentation",
		
		"application/vnd.ms-infopath": "ftInfoPath",

		"application/line": "ftData",
		"application/x-vnd.oasis.opendocument.spreadsheet": "ftData",
		"application/vnd.ms-excel": "ftData",
		"application/vnd.ms-excel.addin.macroEnabled.12": "ftData",
		"application/vnd.ms-excel.sheet.binary.macroEnabled.12": "ftData",
		"application/vnd.ms-excel.sheet.macroEnabled.12": "ftData",
		"application/vnd.ms-excel.template.macroEnabled.12": "ftData",
		"application/vnd.lotus-1-2-3": "ftData",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.template": "ftData",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": "ftData",
		"application/vnd.oasis.opendocument.spreadsheet": "ftData",
		"application/vnd.oasis.opendocument.spreadsheet-template": "ftData",
		"application/x-msexcel": "ftData",
		"text/csv": "ftData",
		"application/csv": "ftData",

		"application/x-vnd.oasis.opendocument.text": "ftWordProcessing",
		"application/msword": "ftWordProcessing",
		"application/vnd.lotus-wordpro": "ftWordProcessing",
		"application/wordperfect5.1": "ftWordProcessing",
		"application/vnd.oasis.opendocument.text": "ftWordProcessing",
		"application/vnd.oasis.opendocument.text-template": "ftWordProcessing",
		"application/vnd.openxmlformats-officedocument.wordprocessingml.document": "ftWordProcessing",
		"application/vnd.openxmlformats-officedocument.wordprocessingml.template": "ftWordProcessing",
		"application/vnd.ms-word.template.macroEnabled.12": "ftWordProcessing",
		"application/vnd.ms-word.document.macroEnabled.12": "ftWordProcessing",
		"application/x-msword": "ftWordProcessing",

		"application/x-filenet-searchtemplate": "ftSearchTemplate",
		"application/x-searchtemplate": "ftSearchTemplate",

		"application/x-searchtemplate.automatic": "ftSearchStored",
		"application/x-filenet-search": "ftSearchStored",

		"application/x-unifiedsearchtemplate": "ftUnifiedSearch",

		"application/x-filenet-entrytemplate": "ftEntryTemplate",
		"application/x-filenet-formdataentrytemplate": "ftEntryTemplate",

		"application/x-filenet-customobjectentrytemplate": "ftCustomObjectEntryTemplate",

		"application/x-filenet-documententrytemplate": "ftDocumentEntryTemplate",

		"application/x-filenet-folderentrytemplate": "ftFolderEntryTemplate",

		"application/x-filenet-declarerecordentrytemplate": "ftDeclareRecordEntryTemplate",

		"application/x-icn-declarerecordentrytemplate": "ftIcnRecordEntryTemplate",

		"application/x-icn-documententrytemplate": "ftIcnDocumentEntryTemplate",

		"application/x-icn-folderentrytemplate": "ftIcnFolderEntryTemplate",

		"application/x-filenet-workflowdefinition": "ftWorkflow",
		"application/x-filenet-xpdlworkflowdefinition": "ftWorkflow",

		"application/x-workitem": "ftWorkItem",
		"application/x-tracker": "ftTracker",

		"application/x-filenet-documentpolicy": "ftPolicyDocument",

		"application/x-filenet-workflowpolicy": "ftPolicyWorkflow",

		"application/x-filenet-formdata": "ftFormData",
		"application/vnd.xfdl": "ftFormData",
		"application/x-ibmecm-acmformdata": "ftFormData",

		"application/x-filenet-itxformtemplate": "ftFormTemplate",
		"application/vnd.xfdl.design": "ftFormTemplate",

		"application/x-filenet-external": "ftExternalFile",
		"application/x-box-web-link": "ftExternalFile",

		"application/csbundled": "ftMail",
		"message/rfc822": "ftMail",
		"application/iccxit": "ftMail",
		"application/x-filenet-filetype-msg": "ftMail",

		"application/icccsn": "ftNotesMail",

		"application/vnd.ms-outlook": "ftOutlookMail",

		"application/x-box-note": "ftBoxNote",

		"application/vnd.google-apps.document": "ftGdoc",

		"application/vnd.google-apps.spreadsheet": "ftGsheet",

		"application/vnd.visio": "ftWordProcessing",
		"application/visio": "ftWordProcessing",
		"application/x-visio": "ftWordProcessing",
		"application/vnd.ms-project": "ftWordProcessing",
		"application/msproject": "ftWordProcessing",
		"application/x-project": "ftWordProcessing"
	};

	/**
	 * Static function that loads the icon mapping
	 * 
	 * @param iconMapping
	 *            Icon mapping to load
	 * @private
	 */
	ItemFactory.loadIconMapping = function(iconMapping) {
		var map = {};
		var css = "";
		var count = 0;
		// Apply the icon mappings from bottom to top, so that the mappings defined 
		// earlier in the array override the mappings that are defined later. 
		if (iconMapping && iconMapping.length > 0) {
			for (var i = iconMapping.length - 1; i >= 0; i--) {
				var iconConfig = iconMapping[i];
				var className = iconConfig.getClassName();
				if (!className) {
					var fileName = iconConfig.getFileName();
					if (fileName) {
						className = "ftCustom" + count++;
						css += "." + className + "{width:16px;height:16px;background:url(" + fileName + ") no-repeat;background-size:contain}";
						css += "." + className + "Large" + "{width:32px;height:32px;background:url(" + fileName + ") no-repeat;background-size:contain}";
					} else {
						continue;
					}
				}
				array.forEach(iconConfig.getContentTypes(), function(type) {
					map[type] = className;
				});
			}
		}
		ItemFactory.MimeTypeToFileType = map;
		if (css) {
			var styleSheet = ItemFactory._mimeTypeStyleSheet;
			if (has("ie")) {
				if (!styleSheet) {
					styleSheet = win.doc.createStyleSheet();
				}
				styleSheet.cssText = css;
			} else {
				if (!styleSheet) {
					styleSheet = domConstruct.create("style", {
						type: "text/css",
						innerHTML: css
					}, win.doc.getElementsByTagName("head")[0]);
				} else {
					domAttr.set(styleSheet, "innerHTML", css);
				}
			}
			ItemFactory._mimeTypeStyleSheet = styleSheet;
		}
	};

	/**
	 * Constructs a map of state definitions to CSS style classes for state icon display. The State icons can be
	 * customized in the Admin tool, where new icons can be displayed instead of the OOTB ones.
	 * 
	 * @private
	 */
	ItemFactory.StateToCssClass = {};

	/**
	 * Static function that loads the icon state mapping
	 * 
	 * @param iconStateMapping
	 *            The icon state mapping to load.
	 * @private
	 */
	ItemFactory.loadIconStateMapping = function(iconStateMapping) {
		var map = {};
		var css = "";
		var count = 0;
		array.forEach(iconStateMapping, function(iconStateConfig) {
			var className;
			var fileName = iconStateConfig.getFileName();
			if (fileName) {
				className = "ecmCustomState" + count++;
				css += "." + className + "{width:16px;height:16px;background:url(" + fileName + ") no-repeat;}";
			} else {
				className = iconStateConfig.getClassName();
			}
			map[iconStateConfig.id] = className;
		});
		ItemFactory.StateToCssClass = map;
		if (css) {
			var styleSheet = ItemFactory._stateIconStyleSheet;
			if (has("ie")) {
				if (!styleSheet) {
					styleSheet = win.doc.createStyleSheet();
				}
				styleSheet.cssText = css;
			} else {
				if (!styleSheet) {
					styleSheet = domConstruct.create("style", {
						type: "text/css",
						innerHTML: css
					}, win.doc.getElementsByTagName("head")[0]);
				} else {
					domAttr.set(styleSheet, "innerHTML", css);
				}
			}
			ItemFactory._stateIconStyleSheet = styleSheet;
		}
	};


	ItemFactory.TiffMimeTypes = {
		"image/tiff": true,
		"image/tif": true,
		"image/x-tiff": true,
		"image/x-tif": true,
		"image/tiff-fx": true,
		"image/tiff1stp": true
	};
	
	// ItemFactory.LoginDialog is assigned by LoginDialog.js

	return ItemFactory;
});
