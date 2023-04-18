/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array",
	"dojo/_base/json",
	"dojo/cookie",
	"ecm/model/Desktop",
	"ecm/model/AsyncTaskSchedule",
	"./_ModelObject",
	"./_OpenedSearchesMixin",
	"./_RecentSearchesMixin",
	"./_SharedRequestsMixin",
	"./ContentItem",
	"./User",
	"./UserGroup",
	"./EntryTemplate",
	"./ContentClass",
	"./Role",
	"./SearchTemplate",
	"./SearchTemplateFolder",
	"./UnifiedSearchTemplate"
], function(declare, lang, array, dojojson, cookie, Desktop, AsyncTaskSchedule, _ModelObject, _OpenedSearchesMixin, _RecentSearchesMixin, _SharedRequestsMixin, ContentItem, User, UserGroup, EntryTemplate, ContentClass, Role, SearchTemplate, SearchTemplateFolder, UnifiedSearchTemplate) {

	/**
	 * Constructor
	 * 
	 * @param properties
	 *            The properties for the model object. The properties can be any of the public fields as defined below
	 *            and on ecm.model._ModelObject.
	 * @name ecm.model.Teamspace
	 * @class Represents a teamspace that is stored in a repository.
	 * @augments ecm.model._ModelObject, ecm.model._OpenedSearchesMixin, ecm.model._RecentSearchesMixin
	 */
	var Teamspace = declare("ecm.model.Teamspace", [
		_ModelObject,
		_OpenedSearchesMixin,
		_RecentSearchesMixin,
		_SharedRequestsMixin
	], {
		/** @lends ecm.model.Teamspace.prototype */

		teamspaceTemplateName: "",

		/**
		 * A {@link ecm.model.Repository} object
		 */
		repository: null,

		/**
		 * The description for this teamspace or teamspace template.
		 */
		desc: "",

		/**
		 * The teamspace type. Set to "instance" for an instance of a teamspace. Set the teamspace type to "template"
		 * for a teamspace template.
		 */
		type: null,

		/**
		 * Sets the name of the repository class defining this teamspace.
		 */
		className: null,

		templateJSON: null,

		/**
		 * Sets the teamspace folder structure meta data from the template.
		 */
		folders: null,

		/**
		 * An array of {@link ecm.model.SearchTemplate} objects associated with the teamspace.
		 */
		searchTemplates: null,

		/**
		 * An array of {@link ecm.model.ContentClass} objects associated with this teamspace.
		 */
		contentClasses: null,

		/**
		 * An array of {@link ecm.model.EntryTemplate} objects associated with this teamspace.
		 */
		entryTemplates: null,

		/**
		 * An array of {@link ecm.model.Role} objects associated with this teamspace.
		 */
		roles: null,

		/**
		 * A string value hold the state of the teamspace.
		 */
		state: "published",

		/**
		 * An array of the teamspace members.
		 */
		members: null,

		/**
		 * The last modified time.
		 */
		lastModified: "",

		/**
		 * The name of the user that last modified the teamspace.
		 */
		lastModifiedUser: "",

		/**
		 * The user information for the last modified user (P8 only).
		 * 
		 * @since 2.0.3
		 */
		lastModifiedUserInfo: null,

		/**
		 * A boolean value indicating if the teamspace supports classes. A value of false indicates that it supports
		 * entry templates.
		 */
		usesClasses: true,

		/**
		 * Sets the default class id for the teamspace.
		 */
		defaultClass: null,

		/**
		 * Sets the default entry template Id for the teamspace.
		 */
		defaultEntryTemplate: null,

		/**
		 * An array of user privilege objects
		 */
		currentUserPrivileges: null,

		/**
		 * An array of {@link ecm.model.Permission} objects
		 */
		permissions: null,

		/**
		 * An array of column property definitions, this defines what properties to show in browse.
		 */
		columnProperties: null,

		/**
		 * An array of opened searches
		 */
		openedSearches: null,

		/**
		 * An array of teamspace members, can be {@link ecm.model.User} or {@link ecm.model.UserGroup} objects
		 */
		team: null,

		/**
		 * @private Internally used constructor for the teamspace
		 */
		constructor: function() {
			if (!this.folders) {
				this.folders = [];
			}
			if (!this.searchTemplates) {
				this.searchTemplates = [];
			}
			if (!this.contentClasses) {
				this.contentClasses = [];
			}
			if (!this.entryTemplates) {
				this.entryTemplates = [];
			}
			if (!this.roles) {
				this.roles = [];
			}

			if (!this.members) {
				this.members = [];
			}
			if (!this.currentUserPrivileges) {
				this.currentUserPrivileges = [];
			}
			if (this.props) {
				this.templateJSON = dojojson.toJson(this.props);
				if (this.props.usesClasses) {
					//Note: The usesClasses value must remain a string as it is stored in the teamspace template
					this.usesClasses = this.props.usesClasses == "true";
				}
				if (this.props.columnProperties) {
					this.columnProperties = this.props.columnProperties;
				}
				delete this.props;
			}
			if (this.currentUser) {
				this.currentUserIsOwner = this.currentUser["isOwner"];
				this.currentUserPrivileges = this.currentUser.maxPrivs;
				delete this.curentUser;
			}
			this._setTeam(this.team);
		},

		/**
		 * Returns the value of an attribute.
		 * 
		 * @param attribute
		 *            The attribute identifier.
		 */
		getValue: function(attribute) {
			return this[attribute];
		},

		/**
		 * Returns the attribute value in a format that can be displayed in the user interface.
		 * 
		 * @param attribute
		 *            The name of the attribute.
		 */
		getDisplayValue: function(attribute) {
			var type = attribute == "lastModified" ? "xs:timestamp" : "xs:string";
			var offset = attribute == "lastModified" ? this.lastModifiedTimeZoneOffset : null;
			return ecm.model.desktop.valueFormatter.formatValue(this.getValue(attribute), type, null, offset);
		},

		/**
		 * Generates the list of of team members from the specified team JSON object.
		 * 
		 * @param team
		 *            JSON object containing the team member list.
		 */
		_setTeam: function(team) {
			this.team = [];

			if (team) {
				array.forEach(team, function(obj) {
					if (obj) {
						this.logDebug("_setTeam", "adding subject= " + obj.name + ", type=" + obj.type);

						if (obj.type == 2) {
							var group = new UserGroup(obj);
							this.team.push(group);
						} else {
							if (!obj.emailAddress)
								obj.emailAddress = obj.name;

							var user = new User(obj);
							this.team.push(user);
						}
					}
				}, this);
			}
		},
		/**
		 * Retrieves a teamspace member by short name.
		 * 
		 * @param shortName
		 *            shortName of the member to retrieve.
		 * @since 2.0.3
		 */
		getTeamMemberById: function(shortName) {
			var object = null;
			array.forEach(this.team, function(obj) {
				if (obj.shortName == shortName) {
					object = obj;
				}
			});
			return object;
		},
		/**
		 * Clears all values except for type from the model. Also fires onChange event.
		 */
		reset: function() {
			this.teamspaceTemplateName = "";
			this.searchTemplates = [];
			this.contentClasses = [];
			this.entryTemplates = [];
			this.roles = [];
			this.team = [];
			this.members = [];
			this.state = "published";
			this.templateJSON = null;
			this.foldersMetaData = {};
			this.name = "";
			this.desc = "";
			this.className = "";
			this.onChange(this); // to inform listeners
		},

		/**
		 * @private Returns the icon class to use for this model object.
		 */
		getMimeClass: function() {
			if (this.state == Teamspace.STATE_OFFLINE)
				return "ecmOfflineIcon";
			else if (this.state == Teamspace.STATE_PENDING_DELETE)
				return "ecmPendingDeleteIcon";
			else if (this.state == Teamspace.STATE_DELETE_ERROR)
				return "ecmDeleteErrorIcon";
			else if (this.type == "template")
				return "ecmTeamspaceTemplateIcon";
			else
				return "ecmTeamspaceIcon";
		},

		/**
		 * @private Returns the last modified time.
		 */
		getLastModified: function() {
			return ecm.model.desktop.valueFormatter.formatValue(this.lastModified, "xs:timestamp", null, this.lastModifiedTimeZoneOffset);
		},

		/**
		 * This event is invoked whenever the object or a child object of this object changes value.
		 * 
		 * @param modelObject
		 *            Either this object or the child object that has changed.
		 */
		onNameChange: function(modelObject) {
		},

		/**
		 * @private Adds a role object to the teamspace.
		 * @param id
		 *            The identifier for the role.
		 * @param role
		 *            An instance of {@link ecm.model.Role}.
		 */
		addRole: function(id, role) {
			this.roles[id] = role;
			this.onChange();
		},

		/**
		 * @private Removes a role object from the teamspace.
		 * @param id
		 *            The identifier for the role to remove.
		 */
		removeRole: function(id) {
			this.roles.splice(id);
			this.onChange();
		},

		/**
		 * Returns a JSON string representation of this teamspace that can be stored in the repository as a teamspace
		 * template.
		 */
		toJson: function() {
			this.logEntry("toJson");
			var ts = {};
			ts.id = this.id;
			ts.name = this.name;
			ts.type = this.type;
			ts.state = this.state;
			ts.desc = this.desc;
			ts.templateName = this.teamspaceTemplateName;
			ts.usesClasses = this.usesClasses + "";

			if (!this.columnProperties) {
				ts.columnProperties = "";
			} else {
				ts.columnProperties = this.columnProperties;
			}

			// need to serialize with only data need to create item in the server. The folders array has extra data
			// that is only need on the client side to render the structure in the grid and tree view. That information does
			// not need to be sent to the server for instance creation.
			if (this.type == "instance") {
				ts.folders = [];
				// jsonWorkspace.folders = this.folders;

				this.logDebug("toJson", "folders= " + this.folders);
				for ( var i in this.folders) {
					var item = this.folders[i];

					var jsonItem = {
						name: item.name,
						path: item.path,
						type: item.type,
						IsCopy: item.IsCopy ? true : false
					};

					if (item["rowProperties"] && item.rowProperties["_value"]) {
						var properties = item.rowProperties._value["properties"];
						if (properties) {
							jsonItem.properties = properties; // store the properties needed to create physical item
						}
					}
					this.logDebug("toJson", "folders= " + jsonItem);
					ts.folders.push(jsonItem);
				}
			} else {
				// Saving a template saves the dojo widget structure so that the structure can be reopened
				// in the instance builder
				ts.folders = dojojson.toJson(this.folders);
			}

			ts.entryTemplates = [];

			ts.permissions = this.permissions || []; // save permissions too

			for ( var i in this.entryTemplates) {
				var entryTemplate = this.entryTemplates[i];
				var jsonEntryTemplates = {};
				jsonEntryTemplates.id = entryTemplate.id;
				jsonEntryTemplates.name = entryTemplate.name;
				jsonEntryTemplates.description = entryTemplate.description;
				jsonEntryTemplates.currentFolderAsParent = entryTemplate.currentFolderAsParent;
				jsonEntryTemplates.fileTypes = entryTemplate.fileTypes;
				jsonEntryTemplates.type = entryTemplate.type;
				jsonEntryTemplates["default"] = entryTemplate.teamspaceDefault ? this.messages.workspacebuilder_classes_columns_default : "";
				if (entryTemplate.teamspaceDefault == true) {
					ts.defaultEntryTemplate = entryTemplate.id;
				}
				ts.entryTemplates.push(jsonEntryTemplates);

			}
			ts.contentClasses = [];
			for ( var i in this.contentClasses) {
				var contentClass = this.contentClasses[i];
				var jsonContentClasses = {};
				jsonContentClasses.id = contentClass.id;
				jsonContentClasses.name = contentClass.name;
				jsonContentClasses["default"] = contentClass.teamspaceDefault ? this.messages.workspacebuilder_classes_columns_default : "";
				if (contentClass.teamspaceDefault == true) {
					ts.defaultClass = contentClass.id;
				}
				ts.contentClasses.push(jsonContentClasses);

			}
			ts.searchTemplates = [];
			for ( var i in this.searchTemplates) {
				var searchTemplate = this.searchTemplates[i];
				var jsonSearchTemplates = {};
				jsonSearchTemplates.id = searchTemplate.id;
				jsonSearchTemplates.name = searchTemplate.name;
				jsonSearchTemplates.description = searchTemplate.description;
				jsonSearchTemplates.mimeType = searchTemplate.mimetype || "";
				if (searchTemplate.vsId) // P8 version series ID
					jsonSearchTemplates.vsId = searchTemplate.vsId;
				ts.searchTemplates.push(jsonSearchTemplates);
			}

			ts.roles = [];
			for ( var i in this.roles) {
				var role = this.roles[i];
				ts.roles.push(role.toJSON());
			}
			ts.members = this.members;
			ts.dataModelVersion = this.dataModelVersion ? this.dataModelVersion : "";
			var json = dojojson.toJson(ts);
			this.logExit("toJson", json);
			return json;
		},

		/**
		 * Returns the State icon CSS class for that specified state
		 * 
		 * @param state
		 */
		getStateClass: function(state) {
			var stateClass = ecm.model.Item.StateToCssClass[state];
			if (!stateClass) {
				stateClass = "";
			}
			return stateClass;
		},

		/**
		 * Build this teamspace object from a JSON string.
		 * 
		 * @param jsonTeamspaceString
		 *            A JSON string for a teamspace template.
		 */
		createFromTemplateJson: function(jsonTeamspaceString) {
			var method = "createFromTemplateJson";
			this.logEntry(method);
			this.logDebug(method, "jsonTeamspaceString: " + jsonTeamspaceString);
			// Lotus Connection might not have json data
			if (!jsonTeamspaceString)
				return;
			this.templateJSON = jsonTeamspaceString;
			var jsonTeamspace = dojojson.fromJson(jsonTeamspaceString);
			this.id = jsonTeamspace["id"];

			/*this.state = "published";
			if (jsonTeamspace["state"]) {
				this.state = jsonTeamspace["state"];
			}*/

			this.defaultClass = jsonTeamspace["defaultClass"];
			this.defaultEntryTemplate = jsonTeamspace["defaultEntryTemplate"];
			// this.name = ""; //jsonWorkspace["name"]; // don't set the template name

			// use the type the object was initialized as
			//this.type = "instance"; // has to always be instance and not template
			// this.description = jsonWorkspace["description"];
			this.teamspaceTemplateName = jsonTeamspace["templateName"];

			var usesClasses = jsonTeamspace["usesClasses"];
			if (usesClasses) {
				var usesClasses = usesClasses == "true"; // Note: this must remain a string for template compatibility.  so, converting it to boolean here
				this.usesClasses = usesClasses;
			} else
				this.usesClasses = true;

			var entryTemplates = jsonTeamspace["entryTemplates"];
			var arrayList = [];
			if (entryTemplates) {
				for (var i = 0; i < entryTemplates.length; i++) {
					if (entryTemplates[i].currentFolderAsParent == undefined) {
						entryTemplates[i].currentFolderAsParent = true;
					}
					if (!entryTemplates[i].type) {
						entryTemplates[i].type = "document";
					}
					var entryTemplate = EntryTemplate.createFromJSON({
						id: entryTemplates[i].id,
						name: entryTemplates[i].name,
						description: entryTemplates[i].description,
						repository: this.repository,
						currentFolderAsParent: entryTemplates[i].currentFolderAsParent,
						fileTypes: entryTemplates[i].fileTypes,
						type: entryTemplates[i].type

					});
					var defaultValue = entryTemplates[i]["default"] != "" ? true : false;
					entryTemplate.teamspaceDefault = defaultValue;
					arrayList.push(entryTemplate);
				}
			}
			this.entryTemplates = arrayList;

			var contentClasses = jsonTeamspace["contentClasses"];
			var arrayList = [];
			if (contentClasses) {
				for (var i = 0; i < contentClasses.length; i++) {
					var contentClass = new ContentClass({
						id: contentClasses[i].id,
						name: contentClasses[i].name,
						repository: this.repository
					});
					var defaultValue = contentClasses[i]["default"] != "" ? true : false;
					contentClass.teamspaceDefault = defaultValue;
					arrayList.push(contentClass);
				}
			}
			this.contentClasses = arrayList;

			var searchTemplates = jsonTeamspace["searchTemplates"];
			arrayList = [];
			if (searchTemplates) {
				for (var i = 0; i < searchTemplates.length; i++) {
					var mimeType = searchTemplates[i].mimeType || "application/x-searchtemplate";
					var args = {
						id: searchTemplates[i].id,
						name: searchTemplates[i].name,
						repository: this.repository,
						description: searchTemplates[i].description,
						mimetype: mimeType
					};
					if (searchTemplates[i].vsId)
						args.vsId = searchTemplates[i].vsId;
					var searchTemplate = mimeType == "application/x-unifiedsearchtemplate" ? new UnifiedSearchTemplate(args) : new SearchTemplate(args);
					arrayList.push(searchTemplate);
				}
			}
			this.searchTemplates = arrayList;

			var roles = jsonTeamspace["roles"];
			arrayList = [];
			this.logDebug(method, "roles: " + roles);
			if (roles) {
				for (var i = 0; i < roles.length; i++) {
					var r = roles[i];
					if (r.desc)
						r.description = r.description;
					if (r.privs)
						r.privileges = r.privileges;
					var role = new Role(r);
					arrayList.push(role);
				}
			}
			this.roles = arrayList;

			this.members = jsonTeamspace["members"];

			var folders = jsonTeamspace["folders"];
			if (folders && lang.isString(folders)) // note: proper syntax is a string but this was returning array early in development.  Leaving test in for safety
				folders = dojojson.fromJson(folders);
			this.folders = folders;

			if (jsonTeamspace["columnProperties"]) {
				this.columnProperties = jsonTeamspace["columnProperties"];
			} else {
				this.columnProperties = null;
			}
			this.dataModelVersion = jsonTeamspace["dataModelVersion"] ? jsonTeamspace["dataModelVersion"] : "";
			this.logExit(method);
		},

		/**
		 * Returns the specified privilege.
		 * 
		 * @param privilege
		 *            The identifier of the privilege to retrieve.
		 */
		getPrivilege: function(privilege) {

			// when building large list of teamspaces we need load the privileges after actions are selected
			if (this.currentUserPrivileges) {
				//if (this.currentUserPrivileges.length == 0) {
				//	this.retrieveUserPrivileges();
				//}

				var position = array.indexOf(this.currentUserPrivileges, privilege);
				var hasPriv = position != -1;
				return hasPriv;
			}
			return false;
		},

		/**
		 * Returns true if the item has the specified privilege.
		 * 
		 * @param privilege
		 *            The identifier of the privilege to test.
		 */
		hasPrivilege: function(privilege) {
			return this.getPrivilege(privilege);
		},

		// populate fields from json data
		initFromJson: function() {
			var id = this.id;
			var json = this.templateJSON;
			this.createFromTemplateJson(json);
			this.id = id; // don't use the ID from the json template
		},

		// ********************************************************************************
		// The code below are methods to retrieve and work with teamspace instance data
		// ********************************************************************************

		/**
		 * Retrieve the user privileges.
		 * 
		 * @param callback
		 *            A callback funcation called after the privileges have been retrieved.
		 * @param params
		 *            An object containing parameters to control the request to the server. The following parameters are
		 *            supported:
		 *            <ul>
		 *            <li>requestHeaders - Parameters intended for the Request Header. When requestHeaders is provided,
		 *            the caller is responsible for optionally setting the "Cache-Control" request header, as a default
		 *            option will not be set. When requestHeaders is not provided, "Cache-Control" "no-cache" is used.</li>
		 *            <li>cancellable - Flag indicating if the request can be canceled</li>
		 *            <li>backgroundRequest - Flag indicating if the request should be run in the background.</li>
		 *            <li>requestFailedCallback - Callback method called when a request returns from the server with
		 *            errors.</li>
		 *            </ul>
		 */
		retrieveUserPrivileges: function(callback, params) {
			if (this.currentUserPrivileges && (this.currentUserPrivileges.length > 0 || this.skipPrivRetrieve)) {
				if (this.skipPrivRetrieve)
					delete this.skipPrivRetrieve;
				callback(this.currentUserPrivileges);
			} else {
				var self = this;
				if (!params) {
					params = {
						requestParams: {}
					};
				}
				params.requestParams = {
					docid: self.id,
					workspaceType: self.type,
					repositoryId: this.repository.id
				};
				params.requestCompleteCallback = function(response) {
					self._retrieveUserPrivileges(response, callback);
				};

				var request = ecm.model.Request.invokeServiceAPI("getUserPermissions", this.repository.type, params);
			}
		},

		_retrieveUserPrivileges: function(response, callback) {
			this.logEntry("_retrieveUserPrivileges");
			this.currentUserPrivileges = [];

			if (!response.useClasses)
				this.usesClasses = true;
			else
				this.usesClasses = (response.useClasses == "true" || response.useClasses == true);

			this.state = response.state;
			this.syncEnabled = response.syncEnabled;
			this.currentUserIsOwner = response.currentUserIsOwner;
			for ( var i in response.user_permissions) {
				var permissions = response.user_permissions[i];
				this.currentUserPrivileges.push(permissions);
			}
			if (callback) {
				callback(this.currentUserPrivileges);
			}
			this.onUserPrivilegesRetrieved(this);
			this.logExit("_retrieveUserPrivileges");
		},

		/**
		 * An event function called when the user privileges have been retrieved
		 */
		onUserPrivilegesRetrieved: function() {
		},

		/**
		 * Retrieve the search template folders for this teamspace
		 * 
		 * @param callback
		 *            A callback funcation called after the folders have been retrieved. Passes a
		 *            {@link ecm.model.SearchTemplateFolder} object parameter.
		 */
		retrieveSearchTemplateFolders: function(callback) {
			this.logEntry("retrieveSearchTemplateFolders");

			if (this._templateFolders) {
				if (callback) {
					callback(this._templateFolders);
				}
			} else {
				this._templateFolders = [];

				// the first folder is an "all templates" folder
				if (!this._allSearchTemplatesFolder) {
					this._allSearchTemplatesFolder = new SearchTemplateFolder({
						id: "all",
						name: ecm.messages.all_search_templates,
						description: "",
						repository: this.repository,
						teamspace: this
					});
				}
				this._templateFolders.push(this._allSearchTemplatesFolder);

				if (callback) {
					callback(this._templateFolders);
				}
				this.onSearchTemplateFoldersRetrieved(this);
			}

			this.logExit("retrieveSearchTemplateFolders");
		},

		/**
		 * An event function called when the search template folders have been retrieved
		 */
		onSearchTemplateFoldersRetrieved: function(repository) {
		},

		/**
		 * Retrieve the search templates for this teamspace
		 * 
		 * @param callback
		 *            A callback funcation called after the search templates have been retrieved. Passes a
		 *            {@link ecm.model.SearchTemplate} object parameter.
		 */
		retrieveSearchTemplates: function(callback, filter) {
			this.logEntry("retrieveSearchTemplates");

			if (this.searchTemplates && this.searchTemplates.length > 0 && !this._toBeRefreshed) {
				if (callback) {
					this.logDebug("retrieveSearchTemplates", "Found search templates in cache");
					callback(this.searchTemplates);
				}
			} else {
				var self = this;

				this.logDebug("retrieveSearchTemplates", "teamspace id= " + self.id);
				this.logDebug("retrieveSearchTemplates", "teamspace name= " + self.name);
				this.logDebug("retrieveSearchTemplates", "teamspace description= " + self.desc);
				var request = ecm.model.Request.invokeService("getSearchTemplates", self.repository.type, {
					workspaceId: self.id,
					repositoryId: self.repository.id,
					filtertype: filter
				}, function(response) {
					self._toBeRefreshed = false;
					self._retrieveSearchTemplatesCompleted(response, callback);
				});
				this.searchTemplatesFilter = filter;
			}
			this.logExit("retrieveSearchTemplates");
		},

		_retrieveSearchTemplatesCompleted: function(response, callback) {
			this.logEntry("_retrieveSearchTemplatesCompleted");
			this.searchTemplates = [];
			var items = response.rows ? response.rows : response.datastore.items;
			for ( var i in items) {
				var factory = ecm.model.UnifiedSearchTemplate.instanceOf(items[i], this.repository) ? ecm.model.UnifiedSearchTemplate : ecm.model.SearchTemplate;
				var template = factory.createFromJSON(items[i], this.repository);
				template.teamspaceId = this.id;
				this.searchTemplates.push(template);
			}
			if (callback) {
				callback(this.searchTemplates);
			}
			this.onRetrieveSearchTemplatesCompleted(this.searchTemplates);
			this.logExit("_retrieveSearchTemplatesCompleted");
		},

		/**
		 * An event function called when the search templates have been retrieved
		 */
		onRetrieveSearchTemplatesCompleted: function(searchTemplates) {
		},

		/**
		 * Retrieve the content classes for this teamspace
		 * 
		 * @param callback
		 *            A callback funcation called after the content classes have been retrieved. Passes an array of
		 *            {@link ecm.model.ContentClass} objects as a parameter.
		 */
		retrieveContentClasses: function(callback) {
			this.logEntry("retrieveContentClasses");
			var request = null;
			if (this.contentClasses && this.contentClasses.length > 0) {
				if (callback)
					callback(this.contentClasses);
			} else {
				var sharedRequestParams = {
					sharedRequestMethod: "retrieveContentClasses",
					sharedRequestCompleteCallback: callback,
					serviceName: "getContentClasses",
					repositoryType: this.repository.type,
					requestParams: {
						workspaceId: this.id,
						repositoryId: this.repository.id
					},
					requestCompleteCallback: lang.hitch(this, function(response) {
						this._retrieveContentClassesCompleted(response, sharedRequestParams);
					})
				};
				request = this.invokeSharedRequest(sharedRequestParams);
			}
			this.logExit("retrieveContentClasses");
			return request;
		},

		_retrieveContentClassesCompleted: function(response, sharedRequestParams) {
			this.logEntry("_retrieveContentClassesCompleted");
			this.contentClasses = [];
			for ( var i in response.datastore.items) {
				var templateJSON = response.datastore.items[i];
				var template = null;

				if (templateJSON[0]) { // optimization for OD
					template = new ContentClass({
						id: templateJSON[0],
						name: templateJSON[1] || templateJSON[0],
						repository: this.repository
					});
				} else {
					templateJSON.id = templateJSON.template_name;
					templateJSON.name = templateJSON.template_label;
					templateJSON.repository = this.repository;

					if (this.repository._isCM()) {
						templateJSON.allowsInstances = true;
						template = new ContentClass(templateJSON);
					} else {
						template = new ContentClass(templateJSON);
					}
				}
				this.contentClasses.push(template);
			}

			this.completeSharedRequest(sharedRequestParams, lang.hitch(this, function(callback) {
				callback(this.contentClasses);
			}));

			this.logExit("_retrieveContentClassesCompleted");
		},

		/**
		 * Retrieve the repository item representing the folder object used as the base folder for this teamspace.
		 * 
		 * @param callback
		 *            A callback funcation called after the base folder has been retrieved. Passes a
		 *            {@link ecm.model.ContentItem} as a parameter.
		 */
		retrieveBaseFolder: function(callback) {
			this.logEntry("retrieveBaseFolder");
			if (this._baseFolder) {
				if (callback)
					callback(this._baseFolder);
			} else {
				var self = this;
				this.repository.retrieveItem(this.id, function(item) {
					self._baseFolder = item;
					if (callback)
						callback(item);
				});
			}
			this.logExit("retrieveBaseFolder");
		},

		/**
		 * Add a search tempalte to this teamspace
		 * 
		 * @param searchTemplate
		 *            A {@link ecm.model.SearchTemplate} object to add
		 * @param callback
		 *            A callback funcation called after the search tempalte has been added. Passed a
		 *            {@link ecm.model.SearchTemplate} object as a parameter.
		 */
		addSearchTemplate: function(searchTemplate, callback) {
			this.logEntry("addSearchTemplate");
			var self = this;
			var request = ecm.model.Request.postService("addSearchTemplate", this.repository.type, {
				repositoryId: this.repository.id,
				workspaceId: self.id,
				templatedescription: searchTemplate.description,
				template_name: searchTemplate.name
			}, "text/json", searchTemplate.toJson(), function(response) {
				self._searchTemplateAdded(response, searchTemplate, callback);
			});
			this.logExit("addSearchTemplate");
		},

		_searchTemplateAdded: function(response, searchTemplate, callback) {
			var itemJSON = response.rows.length > 0 ? response.rows[0] : response.datastore.items[0];
			var properties = itemJSON;
			searchTemplate.id = properties.id;
			lang.mixin(searchTemplate, properties);
			searchTemplate.permissions = null;

			this.searchTemplates.push(searchTemplate);
			this.repository._deleteFullyCachedTeamspace(this.id);

			if (callback)
				callback(searchTemplate);

			this.onSearchTemplateAdded(searchTemplate);
			this.onChange(searchTemplate);
			this.repository._searchTemplateAdded(null, searchTemplate);
		},

		/**
		 * An event function called when the search template has been added
		 */
		onSearchTemplateAdded: function(searchTemplate) {
			this.logEntry("onSearchTemplateAdded");
		},

		/**
		 * Delete the list of search templates from the teamspace.
		 * 
		 * @param searchTemplates
		 *            An array of {@link ecm.model.SearchTemplate} objects to delete
		 */
		searchTemplatesDeleted: function(searchTemplates) {
			this.removeRecentSearches(searchTemplates);

			var searchCount = this.searchTemplates instanceof Array ? this.searchTemplates.length : 0;
			array.forEach(searchTemplates, function(searchTemplate) {
				this._searchTemplateDeleted(searchTemplate);
			}, this);

			var newCount = this.searchTemplates instanceof Array ? this.searchTemplates.length : 0;
			if (searchCount && searchCount > newCount)
				this.repository._deleteFullyCachedTeamspace(this.id);
		},

		_searchTemplateDeleted: function(searchTemplate) {
			var deleted = false;
			if (this.searchTemplates) {
				for (var i = 0; i < this.searchTemplates.length; i++) {
					if (this.searchTemplates[i].equals(searchTemplate)) {
						this.searchTemplates.splice(i, 1);
						deleted = true;
						break;
					}
				}
			}

			if (this.openedSearches) {
				for ( var i in this.openedSearches) {
					if (this.openedSearches[i].equals(searchTemplate)) {
						delete this.openedSearches[i];
					}
				}
			}

			if (deleted)
				this.onSearchTemplateDeleted(searchTemplate.id, searchTemplate.vsId);
		},

		/**
		 * An event function called when the search template has been deleted
		 */
		onSearchTemplateDeleted: function(searchTemplateId) {
		},

		clearSearchTemplates: function() {
			this.logEntry("clearSearchTemplates");
			// just set the flag to force retrieving default searches without clearing this.searchTemplates
			this._toBeRefreshed = true;
			this.onChange(this);
			this.logExit("clearSearchTemplates");
		},

		/**
		 * Schedules a task to peform team deletion.
		 * 
		 * @param handlerClassName
		 *            The handlerClassName of the task that will be scheduled. This is typically the full class path of
		 *            the task that will be executed.
		 * @param taskParams
		 *            The parameters to be passed in as part of the requestParams for the request. These parameters will
		 *            be appended to "specificTaskRequest" and will be part of the task's taskInfo object.
		 * @since 2.0.3
		 */
		scheduleTeamspaceDeletionTask: function(handler, taskParams) {
			if (!handler && this.repository._isCM())
				handler = Teamspace.DELETION_HANDLER_CM;
			else if (!handler)
				handler = Teamspace.DELETION_HANDLER_P8;
			var schedule = new AsyncTaskSchedule({
				isRecurring: false,
				mode: "0", //Single. This means the task will only run once
				name: this.name,
				description: ecm.messages.teamspaceDecommissionTaskDescription,
				userId: this.repository.userId,
				emailAddress: "",
			});
			var categorization = "Navigator";
			ecm.model.desktop.taskManager.scheduleAsyncTask(schedule, handler, this._getTeamspaceDeleteTaskParms(taskParams), null, lang.hitch(this, function() {

			}, categorization));

		},

		/**
		 * Returns state message for the teamspace.
		 * 
		 * @since 2.0.3
		 */
		getStateMessage: function() {
			var message;
			if (this.state == "validate")
				message = ecm.messages.workspace_stat_validate;
			else if (this.state == "offline")
				message = ecm.messages.workspace_stat_offline;
			else if (this.state == "pendingDelete")
				message = ecm.messages.workspace_stat_pendingDelete;
			else if (this.state == "errorDelete")
				message = ecm.messages.workspace_stat_deleteError;
			//else if (this.state != "deleted")
			//message = ecm.messages.workspace_stat_online;
			else if (this.type == "template")
				message = ecm.messages.teamspace_template_icon_title;
			else
				message = ecm.messages.teamspace_icon_title;
			return message;
		},

		/**
		 * Returns a clone of this teamspace
		 * 
		 * @since 2.0.3.3
		 */
		clone: function() {
			var clone = new this.constructor({
				id: this.id,
				name: this.name
			});
			lang.mixin(clone, this);

			return clone;

		},
		/**
		 * @private
		 */
		_getTeamspaceDeleteTaskParms: function(taskParams) {
			var connectonErrorMsg = ecm.messages.teamspaceDecommissionDeletionConnectionFailed;
			var ltpa = cookie("LtpaToken2");
			ltpa = (ltpa && ltpa.length > 0) ? ltpa : cookie("LtpaToken");

			var params = {
				teamspaceId: this.id,
				userId: this.repository.taskManagerProxyUserId,
				pwd: this.repository.taskManagerProxyPwd,
				useSSO: false,
				teamspaceName: this.name,
				key: ecm.model.desktop.encryptionKey,
				connectonErrorMsg: connectonErrorMsg,
				deleteDocuments: true,
				repositoryId: this.repositoryId
			};

			if (!this.taskParms && this.repository._isCM()) {
				params.database = this.repository.serverName;
			} else if (!this.taskParms) {
				params.uri = this.repository.serverName;
				params.objectStoreName = this.repository.objectStoreName;
				params.useSSO = true;
				params.ltpaToken = ltpa;
				params.userId = this.repository.userId;
			}
			return params;

		},

	});
	Teamspace.DELETION_HANDLER_CM = "com.ibm.ecm.icntasks.cm.CMCleanupTeamSpaceTask";
	Teamspace.DELETION_HANDLER_P8 = "com.ibm.ecm.icntasks.p8.P8CleanupTeamSpaceTask";
	Teamspace.INSTANCE = "instance";
	Teamspace.TEMPLATE = "template";
	Teamspace.RUNTIME = "runtime";

	Teamspace.STATE_OFFLINE = "offline";
	Teamspace.STATE_PUBLISHED = "published";
	Teamspace.STATE_PENDING_DELETE = "pendingDelete";
	Teamspace.STATE_DELETE_ERROR = "errorDelete";
	Teamspace.STATE_DELETED = "deleted";

	Teamspace.NAME_ATTRIBUTE = "ClbTeamspaceName";
	Teamspace.TITLE_ATTRIBUTE = "clbTitle";
	Teamspace.TEAMSPACE_CONTENTCLASS_CM8 = "ICMTeamspace";
	Teamspace.TEAMSPACE_CONTENTCLASS_P8 = "ClbTeamspace";
	Teamspace.TEAMSPACE_NAME = "Teamspace";

	return Teamspace;
});
