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
	"dijit/_Widget",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/form/Button",
	"dijit/layout/ContentPane",
	"ecm/LoggerMixin",
	"ecm/MessagesMixin",
	"ecm/model/EntryTemplate",
	"ecm/widget/CheckBox",
	"ecm/widget/RadioButton",
	"ecm/widget/HoverHelp",
	"ecm/widget/search/SearchInDropDown",
	"idx/layout/BorderContainer",
	"dojo/text!./templates/DestinationPane.html"
],

function(declare, //
array, //
lang, //
aspect, //
domClass, //
_Widget, //
_TemplatedMixin, //
_WidgetsInTemplateMixin, //
Button, //
ContentPane, //
LoggerMixin, //
MessagesMixin, //
EntryTemplate, //
CheckBox, //
RadioButton, //
HoverHelp, //
SearchInDropDown, //
BorderContainer, //
template) {

	/**
	 * @name ecm.widget.entryTemplateBuilder.DestinationPane
	 * @class Provides a widget that has the entry template folder settings for the item that is going to be added. Also
	 *        includes the file in folder options (if appropriate).
	 * @augments dijit._Widget
	 * @since 2.0.3
	 */
	return declare("ecm.widget.entryTemplateBuilder.DestinationPane", [
		_Widget,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		LoggerMixin,
		MessagesMixin
	], {
		/** @lends ecm.widget.entryTemplateBuilder.DestinationPane */

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
		 * The entry template type string. One of the <code>EntryTemplate.TYPE</code> object type values.
		 */
		type: null,

		constructor: function() {
			this._saveInDropDownTitle = this.messages.add_document_location_label.replace(/'/g, "\\'");
		},

		postCreate: function() {
			this.logEntry("postCreate");
			this._initialized = false;
			this.inherited(arguments);

			this.saveInShow.setHoverHelp(this.saveInShowHoverHelp);
			this.saveInHide.setHoverHelp(this.saveInHideHoverHelp);
			this.requireFileInFolder.setHoverHelp(this.requireFileInFolderHoverHelp);

			this.saveInDropDown.set("title", this._saveInDropDownTitle);

			var applyRepository = lang.hitch(this, function() {
				var repository = this.repository;
				if (this.entryTemplate.mode != "add" && this.entryTemplate.targetRepository) {
					repository = this.entryTemplate.targetRepository;
				}
				this.saveInDropDown.setRoot(repository);
			});

			if (this.repository) {
				applyRepository();
			}
			this.watch("repository", applyRepository);

			this._loadData();
			this.logExit("postCreate");
		},

		/**
		 * @private Loads the data.
		 */
		_loadData: function() {
			if (this.entryTemplate.mode == "add") {
				this.saveInShow.set("checked", true);
				if (this.repository._isCM() && !this.repository.getPrivilege("foldering")) {
					this._disableFolderingOptions();
				} else {
					this.requireFileInFolder.set("checked", true);
				}
				setTimeout(lang.hitch(this, function() {
					this._initialized = true;
				}), 500);

			} else {
				if (this.entryTemplate.allowUserSelectFolder) {
					this.saveInShow.set("checked", true);
				} else {
					this.saveInHide.set("checked", true);
				}
				this._getTeamspace(this.entryTemplate.folder, lang.hitch(this, function(teamspace) {
					if (this.entryTemplate.folder) {
						if (teamspace) {
							this.saveInDropDown.displayTeamspacesInitially = true;
							this.saveInDropDown.setTeamspace(teamspace);
							if (this.entryTemplate.folder.id == teamspace.id) {
								this.entryTemplate.folder.name = teamspace.name;
							}
						}
						this.saveInDropDown.setSelected(this.entryTemplate.folder);
					}
					if (this.repository._isCM() && !this.repository.getPrivilege("foldering")) {
						this._disableFolderingOptions();
					} else {
						this.requireFileInFolder.set("checked", teamspace ? true : !this.entryTemplate.allowNoFolderSelected);
						this.requireFileInFolder.set("disabled", !!teamspace);
						this.restrictFolderChoice.set("checked", this.entryTemplate.restrictToSelectedFolderOrDescendant);
					}
					setTimeout(lang.hitch(this, function() {
						this._initialized = true;
					}), 500);
				}));
			}
		},

		/**
		 * @private Returns boolean indicating if the input ecm.model.ContentItem is a teamspace or teamspace folder.
		 */
		_getTeamspace: function(folder, callback) {
			if (folder) {
				folder.retrieveTeamspace(lang.hitch(this, function(teamspace) {
					callback(teamspace);
				}));
			} else {
				callback(null);
			}
		},

		/**
		 * @private Helper method for disabling the folder file in options
		 */
		_disableFolderingOptions: function() {
			this.requireFileInFolder.set("checked", false);
			this.requireFileInFolder.set("disabled", true);
			domClass.add(this.requireFileInFolderLabel, "labelReadOnly");
			this.restrictFolderChoice.set("checked", false);
			this.restrictFolderChoice.set("disabled", true);
			domClass.add(this.restrictFolderChoiceLabel, "labelReadOnly");
		},

		/**
		 * @private Fired when the save in dropdown value is set or changed.
		 */
		_onSaveInChange: function() {
			if (this._initialized) {
				this.onChangeDestination(this.saveInDropDown.getSelected());
				this.requireFileInFolder.set("disabled", this._isTeamspace(this.saveInDropDown.getSelected()));
				if (this.saveInDropDown.getSelected().isTeamspaceSubFolder) {
					this.requireFileInFolder.set("checked", true);
				}
			}
			if (!this._isFirstOnFolderSelect) { // ignore the first async folder selection from the save in widget
				this._isFirstOnFolderSelect = true;
			} else {
				this._onFieldChange();
			}
		},

		/**
		 * @private Returns true if the ecm.model.SelectedFolder is a teamspace or teamspace folder.
		 */
		_isTeamspace: function(selectedFolder) {
			if (selectedFolder.isTeamspaceSubFolder) { // This value is not always set.  Need to look at the attributes to determine if it is a teamspace.
				return true;
			} else if (selectedFolder.item && selectedFolder.item.attributes && selectedFolder.item.attributes.ClbTeamspaceName) {
				return true;
			} else if (selectedFolder.item && selectedFolder.item.attributes && selectedFolder.item.attributes.PathName && selectedFolder.item.attributes.PathName.indexOf("/ClbTeamspaces") == 0) {
				return true;
			} else {
				return false;
			}
		},

		/**
		 * Fired when save in value changes.
		 * 
		 * @param saveInValue
		 *            The selected {@link ecm.model.SelectedFolder} object.
		 */
		onChangeDestination: function(selectedValue) {
		},

		/**
		 * Set the type. Called by the SettingsPane to set the type.
		 */
		setType: function(type) {
			if (this.type != type) {
				this.type = type;
				if (type == EntryTemplate.TYPE.FOLDER && !this.repository._isCM()) {
					domClass.add(this.requireFileInFolderDiv, "dijitHidden");
				} else {
					domClass.remove(this.requireFileInFolderDiv, "dijitHidden");
				}
			}
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
			if (!this.saveInDropDown.isValid()) {
				messages.push({
					message: this.messages.entry_template_save_in_destination_required_message
				});
			}
			// For documents, and CM folders, if the save in is hidden, the save in has the repository selected, and not allow unfiled, this is an error
			var isRoot = false;
			if (this.saveInDropDown.getSelected()) {
				isRoot = this.saveInDropDown.getSelected().item.rootFolder;
			} else if (this.saveInDropDown._initiallySelectedFolder) {
				isRoot = false;
			}
			if ((this.type != EntryTemplate.TYPE.FOLDER || this.repository._isCM()) && !this.saveInShow.get("checked") && isRoot && this.requireFileInFolder.get("checked")) {
				messages.push({
					message: this.messages.entry_template_save_in_destination_must_select_folder
				});
			}
			return messages;
		},

		/**
		 * Loads the model with the screen data.
		 */
		loadModel: function() {
			this.entryTemplate.allowUserSelectFolder = this.saveInShow.get("checked");
			var selectedFolder = this.saveInDropDown.getSelected();
			this.entryTemplate.folder = (selectedFolder && selectedFolder.item && !selectedFolder.item.rootFolder) ? selectedFolder.item : null;
			var saveInRepository = (selectedFolder && selectedFolder.item && selectedFolder.item.repository) ? selectedFolder.item.repository : this.saveInDropDown.repository;
			this.entryTemplate.targetRepository = saveInRepository;
			if (lang.isString(saveInRepository.objectStore)) {
				this.entryTemplate.objectStore = {
					id: saveInRepository.objectStore,
					symbolicName: saveInRepository.objectStoreName,
					displayName: saveInRepository.objectStoreDisplayName
				};
			} else {
				if (!this.entryTemplate.objectStore || this.entryTemplate.objectStore.symbolicName != saveInRepository.objectStore.symbolicName) {
					this.entryTemplate.objectStore = saveInRepository.objectStore;
				}
			}
			if (this.type == EntryTemplate.TYPE.FOLDER && !this.repository._isCM()) {
				this.entryTemplate.allowNoFolderSelected = false;
			} else {
				this.entryTemplate.allowNoFolderSelected = !this.requireFileInFolder.get("checked");
			}
			this.entryTemplate.restrictToSelectedFolderOrDescendant = this.restrictFolderChoice.get("checked");
		}
	});
});
