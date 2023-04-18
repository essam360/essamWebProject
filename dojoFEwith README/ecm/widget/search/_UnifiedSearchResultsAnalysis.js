/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array",
	"dojo/dom-class",
	"dojo/dom-geometry",
	"dojo/store/Memory",
	"dijit/_WidgetBase",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"gridx/Grid",
	"gridx/core/model/cache/Async",
	"gridx/modules/CellWidget",
	"gridx/modules/VScroller",
	"../../LoggerMixin",
	"../../MessagesMixin",
	"../_OptionsLinkMixin",
	"../DropDownDialog",
	"../DropDownLink",
	"../HoverHelp",
	"dojo/text!./templates/_UnifiedSearchResultsAnalysis.html"
], function(declare, lang, array, domClass, domGeometry, Memory, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, Grid, Cache, CellWidget, VScroller, LoggerMixin, MessagesMixin, _OptionsLinkMixin, DropDownDialog, DropDownLink, HoverHelp, template) {

	/**
	 * @private
	 * @name ecm.widget.search._UnifiedSearchResultsAnalysis
	 * @class Provides a widget that displays the search results analysis of a unified search.
	 * @augments dijit._WidgetBase
	 */
	return declare("ecm.widget.search._UnifiedSearchResultsAnalysis", [
		_WidgetBase,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		_OptionsLinkMixin,
		LoggerMixin,
		MessagesMixin
	], {
		/** @lends ecm.widget.search._UnifiedSearchResultsAnalysis.prototype */
		templateString: template,

		constructor: function() {
			if (!this.searchRepositories)
				this.searchRepositories = [];
		},

		setResultSet: function(resultSet) {
			this._resultSet = resultSet;
		},

		onOpen: function() {
			this.inherited(arguments);

			this._createUnifiedSearchResultsAnalysisGrid();
		},

		_createUnifiedSearchResultsAnalysisGrid: function() {
			if (this._grid)
				return;
			if (!this._resultSet)
				return;

			var items = [], maxResultsExceeded = false, hasErrors = false;
			if (this._resultSet && this._resultSet.results instanceof Array && this._resultSet.results.length > 0) {
				array.forEach(this._resultSet.results, lang.hitch(this, function(result) {
					var repo = ecm.model.desktop.getRepository(result.repositoryId);
					var error = result.errors && result.errors.length > 0 ? result.errors[0] : null;
					var item = {
						repository: repo ? repo.name : result.repositoryId,
						resultsFound: error ? "" : result.maximumExceeded ? this.messages.unified_search_maximum_exceeded : result.num_results,
						maximumAllowed: error ? "" : repo && repo._isBox() ? 200 : 500,
						error: error
					};
					items.push(item);
					if (!maxResultsExceeded && result.maximumExceeded)
						maxResultsExceeded = true;
					if (!hasErrors && error)
						hasErrors = true;
				}));
			}
			if (!hasErrors)
				this._headerNode.innerHTML = this.messages.unified_search_analysis_intro_returned_more;
			else if (!maxResultsExceeded)
				this._headerNode.innerHTML = this.messages.unified_search_analysis_intro_partial_failure;
			else
				this._headerNode.innerHTML = this.messages.unified_search_analysis_intro_partial_failure_and_returned_more;

			var store = new Memory({
				idProperty: "repository",
				data: items
			});

			var self = this;
			var layout = [
				{
					field: "error",
					name: " ",
					headerAriaLabel: this.messages.error_message,
					headerClasses: "ecmIconCell",
					width: "17px",
					widgetsInCell: true,
					decorator: function() {
						return "<div data-dojo-type=\"ecm/widget/HoverHelp\" data-dojo-attach-point=\"hoverHelp\" class=\"dijitHidden\"></div>";
					},
					setCellValue: function(gridData, storeData, cellWidget) {
						var item = cellWidget.cell.row.item();
						if (item.error) {
							var hoverHelp = cellWidget.hoverHelp, error = item.error, msg;
							domClass.remove(hoverHelp.domNode, "dijitHidden");
							if (lang.isString(error)) {
								msg = error;
							} else {
								var adminResponse = error.adminResponse && error.adminResponse.length > 0 ? "<p>" + error.adminResponse : "";
								var errorId = (error.messageProductId && error.messageProductId.length > 0 ? error.messageProductId : "CIWEB") + error.number;
								msg = "<span class=\"ecmUnifiedSearchResultsAnalysisDialog_ErrorTitle\">" + error.text + "</span>";
								if (error.explanation && error.explanation.length > 0) {
									msg += error.explanation + (error.userResponse && error.userResponse.length > 0 ? "<p>" + error.userResponse + adminResponse : adminResponse);
								} else if (error.userResponse && error.userResponse.length > 0) {
									msg += error.userResponse + adminResponse;
								}
								msg += "<p><a href=\"" + ecm.model.desktop.getMessageSearchUrl() + errorId + "\" target=\"_blank\">" + errorId + "</a>";
							}
							hoverHelp.set("message", msg);
						}
					}
				},
				{
					field: "repository",
					name: this.messages.repository,
					dataType: "string"
				},
				{
					field: "resultsFound",
					name: this.messages.unified_search_results_found,
					dataType: "number"
				},
				{
					field: "maximumAllowed",
					name: this.messages.unified_search_maximum_allowed,
					dataType: "number"
				}
			];

			this._grid = new Grid({
				cacheClass: Cache,
				store: store,
				structure: layout,
				modules: [
					CellWidget,
					VScroller
				]
			});

			this._analysisGridContainer.appendChild(this._grid.domNode);
			var dim = domGeometry.getContentBox(this._analysisGridContainer);
			this._grid.resize(dim);
			this._grid.startup();
			this._optionsDialog.scheduleResize();
		},

		summarize: function() {
			return "";
		},

		destroy: function() {
			this.inherited(arguments);

			if (this._grid) {
				if (this._grid.domNode) {
					this._grid.destroy();
				}
				delete this._grid;
			}
		}
	});

});
