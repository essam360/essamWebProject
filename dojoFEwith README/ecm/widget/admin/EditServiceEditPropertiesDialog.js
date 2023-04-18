/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/dom-class",
	"dojo/_base/array",
	"dojo/dom-attr",
	"dojo/dom-style",
	"dojo/aspect",
	"dojo/string",
	"dijit/focus",
	"dojo/io-query",
	"ecm/model/Request",
	"ecm/model/ContentItem",
	"ecm/model/AttributeDefinition",
	"ecm/widget/dialog/EditPropertiesDialog"
	],
	function (declare, lang, domClass, array, domAttr, domStyle, aspect, string, focus, ioQuery, Request, ContentItem, AttributeDefinition, EditPropertiesDialog) {
	
	return declare("ecm.widget.admin.EditServiceEditPropertiesDialog", [ EditPropertiesDialog ], {
		
		postCreate: function() {
			this.inherited(arguments);
		},	
		
		show: function(item, callback, teamspace, entryTemplate) {
			this.inherited(arguments);
		},
		
		/**
		 * Called when the ok/save button is clicked. Validates the data and saves it.
		 */
		onSave: function() {
			this._changeDocumentName();		
			this.inherited(arguments); 
		},
		
		/**
		 *  private method
		 */
		_changeDocumentName: function() {
			if (this._itemEditPane && this._itemEditPane._itemPropertiesPane && this._itemEditPane._itemPropertiesPane._commonProperties) {	
				var fileName = "";				
				var documentName = "";
				var item = null;
			} else {
				return;
			}		
			if (this._itemEditPane._itemPropertiesPane._item) { 
				fileName = this._itemEditPane._itemPropertiesPane._item.filename;
				item = this._itemEditPane._itemPropertiesPane._item;
			}
			
			if (item.repository.type == "cm") {
				documentName = this._itemEditPane._itemPropertiesPane._commonProperties.getPropertyValue("ICM$NAME");
			} else {
				documentName = this._itemEditPane._itemPropertiesPane._commonProperties.getPropertyValue("DocumentTitle");
			}			

			if (documentName.length == 0) {
				if (item.repository.type == "cm") {
					this._itemEditPane._itemPropertiesPane._commonProperties.setPropertyValue("ICM$NAME",fileName);
				} else {
					this._itemEditPane._itemPropertiesPane._commonProperties.setPropertyValue("DocumentTitle",fileName);
				}
			} else {
				var index = fileName.lastIndexOf(".");
				if (index != -1) {
					var ext = fileName.substring(index);
					if (ext.length > 1) {  //filename has no extension but only "."
						var documentNameIndex = documentName.lastIndexOf(".");
						if (ext != documentName.substring(documentNameIndex)) {
							documentName += ext;
							if (item.repository.type == "cm") {
								this._itemEditPane._itemPropertiesPane._commonProperties.setPropertyValue("ICM$NAME",documentName);
							} else {
								this._itemEditPane._itemPropertiesPane._commonProperties.setPropertyValue("DocumentTitle",documentName);
							}
						}
					}
			    }
			}			
		
		},

	});
});
