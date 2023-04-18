/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/dom-class",
	"dojo/dom-attr",
	"dojo/aspect",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/_Widget",
	"dijit/layout/ContentPane",
	"gridx/modules/CellWidget",
	"gridx/modules/Focus",
	"ecm/MessagesMixin",
	"ecm/LoggerMixin",
	"ecm/model/SecurityPolicy",
	"ecm/widget/DropDownDialog",
	"ecm/widget/DropDownInput",
	"ecm/widget/listView/ContentList",
	"ecm/widget/listView/modules/Bar",
	"ecm/widget/listView/modules/FilterData",
	"ecm/widget/listView/gridModules/ColumnWidth",
	"dojo/text!./templates/SecurityPolicySelector.html"
], //
function(declare, //
lang, //
domClass, //
domAttr, //
aspect, //
_TemplatedMixin, //
_WidgetsInTemplateMixin, //
_Widget, //
ContentPane, //
CellWidget, //
Focus, //
MessagesMixin, //  
LoggerMixin, //
SecurityPolicy, //
DropDownDialog, //
DropDownInput, //
ContentList, //
Bar, //
FilterData, //
ColumnWidth, //
template) { //

	/**
	 * @name ecm.widget.SecurityPolicySelector
	 * @class Provides a widget that is used to display the list of security policies in a dropdown dialog. This widget
	 *        allows the user to select a security policy.
	 * @augments dijit._Widget
	 * @since 2.0.3
	 */
	return declare("ecm.widget.SecurityPolicySelector", [
		_Widget,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		LoggerMixin,
		MessagesMixin
	], {
		/** @lends ecm.widget.SecurityPolicySelector.prototype */

		templateString: template,
		widgetsInTemplate: true,

		/**
		 * The {@link ecm.model.Repository} object used to get the security policies.
		 */
		repository: null,
		/**
		 * The label id that labels the dropdown. Used for accessibility to set the aria-labelledby.
		 */
		labelId: null,
		/**
		 * Used for accessibility to set the dropdown id.
		 */
		dropdownid: null,
		/**
		 * Message displayed in the selector dropdown button label when no security policy is selected.
		 */
		placeholder: ecm.messages.entry_template_security_policy_none,

		/**
		 * Post create.
		 */
		postCreate: function() {
			this.logEntry("postCreate");
			this.inherited(arguments);

			this._contentList = this._createContentList();

			this._contentPane = new ContentPane({
				"class": "ecmSecurityPolicySelector dropDownDialog"
			});
			this._contentPane.onShow = lang.hitch(this, "_loadDropDown");
			this._contentPane._onShow = function() {
				// do nothing
			};
			this._contentPane.onSave = lang.hitch(this, "_processSelection");
			this._contentPane.set("content", this._contentList);

			this._dropDownInput = new DropDownInput({
				id: this.dropdownid ? this.dropdownid : this.id + "_dropdown",
				dropDown: this._contentPane
			});
			if (this.labelId) {
				domAttr.set(this._dropDownInput.focusNode, "aria-labelledby", this.labelId);
			}
			this._dropDownInput.set("label", this.placeholder);
			domClass.add(this._dropDownInput.domNode, "placeholder");

			this.domNode.appendChild(this._dropDownInput.domNode);

			this._contentList.startup();
			this._contentPane.startup();
			this._dropDownInput.startup();
			this.logExit("postCreate");
		},

		/**
		 * @private Creates the content list that displays the list of security policies.
		 */
		_createContentList: function() {
			var contentList = new ContentList({
				multiSelect: false,
				coreModules: [
					CellWidget,
					Focus
				//ColumnWidth
				]
			});
			contentList.setContentListModules([
				{
					moduleClass: Bar,
					top: [
						[
							[
								{
									moduleClass: FilterData,
									showFilterButton: false,
									className: "filterTextBox"
								}
							]
						]
					]
				}
			]);

			this.own(aspect.after(contentList, "onModulesLoaded", lang.hitch(this, function() {
				var securityPolicy = this.get("value");
				if (securityPolicy && securityPolicy.id) {
					this._contentList.grid.select.row.selectById(securityPolicy.id);
				}
				this.onLoaded();
			})));
			this.own(aspect.after(contentList, "onRowDblClick", lang.hitch(this, "_rowDblClick"), true));
			this.own(aspect.after(contentList, "onRowSelectionChange", lang.hitch(this, "_rowSelectionChange"), true));
			return contentList;
		},

		/**
		 * Destroy.
		 */
		destroy: function() {
			if (this._contentList) {
				this._contentList.destroyRecursive();
				this._contentList = null;
			}
			if (this._contentPane) {
				this._contentPane.destroyRecursive();
				this._contentPane = null;
			}
			if (this._dropDownInput) {
				this._dropDownInput.destroyRecursive();
				this._dropDownInput = null;
			}
			this.inherited(arguments);
		},

		/**
		 * Event called when the security policy changes.
		 * 
		 * @param securityPolicy
		 *            Instance o {@link ecm.model.SecurityPolicy}.
		 */
		onChange: function(securityPolicy) {
		},

		/**
		 * Returns the {@link ecm.model.SecurityPolicy} that is selected.
		 */
		_getValueAttr: function() {
			return this._dropDownInput.get("value");
		},

		/**
		 * Sets the {@link ecm.model.SecurityPolicy} that is selected.
		 * 
		 * @param value
		 *            Instance of {@link ecm.model.SecurityPolicy}.
		 */
		_setValueAttr: function(value) {
			if (!value) {
				this._dropDownInput.set("value", null);
				this._dropDownInput.set("label", this.placeholder);
				domClass.add(this._dropDownInput.domNode, "placeholder");
			} else {
				this._dropDownInput.set("value", value);
				this._dropDownInput.set("label", value.displayName);
				domClass.remove(this._dropDownInput.domNode, "placeholder");
			}
			this.onChange(value);
		},

		/**
		 * @private Processes the selected item updating the label and value with the selected data.
		 */
		_processSelection: function() {
			var items = this._contentList.getSelectedItems();
			this.set("value", items && items.length > 0 ? items[0] : null);
			return true;
		},

		/**
		 * @private Called when a row is double clicked.
		 */
		_rowDblClick: function() {
			this._dropDownInput.dropDown.onClickOK();
		},

		/**
		 * @private Enables and disables the OK button.
		 */
		_rowSelectionChange: function(items) {
			this._dropDownInput.dropDown.setDisabledOKButton(items.length == 0);
		},

		/**
		 * Fired when the security policies are loaded and the gridx modules are finished loading.
		 */
		onLoaded: function() {
		},

		/**
		 * Retrieves the security policies and loads the content list.
		 */
		retrieveSecurityPolicies: function(callback) {
			this.repository.retrieveSecurityPolicies(lang.hitch(this, function(resultSet) {
				this._contentList.setResultSet(resultSet);
				this._isLoaded = true;
				if (callback) {
					callback();
				}
			}));
		},

		/**
		 * Returns the {@link ecm.model.SecurityPolicy} that is selected in the content list.
		 */
		getSelectedItem: function() {
			var selectedItems = this._contentList.getSelectedItems();
			return selectedItems && selectedItems.length > 0 ? selectedItems[0] : null;
		},

		/**
		 * @private Called when the dropdown is selected. Loads the content list with the security policies.
		 */
		_loadDropDown: function() {
			if (this.repository) {
				this._dropDownInput.setAllowCloseOnBlur(false);
				if (this._isLoaded) {
					// If this widget is in a grid with a Focus module, then need time to allow the grid cell to focus
					setTimeout(lang.hitch(this, function() {
						this._dropDownInput.setAllowCloseOnBlur(true);
					}), 200);

				} else {
					this.retrieveSecurityPolicies(lang.hitch(this, function() {
						this._dropDownInput.setAllowCloseOnBlur(true);
					}));
				}
			}
		}
	});
});
