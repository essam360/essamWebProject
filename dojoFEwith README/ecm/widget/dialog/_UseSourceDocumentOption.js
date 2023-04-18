/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array",
	"dojo/aspect",
	"dojo/dom-style",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/_Widget",
	"dijit/form/Select",
	"idx/html",
	"ecm/MessagesMixin",
	"ecm/LoggerMixin",
	"ecm/model/_itemUtils",
	"ecm/model/Desktop",
	"ecm/model/Repository",
	"ecm/widget/CheckBox",
	"ecm/widget/HoverHelp",
	"dojo/text!./templates/_UseSourceDocumentOption.html"
],
function (declare, lang, array, aspect, domStyle, _TemplatedMixin, _WidgetsInTemplateMixin, _Widget, Select, idxHtml, MessagesMixin, LoggerMixin, itemUtils, Desktop, Repository, CheckBox, HoverHelp, template) {

return declare("ecm.widget.dialog._UseSourceDocumentOption", [
	_Widget,
	_TemplatedMixin,
	_WidgetsInTemplateMixin,
	LoggerMixin,
	MessagesMixin
], {
	/** @lends ecm.widget.dialog._UseSourceDocumentOption.prototype */
	templateString: template,
	widgetsInTemplate: true,

	postCreate: function () {
		this.inherited(arguments);
		if (!(this.sourceItems instanceof Array) || this.sourceItems.length == 0) {
			domStyle.set(this.domNode, "display", "none");
			return;
		}

		this._selectedSourceItem = this.sourceItems[0];
		this._sourceItemsSelect.set("options", this._getSourceItemSelectOptions());
		this.own(aspect.after(this._useSourceCheckbox, "onChange", lang.hitch(this, function (checked) {
			if (checked)
				this._useSourceItem();
			else
				this.onUseSourceDocument();
			this._sourceItemsSelect.set("disabled", !checked);
		}), true));
		if (this.sourceItems.length > 1) {
			domStyle.set(this._sourceItemName, "display", "none");
			this.own(aspect.after(this._sourceItemsSelect, "onChange", lang.hitch(this, function (id) {
				array.some(this.sourceItems, lang.hitch(this, function (item) {
					var found = item.id == id;
					if (found)
						this._selectedSourceItem = item;
					return found;
				}));
				this._useSourceItem();
			}), true));
			this._sourceItemsSelect.set("disabled", true);
		} else {
			domStyle.set(this._sourceItemsSelect.domNode, "display", "none");
			this._sourceItemName.innerHTML = idxHtml.escapeHTML(this.sourceItems[0].name);
		}
	},

	_getSourceItemSelectOptions: function () {
		var options = array.map(this.sourceItems, function (item) {
			return {
				label: item.name,
				value: item.id
			};
		});
		return options;
	},

	_useSourceItem: function() {
		var item = this._getRetrievedSourceItem();
		if (item)
			this.onUseSourceDocument(item);
		else
			this._retrieveSourceItemBeforeUsing();
	},

	_getRetrievedSourceItem: function() {
		if (!this._retrievedItems)
			this._retrievedItems = {};
		return this._retrievedItems[this._selectedSourceItem.id];
	},

	_retrieveSourceItemBeforeUsing: function() {
		var repository = this._selectedSourceItem.repository;
		if (repository instanceof Repository) {
			this._retrieveSourceItemAttributesBeforeUsing(this._selectedSourceItem);
		} else {
			repository = Desktop.getRepository(repository.id);
			repository.retrieveItem(this._selectedSourceItem.id, lang.hitch(this, function(item) {
				var parentId = this._getParentId(this._selectedSourceItem);
				if (parentId) {
					repository.retrieveItem(parentId, lang.hitch(this, function(parent) {
						item.parent = parent;
						this._retrieveSourceItemAttributesBeforeUsing(item);
					}));
				} else {
					this._retrieveSourceItemAttributesBeforeUsing(item);
				}
			}), this._selectedSourceItem.template, "current", this._selectedSourceItem.vsId);
		}
	},

	_getParentId: function(item) {
		var parent = itemUtils.getItemParentFolder(item);
		return parent ? parent.id : null;
	},

	_retrieveSourceItemAttributesBeforeUsing: function(item) {
		item.retrieveAttributes(lang.hitch(this, function() {
			this._retrievedItems[item.id] = item;
			this.onUseSourceDocument(item);
		}));
	},

	onUseSourceDocument: function (sourceItem) {
	}
});

});
