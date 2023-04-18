/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/array",
	"dojo/_base/lang",
	"dojo/dom-class",
	"dojo/dom-construct",
	"dojo/dom-geometry",
	"dojo/dom-style",
	"dojo/html",
	"dojo/string",
	"dojo/date/stamp",
	"dijit/_WidgetBase",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/registry",
	"dijit/form/RadioButton",
	"ecm/model/User",
	"../Select",
	"../UserGroupSelector",
	"../UserGroupSelectorPane",
	"../StandByDropDownInput",
	"../DatePicker",
	"../../LoggerMixin",
	"../_HoverHelpMixin",
	"dojo/text!./templates/_UserActionOption.html"
], //
function(declare, array, lang, domClass, domConstruct, domGeometry, domStyle, html, string, stamp, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, registry, RadioButton, User, Select, UserGroupSelector, UserGroupSelectorPane, StandByDropDownInput, DatePicker, LoggerMixin, _HoverHelpMixin, template) {

	/**
	 * @private Part of {@link ecm.widget.search.SearchMoreOptions} widget
	 * @name ecm.widget.search._UserActionOption
	 * @class Provides action filters that can be used to define search criteria based on the actions taken.
	 * @augments dijit._WidgetBase
	 */
	return declare("ecm.widget.search._UserActionOption", [
		_WidgetBase,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		_HoverHelpMixin
	], {
		/** @lends ecm.widget.search._UserActionOption.prototype */
		templateString: template,

		constructor: function() {
			this._messages = ecm.messages;
			this._dateFormat = ecm.model.desktop.valueFormatter.getDefaultFormat("xs:date").replace(/'/g, "\\'");
			this._invalidDateMessage = string.substitute(this._messages.property_date_invalid, [
				this._dateFormat
			]).replace(/'/g, "&#39;");
			this._deferredUpdates = new Object();
		},

		initialize: function(repository) {
			if (this._userSelect) // initialized
				return;

			var options = new Array();
			this._userActionMacros = ecm.model.desktop.userActionMacros;
			array.forEach(this._userActionMacros, function(userActionMacro) {
				if (userActionMacro.getServerType() == repository.type)
					options.push({
						label: ecm.messages["search_" + userActionMacro.getName().toLowerCase().replace(" ", "_")],
						value: userActionMacro.id
					});
			});
			this._actionSelect.addOption(options);
			this._resizeSelects();
			this._userGroupSelectorPane = new UserGroupSelectorPane({
				queryMode: "users",
				queryAcrossDomains: true,
				showPseudoUsers: true
			});
			this._userGroupSelectorPane.startup();
			this._userGroupSelectorPane.setRepository(repository);
			this._userSelect = new StandByDropDownInput({
				dropDown: this._userGroupSelectorPane,
				label: this._userGroupSelectorPane.getLabel()
			}, this._userSelectNode);

			// Apply any deferred updates
			for ( var i in this._deferredUpdates)
				this._deferredUpdates[i]();
			this._deferredUpdates = null;
		},

		setOn: function(on) {
			if (on) {
				this._onRadioButton.set("checked", true);
			} else {
				this._offRadioButton.set("checked", true);
			}
		},

		isOn: function() {
			return this._onRadioButton.get("checked");
		},

		setUserAction: function(userAction) {
			if (!this._userSelect) { // not initialized
				// Defer until it is initialized
				this._deferredUpdates.setUserAction = lang.hitch(this, function() {
					this.setUserAction(userAction);
				});
				return;
			}
			this._actionSelect.set("value", userAction && userAction.action ? userAction.action : this._actionSelect.getOptions()[0].value);
			this._userSelect.set("value", this._normalizeUsers(userAction));
			this._userGroupSelectorPane.setSelectedItems(this._userSelect.get("value"));
			this._userSelect.set("label", this._userGroupSelectorPane.getLabel());
			this._dateOperatorSelect.set("value", userAction && userAction.dateOperator ? userAction.dateOperator : this._dateOperatorSelect.getOptions()[0].value);
			this._applyDateValue(this._startDatePicker, userAction && userAction.dates && userAction.dates.length ? userAction.dates[0] : null);
			this._applyDateValue(this._endDatePicker, userAction && userAction.dates && userAction.dates.length > 1 ? userAction.dates[1] : null);
		},

		getUserAction: function() {
			if (!this._userSelect) { // not initialized
				return this._userAction;
			}
			var dates = new Array();
			var date = this._startDatePicker.get("value");
			if (date) {
				dates.push(date);
				date = this._endDatePicker.get("value");
				if (date)
					dates.push(date);
			}
			return {
				action: this._actionSelect.get("value"),
				users: this._userSelect.get("value"),
				dateOperator: this._dateOperatorSelect.get("value"),
				dates: dates
			};
		},

		updateOptions: function(objectType, permanent) {
			if (!this._userSelect) { // not initialized
				// Defer until it is initialized
				this._deferredUpdates.updateOptions = lang.hitch(this, function() {
					this.updateOptions(objectType, permanent);
				});
				return;
			}
			var options = this._actionSelect.getOptions();
			for (var i = 0; i < options.length; i++) {
				var option = options[i];
				if (option.value.indexOf("checkedOut.p8") == 0) {
					if (objectType == "folder") {
						if (permanent) {
							this._actionSelect.removeOption(option);
						} else if (!option.disabled) {
							option.disabled = true;
							option.selected = false;
							this._actionSelect.updateOption(option);
						}
					} else if (option.disabled) {
						option.disabled = false;
						this._actionSelect.updateOption(option);
					}
					break;
				}
			}
		},

		getSummary: function() {
			return this.isOn() ? this._messages.search_action_filter_enabled : "";
		},

		validate: function() {
			return !this.isOn() || (this._startDatePicker.isValid() && (domStyle.get(this._endDatePicker.domNode, "display") == "none" || this._endDatePicker.isValid()));
		},

		onChange: function() {
		},

		_handleOffRadioButtonChange: function(checked) {
			domClass[checked ? "add" : "remove"](this._userActionContainerNode, "dijitDisabled");
			array.forEach(registry.findWidgets(this._userActionContainerNode), function(widget) {
				widget.set("disabled", checked);
			});
			this.onChange();
		},

		_handleDateOperatorChange: function(operator) {
			var display = operator == "BETWEEN" ? "" : "none";
			domStyle.set(this._andNode, "display", display);
			domStyle.set(this._endDatePicker.domNode, "display", display);
			this.onChange();
		},

		_validateDateRange: function() {
			var startDate = this._startDatePicker.get("value");
			var endDate = this._endDatePicker.get("value");
			this._startDatePicker._hasBeenBlurred = true; // instantaneous error display
			this._startDatePicker.set("required", domStyle.get(this._endDatePicker.domNode, "display") != "none" ? new Boolean(endDate).valueOf() : false);
			this._endDatePicker._hasBeenBlurred = true; // instantaneous error display
			this._endDatePicker.set("required", this._dateOperatorSelect.get("value") == "BETWEEN" && new Boolean(startDate).valueOf());
		},

		_resizeSelects: function() {
			var div = domConstruct.create("div", {
				style: "display:;visibility:hidden",
				"class": "dijitPopup dijitComboBoxMenuPopup"
			});
			var ul = domConstruct.create("ul", {
				"class": "dijitReset dijitMenu dijitComboBoxMenu"
			}, div);
			this.domNode.ownerDocument.body.appendChild(div);
			array.forEach([
				this._actionSelect,
				this._dateOperatorSelect
			], function(select) {
				html._emptyNode(ul);
				array.forEach(select.getOptions(), function(option) {
					domConstruct.create("li", {
						"class": "dijitReset dijitMenuItem",
						innerHTML: option.label
					}, ul);
				});
				var width = domGeometry.getMarginBox(div).w;
				if (width)
					select.set("style", "width:" + (width + 18) + "px");
			});
			this.domNode.ownerDocument.body.removeChild(div);
		},

		_normalizeUsers: function(userAction) {
			var normalizedUsers = new Array();
			if (userAction && userAction.users && userAction.users.length) {
				var displayNames = userAction.userDisplayNames;
				array.forEach(userAction.users, function(user, i) {
					var userModel;
					if (user.isInstanceOf && user.isInstanceOf(User)) {
						userModel = user;
					} else if (user == UserGroupSelector.PSEUDO_USER_ME.id) {
						userModel = lang.clone(UserGroupSelector.PSEUDO_USER_ME);
					} else {
						var displayName = displayNames ? displayNames[i] : user;
						userModel = new User(user, displayName, user, displayName);
					}
					normalizedUsers.push(userModel);
				});
			}
			return normalizedUsers;
		},

		_applyDateValue: function(datePicker, value) {
			var date;
			if (value)
				date = value instanceof Date ? value : stamp.fromISOString(value);
			datePicker.set("value", date || null);
		},

		destroy: function() {
			this.inherited(arguments);

			if (this._userGroupSelectorPane)
				this._userGroupSelectorPane.destroy();
			if (this._userSelect)
				this._userSelect.destroy();
		}
	});

});
