/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/dom-class",
	"dojo/dom-construct",
	"dojo/dom-geometry",
	"dijit/registry",
	"dijit/MenuItem",
	"dijit/Tooltip",
	"idx/layout/MoveableTabContainer",
	"../../Messages",
	"../../LoggerMixin",
	"./TabButton"
],

function(declare, //
lang, //
domClass, //
domConstruct, //
domGeometry, //
registry, //
MenuItem, //
Tooltip, //
MoveableTabContainer, //
Messages, //
LoggerMixin, //
TabButton) {

	return declare("ecm.widget.layout.TabController", [
		idx.layout.MoveableTabController
	], {
		buttonWidget: TabButton,

		addButtonId: null,

		postMixInProperties: function() {
			this.inherited(arguments);
			this.messages = ecm.messages;
		},

		postCreate: function() {
			this.inherited(arguments);

			this.tabContainer = registry.byId(this.containerId);

			if (this.addButtonId) {
				this._addButton = registry.byId(this.addButtonId);

				if (this._addButton) {
					this._addButton.containerId = this.containerNode;
					domConstruct.place(this._addButton.domNode, this.domNode, "last");
				}
			}
		},

		destroy: function() {
			if (this._addButton)
				this._addButton.destroy();
			this.inherited(arguments);
		},

		resize: function(dim) {
			this.inherited(arguments);

			var self = this;
			setTimeout(function() {
				self._alignAddButton();
			}, 0);
		},

		_addMenus: function(page) {

		},

		onAddChild: function(/*dijit._Widget*/page, /*Integer?*/insertIndex) {
			this.inherited(arguments);
			if (page.instructions && page.instructions.id) {
				page.controlButton.focusNode.setAttribute("aria-describedby", page.instructions.id); // Jaws announces the instructions text when tab to this tab.
			}
			var self = this;
			setTimeout(function() {
				self._addMenus(page);
				self._alignAddButton(true);
				self._onTabUpdate(page);
			}, 0);
		},

		onRemoveChild: function(page) {
			this.inherited(arguments);

			var self = this;
			setTimeout(function() {
				self._onTabUpdate(page);
				self._alignAddButton();
			}, 0);
		},

		onSelectChild: function(page) {
			this.inherited(arguments);

			var self = this;
			setTimeout(function() {
				self._onTabUpdate(page);
				self._alignAddButton();
				if (page["onSelect"])
					page.onSelect();
			}, 0);
		},

		onTabOpened: function(child) {
			// Allow interested widget to connect to event
		},

		_onTabUpdate: function(page) {
			if (this.tabContainer._onTabUpdate) {
				this.tabContainer._onTabUpdate(page);
			}
		},

		_alignAddButton: function(setfocus) {
			if (this._addButton) {

				var children = this.getChildren();
				var lastChild = children[children.length - 1];
				if (lastChild) {
					lastChild = lastChild.domNode;
					var l = lastChild.offsetLeft;
					var w = lastChild.clientWidth;
					var edge = l + w;

					var mb = domGeometry.getMarginBox(this.tablistWrapper);
					var wrapperEdge = this.tablistWrapper.offsetLeft + this.tablistWrapper.clientWidth;
					domGeometry.setMarginBox(this._addButton.domNode, {
						l: Math.min(edge, wrapperEdge)
					});
				}

				if (setfocus) {
					this._addButton.focus();
				}
			}
		}
	});

});
