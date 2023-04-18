/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"gridx/modules/TouchVScroller"
], function(declare, TouchVScroller) {
	return declare(TouchVScroller, {
		_init: function() {
			if (this.grid.touch) {
				var t = this, g = t.grid, view = g.view;
				view.rootCount = view.visualCount = view.rootCount > g.pageSize ? g.pageSize : view.rootCount;
				t.inherited(arguments);

				var r = g.contentList.getResultSet();
				t.aspect(t._scrollable, 'slideTo', function(e) {
					var d = t._scrollable.getDim();
					t._almostBottom = d.o.h + e.y < 100;
				});
				t.aspect(t._scrollable, 'onFlickAnimationEnd', function() {
					if (!t._paging && t._almostBottom && r.continuationData) {
						// next page
						t._paging = true;
						t.model.when({
							start: r.items.length,
							count: g.pageSize
						}, function() {
							g.body.renderRows(0, r.items.length);
							t._paging = false;
							t._almostBottom = false;
						});
					}
				});
				t.aspect(t._scrollable, 'onAfterScroll', function(e) {
					t._beforeTop = e.beforeTop && e.beforeTopHeight > 100;
				});
				t.aspect(t._scrollable, 'onTouchEnd', function(e) {
//					if (!t._refreshing && t._beforeTop) {
//						// refresh
//						t._refreshing = true;
//						r.refresh();
//						t.aspect(r, 'onChange', function() {
//							t._refreshing = false;
//							t._beforeTop = false;
//						});
//					}
				});
			} else {
				this.inherited(arguments);
			}
		}
	});
});
