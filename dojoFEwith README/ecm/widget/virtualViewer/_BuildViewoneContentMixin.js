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
	"dijit/form/Select",
	"ecm/Messages",
	"ecm/widget/virtualViewer/_ViewoneSaveAsTypes"
], function(declare, lang, array, domConstruct, Select, Messages, SaveAsTypes) {
	/**
	 * @name ecm.widget.virtualViewer._BuildViewoneContentMixin
	 * @class Provides support for handling content provided by the Daeja ViewOne Virtual viewer in AddViewoneEditedItemDialog and CheckInViewoneEditedItemDialog.
	 */
	return declare("ecm.widget.virtualViewer._BuildViewoneContentMixin", [
	], {
		/** @lends ecm.widget.virtualViewer._BuildViewoneContentMixin.prototype */
		
		saveAsTypeShown: false,
		saveAsTypeDefault: null,
		
		_appendSaveAsTypeOptionNode: function () {
			if (!this.saveAsTypeShown)
				return;

			var saveAsTypeId = this.addContentItemGeneralPane.id + "_saveAsType";
			var node = domConstruct.toDom('<tr data-dojo-attach-point="_saveAsTypeNode"><td class="propertyRowLabel"><label for="' + saveAsTypeId + '">' + this.messages.viewer_add_dialog_save_as_type + '</label></td><td class="propertyRowValue"></td></tr>');
			this._saveAsTypeSelect = new Select({
				id: saveAsTypeId,
				name: saveAsTypeId,
				options: SaveAsTypes.getSelectOptions(this.saveAsTypeDefault),
				onChange: lang.hitch(this, function (value) {
					this.setViewoneContentMimeType(value);
				})
			});
			this._saveAsTypeSelect.placeAt(node.childNodes[1]).startup();
			domConstruct.place(node, this.addContentItemGeneralPane._contentTable);
		},

		getViewoneContentMimeType: function () {
			var source = this.getViewoneContentSource();
			return source ? source.mimeType : null;
		},

		setViewoneContentMimeType: function (mimeType) {
			var source = this.getViewoneContentSource();
			if (source) {
				source.mimeType = mimeType;
				this._updateViewoneFileExtension(mimeType);
			}
		},

		_updateViewoneFileExtension: function(mimeType) {
			var filename = this.getDaejaPartFileName();
			if (!filename)
				return;
			var dotIndex = filename.lastIndexOf(".");
			var fromExtension = dotIndex > -1 ? filename.substring(dotIndex, filename.length) : "";
			var toExtension = SaveAsTypes.getMimeTypeExtension(mimeType);
			if (toExtension && toExtension != fromExtension) {
				var newName = filename.substring(0, dotIndex > -1 ? dotIndex : filename.length) + toExtension;
				this.setDaejaPartFileName(newName);
				this._updateTitleBasedOnFilename(filename, newName);
			}
		},

		_updateTitleBasedOnFilename: function(oldFilename, newFilename) {
			var titlePropertyName = this.addContentItemPropertiesPane.getTitlePropertyName();
			if (titlePropertyName && this.addContentItemPropertiesPane._commonProperties) {
				var title = this.addContentItemPropertiesPane.getPropertyValue(titlePropertyName);
				if (!title || title == oldFilename) {
					var attrDef = this.addContentItemPropertiesPane._commonProperties.attributeDefinitionsById[titlePropertyName];
					if (attrDef) {
						if (!attrDef.dataType || (attrDef.dataType.indexOf && attrDef.dataType.indexOf("xs:string") > -1)) {
							this.addContentItemPropertiesPane.setPropertyValue(titlePropertyName, newFilename);
						}
					}
				}
			}
		},

		getViewoneContentSource: function () {
			var source = [{}];
			var content = this.getDaejaContent();
			if (content instanceof Array) {
				source = array.filter(this.getDaejaContent(), function (source) {
					return source.type == "document"
				});
			} else if (content.url instanceof Array && content.url.length > 0) {
				source[0].url = content.url[0];
				source[0].mimeType = content.mimeType[0];
			}
			return source.length > 0 ? source[0] : null;
		},

		isViewoneContentSet: function () {
			var source = this.getViewoneContentSource();
			return source && source.url;
		},

		setDaejaContent: function(daejaContent, daejaPartFileName) {
			this.inherited(arguments);
			var ids = array.map(this.sourceItems, function(item) {
				return item.id
			});
			if (this._daejaContent instanceof Array) {
				this._daejaContent.push({
					type: "metadata",
					sourceItemIds: ids
				});
			} else {
				this._daejaContent.sourceItemIds = ids;
			}
		},

		destroy: function() {
			this.inherited(arguments);

			if (this._saveAsTypeSelect) {
				this._saveAsTypeSelect.destroyRecursive();
				this._saveAsTypeSelect = null;
			}
		}
	});
});
