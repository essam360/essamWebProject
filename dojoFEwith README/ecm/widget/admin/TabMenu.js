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
	"dojo/_base/sniff",
	"dojo/dom-construct",
	"dojo/dom-style",
	"dojo/dom-construct",
	"dijit/_Widget",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"ecm/MessagesMixin",
	"ecm/model/admin/AdminData",
	"ecm/model/admin/MenuData",
	"ecm/model/admin/MenuConfig",
	"ecm/widget/admin/_NavigatorAdminTabBase",
	"ecm/widget/HoverHelp",
	"ecm/widget/ValidationTextBox",
	"ecm/widget/TreeSloshBucket",
	"ecm/widget/admin/model/NavigatorAdminInstanceObject",
	"dojo/data/ItemFileWriteStore",
	"dijit/layout/ContentPane",
	"dijit/tree/ForestStoreModel",
	"ecm/widget/DropDownButton",
	"dijit/form/ComboBox",
	"dijit/form/Button",
	"dojo/store/Memory",
	"idx/layout/BorderContainer",
	"idx/html",
	"ecm/widget/admin/ValidationMenuIDTextBox",
	"dojo/text!./templates/TabMenu.html"
], //

function(declare, lang, array, string, aspect, has, construct, style, domConstruct, _Widget, _TemplatedMixin, _WidgetsInTemplateMixin, MessagesMixin, AdminData, MenuData, MenuConfig, _NavigatorAdminTabBase, HoverHelp, ValidationTextBox, TreeSloshBucket, NavigatorAdminInstanceObject, ItemFileWriteStore, ContentPane, ForestStoreModel, DropDownButton, ComboBox, Button, MemoryStore, BorderContainer, idxHtml, ValidationMenuIDTextBox, template) {

	/**
	 * @private Part of the NavigatorAdminPane widget.
	 * @name ecm.widget.admin.TabMenu
	 * @class Provides a tab that is used to edit a toolbar or a context menu.
	 */
	return declare("ecm.widget.admin.TabMenu", [
		_NavigatorAdminTabBase,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		MessagesMixin
	], {
		/** @lends ecm.widget.admin.TabMenu.prototype */

		templateString: template,
		widgetsInTemplate: true,
		openIconClassName: "adminIconInterfaceText",
		closedIconClassName: "adminIconInterfaceText",

		/**
		 * Overwritten to initialize this widget.
		 */
		initialize: function() {
			var id = "";
			var action = "new";
			if (this._myAdminModel && this._myAdminModel.id) {
				id = this._myAdminModel.id;
				action = "edit";
			} else if (this._myAdminModelForCopy && this._myAdminModelForCopy.id) {
				id = this._myAdminModelForCopy.id;
				action = "copy";
			}
			this.menuData = MenuData.createMenuData(id, action, this._SECURITY_TOPIC);

			this._disableSave();
			this._disableReset();
			if (this.menuData.isEdit()) {
				this.idField.set('disabled', true);
			}

			this._updateName(this._myAdminModel ? this._myAdminModel.getName() : ecm.messages.admin_new_menu);
			if (!this._isToolbar()) {
				if (this._isCustom()) {
					this.instructions.innerHTML = this.messages.admin_menu_context_menu_custom_instructions;
				} else if (this._isDefault()) {
					this.instructions.innerHTML = this.messages.admin_menu_default_instructions;
				} else {
					this.instructions.innerHTML = this.messages.admin_menu_context_menu_instructions;
				}
			} else {
				if (this._isCustom()) {
					this.instructions.innerHTML = this.messages.admin_menu_toolbar_custom_instructions;
				} else if (this._isDefault()) {
					this.instructions.innerHTML = this.messages.admin_menu_default_instructions;
				} else {
					this.instructions.innerHTML = this.messages.admin_menu_toolbar_instructions;
				}
			}

			this._setHoverHelp(this.menuData.isEdit());
			this.labelComboBox.set("placeholder", this._messages.menu_label_placeholder);
			this.resetButton.set("title", this._messages.reset_hover);
			this._menuItemsSloshBucket.set("availableLabel", this._messages.admin_available_menu_items);
			this._menuItemsSloshBucket.set("selectedLabel", this._messages.admin_selected_menu_items);

			this.own(aspect.after(this._menuItemsSloshBucket, "_onClickRemove", lang.hitch(this, "_markDirty"), true));
			this.own(aspect.after(this._menuItemsSloshBucket, "_onClickAdd", lang.hitch(this, "_markDirty"), true));
			this.own(aspect.after(this._menuItemsSloshBucket, "_onClickUp", lang.hitch(this, "_markDirty"), true));
			this.own(aspect.after(this._menuItemsSloshBucket, "_onClickDown", lang.hitch(this, "_markDirty"), true));
			this.own(aspect.after(this._menuItemsSloshBucket, "_onClickRight", lang.hitch(this, "_markDirty"), true));
			this.own(aspect.after(this._menuItemsSloshBucket, "_onClickLeft", lang.hitch(this, "_markDirty"), true));

			this._menuItemsSloshBucket.tooltipClass = this;

			this._checkSave();
			this._loadData();
		},

		_isDefault: function() {
			if (this._myAdminModel) {
				var id = this._myAdminModel.id;
				if (id.length > "Default".length && id.substring(0, "Default".length) == "Default") {
					return true;
				}
			}
			return false;
		},

		_isCustom: function() {
			var model = this._myAdminModel ? this._myAdminModel : this._myAdminModelForCopy;
			if (model) {
				return model.getPluginId();
			} else {
				return false;
			}
		},

		_isToolbar: function() {
			var model = this._myAdminModel ? this._myAdminModel : this._myAdminModelForCopy;
			if (model) {
				return model.isToolbar();
			} else {
				return false;
			}
		},

		_setHoverHelp: function(isEdit) {
			this.idField.setHoverHelp(this.idFieldHoverHelp);
			if (isEdit) {
				this.idFieldHoverHelp.set('message', this._messages.admin_menu_id_disabled_hover);
				this.idFieldHoverHelp.setFocusable(true);
			}
		},

		_loadData: function(onComplete) {
			this.menuData.loadData(lang.hitch(this, function(response) {
				this._loadTabData();
			}));
		},

		_loadTabData: function() {
			this.idField.pattern = '([a-zA-Z0-9])*';
			this.idField.invalidMessage = this._messages.admin_id_invalid;

			this.nameField.pattern = '([^"*|<>?:\\\\/])*';
			this.nameField.invalidMessage = this._messages.admin_name_invalid;

			if (this.menuData.isEdit()) {
				this.typeIDField.set('value', this.menuData.menuConfig.getType() ? this.menuData.menuConfig.getType() : "");
				this.idField.set('value', this.menuData.menuConfig.id);
				if (this.idField.get("disabled")) {
					style.set(this.idField.domNode, "display", "none");
					this.idFieldDisplay.appendChild(domConstruct.create("div", {
						innerHTML: this.menuData.menuConfig.id
					}));
				}
				var description = this.menuData.menuConfig.getDescription() ? this.menuData.menuConfig.getDescription() : "";
				var typeField = this.menuData.menuConfig.getTypeLabel() ? this.menuData.menuConfig.getTypeLabel() : "";
				var name = this.menuData.menuConfig.getName() ? this.menuData.menuConfig.getName() : "";
				if (this.menuData.isDisabled()) {
					style.set(this.descriptionField.domNode, "display", "none");
					this.descriptionFieldDisplay.appendChild(domConstruct.create("div", {
						innerHTML: description
					}));
					style.set(this.typeField.domNode, "display", "none");
					this.typeFieldDisplay.appendChild(domConstruct.create("div", {
						innerHTML: typeField
					}));
					style.set(this.nameField.domNode, "display", "none");
					this.nameFieldDisplay.appendChild(domConstruct.create("div", {
						innerHTML: name
					}));
				} else {
					this.nameField.set('value', name);
					this.typeField.set('value', typeField);
					this.descriptionField.set('value', description);
				}
			} else if (this.menuData.isCopied()) {
				this.idField.reset();
				this.nameField.reset();
				this.descriptionField.set('value', this.menuData.menuConfig.getDescription() ? this.menuData.menuConfig.getDescription() : "");
				this.typeField.set('value', this.menuData.menuConfig.getTypeLabel() ? this.menuData.menuConfig.getTypeLabel() : "");
				this.typeIDField.set('value', this.menuData.menuConfig.getType() ? this.menuData.menuConfig.getType() : "");
			} else {
				this.idField.reset();
				this.nameField.reset();
				this.descriptionField.reset();
			}

			if (this.menuData.isToolbar() && this.menuData.isOfficeMenu()) {
				style.set(this.addSeparatorButton.domNode, "display", "none");
			}

			if (!this.menuData.isCascadable()) {
				this._menuItemsSloshBucket.setMultipleLevelsSupported(false);
				style.set(this.addLabelButton.domNode, "display", "none");
			}

			this._loadAllAvailableFields(this.menuData.defaultActions);
			this._loadSelectedFields(this.menuData.actions);
			this._loadLabels(this.menuData.allLabels);
		},

		_onNameChange: function() {
			if (!this.idField.get('disabled')) {
				this.idField.set('value', this._getIdValueFromName(this.nameField.get('value')));
			}
			this._onFieldChange();
		},

		_getHeadingText: function() {
			if (this._isToolbar()) {
				return this._isCustom() ? this.messages.admin_menu_toolbar_custom_heading : this.messages.admin_menu_toolbar_heading;
			} else {
				return this._isCustom() ? this.messages.admin_menu_context_menu_custom_heading : this.messages.admin_menu_context_menu_heading;
			}
		},

		_loadLabels: function(actions) {
			var itemsArray = [];
			this._labels = {};
			for ( var i in actions) {
				var action = actions[i];
				if (action.id) {
					var label = action.name;
					var obj = {
						label: label,
						id: action.id,
						pluginId: action.pluginId
					};
					itemsArray.push(obj);
					if (action.labelId) {
						obj.labelId = action.labelId;
						this._labels[action.name] = action.labelId;
					}
				}
			}
			this.labelComboBox.set("store", new MemoryStore({
				data: itemsArray
			}));
		},

		_loadAllAvailableFields: function(actions) {
			var itemsArray = [];
			this._loadActions(itemsArray, actions);
			var store = new ItemFileWriteStore({
				data: {
					items: itemsArray
				}
			});
			var model = new ForestStoreModel({
				store: store,
				rootLabel: this.messages.admin_available_menu_items,
				childrenAttrs: [
					"children"
				],
				labelAttr: "label"
			});
			this._menuItemsSloshBucket.setAvailableTreeModel(model, false);
		},

		_createSeparatorUniqueValue: function() {
			if (!this.counter) {
				this.counter = 0;
			}
			return "Separator_" + new Date().getTime() + "_" + this.counter++;
		},

		_loadActions: function(actionChildren, actions, valuesData) {
			for ( var i in actions) {
				var action = actions[i];
				if (action.id) {
					var obj = {
						label: action.name,
						value: action.id,
						pluginId: action.pluginId
					};
					if (action.id == "Separator") {
						obj.value = this._createSeparatorUniqueValue();
						obj.label = this.messages.admin_menu_separator;
						obj.isSeparator = "true";
					}
					actionChildren.push(obj);
					if (valuesData) {
						valuesData[action.id] = obj.label;
					}

					if (action.subActions && action.subActions.length > 0) {
						obj.labelId = action.labelId;
						obj.openIconClassName = this.openIconClassName;
						obj.closedIconClassName = this.closedIconClassName;
						obj.canAddTo = true;
						obj.children = [];
						if (action.repositoryTypes) {
							obj.repositoryTypes = action.repositoryTypes;
						}
						this._loadActions(obj.children, action.subActions, valuesData);
					} else {
						obj.privileges = action.privileges;
						obj.isGlobal = action.global;
						obj.isMultiDoc = action.multiDoc;
						obj.repositoryTypes = action.repositoryTypes;
					}
				}
			}
		},

		_loadSelectedFields: function(actions) {
			var itemsArray = [];
			var selectedValues = {};
			this._loadActions(itemsArray, actions, selectedValues);
			var store = new ItemFileWriteStore({
				data: {
					items: itemsArray
				}
			});
			var model = new ForestStoreModel({
				store: store,
				rootLabel: this.menuData.isEdit() ? this.menuData.menuConfig.id : this.messages.admin_new_menu,
				childrenAttrs: [
					"children"
				],
				labelAttr: "label"
			});
			this.own(aspect.after(model.store, "onNew", lang.hitch(this, function(item, parent) {
				this._checkSave();
			}), true));
			this._model = model;

			this._menuItemsSloshBucket.setSelectedTreeModel(model, true, selectedValues);
			if (this.menuData.isDisabled()) {
				this._menuItemsSloshBucket.setEditable(false);
				this.addSeparatorButton.set('disabled', true);
				this.addLabelButton.set('disabled', true);
			}
		},

		// Callback from the sloshBucket 
		getTreeTooltipText: function(treeModel, treeNode) {
			var item = treeNode.item;
			if (item && item.value) {
				return this._getTooltipText(treeModel.store, item).join("");
			} else {
				return "";
			}
		},

		_getTooltipText: function(store, item) {
			var value = store.getValue(item, 'value');
			var isSeparator = store.getValue(item, 'isSeparator');
			var canAddTo = store.getValue(item, "canAddTo");
			var toolTip = [];
			if (isSeparator && isSeparator) { // Separator
				toolTip.push("<div>");
				toolTip.push("<span class='tooltipValue'>");
				toolTip.push(idxHtml.escapeHTML(this.messages.admin_menu_separator_label));
				toolTip.push("</span></div>");

			} else if (canAddTo) { // Label
				var label = this._isToolbar() ? this.messages.menu_dropdown_label : this.messages.menu_label;
				toolTip.push("<div><span class='tooltipLabel'>" + label + "</span> ");
				toolTip.push("<span class='tooltipValue'>");
				toolTip.push(idxHtml.escapeHTML(store.getValue(item, 'label')));
				toolTip.push("</span></div>");
				value = store.getValue(item, 'value');
				if (label != value) {
					toolTip.push("<div><span class='tooltipLabel'>" + this.messages.id_label + "</span> ");
					toolTip.push("<span class='tooltipValue'>");
					toolTip.push(idxHtml.escapeHTML(value));
					toolTip.push("</span></div>");
				}
				label = this._isToolbar() ? this.messages.menu_dropdown_label_info : this.messages.menu_label_info;
				toolTip.push("<div>&nbsp;</div><div>" + label + "</div>");

			} else { // Action
				var label = store.getValue(item, 'label');
				toolTip.push("<div><span class='tooltipLabel'>" + this.messages.menu_item_label + "</span> ");
				toolTip.push("<span class='tooltipValue'>");
				toolTip.push(idxHtml.escapeHTML(label));
				toolTip.push("</span></div>");
				value = store.getValue(item, 'value');
				toolTip.push("<div><span class='tooltipLabel'>" + this.messages.id_label + "</span> ");
				toolTip.push("<span class='tooltipValue'>");
				toolTip.push(idxHtml.escapeHTML(value));
				toolTip.push("</span></div>");
				value = store.getValue(item, 'repositoryTypes');
				if (value != undefined) {
					toolTip.push("<div><span class='tooltipLabel'>" + this.messages.admin_menu_repository_types + "</span> ");
					toolTip.push("<span class='tooltipValue'>");
					toolTip.push(this.getRepositoryTypesAsString(value));
					toolTip.push("</span></div>");
				}
				value = store.getValue(item, 'isMultiDoc');
				if (value != undefined) {
					toolTip.push("<div><span class='tooltipLabel'>" + this.messages.admin_menu_multiple_document + "</span> ");
					toolTip.push("<span class='tooltipValue'>");
					toolTip.push(this.getBoolean(value));
					toolTip.push("</span></div>");
				}
				value = store.getValue(item, 'isGlobal');
				if (value != undefined) {
					toolTip.push("<div><span class='tooltipLabel'>" + this.messages.admin_menu_global + "</span> ");
					toolTip.push("<span class='tooltipValue'>");
					toolTip.push(this.getBoolean(value));
					toolTip.push("</span></div>");
				}
				value = store.getValue(item, 'privileges');
				if (value) {
					toolTip.push("<div><span class='tooltipLabel'>" + this.messages.admin_menu_privileges + "</span> ");
					toolTip.push("<span class='tooltipValue'>");
					toolTip.push(idxHtml.escapeHTML(value));
					toolTip.push("</span></div>");
				}
				value = store.getValue(item, 'pluginId');
				if (value) {
					toolTip.push("<div><span class='tooltipLabel'>" + this.messages.admin_menu_plugin + "</span> ");
					toolTip.push("<span class='tooltipValue'>");
					toolTip.push(idxHtml.escapeHTML(value));
					toolTip.push("</span></div>");
				}
			}
			return toolTip;
		},

		getBoolean: function(bool) {
			if (bool) {
				return this.messages.true_label;
			} else {
				return this.messages.false_label;
			}
		},

		getRepositoryTypesAsString: function(types) {
			if (!types || types == "") {
				return this.messages.all;
			} else {
				var array = types.split(',');
				var labelArray = [];
				for ( var i in array) {
					var reposType = array[i];
					var label = this._getLabel(reposType);
					if (label) {
						labelArray.push(label);
					}
				}
				return labelArray.join(', ');
			}
		},

		_getLabel: function(id) {
			var serverObjects = this.menuData.servers;
			for ( var i in serverObjects) {
				var serverObj = serverObjects[i];
				if (serverObj.id == id) {
					var key = serverObj.getLabelKey();
					if (key && this.messages[key]) {
						return this.messages[key];
					} else {
						return id;
					}
				}
			}
			return null;
		},

		_loadWithFieldValues: function(adminModel) {
			var isNewOrCopy = this.menuData.isNew() || this.menuData.isCopied();
			if (isNewOrCopy) {
				adminModel.id = this.idField.get('value');
				adminModel.setValue("id", adminModel.id);
			}
			adminModel.setName(this.nameField.get('value'));
			adminModel.setDescription(this.descriptionField.get('value'));
			adminModel.setType(this.typeIDField.get('value'));
			adminModel.setTypeLabel(this.typeField.get('value'));

			var items = [];
			var subActionObjs = [];
			var tree = this._menuItemsSloshBucket.getSelectedTree();
			var children = tree.rootNode.getChildren();
			var store = tree.model.store;
			if (children) {
				var labelCounter = 0;
				for ( var i in children) {
					var treeNode = children[i];
					var value = store.getValue(treeNode.item, "value");
					var isSeparator = store.getValue(treeNode.item, "isSeparator");
					var label = store.getValue(treeNode.item, "label");
					var canAddTo = store.getValue(treeNode.item, "canAddTo");
					if (isSeparator && isSeparator) {
						value = "Separator";
					}
					if (canAddTo) {
						var labelId = store.getValue(treeNode.item, "labelId");
						var itemIds = [];
						var itemChildren = store.getValues(treeNode.item, "children");
						for (var j = 0; j < itemChildren.length; j++) {
							var itemChild = itemChildren[j];
							var childValue = store.getValue(itemChild, "value");
							var childLabel = store.getValue(itemChild, "label");
							var childIsSeparator = store.getValue(itemChild, "isSeparator");
							if (childIsSeparator && childIsSeparator) {
								childValue = "Separator";
							}
							//console.debug("       $$ v=" + value + " label=" + label + " j=" + j + " childValue=" + childValue + " childLabel=" + childLabel);
							itemIds.push(childValue);
						}

						var id = adminModel.id + "_L$" + labelCounter;
						//console.debug("$$ v=" + value + " label=" + label + " labelId=" + labelId);
						var obj = {
							id: id,
							items: itemIds
						};
						if (labelId) {
							obj.labelId = labelId;
						} else {
							obj.labelText = label;
						}
						subActionObjs.push(obj);

						items.push(id);
						labelCounter++;
					} else {
						items.push(value);
					}
				}
			}
			adminModel.setDataToSave(items, subActionObjs); //adminModel.setValues(adminModel.ITEMS, items);
		},

		/**
		 * Overwritten to actually save the data and invoke onComplete() with the status.
		 */
		_saveData: function(/* function(success) */onComplete) {
			this._loadWithFieldValues(this.menuData.menuConfig);
			this.menuData.save(lang.hitch(this, function(msg) {
				this.idField.set('disabled', true);
				this._updateName(this.menuData.menuConfig.getName());
				this.setTitle(this.menuData.menuConfig.getName());
				if (onComplete) {
					onComplete(true);
				}
			}));
		},

		_updateName: function(name) {
			construct.place("<label>" + string.substitute(this._getHeadingText(), [
				name
			]) + "</label>", this.headingText, "only");
		},

		isUniqueId: function() {
			var isUnique = this.menuData.isUniqueId(this.idField.get('value'));
			if (!isUnique) {
				this.idField.setCustomValidationError(this._messages.admin_id_in_use);
			}
			this.idField.validate();
			return isUnique;
		},

		_validateData: function(focus) {
			if (!this.idField.get('disabled') && !this.isUniqueId()) {
				if (focus) {
					this.idField.focus();
				}
				return false;
			}
			if (!this.idField.isValid()) {
				if (focus) {
					this.idField.focus();
				}
				return false;
			}

			// Do not enable save when a label has no children
			var tree = this._menuItemsSloshBucket.getSelectedTree();
			if (tree) {
				var children = tree.rootNode.getChildren();
				var store = tree.model.store;
				if (children) {
					for ( var i in children) {
						var treeNode = children[i];
						var canAddTo = store.getValue(treeNode.item, "canAddTo");
						if (canAddTo) {
							var itemChildren = store.getValues(treeNode.item, "children");
							if (itemChildren.length == 0) {
								return false;
							}
						}
					}
				}
			}
			return true;
		},

		/**
		 * Overwritten to return if it is resetting the fields to the original values.
		 */
		_isResetingFields: function() {
			var isResetting = true;
			if (this.menuData.isEdit()) {
				if ((this.idField.get('value') != this.menuData.menuConfig.id)) {
					isResetting = false;
				} else if ((this.menuData.menuConfig.getName() && this.nameField.get('value') != this.menuData.menuConfig.getName()) || (!this.menuData.menuConfig.getName() && this.nameField.get('value') != "")) {
					isResetting = false;
				} else if ((this.menuData.menuConfig.getDescription() && this.descriptionField.get('value') != this.menuData.menuConfig.getDescription()) || (!this.menuData.menuConfig.getDescription() && this.descriptionField.get('value') != "")) {
					isResetting = false;
				}
			} else {
				if (this.idField.get('value') != '') {
					isResetting = false;
				} else if (this.nameField.get('value') != "") {
					isResetting = false;
				} else if (this.descriptionField.get('value') != "") {
					isResetting = false;
				}
			}
			return isResetting;
		},

		_onCancelLabel: function() {
			this.addLabelButton.closeDropDown();
		},

		_onAddLabel: function() {
			var value = this.labelComboBox.get('value').trim();
			if (value) {
				var labelId = this._labels[value];
				this._menuItemsSloshBucket.addNewToSelected({
					labelId: labelId,
					label: value,
					value: value,
					openIconClassName: this.openIconClassName,
					closedIconClassName: this.closedIconClassName,
					canAddTo: true,
					children: []
				});
				this.addLabelButton.closeDropDown();
				this.labelComboBox.set("value", "");
			}
		},

		_onAddSeparator: function() {
			this._menuItemsSloshBucket.addNewToSelected({
				label: this.messages.admin_menu_separator,
				isSeparator: "true",
				value: this._createSeparatorUniqueValue()
			});
		},

		resize: function() {
			this.borderContainer.resize();
		}
	});

});
