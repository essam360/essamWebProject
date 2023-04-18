/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"./_ConfigurationObject"
], function(declare, _ConfigurationObject) {

	/**
	 * @name ecm.model.admin.MenuTypeConfig
	 * @class Represents the configuration information for a menu type. This information includes:
	 *        <ul>
	 *        <li>The category of menu represented by this type: toolbar or context menu</li>
	 *        <li>The tooltip for the menu</li>
	 *        </ul>
	 * @augments ecm.model.admin._ConfigurationObject
	 */
	var MenuTypeConfig = declare("ecm.model.admin.MenuTypeConfig", [
		_ConfigurationObject
	], {
		/** @lends ecm.model.admin.MenuTypeConfig.prototype */

		LABEL: "label",
		TOOLTIP: "tooltip",
		CATEGORY: "category",

		constructor: function(id, name) {
			this.logDebug("MenuTypeConfig constructor");
			this._attributes.id = id;
		},

		isToolbar: function() {
			return this.id.indexOf("Toolbar") > -1 ? true : false;
		},

		isContextMenu: function() {
			return this.id.indexOf("ContextMenu") > -1 ? true : false;
		},

		getLabel: function() {
			return this.getValue(this.LABEL);
		},

		setLabel: function(label) {
			this.setValue(this.LABEL, label);
		},

		getTooltip: function() {
			return this.getValue(this.TOOLTIP);
		},

		setTooltip: function(tooltip) {
			this.setValue(this.TOOLTIP, tooltip);
		},

		getCategory: function() {
			return this.getValue(this.CATEGORY);
		},

		setCategory: function(category) {
			this.setValue(this.CATEGORY, category);
		}

	});

	/**
	 * Static function that constructs a menu type config object.
	 * 
	 * @param id
	 *            Menu type identifier.
	 * @memberof ecm.model.admin.MenuTypeConfig
	 */
	MenuTypeConfig.createMenuTypeConfig = function(id) {
		return new MenuTypeConfig(id, "MenuTypeConfig");
	};
	return MenuTypeConfig;
});
