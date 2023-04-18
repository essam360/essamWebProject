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
	"./Teamspace",
	"ecm/model/Favorite"
], function(declare, lang, array, _ModelObject, Item, Teamspace, Favorite) {

	/**
	 * Constructor
	 * 
	 * @param properties
	 *            The properties for the model object. The properties can be any of the public fields as defined below
	 *            and on ecm.model._ModelObject.
	 * @name ecm.model.SyncItem
	 * @class Represents an object added to sync items.
	 * @augments ecm.model._ModelObject
	 * @since 2.0.3.5
	 */
	var SyncItem = declare("ecm.model.SyncItem", [
		Favorite
	], {
		/** @lends ecm.model.SyncItem.prototype */

		/**
		 * ID of the sync item.
		 */
		syncItemId: null,

		/**
		 * ID of the item on the sync server
		 */
		syncId: null,

		/**
		 * Object containing the devices registered to sync this sync item.
		 */
		syncDevices: null,

		/**
		 * @private
		 */
		constructor: function(params) {
			// Use the presence of attributes as a hint that params is the JSON structure.
			if (params && params.attributes) {
				this.id = params.syncItemId;
				// Legacy - id is now used instead.
				delete this.syncItemId;
				if (params.repositoryId) {
					this.repository = ecm.model.desktop.getRepository(params.repositoryId);
					if (this.repository) {
						delete this.repositoryId;
					}
				}
				this.type = params.attributes.type[0];
				this.objectId = params.id;
				this.subType = params.subType;
				// mimetype is already mixed in from params.mimetype
				this.template = params.attributes.template[0];
				delete this.attributes;
			}
		},

		/**
		 * Returns all the attributes associated with this sync item.
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
			this.attributes["syncId"] = this.syncId;
			this.attributes["syncDevices"] = this.syncDevices;
			return this.attributes;
		},

		/**
		 * Retrieves the item associated with the sync item.
		 * 
		 * @param callback
		 *            A function that is called when the sync item retrieval has completed.
		 * @param params
		 *            An object containing parameters to control the request to the server. For example, you can set the
		 *            retrieve to be performed in the background. See {@link ecm.model.Request} for a list of parameters
		 *            supported by a server request.
		 */
		retrieveSyncItem: function(callback, params) {
			this.logEntry("retrieveSyncItem");
			if (this.repository) {
				if (this.repository.connected) {
					this._retrieveSyncItem(callback, params);
				} else {
					ecm.widget.dialog.LoginDialog.getLoginDialog().connectToRepository(this.repository, lang.hitch(this, function() {
						if (this.repository.connected) {
							this._retrieveSyncItem(callback, params);
						}
					}));
				}
			}
			this.logExit("retrieveSyncItemList");
		},

		/**
		 * @private
		 */
		_retrieveSyncItem: function(callback, params) {
			var request;
			if (this.type == "teamspace") {
				var item = new Teamspace({
					id: this.objectId,
					name: this.name,
					repository: this.repository,
					type: "instance",
					className: this.template,
					mimetype: "teamspace"
				});
				request = item.retrieveUserPrivileges(lang.hitch(this, function() {
					this._setItem(item);
					callback(this.item);
				}), params);
			} else {
				var version = "released";
				request = this.repository.retrieveItem(this.objectId, lang.hitch(this, function(item) {
					item.parent = this.parentFolder;
					this.item = item;
					this.checkName(item);
					if (this.isFolder()) {
						// Propagate teamspace context if the folder is in a teamspace
						item.retrieveTeamspace(lang.hitch(this, function(teamspace) {
							this.item._teamspaceId = teamspace ? teamspace.id : null;
							this._setItem(this.item);
							callback(this.item);
						}), params);
					} else {
						this._setItem(this.item);
						callback(this.item);
					}
				}), this.template, version, this.vsId, null, "syncItem", params);
			}
			return request;
		},

		/**
		 * Check if the item name is updated for the synced item. If update, update the sync item name.
		 * 
		 * @param A
		 *            {@link ecm.model.Item} object to check the name.
		 */
		checkName: function(item) {
			if (this.name != item.name) {
				this.name = item.name;
				ecm.model.desktop.updateSyncItem(this);
			}
		},

		/**
		 * Generates a json definition for this sync item.
		 */
		toJSON: function() {
			this.logEntry("toJSON");
			var json = {};
			json.id = this.id;
			json.alias = this.name;
			json.itemId = this.objectId;
			json.mimetype = this.mimetype;
			json.repositoryId = this.repository ? this.repository.id : this.repositoryId;
			json.template = this.template;
			json.type = this.type;
			json.vsId = this.vsId;
			json.hasContentFlag = this.hasContentFlag;
			json.syncId = this.syncId;
			json.syncDevices = this.syncDevices;
			json.subType = this.subType;
			this.logExit("toJSON");
			return json;
		}
	});

	/**
	 * Registers a factory for sub-classes of <code>SyncItem</code>.
	 * 
	 * @param factory
	 *            A factory object with <code>createFromItem()</code> and <code>createFromJSON()</code> methods to
	 *            possibly create a sub-class of <code>SyncItem</code> from the given item. The factory method should
	 *            return null when the given item is not one for known sub-classes, giving chances for other factories
	 *            to create one or falling back to the default <code>SyncItem</code> construction.
	 */
	SyncItem.registerFactory = function(factory) {
		if (!SyncItem._factories) {
			SyncItem._factories = [];
		}
		SyncItem._factories.push(factory);
	};

	/**
	 * Constructs a sync item given a JSON representation of the item.
	 * 
	 * @param itemJSON
	 *            The JSON representation of the sync item.
	 */
	SyncItem.createFromJSON = function(itemJSON) {
		var syncItem = null;
		// visit factories to see if one of them can create a sub-class for this sync item
		SyncItem._factories && array.some(SyncItem._factories, function(syncItem) {
			if (factory && factory.createFromJSON) {
				syncItem = factory.createFromJSON(itemJSON);
			}
			return !!syncItem;
		});

		if (!syncItem) {
			syncItem = new SyncItem(itemJSON);
		}

		return syncItem;
	},

	/**
	 * Constructs a new sync item from a given item.
	 * 
	 * @param item
	 *            The item to create a sync item from.
	 */
	SyncItem.createFromItem = function(item) {

		var syncItem = null;
		SyncItem._factories && array.some(SyncItem._factories, function(factory) {
			if (factory && factory.createFromItem) {
				syncItem = factory.createFromItem(item);
			}
			return !!syncItem;
		});

		if (!syncItem) {
			var id = SyncItem.generateSyncItemId(item);

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

			var syncItemName = item.name;
			var mimeType = item.mimetype ? item.mimetype : type;
			var vsId = item.vsId ? item.vsId : null;

			var repositoryLabel = item.getValue && item.getValue("repositoryLabel") ? item.getValue("repositoryLabel") : "";
			syncItem = SyncItem.createFromJSON({
				id: id,
				name: syncItemName,
				repository: item.repository,
				type: type,
				objectId: item.id,
				mimetype: mimeType,
				template: template,
				vsId: vsId,
				hasContentFlag: hasContentFlag,
				repositoryLabel: repositoryLabel,
				syncId: null,
				syncDevices: null,
				item: item
			});
		}

		return syncItem;
	};

	SyncItem.generateSyncItemId = function(item) {
		var id = ecm.model.desktop.id + "." + ecm.model.desktop.getDefaultRepository().userId.toLowerCase() + "." + item.repository.id + ".";
		var itemid = item.id;
		if (item.repository && item.repository._isP8()) {
			var itemid = item.id.split(",")[2];
		}
		var i = itemid.indexOf(";");//configuration key id cannot include semicolon, semicolon is illegal.
		if (i > 0) {
			itemid = encodeURIComponent(itemid);
		}
		id = id + itemid;
		id = id.replace("\\", "%5C"); // configuration key id cannot include \
		return id;
	};

	return SyncItem;
});
