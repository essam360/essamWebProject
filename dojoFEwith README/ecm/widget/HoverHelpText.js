/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/dom-style",
	"dijit/_Widget",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"./HoverHelp",
	"dojo/text!./templates/HoverHelpText.html"
], //
function(declare, domStyle, _Widget, _TemplatedMixin, _WidgetsInTemplateMixin, HoverHelp, template) {
	/**
	 * @name ecm.widget.HoverHelpText
	 * @class Provides a widget that is used to display hover help and text in a grid cell in the user interface.
	 * @augments dijit._Widget
	 */
	return declare("ecm.widget.HoverHelpText", [
		_Widget,
		_TemplatedMixin,
		_WidgetsInTemplateMixin
	], {
		/** @lends ecm.widget.HoverHelpText.prototype */
		templateString: template,
		widgetsInTemplate: true,

		/**
		 * Label to display.
		 */
		label: "",
		/**
		 * Message to display in the hover help.
		 */
		hoverHelpMessage: "",

		postCreate: function() {
			this.inherited(arguments);
			this.text.innerHTML = this.label;
			if (this.hoverHelpMessage) {
				this.hoverHelp.set('message', this.hoverHelpMessage);
			} else {
				domStyle.set(this.hoverHelp.domNode, "display", "none");
			}
		}
	});
});
