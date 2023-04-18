/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/array",
	"dojo/_base/lang",
	"dojo/_base/kernel",
	"dojo/string",
	"dijit/_WidgetBase",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"idx/form/CheckBoxList",
	"../../LoggerMixin",
	"../_HoverHelpMixin",
	"dojo/text!./templates/_FileTypeOption.html"
], function(declare, array, lang, kernel, string, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, CheckBoxList, LoggerMixin, _HoverHelpMixin, template) {

	/**
	 * @private Part of {@link ecm.widget.search.SearchMoreOptions} widget
	 * @name ecm.widget.search._FileTypeOption
	 * @class Provides a widget that is used to display the file types on which a saved search is defined to search.
	 * @augments dijit._WidgetBase
	 */
	return declare("ecm.widget.search._FileTypeOption", [
		_WidgetBase,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		_HoverHelpMixin
	], {
		/** @lends ecm.widget.search._FileTypeOption.prototype */
		templateString: template,

		postCreate: function() {
			var options = new Array();
			array.forEach(ecm.model.desktop.fileTypes, function(fileType) {
				options.push({
					label: ecm.model.desktop.configuredLabels.getLabelValue(fileType.getName(), kernel.locale),
					value: fileType.id
				});
			});
			this._select.addOption(options);

			this.inherited(arguments);
		},

		setValue: function(value) {
			this._select.set("value", value ? lang.clone(value) : null);
		},

		getValue: function() {
			return this._select.get("value");
		},

		_setDisabledAttr: function(disabled) {
			this._select.set("disabled", disabled);
		},

		_getDisabledAttr: function() {
			return this._select.get("disabled");
		},

		getSummary: function() {
			var summary = "";
			var total = this._select.get("value").length;
			if (total > 0) {
				summary = total == 1 ? ecm.messages.search_one_file_type : string.substitute(ecm.messages.search_many_file_types, [
					total
				]);
			}
			return summary;
		}
	});

});
