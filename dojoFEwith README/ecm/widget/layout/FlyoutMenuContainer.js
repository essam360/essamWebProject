/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array",
	"dojo/window",
	"dojo/fx",
	"dojo/dom-class",
	"dojo/dom-style",
	"dojo/dom-construct",
	"dojo/dom-geometry",
	"dijit/layout/BorderContainer",
	"dijit/Dialog",
	"dijit/a11y",
	"dijit/focus",
	"../../LoggerMixin",
	"./_FlyoutMenuContainerChild"
],

function(declare, //
lang, //
array, //
win, //
corefx, //
domClass, //
domStyle, //
domConstruct, //
domGeom, //
BorderContainer, //
Dialog, //
dijitA11y, //
focus, //
LoggerMixin, //
_FlyoutMenuContainerChild) {

	/**
	 * @name ecm.widget.layout.FlyoutMenuContainer
	 * @class Provides a dialog for the fly-out panes that are used for features.
	 * @augments dijit.Dialog, ecm.LoggerMixin
	 */
	return declare("ecm.widget.layout.FlyoutMenuContainer", [
		Dialog,
		LoggerMixin
	], {
		/** @lends ecm.widget.layout.FlyoutMenuContainer.prototype */

		positionNode: null,
		parseOnLoad: false,
		draggable: false,
		resizable: true,
		children: null,
		showOnInit: false,
		pZindex: 0,
		slide: true,
		design: "",
		"class": "flyoutMenuContainer",
		baseClass: "flyoutMenuContainerDialog",
		position: "leading",

		//the flyout launching node
		targetNode: null,

		buildRendering: function() {
			this.inherited(arguments);
			this.children = [];
			var self = this, l, t;

			if (this.position == "trailing") {
				this.floatDir = this.isLeftToRight() ? "right" : "left";
			} else {
				this.floatDir = this.isLeftToRight() ? "left" : "right";
			}
		},

		postCreate: function() {
			this.inherited(arguments);

			domClass.remove(this.domNode, "dijitDialog");
			this.connect(this.domNode, "onclick", this, "onClick");
			this.connect(this.domNode, "onblur", this, "onClick");

			this.flyoutArrow = domConstruct.create("div", {
				'class': 'flyoutArrow'
			}, this.domNode);
		},

		initWithDijitCallback: function(firstWidget, targetNode, callback) {
			this.logEntry("initWithDijitCallback");

			this.removeAllChildren();
			this.show();
			this.addDijitWithCallback(firstWidget, targetNode, callback);

			this.logExit("initWithDijitCallback");
		},

		initWithDijit: function(firstWidget) {
			this.logEntry("initWithDijit");
			this.initWithDijitCallback(firstWidget, null, null);
			this.logExit("initWithDijit");
		},

		addDijit: function(child, targetNode) {
			this.logEntry("addDijit");
			this.addDijit(child, targetNode, null);
			this.logExit("addDijit");
		},

		setFlyoutArrowPosition: function() {
			if (this.targetNode) {
				var top = domGeom.position(this.targetNode).y;
				if (this.targetNode.offsetHeight) {
					//top += this.targetNode.offsetHeight / 2;
				}

				this.flyoutArrow.style.top = top + 3 + "px";
			}
		},

		_getFocusItems: function() { // copied from _DialogMixin.js
			//	Finds focusable items in dialog and sets this._firstFocusItem and this._lastFocusItem
			var elems = dijitA11y._getTabNavigable(this.domNode);
			this._firstFocusItem = elems.lowest || elems.first || this.domNode;
			this._lastFocusItem = elems.last || elems.highest || this._firstFocusItem;
		},

		addDijitWithCallback: function(child, targetNode, callback) {
			this.logEntry("addDijitWithCallback");

			this.targetNode = targetNode;
			this.setFlyoutArrowPosition();
			var node = this.domNode, l, t;

			var dir = "left";
			if (this.position == "trailing") {
				dir = this.isLeftToRight() ? "right" : "left";
			} else {
				dir = this.isLeftToRight() ? "left" : "right";
			}

			var childWidget = new _FlyoutMenuContainerChild({
				resizeable: child.resizeable ? true : false,
				container: this,
				dragNode: child.titleNode
			});

			if (this.children.length > 0) {
				node = this.children[this.children.length - 1].domNode;
				if (dir == "left") {
					l = domGeom.getMarginBox(node).l + node.offsetWidth;
				} else {
					l = domGeom.getMarginBox(node).l - node.offsetWidth;
				}

				t = domGeom.getMarginBox(node).t;
			} else {
				l = 0;
				t = domGeom.position(this.positionNode).y;
			}

			child.container = childWidget;
			childWidget.set("content", child);

			var self = this;

			this.children.push(childWidget);

			this.domNode.appendChild(childWidget.domNode);
			childWidget.resize();
			var viewport = win.getBox();

			if (this.children.length == 1) {
				if (dir == "right") {
					l = this.domNode.offsetWidth - childWidget.domNode.offsetWidth;
				}
			}

			var styles = null;

			if (this.slide) {
				if (dir == "left") {
					if (this.children.length == 1) {
						domStyle.set(childWidget.domNode, {
							left: -(domGeom.position(this.positionNode).x + this.positionNode.offsetWidth) + "px",
							top: t + "px"
						});
					} else {
						domStyle.set(childWidget.domNode, {
							left: 0 + "px",
							top: t + "px"
						});
					}
				} else {
					domStyle.set(childWidget.domNode, {
						left: viewport.w + "px",
						top: t + "px"
					});
				}

				this.slideHandlerWithCallback(childWidget.id, {
					l: l,
					t: t
				}, callback);

			} else {
				domStyle.set(childWidget.domNode, {
					left: l + "px",
					top: t + "px"
				});
				if (this.flyoutArrow) {
					domStyle.set(this.flyoutArrow, {
						left: l + "px",
						top: t + "px"
					});
				}
				if (lang.isFunction(callback)) {
					setTimeout(callback, 0);
				}
			}

			this.logExit("addDijitWithCallback");
		},

		slideHandler: function(nodeid, dim) {
			this.logEntry("slideHandler");
			this.slideHandlerWithCallback(nodeid, dim, null);
			this.logExit("slideHandler");
		},

		slideHandlerWithCallback: function(nodeid, dim, callback) {
			this.logEntry("slideHandlerWithCallback");

			var slideArgs = {
				"node": nodeid,
				top: dim.t,
				unit: "px",
				left: dim.l
			};

			var anim = corefx.slideTo(slideArgs);
			this.flyoutArrow.style.visibility = "hidden";
			var self = this;
			this.connect(anim, "onEnd", function() {
				self.flyoutArrow.style.visibility = "visible";
				if (lang.isFunction(callback)) {
					setTimeout(callback, 0);
				}
			});
			anim.play();

			this.logExit("slideHandlerWithCallback");
		},

		removeDijit: function(childWidget) {
			this.logEntry("removeDijit");
			this.domNode.removeChild(childWidget.domNode);
			this.logExit("removeDijit");
		},

		removeAllChildren: function() {
			this.logEntry("removeDijit");

			var self = this;
			array.forEach(this.children, function(child) {
				self.removeDijit(child);
			});
			this.children = [];

			this.logEntry("removeDijit");
		},

		resize: function() {
			//no need of any resizing
			return;
		},

		/**
		 * Position modal dialog in the viewport. If no relative offset in the viewport has been determined (by
		 * dragging, for instance), center the node. Otherwise, use the Dialog's stored relative offset, and position
		 * the node to top: left: values based on the viewport.
		 */
		_position: function() {
			// summary:
			//		Position modal dialog in the viewport. If no relative offset
			//		in the viewport has been determined (by dragging, for instance),
			//		center the node. Otherwise, use the Dialog's stored relative offset,
			//		and position the node to top: left: values based on the viewport.
			// tags:
			//		private
			this.logEntry("_position");
			var node = this.domNode, l = 0, t = 0;
			var viewport = win.getBox();

			var dir = "left";
			if (this.position == "trailing") {
				dir = this.isLeftToRight() ? "right" : "left";
			} else {
				dir = this.isLeftToRight() ? "left" : "right";
			}

			if (this.positionNode) {
				if (dir == "right") {
					l = viewport.w - domGeom.position(this.positionNode).x;
				} else {
					l = domGeom.position(this.positionNode).x + this.positionNode.offsetWidth;
				}
			}

			if (dir == "left") {
				domStyle.set(node, {
					left: l + "px",
					top: t + "px"
				});
			} else {
				domStyle.set(node, {
					right: l + "px",
					top: t + "px"
				});
			}

			this.logExit("_position");
		},

		_setup: function() {
			this.logEntry("_setup");

			this.inherited(arguments);
			var self = this;
			this.underlayAttrs = {
				"class": "flyoutMenuContainerUnderLayClass"
			};

			this.logExit("_setup");
		},

		onClick: function() {
			this.hide();
		},

		onChildResize: function(childid, newdimenssions) {
			this.borderContainer._layoutChildren(childid, newdimenssions);
		},

		onBlur: function() {
			return true;
		}
	});
});
