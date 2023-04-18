/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([ "dojo/_base/declare", "dojo/_base/array", "dojo/cookie", "dijit/Tree" ], //
function(declare, array, cookie, Tree) {

	/**
	 * @name ecm.widget._Tree
	 * @class A custom version of dijit.Tree used within the Content Navigator dijits.
	 */
	return declare("ecm.widget._Tree", [ Tree ], {
		/** @lends ecm.widget._Tree.prototype */

		useCookies: false,

		persiste: true,

		_initState: function() {
			// summary:
			//		Load in which nodes should be opened automatically
			if (this.persist) {

				this._openedItemIds = {};

				if (this.useCookies) {
					var cookie = cookie(this.cookieName);

					if (cookie) {
						array.forEach(cookie.split(','), function(item) {
							this._openedItemIds[item] = true;
						}, this);
					}
				}
			}
		},

		_saveState: function() {
			// summary:
			//		Create and save a cookie with the currently expanded nodes identifiers
			if (!this.persist) {
				return;
			}
			if (this.useCookies) {
				var ary = [];
				for ( var id in this._openedItemIds) {
					ary.push(id);
				}

				cookie(this.cookieName, ary.join(","), {
					expires: 365
				});
			}
		},

		_onItemChildrenChange: function(/*dojo.data.Item*/parent, /*dojo.data.Item[]*/newChildrenList) {
			// summary:
			//		Processes notification of a change to an item's children
			var model = this.model, identity = model.getIdentity(parent), parentNodes = this._itemNodesMap[identity];

			var self = this;

			array.forEach(newChildrenList, function(newChild) {
				var nodes = self._itemNodesMap[model.getIdentity(newChild)];
				array.forEach(nodes, function(node) {
					if (node && node._expandNodeDeferred) {
						delete node._expandNodeDeferred;

					}
					node.state = "UNCHECKED";
				});
			});
			this.inherited(arguments);
		},

		_onItemChange: function(/*Item*/item) {
			this.inherited(arguments);
			var model = this.model, identity = model.getIdentity(item), nodes = this._itemNodesMap[identity];

			if (nodes) {
				array.forEach(nodes, function(node) {
					//node._setExpando();
				});
			}
		}
	});
});
