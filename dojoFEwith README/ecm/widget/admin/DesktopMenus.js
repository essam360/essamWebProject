/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array",
	"dojo/string",
	"dojo/aspect",
	"dojo/dom-style",
	"dojo/dom-construct",
	"dojo/store/Memory",
	"dojo/dom-geometry",
	"dijit/_Widget",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"ecm/MessagesMixin",
	"ecm/model/admin/DesktopData",
	"ecm/model/admin/MenuConfig",
	"ecm/model/admin/MenuTypeConfig",
	"ecm/model/admin/AdminRoleConfig",
	"ecm/widget/FilteringSelect",
	"ecm/widget/HoverHelp",
	"idx/layout/TitlePane",
	"dijit/layout/ContentPane",
	"ecm/widget/admin/_NavigatorAdminTabBase",
	"dojo/text!./templates/DesktopMenus.html"
], //

function(declare, lang, array, string, aspect, style, construct, MemoryStore, geometry, _Widget, _TemplatedMixin, _WidgetsInTemplateMixin, MessagesMixin, DesktopData, MenuConfig, MenuTypeConfig, AdminRoleConfig, FilteringSelect, HoverHelp, TitlePane, ContentPane, _NavigatorAdminTabBase, template) {

	/**
	 * @private Part of the NavigatorAdminPane widget.
	 * @name ecm.widget.admin.DesktopMenus
	 * @class Provides a pane that is used to specify the menus that are to be accessible from a desktop.
	 */

	return declare("ecm.widget.admin.DesktopMenus", [
		ContentPane,
		_NavigatorAdminTabBase,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		MessagesMixin
	], {

		templateString: template,
		widgetsInTemplate: true,

		postCreate: function() {
			this.inherited(arguments);
			this._fields = [];
			this.toolbarTitlePane.set("title", this.messages.admin_menu_toolbars);
			this.contextMenuTitlePane.set("title", this.messages.admin_menu_context_menus);

			this.officeRibbonbarTitlePane.set("title", this.messages.admin_menu_office_toolbars);
			this.officeContextMenuTitlePane.set("title", this.messages.admin_menu_office_menus);
		},

		_destroyFields: function() {
			while (this.toolbarTable.firstChild) {
				this.toolbarTable.removeChild(this.toolbarTable.firstChild);
			}

			for (var i = 0; i < this._fields.length; i++) {
				if (this._fields[i].destroy) {
					this._fields[i].destroy();
				}
			}
			this._fields = [];

			if (this._hoverHelpArray) {
				for ( var i in this._hoverHelpArray) {
					this._hoverHelpArray[i].destroy();
				}
				this._hoverHelpArray = null;
			}
		},

		// override
		onMarkDirty: function() {
		},

		/**
		 * @since 2.0.3
		 */
		setData: function(desktopData) {
			this.desktopData = desktopData;
		},

		// Called when the user hits the Reset button 
		loadData: function(onComplete) {
			this._isFilterSelectsLoaded = true;
			this._loadFilteringSelects(onComplete);
		},

		_loadFilteringSelects: function(onComplete) {
			this._destroyFields();

			var lastCategory = "";
			if (this.desktopData.menuTypes) {
				for (var i = 0; i < this.desktopData.menuTypes.length; i++) {
					var menuType = this.desktopData.menuTypes[i];

					var value = this.desktopData.desktopConfig ? this.desktopData.desktopConfig.getValue(menuType.id) : "Default" + menuType.id;
					//console.debug("$$ menutype=" + menuType.id + " value=" + value + " category=" + menuType.getCategory() + " label=" + menuType.getLabel());
					if (!value) {
						value = "Default" + menuType.id;
					}

					var table = "";
					if (this._isOfficeMenuType(menuType)) {
						table = menuType.isToolbar() ? this.officeToolbarTable : this.officeContextMenuTable;
					} else {
						table = menuType.isToolbar() ? this.toolbarTable : this.contextMenuTable;
					}
					if (lastCategory != menuType.getCategory()) {
						lastCategory = menuType.getCategory();
						var categoryTr = construct.create("tr", {}, table);
						var tdLabel = construct.create("td", {
							'class': 'propertyRowLabel',
							colspan: 2
						}, categoryTr);
						var span = construct.create("span", {
							'class': 'heading'
						}, tdLabel);
						span.appendChild(document.createTextNode(menuType.getCategory())); // Not using innerHTML, due to content = "<test>aa" causes issues with innerHTML
					}

					if (!menuType.getLabel()) {
						var label = null;
						if (menuType.id == "noCustomContextMenus") {
							label = this.messages.admin_menu_contextMenu_custom_empty;
						} else if (menuType.id == "noCustomToolbars") {
							label = this.messages.admin_menu_toolbar_custom_empty;
						}
						if (label) {
							var tr = construct.create("tr", {}, table);
							var tdLabel = construct.create("td", {
								'class': 'propertyRowLabel indent',
								colspan: 2
							}, tr);
							var span = construct.create("span", {}, tdLabel);
							span.appendChild(document.createTextNode(label)); // Not using innerHTML, due to content = "<test>aa" causes issues with innerHTML
							continue;
						}
					}

					var widgetId = this.id + "_" + menuType.id + new Date().getTime();
					var tr = construct.create("tr", {}, table);
					var tdLabel = construct.create("td", {
						'class': 'propertyRowLabel indent'
					}, tr);
					var span = construct.create("span", {
						"class": "required",
						innerHTML: "*"
					}, tdLabel);
					var label = construct.create("label", {
						'for': widgetId
					}, tdLabel);

					//label.appendChild(document.createTextNode(menuType.getLabel() + ":")); // Not using innerHTML, due to content = "<test>aa" causes issues with innerHTML
					var labelData = string.substitute(this.messages.append_colon, [
						menuType.getLabel()
					]);
					label.appendChild(document.createTextNode(labelData));
					var tdValue = construct.create("td", {
						'class': 'propertyRowValue'
					}, tr);

					var menus = this.desktopData.getMenusWithType(menuType.id);
					var store = this._createMenuStore(menus);
					if (store) {
						var field = this._fields[this._fields.length] = new FilteringSelect({
							id: widgetId,
							store: store,
							value: value,
							labelType: "text",
							label: "label",
							searchAttr: "label",
							maxHeight: 200
						});
						field.menuTypeId = menuType.id;
						tdValue.appendChild(field.domNode);

						if (menuType.getTooltip()) {
							var hoverHelp = new HoverHelp({
								message: menuType.getTooltip()
							});
							hoverHelp.startup();
							if (!this._hoverHelpArray) {
								this._hoverHelpArray = [];
							}
							this._hoverHelpArray.push(hoverHelp);
							tdLabel.appendChild(hoverHelp.domNode);
							field.setHoverHelp(hoverHelp);
						}
						this.own(aspect.after(field, "onChange", lang.hitch(this, "_onFieldChange"), true));
					}
				}
			}
			if (onComplete) {
				onComplete();
			}
		},

		_isOfficeMenuType: function(menuType) {
			return menuType.id.indexOf("Office") > -1 ? true : false;
		},

		_createMenuStore: function(menus) {
			var items = [];
			for (var i = 0; i < menus.length; i++) {
				var menu = menus[i];
				items.push({
					"id": menu.id,
					"label": menu.getName()
				});
			}
			if (items.length > 0) {
				return new MemoryStore({
					data: items
				});
			} else {
				return null;
			}
		},

		// Called when the tab is selected
		onSelect: function() {
			if (!this._isFilterSelectsLoaded) {
				this.loadData();
			}
		},

		// Check if all the data is valid - called when the user hits save
		validateData: function(focus) {
			for (var i = 0; i < this._fields.length; i++) {
				var field = this._fields[i];
				if (!field.get('value')) {
					return false;
				}
			}
			return true;
		},

		// Called before save - copy the screen values into the model
		loadWithFieldValues: function(adminModel) {
			for (var i = 0; i < this._fields.length; i++) {
				var field = this._fields[i];
				var value = field.get('value');
				var menuTypeId = field.menuTypeId;
				adminModel.setValue(menuTypeId, value);
			}
		},

		// return false if you want to mark tab as dirty - called when data is changed
		isResetingFields: function() {
			return true;
		},

		_onFieldChange: function() {
			this.onMarkDirty();
		},
		
		setupForDesktopAdmin: function(desktopAdminRole){
			if (!desktopAdminRole.hasPrivilege(AdminRoleConfig.MENUS_TOOLBARS_PRIVILEGE)){
				style.set(this.toolbarTitlePane.domNode, "display", "none");
			}
			if (!desktopAdminRole.hasPrivilege(AdminRoleConfig.MENUS_CONTEXT_MENUS_PRIVILEGE)){
				style.set(this.contextMenuTitlePane.domNode, "display", "none");
			}
			if (!desktopAdminRole.hasPrivilege(AdminRoleConfig.MENUS_OFFICE_CMDS_PRIVILEGE)){
				style.set(this.officeRibbonbarTitlePane.domNode, "display", "none");
			}
			if (!desktopAdminRole.hasPrivilege(AdminRoleConfig.MENUS_OFFICE_MENUS_PRIVILEGE)){
				style.set(this.officeContextMenuTitlePane.domNode, "display", "none");
			}
		}
	});

});
