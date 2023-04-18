/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/sniff",
	"dojo/string",
	"dojo/aspect",
	"dojo/dom-class",
	"dojo/dom-geometry",
	"dojo/store/Memory",
	"dijit/_Widget",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/layout/ContentPane",
	"ecm/LoggerMixin",
	"ecm/MessagesMixin",
	"ecm/model/EntryTemplate",
	"ecm/model/Teamspace",
	"ecm/widget/HoverHelp",
	"ecm/widget/FilteringSelect",
	"ecm/widget/ValidationTextBox",
	"ecm/widget/ValidationSimpleTextarea",
	"ecm/widget/RadioButton",
	"ecm/widget/SecurityAccessPane",
	"ecm/widget/FolderSelectorCallback",
	"ecm/widget/search/SearchInDropDown",
	"idx/layout/BorderContainer",
	"dojo/text!./templates/DocumentSettingsPane.html"
],

function(declare, //
lang, //
has, //
string, //
aspect, //
domClass, //
domGeometry, //
MemoryStore, //
_Widget, //
_TemplatedMixin, //
_WidgetsInTemplateMixin, //
ContentPane, //
LoggerMixin, //
MessagesMixin, //
EntryTemplate, //
Teamspace, //
HoverHelp, //
FilteringSelect, //
ValidationTextBox, //
ValidationSimpleTextarea, //
RadioButton, //
SecurityAccessPane, //
FolderSelectorCallback, //
SearchInDropDown, //
BorderContainer, //
template) {

	/**
	 * @name ecm.widget.entryTemplateBuilder.DocumentSettingsPane
	 * @class Provides a widget that has the entry template document settings. This includes the name, description,
	 *        type, save in, and security access.
	 * @augments dijit._Widget
	 * @since 2.0.3
	 */
	return declare("ecm.widget.entryTemplateBuilder.DocumentSettingsPane", [
		_Widget,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		LoggerMixin,
		MessagesMixin
	], {
		/** @lends ecm.widget.entryTemplateBuilder.DocumentSettingsPane */

		templateString: template,
		widgetsInTemplate: true,

		/**
		 * Instance of {@link ecm.model.Repository}.
		 */
		repository: null,

		/**
		 * Instance of {@link ecm.model.EntryTemplate}.
		 */
		entryTemplate: null,

		/**
		 * Instance of {@link ecm.model.ContentClass}.
		 */
		contentClass: null,

		constructor: function() {
			this._saveInDropDownTitle = this.messages.add_document_location_label.replace(/'/g, "\\'");
		},

		postCreate: function() {
			this.logEntry("postCreate");
			this._initialized = false;
			this.inherited(arguments);

			var func = lang.hitch(this, "_isSelectableByPermission");
			func.permissionToCheck = "privAddToFolder";
			this.saveInDropDown.setIsSelectableCallback(func);

			var applyRepository = lang.hitch(this, function() {
				this.securityAccessPane.setRepository(this.repository);
				this.saveInDropDown.setRoot(this.repository);
				if (this.repository._isP8()) {
					domClass.remove(this.inheritSecurityDiv, "dijitHidden");
				} else {
					domClass.add(this.inheritSecurityDiv, "dijitHidden");
				}
			});

			if (this.repository) {
				applyRepository();
			}
			this.watch("repository", applyRepository);

			this.saveInDropDown.set("title", this._saveInDropDownTitle);

			var onFieldChangeFunction = lang.hitch(this, "_onFieldChange");
			this.own(aspect.after(this.securityAccessPane, "onMemberAdded", onFieldChangeFunction));
			this.own(aspect.after(this.securityAccessPane, "onMemberRemoved", onFieldChangeFunction));
			this.own(aspect.after(this.securityAccessPane, "onAccessTypeChange", onFieldChangeFunction));

			this.nameField.setHoverHelp(this.nameFieldHoverHelp);
			this.nameField.pattern = '([^"*|<>?:\\\\/])*';
			this.nameField.invalidMessage = this.messages.entry_template_name_invalid;

			this.descriptionField.setHoverHelp(this.descriptionFieldHoverHelp);
			this.descriptionField.pattern = ".*";
			this.descriptionField.regExp = "[\\s\\S]*";
			this.descriptionField.isValid = function() {
				return true;
			};

			this.inheritSecurity.setHoverHelp(this.inheritSecurityHoverHelp);

			this._loadData();
			setTimeout(lang.hitch(this, function() {
				this._initialized = true;
				this.onChangeType(this.entryTemplate.type); // Other panes may be listening to this
			}), 500);
			this.logExit("postCreate");
		},

		/**
		 * @private Return boolean indicating if can add to the specified folder. Teamspaces do not return priv info;
		 *          therefore, must check their priv later.
		 */
		_isSelectableByPermission: function(/*ecm.model.ContentItem*/folderItem, /*string*/privilege) {
			var permission = false;
			if (folderItem && folderItem.attributes && folderItem.attributes.ClbTeamspaceName) {
				permission = true; // no priv returned for teamspaces
			} else if (privilege != null && folderItem.hasPrivilege && folderItem.hasPrivilege(privilege) || (folderItem.continuationData != null)) {
				permission = true;
			}
			return permission;
		},

		/**
		 * @private Loads the screen data.
		 */
		_loadData: function() {
			if (this.entryTemplate.mode == "add") {
				if (!this.entryTemplate.type) {
					this.entryTemplate.type = EntryTemplate.TYPE.DOCUMENT;
				}
				var label = this.messages["document_propagation_" + this.entryTemplate.type];
				this.typeField.innerHTML = label || this.entryTemplate.type;

				this.descriptionField.set("value", "");
				domClass.remove(this.saveInData, "dijitHidden");
				domClass.remove(this.securityAccessData, "dijitHidden");
				if (this.repository._isP8()) {
					this.inheritSecurity.set("disabled", true);
				}
			} else {
				if (this.entryTemplate.mode == "edit") {
					domClass.add(this.saveInData, "dijitHidden");
					domClass.add(this.securityAccessData, "dijitHidden");
				}
				this.nameField.set("value", this.entryTemplate.name);
				this.descriptionField.set("value", this.entryTemplate.description);

				var label = this.messages["document_propagation_" + this.entryTemplate.type];
				this.typeField.innerHTML = label || this.entryTemplate.type;

				if (this.entryTemplate.saveToFolder) {
					this.saveInDropDown.setSelected(this.entryTemplate.saveToFolder);
				}
				if (this.repository._isP8()) {
					this.inheritSecurity.set("disabled", !this.entryTemplate.saveToFolder);
					this.inheritSecurity.set("checked", this.entryTemplate.saveToFolderInheritParentSecurity);
				}
			}

			if (this.repository._isCM()) {
				this._useForCheckin = this.entryTemplate.useForCheckin;
				this._useForProperties = this.entryTemplate.useForProperties;
				this._useForViewerProperties = this.entryTemplate.useForViewerProperties;
				this._useForDocumentInformationProperties = this.entryTemplate.useForDocumentInformationProperties;
			} else {
				this.applyToCheckin.set("checked", this.entryTemplate.useForCheckin);
				this.applyToProperties.set("checked", this.entryTemplate.useForProperties);
				this.applyToViewer.set("checked", this.entryTemplate.useForViewerProperties);
				this.applyToDocInfo.set("checked", this.entryTemplate.useForDocumentInformationProperties);
			}
			this._showHideDataBasedOnTypeAndClass(this.entryTemplate.type);

			this.nameField.set("textDir", has("text-direction"));
			this.descriptionField.set("textDir", has("text-direction"));
		},

		/**
		 * @private
		 */
		_onTypeChange: function() {
			if (this._initialized) {
				this.onFieldChange();
				this._showHideDataBasedOnTypeAndClass(this.entryTemplate.type);
				this.onChangeType(this.entryTemplate.type);
			}
		},

		/**
		 * Set the content class. Called by the SettingsPane to set the content class for this pane.
		 */
		setContentClass: function(contentClass) {
			this.contentClass = contentClass;
			this._showHideDataBasedOnTypeAndClass(this.entryTemplate.type);
		},

		/**
		 * @private Displays the apply to message.
		 */
		_displayApplyToMessage: function(message) {
			if (message) {
				this.applyToInlineMessageText.innerHTML = message;
				domClass.remove(this.applyToInlineMessageDiv, "dijitHidden");
			} else {
				domClass.add(this.applyToInlineMessageDiv, "dijitHidden");
			}
		},

		/**
		 * @private
		 */
		_showHideDataBasedOnTypeAndClass: function(type) {
			if (type == EntryTemplate.TYPE.FOLDER) {
				domClass.remove(this.applyToAddFolderDiv, "dijitHidden");
				domClass.add(this.applyToAddDocDiv, "dijitHidden");
				// Check in is supported for CM folders.
				if (this.repository && this.repository._isCM()) {
					domClass.remove(this.applyToCheckinDiv, "dijitHidden");
				} else {
					domClass.add(this.applyToCheckinDiv, "dijitHidden");
				}
				domClass.add(this.applyToViewerDiv, "dijitHidden");
			} else {
				domClass.add(this.applyToAddFolderDiv, "dijitHidden");
				domClass.remove(this.applyToAddDocDiv, "dijitHidden");
				domClass.remove(this.applyToCheckinDiv, "dijitHidden");
				domClass.remove(this.applyToViewerDiv, "dijitHidden");
			}

			if (this.repository._isCM()) {
				// Enable the "apply to" options if no selected class or the selected class supports entry template tracking.
				if (!this.contentClass || this.contentClass.supportsEntryTemplateTracking) {
					this.applyToCheckin.set("checked", this._useForCheckin);
					this.applyToCheckin.set("disabled", false);
					domClass.remove(this.applyToCheckinLabel, "labelReadOnly");

					this.applyToProperties.set("checked", this._useForProperties);
					this.applyToProperties.set("disabled", false);
					domClass.remove(this.applyToPropertiesLabel, "labelReadOnly");

					this.applyToViewer.set("checked", this._useForViewerProperties);
					this.applyToViewer.set("disabled", false);
					domClass.remove(this.applyToViewerLabel, "labelReadOnly");

					this.applyToDocInfo.set("checked", this._useForDocumentInformationProperties);
					this.applyToDocInfo.set("disabled", false);
					domClass.remove(this.applyToDocInfoLabel, "labelReadOnly");

					this._displayApplyToMessage();

					delete this._applyToOptionsDisabled;
				} else { // ...the selected class does not support entry template tracking, disable the "apply to" options.
					if (!this._applyToOptionsDisabled) {
						this._applyToOptionsDisabled = true;

						this.applyToCheckin.set("disabled", true);
						domClass.add(this.applyToCheckinLabel, "labelReadOnly");
						this._useForCheckin = this.applyToCheckin.get("checked");
						this.applyToCheckin.set("checked", false);

						this.applyToProperties.set("disabled", true);
						domClass.add(this.applyToPropertiesLabel, "labelReadOnly");
						this._useForProperties = this.applyToProperties.get("checked");
						this.applyToProperties.set("checked", false);

						this.applyToViewer.set("disabled", true);
						domClass.add(this.applyToViewerLabel, "labelReadOnly");
						this._useForViewerProperties = this.applyToViewer.get("checked");
						this.applyToViewer.set("checked", false);

						this.applyToDocInfo.set("disabled", true);
						domClass.add(this.applyToDocInfoLabel, "labelReadOnly");
						this._useForDocumentInformationProperties = this.applyToDocInfo.get("checked");
						this.applyToDocInfo.set("checked", false);

						this._displayApplyToMessage(this.messages.entry_template_applied_no_class_support);
					}
				}
			}
		},

		/**
		 * @private
		 */
		_onFolderSelected: function() {
			if (!this._isFirstOnFolderSelect) { // ignore the first async folder selection from the save in widget
				this._isFirstOnFolderSelect = true;
			} else if (this._initialized) {
				if (this.repository._isP8()) {
					this.inheritSecurity.set("disabled", this.saveInDropDown.getSelected().item.rootFolder);
					if (this.inheritSecurity.get("disabled")) {
						this.inheritSecurity.set("checked", false);
					}
				}
				var selected = this.saveInDropDown.getSelected().item;
				if (selected && selected.attributes && selected.attributes.ClbTeamspaceName) { // selected a teamspace.  retrieve its privileges.
					if (!selected.teamspace) {
						selected.teamspace = new Teamspace({
							id: selected.id,
							name: selected.name,
							repository: selected.repository,
							type: "instance"
						});
						selected.teamspace.retrieveUserPrivileges(lang.hitch(this, function(response) {
							// Will check these privileges in getMessages
						}));
					}
				}
				this.onFieldChange();
			}
		},

		/**
		 * @private
		 */
		_onFieldChange: function() {
			if (this._initialized) {
				this.onFieldChange();
				this.resize(); // Need to force a resize especially when new users/groups have been added to security
			}
		},

		/**
		 * Fired when a field changes value.
		 */
		onFieldChange: function() {
			this.logEntry("onFieldChange");
		},

		/**
		 * Fired when the entry template type changes.
		 * 
		 * @param type
		 *            The entry template type string. One of the <code>EntryTemplate.TYPE</code> object type values.
		 */
		onChangeType: function(type) {
		},

		/**
		 * Returns array of message object containing the errors on the pane.
		 */
		getMessages: function() {
			var messages = [];
			if (string.trim(this.nameField.get("value")) == "") {
				messages.push({
					message: this.messages.entry_template_name_required_message
				});
			}
			if (!this.nameField.isValid()) {
				messages.push({
					message: this.messages.entry_template_name_invalid_message
				});
			}
			if (this.securityAccessPane.getAccessType() == this.securityAccessPane._ACCESS_TYPE.MEMBERS && this.securityAccessPane.getNumberOfMembers() == 0) {
				messages.push({
					message: this.messages.entry_template_save_in_member_empty_message
				});
			}
			if (this.saveInDropDown.getSelected() && this.saveInDropDown.getSelected().item && this.saveInDropDown.getSelected().item.teamspace) {
				if (!this.saveInDropDown.getSelected().item.teamspace.hasPrivilege("privEdit")) {
					messages.push({
						message: string.substitute(this.messages.entry_template_no_permission_to_save_to_teamspace_message, [
							this.saveInDropDown.getSelected().item.teamspace.name
						])
					});
				}
			}
			if (this.entryTemplate.mimetype.indexOf("filenet") >= 0 && this.entryTemplate.mode == "edit") {
				messages.push({
					message: this.messages.entry_template_xt_warning,
					category: "warning"
				});
			}
			return messages;
		},

		/**
		 * Resize the pane.
		 */
		resize: function() {
			var leftDim = domGeometry.getContentBox(this.leftTable);
			var rightDim = domGeometry.getContentBox(this.rightTable);
			if (leftDim.h) {
				domGeometry.setMarginBox(this.container, {
					h: leftDim.h > rightDim.h ? leftDim.h : rightDim.h
				});
			}
		},

		/**
		 * Loads the model with the screen data.
		 */
		loadModel: function() {
			this.entryTemplate.name = this.nameField.get("value");
			this.entryTemplate.description = this.descriptionField.get("value");
			this.entryTemplate.repository = this.saveInDropDown.repository;
			var selectedFolder = this.saveInDropDown.getSelected();
			this.entryTemplate.saveToFolder = (selectedFolder && selectedFolder.item && !selectedFolder.item.rootFolder) ? selectedFolder.item : null;
			if (this.repository._isP8()) {
				this.entryTemplate.saveToFolderInheritParentSecurity = this.saveInDropDown.getSelected().item.rootFolder ? false : this.inheritSecurity.get("checked");
			}
			this.entryTemplate.templatePermissions = this.securityAccessPane.getPermissions();

			this.entryTemplate.useForCheckin = this.applyToCheckin.get("checked");
			this.entryTemplate.useForProperties = this.applyToProperties.get("checked");
			this.entryTemplate.useForViewerProperties = this.applyToViewer.get("checked");
			this.entryTemplate.useForDocumentInformationProperties = this.applyToDocInfo.get("checked");
		}
	});
});
