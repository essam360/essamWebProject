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
	"dojo/dom-construct",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/_Widget",
	"./TrackerHistoryPane",
	"./_PatternPropertiesMixin",
	"../../Messages",
	"../../LoggerMixin",
	"../../model/ContentClass",
	"../../widget/HoverHelp",
	"dojo/text!./templates/StepPatternPropertiesPane.html",
	"dijit/layout/ContentPane",
	"dijit/layout/BorderContainer"
],

function(declare, lang, array, string, domClass, domStyle, domConstruct, _TemplatedMixin, _WidgetsInTemplateMixin, _Widget, TrackerHistoryPane, _PatternPropertiesMixin, Messages, LoggerMixin, ContentClass, HoverHelp, template) {
	/**
	 * @name ecm.widget.process.StepPatternPropertiesPane
	 * @class Provides a widget that is used to view or edit the properties of a pattern work item.
	 * @augments dijit._Widget
	 * @since 2.0.2
	 */
	return declare("ecm.widget.process.StepPatternPropertiesPane", [
		_Widget,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		_PatternPropertiesMixin,
		LoggerMixin
	], {
		/** @lends ecm.widget.process.StepPatternPropertiesPane.prototype */

		templateString: template,
		widgetsInTemplate: true,

		_messages: ecm.messages,

		_workItem: null,

		postCreate: function() {
			this.inherited(arguments);
			domStyle.set(this._gridContainer.domNode, "display", "none");
			domStyle.set(this._commentsContainer.domNode, "display", "none");
		},

		/**
		 * Returns the value of the specified field.
		 * 
		 * @returns field value
		 */
		getValue: function(fieldName) {
			for (var i = 0; i < this._attributeDefinitions.length; i++) {
				var attribute = this._attributeDefinitions[i];
				if (attribute.id == fieldName) {
					return this._getValue(attribute);
				}
			}

			this.logInfo("Field is not found: " + fieldName);
			return null;
		},

		_createSinglePropertyEditorControls: function() {
			this.logEntry("_createSinglePropertyEditorControls");
			var kwArgs;
			for (var i = 0; i < this._attributeDefinitions.length; i++) {
				var attribute = this._attributeDefinitions[i];
				if (attribute.id == "F_Comment") {
					var value = this._workItem.getValue(attribute.id) || "";
					var args = {
						repository: this._workItem.repository,
						required: this.isReworkStep(),
						values: [
							value
						],
						width: "100%"
					};
					if (this._commentTextField) {
						this._commentsTextBox.removeChild(this._commentTextField.domNode);
						this._commentTextField.setHoverHelp(null);
						this._commentTextField.destroyRecursive();
					}
					this._commentTextField = this._createSinglePropertyEditorControl(attribute, args);
					this._commentTextField.set("rows", 5);
					if (this._commentHoverHelp) {
						this._commentsFieldHoverHelp.removeChild(this._commentHoverHelp.domNode);
						this._commentHoverHelp.destroyRecursive();
					}
					if (this.isReviewStep()) {
						this._commentHoverHelp = new HoverHelp({
							message: this._messages.process_review_step_comments_hover_help
						});
					} else {
						this._commentHoverHelp = new HoverHelp({
							message: this._messages.process_rework_step_comments_hover_help
						});
					}
					this._commentHoverHelp.startup();
					this._commentsFieldHoverHelp.appendChild(this._commentHoverHelp.domNode);
					this._commentTextField.setHoverHelp(this._commentHoverHelp);
					this._commentTextField.tooltipPosition = [
						"above",
						"below"
					];
					this._commentsTextBox.appendChild(this._commentTextField.domNode);
					this.connect(this._commentTextField, "onKeyUp", "onChange");
					break;
				}
			}
			this.logExit("_createSinglePropertyEditorControls");
		},

		/**
		 * Sets the work item for the properties display.
		 * 
		 * @param item
		 *            A {@link ecm.model.WorkItem} object.
		 */
		setItem: function(item) {
			this.logEntry("setItem");
			this._workItem = item;
			this._retrieveAttributes();
			this.logExit("setItem");
		},

		_retrieveAttributes: function() {
			this.logEntry("_retrieveAttributes");
			var workClass = this._workItem.getWorkClass();
			workClass.retrieveAttributeDefinitions(lang.hitch(this, function(attributes) {
				this._attributeDefinitions = attributes;
				this._setStepType();
				domStyle.set(this._commentsContainer.domNode, "display", "none"); // Hides comment field
				if (this.isReviewStep()) {
					this._renderProperties();
					domStyle.set(this._gridContainer.domNode, "display", "none"); // Hides grid 					
				} else {
					domStyle.set(this._gridContainer.domNode, "display", "block"); // Shows grid
					var handle = this.connect(this._historyGrid, "onCompleteRendering", function() {
						this.disconnect(handle);
						this._renderProperties();
					});
					if (this.isReworkStep()) {
						dojo.replaceClass(this._gridContainer.domNode, "ecmRejectionGridPane", "ecmSummaryGridPane");
						domStyle.set(this._historyGridLabel, "display", "block"); // Shows grid label
						if (!this._labelSpan) {
							this._labelSpan = domConstruct.create("span");
							this._labelSpan.appendChild(document.createTextNode(this._messages.process_rejection_reason));
							this._historyGridLabel.appendChild(this._labelSpan);
						}
						this._historyGrid.showLatestHistoryEntryOnly = true;
					} else {
						domStyle.set(this._historyGridLabel, "display", "none"); // Hides grid label
						dojo.replaceClass(this._gridContainer.domNode, "ecmSummaryGridPane", "ecmRejectionGridPane");
						this._historyGrid.showLatestHistoryEntryOnly = false;
					}
					this._historyGrid.setItem(this._workItem);
					this._historyGrid.render();
				}
			}));

			this.logExit("_retrieveAttributes");
		},

		_setStepType: function() {
			if (this._workItem.attributes.ICN_Instructions != undefined) {
				this._stepType = "Review";
			} else {
				for (i in this._attributeDefinitions) {
					var attribute = this._attributeDefinitions[i];
					if (attribute.id == "References") {
						if (attribute.readOnly) {
							this._stepType = "FinalNotification";
						} else {
							this._stepType = "Rework";
						}
						break;
					}
				}
			}
		},

		_renderProperties: function() {
			this.logEntry("_renderProperties");
			if (!this.isFinalNotifcationStep()) {
				domStyle.set(this._commentsContainer.domNode, "display", "block"); // Shows comment field
				this._createSinglePropertyEditorControls();
				// Sets the focus to the comment field
				setTimeout(lang.hitch(this, function() {
					this.setFieldFocus("F_Comment");
				}), 100);
			}
			this.resize();
			this.onCompleteRendering();
			this.logExit("_renderProperties");
		},

		/**
		 * Returns true if displaying the Review step.
		 */
		isReviewStep: function() {
			return this._stepType ? this._stepType == "Review" : false;
		},

		/**
		 * Returns true if displaying the Rework step.
		 */
		isReworkStep: function() {
			return this._stepType ? this._stepType == "Rework" : false;
		},

		/**
		 * Returns true if displaying the Final Notification step.
		 */
		isFinalNotifcationStep: function() {
			return this._stepType ? this._stepType == "FinalNotification" : false;
		},

		/**
		 * Returns a boolean value true indicating whether there are property fields to display.
		 * 
		 * @returns {Boolean} true if there are property fields to display, false otherwise.
		 */
		hasDisplayedFields: function() {
			return true;
		},

		resize: function() {
			this.inherited(arguments);
			this._gridContainer.resize();
		},

		destroy: function() {
			if (this._commentTextField) {
				this._commentsTextBox.removeChild(this._commentTextField.domNode);
				this._commentTextField.setHoverHelp(null);
				this._commentTextField.destroyRecursive();
				this._commentTextField = null;
			}
			if (this._commentHoverHelp) {
				this._commentsFieldHoverHelp.removeChild(this._commentHoverHelp.domNode);
				this._commentHoverHelp.destroyRecursive();
				this._commentHoverHelp = null;
			}
			if (this._labelSpan) {
				this._historyGridLabel.removeChild(this._labelSpan);
				domConstruct.destroy(this._labelSpan);
				this._labelSpan = null;
			}

			this._workItem = null;
			this._attributeDefinitions = null;
			this.inherited(arguments);
		}
	});
});
