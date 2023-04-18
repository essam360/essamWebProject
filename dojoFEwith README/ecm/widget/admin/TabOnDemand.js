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
	"ecm/model/admin/SettingsData",
	"ecm/model/admin/SettingsConfig",
	"ecm/widget/admin/SettingOnDemand",
	"dojo/text!./templates/TabOnDemand.html"
], //

function(declare, lang, array, aspect, domClass, has, _Widget, _TemplatedMixin, _WidgetsInTemplateMixin, Button, ContentPane, TabContainer, BorderContainer, //
MessagesMixin, _NavigatorAdminTabBase, TitlePane, SettingsData, SettingsConfig, SettingOnDemand, template) {

	/**
	 * @private Part of the NavigatorAdminPane widget.
	 * @name ecm.widget.admin.TabOnDemand
	 * @class Provides a widget that contains the widgets that are used to set values for OnDemand.
	 * @since 2.0.3
	 */
	return declare("ecm.widget.admin.TabOnDemand", [
		_NavigatorAdminTabBase,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		MessagesMixin
	], {
		/** @lends ecm.widget.admin.TabOnDemand.prototype */

		templateString: template,
		widgetsInTemplate: true,
		_SECURITY_TOPIC: {
			category: "ondemand.ondemand"
		},

		/**
		 * Overwritten to initialize this widget.
		 */
		initialize: function() {
			this.settingsData = SettingsData.createSettingsData(this._SECURITY_TOPIC);
			this.onDemand._setSecurityTopic(this);
			this._init = false;
			this._disableSave();
			this._disableReset();
			this.own(aspect.after(this.onDemand, "onMarkDirty", lang.hitch(this, function() {
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
			this.settingsData.loadData(lang.hitch(this, function() {
				this.onDemand.odRepositoryExists = this.settingsData.odRepositoryExists;
				this.onDemand.loadData(this.settingsData.onDemand);
				setTimeout(lang.hitch(this, function() {
					this._init = true;
					this.resize();
					this._checkSave();
				}), 200);
			}));
		},

		/**
		 * Overwritten to return if it is resetting the fields to the original values.
		 */
		_isResetingFields: function() {
			return this.onDemand.isResetingFields();
		},

		/**
		 * Overwritten to actually save the data and invoke onComplete() with the status.
		 */
		_saveData: function(onComplete) {
			this.onDemand.loadWithFieldValues(this.settingsData.onDemand);
			this.settingsData.saveOnDemand(lang.hitch(this, function() {
				if (onComplete) {
					onComplete(true);
				}
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
			return this.onDemand.validateData();
		}

	});
});
