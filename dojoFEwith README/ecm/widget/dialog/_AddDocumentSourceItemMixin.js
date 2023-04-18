/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array",
	"dojo/dom-construct",
	"dojo/aspect",
	"dijit/form/Select",
	"ecm/model/_itemUtils",
	"ecm/Messages",
	"ecm/widget/dialog/_UseSourceDocumentOption"
], function(declare, lang, array, domConstruct, aspect, Select, itemUtils, Messages, _UseSourceDocumentOption) {
	/**
	 * @name ecm.widget.dialog._AddDocumentSourceItemMixin
	 * @class Provides support for adding classification options in the add document dialog
	 * @public
	 */
	return declare("ecm.widget.dialog._AddDocumentSourceItemMixin", [
	], {
		/** @lends ecm.widget.dialog._AddDocumentSourceItemMixin.prototype */

		messages: ecm.messages,
		
		sourceItems: null,

		addSourceDocumentOptionNode: function () {
			if (!(this.sourceItems instanceof Array) || this.sourceItems.length == 0)
				return;

			this._useSourceDocumentOption = new _UseSourceDocumentOption({
				sourceItems: this.sourceItems
			});
			this._useSourceDocumentOption.placeAt(this.addContentItemGeneralPane._contentTable, "first").startup();
			this.own(aspect.after(this._useSourceDocumentOption, "onUseSourceDocument", lang.hitch(this, this.toggleUsingSourceDocument), true));
		},
		
		toggleUsingSourceDocument: function (sourceItem) {
			if (this._isUsingEntryTemplate()) {
				this.toggleUsingSourceDocumentWhileUsingEntryTemplate(sourceItem);
			} else {
				if (itemUtils.getItemParentFolder(sourceItem)) {
					var handle = aspect.after(this, "_onEntryTemplatesRetrieved", lang.hitch(this, function(retrievedCount) {
						handle.remove();
						if (retrievedCount > 0)
							this.toggleUsingSourceDocumentWhileUsingEntryTemplate(sourceItem);
						else
							this.addContentItemPropertiesPane.applySourceItem(sourceItem);
					}), true);
					var folderSet = this.addContentItemGeneralPane.applySourceItem(sourceItem);
					if (!folderSet) {
						handle.remove();
						this.addContentItemPropertiesPane.applySourceItem(sourceItem);						
					}
				} else {
					this.addContentItemGeneralPane.applySourceItem(sourceItem);
					this.addContentItemPropertiesPane.applySourceItem(sourceItem);					
				}
			}
		},
		
		_isUsingEntryTemplate: function () {
			return this._entryTemplates instanceof Array && this._entryTemplates.length > 0;
		},

		toggleUsingSourceDocumentWhileUsingEntryTemplate: function (sourceItem) {
			this.addContentItemPropertiesPane.setSourceItem(sourceItem);
			if (sourceItem) {
				this.addContentItemGeneralPane.selectEntryTemplateById(sourceItem.entryTemplateId, lang.hitch(this, function(changed) {
					if (this.addContentItemGeneralPane.isEntryTemplateSelected()) {
						if (!changed) {
							sourceItem.getContentClass().retrieveAttributeDefinitions(lang.hitch(this, function() {
								this.addContentItemPropertiesPane.applySourceItem(sourceItem);
							}));
						}
					} else {
						sourceItem.getContentClass().retrieveAttributeDefinitions();
					}
				}));
			}
		},

		destroy: function() {
			this.inherited(arguments);
			if (this._useSourceDocumentOption) {
				this._useSourceDocumentOption.destroyRecursive();
				this._useSourceDocumentOption = null;
			}
		}
	});
});
