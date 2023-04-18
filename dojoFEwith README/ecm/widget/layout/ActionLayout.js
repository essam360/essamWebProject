/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/connect",
	"dojo/_base/json",
	"dojo/aspect",
	"dojo/dom-style",
	"dojo/dom-class",
	"dojo/io-query",
	"dijit/_Widget",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"../../LoggerMixin",
	"../../Messages",
	"ecm/model/Message",
	"ecm/widget/dialog/WarningDialog",
	"ecm/widget/dialog/ConfirmationDialog",
	"dojo/text!./templates/ActionLayout.html"
], //

function(declare, lang, connect, dojojson, aspect, domStyle, domClass, ioQuery, _Widget, _TemplatedMixin, _WidgetsInTemplateMixin, LoggerMixin, Messages, Message, WarningDialog, ConfirmationDialog, template) {

	/**
	 * @name ecm.widget.layout.ActionLayout
	 * @class Provides a layout that is used to launch ICN Actions
	 * @augments _Widget
	 */
	return declare("ecm.widget.layout.ActionLayout", [
		_Widget,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		LoggerMixin
	], {
		/** @lends ecm.widget.layout.ActionLayout.prototype */

		widgetsInTemplate: true,
		templateString: template,

		_messages: ecm.messages,
		_errorDialog: null,
		_statusDialog: null,
		_requestStartedHandler: null,
		_requestCompletedHandler: null,
		_loginDialog: null,
		_sessionExpiredHandler: null,
		_loginButtonKeyHandler: null,
		_errorDialogOnHideHandler: null,

		_actionJson: null,
		_desktop: null,
		_repository: null,

		postCreate: function() {
			this.logEntry("postCreate");
			this.inherited(arguments);

			// Change to menu string for action.
			document.title = this._messages.launch_action_window_title;

			// Set up an error dialog and start monitoring for errors early, so error dialog appears for configuration errors.
			// Wire up the close button on the dialog so it also closes the window and size so it fills the window.
			this._errorDialog = new ecm.widget.dialog.ErrorDialog();
			this._errorDialog.setResizable(false);
			domStyle.set(this._errorDialog.domNode, "height", "100%");
			domStyle.set(this._errorDialog.domNode, "width", "100%");
			this._messageAddedHandler = connect.connect(ecm.model.desktop, "onMessageAdded", this._errorDialog, "messageAddedHandler");
			this._errorDialogOnHideHandler = aspect.after(this._errorDialog, "onHide", function() {
				if (this._closeBrowserDialog) {
					this._closeBrowserDialog.destroy();
				}

				// Try to close the browser window when in stand alone mode. This will work when the window is opened
				// from script and in some browsers when it is not.
				window.close();

				// If the window didn't close,
				// display a message to the user to close the browser window.
				setTimeout(lang.hitch(this, function() {
					this._closeBrowserDialog = new ConfirmationDialog({
						text: ecm.messages.close_browser_msg
					});
					domClass.add(this._closeBrowserDialog.cancelButton.domNode, "dijitHidden");
					domClass.add(this._closeBrowserDialog._addedButtons[0].domNode, "dijitHidden");
					domClass.add(this._closeBrowserDialog.titleBar, "dijitHidden");
					domClass.add(this._closeBrowserDialog.actionBar, "dijitHidden");
					domClass.add(this._closeBrowserDialog.domNode, "ecmCloseBrowserDialog");
					domClass.add(this._closeBrowserDialog.contentArea, "closeDialogContentNode");
					domClass.add(this._closeBrowserDialog.description, "closeDialogDescriptionNode");
					this._closeBrowserDialog.show();
				}), 600);
			});

			// Enable the automatic display of warning messages added to the desktop
			this._setShowWarnings(true);

			// Set the common actions handler
			ecm.model.desktop.setActionsHandler(new ecm.widget.layout.CommonActionsHandler());

			// Create and register the progress dialog
			this._statusDialog = new ecm.widget.dialog.StatusDialog();
			this._requestStartedHandler = connect.connect(ecm.model.desktop, "onRequestStarted", this._statusDialog, "requestStartedHandler");
			this._requestCompletedHandler = connect.connect(ecm.model.desktop, "onRequestCompleted", this._statusDialog, "requestCompletedHandler");

			// Get the login dialog and connect the session expired handler.
			this._loginDialog = ecm.widget.dialog.LoginDialog.getLoginDialog();
			this._sessionExpiredHandler = connect.connect(ecm.model.desktop, "onSessionExpired", this._loginDialog, "sessionExpiredHandler");

			if (this.actionJson != null && this.actionJson != "null") {
				try {
					this._actionJson = dojojson.fromJson(this.actionJson);
				} catch (ex) {
					this._errorDialog.showMessage(Message.createErrorMessage("launch_action_invalid_json_error"));
				}
			} else if (this.queryString != null) {
				// If no JSON data was passed in, try the query string.
				this._actionJson = ioQuery.queryToObject(dojo.doc.location.search.substr(dojo.doc.location.search[0] === "?" ? 1 : 0));
			}

			// Handle connect and disconnect events to show login or main panes
			this.connect(ecm.model.desktop, "onLogin", function(repository) {
				this.logEntry("onLogin");
				this._disconnectLoginButtonFromEnter();
				this.mainStackContainer.selectChild(this.mainPane);

				var foundRepository = true;
				if (this._actionJson.repositoryId != null) {
					var actionRepository = ecm.model.desktop.getRepository(this._actionJson.repositoryId);
					if (actionRepository) {
						this._repository = actionRepository;
					} else {
						this._errorDialog.showMessage(Message.createErrorMessage("launch_action_repository_not_found_error", [
							this._actionJson.repositoryId,
							this._desktop.name
						]));
						foundRepository = false;
					}
				} else {
					this._repository = repository;
				}
				if (foundRepository) {
					if (this._repository.connected) {
						this.getParameters();
					} else {
						this._loginDialog.connectToRepository(this._repository, lang.hitch(this, function() {
							this.getParameters();
						}))
					}
				}
				this.logExit("onLogin");
			});

			if (this._actionJson) {
				var desktopId = null;
				if (this._actionJson.desktopId) {
					this.logDebug("postCreate", "desktopId: " + this._actionJson.desktopId);
					desktopId = this._actionJson.desktopId;
				} else {
					this.logDebug("postCreate", "Loading from default desktop.");
				}
				ecm.model.desktop.loadDesktop(desktopId, lang.hitch(this, function(desktop) {
					this.logEntry("onDesktopLoaded");
					this._desktop = desktop;
					this.mainStackContainer.domNode.style.visibility = "visible";
					this.loginPane.focus();
					this._disconnectLoginButtonFromEnter();
					this._connectLoginButtonToEnter();
					this.logExit("onDesktopLoaded");
				}));
			}

			this.logExit("postCreate");
		},

		getParameters: function() {
			this.logEntry("getParameters");

			// Find action in desktop. Iterate through the actions in the menus already created in the desktop until we find
			// the one we're looking for.
			var actionId = this._actionJson.actionId.toUpperCase();
			var action = null
			for ( var i in ecm.model.desktop.actionLists) {
				var menuActionList = ecm.model.desktop.actionLists[i];
				action = this.getActionFromMenu(menuActionList, actionId);
				if (action != null) {
					break;
				}
			}

			if (action == null) {
				this.logDebug("getParameters", "Found invalid action.");
				this._errorDialog.showMessage(Message.createErrorMessage("launch_action_not_found_error", [
					this._actionJson.actionId,
					this._desktop.name
				]));
				return;
			}

			if (this._actionJson.documentIds) {
				// Check that the document ids have been sent in an array.
				// When using GET instead of POST, these may be a comma
				// separated list and need to be converted.
				if (!Array.isArray(this._actionJson.documentIds)) {
					this._actionJson.documentIds = this._actionJson.documentIds.split(",");
				}
				this._repository.retrieveMultiItem(this._actionJson.documentIds, lang.hitch(this, function(items) {
					this.launchAction(action, items);
				}));
			} else {
				this.launchAction(action, []);
			}

			this.logExit("getParameters");
		},

		getActionFromMenu: function(menuActionList, actionId) {
			this.logEntry("getActionFromMenu");

			var action = null;
			for (var i = 0; i < menuActionList.length; i++) {
				var menuAction = menuActionList[i];
				if (menuAction.id && menuAction.id.toUpperCase() == actionId) {
					action = menuAction
				} else if (menuAction.subActions) {
					action = this.getActionFromMenu(menuAction.subActions, actionId);
				}
				if (action != null) {
					break;
				}
			}
			this.logExit("getActionFromMenu");
			return action;
		},

		launchAction: function(action, items) {
			this.logEntry("launchAction");

			// Reset the error dialog so it doesn't take up the full window and won't close the window with it is closed when 
			// invoking the action.
			this._errorDialogOnHideHandler.remove();
			this._errorDialogOnHideHandler = null;
			domStyle.set(this._errorDialog.domNode, "height", "");
			domStyle.set(this._errorDialog.domNode, "width", "");

			/*
			 * TBD - Need to decide in the future whether to call action.isEnabled() here before calling action.performAction. If
			 * not enabled, we could display a message and not call action.performAction.
			 * 
			 * Share is the only action supported now, and this case is handled in the share dialog.
			 */
			action.performAction(this._repository, items, null, null, null, {
				standalone: true,
				warningDialog: this._warningDialog
			});

			this.logExit("launchAction");
		},

		/**
		 * @private Enables the automatic display of warning messages added to the desktop.
		 */
		_setShowWarnings: function(showWarnings) {
			if (showWarnings) {
				if (!this._warningMessageAddedHandler) {
					if (!this._warningDialog)
						this._warningDialog = new WarningDialog();
					this._warningMessageAddedHandler = connect.connect(ecm.model.desktop, "onMessageAdded", this._warningDialog, "messageAddedHandler");
				}
			} else {
				if (this._warningMessageAddedHandler) {
					connect.disconnect(this._warningMessageAddedHandler);
					delete this._warningMessageAddedHandler;
					this._warningMessageAddedHandler = null;
				}
				if (this._warningDialog) {
					this._warningDialog.destroyRecursive();
					delete this._warningDialog;
					this._warningDialog = null;
				}
			}
		},

		/**
		 * @private Allows the user to press the enter key to send a click event to the log in button.
		 */
		_connectLoginButtonToEnter: function() {
			if (this._loginButtonKeyHandler)
				return;

			this._loginButtonKeyHandler = this.connect(this, "onKeyDown", function(event) {
				if (event.keyCode == 13)
					this.loginPane.loginButton._onClick(event);
			});
		},

		/**
		 * @private Disconnects the log in key event handler.
		 */
		_disconnectLoginButtonFromEnter: function() {
			if (this._loginButtonKeyHandler) {
				this.disconnect(this._loginButtonKeyHandler);
				this._loginButtonKeyHandler = null;
			}
		},

		destroy: function() {
			if (this._errorDialogOnHideHandler) {
				this._errorDialogOnHideHandler.remove();
				delete this._errorDialogOnHideHandler;
			}
			if (this._messageAddedHandler) {
				connect.disconnect(this._messageAddedHandler);
				delete this._messageAddedHandler;
			}
			if (this._requestStartedHandler) {
				connect.disconnect(this._requestStartedHandler);
				delete this._requestStartedHandler;
			}
			if (this._requestCompletedHandler) {
				connect.disconnect(this._requestCompletedHandler);
				delete this._requestCompletedHandler;
			}
			if (this._sessionExpiredHandler) {
				connect.disconnect(this._sessionExpiredHandler);
				delete this._sessionExpiredHandler;
			}
			if (this._loginButtonKeyHandler) {
				connect.disconnect(this._loginButtonKeyHandler);
				delete this._loginButtonKeyHandler;
			}
			if (this._statusDialog) {
				this._statusDialog.destroyRecursive();
				delete this._statusDialog;
			}
			if (this._errorDialog) {
				this._errorDialog.destroyRecursive();
				delete this._errorDialog;
			}
			if (this._warningDialog) {
				this._warningDialog.destroyRecursive();
				delete this._warningDialog;
			}
			if (this._closeBrowserDialog) {
				this._closeBrowserDialog.destroyRecursive();
				delete this._closeBrowserDialog;
			}
			this._setShowWarnings(false);
		}

	});
});
