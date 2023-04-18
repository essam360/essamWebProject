/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/dom-construct",
	"dojo/dom-style",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/layout/ContentPane",
	"idx/layout/TitlePane",
	"ecm/MessagesMixin",
	"ecm/LoggerMixin",
	"dojo/text!./templates/AsyncTaskCalendarSchedulerPane.html",
	"ecm/widget/HoverHelp", //in template
	"ecm/widget/ValidationSimpleTextarea", //in template
	"ecm/widget/ValidationTextBox", //in template
	"ecm/widget/taskManager/CalendarScheduler" //in template
], function(declare, lang, construct, style, TemplatedMixin, WidgetsInTemplateMixin, ContentPane, TitlePane, MessagesMixin, LoggerMixin, templateString) {

	/**
	 * @name ecm.widget.taskManager.AsyncTaskCalendarSchedulerPane
	 * @class The main scheduler pane for scheduling an asynchronous task using calendar inputs. This pane will ask the
	 *        user to enter the name and description of the task. It will also prompt the user to enter calendar
	 *        scheduling information. Refer to {@link ecm.model.AsyncTaskScheduler} for more information about calendar
	 *        scheduling.
	 * @augments dijit.layout.ContentPane
	 * @since 2.0.3
	 */
	return declare("ecm.widget.taskManager.AsyncTaskCalendarSchedulerPane", [
		ContentPane,
		TemplatedMixin,
		WidgetsInTemplateMixin,
		MessagesMixin,
		LoggerMixin
	], {

		templateString: templateString,

		/**
		 * Whether to show email notification title pane
		 */
		showEmailNotification: true,

		/**
		 * Array of all the title pane sections that being displayed in this schedule container. By default, it will
		 * contain a schedule information and email notification sections.
		 */
		titlePaneSections: null,

		/**
		 * Creates this scheduler pane and performs initialization.
		 */
		postCreate: function() {
			this.logEntry("postCreate()");
			this.inherited(arguments);

			this._titlePanes = [];
			this.titlePaneSections = [];

			this.descriptionTextBox.set("value", ""); //remove whitespace
			this.connect(this.calendarScheduler, "onChange", "onChange");

			this._titlePanes[0] = this.scheduleInformationTitlePane;
			this.titlePaneSections[0] = this.scheduleInformationSection;
			if (!this.showEmailNotification) {
				this.notificationTitlePane.destroy();
			} else {
				this.titlePaneSections[1] = this.notificationSection;
				this._titlePanes[1] = this.notificationTitlePane;
			}

			this.logExit("postCreate()");
		},

		/**
		 * Adds a new title pane position onto this scheduler pane. The title pane section can be any custom user
		 * interface that the plugin writer can include to prompt users when scheduling a task. The title pane section
		 * should contain a validate() function to perform validation specific to the pane. For each title pane section
		 * added, an {@link idx.layout.TitlePane} container will be created around it.
		 * 
		 * @param titlePaneTitle
		 *            The title to be placed onto the TitlePane container
		 * @param titlePaneSection
		 *            The title pane section dijit that will be included. It can contain custom user interfaces.
		 * @param position
		 *            The position to insert the title pane section to. If none is provided, it will be inserted last.
		 */
		addTitlePaneSection: function(titlePaneTitle, titlePaneSection, position) {
			if (titlePaneSection) {
				var titlePane = new TitlePane({
					title: titlePaneTitle,
					content: titlePaneSection
				});
				this._titlePanes.splice(position, 0, titlePane);
				this.titlePaneSections.push(titlePaneSection);
				construct.place(titlePane.domNode, this.domNode, position);
				return titlePane;
			}
		},

		/**
		 * Removes a title pane section from this scheduler pane. The entire title pane will be destroyed and not be
		 * displayed anymore.
		 * 
		 * @param position
		 *            The position of the title pane section to be removed.
		 */
		removeTitlePaneSection: function(position) {
			var titlePane = this._titlePanes[position];
			this._titlePanes.splice(position, 1);
			this.titlePaneSections.splice(position, 1);
			titlePane.destroy();
		},

		/**
		 * Returns true if this scheduler pane correctly validates. If it doesn't validate, it will return the name of
		 * the field that caused it not to validate successfully. It will perform validation by calling any custom title
		 * pane sections added as well. It assumes that the custom title pane sections will return the invalid field as
		 * well.
		 */
		validate: function() {

			//validate the name and description
			if (!this.nameTextBox.get("value")) {
				return this.messages.Name;
			}

			var valid = this.calendarScheduler.validate();
			if (valid != true)
				return valid;

			//validate each title pane section
			for ( var i in this.titlePaneSections) {
				var section = this.titlePaneSections[i];
				if (section && section.validate)
					valid = section.validate();

				if (valid != true)
					return valid;
			}

			return true;
		},

		/**
		 * Event invoked when an input on a field change
		 */
		onChange: function() {

		},

		/**
		 * Returns an {@link ecm.model.AsyncTaskSchedule} model object that contains all the information from this
		 * scheduler pane. Refer to the documentation in the schedule object for more information on what each field
		 * means. This information will be passed into the ECM TaskManager for scheduling.
		 */
		_getScheduleAttr: function() {
			var schedule = this.calendarScheduler.getSchedule();
			schedule.name = this.nameTextBox.get("value");
			schedule.emailAddress = this.emailAdressTextBox.get("value");
			schedule.description = this.descriptionTextBox.get("value");
			return schedule;
		},

		/**
		 * Sets the scheduler pane with an existing {@link ecm.model.AsyncTaskSchedule} model object. It will initialize
		 * the pane with all the provided values.
		 */
		_setScheduleAttr: function(schedule) {
			if (this.calendarScheduler.setSchedule)
				this.calendarScheduler.setSchedule(schedule);
			this.nameTextBox.set("value", schedule.name);
			this.emailAdressTextBox.set("value", schedule.emailAddress);
			this.descriptionTextBox.set("value", schedule.description);
		},

		/**
		 * Resizes this pane
		 */
		resize: function() {
			this.inherited(arguments);
			style.set(this.calendarScheduler.domNode, "width", "auto");
			style.set(this.calendarScheduler.domNode, "height", "auto");
			this.calendarScheduler.resize();
		}
	});
});
