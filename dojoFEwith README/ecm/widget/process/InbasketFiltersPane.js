/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/event",
	"dojo/keys",
	"dijit/form/Button",
	"dijit/layout/ContentPane",
	"dijit/_Widget",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dojo/text!./templates/InbasketFiltersPane.html",
	"ecm/Logger",
	"ecm/Messages",
	"ecm/widget/CommonPropertiesPane",
	"ecm/widget/HoverHelp"
],

function(declare, lang, event, keys, Button, ContentPane, _Widget, _TemplatedMixin, _WidgetsInTemplateMixin, template, Logger, Messages, CommonPropertiesPane, HoverHelp) {

	/**
	 * @name ecm.widget.process.InbasketFiltersPane
	 * @class Provides a widget that is used to display the Filter and Reset buttons for working with the in-basket
	 *        filters. In addition, this widget displays the number of filters that are currently in effect.
	 */
	return declare("ecm.widget.process.InbasketFiltersPane", [
		_Widget,
		_TemplatedMixin,
		_WidgetsInTemplateMixin
	], {
		/** @lends ecm.widget.process.InbasketFiltersPane.prototype */

		templateString: template,
		widgetsInTemplate: true,

		constructor: function() {

		},

		postCreate: function() {
			this.connect(this.commonProperties, "onCompleteRendering", "onChangeProperties");
			this.connect(this.commonProperties, "onChange", "onChangeProperties");
			this.connect(this, "onKeyPress", "_onTabKey");
		},

		/**
		 * Sets the process in-basket to be filtered.
		 * 
		 * @param inbasket
		 *            A {@link ecm.model.ProcessInbasket} object that contains the filter criteria.
		 */
		setInbasket: function(inbasket) {
			this._filterClass = inbasket.filterClass;
			this._filterClass.retrieveAttributeDefinitions(lang.hitch(this, function(attributes) {
				this.attributes = attributes;
				for ( var i in attributes) {
					var attribute = attributes[i];
					attribute.name = attribute.name + " (" + attribute.operator + ")";
				}
				this.commonProperties.renderAttributes(attributes, null, "edit");
			}));
		},

		/**
		 * Returns an array of {@link ecm.model.AttributeDefinition} objects holding the filter criteria.
		 * 
		 * @returns {ecm.model.AttributeDefinition} object array
		 */
		getAttributes: function() {
			return this.attributes;
		},

		/**
		 * An event handler function that is called when the filter properties change.
		 */
		onChangeProperties: function() {
			// Do not disable the OK button.
			// If there is an invalid value, focus will be directed to the invalid input when the OK button is clicked.
			this.commonProperties.validate(false, false, false);
		},

		/**
		 * Method for handling TAB key <code>InbasketFiltersPane</code> as a drop-down list.
		 */
		_onTabKey: function(evt) {
			if (evt.keyCode == keys.TAB) {
				event.stop(evt);
				var fields = this.commonProperties.getFields();
				if (fields && fields.length > 0) {
					if (evt.shiftKey == false) {
						if (this.okButton.focused == true) {
							this.resetButton.focusNode.focus();
						} else if (this.resetButton.focused == true) {
							this.cancelButton.focusNode.focus();
						} else if (this.cancelButton.focused == true) {
							this.commonProperties.setFieldFocus(fields[0].name);
						} else {
							for ( var i = 0; i < fields.length; i++) {
								var attr = fields[i];
								if (attr.focused) {
									if (i < fields.length - 1) {
										this.commonProperties.setFieldFocus(fields[i + 1].name);
										break;
									} else { // ...focus was on the last field, set focus to the first enabled button
										var okButtonDisabled = this.okButton.get("disabled");
										if (okButtonDisabled) {
											this.resetButton.focusNode.focus();
										} else {
											this.okButton.focusNode.focus();
										}
										break;
									}
								}
							}
						}
					} else {
						if (this.okButton.focused == true) {
							this.commonProperties.setFieldFocus(fields[fields.length - 1].name);
						} else if (this.resetButton.focused == true) {
							var okButtonDisabled = this.okButton.get("disabled");
							if (okButtonDisabled) {
								this.commonProperties.setFieldFocus(fields[fields.length - 1].name);
							} else {
								this.okButton.focusNode.focus();
							}
						} else if (this.cancelButton.focused == true) {
							this.resetButton.focusNode.focus();
						} else {
							for ( var i = fields.length - 1; i >= 0; i--) {
								var attr = fields[i];
								if (attr.focused) {
									if (attr.focused == true && i > 0) {
										this.commonProperties.setFieldFocus(fields[i - 1].name);
										break;
									} else { // ...focus was on the first field, set focus to the Cancel button.
										this.cancelButton.focusNode.focus();
										break;
									}
								}
							}
						}
					}
				}
			}
		},

		destroy: function() {
			this.attributes = null;
			this.inherited(arguments);
		}
	});
});
