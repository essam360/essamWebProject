/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"../LoggerMixin"
], function(declare, LoggerMixin) {

	/**
	 * @name ecm.widget.UnselectableFolder
	 * @class This class is used for folders that should not be selectable in the folder selector control.
	 */
	return declare("ecm.widget.UnselectableFolder", [
		LoggerMixin
	], {
		/** @lends ecm.widget.UnselectableFolder.prototype */

		folderId: "",
		allowSelectChildren: true,
		tooltipMessage: "",

		/**
		 * @param folderId
		 *            The String id of the selected folder.
		 * @param allowSelectChildren
		 *            A Boolean indicating whether children of the selected folder are available for selection.
		 * @param tooltipMessage
		 *            A String that may be used by the UI as a tooltip for the selected folder.
		 */
		constructor: function(/*String*/folderId, /*Boolean*/allowSelectChildren, /*String*/tooltipMessage) {
			var methodName = "constructor";
			this.logEntry(methodName);

			this.folderId = folderId;
			if (allowSelectChildren != null) {
				this.allowSelectChildren = allowSelectChildren;
			}

			if (tooltipMessage != null) {
				this.tooltipMessage = tooltipMessage;
			}

			this.logExit(methodName);
		}
	});
});
