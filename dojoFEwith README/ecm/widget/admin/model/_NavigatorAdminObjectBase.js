/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/string",
	"ecm/Messages",
	"ecm/widget/dialog/ConfirmationDialog",
	"ecm/widget/admin/model/_AdminObjectBase"
], //

function(declare, lang, string, Messages, ConfirmationDialog, _AdminObjectBase) {

	/**
	 * @private Part of the NavigatorAdminPane widget.
	 * @name ecm.widget.admin.model._NavigatorAdminObjectBase
	 * @class Generic Administrative Objects
	 * @augments ecm.widget.admin.model._AdminObjectBase
	 */
	return declare("ecm.widget.admin.model._NavigatorAdminObjectBase", [
		_AdminObjectBase
	], {
		/** @lends ecm.widget.admin.model._NavigatorAdminObjectBase.prototype */

		/*
		 * Locally used Constants
		 */

		// Types of admin object
		_tCATAGORY: "CATAGORY",
		_tSETTINGS: "SETTINGS",
		_tDESKTOP: "DESKTOP",
		_tREPOSITORY: "REPOSITORY",
		_tMENU: "MENU",
		_tREDACTION_REASONS: "REDACTION_REASONS",
		_tVIEWERS: "VIEWERS",
		_tPLUGIN: "PLUGIN",
		_tTHEME: "THEME",
		_tROLE: "ROLE",

		// Names of Catagory admin object
		// They are also keys in the resource bundle for their label
		_nDESKTOPS: "admin_desktops",
		_nREPOSITORIES: "admin_repositories",
		_nVIEWERS: "admin_viewer_defs",
		_nMENUS: "admin_menus",
		_nREDACTION_REASONS: "admin_redaction_reasons",
		_nPLUGINS: "admin_plugins",
		_nTHEMES: "admin_themes",
		_nROLES: "admin_roles",

		// Context menu action id
		// They are also keys in the resource bundle for their label
		_aOpen: "admin_action_edit",
		_aNew: "admin_action_new",
		_aCopy: "admin_action_copy",
		_aDelete: "admin_action_delete",

		/*
		 * General Variables
		 */

		_myAdminModel: null,

		/*
		 * General getters and setters
		 */

		setAdminModel: function(model) {
			this._myAdminModel = model;
		},

		/*
		 * Variables to be initialized in initialize()
		 */

		_myLabel: "",
		_myIconClass: "",

		_myTabWidgetClassName: "",
		_myTabWidgetInstance: null,

		_childTabWidgetClassName: "",
		_childIconClass: "",
		_childTabWidgetTitle: "",

		_mayHaveChildren: true,
		_childrenLoaded: true,
		_actions: null,

		constructor: function() {
			if (!this._actions) {
				this._actions = [];
			}
		},

		destroy: function() {
			if (this._myTabWidgetInstance) {
				if (this._myTabWidgetInstance.destroyRecursive) {
					this._myTabWidgetInstance.destroyRecursive();
				} else if (this._myTabWidgetInstance.destroy) {
					this._myTabWidgetInstance.destroy();
				}
				this._myTabWidgetInstance = null;
			}
			this.inherited(arguments);
		},

		/*
		 * Overwrite functions in _AdminObjectBase.js
		 */

		/**
		 * Overwritten to return the label to be displayed on the tree
		 */
		getLabel: function() {
			return this._myLabel;
		},

		/**
		 * Overwritten to return the class name for the Icon
		 */
		getIconClass: function(opened) {
			return this._myIconClass;
		},

		/**
		 * Overwritten to returns true if the item my have children.
		 */
		mayHaveChildren: function() {
			return this._mayHaveChildren;
		},

		/**
		 * Overwritten if the children is going to be lazy loaded
		 */
		getChildren: function(/* function(items) */onComplete) {
			if (!this._childrenLoaded) {
				this._loadChildren(lang.hitch(this, function() {
					this._childrenLoaded = true;
					onComplete(this._children);
				}));
			} else {
				onComplete(this._children);
			}
		},

		/**
		 * Overwritten to process the object being clicked on the tree
		 */
		onClick: function() {
			this.processAction(this._aOpen);
		},

		/**
		 * Overwritten to return a list of context menu action IDs
		 */
		getMenuActions: function() {
			return this._actions;
		},

		/**
		 * Overwritten to return translated label for an action ID to be displayed on the context menu
		 */
		getActionLabel: function(actionID) {
			return ecm.messages[actionID];
		},

		/**
		 * To be overwritten to process the actionID being invoked from the context menu
		 */
		processAction: function(actionID, userData) {
			switch (actionID) {
			case this._aOpen:
				this._performActionOpen(userData);
				break;
			case this._aDelete:
				this._performActionDelete(userData);
				break;
			case this._aNew:
				this._performActionNew(userData);
				break;
			case this._aCopy:
				this._performActionCopy(userData);
				break;
			}
		},

		/*
		 * Common functions
		 */

		/**
		 * Perform Open action: Create a new widget and open it on the tabs
		 */
		_performActionOpen: function(userData) {
			if (!this._myTabWidgetInstance || this._myTabWidgetInstance._destroyed) {
				var widgetReq = this._myTabWidgetClassName.split('.').join('/');
				var obj = null;
				require([
					widgetReq
				], function(cls) {
					obj = new cls();
				});
				this._myTabWidgetInstance = obj;
				this._myTabWidgetInstance.setTitle(this.getLabel());
				this._myTabWidgetInstance.setIconClass(this.getIconClass(""));
				this._myTabWidgetInstance.setAdminTreeObject(this);
				this._myTabWidgetInstance.setParentAdminTreeObject(this._parent);
				this._openTab();
			} else {
				this.openWidgetInTab(this._myTabWidgetInstance);
			}
		},

		_openTab: function() {
			this._myTabWidgetInstance.setAdminModel(this._myAdminModel);
			this._myTabWidgetInstance.initialize();
			this.openWidgetInTab(this._myTabWidgetInstance);
		},

		resizeTabWidget: function() {
			if (this._myTabWidgetInstance && !this._myTabWidgetInstance._destroyed && this._myTabWidgetInstance.resize) {
				this._myTabWidgetInstance.resize();
			}
		},

		/**
		 * Perform Copy action: Create a new widget and open it on the tabs
		 */
		_performActionCopy: function(userData) {
			var widgetReq = this._parent._childTabWidgetClassName.split('.').join('/');
			var newWidget = null;
			require([
				widgetReq
			], function(cls) {
				newWidget = new cls();
			});
			newWidget.setIconClass(this._parent._childIconClass);
			newWidget.setTitle(this._parent._childTabWidgetTitle);
			newWidget.setAdminTreeObject(null);
			newWidget.setParentAdminTreeObject(this._parent);
			newWidget.setAdminModel(null);
			newWidget.setAdminModelForCopy(this._myAdminModel);
			newWidget.setUserData(userData);
			newWidget.initialize();
			this.openWidgetInTab(newWidget);
		},

		/**
		 * Perform Create New action: Create a new widget and open it on the tabs
		 */
		_performActionNew: function(userData) {
			var widgetReq = this._childTabWidgetClassName.split('.').join('/');
			var newWidget = null;
			require([
				widgetReq
			], function(cls) {
				newWidget = new cls();
			});
			newWidget.setIconClass(this._childIconClass);
			newWidget.setTitle(this._childTabWidgetTitle);
			newWidget.setAdminTreeObject(null);
			newWidget.setParentAdminTreeObject(this);
			newWidget.createDefaultConfigObject(userData, lang.hitch(this, function(configObject) {
				newWidget.setAdminModel(null);
				newWidget.setUserData(configObject);
				newWidget.initialize();
				this.openWidgetInTab(newWidget);
			}));
		},

		/**
		 * Perform Delete action: Check if deletable, prompt for confirmation, execute the delete, update the tree and
		 * tab
		 */
		_performActionDelete: function() {
			this._isDeletable(lang.hitch(this, function(deletable) {
				if (deletable) {
					var self = this;
					var confirmDelete = new ConfirmationDialog({
						text: this._getDeleteConfirmationText(),
						buttonLabel: ecm.messages.delete_confirmation_button,
						cancelButtonDefault: true,
						onExecute: lang.hitch(self, self._doDelete)
					});
					confirmDelete.show();
				}
			}));
		},

		_getDeleteConfirmationText: function() {
			return string.substitute(ecm.messages.admin_delete_confirmation, [
				1
			]);
		},

		/**
		 * Update the tree and tab after delete
		 */
		_onDeleteComplete: function() {
			if (this._myTabWidgetInstance && !this._myTabWidgetInstance._destroyed) {
				this._myTabWidgetInstance._markClean();
				this.closeWidgetInTab(this._myTabWidgetInstance);
			}
			this._parent.removeChild(this);
		},

		/**
		 * Reload the children and notify the Tree Model, if any
		 */
		_reloadChildren: function() {
			this._loadChildren(lang.hitch(this, function() {
				this._onChildrenChange();
			}), true);
		},

		/*
		 * Functions to be overwritten by the subclass
		 */

		/**
		 * To be overwritten for initialization
		 */
		initialize: function() {

		},

		/**
		 * To be overwritten to check if this item can be delete or not
		 */
		_isDeletable: function(/* function(boolean) */callback) {
			callback(true);
		},

		/**
		 * To be overwritten to execute the actual delete operation, then invoke _onDeleteComplete()
		 */
		_doDelete: function() {
			this._onDeleteComplete();
		},

		/**
		 * To be overwritten to load the children to the _children array then invoke onComplete
		 */
		_loadChildren: function(/* function() */onComplete) {
			this._children = [];
			onComplete();
		},

		/**
		 * To be overwritten to perform action on admin model change
		 */
		onAdminModelChange: function() {
			this._onChange();
		}
	});
});
