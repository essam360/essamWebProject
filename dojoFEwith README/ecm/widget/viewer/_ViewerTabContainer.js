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
	"dojo/dom-style",
	"dojo/dom-class",
	"dojo/keys",
	"dojo/on",
	"dojo/text!./templates/_ViewerTabButton.html",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/focus",
	"dijit/registry",
	"dijit/MenuItem",
	"dijit/layout/TabContainer",
	"dijit/layout/TabController",
	"dijit/layout/ScrollingTabController",
	"ecm/LoggerMixin",
	"ecm/model/_itemUtils",
	"ecm/model/Action",
	"./_ViewerContainerMixin",
], //
function(declare, lang, array, connect, aspect, domStyle, domClass, keys, on, viewerTabButtonTemplate, _WidgetsInTemplateMixin, focus, registry, MenuItem, TabContainer, TabController, ScrollingTabController, LoggerMixin, itemUtils, Action, _ViewerContainerMixin) {

	/**
	 * @name ecm.widget.viewer._ViewerTabContainer
	 * @augments dijit.layout.TabContainer
	 */
	var _ViewerTabContainer = declare("ecm.widget.viewer._ViewerTabContainer", [
		TabContainer,
		_ViewerContainerMixin,
		LoggerMixin
	], {
		/** @lends ecm.widget.viewer._ViewerTabContainer.prototype */
		controllerWidget: "ecm.widget.viewer._ViewerScrollingTabController",
		style: null,
		useMenu: true,
		useSlider: true,
			
		postMixInProperties: function() {
			this.inherited(arguments);
			if(this.wrappingTabController==true){
				this.controllerWidget = "ecm.widget.viewer._ViewerTabController";
			}
		},

		postCreate: function() {
			this.inherited(arguments);
			this._setupTabContextMenu();
		},

		_setupTabContextMenu: function() {
			var menu = registry.byId(this.tablist.id + "_Menu");
			var that = this;
			if(!menu)
				return;
			this.own(aspect.after(menu, "onOpen", function() {
				var tab = registry.byNode(menu.currentTarget).page;
				var inMergeSplit = that.contentViewer.mergeSplitContext.isEnabled() && that.contentViewer.mergeSplitContext.isViewerInScope(tab.contentViewerPane.docViewer);
				array.forEach(menu.getChildren(), function(menuItem) {
					if (menuItem.id == menu.id + "_rename") {
						domStyle.set(menuItem.domNode, "display", tab.viewerItem.item.id ? "none" : "");
					} else if (menuItem.id == menu.id + "_delete") {
						var canDelete = inMergeSplit && tab.viewerItem.item.id && _ViewerTabContainer._deleteAction.canPerformAction(tab.viewerItem.item.repository, [ tab.viewerItem.item ], "", null, tab.viewerItem.item.resultSet);
						domStyle.set(menuItem.domNode, "display", !canDelete ? "none" : "");
						menuItem.set("disabled", !canDelete || that.contentViewer.mergeSplitContext.isAnyViewerDirty());
					} else if (menuItem.id == menu.id + "_move") {
						domStyle.set(menuItem.domNode, "display", !that.contentViewer.mergeSplitContext.isEnabled() ? "none" : "");
					} else if (menuItem.id == menu.id + "_moveToNewWindow") {
						domStyle.set(menuItem.domNode, "display", (that.contentViewer.mainTabContainer.getViewerTabs().length <= 1 || that.contentViewer.isSubWindow || that.contentViewer.mergeSplitContext.isEnabled() )? "none" : "");
					}
				});
			}));
			this._addTabContextMenuItem(menu, "moveToNewWindow", ecm.messages.viewer_move_to_new_window, function(tab) {
				that.contentViewer._moveToNewWindow(tab, that);
			});
			this._addTabContextMenuItem(menu, "move", ecm.messages.viewer_mergesplit_context_menu_move, function(tab) {
				that.contentViewer._transferTab(tab, that);
			});
			this._addTabContextMenuItem(menu, "rename", ecm.messages.viewer_mergesplit_context_menu_rename, function(tab) {
				that._startRenamingTabLabel(tab);
			});
			this._addTabContextMenuItem(menu, "delete", ecm.messages.viewer_mergesplit_context_menu_delete, function(tab) {
				_ViewerTabContainer._deleteAction.performAction(tab.viewerItem.item.repository, [ tab.viewerItem.item ], function() {
					var parent = itemUtils.getItemParentFolder(tab.viewerItem.item);
					if (parent)
						parent.refresh();
					that.unloadViewer(tab);
				}, null, tab.viewerItem.item.resultSet);
			});
		},

		_startRenamingTabLabel: function(tab) {
			this._renaming = true;
			var editor = tab.controlButton._tabLabelEditor;
			editor.set("value", tab.get("title"));
			domStyle.set(editor.domNode, "display", "");
			domStyle.set(tab.controlButton.containerNode, "display", "none");
			focus.focus(editor.focusNode);
			var handlers = this._clearLabelEditorEventHandlers();
			handlers.push(on(editor.focusNode, "keyup", lang.hitch(this, function(e) {
				if (e.keyCode == keys.ENTER && !e.shiftKey || e.keyCode == keys.ESCAPE || e.keyCode == keys.TAB) {
					e.preventDefault();
					e.stopPropagation();
					if (e.keyCode == keys.ESCAPE)
						this._finishRenamingTabLabel(tab);
				} else if (e.keyCode == 65 && e.ctrlKey || e.keyCode == keys.LEFT_ARROW || e.keyCode == keys.RIGHT_ARROW || e.keyCode == keys.DELETE) {
					e.stopPropagation();
				}
			})));
			handlers.push(on(editor.focusNode, "keypress", lang.hitch(this, function(e) {
				if (e.keyCode == keys.ENTER && !e.shiftKey || e.keyCode == keys.ESCAPE || e.keyCode == keys.TAB) {
					e.preventDefault();
					e.stopPropagation();
				} else if (e.keyCode == 65 && e.ctrlKey || e.keyCode == keys.LEFT_ARROW || e.keyCode == keys.RIGHT_ARROW || e.keyCode == keys.DELETE) {
					e.stopPropagation();
				}
			})));
			handlers.push(on(editor.focusNode, "keydown", lang.hitch(this, function(e) {
				if (e.keyCode == keys.ENTER && !e.shiftKey || e.keyCode == keys.ESCAPE || e.keyCode == keys.TAB) {
					e.preventDefault();
					e.stopPropagation();
					if (e.keyCode == keys.ENTER || e.keyCode == keys.TAB)
						this._renameTabLabel(tab);
				} else if (e.keyCode == 65 && e.ctrlKey || e.keyCode == keys.LEFT_ARROW || e.keyCode == keys.RIGHT_ARROW || e.keyCode == keys.DELETE) {
					e.stopPropagation();
				}
			})));
			handlers.push(on(editor.focusNode, "blur", lang.hitch(this, function(e) {
				this._renameTabLabel(tab);
			})));
		},

		_renameTabLabel: function(tab) {
			if (!this._renaming)
				return;
			var newLabel = tab.controlButton._tabLabelEditor.get("value");
			if (newLabel) {
				tab.viewerItem.item.name = newLabel;
				tab.set("title", tab.viewerItem.getHtmlName());
			}
			this._finishRenamingTabLabel(tab);
		},

		_finishRenamingTabLabel: function(tab) {
			this._renaming = false;
			domStyle.set(tab.controlButton._tabLabelEditor.domNode, "display", "none");
			domStyle.set(tab.controlButton.containerNode, "display", "");
			focus.focus(tab.controlButton.containerNode);
			this._clearLabelEditorEventHandlers();
		},

		_clearLabelEditorEventHandlers: function() {
			this._labelEditorEventHandlers = array.filter(this._labelEditorEventHandlers, function(handler) {
				handler.remove();
				return false;
			});
			return this._labelEditorEventHandlers;
		},

		_addTabContextMenuItem: function(menu, id, label, callback) {
			menu.addChild(new MenuItem({
				id: menu.id + "_" + id,
				label: label,
				ownerDocument: this.tablist.ownerDocument,
				dir: this.tablist.dir,
				lang: this.tablist.lang,
				textDir: this.tablist.textDir,
				onClick: function (event) {
					var tab = registry.byNode(this.getParent().currentTarget).page;
					if (lang.isFunction(callback))
						callback(tab, event);
				}
			}));
		},

		addChild: function(contentViewerTab) {
			this.inherited(arguments);
			if (contentViewerTab.viewerItem)
				this._sendDocumentOpened(contentViewerTab);
		},

		removeChild: function(contentViewerTab) {
			this.inherited(arguments);
			if (contentViewerTab.viewerItem)
				this._sendDocumentClosed(contentViewerTab);
		}
	});

	_ViewerTabContainer._deleteAction = new Action({
		id: "DeleteItem",
		global: false,
		privileges: [
			"privDelete"
		],
		repositoryTypes: "cm,p8,cmis,box"
	});

	//Wrapped tab list
	var _ViewerTabController = declare("ecm.widget.viewer._ViewerTabController", [
		TabController,
		LoggerMixin
	], {
		buttonWidget: "ecm.widget.viewer._ViewerTabButton",

		postCreate: function(){
			this.inherited(arguments);
			this._menuItemClickHandles = [];
			if (this._menuBtn) {
				this.own(aspect.after(this._menuBtn, "openDropDown", lang.hitch(this, function() {
					this._removeMenuItemClickHandles();
					var container = registry.byId(this.containerId);
					var menuItems = this._menuBtn.dropDown.getChildren();
					array.forEach(container.getChildren(), lang.hitch(this, function(tab, i) {
						var menuItem = menuItems[i] ? menuItems[i] : null;
						if (menuItem) {
							this._menuItemClickHandles.push(aspect.after(menuItem, "onClick", function() {
								container.onTabMenuItemSelect(tab);
							}));
						}
					}));
				})));
			}
		},

		_removeMenuItemClickHandles: function() {
			array.forEach(this._menuItemClickHandles, function(handle) {
				handle.remove();
			});
			this._menuItemClickHandles = [];
		},

		destroy: function() {
			this.inherited(arguments);
			this._removeMenuItemClickHandles();
			this._menuItemClickHandles = null;
		}
	});

	//Scrolling tab list
	var _ViewerScrollingTabController = declare("ecm.widget.viewer._ViewerScrollingTabController", [
		ScrollingTabController,
		_ViewerTabController,
		LoggerMixin
	], {
		
	});
	
	var _ViewerTabButton = declare("ecm.widget.viewer._ViewerTabButton", [
		TabController.TabButton,
		_WidgetsInTemplateMixin,
		LoggerMixin
	], {
		templateString: viewerTabButtonTemplate,

		setDirty: function(dirty) {
			if (dirty) {
				domClass.replace(this.dirtyMarker, "dirtyTab", "cleanTab");
			} else {
				domClass.replace(this.dirtyMarker, "cleanTab", "dirtyTab");
			}
		},

		setLocked: function(locked) {
			domClass.replace(this.lockedMarker, locked ? "lockedTab" : "cleanTab", locked ? "cleanTab" : "lockedTab");
		},

		setInMergeSplitMode: function(enabled) {
			domClass.replace(this.mergeSplitMarker, enabled ? "mergeSplitTab" : "cleanTab", enabled ? "cleanTab" : "mergeSplitTab");
		}
	});

	return _ViewerTabContainer;
});
