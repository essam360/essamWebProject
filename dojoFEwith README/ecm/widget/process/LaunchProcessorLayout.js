/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array",
	"dojo/aspect",
	"dojo/dom-style",
	"dojo/dom-class",
	"dijit/_Widget",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/form/Button",
	"dijit/form/SimpleTextarea",
	"dijit/form/TextBox",
	"dijit/layout/ContentPane",
	"dijit/layout/TabContainer",
	"idx/html",
	"../../LoggerMixin",
	"../../Messages",
	"./ProcessorLayout",
	"./_ProcessorMixin",
	"./ProcessorButtonBar",
	"./WorkItemPropertiesPane",
	"./WorkItemAttachmentsPane",
	"ecm/model/WorkItem",
	"dojo/text!./templates/LaunchProcessorLayout.html"
], //

function(declare, lang, array, aspect, domStyle, domClass, _Widget, _TemplatedMixin, _WidgetsInTemplateMixin, Button, SimpleTextarea, TextBox, ContentPane, TabContainer, idxHtml, LoggerMixin, Messages, ProcessorLayout, _ProcessorMixin, ProcessorButtonBar, WorkItemPropertiesPane, WorkItemAttachmentsPane, WorkItem, template) {

	/**
	 * @name ecm.widget.process.LaunchProcessorLayout
	 * @class Provides a layout that is used to launch workflow processes.
	 * @augments ecm.widget.process.ProcessorLayout, ecm.widget.process._ProcessorMixin
	 */
	return declare("ecm.widget.process.LaunchProcessorLayout", [
		_Widget,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		ProcessorLayout,
		_ProcessorMixin,
		LoggerMixin
	], {
		/** @lends ecm.widget.process.LaunchProcessorLayout.prototype */

		widgetsInTemplate: true,
		contentString: template,

		postCreate: function() {
			this.logEntry("postCreate");
			this.inherited(arguments);

			this.own(aspect.after(this.workItemPropertiesPane, "onCompleteRendering", lang.hitch(this, "onCompleteRendering"), true));
			this.own(aspect.after(this.workItemPropertiesPane, "onChange", lang.hitch(this, "_onChangeProperties"), true));
			this.own(aspect.after(this.workItemPropertiesPane, "onRetrySave", lang.hitch(this, function() {
				this.onOk.apply(this, this._retrySaveArguments);
				delete this._retrySaveArguments;
			})));

			this.own(aspect.after(this.viewTabContainer, "_transition", lang.hitch(this, function(newPane, oldPane) {
				if (oldPane && newPane.dojoAttachPoint == "attachmentsContainer") {
					domClass.toggle(this.viewTabContainer.domNode, "ecmStepTabContainerBorder");
				} else if (oldPane && newPane.dojoAttachPoint == "propertiesContainer") {
					domClass.toggle(this.viewTabContainer.domNode, "ecmStepTabContainerBorder");
				}
			}), true));

			this.logExit("postCreate");
		},

		/**
		 * Creates an {@link ecm.model.WorkItem} object from the parameter information that is passed in.
		 * 
		 * @param repository
		 *            A {@link ecm.model.Repository} object.
		 */
		createWorkItem: function(repository) {
			this.logEntry("createWorkItem");

			var workflowVersion = this._getRequestParam("workflowVersion");
			if (workflowVersion) {
				var properties = {};
				properties["workflowVersion"] = decodeURIComponent(workflowVersion);
				var propertyMap = this._getRequestParam("propertyMap");
				if (propertyMap) {
					properties["F_PropertyMap"] = propertyMap;
				}
				var mode = this._getRequestParam("mode");
				if (mode) {
					properties["F_Mode"] = mode;
				}
				properties.id = workflowVersion;
				properties.repository = repository;

				this._workItem = new ecm.model.WorkItem(properties);

				var attachmentId = this._getRequestParam("attachmentId");
				if (attachmentId) {
					this._workItem.setAttachmentId(attachmentId);
				}
				var subject = this._getRequestParam("subject");

				this._workItem.retrieveLaunchParameters(lang.hitch(this, function(item) {
					if (subject) {
						this._workItem.setSubject(decodeURIComponent(subject));
					}
					this.updateView();
				}));
			} else {
				var workClassName = this._getRequestParam("workClassName");
				if (workClassName) {
					this._workItem = new ecm.model.WorkItem({
						id: workClassName,
						repository: repository,
						workclass_name: decodeURIComponent(workClassName)
					});
					this._workItem.retrieveLaunchParameters(lang.hitch(this, function(item) {
						this.updateView();
					}));
				} else {
					this.logError("createWorkItem", "URL parameter for workClassName is missing.");
				}
			}
			this.logExit("createWorkItem");
		},

		/**
		 * Updates the widgets with the current work item property information for rendering.
		 */
		updateView: function() {
			this.logEntry("updateView");
			this._setWindowTitle();
			this.subjectText.set("value", this._workItem.getValue("F_Subject"));
			this.launchedby.innerHTML = idxHtml.escapeHTML(this._workItem.repository.userId);

			var instructions = this._workItem.getValue("F_Instructions");
			if (instructions) {
				this.instructionsText.set('value', instructions);
			} else {
				domStyle.set(this.showInstructions.domNode, "display", "none");
				domStyle.set(this.instructionsText.domNode, "display", "none");				
			}

			this.addResponseButtons(this.processorButtonBar, true, this._messages.process_launch_button_label);			
			this._resizeIt();

			// Fix visibility problem with first tab contents after dojo 1.9 upgrade
			domClass.remove(this.propertiesContainer.domNode.parentNode, "dijitHidden");
			domClass.add(this.propertiesContainer.domNode.parentNode, "dijitVisible");

			this.workItemPropertiesPane.setItem(this._workItem);

			if (this.hasAttachment()) {
				if (this.viewTabContainer.getIndexOfChild(this.attachmentsContainer) == -1) {
					this.attachmentsContainer = new ContentPane({
						region: "center",
						title: this._messages.process_attachments,
						'dojoAttachPoint': 'attachmentsContainer'
					});
					this.workItemAttachmentsPane = new WorkItemAttachmentsPane({
						region: "center",
						'class': "centerPane",
						'dojoAttachPoint': 'workItemAttachmentsPane'
					});
					this.attachmentsContainer.addChild(this.workItemAttachmentsPane);
					this.viewTabContainer.addChild(this.attachmentsContainer);
				}
				this.workItemAttachmentsPane.setItem(this._workItem);
			}

			this.workItemPropertiesPane.resizeIt();

			this.logExit("updateView");
		},

		/**
		 * Checks the work item properties pane properties list for having valid values.
		 * 
		 * @param focus
		 *            A boolean value indicating if the error field (if any) should be set as focus.
		 * @param onEditStatus
		 *            A boolean value indicating if we are editing the properties.
		 * @param onSaveStatus
		 *            A boolean value indicating if we are saving the properties.
		 * @returns {Boolean} A value of <code>true</code> if the property values are valid, <code>false</code>
		 *          otherwise.
		 */
		isValid: function(focus, onEditStatus, onSaveStatus) {
			var errorField = this.workItemPropertiesPane.validate(focus, onEditStatus, onSaveStatus);
			if (errorField) {
				this.viewTabContainer.selectChild(this.propertiesContainer);
				return false;
			} else {
				return true;
			}
		},

		_onChangeProperties: function() {
			// Do not disable the buttons.
			// If there is an invalid value, focus will be directed to the invalid input when a button is clicked.
			this.isValid(false, false, false);
		},

		_showInstructions: function() {
			var disabled = this.instructionsText.disabled;
			if (disabled == true) {
				this.instructionsText.disabled = false;
				this.showInstructions.set('label', this.messages.process_hide_instructions);
				domStyle.set(this.instructionsText.domNode, "display", "");
			} else {
				this.instructionsText.disabled = true;
				this.showInstructions.set('label', this.messages.process_show_instructions);
				domStyle.set(this.instructionsText.domNode, "display", "none");
			}
			this._resizeIt();
		},

		_resizeIt: function() {
			this.mainBorderContainer.resize();
			this.stepContentPane.resize();
		},

		/**
		 * An event function called after the processor layout has completed rendering.
		 */
		onCompleteRendering: function() {
			this._setFocus();
			this._onChangeProperties();
		},

		_setFocus: function() {
			if (this.workItemPropertiesPane.hasDisplayedFields() == false) {
				if (this._responseButtons) {
					this._responseButtons[0].focus();
				}
			}
		},

		/**
		 * Saves the modified processor information and will dispatch the work item.
		 * 
		 * @param dispatch
		 *            A boolean value indicating whether to dispatch the item after saving its values. This value should
		 *            always be <code>true</code> for a launch processor.
		 */
		onOk: function(dispatch) {
			this.logEntry("onOk");
			this._retrySaveArguments = arguments;
			if (this.isValid(true, false, true)) {
				if (this._closing) {
					return;
				}
				this._closing = true;

				var properties = this.workItemPropertiesPane.getPropertiesJSON();
				// if there is a response add it in to the properties collection
				// Process Voting check F_Mode first
				if (this._workItem.F_Mode == "et") {
					for ( var i in properties) {
						var values = properties[i].value;
						if (values != null && lang.isArrayLike(values)) {
							var value = values[0];
							if (value && value.isInstanceOf && (value.isInstanceOf(ecm.model.User) || value.isInstanceOf(ecm.model.UserGroup))) {
								var votingParameter = value._votingParameter;
								if (votingParameter != null) {
									var votingNumber = value._votingNumber;
									// Found a new voting total value, set it on the real property value
									properties.push(this.getStringField(votingParameter, votingNumber));
								}
							}
						}
					}
				}
				var response = this._workItem.getValue("F_Responses");
				if (response) {
					properties.push(this.getStringField("F_Responses", response));
				}
				var subject = this.subjectText.get("value");
				if (subject) {
					properties.push(this.getStringField("F_Subject", subject));
				}

				if (this.hasAttachment()) {
					var attachments = this.workItemAttachmentsPane.getModifiedAttachments();
					for (i = 0; i < attachments.length; i++) {
						properties.push(attachments[i]); // add any modified attachments to list
					}
				}
				// Push in special properties for EDS integration
				properties.push(this.getSystemField("workclassName", this._workItem.workclass_name));
				properties.push(this.getSystemField("sheetName", this._workItem.sheet_name));
				properties.push(this.getSystemField("stepName", this._workItem.step_name));
				// Setup information about the initiating attachment if added/checked in from Entry Template
				var mode = this._workItem.F_Mode;
				if (mode && mode == "et") {
					var attachmentId = this._workItem.F_AttachmentId;
					if (attachmentId) {
						properties.push(this.getSystemField("F_AttachmentId", attachmentId));
					}
				}

				this._workItem.completeStep(properties, dispatch, lang.hitch(this, function(item, response) {
					if (response && response.fieldErrors) {
						this.logInfo("onOk_callback", "There are field " + response.fieldErrors.length + " validation errors.");
						this._closing = false;

						var fieldErrorMap = {};
						array.forEach(response.fieldErrors, function(fieldError) {
							this.workItemPropertiesPane.setFieldError(fieldError.symbolicName, fieldError.errorMessage, fieldError.invalidItems);
							fieldErrorMap[fieldError.symbolicName] = fieldError;
						}, this);

						// Set the focus to the first invalid field, in the layout order.
						array.some(properties, function(prop) {
							if (fieldErrorMap[prop.name] == null) {
								return false;
							}
							this.workItemPropertiesPane.setFieldFocus(prop.name);
							return true;
						}, this);
					} else {
						this._completeStepCompleted(item);
					}

				}), false, lang.hitch(this, function() {
					this._closing = false;
				}), this._getBackgroundRequest());
				this.logExit("onOk");
			}
		},

		_completeStepCompleted: function(response) {
			this.logEntry("completeStepCompleted");
			if (this._canAccessOpener() && this._checkHost()) { // Check opener.ecm since it could have been opened from a non ICN window without any ecm widgets like from a Process designer.
				this._setStatusMessage(this._workItem);
				window.opener.ecm.widget.dialog.stepProcessorWindow.onStepProcessorWindowCompleted(this._workItem);
			} else {
				this._handleCloseMessage();
			}
			this._closeWindow();
			this.logExit("completeStepCompleted");
		},

		/**
		 * Cancels the launch operation.
		 */
		onCancel: function() {
			this.logEntry("onCancel");

			if (this._closing) {
				return;
			}
			this._closing = true;

			this._workItem.unlockStep(false, lang.hitch(this, function(response) {
				this._cancelStepCompleted(response);
			}), false, lang.hitch(this, function() {
				this._closing = false;
			}), this._getBackgroundRequest());
			this.logExit("onCancel");
		},

		_cancelStepCompleted: function(response) {
			this.logEntry("cancelStepCompleted");
			if (this._canAccessOpener() && this._checkHost()) { // Check opener.ecm since it could have been opened from a non ICN window without any ecm widgets like from a Process designer.
				this._setStatusMessage(this._workItem);
				window.opener.ecm.widget.dialog.stepProcessorWindow.onStepProcessorWindowCancelled(this._workItem);
			} else {
				this._handleCloseMessage();
			}
			this._closeWindow();
			this.logExit("cancelStepCompleted");
		},

		destroy: function() {
			this._workItem = null;
			this.inherited(arguments);
		}

	});
});
