/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/dom-style",
	"dijit/_WidgetBase",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"../../LoggerMixin",
	"../../MessagesMixin",
	"../../model/UnifiedSearchTemplate",
	"../_OptionsLinkMixin",
	"../DropDownDialog",
	"../DropDownLink",
	"./SelectedRepositoriesResultSet",
	"./UnifiedSearchRepositoriesList",
	"dojo/text!./templates/UnifiedSearchScope.html"
], function(declare, domStyle, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, LoggerMixin, MessagesMixin, UnifiedSearchTemplate, _OptionsLinkMixin, DropDownDialog, DropDownLink, SelectedRepositoriesResultSet, UnifiedSearchRepositoriesList, template) {

	/**
	 * @private
	 * @name ecm.widget.search.UnifiedSearchScope
	 * @class Provides a widget that displays the repositories included a unified search.
	 * @augments dijit._WidgetBase
	 */
	return declare("ecm.widget.search.UnifiedSearchScope", [
		_WidgetBase,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		_OptionsLinkMixin,
		LoggerMixin,
		MessagesMixin
	], {
		/** @lends ecm.widget.search.UnifiedSearchScope.prototype */
		templateString: template,

		searchRepositories: null,
		_listBuilt: false,

		constructor: function() {
			if (!this.searchRepositories)
				this.searchRepositories = [];
		},

		postCreate: function() {
			this.inherited(arguments);

			domStyle.set(this._unifiedSearchScopeContent.contentList.topContainer.domNode, "display", "none");
		},

		onOpen: function() {
			this.inherited(arguments);

			if (!this._listBuilt && this.searchRepositories instanceof Array && this.searchRepositories.length > 0) {
				var resultSet = new SelectedRepositoriesResultSet({
					rows: this.searchRepositories
				});
				this._unifiedSearchScopeContent.setResultSet(resultSet);
				this._listBuilt = true;
			}
		},

		summarize: function() {
			return "";
		}
	});

});
