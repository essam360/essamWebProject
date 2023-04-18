/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/connect",
	"dojo/_base/event",
	"dojo/dom-class",
	"dojo/dom-construct",
	"dojo/dom-geometry",
	"dojo/keys",
	"dojo/_base/sniff",
	"dojo/dnd/Moveable",
	"dojo/dnd/TimedMoveable",
	"dijit/layout/ContentPane",
	"dijit/a11y",
	"dijit/focus",
	"idx/widget/ResizeHandle",
	"../../LoggerMixin"
],

function(declare, //
connect, //
event, //
domClass, //
domConstruct, //
domGeom, //
keys, //
has, //
Moveable, //
TimedMoveable, //
ContentPane, //
dijitA11y, //
focus, //
ResizeHandle, //
LoggerMixin) {

	/**
	 * @name ecm.widget.layout.FlyoutMenuContainerChild
	 * @class Provides a container for the fly-out panes that are used for features.
	 * @augments dijit.layout.ContentPane, ecm.LoggerMixin
	 */
	return declare("ecm.widget.layout._FlyoutMenuContainerChild", [
		ContentPane,
		LoggerMixin
	], {
		/** @lends ecm.widget.layout._FlyoutMenuContainerChild.prototype */

		"class": "flyoutMenu",
		resizeable: true,
		parseOnLoad: false,
		draggable: false,
		dragHandle: null,

		postCreate: function() {
			this.inherited(arguments);
			this.connect(this.domNode, "onkeypress", "_onKey");
		},

		buildRendering: function() {
			this.inherited(arguments);
			var node = this.domNode;

			if (!this.dragHandle) {
				this.dragHandle = this.domNode;
			}
			connect.connect(this.domNode, "onclick", this, "onClick");

			if (this.draggable) {
				this._moveable = (has("ie") == 6) ? new TimedMoveable(node, {
					handle: this.dragHandle
				}) : // prevent overload, see #5285
				new Moveable(node, {
					handle: this.dragHandle,
					timeout: 0
				});
				this._dndListener = connect.subscribe("/dnd/move/stop", this, "_endDrag");
			} else {
				domClass.add(node, "dijitDialogFixed");
			}
		},

		_endDrag: function(e) {
			// summary:
			//		Called after dragging the Dialog. Saves the position of the dialog in the viewport.
			// tags:
			//		private
			if (e && e.node && e.node === this.domNode) {
				this._relativePosition = domGeom.position(e.node);
			}
		},

		_setContentAttr: function() {
			this.inherited(arguments);
			if (this.resizeable) {
				var resizeHandle = new ResizeHandle({
					targetId: this.id,
					axis: "xy"
				});
				domConstruct.place(resizeHandle.domNode, this.domNode);
			}
		},

		onClick: function(evt) {
			event.stop(evt);
		},

		resizeHandler: function() {
			this.logDebug("resizeHandler", "resized");
		},

		_onKey: function(evt) { // copied portions of this from Dialog.js - prevents tabbing outside of the flyout
			if (evt.charOrCode) {
				var node = evt.target;
				if (evt.charOrCode === keys.TAB) {
					this._getFocusItems();
				}
				var singleFocusItem = (this._firstFocusItem == this._lastFocusItem);
				// see if we are shift-tabbing from first focusable item on dialog
				if (node == this._firstFocusItem && evt.shiftKey && evt.charOrCode === keys.TAB) {
					if (!singleFocusItem) {
						focus.focus(this._lastFocusItem); // send focus to last item in dialog
					}
					event.stop(evt);
				} else if (node == this._lastFocusItem && evt.charOrCode === keys.TAB && !evt.shiftKey) {
					if (!singleFocusItem) {
						focus.focus(this._firstFocusItem); // send focus to first item in dialog
					}
					event.stop(evt);
				}
			}
		},

		_getFocusItems: function() { // copied from _DialogMixin.js
			//	Finds focusable items in dialog and sets this._firstFocusItem and this._lastFocusItem
			var elems = dijitA11y._getTabNavigable(this.containerNode);
			this._firstFocusItem = elems.lowest || elems.first || this.closeButtonNode || this.domNode;
			this._lastFocusItem = elems.last || elems.highest || this._firstFocusItem;
		},

		hide: function() {
			this.container ? this.container.hide() : "";
		}
	});
});
