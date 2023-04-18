/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array",
	"dojo/dom-style",
	"dojo/dom-class",
	"dojo/dom-attr",
	"dojo/dom-construct",
	"dojo/window",
	"dijit/_Widget",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/registry",
	"ecm/Messages",
	"ecm/Logger",
	"idx/html",
	"ecm/model/Teamspace"
],

function(declare, //
lang, //
array, //
domStyle, //
domClass, //
attr, //
domConstruct, //
window2, //
_Widget, //
_TemplatedMixin, //
_WidgetsInTemplateMixin, //
registry, //
Messages, //
Logger, //
idxHtml, //
Teamspace) {

	/**
	 * @private Part of TeamspaceBuilder widget
	 * @name ecm.widget.teamspaceBuilder.Pane
	 * @class Provides the base class from which all teamspace builder panes are derived.
	 * @augments dijit._Widget
	 */
	return declare("ecm.widget.teamspaceBuilder.Pane", [
		_Widget,
		_TemplatedMixin,
		_WidgetsInTemplateMixin
	], {
		/** @lends ecm.widget.teamspaceBuilder.Pane.prototype */

		// Parameters
		templateCssPath: undefined,
		widgetsInTemplate: true,
		model: null,
		type: "",
		parentId: "",
		parent: null,
		tooltipPosition: null,

		constructor: function() {
			if (!this.parent) {
				this.parent = {};
			}
			if (!this.tooltipPosition) {
				this.tooltipPosition = [
					"below",
					"above"
				];
			}
			this.messages = ecm.messages;
		},

		/* hide teamspace instance data from GUI */
		configureInstanceBuilderParts: function() {
			if (this.type == Teamspace.INSTANCE) {
				this.instance.style.display = "block";
				this.templateSection.style.display = "none";
			} else {
				this.instance.style.display = "none";
				this.templateSection.style.display = "block";
			}
		},

		init: function() {
			this.parent = registry.byId(this.parentId);
			this.setModel(this.parent.getModel());
		},

		/* Sets the teamspace model */
		setModel: function(/* ecm.model.Teamspace */model) {
			this.model = model;
		},
		openNewHelpWindow: function openNewHelpWindow(file) {
			var left = 100;
			var top = 100;
			var width = 860;
			var height = 600;
			var url = ecm.model.desktop.getHelpUrl(true) + file;
			var newWindow = window.open(url, "_blank", "status=yes,location=no,scrollbars=no,menubar=no,toolbar=no,personalbar=no,resizable=yes,left=" + left + ",top=" + top + ",width=" + width + ",height=" + height + "\"", true);

		},
		_filterArrayItems: function(list, itemsToFilter) {
			var filteredItems = [];
			var found = false;
			for ( var i = 0; i < list.length; i++) {
				for ( var j = 0; j < itemsToFilter.length; j++) {
					if (itemsToFilter[j].id == list[i].id) {
						found = true;
					}
				}
				if (!found)
					filteredItems.push(list[i]);

				found = false;
			}
			return filteredItems;
		},

		_filterRolesArray: function(list, itemsToFilter) {
			var filteredItems = [];
			var found = false;
			for ( var i = 0; i < list.length; i++) {
				for ( var j = 0; j < itemsToFilter.length; j++) {
					if (itemsToFilter[j].id == list[i].id || (itemsToFilter[j].preDefined == list[i].preDefined && itemsToFilter[j].name == list[i].name)) {
						found = true;
					}
				}
				if (!found)
					filteredItems.push(list[i]);

				found = false;
			}
			return filteredItems;
		},
		/**
		 * @private
		 */
		_displayWarning: function(message, invalidItems, usePaths) {
			var warningMessage = idxHtml.escapeHTML(message);
			this._infoText.innerHTML = warningMessage;
			var _this = this;
			attr.set(this._infoImage, "alt", warningMessage);
			if (message.length > 0) {
				if (invalidItems && lang.isArray(invalidItems) && invalidItems.length > 0) {
					array.forEach(invalidItems, function(invalidItem) {
						var typeLabel = invalidItem.type == "folder" ? ecm.messages.workspace_validation_folder : ecm.messages.workspace_validation_document;
						var value = usePaths ? typeLabel + "&nbsp;&nbsp;/" + _this.getModel().name + invalidItem.path : invalidItem.name;
						var item = '<div class="messageText">' + value + '</div>';
						domConstruct.place(item, _this._items);
					});
					this._infoPane.style.display = "block";
				} else {
					this._infoPane.style.display = "none";
				}
			} else {
				this._infoPane.style.display = "none";
			}
		},
		/* returns template or instance */
		getModel: function() {
			return this.model;
		},

		/* returns the parent widget  */
		getParent: function() {
			return this.parent;
		}
	});
});
