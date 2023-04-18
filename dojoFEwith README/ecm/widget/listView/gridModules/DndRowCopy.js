/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"./DndRowMoveCopy"
], function(declare, DndRowMoveCopy) {

	/**
	 * @name ecm.widget.listView.gridModules.DndRowCopy
	 * @class This module provides dnd capability for the row, checking for security when hover over a row, & providing
	 *        copy action when dropping. When the drag starts, the icon is placed in copyOnly mode. The user can only
	 *        copy, they cannot move. This module extends ./DndRowMoveCopy. It adds the capability of forcing the avatar
	 *        into copy only mode.
	 * @augments ecm.widget.listView.gridModules.DndRowMoveCopy
	 */

	return declare(DndRowMoveCopy, {
		/** @lends ecm.widget.listView.gridModules.DndRowCopy.prototype */

		/**
		 * Returns boolean indicating if the drag should start in "copy" mode. Can be used by other modules to determine
		 * dnd support.
		 */
		isDragCopy: function() {
			return true;
		},

		/**
		 * @private Overrides the _onBeginDnd to force the avatar into copy only mode.
		 */
		_onBeginDnd: function(source) {
			var t = this;
			source.copyOnly = true;
			source.selfCopy = true;
			t.inherited(arguments);
		}

	});
});
