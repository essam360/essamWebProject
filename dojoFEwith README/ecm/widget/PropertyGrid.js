/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/sniff",
	"dojo/dom-construct",
	"dojo/string",
	"idx/html",
	"idx/grid/PropertyGrid"
],

function(declare, //
lang, //
has, //
domConstruct, //
string, //
idxHtml, //
PropertyGrid) {

	/**
	 * @name ecm.widget.PropertyGrid
	 * @class Provides a widget with title that announces the text using JAWS.
	 * @augments idx/grid/PropertyGrid
	 * @private
	 */
	return declare("ecm.widget.PropertyGrid", [
		PropertyGrid
	], {
		/** @lends ecm.widget.PropertyGrid.prototype */

		/**
		 * @private Enhance idx's rebuild rows method to add a aria-label so that JAWS announces the value.
		 */
		_rebuildRows: function() {
			this.inherited(arguments);
			if (this._started) {
				for ( var index = 0; index < this._properties.length; index++) {
					var row = this._rows[index];
					var prop = this._properties[index];
					row.formatter.set("textDir", has("text-direction"));
					var ariaLabel = this.data[prop.propName];
					if (has("ie") || has("trident")) {
						ariaLabel = this._getLabel(prop.propName) + this._resources.labelFieldSeparator + " " + ariaLabel;
					}
					row.formatter.focusNode.setAttribute("aria-label", ariaLabel);
				}
			}
		}
	});
});
