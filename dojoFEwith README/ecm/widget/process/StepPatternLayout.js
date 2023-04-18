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
	"dojo/dom-construct",
	"dijit/_Widget",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/form/SimpleTextarea",
	"dijit/layout/ContentPane",
	"dijit/layout/TabContainer",
	"idx/html",
	"../../LoggerMixin",
	"../../Messages",
	"./StepProcessorLayout",
	"./ProcessorButtonBar",
	"./StepPatternPropertiesPane",
	"./WorkItemAttachmentsPane",
	"./TrackerHistoryPane",
	"../dialog/ReassignToUserDialog",
	"../dialog/MessageDialog",
	"ecm/model/WorkItem",
	"ecm/model/WorkItemProcessor",
	"dojo/text!./templates/StepPatternLayout.html"
],

function(declare, lang, array, aspect, domStyle, domClass, construct, _Widget, _TemplatedMixin, _WidgetsInTemplateMixin, SimpleTextarea, ContentPane, TabContainer, idxHtml, LoggerMixin, Messages, StepProcessorLayout, ProcessorButtonBar, StepPatternPropertiesPane, WorkItemAttachmentsPane, TrackerHistoryPane, ReassignToUserDialog, MessageDialog, WorkItem, WorkItemProcessor, template) {

	/**
	 * @name ecm.widget.process.StepPatternLayout
	 * @class Provides the basic layout for step processors.
	 * @augments ecm.widget.process.StepProcessorLayout
	 * @since 2.0.2
	 */
	return declare("ecm.widget.process.StepPatternLayout", [
		_Widget,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		StepProcessorLayout,
		LoggerMixin
	], {
		/** @lends ecm.widget.process.StepPatternLayout.prototype */

		widgetsInTemplate: true,
		contentString: template,

		_connectTabContainer: function() {
			this.viewTabContainer.watch("selectedChildWidget", lang.hitch(this, function(name, oldPane, newPane) {
				if (oldPane && newPane.dojoAttachPoint == "historyContainer") {
					this.workItemHistoryPane.render();
				}
			}));
		},

		/**
		 * Updates the widgets with the current work item property information for rendering.
		 */
		updateView: function() {
			// Overrides the system reassign flag with the ICN_AllowReassign flag.  User can use the ICN_AllowReassign custom field to disabled reassign.
			if (this._workItem.can_reassign) {
				var ICNAllowReassign = this._workItem.getValue("ICN_AllowReassign");
				this._workItem.can_reassign = ICNAllowReassign ? ICNAllowReassign : false;
			}
			// Sets the F_Instructions to the ICN_Instructions.  Step Pattern workflow is using ICN_Instruction so override it here.
			var instructions = this._workItem.getValue("ICN_Instructions");
			if (instructions) {
				this._workItem.setValue("F_Instructions", instructions);
			} else {
				this._workItem.setValue("F_Instructions", "");
			}
			this.inherited(arguments);
			// Selects the first attachment item automatically when the attachments tab is opened
			var attachmentHandler = aspect.after(this.attachmentsContainer, "onShow", lang.hitch(this, function(item) {
				this.workItemAttachmentsPane.selectAttachmentItem(this._workItem.resultSet.items[0]);
				attachmentHandler.remove(); //Disconnects the connection.  Only do this on first show.
			}), true);
		},

		/**
		 * Checks the work item properties pane properties list for having valid values.
		 * 
		 * @param focus
		 * @since 2.0.3.8 A boolean value indicating if the error field (if any) should be set as focus.
		 * @param onEditStatus
		 * @since 2.0.3.8 A boolean value indicating if we are editing the properties.
		 * @param onSaveStatus
		 * @since 2.0.3.8 A boolean value indicating if we are saving the properties.
		 * @param response
		 * @since 2.0.3.8 Contains the response when this validation is taking place as part of executing a workflow response.
		 * @returns {Boolean} A value of <code>true</code> if the property values are valid, <code>false</code>
		 *          otherwise.
		 */
		isValid: function(focus, onEditStatus, onSaveStatus, response) {
			var isValid = this.workItemPropertiesPane.isValid(focus, onEditStatus, onSaveStatus, response);
			if (!isValid) {
				this.viewTabContainer.selectChild(this.propertiesContainer);
				return false;
			} else {
				return true;
			}
		},

		_onChangeProperties: function() {	
			this.logEntry("_onChangeProperties");
			// Do not disable the buttons.
			// If there is an invalid value, focus will be directed to the invalid input when a button is clicked.
			var isValid = this.isValid(false, false, false);
			this.logExit("_onChangeProperties");
		},

		/**
		 * Saves the modified processor information and if requested, will dispatch the work item.
		 * 
		 * @param dispatch
		 *            A boolean value indicating whether to dispatch the item after saving it's values.
		 * @param callback
		 *            A callback function that is called after the item information has been saved.
		 */
		onOk: function(dispatch, callback) {
			this.logEntry("onOk");
			if (this.isValid(true, false, true)) {
				if (this._closing) {
					return;
				}
				this._closing = true;
				this._retrySaveArguments = arguments;

				var properties = this.workItemPropertiesPane.getPropertiesJSON();
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
							this.stepPatternPropertiesPane.setFieldError(fieldError.symbolicName, fieldError.errorMessage, fieldError.invalidItems);
							fieldErrorMap[fieldError.symbolicName] = fieldError;
						}, this);

						// Set the focus to the first invalid field, in the layout order.
						array.some(properties, function(prop) {
							if (fieldErrorMap[prop.name] == null) {
								return false;
							}
							this.stepPatternPropertiesPane.setFieldFocus(prop.name);
							return true;
						}, this);
					} else {
						if (callback) {
							this.logInfo("onOk_callback", "Completed successfully, calling callback function.");
							callback(item);
						} else {
							this._onOkCompleted(item);
						}
					}
				}), false, lang.hitch(this, function() {
					this._closing = false;
				}), this._getBackgroundRequest());
				this.logExit("onOk");
			}
		},

		/**
		 * Checks work item to determine if the history pane should be rendered.
		 * 
		 * @returns {Boolean} A value of <code>true</code> if the history pane can be rendered, <code>false</code>
		 *          otherwise.
		 * @since 2.0.3
		 */
		canRenderHistoryPane: function() {
			return false; // hold off on adding the history pane until after attributes are returned (onCompleteRendering)
		},

		/**
		 * An event function that is called when the processor layout has completed rendering.
		 */
		onCompleteRendering: function() {
			if (this.workItemPropertiesPane.isFinalNotifcationStep()) {
				this.propertiesContainer.set("title", this._messages.process_summary);
			} else {
				this.propertiesContainer.set("title", this._messages.process_properties);
				if (this._workItem.can_view_history) {
					this.createHistoryPane();
					this.workItemHistoryPane.setItem(this._workItem);
				} else {
					if (this.viewTabContainer.getIndexOfChild(this.historyContainer) != -1) {
						this.viewTabContainer.removeChild(this.historyContainer);
					}
				}
			}
			this.inherited(arguments);
		}
	});
});
