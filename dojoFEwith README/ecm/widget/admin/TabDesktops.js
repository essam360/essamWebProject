/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/sniff",
	"dojo/_base/Deferred",
	"dojo/request/iframe",
	"dojo/string",
	"dojo/_base/array",
	"dojo/on",
	"dojo/aspect",
	"dijit/_Widget",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/MenuItem",
	"dijit/MenuSeparator",
	"dijit/layout/ContentPane",
	"dijit/form/Button",
	"dijit/form/DropDownButton",
	"ecm/MessagesMixin",
	"ecm/model/Item",
	"ecm/model/_ModelStore",
	"ecm/model/ResultSet",
	"ecm/model/Request",
	"ecm/model/admin/AdminData",
	"ecm/model/admin/DesktopConfig",
	"gridx/modules/Filter",
	"ecm/widget/FilterTextBox",
	"ecm/widget/dialog/MessageDialog",
	"ecm/widget/dialog/ConfirmationDialog",
	"ecm/widget/listView/ContentList",
	"ecm/widget/listView/gridModules/RowContextMenuLoadMenu",
	"ecm/widget/admin/TabDesktop",
	"ecm/widget/admin/_NavigatorAdminTabBase",
	"ecm/widget/admin/ExportConfigurationDialog",
	"ecm/widget/admin/ImportConfigurationDialogEx",
	"ecm/widget/admin/ImportSummaryDialog",
	"idx/layout/BorderContainer",
	"dojo/text!./templates/TabDesktops.html"
],

function(declare, lang, has, Deferred, iframe, string, array, on, aspect, _Widget, _TemplatedMixin, _WidgetsInTemplateMixin, MenuItem, MenuSeparator, ContentPane, Button, DropDownButton, MessagesMixin, Item, _ModelStore, ResultSet, //
Request, AdminData, DesktopConfig, FilterModule, FilterTextBox, MessageDialog, ConfirmationDialog, ContentList, RowContextMenuLoadMenu, TabDesktop, _NavigatorAdminTabBase, //
ExportConfigurationDialog, ImportConfigurationDialog, ImportSummaryDialog, BorderContainer, template) {

	/**
	 * @private Part of the NavigatorAdminPane widget.
	 * @name ecm.widget.admin.TabDesktops
	 * @class Provides a widget that lists all available desktops. The widget displays the list in a tabbed pane.
	 */
	return declare("ecm.widget.admin.TabDesktops", [
		_NavigatorAdminTabBase,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		MessagesMixin
	], {
		/** @lends ecm.widget.admin.TabDesktops.prototype */

		templateString: template,
		widgetsInTemplate: true,

		_theStore: null,
		_prevFilter: "",
		_SECURITY_TOPIC: {
			category: "desktop.desktop"
		},

		constructor: function() {
			this._iconClass = "adminIconDesktop";
			this._iconClassTitle = ecm.messages.admin_text_desktop;
		},

		postCreate: function() {
			this.inherited(arguments);
			this.own(aspect.after(this._filter, "_onInput", lang.hitch(this, "_filterData"), true));
			this.own(aspect.after(this._filter, "_setValueAttr", lang.hitch(this, "_filterData"), true));
			this._filter.set("placeholder", this._messages.name_contains_label);
			this._filter.set("aria-label", this._messages.filter + " " + this._messages.name_contains_label);
			this._setParentObject(this);
			this.own(aspect.after(ecm.model.admin.adminData, "onChildrenChange", lang.hitch(this, function(parent) {
				if (parent instanceof DesktopConfig) {
					this._contentList.setResultSet(this.resultSet);
				}
			}), true));

			this.own(aspect.after(ecm.model.admin.adminData, "onChange", lang.hitch(this, function(changedModel) {
				if (changedModel instanceof DesktopConfig) {
					this._updateContentList(changedModel);
				}
			}), true));
		},

		/**
		 * Initialize.
		 */
		initialize: function() {
			this._loadDesktops(lang.hitch(this, function(){
				if (ecm.model.desktop.isDesktopAdminUser){
					this._openItem(ecm.model.admin.adminData.desktops[0]);
					this._onClose();
				}
				else {
					this._initializeGrid();
				}
			}));
		},

		/**
		 * Initialize the grid.
		 */
		_initializeGrid: function() {
			this._structure = [
				{
					name: " ",
					headerAriaLabel: this.messages.admin_default_desktop_header,
					sortable: false,
					filterable: false,
					width: "40px",
					decorator: lang.hitch(this, function(data, rowId, rowIndex) {
						var htmlStr = "";
						var item = this._contentList.grid.row(rowId).item();
						if (item && item.getValue && item.getValue("isDefault") && item.getValue("isDefault").toLowerCase() == "yes") {
							var stateClass = Item.StateToCssClass["default"];
							if (!stateClass) {
								stateClass = "ecmDefaultIcon";
							}
							htmlStr += '<img class="ecmStatusIcon ' + stateClass + '" alt="' + this.messages.admin_default_desktop_header + '" title="' + this.messages.admin_default_desktop_header + '" src="' + this._blankGif + '"/><div class="dijitHidden">' + this.messages.admin_default_desktop_header + '</div>';
						}
						if (item && item.isWarning()) {
							htmlStr += '<img src="' + ecm.model.desktop.servicesUrl + "/ecm/widget/resources/images/msgWarning16.png" + '" alt="' + this.messages.admin_desktop_warning + '" title="' + this.messages.admin_desktop_warning + '" src="dojo/resources/blank.gif"/>';
							if (has("highcontrast")) { // IE11 with JAWS reads this char
								htmlStr += '<span class="ecmStatusIconChar" title="' + ecm.messages.admin_desktop_warning + '">' + ecm.messages.warning_char + '</span>';
							}
							htmlStr += '<div class="dijitHidden">' + this.messages.admin_desktop_warning + '</div>&nbsp;'; // Read by JAWS
						}
						if (item && !item.isValid()) {
							htmlStr += '<img src="' + ecm.model.desktop.servicesUrl + "/ecm/widget/resources/images/error.png" + '" alt="' + this.messages.admin_desktop_invalid + '" title="' + this.messages.admin_desktop_invalid + '" src="dojo/resources/blank.gif"/><div class="dijitHidden">' + this.messages.admin_desktop_invalid + '</div>';
						}
						return htmlStr;
					}),
					styles: 'align: center; text-align: center;'
				},
				{
					id: "icon",
					name: " ",
					headerAriaLabel: this.messages.admin_desktop_icon,
					sortable: false,
					filterable: false,
					headerClasses: "nosort",
					width: has("webkit") ? "30px" : "16px",
					decorator: lang.hitch(this, "_iconFormatter")
				},
				{
					field: "name",
					filterable: true,
					name: this.messages.name_label
				},
				{
					field: "id",
					filterable: true,
					name: this.messages.id_heading
				},
				{
					field: "description",
					filterable: true,
					name: this.messages.description
				}
			];
			this._theStore = new _ModelStore(this, this._getDesktops);

			this.resultSet = new ResultSet({
				columns: this._structure,
				sortIndex: "3"
			});
			this.resultSet.getStore = lang.hitch(this, function() {
				return this._theStore;
			});
			this._contentList.setContentListModules(this._getContentListModules());
			this._contentList.setGridExtensionModules(this._getContentListGridModules());
			this._contentList.setResultSet(this.resultSet);

			this.own(aspect.after(this._contentList, "onRowSelectionChange", lang.hitch(this, "_onSelectionChanged"), true));
			this.own(aspect.after(this._contentList, "onRowDblClick", lang.hitch(this, function(item) {
				this._openItem(item);
			}), true));

			this._filterCheckerFunction = lang.hitch(this, "_filterChecker");
			this.resize();
		},

		/**
		 * Enable / disable the toolbar buttons when row selection changes.
		 */
		_onSelectionChanged: function(items) {
			if (this._isDeletable(items)) {
				this._enableDelete();
			} else {
				this._disableDelete();
			}
			this.openButton.set('disabled', (items.length > 0) ? false : true);
			this.copyButton.set('disabled', (items.length > 0) && this._isCopyable(items) ? false : true);
			this.exportButton.set('disabled', (items.length > 0) ? false : true);
		},

		/**
		 * Called when this tab is selected.
		 */
		onSelect: function() {
			setTimeout(lang.hitch(this, function() {
				this.resize();
			}), 2500);
		},

		/**
		 * Load the desktop objects.
		 */
		_loadDesktops: function(callback) {
			ecm.model.admin.adminData.loadDesktops(lang.hitch(this, function(desktops) {
				if (callback) {
					callback();
				}
			}));
		},

		/**
		 * Return desktops.
		 */
		_getDesktops: function(callback) {
			callback(ecm.model.admin.adminData.desktops);
		},

		/**
		 * Open Desktop.
		 * 
		 * @private
		 */
		_onOpen: function(evt) {
			var items = this._contentList.getSelectedItems();
			for ( var i in items) {
				this._openItem(items[i]);
			}
		},

		_openItem: function(desktopConfig) {
			var tabWidget = this._getTabWidget(desktopConfig);
			if (!tabWidget) {
				tabWidget = new TabDesktop();
				tabWidget.setTitle(desktopConfig.getName());
				tabWidget.setIconClass(this._iconClass);
				tabWidget.setAdminModel(desktopConfig);
				tabWidget._setSecurityTopic(this);
				tabWidget.initialize();
			}
			this._openWidgetInTab(tabWidget);
		},

		/**
		 * Copy Desktop.
		 * 
		 * @private
		 */
		_isCopyable: function(modelObjects) {
			for ( var i in modelObjects) {
				if (modelObjects[i].id == "admin")
					return false;
			}
			return true;
		},

		_onCopy: function(evt) {
			var items = this._contentList.getSelectedItems();
			for ( var i in items) {
				this._copyItem(items[i]);
			}
		},

		_copyItem: function(desktopConfig) {
			var tabWidget = new TabDesktop();
			tabWidget.setTitle(ecm.messages.admin_new_desktop);
			tabWidget.setIconClass(this._iconClass);
			tabWidget.setAdminModelForCopy(desktopConfig);
			tabWidget._setSecurityTopic(this);
			tabWidget.initialize();
			this._openWidgetInTab(tabWidget);
		},

		/**
		 * New Desktop.
		 * 
		 * @private
		 */
		_onNew: function(userData) {
			var tabWidget = new TabDesktop();
			tabWidget.setTitle(ecm.messages.admin_new_desktop);
			tabWidget.setIconClass(this._iconClass);
			tabWidget._setSecurityTopic(this);
			tabWidget.initialize();
			this._openWidgetInTab(tabWidget);
		},

		/**
		 * Delete Desktop.
		 * 
		 * @private
		 */
		_isDeletable: function(modelObjects) {
			for ( var i in modelObjects) {
				if (modelObjects[i].getDefault() == "Yes") // NOTE: do not NLS enable this "Yes"
					return false;
				if (modelObjects[i].id == "admin")
					return false;
			}
			return true;
		},

		_onDelete: function() {
			this._onDeleteItems(this._contentList.getSelectedItems());
		},

		_onDeleteItems: function(items) {
			var self = this;
			var confirmDelete = new ConfirmationDialog({
				text: string.substitute(ecm.messages.admin_delete_confirmation_desktops, [
					items.length
				]),
				buttonLabel: ecm.messages.delete_confirmation_button,
				cancelButtonDefault: true,
				onExecute: lang.hitch(self, self._doDelete, items)
			});
			confirmDelete.show();
		},

		_doDelete: function(items) {
			// Close items that are in open tabs & then delete the items
			this._closeTabs(items, lang.hitch(this, function(items) {
				ecm.model.admin.appCfg.deleteApplicationDesktopsConfig(items, lang.hitch(this, function() {
					this._loadDesktops(); // reloads the desktops and onChildrenChange called to reload the grid and tree
				}), {
					securityTopic: ecm.model.admin.appCfg.SECURITY_CATEGORY_DESKTOPS
				});
			}));
		},

		/**
		 * Export event handler.
		 * 
		 * @private
		 */
		_onExport: function() {
			this._onExportItems(this._contentList.getSelectedItems());
		},

		/**
		 * Launch Export dialog and pass selected desktops to the dialog
		 * 
		 * @param item -
		 *            Selected array of desktop {@link ecm.model.admin.DesktopConfig} objects.
		 */
		_onExportItems: function(items) {
			this._getExportDialog().show(items);
		},

		_getExportDialog: function() {
			if (!this._exportDialog) {
				this._exportDialog = new ExportConfigurationDialog();

				on(this._exportDialog, "hide", lang.hitch(this, function() {
					this._exportDialog.destroy();
					this._exportDialog = null;
				}));
			}
			return this._exportDialog;
		},

		/**
		 * Launch Export dialog and pass selected desktops to the dialog
		 * 
		 * @param item -
		 *            Selected array of desktop {@link ecm.model.admin.DesktopConfig} objects.
		 */
		_onImport: function(items) {
			this._checkAnyOtherTabsAreOpened(lang.hitch(this, this._importImpl));
		},

		_checkAnyOtherTabsAreOpened: function(callback) {
			if (this._adminTabsWidget) {
				if (this._adminTabsWidget.getChildren().length > 1) {
					var dialog = new MessageDialog({
						buttonLabel: ecm.messages.warning_dialog_title,
						text: ecm.messages.admin_import_open_tabs_checking,
						iconClass: "warningIcon",
						tooltip: ecm.messages.warning_dialog_title
					});
					dialog.show();
					callback(true);
				} else
					callback(false);
			}
		},

		_importImpl: function(abort) {
			if (!abort)
				this._getImportDialog().show();
		},

		refresh: function() {
			this._onReset();
		},

		_getImportDialog: function() {
			if (!this._importDialog) {
				this._importDialog = new ImportConfigurationDialog();

				on(this._importDialog, "hide", lang.hitch(this, function() {
					this._downloadLogFileCompleted();
				}));

				aspect.after(this._importDialog, "_importCompleted", lang.hitch(this, function(response) {
					var confirmDownload = new ImportSummaryDialog({
						text: response.summary,
						cancelButtonLabel: ecm.messages.close,
						buttonLabel: ecm.messages.admin_download_imported_log,
						cancelButtonDefault: true,
						title: ecm.messages.admin_desktop_import_summary,
						onExecute: lang.hitch(this, this._doDownloadReport, response.logFileName, lang.hitch(this, this._downloadLogFileCompleted))
					});
					confirmDownload.show();

				}), true);
			}
			return this._importDialog;
		},

		_importCompleted: function(response) {
			var confirmDownload = new ImportSummaryDialog({
				text: response.summary,
				cancelButtonLabel: ecm.messages.close,
				buttonLabel: ecm.messages.admin_download_imported_log,
				cancelButtonDefault: true,
				title: ecm.messages.admin_desktop_import_summary,
				onExecute: lang.hitch(this, this._doDownloadReport, response.logFileName, lang.hitch(this, this._downloadLogFileCompleted)),
				onCancel: this.refresh
			});
			confirmDownload.show();
		},

		_downloadLogFileCompleted: function() {
			if (this._importDialog) {
				this._importDialog.destroy();
				this._importDialog = null;
			}
			ecm.model.admin.adminData.loadRepositories();
			ecm.model.admin.adminData.loadViewers();
			ecm.model.admin.adminData.loadMenus();
			ecm.model.admin.adminData.loadPlugins();
			// Then, reload desktop grid as well
			this._onReset();
		},

		_doDownloadReport: function(fileName, onComplete) {
			var params = {
				action: "downloadReport",
				id: "navigator",
				application: "navigator",
				desktop: ecm.model.desktop.id,
				configuration: "ApplicationConfig",
				application: "navigator",
				fileName: fileName,
				disposition: "attachment"
			//disposition: has("ie") ? "attachment" : "inline"
			};
			var contentUrl = Request.getServiceRequestUrl("admin/importExport");
			params = Request.setSecurityToken(params);

			var dfd = iframe(contentUrl, {
				method: "POST",
				data: params,
				preventCache: true,
				handleAs: "TEXT"
			});
			// Call this to clear any outstanding download deferred object.
			// Download never trigger any load or error event therefore deferred
			// never completes - it will indefinitely blocking the next iframe.send() request.
			dfd.response ? dfd.response.cancel("terminate", false) : dfd.cancel("terminate", false);
			if (onComplete)
				onComplete();
		},

		/**
		 * Reset / Refresh button.
		 */
		_onReset: function() {
			this._filter.reset();
			this._prevFilter = "";
			this._loadDesktops(lang.hitch(this, function() {
				this._contentList.setResultSet(this.resultSet);
			}));
		},

		_filterData: function() {
			var value = this._filter.get("value");
			if (this._prevFilter != value) {
				this._prevFilter = value;
				this._filterValue = string.trim(value).toLowerCase();
				this._filterField = "name";
				this._runFilter(this._filterCheckerFunction, this._contentList.grid.model);
			}
		},

		_runFilter: function(checker, model) {
			var d = new Deferred();
			this._contentList.grid.select.row.clear();
			model.filter(checker);
			model.clearCache();
			Deferred.when(this._contentList.grid.body.refresh(), function() {
				d.callback();
			}, function(e) {
				d.errback(e);
			});
			return d;
		},

		/**
		 * Called for each row to determine if it matches the filter data.
		 * 
		 * @private
		 */
		_filterChecker: function(row, id) {
			var rowValue = row.item.getValue(this._filterField);
			return rowValue.toLowerCase().indexOf(this._filterValue) > -1;
		},

		/**
		 * Resize.
		 */
		resize: function() {
			if (this.borderContainer)
				this.borderContainer.resize();
		},

		/**
		 * Returns the content list grid modules used by this view.
		 * 
		 * @return Array of grid modules.
		 */
		_getContentListGridModules: function() {
			var array = [];
			array.push({
				moduleClass: RowContextMenuLoadMenu,
				loadMenu: lang.hitch(this, this._loadActionMenu)
			});
			array.push(FilterModule);
			return array;
		},

		/**
		 * Load the context menu.
		 * 
		 * @private
		 */
		_loadActionMenu: function(menu, items, grid, cell) {
			var def = new Deferred();
			if (!(items instanceof Array) || items.length < 1) {
				def.resolve(false);
				return def;
			}
			var self = this;
			if (grid && cell) {
				var editMenuItem = new MenuItem({
					label: ecm.messages.admin_action_edit,
					onClick: function(e) {
						for ( var i in items) {
							self._openItem(items[i]);
						}
					}
				});
				menu.addChild(editMenuItem);
				menu.addChild(new MenuSeparator());
				if (this._isCopyable(items)) {
					var copyMenuItem = new MenuItem({
						label: ecm.messages.admin_action_copy,
						onClick: function(e) {
							for ( var i in items) {
								self._copyItem(items[i]);
							}
						}
					});
					menu.addChild(copyMenuItem);
				}
				var exportMenuItem = new MenuItem({
					label: ecm.messages.admin_exportconfiguration_button_label,
					onClick: function(e) {
						self._onExportItems(items);
					}
				});
				menu.addChild(exportMenuItem);
				if (this._isDeletable(items)) {
					menu.addChild(new MenuSeparator());
					var deleteMenuItem = new MenuItem({
						label: ecm.messages.admin_action_delete,
						onClick: function(e) {
							self._onDeleteItems(items);
						}
					});
					menu.addChild(deleteMenuItem);
				}
			}
			def.resolve(menu);
			return def;
		},

		/**
		 * Returns the content list modules used by this view.
		 * 
		 * @return Array of content list modules.
		 */
		_getContentListModules: function() {
			var array = [];
			return array;
		}
	});

});
