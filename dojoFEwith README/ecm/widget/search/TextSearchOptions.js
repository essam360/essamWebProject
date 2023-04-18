/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/string",
	"dojo/dom-class",
	"dijit/_WidgetBase",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"../../LoggerMixin",
	"../../model/SearchCriterion",
	"../_OptionsLinkMixin",
	"./_BoxTextSearchOptions",
	"./_TextSearchOptions",
	"../DropDownLink",
	"../DropDownDialog",
	"dojo/text!./templates/TextSearchOptions.html"
], function(declare, string, domClass, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, LoggerMixin, SearchCriterion, _OptionsLinkMixin, _BoxTextSearchOptions, _TextSearchOptions, DropDownLink, DropDownDialog, template) {

	/**
	 * @private Part of {@link ecm.widget.search.BasicSearchDefinition} and {@link ecm.widget.search.SearchForm} widgets
	 * @name ecm.widget.search.TextSearchOptions
	 * @class Provides a widget that is used to specify text search options for IBM FileNet P8 or Box repositories. For
	 *        IBM FileNet P8, the options include the text search operator that is to be used. In addition, users can
	 *        show or hide the text search section to enable or disable the text search feature. For Box, the options
	 *        include the types of indexed content to be searched.
	 * @augments dijit._WidgetBase
	 */
	return declare("ecm.widget.search.TextSearchOptions", [
		_WidgetBase,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		_OptionsLinkMixin
	], {
		/** @lends ecm.widget.search.TextSearchOptions.prototype */
		templateString: template,

		hideLink: false,
		showHideCriteriaChoicelist: true,

		constructor: function() {
			this._messages = ecm.messages;
		},

		startup: function() {
			this.inherited(arguments);
			if (this._optionsLink && this._optionsLink.linkHoverHelp) {
				this._optionsLink.linkHoverHelp.set("message", this._messages.text_search_options_hover_help);
				this._optionsLink.linkHoverHelp.setFocusable(true); // enable tabbing to the hover help icon
			}
		},

		setRepository: function(repository, objectType, reset) {
			this.repository = repository;
			this.objectType = objectType;
			this._optionsLink.set("label", this._messages[repository._isBox() ? "box_text_search_options_search_within" : "text_search_options"]);
			this.initialize(reset);
		},

		initialize: function(reset) {
			if (this.repository._isBox()) {
				domClass.add(this._textSearchOptions.domNode, "dijitHidden");
				this._textSearchOptions.set("disabled", true); // excluded from summary
				domClass.remove(this._boxTextSearchOptions.domNode, "dijitHidden");
				this._boxTextSearchOptions.set("disabled", false);
				if (reset)
					this._selectedContentTypes = null;
				this._boxTextSearchOptions.initialize(this.objectType);
				this._boxTextSearchOptions.setContentTypes(this._selectedContentTypes);

				// Resize the dialog the next time it opens in case the options have changed
				this._optionsDialog.scheduleResize();
			} else {
				if (reset)
					this._textSearchOptions.setAuthoringFlagSelector(this._selectedAdvanceSelector); 
				domClass.add(this._boxTextSearchOptions.domNode, "dijitHidden");
				this._boxTextSearchOptions.set("disabled", true); // excluded from summary
				domClass.remove(this._textSearchOptions.domNode, "dijitHidden");
				this._textSearchOptions.set("disabled", false);
				if (this._selectedOperator == undefined || reset)
					this._selectedOperator = this._textSearchOptions.TEXT_SEARCH_OPERATOR.ANY;
				if (!this._selectedProximityDistance || reset)
					this._selectedProximityDistance = this._textSearchOptions.TEXT_SEARCH_PROXIMITY_DEFAULT_DISTANCE;
				if (this._selectedOperator != this._textSearchOptions.getOperator() || reset) {
					this._textSearchOptions.setOperator(this._selectedOperator);
					this._textSearchOptions.setProximityDistance(this._selectedProximityDistance);
				}
				if (!this._selectedAdvanceSelector && this._textSearchOptions.authoring.value != "")
					this._selectedAdvanceSelector = this._textSearchOptions.authoring.value;
				if (this.showHideCriteriaChoicelist)
					domClass.remove(this._textSearchOptions._hideTextCriteriaNode, "dijitHidden");
			}

			this.inherited(arguments);
		},

		saveOptions: function() {
			if (this.repository._isBox()) {
				this._selectedContentTypes = this._boxTextSearchOptions.getContentTypes();
			} else {
				this._selectedOperator = this._textSearchOptions.getOperator();
				this._selectedProximityDistance = this._textSearchOptions.getProximityDistance();
				this._selectedAdvanceSelector = this._textSearchOptions.authoring.value;
			}

			this.inherited(arguments);
		},

		restoreOptions: function() {
			if (this.repository._isBox()) {
				this._boxTextSearchOptions.setContentTypes(this._selectedContentTypes);
			} else {
				this._textSearchOptions.setOperator(this._selectedOperator);
				this._textSearchOptions.setProximityDistance(this._selectedProximityDistance);
				if (!domClass.contains(this._textSearchOptions._hideTextCriteriaNode, "dijitHidden")){
					this._textSearchOptions.setAuthoringFlagSelector(this._selectedAdvanceSelector);
					if (this._selectedAdvanceSelector && this._selectedAdvanceSelector == SearchCriterion.prototype.EDIT_PROPERTY.HIDDEN){
						this._textSearchOptions.any.set("disabled", true);
						this._textSearchOptions.all.set("disabled", true);
						this._textSearchOptions.proximity.set("disabled", true);
						this._textSearchOptions.none.set("disabled", true);
					}
				}
					
			}

			this.inherited(arguments);
		},

		getSelectedOptions: function() {
			var options = {};
			if (!this._getDisabledAttr()) {
				if (this.repository._isBox()) {
					options.contentTypes = this._boxTextSearchOptions.getContentTypes();
				} else if (!this._textSearchOptions.get("disabled")) {
					options.operator = this._textSearchOptions.getOperator();
					options.proximityDistance = this._textSearchOptions.getProximityDistance();
					options.editProperty = this._textSearchOptions.authoring.value;
				}
			}

			return options;
		},

		setSelectedOptions: function(options, hide) {
			if (!options)
				options = {
					operator: "any",
					proximityDistance: 0,
					contentTypes: null
				};
			if (!this._getDisabledAttr()) {
				if (this.repository._isBox()) {
					this._boxTextSearchOptions.setContentTypes(options.contentTypes);
					this._selectedContentTypes = this._boxTextSearchOptions.getContentTypes();
				} else if (!this._textSearchOptions.get("disabled")) {
					if(hide)
						domClass.add(this._textSearchOptions._hideTextCriteriaNode, "dijitHidden");
					this._textSearchOptions.setOperator(options.operator);
					this._textSearchOptions.setAuthoringFlagSelector(options.editProperty);
					this._textSearchOptions.setProximityDistance(options.proximityDistance);
					
					this._selectedOperator = this._textSearchOptions.getOperator();
					this._selectedProximityDistance = this._textSearchOptions.getProximityDistance();
					this._selectedAdvanceSelector = this._textSearchOptions.authoring.value;
				}
			}

			this.inherited(arguments);
		},

		isHiddenSelected: function() {
			return !this.repository._isBox() && (this._selectedOperator == undefined || this._textSearchOptions.authoring.value == SearchCriterion.prototype.EDIT_PROPERTY.HIDDEN);
		},

		isAllSelected: function() {
			return this._textSearchOptions.getOperator() == this._textSearchOptions.TEXT_SEARCH_OPERATOR.ALL;
		},

		isAnySelected: function() {
			return this._textSearchOptions.getOperator() == this._textSearchOptions.TEXT_SEARCH_OPERATOR.ANY;
		},

		isProximitySelected: function() {
			return this._textSearchOptions.getOperator() == this._textSearchOptions.TEXT_SEARCH_OPERATOR.PROXIMITY;
		},

		isAdvancedSelected: function() {
			return this._textSearchOptions.getOperator() == this._textSearchOptions.TEXT_SEARCH_OPERATOR.NONE;
		},

		toggleProximityHoverHelp: function(/*Boolean*/show) {
			this._toggleOperatorHoverHelp(this._textSearchOptions.TEXT_SEARCH_OPERATOR.PROXIMITY, show);
		},

		_toggleOperatorHoverHelp: function(/*String*/operator, /*Boolean*/show) {
			var hoverHelp = this._textSearchOptions[operator + "HoverHelp"];
			if (hoverHelp && hoverHelp.domNode) {
				if (show)
					domClass.remove(hoverHelp.domNode, "dijitHidden");
				else
					domClass.add(hoverHelp.domNode, "dijitHidden");
			}
		},

		getSummary: function() {
			return this.repository._isBox() ? this._boxTextSearchOptions.getSummary() : this._textSearchOptions.getSummary();
		}
	});

});
