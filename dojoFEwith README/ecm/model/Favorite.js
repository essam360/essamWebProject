/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array",
	"./_ModelObject",
	"./Item",
	"./Teamspace"
], function(declare, lang, array, _ModelObject, Item, Teamspace) {

	/**
	 * Constructor
	 * 
	 * @param properties
	 *            The properties for the model object. The properties can be any of the public fields as defined below
	 *            and on ecm.model._ModelObject.
	 * @name ecm.model.Favorite
	 * @class Represents an object added to favorites.
	 * @augments ecm.model._ModelObject
	 */
	var Favorite = declare("ecm.model.Favorite", [
		_ModelObject
	], {
		/** @lends ecm.model.Favorite.prototype */

		/**
		 * An instance of {@link ecm.model.Repository} for the repository containing the favorite item.
		 */
		repository: null,

		/**
		 * Favorite type (folder, teamspace, search, document or work item).
		 */
		type: null,

		/**
		 * Favorite subType.
		 */
		subType: null,

		/**
		 * Id of the object associated with this favorite.
		 */
		objectId: null,

		/**
		 * Mimetype of the favorite.
		 */
		mimetype: null,

		/**
		 * Template name of the class definition for the favorite object.
		 */
		template: null,

		/**
		 * Template name of the class definition for the favorite object.
		 */
		vsId: null,

		/**
		 * Boolean indicating if the item associated with this favorite has content.
		 */
		hasContentFlag: false,

		/**
		 * Label to display for repositories in a list view.
		 */
		repositoryLabel: null,

		/**
		 * ID of the favorite.
		 */
		favoriteId: null,

		/**
		 * An {@link ecm.model.Item} instance associated with this favorite.
		 */
		item: null,

		/**
		 * Boolean value indicating if this favorite is enabled for sync.
		 * 
		 * @since 2.0.3
		 */
		syncEnabled: false,

		/**
		 * ID of the favorite on the sync server (if the favorite is being synced).
		 * 
		 * @since 2.0.3
		 * @deprecated As of 2.0.3.5. Sync Favorite will be removed in a future release.
		 */
		syncId: null,

		/**
		 * Object containing the devices registered to sync this favorite.
		 * 
		 * @deprecated As of 2.0.3.5. Sync Favorite will be removed in a future release.
		 */
		syncDevices: null,

		/**
		 * Boolean indicating if the favorite is hidden.
		 */
		hidden: false,

		/**
		 * @private
		 */
		constructor: function(params) {
			// Use the presence of attributes as a hint that params is the JSON structure.
			if (params && params.attributes) {
				this.id = params.favoriteId;
				// Legacy - id is now used instead.
				delete this.favoriteId;
				if (params.repositoryId) {
					this.repository = ecm.model.desktop.getRepository(params.repositoryId);
					if (this.repository) {
						delete this.repositoryId;
					}
				}
				this.type = params.attributes.type[0];
				this.objectId = params.id;
				this.hidden = params.hidden;
				this.subType = params.subType;
				// mimetype is already mixed in from params.mimetype
				this.template = params.attributes.template[0];
				delete this.attributes;
			}
		},

		/**
		 * Returns true if the item has the specified privilege.
		 * 
		 * @param privilege
		 *            The identifier of the privilege to test.
		 */
		hasPrivilege: function(priv) {
			return this.item && this.item.hasPrivilege(priv) ? this.item.hasPrivilege(priv) : false;
		},

		/**
		 * Returns all the attributes associated with this favorite.
		 */
		getAttributes: function() {
			if (!this.attributes) {
				this.attributes = [];
			}
			this.attributes["label"] = this.name;
			this.attributes["repositoryName"] = this.repository ? this.repository.name : "";
			this.attributes["mimetype"] = this.mimetype;
			this.attributes["template"] = this.template;
			this.attributes["vsId"] = this.vsId;
			this.attributes["type"] = this.type;
			this.attributes["itemid"] = this.objectId;
			this.attributes["hasContentFlag"] = this.hasContentFlag;
			this.attributes["repositoryLabel"] = this.repositoryLabel;
			this.attributes["syncEnabled"] = this.syncEnabled;
			this.attributes["syncId"] = this.syncId;
			this.attributes["syncDevices"] = this.syncDevices;
			return this.attributes;
		},

		/**
		 * Returns the value of the given attribute name.
		 * 
		 * @param attrName
		 *            Attribute to return.
		 */
		getValue: function(attrName) {
			var attributes = this.getAttributes();
			if (attributes) {
				return attributes[attrName];
			} else {
				return "";
			}
		},

		/**
		 * Returns an array of values for the attribute. For a single-value attribute this will be an array of one
		 * value. For multi-value attributes, this will be an array with all values of the attribute.
		 * 
		 * @param attribute
		 *            The attribute identifier.
		 */
		getValues: function(attribute) {
			var attributes = this.getAttributes();
			if (!attributes)
				return [];
			var v = attributes[attribute];
			if (lang.isArray(v)) {
				return v;
			} else {
				return [
					v
				];
			}
		},

		/**
		 * Returns the parent path of the favorite item.
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
		 * Returns true if the item's attribute is specified.
		 * 
		 * @param attribute
		 *            The identifier of the attribute to test.
		 */
		hasAttribute: function(attribute) {
			var attributes = this.getAttributes();
			return ((attributes && (typeof attributes[attribute] != "undefined")) ? true : false);
		},

		/**
		 * Returns true if the favorite is a folder and false if it is not.
		 */
		isFolder: function() {
			return this.type == "folder";
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
		 * Returns true if the item associated with this favorite has content.
		 */
		hasContent: function() {
			return this.hasContentFlag;
		},

		/**
		 * Return the context menu type for this favorite item if selected. If null is returned, the context menu type
		 * is determined by the FavoritesResultSet.
		 * 
		 * @param loadBaseMenu
		 *            Boolean indicating whether to load just the base favorite actions. If false, item-specific context
		 *            menus will be loaded.
		 * @since 2.0.3
		 */
		getActionsMenuItemsType: function(loadBaseMenu) {
			return null;
		},

		/**
		 * @private Fires the onChange event for this object when the internal item reference is retrieved.
		 */
		_setItem: function(item) {
			this.item = item;
			if ("mimetype" in item) {
				this.mimetype = item.mimetype;
			}
			if (lang.isFunction(item.hasContent)) {
				this.hasContentFlag = item.hasContent();
			}
			this.onChange(this);
		},

		/**
		 * Retrieves the item associated with the favorite.
		 * 
		 * @param callback
		 *            A function that is called when the favorite retrieval has completed.
		 * @param params
		 *            An object containing parameters to control the request to the server. For example, you can set the
		 *            retrieve to be performed in the background. See {@link ecm.model.Request} for a list of parameters
		 *            supported by a server request.
		 */
		retrieveFavorite: function(callback, params) {
			this.logEntry("retrieveFavorite");
			if (this.repository) {
				if (this.repository.connected) {
					this._retrieveFavorite(callback, params);
				} else {
					ecm.widget.dialog.LoginDialog.getLoginDialog().connectToRepository(this.repository, lang.hitch(this, function() {
						if (this.repository.connected) {
							this._retrieveFavorite(callback, params);
						}
					}));
				}
			}
			this.logExit("retrieveFavorite");
		},

		/**
		 * @private
		 */
		_retrieveFavorite: function(callback, params) {
			var request;
			if (this.type == "search") {
				var backgroundRequest = false;
				if (params && params.backgroundRequest)
					backgroundRequest = true;

				request = this.repository.retrieveSearchTemplate(this.objectId, this.vsId, "released", lang.hitch(this, function(item) {
					if (item) {
						item.parent = this.parentFolder;
					}
					this._setItem(item);
					callback(this.item);
				}), params ? params.requestFailedCallback : null, backgroundRequest);
			} else if (this.type == "teamspace") {
				var item = new Teamspace({
					id: this.objectId,
					name: this.name,
					repository: this.repository,
					type: "instance",
					className: this.template,
					syncEnabled: this.syncEnabled,
					mimetype: "teamspace"
				});

				request = item.retrieveUserPrivileges(lang.hitch(this, function() {
					this._setItem(item);
					callback(this.item);
				}), params);
			} else {
				var version = this.repository._isCM() ? "current" : "released";
				request = this.repository.retrieveItem(this.objectId, lang.hitch(this, function(item) {
					if (item != null) {
						item.parent = this.parentFolder;
					}
					this.item = item;
					if (item != null && this.isFolder()) {
						// Propagate teamspace context if the folder is in a teamspace
						item.retrieveTeamspace(lang.hitch(this, function(teamspace) {
							this.item._teamspaceId = teamspace ? teamspace.id : null;
							this._setItem(this.item);
							callback(this.item);
						}), params);
					} else if (item != null && this.item.retrieveThumbnail && this.item.repository.type == "box") {
						this.item.retrieveThumbnail(lang.hitch(this, function() {
							this._setItem(this.item);
							callback(this.item);
						}), {
							backgroundRequest: true
						});
					} else {
						this._setItem(this.item);
						callback(this.item);
					}
				}), this.template, version, this.vsId, null, "favorite", params);
			}
			return request;
		},

		/**
		 * Returns the State icon CSS class for that specified state.
		 * 
		 * @since 2.0.3
		 * @param state
		 *            The id from Admin of the particular state class you are looking for
		 */
		getStateClass: function(state) {
			var stateClass = Item.StateToCssClass[state];
			if (!stateClass) {
				stateClass = "";
			}
			return stateClass;
		},

		/**
		 * Returns the icon class (file type) for this favorite MIME type.
		 */
		getMimeClass: function() {
			this.logEntry("getMimeClass");
			var iconClass;
			if (this.type == "folder") {
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
				iconClass = Item.MimeTypeToFileType[this.mimetype];
				if (!iconClass) {
					if (this.mimetype) {
						if (this.mimetype.substr(0, "audio/".length) == "audio/") {
							iconClass = Item.MimeTypeToFileType["audio/*"] || "ftAudio";
						} else if (this.mimetype.substr(0, "image/".length) == "image/") {
							iconClass = Item.MimeTypeToFileType["image/*"] || "ftGraphic";
						} else if (this.mimetype.substr(0, "video/".length) == "video/") {
							iconClass = Item.MimeTypeToFileType["video/*"] || "ftVideo";
						} else if (this.mimetype == "teamspace" || this.mimetype == "Teamspace") {
							iconClass = "ecmTeamspaceIcon";
						} else if (this.type == "search") {
							iconClass = "ftSearchTemplate";
						} else if (this.mimetype == "application/x-icn-declarerecordentrytemplate") {
							iconClass = "ftDeclareRecordEntryTemplate";
						} else {
							iconClass = "ftDefault";
						}
					} else {
						iconClass = "ftDefault";
					}
				}
			}
			this.logExit("getMimeClass");
			return iconClass;
		},

		/**
		 * Generates a json definition for this favorite.
		 */
		toJSON: function() {
			this.logEntry("toJSON");
			var json = {};
			json.alias = this.name;
			json.itemId = this.objectId;
			json.mimetype = this.mimetype;
			json.repositoryId = this.repository ? this.repository.id : this.repositoryId;
			json.template = this.template;
			json.type = this.type;
			json.vsId = this.vsId;
			json.hasContentFlag = this.hasContentFlag;
			json.syncEnabled = this.syncEnabled;
			json.syncId = this.syncId;
			json.syncDevices = this.syncDevices;
			json.hidden = this.hidden;
			json.subType = this.subType;
			this.logExit("toJSON");
			return json;
		}
	});

	/**
	 * Registers a factory for sub-classes of <code>Favorite</code>.
	 * 
	 * @param factory
	 *            A factory object with <code>createFromItem()</code> and <code>createFromJSON()</code> methods to
	 *            possibly create a sub-class of <code>Favorite</code> from the given item. The factory method should
	 *            return null when the given item is not one for known sub-classes, giving chances for other factories
	 *            to create one or falling back to the default <code>Favorite</code> construction.
	 * @since 2.0.3
	 */
	Favorite.registerFactory = function(factory) {
		if (!Favorite._factories) {
			Favorite._factories = [];
		}
		Favorite._factories.push(factory);
	};

	/**
	 * Constructs a favorite given a JSON representation of the item.
	 * 
	 * @param itemJSON
	 *            The JSON representation of the favorite.
	 * @since 2.0.3
	 */
	Favorite.createFromJSON = function(itemJSON) {
		var favorite = null;
		// visit factories to see if one of them can create a sub-class for this favorite
		Favorite._factories && array.some(Favorite._factories, function(factory) {
			if (factory && factory.createFromJSON) {
				favorite = factory.createFromJSON(itemJSON);
			}
			return !!favorite;
		});

		if (!favorite) {
			favorite = new Favorite(itemJSON);
		}

		return favorite;
	},

	/**
	 * Constructs a new favorite from a given item.
	 * 
	 * @param item
	 *            The item to create a favorite from.
	 * @param alias
	 *            The name of the favorite.
	 * @since 2.0.3
	 */
	Favorite.createFromItem = function(item, alias) {

		var favorite = null;
		Favorite._factories && array.some(Favorite._factories, function(factory) {
			if (factory && factory.createFromItem) {
				favorite = factory.createFromItem(item, alias);
			}
			return !!favorite;
		});

		if (!favorite) {
			var id = Favorite.generateFavoriteId(item);

			var hasContentFlag = false;
			var type = "document";
			if (item.isInstanceOf && item.isInstanceOf(ecm.model.Teamspace))
				type = "teamspace";
			else if (item.isFolder())
				type = "folder";
			else if (item.isInstanceOf && item.isInstanceOf(ecm.model._SearchTemplateBase))
				type = "search";
			else if (item.isSystemItem && item.isSystemItem())
				type = "systemItem";

			if (item.hasContent)
				hasContentFlag = item.hasContent();

			var template = "";
			if (type == "teamspace")
				template = item.className;
			else
				template = item ? item.template : "";

			var favName = alias || item.name;
			var mimeType = item.mimetype ? item.mimetype : type;
			var vsId = item.vsId ? item.vsId : null;

			var repositoryLabel = item.getValue && item.getValue("repositoryLabel") ? item.getValue("repositoryLabel") : "";
			favorite = Favorite.createFromJSON({
				id: id,
				name: favName,
				repository: item.repository,
				type: type,
				objectId: item.id,
				mimetype: mimeType,
				template: template,
				vsId: vsId,
				hasContentFlag: hasContentFlag,
				repositoryLabel: repositoryLabel,
				syncEnabled: item.syncEnabled,
				syncId: null,
				syncDevices: null,
				item: item
			});
		}

		return favorite;
	};

	Favorite.generateFavoriteId = function(item) {
		var id = ecm.model.desktop.id + "." + ecm.model.desktop.getDefaultRepository().userId.toLowerCase() + "." + item.repository.id;
		id = id.replace("\\", "%5C"); // configuration key id cannot include \
//		backslash and semicolon in the item id will be checked at the mid-tier
		id += "." + item.id;
//		var itemid = item.id;
//		var i = itemid.indexOf(";");//configuration key id cannot include semicolon, semicolon is illegal.
//		if (i > 0) {
//			itemid = encodeURIComponent(itemid);
//		}
//		id += itemid;
		return id;
	};

	return Favorite;
});
