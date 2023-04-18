/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/string",
	"dojo/keys",
	"dojo/dom-construct",
	"ecm/widget/listView/modules/FilterData",
	"ecm/widget/listView/gridModules/FilterBar",
	"ecm/widget/FilterTextBox",
	"gridx/modules/Filter"
],

function(declare, lang, string, keys, domConstruct, FilterData, FilterBar, FilterTextBox, Filter) {

	/**
	 * @name ecm.widget.listView.modules.FilterDataServer
	 * @class This content list module provides filter capability. It enhances the FilterData module by allowing the
	 *        user to search the server for results that match the input filter criteria.
	 * @augments ecm.widget.listView.modules.FilterData
	 * @since 2.0.3
	 */

	return declare(FilterData, {
		/** @lends ecm.widget.listView.modules.FilterDataServer.prototype */

		name: 'filterData',

		/**
		 * When the superclass FilterData _modulesLoaded is called, set _isLoadingFilterDataModule to true.
		 */
		_modulesLoaded: function() {
			var t = this, cl = t.contentList;
			t._isLoadingFilterDataModule = true; // Will ignore clearFilter done in the FilterData _modulesLoaded method.
			t._clearInlineMessage();

			t.inherited(arguments);

			var filterBar = cl.getGridModule("filterBar");
			t.aspect(filterBar, "clearFilter", lang.hitch(t, "_onAroundClearFilter"), t, "around");
			t.aspect(filterBar, "applyFilter", lang.hitch(t, "_onAroundApplyFilter"), t, "around");

			if (t._filterBarFilterData) {
				cl.getGridModule("filterBar").filterData = t._filterBarFilterData;
				t._filterBarFilterData = null;
			}
			if (t._filterText) {
				t._filterTextBox.set("value", t._filterText);
				t._filterText = null;
			}

			t._isLoadingFilterDataModule = false;
		},

		/**
		 * @private Clears the in-line message.
		 */
		_clearInlineMessage: function() {
			var t = this, cl = t.contentList;
			var inlineMessage = cl.getContentListModule("inlineMessage");
			if (inlineMessage) {
				inlineMessage.clearMessage();
			}
		},

		/**
		 * @private Sets the in-line message.
		 */
		_setInlineMessage: function(message, type) {
			var t = this, cl = t.contentList;
			var inlineMessage = cl.getContentListModule("inlineMessage");
			if (inlineMessage) {
				inlineMessage.setMessage(message, type);
			}
		},

		/**
		 * @private When clear the filter, if server data is displayed or the continuation data was removed from the
		 *          result set, then refresh the result set.
		 */
		_onAroundClearFilter: function(originalMethod) {
			var t = this, cl = t.contentList;
			var filterBar = cl.getGridModule("filterBar");
			return lang.hitch(t, function() {
				if (t._isLoadingFilterDataModule == undefined || !t._isLoadingFilterDataModule) { // ignore clearFilter if the FilterData module _modulesLoaded method is running.
					if ((t._isSearchingServer == undefined || !t._isSearchingServer)) { // ignore clearFilter if in the middle of querying the server
						var resultSet = cl.getResultSet();
						// If the result set was filtered when the client didn't have all the data, then get the original data from the mid-tier. 
						if ((resultSet._isSearchServerData != undefined && resultSet._isSearchServerData) || (resultSet._hadContinuationData != undefined && resultSet._hadContinuationData)) {
							resultSet.refresh();
						} else {
							originalMethod.apply(filterBar, arguments);
							t._clearInlineMessage();
						}
					}
				}
			});
		},

		/**
		 * @private When apply filter, if the resultSet doesn't have all the data, then display a message indicating the
		 *          user is seeing filtered client data and must click the link to filter search on the server.
		 */
		_onAroundApplyFilter: function(originalMethod) {
			var t = this, cl = t.contentList;
			var filterBar = cl.getGridModule("filterBar");
			return lang.hitch(t, function() {
				var resultSet = cl.getResultSet();
				if ((resultSet.continuationData && (t._isSearchingServer == undefined || !t._isSearchingServer)) || (resultSet._isSearchServerData && resultSet._isSearchServerData) || (resultSet._hadContinuationData != undefined && resultSet._hadContinuationData)) {
					resultSet.continuationData = null; // Remove continuation data from the result set to prevent dynamic paging.
					resultSet._hadContinuationData = true;
					originalMethod.apply(filterBar, arguments);
					t._setInlineMessage(t.getMessageMoreDataOnServer(cl.getGridModule("filterBar")), "alert");
				} else {
					originalMethod.apply(filterBar, arguments);
				}
			});
		},

		/**
		 * When filtering, if the resultSet doesn't have all the data, then display a message indicating the user is
		 * seeing filtered client data and that if they click the link they can filter on all the data.
		 * 
		 * @param filterBar
		 *            The filterBar module.
		 */
		getMessageMoreDataOnServer: function(filterBar) {
			var t = this, cl = t.contentList;
			var message = filterBar.domNode.style.display == "none" ? string.substitute(ecm.messages.teamspace_filter_results, [
				filterBar.model.size()
			]) : "";
			var messageNode = domConstruct.create("span");
			domConstruct.place(document.createTextNode(message + ecm.messages.more_results_on_server + " "), messageNode, "only");
			var href = domConstruct.create("a", {
				href: '#'
			});
			domConstruct.place(document.createTextNode(ecm.messages.search_all_data), href);
			domConstruct.place(href, messageNode);
			href.onkeypress = lang.hitch(t, function(evt) {
				if (evt.keyCode == keys.ENTER) {
					t._searchServer();
				}
			});
			href.onclick = lang.hitch(t, function(evt) {
				t._searchServer();
			});
			return messageNode;
		},

		/**
		 * @private Search the server using the filter criteria.
		 */
		_searchServer: function() {
			var t = this, cl = t.contentList;
			t._clearInlineMessage();

			var filterBar = cl.getGridModule("filterBar");
			filterBar.hide();

			t._filterBarFilterData = dojo.clone(filterBar.filterData);
			t._filterText = t._filterTextBox.get("value");

			t._isSearchingServer = true;
			cl.getResultSet().search(t._getConditionsAsCriteria(), lang.hitch(t, function(newResultSet) {
				newResultSet._isSearchServerData = true;
				cl.setResultSet(newResultSet);
				t._isSearchingServer = false;
				setTimeout(lang.hitch(t, function() {
					t._setInlineMessage(t.getMessageResultsFromServer(), "alert");
				}), 1000);
			}));
		},

		/**
		 * Returns a message indicating the results are filtered by querying the server.
		 */
		getMessageResultsFromServer: function() {
			var t = this, cl = t.contentList;
			var messageNode = domConstruct.create("span");
			domConstruct.place(document.createTextNode(ecm.messages.displaying_filtered_results), messageNode, "only");
			var href = domConstruct.create("a", {
				href: '#'
			});
			domConstruct.place(document.createTextNode(ecm.messages.clear_filter), href);
			domConstruct.place(href, messageNode);
			href.onkeypress = lang.hitch(t, function(evt) {
				if (evt.keyCode == keys.ENTER) {
					t.clearFilter();
				}
			});
			href.onclick = lang.hitch(t, function(evt) {
				t.clearFilter();
			});
			return messageNode;
		},

		/**
		 * @private Returns the filter conditions as criteria to pass up to the server.
		 */
		_getConditionsAsCriteria: function(structure) {
			var t = this, cl = t.contentList;
			if (!structure) {
				structure = cl._getGridStructure();
			}
			var filterBar = cl.getGridModule("filterBar");
			var criteria = {
				type: filterBar.filterData.type && filterBar.filterData.type == "all" ? "AND" : "OR",
				conditions: []
			};
			for ( var i = 0; i < filterBar.filterData.conditions.length; i++) {
				var filterCondition = filterBar.filterData.conditions[i];
				var condition = {
					value: filterCondition.value
				};
				condition.name = this._getNameFromStructure(structure, filterCondition);
				condition.condition = filterCondition.condition ? filterCondition.condition : "contain";
				criteria.conditions.push(condition);
			}
			return criteria;
		},
		
		/**
		 * @private Returns the field value from the structure.
		 */
		_getNameFromStructure: function(structure, filterCondition) {
			for (var i in structure) {
				var data = structure[i];
				if (data.id != undefined && data.id == filterCondition.colId) {
					return data.field;
				}
			}
			return filterCondition.colId && filterCondition.colId > 0 ? structure[filterCondition.colId - 1].field : "{ALL}";
		}

	});
});
