/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/dom-geometry",
	"dojo/dom-attr",
	"dojo/keys",
	"dijit/_Widget",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/form/Button",
	"dijit/form/TextBox",
	"dijit/form/MultiSelect",
	"dijit/layout/TabContainer",
	"dijit/layout/SplitContainer",
	"dijit/layout/StackContainer",
	"dijit/registry",
	"idx/layout/BorderContainer",
	"idx/layout/ContentPane",
	"ecm/model/Desktop",
	"ecm/model/Teamspace",
	"ecm/MessagesMixin",
	"ecm/LoggerMixin",
	"ecm/widget/dialog/MessageDialog",
	"ecm/widget/dialog/ConfirmationDialog",
	"ecm/widget/MessageBar",
	"ecm/widget/MultiColumnList",
	"ecm/widget/teamspaceBuilder/FoldersAndDocsPane",
	"ecm/widget/teamspaceBuilder/ClassesPane",
	"ecm/widget/teamspaceBuilder/SearchTemplatesPane",
	"ecm/widget/teamspaceBuilder/PropertiesPane",
	"ecm/widget/teamspaceBuilder/UsersPane",
	"ecm/widget/teamspaceBuilder/RolesPane",
	"dojo/text!./templates/BuilderNew.html"
],

function(declare, //
lang, //
domGeom, //
domAttr, //
keys, //
_Widget, //
_TemplatedMixin, //
_WidgetsInTemplateMixin, //
Button, //
TextBox, //
MultiSelect, //
TabContainer, //
SplitContainer, //
StackContainer, //
registry, //
BorderContainer, //
ContentPane, //
Desktop, //
Teamspace, //
MessagesMixin, //
LoggerMixin, //
MessageDialog, //
ConfirmationDialog, //
MessageBar, //
MultiColumnList, //
FoldersAndDocsPane, //
ClassesPane, //
SearchTemplatesPane, //
PropertiesPane, //
UsersPane, //
RolesPane, //
template) {

	/**
	 * @name ecm.widget.teamspaceBuilder.TeamspaceBuilder
	 * @class Provides the widget that contains the user interface for teamspace builder.
	 * @augments dijit._Widget, dijit._TemplatedMixin, dijit._WidgetsInTemplateMixin, ecm.LoggerMixin
	 */
	return declare("ecm.widget.teamspaceBuilder.TeamspaceBuilder", [
		_Widget,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		LoggerMixin
	], {
		/** @lends ecm.widget.teamspaceBuilder.TeamspaceBuilder.prototype */

		templateString: template,
		templateCssPath: undefined,
		widgetsInTemplate: true,
		messages: ecm.messages,

		_currentPanel: 0,
		_firstPanel: 0,
		_lastPanel: 0,

		type: "template", //template or instance
		model: null,

		_navModel: [
			"onAddProperties",
			"onAddSearchTemplates",
			"onAddClasses",
			"onAddFolders",
			"onAddRolesOrUsers"
		],

		constructor: function(args) {
			args = args.args;
			this.type = args.type;
			this.mode = args.mode || "create";
			this.parent = args.parent || this;
			this.logDebug("constructor", "Type = " + this.type);
			this.setRepository(args.repository, args.teamspace);
		},

		postMixInProperties: function() {
			this._setLabels();
		},

		_setLabels: function() {
			this.logEntry("_setLabels");

			this._teamspaceFinishLabel = this.messages.workspacebuilder_navigation_finish;
			if (this.type == Teamspace.INSTANCE) {

				if (this.mode == "create") {
					this._rolesOrUsersLabel = this.messages.workspacebuilder_users_pane;
					this._teamspacePropertiesLabel = this.messages.workspacebuilder_instance_properties_pane;
					this._rolesOrUsersLabel = this.messages.workspacebuilder_users_pane;
					if (this.heading)
						this.heading.innerHTML = this.messages.workspacebuilder_instance_navigation_pane_title;
				} else {
					this._teamspacePropertiesLabel = this.messages.workspacebuilder_template_edit_properties_pane;
					this._rolesOrUsersLabel = this.messages.workspacebuilder_roles_pane;
					if (this.heading)
						this.heading.innerHTML = this.messages.workspacebuilder_template_navigation_pane_title;
				}
			} else { // TEMPLATE
				var model = this.getModel();
				if (this.mode == "edit" && model["validate"] == true)
					this._teamspaceFinishLabel = this.messages.workspacebuilder_navigation_validate;
				this._teamspacePropertiesLabel = this.messages.workspacebuilder_template_properties_pane;
				this._rolesOrUsersLabel = this.messages.workspacebuilder_roles_pane;
				if (this.heading)
					this.heading.innerHTML = this.messages.workspacebuilder_template_navigation_pane_title;
			}

			if (this.repository && this.repository.type == "cm")
				this._docTypesEntryTemplates = this.messages.workspacebuilder_doctypes_entryTemplates_pane_cm;
			else
				this._docTypesEntryTemplates = this.messages.workspacebuilder_doctypes_entryTemplates_pane;

			this.logExit("_setLabels");
		},

		/**
		 * Method called by parent container to pass additional parameters to this pane.
		 * 
		 * @param params
		 *            Contains a parameters to set in the teamspace builder dijit.
		 */
		setParams: function(params) {
			this.mode = params.mode;
			this.type = params.type;
			this.container = params["container"];
			this.setRepository(params.repository, params.teamspace);

			// confirgure the labels - but this does not set change existing HTML
			this._setLabels();

			// configure buttons
			this._setupWizardButtons();

			// update HTML
			this.nav_addRolesOrUsers.innerHTML = this._rolesOrUsersLabel;
			this.nav_addProperties.innerHTML = this._teamspacePropertiesLabel;
			this.nav_addClasses.innerHTML = this._docTypesEntryTemplates;

			this.nav_addSearchTemplates.style.display = "list-item";
			this.nav_addClasses.style.display = "list-item";
			this.nav_addFolders.style.display = "list-item";
			this.nav_addRolesOrUsers.style.display = "list-item";

			this.teamspaceBuilderProperties.setModel(this.model);
			this.teamspaceBuilderProperties.resetPane();
			this.onAddProperties();

			this.teamspaceBuilderClasses.setModel(this.model);
			this.teamspaceBuilderSearchTemplates.setModel(this.model);
			this.teamspaceBuilderClasses.setModel(this.model);
			this.teamspaceBuilderFolders.setModel(this.model);
			this.teamspaceBuilderRoles.setModel(this.model);
			this.teamspaceBuilderUsers.setModel(this.model);

		},

		onBeforeFinish: function() {
			// go through all panes and give them a chance to save the state of the model
			var model = this.model;

			if (!model.usesClasses) {
				if (this._validateEntryTemplates() == false)
					return false;
			}

			if (this.type == Teamspace.INSTANCE) {
				//TODO - remove CM code when roles are ready.
				if (this.mode == "create") {
					// create instance is a teamspace instance so save users
					return this.teamspaceBuilderUsers.onSaveState(); // save users to the model
				} else {
					// edit instance is a teamspace template so save roles
					return this.teamspaceBuilderRoles.onSaveState(); // save roles to the model
				}
			} else if (this.type == Teamspace.TEMPLATE) {
				if (this.mode == "create") {
					// save permissions
					this.teamspaceBuilderProperties.onSaveState();
				}
				return this.teamspaceBuilderRoles.onSaveState(); // save roles to the model
			}
			return true;
		},

		// when a user fist selects a template or changes to another template in the instance builder
		onChangeTemplate: function() {
			if (this.type == Teamspace.INSTANCE) {
				this.teamspaceBuilderClasses.onChangeTemplate();
				this.teamspaceBuilderUsers.onChangeTemplate();
				this.teamspaceBuilderFolders.onChangeTemplate();
				this.model.onChange(this.model);
			}
		},

		/**
		 * Fired when a teamspace template is selected.
		 */
		onTeamspaceTemplateSelection: function(selectedItem) {
		},

		setMode: function(mode) {
			this.logEntry("setMode");
			this.mode = mode;
			this.logExit("setMode");
		},

		/**
		 * overridable method for dijits to update UI elements
		 */
		setRepository: function(repository, teamspace) {
			this.logDebug("setRepository", "creating new model object");
			this.repository = repository;

			if (teamspace) {
				// If editing a template, do not restrict the classes available for adding a document
				// to those defined in the template. That restriction is meant to be applied when working
				// under a teamspace that was created from the template.
				if (this.type == Teamspace.TEMPLATE && teamspace.type == Teamspace.TEMPLATE) {
					teamspace.addAllowAllClasses = true;
				}
				// The current design requires treating a teamspace template as a teamspace instance
				// in order to edit the existing settings in the template.
				teamspace.type = Teamspace.INSTANCE;
				teamspace.onChange(teamspace);
				teamspace.repository = this.repository; // normally not settable
				this.model = teamspace;
			} else if (this.type == Teamspace.INSTANCE) {
				this.model = new Teamspace({
					id: "",
					name: "",
					repository: this.repository,
					type: Teamspace.INSTANCE
				});
			} else {
				this.model = new Teamspace({
					id: "",
					name: "",
					repository: this.repository,
					type: Teamspace.TEMPLATE
				});
			}

			this.logDebug("setRepository", "created new model object");
		},

		_navigate: function(currentPanel) {
			this.currentPanel = currentPanel;
			this.navigate(currentPanel);
		},

		/* Sets the teamspace model */
		setModel: function(/* ecm.model.Teamspace */model) {
			this.model = model;
		},

		/* returns template or instance */
		getModel: function() {
			return this.model;
		},

		/* Sets the type to template or instance */
		setType: function(/* String */type) {
			this.type = type;
			this.model.type = type;
			this.model.onChange(this.model);
		},

		/* returns template or instance */
		getType: function() {
			return this.type;
		},

		resize: function() {
			this.inherited(arguments);
			this.teamspaceBuilderContainer.resize();
		},

		_resizePanes: function() {
			var marginBoxStackContainer = domGeom.getMarginBox(this.teamspaceBuilderStackContainer.domNode);
			var paneHeight = marginBoxStackContainer.h;
			this.addSearchTemplates.domNode.style.height = paneHeight + "px";
			this.addPropertiesContentPane.domNode.style.height = paneHeight + "px";
			this.addClasses.domNode.style.height = paneHeight + "px";
			this.addFolders.domNode.style.height = paneHeight + "px";
			this.addRoles.domNode.style.height = paneHeight + "px";
			this.addUsers.domNode.style.height = paneHeight + "px";
		},

		layout: function() {
			this.teamspaceBuilderContainer.resize();
		},

		onNext: function(panel) {
			var func = this._navModel[panel];
			this[func]();
		},

		onPrevious: function(panel) {
			var func = this._navModel[panel];
			this[func]();
		},

		reset: function() {
			this.teamspaceBuilderProperties.onReset();
			this.model.reset();
			this.onAddProperties();
		},

		_canNavigate: function() {
			var model = this.model;
			var type = model.type;
			var nameSet = model.name && model.name.length > 0;
			if (!nameSet) {
				this.teamspaceBuilderProperties.focusOnEmptyName(); //let the user know that the name property is required.
				return false;
			}

			if (type == Teamspace.INSTANCE && this.mode == "create") {
				var json = model.templateJSON;
				if (!json) {
					this.teamspaceBuilderProperties.focusOnEmptyTemplate();
					return false;
				}
			}

			if (!model.usesClasses) {
				if (model["validate"] != true && this._validateEntryTemplates() == false)
					return false;
			}
			return true;
		},
		_validateEntryTemplates: function() {
			var model = this.model;

			var entryTemplates = model.entryTemplates;
			if (!entryTemplates || entryTemplates.length < 1) {
				var dialog = new MessageDialog({
					text: ecm.messages.workspacebuilder_classes_entryTemplates_error
				});
				dialog.show();
				return false;
			}
			return true;
		},

		onAddPropertiesKeyPressed: function(evt) {
			if (evt.type != "click" && evt.charCode == keys.SPACE) {
				this.onAddProperties(evt);
			}
		},

		onAddProperties: function() {
			this.logEntry("onAddProperties");
			this._navigate(0);
			this._toggleSelected("nav_addProperties");
			this.teamspaceBuilderStackContainer.selectChild(this.addPropertiesContentPane);
			this.teamspaceBuilderProperties.setModel(this.getModel());
			this.teamspaceBuilderProperties.updateFields(); // name and desc can be set from the props dialog, so update the props pane
			if (this.mode == "edit") {
				this.teamspaceBuilderProperties.edit();
			} else if (this.model.type == "instance" && !this.model.getTemplateJson) {
				this.teamspaceBuilderProperties.load();
			}
			this._resizePanes();

			// Need to do this in case the user does not navigate to the roles panel. 
			this._setOwnerRoleOnModel();

			this.logExit("onAddProperties");
		},

		_setOwnerRoleOnModel: function() {
			var _this = this;

			// Need to make sure the owner roles are retrieved and that the owner role is added to the model in case the user
			// selects finish without going to the roles pane.
			if (this.getModel().type == "template") {
				var repository = this.model.repository;
				repository.retrieveRoles(lang.hitch(this, function(roles) {
					var rolesList = [];
					for ( var i = 0; i < roles.length; i++) {
						var r = roles[i];
						if (r.owner) {
							rolesList.push(r);
						}
					}
					_this.model.roles = rolesList;
					_this.model.onChange(_this.model);
				}));
			}
		},

		onAddSearchTemplatesKeyPressed: function(evt) {
			if (evt.type != "click" && evt.charCode == keys.SPACE) {
				this.onAddSearchTemplates(evt);
			}
		},

		onAddSearchTemplates: function() {
			// make sure required fields are set
			if (!this._canNavigate())
				return;

			this._navigate(1);
			this._toggleSelected("nav_addSearchTemplates");
			this.teamspaceBuilderStackContainer.selectChild(this.addSearchTemplates);
			this.teamspaceBuilderSearchTemplates.setModel(this.getModel());
			this.teamspaceBuilderSearchTemplates.render();
			this._resizePanes();

		},

		onAddClassesKeyPressed: function(evt) {
			if (evt.type != "click" && evt.charCode == keys.SPACE) {
				this.onAddClasses(evt);
			}
		},

		onAddClasses: function() {
			// make sure required fields are set
			if (!this._canNavigate())
				return;

			this._navigate(2);
			this.teamspaceBuilderStackContainer.selectChild(this.addClasses);
			this._toggleSelected("nav_addClasses");
			this.teamspaceBuilderClasses.setModel(this.getModel());
			this.teamspaceBuilderClasses.render();
			this.teamspaceBuilderClasses.resize();
		},

		onAddFoldersKeyPressed: function(evt) {
			if (evt.type != "click" && evt.charCode == keys.SPACE) {
				this.onAddFolders(evt);
			}
		},

		onAddFolders: function() {
			// make sure required fields are set
			if (!this._canNavigate())
				return;

			this.logDebug("onAddFolders", "invoked");
			this._navigate(3);
			this._toggleSelected("nav_addFolders");
			this.teamspaceBuilderStackContainer.selectChild(this.addFolders);
			this.teamspaceBuilderFolders.setModel(this.getModel());
			this.teamspaceBuilderFolders.render();
		},

		onAddRolesOrUsersKeyPressed: function(evt) {
			if (evt.type != "click" && evt.charCode == keys.SPACE) {
				this.onAddRolesOrUsers(evt);
			}
		},

		onAddRolesOrUsers: function() {
			// make sure required fields are set
			if (!this._canNavigate())
				return;

			this._navigate(4);
			// note: only can use the builder to edit templates 
			if (this.mode == "edit" || this.getModel().type == "template") {
				this.teamspaceBuilderStackContainer.selectChild(this.addRoles);
				this.teamspaceBuilderRoles.setModel(this.getModel());
				this.teamspaceBuilderRoles.render();
			} else {
				this.teamspaceBuilderStackContainer.selectChild(this.addUsers);
				this.teamspaceBuilderUsers.setModel(this.getModel());
				this.teamspaceBuilderUsers.render();
				this.teamspaceBuilderUsers.resize();
			}
			this._resizePanes();
			this._toggleSelected("nav_addRolesOrUsers");
		},

		// fired when the pane is selected
		onSelect: function() {
			this.teamspaceBuilderSearchTemplates.resize();
			this.teamspaceBuilderProperties.resize(); // after templates are added, the instance tab needs to be resize when instance builder is selected
		},

		_toggleSelected: function(selected) {
			var children = this.navList.getElementsByTagName("li");
			for ( var i = 0; i < children.length; i++) {
				var link = children[i];
				link.className = "navListItem";
				domAttr.remove(link, "aria-pressed");
			}
			this[selected].className = "navListItem selected";
			domAttr.set(this[selected], "aria-pressed", "true");
		},

		///////////////////////
		onPreviousButton: function() {
			this.onPrevious(this._currentPanel - 1);
		},

		onNextButton: function() {
			this.onNext(this._currentPanel + 1);
		},

		onCancel: function() {
			var _this = this;
			var repository = this.model.repository;
			var confirmCancel = new ConfirmationDialog({
				text: ecm.messages.workspacebuilder_cancel_confirmation_question,
				buttonLabel: ecm.messages.workspacebuilder_cancel_confirmation_button,
				title: ecm.messages.workspacebuilder_navigation_cancel,
				onExecute: function() {
					if (_this.container) {
						_this.container.selectContentPane("manageTeamspaces", {
							repository: repository
						});
					}
				}
			});
			confirmCancel.show();
		},

		_disableNavigationButtons: function(disabled) {
			this.finishButton.set("disabled", disabled);
			this.nextButton.set("disabled", disabled);
		},

		navigate: function(currentPanel) {
			this._currentPanel = currentPanel;
			if (this.previousButton && this.nextButton) {
				if (this._currentPanel == this._lastPanel) {
					this.nextButton.set("disabled", true);
					this.previousButton.set("disabled", false);
				} else if (this._currentPanel == this._firstPanel) {
					this.previousButton.set("disabled", true);
				} else {
					this.previousButton.set("disabled", false);
					this.nextButton.set("disabled", false);
				}
			}
		},

		_executeFinish: function() {
			var valid = this.onBeforeFinish(); // check if we need to cancel
			var layout = ecm.model.desktop.getLayout();
			if (valid && this.model) {
				var self = this;
				var repository = this.model.repository;

				if (this.model.state == "validate") {
					this.model.state = "published";
					delete this.model.validate;
				}
				// Temporary flag when editing a template, disables class restriction for add.
				delete this.model.addAllowAllClasses;

				if (this.model.type == Teamspace.INSTANCE && this.mode == "create") {
					repository.addTeamspace(this.model, function(teamspace) {
						teamspace.initFromJson();

						layout.openTeamspace(null, teamspace);
						//if (self.container) {
						//self.container.selectContentPane("teamspacePane", {
						//teamspace: teamspace
						//});
						//}
						self.onTeamspaceBuilderClosed();
					});
				} else if (this.mode == "edit") {
					// change to template, was only set to instance to reuse the instance builder for editing.
					this.model.type = (this.type);
					this.model.onChange(this.model);

					repository.editTeamspaceTemplate(this.model, function(response) {
						if (self.container) {
							self.container.selectContentPane("manageTeamspaces", {
								repository: repository
							});
						}
					}, this.teamspaceBuilderUsers.getIsDirty());
				} else {
					repository.addTeamspaceTemplate(this.model, function(response) {
						if (self.container) {
							self.container.selectContentPane("manageTeamspaces", {
								repository: repository
							});
						}
					});
				}
			}
		},
		onFinish: function() {
			this.logEntry("onFinish");
			/*if (this.model["validate"]) {
				var _this = this;
				var repository = this.model.repository;
				var confirmCancel = new ConfirmationDialog({
					text: ecm.messages.workspacebuilder_validate_confirmation_question,
					buttonLabel: ecm.messages.workspacebuilder_validate_confirmation_button,
					title: ecm.messages.workspacebuilder_validate_confirmation_title,
					onExecute: function() {
						_this._executeFinish();
					}
				});
				confirmCancel.show();

			} else {
				this._executeFinish();
			}*/
			this._executeFinish();
			this.logExit("onFinish");
		},

		/**
		 * Event function called when teamspace builder is closed.
		 */
		onTeamspaceBuilderClosed: function(id) {
		},

		_setupWizardButtons: function() {
			this._lastPanel = this._navModel.length - 1;
			this.navigate(0); // start at the first panel
			var self = this;
			var type = this.model.type;
			if (type == Teamspace.INSTANCE && self.mode == "edit") {
				self._disableNavigationButtons(false);
			}
			this.connect(this.model, "onChange", function() {
				if (self.model.name && self.model.name.length > 0) {
					if (type == Teamspace.INSTANCE && self.mode == "create") {
						if (self.model.id && self.model.id.length > 0)
							self._disableNavigationButtons(false);
					}
					if (type == Teamspace.INSTANCE && self.mode == "edit") {
						self._disableNavigationButtons(false);
					} else {
						if (type == Teamspace.INSTANCE) {
							if (type == Teamspace.INSTANCE && this.mode == "create") {
								var json = self.model.templateJSON;
								if (!json)
									self._disableNavigationButtons(true);
								else
									self._disableNavigationButtons(false);
							}
						} else
							self._disableNavigationButtons(false);
					}
				} else
					self._disableNavigationButtons(true);
			});
		},

		///////////////

		/**
		 * Loads the content of this pane.
		 */
		loadContent: function() {
			this.logEntry("loadContent");

			if (!this.isLoaded) {
				this.isLoaded = true;
			}

			this.logExit("loadContent");
		}
	});
});
