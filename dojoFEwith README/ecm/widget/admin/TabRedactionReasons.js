/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/request/iframe",
	"dojo/_base/array",
	"dojo/_base/Deferred",
	"dojo/string",
	"dojo/aspect",
	"dojo/_base/sniff",
	"dojo/dom-construct",
	"dojo/dom-style",
	"dojo/on",
	"dojo/json",
	"dijit/_Widget",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/MenuItem",
	"dijit/MenuSeparator",
	"gridx/modules/Filter",
	"ecm/MessagesMixin",
	"ecm/LoggerMixin",
	"ecm/model/_ModelStore",
	"ecm/model/RedactionPolicy",
	"ecm/model/ResultSet",
	"ecm/model/admin/AdminData",
	"ecm/model/admin/RedactionReasonConfig",
	"ecm/model/admin/RepositoryConfig",
	"ecm/model/Request",
	"ecm/widget/admin/_RedactionAdminTabBase",
	"ecm/widget/admin/TabRedactionReason",
	"ecm/widget/admin/TabRepositories",
	"ecm/widget/admin/ImportSummaryDialog",
	"ecm/widget/admin/ImportConfigurationDialogEx",
	"ecm/widget/FilterTextBox",
	"ecm/widget/dialog/ConfirmationDialog",
	"ecm/widget/listView/ContentList",
	"ecm/widget/listView/gridModules/RowContextMenuLoadMenu",
	"ecm/model/Action",
	"idx/layout/BorderContainer",
	"dijit/layout/ContentPane",
	"dijit/form/Button",
	"dojo/text!./templates/TabRedactionReasons.html"
], //

function(declare, lang, iframe, array, Deferred, string, aspect, has, construct, style, on, JSON,  _Widget, _TemplatedMixin, _WidgetsInTemplateMixin, MenuItem, MenuSeparator, FilterModule, MessagesMixin, LoggerMixin, _ModelStore, RedactionPolicy, ResultSet, AdminData, RedactionReasonConfig, RepositoryConfig, Request, _RedactionAdminTabBase, TabRedactionReason, TabRepositories, ImportSummaryDialog, ImportConfigurationDialog, FilterTextBox, ConfirmationDialog, ContentList, RowContextMenuLoadMenu, Action, BorderContainer, ContentPane, Button, template) {

	/**
	 * @private Part of the NavigatorAdminPane widget.
	 * @name ecm.widget.admin.TabRedactionReasons
	 * @class Provides a tab that shows the available redaction reasons. 
	 */
	return declare("ecm.widget.admin.TabRedactionReasons", [
		_RedactionAdminTabBase,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		LoggerMixin,
		MessagesMixin
	], {
		/** @lends ecm.widget.admin.TabRedactionReasons.prototype */

		templateString: template,
		widgetsInTemplate: true,
	
		_SECURITY_TOPIC: {
			category: "redactionReasons.redactionReasons"
		},

		_prevFilter: "",

		postCreate: function() {
			this.inherited(arguments);

			this._filter.set("placeholder", this.messages.name_contains_label);
			this._filter.set("aria-label", this._messages.filter + " " + this._messages.name_contains_label);

			this.own(aspect.after(this._filter, "_onInput", lang.hitch(this, "_filterData"), true));
			this.own(aspect.after(this._filter, "_setValueAttr", lang.hitch(this, "_filterData"), true));
			this._iconClass = "adminIconReason";
			this._iconClassTitle = ecm.messages.admin_text_reason_code;
			this._setParentObject(this);
			this.own(aspect.after(ecm.model.admin.adminData, "onChildrenChange", lang.hitch(this, function(parent) {
				if (parent instanceof RedactionReasonConfig) {
					if (this.resultSet) {
						this._contentList.setResultSet(this.resultSet);
					}
				}
			}), true));

			this.own(aspect.after(ecm.model.admin.adminData, "onChange", lang.hitch(this, function(changedModel) {
				if (changedModel instanceof RedactionReasonConfig) {
					this._updateContentList(changedModel);
				} else if (changedModel instanceof RedactionPolicy || changedModel instanceof RepositoryConfig || changedModel instanceof TabRepositories) {
					this._onReset();
				}
			}), true));
		},

		initialize: function() {
			this._initializeGrid();
		},

		/**
		 * @private
		 */
		_loadRedactionReasons: function(onComplete) {
			ecm.model.admin.adminData.loadRedactionReasons(lang.hitch(this, function(objects) {
				if (onComplete) {
					onComplete();
				}
			}));
		},

		/**
		 * @private
		 */
		_getRedactionReasons: function(callback) {
			callback(ecm.model.admin.adminData.redactionReasons);
		},

		/**
		 * @private
		 */
		_initializeGrid: function() {
			this._structure = [
				{
					field: "name",
					name: this.messages.name_label
				},
				{
					field: "description",
					name: this.messages.admin_reason_code_description_label
				},
				{
					field: "applications",
					name: this.messages.admin_reason_code_applications_label
				},
				{
					field: "repositories",
					name: this.messages.admin_reason_code_repositories_label
				},
				{
					field: "id",
					width: "200px",
					name: this.messages.admin_idOp
				}					
			];

			this._theStore = new _ModelStore(this, this._getRedactionReasons);
			this._theStore.comparatorMap = {
				"name": this._localeCompare,
				"description": this._localeCompare,
				"applications": this._localeCompare,
				"repositories": this._localeCompare,
				"id": this._localeCompare
			};
			
			this.resultSet = new ResultSet({
				columns: this._structure,
				sortIndex: "1"
			});
			this.resultSet.getStore = lang.hitch(this, function() {
				return this._theStore;
			});
			this._contentList.setContentListModules(this._getContentListModules());
			this._contentList.setGridExtensionModules(this._getContentListGridModules());
			
			this._loadRedactionReasons(lang.hitch(this, function() {
				this._contentList.setResultSet(this.resultSet);
			}));

			this.own(aspect.after(this._contentList, "onRowSelectionChange", lang.hitch(this, "_onSelectionChanged"), true));
			this.own(aspect.after(this._contentList, "onRowDblClick", lang.hitch(this, function(item) {
				this._openItem(item);
			}), true));

			this._filterCheckerFunction = lang.hitch(this, "_filterChecker");
			this.resize();
		},

		/**
		 * New Theme.
		 * 
		 * @private
		 */
		_onNew: function(userData) {
			var tabWidget = new TabRedactionReason();
			tabWidget.setTitle(ecm.messages.admin_new_reason_code);
			tabWidget._setSecurityTopic(this);
			tabWidget.initialize();
			tabWidget.UUID = "newRedaction";
			this.openTab(tabWidget);
		},

		_onImport: function() {
			
		},
		_onExport: function() {
			this._export();
		},
		
		_export: function() {
			var methodName = "_export";
			this.logEntry(methodName);

	
				var params = {
					action: "export",
					id: "navigator",
					application: "navigator",
					configuration: "ApplicationConfig",
					application: "navigator",
					desktop: ecm.model.desktop.id,
					fileName: "redactionReasons.properties",
					redactionReasons: this._getIds(),
					disposition: "attachment"
				};
				var contentUrl = ecm.model.Request.getServiceRequestUrl("admin/importExport");
				params = ecm.model.Request.setSecurityToken(params);

				var dfd = iframe(contentUrl, {
					method: "POST",
					data: params,
					preventCache: true,
					handleAs: "TEXT"
				});
				// Call this to clear any outstanding download deferred object.
				// Download never trigger any load or error event therefore deferred
				// never completes - it will indefinitely blocking the next iframe.send() request.
				dfd.response.cancel("terminate", false);
				
			
			this.logExit(methodName);
		},	


		_onImport: function(abort) {
			//if (!abort)
				this._getImportDialog().show(null, null, ecm.messages.admin_importconfiguration_reason_dialog_label);
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
						title: ecm.messages.admin_reason_import_summary,
						onExecute: lang.hitch(this, this._doDownloadReport, response.logFileName, lang.hitch(this, this._downloadLogFileCompleted))
					});
					confirmDownload.show();

				}), true);
			}
			return this._importDialog;
		},	
		
		_downloadLogFileCompleted: function() {
			if (this._importDialog) {
				this._importDialog.destroy();
				this._importDialog = null;
			}
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
		
		_getIds: function() {
			var methodName = "_getIds";
			this.logEntry(methodName);
			var ids = [];
			var items = this._contentList.getSelectedItems();
			for ( var i in items) {
				ids.push(items[i].id);
			}
			this.logExit(methodName);
			return ids.join(",");
		},		
		/**
		 * Called when this tab is selected.
		 */
		onSelect: function() {
			setTimeout(lang.hitch(this, function() {
				this.resize();
			}), 200);
		},

		/**
		 * @private
		 */
		_onSelectionChanged: function(items) {
			// Enable/disable delete button based on number of rows checked & if the items are deletable
			if (items.length > 0 && this._isDeletable(items)) {
				this._enableDelete();
			} else {
				this._disableDelete();
			}

			this.openButton.set('disabled', items.length > 0 ? false : true);
			this.copyButton.set('disabled', items.length > 0 ? false : true);
			this.exportButton.set('disabled', (items.length > 0) ? false : true);
		},

		/**
		 * Open Redaction Reasons.
		 * 
		 * @private
		 */
		_onOpen: function(evt) {
			var items = this._contentList.getSelectedItems();
			for ( var i in items) {
				this._openItem(items[i]);
			}
		},

		/**
		 * @private
		 */
		_openItem: function(config) {
			var tabWidget = new TabRedactionReason();
			tabWidget.setTitle(config.getName());
			tabWidget.setAdminModel(config);
			tabWidget._setSecurityTopic(this);
			tabWidget.initialize();
			this.openTab(tabWidget);
		},

		/**
		 * @private
		 */
		_isDeletable: function(modelObjects) {
			var deletable = true;
			if (modelObjects) {
				for ( var i in modelObjects ) {
					// If either applications or repositories has a value (not null, undefined, or "") then the reason is not deletable.
					if ( modelObjects[i]._attributes.applications || modelObjects[i]._attributes.repositories ) {
						deletable = false;
						break;
					}
				}
			}
			return deletable;
		},

		/**
		 * Overwrite the delete action of the base class.
		 * 
		 * @private
		 */
		_onDelete: function() {
			this._onDeleteItems(this._contentList.getSelectedItems());
		},

		/**
		 * Opens a dialog when the user selects the delete action.
		 * 
		 * @param items
		 *            Array of themes to delete.
		 * @private
		 */
		_onDeleteItems: function(items) {
			var self = this;
			var confirmText = items.length > 1 ? ecm.messages.admin_delete_confirmation_reason_codes : ecm.messages.admin_delete_confirmation_reason_code;
			var confirmDelete = new ConfirmationDialog({
				text: confirmText,
				buttonLabel: ecm.messages.delete_confirmation_button,
				cancelButtonDefault: true,
				onExecute: lang.hitch(self, self._doDelete, items)
			});
			confirmDelete.show();
		},

		/**
		 * Handles the delete action.
		 * 
		 * @param items
		 *            Array of themes to delete.
		 * @private
		 */
		_doDelete: function(items) {
			this._closeTabs(items, lang.hitch(this, function(items) { // Close items that are in open tabs & then delete the items
				ecm.model.admin.appCfg.deleteApplicationRedactionReasonConfig(items, lang.hitch(this, function() {
					this._loadRedactionReasons(); // reloads the list and onChildrenChange called to reload the grid and tree
				}), {
					securityTopic: ecm.model.admin.appCfg.SECURITY_CATEGORY_REDACTION_REASONS
				});
			}));
		},

		/**
		 * Handles the reset action.
		 * 
		 * @private
		 */
		_onReset: function() {
			this._filter.reset();
			this._prevFilter = "";
			this._loadRedactionReasons(lang.hitch(this, function() {
				this._contentList.setResultSet(this.resultSet);
			}));
		},

		/**
		 * @private
		 */
		_filterData: function() {
			var value = this._filter.get("value");
			if (this._prevFilter != value) {
				this._prevFilter = value;
				this._filterValue = string.trim(value).toLowerCase();
				this._filterField = "name";
				this._contentList.grid.select.row.clear();
				this._contentList.grid.model.filter(this._filterCheckerFunction);
				this._contentList.grid.body.refresh();
			}
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
		 * Resizes the border container in this pane.
		 */
		resize: function() {
			this.borderContainer.resize();
		},

		/**
		 * Returns the content list grid modules used by this view.
		 * 
		 * @return Array of grid modules.
		 * @private
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
				menu.addChild(new MenuSeparator());
				var copyMenuItem = new MenuItem({
					label: ecm.messages.admin_action_copy,
					onClick: function(e) {
						self._onCopy(items);
					}
				});
				menu.addChild(copyMenuItem);
				
				
			}
			def.resolve(menu);
			return def;
		},

		/**
		 * Returns the content list modules used by this view.
		 * 
		 * @return Array of content list modules.
		 * @private
		 */
		_getContentListModules: function() {
			var array = [];
			return array;
		},

		/**
		 * Handles the copy action.
		 * 
		 * @private
		 */
		_onCopy: function() {
			var items = this._contentList.getSelectedItems();
			for ( var i in items) {
				this._copyItem(items[i]);
			}
		},

		/**
		 * Copies a given redaction reason.
		 * 
		 * @param redactionReasonConfig
		 *            The {@link ecm.model.admin.RedactionReasonConfig} object to copy.
		 * @private
		 */
		_copyItem: function(redactionReasonConfig) {
			var tabWidget = new TabRedactionReason();
			tabWidget.setAdminModelForCopy(redactionReasonConfig);
			tabWidget._setSecurityTopic(this);
			tabWidget.initialize();
			this.openTab(tabWidget);
		}
	});

});
