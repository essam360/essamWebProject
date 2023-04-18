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
	"dojo/dom-construct",
	"ecm/model/_itemUtils",
	"ecm/widget/dialog/_AddDocumentSourceItemMixin",
	"ecm/widget/dialog/AddContentItemDialog",
	"ecm/widget/virtualViewer/_BuildViewoneContentMixin"
],
function (declare, lang, array, aspect, domConstruct, itemUtils, _AddDocumentSourceItemMixin, AddContentItemDialog, _BuildViewoneContentMixin) {
	/**
	 * @name ecm.widget.virtualViewer.AddViewoneEditedItemDialog
	 * @class Provides a dialog that is used to add documents with Daeja content source to a repository.
	 * @augments ecm.widget.dialog.AddContentItemDialog
	 */
	return declare("ecm.widget.virtualViewer.AddViewoneEditedItemDialog", [
		AddContentItemDialog,
		_AddDocumentSourceItemMixin,
		_BuildViewoneContentMixin
	], {
		/** @lends ecm.widget.virtualViewer.AddViewoneEditedItemDialog.prototype */

		/**
		 * When the <code>parentFolder</code> is assigned, this boolean option overrides the default behavior for 
		 * whether or not the user is allowed to browse for a different folder.
		 * 
		 * When adding content provided by Daeja, the default behavior is to allow the user to browse to a different folder. 
		 */
		allowBrowseParentFolder: true,

		postCreate: function () {
			this.inherited(arguments);
			this.addSourceDocumentOptionNode();
			this._appendSaveAsTypeOptionNode();
			this.own(aspect.after(this.addContentItemPropertiesPane, "beforeRenderAttributes", lang.hitch(this, function(attributeDefinitions) {
				var titlePropertyName = this.addContentItemPropertiesPane.getTitlePropertyName();
				array.some(attributeDefinitions, lang.hitch(this, function(attributeDefinition) {
					if (attributeDefinition.id == titlePropertyName) {
						attributeDefinition.required = true;
						return true;
					}
				}));				
			}), true));
			this.own(aspect.after(this.addContentItemPropertiesPane, "onRenderAttributes", lang.hitch(this, function() {
				var titlePropertyName = this.addContentItemPropertiesPane.getTitlePropertyName();
				this.addContentItemPropertiesPane.setPropertyValue(titlePropertyName, this.getDaejaPartFileName());
			})));
		},

		_getAddFunctionName: function () {
			return "onViewoneBuild";
		},

		onViewoneBuild: function () {
			if (!this.isValid(true))
				return false;
			if (this.isViewoneContentSet()) {
				this.onAdd();
				return false;
			}
			return true;
		},

		getExternalContentFilename: function() {
			var filename = this.getDaejaPartFileName();
			var extension = this._getDaejaPartFileExtension();
			var nameProp = this.addContentItemPropertiesPane.getTitlePropertyName();
			var title = this.addContentItemPropertiesPane.getPropertyValue(nameProp);
			if (title) {
				filename = title;
				if (title.length < extension.length || title.indexOf(extension, title.length - extension.length) == -1)
					filename = title + extension;
			}

			return filename;
		},

		_getDaejaPartFileExtension: function() {
			var filename = this.getDaejaPartFileName();
			var dotIndex = filename ? filename.lastIndexOf(".") : -1;

			return dotIndex > -1 ? filename.substring(dotIndex, filename.length) : "";
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
