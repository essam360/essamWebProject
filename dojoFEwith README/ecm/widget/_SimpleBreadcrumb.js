/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/event",
	"dojo/_base/sniff",
	"dojo/_base/window",
	"dojo/dom-construct",
	"dijit/_Widget"
], function(declare, event, has, baseWin, domConstruct, _Widget) {
	/**
	 * @name ecm.widget._SimpleBreadcrumb
	 * @class Data used in the breadcrumb.
	 * @augments dijit._Widget
	 * @public
	 */
	return declare("ecm.widget._SimpleBreadcrumb", [
		_Widget
	], {
		/** @lends ecm.widget._SimpleBreadcrumb.prototype */

		label: "",
		title: "",
		labelPrefix: "",
		"class": "simpleBreadCrumb",
		textDir: has("text-direction"),

		/**
		 * Set value to false if you want to allow context menu events to pass through
		 */
		stopContextMenuEvent: true,
		simpleBreadcrumb: null,

		/**
		 * Renders the breadcrumb label.
		 */
		render: function() {
			this.simpleBreadcrumb = domConstruct.create("DIV");
			// Block right-click event, so the browser doesn't show an annoying right-click window
			if (this.stopContextMenuEvent) {
				this.connect(this.simpleBreadcrumb, "oncontextmenu", function(evt) {
					event.stop(evt);
					return false;
				});
			}

			this.simpleBreadcrumb.appendChild(baseWin.doc.createTextNode(this.label));
			if (this.applyTextDir) {
				this.applyTextDir(this.simpleBreadcrumb);
			}
			return this.simpleBreadcrumb;
		},

		/**
		 * Event fired when the breadrumb is clicked.
		 */
		onClick: function(e) {
		}
	});
});
