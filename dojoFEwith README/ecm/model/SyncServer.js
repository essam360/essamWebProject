/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/json",
	"./_ModelObject",
	"./Request",
	"./ResultSet",
	"ecm/model/SyncItem"
], function(declare, lang, dojojson, ModelObject, Request, ResultSet, SyncItem) {

	/**
	 * @name ecm.model.SyncServer
	 * @class Represents the sync server in IBM Content Navigator. It holds all related sync server information and
	 *        functionality.
	 * @augments ecm.model._ModelObject
	 * @since 2.0.3
	 */
	return declare("ecm.model.SyncServer", [
		ModelObject
	], {
		/** @lends ecm.model.SyncServer.prototype */

		/**
		 * Boolean indicating if the sync server is enabled
		 */
		enabled: false,

		/**
		 * Sync configuration settings.
		 */
		syncConfig: null,

		/**
		 * Mime types that are not supported by the sync server.
		 * 
		 * @private
		 */
		_unsupportedMimeTypes: {
			"application/x-filenet-searchtemplate": true,
			"application/x-searchtemplate": true,
			"application/x-searchtemplate.automatic": true,
			"application/x-unifiedsearchtemplate": true,
			"application/x-filenet-search": true,

			"application/x-filenet-entrytemplate": true,
			"application/x-filenet-formdataentrytemplate": true,
			"application/x-filenet-customobjectentrytemplate": true,
			"application/x-filenet-documententrytemplate": true,
			"application/x-filenet-folderentrytemplate": true,
			"application/x-filenet-declarerecordentrytemplate": true,

			"application/x-icn-declarerecordentrytemplate": true,
			"application/x-icn-documententrytemplate": true,
			"application/x-icn-folderentrytemplate": true,

			"application/x-filenet-workflowdefinition": true,
			"application/x-filenet-xpdlworkflowdefinition": true,

			"application/x-workitem": true,
			"application/x-tracker": true,

			"application/x-filenet-documentpolicy": true,
			"application/x-filenet-workflowpolicy": true,
			"application/x-filenet-formdata": true,
			"application/x-filenet-itxformtemplate": true,
			"application/vnd.xfdl.design": true,
			"application/vnd.xfdl": true,
			"application/x-ibmecm-acmformdata": true,

			"application/x-filenet-external": true,
		},

		/**
		 * Initially initializes the task manager with values from the desktop.
		 */
		initialize: function(response) {
			if (response) {
				this.enabled = response.syncServerEnabled || false;
				this.syncConfig = response.syncConfig;
			}
		},

		/**
		 * Returns only the favorites that are being synced.
		 * 
		 * @param callback
		 *            Callback function called after favorites have been retrieved.
		 * @returns An array of {@link ecm.model.Favorite} objects.
		 */
		getSyncedFavorites: function(callback) {
			this.logEntry("getSyncedFavorites");

			this.logDebug("Retrieving favorites from the desktop");
			ecm.model.favorites.loadFavorites(function(favs, detailsStructure, magazineStructure) {
				var favorites = [];

				this.logDebug("Filtering desktop favorites by syncEnabled");
				for ( var i in favs) {
					if (favs[i].syncEnabled) {
						favorites.push(favs[i]);
					}
				}

				if (lang.isFunction(callback)) {
					callback(favorites, detailsStructure, magazineStructure);
				}
			});

			this.logExit("getSyncedFavorites");
		},

		/**
		 * Determines if it's possible to sync the given item. An item is either an instance of
		 * {@link ecm.model.Favorite} or {@link ecm.model.Item}.
		 * 
		 * @item An instance of {@link ecm.model.Favorite} or {@link ecm.model.Item}
		 * @returns Returns true if the item can be synced and false if it cannot.
		 */
		canSyncItem: function(item) {
			this.logEntry("canSyncItem");

			if (this.enabled && item && item.repository) {
				var repository = item.repository;

				if (repository.syncEnabled && item.isInstanceOf) {
					if (item.isInstanceOf(ecm.model.Teamspace) || (item.isInstanceOf(ecm.model.Favorite) && item.type == "teamspace")) {
						if (item.state && item.state == "offline" || item.item && item.item.state == "offline") {
							return false;
						} else {
							return true;
						}
					} else if (item.mimetype && !this._unsupportedMimeTypes[item.mimetype])
						return true;
					else if (item.isFolder && item.isFolder())
						return true;
				}
			}

			this.logExit("canSyncItem");
			return false;
		},

		/**
		 * Enables sync for an array of {@link ecm.model.Item} or {@link ecm.model.Teamspace} objects.
		 * 
		 * @param items
		 *            The array of {@link ecm.model.Item} or {@link ecm.model.Teamspace} objects.
		 * @param callback
		 *            Callback function triggered when the enableSyncForItems call completes.
		 * @since 2.0.3.5
		 */
		enableSyncForItems: function(items, callback) {
			this.logEntry("enableSyncForItems");

			if (items) {
				this.logDebug("Submitting request to the sync server to enable sync for items");
				var syncItems = [];
				for ( var i in items) {
					syncItems.push(SyncItem.createFromItem(items[i]));
				}

				var params = {
					requestParams: {
						appName: "navigator",
						desktop: ecm.model.desktop.id,
						userConfigId: ecm.model.desktop.id + "." + ecm.model.desktop.getDefaultRepositoryId() + "." + ecm.model.desktop.userId.toLowerCase(),
						syncItems: dojojson.toJson(syncItems)
					},
					requestCompleteCallback: lang.hitch(this, function(response) {
						this.logDebug("Successfully returned from the call to the sync server");
						this._enableSyncForItems(items, response, callback);
					})
				};
				var request = Request.postServiceAPI("sync/enableSync", null, "text/json", params);
			}

			this.logExit("enableSyncForItems");
			return request;
		},

		/**
		 * Method run when the call to enableSyncForItems completes.
		 * 
		 * @param response
		 *            Response from the service API call.
		 * @param callback
		 *            Callback function triggered when the enableSyncForFavorites call completes.
		 * @private
		 */
		_enableSyncForItems: function(items, response, callback) {
			this.logEntry("_enableSyncForItems");

			this.logDebug("Updating the desktop items...");
			var syncItemsToProcess = [];
			if (items && items.length > 0 && response && response.list) {
				for ( var i in items) {
					for ( var j in response.list) {
						if (items[i].id == response.list[j].itemId// 
								|| items[i].vsId && items[i].vsId == response.list[j].vsId) {
							items[i].syncEnabled = true;
							items[i].syncId = response.list[j].syncId;

							var syncItem = SyncItem.createFromItem(items[i]);
							syncItem.repositoryLabel = response.list[j].repositoryLabel;
							syncItem.syncId = response.list[j].syncId;
							// No update on teamspaces				
							if (syncItem.item && lang.isFunction(syncItem.item.update)) {
								syncItem.item.update(syncItem.item);
							} else if (syncItem.item && syncItem.item instanceof ecm.model.Teamspace) {
								syncItem.item.onChange(syncItem.item);
								ecm.model.desktop.onChange([
									syncItem.item
								]);
							}

							if (!ecm.model.desktop.syncItems)
								ecm.model.desktop.syncItems = [];

							var existing = false;
							for ( var k in ecm.model.desktop.syncItems) {
								if (ecm.model.desktop.syncItems[k].id == syncItem.id) {
									existing = true;
									break;
								}
							}
							syncItem.syncEnabled = true;
							if (!existing) {
								ecm.model.desktop.syncItems.push(syncItem);
							}

							// Add to recent items list
							if (syncItem.type && syncItem.type == "teamspace") {
								syncItem.item.repository.addRecentTeamspace(syncItem.item);
							} else if (syncItem.item) {
								syncItem.item.repository.addRecentItem(syncItem.item);
							}

							syncItemsToProcess.push(syncItem);
						}
					}
				}
			}

			this.onEnableSyncForItemsComplete(syncItemsToProcess);
			if (lang.isFunction(callback)) {
				callback(syncItemsToProcess);
			}

			this.logExit("_enableSyncForItems");
		},

		/**
		 * Event method fired when enableSyncForItems items completes.
		 * 
		 * @param syncItems
		 *            An array of {@link ecm.model.SyncItem} objects.
		 * @since 2.0.3.5
		 */
		onEnableSyncForItemsComplete: function(syncItems) {
		},

		/**
		 * Disables sync for an array of {@link ecm.model.Item} or {@link ecm.model.Teamspace} objects.
		 * 
		 * @param items
		 *            An array of {@link ecm.model.Item} or {@link ecm.model.Teamspace} objects.
		 * @param callback
		 *            Callback function triggered when the server call completes.
		 * @since 2.0.3.5
		 */
		disableSyncForItems: function(items, callback) {
			this.logEntry("disableSyncForItems");

			if (items && this.enabled) {
				this.logDebug("Submitting request to the sync server to disable sync for items");
				var syncItems = [];
				var vsIds = [];
				for ( var i in items) {
					if (items[i].isInstanceOf(ecm.model.SyncItem)) {
						syncItems.push(items[i].id);
					} else {
						syncItems.push(SyncItem.generateSyncItemId(items[i]));
					}
					if (items[i].vsId) {
						vsIds.push(items[i].vsId);
					} else {
						vsIds.push("");
					}
				}

				var params = {
					requestParams: {
						appName: "navigator",
						desktop: ecm.model.desktop.id,
						userConfigId: ecm.model.desktop.id + "." + ecm.model.desktop.getDefaultRepositoryId() + "." + ecm.model.desktop.userId.toLowerCase(),
						syncItems: dojojson.toJson(syncItems),
						vsIds: dojojson.toJson(vsIds)
					},
					requestCompleteCallback: lang.hitch(this, function(response) {
						this.logDebug("Successfully returned from the call to the sync server");
						this._disableSyncForItems(items, response, callback);
					})
				};
				var request = Request.postServiceAPI("sync/disableSync", null, "text/json", params);
			}

			this.logExit("disableSyncForItems");
			return request;
		},

		/**
		 * Method run when the call to disableSyncForItems completes.
		 * 
		 * @param response
		 *            Response from the service API call.
		 * @param callback
		 *            Callback function triggered when the disableSyncForFavorites call completes.
		 * @private
		 */
		_disableSyncForItems: function(items, response, callback) {
			this.logEntry("_disableSyncForItems");

			this.logDebug("Updating the desktop items and sync items...");

			var syncItemsToBeRemoved = [];
			if (items && items.length > 0 && response && response.list) {
				for ( var i in items) {
					for ( var j in response.list) {
						if (items[i].id == response.list[j].itemId//
								|| items[i].vsId && items[i].vsId == response.list[j].vsId) {
							items[i].syncEnabled = false;
							items[i].syncId = response.list[j].syncId;
							if (items[i] && lang.isFunction(items[i].update)) {
								items[i].update(items[i]);
							} else if (items[i] && items[i] instanceof ecm.model.Teamspace) {
								items[i].onChange(items[i]);
								ecm.model.desktop.onChange([
									items[i]
								]);
							}
						}
					}
				}
			}

			var tempArray = [];
			for ( var k in ecm.model.desktop.syncItems) {
				var syncItem = ecm.model.desktop.syncItems[k];
				var removed = false;
				for ( var l in response.list) {
					if (syncItem.id == response.list[l].id) {
						removed = true;
						break;
					}
				}
				if (!removed) {
					tempArray.push(syncItem);
				} else {
					syncItem.deleted = true;
					syncItem.syncEnabled = false;
					syncItemsToBeRemoved.push(syncItem);
				}
			}
			ecm.model.desktop.syncItems = tempArray;

			this.onDisableSyncForItemsComplete(syncItemsToBeRemoved);
			if (lang.isFunction(callback)) {
				callback(syncItemsToBeRemoved);
			}

			this.logExit("_disableSyncForItems");
		},

		/**
		 * Event method fired when disableSyncForItems items completes.
		 * 
		 * @param syncItems
		 *            An array of {@link ecm.model.SyncItem} objects.
		 * @since 2.0.3.5
		 */
		onDisableSyncForItemsComplete: function(syncItems) {
		},

		/**
		 * Enables sync for an array of {@link ecm.model.Favorite} objects.
		 * 
		 * @param favorites
		 *            The array of {@link ecm.model.Favorite} objects.
		 * @param callback
		 *            Callback function triggered when the enableSyncForFavorites call completes.
		 * @deprecated As of 2.0.3.5. Sync Favorite will be removed in a future release.
		 */
		enableSyncForFavorites: function(favorites, callback) {
			this.logEntry("enableSyncForFavorites");

			if (favorites && this.enabled) {
				this.logDebug("Submitting request to the sync server to enable sync for favorites");
				var items = [];
				for ( var i in favorites) {
					if (favorites[i].item) {
						items.push(favorites[i].item);
					}
				}
				this.enableSyncForItems(items, lang.hitch(favorites, this.onEnableSyncForFavoritesComplete));

			}

			this.logExit("enableSyncForFavorites");
			return request;
		},

		/**
		 * Event method fired when enableSyncForFavorites favorites completes.
		 * 
		 * @param favorites
		 *            An array of {@link ecm.model.Favorite} objects.
		 * @deprecated As of 2.0.3.5. Sync Favorite will be removed in a future release.
		 */
		onEnableSyncForFavoritesComplete: function(favorites) {
		},

		/**
		 * Disable sync for an array of {@link ecm.model.Favorite} objects.
		 * 
		 * @param favorites
		 *            An array of {@link ecm.model.Favorite} objects.
		 * @param callback
		 *            Callback function triggered when the server call completes.
		 * @deprecated As of 2.0.3.5. Sync Favorite will be removed in a future release.
		 */
		disableSyncForFavorites: function(favorites, callback) {
			this.logEntry("disableSyncForFavorites");

			if (favorites && this.enabled) {
				this.logDebug("Submitting request to the sync server to disable sync for favorites");
				var items = [];
				for ( var i in favorites) {
					if (favorites[i].item) {
						items.push(favorites[i].item);
					}
				}

				this.disableSyncForItems(items, lang.hitch(favorites, this.onDisableSyncForFavoritesComplete));
			}

			this.logExit("disableSyncForFavorites");
			return request;
		},

		/**
		 * Event method fired when disableSyncForFavorites favorites completes.
		 * 
		 * @param favorites
		 *            An array of {@link ecm.model.Favorite} objects.
		 * @deprecated As of 2.0.3.5. Sync Favorite will be removed in a future release.
		 */
		onDisableSyncForFavoritesComplete: function(favorites) {
		},

		/**
		 * Registers an array of {@link ecm.model.SyncItem} objects for a device.
		 * 
		 * @param syncItems
		 *            The array of {@link ecm.model.SyncItem} objects to register.
		 * @param deviceId
		 *            The device ID to register.
		 * @param callback
		 *            Callback function triggered when the call completes.
		 * @param params
		 *            Object containing parameters to pass to the {@link ecm.model.Request} object.
		 */
		registerSyncItemsForDevice: function(syncItems, deviceId, callback, params) {
			this.logEntry("registerSyncItemsForDevice");

			if (syncItems && this.enabled) {
				this.logDebug("Submitting request to the sync server to register sync items for device " + deviceId);
				var items = [];
				for ( var i in syncItems) {
					items.push(syncItems[i].id);
				}

				if (!lang.isObject(params)) {
					params = {};
				}
				if (!lang.isObject(params.requestParams)) {
					params.requestParams = {};
				}
				params.requestParams.appName = "navigator";
				params.requestParams.syncItems = dojojson.toJson(items);
				params.requestParams.deviceId = deviceId;
				params.requestCompleteCallback = lang.hitch(this, function(response) {
					this.logDebug("Successfully returned from the call to the sync server");
					this._registerSyncItemsForDeviceComplete(syncItems, response, callback);
				});
				var request = Request.postServiceAPI("sync/registerSyncItemsForDevice", null, "text/json", params);
			}

			this.logExit("registerSyncItemsForDevice");
			return request;
		},

		/**
		 * Method run when the call to sync items completes.
		 * 
		 * @param items
		 *            The array of {@link ecm.model.SyncItem} objects to register.
		 * @param response
		 *            Response from the service API call.
		 * @param callback
		 *            Callback function triggered when the registerSyncItemsForDevice call completes.
		 * @private
		 */
		_registerSyncItemsForDeviceComplete: function(items, response, callback) {
			this.logEntry("_registerSyncItemsForDeviceComplete");

			this.logDebug("Updating the desktop syncItems...");
			var syncItems = [];
//			if (items && items.length > 0 && response && response.list) {
//				var itemsJSON = response.list;
//				if (itemsJSON) {
//					for ( var i in itemsJSON) {
//						var syncedItem = SyncItem.createFromJSON(itemsJSON[i]);
//						syncedItem.syncDevices = itemsJSON[i].syncDevices;
//						syncItems.push(syncedItem);
//					}
//				}
//			}
			if (items && items.length > 0 && response && response.list) {
				for ( var i in items) {
					for ( var j in response.list) {
						if (items[i].id == response.list[j].id) {
							if (response.list[j].syncDevices) {
								items[i].syncDevices = lang.clone(response.list[j].syncDevices);
							} else {
								items[i].syncDevices = null;
							}
							syncItems.push(items[i]);
						}
					}
				}
			}

			this.onRegisterSyncItemsForDeviceComplete(syncItems);
			if (lang.isFunction(callback)) {
				callback(syncItems);
			}
			this.logExit("_registerSyncItemsForDeviceComplete");
		},

		/**
		 * Event method fired when register sync items for device completes.
		 * 
		 * @param syncItems
		 *            An array of {@link ecm.model.SyncItem} objects registered for the device.
		 */
		onRegisterSyncItemsForDeviceComplete: function(favorites) {
		},

		/**
		 * Unregisters an array of {@link ecm.model.SyncItem} objects for a device.
		 * 
		 * @param syncItems
		 *            The array of {@link ecm.model.SyncItem} objects to unregister.
		 * @param deviceId
		 *            The device ID to unregister.
		 * @param callback
		 *            Callback function triggered when the call completes.
		 * @param params
		 *            Object containing parameters to pass to the {@link ecm.model.Request} object.
		 */
		unregisterSyncItemsForDevice: function(syncItems, deviceId, callback, params) {
			this.logEntry("registerSyncItemsForDevice");

			if (syncItems && this.enabled) {
				this.logDebug("Submitting request to the sync server to register sync items for device " + deviceId);
				var items = [];
				for ( var i in syncItems) {
					items.push(syncItems[i].id);
				}
				if (!lang.isObject(params)) {
					params = {};
				}
				if (!lang.isObject(params.requestParams)) {
					params.requestParams = {};
				}
				params.requestParams.appName = "navigator";
				params.requestParams.syncItems = dojojson.toJson(items);
				params.requestParams.deviceId = deviceId;
				params.requestCompleteCallback = lang.hitch(this, function(response) {
					this.logDebug("Successfully returned from the call to the sync server");
					this._unregisterSyncItemsForDeviceComplete(syncItems, response, callback);
				});
				var request = Request.postServiceAPI("sync/unregisterSyncItemsForDevice", null, "text/json", params);
			}

			this.logExit("registerSyncItemsForDevice");
			return request;
		},

		/**
		 * Method run when the call to unregister a device completes.
		 * 
		 * @param items
		 *            The array of {@link ecm.model.SyncItem} objects to register.
		 * @param response
		 *            Service API response.
		 * @param callback
		 *            Callback function triggered when the unregisterSyncItemsForDevice call completes.
		 * @private
		 */
		_unregisterSyncItemsForDeviceComplete: function(items, response, callback) {
			this.logEntry("_unregisterSyncItemsForDeviceComplete");

			var syncItems = [];
			if (items && items.length > 0 && response && response.list) {
				for ( var i in items) {
					for ( var j in response.list) {
						if (items[i].id == response.list[j].id) {
							if (response.list[j].syncDevices) {
								items[i].syncDevices = lang.clone(response.list[j].syncDevices);
							} else {
								items[i].syncDevices = null;
							}
							syncItems.push(items[i]);
						}
					}
				}
			}
			this.onUnregisterSyncItemsForDeviceComplete(syncItems);
			if (lang.isFunction(callback)) {
				callback(syncItems);
			}

			this.logExit("_unregisterSyncItemsForDeviceComplete");
		},

		/**
		 * Event method fired when unregister sync items for device completes.
		 * 
		 * @param syncItems
		 *            An array of {@link ecm.model.SyncItem} objects unregistered for the device.
		 */
		onUnregisterSyncItemsForDeviceComplete: function(syncItems) {
		},

		/**
		 * Registers an object with the sync server.
		 * 
		 * @param registrationId
		 *            The ID assigned by the sync server to the registered object.
		 * @param item
		 *            An {@link ecm.model.Item} object to register.
		 * @param callback
		 *            Callback function triggered when this method completes.
		 * @param params
		 *            Object containing parameters to pass to the {@link ecm.model.Request} object.
		 */
		registerObject: function(registrationId, item, callback, params) {
			this.logEntry("registerObject");

			if (item) {
				var docId = item.id;
				if (item.vsId && item.vsId.length > 0)
					docId = item.vsId;

				if (!lang.isObject(params))
					params = {};
				if (!lang.isObject(params.requestParams))
					params.requestParams = {};

				params.requestParams.docId = docId;
				params.requestParams.registrationId = registrationId;
				params.requestParams.appName = "navigator";
				params.requestParams.repositoryId = item.repository.id;
				params.requestParams.folder = item.isFolder();

				params.requestCompleteCallback = lang.hitch(this, function(response) {
					this.logDebug("Successfully returned from the call to the sync server");
					lang.mixin(item, response);
					this.onRegisterObjectComplete(item);

					if (lang.isFunction(callback))
						callback(response);
				});
				var request = Request.postServiceAPI("sync/registerObject", null, "text/json", params);
			}

			this.logExit("registerObject");
			return request;
		},

		/**
		 * Event method fired when register object completes.
		 */
		onRegisterObjectComplete: function(item) {
		},

		/**
		 * Unregisters an object with the sync server.
		 * 
		 * @param registrationId
		 *            The ID assigned by the sync server to the registered object.
		 * @param item
		 *            An {@link ecm.model.Item} object to register.
		 * @param callback
		 *            Callback function triggered when this method completes.
		 * @param params
		 *            Object containing parameters to pass to the {@link ecm.model.Request} object.
		 */
		unregisterObject: function(registrationId, item, callback, params) {
			this.logEntry("unregisterObject");

			if (item) {
				var docId = item.id;
				if (item.vsId && item.vsId.length > 0)
					docId = item.vsId;

				if (!lang.isObject(params))
					params = {};
				if (!lang.isObject(params.requestParams))
					params.requestParams = {};

				params.requestParams.docId = docId;
				params.requestParams.registrationId = registrationId;
				params.requestParams.appName = "navigator";
				params.requestParams.repositoryId = item.repository.id;
				params.requestParams.folder = item.isFolder();

				params.requestCompleteCallback = lang.hitch(this, function(response) {
					this.logDebug("Successfully returned from the call to the sync server");
					this.onUnregisterObjectComplete(response);

					if (lang.isFunction(callback))
						callback(response);
				});
				var request = Request.postServiceAPI("sync/unregisterObject", null, "text/json", params);
			}

			this.logExit("unregisterObject");
			return request;
		},

		/**
		 * Event method fired when unregister object completes.
		 */
		onUnregisterObjectComplete: function() {
		},

		/**
		 * Retrieves a list of changes from the sync server.
		 * 
		 * @param repository
		 *            The {@link ecm.model.Repository} object to check for changes.
		 * @param params
		 *            An object containing parameters to pass to the {@link ecm.model.Request} object. The params object
		 *            must contain "requestParams". This is an object containing at least the following parameters:
		 *            <ul>
		 *            <li>pageSize - The number of results to retrieve. The default page size is 50.</li>
		 *            <li>changesSince - <b>Required:</b> Timestamp indicating the start time for the change list
		 *            query.</li>
		 *            <li>changesUntil - <b>Required:</b> Timestamp indicating the stop time for the change list
		 *            query.</li>
		 *            <li>marker - The current result number. The default will be 0.</li>
		 *            <li>registrationIds - <b>Required:</b> An array of device registration Ids.</li>
		 *            <li>lastUpdateTS - <b>Required:</b> Last update timestamp.</li>
		 *            </ul>
		 * @param callback
		 *            Callback function triggered when this method completes.
		 */
		getChangesList: function(repository, params, callback) {
			this.logEntry("getChangesList");

			if (repository && params && params.requestParams) {
				if (!params.requestParams.pageSize)
					params.requestParams.pageSize = 50;
				if (!params.requestParams.marker)
					params.requestParams.marker = 0;

				params.requestParams.appName = "navigator";
				params.requestParams.repositoryId = repository.id;
				params.requestParams.desktop = ecm.model.desktop.id;

				params.requestCompleteCallback = lang.hitch(this, function(response) {
					this.logDebug("Successfully returned from the call to the sync server");
					this.syncConfig = response.syncConfig;
					this.onGetChangeListComplete(response);

					if (lang.isFunction(callback))
						callback(response);
				});
				var request = Request.postServiceAPI("sync/getChangesList", null, "text/json", params);
			}

			this.logExit("getChangesList");
			return request;
		},

		/**
		 * Event method called when getChangeList completes
		 * 
		 * @param resultSet
		 *            An instance of {@link ecm.model.ResultSet}
		 */
		onGetChangeListComplete: function(response) {
		},

		/**
		 * Checks sync client compatibility with the server.
		 * 
		 * @param callback
		 *            Callback function triggered when this method completes.
		 * @param params
		 *            Object containing parameters to pass to the {@link ecm.model.Request} object.
		 */
		checkClientCompatibility: function(callback, params) {
			this.logEntry("checkClientCompatibility");

			if (!lang.isObject(params))
				params = {};
			if (!lang.isObject(params.requestParams))
				params.requestParams = {};

			params.requestCompleteCallback = lang.hitch(this, function(response) {
				this.logDebug("Successfully returned from the call to the sync server");
				this.onCheckClientCompatibilityComplete(response);

				if (lang.isFunction(callback))
					callback(response);
			});
			var request = Request.postServiceAPI("sync/checkClientCompatibility", null, "text/json", params);

			this.logExit("checkClientCompatibility");
			return request;
		},

		/**
		 * Event method fired when register object completes.
		 */
		onCheckClientCompatibilityComplete: function(item) {
		}
	});
});
