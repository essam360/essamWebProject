/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array",
	"dojo/_base/connect",
	"dojo/_base/event",
	"dojo/_base/window",
	"dojo/dom-class",
	"dojo/dom-attr",
	"dojo/dom-style",
	"dojo/dom-construct",
	"dijit/_Widget",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"idx/html",
	"./_Separator",
	"./_SimpleBreadcrumb"
], //
function(declare, //
lang, //
array, //
connect, //
event, //		 
win, //
domClass, //
domAttr, //
domStyle, //
domConstruct, //
_Widget, //
_TemplatedMixin, //
_WidgetsInTemplateMixin, //
idxHtml, //
_Separator, //
_SimpleBreadcrumb) {

	/**
	 * @name ecm.widget.Breadcrumb
	 * @class Provides a widget that displays the position of a user in the IBM Content Navigator application.
	 * @augments dijit._Widget
	 */
	return declare("ecm.widget.Breadcrumb", [
		_Widget,
		_TemplatedMixin,
		_WidgetsInTemplateMixin
	], {
		/** @lends ecm.widget.Breadcrumb.prototype */

		templateString: '<div class="ecmBreadcrumb"><div dojoAttachPoint="containerNode"></div></div>',

		/**
		 * The list of breadcrumb items.
		 */
		breadcrumbs: null,

		/**
		 * The class to use as the separator.
		 */
		_separatorClass: "ecm.widget._Separator",

		/**
		 * Set value to false if you want to allow context menu events to pass through
		 */
		stopContextMenuEvent: true,

		postCreate: function() {
			this.inherited(arguments);

			this.breadcrumbs = new Array();
			domClass.add(this.domNode, "ecmBreadcrumb");
			this.connect(ecm.model.desktop, "onLogout", function(repository) {
				this._clearContent();
			});
		},

		destroy: function() {
			//destroying the breadcrumb data
			if (this.breadcrumbs) {
				array.forEach(this.breadcrumbs, function(breadcrumb) {
					breadcrumb.destroy();
				}, this);
			}
			this.breadcrumbs = null;

			this.inherited(arguments);
		},

		/**
		 * Set the breadcrumb as disabled or enabled. If disabled, then the breadcrumb is not clickable.
		 * 
		 * @param bool
		 *            Boolean indicating if the breadcrumb is disabled.
		 */
		_setDisabledAttr: function(bool) {
			if (bool) {
				domClass.add(this.domNode, "disabled");
			} else {
				domClass.remove(this.domNode, "disabled");
			}
		},

		/**
		 * Returns if the breadcrumb is disabled.
		 * 
		 * @return Boolean indicating if the breadcrumb is disabled.
		 */
		isDisabled: function() {
			return domClass.contains(this.domNode, "disabled");
		},

		/**
		 * Pops the specified breadcrumb item. (Removes the specified breadcrumb item from the breadcrumb list.)
		 */
		pop: function(bc) {
			if (this.breadcrumbs.length == 0) {
				return;
			}
			var doPop = true;
			while (doPop) {
				var cbc = this.breadcrumbs.pop();
				if (cbc == bc) {
					this.breadcrumbs.push(cbc);
					break;
				}
				this.onPop(cbc.breadcrumbUserData);
				if (this.breadcrumbs.length > 1) {
					this.breadcrumbs.pop();
				}
				if (!bc) {
					doPop = false;
				}
			}
			this._refresh();
		},

		/**
		 * Pushes the specified breadcrumb item onto the breadcrumb list.
		 */
		push: function(bc) {
			if (this.breadcrumbs && this.breadcrumbs.length > 0) {
				var sp = this._generateSeparator();
				this.breadcrumbs.push(sp);
			}
			this.breadcrumbs.push(bc);
			this._refresh();
		},

		/**
		 * @private Creates the separator using the separator class.
		 */
		_generateSeparator: function() {
			var className = lang.getObject(this._separatorClass);
			var sp = new className();

			if (this.breadcrumbs && this.breadcrumbs.length > 0) {
				var lastCrumb = this.breadcrumbs[this.breadcrumbs.length - 1];

				if (lastCrumb.breadcrumbUserData) {
					var breadcrumbUserData = lastCrumb.breadcrumbUserData;

					if (breadcrumbUserData.activeSeparator === true) {
						sp.isActive = true;
						this.connect(sp, "onClickSeparator", lang.hitch(this, function(breadcrumbUserData, sp, evt) {
							if (!this.isDisabled()) {
								this.onClickSeparator(breadcrumbUserData, sp, evt);
							}
						}, breadcrumbUserData, sp));
					}
				}
			}

			return sp;
		},

		/**
		 * @private Clears the breadcrumb content.
		 */
		_clearContent: function() {
			//not sure what this is trying to do
			var ws = dijit.findWidgets(this.containerNode);
			for (i in ws) {
				var w = ws[i];
				if (w && w.destroy) {
					if (w.breadcrumbUserData && w.breadcrumbUserData.domNode) {
						domStyle.set(w.breadcrumbUserData.domNode, {
							display: "none"
						});
						win.body().appendChild(w.breadcrumbUserData.domNode);
					}
					w.destroyDescendants();
				}
			}
			this.containerNode.innerHTML = "";
		},

		/**
		 * Clears the breadcrumb.
		 */
		clear: function() {
			this._clearContent(); // clear just clears the UI, but not the old breadcrumbs
			this.breadcrumbs.length = 0;
		},

		/**
		 * Returns the breadcrumb data as an array.
		 * 
		 * @return Array of breadcrumb data.
		 */
		getData: function() {
			var data = [];
			array.forEach(this.breadcrumbs, function(crumb) {
				if (!crumb.isSeparator) {
					data.push(crumb.breadcrumbUserData);
				}
			}, this);
			return data;
		},

		/**
		 * Creates a <code>_SimpleBreadcrumb</code> for each item in the array.
		 * 
		 * @param breadcrumbArray
		 *            Array of breadcrumb data. Each item in the array should have a label, an optional title, an
		 *            optional labelPrefix.
		 */
		setData: function(breadcrumbArray) {
			this.clear();
			array.forEach(breadcrumbArray, function(breadcrumbUserData) {
				var label = breadcrumbUserData.label;
				var title = breadcrumbUserData.title ? breadcrumbUserData.title : label;

				var crumb = new _SimpleBreadcrumb({
					title: title,
					label: label,
					labelPrefix: breadcrumbUserData.labelPrefix,
					stopContextMenuEvent: this.stopContextMenuEvent
				});

				if (breadcrumbUserData.domNode) {
					//crumb.domNode.appendChild(breadcrumbUserData.domNode);
				} else {
					this.connect(crumb, "onClick", lang.hitch(this, function(breadcrumbUserData, evt) {
						if (!this.isDisabled()) {
							this.onClick(breadcrumbUserData, evt);
						}
					}, breadcrumbUserData));
				}

				crumb.breadcrumbUserData = breadcrumbUserData;
				if (this.breadcrumbs && this.breadcrumbs.length > 0) {
					this.breadcrumbs.push(this._generateSeparator());
				}
				this.breadcrumbs.push(crumb);
			}, this);
			this._refresh();
		},

		/**
		 * @private
		 */
		_renderItem: function(bc, isClickable) {
			var _this = this;
			if (bc.breadcrumbUserData && bc.breadcrumbUserData.domNode) {

				bc.domNode.appendChild(bc.breadcrumbUserData.domNode);
				domStyle.set(bc.breadcrumbUserData.domNode, {
					display: "inline"
				});
				this.containerNode.appendChild(bc.domNode);
			} else if (isClickable) {
				var itemNode, outerNode;
				if (bc.labelPrefix) {
					outerNode = domConstruct.create("DIV", {});
					domClass.add(outerNode, "dijitInline breadcrumbItem");
					domAttr.set(outerNode, "tabindex", "0");
					domConstruct.create("SPAN", {
						innerHTML: idxHtml.escapeHTML(bc.labelPrefix),
						'class': 'labelPrefix'
					}, outerNode);
					var anchorNode = domConstruct.create("A", {
						href: "javascript:;"
					}, outerNode);
					domClass.add(anchorNode, "dijitInline clickableItem labelSuffix");
				} else {
					anchorNode = domConstruct.create("A", {
						href: "javascript:;"
					});
					domAttr.set(anchorNode, "tabindex", "0");

					domClass.add(anchorNode, "dijitInline breadcrumbItem clickableItem");
				}
				bc.connect(anchorNode, "onclick", lang.hitch(this, function(e) {
					event.stop(e);
					if (!this.isDisabled()) {
						this.pop(bc);
						if (bc.onClick) {
							bc.onClick(e);
						}
					}
					return false;
				}));
				anchorNode.appendChild(bc.render());
				this.containerNode.appendChild(bc.labelPrefix ? outerNode : anchorNode);
			} else {
				if (bc.labelPrefix) {
					var outerNode = domConstruct.create("DIV", {});
					domClass.add(outerNode, "dijitInline breadcrumbItem");
					domAttr.set(outerNode, "tabindex", "0");
					domConstruct.create("SPAN", {
						innerHTML: idxHtml.escapeHTML(bc.labelPrefix),
						'class': 'labelPrefix'
					}, outerNode);

					var itemNode = domConstruct.create("SPAN", {
						id: this.id + "_labelSuffix_" + new Date().getTime()
					}, outerNode);
					domClass.add(itemNode, "dijitInline labelSuffix");
					itemNode.appendChild(bc.render());
					domAttr.set(outerNode, "aria-describedby", itemNode.id);
					this.containerNode.appendChild(outerNode);
				} else {
					var itemNode = domConstruct.create("SPAN", {});
					domClass.add(itemNode, "dijitInline breadcrumbItem");

					if (bc.breadcrumbUserData) {
						domAttr.set(itemNode, "tabindex", "0");
					} else {
						domAttr.set(itemNode, "role", "presentation");
					}

					itemNode.appendChild(bc.render());
					this.containerNode.appendChild(itemNode);
				}
			}
		},

		/**
		 * @private
		 */
		_renderItems: function() {
			var _this = this;
			var firstSeparator = false;
			for (var i = 0; i < this.breadcrumbs.length; i++) {
				var bc = this.breadcrumbs[i];
				var isSeparator = bc.isSeparator;
				if (isSeparator) {
					if (!firstSeparator) {
						firstSeparator = true;
						if (bc && bc.domNode) {
							domClass.add(bc.domNode, "firstSeparator");
						}
					} else {
						if (bc && bc.domNode) {
							domClass.remove(bc.domNode, "firstSeparator");
						}
					}
				}
				this._renderItem(bc, !isSeparator && i != this.breadcrumbs.length - 1);
			}
			this.onCompleteRendering();
		},

		/**
		 * @private
		 */
		_refresh: function() {
			this._clearContent();
			this._renderItems();
		},

		/**
		 * Event fired when clicking an item in the breadcrumb.
		 * 
		 * @param breadcrumbUserData
		 *            The breadcrumbUserData that was clicked.
		 * @param evt
		 *            The event.
		 */
		onClick: function(breadcrumbUserData, evt) {
		},

		/**
		 * Event fired when clicking on the separator to the right of an item
		 * 
		 * @param breadcrumbUserData
		 *            The breadcrumbUserData for the item to the left of the separator that was clicked.
		 * @param separator
		 *            The separator widget.
		 * @param evt
		 *            The event.
		 * @since 2.0.3
		 */
		onClickSeparator: function(breadcrumbUserData, separator, evt) {
		},

		/**
		 * This event method is called after the properties have been rendered.
		 * 
		 * @since 2.0.3.3
		 */
		onCompleteRendering: function() {
		},

		/**
		 * Event fired when a breadcrumb item is popped (removed from the breadcrumb list).
		 * 
		 * @param bc
		 *            The breadcrumb item that is popped.
		 */
		onPop: function(bc) {
		},

		/**
		 * @private
		 */
		_nop: null
	});
});
