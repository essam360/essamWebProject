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
	 * @name ecm.widget.listView.gridModules.DndDropOnly
	 * @class This module provides drop capability onto a row and checks for security when hover over a row. This module
	 *        extends ./DndRowMoveCopy. It adds the capability of disallowing dragging of rows.
	 * @augments ecm.widget.listView.gridModules.DndRowMoveCopy
	 * @since 2.0.2
	 */

	return declare(DndRowMoveCopy, {
		/** @lends ecm.widget.listView.gridModules.DndDropOnly.prototype */

		/**
		 * Returns boolean indicating if dragging is allowed. Can be used by other modules to determine dnd support.
		 */
		isDraggingAllowed: function() {
			return false;
		},

		/**
		 * @private Overrides _checkDndReady to force no dragging.
		 */
		_checkDndReady: function(evt) {
			// Cannot drag
		}

	});
});
