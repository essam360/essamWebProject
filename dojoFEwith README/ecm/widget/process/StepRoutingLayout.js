/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array",
	"dojo/_base/config",
	"dojo/_base/sniff",
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
	"ecm/LoggerMixin",
	"ecm/Messages",
	"ecm/model/Message",
	"./ProcessorLayout",
	"./_ProcessorMixin",
	"./WorkItemPropertiesPane",
	"./WorkItemAttachmentsPane",
	"./ProcessorButtonBar",
	"./ProcessorActionButtonBar",
	"../dialog/ErrorDialog",
	"ecm/widget/dialog/MessageDialog",
	"ecm/model/WorkItem",
	"ecm/model/WorkItemProcessor",
	"ecm/widget/dialog/SuspendWorkItemsDialog",
	"dojo/text!./templates/StepRoutingLayout.html"
],

function(declare, lang, array, config, has, aspect, domStyle, domClass, construct, _Widget, _TemplatedMixin, _WidgetsInTemplateMixin, SimpleTextarea, ContentPane, TabContainer, idxHtml, LoggerMixin, Messages, Message, ProcessorLayout, _ProcessorMixin, WorkItemPropertiesPane, WorkItemAttachmentsPane, ProcessorButtonBar, ProcessorActionButtonBar, ErrorDialog, MessageDialog, WorkItem, WorkItemProcessor, SuspendWorkItemsDialog, template) {

	/**
	 * @name ecm.widget.process.StepRoutingLayout
	 * @class Provides a widget that is used to display the Content Manager Step Processor
	 * @augments ecm.widget.process.ProcessorLayout, ecm.widget.process._ProcessorMixin
	 * @since 2.0.2
	 */
	return declare("ecm.widget.process.StepRoutingLayout", [
		_Widget,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		ProcessorLayout,
		_ProcessorMixin,
		LoggerMixin
	], {
		/** @lends ecm.widget.process.StepRoutingLayout.prototype */

		widgetsInTemplate: true,
		contentString: template,
		textDir: has("text-direction"),

		postCreate: function() {
			this.logEntry("postCreate");
			this.inherited(arguments);

			//event for the workItemPropertiesPane
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

			if (this._checkHost()) {
				var isGetNextEnabled = this._getRequestParam("isGetNextEnabled");
				this.processorButtonBar.showGetNextCheckBox(isGetNextEnabled == "true");
			}
			this.processorButtonBar.showSaveButton();
			this.saveButton = this.processorButtonBar.saveButton;
			// Set up an error dialog for showing error message of custom action url checking
			this._errorDialog = new ecm.widget.dialog.ErrorDialog();
			this.logExit("postCreate");
		},

		/**
		 * Updates the widgets with the current work item property information for rendering.
		 */
		updateView: function() {
			this.logEntry("updateView");

			//check to see if not show property tab under some condition
			if (this._workItem.can_showproperty == true) {
				//set the items to the workItemPropertiesPane
				this.workItemPropertiesPane.setItem(this._workItem);
				this.workItemAttachmentsPane.setItem(this._workItem);
				//select the children item automatically when the attachments tab is opened
				var attachmentHandler = aspect.after(this.attachmentsContainer, "onShow", lang.hitch(this, function(item) {
					this.workItemAttachmentsPane.selectAttachmentItem(this._workItem.resultSet.items[0]);
					attachmentHandler.remove(); //Disconnects the connection.  Only do this on first show.
				}), true);
			} else {
				if (this.viewTabContainer.getIndexOfChild(this.propertiesContainer) != -1) {
					this.viewTabContainer.removeChild(this.propertiesContainer);
					var def = new dojo.Deferred();
					def.then(lang.hitch(this, function(item) {
						this.workItemAttachmentsPane._attachmentContents.openItem(item);
					}));
					this._workItem.defobj = def;
					this.workItemAttachmentsPane.setItem(this._workItem);
				}
			}

			var name = "";
			// Get the item name from the workItem if it has been set the name would be changed when
			// the step processor goes to next item when "Get next item" is checked.
			if (this._workItem.itemName != undefined) {
				name = this._workItem.itemName; // Already decoded
			} else {
				name = decodeURI(this._getRequestParam("name"));
			}
			this.workItemText.innerHTML = has("dojo-bidi") ? this.enforceTextDirWithUcc(null, idxHtml.escapeHTML(name)) : idxHtml.escapeHTML(name);

			this.processNameLabel.innerHTML = this._workItem.workClass.attributeDefinitionsById["process_name"].name + ":";
			this.processName.innerHTML = has("dojo-bidi") ? this.enforceTextDirWithUcc(null, idxHtml.escapeHTML(this._workItem.getValue("process_name"))) : idxHtml.escapeHTML(this._workItem.getValue("process_name"));

			this.stepNameLabel.innerHTML = this._workItem.workClass.attributeDefinitionsById["processStep"].name + ":";
			this.stepName.innerHTML = has("dojo-bidi") ? this.enforceTextDirWithUcc(null, idxHtml.escapeHTML(this._workItem.getValue("processStep"))) : idxHtml.escapeHTML(this._workItem.getValue("processStep"));

			this.statusLabel.innerHTML = this._workItem.workClass.attributeDefinitionsById["processSuspendState"].name + ":";
			this.status.innerHTML = idxHtml.escapeHTML(this._workItem.getValue("processSuspendState"));

			this.notifyDateLabel.innerHTML = this._workItem.workClass.attributeDefinitionsById["processNotifyDate"].name + ":";
			this.notifyDate.innerHTML = this._workItem.getDisplayValue("processNotifyDate");

			this.lastMovedByLabel.innerHTML = this._workItem.workClass.attributeDefinitionsById["processLastMovedBy"].name + ":";
			this.lastMovedBy.innerHTML = has("dojo-bidi") ? this.enforceTextDirWithUcc(null, this._workItem.getValue("processLastMovedBy")) : this._workItem.getValue("processLastMovedBy");

			this.lastMovedDateLabel.innerHTML = this._workItem.workClass.attributeDefinitionsById["processLastMovedDate"].name + ":";
			this.lastMovedDate.innerHTML = this._workItem.getDisplayValue("processLastMovedDate");

			this.resumeDateLabel.innerHTML = this._workItem.workClass.attributeDefinitionsById["processResumeDate"].name + ":";
			this.resumeDate.innerHTML = this._workItem.getDisplayValue("processResumeDate");

			this.processorButtonBar.removeAll();

			//add standard response like 'suspend or resume'
			var attributes = this._workItem.getWorkClass().attributeDefinitions;
			for ( var i in attributes) {
				if (attributes[i].id == "suspend" && attributes[i].hidden == false) {
					this._suspendButton = this.processorButtonBar._addButton(attributes[i].name, lang.hitch(this, this.onSuspend));
				}
				if (attributes[i].id == "resume" && attributes[i].hidden == false) {
					this._resumeButton = this.processorButtonBar._addButton(attributes[i].name, lang.hitch(this, this.onResume));
				}
			}

			if (this._workItem.customactionAttr.length > 0) {
				this.processorActionButtonBar.removeAll();
				this.processorActionButtonBar.createActionButtons(this._workItem.customactionAttr, lang.hitch(this, this.onCustomAction), this._workItem, this);
				//reset the top attribute to contain the created button
				this.stepContentPane.domNode.style.top = this.stepContentPane.domNode.offsetTop + 30 + "px";
				this.stepContentPane.domNode.style.height = this.stepContentPane.domNode.offsetHeight - 45 + "px";
			}

			// Create the response buttons and drop down list if necessary
			var attributes = this._workItem.getWorkClass().attributeDefinitions;
			for ( var i in attributes) {
				if (attributes[i].id == "F_Responses" && attributes[i].allowedValues) {
					var responses = attributes[i].allowedValues;
					if (responses) {
						this.processorButtonBar.addSeparator(false);
						this._responseButtons = this.processorButtonBar.createResponseButtons(responses, lang.hitch(this, this.onResponse));
					}
					break;
				}
			}

			//disable the response state if the item is on suspend state
			if (this._workItem.attributes.suspend != undefined && this._workItem.attributes.suspend == "false") {
				if (this._responseButtons instanceof Array) {
					for (var i = 0; i < this._responseButtons.length; i++) {
						this._responseButtons[i].set("disabled", true);
					}
				} else if (this._responseButtons) {
					this._responseButtons.set("disabled", true);
				}
			}

			this._resizeIt();
			this.workItemPropertiesPane.resizeIt();
			this.logExit("updateView");
		},

		/**
		 * Creates a {@link ecm.model.WorkItem} object from the passed in parameter information.
		 * 
		 * @param repository
		 *            A {@link ecm.model.Repository} object.
		 */
		createWorkItem: function(repository) {
			this.logEntry("createWorkItem");
			var workpackageId = this._getRequestParam("workpackageId");
			var itemName = decodeURIComponent(this._getRequestParam("name"));
			var template = this._getRequestParam("template");
			if (workpackageId) {
				workpackageId = decodeURIComponent(workpackageId);
				this._loadWorkItem(repository, workpackageId, itemName, template);
			} else {
				this.logError("createWorkItem", "URL parameters for workpackageId is missing.");
			}

			this.logExit("createWorkItem");
		},

		_loadWorkItem: function(repository, workitemid, itemName, template, callback) {
			this.logEntry("_loadWorkItem");
			this._workItem = new ecm.model.WorkItem({
				id: workitemid,
				itemName: itemName,
				template: template,
				repository: repository
			});

			// Fix visibility problem with first tab contents after dojo 1.9 upgrade
			domClass.remove(this.propertiesContainer.domNode.parentNode, "dijitHidden");
			domClass.add(this.propertiesContainer.domNode.parentNode, "dijitVisible");

			this._workItem.retrieveStepParameters(lang.hitch(this, function(item) {
				this.updateView();
				if (callback) {
					callback();
				}
			}));
			this.logExit("_loadWorkItem");
		},

		/**
		 * Retrieve the eClient plugin URL setting (if it has been configured)
		 * 
		 * @param callback
		 *            A callback function that is called after the item information has been saved.
		 * @param actionUrl
		 *            A string holding the custom action Url configured on the workflow step
		 * @param actionName
		 *            A string holding the custom action label to be displayed
		 */
		retrieveECPluginURL: function(callback, actionUrl, actionName) {
			if (this._ecServerUrl == null && ecm.model.admin.appCfg) {
				ecm.model.admin.appCfg.getPluginObjects(lang.hitch(this, function(plugins) {
					for (var i = 0; i < plugins.length; i++) {
						if (plugins[i].id == "eClientPlugin") {
							this._ecServerUrl = plugins[i]._attributes.configuration;
							break;
						}
					}
					callback(this._ecServerUrl, actionUrl, actionName);
				}), {
					securityTopic: ecm.model.admin.appCfg.SECURITY_CATEGORY_PLUGINS
				});
			} else {
				if (this._ecServerUrl != null)
					callback(this._ecServerUrl, actionUrl, actionName);
				else
					callback(null, actionUrl, actionName);
			}
		},

		_onECPluginURLRetrieved: function(ecServerUrl, actionUrl, actionName) {
			if (ecServerUrl == null) {
				//Failed to retrieve ecPluginURL,try to access the URL on custom action
				if (actionUrl.indexOf("http") >= 0 || actionUrl.indexOf("https") >= 0) {
					var str = actionUrl.split("//");
					var actionHost = str[0] + "//" + str[1].substring(0, str[1].indexOf("/"));
					var localhost = window.location.protocol + "//" + window.location.host;
					//compare if the actionUrl matches the url of navigator
					if (localhost == actionHost) {
						this.addActionTab(actionUrl, actionName);
					} else {
						//error handling:can not support the url out of navigator
						this._errorDialog.showMessage(Message.createErrorMessage("customaction_loadurl_error", [
							actionName,
							actionUrl
						]));
					}
				} else {
					//not complete url without protocol and host name
					//get the context name from desktop cServiceUrl property instead of hard code "navigator"
					var localhost = window.location.protocol + "//" + window.location.host + ecm.model.desktop._cServicesUrl + "/";
					this.addActionTab(localhost + "/" + actionUrl, actionName);
				}
			} else {
				if (actionUrl.indexOf("http") >= 0 || actionUrl.indexOf("https") >= 0) {
					var str = actionUrl.split("//");
					var actionHost = str[0] + "//" + str[1].substring(0, str[1].indexOf("/"));
					var appname = str[1].split("/")[1];
					if (ecServerUrl.indexOf(actionHost + "/" + appname) >= 0) {
						this.addActionTab(actionUrl, actionName);
					} else {
						//error handling:can not support the url out of navigator
						this._errorDialog.showMessage(Message.createErrorMessage("customaction_loadurl_error", [
							actionName,
							actionUrl
						]));
					}
				} else {
					//not complete url without protocol and host name
					this.addActionTab(actionUrl, actionName);
				}
			}
		},

		/**
		 * Add the custom action as a Tab to the tab container in the step processor.
		 * 
		 * @param actionUrl
		 *            A string holding the custom action Url configured on the workflow step
		 * @param actionName
		 *            A string holding the custom action label to be displayed
		 */
		addActionTab: function(actionUrl, actionName) {
			if (actionUrl.indexOf("?") > 0) {
				actionUrl += "&workpackageId=" + encodeURIComponent(this._workItem.id);
			} else {
				actionUrl += "?workpackageId=" + encodeURIComponent(this._workItem.id);
			}
			var ele_iframe = "<iframe id='actioniframe' src='" + actionUrl + "' style='height:100%;width:100%;'></iframe>";
			if (this.actionTab != null) {
				this.viewTabContainer.removeChild(this.actionTab);
				this.actionTab.destroyRecursive();
			}
			this.actionTab = new ContentPane({
				title: actionName,
				content: ele_iframe
			});
			//avoid two scroll bar in vertical 
			this.actionTab.domNode.style.overflowY = "hidden";
			this.viewTabContainer.addChild(this.actionTab);
			this.viewTabContainer.selectChild(this.actionTab);
			this._resizeIt();
		},

		/**
		 * Add a new tab to tab container to display the url in an iframe or replacing the existing one
		 * 
		 * @param actionName
		 *            A string holding the custom action label to be displayed
		 */
		onCustomAction: function(actionName) {
			this.logEntry("onCustomAction");
			//find custom action opening url
			for (var i = 0; i < this._workItem.customactionAttr.length; i++) {
				if (this._workItem.customactionAttr[i].name == actionName) {
					var actionUrl = this._workItem.customactionAttr[i].value;
					if (this._ecServerUrl != undefined && this._ecServerUrl != null) {
						this._onECPluginURLRetrieved(this._ecServerUrl, actionUrl, actionName);
					} else {
						this.retrieveECPluginURL(lang.hitch(this, function(ecServerUrl, actionUrl, actionName) {
							this._onECPluginURLRetrieved(ecServerUrl, actionUrl, actionName);
						}), actionUrl, actionName);
					}
				}
			}
			this.logExit("onCustomAction");
		},

		/**
		 * Cancels the operation and unlocks the work item.
		 */
		onCancel: function() {
			this.logEntry("onCancel");

			if (this._closing) {
				return;
			}
			this._closing = true;

			this._workItem.unlockStep(false, lang.hitch(this, function(item) {
				this._cancelStepCompleted();
			}), false, lang.hitch(this, function() {
				this._closing = false;
			}), this._getBackgroundRequest());
			this.logExit("onCancel");
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

				// Get the properties JSON from the common properties table, this JSON should be posted with save request.
				var properties = this.workItemPropertiesPane.getPropertiesJSON();
				// if there is a response add it in to the properties collection
				var response = this._workItem.getValue("F_Responses");
				if (response) {
					properties.push(this.getStringField("F_Responses", response, true));
				}

				//push special attribute for eds validation
				properties.push(this.getSystemField("processStep", this._workItem.step_name));

				// The complete step action will also unlock the content item
				this._workItem.completeStep(properties, null, lang.hitch(this, function(item, response) {
					if (response && response.error) {
						this._closing = false;
						// Not sure what this error would be
					} else if (response && response.fieldErrors) {
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
						if (callback) {
							this.logInfo("onOk_callback", "Completed successfully, calling callback function.");
							callback(item);
						} else {
							this._onOkCompleted(response);
						}
					}
				}), false, lang.hitch(this, function() {
					this._closing = false;
				}), this._getBackgroundRequest());
				this.logExit("onOk");
			}
		},

		/**
		 * Calls <code>onOk</code> event handler to save the processor information.
		 */
		onSave: function() {
			// Call into the WorkItem to save the step information (will not dispatch)
			this.logEntry("onSave");
			this.onOk(false);
			this.logExit("onSave");
		},

		/**
		 * Called when Suspend button is clicked and would try to suspend the current work item. param callback A
		 * callback function that is called after the item is suspended.
		 */
		onSuspend: function(callback) {
			this.logEntry("onSuspend");
			if (this.isValid(true, false, true)) {
				var items = [
					this._workItem
				];
				var repository = this._workItem.repository;
				if (this._suspendWorkItemsDialog) {
					this._suspendWorkItemsDialog.destroyRecursive();
				}
				this._suspendWorkItemsDialog = new SuspendWorkItemsDialog({
					items: items,
					repository: repository
				});
				//Refresh the workItem information in step processor after item has been suspended
				this._suspendWorkItemsDialog.show(lang.hitch(this, function() {
					this.onOk(false);
				}));
			}
			this.logExit("onSuspend");
		},

		/**
		 * Called when Resume button is clicked and would try to resume the current work item. param callback A callback
		 * function that is called after the item is resumed.
		 */
		onResume: function(callback) {
			this.logEntry("onResume");
			if (this.isValid(true, false, true)) {
				//construct parameters to invoke service
				var params = {
					repositoryId: this._workItem.repository.id,
					workItemId0: this._workItem.id
				};
				ecm.model.Request.invokeService("resumeWorkflow", this._workItem.repository.type, params, lang.hitch(this, function(response) {
					this.onOk(false);
				}));
			}
			this.logExit("onResume");
		},

		_resizeIt: function() {
			this.mainBorderContainer.resize();
			this.stepContentPane.resize();
		},

		/**
		 * An event function that is called when the processor layout has completed rendering.
		 */
		onCompleteRendering: function() {

		},

		_getBackgroundRequest: function() {
			// Under IE8 the status dialog may keep the window from being released if the window is closed after the request completes.
			// If this is IE8 and the window doesn't stay open, execute the request in the background.
			return (has("ie") < 9 && !(window.opener && this._checkHost() && this.processorButtonBar.isGetNextEnabled()));
		},

		_loadNextWorkItem: function(response) {
			this.logEntry("_loadNextWorkItem");
			var currentItem = window.opener.ecm.widget.dialog.stepRoutingWindow.getCurrentItem(this._workItem);
			this._workItemProcessor = new WorkItemProcessor(currentItem);
			this._workItemProcessor.getNextItem(lang.hitch(this, function(item) {
				if (item) {
					this.viewTabContainer.selectChild(this.propertiesContainer);
					var repository = ecm.model.desktop.getRepository(item.repository.id); // Using repository from the step processor desktop
					this._loadWorkItem(repository, item.id, item.name, item.template, lang.hitch(this, function() {
						window.opener.ecm.widget.dialog.stepRoutingWindow.onStepProcessorNewItemLoaded(currentItem, item);
						// Don't refresh the worklist on a get next item until last item is processed
					}));
				} else {
					if (this._onHideNoMoreItemsMessageDialog) {
						this._onHideNoMoreItemsMessageDialog.remove();
						delete this._onHideNoMoreItemsMessageDialog;
					}
					if (this._messageDialog) {
						this._messageDialog.destroyRecursive();
					}
					this._messageDialog = new ecm.widget.dialog.MessageDialog({
						text: this._messages.process_no_more_items
					});
					this._onHideNoMoreItemsMessageDialog = aspect.after(this._messageDialog, "onHide", lang.hitch(this, function() {
						this._onStepActionCompleted(response);
					}), true);
					this._messageDialog.show();
				}
			}));

			this.logExit("_loadNextWorkItem");
		},

		_onOkCompleted: function(response) {
			this.logEntry("_onOkCompleted");
			if (window.opener && this._checkHost()) {
				if (this.processorButtonBar.isGetNextEnabled()) {
					this._closing = false;
					this._loadNextWorkItem(response); // Load next item				
				} else {
					this._onStepActionCompleted(); // All done
				}
			} else {
				this._onStepActionCompleted(); // All done
			}
			this.logExit("_onOkCompleted");
		},

		_onStepActionCompleted: function() {
			this.logEntry("_onStepActionCompleted");
			if (window.opener && this._checkHost()) {
				this._setStatusMessage(this._workItem);
				window.opener.ecm.widget.dialog.stepRoutingWindow.onStepProcessorWindowCompleted(this._workItem);
			} else {
				this._handleCloseMessage();
			}
			this._closeWindow();
			this.logExit("_onStepActionCompleted");
		},

		_cancelStepCompleted: function() {
			this.logEntry("_cancelStepCompleted");
			if (window.opener && this._checkHost()) {
				this._setStatusMessage(this._workItem);
				window.opener.ecm.widget.dialog.stepRoutingWindow.onStepProcessorWindowCancelled(this._workItem);
			} else {
				this._handleCloseMessage();
			}
			this._closeWindow();
			this.logExit("_cancelStepCompleted");
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
				return false;
			} else {
				return true;
			}
		},

		_onChangeProperties: function() {
			this.logEntry("_onChangeProperties");
			// Do not disable the buttons.
			// If there is an invalid value, focus will be directed to the invalid input when a button is clicked.
			// The response buttons are disabled by updateView() if the item is on suspend state
			this.isValid(false, false, false);
			this.logExit("_onChangeProperties");
		},

		destroy: function() {
			if (this._suspendWorkItemsDialog) {
				this._suspendWorkItemsDialog.destroyRecursive();
				this._suspendWorkItemsDialog = null;
			}
			if (this._onHideNoMoreItemsMessageDialog) {
				this._onHideNoMoreItemsMessageDialog.remove();
				delete this._onHideNoMoreItemsMessageDialog;
			}
			if (this._messageDialog) {
				this._messageDialog.destroyRecursive();
				this._messageDialog = null;
			}
			if (this._errorDialog) {
				this._errorDialog.destroyRecursive();
				this._errorDialog = null;
			}
			if (this.actionTab) {
				this.actionTab.destroyRecursive();
				this.actionTab = null;
			}
			this._workItem = null;
			this._workItemProcessor = null;
			this.inherited(arguments);
		}
	});
});
