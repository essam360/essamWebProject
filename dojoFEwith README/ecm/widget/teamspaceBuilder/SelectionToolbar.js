/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/dom-style",
	"dojo/dom-class",
	"dojo/window",
	"dijit/_Widget",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/form/Button",
	"dijit/layout/ContentPane",
	"dijit/registry",
	"dijit/Tooltip",
	"idx/html",
	"ecm/Messages",
	"ecm/widget/teamspaceBuilder/Pane",
	"ecm/model/Desktop",
	"ecm/model/Repository",
	"dojo/text!./templates/SelectionToolbar.html"
],

function(declare, //
lang, //
domStyle, //
domClass, //
window, //
_Widget, //
_TemplatedMixin, //
_WidgetsInTemplateMixin, //
Button, //
ContentPane, //
registry, //
Tooltip, //
html, //
Messages, //
Pane, //
Desktop, //
Repository, //
template) {

	/**
	 * @private Part of TeamspaceBuilder widget
	 * @name ecm.widget.teamspaceBuilder.SelectionToolbar
	 * @class Provides a toolbar that supports selection of multiple items in teamspace builder.
	 * @augments ecm.widget.teamspaceBuilder.Pane
	 */
	return declare("ecm.widget.teamspaceBuilder.SelectionToolbar", [
		Pane
	], {
		/** @lends ecm.widget.teamspaceBuilder.SelectionToolbar.prototype */

		templateString: template,

		messages: ecm.messages,
		showCreateButton: true,
		showAddButton: false,
		showMakeDefaultButton: false,
		showEditButton: false,
		showMakeAvailableButton: false,

		createButtonLabel: "Change me",
		addButtonLabel: "Change me",

		constructor: function() {
			this.messages = ecm.messages;
		},

		postCreate: function() {
			this.inherited(arguments);
			this.connect(this.getModel(), "onChange", function() {
				this.updateToolbarState();
			});

			if (!this.showCreateButton) {
				this.createNew.domNode.style.display = "none";
			}

			if (!this.showAddButton) {
				this.addNew.domNode.style.display = "none";
			}

			if (!this.showMakeDefaultButton) {
				this.makeDefaultButton.domNode.style.display = "none";
			}

			if (!this.showEditButton) {
				this.editButton.domNode.style.display = "none";
			}

			if (!this.showMakeAvailableButton) {
				this.makeAvailable.domNode.style.display = "none";
			}

			var makeAvailableButtonToolTip = new Tooltip({
				connectId: [
					this.makeAvailable.domNode
				],
				label: html.escapeHTML(ecm.messages.workspacebuilder_selection_make_role_available_tooltip)
			});

		},

		postMixInProperties: function() {

		},

		onRemove: function() {

		},

		onMakeDefault: function() {

		},

		onCreateNewItem: function() {

		},

		onAddNewItem: function() {

		},

		onEdit: function() {

		},

		onMakeAvailable: function() {

		},

		onMoveOrderUp: function() {
		},

		onMoveOrderDown: function() {
		},

		setMakeDefaultLabel: function(label) {
			this.makeDefaultButton.set('label', label);
		},

		updateButtons: function(selectionCount) {
			this.removeButton.set('disabled', selectionCount == 0);
			this.editButton.set('disabled', selectionCount != 1);
			this.moveOrderUpButton.set('disabled', selectionCount == 0);
			this.moveOrderDownButton.set('disabled', selectionCount == 0);
			if (this.showMakeDefaultButton) {
				this.makeDefaultButton.set('disabled', selectionCount != 1);
			}
			if (this.showMakeAvailableButton) {
				this.makeAvailable.set('disabled', selectionCount != 1);
			}
		}

	});
});
