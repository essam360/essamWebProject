/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare", //
	"dojo/_base/lang", //
	"dojo/_base/array", //
	"dojo/_base/sniff", //
	"dojo/dom-class", //
	"dojo/dom-construct", //
	"dojo/dom-geometry", //
	"dojo/dom-style", //
	"dojo/string", //
	"dijit/form/Button", //
	"dijit/form/CheckBox", //
	"dijit/form/TextBox", //
	"dojo/dom-geometry",
	"idx/html", //
	"../../LoggerMixin", //
	"../../model/Permission", //
	"../../model/UserGroup", //
	"./SearchInDropDown", //
	"../Ellipsis", //
	"../FolderSelector", //
	"../FolderSelectorCallback", //
	"../ValidationTextBox", //
	"../dialog/BaseDialog", //
	"../dialog/MessageDialog", //
	"ecm/widget/SecurityAccessPane", //
	"ecm/widget/HoverHelp", //
	"dojo/text!./templates/SaveSearchDialogContent.html" //
], //
function(declare, lang, array, has, domClass, domConstruct, domGeometry, domStyle, string, Button, CheckBox, TextBox, domGeom, idxHtml, LoggerMixin, Permission, UserGroup, SearchInDropDown, Ellipsis, FolderSelector, FolderSelectorCallback, ValidationTextBox, BaseDialog, MessageDialog, SecurityAccessPane, HoverHelp, template) {

	/**
	 * @private Part of {@link ecm.widget.search.BasicSearchDefinition} widget
	 * @name ecm.widget.search.SaveSearchDialog
	 * @class Provides a dialog box that is used to create a saved search for an IBM Content Manager OnDemand
	 *        repository.
	 * @augments ecm.widget.dialog.BaseDialog
	 */
	return declare("ecm.widget.search.SaveSearchDialog", [
		BaseDialog
	], {
		/** @lends ecm.widget.search.SaveSearchDialog.prototype */
		contentString: template,

		constructor: function(args) {
			this.expandable = false;
			this._members = new Array();
			this._memberButtons = new Array();
			if (args) {
				this.repository = args.repository;
				this._meetsMinimumCriteria = args.meetsMinimumCriteria;
				this._callback = args.callback;
				this.name = args.name || null;
				this._description = args.description || null;
				this._autoRun = args.autoRun || false;
				this._showInTree = args.showInTree || false;
				this._editing = args.editing || false;
				this.nameMaxLength = args.nameMaxLength;
				this._descriptionMaxLength = args.descriptionMaxLength;
				this._autoRunHidden = args.autoRunHidden;
				this._showInTreeHidden = args.showInTreeHidden;
				this._validateRepository = args.validateRepository;
			}
		},

		postCreate: function() {
			this.inherited(arguments);

			domClass.add(this.domNode, "ecmSaveSearchDialog");
			this.setTitle(this.messages.save_search);
			this._okButton = this.addButton(this.messages.ok, "_onOK", !this.name, true);

			if (this.nameMaxLength) {
				this._nameTextBox.set("maxLength", this.nameMaxLength);
			}
			if (this._descriptionMaxLength) {
				this._descriptionTextBox.set("maxLength", this._descriptionMaxLength);
			}
			if (this._autoRunHidden) {
				domClass.add(this._autoRunNode, "dijitHidden");
			} else {
				domClass.remove(this._autoRunNode, "dijitHidden");
			}
			if (this._showInTreeHidden) {
				domClass.add(this._showInTreeNode, "dijitHidden");
			} else {
				domClass.remove(this._showInTreeNode, "dijitHidden");
			}

			this.connect(this._nameTextBox, "onKeyUp", function() {
				this._updateOkButtonState();
			});
			this.connect(this._autoRunCheckBox, "onChange", function() {
				var disabled = !this._autoRunCheckBox.get("checked");
				if (disabled) {
					this._showInTreeCheckBox.set("checked", false);
				}
				this._showInTreeCheckBox.set("disabled", disabled);
			});

			this.textDir = has("text-direction");
			this._nameTextBox.set("textDir", this.textDir);
			this._descriptionTextBox.set("textDir", this.textDir);
			this._nameTextBox.set("value", this.name);
			this._descriptionTextBox.set("value", this._description);
			this._autoRunCheckBox.set("checked", this._autoRun);
			this._showInTreeCheckBox.set("checked", this._showInTree);

			if (this._editing) {
				domClass.add(this._folderSelectorNode, "dijitHidden");
				domClass.add(this._securityNode, "dijitHidden");
			} else {
				domClass.remove(this._folderSelectorNode, "dijitHidden");
				domClass.remove(this._securityNode, "dijitHidden");

				if (this.teamspace) {
					this._ellipsis = new Ellipsis();
					var saveInDiv = domConstruct.create("div", {
						'class': 'dijitInline',
						innerHTML: this.enforceTextDirWithUcc(null, idxHtml.escapeHTML(this.teamspace.name))
					});
					this._ellipsis.set("content", saveInDiv);
					setTimeout(lang.hitch(this, function() {
						this._ellipsis.layout();
					}));

					this._saveInSelector.appendChild(this._ellipsis.domNode);
				} else {
					this._folderSelector = new SearchInDropDown({
						title: this.messages.add_document_location_label,
						forceWidth: false,
						showIncludeSubFolders: false,
						showRepositoryTeamspace: false,
						validateRepository: this._validateRepository,
						textDir: this.textDir
					});
					this._saveInSelector.appendChild(this._folderSelector.domNode);
					var folderSelectorCallback = new FolderSelectorCallback();
					folderSelectorCallback.isSelectableByPermission.permissionToCheck = "privAddToFolder";
					this._folderSelector.setIsSelectableCallback(folderSelectorCallback.isSelectableByPermission);
					this._folderSelector.setRoot(this.repository);
				}
				this._securityAccessPane.setRepository(this.repository);
			}
		},

		_updateOkButtonState: function() {
			this._okButton.set("disabled", !this._nameTextBox.get("value"));
		},
		
		_onAccessTypeChange: function() {
			var size = domGeom.getContentBox(this._saveSearchTable);
			if (size.h > 0 && !this.isMaximized()) {
				domGeom.setMarginBox(this.contentArea, {
					h: size.h + 35,
					w: size.w + 35
				}); 
				this.resize();
			}
		},

		_onOK: function() {
			// Make sure the form is valid in case the action was triggered by the enter key
			if (this._okButton.get("disabled"))
				return;

			var autoRun = this._autoRunCheckBox.get("checked");
			if (!this._editing && this._securityAccessPane.getAccessType() == this._securityAccessPane._ACCESS_TYPE.MEMBERS && this._securityAccessPane.getNumberOfMembers() == 0) {
				this._showMessage(this.messages.search_member_required);
			} else if (autoRun && !this._meetsMinimumCriteria) {
				this._showMessage(this.messages.search_insufficient_input_to_auto_run);
			} else {
				if (this._callback) {
					var args = {
						name: this._nameTextBox.get("value"),
						description: this._descriptionTextBox.get("value"),
						autoRun: autoRun,
						showInTree: this._showInTreeCheckBox.get("checked")
					};
					if (!this._editing) {
						var parentFolderId = null;
						var parentFolderRepository = null;
						var objectStoreName = null;
						if (this.teamspace) {
							objectStoreName = this.teamspace.repository.objectStoreName;
						} else {
							var selectedFolder = this._folderSelector.getSelected();
							if (selectedFolder) {
								var item = selectedFolder.item;
								parentFolderId = !item.rootFolder ? item.id : null;
								parentFolderRepository = item.repository;
								objectStoreName = parentFolderRepository.objectStoreName;
							}
						}
						lang.mixin(args, {
							parentFolderId: parentFolderId,
							parentFolderRepository: parentFolderRepository,
							objectStoreName: objectStoreName,
							accessType: this._securityAccessPane.getAccessType(),
							permissions: this._securityAccessPane.getPermissions()
						});
					}
					this._callback(args);
				}
				this.onCancel();
			}
		},

		onCancel: function() {
			this._securityAccessPane.cleanUp();
		},

		_showMessage: function(message) {
			if (!this._messageDialog)
				this._messageDialog = new MessageDialog();
			this._messageDialog.showMessage(message);
		},

		destroy: function() {
			this.inherited(arguments);
			if (this._messageDialog) {
				this._messageDialog.destroy();
				delete this._messageDialog;
			}
		}
	});

});
