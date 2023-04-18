/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/array",
	"gridx/core/model/cache/Async"
], function(declare, array, Async) {

	/**
	 * @name ecm.widget.listView.gridModules.Async
	 * @class This module supports onSet for when the id changes. The item.originalId is the id in grid and item.id is
	 *        the new id.
	 * @augments gridx.core.model.cache.Async
	 */

	return declare(Async, {
		/** @lends ecm.widget.listView.gridModules.Async.prototype */

		/**
		 * @private Overrides _onSet in idx Async.
		 */
		_onSet: function(item) {
			if (!item.originalId || item.id == item.originalId) {
				this.inherited(arguments);
			} else {
				var t = this;
				var originalId = t.store.getIdentityId(item.originalId);
				var id = t.store.getIdentityId(item.id);
				var index = t.idToIndex(originalId), path = t.treePath(originalId);
				var old = t._cache[originalId];
				if (path.length) {
					t._addRow(id, index, t._itemToObject(item), item, path.pop());
				}
				t.onSet(id, index, t._cache[id], old);
			}
		},

		/**
		 * @private Overrides _addRow in idx Async.
		 */
		_addRow: function(id, index, rowData, item, parentId) {
			if (!item.originalId || item.id == item.originalId) {
				this.inherited(arguments);
			} else {
				var parentId = '';
				var t = this, st = t._struct, pr = t._priority, ids = st[parentId];
				ids[index + 1] = id;
				st[id] = st[id] || [
					parentId
				];
				var originalId = t.store.getIdentityId(item.originalId);
				delete st[originalId];
				st[parentId][index + 1] = id;
				var i = array.indexOf(pr, originalId);
				if (i >= 0) {
					pr.splice(i, 1);
				}
				pr.push(id);
				t._cache[id] = {
					data: t._formatRow(rowData, originalId),
					rawData: rowData,
					item: item
				};
				t.onLoadRow(originalId);
			}
		}
	});
});
