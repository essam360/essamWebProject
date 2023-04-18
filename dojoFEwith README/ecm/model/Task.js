/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"./_ModelObject"
], function(declare, _ModelObject) {

	/**
	 * @private Part of undo/redo mechanism which is not complete
	 * @name ecm.model.Task
	 * @class Represents the execution of a change that is recorded so that the change can be undone. For a change
	 *        within the model that can be undone, a <code>Task</code> object is created and placed in the undo queue
	 *        of the <code>ecm.model.Desktop</code> object.
	 *        <p>
	 *        The <code>Task</code> subclass must implement functions to support undoing and redoing changes.
	 *        </p>
	 * @augments ecm.model._ModelObject
	 */
	return declare("ecm.model.Task", [
		_ModelObject
	], {
		/** @lends ecm.model.Task.prototype */

		/**
		 * A function to invoke in order to perform the task.
		 */
		doit: function() {
		},

		/**
		 * A function to invoke in order to undo the performed task.
		 */
		undoit: function() {
		}
	});
});
