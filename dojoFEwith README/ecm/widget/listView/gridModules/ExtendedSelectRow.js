/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/dom-class",
	"dojo/sniff",
	"gridx/modules/extendedSelect/Row"
], function(declare, domClass, has, Row) {
	return declare(Row, {
		_init: function() {
			var t = this, g = t.grid, unselectable = t.arg('unselectable', {});
			t.inherited(arguments);
			if (has("ecmMobile")) {
				function canSelect(e) {
					if (e.columnId) {
						var col = g._columnsById[e.columnId];
						return col.rowSelectable !== false && !domClass.contains(e.target, 'gridxTreeExpandoIcon') && !domClass.contains(e.target, 'gridxTreeExpandoInner');
					}
					return !e.columnId;
				}
				t.aspect(g, 'onRowClick', function(e) {
					if (canSelect(e)) {
						t._isOnCell = e.columnId;
						if (t._isOnCell) {
							g.body._focusCellCol = e.columnIndex;
						}
						t._start({
							row: e.visualIndex
						}, false); // pass true to multi-select
						t._end();
					}
				});
			}
		}
	});
});
