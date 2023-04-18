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
	"dojo/aspect",
	"dojo/dom-geometry",
	"dojo/dom-class",
	"dojo/dom-style",
	"dojo/dom-construct",
	"dojo/keys",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/registry",
	"ecm/MessagesMixin",
	"ecm/LoggerMixin",
	"ecm/model/admin/DesktopData",
	"ecm/model/admin/MobileFeatureConfig",
	"ecm/model/admin/AdminRoleConfig",
	"ecm/widget/HoverHelp",
	"ecm/widget/RadioButton",
	"ecm/widget/CheckBox",
	"dijit/form/Button",
	"dijit/layout/ContentPane",
	"dojo/store/Memory",
	"gridx/Grid",
	"gridx/core/model/cache/Sync",
	"gridx/modules/ColumnResizer",
	"gridx/modules/Focus",
	"gridx/modules/select/Row",
	"gridx/modules/extendedSelect/Row",
	"gridx/modules/CellWidget",
	"gridx/modules/move/Row",
	"ecm/widget/_MoveUpDownGridxMixin",
	"ecm/widget/admin/MobileFeatureDialog",
	"idx/layout/BorderContainer",
	"ecm/widget/ValidationTextBox",
	"dojo/has!dojo-bidi?dojox/string/BidiComplex",
	"ecm/widget/admin/_NavigatorAdminTabBase",
	"dojo/text!./templates/DesktopMobile.html"
], //

function(declare, lang, array, has, aspect, geometry, domClass, style, domConstruct, keys, _TemplatedMixin, _WidgetsInTemplateMixin, registry, MessagesMixin, LoggerMixin, DesktopData, MobileFeatureConfig, AdminRoleConfig, HoverHelp, RadioButton, CheckBox, Button, ContentPane, MemoryStore, Grid, Cache, ColumnResizer, Focus, SelectRow, ExtendedSelectRow, CellWidget, MoveRow, _MoveUpDownGridxMixin, MobileFeatureDialog, BorderContainer, ValidationTextBox, BidiComplex, _NavigatorAdminTabBase, template) {

	/**
	 * @private Part of the NavigatorAdminPane widget.
	 * @name ecm.widget.admin.DesktopMobile
	 * @class Provides a pane that is used to specify the mobile settings for this desktop.
	 */

	return declare("ecm.widget.admin.DesktopMobile", [
		ContentPane,
		_NavigatorAdminTabBase,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		MessagesMixin,
		LoggerMixin,
		_MoveUpDownGridxMixin
	], {
		/** @lends ecm.widget.admin.DesktopMobile.prototype */

		templateString: template,
		widgetsInTemplate: true,
		defaultFeatures: [
			"browse",
			"search",
			"favorites",
			"casesearch"
		// "datacap"
		],

		postCreate: function() {
			this.inherited(arguments);

			this._enableMobileAccess.setHoverHelp(this._mobile_access_hover_help);
			this._disableMobileAccess.setHoverHelp(this._mobile_access_hover_help);
			this._enableAddDocs.setHoverHelp(this._enableAddDocsHoverHelp);
			this._enableOpenDocs.setHoverHelp(this._enableOpenDocsHoverHelp);
			this._mobileEmailAddress.setHoverHelp(this._mobileEmailAddressHoverHelp);

		},

		/*
		 * Called before tab got closed. Give each tab a chance to cleanup.
		 */
		_uninitialize: function() {
			this._init = false;
		},

		destroy: function() {
			this.logEntry("destroy");
			this._cleanupData();
			this.inherited(arguments);
			this.logExit("destroy");
		},

		_cleanupData: function() {
			this.logEntry("_cleanupData");
			this._init = false;
			this.logExit("_cleanupData");
		},

		// Called before save - copy the screen values into the model
		loadWithFieldValues: function(adminModel) {
			adminModel.setMobileAppAccess(this._enableMobileAccess.get("checked"));
			adminModel.setAddPhotoFromMobile(this._enableAddPhotos.get('checked'));
			adminModel.setAddDocFoldersToRepo(this._enableAddDocs.get('checked'));
			adminModel.setOpenDocFromOtherApp(this._enableOpenDocs.get('checked'));
			adminModel.setMobileFeatures(this.getFeaturesData(adminModel.id));
			adminModel.setMobileFeaturesInterfaceText(this._interfaceTextArray);

			adminModel.setMobileEmailAddress(this._mobileEmailAddress.get("value"));
			adminModel.setMobileBrandingMainColor(this._getColorInput(this._mobileBrandingMainColor).get("value"));
			adminModel.setMobileBrandingSecondaryColor(this._getColorInput(this._mobileBrandingSecondaryColor).get("value"));
		},

		/**
		 * @since 2.0.3
		 */
		setData: function(desktopData) {
			this.desktopData = desktopData;
		},

		// Called when the user hits the Reset button 
		loadData: function(onComplete) {
			this._init = false;
			this._mobileEmailAddress.pattern = '[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}';
			this._mobileEmailAddress.invalidMessage = this.messages.admin_invalid_email_address_message;

			if (!this.desktopData.isNew()) {
				if (this.desktopData.desktopConfig.getAddPhotoFromMobile())
					this._enableAddPhotos.set("checked", true);

				if (this.desktopData.desktopConfig.getAddDocFoldersToRepo())
					this._enableAddDocs.set("checked", true);

				if (this.desktopData.desktopConfig.getOpenDocFromOtherApp())
					this._enableOpenDocs.set("checked", true);

				if (this._getColorInput(this._mobileBrandingMainColor)) {
					this._updateColorInput(this.desktopData.desktopConfig.getMobileBrandingMainColor(), this._mobileBrandingMainColor)
				} else {
					this._addColor(this.desktopData.desktopConfig.getMobileBrandingMainColor(), this._mobileBrandingMainColor, "#4178BE")
				}

				if (this._getColorInput(this._mobileBrandingSecondaryColor)) {
					this._updateColorInput(this.desktopData.desktopConfig.getMobileBrandingSecondaryColor(), this._mobileBrandingSecondaryColor)
				} else {
					this._addColor(this.desktopData.desktopConfig.getMobileBrandingSecondaryColor(), this._mobileBrandingSecondaryColor, "#F0F0F0")
				}

				this._mobileEmailAddress.set("value", this.desktopData.desktopConfig.getMobileEmailAddress());

				if (this.desktopData.desktopConfig.getMobileAppAccess()) {
					this._enableMobileAccess.set("checked", true);
					this._onEnableAccess();
				} else {
					this._disableMobileAccess.set("checked", true);
					this._onDisableAccess();
				}

			} else {
				this._enableMobileAccess.set("checked", true);
				this._onEnableAccess();
				this._enableAddPhotos.set("checked", true);
				this._enableAddDocs.set("checked", true);
				this._enableOpenDocs.set("checked", true);
				this._addColor(null, this._mobileBrandingMainColor, "#4178BE")
				this._addColor(null, this._mobileBrandingSecondaryColor, "#F0F0F0")

			}

			this._initializeGrid();
			setTimeout(lang.hitch(this, function() {
				this.resize();
				this._init = true;
			}, 100));

			if (onComplete) {
				onComplete();
			}
		},

		controlNames: [
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
		],

		_enableAccess: function(enabled) {
			var widget;
			array.forEach(this._attachPoints, lang.hitch(this, function(entry, i) {
				widget = this[entry] || entry;
				if (widget && widget.declaredClass) {
					if (!(widget.declaredClass == 'dijit.form.Button' && (entry.indexOf("close") == 0) || entry.indexOf("_enableMobile") == 0 || entry.indexOf("_disableMobile") == 0)) {

						if (array.some(this.controlNames, function(name, i) {
							return (widget.declaredClass == name);
						}))
							widget.set("disabled", !enabled);
					}
				}
			}));
		},

		_onEnableAccess: function() {
			this._enableAccess(true)
			this._enableColorPicker(this._mobileBrandingMainColor, false);
			this._enableColorPicker(this._mobileBrandingSecondaryColor, false);

			this._onFieldChange();
		},

		_onDisableAccess: function() {
			this._enableAccess(false)
			this._enableColorPicker(this._mobileBrandingMainColor, true);
			this._enableColorPicker(this._mobileBrandingSecondaryColor, true);

			this._onFieldChange();
		},

		// override
		onMarkDirty: function() {
		},

		_onFieldChange: function() {
			if (this._init) {
				this.onMarkDirty();
			}
		},

		// override 
		onCheckSave: function() {
		},

		// Check if all the data is valid - called when the user hits save
		validateData: function(focus) {
			var valid = true;
			if (!this._init)
				return valid;

			if (valid && this._enableMobileAccess.get('checked'))
				valid = this.validateEmailAddressOrURL(this._mobileEmailAddress, focus, false);

			if (valid && this._enableMobileAccess.get('checked')) {
				valid = this.validateNotNull(this._getColorInput(this._mobileBrandingMainColor), focus, true) && this.validateNotNull(this._getColorInput(this._mobileBrandingSecondaryColor), focus, true)
			}

			return valid;
		},

		validateEmailAddressOrURL: function(widget, focus, required) {
			var value = widget.get('value');
			if (value) {
				if (!widget.validate()) {
					if (focus)
						widget.focus();
					return false;
				}
			} else {
				if (required) {
					if (focus)
						widget.focus();
					return false;
				}
			}
			return true;
		},

		validateNotNull: function(widget, focus, required) {
			var value = widget.get('value');
			if (!value && required) {
				if (focus)
					widget.focus();
				return false;
			}
			return true;
		},

		compareUrlValue: function(enabledControl, valueControl, value) {
			if (enabledControl.get('checked'))
				return value == valueControl.get('value');
			else
				return valueControl.get('value') == "" || value == valueControl.get('value');
		},

		// return false if you want to mark tab as dirty - called when data is changed
		isResetingFields: function() {
			if (this.desktopData.desktopConfig && this._init) {
				if (this._enableAddPhotos.get('checked') != this.desktopData.desktopConfig.getAddPhotoFromMobile())
					return false;
				if (this._enableAddDocs.get('checked') != this.desktopData.desktopConfig.getAddDocFoldersToRepo())
					return false;
				if (this._enableOpenDocs.get('checked') != this.desktopData.desktopConfig.getOpenDocFromOtherApp())
					return false;
				if (this._getColorInput(this._mobileBrandingMainColor).get("value") != this.desktopData.desktopConfig.getMobileBrandingMainColor())
					return false;
				if (this._getColorInput(this._mobileBrandingSecondaryColor).get("value") != this.desktopData.desktopConfig.getMobileBrandingSecondaryColor())
					return false;
				if (this._mobileEmailAddress.get("value") != this.desktopData.desktopConfig.getMobileEmailAddress())
					return false;
			}
			return true;
		},

		_onNew: function() {
			this._getFeatureDialog().show();
			this._onFieldChange();
		},

		_onEdit: function() {
			var selectedItems = this._mobileFeaturesGrid.select.row.getSelected();
			this._openItem(this._mobileFeaturesGrid.row(selectedItems[0]).item());
			this._onFieldChange();
		},

		_onDelete: function() {
			var rowIds = this._mobileFeaturesGrid.select.row.getSelected();
			if (rowIds) {
				for (var i = 0; i < rowIds.length; i++) {
					this._mobileFeaturesGrid.model.store.remove(rowIds[i]);
				}
			}
			this._onFieldChange();
		},

		_onMoveUp: function() {
			this._moveUpSelectedRows(this._mobileFeaturesGrid);
			this._onFieldChange();
		},

		_onMoveDown: function() {
			this._moveDownSelectedRows(this._mobileFeaturesGrid);
			this._onFieldChange();
		},

		_openItem: function(item) {
			this._editItemValue = item;
			this._getFeatureDialog().show({
				id: item.id,
				name: item.name,
				url: item.url,
				iconFile: item.iconFile
			});
		},

		_getFeatureDialog: function() {
			if (!this._mobileFeatureDialog) {
				this._mobileFeatureDialog = new MobileFeatureDialog();

				this.own(aspect.after(this._mobileFeatureDialog, "onAdd", lang.hitch(this, function(saveData) {
					this._mobileFeaturesGrid.model.store.add({
						"id": saveData.id,
						"order": this._getOrder(),
						"iconFile": saveData.iconFile,
						"iconLabel": !has("dojo-bidi") ? saveData.iconFile : BidiComplex.createDisplayString(saveData.iconFile || "", "FILE_PATH"),
						"name": saveData.name,
						"display": false,
						"url": saveData.url,
						"urlLabel": !has("dojo-bidi") ? saveData.url : BidiComplex.createDisplayString(saveData.url || "", "URL")
					});
					this._onFieldChange();
					setTimeout(lang.hitch(this, function() {
						this._mobileFeaturesGrid.resize();
					}), 200);
				}), true));

				this.own(aspect.after(this._mobileFeatureDialog, "onEdit", lang.hitch(this, function(saveData, originalData) {
					var item = this._editItemValue;
					item.name = saveData.name;
					item.iconFile = saveData.iconFile;
					item.iconLabel = saveData.iconFile;
					item.url = saveData.url;
					item.urlLabel = saveData.url;
					this._mobileFeaturesGrid.model.store.put(item, {
						id: item.id,
						overwrite: true
					});
					//this._onFieldChange();
				}), true));
			}
			return this._mobileFeatureDialog;
		},

		/**
		 * @private Returns the next order value in order to add an item to the end of the list.
		 */
		_getOrder: function() {
			var order = 0;
			for ( var i in this._mobileFeaturesGrid.model.store.data) {
				var data = this._mobileFeaturesGrid.model.store.data[i];
				if (order < data.order) {
					order = data.order;
				}
			}
			order++;
			return order;
		},

		_initializeGrid: function() {
			if (this._mobileFeaturesGrid) {
				this._mobileFeaturesGrid.destroy();
			}
			this._mobileFeaturesGrid = new Grid({
				region: "center",
				id: this.id + "_mobileFeaturesGrid",
				cacheClass: Cache,
				textDir: has("text-direction"),
				store: this._createStore(),
				structure: [
					{
						field: "display",
						name: "",
						headerAriaLabel: this.messages.admin_desktop_mobile_select_feature_label,
						width: "30px",
						widgetsInCell: true,
						navigable: true,
						style: 'align: center; text-align: center;',
						headerStyle: 'align: center; text-align: center;',
						decorator: function(data, rowId, rowIndex) {
							return '<span data-dojo-type="ecm/widget/CheckBox" data-dojo-attach-point="cb">';
						},
						setCellValue: function(data, storeData, cellWidget) {
							this.cb.set("checked", data);
						}
					},
					{
						field: "iconFile",
						name: " ",
						headerAriaLabel: this.messages.admin_desktop_mobile_feature_icon_label,
						width: "5%",
						decorator: lang.hitch(this, "_iconFormatter"),
						style: 'align: center; text-align: center;'
					},
					{
						field: "name",
						name: this.messages.admin_desktop_mobile_feature_name_label,
						width: "20%"
					},
					{
						field: "iconLabel",
						name: this.messages.admin_desktop_mobile_feature_icon_file_label,
						width: "20%"
					},
					{
						field: "urlLabel",
						name: this.messages.url_label
					}
				],
				modules: [
					CellWidget,
					Focus,
					ColumnResizer,
					MoveRow,
					SelectRow,
					{
						moduleClass: ExtendedSelectRow,
						triggerOnCell: true
					}
				]
			});
			domClass.add(this._mobileFeaturesGrid.domNode, "compact gridxWholeRow");
			this._mobileFeaturesPane.addChild(this._mobileFeaturesGrid);
			this._mobileFeaturesGrid.startup();

			this.own(aspect.after(this._mobileFeaturesGrid.select.row, "onSelectionChange", lang.hitch(this, "_checkButtons")));
			this.own(aspect.after(this._mobileFeaturesGrid.model, "onNew", lang.hitch(this, function(id, index, row) {
				this._checkButtons();
				setTimeout(lang.hitch(this, lang.hitch(this, function() {
					this._mobileFeaturesGrid.vScroller.scrollToRow(this._mobileFeaturesGrid.row(id).visualIndex() - 1, true);
				}), 1500));
			}), true));
			this.own(aspect.after(this._mobileFeaturesGrid.model, "onDelete", lang.hitch(this, "_checkButtons"), true));
			this.own(aspect.after(this._mobileFeaturesGrid.model, "onSet", lang.hitch(this, "_checkButtons"), true));
			this.own(aspect.after(this._mobileFeaturesGrid, "onRowDblClick", lang.hitch(this, function(evt) {
				this._openItem(this._mobileFeaturesGrid.row(evt.rowIndex).item());
			}), true));
			this.own(aspect.after(this._mobileFeaturesGrid, "onCellClick", lang.hitch(this, function(evt) {
				if (evt.columnId == "1") {
					this._toggleCheckbox(this._mobileFeaturesGrid, evt);
				}
			}), true));
			this.own(aspect.after(this._mobileFeaturesGrid.domNode, "onkeydown", lang.hitch(this, function(evt) {
				if (evt.columnId == "1" && evt.keyCode == keys.SPACE) {
					this._toggleCheckbox(this._mobileFeaturesGrid, evt);
				}
			}), true));
		},

		_toggleCheckbox: function(grid, evt) {
			var item = grid.model.store.get(evt.rowId);
			if (item) {
				item.display = !item.display;
				grid.model.store.put(item, {
					id: item.id,
					overwrite: true
				});
			}
		},

		_checkButtons: function(evt) {
			var selected = this._mobileFeaturesGrid.select.row.getSelected();
			var lastIndex = this._mobileFeaturesGrid.rowCount() - 1;
			var firstSelectedIndex = (selected.length > 0) ? this._mobileFeaturesGrid.model.idToIndex(selected[0]) : 0;
			var lastSelectedIndex = (selected.length > 0) ? this._mobileFeaturesGrid.model.idToIndex(selected[selected.length - 1]) : 0;

			this.openButton.set("disabled", !(selected.length == 1));
			this.moveUpButton.set("disabled", (selected.length == 0) || (firstSelectedIndex == 0));
			this.moveDownButton.set("disabled", (selected.length == 0) || (lastSelectedIndex == lastIndex));

			var deleteButtonDisable = (selected.length == 0);
			for (var i = 0; !deleteButtonDisable && i < selected.length; i++) {
				var ids = this._mobileFeaturesGrid.row(selected[i]).item().id.split(".");
				var id = ids[ids.length - 1];
				for (var j = 0; !deleteButtonDisable && j < this.defaultFeatures.length; j++) {
					if (this.defaultFeatures[j] == id) {
						deleteButtonDisable = true;
						break;
					}
				}
			}
			this.deleteButton.set("disabled", deleteButtonDisable);
			this.openButton.set("disabled", deleteButtonDisable);
		},

		_createStore: function() {
			var items = [];
			if (this.desktopData.mobileFeatures) {
				for (var i = 0; i < this.desktopData.mobileFeatures.length; i++) {
					var urlLabel = this.desktopData.mobileFeatures[i].getUrl(), iconLabel = this.desktopData.mobileFeatures[i].getIconFile(), name = this.desktopData.mobileFeatures[i].getName();
					if (has("dojo-bidi")) {
						iconLabel = BidiComplex.createDisplayString(iconLabel || "", "FILE_PATH");
						urlLabel = BidiComplex.createDisplayString(urlLabel || "", "URL");
					}
					var ids = this.desktopData.mobileFeatures[i].id.split(".");
					var id = ids[ids.length - 1];
					if (id == "browse") {
						name = this.messages.browse;
						urlLabel = this.messages.admin_system_defined;
						iconLabel = this.messages.admin_browse_icon;
					} else if (id == "search") {
						name = this.messages.search;
						urlLabel = this.messages.admin_system_defined;
						iconLabel = this.messages.admin_search_icon;
					} else if (id == "favorites") {
						name = this.messages.favorites;
						urlLabel = this.messages.admin_system_defined;
						iconLabel = this.messages.admin_favorites_icon;
					} else if (id == "casesearch") {
						name = this.messages.casesearch;
						urlLabel = this.messages.admin_system_defined;
						iconLabel = this.messages.admin_casesearch_icon;
					} //else if (id == "datacap") {
					//name = "Datacap";
					//urlLabel = this.messages.admin_system_defined;
					//iconLabel = this.messages.admin_datacap_icon;
					//}

					items.push({
						"id": this.desktopData.mobileFeatures[i].id,
						"order": i,
						"name": name,
						"urlLabel": urlLabel,
						"url": this.desktopData.mobileFeatures[i].getUrl(),
						"iconLabel": iconLabel,
						"iconFile": this.desktopData.mobileFeatures[i].getIconFile(),
						"display": this.desktopData.mobileFeatures[i].getDisplay() ? true : false
					});
				}
			}
			return new MemoryStore({
				data: items
			});
		},

		getFeaturesData: function(desktopId) {
			var featureArray = this.getData(this._mobileFeaturesGrid);
			var featureArrayToSave = [];
			this._interfaceTextArray = [];
			for (var i = 0; i < featureArray.length; i++) {
				var featureData = featureArray[i];
				// workaround the issue that we don't know about desktop id until now. otherwise prefix desktop id 
				// should be done in the add's connection method. 
				var id = (featureData.id.indexOf(desktopId) == -1) ? desktopId + "." + featureData.id : featureData.id;
				featureArrayToSave.push({
					id: id,
					_attributes: {
						name: featureData.name,
						url: featureData.url,
						desktopId: desktopId,
						iconFile: featureData.iconFile,
						display: "" + featureData.display
					}
				});
				this._interfaceTextArray.push({
					id: id,
					_attributes: {
						type: "desktop",
						labelKey: featureData.id,
						displayedIn: "desktop",
						desktopId: desktopId
					}
				});
			}
			return featureArrayToSave;
		},

		_iconFormatter: function(data, id, rowIndex) {
			var IconValue = function(iconFile) {
				this.iconFile = iconFile;
			};
			IconValue.prototype = new Object();
			// "/navigator/ecm/widget/resources/images/" + iconFile;
			IconValue.prototype.toString = function() {
				if (this.iconFile) {
					return '<img height="16" width="16" role="presentation" src="' + this.iconFile + '" alt="" src="dojo/resources/blank.gif" /><div class="dijitHidden">' + this.iconFile + '</div>';
				} else {
					return '';
				}
			};
			IconValue.prototype.replace = function() {
				return this;
			};

			var item = this._mobileFeaturesGrid.row(id).item();
			return new IconValue(item.iconFile);
		},

		/**
		 * Adds a new color to the color palette.
		 * 
		 * @param color
		 *            Hex color value
		 * @param colorDom
		 *            TD cell
		 * @private
		 */
		_addColor: function(color, colorDom, defaultColor) {
			if (!color)
				color = defaultColor || "#4178BE"; // ibmBlue50Color

			var span = domConstruct.create("span", {
				"class": "colorPickerButton"
			}, colorDom);

			var button = null;
			var input = new ValidationTextBox({
				id: colorDom.id + "ValidationTextBox",
				name: colorDom.id + "ValidationTextBox",
				required: true,
				trim: true,
				propercase: false,
				value: color,
				pattern: "\#[A-Fa-f0-9]{6}|\#[A-Fa-f0-9]{3}",
				invalidMessage: this.messages.invalid_color_message,
				onChange: lang.hitch(this, function() {
					this._onColorChange(input, button);
				})
			});
			domConstruct.place(input.domNode, span, "last");
			button = new Button({
				id: colorDom.id + "ColorButton",
				name: colorDom.id + "ColorButton",
				onClick: lang.hitch(this, function() {
					this._colorPickerDialog.colorField = input;
					this._colorPickerDialog.colorButton = button;
					this._onOpenColorPicker(input);
				})
			});
			// Remove dojo styling from color picker buttons
			domClass.remove(button.domNode.firstChild, "dijitButtonNode");
			button.focusNode.style.backgroundColor = input.get("value");
			domConstruct.place(button.domNode, span, "last");

		},

		/**
		 * @private
		 */
		_onColorChange: function(field, button) {
			if (field && button) {
				var value = field.get("value");
				button.focusNode.style.backgroundColor = value;
			}
			if (this._init)
				this._onFieldChange();
		},

		/**
		 * @private
		 */
		_onOpenColorPicker: function(field) {
			var brandColor = field.get("value");
			if (brandColor && brandColor != "")
				this._colorPicker.set("value", brandColor);
			this._colorPickerDialog.show();
		},

		/**
		 * @private helper method to enable/disable color picker composite control
		 */
		_enableColorPicker: function(container, disable) {
			this._getColorInput(container) && this._getColorInput(container).set("disabled", disable);
			this._getColorButton(container) && this._getColorButton(container).set("disabled", disable);
		},

		/**
		 * @private update color input and trigger button changes
		 */
		_updateColorInput: function(color, container) {
			if (container && container.id) {
				var input = registry.byId(container.id + "ValidationTextBox");
				input.set("value", color);
				this._onColorChange(input, registry.byId(container.id + "ColorButton"));
			}
		},

		/**
		 * @private get Input control from a domNode
		 */
		_getColorInput: function(container) {
			if (container && container.id)
				return registry.byId(container.id + "ValidationTextBox");
		},

		_getColorButton: function(container) {
			if (container && container.id)
				return registry.byId(container.id + "ColorButton");
		},

		/**
		 * @private
		 */
		_onOkColorPicker: function() {
			this._colorPickerDialog.colorField.set("value", this._colorPicker.get("value"));
			this._colorPickerDialog.colorButton.focusNode.style.backgroundColor = this._colorPickerDialog.colorField.get("value");
			this._onColorChange();
			this._colorPickerDialog.hide();
		},

		/**
		 * @private
		 */
		_onCloseColorPicker: function() {
			this._colorPickerDialog.hide();
		},
		
		setupForDesktopAdmin: function(desktopAdminRole){
			style.set(this._mobileAccessTable, "display", "none");
			style.set(this._mobileFeaturesPane.domNode, "display", "none");
			style.set(this._settingsPane.domNode, "display", "none");
			
			if (!desktopAdminRole.hasPrivilege(AdminRoleConfig.MOBILE_ADD_PHOTOS_PRIVILEGE) &&
					!desktopAdminRole.hasPrivilege(AdminRoleConfig.MOBILE_ADD_DOCS_PRIVILEGE) &&
					!desktopAdminRole.hasPrivilege(AdminRoleConfig.MOBILE_OPEN_DOCS_PRIVILEGE)){
				
				style.set(this._docMgmtPane, "display", "none");
			}
			else {
				if (!desktopAdminRole.hasPrivilege(AdminRoleConfig.MOBILE_ADD_PHOTOS_PRIVILEGE)){
					style.set(this._addPhotos, "display", "none");
				}
				if (!desktopAdminRole.hasPrivilege(AdminRoleConfig.MOBILE_ADD_DOCS_PRIVILEGE)){
					style.set(this._addDocs, "display", "none");
				}
				if (!desktopAdminRole.hasPrivilege(AdminRoleConfig.MOBILE_OPEN_DOCS_PRIVILEGE)){
					style.set(this._openDocs, "display", "none");
				}
			}
			
			if (!desktopAdminRole.hasPrivilege(AdminRoleConfig.MOBILE_MAIN_COLOR_PRIVILEGE) &&
					!desktopAdminRole.hasPrivilege(AdminRoleConfig.MOBILE_SEC_COLOR_PRIVILEGE)){
				
				style.set(this._mobileBrandingSection.domNode, "display", "none");
			}
			else {
				if (!desktopAdminRole.hasPrivilege(AdminRoleConfig.MOBILE_MAIN_COLOR_PRIVILEGE)){
					style.set(this._mobileMainColorRow, "display", "none");
				}
				if (!desktopAdminRole.hasPrivilege(AdminRoleConfig.MOBILE_SEC_COLOR_PRIVILEGE)){
					style.set(this._mobileSecondaryColorRow, "display", "none");
				}
			}
		},

		dummy: null,
	});
});
