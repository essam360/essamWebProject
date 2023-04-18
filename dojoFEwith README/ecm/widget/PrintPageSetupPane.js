/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/layout/ContentPane",
	"ecm/LoggerMixin",
	"dojo/text!./templates/PrintPageSetupPane.html"
], function(declare, //
lang, //
_TemplatedMixin, //
_WidgetsInTemplateMixin, //
ContentPane, //
LoggerMixin, //
template) {
	/**
	 * @name ecm.widget.PrintPageSetupPane
	 * @class Provides a widget that shows the content elements for a document (for P8) or file parts (for CM8).
	 * @augments dijit.layout.ContentPane, dijit._TemplatedMixin, dijit._WidgetsInTemplateMixin, ecm.LoggerMixin
	 */
	return declare("ecm.widget.PrintPageSetupPane", [
		ContentPane,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		LoggerMixin
	], {
		/** @lends ecm.widget.PrintPageSetupPane.prototype */

		templateString: template,
		widgetsInTemplate: true,
		item: null,
		rendered: false,

		postCreate: function() {
			this.inherited(arguments);
		},

		setItem: function(item) {
			this.item = item;
		},

		render: function() {
			this.logEntry("render");

//			if (this.item && !this.rendered) {
//				this.rendered = true;
//			}

			this.logExit("render");
		}
	});
});
