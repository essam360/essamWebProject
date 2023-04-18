/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/json",
	"./Worklist",
	"./ContentClass",
	"./AttributeDefinition",
	"dojo/aspect"
], function(declare, lang, dojojson, Worklist, ContentClass, AttributeDefinition, aspect) {

	/**
	 * Constructor
	 * 
	 * @param properties
	 *            The properties for the model object. The properties can be any of the public fields as defined below
	 *            and on ecm.model.Worklist.
	 * @name ecm.model.ProcessInbasket
	 * @class Represents an in-basket that contains a list of work items for a specific user or role. This class is used
	 *        only for an IBM FileNet P8 repository.
	 * @augments ecm.model.Worklist
	 */
	var ProcessInbasket = declare("ecm.model.ProcessInbasket", [
		Worklist
	], {
		/** @lends ecm.model.ProcessInbasket.prototype */

		/**
		 * An instance of {@link ecm.model.ProcessRole} for the parent process role.
		 */
		parent: null,

		/**
		 * The user and system attributes (also known as properties) associated with this item. This is an object with
		 * field names being the symbolic names of the attributes and values being arrays containing:
		 * <ol>
		 * <li>value</li>
		 * <li>value type</li>
		 * <li>value format</li>
		 * </ol>
		 */
		attributes: null,

		/**
		 * The queue type for the queue associated with the in-basket.
		 */
		queueType: null,

		/**
		 * The queue name for the queue associated with the in-basket.
		 */
		queueName: null,

		/**
		 * The fetch count of the queue associated with the in-basket. Returns the total count of items from the work
		 * items query results. Not the total returned to the client, that number is controlled by paging block size.
		 * This is the overall total that the user would see if they paged through all items.
		 */
		fetchCount: 0,

		/**
		 * An instance of a {@link ecm.model.ContentClass} for the in-baskets filter criteria.
		 */
		filterClass: null,

		/**
		 * An array of current filter criteria values to be used for retrieving the work items list
		 */
		filterValues: null,

		/**
		 * A SQL WHERE clause used as a filter, and having place holder variables that are replaced by values in the
		 * substitutionVars parameter. Fields used in the query filter should be based on exposed fields of the queue
		 * associated with the in-basket. (since 2.0.2)
		 */
		queryFilter: null,

		/**
		 * An {Object} containing the values to substitute for the place holder variables specified in the SQL WHERE
		 * clause for the queryFilter parameter. (since 2.0.2)
		 */
		substitutionVars: null,

		/**
		 * An int value holding the paging size to be used, will override the default setting
		 */
		pageSize: null,

		/**
		 * A string value defining the Process Engine connection point to use for this repository. (Optional)
		 * <p>
		 * This connection point overrides the connection point that is configured on this repository in the IBM Content
		 * Navigator administration tool.
		 * </p>
		 */
		connectionPoint: null,

		/**
		 * A {Boolean} setting for specifying that the Process Engine system field F_BoundUser should be merged into a
		 * pseudo field called F_BoundUserName when displayed in in-basket column properties or in-basket filter
		 * controls.
		 */
		mergeBoundUser: false,

		/**
		 * A {Boolean} setting for specifying that the step element query filter information to be added to the work
		 * item json used for further resolution when opening step elements
		 * 
		 * @since 2.0.3.5
		 */
		addStepFilterInformation: false,

		/**
		 * @private
		 */
		constructor: function(params) {
			if (!this.attributes) {
				this.attributes = {};
			}

			this._attributeTypes = {};
			this._attributeFormats = {};

			if (params) {
				// At this point, this.attributes === params.attributes because params is already mixed in.
				// Build the attributes object then assign it to this.attributes.
				var attributes = {};
				for ( var i in params.attributes) {
					var jsonAttribute = params.attributes[i];
					attributes[i] = jsonAttribute[0];
					if (jsonAttribute.length > 1) {
						this._attributeTypes[i] = jsonAttribute[1];
					}
					if (jsonAttribute.length > 2) {
						this._attributeFormats[i] = jsonAttribute[2];
					}
				}
				this.attributes = attributes;
			}
		},

		/**
		 * Returns true if the item contains an attribute with the specified value. For multi-valued attributes, the
		 * specified value is compared with all values of the attribute and this function will return true if the value
		 * is equal to any value of the multi-valued attribute.
		 * 
		 * @param attribute
		 *            The attribute identifier.
		 * @param value
		 *            The value to test.
		 * @returns {Boolean} true if this item contains the specified attribute value, false otherwise.
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
		 * Returns the value for an attribute.
		 * 
		 * @param attribute
		 *            The identifier of the attribute.
		 * @returns {Object} holding value of the attribute
		 */
		getValue: function(attribute) {
			return this.attributes[attribute];
		},

		/**
		 * Returns an array containing all the values of an attribute.
		 * 
		 * @param attribute
		 *            The identifier of the attribute.
		 * @returns {Array} holding the attribute values
		 */
		getValues: function(attribute) {
			var v = this.attributes[attribute];
			if (lang.isArray(v)) {
				return v;
			} else {
				return [
					v
				];
			}
		},

		/**
		 * Returns true if the process role has the specified attribute.
		 * 
		 * @param attribute
		 *            The attribute identifier for the attribute to test.
		 * @returns {Boolean} true if the specified attribute exists, false otherwise.
		 */
		hasAttribute: function(attribute) {
			return (typeof this.attributes[attribute] != "undefined");
		},

		/**
		 * Returns the type of the attribute.
		 * 
		 * @param attribute
		 *            The attribute name
		 * @returns {String} The type of the attribute
		 */
		getAttributeType: function(attribute) {
			return this._attributeTypes[attribute];
		},

		/**
		 * Returns the format of the attribute.
		 * 
		 * @param attribute
		 *            The attribute name
		 * @returns {String} The format of the attribute
		 */
		getAttributeFormat: function(attribute) {
			return this._attributeFormats[attribute];
		},

		/**
		 * Retrieves the work items in the in-basket.
		 * 
		 * @param callback
		 *            A function invoked after the work items have been retrieved. An instance of
		 *            {@link ecm.model.ResultSet} is passed to this function providing access to the work items.
		 * @param orderBy
		 *            The attribute identifier for the attribute to order the items.
		 * @param descending
		 *            If true, the items are ordered in descending order.
		 * @param refresh
		 *            A {Boolean} true value indicating whether we should use the previous sort by property and the
		 *            descending setting.
		 * @param filters
		 *            An {Object} holding the in-basket filter criteria to use when querying for the work items.
		 * @param queryFilter
		 *            A SQL WHERE clause used as a filter, and having place holder variables that are replaced by values
		 *            in the substitutionVars parameter. Fields used in the query filter should be based on exposed
		 *            fields of the queue associated with the in-basket. (since 2.0.2)
		 * @param substitutionVars
		 *            An {Object} containing the values to substitute for the place holder variables specified in the
		 *            SQL WHERE clause for the queryFilter parameter. (since 2.0.2)
		 * @param queryFlags
		 *            An integer value specifying the query flag setting to use when retrieving the in-basket work
		 *            items. (since 2.0.2)
		 */
		retrieveWorkItems: function(callback, orderBy, descending, refresh, filters, queryFilter, substitutionVars, queryFlags) {
			this.logEntry("retrieveWorkItems");
			if (orderBy) {
				this._orderBy = this._prevOrderBy = orderBy;
				this._descending = this._prevDescending = descending;
			} else if (refresh) {
				orderBy = this._prevOrderBy;
				descending = this._prevDescending;
			}
			// Save off these extra filter value (since they are not presented in the UI) and use them later for result set sorting
			if (queryFilter) {
				this.queryFilter = queryFilter;
				this.substitutionVars = substitutionVars;
			}

//			queryFilter = "(F_StepName = :A OR F_StepName = :A) AND F_Subject = :B";
//			substitutionVars = {
//				"substitution_vars": [
//					{
//						"name": "F_StepName",
//						"type": "xs:string",
//						"value": [
//							"Review",
//							"Approve"
//						]
//					},
//					{
//						"name": "F_Subject",
//						"type": "xs:string",
//						"value": "FIMO Parallel"
//					}
//				]
//			};

			var requestParams = {
				repositoryId: this.repository.id,
				connection_point: this.connectionPoint,
				inbasket_name: encodeURIComponent(this.name),
				processrole_name: encodeURIComponent(this.parent.name),
				order_by: this._orderBy ? orderBy : "",
				order_descending: this._descending ? "true" : "false",
				filter_criteria: filters ? encodeURIComponent(filters) : "",
				inbasket_page_size: this.pageSize,
				merge_bound_user: this.mergeBoundUser ? "true" : "false",
				query_filter: queryFilter ? encodeURIComponent(queryFilter) : "",
				query_substitution_vars: substitutionVars ? encodeURIComponent(dojojson.stringify(substitutionVars)) : "",
				query_flags: queryFlags ? queryFlags : "",
				add_step_filter_information: this.addStepFilterInformation ? "true" : "false"
			};
			if (this.parent.parent.auth_name) {
				requestParams.appspace_name = encodeURIComponent(this.parent.parent.auth_name);
			} else {
				requestParams.appspace_name = encodeURIComponent(this.parent.parent.name); // For backward compatibility
			}

			var request = ecm.model.Request.invokeService("getWorkItems", this.repository.type, requestParams, lang.hitch(this, function(response) {
				this._retrieveWorkItemsCompleted(response, callback);
			}));
			this.logExit("retrieveWorkItems");
			return request;
		},

		_retrieveWorkItemsCompleted: function(response, callback) {
			this.logEntry("_retrieveWorkItemsCompleted");
			if (response.fetchCount) {
				this.fetchCount = response.fetchCount;
			}
			if (response.continuationData) {
				this.continuationData = response.continuationData;
			}

			response.repository = this.repository;
			response.parentFolder = this;
			response.setType = "workItems";
			var resultSet = ProcessInbasket.createResultSet(response);
			if (this.pageSize && this.pageSize > 0) {
				resultSet.pageSize = this.pageSize;
			}
			this.onRetrieveWorkItemsCompleted(resultSet);
			callback(resultSet);
			// Needs to save the sort attribute and direction for the server side Get Next query
			this.own(aspect.after(resultSet, "doSort", lang.hitch(this, function(args) {			
				this._orderBy = args[0].attribute;
				this._descending = args[0].descending;
			}), true));
			this.message = (response.messages && response.messages.length > 0 && response.messages[0]) || "";
			this.logExit("_retrieveWorkItemsCompleted");
		},

		/**
		 * Fired after the page of work items has been returned from the server.
		 * 
		 * @since 2.0.2
		 */
		onRetrieveWorkItemsCompleted: function(resultSet) {

		},

		/**
		 * Retrieves the queue items from the specified queue.
		 * 
		 * @param callback
		 *            A function invoked after the work items have been retrieved. An instance of
		 *            {@link ecm.model.ResultSet} is passed to this function providing access to the work items.
		 * @param refresh
		 *            A {Boolean} true value indicating whether we should use the previous sort by property and the
		 *            descending setting.
		 * @param filters
		 *            An {Object} holding the in-basket filter criteria to use when querying for the work items.
		 */
		retrieveQueueItems: function(callback, refresh, filters) {
			this.logEntry("retrieveQueueItems");

			var request = ecm.model.Request.invokeService("getInboxWorkItems", this.repository.type, {
				repositoryId: this.repository.id,
				connection_point: this.connectionPoint,
				queue_name: encodeURIComponent(this.queueName)
			}, lang.hitch(this, function(response) {
				this._retrieveQueueItemsCompleted(response, callback);
			}));
			this.logExit("retrieveQueueItems");
			return request;
		},

		_retrieveQueueItemsCompleted: function(response, callback) {
			this.logEntry("_retrieveQueueItemsCompleted");
			if (response.fetchCount) {
				this.fetchCount = response.fetchCount;
			}

			response.repository = this.repository;
			response.parentFolder = this;
			response.setType = "workItems";

			var resultSet = ProcessInbasket.createResultSet(response);
			this.onRetrieveQueueItemsCompleted(resultSet);
			callback(resultSet);
			this.message = (response.messages && response.messages.length > 0 && response.messages[0]) || "";
			this.logExit("_retrieveQueueItemsCompleted");
		},

		/**
		 * Fired after the page of work items from a specific queue has been returned from the server.
		 * 
		 * @since 2.0.2
		 */
		onRetrieveQueueItemsCompleted: function(resultSet) {

		},

		/**
		 * Retrieves the in-basket filter criteria. Creates an pseudo instance of a {@link ecm.model.ContentClass} for
		 * the criteria.
		 * 
		 * @param callback
		 *            A function invoked after the work items have been retrieved. It is passed an instance of a
		 *            {@link ecm.model.ContentClass} object.
		 */
		retrieveFilterCriteria: function(callback) {
			this.logEntry("retrieveFilterCriteria");
			var requestParams = {
				repositoryId: this.repository.id,
				connection_point: this.connectionPoint,
				processrole_name: encodeURIComponent(this.parent.name),
				inbasket_name: encodeURIComponent(this.name),
				merge_bound_user: this.mergeBoundUser ? "true" : "false"
			};
			if (this.parent.parent.auth_name) {
				requestParams.appspace_name = encodeURIComponent(this.parent.parent.auth_name);
			} else {
				requestParams.appspace_name = encodeURIComponent(this.parent.parent.name); // For backward compatibility
			}
			var request = ecm.model.Request.invokeService("getFilterCriteria", this.repository.type, requestParams, lang.hitch(this, function(response) {
				this._retrieveFilterCriteriaCompleted(response, callback);
			}));
			this.logExit("retrieveFilterCriteria");
		},

		_retrieveFilterCriteriaCompleted: function(response, callback) {
			this.logEntry("_retrieveFilterCriteriaCompleted");
			if (response.criterias) {
				this.filterClass = new ContentClass({
					id: "FilterClass",
					name: "FilterClass",
					repository: this.repository,
					pseudoClass: true,
					allowsInstances: false
				});

				var filterCriterias = [];
				for ( var i in response.criterias) {
					var filter = response.criterias[i];
					var filterId = filter.name;
					filterCriterias.push(this._createFilterCriteria(filter));
				}
				this.filterClass.attributeDefinitions = filterCriterias;
			}
			if (callback) {
				callback(this.filterClass);
			}
			this.logExit("_retrieveFilterCriteriaCompleted");
		},

		_createFilterCriteria: function(filter) {
			var attributeDefinition = new AttributeDefinition({
				id: filter.name,
				name: filter.label,
				repositoryType: this.repository.type,
				dataType: filter.dataType,
				defaultValue: filter.value,
				required: filter.required,
				readOnly: filter.readOnly,
				hidden: filter.hidden,
				system: filter.system,
				settability: "",
				maxLength: filter.maxEntry,
				minLength: filter.minEntry,
				minValue: filter.minValue,
				maxValue: filter.maxValue,
				cardinality: filter.cardinality,
				choiceList: filter.choiceList,
				contentClass: this.filterClass,
				searchable: false,
				promptText: filter.promptText,
				field: filter.field,
				operator: filter.operator,
				operative: filter.operative
			}); /* nullable */
			return attributeDefinition;
		}

	});

	return ProcessInbasket;
});
