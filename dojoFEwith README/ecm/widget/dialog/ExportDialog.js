/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/json",
	"dojo/_base/array",
	"dojo/on",
	"dojo/query",
	"dojo/request/iframe",
	"dojo/io-query",
	"dojo/string",
	"dojo/dom",
	"dojo/dom-class",
	"dojo/dom-geometry",
	"dojo/dom-prop",
	"dojo/dom-construct",
	"dojo/_base/Deferred",
	"dojo/DeferredList",
	"../../model/ContentItem",
	"../../model/Request",
	"../../Messages",
	"../../Logger",
	"../MultiValueChoicePane",
	"./BaseDialog",
	"idx/form/CheckBox",
	"dojo/text!./templates/ExportDialogContent.html"
], function(declare, //
lang, //
json, //
array, //
on, //
query, //
iframe, //
ioQuery, //
string, //
dom, // 
domClass, //
domGeom, //
domProp, // 
domConstruct, //
Deferred, //
DeferredList, //
ContentItem, //
Request, //
Messages, //
Logger, //
MultiValueChoicePane, //
BaseDialog, //
CheckBox, //
template) {
	/**
	 * @name ecm.widget.dialog.ExportDialog
	 * @class Provides a dialog box that is used to select and order items' attributes for export.
	 * @augments ecm.widget.dialog.BaseDialog
	 */
	var ExportDialog = declare("ecm.widget.dialog.ExportDialog", [
		BaseDialog
	], {
		/** @lends ecm.widget.dialog.ExportDialog.prototype */
		contentString: template,
		widgetsInTemplate: true,

		_items: null,
		_repository: null,
		_exportButton: null,
		_multiValueChoicePane: null,
		_availableAttributes: null,
		expandable: false,

		/**
		 * @private Called automatically by DOJO during the object creation process
		 */
		postCreate: function() {
			this.inherited(arguments);
			// add this dialog's html to the DOM tree
			domClass.add(this.domNode, "ecmExportDialog");
			// create the multi-value choice pane and add it to the DOM
			this._createMultiValueChoicePane();
			// set all of the other dialog attributes
			this.setResizable(true);
			this.setTitle(ecm.messages.export_properties_dialog_title);
			this.setIntroText(ecm.messages.export_properties_dialog_info);
			if (this._items.length > 1) {
				this.setMessage(string.substitute(ecm.messages.items_selected, [
					this._items.length
				]), "info");
			}
			this._exportButton = this.addButton(ecm.messages.export_properties_dialog_export_button_label, this._onClickExportButton, true, true);
			domConstruct.place(this.exportRawValuesCheckBox.domNode, this._exportButton.domNode, "before");
		},

		/**
		 * @private Creates and populates an {@link ecm.widget.MultiValueChoicePane} object within the dialog
		 */
		_createMultiValueChoicePane: function() {
			// create a new MultiValueChoicePane and add all of our data to it
			this._multiValueChoicePane = new MultiValueChoicePane({
				availableData: {
					choices: this._availableProperties,
					displayName: ecm.messages.available_heading,
					choiceListNested: false,
					dataType: "xs:string"
				},
				selectedValues: this._selectedProperties,
				isTree: false,
				editable: true,
				hasSorting: true,
				hideAvailableOnAdd: true,
				allowDuplicateValues: false
			});
			// DOJO recommends we call the startup function on dynamic DOM object creation
			this._multiValueChoicePane.startup();
			// append the MultiValueChoicePane to the DOM
			this._multiValueChoiceContainer.appendChild(this._multiValueChoicePane.domNode);
		},

		/**
		 * Makes the dialog box visible and sets up the <code>onChanged</code> behavior. This function should not be
		 * called outside of the static <code>ExportDialog.open</code> method.
		 */
		show: function() {
			this.inherited(arguments);
			this._onShow();
			this._multiValueChoicePane.onShow();
			this._onChanged();
			query('[class*="dijitButtonNode"]', this._multiValueChoicePane.domNode).on("click", lang.hitch(this, "_onChanged"));
		},

		/**
		 * Resizes the dialog box, padding the {@link ecm.widget.MultiValueChoicePane} widget. Called automatically by
		 * Dojo during resize.
		 */
		resize: function() {
			this.inherited(arguments);
			var size = domGeom.getMarginBox(this._multiValueChoiceContainer);
			if (size && size.h > 0) {
				this._multiValueChoicePane.resize({
					w: size.w,
					h: size.h
				});
			}
		},

		/**
		 * The action handler for the "onChanged" action. Validates the current export selection.
		 */
		_onChanged: function() {
			this._multiValueChoicePane.onSave();
			var selectedAttributes = this._multiValueChoicePane.getValue();
			this._exportButton.set("disabled", selectedAttributes.length > 0 ? false : true);
		},

		_getMappedAttributeId: function(item, mappingId) {

			if (!this._attributeMappings)
				return mappingId;
			var repoId = item.repository ? item.repository.id : item.repositoryId;
			var mapping = this._attributeMappings[mappingId];
			if (!repoId || !mapping)
				return mappingId;

			var attrib = mapping.getRepositoryAttribute(repoId);

			return attrib ? attrib.id : mappingId;

		},

		/**
		 * The action handler for the "Export" button's "onClick" action. Collects the selected export attributes and
		 * stuffs them into a JSON object and passes that object to the mid-tier (which builds and returns the CSV file)
		 */
		_onClickExportButton: function() {
			// Export the items in hand if working with a CRS or an OD repository since all attributes are loaded;
			// otherwise, retrieve the items in case any of the selected attributes are not loaded
			this._multiValueChoicePane.onSave();
			if (this._attributeMappings || this._repository.type == "od") {
				this._export();
			} else {
				// See if any of the selected columns are social data.
				var retrieveSocialData = false;
				var selectedAttributes = this._multiValueChoicePane._sloshBucket.getData(this._multiValueChoicePane._sloshBucket.getSelectedValuesGrid());
				for ( var i in selectedAttributes) {
					var selectedAttribute = selectedAttributes[i];
					if (selectedAttribute.value == "ClbDownloadCount" || selectedAttribute.value == "ClbRecommendationCount" || 
							selectedAttribute.value == "ClbCommentCount" || selectedAttribute.value == "ClbTags"){
						
						retrieveSocialData = true;
						break;
					}
				}
				var exportCM8ChildComponents = null;
				if (this._repository._isCM()) {
					exportCM8ChildComponents = true;
				}
				
				var ids = array.map(this._items, lang.hitch(this, function(item) {
					return item.id;
				}));
				this._repository._teamspaceItemsCache = null;
				this._repository.retrieveMultiItem(ids, lang.hitch(this, function(items) {
					this._items = items;
					this._export();
				}), null, null, null, null, retrieveSocialData, exportCM8ChildComponents);
			}
		},

		_export: function() {
			// collect and assemble all of the selected attributes
			var exportColumns = new Array();
			var selectedAttr;
			var exportColumn;
			var selectedAttributes = this._multiValueChoicePane._sloshBucket.getData(this._multiValueChoicePane._sloshBucket.getSelectedValuesGrid());
			for ( var i in selectedAttributes) {
				selectedAttr = selectedAttributes[i];
				exportColumn = new Object();
				exportColumn["id"] = selectedAttr["value"];
				exportColumn["label"] = selectedAttr["label"];
				exportColumns.push(exportColumn);
			}
			var exportRows = new Array();
			var item;
			var exportRow;
			var attrId;
			var attrValue;
			var mappedId;
			var attrValueStr;
			var exportRawValues = this.exportRawValuesCheckBox.get("checked");
			for ( var i in this._items) {
				item = this._items[i];
				exportRow = new Object();
				for ( var j in exportColumns) {
					attrId = exportColumns[j]["id"];
					mappedId = attrId;

					if (this._attributeMappings) {
						mappedId = this._getMappedAttributeId(item, mappedId);
					}
					if (mappedId == "{CLASS}") {
						var contentClass = item.isInstanceOf && item.isInstanceOf(ContentItem) ? item.getContentClass() : null;
						if (contentClass)
							attrValue = exportRawValues ? contentClass.id : contentClass.name;
						if (!attrValue)
							attrValue = "";
					} else if (exportRawValues) {
						attrValue = item.attributes && item.attributes[mappedId] != null ? item.attributes[mappedId] : "";
					} else {
						attrValue = item.getDisplayValue(mappedId) || "";
					}
					if (lang.isArray(attrValue)) {
						attrValueStr = attrValue[0] || "";
						for ( var k = 1; k < attrValue.length; k++) {
							attrValueStr += ", ";
							attrValueStr += attrValue[k];
						}
						attrValue = attrValueStr;
					}
					exportRow[attrId] = attrValue;
				}
				exportRows.push(exportRow);
			}
			// construct the form we use to send the data back to the mid-tier
			var params = new Object();
			params["desktop"] = ecm.model.desktop.id;
			params["alt_output"] = "CSV";
			var url = ecm.model.Request.getServiceRequestUrl("export", "", params);

			params = new Object();
			params["id"] = "exportPropertiesForm";
			params["name"] = "exportPropertiesForm";
			params["method"] = "POST";
			params["accept-charset"] = "UTF-8";
			params["enctype"] = "application/x-www-form-urlencoded";
			var form = domConstruct.create("form", params, this.domNode, "last");

			// now construct the input elements
			var params = new Object();
			params["type"] = "hidden";
			params["name"] = "exportColumns";
			params["value"] = json.toJson(exportColumns);
			domConstruct.create("input", params, form, "last");

			params["name"] = "exportRows";
			params["value"] = json.toJson(exportRows);
			domConstruct.create("input", params, form, "last");

			// Security tokens should never be in the URL of the request. They MUST go in the
			// body of the request.
			params["name"] = "security_token";
			params["value"] = Request._security_token;
			domConstruct.create("input", params, form, "last");

			this._clearExportDeferred();

			// Following code works around the issue of posting the request multiple times.
			iframe._frame = iframe.create(iframe._iframeName, 'onload();');
			iframe._currentDfd = null; // Force Dfd to be empty in case prior calls have not been cleared

			this._exportDeferred = iframe(url, {
				handleAs: "html",
				form: form
			});
			// cleanup and close out
			domConstruct.destroy(form);
			this.destroy();
		},

		// Call this to clear any outstanding export deferred object.
		// If a user cancels the export the export deferred object is not cancelled,
		// and it never completes - indefinitely blocking the next iframe.send() request.
		_clearExportDeferred: function() {
			if (this._exportDeferred != null) {
				this._exportDeferred.cancel();
				this._exportDeferred = null;
			}
		}

	});

	/**
	 * Singleton instance of the ExportDialog
	 * 
	 * @private
	 */
	ecm.widget.dialog.ExportDialogObj = null;

	/**
	 * Opens the dialog box. USE THIS FUNCTION TO OPEN AN EXPORT DIALOG (do not simply create a new Export Dialog
	 * object). This method first grabs a list of up-to-date attributes for each item.
	 * 
	 * @param repository
	 *            The {@link ecm.model.repository} object for the items.
	 * @param items
	 *            The {@link ecm.model.ContentItem} objects to export.
	 * @param resultSet
	 *            An optional {@link ecm.model.ResultSet} object which defines the columns of the items being exported.
	 *            The {@link ecm.widget.layout.CommonActionsHandler} object used by the export action passes this
	 *            parameter.
	 * @memberof ecm.widget.dialog.ExportDialog
	 */
	ExportDialog.open = function(repository, items, resultSet) {
		if (!items || !lang.isArray(items) || items.length == 0)
			return;

		var item = items[0], selectedProperties = [];
		resultSet = resultSet || item.resultSet;
		if (resultSet && resultSet.structure) {
			var cells = resultSet.structure.cells;
			for ( var i in cells) {
				for ( var j in cells[i]) {
					var id = cells[i][j].field;
					if (id != "multiStateIcon" //
							&& id != "mimeTypeIcon" //
							&& item.attributeTypes[id] != "xs:score" //
							&& item.attributeTypes[id] != "xs:summary" //
							&& item.attributeTypes[id] != "xs:highlight")
						selectedProperties.push(id == "cmis:name" ? "{NAME}" : id); // standardize on pseudo name (browse uses "cmis:name" while search uses "{NAME}")
				}
			}
		}
		if (selectedProperties.length == 0 && repository) {
			array.map(repository.getRepositoryConfig().getFolderDefaultColumns(), function(col) {
				selectedProperties.push(col == "cmis:name" ? "{NAME}" : col); // standardize on pseudo name (browse uses "cmis:name" while search uses "{NAME}")
			});
		}

		var attributeMappings = resultSet ? resultSet._attributeMappings : null;
		if (attributeMappings) { // CRS
			var availableProperties = [];
			for ( var id in attributeMappings) {
				availableProperties.push({
					value: id,
					displayName: attributeMappings[id].name
				});
			}
			if (array.indexOf(selectedProperties, "{CLASS}") > -1) {
				availableProperties.push({
					value: "{CLASS}",
					displayName: ecm.messages.class_label_no_html_encode
				});
			}
			availableProperties.sort(function(a, b) {
				return a.displayName.toUpperCase().localeCompare(b.displayName.toUpperCase());
			});
			ExportDialog._open(repository, items, availableProperties, selectedProperties, attributeMappings);
		} else if (repository.type == "od") {
			item.getContentClass().retrieveAttributeDefinitions(function(attributes) {
				var availableProperties = array.map(attributes, function(attrib) {
					return {
						value: attrib.id,
						displayName: attrib.name
					};
				});
				availableProperties.sort(function(a, b) {
					return a.displayName.toUpperCase().localeCompare(b.displayName.toUpperCase());
				});
				ExportDialog._open(repository, items, availableProperties, selectedProperties);
			});
		} else {
			var classNames = [];
			array.forEach(items, function(item) {
				if (item.template && array.indexOf(classNames, item.template) == -1)
					classNames.push(item.template);
			});
			ecm.model.Request.invokeService("getExportProperties", repository.type, {
				repositoryId: repository.id,
				objectStoreId: repository.type == "p8" && items[0].objectStore ? items[0].objectStore.id : null,
				classes: classNames.join(",")
			}, function(response) {
				// Remove selected properties that don't apply to the selected items
				var availableProperties = response.properties || [], availablePropMap = {};
				for ( var i in availableProperties)
					availablePropMap[availableProperties[i].value] = availableProperties[i];
				selectedProperties = array.filter(selectedProperties, function(prop) {
					return prop in availablePropMap;
				});
				ExportDialog._open(repository, items, availableProperties, selectedProperties);
			});
		}
	};

	/**
	 * @private
	 */
	ExportDialog._open = function(repository, items, availableProperties, selectedProperties, attributeMappings) {
		if (ecm.widget.dialog.ExportDialogObj)
			ecm.widget.dialog.ExportDialogObj.destroy();

		ecm.widget.dialog.ExportDialogObj = new ExportDialog({
			_repository: repository,
			_items: items,
			_availableProperties: availableProperties,
			_selectedProperties: selectedProperties,
			_attributeMappings: attributeMappings
		});
		ecm.widget.dialog.ExportDialogObj.startup();
		ecm.widget.dialog.ExportDialogObj.show();
	};

	return ExportDialog;
});
