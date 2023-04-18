/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array",
	"idx/layout/MoveableTabContainer",
	"./TabController"
],

function(declare, //
lang, //
array, //
MoveableTabContainer, //
TabController) {

	/**
	 * @name ecm.widget.layout._TabContainerBase
	 * @class Provides the outermost tab container for a tabbed layout.
	 * @augments dijit.layout._LayoutWidget
	 * @public
	 */
	return declare("ecm.widget.layout._TabContainerBase", [
		MoveableTabContainer
	], {
		/** @lends ecm.widget.layout._TabContainerBase.prototype */

		reset: function() {
			this._restore();
		},

		_restore: function() {
			var children = this.getChildren();

			var self = this;
			array.forEach(children, function(c) {
				self.removeChild(c);
			});
		},

		_openTab: function(msg) {
			var children = this.getChildren();
			var child;
			var uid = msg.uid;

			lang.mixin(msg, {
				tabContainer: this
			});

			array.some(children, function(c) {
				if (c.uid === uid) {
					child = c;
					return true;
				}
				return false;
			});

			if (!child) {
				dojo["require"](msg.contentClass);
				var childClass = lang.getObject(msg.contentClass);
				child = new childClass(msg);
				this.addChild(child, children.length);
				child.connect(child, "onClose", function() {
					// Close child
					return true;
				});
			}

			if (msg.selected && this.selectedChildWidget != child) {
				this.selectChild(child);
			}

			this.onTabOpened(child);

			return child;
		},

		closeTab: function(kwArgs) {
			return this._closeTab(kwArgs);
		},

		openTab: function(kwArgs) {
			return this._openTab(kwArgs);
		},

		_closeTab: function(msg) {
			var children = this.getChildren();
			var child;
			var uid = msg.uid;
			var self = this;

			lang.mixin(msg, {
				tabContainer: this
			});

			array.forEach(children, function(c, i) {
				if (c.uid === uid) {
					child = c;
					self.closeChild(c);
				}
			});

			this.onTabClosed(child);
		},

		closeAllTabs: function(confirm) {
			var children = this.getChildren();
			var self = this;

			if (children) {
				array.forEach(children, function(child) {
					if (child) {
						self.closeTab(child, confirm);
					}
				});
			}
		},

		onTabClosed: function(child) {
			// Allow interested widget to connect to event
		},

		onTabOpened: function(child) {
			// Allow interested widget to connect to event
		},

		_onTabUpdate: function(child) {
			if (this._beingDestroyed) {
				return;
			}

			var tabArguments = [];
			array.forEach(this.getChildren(), function(child, idx, arr) {
				var closable = (arr.length !== 1);
				if (child.get("closable") != closable) {
					child.set("closable", closable);
				}

			}, this);
			//this.resize();

			if (child.onTabUpdate)
				child.onTabUpdate();
		},

		removeChild: function(/*dijit._Widget*/page) {
			if (this._started && !this._beingDestroyed && this.selectedChildWidget === page) {
				// Select the adjacent tab
				var children = this.getChildren();
				for ( var i = 0; i < children.length; i++) {
					if (children[i].uid === page.uid) {
						if (i > 0) {
							this.selectChild(children[i - 1]);
						}
						break;
					}
				}
			}

			this.inherited(arguments);
		}
	});

});
