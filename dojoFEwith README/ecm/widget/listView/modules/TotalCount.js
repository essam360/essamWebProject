/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array",
	"dojo/_base/sniff",
	"dojo/_base/connect",
	"dojo/dom-construct",
	"dojo/string",
	"ecm/widget/listView/modules/_Module",
	"ecm/MessagesMixin"
], //
function(declare, lang, array, has, connect, domConstruct, string, _Module, MessagesMixin) {

	/**
	 * @name ecm.widget.listView.modules.TotalCount
	 * @class This content list module provides shown total count utility.
	 * @augments ecm.widget.listView.modules._Module
	 * @since 2.0.2
	 */

	return declare(_Module, {
		/** @lends ecm.widget.listView.modules.TotalCount.prototype */

		name: 'totalCount',
		_barNode: null,

		/**
		 * Boolean value indicating whether to render a separator bar after the total count information
		 * 
		 * @since 2.0.3.3
		 */
		displaySeparator: false,

		constructor: function() {
			this._label = "";
			this._count = "";
			if (arguments && arguments[1].displaySeparator) {
				this.displaySeparator = arguments[1].displaySeparator;
			}
		},

		getAPIPath: function() {
			return {
				totalCount: this
			};
		},

		preload: function() {
			var t = this, cl = t.contentList;
			t.domNode = domConstruct.create("div", {
				"class": "totalCountContainer"
			});
			t.totalCountArea = domConstruct.create("span", {
				"class": "totalCount"
			});
			domConstruct.place(t.totalCountArea, t.domNode, "only");
			t.batchConnect([
				cl,
				'onSetResultSet',
				'_setupTotalCount'
			], [
				cl,
				'_onChangeResultSet',
				'_setupTotalCount'
			]);
			t.connect(cl, "onModulesLoaded", "_modulesLoaded");
			t._setupTotalCount();
		},

		destroy: function() {
			var t = this;
			this._label = "";
			this._count = "";
			if (t.domNode) {
				domConstruct.destroy(t.domNode);
				t.domNode = null;
				domConstruct.destroy(t._barNode);
				t._barNode = null;
			}
			t.inherited(arguments);
		},

		_modulesLoaded: function() {
			var t = this, cl = t.contentList;
			t.connect(cl.grid.model, "onSizeChange", "_setupTotalCount");
		},

		_createSeparatorBar: function(domNode) {
			if (this._barNode == null) {
				this._barNode = domConstruct.create("span", {
					innerHTML: "|",
					"class": "separatorBarNode"
				});
				if (has("dojo-bidi"))
					domConstruct.place(this._barNode, domNode, "first");
				else
					domConstruct.place(this._barNode, domNode, "last");
			} else {
				this._barNode.style.display = ""; // In case it has display none
			}
		},

		/**
		 * @private Initial logic to clean up the toolbar and creates the buttons.
		 */
		_setupTotalCount: function() {
			var t = this, resultSet = t.contentList.getResultSet();
			if (resultSet) {
				if (resultSet.totalCountType == null || resultSet.totalCountType == "none") {
					if (!resultSet.continuationData && resultSet.items) {
						if (this.displaySeparator) {
							this._createSeparatorBar(t.domNode);
						}
						t.domNode.style.display = "block";
						var countMsg = ecm.messages.total_count_items;
						if (resultSet.items.length == 1) {
							countMsg = ecm.messages.total_count_item;
						}
						t.totalCountArea.innerHTML = resultSet.items.length + " " + countMsg;
					} else {
						if (this.displaySeparator) {
							this._createSeparatorBar(t.domNode);
						}
						t.domNode.style.display = "block";
						t.totalCountArea.innerHTML = string.substitute(ecm.messages.total_count_more_items, [
							resultSet.items.length
						]);
					}
				} else {
					t.totalCountArea.style.display = ""; // Make sure the count area is displayed
					if (this.displaySeparator) {
						this._createSeparatorBar(t.domNode);
					}
					t.domNode.style.display = "block";
					if (resultSet.totalCountType == "total") {
						t.totalCountArea.innerHTML = ecm.messages.search_total_count_type_total + ": " + resultSet.totalCount;
					} else if (resultSet.totalCountType == "threshold") {
						t.totalCountArea.innerHTML = ecm.messages.search_total_count_type_atleast + ": " + resultSet.totalCount;
					}
				}
			} else {
				t.totalCountArea.style.display = "none";
			}
		}
	});
});
