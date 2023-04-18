/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/array",
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dijit/_WidgetBase",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/a11y",
	"dijit/focus",
	"ecm/LoggerMixin",
	"ecm/MessagesMixin",
	"ecm/model/SearchConfiguration",
	"idx/form/CheckBox",
	"idx/form/CheckBoxList",
	"dojo/text!./templates/_BoxTextSearchOptions.html"
], function(array, declare, lang, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, a11y, focus, LoggerMixin, MessagesMixin, SearchConfiguration, CheckBox, CheckBoxList, template) {

	/**
	 * @private Part of {@link ecm.widget.search.TextSearchOptions} widget
	 * @name ecm.widget.search._BoxTextSearchOptions
	 * @class Provides a widget used for limiting Box searches to specific types of indexed content (name, description,
	 *        file content, comments, or tags).
	 * @augments dijit._WidgetBase
	 */
	return declare("ecm.widget.search._BoxTextSearchOptions", [
		_WidgetBase,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		MessagesMixin
	], {
		/** @lends ecm.widget.search._BoxTextSearchOptions.prototype */

		templateString: template,

		initialize: function(objectType) {
			var t = this, msg = t.messages, ot = SearchConfiguration.prototype.OBJECT_TYPE, opts = [], select = t._contentTypesSelect;
			opts.push({
				label: msg.Name,
				value: "name"
			});
			opts.push({
				label: msg.description,
				value: "description"
			});
			if (objectType != ot.FOLDER && objectType != ot.WEB_LINK) {
				opts.push({
					label: msg.box_text_search_options_search_within_file_content,
					value: "file_content"
				});
				opts.push({
					label: msg.comments,
					value: "comments"
				});
			}
			if (objectType != ot.WEB_LINK) {
				opts.push({
					label: msg.box_text_search_options_search_within_tags,
					value: "tags"
				});
			}
			select.removeOption(select.getOptions());
			select.addOption(opts);
		},

		setContentTypes: function(contentTypes) {
			this._contentTypesSelect.set("value", contentTypes instanceof Array ? lang.clone(contentTypes) : null);
		},

		getContentTypes: function() {
			return this._contentTypesSelect.get("value");
		},

		getSummary: function() {
			var t = this, opts = t._contentTypesSelect.getOptions(), types = t.getContentTypes(), msg = t.messages;
			opts = array.filter(opts, function(opt) {
				return array.indexOf(types, opt.value) != -1;
			});

			return opts && opts.length ? array.map(opts, function(opt) {
				return opt.label;
			}).join(", ") : msg.box_text_search_options_search_within_everything;
		},

		_onEverythingCheckBoxClick: function(evt) {
			var t = this, select = t._contentTypesSelect;
			focus.focus(a11y.getFirstInTabbingOrder(select.domNode) || select.domNode);
			t.setContentTypes(null);
		},

		_onContentTypesSelectChange: function() {
			var t = this, cb = t._everythingCheckBox, types = t.getContentTypes(), empty = !types || !types.length;
			cb.set("disabled", empty);
			cb.set("checked", empty);
		}
	});

});
