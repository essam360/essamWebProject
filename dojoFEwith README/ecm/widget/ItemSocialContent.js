/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array",
	"dojo/_base/Deferred",
	"dojo/_base/event",
	"dojo/aspect",
	"dojo/dom-geometry",
	"dojo/dom-style",
	"dojo/keys",
	"dojo/on",
	"dijit/_WidgetBase",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/layout/BorderContainer",
	"../MessagesMixin",
	"../LoggerMixin",
	"dojo/text!./templates/ItemSocialContent.html"
],

function(declare, //
lang, //
array, //
Deferred, //
event, //
aspect, //
domGeometry, //
domStyle, //
keys, //
on, //
_WidgetBase, //
_TemplatedMixin, //
_WidgetsInTemplateMixin, //
BorderContainer, //
MessagesMixin, //
LoggerMixin, //
template) {

	/**
	 * @name ecm.widget.ItemSocialContent
	 * @class Provides a widget that is used to view and edit social contents of an item.
	 * @augments _WidgetBase
	 * @since 2.0.3
	 */
	return declare("ecm.widget.ItemSocialContent", [
		_WidgetBase,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		MessagesMixin,
		LoggerMixin
	], {
		/** @lends ecm.widget.ItemSocialContent.prototype */
		templateString: template,

		item: null,

		/**
		 * Overrides <code>postCreate</code> to make necessary event connections.
		 */
		postCreate: function() {
			this.inherited(arguments);
			this.watch("item", lang.hitch(this, function() {
				this.recommendations.set("count", this.item.getValue("ClbRecommendationCount"));
				this.recommendations.set("item", this.item);
				this.downloadCount.set("count", this.item.getValue("ClbDownloadCount"));
				this.downloadCount.set("item", this.item);
			}));
		}
	});

});
