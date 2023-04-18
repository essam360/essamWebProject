/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array",
	"dojo/string",
	"dojo/dom-class",
	"dojo/dom-style",
	"dojo/dom-attr",
	"dojo/aspect",
	"dojo/window",
	"dojo/_base/sniff",
	"dijit/_Widget",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/form/FilteringSelect",
	"dijit/form/Select",
	"dijit/form/TextBox",
	"dijit/form/ValidationTextBox",
	"dijit/layout/ContentPane",
	"../Messages",
	"../model/Message",
	"./_FolderSelectorDropDown",
	"./search/SearchInDropDown",
	"./CheckBox",
	"./DropDownInput",
	"./FolderSelector",
	"./FolderSelectorCallback",
	"./HoverHelp",
	"./RadioButton",
	"ecm/model/Desktop",
	"ecm/model/FileTracker",
	"ecm/model/_itemUtils",
	"dojo/text!./templates/AddContentItemGeneralPane.html"
], function(declare, //
lang, //
array, //
string, //
domClass, //
domStyle, //
domAttr, //
aspect, //
win, //
has, //
_Widget, //
_TemplatedMixin, //
_WidgetsInTemplateMixin, //
FilteringSelect, //
Select, //
TextBox, //
ValidationTextBox, //
ContentPane, //
Messages, //
Message, //
_FolderSelectorDropDown, //
SearchInDropDown, //
CheckBox, //
DropDownInput, //
FolderSelector, //
FolderSelectorCallback, //
HoverHelp, //
RadioButon, //
Desktop, //
FileTracker, //
itemUtils, //
template) {

	/**
	 * @name ecm.widget.AddContentItemGeneralPane
	 * @class Provides the general settings pane that is used in the {@link ecm.widget.dialog.AddContentItemDialog} and
	 *        {@link ecm.widget.dialog.CheckInDialog} widgets. This pane is used to select the parent folder, entry
	 *        template, files, and other general settings for the add action.
	 * @augments dijit._Widget
	 */
	return declare("ecm.widget.AddContentItemGeneralPane", [
		_Widget,
		_TemplatedMixin,
		_WidgetsInTemplateMixin
	], {
		/** @lends ecm.widget.AddContentItemGeneralPane.prototype */
		templateString: template,
		widgetsInTemplate: true,

		/**
		 * The folder selector widget used to select the parent folder for the add action.
		 */
		folderSelector: null,

		/**
		 * The active entry template tooltip.
		 */
		entryTemplateToolTip: null,

		/**
		 * The list of content source type choices.
		 * 
		 * @since 2.0.2
		 */
		contentSourceTypeChoices: [
			{
				value: "Document",
				label: ecm.messages.add_document_localfile_label
			},
			{
				value: "Item",
				label: ecm.messages.add_document_metadata_label
			},
			{
				value: "ExternalURL",
				label: ecm.messages.add_document_external_label
			}
		],

		/**
		 * Sets the option of whether to allow the <strong>Search in</strong> option to include all repositories
		 * assigned to the desktop. If set to <code>true</code> then all repositories assigned to the desktop will be
		 * available to search in. If <code>false</code> then the <strong>Search in</strong> option will display
		 * repositories based on the setting for showMultiRepositorySelector.
		 * 
		 * @since 2.0.3
		 */
		showAllRepositories: false,

		/**
		 * A boolean value that indicates whether or not file input selection should be limited to a single document
		 * only under HTML5 browsers.
		 * 
		 * @since 2.0.3.7
		 */
		singleDocumentSelect: false,

		_messages: ecm.messages,
		_addContentItemDialog: null,
		_entryTemplateNameToolTip: null,
		_entryTemplateSelectorToolTip: null,
		_showMultiRepoFolderSelector: false,
		_currentFolder: null,
		_folderSelectorDisabledForUnfile: false,
		_allowUnfiledAdd: false,
		_hasMultipleDocuments: false,
		_showMajorVersionOption: true,
		_repositoryTypes: null,
		_filesToUpload: [],

		/**
		 * P8 only. When set, documents may be added unfiled (true) or not (false). The desktop option and the active
		 * entry template option are overridden.
		 * 
		 * @since 3.0
		 */
		allowUnfiledAddOverride: null, 
		
		postCreate: function() {
			this.inherited(arguments);
			this._unfiled.setHoverHelp(this._addUnfiledHoverHelp);
			this._majorVersion.setHoverHelp(this._majorVersionHoverHelp);
			this._entryTemplateSelector.set("textDir", has("text-direction"));
			
			// Set the regular expression pattern for allowed external link URL prefixes.
			if (ecm.model.desktop.allowedExternalLinkPrefixes && ecm.model.desktop.allowedExternalLinkPrefixes.length > 0) {
				var allowedLinksPattern = "";
				array.forEach(ecm.model.desktop.allowedExternalLinkPrefixes, function(prefix, i) {
					if (i > 0) {
						allowedLinksPattern += "|";
					}
					allowedLinksPattern += prefix + ".*";
				});
				this._externalURL.pattern = allowedLinksPattern;
			}
		},

		destroy: function() {
			this.doCleanup();
			delete this._addContentItemDialog;
			delete this.folderSelectorCallback;
			delete this._currentFolder;
			this.inherited(arguments);
		},

		/**
		 * @private
		 */
		_onFocusTargetLocation: function() {
			if (this.folderSelector._hasBeenBlurred && !this.folderSelector._dropdownOpened)
				this._targetLocationValidate(true);
		},

		/**
		 * @private
		 */
		_onBlurTargetLocation: function() {
			if (this.folderSelector._hasBeenBlurred && !this.folderSelector._dropdownOpened)
				this._targetLocationValidate(false);
		},

		/**
		 * @private
		 */
		_targetLocationValidate: function(isFocused) {
			var state = "";
			var selectedFolder = this.folderSelector.getSelected();
			if (selectedFolder && selectedFolder.item == this._addContentItemDialog.parentFolder) {
				if (!this.folderSelector.isValid()) {
					state = "Error";
				}
			} else {
				var isValid = this.folderSelector.disabled || this.folderSelector.isValid();
				if (!isValid && !selectedFolder && this.folderSelector._hasBeenBlurred) {
					state = "Error";
				}
			}
			
			this.folderSelector._dropdown._set("state", state);
			if (state == "Error") {
				if (isFocused && this.folderSelector._hasBeenBlurred) {
					this.folderSelector.validate(); // Shows error and error tooltip.
				} else {
					domClass.add(this.folderSelector._dropdown.domNode, "Error");
				}
			} else {
				domClass.remove(this.folderSelector._dropdown.domNode, "Error");
			}
		},

		/**
		 * Adds the choices to the content source type list.
		 * 
		 * @param choices
		 *            Optional parameter that passes in the choices to display in the pulldown. If not specified, then
		 *            the pulldown will contain all the choices from this.contentSourceTypeChoices.
		 * @since 2.0.2
		 */
		addContentSourceTypeChoices: function(choices) {
			if (this._contentSourceType.getOptions(0)) {
				this._contentSourceType.removeOption(this._contentSourceType.getOptions());
			}
			if (choices) {
				var objs = [];
				for ( var i in choices) {
					var obj = {
						value: choices[i],
						label: choices[i]
					};
					for ( var j in this.contentSourceTypeChoices) {
						if (this.contentSourceTypeChoices[j].value == obj.value) {
							obj.label = this.contentSourceTypeChoices[j].label;
							break;
						}
					}
					objs.push(obj);
				}
				if (objs.length > 0) {
					this._contentSourceType.addOption(objs);
					if (!this.hasExternalFiles() && this._addContentItemDialog._typeDocument) {
						this._updateUIForSourceType(objs[0].value);
					}
					this._contentSourceType.set("disabled", objs.length == 1);
				}
			} else {
				for ( var choiceNdx in this.contentSourceTypeChoices) {
					var choice = this.contentSourceTypeChoices[choiceNdx];
					if (choice.value == "ExternalURL" && (!this._addContentItemDialog.repository._isP8() && !this._addContentItemDialog.repository._isBox())) {
						continue;
					} else if (choice.value == "Item" && this._addContentItemDialog.repository._isBox()) {
						continue;
					}

					if (choice.value == "ExternalURL" && this._addContentItemDialog.repository._isBox())
						choice.label = ecm.messages.add_document_web_link_label;
					else if (choice.value == "ExternalURL")
						choice.label = ecm.messages.add_document_external_label;

					this._contentSourceType.addOption(choice);
				}
				this._contentSourceType.set("disabled", false);
			}
		},

		/**
		 * Renders the add content item general pane.
		 * 
		 * @param addContentItemDialog
		 *            The parent dialog widget. A {@link ecm.widget.dialog.AddContentItemDialog} or
		 *            {@link ecm.widget.dialog.CheckInDialog}.
		 */
		createRendering: function(addContentItemDialog) {
			this._addContentItemDialog = addContentItemDialog;
			this._setFolderSelector(this._showMultiRepoFolderSelector);

			this.addContentSourceTypeChoices();
			domStyle.set(this._savedContentArea, "display", "none");
			this.connect(this._contentSourceType.dropDown, "onOpen", lang.hitch(this, function() {
				if (has("ie")) {
					// Fix a problem with IE where the dropdown width is too small for the longest option.
					domStyle.set(this._contentSourceType.dropDown.domNode, "width", "100%");
				}
			}));

			var displayExternalFiles;
			var displayFileControls;
			var majorVersionStartWorkflowDiv;

			if (this._addContentItemDialog._typeDocument) {
				if (this.hasExternalFiles()) {
					displayExternalFiles = "";
					displayFileControls = "none";
				} else {
					displayExternalFiles = "none";
					displayFileControls = "";
				}
				this._addUnfiledHoverHelp.set("message", this._messages.add_document_save_document_as_unfiled_hover);
				majorVersionStartWorkflowDiv = "";
			} else {
				displayExternalFiles = "none";
				displayFileControls = "none";
				this._addUnfiledHoverHelp.set("message", this._messages.create_folder_save_folder_as_unfiled_hover);
				majorVersionStartWorkflowDiv = (this._addContentItemDialog._checkin && this._addContentItemDialog.repository._isCM()) ? "" : "none";
			}

			domStyle.set(this._externalFileNamesDiv, "display", displayExternalFiles);

			// Multi-file select should be disabled if explicitly set, this is a check in, or this is an add under OnDemand.
			if (this._fileInput) {
				if (this.singleDocumentSelect || this._addContentItemDialog._checkin || this._addContentItemDialog.repository._isOnDemand()) {
					domAttr.remove(this._fileInput, "multiple");
				} else {
					domAttr.set(this._fileInput, "multiple", "multiple");
				}
			}
			domStyle.set(this._fileInputArea, "display", displayFileControls);

			if (this._addContentItemDialog.repository._isOnDemand()) {
				domStyle.set(this._appGroupNameDiv, "display", "");
				domStyle.set(this._appNameDiv, "display", "");
				domStyle.set(this._contentSourceTypeDiv, "display", "none");
			} else {
				this._appGroupNameDiv && domStyle.set(this._appGroupNameDiv, "display", "none");
				this._appNameDiv && domStyle.set(this._appNameDiv, "display", "none");
				domStyle.set(this._contentSourceTypeDiv, "display", displayFileControls);
			}

			domStyle.set(this._majorVersionStartWorkflowDiv, "display", majorVersionStartWorkflowDiv);

			this._entryTemplateNameToolTip = new dijit.Tooltip({
				position: [
					"above",
					"below",
					"after",
					"before"
				]
			});
			this._entryTemplateNameTextBox.set("textDir", has("text-direction"));
			this.connect(this._entryTemplateNameTextBox, "_onFocus", lang.hitch(this, function() {
				if (this._entryTemplateNameToolTip.label) {
					this._entryTemplateNameToolTip.open(this._entryTemplateNameTextBox.domNode);
				}
			}));
			this.connect(this._entryTemplateNameTextBox, "_onBlur", lang.hitch(this, function() {
				this._entryTemplateNameToolTip.close();
			}));
			this.connect(this._entryTemplateNameTextBox, "onMouseOver", lang.hitch(this, function() {
				if (this._entryTemplateNameToolTip.label) {
					this._entryTemplateNameToolTip.open(this._entryTemplateNameTextBox.domNode);
				}
			}));
			this.connect(this._entryTemplateNameTextBox, "onMouseOut", lang.hitch(this, function() {
				this._entryTemplateNameToolTip.close();
			}));

			if (this._addContentItemDialog._checkin) {
				this._majorVersionHoverHelp.set("message", this._messages.checkin_major_version_hover);
			} else {
				this._majorVersionHoverHelp.set("message", this._messages.add_document_major_version_hover);
			}
			this._majorVersionHoverHelp.set("href", "euche023.htm");
		},

		_setFolderSelector: function(showMulti) {
			if (this._isShowingMultiSelector != undefined) {
				if (this._isShowingMultiSelector && showMulti) {
					return;
				} else if (!this._isShowingMultiSelector && !showMulti) {
					return;
				}
			}

			if (this._folderSelectorConnections) {
				for (var i = 0; i < this._folderSelectorConnections.length; i++) {
					this.disconnect(this._folderSelectorConnections[i]);
				}
			}

			// Display either the folder selector or the multiple repository selector for target location.
			if (showMulti) {
				this._isShowingMultiSelector = true;
				this.folderSelector = this._multiRepoFolderSelectorDropDown;
				this.folderSelector.setRepositoryTypes(this._repositoryTypes);
				this.folderSelector.displayAllRepositories = this.showAllRepositories;
				domStyle.set(this._targetLocationLabel, "display", "none");
				domStyle.set(this._targetLocationLabel2, "display", "");
				domStyle.set(this._folderSelectorDropDown.domNode, "display", "none");
				domStyle.set(this._multiRepoFolderSelectorDropDown.domNode, "display", "");
			} else {
				this._isShowingMultiSelector = false;
				this.folderSelector = this._folderSelectorDropDown;
				domStyle.set(this._targetLocationLabel, "display", "");
				domStyle.set(this._targetLocationLabel2, "display", "none");
				domStyle.set(this._folderSelectorDropDown.domNode, "display", "");
				domStyle.set(this._multiRepoFolderSelectorDropDown.domNode, "display", "none");

				// Set the permission in the callback function needed to add a document to the folder.
				this.folderSelectorCallback = new FolderSelectorCallback();
				if (this._addContentItemDialog._typeDocument) {
					this.folderSelectorCallback.isSelectableByPermission.permissionToCheck = "privAddToFolder";
					this.folderSelectorCallback.isSelectableByPermission.notSelectableTooltip = this._messages.no_permission_add_document;
				} else {
					if (this._addContentItemDialog.repository._isCM()){
						this.folderSelectorCallback.isSelectableByPermission.permissionToCheck = "privAddToFolder";
					}
					else {
						this.folderSelectorCallback.isSelectableByPermission.permissionToCheck = "privAddLink";
					}
					this.folderSelectorCallback.isSelectableByPermission.notSelectableTooltip = this._messages.no_permission_add_folder;
				}
				this.folderSelector.setIsSelectableCallback(this.folderSelectorCallback.isSelectableByPermission);
			}

			this._folderSelectorConnections = [];
			this._folderSelectorConnections.push(aspect.after(this.folderSelector, "_onBlur", lang.hitch(this, function() {
				this._onBlurTargetLocation();
			}), true));
			this._folderSelectorConnections.push(aspect.after(this.folderSelector, "_onFocus", lang.hitch(this, function() {
				this._onFocusTargetLocation();
			}), true));
		},

		deleteLocalFile: function() {
			return this._deleteLocalFile.get("checked");
		},

		/**
		 * Sets the list of external document files.
		 * 
		 * @param files
		 *            A W3C File API FileList that contains one or more File objects. Some examples of sources for a
		 *            FileList include a drag and drop event or the input file control.
		 */
		setExternalFiles: function(files) {
			var fileNameArray = [];
			array.forEach(files, function(file) {
				// Add files to the list, even if the file size is 0.
				// Safari 5.1 on Windows 7 sometimes incorrectly returns 0 for file size for some dropped documents.
				// Also, files that are actually empty should be allowed.
				if (file.repository && file.repository.repositoryConfig && file.repository.repositoryConfig.getUsePartFileName()) {
					fileNameArray.push(file.filename);
				} else {
					if (file.repository && file.repository._isCM() && file.filename) {
						fileNameArray.push(file.filename);
					} else {
						var tempName = file.name;
						if( file.fullPath ){
							tempName = file.fullPath;
						}
						var extension;
						if (file.filename) {
							var index = file.filename.lastIndexOf(".");
							if (index > -1) {
								extension = file.filename.substring(index);
								if (tempName.lastIndexOf(extension) == -1 // name does not contain extension
										|| (tempName.lastIndexOf(extension) > -1 && tempName.substring(tempName.lastIndexOf(extension), tempName.length) != extension)) {
									tempName = tempName + extension;
								}
							}
						}
						fileNameArray.push(tempName);
					}
				}
			}, this);
			this._externalFiles = files;
			this._hasMultipleDocuments = files.length > 1;
			this._externalFileNames.set("label", fileNameArray.join(", "));
			this._externalFileNames.set("value", fileNameArray);
			this._externalFileNames.set("title", "");
		},

		/**
		 * Tests if external files have been set.
		 * 
		 * @return {Boolean} A value of <code>true</code> if external files have been set, otherwise
		 *         <code>false</code>.
		 */
		hasExternalFiles: function() {
			return (this._externalFiles != null) ? this._externalFiles.length > 0 : false;
		},

		/**
		 * Tests if multiple documents are selected.
		 * 
		 * @return {Boolean} A value of <code>true</code> if multiple documents have been selected, otherwise
		 *         <code>false</code>.
		 */
		hasMultipleDocuments: function() {
			return this._hasMultipleDocuments;
		},
		/**
		 * This event method is called when a appGroup is selected.
		 */
		onAppGroupNameSelectorChange: function() {
		},
		/**
		 * This event method is called when a appName is selected.
		 */
		onAppNameSelectorChange: function() {
		},
		/**
		 * This event method is called when a folder is selected.
		 * 
		 * @param folder
		 *            A {@link ecm.model.SelectedFolder} object.
		 */
		onFolderSelect: function(folder) {
		},

		/**
		 * This event method is called when an entry template is selected.
		 */
		onEntryTemplateSelectorChange: function() {
		},

		/**
		 * This event method is called when focus leaves the entry template selector.
		 */
		onEntryTemplateSelectorBlur: function() {
		},

		/**
		 * Tests if the current settings in the general pane are valid.
		 * 
		 * @param focus
		 * @since 2.0.3.8 A boolean value. If <code>true</code> and there is a field with an invalid value, focus is
		 *        automatically set to the invalid field.
		 * @return {Boolean} A value of <code>true</code> if the current settings in the general pane are valid,
		 *         otherwise <code>false</code>.
		 */
		isValid: function(focus) {
			var allValid = true;
			var invalidWidget = null;

			// If the entry template selector row is displayed, and the entry template text box is not displayed, then an entry template must be selected.
			var etIsValid = true;
			if (domStyle.get(this._entryTemplateRow, "display") != "none" && domStyle.get(this._entryTemplateNameTextBox.domNode, "display") == "none") {
				var selectedET = this._entryTemplateSelector.get("value");
				if (selectedET == null || selectedET.length == 0) {
					etIsValid = false;
				}
			}

			// Check the folder selector if adding a document or creating a new folder.
			var folderIsValid = true;
			if (!this._addContentItemDialog._checkin) {
				folderIsValid = this.folderSelector.isValid();

				if (folderIsValid && (this._addContentItemDialog.parentFolder && this._addContentItemDialog.parentFolder.isInstanceOf && this._addContentItemDialog.parentFolder.isInstanceOf(ecm.model.ContentItem))) {
					if (this._addContentItemDialog._typeDocument) {
						folderIsValid = this._addContentItemDialog.parentFolder.hasPrivilege("privAddToFolder");
					} else {
						if (this._addContentItemDialog.repository._isCM()){
							folderIsValid = this._addContentItemDialog.parentFolder.hasPrivilege("privAddToFolder");
						}
						else {
							folderIsValid = this._addContentItemDialog.parentFolder.hasPrivilege("privAddLink");
						}
					}
				}
			}

			// Validate the content input.
			var fileIsValid = true;
			var fileWidget;
			var contentSourceType = this.getContentSourceType();
			if (contentSourceType == "Document") {
				if (!this.hasExternalFiles() && this._addContentItemDialog._typeDocument) {
					if (this._useFileTracker) {
						fileIsValid = (this._filesToUpload && this._filesToUpload.length > 0);

						if (this._addContentItemDialog.repository._isOnDemand() && this._filesToUpload != null && this._filesToUpload.length > 0) {
							fileIsValid = this._filesToUpload[0].size != 0;
						}
						
						if (!fileIsValid) {
							fileWidget = this._fileInput_FT_button;
						}
					} else {
						fileIsValid = (this._fileInput && this._fileInput.value != null && this._fileInput.value.length > 0);

						if (this._addContentItemDialog.repository._isOnDemand() && this._fileInput.value != null && this._fileInput.value.length > 0) {
							fileIsValid = this._fileInput.files[0].size != 0;
						}
						
						if (!fileIsValid) {
							fileWidget = this._fileInput;
						}
					}
				}
			} else if (contentSourceType == "ExternalURL") {
				fileIsValid = this._externalURL.isValid();
				if (!fileIsValid) {
					fileWidget = this._externalURL;
				}
			} // ...else no content validation is needed for an "Item" that has no content.

			allValid = etIsValid && folderIsValid && fileIsValid ;
			
			// If saving and there is an invalid widget, set the focus to the invalid widget.
			if (focus && !allValid) {
				// The order of the entry template, folder, and file widgets changes if the 
				// parent folder has associated entry templates (document driven mode). 
				if (this._addContentItemDialog._documentDrivenMode) { 
					// File, then ET, then folder.
					if (!fileIsValid) {
						invalidWidget = fileWidget;
					} else if (!etIsValid) {
						invalidWidget = this._entryTemplateSelector;
					} else if (!folderIsValid) {
						invalidWidget = this.folderSelector;
					}
				} else { // All other cases
					// ET (if used), then folder, then file.
					if (!etIsValid) {
						invalidWidget = this._entryTemplateSelector;
					} else if (!folderIsValid) {
						invalidWidget = this.folderSelector;
					} else if (!fileIsValid) {
						invalidWidget = fileWidget;
					}
				}
				if (invalidWidget) {
					win.scrollIntoView(invalidWidget.domNode || invalidWidget);
					if (invalidWidget == this._entryTemplateSelector || invalidWidget == this.folderSelector || invalidWidget == this._externalURL) {
						invalidWidget._hasBeenBlurred = true;
						if (lang.isFunction(invalidWidget.validate)) {
							invalidWidget.validate();
						} 					
						if (lang.isFunction(invalidWidget.focus)) {
							invalidWidget.focus();
						} else if (lang.isFunction(invalidWidget.setFocus)) {
							invalidWidget.setFocus();
						}
					} else if ((invalidWidget == this._fileInput || invalidWidget == this._fileInput_FT_button)) {
						if (lang.isFunction(invalidWidget.focus)) {
							invalidWidget.focus();
						} else if (lang.isFunction(invalidWidget.setFocus)) {
							invalidWidget.setFocus();
						}
					}
				}
			}
			
			return allValid;
		},

		_dipslayTrackedFiles: function() {

			var displayValue = [];
			for (var i = 0; this._filesToUpload && i < this._filesToUpload.length; i++) {
				if (this._filesToUpload[i].fileName) {
					displayValue.push(this._filesToUpload[i].fileName);
				}
			}
			this._fileInput_FT_textbox.set("value", displayValue.join(","));

		},

		_onBrowseForFile: function() {
			this._filesToUpload = FileTracker.browseForFiles();
			this._dipslayTrackedFiles();
			this.onFileInputChange();

		},

		setFilesToUpload: function(files) {
			this._filesToUpload = files;
			this._dipslayTrackedFiles();
			this.onFileInputChange();
		},

		setupFileTrackerFiledsState: function(show) {
			this._useFileTracker = show;
			if (show) {
				//file tracker interacting fields
				domStyle.set(this._fileInput_FT_cell, {
					display: ""
				});
				domAttr.set(this._fileInput_FT_textbox, "required", true);
				//normal checkin
				domStyle.set(this._fileInput_cell, {
					display: "none"
				});
				domAttr.set(this._fileInput, "required", false);

				// unhide delete checkbox and label
				domStyle.set(this._deleteLocalFile.domNode, {
					display: ""
				});
				domStyle.set(this._deleteLocalFileLabel, {
					display: ""
				});

				this._deleteLocalFile.set("checked", ecm.model.desktop.fileTrackingPrefs.deleteLocalCopy);
				if (ecm.model.desktop.fileTrackingPrefs.deleteLocalCopyRuntimeState) {
					this._deleteLocalFile.set("disabled", false);
				} else {
					this._deleteLocalFile.set("disabled", true);
				}
				domStyle.set(this._fileInputLabelFT, {
					display: ""
				});
				domStyle.set(this._fileInputLabelNonFT, {
					display: "none"
				});

			} else {
				//file tracker interacting fields
				domStyle.set(this._fileInput_FT_cell, {
					display: "none"
				});
				domAttr.set(this._fileInput_FT_textbox, "required", false);
				//normal checkin
				domStyle.set(this._fileInput_cell, {
					display: ""
				});
				domAttr.set(this._fileInput, "required", true);
				// hide delete checkbox and label
				domStyle.set(this._deleteLocalFile.domNode, {
					display: "none"
				});
				domStyle.set(this._deleteLocalFileLabel, {
					display: "none"
				});

				domStyle.set(this._fileInputLabelFT, {
					display: "none"
				});
				domStyle.set(this._fileInputLabelNonFT, {
					display: ""
				});

			}
		},

		/**
		 * This event method is called when the file input control value changes.
		 */
		onFileInputChange: function() {

			var numFiles;

			if (!this._useFileTracker) {
				numFiles = (this._fileInput && this._fileInput.files && this._fileInput.files.length) || 0;
			} else {
				numFiles = (this._filesToUpload && this._filesToUpload.length) || 0;
			}
			if (ecm.model.desktop) {
				var maxNumDocs = ecm.model.desktop.maxNumberDocToAdd;
				if (numFiles > maxNumDocs) {
					ecm.model.desktop.addMessage(Message.createErrorMessage("add_document_too_many_items_error", [
						maxNumDocs,
						numFiles
					]));
					this._resetFileInput();
					numFiles = 0;
				}
			}
			if (this._addContentItemDialog.repository._isOnDemand() && this._fileInput.files[0].size == 0) {
				var message = Message.createErrorMessage("add_document_filesize_empty_od_error");
				if (message) {
					ecm.model.desktop.addMessage(message);
				}
				this._resetFileInput();
				numFiles = 0;
			}
			var hadMultipleDocuments = this._hasMultipleDocuments;
			this._hasMultipleDocuments = (numFiles > 1);

			// Update the dialog title & intro text if the "hasMultipleDocuments" status has changed. 
			if (hadMultipleDocuments != this._hasMultipleDocuments) {
				if (this._hasMultipleDocuments) {
					if (this._addContentItemDialog._useTemplate) {
						this._addContentItemDialog.set("title", this._messages.add_documents_using_template_dialog_title);
						this._addContentItemDialog.setIntroTextRef(this._messages.learn_more, (ecm.model.desktop.getHelpUrl(true) || "") + "euche013.htm");
					} else {
						this._addContentItemDialog.set("title", this._messages.add_documents_dialog_title);
					}
					this._addContentItemDialog.setIntroText(this._messages.add_documents_context_info);
					if (!this._useFileTracker) {
						domStyle.set(this._contentSourceTypeDiv, "display", "none");
					}
				} else {
					if (this._addContentItemDialog._useTemplate) {
						this._addContentItemDialog.set("title", this._messages.add_document_using_template_dialog_title);
						this._addContentItemDialog.setIntroText(this._messages.add_document_using_template_context_info);
						this._addContentItemDialog.setIntroTextRef(this._messages.learn_more, (ecm.model.desktop.getHelpUrl(true) || "") + "euche013.htm");
					} else {
						this._addContentItemDialog.set("title", this._messages.add_document_dialog_title);
						this._addContentItemDialog.setIntroText(this._messages.add_document_context_info);
					}
					domStyle.set(this._contentSourceTypeDiv, "display", "");
				}
			}
			if (this._useFileTracker)
				this._updateDeleteLocalFileState();
		},

		_updateDeleteLocalFileState: function() {
			var external = this._filesToUpload && this._filesToUpload.length > 0 && this._filesToUpload[0].external;
			if (external) {
				this._deleteLocalFile.set("checked", false);
				this._deleteLocalFile.set("disabled", true);
			} else {
				this._deleteLocalFile.set("checked", ecm.model.desktop.fileTrackingPrefs.deleteLocalCopy);
				this._deleteLocalFile.set("disabled", !ecm.model.desktop.fileTrackingPrefs.deleteLocalCopyRuntimeState);
			}
			domStyle.set(this._deleteLocalFileDisabledLabel, {
				display: external ? "" : "none"
			});			
		},

		_resetFileInput: function() {
			if (!has("ie") && has("trident") > 6) {
				// Work around IE11 bug where the file input isn't completely cleared after resetting the form
				var func = this.onFileInputChange;
				this.onFileInputChange = function() {
					// Handle onChange when the form is reset bellow
				};
				this._fileInput.value = "";
				this.onFileInputChange = func;
			}
			this._fileInputForm.reset();
			this._filesToUpload = [];
		},

		/**
		 * This event method is called when the external URL field value changes.
		 */
		onExternalURLChange: function() {
		},

		/**
		 * This event method is called when the <strong>Major version</strong> check box value changes.
		 */
		onMajorCheckboxChange: function() {
		},
		
		/**
		 * @since 3.0.1
		 * This event method is called when the <strong>Use saved file</strong> check box value changes.
		 */
		onSavedContentCheckboxChange: function(){
			
		},

		/**
		 * This event method is called when the <strong>Start on workflow</strong> check box value changes.
		 */
		onStartOnWorkflowCheckboxChange: function() {
		},

		/**
		 * This event method is called when the <strong>Save unfiled</strong> check box value changes.
		 */
		onSaveUnfiledChange: function() {
			if (this._unfiled.checked) {
				var selectedFolder = this.folderSelector.getSelected();
				if (selectedFolder != null) {
					this._currentFolder = selectedFolder.item;
				} else {
					this._currentFolder = null;
				}
				var message = string.substitute(this._messages.add_document_unfiled, [
					this._addContentItemDialog.repository.name
				]);
				this.folderSelector.setLabel(message, false);
				this.folderSelector.setDisabled(true);
				domClass.remove(this.folderSelector._dropdown.domNode, "Error");
				this._addContentItemDialog.parentFolder = null;

				// If the class selector is already initialized, filter hierarchical item types out of the class selector.
				if (this._addContentItemDialog.addContentItemPropertiesPane._contentClassSelector.repository) {
					this._addContentItemDialog.addContentItemPropertiesPane._contentClassSelector.setFilterHierarchicalItemTypes(true);
				}
				if (this._addContentItemDialog) {
					this._addContentItemDialog._setViewClassAndCommonProperties(true);
					this._addContentItemDialog.clearMessage();
				}
			} else {
				if (!this._addContentItemDialog._desktopFolder || this._addContentItemDialog.allowBrowseParentFolder || this._addContentItemDialog._entryTemplate) {
					this.folderSelector.setDisabled(false);
				}
				if (this._currentFolder != null) {
					this.folderSelector.setSelected(this._currentFolder);
				} else {
					this.folderSelector.setLabel("");
				}

				// If the class selector is already initialized, restore hierarchical item types to the class selector.
				if (this._addContentItemDialog.addContentItemPropertiesPane._contentClassSelector.repository) {
					this._addContentItemDialog.addContentItemPropertiesPane._contentClassSelector.setFilterHierarchicalItemTypes(false);
				}
			}
		},

		/**
		 * Retrieves the value of the <strong>Create new version</strong> check box option.
		 * 
		 * @return {Boolean} If <code>true</code>, a new version of the document will be created.
		 */
		getNewVersion: function() {
			return this._createNewVersionButton.get("checked");
		},

		/**
		 * Assigns the value of the <strong>Create new version</strong> option for an IBM Content Manager check in.
		 * 
		 * @param newVersion
		 *            A boolean value. If <code>true</code>, the check in will create a new document version. If
		 *            <code>false</code>, the check in replace the current version.
		 * @since 2.0.3
		 */
		setNewVersion: function(newVersion) {
			if (newVersion) {
				this._createNewVersionButton.set("checked", true);
			} else {
				this._replaceExistingVersionButton.set("checked", true);
			}
		},

		/**
		 * Retrieves the value of the <strong>As major version</strong> check box option.
		 * 
		 * @return {Boolean} If <code>true</code>, the new document version will be a major version.
		 */
		getAsMajorVersion: function() {
			return this._majorVersion.get("checked");
		},

		/**
		 * Assigns the value of the <strong>As major version</strong> check box option.
		 * 
		 * @param asMajorVersion
		 *            A boolean value. If <code>true</code>, the new document version will be a major version.
		 */
		setAsMajorVersion: function(asMajorVersion) {
			this._majorVersion.set("checked", asMajorVersion);
		},

		/**
		 * Retrieves the value of the <strong>Auto classify</strong> check box option.
		 * 
		 * @return {Boolean} If <code>true</code>, the document will be auto classified.
		 */
		getAutoClassify: function() {
			return this._autoClassify.get("checked");
		},

		/**
		 * Assigns the value of the <strong>Auto classify</strong> check box option.
		 * 
		 * @param autoClassify
		 *            A boolean value. If <code>true</code>, the document will be auto classified.
		 */
		setAutoClassify: function(autoClassify) {
			this._autoClassify.set("checked", autoClassify);
		},

		/**
		 * Retrieves the value of the <strong>Start on workflow</strong> check box option.
		 * 
		 * @return {Boolean} If <code>true</code>, the document will be started on a workflow.
		 */
		getStartOnWorkflow: function() {
			return this._startOnWorkflow.get("checked");
		},

		/**
		 * Assigns the value of the <strong>Start on workflow</strong> check box option.
		 * 
		 * @param startOnWorkflow
		 *            A boolean value. If <code>true</code>, the document will be started on a workflow.
		 */
		setStartOnWorkflow: function(startOnWorkflow) {
			this._startOnWorkflow.set("checked", startOnWorkflow);
		},

		/**
		 * Retrieves the value of the content source type option.
		 * 
		 * @return The content source type string.
		 *         <ul>
		 *         <li>
		 *         <q><code>Document</code></q> - Content file </li>
		 *         <li>
		 *         <q><code>Item</code></q> - No content file </li>
		 *         <li>
		 *         <q><code>ExternalURL</code></q> - URL for an external file (IBM FileNet P8 only). </li>
		 *         </ul>
		 */
		getContentSourceType: function() {
			return this._contentSourceType.get("value");
		},

		/**
		 * Retrieves the URL from the external URL field option.
		 * 
		 * @return A URL string.
		 */
		getExternalURL: function() {
			return this._externalURL.get("value");
		},

		/**
		 * This event method is called when the content source type selection is changed.
		 */
		onContentSourceTypeChange: function() {
			if (!this.hasExternalFiles() && this._addContentItemDialog._typeDocument) {
				var value = this.getContentSourceType();
				this._updateUIForSourceType(value);
				if (value == "Item") {
					this._addContentItemDialog._setNoFileTypeRestrictionETsOnly();
				} else if (value == "ExternalURL") {
					this._addContentItemDialog._setNoFileTypeRestrictionETsOnly();
				} else { // Has content - "Document", "RepositoryDocument", "DaejaDocument", etc.
					this._addContentItemDialog._setEntryTemplateForFiles();
				}
				this._addContentItemDialog.addContentItemPropertiesPane.showContentContentClasses();
			}
		},

		_updateUIForSourceType: function(sourceType) {
			if (sourceType == "Item") {
				domStyle.set(this._fileInputArea, "display", "none");
				domStyle.set(this._externalURLDiv, "display", "none");
			} else if (sourceType == "ExternalURL") {
				domStyle.set(this._fileInputArea, "display", "none");
				domStyle.set(this._externalURLDiv, "display", "");

				if (this._addContentItemDialog.repository._isBox() && this._externalURL){
					this._externalURL.set("value", "http://");
					this._addContentItemDialog.addContentItemPropertiesPane._commonProperties.hideTemplateArea();
				}
			} else if (sourceType == "DaejaDocument") {
				domStyle.set(this._fileInputArea, "display", "none");
				domStyle.set(this._externalURLDiv, "display", "none");
			} else { // "Document" file
				domStyle.set(this._fileInputArea, "display", "");
				domStyle.set(this._externalURLDiv, "display", "none");
				
				if (this._addContentItemDialog.repository._isBox()){
					this._addContentItemDialog.addContentItemPropertiesPane._commonProperties.displayTemplateArea();
				}
			}
		},

		/**
		 * @private
		 */
		_notYetImplemented: function(evt) {
			alert("Not yet implemented");
		},

		/**
		 * Cleanup this widget.
		 */
		doCleanup: function() {
			if (this._entryTemplateNameToolTip) {
				this._entryTemplateNameToolTip.close();
				this._entryTemplateNameToolTip.destroy();
				this._entryTemplateNameToolTip = null;
			}
			if (this._entryTemplateSelectorToolTip) {
				this._entryTemplateSelectorToolTip.close();
				this._entryTemplateSelectorToolTip.destroy();
				this._entryTemplateSelectorToolTip = null;
			}
			if (this._useFileTracker) {
				delete this._useFileTracker;
			} else {
				while (this._fileInputArea.firstChild) {
					this._fileInputArea.removeChild(this._fileInputArea.firstChild);
				}
			}

			this._fileInput = null;
			if (this._folderSelectorConnections) {
				for (var i = 0; i < this._folderSelectorConnections.length; i++) {
					this.disconnect(this._folderSelectorConnections[i]);
				}
			}
			this._folderSelectorConnections = null;
			this._isShowingMultiSelector = null;
		},

		/**
		 * Handles configuring and displaying the parent folder selector. This method accepts additional options for
		 * handling entry template settings. The method <code>setParentFolder</code> should be used if there is no
		 * entry template.
		 * 
		 * @param folder
		 *            The parent folder. This can be a {@link ecm.model.ContentItem}, {@link ecm.model.WorkItem} or
		 *            {@link ecm.model.Repository}.
		 * @param repository
		 *            The active {@link ecm.model.Repository}.
		 * @param objectStore
		 *            The destination object store for the add. Can be different from the active repository object store
		 *            (IBM FileNet P8 only).
		 * @param teamspace
		 *            The active {@link ecm.model.Teamspace}.
		 * @param allowBrowse
		 *            A boolean value indicating if the user is allowed to browse for the the parent folder using the
		 *            folder selector.
		 * @param treatFolderAsRoot
		 *            A boolean value indicating if the passed in folder should be treated as the root when browsing for
		 *            other folders. Ignored if <code>allowBrowse</code> is <code>false</code>.
		 * @param selectInitialFolder
		 *            A boolean value indicating if the passed in folder should be automatically selected.
		 */
		setTargetLocation: function(folder, repository, objectStore, teamspace, allowBrowse, treatFolderAsRoot, selectInitialFolder) {
			this.folderSelector._selectedFolder = null;
			var renderClassSelector = true;
			var initialFolder = null;

			if (allowBrowse) {
				// If privileges have been retrieved for the folder, only select it if the add to folder privilege is granted.
				if (selectInitialFolder && folder != null && (!folder.hasPrivilege || folder.hasPrivilege("privAddToFolder"))) {
					initialFolder = folder;
					renderClassSelector = false;
				}

				if (treatFolderAsRoot) {
					// treatFolderAsRoot is only set when browsing is restricted to the folder selected in 
					// the entry template or a descendant folder, so allow the entry template folder to be selected.
					// Explicitly set this to false because preventSelectRoot may be set to true from prior activity.
					this.folderSelector.preventSelectRoot = false;
					this.folderSelector.setTeamspace(teamspace);
					if (teamspace && teamspace.id == folder.id) {
						this.folderSelector.setRoot(teamspace, objectStore);
					} else {
						this.folderSelector.setRoot(folder, objectStore);
					}
					if (initialFolder) {
						if (teamspace && teamspace.id == initialFolder.id) {
							initialFolder.name = teamspace.name; // Update the name to the teamspace name
						}
						this.folderSelector.setSelected(initialFolder);
					}
				} else {
					// Otherwise, set the root to either the repository or teamspace.
					if (teamspace) {
						this.folderSelector.setTeamspace(teamspace);
						if (this.folderSelector._selectTeamspaces) {
							this.folderSelector.setRoot(teamspace.repository, objectStore);
							this.folderSelector.displayTeamspacesInitially = true;
							if (selectInitialFolder) {
								var pathName = teamspace.id != initialFolder.id && initialFolder.attributes && initialFolder.attributes.PathName ? initialFolder.attributes.PathName : null;
								this.folderSelector.setSelected(initialFolder, true, pathName);
							}
						} else {
							this.folderSelector.selectRootInitially = !selectInitialFolder || (initialFolder && teamspace.id == initialFolder.id);
							if (folder && folder["isVirtual"] == true) {
								this.folderSelector.set("disabled", true);
								this.folderSelector.setRoot(folder, objectStore);
							} else {
								this.folderSelector.setRoot(teamspace, objectStore);
							}

							if (selectInitialFolder && initialFolder && initialFolder.id != teamspace.id) {
								this.folderSelector.setSelected(initialFolder);
							}

						}
					} else {
						// See whether adding unfiled items is allowed and set up the folder selector.
						this._allowAddUnfiled(repository, objectStore, initialFolder);
						// Postpone rendering the class selector for P8 if unfiled adds are allowed and this is the root folder.
						// The selected class and properties will be rendered when appropriate, sometime after the root folder is 
						// selected and checked for associated entry templates.
						if (repository._isP8() && this._allowUnfiledAdd && folder && ((folder.isInstanceOf && folder.isInstanceOf(ecm.model.Repository)) || folder.rootFolder)) {
							renderClassSelector = false;
						}
					}
				}
			} else {
				// Only use the control to display the folder choice.
				// This will cause the name of the folder to be displayed in the control.
				this.folderSelector.set("disabled", true);
				this.folderSelector.setTeamspace(teamspace);
				
				// Entry templates associated with the selected folder are loaded from _onFolderSelect() in AddContentItemDialog.js.
				this.folderSelector.setRoot(folder, objectStore);
				
				renderClassSelector = false;
			}

			if (repository._isP8()) {
				this._showNewVersion(false);
				this._showCheckBox(this._showMajorVersionOption, this._majorVersion, this._majorVersionLabel, this._majorVersionHoverHelp);
			} else if (repository._isCmis()) {
				// For CMIS, only show the major version option.
				this._showNewVersion(false);
				this._showCheckBox(this._showMajorVersionOption, this._majorVersion, this._majorVersionLabel, this._majorVersionHoverHelp);
				this._showCheckBox(false, this._autoClassify, this._autoClassifyLabel);
				this._showCheckBox(false, this._startOnWorkflow, this._startOnWorkflowLabel);
			} else if (repository._isCM()) {
				this._showNewVersion(this._addContentItemDialog._checkin);
				this._showCheckBox(false, this._majorVersion, this._majorVersionLabel, this._majorVersionHoverHelp);
				this._showCheckBox(false, this._autoClassify, this._autoClassifyLabel);
				this._showCheckBox(false, this._startOnWorkflow, this._startOnWorkflowLabel);
				domStyle.set(this._majorVersionStartWorkflowDiv, "display", this._addContentItemDialog._checkin ? "" : "none");
			} else {
				domStyle.set(this._majorVersionStartWorkflowDiv, "display", "none");
			}
			this._checkShowGeneralTab();

			// Render the class selector control.
			if (renderClassSelector && !this._addContentItemDialog._entryTemplate) {
				this._addContentItemDialog.addContentItemPropertiesPane._renderClassSelector(repository);
			}
		},

		/**
		 * @private
		 */
		_applyAddUnfiled: function(repository, objectStore, initialFolder) {
			if (!repository._isCM() && this._allowUnfiledAdd == false && this._addContentItemDialog._typeDocument) {
				this.folderSelector.preventSelectRoot = true;
				this.folderSelector.preventSelectRootTooltip = this._messages.cant_add_doc_to_root;
			} else{
				this.folderSelector.preventSelectRoot = false;
				this.folderSelector.preventSelectRootTooltip = null;
			}
			if (repository._isCM()) {
				// Only show the unfiled choice if there is a choice, if both unfiled adds and filed adds are allowed.
				var display = (this._allowUnfiledAdd && repository.getPrivilege("foldering")) ? "" : "none";
				domStyle.set(this._allowUnfiledRow, "display", display);

				// If add unfiled is allowed, set default to unfiled.
				this._unfiled.set('checked', this._allowUnfiledAdd && !initialFolder);
				if (this._allowUnfiledAdd) {
					this.onSaveUnfiledChange();
				}
				this.connect(this.folderSelector, "rootSet", lang.hitch(this, function() {
					if (this._allowUnfiledAdd) {
						this.onSaveUnfiledChange();
					}
				}));
			}
			if (initialFolder) {
				this.folderSelector.selectRootInitially = false;
				this.folderSelector.setRoot(repository, objectStore);
				this.folderSelector.setSelected(initialFolder);
				this._currentFolder = initialFolder;
			} else {
				this.folderSelector.selectRootInitially = true;
				this.folderSelector.setRoot(repository, objectStore);
			}
		},

		/**
		 * @private
		 */
		_allowAddUnfiled: function(repository, objectStore, initialFolder) {
			if (this._addContentItemDialog._checkin) {
				this._applyAddUnfiled(repository, objectStore, initialFolder);
			} else {
				this._allowUnfiledAdd = this._addContentItemDialog._entryTemplate ? this._addContentItemDialog._entryTemplate.allowNoFolderSelected : !ecm.model.desktop.fileIntoFolder;
				// Overrides the _allowUnfiledAdd
				if (this.allowUnfiledAddOverride != null) {
					this._allowUnfiledAdd = this.allowUnfiledAddOverride;
				}  
				this._applyAddUnfiled(repository, objectStore, initialFolder);
			}
		},

		/**
		 * @private
		 */
		_showNewVersion: function(show) {
			var display = show ? "" : "none";
			domStyle.set(this._createNewVersionFieldset, "display", display);
			domStyle.set(this._createNewVersionLegend, "display", display);
			domStyle.set(this._createNewVersionLabel, "display", display);
			domStyle.set(this._createNewVersionButton.domNode, "display", display);
			domStyle.set(this._replaceExistingVersionLabel, "display", display);
			domStyle.set(this._replaceExistingVersionButton.domNode, "display", display);
			this._checkShowGeneralTab();
		},

		/**
		 * @private
		 */
		_checkShowGeneralTab: function() {
			// If at least one of the table rows is displayed, display the general pane - otherwise, hide it.
			if (array.some(this._contentTable.children, function(child) {
				return (domStyle.get(child, "display") != "none");
			})) {
				domClass.remove(this._addContentItemDialog.addContentItemGeneralTitlePane.domNode, "dijitHidden");
			} else {
				domClass.add(this._addContentItemDialog.addContentItemGeneralTitlePane.domNode, "dijitHidden");
			}
		},

		/**
		 * @private
		 */
		_showCheckBox: function(show, button, label, hoverHelp) {
			var display = show ? "" : "none";
			domStyle.set(button.domNode, "display", display);
			domStyle.set(label, "display", display);
			if (hoverHelp) {
				domStyle.set(hoverHelp.domNode, "display", display);
			}
		},

		/**
		 * Handles configuring and displaying the parent folder selector. Uses the currently selected folder. If the
		 * selected folder is not the repository root, then browsing is disabled. This method is called when there is no
		 * entry template. The method <code>setTargetLocation</code> accepts additional options for handling entry
		 * template settings.
		 * 
		 * @param parentFolder
		 *            The parent folder. This may be a {@link ecm.model.ContentItem}, {@link ecm.model.WorkItem} or
		 *            {@link ecm.model.Repository}.
		 * @param repository
		 *            The active {@link ecm.model.Repository}.
		 * @param objectStore
		 *            The destination object store for the add. May be different from the active repository object store
		 *            (FileNet P8 only).
		 * @param teamspace
		 *            The active {@link ecm.model.Teamspace}.
		 * @param allowBrowseParentFolder
		 * @since 3.0.1 If not undefined or null, this boolean setting overrides the default behavior for whether or not
		 *            the user is allowed to browse for a different target folder for the add.
		 *            
		 *            When this option is not set, the default behavior is the user is only allowed to browse for a different 
		 *            folder if no parentFolder is set or if the parentFolder is the root folder. 
		 */
		setParentFolder: function(parentFolder, repository, objectStore, teamspace, allowBrowse) {
			var allowBrowseParentFolder = true;
			var selectInitialFolder = false;
			// If allowBrowse is not set (is undefined or null), apply the default behavior.
			if (parentFolder) {
				if (allowBrowse != null) {
					allowBrowseParentFolder = allowBrowse;
					// Select the initial folder when adding a folder, or when adding a document and: 
					// the folder is not the root, or the repository type is CM (add doc to root allowed), or unfiled adds are allowed. 
					selectInitialFolder =  !this._addContentItemDialog._typeDocument || !parentFolder.isRoot || repository._isCM() || this._allowUnfiledAdd;
				} else {
					if (parentFolder.isInstanceOf && parentFolder.isInstanceOf(ecm.model.ContentItem)) {
						allowBrowseParentFolder = parentFolder.rootFolder;
					} else if (parentFolder.isInstanceOf && parentFolder.isInstanceOf(ecm.model.WorkItem)) {
						var parentFolderContentItem = parentFolder.contentItem;
						allowBrowseParentFolder = parentFolderContentItem.rootFolder;
					}
				}
			}
			this.setTargetLocation(parentFolder, repository, objectStore, teamspace, allowBrowseParentFolder, false, selectInitialFolder);
		},

		applySourceItem: function(sourceItem) {
			if (!sourceItem)
				return false;

			var folderSet = false;
			var parentFolder = itemUtils.getItemParentFolder(sourceItem);
			if (parentFolder) {
				this.folderSelector.setSelected(parentFolder);
				if (this._unfiled.checked) {
					this._unfiled.set("checked", false);
					this.onSaveUnfiledChange();
				}
				folderSet = true;
			}
			return folderSet;
		},

		isEntryTemplateSelected: function() {
			return !!this._entryTemplateSelector.get("value");
		},

		selectEntryTemplateById: function(entryTemplateId, callback) {
			if (!entryTemplateId) {
				if (lang.isFunction(callback))
					callback(false);
				return;
			}

			this._entryTemplateSelector.store.query({entryTemplateId: entryTemplateId}).filter(function(option) {
				return option.entryTemplateId == entryTemplateId;
			}).then(lang.hitch(this, function(options) {
				var changed = false;
				if (options.length > 0) {
					if (options[0].value !== this._entryTemplateSelector.get("value")) {
						this._entryTemplateSelector.set("value", options[0].value + "");
						changed = true;
					}
				}
				if (lang.isFunction(callback))
					callback(changed);
			}));
		},

		/**
		 * Retrieves the list of content files only for HTML5 browsers, or when file tracker is used.
		 * 
		 * @return A W3C File API FileList.
		 */
		getFileInputFiles: function() {
			var rValue = null;
			if (this.hasExternalFiles()) {
				rValue = this._externalFiles;
			} else {
				var rValue = null;
				if (this._useFileTracker) {
					rValue = this._filesToUpload;
				} else {
					rValue = (this._fileInput) ? this._fileInput.files : null;
				}
			}
			return rValue;
		},

		/**
		 * Returns the list of selected files as objects in an array. For HTML5 browsers, returns a W3C File API
		 * FileList. For non-HTML5 browsers, each file object in the array will only contain the "name" property. If no
		 * files are selected, an empty array is returned.
		 */
		getSelectedFiles: function() {
			var files = this.getFileInputFiles();
			if (files == null) {
				// Not an HTML5 browser...
				files = [];
				if (this.getContentSourceType() == "Document") {
					var fileName = this.getInputFileName();
					if (fileName != null && fileName != "") {
						files.push({
							name: fileName
						});
					}
				}
			}
			return files;
		},

		/**
		 * @private
		 */
		_getPropertiesInput: function() {
			return this._propertiesInput;
		},

		/**
		 * @private
		 */
		_getChildComponentInput: function() {
			return this._childComponentValuesInput;
		},
		
		/**
		 * @private
		 */
		_getTemplateMetadataInput: function() {
			return this._templateMetadataValuesInput;
		},

		/**
		 * @private
		 */
		_getPermissionsInput: function() {
			return this._permissionsInput;
		},

		/**
		 * Retrieves the file input form.
		 * 
		 * @return The file input form.
		 */
		getFileInputForm: function() {
			return this._fileInputForm;
		},

		/**
		 * Retrieves the name of the content file.
		 * 
		 * @return The string name of the content file, with the path removed. If no file is selected or more than one
		 *         file is selected, an empty string is returned.
		 *         <p>
		 *         For content source type <code>ExternalURL</code>, the path portion of the URL is removed.
		 *         </p>
		 */
		getInputFileName: function() {
			var fileName = "";
			var contentSourceType = this.getContentSourceType();
			if (contentSourceType == "Document") {
				if (this._useFileTracker) {
					if (this._filesToUpload) {
						if (this._filesToUpload.length > 1) {
							fileName = "";
						} else if (this._filesToUpload.length == 1) {
							fileName = this._filesToUpload[0].fileName;
						}
					}
				} else {
					if (this._fileInput && this._fileInput.files && this._fileInput.files.length > 1) {
						return "";
					}
					if (this._fileInput) {
						var filePath = this._fileInput.value;
						if (filePath && filePath.length > 0) {
							var i = filePath.lastIndexOf("\\");
							return filePath.substr(i + 1);
						}
					}
				}

			} else if (contentSourceType == "ExternalURL") {
				var externalURL = this.getExternalURL();
				if (externalURL && externalURL.length > 0) {
					// Most likely (recommended form)...
					var i = externalURL.lastIndexOf("/");
					if (i == -1) {
						// But could be...
						i = externalURL.lastIndexOf("\\");
					}
					// Return the string after the last / or \\
					if (i != -1) {
						fileName = externalURL.substr(i + 1);
					} else {
						fileName = externalURL;
					}
				}
			} else if (this._addContentItemDialog.hasDaejaContent()) {
				fileName = this._addContentItemDialog.getDaejaPartFileName();
			}

			return fileName;
		},

		/**
		 * Displays the entry template name field.
		 * 
		 * @param entryTemplate
		 *            A {@link ecm.model.EntryTemplate} object.
		 */
		showEntryTemplateNameTextBox: function(entryTemplate) {
			// Make sure the currently active tooltip is closed and cleared.
			if (this.entryTemplateToolTip) {
				this.entryTemplateToolTip.close();
				this.entryTemplateToolTip.set("label", "");
			}

			this.entryTemplateToolTip = this._entryTemplateNameToolTip;
			if (this.entryTemplateToolTip && entryTemplate) {
				this.entryTemplateToolTip.set("label", entryTemplate.description);
			}

			// Hide the entry template selector, show the entry template name text box.
			domStyle.set(this._entryTemplateSelector.domNode, "display", "none");
			if (entryTemplate) {
				this._entryTemplateNameTextBox.set("value", entryTemplate.name);
			} else {
				this._entryTemplateNameTextBox.set("value", "");
			}
			domStyle.set(this._entryTemplateNameTextBox.domNode, "display", "");

			// Show the entry template row.
			domStyle.set(this._entryTemplateRow, "display", "");
		},

		/**
		 * Creates the entry template selector tooltip.
		 * 
		 * @param entryTemplate
		 *            A {@link ecm.model.EntryTemplate} object.
		 */
		createEntryTemplateSelectorTooltip: function(entryTemplate) {
			// Make sure the currently active tooltip is closed and cleared.
			if (this.entryTemplateToolTip) {
				this.entryTemplateToolTip.close();
				this.entryTemplateToolTip.set("label", "");
			}

			if (!this._entryTemplateSelectorToolTip) {
				// Create the entry template tooltip and associate it with the entry template selector here 
				// so as not to override the required tooltip message that is displayed when an entry template 
				// has not been selected.
				this._entryTemplateSelectorToolTip = new dijit.Tooltip({
					position: [
						"above",
						"below",
						"after",
						"before"
					],
					textDir: has("text-direction")
				});
				// Display the tooltip when the control gets focus.
				this.connect(this._entryTemplateSelector, "_onFocus", lang.hitch(this, function() {
					if (this._entryTemplateSelectorToolTip.label) {
						this._entryTemplateSelectorToolTip.open(this._entryTemplateSelector.domNode);
					}
				}));
				this.connect(this._entryTemplateSelector, "_onBlur", lang.hitch(this, function() {
					this._entryTemplateSelectorToolTip.close();
				}));
				this.connect(this._entryTemplateSelector, "onMouseOver", lang.hitch(this, function() {
					if (this._entryTemplateSelectorToolTip.label) {
						this._entryTemplateSelectorToolTip.open(this._entryTemplateSelector.domNode);
					}
				}));
				this.connect(this._entryTemplateSelector, "onMouseOut", lang.hitch(this, function() {
					this._entryTemplateSelectorToolTip.close();
				}));
			}

			this.entryTemplateToolTip = this._entryTemplateSelectorToolTip;
			if (entryTemplate) {
				this.entryTemplateToolTip.set("label", entryTemplate.description);
			}
		},

		/**
		 * Show the entry template selector.
		 * 
		 * @param entryTemplate
		 *            A {@link ecm.model.EntryTemplate} object.
		 */
		showEntryTemplateSelector: function(entryTemplate) {
			// Make sure the currently active tooltip is closed and cleared.
			if (this.entryTemplateToolTip) {
				this.entryTemplateToolTip.close();
				this.entryTemplateToolTip.set("label", "");
			}

			// Hide the entry template name text box, show the entry template selector.
			domStyle.set(this._entryTemplateNameTextBox.domNode, "display", "none");
			domStyle.set(this._entryTemplateSelector.domNode, "display", "");

			// Show the entry template row.
			domStyle.set(this._entryTemplateRow, "display", "");
		},

		/**
		 * Handles resizing within the general pane.
		 */
		resize: function() {
			if (this.hasExternalFiles()) {
				this._externalFileNames._ellipsis.layout();
			}
		}
	});
});
