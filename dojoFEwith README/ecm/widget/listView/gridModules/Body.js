/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/array",
	"dojo/dom-attr",
	"dojo/dom-class",
	"dojo/keys",
	"dijit/registry",
	"gridx/support/query",
	"gridx/modules/Body"
], function(declare, array, domAttr, domClass, keys, registry, query, Body) {

	/**
	 * @name ecm.widget.listView.gridModules.Body
	 * @class This module supports onSet when the row id changed. If cannot get the row via the id, then get it by its
	 *        index and then set the rowid.
	 * @augments gridx.modules.Body
	 */

	return declare(Body, {
		/** @lends ecm.widget.listView.gridModules.Body.prototype */

		/**
		 * @private Override _decoratorEvent. If column not found, ignore.
		 */
		_decorateEvent: function(e) {
			//clean decorates from bubble
			//need to re-decorate the event when bubbling
			var atrs = [
				'rowId',
				'columnId',
				'rowIndex',
				'visualIndex',
				'columnIndex',
				'parentId',
				'cellNode'
			];
			array.forEach(atrs, function(atr) {
				if (atr in e) {
					delete e[atr];
				}
			});

			var n = e.target || e.originalTarget, g = this.grid, tag;
			for (; n && n != g.bodyNode; n = n.parentNode) {
				tag = n.tagName && n.tagName.toLowerCase();
				if (tag == 'td' && domClass.contains(n, 'gridxCell') && n.parentNode.parentNode.parentNode.parentNode.parentNode === g.bodyNode) {

					var col = g._columnsById[n.getAttribute('colid')];
					if (col) { // ADDED
						e.cellNode = n;
						e.columnId = col.id;
						e.columnIndex = col.index;
					}
				}
				if (tag == 'table' && domClass.contains(n, 'gridxRowTable') && n.parentNode.parentNode === g.bodyNode) {
					n = n.parentNode;
					e.rowId = n.getAttribute('rowid');
					e.parentId = n.getAttribute('parentid');
					e.rowIndex = parseInt(n.getAttribute('rowindex'), 10);
					e.visualIndex = parseInt(n.getAttribute('visualindex'), 10);
					return;
				}
			}
		},

		/**
		 * @private Overrides _buildRowContent.
		 */
		_buildRowContent: function(rowInfo) {
			var t = this, n = query('> [visualindex="' + rowInfo.visualIndex + '"]', t.domNode)[0];
			if (n) {
				var row = t.grid.row(rowInfo.rowIndex, 0, rowInfo.parentId);
				if (row) {
					t.model.keep(row.id);
					n.setAttribute('rowid', row.id);
					n.setAttribute('rowindex', rowInfo.rowIndex);
					n.setAttribute('parentid', rowInfo.parentId || '');
					n.innerHTML = t._buildCells(row, rowInfo.visualIndex);
					t.onAfterRow(row);
				}
			}
		},

		/**
		 * @private Overrides _onSet in idx Body.
		 */
		_onSet: function(id, index, rowCache, oldCache) {
			var t = this;
			if (t.autoUpdate && rowCache) {
				var g = t.grid, row = g.row(id, 1), rowNode = row && row.node();
				if (!rowNode && rowCache.item.originalId && g.row(g.store.getIdentityId(rowCache.item.originalId))) { // ADDED
					rowNode = g.row(g.store.getIdentityId(rowCache.item.originalId)).node();
					if (rowNode) {
						domAttr.set(rowNode, "rowid", id);
					}
				}
				if (rowNode) {
					var curData = rowCache.data, oldData = oldCache.data, cols = g._columns, renderWhole = t.arg('renderWholeRowOnSet'), compareOnSet = t.arg('compareOnSet');
					if (renderWhole) {
						rowNode.innerHTML = t._buildCells(row, row.visualIndex());
						t.onAfterRow(row);
						t.onSet(row);
						t.onRender(index, 1);
					} else {
						array.forEach(cols, function(col) {
							if (!compareOnSet(curData[col.id], oldData[col.id])) {
								var isPadding = g.tree && g.tree.isPaddingCell(id, col.id), cell = row.cell(col.id, 1);
								cell.node().innerHTML = t._buildCellContent(col, id, cell, row.visualIndex(), isPadding);
								//Support for Bidi begin
								if ('auto' === (col.textDir || g.textDir)) {
									var textDirValue = g.getTextDir(col.id, cell.node().innerHTML);
									if (textDirValue) {
										cell.node().style.direction = textDirValue;
									}
								}
								//Support for Bidi end
								t.onAfterCell(cell);
							}
						});
						t.onRender(index, 1);
					}
				}
			}
		},

		/**
		 * @private When data is changed in store, compare the old data and the new data of grid, return true if they
		 *          are the same, false if not, so that the body can decide whether to refresh the corresponding cell.
		 */
		compareOnSet: function(v1, v2) {
			if (v1 == undefined && v2 == undefined) { // magazine view has undefined for these values
				return false;
			}
			return typeof v1 == 'object' && typeof v2 == 'object' ? false : v1 === v2;
		},

		/**
		 * @private Update gridx to support keypress when a gridx is within a gridx. Only the inner gridx should process
		 *          the keypress event.
		 */
		_initFocus: function() {
			var t = this, g = t.grid, ltr = g.isLeftToRight(), bn = g.bodyNode, focus = g.focus, c = 'connect';
			if (focus) {
				focus.registerArea({
					name: 'body',
					priority: 1,
					focusNode: bn,
					scope: t,
					doFocus: t._doFocus,
					doBlur: t._blurCell,
					onFocus: t._onFocus,
					onBlur: t._blurCell
				});
				t[c](g.mainNode, 'onkeypress', function(evt) {
					// If the containing grid id doesn't equal this grid id, then ignore the keypress.
					// This solves the problem where if a gridx is within a gridx, both gridx are processing the key press for the inner gridx.
					// Only the inner gridx should process the keypress event in this scenario.
					var widget = registry.getEnclosingWidget(evt.target);
					while (widget && widget.declaredClass != "gridx.Grid") {
						widget = registry.getEnclosingWidget(widget.domNode.parentNode);
					}
					if (widget && widget.declaredClass == "gridx.Grid") {
						if (widget.id && g.id != widget.id) {
							return;
						}
					}

					if (focus.currentArea() == 'body' && (!g.tree || !evt.ctrlKey)) {
						focus._noBlur = 1; //1 as true
						var dk = keys, arr = {}, dir = ltr ? 1 : -1;
						arr[dk.LEFT_ARROW] = [
							0,
							-dir,
							evt
						];
						arr[dk.RIGHT_ARROW] = [
							0,
							dir,
							evt
						];
						arr[dk.UP_ARROW] = [
							-1,
							0,
							evt
						];
						arr[dk.DOWN_ARROW] = [
							1,
							0,
							evt
						];
						t._moveFocus.apply(t, arr[evt.keyCode] || []);
						focus._noBlur = 0; //0 as false
					}
				});
				t[c](g, 'onCellClick', function(evt) {
					t._focusCellRow = evt.visualIndex;
					t._focusCellCol = evt.columnIndex;
				});
				t[c](t, 'onRender', function(start, count) {
					if (t._focusCellRow >= start && t._focusCellRow < start + count && focus.currentArea() == 'body') {
						t._focusCell();
					}
				});
				t[c](g.emptyNode, 'onfocus', function() {
					focus.focusArea('body');
				});
			}
		}
	});
});
