/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/sniff",
	"dojo/dom-style",
	"dojo/window",
	"dijit/_Widget",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/layout/BorderContainer",
	"dijit/Tooltip",
	"dijit/form/ValidationTextBox",
	"ecm/MessagesMixin",
	"ecm/model/Teamspace",
	"ecm/widget/HoverHelp",
	"ecm/widget/RadioButton",
	"ecm/widget/ValidationTextBox",
	"dojo/text!./templates/TeamspacePropertiesPane.html"
],

function(declare, //
has, //
domStyle, //
win, //
_Widget, //
_TemplatedMixin, //
_WidgetsInTemplateMixin, //
BorderContainer, //
Tooltip, //
ValidationTextBox, //
MessagesMixin, //
Teamspace, //
HoverHelp, //
RadioButton, //
EcmValidationTextBox, //
template) {

	/**
	 * @name ecm.widget.TeamspacePropertiesPane
	 * @class Provides a widget that is used to view or edit the properties of a teamspace template.
	 * @augments dijit._Widget
	 */
	return declare("ecm.widget.TeamspacePropertiesPane", [
		_Widget,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		MessagesMixin
	], {
		/** @lends ecm.widget.TeamspacePropertiesPane.prototype */

		templateString: template,
		widgetsInTemplate: true,

		/**
		 * If <code>true</code> then radio buttons will be displayed for setting the template availability.
		 */
		showState: true,

		/**
		 * Constructor
		 */
		constructor: function(args) {
			this.model = args.model;
			if (args.showState) {
				this.showState = args.showState;
			}
		},

		postCreate: function() {
			this.resetPane();
			// hide the state radio buttons:
			if (!this.showState) {
				domStyle.set(this.stateArea, "display", "none");
			}
			this.teamspaceName.setHoverHelp(this.nameHoverHelp);
			this.description.setHoverHelp(this.descriptionHoverHelp);
			this.stateOnlineRadio.setHoverHelp(this.stateHoverHelp);
			this.stateOfflineRadio.setHoverHelp(this.stateHoverHelp);
			this.teamspaceName.set("textDir", has("text-direction"));
			this.description.set("textDir", has("text-direction"));
		},

		postMixInProperties: function() {
			this._setLabels();
		},

		/**
		 * Sets the initial value for the input fields.
		 */
		resetPane: function() {
			this.teamspaceName.set('value', this.model.name);
			this.description.set('value', this.model.desc);
			this.stateOnlineRadio.set('checked', this.model.state != Teamspace.STATE_OFFLINE ? true : false);
			this.stateOfflineRadio.set('checked', this.model.state == Teamspace.STATE_OFFLINE ? true : false);
		},

		/**
		 * @private
		 */
		_setLabels: function() {
			if (this.model.type == "template") {
				this._propertiesTeamspaceName = this.messages.workspacebuilder_properties_templateName;
				this._propertiesTeamspaceDescription = this.messages.workspacebuilder_properties_templateDescription;
				this._propertiesTeamspaceState = this.messages.workspace_properties_templateState;
				this._teamspaceNameTooltip = this.messages.workspacebuilder_template_tooltip_name;
				this._teamspaceDescriptionTooltip = this.messages.workspacebuilder_instance_tooltip_description;
				this._stateTooltip = this.messages.workspace_properties_templateState_tooltip;
				this._missingName = this.messages.workspacebuilder_name_missing_template;
				this._invalidName = this.messages.workspacebuilder_name_invalid_template;
			} else {
				this._propertiesTeamspaceName = this.messages.workspacebuilder_properties_workspaceName;
				this._propertiesTeamspaceDescription = this.messages.workspacebuilder_properties_workspaceDescription;
				this._propertiesTeamspaceState = this.messages.workspace_properties_templateState;
				this._teamspaceNameTooltip = this.messages.workspacebuilder_instance_tooltip_name;
				this._teamspaceDescriptionTooltip = this.messages.workspacebuilder_instance_tooltip_description;
				this._stateTooltip = this.messages.workspace_properties_templateState_tooltip;
				this._missingName = this.messages.workspacebuilder_name_missing;
				this._invalidName = this.messages.workspacebuilder_name_invalid;
			}

		},

		/**
		 * Validates the current settings.
		 * 
		 * @param focus
		 *            If <code>true</code> and if there are errors, focus is set on the field that has the error.
		 * @return If there are errors, then the field that has the error is returned.
		 */
		validate: function(focus) {
			focus = focus == undefined ? true : false;
			var errorField = null;
			if (!this.teamspaceName.isValid()) {
				errorField = this.teamspaceName;
			}
			if (errorField && focus) {
				setTimeout(function() {
					// Scroll into view before setting focus so that tooltips are not dismissed by the scroll.
					win.scrollIntoView(errorField.domNode);
					errorField.focus();
				}, 300);
			}
			return errorField;
		},

		/**
		 * Saves the changes to the teamspace object.
		 */
		saveChanges: function() {
			this.model.name = this.teamspaceName.get("value");
			this.model.desc = this.description.get("value");
			if (this.showState) {
				if (this.stateOnlineRadio.checked) {
					this.model.state = Teamspace.STATE_PUBLISHED;
				} else {
					this.model.state = Teamspace.STATE_OFFLINE;
				}
			}
			this.model.onChange(this.model);
			this.model.onNameChange(this.model);
			this.onChange();

		},

		/**
		 * Callback function called when the teamspace is updated.
		 */
		onChange: function() {
		}
	});
});
