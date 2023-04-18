/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/dom-style",    
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/string",
	"dojo/dom-construct",
	"dojo/_base/array",
	"dojo/dom-attr",
	"dojo/dom-style",
	"dojo/_base/sniff",
	"dojo/dom-class",
	"dojo/aspect",
	"dojo/store/Memory",
	"dojox/uuid/Uuid",
	"dojox/uuid/generateRandomUuid",	
	"dijit/_Widget",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/form/Button",
	"dijit/layout/ContentPane",
	"idx/layout/BorderContainer",
	"dijit/form/DropDownButton",
	"dijit/Dialog",
	"ecm/MessagesMixin",
	"ecm/LoggerMixin",
	"ecm/model/admin/AdminData",
	"ecm/model/admin/RedactionReasonConfig",
	"ecm/widget/admin/_RedactionAdminTabBase",
	"ecm/widget/HoverHelp",
	"ecm/widget/ValidationTextBox",
	"ecm/widget/RadioButton",
	"ecm/widget/Select",
	"dojo/has!dojo-bidi?dojox/string/BidiComplex",
	"dojo/text!./templates/TabRedactionReason.html"
], function(domStyle, declare, lang, string, domConstruct, dojoArray, attr, style, has, domClass, aspect, MemoryStore, Uuid, 	generateRandomUuid,  _Widget, _TemplatedMixin, //
_WidgetsInTemplateMixin, Button, ContentPane, BorderContainer, DropDownButton, Dialog, //
MessagesMixin, LoggerMixin, AdminData, RedactionReasonConfig, _RedactionAdminTabBase, HoverHelp, ValidationTextBox, //
RadioButton, Select, BidiComplex, template) {

	/**
	 * @private Part of the NavigatorAdminPane widget.
	 * @name ecm.widget.admin.TabRedactionReason
	 * @class Provides a tab that is used to add a redaction reason or edit the values for a redaction reason.
	 */
	return declare("ecm.widget.admin.TabRedactionReason", [
		_RedactionAdminTabBase,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		MessagesMixin,
		LoggerMixin
	], {
		/** @lends ecm.widget.admin.TabRedactionReason.prototype */

		templateString: template,
		widgetsInTemplate: true,

		postCreate: function() {
			this.colorList = [];
			this.hoverHelpList = [];

			this.resetButton.set("title", this.messages.reset_hover);

			this._setHoverHelp();
			if (has("dojo-bidi")) {
				this.set("textDir", has("text-direction"));
			}

		},

		destroy: function() {
			this.inherited(arguments);

			if (this.hoverHelpList) {
				dojoArray.forEach(this.hoverHelpList, function(hoverHelp) {
					if (hoverHelp)
						hoverHelp.destroy();
				}, this);
			}
		},

		/**
		 * @private
		 */
		_onReset: function(){
			this.nameField.reset();
			this.descriptionField.reset();			
			this.inherited(arguments);
		},		
		/**
		 * Overwritten to initialize this widget.
		 */
		initialize: function() {
			this._initialized = false;
			this._disableSave();
			this._disableReset();
			var name = this._myAdminModel ? this._myAdminModel.getName() : this.messages.admin_new_reason_code;

			if (this._myAdminModelForCopy && this._myAdminModelForCopy.id) {
				this._myAdminModel = new RedactionReasonConfig("", "");
				this._myAdminModel.copyRedactionReason(this._myAdminModelForCopy);
				var idVal =  new Uuid(generateRandomUuid()).toString().replace(/-/g, '');; 
				this._myAdminModel.setValue("id", idVal);				
				this.action = "copy";
				name = this.messages.admin_new_reason_code;
				this._myAdminModelForCopy = null;
				domStyle.set(this.applicationsSection, "display", "none");
				domStyle.set(this.repositoriesSection, "display", "none");
				domStyle.set(this.idSection, "display",  "none");
			} else if (this._myAdminModel && this._myAdminModel.id) {
				this.id = this._myAdminModel.id;
				this.action = "edit";
			} else {
				this.action = "new";
				domStyle.set(this.applicationsSection, "display", "none");
				domStyle.set(this.repositoriesSection, "display", "none");
				domStyle.set(this.idSection, "display",  "none");
			}

			this._updateName(name);
			this.setTitle(name);
			this.setInstructions(this.getInstructions());
			this._loadData();
			this._checkSave();
			//this._setReadOnlyView();

			setTimeout(lang.hitch(this, function() {
				this._initialized = true;
			}), 300);
		},


		/**
		 * @private
		 */
		_setHoverHelp: function() {
			this.descriptionField.setHoverHelp(this.descriptionFieldHoverHelp);
			this.nameField.setHoverHelp(this.nameFieldHoverHelp);
			this.applicationsField.setHoverHelp(this.applicationsFieldHoverHelp);
			this.repositoriesField.setHoverHelp(this.repositoriesFieldHoverHelp);
			this.idField.setHoverHelp(this.idFieldHoverHelp);
		},

		_loadData: function() {
	
			// Populating any existing data in the  model
			if (this._myAdminModel) {
				this.nameField.set("value", this._myAdminModel.getName());
				this.descriptionField.set("value", this._myAdminModel.getDescription());
				this.applicationsField.set("value", this._myAdminModel.getApplications());
				this.repositoriesField.set("value", this._myAdminModel.getRepositories());
				this.idField.set("value", this._myAdminModel.id);
			}  else {
				this.applicationsField.set("value", this.messages.admin_reason_code_applications_default_value);
				this.repositoriesField.set("value", this.messages.admin_reason_code_repositories_default_value);
				this.nameField.set("value", "");
				this.descriptionField.set("value", "");				
			}

			this.applicationsField.set("disabled", true);
			this.repositoriesField.set("disabled", true);
			this.idField.set("disabled", true);

			this.descriptionField.pattern = '([^"*|<>?:\\\\/])*';
			this.descriptionField.invalidMessage = this.messages.admin_reason_code_description_invalid;
			
			this.nameField.pattern = '([^"*|<>?:\\\\/])*';
			this.nameField.invalidMessage = this.messages.admin_reason_code_name_invalid;
		},

		
		_loadWithFieldValues: function(adminModel) {
			adminModel.setName(this.nameField.get("value"));
			adminModel.setDescription(this.descriptionField.get("value"));
		},

		/**
		 * Overwritten to return if it is resetting the fields to the original values.
		 */
		_isResetingFields: function() {
			return false;
		},

		/**
		 * Overwritten to actually save the data and invoke onComplete() with the status.
		 */
		_saveData: function(/* function(success) */onComplete) {
			if (this.action == "edit" && this._myAdminModel) {
				this._loadWithFieldValues(this._myAdminModel);
				ecm.model.admin.appCfg.updateApplicationRedactionReasonConfig(this._myAdminModel, lang.hitch(this, function(response) {
					this._updateName(this._myAdminModel.getName());
					this.setTitle(this._myAdminModel.getName());
					ecm.model.admin.adminData.onChange(this._myAdminModel);
					if (onComplete)
						onComplete(true);
				}));
			} else {
				var idVal =  new Uuid(generateRandomUuid()).toString().replace(/-/g, '');; 
				var newAdminModel = RedactionReasonConfig.createRedactionReasonConfig(idVal);
				newAdminModel.setValue("id", idVal);
				this._loadWithFieldValues(newAdminModel);
				ecm.model.admin.appCfg.addApplicationRedactionReasonConfig(newAdminModel, lang.hitch(this, function(response) {
					this._myAdminModel = newAdminModel;
					this._updateName(newAdminModel.getName());
					this.setTitle(newAdminModel.getName());
					this.action = "edit";
					this._checkSave();
					this.addedReason(newAdminModel);

					ecm.model.admin.adminData.loadRedactionReasons();
					if (onComplete) {
						onComplete(true);
					}
				}), {
					securityTopic: ecm.model.admin.appCfg.SECURITY_CATEGORY_READACTION_REASONS
				});
			}
		},
		
		addedReason: function(newReason){
		},

		setInstructions: function(msg) {
			this.instructions.appendChild(document.createTextNode(msg));
		},

		getInstructions: function() {
			return this.messages.admin_reason_code_instructions;
		},

	
		/**
		 * @private
		 */
		_updateName: function(name) {
			if (has("text-direction")) {
				name = this.enforceTextDirWithUcc(null, name);
			}
			domConstruct.place("<label>" + string.substitute(this.messages.admin_reason_code_heading, [
				name
			]) + "</label>", this.headingText, "only");
		},

		/**
		 * Overwritten to check if all the data is valid.
		 */
		_validateData: function() {
			if (!this.nameField.isValid()) {
				return false;
			}
			return true;
		},

		/**
		 * Handles the resize of this widget.
		 */
		resize: function() {
			this.inherited(arguments);
			this.borderContainer.resize();
		},

			/**
		 * @private
		 */
		_onFieldChange: function() {
			if (this._initialized) {
				this._markDirty();
			}
		},
	
	});
});
