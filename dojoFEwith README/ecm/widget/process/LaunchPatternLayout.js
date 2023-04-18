/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array", //
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
	"./LaunchPatternPropertiesPane",
	"./WorkItemAttachmentsPane",
	"../../model/WorkItem",
	"dojo/text!./templates/LaunchPatternLayout.html"
], //

function(declare, //
lang, //
array, //
domStyle, //
domClass, //
_Widget, //
_TemplatedMixin, //
_WidgetsInTemplateMixin, //
Button, //
SimpleTextarea, //
TextBox, //
ContentPane, //
TabContainer, //
idxHtml, //
LoggerMixin, //
Messages, //
ProcessorLayout, //
_ProcessorMixin, //
ProcessorButtonBar, //
LaunchPatternPropertiesPane, //
WorkItemAttachmentsPane, //
WorkItem, //
template) {

	/**
	 * @name ecm.widget.process.LaunchPatternLayout
	 * @class Provides a layout that is used to launch pattern workflow processes.
	 * @augments ecm.widget.process.ProcessorLayout, ecm.widget.process._ProcessorMixin
	 * @since 2.0.2
	 */
	return declare("ecm.widget.process.LaunchPatternLayout", [
		_Widget,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		ProcessorLayout,
		_ProcessorMixin,
		LoggerMixin
	], {
		/** @lends ecm.widget.process.LaunchPatternLayout.prototype */

		widgetsInTemplate: true,
		contentString: template,

		postCreate: function() {
			this.logEntry("postCreate");
			this.inherited(arguments);

			this.connect(this.launchPatternPropertiesPane, "onCompleteRendering", "_onChangeProperties");
			this.connect(this.launchPatternPropertiesPane, "onChange", "_onChangeProperties");

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
				this._workItem.retrieveLaunchParameters(lang.hitch(this, function(item) {
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
					var attachmentId = this._getRequestParam("attachmentId");
					if (attachmentId) {
						this._workItem.setAttachmentId(attachmentId);
					}
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
			this.launchedby.innerHTML = idxHtml.escapeHTML(this._workItem.repository.userId);
			this.addResponseButtons(this.processorButtonBar, true, this._messages.process_launch_button_label);

			// Fix visibility problem with first tab contents after dojo 1.9 upgrade
			domClass.remove(this.launchPatternPropertiesContainer.domNode.parentNode, "dijitHidden");
			domClass.add(this.launchPatternPropertiesContainer.domNode.parentNode, "dijitVisible");

			this.launchPatternPropertiesPane.setItem(this._workItem);
			this.workItemAttachmentsPane.setItem(this._workItem);
			// Selects the first attachment item automatically when the attachments tab is opened
			var attachmentConnection = this.connect(this.attachmentsContainer, "onShow", function(item) {
				this.workItemAttachmentsPane.selectAttachmentItem(this._workItem.resultSet.items[0]);
				this.disconnect(attachmentConnection); //Disconnects the connection.  Only do this on first show.
			});

			this.logExit("updateView");
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
			if (this.isValid(true)) {
				if (this._closing) {
					return;
				}
				this._closing = true;

				var properties = this.launchPatternPropertiesPane.getPropertiesJSON();

				// if there is a response add it in to the properties collection				
				var response = this._workItem.getValue("F_Responses");
				if (response) {
					properties.push(this.getStringField("F_Responses", response));
				}

				var attachments = this.workItemAttachmentsPane.getModifiedAttachments();
				for (var i = 0; i < attachments.length; i++) {
					properties.push(attachments[i]); // add any modified attachments to list
				}
				// Push in special properties
				properties.push(this.getSystemField("workclassName", this._workItem.workclass_name));
				properties.push(this.getSystemField("sheetName", this._workItem.sheet_name));
				properties.push(this.getSystemField("stepName", this._workItem.step_name));

				this._workItem.completeStep(properties, dispatch, lang.hitch(this, function(item, response) {
					if (response && response.fieldErrors) {
						this.logInfo("onOk_callback", "There are field " + response.fieldErrors.length + " validation errors.");
						this._closing = false;

						var fieldErrorMap = {};
						array.forEach(response.fieldErrors, function(fieldError) {
							this.launchPatternPropertiesPane.setFieldError(fieldError.symbolicName, fieldError.errorMessage);
							fieldErrorMap[fieldError.symbolicName] = fieldError;
						}, this);

						// Set the focus to the first invalid field, in the layout order.
						array.some(properties, function(prop) {
							if (fieldErrorMap[prop.name] == null) {
								return false;
							}
							this.launchPatternPropertiesPane.setFieldFocus(prop.name);
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

		/**
		 * Checks the work item properties pane properties list for having valid values.
		 * 
		 * @param focus
		 * @since 2.0.3.8 A boolean value indicating if the error field (if any) should be set as focus.
		 * @returns {Boolean} A value of <code>true</code> if the property values are valid, <code>false</code>
		 *          otherwise.
		 */
		isValid: function(focus) {
			var isValid = this.launchPatternPropertiesPane.isValid(focus);
			if (!isValid) {
				this.viewTabContainer.selectChild(this.launchPatternPropertiesContainer);
				return false;
			} else {
				return true;
			}
		},

		_onChangeProperties: function() {
			// Do not disable the buttons.
			// If there is an invalid value, focus will be directed to the invalid input when a button is clicked.
			this.isValid(false);
		},

		_completeStepCompleted: function(response) {
			this.logEntry("completeStepCompleted");
			if (this._canAccessOpener() && this._checkHost()) {
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
			if (this._canAccessOpener() && this._checkHost()) {
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
