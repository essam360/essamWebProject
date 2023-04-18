/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array",
	"dojo/_base/sniff",
	"dojo/string",
	"dojo/aspect",
	"dojo/json",
	"dojo/dom-class",
	"dojo/on",
	"dojo/Deferred",
	"dijit/_Widget",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"gridx/Grid",
	"dojo/store/Memory",
	"gridx/core/model/cache/Sync",
	"gridx/modules/Focus",
	"gridx/modules/VirtualVScroller",
	"gridx/modules/CellWidget",
	"gridx/modules/Edit",
	"gridx/modules/select/Row",
	"gridx/modules/RowHeader",
	"gridx/modules/IndirectSelect",
	"gridx/modules/extendedSelect/Row",
	"gridx/modules/SingleSort",
	"dijit/form/Button",
	"dijit/layout/ContentPane",
	"idx/layout/BorderContainer",
	"idx/layout/TitlePane",
	"ecm/MessagesMixin",
	"ecm/LoggerMixin",
	"ecm/widget/Select",
	"ecm/widget/HoverHelp",
	"ecm/widget/admin/_NavigatorAdminTabBase",
	"ecm/model/admin/AccessRoleConfig",
	"dojo/has!dojo-bidi?dojox/string/BidiComplex",
	"dojo/text!./templates/AccessRoles.html"
], //

function(declare, lang, array, has, string, aspect, JSON, domClass, on, Deferred, _Widget, _TemplatedMixin, _WidgetsInTemplateMixin, Grid, MemoryStore, Cache, modFocus, modVScroll, modCellWidget, modEdit, modSelectRow, modRowHeader, modIndirectSelect, //
modExtendedSelectRow, modSingleSort, Button, ContentPane, BorderContainer, TitlePane, MessagesMixin, LoggerMixin, Select, HoverHelp, _NavigatorAdminTabBase, AccessRoleConfig, BidiComplex, template) {
	/**
	 * @private Part of the NavigatorAdminPane widget.
	 * @name ecm.widget.admin.AccessRoles
	 * @class Provides a widget that is used to configure the settings that are used by the OnDemand Web Enablement Kit.
	 */
	return declare("ecm.widget.admin.AccessRoles", [
		_NavigatorAdminTabBase,
		_Widget,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		MessagesMixin,
		LoggerMixin
	], {
		/** @lends ecm.widget.admin.AccessRoles.prototype */

		templateString: template,
		widgetsInTemplate: true,
		_currentRole: null,
		_accessRoles: {},
		ACCESS_RIGHT_VIEW: 1,
		ACCESS_RIGHT_CREATE: 2,
		ACCESS_RIGHT_MODIFY: 4,
		ACCESS_RIGHT_DELETE: 8,

		postCreate: function() {
			this.logExit(arguments.callee.nom);
			this.inherited(arguments);
			this._setHoverHelp();
			if (has("dojo-bidi")) {
			}
			this._accessRoleTitlePane.set("title", this.messages.admin_roles_access_role_title);
			this.logExit(arguments.callee.nom);
		},

		/**
		 * Called in initial load and when the user hits the Reset button
		 */
		loadData: function(roleData, deferred) {
			this._init = false;
			this._accessRole = null;
			this._accessRoles = {};
			deferred && deferred.then(lang.hitch(this, function() {
				this._roleData = roleData;
				for (var i = 0; roleData.accessRoles && i < roleData.accessRoles.length; i++) {
					this._accessRoles[roleData.accessRoles[i].id.toLowerCase()] = lang.clone(roleData.accessRoles[i]);
				}
				this._init = true;
			}));
			this._setupRoles(roleData);
			this._setupAccessRoleGrid(deferred);
			this.resize();
		},

		_setHoverHelp: function() {
			this.logExit(arguments.callee.nom);
			this.roles.setHoverHelp(this.rolesHoverHelp);
			this.logExit(arguments.callee.nom);
		},

		/**
		 * Setup roles select widget from roles data
		 */
		_setupRoles: function(roleData) {
			this.logExit(arguments.callee.nom);
			this._clearRolesSelection(this.roles);
			for (var i = 0; roleData.roles && i < roleData.roles.length; i++) {
				if (!this._currentRole) // if no currentRole, first role is currentRole
					this._currentRole = roleData.accessRoles[0];

				var option = {
					value: roleData.roles[i].id,
					label: roleData.roles[i].name,
					innerHTML: roleData.roles[i].name
				};
				this.roles.addOption(option);
			}
			this.logExit(arguments.callee.nom);
		},

		/**
		 * When role changed save current role first and retrieve role from internal structure, this._accessRoles and
		 * paste its content in a grid.
		 */
		_onRoleSelectionChanged: function() {
			this.logExit(arguments.callee.nom);
			if (this._accessRoleGrid && this._accessRoleGrid.store && this._accessRoles) {
				this._saveCurrentRights(this._accessRoleGrid.store)

				var selected = this.roles.get("value");
				this._currentRole = this._accessRoles[selected.toLowerCase()];
				this._setupAccessRoleGrid();
				this.resize();
			}
			this.logExit(arguments.callee.nom);
		},

		/**
		 * Loop thru store content and retrieve all rights and save its content to this._accessRoles. We later use
		 * this._accessRoles to save content back to server.
		 */
		_saveCurrentRights: function(store) {
			this.logExit(arguments.callee.nom);
			var accessRole = this._accessRoles[this._currentRole.id.toLowerCase()];
			var temp = {};
			accessRole && store.query(lang.hitch(this, function(rights) {
				var right = rights.viewRight + (rights.createRight * this.ACCESS_RIGHT_CREATE) + (rights.modifyRight * this.ACCESS_RIGHT_MODIFY) + (rights.deleteRight * this.ACCESS_RIGHT_DELETE);
				lang.setObject(rights.id, right, temp);
			}));

			for (property in temp) {
				if (temp.hasOwnProperty(property))
					accessRole._attributes[property] = JSON.stringify(temp[property]);
			}
			this.logExit(arguments.callee.nom);
		},

		/**
		 * Create a store based on current role content.
		 */
		_createStore: function() {
			var items = [];
			if (this._currentRole) {
				for ( var property in this._currentRole._attributes) {
					if (this._currentRole._attributes.hasOwnProperty(property)) {
						try {
							var data = JSON.parse(this._currentRole._attributes[property]);
							for ( var key in data) { // support two level of property only.
								if (data.hasOwnProperty(key)) {
									items.push({
										"id": property + "." + key,
										"viewRight": (data[key] & this.ACCESS_RIGHT_VIEW ? 1 : 0),
										"createRight": (data[key] & this.ACCESS_RIGHT_CREATE ? 1 : 0),
										"modifyRight": (data[key] & this.ACCESS_RIGHT_MODIFY ? 1 : 0),
										"deleteRight": (data[key] & this.ACCESS_RIGHT_DELETE ? 1 : 0),
										"name": key
									});
								}
							}
						} catch (e) {
							;
						}
					}
				}
			}

			return new MemoryStore({
				idProperty: "id",
				data: items
			})
		},

		/**
		 * Display this._currentRole content in a grid.
		 */
		_setupAccessRoleGrid: function(deferred) {
			this.logEntry(arguments.callee.nom);

			if (this._accessRoleGrid) {
				if (this._accessRoleGrid.store) {
					this._accessRoleGrid.store = null;
				}
				this._accessRoleGrid.destroy();
			}

			var structure = [
				{
					field: "name",
					name: this.messages.admin_repcfg_custom_head1,
					width: "25%"
				},
				{
					field: "viewRight",
					name: ecm.messages.admin_access_rights_view,
					widgetsInCell: true,
					navigable: true,
					decorator: function(data, rowId, rowIndex) {
						return '<span data-dojo-type="dijit.form.CheckBox"	data-dojo-attach-point="cbView" data-dojo-props="style:{width: \'16px\'}" />';
					},
					setCellValue: function(gridData, storeData, cellWidget) {
						this.cbView.set("checked", gridData);
						this.cbView.focusNode.setAttribute("aria-label", ecm.messages.admin_access_rights_view);
					},
					style: 'align: center; text-align: center;',
					sortable: true,
					editable: false,
					width: "10%"
				},
				{
					field: "createRight",
					name: ecm.messages.admin_access_rights_create,
					widgetsInCell: true,
					navigable: true,
					decorator: function(data, rowId, rowIndex) {
						return '<span data-dojo-type="dijit.form.CheckBox"	data-dojo-attach-point="cbCreate" data-dojo-props="style:{width: \'16px\'}" />  ';
					},
					setCellValue: function(gridData, storeData, cellWidget) {
						this.cbCreate.set("checked", gridData);
						this.cbCreate.focusNode.setAttribute("aria-label", ecm.messages.admin_access_rights_create);
					},
					style: 'align: center; text-align: center;',
					sortable: true,
					editable: false,
					width: "10%"
				},
				{
					field: "modifyRight",
					name: ecm.messages.admin_access_rights_modify,
					widgetsInCell: true,
					navigable: true,
					decorator: function(data, rowId, rowIndex) {
						return '<span data-dojo-type="dijit.form.CheckBox"	data-dojo-attach-point="cbModify" />  ';
					},
					setCellValue: function(gridData, storeData, cellWidget) {
						this.cbModify.set("checked", gridData);
						if (!gridData)
							this.cbModify.set("style", "width:16px");
						this.cbModify.focusNode.setAttribute("aria-label", ecm.messages.admin_access_rights_modify);
					},
					style: 'align: center; text-align: center;',
					sortable: true,
					editable: false,
					width: "10%"
				},
				{
					field: "deleteRight",
					name: ecm.messages.admin_access_rights_delete,
					widgetsInCell: true,
					navigable: true,
					decorator: function(data, rowId, rowIndex) {
						return '<span data-dojo-type="dijit.form.CheckBox" data-dojo-attach-point="cbDelete" data-dojo-props="style:{width: \'16px\'}" />  ';
					},
					setCellValue: function(gridData, storeData, cellWidget) {
						this.cbDelete.set("checked", gridData);
						this.cbDelete.focusNode.setAttribute("aria-label", ecm.messages.admin_access_rights_delete);
					},
					style: 'align: center; text-align: center;',
					sortable: true,
					editable: false,
					width: "10%"
				}
			];

			this._accessRoleGrid = new Grid({
				cacheClass: Cache,
				region: "center",
				textDir: has("text-direction"),
				store: this._createStore(),
				structure: structure,
				modules: [
					modFocus,
					modVScroll,
					modCellWidget,
					modEdit,
					modSingleSort,
					modSelectRow
				]
			});
			domClass.add(this._accessRoleGrid.domNode, "compact gridxWholeRow");
			this.gridBorderContainer.addChild(this._accessRoleGrid);
			this._accessRoleGrid.startup();

			this.own(aspect.after(this._accessRoleGrid, "onCellClick", lang.hitch(this, "_onCellClick"), true));
			this.own(aspect.after(this._accessRoleGrid, "onCellKeyDown", lang.hitch(this, "_onCellClick"), true));

			if (deferred)
				deferred.resolve(true);
			this.logExit(arguments.callee.nom);
		},

		// toggle the checked state
		_onCellClick: function(evt) {
			if (evt.columnId != "1" && ((evt.type == "keydown" && evt.keyCode == keys.SPACE) || evt.type == "click")) {
				var item = this._accessRoleGrid.store.get(evt.rowId);
				if (item) {
					switch (evt.columnId) {
					case "2":
						item.viewRight = this._toggleValue(item.viewRight);
						break;
					case "3":
						item.createRight = this._toggleValue(item.createRight);
						break;
					case "4":
						item.modifyRight = this._toggleValue(item.modifyRight);
						break;
					case "5":
						item.deleteRight = this._toggleValue(item.deleteRight);
						break;
					}
					this._accessRoleGrid.store.put(item);
					this._onFieldChanged();
				}

			}
		},

		_toggleValue: function(value) {
			return (value == 0) ? 1 : 0;
		},

		// Event method
		onMarkDirty: function() {
		},

		_onFieldChanged: function() {
			if (this._init && !this.isResetingFields(this._roleData))
				this.onMarkDirty();
		},

		/**
		 * Save content back to adminModel
		 */
		loadWithFieldValues: function(adminModel) {
			this.logExit(arguments.callee.nom);
			if (this._accessRoleGrid && this._accessRoleGrid.store && adminModel && adminModel.accessRoles) {
				this._saveCurrentRights(this._accessRoleGrid.store);
				array.forEach(adminModel.accessRoles, lang.hitch(this, function(entry, i) {
					adminModel.accessRoles[i] = this._accessRoles[entry.id.toLowerCase()];
				}));
			}
			this.logExit(arguments.callee.nom);
		},

		_getDir: function(val) {
			var dir = string.trim(val);
			if (dir.length > 0 && dir.charAt(dir.length - 1) == "\\") {
				dir = dir.substring(0, dir.length - 1);
			}
			if (has("dojo-bidi")) {
				return BidiComplex.stripSpecialCharacters(dir);
			} else {
				return dir;
			}
		},

		isResetingFields: function(roleData) {
			var noChange = true;
			if (this._accessRoleGrid && this._accessRoleGrid.store && roleData && roleData.accessRoles) {
				noChange = array.every(roleData.accessRoles, lang.hitch(this, function(entry) {
					if (this._currentRole.id.toLowerCase() == entry.id.toLowerCase()) {
						return this._compare(entry, this._accessRoleGrid.store);
					}
				}));
			}
			return noChange;
		},

		_compare: function(accessRole, store) {
			for (property in accessRole._attributes) {
				if (accessRole._attributes.hasOwnProperty(property)) {
					try {
						var data = JSON.parse(this._currentRole._attributes[property]);
						for ( var key in data) { // support two level of property only.
							if (data.hasOwnProperty(key)) {
								var item = store.get(property + "." + key);
								if (item) {
									var right = item.viewRight + (item.createRight * this.ACCESS_RIGHT_CREATE) + (item.modifyRight * this.ACCESS_RIGHT_MODIFY) + (item.deleteRight * this.ACCESS_RIGHT_DELETE);
									if (right != data[key])
										return false;
								} else
									return false;
							}
						}
					} catch (e) {
						;
					}
				}
			}
			return true;
		},

		_onRoleChange: function() {
			if (this._init) {
				this._onRoleSelectionChanged();
			}
		},

		_clearRolesSelection: function(dropdown) {
			if (dropdown && dropdown.getOptions(0))
				dropdown.removeOption(dropdown.getOptions());
		},

		// Determines if the save button should be enabled 
		validateData: function() {
			return true;
		},

		resize: function() {
			this.inherited(arguments);
			this.borderContainer.resize();
		}

	});

});
