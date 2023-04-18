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
	"dojo/aspect",
	"dojo/dom-class",
	"dojo/dom-style",
	"dijit/registry",
	"dijit/focus",
	"dojox/html/entities",
	"../../LoggerMixin",
	"../../model/Item",
	"ecm/widget/admin/RedactionTabController",
	"../dialog/ConfirmationDialog",
	"../dialog/LoginDialog",
	"../layout/_TabContainerBase"
], function(declare, lang, array, connect, aspect, domClass, domStyle, registry, focus, entities, LoggerMixin, Item,  RedactionTabController, ConfirmationDialog, LoginDialog, _TabContainerBase) {

	/**
	 * @name ecm.widget.layout.RedactionTabContainer
	 * @class Provides a widget that contains and controls the redaction tabs that are open.
	 * @augments ecm.widget.layout._TabContainerBase
	 */
	return declare("ecm.widget.admin.redaction.RedactionTabContainer", [
		_TabContainerBase
	], {
		/** @lends ecm.widget.admin.redaction.RedactionTabContainer.prototype */
		controllerWidget: "ecm.widget.admin.redaction.RedactionTabController",

		/**
		 * A {@link ecm.model.Repository} object.
		 */
		repository: null,

		postCreate: function() {
			this.inherited(arguments);
			domClass.add(this.domNode, "ecmAdminTabContainer");
			this.own(aspect.after(ecm.model.desktop, "onLogout", lang.hitch(this, "_onLogout"), true));
		},

		_onLogout: function() {
			this.closeTab(this.getChildren(), false); //don't show confirmation dialog. it is already too late.
		},

		openTab: function(widget) {
			var widgetToSelect = null;
			var children = this.getChildren();
			if (children.length > 0) {
				if (array.indexOf(children, widget) > -1) {
					widgetToSelect = widget;
				} else {
					for ( var i in children) {
						var child = children[i];
						if (child.equals && child.equals(widget)) {
							widgetToSelect = child;
							break;
						}
					}
				}
			}
			if (widgetToSelect) {
				this.selectChild(widgetToSelect);
				widgetToSelect.onSelect();
				if (typeof widgetToSelect == "object" && typeof widgetToSelect.controlButton == "object" && typeof widgetToSelect.controlButton.focusNode == "object") {
					var style = domStyle.getComputedStyle(widgetToSelect.controlButton.focusNode);
					if (style.display != "none" && style.visibility != "hidden")
						focus.focus(widgetToSelect.controlButton.focusNode);
				}
			} else {
				this.addChild(widget);
				this.selectChild(widget);
				if (typeof widget == "object" && typeof widget.controlButton == "object" && typeof widget.controlButton.focusNode == "object") {
					var style = domStyle.getComputedStyle(widget.controlButton.focusNode);
					if (style.display != "none" && style.visibility != "hidden")
						focus.focus(widget.controlButton.focusNode);
				}
				this.resize();
			}
		},

		closeTab: function(widgets, confirm) {
			var children = this.getChildren();
			for ( var i in children) {
				var child = children[i];
				for ( var j in widgets) {
					var widget = widgets[j];
					if (widget && widget.id == child.id) {
						if (confirm == undefined || confirm) {
							this.closeChild(child); // calls child.onClose() which checks shows confirmation dialog if dirty  
						} else {
							this.removeChild(child);
							child.destroyRecursive();
						}
						break;
					}
				}
			}
			//if (children && (array.indexOf(children, widgets) >= 0)) {
			//this.closeChild(widgets);
			//}
		},
		
		/**
		 * Closes tabs open for the item.
		 */
		closeChildren: function(item){
			var children = this.getChildren();
			for ( var i in children) {
				var child = children[i];
				if (child._myAdminModel && child._myAdminModel.id == item.id){
					this.removeChild(child);
					child.destroyRecursive();
				}
			}
		}

	});

});
