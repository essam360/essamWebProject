/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/json",
	"./_ModelObject",
	"./WorkItem",
	"./Request"
],

function(declare, lang, dojojson, _ModelObject, WorkItem, Request) {

	/**
	 * @name ecm.model.WorkItemProcessor
	 * @class Provides methods to get the next or previous workitem from its result set given the current loaded work
	 *        item. The work item must contains a resultSet.
	 * @augments ecm.model._ModelObject
	 * @since 2.0.2
	 */
	return declare("ecm.model.WorkItemProcessor", [
		_ModelObject
	], {
		/** @lends ecm.model.WorkItemProcessor.prototype */

		workItem: null,

		constructor: function(workItem) {
			var methodName = "constructor";
			if (workItem) {
				this.workItem = workItem;
				this.id = this.workItem.id;
				this.name = this.workItem.name;
				if (workItem.resultSet) {
					this._index = workItem.resultSet.getIndexOfItem(workItem);
				}
			}
			this.logExit(methodName);
		},

		/**
		 * Returns the previous item in the result set by calling the callback. Consecutive calls will keep fetching the
		 * next previous work item until it reaches the first item in the result set. For P8, items that are locked by a
		 * different users will be skipped.
		 * 
		 * @param callback
		 *            A callback function called with the previous work item. It passes back the
		 *            {@link ecm.model.WorkItem} object or null as a parameter.
		 */
		getPreviousItem: function(callback) {
			this.logEntry("getPreviousItem");
			if (this._index) {
				var resultSet = this.workItem.resultSet;
				var index = this._index - 1;
				if (index > -1) {
					this._index = index;
					var workItem = resultSet.getItem(index);
					if (workItem.repository.type == "cm") {
						this.getCMWorkItem(workItem, lang.hitch(this, function(item) {
							this.logDebug("getPreviousItem", "Return CM work item.");
							callback(item);
						}));
					} else if (workItem.repository.type == "p8") {
						// Gets the processor info the of the next work item
						this.getP8WorkItem(workItem, lang.hitch(this, function(item) {
							if (item) {
								this.logDebug("getPreviousItem", "Return P8 work item.");
								callback(item);
							} else { // WorkItem is locked by another user so get the next one
								this.getPreviousItem(callback);
							}
						}));
					} else {
						this.logDebug("getPreviousItem", "Return non P8 or CM work item.");
						callback(workItem);
					}
				} else {
					callback(null);
				}
			} else {
				callback(null);
			}
			this.logExit("getPreviousItem");
		},

		/**
		 * Returns the next item in the result set by calling the callback. Consecutive calls will keep fetching the
		 * next work item until there isn't any item found. Items that are locked by a different users will be skipped.
		 * 
		 * @param callback
		 *            A callback function called with the next work item. It passes back the {@link ecm.model.WorkItem}
		 *            object or null as a parameter.
		 */
		getNextItem: function(callback) {
			this.logEntry("getNextItem");
			if (!this._isServerGetNextSet() && this._index != undefined) {
				this._getNextWorkItem(function(item) {
					callback(item);
				});
			} else if (this.workItem.continuationData) {
				// Locks the next unlocked work item from the server and return the item back in the callback. Items that are already locked will be skipped.
				this._retrieveNextWorkItem(callback);
			} else {
				callback(null);
			}
			this.logExit("getNextItem");
		},

		_isServerGetNextSet: function() {
			var inBasket = this.workItem.parent;
			if (inBasket.attributes && inBasket.attributes.ICNGetNext)
				return inBasket.attributes.ICNGetNext = "true";
			else
				return false;
		},

		_getNextWorkItem: function(callback) {
			this.logEntry("_getNextWorkItem");
			this._lookupNextWorkItem(lang.hitch(this, function(workItem) {
				if (workItem) {
					if (workItem.repository.type == "cm") {
						this.getCMWorkItem(workItem, lang.hitch(this, function(item) {
							this.logDebug("_getNextWorkItem", "Return CM work item.");
							if (item) {
								this.logDebug("_getNextWorkItem", "Return CM work item.");
								callback(item);
							} else { // WorkItem is locked by another user so get the next one
								this._getNextWorkItem(callback);
							}
						}));
					} else if (workItem.repository.type == "p8") {
						// Gets the processor info the of the next work item
						this.getP8WorkItem(workItem, lang.hitch(this, function(item) {
							if (item) {
								this.logDebug("_getNextWorkItem", "Return P8 work item.");
								callback(item);
							} else { // WorkItem is locked by another user so get the next one																
								this._getNextWorkItem(callback);
							}
						}));
					} else {
						this.logDebug("_getNextWorkItem", "Return non P8 or CM work item.");
						callback(workItem);
					}
				} else {
					callback(null);
				}
			}));
			this.logExit("_getNextWorkItem");
		},

		_lookupNextWorkItem: function(callback) {
			this.logEntry("_lookupNextWorkItem");
			var resultSet = this.workItem.resultSet;
			var index = this._index + 1;
			// Find the next work item in the result set.
			if (index >= resultSet.items.length) {
				if (resultSet.hasContinuation()) {
					this.logDebug("_lookupNextWorkItem", "Fetch more item from the server.");
					var itemsNeeded = resultSet.items.length + resultSet.pageSize;
					resultSet.getItems(lang.hitch(this, function(items) {
						if (items && items.length > index) {
							if (items[this._index].id == items[index].id) {
								// Last workitem was saved and ended up in the list again as the next item so set the current index to skip the same one
								this._index = index;	
							}
						}						
						this._lookupNextWorkItem(callback);
					}), itemsNeeded);
				} else {
					if (resultSet.repository.type == "cm" && resultSet.items.length == 1) {
						this.logDebug("_lookupNextWorkItem", "CM Worklist with only one item, trying refresh.");
						var workList = resultSet.parentFolder;
						workList.retrieveWorkItems(lang.hitch(this, function(resultSet) {
							workList.resultSet = resultSet;
							this._index = 0;
							callback(resultSet.getItem(this._index));
						}));
					} else {
						this.logDebug("_lookupNextWorkItem", "No more items.");
						callback(null);
					}
				}
			} else {
				this.logDebug("_lookupWorkItem", "Item is in the current resultset.");
				this._index = index;
				callback(resultSet.getItem(index));
			}
			this.logExit("_lookupNextWorkItem");
		},

		_retrieveNextWorkItem: function(callback) {
			this.logEntry("_retrieveNextWorkItem");
			var inbasket = this.workItem.parent;
			if (inbasket != null) {
				if (this.workItem.continuationData) {
					// Have already retrieved the first item from get next, now start "paging" one item at a time
					var params = {
						repositoryId: inbasket.repository.id,
						continuationData: this.workItem.continuationData, // continuation data for getting one item at a time						
						order_by: inbasket._orderBy,
						order_descending: inbasket._descending,
						step_lock_item: "true",
						wob_num: this.workItem.wobNum
					};

					// Configures extra parameters as needed.
					if (inbasket.addStepFilterInformation) {
						params.add_step_filter_information = "true";
					}
					if (this.workItem.useApplicationBaseUrl) {
						params.useApplicationBaseUrl = "true";
					}
					var request = Request.invokeService("getNextWorkItem", inbasket.repository.type, params, lang.hitch(this, function(response) {
						if (response.attributes) {
							var nextWorkItem = WorkItem.createFromJSON(response, inbasket.repository);
							nextWorkItem.parent = inbasket;
							callback(nextWorkItem);
						} else {
							callback(null);
						}
					}));
				} else {
					callback(null);
				}
			}
			this.logExit("_retrieveNextWorkItem");
		},

		/**
		 * Retrieves additional processor information for the work item. If the work item is currently locked by a
		 * different user then it will return a null work item back in the callback. Otherwise, the returned work item
		 * will be populated with the additional processor information.
		 * 
		 * @param workItem
		 *            A {@link ecm.model.WorkItem} object.
		 * @param callback
		 *            A callback function called after the work item have been populated with the additional processor
		 *            information. It passes back the {@link ecm.model.WorkItem} object or null as a parameter.
		 */
		getP8WorkItem: function(workItem, callback) {
			this.logEntry("getP8WorkItem");

			this._originalMessageAddedHandler = ecm.model.desktop.onMessageAdded;
			ecm.model.desktop.onMessageAdded = lang.hitch(this, function(message) {
				ecm.model.desktop.onMessageAdded = this._originalMessageAddedHandler;
				if (message.number == 1102 || message.number == 1100) {
					this.logDebug("getP8WorkItem", "Item is locked by another user.");
					ecm.model.desktop.messages.pop(); // Removes the error message from queue.  Item will be skipped.
					callback(null);
				} else {
					ecm.model.desktop.onMessageAdded(message); // push all other messages to the desktop message handler
				}
			});
			// Bake up a new work item object to retrieve the processor info so that the status dialog shows up in the processor window
			// and not in the opener window.
			var repository = ecm.model.desktop.getRepository(workItem.repository.id); // Using repository from the step processor desktop
			var tempWorkItem = new WorkItem({
				id: workItem.wobNum,
				name: workItem.queueName,
				repository: repository,
				queueName: workItem.queueName,
				F_StepProcId: workItem.F_StepProcId
			});
			tempWorkItem.attributes.F_StepName = workItem.attributes.F_StepName;

			if (workItem.F_InstrSheetId && workItem.F_WorkOrderId) {
				tempWorkItem.F_InstrSheetId = workItem.F_InstrSheetId;
				tempWorkItem.F_WorkOrderId = workItem.F_WorkOrderId;
			}

			// Always make this call to check if the item is locked by someone else.
			tempWorkItem.retrieveProcessorInformation("step", lang.hitch(this, function(item) {
				ecm.model.desktop.onMessageAdded = this._originalMessageAddedHandler;
				// Update the item from the main window with the processor info.
				workItem.F_StepBaseurl = item.F_StepBaseurl;
				workItem.F_StepLocation = item.F_StepLocation;
				workItem.F_StepTemplate = item.F_StepTemplate;
				workItem.F_StepHeight = item.F_StepHeight;
				workItem.F_StepWidth = item.F_StepWidth;
				workItem.F_VWVersion = item.vwversion;
				this.logDebug("getP8WorkItem", "F_StepBaseurl: " + workItem.F_StepBaseurl);
				this.logDebug("getP8WorkItem", "F_StepLocation: " + workItem.F_StepLocation);
				this.logDebug("getP8WorkItem", "F_StepTemplate: " + workItem.F_StepTemplate);
				this.logDebug("getP8WorkItem", "F_StepHeight: " + workItem.F_StepHeight);
				this.logDebug("getP8WorkItem", "F_VWVersion: " + workItem.F_VWVersion);
				callback(workItem);
			}));

			this.logExit("getP8WorkItem");
		},

		getCMWorkItem: function(workItem, callback) {
			this.logEntry("getCMWorkItem");
			this._originalMessageAddedHandler = ecm.model.desktop.onMessageAdded;
			ecm.model.desktop.onMessageAdded = lang.hitch(this, function(message) {
				ecm.model.desktop.onMessageAdded = this._originalMessageAddedHandler;
				if (message.number == 1102 || message.number == 1100) {
					this.logDebug("getCMWorkItem", "Item is locked by another user.");
					ecm.model.desktop.messages.pop(); // Removes the error message from queue.  Item will be skipped.
					callback(null);
				} else {
					ecm.model.desktop.onMessageAdded(message); // push all other messages to the desktop message handler
				}
			});
			// Bake up a new work item object to retrieve the processor info so that the status dialog shows up in the processor window
			// and not in the opener window.
			var tempWorkItem = new WorkItem({
				id: workItem.id,
				name: workItem.name,
				repository: workItem.repository,
				contentItem: workItem.contentItem
			});
			// Always make this call to check if the item is locked by someone else.
			tempWorkItem.retrieveProcessorInformation("step", lang.hitch(this, function(item) {
				ecm.model.desktop.onMessageAdded = this._originalMessageAddedHandler;
				// Update the item from the main window with the processor info.
				workItem.locked = item.locked;
				workItem.lockedUser = item.lockedUser;
				callback(workItem);
			}));
			this.logExit("getCMWorkItem");
		}
	});
});
