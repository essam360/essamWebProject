/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/aspect",
	"dijit/_WidgetBase",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"./_DropDownStandByMixin",
	"./DropDownLink",
	"./DropDownDialog"
], function(declare, lang, aspect, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, _DropDownStandByMixin) {

	/**
	 * @name ecm.widget._OptionsLinkMixin
	 * @class A mixin class that can be used with widgets that provide options
	 * @augments dijit._Widget
	 */
	return declare("ecm.widget._OptionsLinkMixin", [
		_WidgetBase,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		_DropDownStandByMixin
	], {
		/** @lends ecm.widget._OptionsLinkMixin.prototype */

		postCreate: function() {
			this.inherited(arguments);
			this._optionsLink.dropDown = this._optionsDialog;
			this.connect(this._optionsDialog, "onClickOK", function() {
				this.saveOptions();
				if (!this.doNotSummarizeOnClose) {
					this._optionsLink.summarize();
				}
				this._optionsLink.closeDropDown(true);
			});
			this.connect(this._optionsDialog, "onClickCancel", function() {
				this._optionsLink.closeDropDown(true);
			});
			this.own(aspect.after(this._optionsLink, "openDropDown", lang.hitch(this, function() {
				this.onOpen();
			})));
			this.connect(this._optionsLink, "closeDropDown", function() {
				this.onClose();
			});
			this._optionsDialog.watch("state", lang.hitch(this, function() {
				this._optionsDialog.setDisabledOKButton(this._optionsDialog.get("state"));
			}));

			// Check for request status dialog before dismissing the pop up content pane
			this._connectStandByHandler(this._optionsLink, this._optionsDialog.containerButtonNode);
		},

		setRepository: function(repository) {
			this.repository = repository;
			this.initialize();
		},

		initialize: function() {
			this._optionsLink.summarize();
		},

		onOpen: function() {
			this._saved = false;
		},

		onClose: function() {
			if (!this._saved && !this.ignoreRestore)
				this.restoreOptions();
		},

		summarize: function(width) {
			this._optionsLink.summarize(width);
		},

		saveOptions: function() {
			this._saved = true;
			this.onChange();
		},

		restoreOptions: function() {
		},

		onChange: function() {
		},

		getSelectedOptions: function() {
		},

		setSelectedOptions: function(options) {
			this._optionsLink.summarize();
		},

		setKeepSummaryOnDisabled: function(keepSummaryOnDisabled) {
			this._optionsLink.keepSummaryOnDisabled = keepSummaryOnDisabled;
		},

		_setDisabledAttr: function(/*Boolean*/value) {
			this._optionsLink.set("disabled", value);
			this._optionsLink.summarize();
		},

		_getDisabledAttr: function() {
			return this._optionsLink.get("disabled");
		}
	});

});
