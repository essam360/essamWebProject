/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/kernel",
	"dojo/_base/lang",
	"dojo/_base/array",
	"dojo/data/util/sorter",
	"dojo/data/util/filter",
	"dojo/date/stamp",
	"../LoggerMixin"
], function(declare, kernel, lang, array, sorter, filter, dateStamp, LoggerMixin) {

	/**
	 * @name ecm.model._ModelStore
	 * @class Represents a data store that is used for lists within the <code>ecm.model</code> package. This class
	 *        provides a read-only implementation of the Dojo data store. Dojo data stores are useful for providing data
	 *        to Dojo dijit widgets.
	 *        <p>
	 *        The <code>_ModelStore</code> class makes assumptions about methods on the objects for which the data
	 *        store is provided. In particular, if the following methods are not defined on the object, the data store
	 *        returns null for the corresponding function:
	 *        <ul>
	 *        <li><code>getId</code></li>
	 *        <li><code>getName</code></li>
	 *        <li><code>getAttributes</code></li>
	 *        <li><code>hasAttribute</code></li>
	 *        <li><code>getValue</code></li>
	 *        <li><code>getValues</code></li>
	 *        </ul>
	 *        </p>
	 * @public
	 */
	var _ModelStore = declare("ecm.model._ModelStore", [
		LoggerMixin
	], {
		/** @lends ecm.model._ModelStore.prototype */

		/**
		 * Constructs the store.
		 * 
		 * @param parentModelObject
		 *            The object that contains the collection of model objects to which this store is to access.
		 * @param getListFunction
		 *            The function on the parentModelObject that will obtain the list of model objects. This function is
		 *            itself passed a function as a parameter which is called when the list is obtained, being passed
		 *            the list of objects. (This is the typical pattern for most of the retrieve methods in the model.)
		 * @param newItemFunction
		 *            The function on the parentModelObject that can be called to add a new item.
		 * @param deleteItemFunction
		 *            The function on the parentModelObject that can be invoked to delete an item.
		 * @param getMappedAttributeNameFunction
		 *            The function on the parentModelObject that can be invoked to get a mapped attribute.
		 */
		constructor: function(parentModelObject, getListFunction, newItemFunction, deleteItemFunction, getMappedAttributeNameFunction) {
			this.parentModelObject = parentModelObject;
			this._getListFunction = getListFunction;
			this._newItemFunction = newItemFunction;
			this._deleteItemFunction = deleteItemFunction;
			this._getMappedAttributeNameFunction = getMappedAttributeNameFunction;
			this.comparatorMap = {};
		},

		/**
		 * Returns the features supported by this store. The particular interfaces supported are
		 * dojo.data.api.Notification, dojo.data.api.Read, and dojo.data.api.Identity. See Dojo documentation
		 * dojo.data.api.Read.getFeatures() for more information.
		 */
		getFeatures: function() {
			return {
				'dojo.data.api.Notification': true,
				'dojo.data.api.Read': true,
				'dojo.data.api.Identity': true
			};
		},

		/**
		 * Returns a unique identifier for an item. For ecm.model objects, this is the identifier returned using
		 * item.id.
		 * 
		 * @param item
		 *            An ecm.model object.
		 */
		getIdentity: function(/* item */item) {
			var id = item.id;
			if (item && item.isInstanceOf(ecm.model.Favorite))
				id = item.objectId;
			return this.getIdentityId(id);
		},

		/**
		 * @private Used by getIdentity.
		 */
		getIdentityId: function(id) {
			// The idx gridx cannot handle some special chars in the identifier
//			var newId = id.replace(/\"/g, "").replace(/\+/g, "").replace(/=/g, "").replace(/~/g, "").replace(/>/g, "").replace(/]/g, "").replace(/'/g, "");

			// Replace with encoded values rather than remove unwanted characters to eliminate the (unlikely) possibility this could cause duplicates.
			var newId = id.replace(/\"/g, "%22").replace(/\+/g, "%2B").replace(/=/g, "%3D").replace(/~/g, "%7E").replace(/>/g, "%98").replace(/]/g, "%5D").replace(/'/g, "%27").replace(/</g, "%3C").replace(/\\/, "%5C");
			//if (newId != id) {
			//newId += new Date().getTime();
			//}
			return newId;
		},

		/**
		 * Returns an array of attributes that are used to generate the identity. For ecm.model objects, this returns an
		 * empty array.
		 * 
		 * @param item
		 *            An ecm.model object.
		 */
		getIdentityAttributes: function(/* item */item) {
			return [];
		},

		/**
		 * This method is not implemented and will throw an error if used.
		 */
		fetchItemByIdentity: function(/* object */keywordArgs) {
			// summary:
			// Given the identity of an item, this method returns the item that has
			// that identity through the onItem callback. Conforming implementations
			// should return null if there is no item with the given identity.
			// Implementations of fetchItemByIdentity() may sometimes return an item
			// from a local cache and may sometimes fetch an item from a remote server,
			//
			// keywordArgs:
			// An anonymous object that defines the item to locate and callbacks to invoke when the
			// item has been located and load has completed. The format of the object is as follows:
			// {
			// identity: string|object,
			// onItem: Function,
			// onError: Function,
			// scope: object
			// }
			// The *identity* parameter.
			// The identity parameter is the identity of the item you wish to locate and load
			// This attribute is required. It should be a string or an object that toString()
			// can be called on.
			//
			// The *onItem* parameter.
			// Function(item)
			// The onItem parameter is the callback to invoke when the item has been loaded. It takes only one
			// parameter, the item located, or null if none found.
			//
			// The *onError* parameter.
			// Function(error)
			// The onError parameter is the callback to invoke when the item load encountered an error. It takes only one
			// parameter, the error object
			//
			// The *scope* parameter.
			// If a scope object is provided, all of the callback functions (onItem,
			// onError, etc) will be invoked in the context of the scope object.
			// In the body of the callback function, the value of the "this"
			// keyword will be the scope object. If no scope object is provided,
			// the callback functions will be called in the context of dojo.global.
			// For example, onItem.call(scope, item, request) vs.
			// onItem.call(dojo.global, item, request)
			if (!this.isItemLoaded(keywordArgs.item)) {
				throw new Error('Unimplemented API: dojo.data.api.Identity.fetchItemByIdentity');
			}
		},

		/**
		 * Calls obj.onComplete.
		 */
		save: function(obj) {
			if (obj && obj.onComplete) {
				var scope = obj.scope || kernel.global;
				obj.onComplete.call(scope);
			}
		},

		/**
		 * Set the attribute value in the item.
		 * 
		 * @param item
		 *            The item.
		 * @param attribute
		 *            The attribute name.
		 * @param value
		 *            The value to set.
		 */
		setValue: function(item, attribute, value) {
			if (item && item[attribute] != undefined) {
				item[attribute] = value;
			}
		},

		/**
		 * Returns a single attribute value for an item.
		 * 
		 * @param item
		 *            An ecm.model object.
		 * @param attribute
		 *            The identifier of the attribute.
		 * @param defaultValue
		 *            The value to return if the item does not contain this attribute.
		 */
		getValue: function( /* item */item, /* attribute-name-string */attribute, /* value? */defaultValue) {
			if (attribute == "teamspaceIcon" || attribute == "icon" || attribute == "mimeTypeIcon" || attribute == "stateIcon" || attribute == "multiStateIcon" || (attribute.indexOf && attribute.indexOf("InternalIconColumn") != -1)) { // these are special columns, formatters are in ecm.model.ResultSet
				return item;
			}

			var compMapKey = attribute;
			if (lang.isFunction(this._getMappedAttributeNameFunction))
				attribute = this._getMappedAttributeNameFunction(item, attribute);

			if (attribute == "isFolder") { // used for sorting - will sort by folder 1st then by the selected
				// column's value
				return item.isFolder() ? "1" : "2"; // Folders come before non-folders

			} else if (item.getDisplayValue) {
				var type = (item.getAttributeType && item.getAttributeType(attribute));
				if (type == "xs:integer" || type == "xs:decimal" || type == "xs:short" || type == "xs:double" || type == "xs:score") {
					this.comparatorMap[compMapKey] = _ModelStore.numericComparator;
				} else if (type == "xs:long") {
					this.comparatorMap[compMapKey] = _ModelStore.longComparator;
				} else if (type == "xs:date" || type == "xs:time" || type == "xs:timestamp") {
					this.comparatorMap[compMapKey] = _ModelStore.dateComparator;
				} else if (type == "xs:boolean") {
					this.comparatorMap[compMapKey] = _ModelStore.booleanComparator;
				} else if (!this.comparatorMap[compMapKey]) {
					// CM repository returns search results sorted in a case sensitive order.
					// The reason for the following change is to ensure a consistent behavior
					// between server-side sorting and client-side sorting for CM.
					if (this.parentModelObject && (item.repository ? item.repository._isCM() : this.parentModelObject.repository ? this.parentModelObject.repository._isCM() : false)) {
						this.comparatorMap[compMapKey] = _ModelStore.cmBasicComparator; // use basic comparator
					} else {
						this.comparatorMap[compMapKey] = _ModelStore.caseInsensitiveComparator; // comparator to use when sort on this attribute
					}
				}
				var value;
				try {
					value = item.getDisplayValue(attribute) || "";
					if (!value) {
						if (attribute == "repositoryName" && item.repository) {
							value = item.repository.name;
						} else if (attribute == "name") {
							value = item.name;
						} else if (attribute == "{CLASS}" && item.getContentClass && (!item.repository || (!item.repository._isOnDemand() && !item.repository._isBox()))) {
							if (item.getContentItem) {
								var contentClass = item.getContentItem().getContentClass();
								if (contentClass != null)
									value = contentClass.name;
							} else {
								var contentClass = item.getContentClass();
								if (contentClass != null)
									value = contentClass.name;
							}
						}
					} else if (lang.isArray(value)) {
						if (!this._separator) {
							this._separator = ecm.model.desktop.valueFormatter.getSeparator();
						}
						value = value.join(this._separator + " ");
					}
				} catch (e) {
					this.logError("getValue", e.message);
					throw e;
				}
				return value;

			} else if (item.getValue) {
				return item.getValue(attribute) || "";

			} else {
				return null;
			}
		},

		/**
		 * Returns the array of values for an attribute. If the attribute does not exist, an empty array is returned.
		 * 
		 * @param item
		 *            An ecm.model object.
		 * @param attribute
		 *            The identifier of the attribute.
		 */
		getValues: function(/* item */item, /* attribute-name-string */attribute) {
			if (!item.getValues)
				return [];

			if (lang.isFunction(this._getMappedAttributeNameFunction))
				attribute = this._getMappedAttributeNameFunction(item, attribute);

			return item.getValues(attribute);
		},

		/**
		 * Returns an array of all of the attributes of this item.
		 * 
		 * @param item
		 *            An ecm.model object.
		 */
		getAttributes: function(/* item */item) {
			// Get the columns from the resultSet so that we also have any icon fields as attributes
			var cols = this.parentModelObject && this.parentModelObject.getColumns ? this.parentModelObject.getColumns() : null;
			if (cols) {
				return cols;
			} else if (item.attributes) {
				var att = item.attributes;
				if (att instanceof Array) {
					var attArray = [];
					for ( var i in att) {
						attArray.push(i);
					}
					return attArray;
				} else {
					return att;
				}
			}
			return [];
		},

		/**
		 * Returns true if the item has the specified attribute.
		 * 
		 * @param item
		 *            An ecm.model object.
		 * @param attribute
		 *            The identifier of the attribute.
		 */
		hasAttribute: function(item, attribute) {
			if (!item.hasAttribute)
				return false;

			if (lang.isFunction(this._getMappedAttributeNameFunction))
				attribute = this._getMappedAttributeNameFunction(item, attribute);

			return item.hasAttribute(attribute);
		},

		/**
		 * Returns true if the item contains the given value for the specified attribute.
		 * 
		 * @param item
		 *            An ecm.model object.
		 * @param attribute
		 *            The identifier of the attribute.
		 * @param value
		 *            The value to test.
		 */
		containsValue: function(item, attribute, value) {
			var regexp = undefined;
			if (typeof value === "string") {
				regexp = filter.patternToRegExp(value, false);
			}
			return this._containsValue(item, attribute, value, regexp); // boolean.
		},

		/**
		 * Internal function for looking at the values contained by the item. This function allows for denoting if the
		 * comparison should be case sensitive for strings or not (for handling filtering cases where string case should
		 * not matter).
		 * 
		 * @param item
		 *            The data item to examine for attribute values.
		 * @param attribute
		 *            The attribute to inspect.
		 * @param value
		 *            The value to match.
		 * @param regexp
		 *            Optional regular expression generated off value, if value was of string type, to handle wildcards.
		 *            If present and attribute values are string, then it can be used for comparison instead of 'value'
		 */
		_containsValue: function(item, attribute, value, regexp) {
			return array.some(this.getValues(item, attribute), function(possibleValue) {
				if (possibleValue && !lang.isObject(possibleValue) && regexp) {
					if (possibleValue.toString().match(regexp)) {
						return true; // Boolean
					}
				} else if (value === possibleValue) {
					return true; // Boolean
				}
			});
		},

		/**
		 * Always returns true, although for a perfect implementation of a dojo.data store this should return true if
		 * the provided object is an item from this store instance.
		 * 
		 * @param something
		 *            Any object or value.
		 */
		isItem: function(something) {
			return true;
		},

		/**
		 * Always returns true. For some implementations of dojo.data store this would return true if the provided
		 * object has not yet been loaded into local memory. However, for ecm.model objects, they are assumed to be
		 * loaded into memory after being fetched.
		 * 
		 * @param something
		 *            Any object or value.
		 */
		isItemLoaded: function(something) {
			return true;
		},

		/**
		 * Performs nothing. For some implementations of dojo.data store, this would load an item that was not yet
		 * loaded into local memory so that a subsequent call to store.isItemLoaded(item) will return true. Since
		 * isItemLoaded always returns true for this implementation, no logic is needed here.
		 */
		loadItem: function(keywordArgs) {
		},

		/**
		 * See dojo.data.util.simpleFetch.fetch() for a description of this method.
		 */
		fetch: function(request) {
			// Note: This implementation is derived from dojo.data.util.simpleFetch. Below is the documentation
			// from that mixin.
			// summary:
			// The simpleFetch mixin is designed to serve as a set of function(s) that can
			// be mixed into other datastore implementations to accelerate their development.
			// The simpleFetch mixin should work well for any datastore that can respond to a _fetchItems()
			// call by returning an array of all the found items that matched the query. The simpleFetch mixin
			// is not designed to work for datastores that respond to a fetch() call by incrementally
			// loading items, or sequentially loading partial batches of the result
			// set. For datastores that mixin simpleFetch, simpleFetch
			// implements a fetch method that automatically handles eight of the fetch()
			// arguments -- onBegin, onItem, onComplete, onError, start, count, sort and scope
			// The class mixing in simpleFetch should not implement fetch(),
			// but should instead implement a _fetchItems() method. The _fetchItems()
			// method takes three arguments, the keywordArgs object that was passed
			// to fetch(), a callback function to be called when the result array is
			// available, and an error callback to be called if something goes wrong.
			// The _fetchItems() method should ignore any keywordArgs parameters for
			// start, count, onBegin, onItem, onComplete, onError, sort, and scope.
			// The _fetchItems() method needs to correctly handle any other keywordArgs
			// parameters, including the query parameter and any optional parameters
			// (such as includeChildren). The _fetchItems() method should create an array of
			// result items and pass it to the fetchHandler along with the original request object
			// -- or, the _fetchItems() method may, if it wants to, create an new request object
			// with other specifics about the request that are specific to the datastore and pass
			// that as the request object to the handler.
			request = request || {};
			if (!request.store) {
				request.store = this;
			}
			this._fetchItems(request, lang.hitch(this, this._fetchHandler), lang.hitch(this, this._errorHandler));
			return request; // Object
		},

		/**
		 * Function to handle errors thrown during the fetch operation
		 * 
		 * @param errorData
		 *            Information about the error that was thrown.
		 * @param requestObject
		 *            Object that was (or will be) used for the fetch operation.
		 */
		_errorHandler: function(errorData, requestObject) {
			if (requestObject.onError) {
				var scope = requestObject.scope || kernel.global;
				requestObject.onError.call(scope, errorData, requestObject);
			}
		},

		/**
		 * Function to handle the fetch operation.
		 * 
		 * @param items
		 *            An array of items to fetch.
		 * @param requestObject
		 *            The object used to generate the fetch operation.
		 */
		_fetchHandler: function(items, requestObject) {
			if (!items) {
				if (requestObject.onBegin) {
					requestObject.onBegin.call(scope, 0, requestObject);
				}
				if (requestObject.onComplete) {
					requestObject.onComplete.call(scope, [], requestObject);
				}
				return;
			}

			var oldAbortFunction = requestObject.abort || null;
			var aborted = false;

			var startIndex = requestObject.start ? requestObject.start : 0;
			var endIndex = items.length;

			requestObject.abort = function() {
				aborted = true;
				if (oldAbortFunction) {
					oldAbortFunction.call(requestObject);
				}
			};

			var scope = requestObject.scope || kernel.global;

			if (!requestObject.store) {
				requestObject.store = this;
			}

			if (requestObject.onBegin) {
				var endIndexForGrid = endIndex;
				if (this.parentModelObject.isInstanceOf(ecm.model.ResultSet)) {
					var hasContinuation = this.parentModelObject.hasContinuation();
					if (hasContinuation && !this.parentModelObject._preventPaging) {
						endIndexForGrid += 20; // fake more items
					}
					requestObject._maxResultsReached = this.parentModelObject.maxResultsReached;
				}
				requestObject.onBegin.call(scope, endIndexForGrid, requestObject);
			}

			// if (requestObject.sort){
			// items.sort(sorter.createSortFunction(requestObject.sort, thisModelStore));
			// }

			if (requestObject.onItem) {
				for ( var i = startIndex; (i < items.length) && (i < endIndex); ++i) {
					var item = items[i];
					if (!aborted) {
						requestObject.onItem.call(scope, item, requestObject);
					}
				}
			}

			if (requestObject.onComplete && !aborted) {
				var subset = null;
				if (!requestObject.onItem) {
					subset = items.slice(startIndex, endIndex);
				}
				try {
					requestObject.onComplete.call(scope, subset, requestObject);
				} catch (e) {
				}
			}
		},

		/**
		 * Adds a new item to the store.
		 * 
		 * @param item
		 *            The item to add.
		 */
		newItem: function(item) {
			var added = false;
			if (this._newItemFunction) {
				added = this._newItemFunction.call(this.parentModelObject, item);
			}
			if (added) {
				this.onNew(item);
			}

			return added;
		},

		/**
		 * Deletes an item from the store.
		 * 
		 * @param item
		 *            The item to delete.
		 */
		deleteItem: function(item) {
			var deleted = false;
			if (this._deleteItemFunction) {
				deleted = this._deleteItemFunction.call(this.parentModelObject, item);
			}

			if (deleted) {
				this.onDelete(item);
			}

			return deleted;
		},

		/**
		 * Fetch items from the store.
		 * 
		 * @param requestArgs
		 *            An object containing arguments for the request.
		 * @param fetchHandler
		 *            A function invoked after fetch completes.
		 * @param errorCallback
		 *            A function invoked for any error during the fetch.
		 */
		_fetchItems: function(requestArgs, fetchHandler, errorCallback) {
			var itemsNeeded = requestArgs.start + requestArgs.count;
			var afterItemsRetrievedFunction = lang.hitch(this, this._afterItemsRetrieved, requestArgs, fetchHandler);

			if (this._firstTime == undefined || this._firstTime == true) {
				// 1st time, ignore the sorting data in the requestArgs as the server should have sorted it for us
				this._getListFunction.call(this.parentModelObject, afterItemsRetrievedFunction, itemsNeeded); // calls resultSet.getItems()
				this._firstTime = false;
				return;
			}

			// Sort by mime type (search only for CM)
			if (requestArgs.sort && requestArgs.sort[0].attribute == "mimeTypeIcon" && (requestArgs.store.parentModelObject.repository && requestArgs.store.parentModelObject.repository._isCM())) {
				var sortDescending = false;
				if (requestArgs.sort[0].descending == false) {
					sortDescending = false;
				} else {
					sortDescending = true;
				}

				this._getListFunction.call(this.parentModelObject, lang.hitch(this, function(items) {
					var sortArrayAscending = function(a, b) {
						if (a.mimetype > b.mimetype) {
							return 1;
						}
						if (a.mimetype < b.mimetype) {
							return -1;
						}
						return 0;
					};

					var sortArrayDescending = function(a, b) {
						if (a.mimetype > b.mimetype) {
							return -1;
						}
						if (a.mimetype < b.mimetype) {
							return 1;
						}
						return 0;
					};

					if (items) {
						var sortItems = items;
						if (sortDescending)
							sortItems.sort(sortArrayDescending);
						else
							sortItems.sort(sortArrayAscending);
						items = sortItems;

						//for ( var i in items) {
						//	this.logDebug("_fetchItems", "######################## mimetype=" + items[i].mimetype + " -- " + items[i].attributes.mimeTypeIcon);
						//}
					}
					afterItemsRetrievedFunction(items);
				}), itemsNeeded);
				return;
			}

			// sorting
			if (requestArgs.sort && requestArgs.start == 0) {
				var sortableColumn = true;
				var structure = this.parentModelObject.structure;
				var sortColumnNdx = -1;
				if (structure) {
					var columns = structure.cells[0];
					var sortProp = requestArgs.sort[0].attribute;

					// Check to see if column is sortable (not all columns for work items are sortable)
					for ( var i in columns) {
						var col = columns[i];
						if (col.field == sortProp) {
							sortColumnNdx = parseInt(i) + 1; // sortIndex is one based from grid
							sortableColumn = col.sortable == undefined || col.sortable == true ? true : false;
							break;
						}
					}
				}

				if (sortableColumn) {
					this.logDebug("_fetchItems", "sorting by " + requestArgs.sort);

					if (this.parentModelObject.doSort) {
						this.parentModelObject.doSort(requestArgs.sort, lang.hitch(this, function(newResultSet) {
							if (typeof newResultSet.sortIndex !== "undefined") {
								newResultSet.sortIndex = sortColumnNdx;
							}
							if (typeof newResultSet.sortDirection !== "undefined") {
								newResultSet.sortDirection = requestArgs.sort[0].descending ? -1 : 1;
							}
							this.parentModelObject = newResultSet; // replace the resultSet (_parentModelObject)
							this._getListFunction.call(this.parentModelObject, afterItemsRetrievedFunction, itemsNeeded);
						}), this);
					} else { // default client-side sorting
						// Update the result set's sort index and sort direction.
						if (typeof this.parentModelObject.sortIndex !== "undefined") {
							this.parentModelObject.sortIndex = sortColumnNdx;
						}
						if (typeof this.parentModelObject.sortDirection !== "undefined") {
							this.parentModelObject.sortDirection = requestArgs.sort[0].descending ? -1 : 1;
						}
						this._getListFunction.call(this.parentModelObject, lang.hitch(this, function(items) {
							if (items) {
								items.sort(sorter.createSortFunction(requestArgs.sort, this));
							}
							afterItemsRetrievedFunction(items);
						}), itemsNeeded);
					}
					return;
				}
			}

			// not sorting
			this._getListFunction.call(this.parentModelObject, afterItemsRetrievedFunction, itemsNeeded); // calls resultSet.getItems()
		},

		/**
		 * Process items after retrieval.
		 * 
		 * @param requestArgs
		 *            The object containing arguments for the request (as passed to the _fetchItems function).
		 * @param fetchHandler
		 *            The function invoked after the fetch completes (as passed to the _fetchItems function).
		 * @param arrayOfItems
		 *            The resultant array of items returned by the fetch operation.
		 */
		_afterItemsRetrieved: function(requestArgs, fetchHandler, /* array */arrayOfItems) {
			if (requestArgs.query) {
				var items = [];
				var i, key, value = null;
				var ignoreCase = requestArgs.queryOptions ? requestArgs.queryOptions.ignoreCase : false;

				// See if there are any string values that can be regexp parsed first to avoid multiple regexp gens
				// on the
				// same value for each item examined. Much more efficient.
				var regexpList = {};
				for (key in requestArgs.query) {
					value = requestArgs.query[key];
					if (typeof value === "string") {
						regexpList[key] = filter.patternToRegExp(value, ignoreCase);
					} else if (value instanceof RegExp) {
						regexpList[key] = value;
					}
				}
				for (i = 0; i < arrayOfItems.length; ++i) {
					var match = true;
					var candidateItem = arrayOfItems[i];
					if (candidateItem === null) {
						match = false;
					} else {
						for (key in requestArgs.query) {
							value = requestArgs.query[key];
							if (!this._containsValue(candidateItem, key, value, regexpList[key])) {
								match = false;
							}
						}
					}
					if (match) {
						items.push(candidateItem);
					}
				}

				arrayOfItems = items;
			}

			fetchHandler(arrayOfItems, requestArgs);
		},

		/**
		 * Internal function to determine which list of items to search over.
		 * 
		 * @param keywordArgs
		 *            An object containing the following possible fields:
		 *            <ul>
		 *            <li>queryOptions: The query options parameter, if any.
		 *            </ul>
		 */
		_getItemsArray: function(keywordArgs) {
			if (keywordArgs.queryOptions && keywordArgs.queryOptions.deep) {
				this.logError("_getItemArray", "queryOptions.deep is not supported.");
				return null;
			}
			var itemsNeeded = keywordArgs.start + keywordArgs.count;
			var result = this._getListFunction.call(this.parentModelObject, itemsNeeded);
			return result;
		},

		/**
		 * The close() method is intended for instructing the store to 'close' out any information associated with a
		 * particular request. This method does nothing for this implementation.
		 */
		close: function(request) {
		},

		/**
		 * Invokes the model object's getName function to return a user-readable label for the item.
		 * 
		 * @param item
		 *            An ecm.model object.
		 */
		getLabel: function(item) {
			return item.name;
		},

		/**
		 * Method to inspect the item and return an array of what attributes of the item were used to generate its
		 * label, if any. Returns an empty array for this implementation.
		 * 
		 * @param item
		 *            An ecm.model object.
		 */
		getLabelAttributes: function(item) {
			return [];
		},

		/**
		 * This event function is called any time an item is modified via this store. Since this implementation doesn't
		 * support writing, the event is never called. However, since it is part of the dojo.data.Notification interface
		 * it is implemented. See dojo.data.api.Notification.onSet() documentation for more information.
		 */
		onSet: function(item, attribute, oldValue, newValue) {
		},

		/**
		 * This event function is called any time a new item is created in the store. Since this implementation doesn't
		 * support writing, the event is never called. However, since it is part of the dojo.data.Notification interface
		 * it is implemented. See dojo.data.api.Notification.onNew() documentation for more information.
		 */
		onNew: function(newItem, parentInfo) {
		},

		/**
		 * This event function is called any time an item is deleted from the store. Since this implementation doesn't
		 * support writing, the event is never called. However, since it is part of the dojo.data.Notification interface
		 * it is implemented. See dojo.data.api.Notification.onDelete() documentation for more information.
		 */
		onDelete: function(deletedItem) {
		}
	});

	/**
	 * @private
	 */
	_ModelStore.cmBasicComparator = function( /*anything*/a, /*anything*/b) {
		//	summary:
		//		Basic comparison function that compares if an item is greater or less than another item (cm only)
		//	description:
		//		returns 1 if a > b, -1 if a < b, 0 if equal.
		//		'null' values (null, undefined) and "" (empty) are treated as larger values so that they're pushed to the end of the list.
		//		And compared to each other, null is equivalent to undefined.
		//null is a problematic compare, so if null, we set to undefined.
		//Makes the check logic simple, compact, and consistent
		//And (null == undefined) === true, so the check later against null
		//works for undefined and is less bytes.
		var r = -1;
		if (a === null) {
			a = undefined;
		}
		if (b === null) {
			b = undefined;
		}
		if (a == b) {
			r = 0;
		} else if (a == null || a == "") {
			r = 1;
		} else if (b == null || b == "") {
			r = -1;
		} else if (a > b) {
			r = 1;
		} else if (b > a) {
			r = -1;
		}
		return r; //int {-1,0,1}
	};

	/**
	 * Compares two values in a case-insensitive way. Returns the following:
	 * <ul>
	 * <li>1 if a > b</li>
	 * <li>-1 if a < b</li>
	 * <li>0 if a and b are equal</li>
	 * </ul>
	 * 
	 * @param a
	 *            The first value to compare.
	 * @param b
	 *            The second value to compare.
	 * @memberOf ecm.model._ModelStore
	 */
	_ModelStore.caseInsensitiveComparator = function(a, b) {
		var r = -1;
		if (a === null) {
			a = undefined;
		}
		if (b === null) {
			b = undefined;
		}
		var au = a && a.toUpperCase ? a.toUpperCase() : a;
		var bu = b && b.toUpperCase ? b.toUpperCase() : b;
		if (au == bu) {
			if (a == b) {
				r = 0;
			} else if (a > b || a == null) {
				r = 1;
			}
		} else if (au > bu || au == null) {
			r = 1;
		}
		return r; // int {-1,0,1}
	};

	/**
	 * Compares numeric strings.
	 * 
	 * @param a
	 *            The first value to compare.
	 * @param b
	 *            The second value to compare.
	 * @returns {number} 0 if equal, 1 if a > b, -1 if a < b.
	 * @memberOf ecm.model._ModelStore
	 */
	_ModelStore.numericComparator = function(a, b) {
		function parseNumeric(n) {
			if (n === 0) {
				return 0;
			} else if (!n) {
				return undefined; // invalid numeric value
			} else if (typeof n == "string") {
				var b = 1;
				if (n.indexOf("K") > 0) {
					b = 1024;
				} else if (n.indexOf("M") > 0) {
					b = 1024 * 1024;
				} else if (n.indexOf("G") > 0) {
					b = 1024 * 1024 * 1024;
				}
				var f = parseFloat(n);
				if (isNaN(f)) {
					return undefined; // invalid numeric value
				}
				return f * b;
			} else {
				return n;
			}
		}
		var c = a;
		var d = b;
		a = parseNumeric(a);
		b = parseNumeric(b);
		if(a == undefined && b == undefined){
			return sorter.basicComparator(c,d);
		}
		if (a === b) {
			return 0;
		} else if (a == null) {
			return 1;
		} else if (b == null) {
			return -1;
		} else if (a == b) {
			return 0;
		} else if (a > b) {
			return 1;
		} else { // a < b
			return -1;
		}
	};

	/**
	 * Compares long (64bit) numeric strings.
	 * 
	 * @param a
	 *            The first value to compare.
	 * @param b
	 *            The second value to compare.
	 * @returns {number} 0 if equal, 1 if a > b, -1 if a < b.
	 * @memberOf ecm.model._ModelStore
	 */
	_ModelStore.longComparator = function(a, b) {
		// Use the numberic comparator if both values are not strings
		// Note: This safety net was added for ICN mobile which uses numbers to represent longs
		if (!lang.isString(a) && !lang.isString(b))
			return _ModelStore.numericComparator(a, b);

		// Put undefined/null/empty string values at the end.
		if (!a) {
			if (!b) {
				return 0;
			} else {
				return 1;
			}
		} else {
			if (!b) {
				return -1;
			}
		}
		// Pad with leading zeroes to the length of the longest string.
		var padding = (new Array(((a.length > b.length) ? a.length : b.length) + 1)).join("0");
		function padLong(longVal) {
			return (padding.slice(0, padding.length - longVal.length) + longVal);
		}
		var aIsNegative = (a.slice(0, 1) == "-");
		var bIsNegative = (b.slice(0, 1) == "-");
		var invert;
		if (aIsNegative) {
			if (bIsNegative) {
				a = padLong(a.slice(1));
				b = padLong(b.slice(1));
				invert = true;
			} else {
				return -1;
			}
		} else {
			if (bIsNegative) {
				return 1;
			} else {
				a = padLong(a);
				b = padLong(b);
			}
		}
		if (a == b) {
			return 0;
		} else if (a > b) {
			return (invert ? -1 : 1);
		} else { // a < b
			return (invert ? 1 : -1);
		}
	};

	/**
	 * Compares boolean values.
	 * 
	 * @param a
	 *            The first value to compare.
	 * @param b
	 *            The second value to compare.
	 * @returns {number} 0 if equal, 1 if a == null, -1 if b == null, 1 if a not null.
	 * @memberOf ecm.model._ModelStore
	 */
	_ModelStore.booleanComparator = function(a, b) {
		var r = -1;
		if (a === null) {
			a = undefined;
		}
		if (b === null) {
			b = undefined;
		}
		if (a === b) {
			r = 0;
		} else if (a == null) {
			r = 1;
		} else if (b == null) {
			r = -1;
		} else if (a) {
			r = 1;
		}
		return r; //int {-1,0,1}
	};

	/**
	 * Compares date strings.
	 * 
	 * @param a
	 *            The first value to compare.
	 * @param b
	 *            The second value to compare.
	 * @returns {number} 0 if equal, 1 if a > b, -1 if a < b.
	 * @memberOf ecm.model._ModelStore
	 */
	_ModelStore.dateComparator = function(a, b) {
		var r = -1;
		if (a === null) {
			a = undefined;
		}
		if (b === null) {
			b = undefined;
		}
		var d1 = a ? dateStamp.fromISOString(a) : a;
		var d2 = b ? dateStamp.fromISOString(b) : b;
		if (d1 === d2) {
			r = 0;
		} else if (d1 == null) {
			r = 1;
		} else if (d2 == null) {
			r = -1;
		} else if (!d1) {
			r = 1;
		} else if (!d2) {
			r = -1;
		} else if (d1.getTime() == d2.getTime()) {
			r = 0;
		} else if (d1 > d2) {
			r = 1;
		}
		return r; //int {-1,0,1}
	};

	return _ModelStore;
});
