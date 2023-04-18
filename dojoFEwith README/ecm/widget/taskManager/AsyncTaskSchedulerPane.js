/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/dom-style",
	"dojo/date/stamp",
	"dijit/registry",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/layout/ContentPane",
	"ecm/MessagesMixin",
	"ecm/LoggerMixin",
	"dojo/text!./templates/AsyncTaskSchedulerPane.html",
	"ecm/widget/HoverHelp", //in template
	"ecm/widget/ValidationSimpleTextarea", //in template
	"ecm/widget/ValidationTextBox", //in template
	"idx/form/DateTimeTextBox", //in template
	"dijit/form/CheckBox", //in template
	"ecm/widget/RadioButton", //in template
	"ecm/widget/NumberSpinner" //in template
], function(declare, lang, style, stamp, registry, TemplatedMixin, WidgetsInTemplateMixin, ContentPane, MessagesMixin, LoggerMixin, templateString) {

	/**
	 * @name ecm.widget.taskManager.AsyncTaskSchedulerPane
	 * @class The scheduler pane for scheduling an asynchronous task. This pane will ask the user to input the name and
	 *        description of the task. It will also provide login information if needed and also prompt the user to
	 *        enter some type of scheduling information. This pane will be using fixed-interval scheduling. If you need
	 *        calendar-type scheduling, use {@link ecm.widget.taskMansager.AsyncTaskCalendarSchedulerPane} instead.
	 * @augments dijit.layout.ContentPane
	 * @since 2.0.2
	 */
	return declare("ecm.widget.taskManager.AsyncTaskSchedulerPane", [
		ContentPane,
		TemplatedMixin,
		WidgetsInTemplateMixin,
		MessagesMixin,
		LoggerMixin
	], {

		templateString: templateString,

		/**
		 * The current date used within this pane. It was created with the call new Date() and stored locally.
		 */
		currentDate: null,

		/**
		 * Whether to show login information or not. This will cause a title pane and two input boxes to appear asking
		 * the user for a userId and password. Login information is optional and is used if the custom task depends on
		 * it.
		 */
		showLoginInformation: false,

		/**
		 * Whether the login information is always required. If this is true, showLoginInformation is also automatically
		 * set to true. Additionally, the user will be required to provide the login information or the pane will not
		 * validate and the user will not be able to proceed.
		 */
		requireLoginInformation: false,

		/**
		 * Initializes this scheduler pane after creation.
		 */
		postCreate: function() {
			this.logEntry("postCreate()");
			this.inherited(arguments);

			this.connect(this.startImmediatelyCheckbox, "onClick", function(evt) {
				var checked = this.startImmediatelyCheckbox.get("value");
				this.startTimeDateTimeTextBox.set("disabled", checked);

				this.validateLoginPane();
			});

			this.connect(this.enableRecurrenceRadioButton, "onClick", "_reccurenceRadioButtonsClicked");
			this.connect(this.disableRecurrenceRadioButton, "onClick", "_reccurenceRadioButtonsClicked");

			if (!this.requireLoginInformation && !this.showLoginInformation) {
				style.set(this.loginInformation.domNode, "display", "none");
			} else
				this.disableLoginPane(false);
			this.validateLoginPane();

			//idx.DateTimeTtextbox doesn't throw onchange event.  Need to connect and call them directly
			this._multipleConnect(this.endTimeDateTimeBox.dateTextBox, "_onEndTimeDateInputChange");
			this._multipleConnect(this.endTimeDateTimeBox.timeTextBox, "_onEndTimeDateInputChange");
			this._multipleConnect(this.startTimeDateTimeTextBox.dateTextBox, "_onStartTimeDateInputChange");
			this._multipleConnect(this.startTimeDateTimeTextBox.timeTextBox, "_onStartTimeDateInputChange");

			this.currentDate = new Date();
			this.endTimeDateTimeBox.dateTextBox.constraints.min = this.currentDate;
			this.endTimeDateTimeBox.timeTextBox.constraints.min = this.currentDate;
			this.startTimeDateTimeTextBox.dateTextBox.constraints.min = this.currentDate;
			this.startTimeDateTimeTextBox.timeTextBox.constraints.min = this.currentDate;
			this.descriptionTextBox.set("value", ""); //remove whitespace

			this.connect(this.usernameTextBox.domNode, "onpaste", this._onPaste);
			this.connect(this.passwordTextBox.domNode, "onpaste", this._onPaste);
			
			this.logExit("postCreate()");
		},

		_multipleConnect: function(widget, call) {
			this.connect(widget, "onChange", call);
		},

		_onEndTimeDateInputChange: function(value) {
			setTimeout(lang.hitch(this, function() {
				var value = this.endTimeDateTimeBox.dateTextBox.get("value");
				if (value > this.endTimeDateTimeBox.dateTextBox.constraints.min) {
					this.endTimeDateTimeBox.timeTextBox.constraints.min = null;
				} else
					this.endTimeDateTimeBox.timeTextBox.constraints.min = this.currentDate;

				this.onInputChange();
			}), 0);

		},

		_onStartTimeDateInputChange: function(value) {
			setTimeout(lang.hitch(this, function() {
				var value = this.startTimeDateTimeTextBox.dateTextBox.get("value");
				if (value > this.startTimeDateTimeTextBox.dateTextBox.constraints.min) {
					this.startTimeDateTimeTextBox.timeTextBox.constraints.min = null;
				} else
					this.startTimeDateTimeTextBox.timeTextBox.constraints.min = this.currentDate;

				this.onInputChange();
			}), 0);
		},

		_reccurenceRadioButtonsClicked: function(evt) {
			var target = registry.getEnclosingWidget(evt.target);
			var checked = target == this.enableRecurrenceRadioButton;
			this.intervalNumberSpinner.set("disabled", !checked);
			this.intervalSelect.set("disabled", !checked);
			this.endTimeDateTimeBox.set("disabled", !checked);

			if (checked == true || this.startImmediatelyCheckbox.get("checked") == false) {
				this.disableLoginPane(false);
			} else
				this.disableLoginPane(true);
		},

		/**
		 * Validates whether the login pane should be enabled or disabled. If the login information is not required,
		 * this will disable the login pane information.
		 */
		validateLoginPane: function() {
			if (this.requireLoginInformation) {
				this.disableLoginPane(false);
			} else {
				if (this.enableRecurrenceRadioButton.get("checked") == true || this.startImmediatelyCheckbox.get("checked") == false) {
					this.disableLoginPane(false);
				} else
					this.disableLoginPane(true);
			}
		},

		/**
		 * Disables the login pane
		 */
		disableLoginPane: function(disabled) {
			if (!this.requireLoginInformation || !disabled) {
				this.loginInformation.set("disabled", disabled);
				this.usernameTextBox.set("disabled", disabled);
				this.passwordTextBox.set("disabled", disabled);

				if (disabled == true) {
					this.usernameTextBox.reset();
					this.passwordTextBox.reset();
				}
			}
		},

		/**
		 * Returns true if this scheduler pane correctly validates with all the necessary inputs provided and can
		 * proceed.
		 */
		validate: function() {
			this.validateLoginPane();

			//validate the name and description
			if (!this.nameTextBox.get("value")) {
				return false;
			}

			//validate the start time and start immediately
			if (this.startImmediatelyCheckbox.get("checked") == false) {
				if (!this.startTimeDateTimeTextBox.dateTextBox.get("value") || !this.startTimeDateTimeTextBox.timeTextBox.get("value"))
					return false;

				if (!this.schedule && this.startTimeDateTimeTextBox.get("value") < new Date())
					return false;

				if (this.loginInformation.get("disabled") != true) {
					if (!this.usernameTextBox.get("value") || !this.passwordTextBox.get("value")) {
						return false;
					}
				}
			}

			//validate the recurrence and interval
			if (this.enableRecurrenceRadioButton.get("checked") == true) {
				if (!this.intervalNumberSpinner.get("value") || !this.intervalSelect.get("value") || !this.endTimeDateTimeBox.dateTextBox.get("value") || !this.endTimeDateTimeBox.timeTextBox.get("value"))
					return false;

				if (!this.schedule && this.endTimeDateTimeBox.get("value") < new Date())
					return false;

				if (this.loginInformation.get("disabled") != true) {
					if (!this.usernameTextBox.get("value") || !this.passwordTextBox.get("value")) {
						return false;
					}
				}
			}

			//validate login information if it is required
			if (this.requireLoginInformation) {
				if (!this.usernameTextBox.get("value") || !this.passwordTextBox.get("value")) {
					return false;
				}
			}

			return true;
		},

		_onPaste: function() {
			// Allow the paste to finish before firing the change notification.
			setTimeout(lang.hitch(this, function() {
				this.onInputChange();
			}), 0);
		},
		
		/**
		 * Event invoked when an input on a field change
		 */
		onInputChange: function() {

		},

		/**
		 * Returns an {@link ecm.model.AsyncTaskSchedule} model object that contains all the information from this
		 * scheduler pane. Refer to the documentation in the schedule object for more information on what each field
		 * means. This information will be passed into the ECM TaskManager for scheduling. Users can call this by doing
		 * AsyncTaskSchedulerPane.get("schedule");
		 */
		_getScheduleAttr: function() {
			var name = this.nameTextBox.get("value");
			var startImmediately = this.startImmediatelyCheckbox.get("checked");
			var description = this.descriptionTextBox.get("value");
			var date = startImmediately ? null : this.startTimeDateTimeTextBox.get("value");
			var startTime = date ? date.getTime() : null;
			var username = null;
			var password = null;
			var email = this.emailAdressTextBox.get("value") || null;

			date = this.endTimeDateTimeBox.get("value");
			var endTime = date ? date.getTime() : null;
			var recurring = this.enableRecurrenceRadioButton.get("checked");

			var interval = 0;
			if (this.enableRecurrenceRadioButton.get("checked")) {
				interval = this.intervalNumberSpinner.get("value") || 0;
				var intervalSelect = this.intervalSelect.get("value");
				//convert the interval into miliseconds
				if (intervalSelect == "weeks") {
					interval = interval * 7 * 24 * 60 * 60 * 1000;
				} else if (intervalSelect == "days") {
					interval = interval * 24 * 60 * 60 * 1000;
				} else if (intervalSelect == "hours") {
					interval = interval * 60 * 60 * 1000;
				}
			}

			if (this.requireLoginInformation || this.loginInformation.get("disabled") != true) {
				username = this.usernameTextBox.get("value") || null;
				password = this.passwordTextBox.get("value") || null;
			}

			return {
				name: name,
				description: description,
				startTime: startTime,
				endTime: endTime,
				interval: interval,
				recurring: recurring,
				startImmediately: startImmediately,
				username: username,
				password: password,
				email: email
			};
		},

		/**
		 * Sets the scheduler pane with an existing {@link ecm.model.AsyncTaskSchedule} model object. It will initialize
		 * the pane with all the provided values. Users can call this by doing AsyncTaskSchedulerPane.set("schedule",
		 * schedule);
		 */
		_setScheduleAttr: function(schedule) {
			schedule = schedule || {};
			this.schedule = schedule;
			this.nameTextBox.set("value", schedule.name || "");
			this.descriptionTextBox.set("value", schedule.description || "");
			if (schedule.startTime)
				this.startTimeDateTimeTextBox.set("value", stamp.fromISOString(schedule.startTime));

			this.startImmediatelyCheckbox.set("checked", schedule.startImmediately == true || schedule.startTime == null);
			this.emailAdressTextBox.set("value", schedule.email);
			if (schedule.interval && lang.isString(schedule.interval)) {
				schedule.interval = parseInt(schedule.interval);
			}
			if (schedule.interval && schedule.interval != 0) {
				this.enableRecurrenceRadioButton.set("checked", true);
				var interval = 0;
				var intervalSelect = "days";
				var day = 24 * 24 * 60 * 60 * 1000;
				var hour = 60 * 60 * 1000;
				var week = 7 * 24 * 24 * 60 * 60 * 1000;
				if (schedule.interval >= week) {
					interval = schedule.interval / 1000 / 60 / 60 / 24 / 7;
					intervalSelect = "weeks";
				} else if (schedule.interval >= day) {
					interval = schedule.interval / 1000 / 60 / 60 / 24;
					intervalSelect = "days";
				} else if (schedule.interval >= hour) {
					interval = schedule.interval / 1000 / 60 / 60;
					intervalSelect = "hours";
				} else {
					interval = 1;
				}

				this.intervalNumberSpinner.set("value", interval);
				this.intervalSelect.set("value", intervalSelect);

				this.usernameTextBox.set("value", schedule.username);

				this.endTimeDateTimeBox.set("value", schedule.endTime ? stamp.fromISOString(schedule.endTime) : "");

			} else {
				this.disableRecurrenceRadioButton.set("checked", true);
				this.intervalNumberSpinner.set("value", "1");
				this.intervalSelect.set("value", "days");
			}
		}
	});
});
