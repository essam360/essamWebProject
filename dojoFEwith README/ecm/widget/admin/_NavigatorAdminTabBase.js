/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/dom-class",
	"dojo/_base/array",
	"dojo/aspect",
	"dijit/_Widget",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dojo/_base/connect",
	"dojo/dom-style",
	"ecm/Messages",
	"ecm/widget/admin/_AdminTabBase",
	"idx/layout/ButtonBar",
	"dijit/form/Button",
	"dijit/layout/TabContainer",
	"dijit/layout/ContentPane"
], //

function(declare, lang, domClass, array, aspect, _Widget, _templatedMixin, _widgetsInTemplateMixin, connect, style, Messages, _AdminTabBase, ButtonBar, Button, TabContainer, ContentPane) {

	/**
	 * @public
	 * @name ecm.widget.admin._NavigatorAdminTabBase
	 * @class Provides a tab content view for an administration object.
	 */
	return declare("ecm.widget.admin._NavigatorAdminTabBase", [
		_AdminTabBase
	], {
		/** @lends ecm.widget.admin._NavigatorAdminTabBase.prototype */

		/*
		 * General variables
		 */
		_myAdminTreeObj: null,
		_myParentAdminTreeObj: null,
		_myAdminModel: null,
		_myAdminModelForCopy: null,
		_myUserData: null,
		_messages: ecm.messages,

		/*
		 * Common setters and getters
		 */

		setUserData: function(userData) {
			this._myUserData = userData;
		},

		setParentAdminTreeObject: function(treeObj) {
			this._myParentAdminTreeObj = treeObj;
		},

		setAdminTreeObject: function(treeObj) {
			this._myAdminTreeObj = treeObj;
		},

		setAdminModel: function(adminModel) {
			this._myAdminModel = adminModel;
		},

		setAdminModelForCopy: function(adminModel) {
			this._myAdminModelForCopy = adminModel;
		},

		createDefaultConfigObject: function(userData, callback) {
			if (callback)
				callback(userData);
		},

		_updateGridx: function(modelObject) {
			var id = this._theGrid._theGrid.store.getIdentity(modelObject);
			var index = this._theGrid._theGrid.model.idToIndex(id);
			if (index != undefined && index > -1) {
				this._theGrid._theGrid.store.onSet(modelObject); // will notify the grid to refresh the row with the item data
			}
		},

		_updateContentList: function(changedModel) {
			var id = this._contentList.grid.store.getIdentity(changedModel);
			var index = this._contentList.grid.model.idToIndex(id);
			if (index != undefined && index > -1) {
				var gridItem = this._contentList.grid.row(index).item();
				if (gridItem && gridItem.declaredClass == changedModel.declaredClass) { // make sure this is the correct item.  Teamspace & ContentItem can have the same id.
					this._contentList.grid.store.onSet(changedModel); // will notify the grid to refresh the row with the item data
				}
			}
		},

		destroy: function() {
			if (this._adminTabsWidget)
				this._adminTabsWidget = null;

			this.inherited(arguments);
		},

		/*
		 * Common functions to handle the toolbar buttons
		 */

		_onSaveAndClose: function() {
			var self = this;
			this.onSaveWithCallback(true, function() {
				if (!self._dirty)
					self._onClose();
			});
		},

		/*
		 * Called before tab got closed. Give each tab a chance to cleanup.
		 */
		_uninitialize: function() {
			if (this._tabWidgets) {
				for ( var props in this._tabWidgets) {
					var tabWidget = this._tabWidgets[props];
					if (tabWidget.widget) {
						tabWidget.widget._uninitialize();
					}
					delete this._tabWidgets[props];
					this._tabWidgets[props] = null;
				}
			}
		},

		_onClose: function() {
			this._onCloseTabs([
				this
			]);
		},

		/**
		 * Returns the tab with matching the declaredClass and id.
		 * 
		 * @private
		 */
		_getTabWidget: function(config) {
			var tabWidget = null;
			if (this._adminTabsWidget) {
				var children = this._adminTabsWidget.getChildren();
				for ( var i in children) {
					var child = children[i];
					if (child._myAdminModel && child._myAdminModel.declaredClass == config.declaredClass && child._myAdminModel.id == config.id) {
						tabWidget = child;
						break;
					}
				}
			}
			return tabWidget;
		},

		/**
		 * Close tabs matching the input items declaredClass and id.
		 */
		_closeTabs: function(items, callback) {
			if (this._adminTabsWidget) {
				var widgets = [];
				var children = this._adminTabsWidget.getChildren();
				for ( var i in children) {
					var child = children[i];
					if (child._myAdminModel) {
						for ( var j in items) {
							var modelObject = items[j];
							if (child._myAdminModel.id && modelObject.id && child._myAdminModel.declaredClass == modelObject.declaredClass) {
								widgets.push(child);
								break;
							}
						}
					}
				}
				if (widgets.length > 0) {
					this._onCloseTabs(widgets, false); // closes tabs (with no confirmation, even if dirty)
				}
				if (callback) {
					callback(items);
				}
			}
		},

		/**
		 * Opens the widget in the tabs pane.
		 * 
		 * @private
		 */
		_openWidgetInTab: function(widget) {
			connect.publish("ecm.admin.AdminPane.openTab", [
				widget
			]);
		},

		/**
		 * Closes the widget in the tabs pane.
		 * 
		 * @private
		 */
		_onCloseTabs: function(tabArray, confirm) {
			connect.publish("ecm.admin.AdminPane.closeTab", [
				tabArray,
				confirm
			]);
		},

		/**
		 * Publish event that will set widget's parent to tabContainer. We need that to access tabContainer children
		 * collection. This calls setParent method.
		 */
		_setParentObject: function(widget) {
			connect.publish("ecm.admin.AdminPane.connectTab", widget);
		},

		/**
		 * Called by _setParentObject method.
		 */
		setParent: function(parent) {
			this._adminTabsWidget = parent;
		},

		_onReset: function() {
			this._loadData();
			this._markClean();
		},

		/**
		 * Deprecated
		 */
		_onDelete: function() {
			this._myAdminTreeObj.processAction(this._myAdminTreeObj._aDelete);
		},

		/**
		 * Deprecated
		 */
		_onNew: function(userData) {
			this._myAdminTreeObj.processAction(this._myAdminTreeObj._aNew, userData);
		},

		/**
		 * Deprecated
		 */
		_getChildrenTreeObjects: function(modelObjectArray, callback) {
			// find tree node containing this model object 
			var treeObj = this._myAdminTreeObj.getChildren(lang.hitch(this, function(children) {
				var callbackChildren = [];
				if (children != null) {
					for ( var i in children) {
						var child = children[i];
						for ( var j in modelObjectArray) {
							var modelObject = modelObjectArray[j];
							if (modelObject.id == child._myAdminModel.id) {
								callbackChildren.push(child);
								break;
							}
						}
					}
				}
				callback(callbackChildren);
			}));
		},

		/**
		 * Deprecated.
		 */
		_copyItem: function(modelObject) {
			this._getChildrenTreeObjects([
				modelObject
			], lang.hitch(this, function(treeObjects) {
				if (treeObjects.length > 0) {
					treeObjects[0].processAction(treeObjects[0]._aCopy);
				}
			}));
		},

		_onCopy: function(evt) {
			var items = this._theGrid.getSelected();
			for ( var i in items) {
				this._copyItem(items[i]);
			}
		},

		/**
		 * Deprecated.
		 */
		_openItem: function(modelObject) {
			this._getChildrenTreeObjects([
				modelObject
			], lang.hitch(this, function(treeObjects) {
				if (treeObjects.length > 0) {
					treeObjects[0].processAction(treeObjects[0]._aOpen);
				}
			}));
		},

		_onAdminModelChange: function(modelObject) {
			// find tree node containing this model object 
			var treeObj = this._myParentAdminTreeObj.getChildren(lang.hitch(this, function(children) {
				if (children != null) {
					for ( var i in children) {
						var child = children[i];
						if (modelObject.id == child._myAdminModel.id) {
							child.onAdminModelChange();
							break;
						}
					}
				}
			}));
		},

		_onOpen: function(evt) {
			var items = this._theGrid.getSelected();
			for ( var i in items) {
				this._openItem(items[i]);
			}
		},

		/**
		 * Deprecated.
		 */
		_closeTabsWithItem: function(items, callback) {
			// Close items that are in open tabs
			this._getChildrenTreeObjects(items, lang.hitch(this, function(children) {
				var widgets = [];
				for ( var i in children) {
					var child = children[i];
					if (child._myTabWidgetInstance && !child._myTabWidgetInstance._destroyed) {
						widgets.push(child._myTabWidgetInstance);
					}
				}
				this._onCloseTabs(widgets, false); // closes tabs (with no confirmation, even if dirty)

				if (callback) {
					callback(items);
				}
			}));
		},

		_onFieldChange: function() {
			if (!this._isResetingFields()) {
				this._markDirty();
			}
			this._checkSave();
		},

		/**
		 * Return a array of column property names.
		 */
		getColumns: function() {
			if (!this.columnNames) {
				if (this._structure) {
					var array = [];
					for ( var i in this._structure) {
						if (this._structure[i].field) {
							array.push(this._structure[i].field);
						} else if (this._structure[i].decorator) {
							array.push("icon");
						}
					}
					this.columnNames = array;
				} else {
					this.columnNames = [];
				}
			}
			return this.columnNames;
		},

		/*
		 * Functions to be overwritten by the subclass
		 */

		/**
		 * To be overwritten to initialize this widget.
		 */
		initialize: function() {
			this._tabWidgets = [];
		},

		/**
		 * To be overwritten to return if it is loading the fields.
		 */
		_isLoadingFields: function() {
			return true;
		},

		/**
		 * To be overwritten to actually save the data and invoke onComplete() with the status.
		 */
		_saveData: function(/* function(success) */onComplete) {
			alert("Saving the Data");
			onComplete(true);
		},

		/**
		 * To be overwritten to check if all the data is valid.
		 */
		_validateData: function(focus) {
			return true;
		},

		/*
		 * Internally used functions
		 */

		_isDisabled: function() {
			return false;
		},

		_enableSave: function() {
			if (!this._isDisabled() /*&& this.hasModifyRight()*/) { // cannot enable save it the data is disabled
				this.saveAndCloseButton.set('disabled', false);
				this.saveButton.set('disabled', false);
			}
		},

		_disableSave: function() {
			this.saveAndCloseButton.set('disabled', true);
			this.saveButton.set('disabled', true);
		},

		_enableReset: function() {
			//if (this.hasModifyRight())
			this.resetButton.set('disabled', false);
		},

		_disableReset: function() {
			this.resetButton.set('disabled', true);
		},

		_enableDelete: function() {
			if (!this._isDisabled() /* && this.hasDeleteRight() */) { // cannot enable delete it the data is disabled
				this.deleteButton.set('disabled', false);
			}
		},

		_disableDelete: function() {
			this.deleteButton.set('disabled', true);
		},

		_disableNew: function() {
			this.newButton.set('disabled', true);
		},

		_enableNew: function() {
			if (this.hasCreateRight())
				this.newButton.set('disabled', false);
		},

		_disableEdit: function() {
			this.openButton.set('disabled', true);
		},

		_enableEdit: function() {
			if (this.hasViewRight())
				this.openButton.set('disabled', false);
		},

		openNewHelpWindow: function(file) { // copied from ecm.widget.teamspaceBuilder.TeamspaceBuilder
			var left = 100;
			var top = 100;
			var width = 860;
			var height = 600;
			var url = ecm.model.desktop.servicesUrl + "/help/" + file;
			var newWindow = window.open(url, "_blank", "status=yes,location=no,scrollbars=no,menubar=no,toolbar=no,personalbar=no,resizable=yes,left=" + left + ",top=" + top + ",width=" + width + ",height=" + height + "\"", true);
		},

		equals: function(widget) {
			return (widget && widget.declaredClass == this.declaredClass && widget._myAdminModel && widget._myAdminModel && this._myAdminModel && this._myAdminModel.id == widget._myAdminModel.id && this._myAdminModel.name == widget._myAdminModel.name);
		},

		_shield: function(func) {
			if (!func) // go away. don't waste my time.
				return;
			func(function() {
			});
		},

		/*
		 * Overwrite the base functions
		 */

		_checkSave: function() {
			if (this._validateData(false)) { //if (this._isAllRequiredValuesSet()) {
				this._enableSave();
			} else {
				this._disableSave();
			}
		},

		_markDirty: function() {
			this._checkSave(); //this._enableSave();
			this._enableReset();
			this.inherited(arguments);
		},

		_markClean: function() {
			this._checkSave(); //this._disableSave();
			this._disableReset();
			this.inherited(arguments);
		},

		_disableNew: function() {
			this.newButton.set('disabled', true);
		},

		_enableNew: function() {
			if (this.hasCreateRight())
				this.newButton.set('disabled', false);
		},

		_disableEdit: function() {
			this.openButton.set('disabled', true);
		},

		_enableEdit: function() {
			if (this.hasViewRight())
				this.openButton.set('disabled', false);
		},

		openNewHelpWindow: function(file) { // copied from ecm.widget.teamspaceBuilder.TeamspaceBuilder
			var left = 100;
			var top = 100;
			var width = 860;
			var height = 600;
			var url = ecm.model.desktop.servicesUrl + "/help/" + file;
			var newWindow = window.open(url, "_blank", "status=yes,location=no,scrollbars=no,menubar=no,toolbar=no,personalbar=no,resizable=yes,left=" + left + ",top=" + top + ",width=" + width + ",height=" + height + "\"", true);
		},

		equals: function(widget) {
			return (widget && widget.declaredClass == this.declaredClass && widget._myAdminModel && widget._myAdminModel && this._myAdminModel && this._myAdminModel.id == widget._myAdminModel.id && this._myAdminModel.name == widget._myAdminModel.name);
		},

		_shield: function(func) {
			if (!func) // go away. don't waste my time.
				return;
			func(function() {
			});
		},

		hasViewRight: function() {
			if (this._SECURITY_TOPIC)
				return ecm.model.admin.appCfg.getAccessRoleConfig().hasViewRight(this._SECURITY_TOPIC.category);
			else
				return this._myAdminTreeObj ? ecm.model.admin.appCfg.getAccessRoleConfig().hasViewRight(this._myAdminTreeObj.getIdentity()) : false;
		},

		hasCreateRight: function() {
			if (this._SECURITY_TOPIC)
				return ecm.model.admin.appCfg.getAccessRoleConfig().hasCreateRight(this._SECURITY_TOPIC.category);
			else
				return this._myAdminTreeObj ? ecm.model.admin.appCfg.getAccessRoleConfig().hasCreateRight(this._myAdminTreeObj.getIdentity()) : false;
		},

		hasDeleteRight: function() {
			if (this._SECURITY_TOPIC)
				return ecm.model.admin.appCfg.getAccessRoleConfig().hasDeleteRight(this._SECURITY_TOPIC.category);
			else
				return this._myAdminTreeObj ? ecm.model.admin.appCfg.getAccessRoleConfig().hasDeleteRight(this._myAdminTreeObj.getIdentity()) : false;
		},

		hasModifyRight: function() {
			if (this._SECURITY_TOPIC)
				return ecm.model.admin.appCfg.getAccessRoleConfig().hasModifyRight(this._SECURITY_TOPIC.category);
			else
				return this._myAdminTreeObj ? ecm.model.admin.appCfg.getAccessRoleConfig().hasModifyRight(this._myAdminTreeObj.getIdentity()) : false;
		},

		_setSecurityTopic: function(parent) {
			if (!this._SECURITY_TOPIC) {
				if (this._myAdminTreeObject) {
					var topic = this._myAdminTreeObj && this._myAdminTreeObj.getIdentity() + "." + this._myAdminTreeObj.getIdentity()
					this._SECURITY_TOPIC = {
						category: topic,
						mask: this._myAdminTreeObj ? ecm.model.admin.appCfg.getAccessRoleConfig().getMask(topic) : 0
					};
				} else if (parent)
					this._SECURITY_TOPIC = parent._SECURITY_TOPIC;
			}
		},

		/**
		 * Remove this method later.
		 * 
		 * @private
		 */
		_setDisabled: function(widgets) {
			array.forEach(widgets, function(entry, i) {
				entry && entry.set && entry.set("disabled", true);
			});
		},

		/**
		 * Register a tab therefore it will be called in the setData
		 * 
		 * @param tabWidget
		 *            a tab widget.
		 * @param serverTypes
		 *            is an array of string that this tabWidget will response to for example ["p8", "cm"...etc]
		 */
		registerTab: function(tabWidget, serverTypes) {
			if (!this._tabWidgets)
				this._tabWidgets = {};

			if (tabWidget.onMarkDirty && this._markDirty)
				this.own(aspect.after(tabWidget, "onMarkDirty", lang.hitch(this, "_markDirty"), true));

			this._tabWidgets[tabWidget.id] = lang.mixin({}, {
				"widget": tabWidget,
				"serverTypes": serverTypes
			});
			tabWidget._setSecurityTopic && tabWidget._setSecurityTopic(this);
		},

		/**
		 * This method pass configuration object to each registered tab based on the server type If registered tab
		 * widget does not have have any server types associated with then it will be set always otherwise only matched
		 * server type will be set. If user has no modify right, tab will be set to read-only.
		 * 
		 * @param data
		 *            a configuraiton object.
		 * @param serverType
		 *            a string representation of server type for example "p8".
		 */
		setData: function(data, serverType) {
			if (!this.hasModifyRight())
				this._setReadonly();

			for ( var props in this._tabWidgets) {
				var tabWidget = this._tabWidgets[props];
				if (tabWidget.widget) {
					if (!serverType || (serverType && array.some(tabWidget.serverTypes, function(type, i) {
						return type == serverType;
					}))) {
						tabWidget.widget.setData(data);
						if (!this.hasModifyRight()) {
							tabWidget.widget._setReadonly();

						}
					}
				}
			}
		},

		/**
		 * This method reset each registered tab based on the server type If registered tab widget does not have have
		 * any server types associated with then it will be call always otherwise only matched server type will be call.
		 */
		resetRegisteredTabs: function(serverType) {
			for ( var props in this._tabWidgets) {
				var tabWidget = this._tabWidgets[props];
				if (tabWidget.widget) {
					if (!serverType || (serverType && array.some(tabWidget.serverTypes, function(type, i) {
						return type == serverType;
					}))) {
						tabWidget.widget.resetData(this);
					}
				}
			}
		},

		_setReadonly: function() {
			this._disableAllFields(this._attachPoints);
		},

		_disableAllFields: function(widgets) {
			var controlNames = [
				"idx.widget.SloshBucket",
				"ecm.widget.ValidationTextBox",
				"ecm.widget.RadioButton",
				"ecm.widget.CheckBox",
				"ecm.widget.FilteringSelect",
				"ecm.widget.FilterTextBox",
				"ecm.widget.FilterBox",
				"dijit.form.Button",
				"dijit.form.Select",
				"ecm.widget.Select",
				"ecm.widget.NumberSpinner",
				"ecm.widget.admin.CustomSettings",
				"ecm.widget.NumberTextBox",
				"ecm.widget.ComboBox",
				"gridx.Grid"
			];

			var widget;
			array.forEach(widgets, lang.hitch(this, function(entry, i) {
				widget = this[entry] || entry;
				if (widget && widget.declaredClass) {
					if (!(widget.declaredClass == 'dijit.form.Button' && (entry.indexOf("connect") == 0 || entry.indexOf("close") == 0))) {
						if (array.some(controlNames, function(name, i) {
							console.log("widget declared class is " + widget.declaredClass);
							return (widget.declaredClass == name);
						}))
							widget.set("disabled", true);
					}
				}
				//if (widget && widget.childElementCount && widget.childElementCount > 0) {
				//	this._disableAllFields(widget.childNodes);
				//}
			}));
		},

		_checkSecurityRights: function() {
			if (this.newButton && !this.hasCreateRight())
				this._disableNew();
			if (this.deletButton && !this.hasDeleteRight())
				this._disableDelete();
			if (this.openButton && !this.hasViewRight())
				this._disableEdit();
		}

	});

});
