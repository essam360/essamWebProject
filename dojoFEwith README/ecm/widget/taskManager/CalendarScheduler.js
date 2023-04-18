/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/array",
	"dojo/_base/lang",
	"dojo/dom-style",
	"dojo/dom-class",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/layout/ContentPane",
	"dijit/registry",
	"dijit/focus",
	"ecm/MessagesMixin",
	"ecm/LoggerMixin",
	"ecm/model/AsyncTaskSchedule",
	"ecm/model/Desktop",
	"dojo/text!./templates/CalendarScheduler.html",
	"ecm/widget/HoverHelp", //in template
	"idx/form/DateTimeTextBox", //in template
	"dijit/form/Select", //in template
	"ecm/widget/RadioButton", //in template
	"idx/layout/TitlePane", //in template
	"ecm/widget/TextBox", //in template
	"idx/form/DateTextBox", //in template
	"idx/form/TimeTextBox" //in template
], function(declare, array, lang, style, domClass, TemplatedMixin, WidgetsInTemplateMixin, ContentPane, registry, focusUtil, MessagesMixin, LoggerMixin, AsyncTaskSchedule, Desktop, templateString) {

	/**
	 * @name ecm.widget.taskManager.CalendarScheduler
	 * @class The scheduler pane to perform calendar scheduling for an asynchronous task. This pane will allow users to
	 *        set tasks to run now, run once at a later start time, or can run reoccuringly with a calendar schedule
	 *        such as once every Monday or once every month. By setting the values accordingly and calling
	 *        getSchedule(), an {@link ecm.model.AsyncTaskSchedule} will be created with all the appropriate calendar
	 *        schedule portion filled out. This portion will match the schedule expression set in the J2EE specification
	 *        for timer services. Refer to AsyncTaskSchedule for more detailed information on the schedule.
	 * @augments dijit.layout.ContentPane
	 * @since 2.0.3
	 */
	return declare("ecm.widget.taskManager.CalendarScheduler", [
		ContentPane,
		TemplatedMixin,
		WidgetsInTemplateMixin,
		MessagesMixin,
		LoggerMixin
	], {
		/** @lends ecm.widget.taskManager.CalendarScheduler.prototype */

		templateString: templateString,

		/**
		 * @private
		 */
		postCreate: function() {
			//idx.DateTimeTtextbox doesn't throw onchange event.  Need to connect and call them directly
			this.connect(this.repeatStartingDateBox.dateTextBox, "onChange", "_onStartTimeDateInputChange");
			this.connect(this.repeatStartingDateBox.timeTextBox, "onChange", "_onStartTimeDateInputChange");

			this.connect(this.startTimeDateTimeBox.dateTextBox, "onChange", "_onStartTimeDateInputChange");
			this.connect(this.startTimeDateTimeBox.timeTextBox, "onChange", "_onStartTimeDateInputChange");

			this.connect(this.toEndingTimeBox, "onChange", "_onStartTimeDateInputChange");

			this._dayOfWeekButtons = [
				this.sundayButton,
				this.mondayButton,
				this.tuesdayButton,
				this.wednesdayButton,
				this.thursdayButton,
				this.fridayButton,
				this.saturdayButton
			];

			this.connect(this.startImmediatelyCheckbox, "onClick", function(evt) {
				var checked = this.startImmediatelyCheckbox.get("value");
				this.startTimeDateTimeBox.set("disabled", checked);
				this.startTimeDateTimeBox.set("required", !checked);
			});

			this.connect(this.runOnceRadioButton, "onChange", function(checked) {
				this.setEnableRunOnce(checked);
				this.onChange();
			});

			this.connect(this.repeatRadioButton, "onChange", function(checked) {
				this.setEnableRunAtSchedule(checked);
				this.onChange();
			});

			this.connect(this.repeatSelector, "onChange", function(value) {
				if (value == "weekly" || value == "hourly")
					style.set(this.repeatEveryRow, "display", "");
				else
					style.set(this.repeatEveryRow, "display", "none");

				//change the hourly select to a end date time text box instead
				if (value == "hourly") {
					style.set(this.intervalRow, "display", "");
					style.set(this.toEndingTime.domNode, "display", "");
					style.set(this.toLabel, "display", "");
					this.toEndingTime.set("disabled", false);
				} else {
					style.set(this.intervalRow, "display", "none");
					style.set(this.toEndingTime.domNode, "display", "none");
					style.set(this.toLabel, "display", "none");
					this.toEndingTime.set("disabled", true);
				}

				var button = this._dayOfWeekButtons[this._currentDate.getDay()];
				button.set("checked", true);
				this._toggleCalendarButton(null, button);

				this.onChange();
				this.resize();
			});

			this._currentDate = new Date();
			this.repeatStartingDateBox.dateTextBox.constraints.min = this._currentDate;
			this.repeatStartingDateBox.timeTextBox.constraints.min = this._currentDate;
			this.startTimeDateTimeBox.dateTextBox.constraints.min = this._currentDate;
			this.startTimeDateTimeBox.timeTextBox.constraints.min = this._currentDate;
			style.set(this.toEndingTime.dateTextBox.domNode, "display", "none");
		},

		_onStartTimeDateInputChange: function(value) {
			var value = this.repeatStartingDateBox.dateTextBox.get("value");
			if (value > this.repeatStartingDateBox.dateTextBox.constraints.min) {
				this.repeatStartingDateBox.timeTextBox.constraints.min = null;
			} else
				this.repeatStartingDateBox.timeTextBox.constraints.min = this._currentDate;

			if (value) {
				this.toEndingTime.dateTextBox.set("value", value);
				this.toEndingTime.timeTextBox.constraints.min = this.repeatStartingDateBox.timeTextBox.get("value");
				this.endDateBox.constraints.min = new Date(value.getTime() + 86400000);
			}

			value = this.startTimeDateTimeBox.dateTextBox.get("value");
			if (value > this.startTimeDateTimeBox.dateTextBox.constraints.min) {
				this.startTimeDateTimeBox.timeTextBox.constraints.min = null;
			} else
				this.startTimeDateTimeBox.timeTextBox.constraints.min = this._currentDate;

			this.onChange();
		},

		_toggleCalendarButton: function(evt, button) {
			if (!button)
				button = registry.getEnclosingWidget(evt.target);

			if (button.get("checked") == true)
				domClass.add(button.domNode, "solid");
			else
				domClass.remove(button.domNode, "solid");

			this.onChange();
		},

		/**
		 * Enable or disables all the widgets for the run once radio selection
		 * 
		 * @param enable
		 *            True to enable and false to disable the widgets
		 */
		setEnableRunOnce: function(enable) {
			this.startImmediatelyCheckbox.set("disabled", !enable);
			if (!this.startImmediatelyCheckbox.get("checked")) {
				this.startTimeDateTimeBox.set("disabled", !enable);
				this.startTimeDateTimeBox.set("required", enable);
			}
		},

		/**
		 * Enable or disables all the widgets for the run at schedule radio selection
		 * 
		 * @param enable
		 *            True to enable and false to disable the widgets
		 */
		setEnableRunAtSchedule: function(enable) {
			this.repeatSelector.set("disabled", !enable);

			for ( var i in this._dayOfWeekButtons) {
				this._dayOfWeekButtons[i].set("disabled", !enable);
			}

			this.toEndingTime.set("disabled", !enable);

			this.intervalSelector.set("disabled", !enable);
			this.intervalSelector.set("required", enable);

			this.repeatStartingDateBox.set("disabled", !enable);
			this.repeatStartingDateBox.set("required", enable);

			this.toEndingTime.set("disabled", !enable);
			this.toEndingTime.set("required", enable);

			this.endDateBox.set("disabled", !enable);
		},

		/**
		 * Returns true if values are provided for all the necessary inputs.
		 */
		validate: function() {
			var currentDate = new Date();
			var currentTime = currentDate.getTime();
			if (this.runOnceRadioButton.get("checked") && !this.startImmediatelyCheckbox.get("checked")) {
				//verify there's a starting date and it's larger than the current date
				var value = this.startTimeDateTimeBox.get("value");
				if (!value || value == "" || value.getTime() <= currentTime) {
					this.startTimeDateTimeBox.timeTextBox.constraints.min = currentDate;
					return this.messages.taskSchedulerPane_startTime;
				}
			}

			if (this.repeatRadioButton.get("checked")) {
				//verify there's a starting date and it's larger than the current date
				var startValue = this.repeatStartingDateBox.get("value");
				var startTimeValue = this.repeatStartingDateBox.timeTextBox.get("value");
				if (!startValue || startValue == "" || startValue.getTime() <= currentTime || startTimeValue == null || !this.repeatStartingDateBox.isValid()) {
					this.repeatStartingDateBox.timeTextBox.constraints.min = currentDate;
					this.repeatStartingDateBox.domNode.blur();
					return this.messages.taskSchedulerPane_startTime;
				}

				//verify that the end date is after the start date if it's specified.
				var endDateValue = this.endDateBox.get("value");
				if ((endDateValue != null && !endDateValue && endDateValue.getTime() <= startValue.getTime()) || !this.endDateBox.isValid()) {
					this.endDateBox.constraints.min = startValue;
					this.endDateBox.domNode.blur();
					return this.messages.taskSchedulerPane_ending;
				}

				var repeatValue = this.repeatSelector.get("value");

				if (repeatValue == "hourly" || repeatValue == "weekly") {
					//verify that there is at least one selected weekday
					var oneEnabledButton = false;
					for ( var i in this._dayOfWeekButtons) {
						if (this._dayOfWeekButtons[i].get("checked"))
							oneEnabledButton = true;
					}
					if (!oneEnabledButton)
						return this.messages.taskSchedulerPane_repeatsEvery;

					//verify that the end time is after the start time
					if (repeatValue == "hourly") {
						var toEndingTime = this.toEndingTime.get("value").getTime();
						if (toEndingTime == null || !toEndingTime || toEndingTime <= startValue.getTime() || !this.toEndingTime.isValid()) {
							this.toEndingTime.timeTextBox.constraints.min = startValue;
							this.toEndingTime.domNode.blur();
							return this.messages.taskSchedulerPane_ending;
						}
					}

				}
			}

			return true;
		},

		/**
		 * Event invoked when an input on a field change
		 */
		onChange: function() {

		},

		/**
		 * Returns a {@link ecm.model.AsyncTaskSchedule} object with all the appropriate calendar schedule portion
		 * filled out. This portion will match the schedule expression set in the J2EE specification for timer services.
		 * Refer to AsyncTaskSchedule for more detailed information on the schedule.
		 */
		getSchedule: function() {
			var scheduleDescription = null;
			var repeatSelectorValue = this.repeatSelector.get("value");
			var dayOfWeek = "*";
			var dayOfMonth = "*";
			var end = null;
			var startTime = null;

			if (this.runOnceRadioButton.get("checked") && !this.startImmediatelyCheckbox.get("checked"))
				startTime = this.startTimeDateTimeBox.get("value");
			else if (this.repeatRadioButton.get("checked"))
				startTime = this.repeatStartingDateBox.get("value");

			//add one minute to the buffer if the start time is less than the current time.
			var currentDate = new Date();
			if (startTime && startTime.getTime() < currentDate.getTime())
				startTime = new Date(currentDate.getTime() + 60000);

			var hour = 0;
			var minute = 0;
			var second = 0;
			var month = "*";
			var year = "*";

			if (startTime != null) {
				hour = startTime.getHours();
				minute = startTime.getMinutes();
				//always set seconds to 59 seconds as a small buffer
				second = 59;
			}

			if (this.repeatRadioButton.get("checked")) {
				if (repeatSelectorValue == "hourly") {
					dayOfWeek = this.getWeekdaysSelected();

					var endTime = this.toEndingTime.get("value");
					var interval = this.intervalSelector.get("value");
					if (interval == "1") {
						hour = startTime.getHours() + "-" + endTime.getHours();
					}
					//half hour
					else {
						hour = startTime.getHours() + "-" + endTime.getHours();
						minute = "*/30";
					}
				} else if (repeatSelectorValue == "weekly") {
					dayOfWeek = this.getWeekdaysSelected();
				} else if (repeatSelectorValue == "monthly") {
					dayOfMonth = startTime.getDate() - 1;
				} else if (repeatSelectorValue == "yearly") {
					month = startTime.getMonth() + 1;
				}
				end = this.getEndDateSet();
			}

			var mode = (this.runOnceRadioButton.get("checked")) ? Desktop.taskManager.ScheduleMode.Single : Desktop.taskManager.ScheduleMode.CalendarSchedule;

			var asyncTaskSchedule = new AsyncTaskSchedule({
				isRecurring: (mode == Desktop.taskManager.ScheduleMode.CalendarSchedule || mode == Desktop.taskManager.ScheduleMode.FixedIntervalSchedule) ? true : false,
				mode: mode
			});

			if (mode == Desktop.taskManager.ScheduleMode.Single) {
				asyncTaskSchedule.singleSchedule = {
					startTime: startTime ? startTime.getTime() : null
				};
			} else {
				asyncTaskSchedule.calendarSchedule = {
					second: second,
					minute: minute,
					hour: hour,
					dayOfWeek: dayOfWeek ? dayOfWeek : "0",
					dayOfMonth: dayOfMonth,
					month: month,
					year: year,
					endTime: end ? end.getTime() : end,
					startTime: startTime ? startTime.getTime() : null
				};
			}

			return asyncTaskSchedule;
		},

		/**
		 * Returns the end date set. If an actual end date was set, that date value will be returned.
		 */
		getEndDateSet: function() {
			return this.endDateBox.get("value");
		},

		/**
		 * Returns a comma-delimited list of the weekdays selected in this scheduler pane. 0 represents Sunday and 6
		 * represents Saturday. For example if Sunday and Tuesday are selected, 0,2 will be returned.
		 */
		getWeekdaysSelected: function() {
			var weekday = "";

			for ( var i in this._dayOfWeekButtons) {
				if (this._dayOfWeekButtons[i].get("checked"))
					weekday = weekday + i + ",";
			}

			if (weekday.indexOf(",", weekday.length - 1) != -1)
				weekday = weekday.substring(0, weekday.length - 1);

			return weekday;
		},

		_getScheduleAttr: function() {
			return this.getSchedule();
		},

		_setScheduleAttr: function(schedule) {
			this.setSchedule(schedule);
		}
	});
});
