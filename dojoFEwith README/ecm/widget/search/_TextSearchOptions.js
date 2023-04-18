/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/string",
	"dijit/_WidgetBase",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/form/RadioButton",
	"dijit/form/NumberTextBox",
	"dojo/store/Memory",
	"../../LoggerMixin",
	"../../model/SearchCriterion",
	"./TextSearchOptions",
	"../HoverHelp",
	"../RadioButton",
	"../CheckBox",
	"dojo/text!./templates/_TextSearchOptions.html"
], function(declare, lang, string, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, RadioButton, NumberTextBox, Memory, LoggerMixin, SearchCriterion, TextSearchOptions, HoverHelp, ecmRadioButton, CheckBox, template) {

	/**
	 * @private Part of {@link ecm.widget.search.TextSearchOptions} widget
	 * @name ecm.widget.search._TextSearchOptions
	 * @class Provides text search option fields used by TextSearchOptions widget.
	 * @augments dijit._WidgetBase
	 */
	return declare("ecm.widget.search._TextSearchOptions", [
		_WidgetBase,
		_TemplatedMixin,
		_WidgetsInTemplateMixin
	], {
		/** @lends ecm.widget.search._TextSearchOptions.prototype */
		templateString: template,

		TEXT_SEARCH_OPERATOR: {
			ANY: "any",
			ALL: "all",
			PROXIMITY: "near",
			NONE: ""
		},

		TEXT_SEARCH_PROXIMITY_DEFAULT_DISTANCE: 1024,

		constructor: function() {
			this._messages = ecm.messages;
		},

		postCreate: function() {
			this.inherited(arguments);
			this.connect(this.proximity, "_setCheckedAttr", function() {
				this.distance.set("disabled", !this.proximity.get("checked"));
			});
			this.distance.set("disabled", !this.proximity.get("checked"));
			this.authoring.setHoverHelp(this.hideHoverHelp);
			this.none.setHoverHelp(this.noneHoverHelp);
			this.proximity.setHoverHelp(this.nearHoverHelp);
			this.connect(this.authoring, "onChange", function(hiddenSelected) {
				var skipHide = true;
				var operator = this.getOperator();
				if (hiddenSelected == SearchCriterion.prototype.EDIT_PROPERTY.HIDDEN){
					operator = undefined;
					skipHide = false;
				}
				if (hiddenSelected != SearchCriterion.prototype.EDIT_PROPERTY.HIDDEN && operator == undefined){
					operator = this.TEXT_SEARCH_OPERATOR.ANY;
				}
				this.setOperator(operator, skipHide);
			});
			
		},

		getOperator: function() {
			var operator = undefined;
			if (this.any.get("checked"))
				operator = this.TEXT_SEARCH_OPERATOR.ANY;
			else if (this.all.get("checked"))
				operator = this.TEXT_SEARCH_OPERATOR.ALL;
			else if (this.proximity.get("checked"))
				operator = this.TEXT_SEARCH_OPERATOR.PROXIMITY;
			else if (this.none.get("checked"))
				operator = this.TEXT_SEARCH_OPERATOR.NONE;
			else if (this._operator)
				operator = this._operator;

			return operator;
		},
		
		setOperator: function(/*String*/operator, /*Boolean*/skipHide) {
			this._operator = operator;

			var hiddenSelected = operator == undefined;
			if (this.any.get("checked") != (operator == this.TEXT_SEARCH_OPERATOR.ANY) || !skipHide)
				this.any.set("checked", operator == this.TEXT_SEARCH_OPERATOR.ANY);
			if (this.all.get("checked") != (operator == this.TEXT_SEARCH_OPERATOR.ALL) || !skipHide)
				this.all.set("checked", operator == this.TEXT_SEARCH_OPERATOR.ALL);
			if (this.proximity.get("checked") != (operator == this.TEXT_SEARCH_OPERATOR.PROXIMITY) || !skipHide)
				this.proximity.set("checked", operator == this.TEXT_SEARCH_OPERATOR.PROXIMITY);
			if (this.none.get("checked") != (operator == this.TEXT_SEARCH_OPERATOR.NONE) || !skipHide)
				this.none.set("checked", operator == this.TEXT_SEARCH_OPERATOR.NONE);

			this.any.set("disabled", hiddenSelected);
			this.all.set("disabled", hiddenSelected);
			this.proximity.set("disabled", hiddenSelected);
			this.none.set("disabled", hiddenSelected);
		},

		setProximityDistance: function(/*Integer*/distance) {
			var value = parseInt(distance);
			this.distance.set("value", !isNaN(value) && value > 0 ? value : this.TEXT_SEARCH_PROXIMITY_DEFAULT_DISTANCE);
		},

		getProximityDistance: function() {
			return this.distance.get("value");
		},
		
		/**
		 *  Set value for authoring flag selector combobox of text search field
		 */
		setAuthoringFlagSelector: function(editProperty) {
			var dataStore = new Memory();
			dataStore.data = [
			                  {id: SearchCriterion.prototype.EDIT_PROPERTY.EDITABLE, label: this._messages.advanced_search_options_editable},
			                  {id: SearchCriterion.prototype.EDIT_PROPERTY.READONLY, label: this._messages.advanced_search_options_readonly},
			                  {id: SearchCriterion.prototype.EDIT_PROPERTY.REQUIRED, label: this._messages.advanced_search_options_required},
			                  {id: SearchCriterion.prototype.EDIT_PROPERTY.HIDDEN, label: this._messages.advanced_search_options_hidden}
                  ];
			dataStore.getLabel = function(item){
				return item.label;
			}
            this.authoring.set("store", dataStore);
			if (editProperty == SearchCriterion.prototype.EDIT_PROPERTY.EDITABLE)
				this.authoring.set("value", SearchCriterion.prototype.EDIT_PROPERTY.EDITABLE);
			else if (editProperty == SearchCriterion.prototype.EDIT_PROPERTY.READONLY)
				this.authoring.set("value", SearchCriterion.prototype.EDIT_PROPERTY.READONLY);
			else if (editProperty == SearchCriterion.prototype.EDIT_PROPERTY.REQUIRED)
				this.authoring.set("value", SearchCriterion.prototype.EDIT_PROPERTY.REQUIRED);
			else if (editProperty == SearchCriterion.prototype.EDIT_PROPERTY.HIDDEN){
				this.authoring.set("value", SearchCriterion.prototype.EDIT_PROPERTY.HIDDEN);
				this.any.set("disabled", true);
				this.all.set("disabled", true);
				this.proximity.set("disabled", true);
				this.none.set("disabled", true);
			}
			else 
				this.authoring.set("value", SearchCriterion.prototype.EDIT_PROPERTY.EDITABLE);
		},

		getSummary: function() {
			var label = "";
			if (this.any.get("checked"))
				label = (this.authoring.value == SearchCriterion.prototype.EDIT_PROPERTY.EDITABLE)? this._messages.text_search_option_any : this._messages.text_search_option_any + 
						" - " + this.authoring._getDisplayedValueAttr();
			else if (this.all.get("checked"))
				label = (this.authoring.value == SearchCriterion.prototype.EDIT_PROPERTY.EDITABLE)? this._messages.text_search_option_all : this._messages.text_search_option_all + 
						" - " + this.authoring._getDisplayedValueAttr();
			else if (this.proximity.get("checked"))
				label = (this.authoring.value == SearchCriterion.prototype.EDIT_PROPERTY.EDITABLE)? this._messages.text_search_option_proximity + 
						" " + this.distance.get("value") : this._messages.text_search_option_proximity + " " + this.distance.get("value") + " - " + this.authoring._getDisplayedValueAttr();
			else if (this.none.get("checked"))
				label = (this.authoring.value == SearchCriterion.prototype.EDIT_PROPERTY.EDITABLE)? this._messages.text_search_option_none : this._messages.text_search_option_none + 
						" - " + this.authoring._getDisplayedValueAttr();
			else if (this.authoring.value == SearchCriterion.prototype.EDIT_PROPERTY.HIDDEN)
				label = this._messages.text_search_option_hide;
			else if (this._operator) {
				if (this._operator.indexOf("in:") == 0)
					label = substitute(this._messages.text_search_option_in, [
						this._operator.substring(3)
					]);
				else
					label = this._messages["text_search_option_" + this._operator];
			}

			return label;
		}
	});

});
