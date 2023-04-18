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
	"dojo/Deferred",
	"dijit/_Widget",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/form/Button",
	"dijit/layout/ContentPane",
	"dijit/layout/TabContainer",
	"idx/layout/BorderContainer",
	"ecm/MessagesMixin",
	"ecm/widget/admin/_NavigatorAdminTabBase",
	"ecm/widget/admin/AccessRoles",
	"ecm/model/admin/RolesData",
	"idx/layout/TitlePane",
	"dojo/text!./templates/TabRoles.html"
], //

function(declare, lang, array, aspect, domClass, has, Deferred, _Widget, _TemplatedMixin, _WidgetsInTemplateMixin, Button, ContentPane, TabContainer, BorderContainer, //
MessagesMixin, _NavigatorAdminTabBase, AccessRoles, RolesData, TitlePane, template) {

	/**
	 * @private Part of the NavigatorAdminPane widget.
	 * @name ecm.widget.admin.TabOnDemand
	 * @class Provides a widget that contains the widgets that are used to set values for OnDemand.
	 * @since 2.0.3
	 */
	return declare("ecm.widget.admin.TabRoles", [
		_NavigatorAdminTabBase,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		MessagesMixin
	], {
		/** @lends ecm.widget.admin.TabRoles.prototype */

		templateString: template,
		widgetsInTemplate: true,
		_SECURITY_TOPIC: {
			category: "roles.roles"
		},

		/**
		 * Overwritten to initialize this widget.
		 */
		initialize: function() {
			this.rolesData = new RolesData(this._SECURITY_TOPIC);
			this.accessRoles._setSecurityTopic(this);
			this._init = false;
			this._disableSave();
			this._disableReset();
			this.own(aspect.after(this.accessRoles, "onMarkDirty", lang.hitch(this, function() {
				this._init && this._markDirty();
			}), true));
			var deferred = this._loadData();
			deferred && deferred.then(lang.hitch(this, function() {
				this._init = true;
				this.resize();
				this._checkSave();
				if (!this.hasModifyRight()) {
					this._checkSecurityRights();
					this.accessRoles._setReadonly();
				}
			}));
		},

		/**
		 * Overwritten to load the application configuration data from the database.
		 */
		_loadData: function() {
			var deferred = new Deferred();
			this.rolesData.loadData(lang.hitch(this, function(response) {
				this.accessRoles.loadData(this.rolesData, deferred);
			}));
			return deferred;
		},

		/**
		 * Overwritten to return if it is resetting the fields to the original values.
		 */
		_isResetingFields: function() {
			return this.accessRoles.isResetingFields();
		},

		/**
		 * Overwritten to actually save the data and invoke onComplete() with the status.
		 */
		_saveData: function(onComplete) {
			this.accessRoles.loadWithFieldValues(this.rolesData);
			this.rolesData.save(lang.hitch(this, function() {
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
			return this.accessRoles.validateData();
		}

	});
});
