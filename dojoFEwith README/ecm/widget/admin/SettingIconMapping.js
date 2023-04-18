/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/aspect",
	"dijit/_Widget",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"ecm/MessagesMixin",
	"ecm/widget/admin/SettingMimeTypeIconMapping",
	"ecm/widget/admin/SettingStatusIconMapping",
	"idx/layout/BorderContainer",
	"idx/layout/TitlePane",
	"dijit/layout/ContentPane",
	"dojo/text!./templates/SettingIconMapping.html"
], //

function(declare, lang, aspect, _Widget, _TemplatedMixin, _WidgetsInTemplateMixin, MessagesMixin, SettingMimeTypeIconMapping, SettingStatusIconMapping, BorderContainer, TitlePane, ContentPane, template) {

	/**
	 * @private Part of the NavigatorAdminPane widget.
	 * @name ecm.widget.admin.SettingIconMapping
	 * @class Provides a widget that is used view and edit the mappings of icons to the MIME types and states that they
	 *        represent.
	 */
	return declare("ecm.widget.admin.SettingIconMapping", [
		_Widget,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		MessagesMixin
	], {
		/** @lends ecm.widget.admin.SettingIconMapping.prototype */

		templateString: template,
		widgetsInTemplate: true,

		postCreate: function() {
			this.inherited(arguments);
			this.own(aspect.after(this.mimeTypeMapping, "onMarkDirty", lang.hitch(this, "onMarkDirty"), true));
			this.own(aspect.after(this.statusIcons, "onMarkDirty", lang.hitch(this, "onMarkDirty"), true));
			
			this.statusMappingTitlePane.set("aria-describedby", this.statusIcons.instructions.id);
			this.statusMappingTitlePane.set("title", this.messages.admin_icon_state_twisty);
			this.mimeTypeMappingTitlePane.set("aria-describedby", this.mimeTypeMapping.instructions.id);
			this.mimeTypeMappingTitlePane.set("title", this.messages.admin_icon_mapping_twisty);
		},

		setData: function(settingsData) {
			this.settingsData = settingsData;
			this.mimeTypeMapping.setData(settingsData);
			this.statusIcons.setData(settingsData);
		},

		// Called when the user hits the Reset button 
		loadData: function() {
			this.mimeTypeMapping.loadData();
			this.statusIcons.loadData();
		},

		// overridable
		onMarkDirty: function() {
		},

		loadWithFieldValues: function(adminModel) {
			this.settingsData.mimeTypeIconData = this.mimeTypeMapping.getMappingData();
			this.settingsData.statusIconData = this.statusIcons.getIconData();
		},

		isResetingFields: function() {
			var isResetingFields = this.mimeTypeMapping.isResetingFields();
			if (isResetingFields) {
				isResetingFields = this.statusIcons.isResetingFields();
			}
			return isResetingFields;
		},

		// Determines if the save button should be enabled 
		validateData: function() {
			var isValid = this.mimeTypeMapping.validateData();
			if (isValid) {
				isValid = this.statusIcons.validateData();
			}
			return isValid;
		},

		resize: function() {
			this.borderContainer.resize();
		}
	});

});
