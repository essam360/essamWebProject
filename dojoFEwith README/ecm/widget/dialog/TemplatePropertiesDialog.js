/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/dom-class",
	"dijit/_Widget",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/layout/StackContainer",
	"dijit/layout/TabContainer",
	"dijit/layout/ContentPane",
	"ecm/model/Repository",
	"ecm/widget/dialog/BaseDialog",
	"ecm/widget/ItemSecurityPane",
	"ecm/widget/TeamspacePropertiesPane",
	"dojo/text!./templates/TemplatePropertiesDialogContent.html"
],

function(declare, //
lang, //
domClass, //
_Widget, //
_TemplatedMixin, //
_WidgetsInTemplateMixin, //
StackContainer, //
TabContainer, //
ContentPane, //
Repository, //
BaseDialog, //
ItemSecurityPane, //
TeamspacePropertiesPane, //
template) {

	/**
	 * @name ecm.widget.dialog.TemplatePropertiesDialog
	 * @class Provides a dialog box that is used to edit teamspace template properties.
	 * @augments ecm.widget.dialog.BaseDialog
	 */
	return declare("ecm.widget.dialog.TemplatePropertiesDialog", [
		BaseDialog
	], {
		/** @lends ecm.widget.dialog.TemplatePropertiesDialog.prototype */

		contentString: template,
		widgetsInTemplate: true,

		/**
		 * Instance of {@link ecm.model.Teamspace} model.
		 */
		model: null,

		/**
		 * Constructor for the model.
		 */
		constructor: function(args) {
			this.model = args.model;
		},

		/**
		 * Called after widget creation.
		 */
		postCreate: function() {
			this.inherited(arguments);
			domClass.add(this.domNode, "ecmTemplatePropertiesDialog");
			this.setMaximized(true);
			this.setSizeToViewportRatio(true);

			// create the props pane
			this._teamspacePropertiesPane = new TeamspacePropertiesPane({
				model: this.model,
				showState: this.model.state == "validate" ? false : true
			});
			this._teamspacePropertiesTab.domNode.appendChild(this._teamspacePropertiesPane.domNode);

			this.set("title", this.messages.workspace_properties_dialog_title);
			this._saveButton = this.addButton(this.messages.save_template, "onSave");
			this.connect(this._teamspacePropertiesPane, "onChange", "_setSaveButtonState");

			this.connect(this._itemSecurityPane, "onShow", function() {
				if (!this._securityRendered) {
					this._securityRendered = true;
					this._itemSecurityPane.render();
				}
			});

			if (!this.canEdit)
				this._saveButton.set("disabled", true);
		},

		/**
		 * Shows the dialog.
		 */
		show: function() {
			//this._teamspacePropertiesPane.setTeamspace(this.model);
			// fetch the content item for the teamspace base folder
			var folderId = this.model.id;
			this.model.repository.retrieveItem(folderId, lang.hitch(this, function(teamspaceFolder) {
				this._teamspaceFolder = teamspaceFolder;
				this._itemSecurityPane.setItem(teamspaceFolder);
			}));

			var d = this.inherited(arguments);
			this.resize();
			return d;
		},

		/**
		 * Called when the Save button is clicked.
		 */
		onSave: function() {
			if (this.isValid(true)) {
				this._teamspacePropertiesPane.saveChanges();
				this.model.repository.editTeamspaceTemplate(this.model, lang.hitch(this, function() {
					// now set permissions, have to do this separately unless we fix editTeamspaceTemplate to 
					// set permissions too
					if (this._securityRendered) {
						var permissions = this._itemSecurityPane.getPermissions();
						this._teamspaceFolder.saveAttributes([], null, null, permissions, false, lang.hitch(this, function(response) {
							this.hide();
						}));
					} else {
						this.hide();
					}
				}));
			}
		},

		/***************************************************************************************************************
		 * Used to validate the teamspace properties pane.
		 */
		isValid: function(focus) {
			var errorField = this._teamspacePropertiesPane.validate(focus);
			if (errorField) {
				this._tabContainer.selectChild(this._teamspacePropertiesPane);
				return false;
			} else {
				return true;
			}
		},

		/**
		 * Used internally to disable the save buttons if the teamspace properties are not valid.
		 * 
		 * @private
		 */
		_setSaveButtonState: function() {
			var errorField = this._teamspacePropertiesPane.validate(true);
			if (this.canEdit)
				this._saveButton.set("disabled", (errorField != null));
		}

	});
});
