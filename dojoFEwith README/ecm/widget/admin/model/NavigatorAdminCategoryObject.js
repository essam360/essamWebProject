/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/aspect",
	"ecm/MessagesMixin",
	"ecm/widget/admin/model/_NavigatorAdminObjectBase",
	"ecm/Messages",
	"ecm/model/Action",
	"ecm/widget/admin/model/NavigatorAdminInstanceObject",
	"ecm/widget/admin/TabDesktops",
	"ecm/widget/admin/TabDesktop",
	"ecm/widget/admin/TabMenus",
	"ecm/widget/admin/TabMenu",
	"ecm/widget/admin/TabPlugins",
	"ecm/widget/admin/TabPlugin",
	"ecm/widget/admin/TabRepositories",
	"ecm/widget/admin/TabRepository",
	"ecm/widget/admin/TabViewers",
	"ecm/widget/admin/TabViewer",
	"ecm/widget/admin/TabThemes",
	"ecm/widget/admin/TabTheme",
	"ecm/model/admin/DesktopConfig",
	"ecm/model/admin/RepositoryConfig",
	"ecm/model/admin/MenuConfig",
	"ecm/model/admin/RedactionReasonConfig",
	"ecm/model/admin/ViewerConfig",
	"ecm/model/admin/PluginConfig",
	"ecm/model/admin/ThemeConfig",
	"ecm/model/admin/AdminData"
], //

function(declare, lang, aspect, MessagesMixin, _NavigatorAdminObjectBase, Messages, Action, NavigatorAdminInstanceObject, TabDesktops, TabDesktop, TabMenus, TabMenu, TabPlugins, TabPlugin, TabRepositories, TabRepository, TabViewers, TabViewer, TabThemes, TabTheme, DesktopConfig, RepositoryConfig, MenuConfig,RedactionReasonConfig, ViewerConfig, PluginConfig, ThemeConfig, AdminData) {

	/**
	 * @private Part of the NavigatorAdminPane widget.
	 * @name ecm.widget.admin.model.NavigatorAdminCategoryObject
	 * @class Provides methods that are used to handle category objects in the IBM Content Navigator administration
	 *        tool. These category objects represent the Desktops, Repositories, Plugins, Viewer Maps, and Menus nodes
	 *        in the main navigation tree in the administration tool.
	 *        <p>
	 *        The methods behave differently based on the category. For example, the <code>onClick</code> method opens
	 *        a tab and displays the children for the selected category.
	 *        </p>
	 * @augments ecm.widget.admin.model._NavigatorAdminObjectBase
	 * @deprecated
	 */
	return declare("ecm.widget.admin.model.NavigatorAdminCategoryObject", [
		_NavigatorAdminObjectBase
	], {
		/** @lends ecm.widget.admin.model.NavigatorAdminCategoryObject.prototype */

		constructor: function() {
			this.inherited(arguments);
			this.initialize();
		},

		/**
		 * Overwritten for initialization
		 */
		initialize: function() {
			if (this._initialized) {
				return;
			}
			this._initialized = true;
			this._myLabel = ecm.messages[this.name];
			this._mayHaveChildren = true;
			this._childrenLoaded = false;
			this._myAdminModel = null;

			this._actions = [];
			this._actions.push(new Action({
				id: this._aOpen,
				name: this.getActionLabel(this._aOpen)
			}));
			if (this.name == this._nREPOSITORIES) {
				this._actions.push(new Action({
					id: "Separator"
				}));
				var newAction = new Action({
					id: this._aNew,
					name: this.messages.admin_new_button_label,
					repositoryTypes: "cm"
				});
				this._actions.push(newAction);
				ecm.model.admin.appCfg.getServerObjects(lang.hitch(this, function(serverObjects) { // get list of servers we support
					// Weblogic does not support cm.  Show add repository for only the repositories that are supported.
					for ( var i in serverObjects) {
						var serverObj = serverObjects[i];
						var key = serverObj.getLabelKey();
						var displaName = key && this.messages[key] ? this.messages[key] : serverObj.getLabel();
						newAction.subActions.push(new Action({
							id: this._aNew,
							name: displaName,
							repositoryTypes: serverObj.id,
							configClass: serverObj.getConfigClass(),
							connectedConfigClass: serverObj.getConnectedConfigClass()
						}));
					}
				}), {
					application: ecm.model.admin.appCfg.id,
					userid: ecm.model.desktop.userId,
					login_desktop: ecm.model.desktop && ecm.model.desktop.id ? ecm.model.desktop.id : null,
					securityTopic: "repos.repos"
				});
			} else if (this.name == this._nMENUS) {
				// no new for menus
			} else {
				this._actions.push(new Action({
					id: "Separator"
				}));
				this._actions.push(new Action({
					id: this._aNew,
					name: this.getActionLabel(this._aNew)
				}));
			}

			switch (this.name) {
			case this._nDESKTOPS:
				this._resetOnChildrenChange = false;
				this._myIconClass = "adminIconDesktops";
				this._myTabWidgetClassName = "ecm.widget.admin.TabDesktops";
				this._childType = this._tDESKTOP;
				this._childTabWidgetClassName = "ecm.widget.admin.TabDesktop";
				this._childTabWidgetTitle = ecm.messages.admin_new_desktop;
				this._childIconClass = "adminIconDesktop";
				break;

			case this._nMENUS:
				this._resetOnChildrenChange = false;
				this._myIconClass = "adminIconMenus";
				this._myTabWidgetClassName = "ecm.widget.admin.TabMenus";
				this._childType = this._tMENU;
				this._childTabWidgetClassName = "ecm.widget.admin.TabMenu";
				this._childTabWidgetTitle = ecm.messages.admin_new_menu;
				this._childIconClass = "adminIconMenu";
				break;
			
			case this._nREDACTION_REASONS:
				this._resetOnChildrenChange = false;
				this._myIconClass = "adminIconMenus";
				this._myTabWidgetClassName = "ecm.widget.admin.TabRedactions";
				this._childType = this._tREDACTION_REASONS;
				this._childTabWidgetClassName = "ecm.widget.admin.TabRedactions";
				this._childTabWidgetTitle = ecm.messages.admin_new_reason_code;
				this._childIconClass = "adminIconMenu";
				break;
				
			case this._nPLUGINS:
				this._resetOnChildrenChange = false;
				this._myIconClass = "adminIconPlugins";
				this._myTabWidgetClassName = "ecm.widget.admin.TabPlugins";
				this._childType = this._tPLUGIN;
				this._childTabWidgetClassName = "ecm.widget.admin.TabPlugin";
				this._childTabWidgetTitle = ecm.messages.admin_new_plugin;
				this._childIconClass = "adminIconPlugin";
				break;

			case this._nREPOSITORIES:
				this._resetOnChildrenChange = false;
				this._myIconClass = "adminIconRepositories";
				this._myTabWidgetClassName = "ecm.widget.admin.TabRepositories";
				this._childType = this._tREPOSITORY;
				this._childTabWidgetClassName = "ecm.widget.admin.TabRepository";
				this._childTabWidgetTitle = ecm.messages.admin_new_repository;
				this._childIconClass = "adminIconRepository";
				break;

			case this._nVIEWERS:
				this._resetOnChildrenChange = false;
				this._myIconClass = "adminIconMappings";
				this._myTabWidgetClassName = "ecm.widget.admin.TabViewers";
				this._childType = this._tVIEWERS;
				this._childTabWidgetClassName = "ecm.widget.admin.TabViewer";
				this._childTabWidgetTitle = ecm.messages.admin_new_viewer_mapping;
				this._childIconClass = "adminIconMapping";
				break;
			}

			if (this._mayHaveChildren) {
				this.own(aspect.after(ecm.model.admin.adminData, "onChildrenChange", lang.hitch(this, function(parent) {
					if ((parent instanceof DesktopConfig && this.name == this._nDESKTOPS) || (parent instanceof ViewerConfig && this.name == this._nVIEWERS) || (parent instanceof RepositoryConfig && this.name == this._nREPOSITORIES) || (parent instanceof MenuConfig && this.name == this._nMENUS) || (parent instanceof PluginConfig && this.name == this._nPLUGINS) || (parent instanceof ThemeConfig && this.name == this._nTHEMES)) {
						this._loadChildren(lang.hitch(this, "_onChildrenChange"), true);
					}
				}), true));

				this.own(aspect.after(ecm.model.admin.adminData, "onChange", lang.hitch(this, function(changeModel) {
					if ((changeModel instanceof DesktopConfig && this.name == this._nDESKTOPS) || (changeModel instanceof ViewerConfig && this.name == this._nVIEWERS) || (changeModel instanceof RepositoryConfig && this.name == this._nREPOSITORIES) || (changeModel instanceof MenuConfig && this.name == this._nMENUS) || (changeModel instanceof PluginConfig && this.name == this._nPLUGINS) || (changeModel instanceof ThemeConfig && this.name == this._nTHEMES)) {
						this.getChildren(lang.hitch(this, function(children) {
							if (children != null) {
								for ( var i in children) {
									var child = children[i];
									if (changeModel.id == child._myAdminModel.id) {
										child._myAdminModel = changeModel;
										child.onAdminModelChange();
										break;
									}
								}
							}
						}));
					}
				}), true));
			}
		},

		/**
		 * Overwritten to disallow deletion of category objects
		 */
		_isDeletable: function() {
			return false;
		},

		/**
		 * Overwritten to load the children for the corresponding category
		 */
		_loadChildren: function(onComplete, isReload) {
			switch (this.name) {
			case this._nDESKTOPS:
				this._loadChildrenComplete(onComplete, isReload, ecm.model.admin.adminData.desktops);
				break;
			case this._nPLUGINS:
				this._loadChildrenComplete(onComplete, isReload, ecm.model.admin.adminData.plugins);
				break;
			case this._nMENUS:
				this._loadChildrenComplete(onComplete, isReload, ecm.model.admin.adminData.menus);
				break;
			case this._nREPOSITORIES:
				this._loadChildrenComplete(onComplete, isReload, ecm.model.admin.adminData.repositories);
				break;
			case this._nVIEWERS:
				this._loadChildrenComplete(onComplete, isReload, ecm.model.admin.adminData.viewers);
				break;
			default:
				if (onComplete) {
					onComplete();
				}
			}
		},

		/**
		 * @private Callback from _loadChildren.
		 */
		_loadChildrenComplete: function(onComplete, isReload, children) {
			var oldChildren = this._children;
			this._children = [];
			for ( var i in children) {
				var child = null;
				for ( var j in oldChildren) {
					if (oldChildren[j].id == this._childType + "_" + children[i].id) {
						child = oldChildren[j];
						child.setAdminModel(children[i]);
						child.name = children[i].getName();
					}
				}
				if (!child) {
					child = new NavigatorAdminInstanceObject();
					child.id = this._childType + "_" + children[i].id;
					child.name = children[i].getName();
					child.setType(this._childType);
					child.setAdminModel(children[i]);
					child.initialize();
				}
				this.addChild(child, isReload);
			}
			if (onComplete) {
				onComplete();
			}
		},

		// Called when the user expands / collapses the tree node.
		_onExpandoClick: function(expanded) {
			if (expanded) {
				switch (this.name) {
				case this._nDESKTOPS:
					ecm.model.admin.adminData.loadDesktops(); // the tree will reload with onChildrenChange listener
					break;
				case this._nPLUGINS:
					ecm.model.admin.adminData.loadPlugins();
					break;
				case this._nMENUS:
					ecm.model.admin.adminData.loadMenus();
					break;
				case this._nREPOSITORIES:
					ecm.model.admin.adminData.loadRepositories();
					break;
				case this._nVIEWERS:
					ecm.model.admin.adminData.loadViewers();
					break;
				}
			}
		},

		// When click the tree node, load the children nodes & process the open action (which shows this item's class in the tab pane)
		onClick: function() {
			this.getChildren(lang.hitch(this, function() {
				this.processAction(this._aOpen);
			}));
		},

		_onChildrenChange: function() {
			if (this._resetOnChildrenChange == undefined || this._resetOnChildrenChange == true) { // keep the old behavior of calling _onReset of the tab for older applications
				if (this._myTabWidgetInstance && !this._myTabWidgetInstance._destroyed) {
					this._myTabWidgetInstance._onReset();
				}
			}
			if (this._childrenLoaded)
				this.inherited(arguments);
		}
	});

});
