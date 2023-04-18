/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/array",
	"dojo/_base/lang",
	"dojo/_base/sniff",
	"dojo/dom-class",
	"dojo/dom-attr",
	"dojo/dom-style",
	"dojo/dom-geometry",
	"dojo/aspect",
	"dijit/_Widget",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/form/Button",
	"dijit/layout/ContentPane",
	"ecm/LoggerMixin",
	"ecm/MessagesMixin",
	"ecm/model/EntryTemplate",
	"ecm/model/ContentItem",
	"ecm/widget/_InlineMessageMixin",
	"ecm/widget/entryTemplateBuilder/SettingsPane",
	"ecm/widget/entryTemplateBuilder/DesignerPane",
	"ecm/widget/dialog/ConfirmationDialog",
	"idx/layout/BorderContainer",
	"dojo/text!./templates/Builder.html"
],

function(declare, //
array, //
lang, //
has, //
domClass, //
domAttr, //
domStyle, //
domGeom, //
aspect, //
_Widget, //
_TemplatedMixin, //
_WidgetsInTemplateMixin, //
Button, //
ContentPane, //
LoggerMixin, //
MessagesMixin, //
EntryTemplate, //
ContentItem, //
_InlineMessageMixin, //
SettingsPane, //
DesignerPane, //
ConfirmationDialog, //
BorderContainer, //
template) {

	/**
	 * @name ecm.widget.entryTemplateBuilder.Builder
	 * @class Provides a widget that has a toolbar, the entry template document settings, and the entry template
	 *        settings.
	 * @augments dijit._Widget
	 * @since 2.0.3
	 */
	return declare("ecm.widget.entryTemplateBuilder.Builder", [
		_Widget,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		LoggerMixin,
		MessagesMixin,
		_InlineMessageMixin
	], {
		/** @lends ecm.widget.entryTemplateBuilder.Builder */

		templateString: template,
		widgetsInTemplate: true,

		/**
		 * Instance of {@link ecm.model.Repository}.
		 */
		repository: null,
		/**
		 * Container that has a closeTab method.
		 */
		container: null,
		/**
		 * Boolean indicating if the close icon should be displayed on this tab.
		 */
		closable: true,
		/**
		 * The entry template being added or edited.
		 */
		entryTemplate: null,
		/**
		 * @private Boolean indicating if the tab is dirty.
		 */
		_dirty: false,

		/**
		 * Post create.
		 */
		postCreate: function() {
			this.logEntry("postCreate");
			this.inherited(arguments);
			this.textDir = has("text-direction");

			if (!this.entryTemplate) {
				this.entryTemplate = EntryTemplate.createFromJSON({
					mode: "add"
				});
			}
			this.title = this.entryTemplate.mode == "edit" ? this.entryTemplate.name : this.messages.entry_template_new;
			this.builderBorderContainer.set("aria-label", this.messages.entry_template_builder_aria_label);
			this.designerBorderContainer.set("aria-label", this.messages.entry_template_builder_layout_aria_label);

			var applyRepository = lang.hitch(this, function() {
				this.settingsPane.set("repository", this.repository);
				this._loadData();
			});

			if (this.repository) {
				applyRepository();
			}
			this.watch("repository", applyRepository);

			this.own(aspect.after(this.settingsPane, "onFieldChange", lang.hitch(this, "_onFieldChange")));
			this.own(aspect.after(this.settingsPane, "onOpenDesigner", lang.hitch(this, "_openDesigner")));
			this.own(aspect.after(this.settingsPane, "onClearDesigner", lang.hitch(this, "_clearDesigner")));
			this.own(aspect.after(this.settingsPane, "onSetContentClass", lang.hitch(this, function(contentClass) {
				this.designerPane.setContentClass(contentClass);
			}), true));
			this.own(aspect.after(this.settingsPane, "onSetOriginalContentClass", lang.hitch(this, function(originalContentClass) {
				this.designerPane.setOriginalContentClass(originalContentClass); // has no ET settings applied
			}), true));
			this.own(aspect.after(this.designerPane, "onDesignChange", lang.hitch(this, "_designChanged")));
			this.own(aspect.after(this.designerPane, "resize", lang.hitch(this, "resizeDesigner")));

			this.stackContainer.selectChild(this.builderBorderContainer);

			this.logExit("postCreate");
		},

		/**
		 * @private Loads the data for the pane.
		 */
		_loadData: function() {
			this.settingsPane.set("entryTemplate", this.entryTemplate);
			this.settingsPane.set("data", this.getSettingsData());
			this.designerPane.set("entryTemplate", this.entryTemplate);

			// If find a warning message, display it.
			var messages = this.settingsPane.getMessages();
			if (messages && messages.length > 0) {
				for (var i = 0; i < messages.length; i++) {
					var message = messages[i];
					if (message.category == "warning") {
						this.setMessage(message.message, message.category);
						break;
					}
				}
			}
		},

		/**
		 * Returns the settings data to display on the Settings Pane. Plugin-writers can override this method to return
		 * the appropriate settings data to display for their custom entry template.
		 */
		getSettingsData: function() {
			var settingsData = [
				{
					label: this.messages.entry_template_settings_document,
					pane: "ecm.widget.entryTemplateBuilder.DocumentSettingsPane",
					"class": "entryTemplateSettings"
				},
				{
					label: this.messages.entry_template_settings_folder,
					hoverHelp: this.messages.entry_template_settings_folder_intro,
					pane: "ecm.widget.entryTemplateBuilder.DestinationPane"
				},
				{
					label: this.messages.entry_template_settings_properties,
					hoverHelp: this.messages.entry_template_settings_properties_intro,
					pane: "ecm.widget.entryTemplateBuilder.PropertiesPane"
				},
				{
					label: this.messages.entry_template_settings_security,
					hoverHelp: this.messages.entry_template_settings_security_intro,
					pane: "ecm.widget.entryTemplateBuilder.SecurityPane"
				},
				{
					label: this.messages.entry_template_settings_workflow,
					hoverHelp: this.messages.entty_template_settings_workflow_intro,
					pane: "ecm.widget.entryTemplateBuilder.WorkflowPane"
				},
				{
					label: this.messages.entry_template_settings_options,
					pane: "ecm.widget.entryTemplateBuilder.OptionsPane"
				}
			];
			return settingsData;
		},

		/**
		 * @private Checks if the data is valid and if the save buttons should be enabled.
		 */
		_onFieldChange: function() {
			//var isValid = this._isValid();
			//this.saveAndCloseButton.set("disabled", !isValid);
			//this.saveButton.set("disabled", !isValid);
			this._dirty = true;
			this._updateTabLabel();
		},

		/**
		 * @private Change the designer save buttons to be enabled.
		 */
		_designChanged: function() {
			this.saveAndCloseDesignerButton.set("disabled", false);
			this.saveDesignerButton.set("disabled", false);
		},

		/**
		 * @private Checks if the data is valid.
		 */
		_isValid: function() {
			var isValid = this.settingsPane.isValid();
			return isValid;
		},

		/**
		 * @private Called when the save and close button is selected.
		 */
		_onSaveAndClose: function() {
			if (this._canSave()) {
				this._saveData(false, lang.hitch(this, function() {
					if (this.container) {
						this.container.closeTab(this);
					}
				}));
			}
		},

		/**
		 * @private Called when the save button is selected.
		 */
		/* _onSave: function() {
			if (this._canSave()) {
				this._saveData(true, lang.hitch(this, function() {
				}));
			}
		}, */

		/**
		 * @private Check if can save. If messages, display the messages.
		 */
		_canSave: function() {
			var messages = this.settingsPane.getMessages();
			if (messages && messages.length > 0) {
				if (messages[0].category == "warning") {
					// Found a warning.  Check for an error. 
					if (messages.length > 1) {
						for (var i = 1; i < messages.length; i++) {
							var error = messages[i];
							if (error.category != "warning") {
								this.setMessage(error.message, error.category);
								return false;
							}
						}
					}
					// If no errors in the list, then display the warning.
					this.setMessage(messages[0].message, messages[0].category);
					return true;
				} else {
					this.setMessage(messages[0].message, messages[0].category);
					return false;
				}
			} else {
				this.clearMessage();
				return true;
			}
		},

		/**
		 * @private Called when the copy button is selected.
		 */
		_onCopy: function() {
			if (this.container) {
				this.settingsPane.loadModel();
				this.designerPane.loadModel();
				var clonedEntryTemplate = this.entryTemplate.clone();
				// ecm/widget/SecurityPane getPermissions() returns an array of objects with no grantee.  
				// ecm/widget/SecurityPane _getDirectPermissions() returns the array we need which is the _permissionsDirectList value.  
				// Copy over the _permissionsDirectList array into the permissions array so the new copy can show the permissions correctly.
				if (this.entryTemplate._permissionsDirectList) {
					clonedEntryTemplate.permissions = this.entryTemplate._permissionsDirectList;
					clonedEntryTemplate._permissionsDirectList = null;
					this.entryTemplate._permissionsDirectList = null;
				}
				clonedEntryTemplate.mode = "copy";
				clonedEntryTemplate.name = ""; // initialize the name and description
				clonedEntryTemplate.description = "";
				this.container.addEntryTemplateBuilder(clonedEntryTemplate);
			}
		},

		/**
		 * @private Saves the data.
		 */
		_saveData: function(checkout, callback) {
			this.settingsPane.loadModel();
			this.designerPane.loadModel();
			delete this.entryTemplate._permissionsDirectList;
			if (this.entryTemplate.mode == "edit") { // save the edited entry template
				this.repository.updateEntryTemplate(this.entryTemplate, checkout, lang.hitch(this, "_saveDataSuccessful", callback));
			} else { // add the entry template
				this.repository.addEntryTemplate(this.entryTemplate, lang.hitch(this, "_saveDataSuccessful", callback));
			}
		},

		/**
		 * @private Called after successfully saving the data on the mid-tier.
		 */
		_saveDataSuccessful: function(callback, entryTemplate) {
			entryTemplate.mode = "edit";
			this.entryTemplate = entryTemplate;
			this._dirty = false;
			this._updateTabLabel(this.entryTemplate.name);
			if (callback) {
				callback();
			}
		},

		/**
		 * @private Update the tab label.
		 */
		_updateTabLabel: function(label) {
			if (label) {
				this.title = label;
			}
			if (this.controlButton) {
				if (this.textDir && this.entryTemplate.mode == "edit") {
					this.controlButton.set("label", (this._dirty ? "*" : "") + this.enforceTextDirWithUcc(null, this.title));
				} else {
					this.controlButton.set("label", (this._dirty ? "*" : "") + this.title);
				}
			}
		},

		/**
		 * @private Opens the property layout designer pane "inplace".
		 */
		_openDesigner: function() {
			this.saveAndCloseDesignerButton.set("disabled", true);
			this.saveDesignerButton.set("disabled", true);
			this.stackContainer.selectChild(this.designerBorderContainer);
			this.designerPane.loadDesigner(this.settingsPane.contentClass);
		},

		/**
		 * @private Clears the property layout designer information.
		 */
		_clearDesigner: function() {
			this.designerPane.clear();
			this._onFieldChange(); // Fire this event to cause the Tab label to show modified state
			// Get contentClass from class selector and update property table rendering
			this.settingsPane.setClearLayout(true);
			this.settingsPane.resetContentClass();
		},

		/**
		 * @private Saves the property layout designer modifications and navigates back to builder.
		 */
		_onSaveAndCloseDesigner: function() {
			this.stackContainer.selectChild(this.builderBorderContainer);
			this._onSaveDesigner();
		},

		/**
		 * @private Saves the property layout designer modifications.
		 */
		_onSaveDesigner: function() {
			this._onFieldChange(); // Fire this event to cause the Tab label to show modified state
			this.designerPane.save();
			var designerContentClass = this.designerPane.designerContentClass;
			if (designerContentClass != null) {
				this.settingsPane.updateContentClass(designerContentClass);
			}
			this.settingsPane.setClearLayout(false);
		},

		/**
		 * @private Cancels the property layout designer (does not save any modifications). Changes view back to
		 *          builder.
		 */
		_onCancelDesigner: function() {
			this.stackContainer.selectChild(this.builderBorderContainer);
			this.designerPane.clearContentClass();
		},

		/**
		 * @private Called when the cancel button is selected.
		 */
		_onCancel: function() {
			if (this.container) {
				this.container.closeTab(this); // This will call onClose
			}
		},

		/**
		 * Perform the close operation.
		 */
		onClose: function() {
			if (this._dirty && ecm.model.desktop && ecm.model.desktop.connected) {
				var confirmClose = new ConfirmationDialog({
					text: this.messages.admin_prompt_close_without_save,
					title: this.messages.close,
					buttonLabel: this.messages.yes,
					cancelButtonLabel: this.messages.no,
					cancelButtonDefault: true,
					onExecute: lang.hitch(this, function() {
						this._dirty = false;
						this.container.closeTab(this); // This will call onClose
					})
				});
				confirmClose.show();
				return false;
			} else {
				this._cancelCheckout();
			}
			return true;
		},

		/**
		 * @private
		 */
		_cancelCheckout: function() {
			if (this.entryTemplate && this.entryTemplate.id) {
				var items = [];
				var className;
				if (this.repository._isP8()) {
					className = this.entryTemplate.id.split(",")[0];
				} else if (this.repository._isCM()) {
					className = "ICMEntryTemplate";
				}
				var item = ContentItem.createFromJSON({
					id: this.entryTemplate.id,
					template: className
				}, this.repository, null, null);
				if (this.repository._isP8()) {
					item.vsId = this.entryTemplate.vsId;
				} else if (this.repository._isCM()) {
					item.itemId = this.entryTemplate.itemId;
				}
				items.push(item);
				var self = this;
				this.repository.unlockItems(items);
			}
		},

		/**
		 * Manually resize the designer pane to explicitly calculate the height/width for designer
		 */
		resizeDesigner: function() {
			this.designerPane.resizeDesigner();
		},

		/**
		 * Resize the data.
		 */
		resize: function() {
			this.borderContainer.resize();
		},

		/**
		 * Sets the introduction text on the builder.
		 */
		setIntroText: function(text) {
			domClass.remove(this.intro, "dijitHiden");

			if (this.introText.firstChild) {
				// Update the existing message text.
				this.introText.innerHTML = text;
			} else {
				// Create the message text.
				var textNode = document.createTextNode(text);
				this.introText.appendChild(textNode);
			}
			this.resize();
		},

		/**
		 * Sets the introduction text reference link on the builder. This is a link that appears after the introduction
		 * text.
		 */
		setIntroTextRef: function(text, link) {
			domClass.remove(this.intro, "dijitHiden");

			this.introTextRef.innerHTML = '<a href="' + link + '" target="_blank">' + text + '</a>';
			this.resize();
		},

		/**
		 * Destroy.
		 */
		destroy: function() {
			this.inherited(arguments);
		}
	});
});
