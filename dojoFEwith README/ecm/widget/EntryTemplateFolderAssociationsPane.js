/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare", //
	"dojo/_base/lang", //
	"dojo/_base/array", //
	"dojo/string",//
	"dojo/aspect",//
	"dojo/_base/event",
	"dojo/_base/sniff", //
	"dojo/dom-class", //
	"dojo/dom-construct", //
	"dojo/dom-style", //
	"dojo/dom-attr",//
	"dojo/dom-geometry",//	
	"dijit/_TemplatedMixin", //
	"dijit/_WidgetsInTemplateMixin", //
	"dijit/form/Button", //
	"dijit/form/DropDownButton", //
	"dijit/form/Textarea", //
	"dijit/layout/BorderContainer",//
	"dijit/layout/ContentPane", //
	"idx/html", //
	"../MessagesMixin", //         
	"../LoggerMixin", //
	"../model/Item", //
	"../model/Teamspace", //
	"./DropDownDialog", //
	"./listView/ContentList", //
	"./listView/gridModules/FilterBar",
	"ecm/model/ResultSet",
	"gridx/modules/Filter",
	"ecm/model/EntryTemplateFolderAssociation",
	"ecm/widget/listView/modules/Label",
	"ecm/widget/listView/gridModules/RowContextMenu",

	"ecm/widget/listView/modules/Bar",
	"ecm/widget/listView/modules/Breadcrumb",
	"ecm/widget/listView/modules/FilterData",
	"ecm/widget/listView/modules/ViewDetail",
	"ecm/widget/listView/modules/ViewMagazine",
	"ecm/widget/listView/modules/Toolbar2",
	"ecm/widget/listView/modules/InlineMessage",
	"ecm/widget/dialog/ModifyAssociateFileTypesDialog",
	"dojo/text!./templates/EntryTemplateFolderAssociationsPane.html"
], //
function(declare, //
lang, //
array,//
string,//
aspect,//
event, //
has, //
domClass, //
domConstruct, //
domStyle, //
domAttr, //
domGeometry,//
_TemplatedMixin, //
_WidgetsInTemplateMixin, //
Button, //
DropDownButton, //
Textarea, //
BorderContainer,//
ContentPane, //
idxHtml, //
MessagesMixin, // 
LoggerMixin, //
Item, //
Teamspace, //
DropDownDialog, //
ContentList, //
FilterBar,//
ResultSet, Filter,//
EntryTemplateFolderAssociation,//
Label,//
RowContextMenu, //
Bar, //
Breadcrumb,//
FilterData, //
ViewDetail, //
ViewMagazine, //
Toolbar, //
InlineMessage, //
ModifyAssociateFileTypesDialog,//
template) { //

	/**
	 * @name ecm.widget.EntryTemplateFolderAssociationsPane
	 * @class Provides a widget that is used to display the EntryTemplates associated with a folder.
	 * @augments
	 */
	return declare("ecm.widget.EntryTemplateFolderAssociationsPane", [
		BorderContainer,
		ContentPane,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		LoggerMixin,
		MessagesMixin
	], {
		/** @lends ecm.widget.EntryTemplateFolderAssociationsPane.prototype */

		templateString: template,
		widgetsInTemplate: true,

		/**
		 * The active repository type.
		 */
		repositoryType: null,

		/**
		 * boolean whether the widget is in teamspace admin
		 */
		teamSpace: false,

		/**
		 * for teamspace admin to access
		 */
		selectionList: null,

		/**
		 * {@link dijit.layout.BorderContainer.gutters}
		 */
		gutters: false,

		/**
		 * readonly
		 */
		readOnly: false,

		/**
		 * callback is called after the pane have been rendered..
		 */
		_callback: null,

		/**
		 * the file types option dialog for a selected entry template
		 */
		_modifyAssociateFileTypesDialog: null,

		/**
		 * folder item to be set
		 */
		_item: null,

		/**
		 * the selected row index in the selected entry template contentlist
		 */
		_selectedRow: -1,
		/**
		 * the selected row index in the available entry template contentlist
		 */
		_selectedRowToBeAdded: -1,

		postCreate: function() {
			this.logEntry("postCreate");
			// Connect dialog events
			if (this.teamSpace) {
				// At this time, teamspace definition use of entry templates is only supported on P8.
				this.repositoryType = "p8";
				this.renderTeamSpace();
			}
			this.setModels();
			this._doConnections();
			// Connect content list events
			this.logExit("postCreate");
		},

		/**
		 * Set the folder item that is held by this._item and set the icon and label of the folder item.
		 * 
		 * @param item
		 *            A folder {@link ecm.model.ContentItem}.
		 * @param callback
		 *            A callback method that is called after the contentlist have been rendered.
		 */
		setItem: function(item, callback) {
			this.logEntry("setItem");
			this._item = item;
			this.repositoryType = this._item.repository.type;

			this._callback = callback;
			// Add folder/document type icon
			/*
			var iconClass = this._item.getMimeClass();
			domConstruct.create("SPAN", {
				innerHTML: idxHtml.escapeHTML(ecm.messages.entry_template_ItemInfoPrefix)
			}, this._itemInfoPrefix);
			domClass.add(this._itemInfoIcon, iconClass);

			if ((this._item.isFolder && this._item.isFolder()) || (this._item.isInstanceOf && this._item.isInstanceOf(ecm.model.Teamspace))) {
				// Add folder name
				domConstruct.create("SPAN", {
					innerHTML: idxHtml.escapeHTML(this._item.name)
				}, this._itemInfoName);
			}
			this.applyTextDir(this._itemInfoName.lastChild);
			*/
			if (this._item.repository && this._item.repository.isEntryTemplateSupported()) {
				if (this._item._teamspaceId) {
					this.rootItemId = this._item._teamspaceId;
					this._renderAvailableEntryTemplates();
				} else if (this._item.repository.rootItem) {
					this.rootItemId = this._item.repository.rootItem.id;
					this._renderAvailableEntryTemplates();
				} else {
					this._item.repository.retrieveItem("/", lang.hitch(this, function(rootFolder) {
						if (rootFolder) {
							this.rootItemId = rootFolder.id;
						}
						this._renderAvailableEntryTemplates();
					}));
				}
			}
			if (this.readOnly) {
				this._setReadOnly();
			}
			if (callback) {
				callback();
			}
			this.logExit("setItem");
		},

		_setReadOnly: function() {
//			domClass.add(this._removeButton.domNode, "dijitHidden");
//			domClass.add(this._moveDownButton.domNode, "dijitHidden");
//			domClass.add(this._moveUpButton.domNode, "dijitHidden");
//			domClass.add(this.makeDefaultButton.domNode, "dijitHidden");
			this._optionsButton.set("title", ecm.messages.entry_template_optionsButton_readonly_title);
			this._inheritFromParent.set("disabled", true);
			this._notInheritFromParent.set("disabled", true);
		},

		/**
		 * set the content list items from team space
		 */
		setItems: function(model, selectedItems, availableResultSet) {
			this._setAvailableList(availableResultSet);
			//set selectedItems
			if (selectedItems && selectedItems.length > 0) {
				this._item = model;
				var itemHanlder = lang.hitch(this, this._associationToResultSetItems);
				this._handleSelectedAssociationResponseItems(selectedItems, itemHanlder);
			}

		},
		/**
		 * render the contentlists with the provided items from teamspace
		 */
		renderTeamSpace: function() {
			this.selectionList = this._entryTemplatesSelected;
		},
		_setAvailableList: function(availableResultSet) {
			this._entryTemplatesAvailable.setResultSet(availableResultSet);
		},

		_afterRetrieveAvailableEntryTemplates: function(resultSet, selectedResultSet) {
			this._setupSelectedListColumns(resultSet);
			this._setAvailableList(resultSet);
			this._renderSelectedEntrytemplates(selectedResultSet);
		},

		_retrieveAvailableEntryTemplates: function() {
			var paging = false;
			this._item.repository.retrieveEntryTemplatesResultSet(lang.hitch(this, function(resultSet) {
				resultSet.context = "EntryTemplateFolderAssociationsPane";
				if (this._item.repository._isCM() && this.isCmRootFolderInConfig) {
					//save the resultSet temporarily to prevent always retrieve it in repository configuration parameters
					this._repositoryConfigurationParemeters._availableEntryTemplateResultSet = resultSet;
				}
				this._afterRetrieveAvailableEntryTemplates(resultSet);
			}), "all", paging);
		},

		_renderAvailableEntryTemplates: function() {
			if (this._item.repository._isCM() && this.isCmRootFolderInConfig) {
				//try to get the result from repository configuration parameters firstly
				var resultSet = this._repositoryConfigurationParemeters._availableEntryTemplateResultSet;
				var selectedResultSet = this._repositoryConfigurationParemeters._cmEntryTemplateRootFolderAssociationsResultSet;
				if (resultSet && selectedResultSet) {
					this._afterRetrieveAvailableEntryTemplates(resultSet, selectedResultSet);
				} else {
					this._retrieveAvailableEntryTemplates();
				}
			} else {
				this._retrieveAvailableEntryTemplates();
			}

		},
		_renderSelectedEntrytemplates: function(selectedResultSet) {
			var currentFolderAssociations;
			if (this._item.repository._isCM() && this.isCmRootFolderInConfig) {
				if (selectedResultSet) {
					this._entryTemplatesSelected.setResultSet(selectedResultSet);
					this._checkAllSelectedFileTypes();
					return;

				}
				//repository configuration parameters will have the associations 
				if (this._repositoryConfigurationParemeters) {
					var rootFolderAssociations = this._repositoryConfigurationParemeters.cmEntryTemplateRootFolderAssociations;
					if (!rootFolderAssociations) {
						rootFolderAssociations = this._repositoryConfigurationParemeters.repositoryData.repositoryConfig.getCmEntryTemplateRootFolderAssociations();
						if (rootFolderAssociations) {
							rootFolderAssociations = JSON.parse(rootFolderAssociations);
						}
					}
					if (rootFolderAssociations) {
						this._handleSelectedAssociationResponseItems(rootFolderAssociations);
					}
				}
			} else {
				this._item.retrieveEntryTemplateFolderAssociations(lang.hitch(this, function(response) {
					if (response.associationsExist && response.privEditEntryTemplateFolderAssociations == false) {
						//the user has no permission to modify the annotation
						this.readOnly = true;
					}
					if (!response.associationsExist && (response.privCreateEntryTemplateFolderAssociations == false || (this._item.repository._isP8() && this._item.hasPrivilege("privAddToFolder") == false))) {
						//the user has no permission to create the annotation
						this.readOnly = true;
					}
					if (this._item.repository._isCM() && this.isCmRootFolderInConfig) {
						//cm can configure root folder associations in admin desktop
						this.readOnly = false;
					}
					if (this.readOnly) {
						this._setReadOnly();
					}
					this.currentFolderAssociations = response.datastore.items;
					var missCount = response.folder_ET_count + response.document_ET_count - response.datastore.items.length;
					if (missCount > 0) {
						this._missEntryTemplatesMessage = string.substitute(ecm.messages.entry_template_association_less_than_record, [
							missCount
						]);
					}
					if (response.folderDocid && response.folderDocid != this._item.id) {
						// It means the ET associations are inherited
						// Add folder/document type icon
						this._associationInherited = true;
						this._processInheritArea(response);
						this._associationInheritedAtBeginning = true;
						this._inheritFromParent.set("checked", true);
						this._notInheritFromParent.set("checked", false);
						this._handleSelectedAssociationResponseItems(this.currentFolderAssociations);

						if (missCount > 0) {
							this._missEntryTemplatesMessage = null;
							this._missEntryTemplatesMessageForInherit = string.substitute(ecm.messages.entry_template_association_less_than_record, [
								missCount
							]);
						}

						if (this._callback)
							this._callback(this._getSelectedEntryTemplates());
					} else if (response.associationsExist) { // There were entry template associations for the current folder
						// Retrieve the entry template associations that would be inherited
						this._item.retrieveEntryTemplateFolderAssociations(lang.hitch(this, function(response) {
							var selectedResultSetItems = this._associationToResultSetItems(response.datastore.items);

							if (response.document_ET_count + response.folder_ET_count > 0) {
								//the list may be empty for the user may not have permission to see associated entry templates
								this._inheritedAssociations = selectedResultSetItems;
								this._associationInherited = false;
								this._processInheritArea(response);
								this._associationInheritedAtBeginning = false;
								this._inheritFromParent.set("checked", false);
								this._notInheritFromParent.set("checked", true);
								var missCount = response.folder_ET_count + response.document_ET_count - response.datastore.items.length;
								if (missCount > 0) {
									this._missEntryTemplatesMessageForInherit = string.substitute(ecm.messages.entry_template_association_less_than_record, [
										missCount
									]);
								}

							} else {
								this._inheritFromParent.set("checked", false);
								this._notInheritFromParent.set("checked", true);
								this.inheritArea.set("display", "block");
							}
							this._handleSelectedAssociationResponseItems(this.currentFolderAssociations);
							if (this._callback)
								this._callback(this._getSelectedEntryTemplates());
						}), this.rootItemId, true);
// 							this._inheritFromParent.set("checked", false);
// 							this._notInheritFromParent.set("checked", true);
// 							this.inheritArea.set("display", "block");
					}

				}), this.rootItemId);
			}

		},

		/**
		 * @private
		 */
		_processInheritArea: function(response) {
			this.inheritArea.domNode.style.display = "block";
			var iconClass = this._item.getMimeClass();
			domClass.add(this._folderIcon, iconClass);
			this._folderIcon.title = idxHtml.escapeHTML(this._item.name);

			var folderName = response.folderName != null ? response.folderName : "";
			if (folderName == "" && response.folderPath == "/" && this._item.repository) {
				folderName = this._item.repository.name;
			}

			this._folderName.innerHTML = '<span>' + idxHtml.escapeHTML(folderName) + '</span>';
			this._inheritFromParent.set("checked", true);
			//var altText = ecm.messages.entry_template_inherited_folder_path + "\\" + this._item.repository.name + response.folderPath.replace(/\//g, "\\");
			//this._setLabelOfSelectedEntryTemlatesList(ecm.messages.entry_template_inherited_entry_templates + " " + folderName + '&emsp;' + '<img role="img" class="informationSmall" alt="' + altText + '" title="' + altText + '" src="' + blankGif + '" />');

			var altText = string.substitute(ecm.messages.entry_template_inherited_folder_path, [
				folderName,
				this._item.repository.name + response.folderPath.replace(/\//g, "\\")
			]);
			this._createFolderPathToolTip(altText);
		},

		/**
		 * @private
		 */
		_createFolderPathToolTip: function(content) {

			if (!this._folderPathToolTip) {
				// Create the folder path tooltip  
				this._folderPathToolTip = new dijit.Tooltip({
					position: [
						"above",
						"below",
						"after",
						"before"
					]
				});
				this._folderPathToolTip.set("label", content);
				// Display the tooltip when the control gets focus.
				this.connect(this._folderName, "onfocus", lang.hitch(this, function() {
					this._folderPathToolTip.open(this._folderName);
				}));
				this.connect(this._folderName, "onblur", lang.hitch(this, function() {
					this._folderPathToolTip.close();
				}));
				this.connect(this._folderName, "onmouseover", lang.hitch(this, function() {
					this._folderPathToolTip.open(this._folderName);
				}));
				this.connect(this._folderName, "onmouseout", lang.hitch(this, function() {
					this._folderPathToolTip.close();
				}));
			}
		},

		_handleSelectedAssociationResponseItems: function(items, itemHandler) {
			var selectedResultSetItems;
			if (!itemHandler)
				selectedResultSetItems = this._associationToResultSetItems(items);
			else
				selectedResultSetItems = itemHandler(items);
			var resultSetSelected = this._entryTemplatesSelected.getResultSet();
			if (!resultSetSelected.items) {
				resultSetSelected.items = [];
			}
			resultSetSelected.append(selectedResultSetItems);
			if (this._associationInherited) {
				this._inheritedAssociations = selectedResultSetItems;
			}
			//remove associated ets from available list
			var resultSetAvailable = this._entryTemplatesAvailable.getResultSet();
			if (!this._associationInherited) {
				for ( var index in selectedResultSetItems.items) {
					resultSetAvailable.deleteItem(selectedResultSetItems.items[index]);
				}
			}
			resultSetAvailable.onChange(resultSetAvailable);
			this._checkAllSelectedFileTypes();
		},

		/**
		 * @private make the no restriction word for no filetype defined associations
		 */
		_setNoRestrictionDisplayValue: function(item) {
			if (!item.attributeDisplayValues)
				item.attributeDisplayValues = {};
			if (!item.attributes.FileTypes || item.attributes.FileTypes.length == 0) {
				item.attributes.FileTypes = "";
				var type;
				if (this.repositoryType == "p8") {
					type = item.attributes.TargetObjectType;
				} else if (this.repositoryType == "cm") {
					type = item.attributes.clbETType;
				}
				if (type == "document") {
					item.attributeDisplayValues.FileTypes = ecm.messages.entry_template_fileTypes_any_type_of_file;
				}
			} else {
				item.attributeDisplayValues.FileTypes = item.attributes.FileTypes;
			}
		},

		/**
		 * @private make entry template folder associations response to result set
		 */
		_associationToResultSetItems: function(items) {
			var resultSetItems = [];
			var availableResultSet = this._entryTemplatesAvailable.getResultSet();
			require([
				"dojo/_base/array"
			], lang.hitch(this, function(array) {
				var self = this;
				lang.hitch(this, array.forEach(items, lang.hitch(this, function(resultItem, j) {
					lang.hitch(this, array.forEach(availableResultSet.items, lang.hitch(this, function(item, i) {

						if ((resultItem.template_name && item.id == resultItem.template_name) || (resultItem.entryTemplateItemId && resultItem.entryTemplateItemId == item.itemId)) {
							//it's from folder associations or from repository configuration parameters
							var tempItem = item.clone();
							tempItem.attributes.CurrentFolderAsParent = resultItem.currentFolderAsParent;
							tempItem.attributes.FileTypes = "";
							array.forEach(resultItem.fileTypes, function(fileType, k) {
								if (tempItem.attributes.FileTypes != "") {
									tempItem.attributes.FileTypes += ", ";
								}
								tempItem.attributes.FileTypes += fileType;
							});
							tempItem.isDefault = resultItem.isDefault;
							if (this.repositoryType == "p8" && this._targetOSIsNotCurrentOS(tempItem)) {
								tempItem._targetOSIsNotCurrentOS = true;
								tempItem.attributes.CurrentFolderAsParent = false;
							}
							this._setNoRestrictionDisplayValue(tempItem);
							this._checkFileTypes(tempItem);
							resultSetItems.push(tempItem);
						} else if (!resultItem.template_name && item.id == resultItem.id) {
							//it's from teamspace
							var tempItem = item.clone();
							if (resultItem.currentFolderAsParent != undefined) {
								tempItem.attributes.CurrentFolderAsParent = resultItem.currentFolderAsParent;
							} else {
								tempItem.attributes.CurrentFolderAsParent = true;
							}
							tempItem.isDefault = resultItem.teamspaceDefault;
							if (this.repositoryType == "p8" && this._targetOSIsNotCurrentOS(tempItem)) {
								tempItem._targetOSIsNotCurrentOS = true;
								tempItem.attributes.CurrentFolderAsParent = false;
							}
							tempItem.attributes.FileTypes = "";
							if (!resultItem.fileTypes)
								resultItem.fileTypes = [];
							array.forEach(resultItem.fileTypes, function(fileType, k) {
								if (tempItem.attributes.FileTypes != "") {
									tempItem.attributes.FileTypes += ", ";
								}
								tempItem.attributes.FileTypes += fileType;
							});
							this._setNoRestrictionDisplayValue(tempItem);
							this._checkFileTypes(tempItem);
							resultSetItems.push(tempItem);
						}
					})));
				})));
			}));

			return {
				items: resultSetItems
			};
		},

		/**
		 * @private check if the file types exist
		 */
		_checkFileTypes: function(item) {
			var fileTypeError = false;
			if (item.attributes.FileTypes && item.attributes.FileTypes.length != 0) {
				var fileTypes = item.attributes.FileTypes.split(/, ?/g);

				for ( var i in fileTypes) {
					var findFileType = false;
					for ( var j in ecm.model.desktop.fileTypes) {
						if (ecm.model.desktop.fileTypes[j]._attributes.name == fileTypes[i]) {
							findFileType = true;
							break;
						}
					}
					if (!findFileType) {
						fileTypeError = true;
					}
				}
				if (fileTypeError) {
					this._fileTypeError = true;
					item.fileTypeError = true;
				} else {
					item.fileTypeError = false;
				}
			}
			return fileTypeError;
		},
		/**
		 * @private check if the file types exist
		 */
		_checkAllSelectedFileTypes: function() {
			var resultSetSelected = this._entryTemplatesSelected.getResultSet();
			var fileTypeError = false;
			for ( var i in resultSetSelected.items) {
				fileTypeError = fileTypeError || this._checkFileTypes(resultSetSelected.items[i]);
			}
			if (!fileTypeError) {
				this._fileTypeError = false;
			}
		},

		/**
		 * @private connect events with widgets
		 */
		_doConnections: function() {
			this.connect(this._entryTemplatesSelected, "onRowSelectionChange", lang.hitch(this, function(items) {
				var item = null;
				if (items.length > 0) {
					item = items[0];

					var rowId = this._entryTemplatesSelected.grid.store.getIdentityId(item.id);
					var rowIndex = this._entryTemplatesSelected.grid.model.idToIndex(rowId);
					var size = this._entryTemplatesSelected.grid.model.size();
					if (!(item.isDefault)) {
						this.makeDefaultButton.set("title", ecm.messages.workspacebuilder_makeDefault_list);
					} else {
						this.makeDefaultButton.set("title", ecm.messages.workspacebuilder_removeDefault_list);
					}
					if (rowIndex >= 0 && !this._associationInherited) {
						var type;
						if (this.repositoryType == "p8") {
							type = item.attributes.TargetObjectType;
						} else if (this.repositoryType == "cm") {
							type = item.attributes.clbETType;
						}
						if (type == "document") {
							this._optionsButton.set("disabled", false);
						} else {
							this._optionsButton.set("disabled", true);
						}
						if (!this.readOnly) {
							this._removeButton.set("disabled", false);
							this._moveDownButton.set("disabled", false);
							this._moveUpButton.set("disabled", false);
							this.makeDefaultButton.set("disabled", false);

						}
					} else {
						this._removeButton.set("disabled", true);
						this._optionsButton.set("disabled", true);
						this._moveDownButton.set("disabled", true);
						this._moveUpButton.set("disabled", true);
						this.makeDefaultButton.set("disabled", true);

					}
					if (rowIndex == 0 || size == 1) {
						this._moveUpButton.set("disabled", true);
					}
					if (rowIndex == (size - 1) || size == 1) {
						this._moveDownButton.set("disabled", true);
					}
					this._selectedRow = rowIndex;
				}
			}));

			this.connect(this._entryTemplatesAvailable, "onRowSelectionChange", lang.hitch(this, function(items) {
				var item = null;
				if (items.length > 0) {
					item = items[0];

					var rowId = this._entryTemplatesAvailable.grid.store.getIdentityId(item.id);
					var rowIndex = this._entryTemplatesAvailable.grid.model.idToIndex(rowId);
					if (rowIndex >= 0 && !this._associationInherited) {
						if (!this.readOnly) {
							this.addButton.set("disabled", false);
						}
					} else {
						this.addButton.set("disabled", true);
					}
					this._selectedRowToBeAdded = rowIndex;
				}
			}));
			this.connect(this._entryTemplatesSelected, "onRender", lang.hitch(this, function(items) {
				if (this._selectedRow >= 0) {
					this._entryTemplatesSelected.grid.select.row.selectById(this._entryTemplatesSelected.grid.model.indexToId(this._selectedRow));
					var row = this._entryTemplatesSelected.grid.row(this._selectedRow);
					if (row) {
						this._entryTemplatesSelected.onRowSelectionChange([
							row.item()
						]);
					}
				}
			}));
			this.connect(this._entryTemplatesAvailable, "onRender", lang.hitch(this, function(items) {
				if (this._selectedRowToBeAdded >= 0) {
					this._entryTemplatesAvailable.grid.select.row.selectById(this._entryTemplatesAvailable.grid.model.indexToId(this._selectedRowToBeAdded));
					var row = this._entryTemplatesAvailable.grid.row(this._selectedRowToBeAdded);
					if (row) {
						this._entryTemplatesAvailable.onRowSelectionChange([
							row.item()
						]);
					}
				}
			}));
			this.connect(this._inheritFromParent, "onClick", lang.hitch(this, function(event) {
				this._clickInheritFromParentButton();
			}));
			this.connect(this._notInheritFromParent, "onClick", lang.hitch(this, function(event) {
				this._clickNotInheritFromParentButton();
			}));
		},

		onInherit: function() {

		},

		onInheritChange: function() {

		},

		_clickInheritFromParentButton: function() {
			if (!this._associationInherited) {
				this._associationInherited = true;
				if (this._associationInheritedAtBeginning) {
					this.onInherit();
				} else {
					this.onSelectionChange();
				}
				//this._associationInherited = true;
				this._inheritFromParent.set("checked", true);
				this._notInheritFromParent.set("checked", false);

				this._removeButton.set("disabled", true);
				this._optionsButton.set("disabled", true);
				this._moveDownButton.set("disabled", true);
				this._moveUpButton.set("disabled", true);
				this.addButton.set("disabled", true);
				this.makeDefaultButton.set("disabled", true);

				var resultSetSelected = this._entryTemplatesSelected.getResultSet();
				this._userSelectedAssociations = resultSetSelected.items;
				resultSetSelected.items = [];
				if (this._inheritedAssociations) {
					resultSetSelected.append(this._inheritedAssociations);
				}
				this._entryTemplatesSelected.setResultSet(resultSetSelected);
			}
		},

//set to not inherit, clear the selected list.
		_clickNotInheritFromParentButton: function() {
			if (this._associationInherited) {
				this._associationInherited = false;
				var resultSet = this._entryTemplatesSelected.getResultSet();
				resultSet.items = [];
				if (this._userSelectedAssociations) {
					resultSet.items = this._userSelectedAssociations;
				}
				resultSet.onChange(resultSet);
				this._inheritFromParent.set("checked", false);
				this._notInheritFromParent.set("checked", true);
				this.onSelectionChange();
			}
		},

		/**
		 * Sets the models to be used
		 */
		setModels: function() {
			this.logEntry("setModels");
			this._createContentLists();
			this._setupSelectedListColumns();
			this.logExit("setModels");
		},

		/**
		 * @private
		 */
		_getStructureColumn: function(resultSet, field) {
			if (!resultSet || !field) {
				return null;
			}
			var columns = resultSet.structure.cells[0];
			var column = null;
			for (var i = 0; i < columns.length; i++) {
				if (columns[i].field.indexOf(field) >= 0) {
					column = columns[i];
					break;
				}
			}
			return column;
		},

		/**
		 * @private
		 */
		_updateColumnLabel: function(resultSet, field, label) {
			var column = this._getStructureColumn(resultSet, field);
			if (column != null) {
				column.name = label;
			}
		},

		/**
		 * @private setup the contentlist's columns of folder associated entry template.
		 */
		_setupSelectedListColumns: function(availableResultSet) {
			var resultSet = new ResultSet();
			var cells = [];
			cells[0] = [];

			var defaultEntrytemplate = {
				field: "teamspaceDefault",
				name: "",
				headerAriaLabel: ecm.messages.entry_tempalte_teamspace_default,
				width: "15px",
				sortable: false,
				decorator: function(data, rowId, rowIndex) {
					var item = this.grid.row(rowId).item();
					var isDefault = true;
					if (!item.isDefault) {
						isDefault = false;
					}
					var img = "";
					var altText = ecm.messages.entry_tempalte_teamspace_default;
					if (isDefault) {
						var blankGif = require.toUrl("dojo/resources/blank.gif");
						img = '<img role="img" class="ecmMimeTypeIcon ecmDefaultIcon" alt="' + altText + '" title="' + altText + '" src="' + blankGif + '" />';
					} else {
						img = '&nbsp;';
					}
					return img;
				}
			};
			cells[0].push(defaultEntrytemplate);

			var columnCurrentFolderAsParent = {
				field: "CurrentFolderAsParent",
				name: "",
				headerAriaLabel: ecm.messages.entry_template_columns_destination,
				width: "10px",
				sortable: false,
				decorator: function(data, rowId, rowIndex) {
					var item = this.grid.row(rowId).item();
					var blankGif = require.toUrl("dojo/resources/blank.gif");
					var img = "";
					if (!data || (data && data == "False") || (data && data == "false")) {
						var altText = ecm.messages.entry_template_docs_added_to_template_destination;
						if (item._targetOSIsNotCurrentOS) {
							altText += '\n' + string.substitute(ecm.messages.entry_template_docs_added_to_other_object_store, [
								item.attributes.TargetObjectStoreName
							]);
						}
						img = '<img role="img" class="ecmMimeTypeIcon preserveDirectPermissionsFalseIcon" alt="' + altText + '" title="' + altText + '" src="' + blankGif + '" />';
						img += '<span class="ecmMimeTypeIconChar" title="' + altText + '" >' + ecm.messages.entry_template_security_policy_preserve_false_char + '</span>';

					} else {
						var img = '&nbsp;';
					}
					return img;
				}
			};
			cells[0].push(columnCurrentFolderAsParent);

			var columnMimeType = this._getStructureColumn(availableResultSet, "mimeTypeIcon");
			if (!columnMimeType) {
				columnMimeType = {
					field: "mimeTypeIcon",
					name: "",
					headerAriaLabel: ecm.messages.mime_type_icon,
					headerClasses: "ecmIconCell",
					cellClasses: "ecmIconCell",
					decorator: "DetailsViewDecorator.mimeTypeDecorator",
					width: "25px",
					sortable: false
				};
			}
			cells[0].push(columnMimeType);

			var columnNameAvailable = this._getStructureColumn(availableResultSet, "{NAME}");
			var columnName = {
				field: "{NAME}",
				name: ecm.messages.Name,
				width: "20em",
				sortable: false
			};
			if (columnNameAvailable) {
				columnName.name = columnNameAvailable.name;
			}
			cells[0].push(columnName);

			var columnDescriptionFromAvailable = this._getStructureColumn(availableResultSet, "Description");
			var descriptionFieldName;
			if (this.repositoryType == "p8") {
				descriptionFieldName = "EntryTemplateDescription";
			} else if (this.repositoryType == "cm") {
				descriptionFieldName = "clbDescription";
			}
			var columnDescription = {
				field: descriptionFieldName,
				name: ecm.messages.entry_template_description_label,
				width: "15%",
				sortable: false,
				decorator: function(data, rowId, rowIndex) {
					if (!data || data == "") {
						return "&nbsp;";
					} else {
						return data;
					}

				}
			};
			if (columnDescriptionFromAvailable) {
				columnDescription.field = columnDescriptionFromAvailable.field;
				if (this.repositoryType != "cm") {
					columnDescription.name = columnDescriptionFromAvailable.name;
				}
			}
			cells[0].push(columnDescription);

			var columnClassAvailable = this._getStructureColumn(availableResultSet, "ClassName");
			var columnClass = {
				field: "IcnClassName",
				name: ecm.messages.entry_template_columns_className,
				width: "10%",
				sortable: false
			};
			if (columnClassAvailable) {
				columnClass.field = columnClassAvailable.field;
				if (this.repositoryType != "cm") {
					columnClass.name = columnClassAvailable.name;
				}
			}
			cells[0].push(columnClass);

			var columnTypeAvailable = this._getStructureColumn(availableResultSet, "ObjectType");
			if (!columnTypeAvailable) {
				columnTypeAvailable = this._getStructureColumn(availableResultSet, "ETType");
			}
			var columnType = {
				field: "TargetObjectType",
				name: ecm.messages.entry_template_columns_type,
				width: "10%",
				sortable: false
			};
			if (columnTypeAvailable) {
				columnType.field = columnTypeAvailable.field;
				columnType.name = columnTypeAvailable.name;
			}
			cells[0].push(columnType);

			var columnWorkFlowAvailable = this._getStructureColumn(availableResultSet, "Workflow");
			var columnWorkFlow = {
				field: "IcnWorkflowName",
				name: ecm.messages.entry_template_columns_workflow,
				width: "10%",
				sortable: false
			};
			if (columnWorkFlowAvailable) {
				columnWorkFlow.field = columnWorkFlowAvailable.field;
				if (this.repositoryType != "cm") {
					columnWorkFlow.name = columnWorkFlowAvailable.name;
				}
			}
			cells[0].push(columnWorkFlow);

			var columnFiletypes = {
				field: "FileTypes",
				name: ecm.messages.entry_template_fileTypes,
				width: '20%',
				sortable: false,
				decorator: function(data, rowId, rowIndex) {
					var item = this.grid.row(rowId).item();
					if (data && data == ecm.messages.entry_template_fileTypes_any_type_of_file) {
						return [
							'<em>' + data + '</em>'
						].join('');
					} else if (item.fileTypeError) {
						var altText = ecm.messages.entry_template_file_type_not_existing;
						var blankGif = require.toUrl("dojo/resources/blank.gif");
						return [
							'<img role="img" class="ecmMimeTypeIcon fileTypeErrorIcon" style="margin-top:1px" alt="' + altText + '" title="' + altText + '" src="' + blankGif + '" />' + data
						].join('');
					} else {
						return data;
					}
				}
			};
			cells[0].push(columnFiletypes);

			resultSet.structure = {};
			resultSet.structure.cells = cells;
			resultSet.num_results = 0;
			resultSet.rows = [];
			this._entryTemplatesSelected.multiSelect = false;
			this._entryTemplatesSelected.setResultSet(resultSet);
		},

		_getSelectedEntryTemplates: function() {
			var selectedEntryTemplates = this._entryTemplatesSelected.getResultSet().items;
			var entryTemplateFolderAssociations = new Array();
			//if (selectedEntryTemplates && Array.isArray(selectedEntryTemplates)) {
			if (selectedEntryTemplates) {
				array.forEach(selectedEntryTemplates, function(item, index) {
					var entryTemplateFolderAssociation = new EntryTemplateFolderAssociation();
					entryTemplateFolderAssociation.entryTemplate = item;
					entryTemplateFolderAssociation.currentFolderAsParent = item.attributes.CurrentFolderAsParent;
					if (item.attributes.FileTypes) {
						entryTemplateFolderAssociation.fileTypes = item.attributes.FileTypes.split(/, ?/g);
					}
					entryTemplateFolderAssociations.push(entryTemplateFolderAssociation);
				});
			}
			return entryTemplateFolderAssociations;
		},
		/**
		 * @private called when any modifiation happens
		 */
		_handleSelectionChange: function() {
			this.onSelectionChange(this._getSelectedEntryTemplates());
		},
		/**
		 * Save the associated entry templates.
		 * 
		 * @param callback
		 *            A function that is called after the associated entry templates are saved
		 * @param checkIn
		 *            A boolean value indicating whether this operation should check in the item.
		 */
		save: function(callback, checkIn) {
			this.logEntry("save");
			if (!this._associationInherited) {
				//not inherit mode
				var selectedEntryTemplates = this._entryTemplatesSelected.getResultSet().items;
				var entryTemplateFolderAssociations = new Array();
				//if (selectedEntryTemplates && Array.isArray(selectedEntryTemplates)) {
				if (selectedEntryTemplates) {
					array.forEach(selectedEntryTemplates, function(item, index) {
						var entryTemplateFolderAssociation = new EntryTemplateFolderAssociation();
						entryTemplateFolderAssociation.entryTemplate = item;
						entryTemplateFolderAssociation.isDefault = item.isDefault;
						entryTemplateFolderAssociation.currentFolderAsParent = item.attributes.CurrentFolderAsParent;
						if (item.attributes.FileTypes) {
							entryTemplateFolderAssociation.fileTypes = item.attributes.FileTypes.split(/, ?/g);
						}
						entryTemplateFolderAssociations.push(entryTemplateFolderAssociation);
					});
				}
				if (this._item.repository._isCM() && this.isCmRootFolderInConfig) {
					//save the associations to repository configuration for CM root folder
					var data = [];
					if (this._repositoryConfigurationParemeters) {
						dojo.forEach(entryTemplateFolderAssociations, function(item, index) {
							var etAssoc = {
								currentFolderAsParent: item.currentFolderAsParent,
								isDefault: item.isDefault,
								fileTypes: item.fileTypes,
								type: item.entryTemplate.attributes.clbETType,
								entryTemplateItemId: item.entryTemplate.itemId

							};
							data.push(etAssoc);
						}, this);
						this._repositoryConfigurationParemeters.cmEntryTemplateRootFolderAssociations = data;
						this._repositoryConfigurationParemeters._cmEntryTemplateRootFolderAssociationsResultSet = this._entryTemplatesSelected.getResultSet();

					}
					this._EntryTemplateAssociationDialog.onClose();
				} else {
					//save the associations to repository items.
					this._item.saveEntryTemplateFolderAssociations(callback, entryTemplateFolderAssociations, checkIn);
				}
			} else {
				//start to not inherit but set to inherit mode
				if (!this._associationInheritedAtBeginning) {
					this._item.saveEntryTemplateFolderAssociations(callback, [], checkIn);
				}
			}
			this.logExit("save");
		},

		/**
		 * @private
		 */
		_createContentLists: function() {
			this._entryTemplatesAvailable.setGridExtensionModules(this._getContentListGridModules());
			this._entryTemplatesAvailable.setContentListModules(this._getAvailableContentListModules());
			domAttr.set(this._entryTemplatesAvailable.domNode, "role", "region");
			domAttr.set(this._entryTemplatesAvailable.domNode, "aria-label", ecm.messages.entryTemplates_content_list_label);
			this._entryTemplatesSelected.setContentListModules(this._getSelectedContentListModules());

			this._entryTemplatesSelected.itemPropArea.splitter = false;
			this._entryTemplatesAvailable.itemPropArea.splitter = false;
			this._entryTemplatesSelected.set("focused", true);//add this line to let the tooltip can be shown just after dialog shown.
		},
		/**
		 * @private Get the content list grid modules.
		 */
		_getContentListGridModules: function() {
			var array = [];
			array.push(Filter);
			array.push({
				moduleClass: FilterBar,
				conditionContain: ecm.messages.operator_LIKE,
				conditionStartWith: ecm.messages.operator_STARTSWITH,
				conditionEndWith: ecm.messages.operator_ENDSWITH,
				conditions: {
					string: [
						'contain',
						'startWith',
						'endWith'
					]
				}
			});
			return array;
		},

		/**
		 * @private Get the content list modules for available list.
		 */
		_getAvailableContentListModules: function() {
			var array = [];
			var viewModules = [];
			array.push({
				moduleClass: Bar,
				top: [
					[
						[
							{
								moduleClass: Label,
								"label": ecm.messages.entry_template_avaliable_entry_templates
							},
							{
								moduleClass: FilterData,
								conditionContain: ecm.messages.operator_LIKE,
								conditionStartWith: ecm.messages.operator_STARTSWITH,
								conditionEndWith: ecm.messages.operator_ENDSWITH,
								conditions: {
									string: [
										'contain',
										'startWith',
										'endWith'
									]
								}
							}
						]
					]
				]
			});
			return array;
		},
		/**
		 * @private Get the content list modules for selected list.
		 */
		_getSelectedContentListModules: function() {
			var array = [];
			var viewModules = [];
			return array;
		},

		_targetOSIsNotCurrentOS: function(item) {
			var mimetype = null;
			if (item.MimeType) {
				mimetype = item.MimeType;
			} else if (item.mimetype) {
				mimetype = item.mimetype;
			} else if (item.attributes && item.attributes.MimeType) {
				mimetype = item.attributes.MimeType;
			} else if (item.attributes && item.attributes.mimetype) {
				mimetype = item.attributes.mimetype;
			}
			if (mimetype && item.attributes && item.attributes.TargetObjectStoreName && item.repository) {
				if (mimetype.indexOf("application/x-icn") >= 0) {
					return item.attributes.TargetObjectStoreName.toLowerCase() != item.repository.objectStoreName.toLowerCase();
				} else if (mimetype.indexOf("application/x-filenet") >= 0) {
					return item.attributes.TargetObjectStoreName.toLowerCase() != item.repository.objectStoreDisplayName.toLowerCase();
				}
			}
			return false;
		},

		/**
		 * @private the onclick event handler of add button
		 */
		_onClickAdd: function() {
			this._removeButton.set("disabled", true);
			this.logEntry("_onClickAdd");
			var appendResultSet = {};
			appendResultSet.items = this._entryTemplatesAvailable.getSelectedItems();
			var resultSet = this._entryTemplatesSelected.getResultSet();

			for ( var index in appendResultSet.items) {
				appendResultSet.items[index].attributes.CurrentFolderAsParent = true;
				if (this.repositoryType == "p8" && this._targetOSIsNotCurrentOS(appendResultSet.items[index])) {
					appendResultSet.items[index]._targetOSIsNotCurrentOS = true;
					appendResultSet.items[index].attributes.CurrentFolderAsParent = false;
				}
				appendResultSet.items[index].attributes.FileTypes = "";
				this._setNoRestrictionDisplayValue(appendResultSet.items[index]);
				//this._checkFileTypes(appendResultSet.items[index]);
			}
			//in teamspace the items may be undefined.
			if (!resultSet.items) {
				resultSet.items = [];
			}
			resultSet.append(appendResultSet);
			var resultSetTobeAdded = this._entryTemplatesAvailable.getResultSet();
			for ( var index in appendResultSet.items) {
				resultSetTobeAdded.deleteItem(appendResultSet.items[index]);
			}
			if (this._selectedRowToBeAdded >= resultSetTobeAdded.items.length) {
				this._selectedRowToBeAdded--;
			}
			resultSetTobeAdded.onChange(resultSetTobeAdded);
			if (this._selectedRowToBeAdded < 0) {
				this.addButton.set("disabled", true);
			}
			this._checkAllSelectedFileTypes();
			this._handleSelectionChange();
			this.logExit("_onClickAdd");
		},

		/**
		 * @private the onclick event handler of move up button
		 */
		_onClickUp: function() {
			this._moveUpButton.set("disabled", true);
			this.logEntry("_onClickUp");
			var resultSet = this._entryTemplatesSelected.getResultSet();
			var itemswap = resultSet.items[this._selectedRow - 1];
			resultSet.items[this._selectedRow - 1] = resultSet.items[this._selectedRow];
			resultSet.items[this._selectedRow] = itemswap;
			this._selectedRow--;
			resultSet.onChange(resultSet);
			this._handleSelectionChange();
			this.logExit("_onClickUp");
		},
		/**
		 * @private the onclick event handler of move down button
		 */
		_onClickDown: function() {
			this._moveDownButton.set("disabled", true);
			this.logEntry("_onClickDown");
			var resultSet = this._entryTemplatesSelected.getResultSet();
			var itemswap = resultSet.items[this._selectedRow + 1];
			resultSet.items[this._selectedRow + 1] = resultSet.items[this._selectedRow];
			resultSet.items[this._selectedRow] = itemswap;
			this._selectedRow++;
			resultSet.onChange(resultSet);
			this._handleSelectionChange();
			this.logExit("_onClickDown");
		},
		/**
		 * @private the onclick event handler of option button
		 */
		_onClickOptions: function() {
			this.logEntry("_onClickOptions");
			if (this._modifyAssociateFileTypesDialog)
				this._modifyAssociateFileTypesDialog.destroy();
			var selectedItem = this._entryTemplatesSelected.grid.row(this._selectedRow).item();
			this._modifyAssociateFileTypesDialog = new ModifyAssociateFileTypesDialog({
				item: selectedItem,
				readOnly: this.readOnly
			});
			this.connect(this._modifyAssociateFileTypesDialog, "onSaveMimeTypes", lang.hitch(this, function(item, mimetypes, fileAsParent) {
				item.attributes.FileTypes = mimetypes;
				item.attributes.CurrentFolderAsParent = fileAsParent;
				this._setNoRestrictionDisplayValue(item);
				this._checkAllSelectedFileTypes();
				var resultSetSelected = this._entryTemplatesSelected.getResultSet();
				resultSetSelected.onChange(resultSetSelected);

			}, selectedItem));
			this.connect(this._modifyAssociateFileTypesDialog, "onSaveMimeTypes", this._onSaveMimeTypes);
			this._modifyAssociateFileTypesDialog.setMaximized(false);
			this._modifyAssociateFileTypesDialog.show(null);
			this.logExit("_onClickOptions");
		},

		_onSaveMimeTypes: function() {
			this.logEntry("_onSaveMimeTypes");
			this._handleSelectionChange();
			this.logExit("_onSaveMimeTypes");
		},
		/**
		 * @private the onclick event handler of remove button
		 */
		_onClickRemove: function() {
			this._removeButton.set("disabled", true);
			this.logEntry("_onClickRemove");
			var resultSetSelected = this._entryTemplatesSelected.getResultSet();
			var selectedItem = this._entryTemplatesSelected.grid.row(this._selectedRow).item();
			if (selectedItem.isDefault)
				selectedItem.isDefault = false;
			resultSetSelected.deleteItem(selectedItem);
			if (resultSetSelected.items == null || resultSetSelected.items.length == 0) {
				this._removeButton.set("disabled", true);
				this._optionsButton.set("disabled", true);
				this._moveDownButton.set("disabled", true);
				this._moveUpButton.set("disabled", true);
				this.makeDefaultButton.set("disabled", true);

			}
			if (this._selectedRow >= resultSetSelected.items.length) {
				this._selectedRow--;
			}
			resultSetSelected.onChange(resultSetSelected);
			var resultSetAvailable = this._entryTemplatesAvailable.getResultSet();
			if (!resultSetAvailable.items) {
				resultSetAvailable.items = [];
			}
			var appendResultSet = {
				items: [
					selectedItem
				]
			};
			resultSetAvailable.append(appendResultSet);
			this._checkAllSelectedFileTypes();
			this._handleSelectionChange();
			this.logExit("_onClickRemove");
		},
		/**
		 * Event invoked when the selection list selections change.
		 * 
		 * @param selectedItems
		 *            An array of selected items.
		 */
		onSelectionChange: function(/* array of objects */selectedItems) {
		},
		/**
		 * @private Invoked when the make default button is clicked in teamspace admin.
		 */
		_onMakeDefault: function() {
			if (!this.selectionList)
				this.selectionList = this._entryTemplatesSelected;
			var items = this.selectionList.getResultSet().items;
			var _this = this;
			if (items.length > 0) {
				var selectedItems = this.selectionList.getSelectedItems();
				if (!(selectedItems.isDefault)) {
					this.makeDefaultButton.set("title", ecm.messages.workspacebuilder_removeDefault_list);
				} else {
					this.makeDefaultButton.set("title", ecm.messages.workspacebuilder_makeDefault_list);
				}

				// can only have one default, loop over all items and make their default value false
				// it's not the selected item
				for (var i = 0; i < items.length; i++) {
					if (!items[i])
						continue;
					if (items[i].id == selectedItems[0].id) {
						items[i].isDefault = !(items[i].isDefault);
					} else
						items[i].isDefault = false;

				}
				var resultSet = this._entryTemplatesSelected.getResultSet();
				resultSet.onChange(resultSet);
				this._handleSelectionChange();
			}
		}
	});
});
