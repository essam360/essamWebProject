/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"./_ModelObject",
], function(declare, ModelObject) {

	/**
	 * @name ecm.model.AsyncTaskSchedule
	 * @class Represents a schedule used for scheduling tasks with the ECM TaskManager. It can be used to do calendar or
	 *        fixed-interval scheduling. Calendar type scheduling is based on J2EE specification for timer services. You
	 *        can read the the javadoc here: http://docs.oracle.com/javaee/6/api/javax/ejb/ScheduleExpression.html.
	 *        Fixed-interval scheduling is used for scheduling on a specific time period (a date represented in
	 *        milliseconds) and can reoccur on a fixed interval until an end time. Only one type of schedule should be
	 *        specified. If both are specified, the calendar scheduling will take precedence.
	 * @augments ecm.model._ModelObject
	 * @since 2.0.3
	 */
	var schedule = declare("ecm.model.AsyncTaskSchedule", [
		ModelObject
	], {
		/** @lends ecm.model.AsyncTaskSchedule.prototype */

		/**
		 * The name of the task that will be scheduled. The name is required.
		 */
		name: null,

		/**
		 * The description of the task that will be scheduled. The description is optional.
		 */
		description: null,

		/**
		 * If authentication for the task is required, the userId of the task that will be scheduled. The userId is
		 * optional.
		 */
		userId: null,

		/**
		 * If authentication for the task is required, the password of the task that will be scheduled. It is up to the
		 * caller to encrypt this password before being saved. The password is optional.
		 */
		password: null,

		/**
		 * The email address of the task that will be scheduled. The email address is optional but is used for
		 * notification purposes such as when the task starts, completes, or fails.
		 */
		emailAddress: null,

		/**
		 * Whether the task that will be scheduled will reoccur or repeat. This must be set to true for recurring tasks
		 * or else a number of the fixed schedule or calendar schedule values will be ignored.
		 */
		isRecurring: false,

		/**
		 * The mode for this schedule. It can be
		 * <ul>
		 * <li>"0" - Single. This means the task will only run once.</li>
		 * <li>"1" - FixedIntervalSchedule. This means the task will reoccur on a fixed interval.</li>
		 * <li>"4" - CalendarSchedule. This means the task will reoccur based on a calendar schedule.</li>
		 * </ul>
		 */
		mode: null,

		/**
		 * A single schedule only runs once. It only has an initial start time represented by a date in milliseconds.
		 */
		singleSchedule: {
			/**
			 * The start time for this schedule
			 */
			startTime: null
		},

		/**
		 * A fixed interval schedule requires an initial start time represented by a date in milliseconds. If it is set
		 * to reoccur (optional), it will continue to repeat itself based on the repeat cycle (which is in
		 * milliseconds). It will continue to repeat until the end time specified. For example, a task can be set to
		 * start at a specific day at 6 PM. It can be set to reoccur every hour (represented in milliseconds: 60 x 60 x
		 * 1000) and will continue to do so till end time. This type of repeated interval does not take into account day
		 * light savings or differences in days in a month. For calendar-type scheduling, refer to the schedule below.
		 */
		fixedIntervalSchedule: {
			/**
			 * The start time for this schedule
			 */
			startTime: null,

			/**
			 * If the schedule is set to reoccurr, the repeat cycle in milliseconds will be used to constantly repeat
			 * the task until the end time is reached.
			 */
			repeatCycle: null,

			/**
			 * The end time of this schedule. If the schedule is set to reoccur, it will continue to repeat until it has
			 * reached the end time.
			 */
			endTime: null
		},

		/**
		 * Calendar type scheduling is used to perform scheduling based on a calendar dates and times. It is based on
		 * J2EE specification for timer services. You can read schedule expression javadoc here:
		 * http://docs.oracle.com/javaee/6/api/javax/ejb/ScheduleExpression.html. A brief description is listed below
		 * for each variable but refer to the prior link for more information.
		 */
		calendarSchedule: {

			/**
			 * One or more seconds within a minute. The allowable range is 0 to 59.
			 */
			second: 0,

			/**
			 * One or more minutes within an hour. The default value is 0. The allowable range is 0 to 59.
			 */
			minute: 0,

			/**
			 * One or more hours within a day. The default value is 0. The allowable range is 0 to 23.
			 */
			hour: 0,

			/**
			 * One or more days within a week. The default value is 0. The allowable values are: 0 to 7, Sun, Mon, Tue,
			 * Wed, Thu, Fri, Sat.
			 */
			dayOfWeek: "*",

			/**
			 * One or more days within a month. The default value is 0. The allowable values are: 1 to 31, -7 to -1,
			 * Last, [1st, 2nd, 3rd, 4th, 5th, Last], [Sun, Mon, Tue, Wed, Thu, Fri, Sat].
			 */
			dayOfMonth: "*",

			/**
			 * One or more months within a year. The default value is 0. The allowable values are: 1-12, Jan, Feb, Mar,
			 * Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec.
			 */
			month: "*",

			/**
			 * A particular calendar year. The default value is 0. The allowable values are any 4 digits.
			 */
			year: "*",

			/**
			 * The start date for this schedule.
			 */
			startTime: null,

			/**
			 * The end date for this schedule. If it is set to null, it will never end.
			 */
			endTime: null,

			/**
			 * The Java timezone id for this schedule.
			 */
			timezone: null
		}
	});

	return schedule;
});
