/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/array",
	"dojo/_base/lang",
	"dojo/aspect",
	"dojo/dom-class",
	"dojo/store/Memory",
	"dijit/_Widget",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/form/Button",
	"dijit/layout/ContentPane",
	"ecm/LoggerMixin",
	"ecm/MessagesMixin",
	"ecm/model/ContentClass",
	"ecm/model/EntryTemplate",
	"ecm/widget/CheckBox",
	"ecm/widget/RadioButton",
	"ecm/widget/FilteringSelect",
	"ecm/widget/HoverHelp",
	"idx/layout/BorderContainer",
	"dojo/text!./templates/OptionsPane.html"
],

function(declare, //
array, //
lang, //
aspect, //
domClass, //
MemoryStore, //
_Widget, //
_TemplatedMixin, //
_WidgetsInTemplateMixin, //
Button, //
ContentPane, //
LoggerMixin, //
MessagesMixin, //
ContentClass, //
EntryTemplate, //
CheckBox, //
RadioButton, //
FilteringSelect, //
HoverHelp, //
BorderContainer, //
template) {

	/**
	 * @name ecm.widget.entryTemplateBuilder.OptionsPane
	 * @class Provides a widget that has the entry template options.
	 * @augments dijit._Widget
	 * @since 2.0.3
	 */
	return declare("ecm.widget.entryTemplateBuilder.OptionsPane", [
		_Widget,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		LoggerMixin,
		MessagesMixin
	], {
		/** @lends ecm.widget.entryTemplateBuilder.OptionsPane */

		templateString: template,
		widgetsInTemplate: true,

		/**
		 * Instance of {@link ecm.model.Repository}.
		 */
		repository: null,

		/**
		 * Instance of {@link ecm.model.ContentClass}.
		 */
		contentClass: null,

		/**
		 * Instance of {@link ecm.model.EntryTemplate}.
		 */
		entryTemplate: null,

		/**
		 * The entry template type string. One of the <code>EntryTemplate.TYPE</code> object type values.
		 */
		type: null,

		/**
		 * Post create.
		 */
		postCreate: function() {
			this.logEntry("postCreate");
			this._initialized = false;
			this._setHoverHelp();
			this.inherited(arguments);

			this._loadData();
			this.logExit("postCreate");
		},

		/**
		 * @private
		 */
		_setHoverHelp: function() {
			this.docTypeShow.setHoverHelp(this.docTypeShowHoverHelp);
			this.docTypeHide.setHoverHelp(this.docTypeHideHoverHelp);
			this.autoClassifyShow.setHoverHelp(this.autoClassifyShowHoverHelp);
			this.allowDupFileNames.setHoverHelp(this.allowDupFileNamesHoverHelp);
			this.docTypeLocal.setHoverHelp(this.docTypeHover);
			this.docTypeMetadata.setHoverHelp(this.docTypeHover);
			if (this.repository._isP8()) {
				this.docTypeExternal.setHoverHelp(this.docTypeHover);
			}
			this.docTypeLocalRadio.setHoverHelp(this.docTypeHover);
			this.docTypeMetadataRadio.setHoverHelp(this.docTypeHover);
			if (this.repository._isP8()) {
				this.docTypeExternalRadio.setHoverHelp(this.docTypeHover);
			}
		},

		/**
		 * @private Loads the screen data.
		 */
		_loadData: function() {
			this.majorMinorVersionSelect.set("store", new MemoryStore({
				data: [
					{
						"id": "majorVersion",
						"label": this.messages.entry_template_version_default_checked
					},
					{
						"id": "minorVersion",
						"label": this.messages.entry_template_version_default_unchecked
					}
				]
			}));
			this.createReplaceVersionSelect.set("store", new MemoryStore({
				data: [
					{
						"id": "create",
						"label": this.messages.add_document_create_new_version_label
					},
					{
						"id": "replace",
						"label": this.messages.add_document_replace_existing_version_label
					}
				]
			}));

			if (this.entryTemplate.mode == "add") {
				this.docTypeShow.set("checked", true);
				this.docTypeLocal.set("checked", true);
				this.docTypeMetadata.set("checked", true);

				if (this.repository._isP8()) {
					this.docTypeExternal.set("checked", true);

					this.allowDupFileNames.set("checked", true);
					this.majorVersionShow.set("checked", true);
					this.majorMinorVersionSelect.set("value", "majorVersion");
				} else if (this.repository._isCM()) {
					if (this.entryTemplate.type != EntryTemplate.TYPE.FOLDER) {
						// Default for documents is check in new version.
						this.entryTemplate.checkinAsNewVersion.on = true;
						this.createReplaceVersionSelect.set("value", "create");
					} else {
						// Default for folders is replace existing version.
						this.entryTemplate.checkinAsNewVersion.on = false;
						this.createReplaceVersionSelect.set("value", "replace");
					}
					this.checkinVersionShow.set("checked", true);
				}

				this.docTypeLocalRadio.set("checked", true);
			} else {
				if (this.entryTemplate.allowUserSelectSaveChoice) {
					this.docTypeShow.set("checked", true);
					domClass.remove(this.docTypeCheckboxes, "dijitHidden");
					domClass.add(this.docTypeRadio, "dijitHidden");

					this.docTypeLocal.set("checked", this.entryTemplate.allowSaveLocalDocument);
					if (this.repository._isP8()) {
						this.docTypeExternal.set("checked", this.entryTemplate.allowSaveExternalDocumentLink);
					}
					this.docTypeMetadata.set("checked", this.entryTemplate.allowSavePropertiesOnly);

				} else {
					this.docTypeHide.set("checked", true);
					domClass.add(this.docTypeCheckboxes, "dijitHidden");
					domClass.remove(this.docTypeRadio, "dijitHidden");
					if (this.entryTemplate.allowSaveLocalDocument) {
						this.docTypeLocalRadio.set("checked", true);
					} else if (this.entryTemplate.allowSavePropertiesOnly) {
						this.docTypeMetadataRadio.set("checked", true);
					} else if (this.repository._isP8() && this.entryTemplate.allowSaveExternalDocumentLink) {
						this.docTypeExternalRadio.set("checked", true);
					} else {
						this.docTypeLocalRadio.set("checked", true);
					}
				}

				if (this.repository._isP8()) {
					this.autoClassifyShow.set("checked", this.entryTemplate.autoClassify.on);
					this.allowDupFileNames.set("checked", this.entryTemplate.allowDuplicateFileNames);
					this.allowCompoundDocs.set("checked", this.entryTemplate.enableCompoundDocuments.on);
					if (this.entryTemplate.asMinorVersion.hidden) {
						this.majorVersionHide.set("checked", true);
					} else {
						this.majorVersionShow.set("checked", true);
					}
					if (this.entryTemplate.asMinorVersion.on) {
						this.majorMinorVersionSelect.set("value", "minorVersion");
					} else {
						this.majorMinorVersionSelect.set("value", "majorVersion");
					}
				} else if (this.repository._isCM()) {
					if (this.entryTemplate.checkinAsNewVersion.hidden) {
						this.checkinVersionHide.set("checked", true);
					} else {
						this.checkinVersionShow.set("checked", true);
					}

					if (this.entryTemplate.checkinAsNewVersion.on) {
						this.createReplaceVersionSelect.set("value", "create");
					} else {
						this.createReplaceVersionSelect.set("value", "replace");
					}
				}
			}

			if (this.repository._isP8()) {
				domClass.remove(this.docTypeShowDiv, "dijitHidden");
				domClass.remove(this.docTypeDiv, "dijitHidden");
				domClass.add(this.checkinVersionShowDiv, "dijitHidden");
				domClass.add(this.checkinVersionDiv, "dijitHidden");
				domClass.remove(this.docTypeExternalDiv, "dijitHidden");
				domClass.remove(this.docTypeExternalRadioDiv, "dijitHidden");
				domClass.remove(this.p8MiscellaneousDiv, "dijitHidden");
			} else if (this.repository._isCM()) {
				if (this.entryTemplate.type != EntryTemplate.TYPE.FOLDER) {
					domClass.remove(this.docTypeShowDiv, "dijitHidden");
					domClass.remove(this.docTypeDiv, "dijitHidden");
				} else {
					domClass.add(this.docTypeShowDiv, "dijitHidden");
					domClass.add(this.docTypeDiv, "dijitHidden");
				}
				domClass.remove(this.checkinVersionShowDiv, "dijitHidden");
				domClass.remove(this.checkinVersionDiv, "dijitHidden");
				domClass.add(this.docTypeExternalDiv, "dijitHidden");
				domClass.add(this.docTypeExternalRadioDiv, "dijitHidden");
				domClass.add(this.p8MiscellaneousDiv, "dijitHidden");
			}
			setTimeout(lang.hitch(function() {
				this._initialized = true;
			}), 500);
		},

		/**
		 * @private
		 */
		_onDocTypeShow: function() {
			this.docTypeLocal.set("checked", this.docTypeLocalRadio.get("checked"));
			if (this.repository._isP8()) {
				this.docTypeExternal.set("checked", this.docTypeExternalRadio.get("checked"));
			}
			this.docTypeMetadata.set("checked", this.docTypeMetadataRadio.get("checked"));

			domClass.remove(this.docTypeCheckboxes, "dijitHidden");
			domClass.add(this.docTypeRadio, "dijitHidden");
			this._onFieldChange();
		},

		/**
		 * @private
		 */
		_onDocTypeHide: function() {
			if (this.docTypeLocal.get("checked")) {
				this.docTypeLocalRadio.set("checked", true);
			} else if (this.docTypeMetadata.get("checked")) {
				this.docTypeMetadataRadio.set("checked", true);
			} else if (this.repository._isP8() && this.docTypeExternal.get("checked")) {
				this.docTypeExternalRadio.set("checked", true);
			} else {
				this.docTypeLocalRadio.set("checked", true);
			}

			domClass.add(this.docTypeCheckboxes, "dijitHidden");
			domClass.remove(this.docTypeRadio, "dijitHidden");
			this._onFieldChange();
		},

		/**
		 * @private
		 */
		_onFieldChange: function() {
			if (this._initialized) {
				this.onFieldChange();
			}
		},

		/**
		 * Fired when a field changes value.
		 */
		onFieldChange: function() {
			this.logEntry("onFieldChange");
		},

		/**
		 * Returns array of message object containing the errors on the pane.
		 */
		getMessages: function() {
			var messages = [];
			if (this.docTypeShow.get("checked")) {
				if (!this.docTypeLocal.get("checked") && !this.docTypeMetadata.get("checked") && (!this.repository._isP8() || !this.docTypeExternal.get("checked"))) {
					messages.push({
						message: this.messages.entry_template_what_to_save_required_message
					});
				}
			}
			return messages;
		},

		/**
		 * Set the type. Called by the SettingsPane to set the type.
		 */
		setType: function(type) {
			if (this.type != type) {
				this.type = type;
				this.onHidePane(this.type == EntryTemplate.TYPE.FOLDER && !this.repository._isCM());
			}
		},

		/**
		 * @private Displays the check in version message.
		 */
		_displayCheckinVersionMessage: function(message) {
			if (message) {
				this.checkinVersionInlineMessageText.innerHTML = message;
				domClass.remove(this.checkinVersionInlineMessageDiv, "dijitHidden");
			} else {
				domClass.add(this.checkinVersionInlineMessageDiv, "dijitHidden");
			}
		},

		/**
		 * Set the content class. Called by the SettingsPane to set the content class for this pane.
		 */
		setContentClass: function(contentClass) {
			this.contentClass = contentClass;

			if (this.repository._isCM()) {
				if (this.contentClass.versionControl == ContentClass.VERSION_CONTROL.NEVER) {
					this._displayCheckinVersionMessage(this.messages.entry_template_checkin_version_message_no_versions);
					this.createReplaceVersionSelect.set("disabled", true);
					// The class version configuration only allows replacing the current version.
					this.createReplaceVersionSelect.set("value", "replace");
				} else if (this.contentClass.versionControl == ContentClass.VERSION_CONTROL.ALWAYS) {
					this._displayCheckinVersionMessage(this.messages.entry_template_checkin_version_message_always_version);
					this.createReplaceVersionSelect.set("disabled", true);
					// The class version configuration only allows checking in new versions.
					this.createReplaceVersionSelect.set("value", "create");
				} else { // ContentClass.VERSION_CONTROL.OPTIONAL
					this._displayCheckinVersionMessage();
					// The class version configuration allows either option.
					this.createReplaceVersionSelect.set("disabled", false);
					// Force the default choice to be "New version", so that switching from a no-version class 
					// to this class does not leave the choice at replace current version.
					//this.checkinNewVersionChecked.set("checked", true);
					//honor the entry template saved settings
					if (this.entryTemplate.checkinAsNewVersion.on) {
						this.createReplaceVersionSelect.set("value", "create");
					} else {
						this.createReplaceVersionSelect.set("value", "replace");
					}
				}
			}
		},

		/**
		 * Fired when the pane should be hidden or un-hidden. SettingsPane listens to this method.
		 * 
		 * @param hide
		 *            Boolean indicating if to hide or show the pane.
		 */
		onHidePane: function(hide) {
		},

		/**
		 * Loads the model with the screen data.
		 */
		loadModel: function() {
			var isP8 = this.repository._isP8();
			var isCM = this.repository._isCM();
			var folderType = this.type == EntryTemplate.TYPE.FOLDER;

			this.entryTemplate.allowUserSelectSaveChoice = !folderType && this.docTypeShow.get("checked");

			if (this.entryTemplate.allowUserSelectSaveChoice) {
				this.entryTemplate.allowSaveLocalDocument = !folderType && this.docTypeLocal.get("checked");
				this.entryTemplate.allowSavePropertiesOnly = folderType || this.docTypeMetadata.get("checked");
				this.entryTemplate.allowSaveExternalDocumentLink = isP8 && !folderType && this.docTypeExternal.get("checked");
			} else {
				this.entryTemplate.allowSaveLocalDocument = !folderType && this.docTypeLocalRadio.get("checked");
				this.entryTemplate.allowSavePropertiesOnly = folderType || this.docTypeMetadataRadio.get("checked");
				this.entryTemplate.allowSaveExternalDocumentLink = isP8 ? (!folderType && this.docTypeExternalRadio.get("checked")) : null;
			}

			this.entryTemplate.autoClassify.on = isP8 ? this.autoClassifyShow.get("checked") : null;
			this.entryTemplate.allowDuplicateFileNames = isP8 ? this.allowDupFileNames.get("checked") : null;
			this.entryTemplate.enableCompoundDocuments.on = isP8 ? this.allowCompoundDocs.get("checked") : null;
			this.entryTemplate.asMinorVersion.hidden = isP8 ? this.majorVersionHide.get("checked") : null;
			this.entryTemplate.asMinorVersion.on = isP8 ? this.majorMinorVersionSelect.get("value") == "minorVersion" : null;

			// This option is available for CM documents and folders.
			this.entryTemplate.checkinAsNewVersion.hidden = isCM ? this.checkinVersionHide.get("checked") : null;
			this.entryTemplate.checkinAsNewVersion.on = isCM ? this.createReplaceVersionSelect.get("value") == "create" : null;
		}
	});
});
