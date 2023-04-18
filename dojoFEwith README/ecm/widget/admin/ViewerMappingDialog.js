/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/sniff",
	"dojo/aspect",
	"dojo/dom-class",
	"dojo/store/Memory",
	"dijit/form/Button",
	"dijit/layout/ContentPane",
	"ecm/MessagesMixin",
	"idx/widget/SloshBucket",
	"idx/layout/BorderContainer",
	"idx/html",
	"ecm/widget/CheckBox",
	"ecm/widget/ValidationTextBox",
	"ecm/widget/FilteringSelect",
	"ecm/widget/HoverHelp",
	"ecm/widget/dialog/BaseDialog",
	"ecm/widget/dialog/MessageDialog",
	"dojo/text!./templates/ViewerMappingDialogContent.html"
], function(declare, lang, has, aspect, domClass, MemoryStore, Button, ContentPane, MessagesMixin, SloshBucket, BorderContainer, idxHtml, CheckBox, ValidationTextBox, FilteringSelect, HoverHelp, BaseDialog, MessageDialog, template) {

	/**
	 * @private Part of the NavigatorAdminPane widget.
	 * @name ecm.widget.admin.ViewerMappingDialog
	 * @class Provides a dialog box to create or edit a viewer map.
	 * @augments ecm.widget.dialog.BaseDialog
	 */

	return declare("ecm.widget.admin.ViewerMappingDialog", [
		BaseDialog,
		MessagesMixin
	], {
		/** @lends ecm.widget.admin.ViewerMappingDialog.prototype */

		contentString: template,
		widgetsInTemplate: true,

		postCreate: function() {
			this.inherited(arguments);
			domClass.add(this.domNode, "ecmViewerMappingDialog");
			this.setMaximized(true);
			this.setSizeToViewportRatio(true);
			this.setIntroText(this.messages.admin_viewer_dialog_instructions);
			this.okButton = this.addButton(this.messages.ok, "_saveMapping", true, true);

			this.anyMimeTypeCheckbox.setHoverHelp(this.anyMimeTypeCheckboxHoverHelp);
			this.previewOnlyCheckbox.setHoverHelp(this.previewOnlyCheckboxHoverHelp);

			this.addMimeTypeButton.set("disabled", true);
			this.inputMimeField.pattern = '([^,])*';
			this.inputMimeField.invalidMessage = this.messages.file_type_input_invalid;

			this.own(aspect.after(this.sloshBucket, "onAddRemove", lang.hitch(this, function() {
				this.okButton.set('disabled', !this._validateData()); // Disable OK button if all data isn't filled out successfully
			})));
		},

		show: function(servers, viewerDefs, contentTypes, editData) {
			this.setTitle(editData ? this.messages.admin_viewer_dialog_title : this.messages.admin_viewer_dialog_new_title);
			this._servers = servers;
			this._viewerDefs = viewerDefs;
			this._contentTypes = contentTypes;
			this._editData = editData;
			this._loadData();
			this.okButton.set("disabled", true);
			this.inherited(arguments);
		},

		_isEdit: function() {
			return this._editData != undefined && this._editData;
		},

		_loadData: function() {
			this.inputMimeField.set("value", "");
			this.inputMimeField.set("disabled", false);
			this.anyMimeTypeCheckbox.set("checked", false);

			// Load the server types
			var firstSeverType = "";
			var serverTypes = [];
			var firstServerType;
			for (var i = 0; i < this._servers.length; i++) {
				var serverObj = this._servers[i];
				var label = this._getLabelUsingKey(serverObj.getLabelKey());
				label = label == "" ? serverObj.getType() : label;
				if (i == 0) {
					firstServerType = serverObj.getType();
				}
				serverTypes.push({
					label: label,
					id: serverObj.getType()
				});
			}
			serverTypes.push({
				label: this.messages.repository_type_any,
				id: " "
			});
			this.serverTypeField.set("store", new MemoryStore({
				data: serverTypes
			}));

			if (this._editData) {
				var serverType = this._editData.serverType;
				if (serverType == "") {
					serverType = " "; // id for all/any server types
				}
				this._previousServerType = serverType;
				this.serverTypeField.set("value", serverType);

				// Load viewers
				this._loadViewers(serverType);
				var viewer = this._editData.viewer;
				this._previousViewerID = viewer;
				this.viewerField.set("value", viewer);

				this.previewOnlyCheckbox.set("checked", this._editData.previewOnly);

				// Load content types
				setTimeout(lang.hitch(this, function() {
					this._loadContentTypes(viewer, this._editData.contentTypes);
					if (this._editData.contentTypes.length == 0) {
						this.anyMimeTypeCheckbox.set("checked", true);
						this.sloshBucket.set("disabled", false);
					}
					this._onFieldChange();
				}, 100));

			} else { // adding new mapping
				var serverType = firstServerType;
				this._previousServerType = serverType;
				this.serverTypeField.set("value", serverType);

				// Load viewers
				var firstViewerID = this._loadViewers(serverType);
				this._previousViewerID = firstViewerID;
				this.viewerField.set("value", firstViewerID);

				// Load content types
				setTimeout(lang.hitch(this, function() {
					this._loadContentTypes(firstViewerID, []);
					this._onFieldChange();
				}, 100));
			}

			this._refreshPreviewCheckbox();
		},

		_isAnyMimeTypeChecked: function() {
			return this.anyMimeTypeCheckbox.get("checked");
		},

		_isPreviewOnlyChecked: function() {
			return this.previewOnlyCheckbox.get("checked");
		},

		_onServerTypeChange: function() {
			var serverType = this.serverTypeField.get("value");
			if (this._previousServerType != serverType) {
				this._previousServerType = serverType;
				var firstViewerID = this._loadViewers(serverType);
				this._previousViewerID = firstViewerID;
				this.viewerField.set("value", firstViewerID);
				this._loadContentTypes(firstViewerID, []);
				this._onFieldChange();
			}
		},

		_onViewerChange: function() {
			var viewerID = this.viewerField.get("value");
			if (this._previousViewerID != viewerID) {
				this._previousViewerID = viewerID;
				this._loadContentTypes(viewerID, []);
				this.anyMimeTypeCheckbox.set("checked", false);
				this._onFieldChange();
			}
		},

		_loadViewers: function(serverType) {
			var viewerData = [];
			var firstViewerID = "";
			if (this._viewerDefs) {
				for (var i = 0; i < this._viewerDefs.length; i++) {
					var viewerDefObj = this._viewerDefs[i];
					var viewerID = viewerDefObj.id;
					if (viewerDefObj.supportsServerType(serverType, this._servers)) {
						if (!firstViewerID) {
							firstViewerID = viewerID;
						}
						viewerData.push({
							label: viewerDefObj.getLabel(),
							id: viewerID
						});
					}
				}
			}
			this.viewerField.set("store", new MemoryStore({
				data: viewerData
			}));
			return firstViewerID;
		},

		_loadContentTypes: function(viewerID, selectedContentTypes) {
			var availableConentTypes = [];
			if (this._contentTypes) {
				for (var i = 0; i < this._contentTypes.length; i++) {
					var contentTypeObj = this._contentTypes[i];
					if (contentTypeObj.supportsViewer(viewerID)) {
						var contentTypeID = contentTypeObj.id;
						availableConentTypes.push({
							label: idxHtml.unescapeHTML( contentTypeID ),
							value: idxHtml.unescapeHTML( contentTypeID ),
							id: idxHtml.unescapeHTML( contentTypeID )
						});
					}
				}
			}
			var availableStore = new MemoryStore({
				data: availableConentTypes
			});
			var availableStructure = [
				{
					field: "label",
					name: this.messages.file_type_available,
					width: "100%"
				}
			];
			this.sloshBucket.setAvailableGridData(availableStore, availableStructure);
			if (has("text-direction") && this.sloshBucket.availableGrid) {
				this.sloshBucket.availableGrid.set("textDir", has("text-direction"));
			}

			var selectedContentTypeItems = [];
			if (selectedContentTypes != undefined && selectedContentTypes && selectedContentTypes.length > 0) {
				for (var i = 0; i < selectedContentTypes.length; i++) {
					var contentType = selectedContentTypes[i];
					if (contentType && contentType != "") {
						var label = contentType;
						selectedContentTypeItems.push({
							label: idxHtml.unescapeHTML( label ),
							value: idxHtml.unescapeHTML( contentType ),
							id: idxHtml.unescapeHTML( contentType ),
							order: i
						});
					}
				}
			}
			var selectedStore = new MemoryStore({
				data: selectedContentTypeItems
			});
			var selectedStructure = [
				{
					field: "label",
					name: this.messages.file_type_selected,
					width: "100%"
				}
			];
			this.sloshBucket.setSelectedGridData(selectedStore, selectedStructure);
			if (has("text-direction") && this.sloshBucket.selectedGrid) {
				this.sloshBucket.selectedGrid.set("textDir", has("text-direction"));
			}
			this.sloshBucket.set("disabled", false);
		},

		_onAnyCheckboxChange: function() {
			this._onFieldChange();
			var checked = this._isAnyMimeTypeChecked();
			if (checked) {
				var viewer = this.viewerField.get("value");
				if (viewer == "browser" || viewer == "ajaxViewer" || viewer == "appletViewer" || viewer == "htmlConversion" || viewer == "pdfConversion") {
					// ok to have these viewers for any mime type
				} else {
					var dialog = new MessageDialog({
						buttonLabel: this.messages.admin_warning_label,
						text: this.messages.file_type_any_selected_message
					});
					dialog.show();
				}
			}
		},

		_onPreviewCheckboxChange: function() {
			this._onFieldChange();
		},

		_refreshPreviewCheckbox: function(viewerID) {
			if (!viewerID) {
				viewerID = this._previousViewerID;
			}

			var viewer = ecm.model.desktop.getViewer(viewerID);

			if (viewer != null && viewer.isPreviewViewer === true) {
				this.previewOnlyCheckbox.set("disabled", false);
			} else {
				this.previewOnlyCheckbox.set("disabled", true);
				this.previewOnlyCheckbox.set("checked", false);
			}
		},

		_onFieldChange: function() {
			var checked = this._isAnyMimeTypeChecked();
			this.sloshBucket.set("disabled", checked); // If any is checked, then disable the sloshbucket
			this.inputMimeField.set("disabled", checked);
			this.addMimeTypeButton.set("disabled", checked || this.inputMimeField.get('value') == "");
			this.okButton.set('disabled', !this._validateData()); // Disable ok button if not valid
			var viewerID = this.viewerField.get("value");
			this._refreshPreviewCheckbox(viewerID);
		},

		_validateData: function() {
			if (!this.serverTypeField.isValid()) {
				return false;
			}
			if (!this.viewerField.isValid()) {
				return false;
			}
			if (!this._isAnyMimeTypeChecked()) {
				if (this.sloshBucket.getSelectedItems().length == 0) {
					return false;
				}
			}
			return true;
		},

		_getLabelUsingKey: function(key) {
			if (key) {
				if (this.messages[key]) {
					return this.messages[key];
				} else {
					return key;
				}
			} else {
				return "";
			}
		},

		_onClickAddMimeType: function() {
			var value = idxHtml.escapeHTML( this.inputMimeField.get("value") );
			if (this.inputMimeField.isValid() && value != "") {
				this.sloshBucket.addToSelected({
					value: idxHtml.unescapeHTML(value),
					id: idxHtml.unescapeHTML(value),
					label: idxHtml.unescapeHTML(value)
				});
				this.inputMimeField.set("value", "");
				this._onFieldChange();
			}
		},

		_saveMapping: function() {
			if (this._validateData()) {
				var serverType = this.serverTypeField.get("value");
				var serverTypeName = this.serverTypeField.get("displayedValue");
				var viewer = this.viewerField.get("value");
				var viewerName = this.viewerField.get("displayedValue");
				var contentTypeArray = [];
				if (!this._isAnyMimeTypeChecked()) {
					var dataArray = this.sloshBucket.getSelectedItems();
					for (var i = 0; i < dataArray.length; i++) {
						contentTypeArray.push(idxHtml.escapeHTML(dataArray[i].value));
					}
				}

				var previewOnly = false;
				if (this._isPreviewOnlyChecked()) {
					previewOnly = true;
				}

				var screenData = {
					serverType: serverType,
					serverTypeName: serverTypeName,
					viewer: viewer,
					viewerName: viewerName,
					previewOnly: previewOnly,
					contentTypes: contentTypeArray
				};
				if (this._isEdit()) {
					this.onEdit(screenData, this._editData);
				} else {
					this.onAdd(screenData);
				}
				this.onCancel();
			}
		},

		// override to get data entered on the screen
		onEdit: function(screenData, originalData) {
		},

		// override to get data entered on the screen
		onAdd: function(screenData) {
		},

		resize: function() {
			this.inherited(arguments);
			this.borderContainer.resize(arguments);
		}
	});
});
