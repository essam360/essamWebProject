/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/sniff",
	"dojo/_base/array",
	"dojo/data/util/sorter",
	"./_itemUtils",
	"./_ModelObject",
	"./_ModelStore",
	"./Request",
	"./Teamspace",
	"./Favorite",
	"./ContentItem",
	"./WorkItem",
	"./AttachmentItem",
	"./SecurityPolicy",
	"./SearchTemplate",
	"./Reference",
	"./Comment",
	"./SocialItem",
	"./UnifiedSearchTemplate",
	"./Tag",
	"./ProcessInbasket",
	"./Worklist"
], //
function(declare, lang, has, array, sorter, itemUtils, _ModelObject, _ModelStore, Request, Teamspace, Favorite, ContentItem, WorkItem, AttachmentItem, SecurityPolicy, SearchTemplate, Reference, Comment, SocialItem, UnifiedSearchTemplate, Tag, ProcessInbasket, Worklist) {

	/**
	 * Constructs a result set.
	 * 
	 * @param properties
	 *            The properties for the result set. The properties can be any of the public fields as defined below and
	 *            on ecm.model._ModelObject.
	 * @name ecm.model.ResultSet
	 * @class Represents a set of search results, folder contents, or other items that are returned by a query to the
	 *        content server. A <code>ResultSet</code> object contains data about the items found by the query and
	 *        about how these items are to be displayed.
	 *        <p>
	 *        To iterate through the items in a <code>ResultSet</code> object efficiently, use the
	 *        <code>getStore</code> method with a widget that supports Dojo datastores.
	 *        </p>
	 * @augments ecm.model._ModelObject
	 */
	var ResultSet = declare("ecm.model.ResultSet", [
		_ModelObject
	], {
		/** @lends ecm.model.ResultSet.prototype */

		/**
		 * A {@link ecm.model.Repository} object.
		 */
		repository: null,

		/**
		 * A {@link ecm.model.SearchTemplate} object.
		 */
		searchTemplate: null,

		/**
		 * A {@link ecm.model.ContentItem} object.
		 */
		parentFolder: null,

		/**
		 * A string value holding a teamspace id.
		 */
		teamspaceId: "",

		/**
		 * A boolean value indicating whether the maxiumum results have been reached.
		 */
		maxResultsReached: false,

		/**
		 * Holds the information on the columns of the result set in a form suitable for use in the dojo Gridx structure
		 * property.
		 */
		structure: null,

		/**
		 * Holds the information on the columns of the result set in a form suitable to create a magazine view in the
		 * dojo Gridx structure.
		 */
		magazineStructure: null,

		/**
		 * An array holding the column property names.
		 */
		columnNames: null,

		/**
		 * A boolean value indicating whether this result set has a toolbar.
		 */
		hasToolbar: true,

		/**
		 * A string value indicating the type of objects in the result set.
		 */
		setType: null,

		/**
		 * An array of {@link ecm.model.Item} objects or derivations of Item.
		 */
		items: null,

		/**
		 * A string value holding the cursor information if the result set is being paged.
		 */
		continuationData: null,

		/**
		 * An integer value holding the sort column index.
		 */
		sortIndex: 0,

		/**
		 * The current column sort direction.
		 */
		sortDirection: 0,

		/**
		 * An integer value holding the default paging size.
		 */
		pageSize: 200,

		/**
		 * Total Count Type: null/none: no total count data for totalCount total: real total count data for totalCount
		 * threshold: totalCount is at least data.
		 */
		totalCountType: null,

		/**
		 * Total Count of the result set returned by Content Engine 5.2 or later. For other repositories, it is invalid.
		 */
		totalCount: 0,

		/**
		 * A filter type used to limit the result set based on a certain type. It will depend on what types of objects
		 * will utilize this filter type.
		 * 
		 * @since 2.0.3
		 */
		filterType: null,

		/**
		 * An optional create item function that if defined will be called when building items for the result set.
		 * Should be defined as createHandler: function(resultSet, itemJSON).
		 * 
		 * @since 2.0.3.5
		 */
		createHandler: null,

		/**
		 * An optional get next page of items function that if defined will be called when paging items in the result
		 * set. Should be defined as nextPageHandler: function(resultSet, itemsNeeded, callback).
		 * 
		 * @since 2.0.3.5
		 */
		nextPageHandler: null,

		/**
		 * An optional sort items function that if defined will be called when sorting items in the result set. Should
		 * be defined as sortHandler: function(resultSet, sortProperty, descending, callback).
		 * 
		 * @since 2.0.3.5
		 */
		sortHandler: null,

		/**
		 * An optional refresh items function that if defined will be called when refreshing items in the result set.
		 * Should be defined as refreshHandler: function(resultSet, callback).
		 * 
		 * @since 2.0.3.5
		 */
		refreshHandler: null,

		/**
		 * An optional search items function that if defined will be called when search for items in the result set.
		 * Should be defined as searchHandler: function(resultSet, filterCriteria, callback).
		 * 
		 * @since 2.0.3.5
		 */
		searchHandler: null,

		/**
		 * An optional get action menu type for items function that if defined will be called when determining which
		 * context menu to use for the selected set of items. Should be defined as getActionsMenuType:
		 * function(resultSet, items).
		 * 
		 * @since 2.0.3.5
		 */
		getActionsMenuType: null,

		/**
		 * @private This constructor is used internally
		 */
		constructor: function() {
			// Note: most parameters are mixed in by _ModelObject constructor
			if (this.columns) {
				this.setColumns(this.columns);
			}

			if (this.magazineColumns) {
				this.magazineStructure = this.magazineColumns;
				delete this.magazineColumns;
			}

			if (this.repository && this.repository.getRecordType() == null && this.repositoryRecordType) {
				this.repository.setRecordType(this.repositoryRecordType);
				delete this.repositoryRecordType;
			}

			if (this.rows) {
				this.items = this.buildItems(this.rows, this.templates);
				delete this.rows;
			}
		},

		/**
		 * Sets a new set of columns for rendering in details mode.
		 * 
		 * @param columns
		 *            A JSON object holding the column structure configuration.
		 * @since 2.0.3
		 */
		setColumns: function(columns) {
			if (columns) {
				this.structure = columns;
				if (this.columns) {
					delete this.columns;
				}
				if (this.structure.cells) {
					for ( var i in this.structure.cells[0]) {
						var cell = this.structure.cells[0][i];
						if (cell.field == "{CLASS}" && cell.name == "{CLASS}") {
							cell.name = ecm.messages.class_label_no_html_encode;
						}
						if (has("webkit")) {
							if (cell.field == "icon" || cell.field == "mimeTypeIcon") {
								cell.width = "25px";
							} else if (cell.field == "multiStateIcon") {
								cell.width = cell.widthWebKit;
							}
						}
					}
				}
			}
		},

		/**
		 * Builds the list of items from JSON, will create {@link ecm.model.Item} or derivations of Item.
		 * 
		 * @param jsonItemsArray
		 *            A JSON object holding the list of items to construct.
		 * @param templates
		 *            A JSON object holding the list of templates.
		 */
		buildItems: function(/* Array */jsonItemsArray, templates) {
			var result = [];
			for ( var i in jsonItemsArray) {
				var itemJSON = jsonItemsArray[i];
				// for favorites, get repository from individual item
				var repo = this.repository || ecm.model.desktop.getRepository(itemJSON.repositoryId);
				var item;
				if (lang.isFunction(this.createHandler)) {
					// If defined, will call out to custom item creation function (so other object types can be constructed)
					item = this.createHandler(this, itemJSON);
				} else {
					if (this.setType == "workItems") {
						item = ecm.model.WorkItem.createFromJSON(itemJSON, repo, this, this.parentFolder);
						if (item.repository.type == "cm") {
							// If the content class hasn't been initialized with the display name, do it here so
							// it will show up in the results correctly.
							var contentClass;
							if (item.getContentItem) {
								contentClass = item.getContentItem().getContentClass();
							}
							if (contentClass && templates && item.template) {
								for (var i = 0; i < templates.length; i++) {
									var template = templates[i];
									if (template.template_name == item.template) {
										if (contentClass.name != template.template_label) {
											contentClass.name = template.template_label;
										}
									}
								}
							}
						}
					} else if (this.setType == "attachmentItems") {
						item = AttachmentItem.createFromJSON(itemJSON, repo, null, this.parentFolder);
					} else if (SearchTemplate.instanceOf(itemJSON, repo)) {
						item = SearchTemplate.createFromJSON(itemJSON, repo, this, this.parentFolder);
						item.teamspaceId = this.teamspaceId;
					} else if (UnifiedSearchTemplate.instanceOf(itemJSON, repo)) {
						item = UnifiedSearchTemplate.createFromJSON(itemJSON, repo, this, this.parentFolder);
						item.teamspaceId = this.teamspaceId;
					} else if (this.setType == "teamspace") {
						itemJSON.repository = repo;
						item = new Teamspace(itemJSON);
					} else if (this.setType == "template") {
						itemJSON.repository = repo;
						item = new Teamspace(itemJSON);
					} else if (this.setType == SocialItem.prototype.TYPE.COMMENT) {
						item = Comment.createFromJSON(itemJSON, this.contentItem, this);
					} else if (this.setType == SocialItem.prototype.TYPE.TAG) {
						item = Tag.createFromJSON(itemJSON, this.contentItem, this);
					} else if (this.setType == SocialItem.prototype.TYPE.RECOMMENDATION || this.setType == SocialItem.prototype.TYPE.DOWNLOAD) {
						item = SocialItem.createFromJSON(itemJSON, this.contentItem, this);
					} else if (this.setType == "reference") {
						item = Reference.createFromJSON(itemJSON, repo, this);
					} else if (this.setType == "securityPolicies") {
						item = new SecurityPolicy(itemJSON);
					} else {
						item = ContentItem.createFromJSON(itemJSON, repo, this, this.parentFolder);
						item._teamspaceId = this.teamspaceId;
						if (this.teamspaceId)
							this.setType = "teamspaceRuntime";
						if (templates && !item.template_label && item.template) {
							for (var i = 0; i < templates.length; i++) {
								var template = templates[i];
								if (template.template_name == item.template && template.template_label) {
									item.template_label = template.template_label;
									break;
								}
							}
						}
				        if (this.setType == "contentElement") {
				        	item.celement = itemJSON.element;
				        	item.contentElementParentId = item.id;
				        	item.id = item.id + ", " + item.celement;
				        	item.name = item.attributes.RetrievalName;
				        }
					}
				}
				result.push(item);
			}
			return result;
		},

		/**
		 * Called to retrieve the next page of items using the continuation data for the result set.
		 * 
		 * @param retrievedCallback
		 *            A callback function called after the next page of items has been retrieved. Passes an array of
		 *            {@link ecm.model.Item} objects or derivations of Item as a parameter.
		 * @param itemsNeeded
		 *            An integer value indicating the number of items needed.
		 */
		retrieveNextPage: function(retrievedCallback, itemsNeeded) {
			this.logEntry("retrieveNextPage");
			if (lang.isFunction(this.nextPageHandler)) {
				this.nextPageHandler(this, itemsNeeded, lang.hitch(this, function(response) {
					// If defined, will call out to custom next page function (so custom service requests can be called)
					this._retrieveNextPageCompleted(response, retrievedCallback);
				}));
			} else {
				var params = {
					repositoryId: this.repository.id,
					itemsNeeded: itemsNeeded ? itemsNeeded : "",
					continuationData: this.continuationData,
					skip: this.items.length,
					pageSize: this.pageSize
				};
				var serviceName;
				if (this.setType == "workItems") {
					serviceName = "getNextWorkItems";
					params.inbasket_page_size = this.pageSize; // Need to over ride this so it can be set per inbasket on service side
					if (this.parentFolder && this.parentFolder.addStepFilterInformation) {
						params.add_step_filter_information = "true";
					}
				} else if (this.setType == "teamspace" || this.setType == "template") {
					serviceName = "getNextTeamspacePage";
				} else if (this.setType == SocialItem.prototype.TYPE.RECOMMENDATION) {
					serviceName = "retrieveRecommendations";
				} else if (this.setType == SocialItem.prototype.TYPE.DOWNLOAD) {
					serviceName = "retrieveDownloadRecords";
				} else if (this.setType == SocialItem.prototype.TYPE.COMMENT) {
					serviceName = "retrieveComments";
				} else {
					serviceName = "continueQuery";
				}

				if (this.repository.type == "cmis") {
					if (this.items.length > 0 && this.items[0].attributes["cmis:baseTypeId"] != this.items[this.items.length - 1].attributes["cmis:baseTypeId"]) {
						var skip = 0;
						var type = this.items[this.items.length - 1].attributes["cmis:baseTypeId"];
						for (var i = this.items.length - 1; i >= 0; i--) {
							if (this.items[i].attributes["cmis:baseTypeId"] == type) {
								skip++;
							} else {
								break;
							}
						}
						params.skip = skip;
					}
				}

				var request = Request.invokeService(serviceName, this.repository.type, params, lang.hitch(this, function(response) {
					this._retrieveNextPageCompleted(response, retrievedCallback);
				}));
			}
			this.logExit("retrieveNextPage");
			return request;
		},

		_retrieveNextPageCompleted: function(response, retrievedCallback) {
			this.logEntry("continueQueryCompleted");
			var moreItems;
			if (this.setType == "teamspace" || this.setType == "template") {
				moreItems = this.buildItems(response.workspaces);
			} else {
				moreItems = this.buildItems(response.rows, response.templates);
			}
			this.items = this.items.concat(moreItems);
			this.maxResultsReached = response.maxResultsReached;
			this.continuationData = response.continuationData; // may remove _continuationData if reached the end

			if (!this.continuationData) {
				array.forEach(this.structure.cells, function(cell) {
					array.forEach(cell, function(column) {
						if (column.sortableIfAll)
							column.sortable = true;
					});
				});
			}

			this.onNextPageRetrieved(this);

			retrievedCallback(this.items);
			this.logExit("continueQueryCompleted");
		},

		/**
		 * Fired after the next page of items has been returned from the server.
		 * 
		 * @param resultSet
		 *            Instance of this {@link ecm.model.ResultSet}.
		 * @since 2.0.2
		 */
		onNextPageRetrieved: function(resultSet) {
		},

		/**
		 * Sets attribute mappings that will be used to retrieve mapped attributes in case this result set contains
		 * items from multiple repositories.
		 * 
		 * @param attributeMappings
		 *            An array of {@link ecm.model.AttributeMapping} objects
		 * @since 2.0.2
		 */
		setAttributeMappings: function(attributeMappings) {
			if (attributeMappings instanceof Array) {
				var mappings = {};
				array.forEach(attributeMappings, function(mapping) {
					mappings[mapping.id] = mapping;
				});
				this._attributeMappings = mappings;
			}
		},

		_getMappedAttributeName: function(item, mappingId) {
			if (!this._attributeMappings)
				return mappingId;
			var repoId = item.repository ? item.repository.id : item.repositoryId;
			var mapping = this._attributeMappings[mappingId];
			if (!repoId || !mapping)
				return mappingId;

			var attrib = mapping.getRepositoryAttribute(repoId);

			return attrib ? attrib.id : mappingId;
		},

		/**
		 * @since 2.0.3.3
		 */
		isServerSortable: function() {
			// Safe for server-side sorting if we have a search template, parent folder, or teamspace type data
			return this.searchTemplate != null || this.parentFolder != null || this.setType == "teamspace" || this.setType == "template" || this.setType == "entryTemplate" || this.setType == "checkedOutItems";
		},

		/**
		 * @since 2.0.3.3
		 */
		isClientSortableAttribute: function(store, attribute) {
			return (attribute && (store.comparatorMap[attribute] == _ModelStore.numericComparator || store.comparatorMap[attribute] == _ModelStore.longComparator || store.comparatorMap[attribute] == _ModelStore.dateComparator || store.comparatorMap[attribute] == _ModelStore.booleanComparator));
		},

		/**
		 * @since 2.0.3.3
		 */
		isClientSortable: function(store, sortProperty) {
			var culturalCollationRequired = ecm.model.desktop.culturalCollation && this.isServerSortable();
			return store && this.items && !this.continuationData && (!culturalCollationRequired || this.isClientSortableAttribute(store, sortProperty) || this.setType == "templateVFolders");
		},

		/**
		 * Sorts the list of items in the result set. If all the result set items are in hand, will sort the list on the
		 * client, otherwise go back to the server with the continuation data. If the application is configured to use
		 * locale-specific sorting (<code>ecm.model.desktop.culturalCollation</code>), the sorting will be done on
		 * the server-side only if a <code>searchTemplate</code> or <code>parentFolder</code> is available;
		 * otherwise, the setting is ignored and the results are sorted on the client.
		 * 
		 * @param p
		 *            The column property to sort on.
		 * @param afterSort
		 *            A callback function to call after the sort is completed. A {@link ecm.model.ResultSet} is passed
		 *            as a parameter.
		 * @param store
		 *            A {@link ecm.model._ModelStore} object (can be null).
		 */
		doSort: function(p, afterSort, store) {
			if (!p || !p[0]) { // no property to sort on
				if (afterSort) {
					// Return the same results
					afterSort(this);
				}
				return;
			}

			var col = p[0];
			var sortProperty = col.attribute;

			if (this.setType == "entryTemplate") {
				// If already sorted...
				var columnNames = this.getColumns();
				if (columnNames && this.sortIndex > 0 && sortProperty == columnNames[this.sortIndex - 1] && col.descending == (this.sortDirection == -1)) {
					if (afterSort) {
						// Return the same results
						afterSort(this);
					}
					return;
				}
			}

			var serverSortable = this.isServerSortable();
			var clientSortable = this.isClientSortable(store, sortProperty);

			if (clientSortable) {
				if (col.clientAttribute) {
					col.attribute = col.clientAttribute; // reset original attribute for client-side sorting
					delete col.clientAttribute;
				}

				// _ModelStore#getValue() returns formatted value, sorting requires raw value

				// Force the sort comparator for the CM "{NAME}" column to use the case insensitive comparator.
				var sortComparatorMap;
				if (store.comparatorMap["{NAME}"] && store.parentModelObject && (store.parentModelObject.repository && store.parentModelObject.repository._isCM())) {
					sortComparatorMap = lang.mixin({}, store.comparatorMap);
					sortComparatorMap["{NAME}"] = _ModelStore.caseInsensitiveComparator;
				} else {
					sortComparatorMap = store.comparatorMap;
				}

				var sortStore = {
					comparatorMap: sortComparatorMap,
					getValue: lang.hitch(this, function(item, attribute) {
						if (attribute == "isFolder") {
							return (item && item.isFolder && item.isFolder() ? 1 : 2); // folder first
						}
						var value = null;
						if (item && item.getValue) {
							attribute = this._getMappedAttributeName(item, attribute);
							value = item.getValue(attribute);
						} else if (item && item.getDisplayValue) {
							attribute = this._getMappedAttributeName(item, attribute);
							value = item.getDisplayValue(attribute);
						}
						return value;
					})
				};
				if (this.parentFolder) { // browsing folder contents
					p = [
						{
							attribute: "isFolder",
							descending: p[0].descending
						}
					].concat(p); // folder first
				}
				this.items.sort(sorter.createSortFunction(p, sortStore));
				if (afterSort) {
					afterSort(this);
				}
			} else if (serverSortable) {
				if (col.clientAttribute)
					delete col.clientAttribute;

				if (this.searchTemplate) {
					this.searchTemplate.search(lang.hitch(this, function(resultSet) {
						this.onServerSort(this, resultSet);
						if (afterSort) {
							afterSort(resultSet);
						}
					}), sortProperty, col.descending, this.teamspaceId);
				} else {
					if (lang.isFunction(this.sortHandler)) {
						// If defined, will call out to custom sort function (so custom service requests can be called)
						this.sortHandler(this, sortProperty, col.descending, lang.hitch(this, function(resultSet) {
							this.onServerSort(this, resultSet);
							if (afterSort) {
								afterSort(resultSet);
							}
						}));
					} else {
						var item = this.parentFolder;
						if (item == null && (this.setType == "teamspace" || this.setType == "template") || this.setType == "entryTemplate" || this.setType == "checkedOutItems") {
							if (this.setType == "teamspace" && this._disableSort == null) {
								this.repository.retrieveTeamspaceFoldersResultSet(lang.hitch(this, function(resultSet) {
									if (this.criteria)
										resultSet.criteria = this.criteria;
									this.onServerSort(this, resultSet);
									this.onServerTeamspaceSort(resultSet);
									if (resultSet != null && afterSort) {
										afterSort(resultSet);
									}
								}), true, sortProperty, col.descending, this.criteria);
							} else if (this.setType == "template" && this._disableSort == null) {
								this.repository.retrieveTeamspaceTemplateFolderResultSet(lang.hitch(this, function(resultSet) {
									if (this.criteria)
										resultSet.criteria = this.criteria;
									this.onServerSort(this, resultSet);
									this.onServerTemplateSort(resultSet);
									if (resultSet != null && afterSort) {
										afterSort(resultSet);
									}
								}), sortProperty, col.descending, this.criteria);
							} else if (this.setType == "entryTemplate") {
								var paging = this.context != "EntryTemplateFolderAssociationsPane";
								this.repository.retrieveEntryTemplatesResultSet(lang.hitch(this, function(resultSet) {
									if (this.context) {
										resultSet.context = this.context;
									}
									this.onServerSort(this, resultSet);
									this.onServerEntryTemplateSort(resultSet);
									if (resultSet != null && afterSort) {
										afterSort(resultSet);
									}
								}), this.filterType, paging, sortProperty, col.descending);
							} else if (this.setType == "checkedOutItems") {
								this.repository.retrieveCheckedOutItems(lang.hitch(this, function(resultSet) {
									this._refreshCompleted(resultSet);
								}), sortProperty, col.descending);
							}
						} else if (item.isInstanceOf && (item.isInstanceOf(ecm.model.ProcessInbasket))) {
							var filterCriteria = null;
							if (item && item.filterValues) {
								filterCriteria = item.filterValues;
							}
							item.retrieveWorkItems(lang.hitch(this, function(resultSet) {
								this.onServerSort(this, resultSet);
								if (afterSort) {
									afterSort(resultSet);
								}
							}), sortProperty, col.descending, false, filterCriteria, item.queryFilter, item.substitutionVars);
						} else if (item.isInstanceOf && (item.isInstanceOf(ecm.model.Worklist))) {
							item.retrieveWorkItems(lang.hitch(this, function(resultSet) {
								this.onServerSort(this, resultSet);
								if (afterSort) {
									afterSort(resultSet);
								}
							}), sortProperty, col.descending);
						} else if (item.isInstanceOf && (item.isInstanceOf(ecm.model.WorkItem))) {
							item.openFolderContent(lang.hitch(this, function(resultSet) {
								this.onServerSort(this, resultSet);
								if (afterSort) {
									afterSort(resultSet);
								}
							}), sortProperty, col.descending);
						} else if (item.isInstanceOf && item.isInstanceOf(Favorite)) {
							var item = item.item;
							item.unloadFolderContents();
							item.retrieveFolderContents(false, lang.hitch(this, function(resultSet) {
								this.onServerSort(this, resultSet);
								if (afterSort) {
									afterSort(resultSet);
								}
							}), sortProperty, col.descending, false, this.teamspaceId);
						} else {
							// Clear the cached folder contents so that new results are retrieved using the new order.
							item.unloadFolderContents();
							item.retrieveFolderContents(false, lang.hitch(this, function(resultSet) {
								this.onServerSort(this, resultSet);
								if (afterSort) {
									afterSort(resultSet);
								}
							}), sortProperty, col.descending, /* no cache */false, this.teamspaceId); // Update the item's folder contents cache with the differently sorted results.
						}
					}
				}
			} else if (afterSort) { // not safe to sort
				// Return the same results
				afterSort(this);
			}
		},

		/**
		 * Fired after a server sort.
		 * 
		 * @param originalResultSet
		 *            Instance of {@link ecm.model.ResultSet}.
		 * @param sortedResultSet
		 *            Instance of {@link ecm.model.ResultSet}.
		 * @since 2.0.3
		 */
		onServerSort: function(originalResultSet, sortedResultSet) {
		},

		/**
		 * Fired after a teamspace sort returns from the server.
		 * 
		 * @since 2.0.2
		 */
		onServerTeamspaceSort: function(resultSet) {
		},

		/**
		 * Fired after a template sort returns from the server.
		 * 
		 * @since 2.0.2
		 */
		onServerTemplateSort: function(resultSet) {
		},

		/**
		 * Fired after a entry template sort returns from the server.
		 * 
		 * @since 2.0.3
		 */
		onServerEntryTemplateSort: function(resultSet) {
		},

		/**
		 * Returns an {@link ecm.model._ModelStore} object for the list of result set items.
		 */
		getStore: function() {
			this.store = null;
			this.store = new _ModelStore(this, this.getItems, null, lang.hitch(this, this.deleteItem), lang.hitch(this, this._getMappedAttributeName));
			return this.store;
		},

		/**
		 * Returns an array of column property names.
		 */
		getColumns: function() {
			if (!this.columnNames) {
				if (this.structure && this.structure.cells) {
					var array = [];
					for ( var i in this.structure.cells) {
						for ( var j in this.structure.cells[i]) {
							if (this.structure.cells[i][j].field) {
								array.push(this.structure.cells[i][j].field);
							}
						}
					}
					this.columnNames = array;
				} else {
					this.columnNames = [];
				}
			}
			return this.columnNames;
		},

		/**
		 * Returns a specific {@link ecm.model.Item} or derivation of Item at the requested index
		 * 
		 * @param index
		 *            An integer value holding the index of the item to retrieve.
		 */
		getItem: function(index) {
			return this.items[index];
		},

		/**
		 * Sets the new item at the provided index for this result set.
		 * 
		 * @param index
		 *            An integer value holding the index of the item to set.
		 * @param item
		 *            A {@link ecm.model.Item} object or derivation of Item
		 */
		setItem: function(index, item) {
			this.items[index] = item;
		},

		/**
		 * Returns the array index of the specified item.
		 * 
		 * @param item
		 *            A {@link ecm.model.Item} object or derivation of Item
		 */
		getIndexOfItem: function(item) {
			return array.indexOf(this.items, item);
		},

		/**
		 * Returns the array index of an item with the specified content item.
		 * 
		 * @param item
		 *            A {@link ecm.model.Item} object or derivation of Item
		 */
		getIndexOfContentItem: function(contentItem) {
			var index = -1;
			array.some(this.items, function(it, i) {
				var ct = itemUtils.getContentItem(it);
				if (ct == contentItem) {
					index = i;
					return true;
				}
				return false;
			});
			return index;
		},

		/**
		 * Returns an array of {@link ecm.model.Item} objects or derivation of Item.
		 * 
		 * @param handler
		 *            A function to be called to process the items before returning.
		 * @param itemsNeeded
		 *            An integer value holding the number of items requested.
		 */
		getItems: function(/* function */handler, /* int */itemsNeeded) {
			this.logEntry("getItems", "itemsNeeded = " + itemsNeeded);
			if (itemsNeeded && handler) {
				// no continuation or we already have all the needed items
				if (!this.continuationData || this.items.length >= itemsNeeded) {
					handler(this.items);
				} else {
					var self = this;
					var retrievedCallback = function() {
						handler(self.items);
					};
					this.retrieveNextPage(retrievedCallback, itemsNeeded);
				}
			} else {
				return this.items; // just returns the cached items
			}
			this.logExit("getItems");
		},

		/**
		 * Deletes the specified item from the items array
		 * 
		 * @param item
		 *            A {@link ecm.model.Item} object or derivation of Item.
		 */
		deleteItem: function(item) {
			for ( var index in this.items) {
				if (item.id == this.items[index].id) {
					this.items.splice(index, 1);
					return true;
				}
			}
			return false;
		},

		/**
		 * Clears all items from the result list
		 * 
		 * @since 2.0.3.6
		 */
		removeAllItems: function() {
			this.items = [];
		},

		/**
		 * Returns boolean value true if continuation data has been defined on this result set.
		 */
		hasContinuation: function() {
			var hasMore = this.continuationData ? true : false;
			if (hasMore && this.totalCountType == "total" && this.items && this.items.length >= this.totalCount)
				hasMore = false;

			return hasMore;
		},

		/**
		 * Reruns the search or re-retrieves the folder content.
		 */
		refresh: function() {
			if (lang.isFunction(this.refreshHandler)) {
				this.refreshHandler(this, lang.hitch(this, function(resultSet) {
					// If defined, will call out to custom refresh function (so custom service requests can be called)
					this._refreshCompleted(resultSet);
				}));
			} else {
				if (this.searchTemplate) {
					this.searchTemplate.search(lang.hitch(this, "_refreshCompleted")); // calls this.onChange which the contentList listens to & causes it to refresh itself
				} else if (this.parentFolder) {
					if (this.parentFolder && this.parentFolder.isInstanceOf) {
						if (this.parentFolder.isInstanceOf(ecm.model.ProcessInbasket)) { // P8 Work
							var orderBy = null;
							var descending = null;
							var columnNames = this.getColumns();
							if (columnNames.length > 0) {
								orderBy = columnNames[this.sortIndex - 1]; // sortIndex is one based from grid
								if (this.sortIndex <= 2) {
									orderBy = columnNames[2]; // default to use main column property
								}
								descending = (this.sortDirection == 1) ? false : true;
							}
							this.parentFolder.retrieveWorkItems(lang.hitch(this, "_refreshCompleted"), orderBy, descending, true, this.parentFolder.filterValues, this.parentFolder.queryFilter, this.parentFolder.substitutionVars);
							return;
						} else if (this.parentFolder.isInstanceOf(ecm.model.Worklist)) { // CM Work
							this.parentFolder.retrieveWorkItems(lang.hitch(this, "_refreshCompleted"));
							return;
						} else if (this.parentFolder.isInstanceOf(ecm.model.WorkItem)) { // CM Work Folder
							this.parentFolder.openFolderContent(lang.hitch(this, "_refreshCompleted"));
							return;
						} else if (this.parentFolder.isInstanceOf(ecm.model.AttachmentItem)) { // P8 Attachment Item
							this.parentFolder.retrieveAttachmentContents(false, false, lang.hitch(this, "_refreshCompleted"));
							return;
						} else if (this.parentFolder.isInstanceOf(Favorite)) { // ContentItem
							var item = this.parentFolder.item;
							item.unloadFolderContents();
							item.retrieveFolderContents(false, lang.hitch(this, "_refreshCompleted"), undefined, undefined, true, this.teamspaceId, "", this.parentFolder);
							return;
						}
					}
					if (this.context == "PropertiesVersions") {
						this.repository.retrieveVersions(this.parentFolder, null, lang.hitch(this, function(resultSet) {
							resultSet.searchTemplate = this.searchTemplate;
							this._refreshCompleted(resultSet);
						}));
					} else { // ContentItem
						this.parentFolder.unloadFolderContents();
						this.parentFolder.retrieveFolderContents(false, lang.hitch(this, "_refreshCompleted"), undefined, undefined, true, this.teamspaceId);
					}
				} else if (this.parentDocument || this.childDocument) {
					var item = this.parentDocument || this.childDocument;
					item.unloadRelated();
					item.retrieveRelated(this.relationship, this.resultType, lang.hitch(this, "_refreshCompleted"));
				} else if (this.setType == "teamspace") {
					delete this.criteria;
					this.repository.retrieveTeamspaceFoldersResultSet(lang.hitch(this, function(resultSet) {
						//delete resultSet.structure;
						this._refreshCompleted(resultSet);
					}), true, null, null, null, true);
				} else if (this.setType == "template") {
					this.repository.retrieveTeamspaceTemplateFolderResultSet(lang.hitch(this, function(resultSet) {
						//delete resultSet.structure;
						this._refreshCompleted(resultSet);
					}));
				} else if (this.setType == "entryTemplate") {
					this.repository.retrieveEntryTemplatesResultSet(lang.hitch(this, function(resultSet) {
						resultSet.container = this.container;
						this._refreshCompleted(resultSet);
					}), this.filterType, true);
				} else if (this.setType == "checkedOutItems") {
					this.repository.retrieveCheckedOutItems(lang.hitch(this, function(resultSet) {
						this._refreshCompleted(resultSet);
					}));
				}
			}
		},

		/**
		 * @private Callback from the refresh method.
		 */
		_refreshCompleted: function(resultSet) {
			this.repository = resultSet.repository;
			this.searchTemplate = resultSet.searchTemplate;
			if (!this.parentFolder || !(this.parentFolder.isInstanceOf && this.parentFolder.isInstanceOf(Favorite))) {
				this.parentFolder = resultSet.parentFolder;
			}
			this.maxResultsReached = resultSet.maxResultsReached;
			this.structure = resultSet.structure;
			this.magazineStructure = resultSet.magazineStructure;
			this.columnNames = null;
			this.setType = resultSet.setType;
			this.items = resultSet.items;
			this.continuationData = resultSet.continuationData;
			this.sortIndex = resultSet.sortIndex;
			this.sortDirection = resultSet.sortDirection;
			this.num_results = resultSet.num_results;
			this.totalCountType = resultSet.totalCountType;
			this.totalCount = resultSet.totalCount;
			this.onChange(this);
		},

		/**
		 * Searches the server by using the input filter criteria.
		 * 
		 * @param filterCriteria
		 *            Object containing the filter criteria.
		 * @param callback
		 *            Optional callback function. The callback returns a {@link ecm.model.ResultSet} from the search.
		 * @since 2.0.3
		 */
		search: function(filterCriteria, callback) {
			if (lang.isFunction(this.searchHandler)) {
				// If defined, will call out to custom search function (so custom service requests can be called)
				this.searchHandler(this, filterCriteria, lang.hitch(this, function(resultSet) {
					if (callback) {
						callback(resultSet);
					}
				}));
			} else {
				if (this.parentFolder && this.parentFolder.isInstanceOf) {
					var item = this.parentFolder;
					if (item.isInstanceOf && item.isInstanceOf(Favorite)) {
						item = this.parentFolder.item;
					}
					item.retrieveFolderContents(false, lang.hitch(this, function(resultSet) { // ContentItem
						if (callback) {
							callback(resultSet);
						}
					}), undefined, undefined, true, this.teamspaceId, "", this.parentFolder, filterCriteria);

				} else if (this.setType == "template") {
					this.repository.retrieveTeamspaceTemplateFolderResultSet(lang.hitch(this, function(resultSet) {
						if (callback) {
							callback(resultSet);
						}
					}), null, null, filterCriteria);

				} else if (this.setType == "teamspace") {
					this.repository.retrieveTeamspaceFoldersResultSet(lang.hitch(this, function(resultSet) {
						if (callback) {
							callback(resultSet);
						}
					}), true, null, null, filterCriteria);

				} else if (this.setType == "entryTemplate") {
					this.repository.retrieveEntryTemplatesResultSet(lang.hitch(this, function(resultSet) {
						resultSet.container = this.container;
						if (callback) {
							callback(resultSet);
						}
					}), this.filter, true, null, null, filterCriteria);

				} else {
					if (callback) {
						callback(null);
					}
				}
			}
		},

		/**
		 * Appends the specified result set items to the current list.
		 * 
		 * @param resultSet
		 *            A {@link ecm.model.ResultSet} object.
		 */
		append: function(resultSet) {
			this._add(resultSet);
		},

		/**
		 * Prepends the specified result set items to the current list.
		 * 
		 * @param resultSet
		 *            A {@link ecm.model.ResultSet} object.
		 * @since 2.0.3
		 */
		prepend: function(resultSet) {
			this._add(resultSet, true);
		},

		/**
		 * @private
		 */
		_add: function(resultSet, prepend) {
			if (resultSet && resultSet.items && this.items) {
				// prepare existing ID map
				var map = {};
				array.forEach(this.items, function(item) {
					if (item && item.id) {
						map[item.id] = item;
					}
				});

				// append when not duplicate
				var items = this.items;
				var added = false;
				array.forEach(resultSet.items, function(item) {
					if (item) {
						var id = item.id;
						if (id && map[id]) { // duplicate
							return;
						}
						if (prepend)
							items.unshift(item);
						else
							items.push(item);
						added = true;
					}
				});

				if (added) {
					this.onChange(this);
				}
			}
		},

		/**
		 * Returns boolean true if the specified item matches the parent object of this result set.
		 * 
		 * @param item
		 *            An {@link ecm.model.Item} object or derivation of Item.
		 */
		isResultSetForItem: function(item) {
			if (this.parentFolder && this.parentFolder.id == item.id) {
				return true;
			} else if (this.searchTemplate && this.searchTemplate.id == item.id) {
				return true;
			} else {
				return false;
			}
		},

		/**
		 * Returns a string value holding the context menu type for the list of items.
		 * 
		 * @param items
		 *            An array of {@link ecm.model.Item} objects or derivations of Item.
		 */
		getActionsMenuItemsType: function(items) {
			var contextMenuType = null;
			if (lang.isFunction(this.getActionsMenuType)) {
				// If defined, will call out to custom get actions menu function (so custom service requests can be called)
				contextMenuType = this.getActionsMenuType(this, items);
			} else {
				if (items) {
					if (this.setType == "teamspace") {
						return "TeamspaceContextMenu";
					} else if (this.setType == "template") {
						return "TeamspaceTemplateContextMenu";
					} else if (this.setType == "entryTemplate") {
						return "EntryTemplateContextMenu";
					} else if (this.setType == "contentElement") {
						return "ContentElementContextMenu";
					}

					var parentFolders = this._getParentFolders();
					var contextMenuType = "FolderContextMenu";

					for ( var i in items) {
						if (items[i] && items[i].isInstanceOf && items[i].isInstanceOf(ecm.model.WorkItem)) {
							var repository = this.repository || items[i].repository;
							if (repository && repository.type == "cm") {
								if (items[i].isFolder()) {
									contextMenuType = "WorkItemFolderContextMenu";
									break;
								} else {
									contextMenuType = "WorkItemDocumentContextMenu";
								}
							} else if (items[i].isInTrackerQueue()) {
								contextMenuType = "TrackerQueueContextMenu";
							} else if (items[i].parent.queueType == "userQueue") {
								contextMenuType = "UserQueueContextMenu";
							} else if (items[i].parent.queueType == "processQueue") {
								contextMenuType = "ProcessQueueContextMenu";
							}
						} else if (items[i] && this.setType == "teamspaceRuntime" || this.teamspaceId) {
							if (items[i] && items[i].isFolder()) {
								if (items[i].repository.type == "cm")
									contextMenuType = "TeamspaceSubFolderContextMenuCM";
								else
									contextMenuType = "TeamspaceSubFolderContextMenu";
							} else if (items[i].isInstanceOf && items[i].isInstanceOf(ecm.model._SearchTemplateBase)) {
								contextMenuType = "TeamspaceSearchTemplateContextMenu";
							} else {
								contextMenuType = "TeamspaceItemContextMenu";
							}
						} else if (items[i] && !items[i].isFolder()) {
							var actionsHandler = ecm.model.desktop.getActionsHandler();
							var isBookmark = actionsHandler && actionsHandler.declaredClass == "ecm.widget.layout.BookmarkActionsHandler";
							var searchTemplateContextMenuType = isBookmark ? "SearchTemplateBookmarkContextMenu" : "SearchTemplateContextMenu";

							if (this.itemContextMenuDef) {
								contextMenuType = this.itemContextMenuDef;
							} else if (this._hasInstanceOfClass(parentFolders, ecm.model.AttachmentItem)) {
								if (this.setType == "crAttachmentItems") { // cross repository attachments
									contextMenuType = "AttachmentItemContextMenu";
								} else if (items[i].repository.type == "cm") {
									contextMenuType = "AttachmentItemContextMenuCM";
								} else {
									contextMenuType = "AttachmentItemContextMenu";
								}

								if (items[i].isInstanceOf && items[i].isInstanceOf(ecm.model._SearchTemplateBase)) {
									contextMenuType = searchTemplateContextMenuType;
								}
							} else if (this.context && this.context == "PropertiesVersions") {
								if (items[i].repository.type == "cm") {
									contextMenuType = "VersionsCMContextMenu";
								} else if (items[i].repository.type == "box") {
									contextMenuType = "VersionsBoxContextMenu";
								} else {
									contextMenuType = "VersionsContextMenu";
								}
							} else if (items[i].isInstanceOf && items[i].isInstanceOf(ecm.model._SearchTemplateBase)) {
								if (contextMenuType == "ItemContextMenu") {
									break;
								} else {
									contextMenuType = searchTemplateContextMenuType;
								}
							} else {
								contextMenuType = "ItemContextMenu";
							}
						} else {
							if (this.folderContextMenuDef) {
								contextMenuType = this.folderContextMenuDef;
							} else if (this._hasInstanceOfClass(parentFolders, ecm.model.AttachmentItem)) {
								if (items[i].repository.type == "cm") {
									contextMenuType = "AttachmentFolderContextMenuCM";
								} else {
									contextMenuType = "AttachmentFolderContextMenu";
								}

							} else {
								if (this.setType == "teamspaceRuntime") {
									if (items[i].repository.type == "cm") {
										contextMenuType = "TeamspaceSubFolderContextMenuCM";
									} else {
										contextMenuType = "TeamspaceSubFolderContextMenu";
									}
								} else {
									if (items[i].repository.type == "cm") {
										contextMenuType = "FolderContextMenuCM";
									} else {
										contextMenuType = "FolderContextMenu";
									}
								}
							}
							break;
						}
					}
					// Need to restrict actions for folders and items for system objects and mixed item types
					if (contextMenuType == "ItemContextMenu" || contextMenuType == "FolderContextMenu") {
						// Single system item context menu
						if (items.length == 1 && items[0].isSystemItem()) {
							contextMenuType = "SystemItemContextMenu";
						}
						// Mix item types context menu
						if (items.length > 1) {
							var allDocuments = true;
							for (var i = 0; i < items.length && allDocuments; i++) {
								if (items[i].isFolder() || items[i].isSystemItem()) {
									allDocuments = false;
								}
							}
							if (!allDocuments) {
								var allFolders = true;
								for (var i = 0; i < items.length && allFolders; i++) {
									if (!items[i].isFolder()) {
										allFolders = false;
									}
								}
								if (!allFolders) {
									contextMenuType = "MixItemsContextMenu";
								}
							}
						}
					}
				}
			}
			return contextMenuType;
		},

		/**
		 * Loads the context menu actions that are appropriate for the list of items.
		 * 
		 * @param items
		 *            An array of {@link ecm.model.Item} objects or derivations of Item.
		 * @param callback
		 *            A callback function to be called after the context menu is loaded.
		 */
		loadContextMenu: function(items, callback) {
			if (callback) {
				var firstItem = items[0];
				if (firstItem && firstItem.retrieveUserPrivileges) {
					firstItem.retrieveUserPrivileges(lang.hitch(this, function() {
						ecm.model.desktop.loadMenuActions(this.getActionsMenuItemsType(items), callback);
					}));
				} else if (firstItem && firstItem.isInstanceOf(ecm.model.WorkItem) && firstItem.repository.type == "cm" && firstItem.repository.actionListEnabled && firstItem._retrieveActionList) {
					firstItem._retrieveActionList(lang.hitch(this, function() {
						ecm.model.desktop.loadMenuActions(this.getActionsMenuItemsType(items), callback);
					}));
				}else {
					ecm.model.desktop.loadMenuActions(this.getActionsMenuItemsType(items), callback);
				}
			}
		},

		/**
		 * @private Used by getActionsMenuItemsType method.
		 */
		_getParentFolders: function() {
			var root = this.parentFolder;
			var array = [];
			while (root) {
				array.push(root);
				var parent = root.parentFolder ? root.parentFolder : root.parent;
				if (parent) {
					root = parent;
				} else {
					break;
				}
			}
			return array;
		},

		/**
		 * @private Used by getActionsMenuItemsType method.
		 */
		_hasInstanceOfClass: function(objArray, classObj) {
			for ( var i in objArray) {
				if (objArray[i].isInstanceOf && objArray[i].isInstanceOf(classObj)) {
					return true;
				}
			}
			return false;
		},

		/**
		 * Returns a string value for the toolbar type to be loaded based on the parent object of this result set.
		 */
		getToolbarDef: function() {
			if (this.toolbarDef) {
				return this.toolbarDef;
			} else {
				var toolbarDef = "ContentListToolbar";
				if (this.searchTemplate != null) {
					// Note: Do not move this if statement bellow parentFolder because searches set the parentFolder
					toolbarDef = "SearchResultsToolbar";
				} else if (this.parentFolder && this.parentFolder.isInstanceOf) {
					if (this.parentFolder.isInstanceOf(ecm.model.ProcessInbasket)) {
						toolbarDef = "InbasketToolbarP8";
					} else if (this.parentFolder.isInstanceOf(ecm.model.Worklist)) {
						toolbarDef = "InbasketToolbar";
					} else if (this.parentFolder.isInstanceOf(ecm.model.AttachmentItem)) {
						toolbarDef = "AttachmentToolbar";
					} else if (this.setType == "teamspaceRuntime" || this.teamspaceId) {
						toolbarDef = "TeamspaceContentListToolbar";
					}
				} else if (this.context && this.context == "PropertiesVersions") {
					if (this.repository._isBox()) {
						toolbarDef = "";
					} else {
						toolbarDef = "VersionsToolbar";
					}
				} else if (this.setType == "teamspace") {
					toolbarDef = "ManageTeamspacesListToolbar";
				} else if (this.setType == "template") {
					toolbarDef = "ManageTemplatesListToolbar";
				} else if (this.setType == "entryTemplate") {
					toolbarDef = "ManageEntryTemplatesListToolbar";
				} else if (this.setType == "checkedOutItems") {
					toolbarDef = "MyCheckoutsToolbar";
				} else if (this.setType == "contentElement") {
					toolbarDef = "ContentElementToolbar";
				}

				return toolbarDef;
			}
		},

		/**
		 * Loads the toolbar for the toolbar definition specified.
		 * 
		 * @param callback
		 *            A callback function called after the toolbar has been loaded.
		 */
		loadToolbar: function(callback) {
			if (this.hasToolbar && callback) {
				ecm.model.desktop.loadMenuActions(this.getToolbarDef(), callback);
			}
		}
	});

	/**
	 * Creates a new instance of {@link ecm.model.ResultSet}.
	 * 
	 * @param json
	 *            Parameters used to construct the {@link ecm.model.ResultSet} object.
	 */
	var createResultSet = function(json) {
		return new ResultSet(json);
	};

	ContentItem.createResultSet = createResultSet;
	WorkItem.createResultSet = createResultSet;
	Worklist.createResultSet = createResultSet;
	ProcessInbasket.createResultSet = createResultSet;

	return ResultSet;
});
