/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array",
	"dojo/aspect",
	"dojo/dom-class",
	"dojo/_base/sniff",
	"dijit/_Widget",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/form/Button",
	"dijit/layout/ContentPane",
	"dijit/layout/TabContainer",
	"idx/layout/BorderContainer",
	"ecm/MessagesMixin",
	"ecm/widget/admin/_NavigatorAdminTabBase",
	"idx/layout/TitlePane",
	"ecm/model/admin/IconMappingData",
	"ecm/widget/admin/SettingIconMapping",
	"ecm/widget/dialog/MessageDialog",
	"dojo/text!./templates/TabIconMapping.html"
], //

function(declare, lang, array, aspect, domClass, has, _Widget, _TemplatedMixin, _WidgetsInTemplateMixin, Button, ContentPane, TabContainer, BorderContainer, //
MessagesMixin, _NavigatorAdminTabBase, TitlePane, IconMappingData, SettingIconMapping, MessageDialog, template) {

	/**
	 * @private Part of the NavigatorAdminPane widget.
	 * @name ecm.widget.admin.TabIconMapping
	 * @class Provides a widget that contains the widgets that are used to set values for the icon mapping.
	 * @since 2.0.3
	 */
	return declare("ecm.widget.admin.TabIconMapping", [
		_NavigatorAdminTabBase,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		MessagesMixin
	], {
		/** @lends ecm.widget.admin.TabIconMapping.prototype */

		templateString: template,
		widgetsInTemplate: true,
		_SECURITY_TOPIC: {
			category: "iconMapping.iconMapping"
		},

		/**
		 * Overwritten to initialize this widget.
		 */
		initialize: function() {
			this.iconMappingData = IconMappingData.createIconMappingData(this._SECURITY_TOPIC);
			this._init = false;
			this._disableSave();
			this._disableReset();
			this.own(aspect.after(this.iconMapping, "onMarkDirty", lang.hitch(this, function() {
				if (this._init) {
					this._markDirty();
				}
			}), true));
			this._loadData();
		},

		/**
		 * Overwritten to load the application configuration data from the database.
		 */
		_loadData: function() {
			this.iconMappingData.loadData(lang.hitch(this, function() {
				this.iconMapping.setData(this.iconMappingData);
				this.iconMapping.loadData();
				setTimeout(lang.hitch(this, function() {
					this._init = true;
					this.resize();
					this._checkSave();
				}), 200);
			}));
		},

		uninitialize: function() {
			if (this._messageDialog) {
				this._messageDialog.destroy();
				delete this._messageDialog;
			}
		},
		
		/**
		 * Overwritten to return if it is resetting the fields to the original values.
		 */
		_isResetingFields: function() {
			return this.iconMapping.isResetingFields();
		},

		/**
		 * Overwritten to actually save the data and invoke onComplete() with the status.
		 */
		_saveData: function(/* function(success) */onComplete, closingAfterSave) {
			this.iconMapping.loadWithFieldValues();
			this.iconMappingData.save(lang.hitch(this, function() {
				if (onComplete) {
					onComplete(true);
				}
				if (this._messageDialog) {
					this._messageDialog.destroy();
				}
				this._messageDialog = new MessageDialog({
					text: this.messages.admin_refresh_message
				});
				this._messageDialog.show();
			}));
		},

		/**
		 * Resize.
		 */
		resize: function() {
			this.borderContainer.resize();
			this.inherited(arguments);
		},

		/**
		 * Overwritten to check if all fields are valid.
		 */
		_validateData: function() {
			return this.iconMapping.validateData();
		}

	});
});
