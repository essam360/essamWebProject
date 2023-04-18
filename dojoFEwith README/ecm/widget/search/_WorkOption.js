/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/array",
	"dojo/_base/lang",
	"dojo/dom-class",
	"dojo/json",
	"dojo/store/Memory",
	"dijit/_WidgetBase",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/form/RadioButton",
	"dijit/form/ComboBox",
	"dijit/form/FilteringSelect",
	"dijit/form/Select",
	"ecm/model/Desktop",
	"../_HoverHelpMixin",
	"dojo/text!./templates/_WorkOption.html"
], //
function(declare, array, lang, domClass, dojojson, Memory, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, RadioButton, ComboBox, FilteringSelect, Select, Desktop, _HoverHelpMixin, template) {

	/**
	 * @private Part of the {@link ecm.widget.search.SearchMoreOptions} widget
	 * @name ecm.widget.search._WorkOption
	 * @class Provides filters that can be used to define search criteria based on work.
	 * @augments dijit._WidgetBase
	 */
	return declare("ecm.widget.search._WorkOption", [
		_WidgetBase,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		_HoverHelpMixin
	], {
		/** @lends ecm.widget.search._WorkOption.prototype */
		templateString: template,

		constructor: function() {
			this._messages = ecm.messages;
			this._steps = {};
		},

		postCreate: function() {
			this.inherited(arguments);

			// Set message text here to avoid problems with single quotes in fr.
			this._processSelect.invalidMessage = this._messages.workflow_value_error;
			this._stepSelect.invalidMessage = this._messages.search_work_filter_step_error;
			this._processSelect.set("placeHolder", this._messages.search_work_filter_process_all);
			this._stepSelect.set("placeHolder", this._messages.search_work_filter_step_all);
			this._ownerComboBox.set("placeHolder", this._messages.search_work_filter_owner_all);
		},

		initialize: function(repository) {
			if (this._initialized)
				return;

			if (!this.isOn()) {
				// Defer until it is switched on
				this._repository = repository;
				return;
			}

			var self = this;
			ecm.model.Request.invokeService("getProcesses", repository.type, {
				repositoryId: repository.id,
				includeSteps: true
			}, function(response) {
				array.forEach(response.processes, function(json) {
					var process = dojojson.parse(json);
					self._steps[process.process_name] = process.process_steps;
					self._processSelect.store.add({
						id: process.process_name,
						name: process.process_name
					});
				});

				if (response.users && response.users.length > 0) {
					array.forEach(response.users, function(json) {
						var user = dojojson.parse(json);
						self._ownerComboBox.store.add({
							id: user.process_owner,
							name: user.process_owner
						});
					});
				} else { // current user must not have access rights to the list of users
					self._ownerComboBox.store.add({
						id: Desktop.userId,
						name: Desktop.userId
					});
				}

				self._initialized = true;
				if (self._work) {
					self.setWork(self._work);
					delete self._work;
				}
			});
		},

		setOn: function(on) {
			if (!this._disabled)
				(on ? this._onRadioButton : this._offRadioButton).set("checked", true);
		},

		isOn: function() {
			return !this._disabled && this._onRadioButton.get("checked");
		},

		setWork: function(work) {
			if (!this._initialized) {
				// Defer until it is initialized
				this._work = work;
				return;
			}

			var invalidProcess = false;
			this._statusSelect.set("value", work && work.status ? work.status : " ");
			if (work && work.step && work.process && work.process != this._processSelect.get("value")) { // different process
				// Defer setting the step until the list is populated in _handleProcessSelectChange
				this._step = work.step;
			}
			this._processSelect.set("value", work && work.process ? work.process : "");
			if (work && work.process && !this._processSelect.get("value")) { // process not listed
				this._step = null;
				invalidProcess = true;
			}
			if (!this._step) // not deferred
				this._stepSelect.set("value", work && work.step && !invalidProcess ? work.step : "");
			this._ownerComboBox.set("value", work && work.owner && !invalidProcess ? work.owner : "");
		},

		getWork: function() {
			return !this._initialized ? this._work : {
				status: this._statusSelect.get("value") === " " ? "" : this._statusSelect.get("value"),
				process: this._processSelect.get("value"),
				step: this._stepSelect.get("value"),
				owner: this._ownerComboBox.get("value") && this._ownerComboBox.get("value").trim() ? this._ownerComboBox.get("value") : ""
			};
		},

		getSummary: function() {
			return this.isOn() ? this._messages.search_work_filter_enabled : "";
		},

		_setDisabledAttr: function(disabled) {
			if (!disabled != !this._disabled) {
				if (disabled)
					this._wasOn = this.isOn(); // restore when re-enabled
				else
					this._disabled = false; // so it can be turned on
				domClass[disabled ? "add" : "remove"](this.domNode, "dijitDisabled");
				this.setOn(disabled ? false : this._wasOn);
				this._onRadioButton.set("disabled", disabled);
				this._offRadioButton.set("disabled", disabled);
				this._disabled = disabled;
			}
		},

		_getDisabledAttr: function() {
			return this._disabled;
		},

		validate: function() {
			return !this.isOn() || (this._processSelect.isValid() && this._stepSelect.isValid());
		},

		onChange: function() {
		},

		_handleOffRadioButtonChange: function(checked) {
			if (!checked && !this._initialized && this._repository) {
				this.initialize(this._repository);
				delete this._repository;
			}

			domClass[checked ? "add" : "remove"](this._workContainerNode, "dijitDisabled");
			this._statusSelect.set("disabled", checked);
			this._processSelect.set("disabled", checked);
			this._stepSelect.set("disabled", checked || !this._processSelect.get("value"));
			this._ownerComboBox.set("disabled", checked || !this._processSelect.get("value"));
			this.onChange();
		},

		_handleProcessSelectChange: function(process) {
			var steps = this._steps ? this._steps[process] : null;
			this._populateStepSelect(steps);
			this._stepSelect.set("value", this._step || "");
			if (!process)
				this._ownerComboBox.set("value", "");
			this._stepSelect.set("disabled", !process || !this.isOn());
			this._ownerComboBox.set("disabled", !process || !this.isOn());
			this._step = null;
		},

		_populateStepSelect: function(steps) {
			var data = array.map(steps, function(step) {
				return {
					id: step,
					name: step
				};
			});
			var store = new Memory({
				data: data
			});
			this._stepSelect.set("store", store);
		}
	});

});
