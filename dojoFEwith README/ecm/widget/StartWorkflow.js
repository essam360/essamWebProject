/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/sniff",
	"dojo/json",
	"dojo/dom-style",
	"dojo/dom-construct",
	"dojo/store/DataStore",
	"dojo/data/ItemFileWriteStore",
	"ecm/widget/FilteringSelect",
	"dijit/_Widget",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"ecm/model/Request",
	"ecm/LoggerMixin",
	"ecm/Messages",
	"ecm/widget/ComboBox",
	"ecm/widget/HoverHelp",
	"ecm/widget/RangeBoundTextBox",
	"dojo/text!./templates/StartWorkflow.html"
],

function(declare, lang, has, dojojson, domStyle, domConstruct, DataStore, ItemFileWriteStore, FilteringSelect, _Widget, _TemplatedMixin, _WidgetsInTemplateMixin, Request, LoggerMixin, Messages, ComboBox, HoverHelp, RangeBoundTextBox, template) {

	/**
	 * @name ecm.widget.StartWorkflow
	 * @class Provides a widget that is used to start folders and documents on an IBM Content Manager workflow.
	 * @augments
	 */
	return declare("ecm.widget.StartWorkflow", [
		_Widget,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		LoggerMixin
	], {
		/** @lends ecm.widget.StartWorkflow.prototype */

		templateString: template,
		widgetsInTemplate: true,
		_items: null,
		repository: null,
		introText: "",

		/**
		 * A text string holding the name of the workflow to default the selection to
		 */
		workflowName: null,

		/**
		 * A boolean setting that renders the workflow name selection control in readonly mode.
		 */
		workflowReadOnly: false,

		textDir: has("text-direction"),

		constructor: function(cArgs) {
			this.logDebug("constructor");
			this.messages = ecm.messages;
		},

		postCreate: function() {
			this.logEntry("postCreate");

			this._ownerSelect.setHoverHelp(this._ownerHoverHelp);
			this._priorityInput.setHoverHelp(this._priorityHoverHelp);

			this._ownerSelect.set("textDir", this.textDir);
			this._workflowSelect.set("textDir", this.textDir);

			this.introText = this.messages.start_workflow_intro;
			// regExp for xs:string:ext
			this._ownerSelect.regExp = "([a-zA-Z0-9\\s'\\.,\\:;\\?\\\"\\/\\-_&\\+%\\*\\=<>\\(\\)\\|\\!\\$#\\^@~`\\[\\]\\{\\}\\\\])*";
			this._ownerSelect.invalidMessage = this.messages.owner_value_error;
			this._ownerHoverHelp.message = this.messages.owner_value_hint;
			this._workflowSelect.invalidMessage = this.messages.workflow_value_error;

			this._priorityHoverHelp.message = this.messages.priority_value_hint;
			this._priorityInput.promptMessage = this.messages.priority_value_hint;
			this._priorityInput.invalidMessage = this.messages.priority_value_error;
			this._priorityInput.missingMessage = this.messages.priority_value_error;
			this._priorityInput.rangeMessage = this.messages.priority_value_error;
			this._priorityInput.required = true;
			this._priorityInput.regExp = "\\d{1,5}";
			this._priorityInput.constraints = {
				min: 1,
				max: 32000
			};
			this.logExit("postCreate");
		},

		/**
		 * An event function called when some input fields have changed.
		 */
		onInputChange: function() {
			// Input change event
		},

		/**
		 * Cleans up cached items.
		 */
		cleanup: function() {
			while (this._workflowSelect.children.length > 0) {
				this._workflowSelect.children[0].destroy();
			}
			while (this._ownerSelect.children.length > 0) {
				this._ownerSelect.children[0].destroy();
			}
		},

		/**
		 * Sets the repository to use for starting the items on a workflow.
		 * 
		 * @param repository
		 *            Instance of {@link ecm.model.Repository}.
		 */
		setRepository: function(repository) {
			this.repository = repository;
		},

		/**
		 * Returns a string value of the workflow selection field.
		 * 
		 * @returns {String} A string value of the workflow selection field.
		 */
		getWorkflowValue: function() {
			return this._workflowSelect.get("value");
		},

		/**
		 * Returns a string value of the workflow priority field.
		 * 
		 * @returns {String} A string value of the workflow priority field.
		 */
		getPriorityValue: function() {
			return this._priorityInput.get("value");
		},

		/**
		 * Returns a string value of the workflow owner field.
		 * 
		 * @returns {String} A string value of the workflow owner field.
		 */
		getOwnerValue: function() {
			return this._ownerSelect.get("value");
		},

		/**
		 * Sets an array of items to be started on a Content Manager workflow.
		 * 
		 * @param items
		 *            An array of {@link ecm.model.WorkItem} objects.
		 */
		setItems: function(items) {
			this.logEntry("setItems");
			this._items = items;
			this.repository = items[0].repository;
			//this.cleanup();
			if (items[0].isInstanceOf && items[0].isInstanceOf(ecm.model.WorkItem)) {
				this._setItemsForEdit(items);
			} else {
				var self = this;
				ecm.model.Request.invokeService("getProcesses", this.repository.type, {
					repositoryId: this.repository.id,
					workItemId: this._items[0].id
				}, function(response) {
					var workflowList = response.processes;

					var defaultWorkflow = dojojson.parse(workflowList[0]);
					var defaultWorkflowName = response.process_name ? response.process_name : defaultWorkflow["process_name"];
					if (self.workflowName) {
						defaultWorkflowName = self.workflowName; // use this workflow as default
					}
					self._buildWorkflowOptions(workflowList, defaultWorkflowName);

					var ownerList = response.users;
					//var defaultOwner = dojojson.parse(ownerList[0]);
					var defaultOwnerName = response.process_owner ? response.process_owner : self.repository.userId.toUpperCase();
					self._buildOwnerOptions(ownerList, defaultOwnerName);

					self._priorityInput.set("value", response.process_priority);
				}, true);
			}
			this.logExit("setItems");
		},

		_setItemsForEdit: function(items) {
			this.logEntry("_setItemsForEdit");
			var docidJson = '{';
			for ( var i in items) {
				docidJson = docidJson + '"workItemId' + i + '":"' + items[i].workItemId + '",';
			}
			docidJson = docidJson.substring(0, docidJson.length - 1) + '}';
			var requestParam = lang.mixin(dojojson.parse(docidJson), {
				repositoryId: this.repository.id,
				actionListEnabled: this.repository.actionListEnabled ? true : false,
				start_edit_action: "edit_action"
			});
			var self = this;
			ecm.model.Request.invokeService("getProcesses", this.repository.type, requestParam, function(response) {
				var workflowList = response.processes;

				if (response.hidden_ChangeProcess) {
					domConstruct.empty(self._workflowSelectRow);
				} else {
					var defaultWorkflow = dojojson.parse(workflowList[0]);
					var defaultWorkflowName = response.process_name ? response.process_name : defaultWorkflow["process_name"];
					if (self.workflowName) {
						defaultWorkflowName = self.workflowName; // use this workflow as default
					}
					self._buildWorkflowOptions(workflowList, defaultWorkflowName);
				}
				
				if (response.hidden_Changeowner) {
					domConstruct.empty(self._ownerSelectRow);
				} else {
					var ownerList = response.users;
					var defaultOwnerName = response.process_owner ? response.process_owner : self.repository.userId.toUpperCase();
					self._buildOwnerOptions(ownerList, defaultOwnerName);
				}
				
				if (response.hidden_Changepriority) {
					domConstruct.empty(self._priorityInputRow);
				} else {
					var defaultPriority = response.process_priority;
					self._priorityInput.set("value", defaultPriority);
				}

			});
			this.logExit("_setItemsForEdit");
		},

		/**
		 * Returns <code>true</code> if all of the specified workflow information is valid.
		 * 
		 * @returns {Boolean} A value of <code>true</code> if all of the specified workflow information is valid,
		 *          <code>false</code> otherwise.
		 */
		isAllInputValid: function() {
			var allGood = true;
			if (this._ownerSelectRow.hasChildNodes()) {
				allGood = allGood && this._ownerSelect.isValid() != false;
			}
			if (this._workflowSelectRow.hasChildNodes()) {
				allGood = allGood && this._workflowSelect.isValid() != false;
			}
			if (this._priorityInputRow.hasChildNodes()) {
				allGood = allGood && this._priorityInput.isValid() != false;
			}			
			return allGood;
		},

		_buildWorkflowOptions: function(workflowList, defaultWorkflowName) {
			var workflowOptions = [];
			var foundWorkflowName = false;
			for ( var i in workflowList) {
				var workflow = dojojson.parse(workflowList[i]);
				var workflowOption = {
					value: workflow["process_name"],
					label: workflow["process_name"],
					title: workflow["process_desc"]
				};
				if (workflow["process_name"] == defaultWorkflowName) {
					workflowOption.selected = true;
					foundWorkflowName = true;
				}
				workflowOptions.push(workflowOption);
			}

			this._workflowSelect.store = new DataStore({
				"store": new ItemFileWriteStore({
					data: {
						identifier: 'value',
						label: 'label',
						items: workflowOptions
					}
				})
			});

			this._workflowSelect.searchAttr = "label";
			if (foundWorkflowName) {
				this._workflowSelect.set("value", defaultWorkflowName);
			}
			if (this.workflowReadOnly) {
				this._workflowSelect.set("disabled", true);
			}
		},

		_buildOwnerOptions: function(ownerList, defaultOwnerName) {
			var ownerOptions = [];
			for ( var i in ownerList) {
				var owner = dojojson.parse(ownerList[i]);
				var ownerOption = {
					value: owner["process_owner"],
					label: owner["process_owner"]
				};
				if (owner["process_owner"] == defaultOwnerName) {
					ownerOption.selected = true;
				}
				ownerOptions.push(ownerOption);
			}

			this._ownerSelect.store = new DataStore({
				"store": new ItemFileWriteStore({
					data: {
						identifier: 'value',
						label: 'label',
						items: ownerOptions
					}
				})
			});

			this._ownerSelect.searchAttr = "label";
			this._ownerSelect.set("value", defaultOwnerName);
		},

		_nop: null
	});
});
