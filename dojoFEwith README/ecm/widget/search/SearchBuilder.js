/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/aspect",
	"dojo/dom-class",
	"dojo/dom-geometry",
	"dijit/_WidgetBase",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/focus",
	"dijit/layout/ContentPane",
	"idx/layout/BorderContainer",
	"../../LoggerMixin",
	"./_SearchBuilderMixin",
	"./BasicSearchDefinition",
	"../listView/ContentList",
	"../../model/SearchTemplate",
	"dojo/text!./templates/SearchBuilder.html"
], function(declare, lang, aspect, domClass, domGeometry, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, focus, ContentPane, BorderContainer, LoggerMixin, _SearchBuilderMixin, BasicSearchDefinition, ContentList, SearchTemplate, template) {

	/**
	 * Constructs a search builder.
	 * 
	 * @name ecm.widget.search.SearchBuilder
	 * @class Provides a widget that is used for the search builder interface. The search builder is used for creating
	 *        and editing searches and for performing ad hoc searches.
	 * @augments dijit._WidgetBase
	 */
	return declare("ecm.widget.search.SearchBuilder", [
		_WidgetBase,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		_SearchBuilderMixin
	], {
		/** @lends ecm.widget.search.SearchBuilder.prototype */

		/**
		 * @deprecated As of release 2.0.2
		 */
		showDocumentInfoPane: true,

		templateString: template,

		postCreate: function() {
			this.inherited(arguments);

			this.connect(this.searchDefinition, "onLoad", function() {
				this.onLoad();
			});
		},

		onLoad: function() {
			if (!this._focused) {
				this._focused = true;
				this._focusNode(this.searchCriteriaHeaderTitleNode);
			}
		},

		/**
		 * @return A {@link ecm.model.SearchTemplate} object being used.
		 */
		getSearchTemplate: function() {
			return this.searchDefinition.searchTemplate;
		}
	});

});
