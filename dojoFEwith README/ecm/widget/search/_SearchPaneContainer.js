/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array",
	"dojo/_base/window",
	"dojo/dom-attr",
	"dojo/dom-class",
	"dojo/dom-construct",
	"dojo/dom-geometry",
	"dojo/dom-style",
	"dojo/keys",
	"../../LoggerMixin",
	"../../model/ResultSet",
	"../../model/UnifiedSearchTemplate",
	"./_UnifiedSearchResultsAnalysis"
], function(declare, lang, array, win, domAttr, domClass, domConstruct, domGeometry, domStyle, keys, LoggerMixin, ResultSet, UnifiedSearchTemplate, _UnifiedSearchResultsAnalysis) {

	/**
	 * @private Part of {@link ecm.widget.search.SearchBuilder} and {@link ecm.widget.search.SearchTab} widgets
	 * @name ecm.widget.search._SearchPaneContainer
	 * @class Provides helper functions to manage panes within SearchBuilder and SearchTab widgets.
	 */
	return declare("ecm.widget.search._SearchPaneContainer", [
		LoggerMixin
	], {
		/** @lends ecm.widget.search._SearchPaneContainer.prototype */

		postCreate: function() {
			this.connect(this.searchCriteriaPane, "resize", "resizeSearchCriteria");
			this.connect(this.searchResultsPane, "resize", "resizeSearchResults");
			this.connect(this.searchResults, "setResultSet", function() {
				domClass.add(this.emptySearchResultsPane.domNode, "dijitHidden");
				domClass.remove(this.searchResults.domNode, "dijitHidden");
				setTimeout(lang.hitch(this, this.resizeSearchResults));
				this._setSearchResultsInlineMessage();
			});
			this.connect(this.searchResults, "_onChangeResultSet", function() {
				this._setSearchResultsInlineMessage();
			});
			this.connect(this.searchResults, "onOpenItem", function(item, data) {
				if (item.isInstanceOf && item.isInstanceOf(ecm.model._SearchTemplateBase)) {
					if (!data || !(data.isInstanceOf && data.isInstanceOf(ResultSet))) {
						var openNewTab = data && data.openNewTab ? data.openNewTab : false;
						this.parentPane.openTab({
							tabType: "search",
							repository: item.repository,
							selected: true,
							closable: true,
							openNewTab: openNewTab,
							version: data.version,
							"searchTemplate": item
						});
					}
				}
			});
			this.connect(this.searchResults, "onEditItem", function(item, data) {
				var searchTemplate = item.item ? item.item : item;
				var tabType = searchTemplate.isInstanceOf && searchTemplate.isInstanceOf(ecm.model.UnifiedSearchTemplate) ? "unifiedsearchbuilder" : "searchbuilder";
				this.parentPane.openSearch(tabType, searchTemplate.repository, searchTemplate.generateUUID(), searchTemplate);
			});

			this.connect(this, "onDragStart", function() {
				this._searchCriteriaDimensions = null;
				this._searchResultsDimensions = null;
			});

			this._searchCriteriaNode = this.searchCriteriaHeader.nextSibling.nodeName == "DIV" ? this.searchCriteriaHeader.nextSibling : this.searchCriteriaHeader.nextSibling.nextSibling;
			this._searchResultsNode = this.searchResultsHeader.nextSibling.nodeName == "DIV" ? this.searchResultsHeader.nextSibling : this.searchResultsHeader.nextSibling.nextSibling;
		},

		_setSearchResultsInlineMessage: function() {
			var inlineMessageModule = this.searchResults.getContentListModule("inlineMessage");
			if (!inlineMessageModule)
				return;

			inlineMessageModule.clearMessage();
			var messageNode = this._createSearchResultsInlineMessageNode();
			if (messageNode)
				inlineMessageModule.setMessage(messageNode, messageNode._category || "info");
		},

		_containsUnifiedSearchTemplate: function() {
			return this.searchTemplate && this.searchTemplate.isInstanceOf && this.searchTemplate.isInstanceOf(UnifiedSearchTemplate);
		},

		_createSearchResultsInlineMessageNode: function() {
			var messageNode = null;
			if (this._containsUnifiedSearchTemplate()) {
				messageNode = this._createUnifiedSearchResultsInlineMessageNode();
			}

			return messageNode;
		},

		_createUnifiedSearchResultsInlineMessageNode: function() {
			var resultSet = this.searchResults.getResultSet(), maxResultsExceeded = false, hasErrors = false, msg;
			if (resultSet && resultSet.results instanceof Array && resultSet.results.length > 0) {
				maxResultsExceeded = array.some(resultSet.results, function(result) {
					return result.maximumExceeded;
				});
				hasErrors = array.some(resultSet.results, function(result) {
					return result.errors && result.errors.length > 0;
				});
			}
			if (!maxResultsExceeded && !hasErrors)
				return null;

			var messageNode = domConstruct.create("span");
			if (!hasErrors)
				msg = ecm.messages.unified_search_returned_more;
			else if (!maxResultsExceeded)
				msg = ecm.messages.unified_search_partial_failure;
			else
				msg = ecm.messages.unified_search_partial_failure_and_returned_more;
			domConstruct.place(win.doc.createTextNode(msg + " "), messageNode, "only");
			if (hasErrors)
				messageNode._category = "warning";

			if (this._resultsAnalysis)
				this._resultsAnalysis.destroy();
			this._resultsAnalysis = new _UnifiedSearchResultsAnalysis();
			this._resultsAnalysis.setResultSet(this.searchResults.getResultSet());
			domConstruct.place(this._resultsAnalysis.domNode, messageNode);
			this._resultsAnalysis.startup();

			return messageNode;
		},

		resizeSearchCriteria: function() {
			if (!domClass.contains(this._searchCriteriaNode, "dijitHidden") && !domClass.contains(this._searchResultsNode, "dijitHidden"))
				this._searchCriteriaDimensions = domGeometry.getContentBox(this.searchCriteriaPane.domNode);
		},

		resizeSearchResults: function() {
			var width = domGeometry.getMarginBox(this.searchResultsHeader).w;
			var height = domGeometry.getMarginBox(this.searchContainerNode.id).h - domGeometry.getMarginBox(this.searchCriteriaPane.domNode).h - domGeometry.getMarginBox(this.searchResultsHeader).h - 6;
			height = height < 0 ? 0 : height;
			domGeometry.setMarginBox(this.searchResultsContainer.domNode, {
				w: width,
				h: height
			});
			this.searchResultsContainer.resize();

			if (!domClass.contains(this._searchResultsNode, "dijitHidden") && !domClass.contains(this._searchCriteriaNode, "dijitHidden"))
				this._searchResultsDimensions = domGeometry.getContentBox(this.searchResultsPane.domNode);
		},

		resize: function() {
			this.inherited(arguments);

			var height = domGeometry.getMarginBox(this.searchContainerNode.id).h;
			if (height > 0) {
				domGeometry.setMarginBox(this.mainContainer.domNode, {
					h: height > 0 ? height : 0
				});
				if (!domClass.contains(this._searchResultsNode, "dijitHidden"))
					this._resizeSearchContainerNode(this.searchResultsPane.domNode, this.searchCriteriaPane.domNode);
				if (!domClass.contains(this._searchCriteriaNode, "dijitHidden"))
					this._resizeSearchContainerNode(this.searchCriteriaPane.domNode, domClass.contains(this._searchResultsNode, "dijitHidden") ? this.searchResultsHeader : this.searchResultsPane.domNode);

				this.mainContainer.resize();
			}

		},

		_resizeSearchContainerNode: function(containerNode, otherNode) {
			var builderHeight = domGeometry.getMarginBox(this.searchContainerNode.id).h;
			var height = builderHeight - domGeometry.getMarginBox(otherNode).h - 6;
			if (height > builderHeight)
				height = builderHeight - 6;
			domGeometry.setMarginBox(containerNode, {
				h: height > 0 ? height : 0
			});
		},

		_toggleSearchCriteria: function() {
			this._toggleSearchNode(this._searchCriteriaNode, this.searchCriteriaHeader, this.searchCriteriaPane, this._searchCriteriaDimensions, this.searchCriteriaHeaderTitleNode);
			if (!domClass.contains(this._searchResultsNode, "dijitHidden"))
				this._resizeSearchContainerNode(this.searchResultsPane.domNode, this.searchCriteriaPane.domNode);
			this.resize();
		},

		_toggleSearchResults: function() {
			this._toggleSearchNode(this._searchResultsNode, this.searchResultsHeader, this.searchResultsPane, this._searchResultsDimensions, this.searchResultsHeaderTitleNode);
			if (!domClass.contains(this._searchCriteriaNode, "dijitHidden"))
				this._resizeSearchContainerNode(this.searchCriteriaPane.domNode, this.searchResultsPane.domNode);
			this.resize();
		},

		_toggleSearchNode: function(searchNode, searchHeader, container, dimension, searchTitleNode) {
			if (domClass.contains(searchNode, "dijitHidden")) {
				if (dimension && dimension.h > domGeometry.getMarginBox(searchHeader).h) {
					domGeometry.setContentSize(container.domNode, dimension);
				} else {
					var height = domGeometry.getMarginBox(this.mainContainer.domNode).h;
					var height = (height / 2);
					domGeometry.setMarginBox(container.domNode, {
						h: height > 0 ? height : 0
					});
				}
				domClass.remove(searchHeader, "dijitClosed");
				domClass.add(searchHeader, "dijitOpen");
				domAttr.set(searchTitleNode, "aria-pressed", "true");
				domClass.remove(searchNode, "dijitHidden");
			} else {
				container.domNode.style.height = "auto";
				domClass.remove(searchHeader, "dijitOpen");
				domClass.add(searchHeader, "dijitClosed");
				domAttr.set(searchTitleNode, "aria-pressed", "false");
				domClass.add(searchNode, "dijitHidden");
			}
		},

		destroy: function() {
			this.inherited(arguments);

			if (this._resultsAnalysis)
				this._resultsAnalysis.destroy();
		}
	});

});
