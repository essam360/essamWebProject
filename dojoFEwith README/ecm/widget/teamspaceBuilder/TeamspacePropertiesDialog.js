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
	"dijit/_Widget",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/registry",
	"dijit/layout/ContentPane",
	"dijit/layout/TabContainer",
	"ecm/Messages",
	"ecm/model/ContentClass",
	"ecm/model/Repository",
	"ecm/widget/TeamspacePropertiesPane",
	"ecm/widget/teamspaceBuilder/TeamspaceColumnPropsPane",
	"ecm/widget/dialog/BaseDialog",
	"dojo/text!./templates/TeamspacePropertiesDialogContent.html"
],

function(declare, //
lang, //
domStyle, //
domClass, //
_Widget, //
_TemplatedMixin, //
_WidgetsInTemplateMixin, //
registry, //
ContentPane, //
TabContainer, //
Messages, //
ContentClass, //
Repository, //
TeamspacePropertiesPane, //
TeamspaceColumnPropsPane, //
BaseDialog, //
template) {

	/**
	 * @private Part of TeamspaceBuilder widget
	 * @name ecm.widget.teamspaceBuilder.TeamspacePropertiesDialog
	 * @class Provides a widget that is used to edit the properties of a teamspace.
	 * @augments ecm.widget.dialog.BaseDialog
	 */
	return declare("ecm.widget.teamspaceBuilder.TeamspacePropertiesDialog", [
		BaseDialog
	], {
		/** @lends ecm.widget.teamspaceBuilder.TeamspacePropertiesDialog.prototype */

		contentString: template,
		widgetsInTemplate: true,

		/**
		 * An instance of {@link ecm.model.Teamspace} that represents the teamspace that is to be associated with this
		 * dialog.
		 */
		model: null,

		/**
		 * Constructor
		 */
		constructor: function(args) {
			this.model = args.model;
		},

		postCreate: function() {
			this.logEntry("postCreate");
			this.inherited(arguments);
			domClass.add(this.domNode, "ecmTeamspacePropertiesDialog");
			this.setMaximized(true);
			this.setSizeToViewportRatio(true);

			// create the general pane
			this._teamspacePropertiesPane = new TeamspacePropertiesPane({
				model: this.model,
				showState: false
			});
			this._generalTab.domNode.appendChild(this._teamspacePropertiesPane.domNode);

			this.set("title", this.messages.teamspace_props_dialog_title);
			this._okButton = this.addButton(this.messages.ok, "onClickOk");
			this.connect(this._teamspacePropertiesPane, "onChange", "_setOkButtonState");

			this._initPropsPane();
			this.logExit("postCreate");
		},

		/**
		 * @private
		 */
		_initPropsPane: function() {
			this.logEntry("_initPropsPane");
			var repository = this.model.repository;
			this._columnPropsPane.setModel(this.model);

			this._columnPropsPane.setContentClass(this._getContentClass(repository));

			// need to get the repository config
			repository.getRepositoryConfig(lang.hitch(this, function(config) {
				this._columnPropsPane.setRepositoryConfig(config);
				this._columnPropsPane.initValues();
				this._columnPropsPane.render();

			}));
			this.logExit("_initPropsPane");
		},

		/**
		 * @private
		 */
		_getContentClass: function(repository) {
			this.logEntry("_getContentClass");
			var contentClass = null;
			if (repository.type == "p8") {
				contentClass = repository.getContentClass("Document");
			} else if (repository.type == "cm") {
				contentClass = new ContentClass({
					id: "$common",
					name: ecm.messages.search_class_all_pseudo,
					repository: repository,
					pseudoClass: true
				});
			}
			this.logExit("_getContentClass");
			return contentClass;
		},

		/**
		 * Shows the dialog.
		 * 
		 * @param callback
		 *            A callback method that is called when the Ok button is clicked.
		 */
		show: function(callback) {
			this.logEntry("show");
			this._callback = callback;
			this._tabContainer.selectChild(this._generalTab);
			this._teamspacePropertiesPane.resetPane(); // reload load name and desc
			this._columnPropsPane.initValues();
			var d = this.inherited(arguments);
			this.resize();
			this.logExit("show");
			return d;
		},

		/**
		 * Saves the changes and closes the dialog. The callback method specified in show is executed.
		 */
		onClickOk: function() {
			this.logEntry("onClickOk");
			this._teamspacePropertiesPane.saveChanges(); // save name and desc
			var colProps = null;
			if (this._columnPropsPane.getUseDefault() == false) {
				colProps = this._columnPropsPane.saveColumnProps();
			}

			this.model.columnProperties = colProps;
			if (this._callback) {
				this._callback();
			}
			this.onCancel();
			this.logExit("onClickOk");
		},

		/**
		 * Validates the current settings.
		 * 
		 * @param focus
		 *            If true then if there are errors then focus is set on the field that has the error.
		 * @return True if all the values are valid, False if there are invalid values.
		 */
		isValid: function(focus) {
			this.logEntry("isValid");
			var errorField = this._teamspacePropertiesPane.validate(focus);
			if (errorField) {
				this._tabContainer.selectChild(this._teamspacePropertiesPane);
				return false;
			} else {
				return true;
			}
		},

		/**
		 * @private
		 */
		_setOkButtonState: function() {
			this.logEntry("_setOkButtonState");
			var errorField = this._teamspacePropertiesPane.validate(true);
			this._okButton.set("disabled", (errorField != null));
			this.logExit("_setOkButtonState");
		}

	});
});
