/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/Deferred",
	"dojo/dom-construct",
	"dojo/keys",
	"dijit/a11y",
	"ecm/Messages",
	"ecm/widget/listView/gridModules/Body"
], function(declare, lang, Deferred, domConstruct, keys, a11y, Messages, Body) {

	/**
	 * @name ecm.widget.listView.modules.ReversedBody
	 * @class This module displays rows in reverse order and fetches previous items as you scroll up.
	 * @augments ecm.widget.listView.gridModules.Body
	 * @since 2.0.3
	 */
	return declare(Body, {
		/** @lends ecm.widget.listView.modules.ReversedBody.prototype */

		/**
		 * Initialize focusing and add a listener for the scroll event.
		 */
		preload: function() {
			var t = this, g = t.grid;
			t._initFocus();

			t.model.store.parentModelObject._preventPaging = true;

			t.aspect(g.vScroller, '_doScroll', function() {
				if (t._loaded && g.vScroller && g.vScroller.domNode['scrollTop'] < 1 && t.model.store.parentModelObject.hasContinuation()) {
					t._load();
				}
			});
		},

		/**
		 * @private Reverse the up and down arrow behaviors as items are reversed.
		 */
		_initFocus: function() {
			var t = this, g = t.grid, focus = g.focus, doFocus = function(node, evt, step) {
				if (node.parentNode) {
					focus.stopEvent(evt);
					var elems = a11y._getTabNavigable(node), n = elems[step < 0 ? 'last' : 'first'];
					if (n) {
						n.focus();
					}
					return !!n;
				} else {
					return false;
				}
			}, doBlur = function(node, evt, step) {
				if (node.parentNode) {
					var elems = a11y._getTabNavigable(node);
					return evt ? evt.target == (step < 0 ? elems.first : elems.last) : true;
				} else {
					return true;
				}
			};

			focus.registerArea({
				name: 'body',
				priority: 1,
				focusNode: t.domNode,
				scope: t,
				doFocus: t._doFocus,
				doBlur: t._blurCell,
				onFocus: t._onFocus,
				onBlur: t._blurCell
			});
			t.connect(g.mainNode, 'onkeydown', function(evt) {
				if (focus.currentArea() == 'body') {
					var dk = keys;
					if (evt.keyCode == dk.HOME && !evt.ctrlKey) {
						t._focusCellCol = 0;
						t._focusCell();
						focus.stopEvent(evt);
					} else if (evt.keyCode == dk.END && !evt.ctrlKey) {
						t._focusCellCol = g._columns.length - 1;
						t._focusCell();
						focus.stopEvent(evt);
					} else if (!g.tree || !evt.ctrlKey) {
						focus._noBlur = 1; //1 as true
						var arr = {}, dir = g.isLeftToRight() ? 1 : -1;
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
							1,
							0,
							evt
						];
						arr[dk.DOWN_ARROW] = [
							-1,
							0,
							evt
						];
						t._moveFocus.apply(t, arr[evt.keyCode] || []);
						focus._noBlur = 0; //0 as false
					}
				}
			});
			t.aspect(g, 'onCellClick', function(evt) {
				t._focusCellRow = evt.visualIndex;
				t._focusCellCol = evt.columnIndex;
			});
			t.aspect(t, 'onRender', function(start, count) {
				if (t._focusCellRow >= start && t._focusCellRow < start + count && focus.currentArea() == 'body') {
					t._focusCell();
				}
			});
			t.connect(g.emptyNode, 'onfocus', function() {
				focus.focusArea('body');
			});
		},

		_nextCell: function(r, c, dir, checker) {
			var d = new Deferred(), g = this.grid, cc = g._columns.length, rc = g.view.visualCount;
			do {
				c += dir;
				if (c < 0 || c >= cc) {
					r -= dir;
					c = c < 0 ? cc - 1 : 0;
					if (r < 0) {
						r = rc - 1;
						c = cc - 1;
					} else if (r >= rc) {
						r = 0;
						c = 0;
					}
				}
			} while (!checker(r, c));
			g.vScroller.scrollToRow(r).then(function() {
				g.hScroller.scrollToColumn(g._columns[c].id);
				d.callback({
					r: r,
					c: c
				});
			});
			return d;
		},

		/**
		 * @private Fetch and render previous items.
		 */
		_load: function() {
			var t = this, g = t.grid, c = g.pageSize, en = g.emptyNode, s = g.rowCount();

			this._loaded = false;
			en.innerHTML = t.arg('loadingInfo', g.nls.loadingInfo);
			t.model._cache._storeFetch({
				start: s,
				count: c
			}).then(function() {
				var nc = g.rowCount();
				t.renderRows(0, nc);
				g.view.updateRootRange(0, nc);
				t._scrollToRowAfterBodyChange(s);
			});
		},

		_scrollToRowAfterBodyChange: function(rowIndex) {
			var t = this, vs = t.grid.vScroller;
			if (vs) {
				var h = t.aspect(vs, '_onBodyChange', function() {
					setTimeout(function() {
						vs.scrollToRow(rowIndex);
						t._loaded = true;
					}, 100);
					h.remove();
				});
			}
		},

		/**
		 * Scroll to the bottom of the list initially.
		 */
		load: function() {
			var t = this, g = t.grid, s = g.vScroller;
			t.inherited(arguments);
			t.aspect(s.loaded, 'callback', function() {
				t._scrollToRowAfterBodyChange(0);
			});
		},

		/**
		 * Add the previous node if there are previous items to be fetched.
		 */
		renderRows: function(start, count, position/*?top|bottom*/, isRefresh) {
			var t = this;
			if (t.model.store.parentModelObject.hasContinuation())
				count++;

			t.inherited(arguments);
		},

		/**
		 * @private Build rows in reverse order.
		 */
		_buildRows: function(start, count, uncachedRows, renderedRows) {
			var t = this, end = start + count, s = [], g = t.grid, w = t.domNode.scrollWidth, columns = g.columns(), i = end - 1;
			for (; i >= start; --i) {
				var rowInfo = g.view.getRowInfo({
					visualIndex: i
				}), row = g.row(rowInfo.rowId, 1);
				s.push('<div class="gridxRow ', i % 2 ? 'gridxRowOdd' : '', '" role="row" visualindex="', i);
				if (row) {
					t.model.keep(row.id);
					s.push('" rowid="', row.id, '" rowindex="', rowInfo.rowIndex, '" parentid="', rowInfo.parentId, '">', t._buildCells(row, i, columns), '</div>');
					renderedRows.push(row);
				} else {
					s.push('"><div class="gridxRowDummy" style="width:', w, 'px;"></div></div>');
					rowInfo.start = rowInfo.rowIndex;
					rowInfo.count = 1;
					uncachedRows.push(rowInfo);
				}
			}
			return s.join('');
		}
	});
});
