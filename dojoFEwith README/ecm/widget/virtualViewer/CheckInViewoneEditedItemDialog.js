/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare", //
	"ecm/widget/dialog/CheckInDialog",
	"ecm/widget/virtualViewer/_BuildViewoneContentMixin"
], //
function(declare, CheckInDialog, _BuildViewoneContentMixin) {

	/**
	 * @name ecm.widget.virtualViewer.CheckInViewoneEditedItemDialog
	 * @class Provides a dialog box that is used to check documents in to a repository.
	 * @augments ecm.widget.dialog.CheckInDialog
	 */
	return declare("ecm.widget.virtualViewer.CheckInViewoneEditedItemDialog", [
		CheckInDialog,
		_BuildViewoneContentMixin
	], {
		/** @lends ecm.widget.dialog.CheckInDialog.prototype */
		
		postCreate: function () {
			this.inherited(arguments);
			this._appendSaveAsTypeOptionNode();
		},

		_getCheckInFunctionName: function () {
			return "onViewoneBuild";
		},
		
		onViewoneBuild: function () {
			if (!this.isValid(true))
				return false;
			if (this.isViewoneContentSet()) {
				this.onCheckin();
				return false;
			}
			return true;
		}
	});
});
