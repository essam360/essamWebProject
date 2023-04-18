/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/dom-style",
	"dojo/aspect",
	"dojo/dom-geometry",
	"idx/layout/TitlePane",
	"dojo/Deferred"
], function(declare, lang, domStyle, aspect, domGeometry, TitlePane, Deferred) {

	/**
	 * @private
	 * @name ecm.widget.search.UnifiedSearchBuilder
	 * @class Provides a widget that is used for authoring and running unified searches.
	 * @augments dijit._WidgetBase
	 * @since 2.0.2
	 */
	return declare("ecm.widget.search.TitlePane", [
		TitlePane
	], {
		resizable: true,
		useAnimation: false,
		postCreate: function() {
			this.inherited(arguments);
			//aspect.after(this, "onMaximize", lang.hitch(this, "_sizeChild"));
			//aspect.after(this, "onRestore", lang.hitch(this, "_sizeChild"));
		},

		_sizeChild: function(resizeOther) {
			var dim = domGeometry.getMarginBox(this.domNode);
			var cur = lang.mixin({}, dim);
			var children = this.getChildren();

			if (this.open && children && children.length > 0) {
				var child = children[0];
				var dim1 = domGeometry.getMarginBox(this.titleBarNode);
				dim.h -= dim1.h;
				dim.w -= 20;
				dim.t = 0;

				var cur1 = domGeometry.getMarginBox(this.hideNode);

				cur1.h = dim.h;
				cur1.w = dim.w;
				cur1.w += 20;

				if (dim.h < 250) {
					dim.h = 250;
					domGeometry.setMarginBox(this.hideNode, cur1);
					domStyle.set(this.hideNode, "overflow", "auto");
				} else {
					domGeometry.setMarginBox(this.hideNode, cur1);
					domStyle.set(this.hideNode, "overflow", "hidden");
				}

				child.resize(dim, cur);
			} else {
				if (resizeOther) {

				}
			}

		},

		childForResize: function() {
			var children = this.getParent().getChildren();
			var child;
			if (children && children.length == 2) {
				child = children[0];

				if (child == this) {
					child = children[1];
				}

			} else if (children && children.length > 2) {
				//return open child
			}
			return child;
		},
		resize: function() {
			this.inherited(arguments);
			this._sizeChild();
		},
		parentResize: function(resizeOther) {

			this._sizeChild(resizeOther);

			if (this.getParent()) {
				this.getParent().resize();
			}

		},
		_setOpenAttr: function() {

			this.inherited(arguments);
			this.parentResize(true);
		}

	});

});
