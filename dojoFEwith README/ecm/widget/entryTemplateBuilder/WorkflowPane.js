/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/array",
	"dojo/_base/lang",
	"dojo/aspect",
	"dojo/json",
	"dojo/dom-class",
	"dojo/dom-style", //
	"dojo/store/Memory",
	"dijit/_Widget",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/form/Button",
	"dijit/layout/ContentPane",
	"idx/html",
	"ecm/LoggerMixin",
	"ecm/MessagesMixin",
	"ecm/model/EntryTemplate",
	"ecm/model/Repository",
	"ecm/model/WorkItem",
	"ecm/widget/FilteringSelect",
	"ecm/widget/CheckBox",
	"ecm/widget/RadioButton",
	"ecm/widget/HoverHelp",
	"ecm/widget/dialog/SelectObjectDialog",
	"idx/layout/BorderContainer",
	"dojo/text!./templates/WorkflowPane.html"
],

function(declare, //
array, //
lang, //
aspect, //
dojojson, //
domClass, //
domStyle, //
MemoryStore, //
_Widget, //
_TemplatedMixin, //
_WidgetsInTemplateMixin, //
Button, //
ContentPane, //
idxHtml, //
LoggerMixin, //
MessagesMixin, //
EntryTemplate, //
Repository, //
WorkItem, //
FilteringSelect, //
CheckBox, //
RadioButton, //
HoverHelp, //
SelectObjectDialog, //
BorderContainer, //
template) {

	/**
	 * @name ecm.widget.entryTemplateBuilder.WorkflowPane
	 * @class Provides a widget that has the entry template workflow settings.
	 * @augments dijit._Widget
	 * @since 2.0.3
	 */
	return declare("ecm.widget.entryTemplateBuilder.WorkflowPane", [
		_Widget,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		LoggerMixin,
		MessagesMixin
	], {
		/** @lends ecm.widget.entryTemplateBuilder.WorkflowPane */

		templateString: template,
		widgetsInTemplate: true,

		/**
		 * Instance of {@link ecm.model.Repository}.
		 */
		repository: null,
		/**
		 * Instance of {@link ecm.model.EntryTemplate}.
		 */
		entryTemplate: null,
		/**
		 * The entry template type string. One of the <code>EntryTemplate.TYPE</code> object type values.
		 */
		type: null,
		/**
		 * @private The selected workflow.
		 */
		_selectedWorkflow: null,

		/**
		 * Post create.
		 */
		postCreate: function() {
			this.logEntry("postCreate");
			this._initialized = false;
			this.inherited(arguments);

			this.modifyLaunch.setHoverHelp(this.modifyLaunchHoverHelp);
			this.type = this.entryTemplate.type;
			this._loadData();
			this.logExit("postCreate");
		},

		/**
		 * Destroy.
		 */
		destroy: function() {
			this.inherited(arguments);
			if (this._selectObjectDialog) {
				this._selectObjectDialog.destroyRecursive();
				this._selectObjectDialog = null;
			}
		},

		/**
		 * @private Loads the data.
		 */
		_loadData: function() {
			this._loadWorkflow();
		},

		/**
		 * @private Loads the workflow pulldown.
		 */
		_loadWorkflow: function() {
			this.workflowType.set("store", new MemoryStore({
				data: [
					{
						"id": "none",
						"label": this.messages.none
					},
					{
						"id": "existing",
						"label": this.messages.entry_template_workflow_type_existing
					}
				]
			}));
			this.workflowType.set("value", "none");
			if (this._getRepository()._isP8()) {
				this.selectExistingWorkflowButton.set("disabled", true);
			} else {
				domStyle.set(this.selectExistingWorkflowButton.domNode, "display", "none");
			}

			this._getPredefinedWorkflows(lang.hitch(this, function(list) {
				if (list && list.length > 0) {
					var data = [
						{
							"id": "none",
							"label": this.messages.none
						}
					];
					if (list && list.length > 0) {
						for ( var i = 0; i < list.length; i++) {
							var label = ecm.messages["entry_template_workflow_type_" + list[i].name];
							data.push({
								"id": list[i].name,
								"label": label || list[i].name
							});
						}
					}
					if (this._getRepository()._isP8()) {
						data.push({
							"id": "existing",
							"label": this.messages.entry_template_workflow_type_existing
						});
					}
					this.workflowType.set("store", new MemoryStore({
						data: data
					}));

					this._setSelectedWorkflowSettings();
					this._displaySelectedWorkflow();

					setTimeout(lang.hitch(this, function() {
						this._initialized = true;
					}), 200);
				} else {
					this._setSelectedWorkflowSettings();
					this._displaySelectedWorkflow();
					setTimeout(lang.hitch(this, function() {
						this._initialized = true;
					}), 200);
				}
			}));
		},

		/**
		 * @private Sets up the selected workflow and selected workflow type.
		 */
		_setSelectedWorkflowSettings: function() {
			if (this.entryTemplate.mode == "add") {
				this.workflowType.set("value", "none");
				this.launchPrompt.set("checked", true);

			} else {
				if (!this.entryTemplate.workflow) { // no workflow
					this.workflowType.set("value", "none");
					this.modifyLaunch.set("checked", false);
				} else if (!this.entryTemplate.workflowPredefined) { // custom workflow
					this.workflowType.set("value", "existing");
					this._selectedWorkflow = {
						contentItem: this.entryTemplate.workflow,
						name: this.entryTemplate.workflow.name,
						version: this.entryTemplate.workflowVersion
					};
					this.modifyLaunch.set("checked", this.entryTemplate.userModifiesLaunchStep);
				} else { // predefined workflow
					if (this.entryTemplate.workflow.name) {
						this.workflowType.set("value", this.entryTemplate.workflow.name);
					} else {
						this.workflowType.set("value", this.entryTemplate.workflow.id); // Handle older ETs from development cycles
					}
					this._selectedWorkflow = {
						contentItem: this.entryTemplate.workflow,
						name: this.entryTemplate.workflow.name,
						version: this.entryTemplate.workflowVersion
					};
					if (this._getRepository()._isP8()) {
						this.modifyLaunch.set("checked", true);
					} else { // CM
						this.modifyLaunch.set("checked", this.entryTemplate.userModifiesLaunchStep);
					}
				}
				if (this.entryTemplate.userLaunchesWorkflow) {
					this.launchPrompt.set("checked", true);
				} else {
					this.launchAuto.set("checked", true);
				}
			}
			this.selectExistingWorkflowButton.set("disabled", this.workflowType.get("value") != "existing");
		},

		/**
		 * @private Shows the selected workflow. Enables or disables the checkboxes based on if a workflow is selected.
		 */
		_displaySelectedWorkflow: function() {
			var type = this.workflowType.get("value");
			if (type == "none") {
				this.selectedWorkflowDiv.innerHTML = this.messages.none;
				this.launchPrompt.set("disabled", true);
				domClass.add(this.launchPromptLabel, "labelReadOnly");
				this.launchAuto.set("disabled", true);
				domClass.add(this.launchAutoLabel, "labelReadOnly");
				this.modifyLaunch.set("disabled", true);
				this.modifyLaunch.set("checked", false);
				domClass.add(this.modifyLaunchLabel, "labelReadOnly");

			} else if (type == "existing") {
				if (this._selectedWorkflow) {
					this.selectedWorkflowDiv.innerHTML = idxHtml.escapeHTML(this._selectedWorkflow.name);
				} else {
					this.selectedWorkflowDiv.innerHTML = this.messages.none;
				}
				this.launchPrompt.set("disabled", !this._selectedWorkflow);
				this.launchAuto.set("disabled", !this._selectedWorkflow);
				this.modifyLaunch.set("disabled", !this._selectedWorkflow);
				if (this._selectedWorkflow) {
					domClass.remove(this.launchPromptLabel, "labelReadOnly");
					domClass.remove(this.launchAutoLabel, "labelReadOnly");
					domClass.remove(this.modifyLaunchLabel, "labelReadOnly");
				} else {
					domClass.add(this.launchPromptLabel, "labelReadOnly");
					domClass.add(this.launchAutoLabel, "labelReadOnly");
					domClass.add(this.modifyLaunchLabel, "labelReadOnly");
				}
			} else {
				var typeDisplayed = this.workflowType.get("displayedValue");
				this.selectedWorkflowDiv.innerHTML = typeDisplayed || type;
				this.launchPrompt.set("disabled", false);
				domClass.remove(this.launchPromptLabel, "labelReadOnly");
				this.launchAuto.set("disabled", false);
				domClass.remove(this.launchAutoLabel, "labelReadOnly");

				if (this._getRepository()._isP8()) {
					this.modifyLaunch.set("disabled", true);
				} else {
					this.modifyLaunch.set("disabled", false);
				}
				domClass.remove(this.modifyLaunchLabel, "labelReadOnly");
			}
			this._displayWorkflowVersion(type);
		},

		_displayWorkflowVersion: function(type) {
			if (this._getRepository()._isCM()) {
				domStyle.set(this.selectedWorkflowVersionText, "display", "none");
				domStyle.set(this.selectedWorkflowVersionValue, "display", "none");
			} else {
				if (type == "none") {
					this.selectedWorkflowVersionValue.innerHTML = "";
				} else if (type == "existing") {
					if (this._selectedWorkflow) {
						this.selectedWorkflowVersionValue.innerHTML = this._selectedWorkflow.version == "released" ? this.messages.search_released_version : this.messages.search_current_version;
					} else {
						this.selectedWorkflowVersionValue.innerHTML = "";
					}
				} else {
					this.selectedWorkflowVersionValue.innerHTML = this.messages.search_released_version;
				}
			}
		},

		/**
		 * @private
		 */
		_onFieldChange: function() {
			if (this._initialized) {
				this.onFieldChange();
			}
		},

		/**
		 * Fired when a field changes value.
		 */
		onFieldChange: function() {
			this.logEntry("onFieldChange");
		},

		/**
		 * Set the destination. Called by the SettingsPane to set the current destination.
		 * 
		 * @param destination
		 *            The selected destination {@link ecm.model.SelectedFolder}.
		 */
		setDestination: function(destination) {
			if (destination && destination.item && destination.item.repository) {
				if (!this._destinationRepository || this._destinationRepository.id != destination.item.repository.id) {
					this._destinationRepository = destination.item.repository;
					if (!this._predefinedWorkflowRepositoryId || this._predefinedWorkflowRepositoryId != this._getRepository().id) {
						this._loadWorkflow();
					}
				}
			} else if (this._destinationRepository) {
				this._destinationRepository = null;
				if (!this._predefinedWorkflowRepositoryId || this._predefinedWorkflowRepositoryId != this._getRepository().id) {
					this._loadWorkflow();
				}
			}
		},

		/**
		 * @private Returns the repository.
		 */
		_getRepository: function() {
			if (this._destinationRepository) {
				return this._destinationRepository;
			} else if (this.entryTemplate.mode != "add" && this.entryTemplate.targetRepository) {
				return this.entryTemplate.targetRepository;
			} else {
				return this.repository;
			}
		},

		/**
		 * @private Called when the select workflow pulldown value changes.
		 */
		_onSelectWorkflow: function() {
			if (this._initialized) {
				this._selectedWorkflow = null;
				this._displaySelectedWorkflow();
				if (this.workflowType.get("value") == "existing") {
					this.selectExistingWorkflowButton.set("disabled", false);
					this._onClickSelectWorkflow(); // Show the select object dialog if the user selected "Existing..."
				} else {
					this.selectExistingWorkflowButton.set("disabled", true);
					if (this.workflowType.get("value") != "none") { // predefined
						this.modifyLaunch.set("checked", true);
					}
				}
			}
			this._onFieldChange();
		},

		/**
		 * @private Called when the user clicks the Select... button for a custom workflow.
		 */
		_onClickSelectWorkflow: function() {
			if (this._selectObjectDialog) {
				this._selectObjectDialog.destroyRecursive();
				this._selectObjectDialog = null;
			}
			var repository = this._getRepository();
			this._selectObjectDialog = new SelectObjectDialog({
				selectionMode: "document",
				repository: repository,
				showMultiRepositorySelector: true,
				showVersionSelection: true,
				showSelectVersionButton: false,
				multiSelect: false,
				classSelectorItemList: [
					"WorkflowDefinition"
				],
				classSelectorDisabled: true,
				repositoryTypes: repository.type
			});
			this._selectObjectDialog.show(lang.hitch(this, function(items) {
				this._selectedWorkflow = items[0];
				this._displaySelectedWorkflow();
			}));
		},

		/**
		 * @private Returns the predefined workflows from either the destination repository or the repository that was
		 *          selected when the pane was created.
		 */
		_getPredefinedWorkflows: function(callback) {
			var repository = this._getRepository();
			if (repository) {
				this._predefinedWorkflowRepositoryId = repository.id;
			}

			// check the repository type and make appropriate calls to retrieve workflows.
			if (repository._isP8()) {
				if ((this.type == null || this.type == EntryTemplate.TYPE.DOCUMENT) && repository && repository.connectionPoint) {
					var workItem = new WorkItem({
						repository: repository,
						connectionPoint: repository.connectionPoint,
						objectStore: repository.objectStore
					});
					workItem.retrieveTransferedWorkflows(function(items) {
						callback(items);
					}, null, {
						"filters": [
							"ICNParallelDocumentApproval",
							"ICNSequentialDocumentApproval"
						]
					});
				} else {
					callback([]);
				}
			} else if (repository._isCM()) {
				ecm.model.Request.invokeService("getProcesses", this.repository.type, {
					repositoryId: this.repository.id,
					workItemId: ""
				}, function(response) {
					var workflowList = response.processes;
					var workflowOptions = [];
					for ( var i in workflowList) {
						var workflow = dojojson.parse(workflowList[i]);
						workflowOptions.push({
							name: workflow.process_name,
							title: workflow.process_desc
						});
					}
					callback(workflowOptions);
				}, true);
			}
		},

		/**
		 * Set the type. Called by the SettingsPane to set the type when it changed on another pane.
		 */
		setType: function(type) {
			if (this.type != type) {
				this.type = type;
				this._loadWorkflow();
			}
		},

		/**
		 * Returns array of message object containing the errors on the pane.
		 */
		getMessages: function() {
			var messages = [];
			if (this.workflowType.get("value") == "existing" && !this._selectedWorkflow) {
				messages.push({
					message: this.messages.entry_template_custom_workflow_empty_message
				});
			}
			return messages;
		},

		/**
		 * Loads the model with the screen data.
		 */
		loadModel: function() {
			var workflowType = this.workflowType.get("value");
			if (workflowType == "none") {
				this.entryTemplate.workflow = null;
				this.entryTemplate.workflowVersion = "";
				this.entryTemplate.workflowPredefined = false;
				this.entryTemplate.userLaunchesWorkflow = false;
				this.entryTemplate.userModifiesLaunchStep = false;

			} else {
				if (workflowType == "existing") {
					this.entryTemplate.workflow = this._selectedWorkflow ? this._selectedWorkflow.contentItem : null;
					if (this.entryTemplate.workflow) {
						var idArray = this.entryTemplate.workflow.id.split(",");
						if (idArray.length > 2) {
							this.entryTemplate.workflow.id = idArray[2];
						}
					}
					this.entryTemplate.workflowVersion = this._selectedWorkflow ? this._selectedWorkflow.version : null;
					this.entryTemplate.workflowPredefined = false;
				} else {
					var workItem = new WorkItem({
						name: workflowType,
						id: workflowType,
						repository: this._getRepository()
					});
					this.entryTemplate.workflow = workItem;
					if (this._getRepository()._isP8()) {
						this.entryTemplate.workflowVersion = "released";
					} else {
						this.entryTemplate.workflowVersion = "current";
						workItem.workflowName = workflowType;
					}
					this.entryTemplate.workflowPredefined = true;
				}
				this.entryTemplate.userLaunchesWorkflow = this.launchPrompt.get("checked");
				this.entryTemplate.userModifiesLaunchStep = this.modifyLaunch.get("checked");
			}
		}
	});
});
