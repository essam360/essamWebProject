/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/connect",
	"dojo/_base/sniff",
	"dojo/dom-style",
	"dojo/dom-construct",
	"dojo/on",
	"dojo/parser",
	"idx/html",
	"dijit/_Widget",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/layout/BorderContainer",
	"dijit/layout/StackContainer",
	"ecm/LoggerMixin",
	"ecm/Messages",
	"ecm/model/Desktop",
	"../dialog/ErrorDialog",
	"../dialog/WarningDialog",
	"../dialog/StatusDialog",
	"../dialog/LoginDialog",
	"../LoginPane",
	"dojo/text!./templates/ProcessorLayout.html",
	"ecm/model/SessionTimer"
],

function(declare, lang, connect, has, domStyle, construct, on, parser, idxHtml, _Widget, _TemplatedMixin, _WidgetsInTemplateMixin, BorderContainer, StackContainer, LoggerMixin, Messages, Desktop, ErrorDialog, WarningDialog, StatusDialog, LoginDialog, LoginPane, template,Timer) {

	/**
	 * @name ecm.widget.process.ProcessorLayout
	 * @class Provides the basic layout for IBM FileNet P8 workflow processors.
	 * @augments ecm.widget.process.BaseLayout
	 */
	return declare("ecm.widget.process.ProcessorLayout", [
		_Widget,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		LoggerMixin
	], {
		/** @lends ecm.widget.process.ProcessorLayout.prototype */

		templateString: template,
		widgetsInTemplate: true,
		contentString: null,

		// 		Handle to the ecm.messages object.
		_messages: ecm.messages,

		_errorDialog: null,

		_statusDialog: null,

		_workItem: null,

		constructor: function() {
			this.logEntry("constructor");
			this.messages = ecm.messages;
			this.logExit("constructor");
		},

		/**
		 * Returns the work item for this layout.
		 * 
		 * @since 2.0.3
		 */
		getWorkItem: function() {
			return this._workItem;
		},

		/**
		 * Sets the {@link ecm.model.WorkItem} object for this layout.
		 * 
		 * @param workItem
		 *            The new work item for this layout.
		 * @since 2.0.3
		 */
		setWorkItem: function(workItem) {
			this._workItem = workItem;
		},

		/**
		 * Builds the rendering, using
		 * <code>contentString<code> as the HTML template for the content area of the dialog.
		 */
		buildRendering: function() {
			this.logEntry("buildRendering");
			this.inherited(arguments);

			//appending contentString to Dialog's containerNode
			if (this.contentString) {
				this.contentArea.innerHTML = this._stringRepl(this.contentString);
				var node = this.contentArea;

				// Recurse through the node, looking for, and attaching to, our
				// attachment points and events, which should be defined on the template node.
				this._attachTemplateNodes(node);

				if (this.widgetsInTemplate) {
					// Obtain all the widgets in the contentString
					parser.parse(node, {
						noStart: !this._earlyTemplatedStartup,
						template: true,
						inherited: {
							dir: this.dir,
							lang: this.lang,
							textDir: this.textDir
						},
						propsThis: this, // so data-dojo-props of widgets in the template can reference "this" to refer to me
						contextRequire: this.contextRequire,
						scope: "dojo" // even in multi-version mode templates use dojoType/data-dojo-type
					}).then(lang.hitch(this, function(widgets) {
						this._startupWidgets = widgets;

						// _WidgetBase::destroy() will destroy any supporting widgets under this.domNode.
						// If we wanted to, we could call this.own() on anything in this._startupWidgets that was moved outside
						// of this.domNode (like Dialog, which is moved to <body>).

						// Hook up attach points and events for nodes that were converted to widgets
						for (var i = 0; i < widgets.length; i++) {
							this._processTemplateNode(widgets[i], function(n, p) {
								// callback to get a property of a widget
								return n[p];
							}, function(widget, type, callback) {
								// callback to do data-dojo-attach-event to a widget
								if (type in widget) {
									// back-compat, remove for 2.0
									return widget.connect(widget, type, callback);
								} else {
									// 1.x may never hit this branch, but it's the default for 2.0
									return widget.on(type, callback, true);
								}
							});
						}

						// Cleanup flag set above, just in case
						if (this.containerNode && this.containerNode.stopParser) {
							delete this.containerNode.stopParser;
						}
					}));

				}
			}
			this.logExit("buildRendering");
		},

		_getRequestParam: function(name) {
			// summary:
			//	Retrieves the specified request parameter from the location.
			// parameters:
			//	name - Name of the parameter value to retrieve.
			return ecm.model.desktop.getRequestParam(name);
		},

		/**
		 * When this method is called, all variables inherited from super classes are 'mixed in'. Common operations for
		 * <code>postMixInProperties</code> include modifying or assigning values for widget property variables
		 * defined in the template HTML file.
		 */
		postMixInProperties: function() {
		},

		/**
		 * <code>postCreate()</code> is called after <code>buildRendering()</code>. This is useful to override when
		 * you need to access and/or manipulate DOM nodes included with your widget. DOM nodes and widgets with the
		 * <code>dojoAttachPoint</code> attribute specified can now be directly accessed as fields on "this". Common
		 * operations for <code>postCreate</code>: 1) Access and manipulate DOM nodes created in
		 * <code>buildRendering()</code> 2) Add new DOM nodes or widgets.
		 */
		postCreate: function() {
			this.logEntry("postCreate");
			if (window.opener && this._checkHost()) {
				this.mainStackContainer.selectChild(this.mainPane);

				var repoId = this._getRequestParam("repositoryId");
				var desktopId = this._getRequestParam("desktopId");
				this.logDebug("postCreate", "repoId: " + repoId + ", desktopId: " + desktopId);
				if (!ecm.model.desktop.desktopLoaded) {
					this.logDebug("postCreate", "Load desktop");
					if (desktopId) {
						this.logDebug("postCreate", "Load desktop by desktop id");
						ecm.model.desktop.loadDesktop(desktopId, null, false, true);
					} else {
						var isoRegion = this._getRequestParam("isoRegion");
						if (isoRegion != null && isoRegion != "") {
							this.logDebug("postCreate", "Load desktop by isoRegion id");
							this._getDesktopByIsoRegion(isoRegion, function(response) {
								repoId = response.configuration.defaultRepository;
								ecm.model.desktop.loadDesktop(response.configuration.id);
							});
						} else {
							this.logDebug("postCreate", "Load desktop - no desktop id");
							ecm.model.desktop.loadDesktop(null, null, false, true);
						}
					}

					// Hide the UI until the desktop is loaded, to avoid showing it before basic information is available
					this.connect(ecm.model.desktop, "onDesktopLoaded", function() {
						this.logEntry("onDesktopLoaded");
						if (repoId != null) {
							this.logDebug("onDesktopLoaded", "Desktop is now loaded so create work item");
							var repository = ecm.model.desktop.getRepository(decodeURIComponent(repoId));
							this.createWorkItem(repository);
						}
						this.logExit("onDesktopLoaded");
					});
				} else {
					this.logDebug("postCreate", "Desktop is already loaded so create work item");
					if (repoId != null) {
						var repository = ecm.model.desktop.getRepository(decodeURIComponent(repoId));
						this.createWorkItem(repository);
					}
				}

				// propagate new security token to parent window
				this.connect(ecm.model.Request, "onSecurityTokenChange", function(response) {
					if (this._canAccessOpener()) {
						window.opener.ecm.model.Request.getSecurityToken(response);
					}
				});
			} else {
				var repositoryId = null;
				// try to setup initial repository for URL addressable pages
				var isoRegion = this._getRequestParam("isoRegion");
				if (isoRegion != null && isoRegion != "") {
					this._getDesktopByIsoRegion(isoRegion, function(response) {
						repositoryId = response.configuration.defaultRepository;
						ecm.model.desktop.loadDesktop(response.configuration.id);
					});
				} else {
					// No isolated region on URL, check for desktop/repositorId Url parameters else just try to load default desktop
					this.logDebug("postCreate", "No isolated region and in new browser window.");
					repositoryId = decodeURIComponent(this._getRequestParam("repositoryId"));
					var desktopId = this._getRequestParam("desktopId");
					if (desktopId) {
						this.logDebug("postCreate", "repositoryId: " + repositoryId + ", desktopId: " + desktopId);
						ecm.model.desktop.loadDesktop(desktopId);
					} else {
						this.logDebug("postCreate", "Loading from default desktop.");
						ecm.model.desktop.loadDesktop();
					}
				}

				// Hide the UI until the desktop is loaded, to avoid showing it before basic information is available
				this.connect(ecm.model.desktop, "onDesktopLoaded", function() {
					this.logEntry("onDesktopLoaded");
					var repository = null;
					if (repositoryId != null) {
						repository = ecm.model.desktop.getRepository(repositoryId);
						if (repository) {
							ecm.model.desktop.setInitialRepository(repository);
						}
					}
					if (repository == null || (repository && !repository.connected)) {
						this.mainStackContainer.domNode.style.visibility = "visible";
						this.loginPane.focus();
						this._disconnectLoginButtonFromEnter();
						this._connectLoginButtonToEnter();
					}
					this.logExit("onDesktopLoaded");
				});

				// Handle connect and disconnect events to show login or main panes
				this.connect(ecm.model.desktop, "onLogin", function(repository) {
					this.logEntry("onLogin");
					repositoryId = this._getRequestParam("repositoryId");
					if (repositoryId != null) {
						repository = ecm.model.desktop.getRepository(decodeURIComponent(repositoryId));
					}
					if (repository != null) {
						this._disconnectLoginButtonFromEnter();
						this.mainStackContainer.selectChild(this.mainPane);
						this.createWorkItem(repository);
					} else {
						this.logDebug("onLogin", "Container login, no repository, skipping onLogin event handling.");
					}
					this.logExit("onLogin");
				});
			}
			// Set the common actions handler
			ecm.model.desktop.setActionsHandler(new ecm.widget.layout.CommonActionsHandler());

			// Set up an error dialog and start monitoring for errors early, so error dialog appears for configuration errors
			this._errorDialog = new ecm.widget.dialog.ErrorDialog();
			this._messageAddedHandler = connect.connect(ecm.model.desktop, "onMessageAdded", this._errorDialog, "messageAddedHandler");

			// Enable the automatic display of warning messages added to the desktop
			this._setShowWarnings(true);

			// Create and register the progress dialog
			this._statusDialog = new ecm.widget.dialog.StatusDialog();
			this._requestStartedHandler = connect.connect(ecm.model.desktop, "onRequestStarted", this._statusDialog, "requestStartedHandler");
			this._requestCompletedHandler = connect.connect(ecm.model.desktop, "onRequestCompleted", this._statusDialog, "requestCompletedHandler");

			// Get the login dialog and connect the session expired handler.
			this._loginDialog = ecm.widget.dialog.LoginDialog.getLoginDialog();
			this._sessionExpiredHandler = connect.connect(ecm.model.desktop, "onSessionExpired", this._loginDialog, "sessionExpiredHandler");
			// Session timer -->
			// No session timer if SSO is used.
			if (!window._sessionTimer && !ecm.model.desktop.isSsoTokenPresent()) {
				try {
					// The viewer window was reloaded.
					window._sessionTimer = window.parent.ecm.model.SessionTimer.getSessionTimer();
					//IE can not get timer by window.parent
					if(!window._sessionTimer.timer)
						window._sessionTimer = window.opener.ecm.model.SessionTimer._sessionTimer;
				} catch (e) {
				}
			} 	
			//set Timer.timer to not start Timer in desktop._desktopLoaded
			if(window._sessionTimer)
				Timer.timer = window._sessionTimer.timer;
			this._warningDialog = ecm.widget.dialog.SessionExpireWarningDialog.getSessionExpireWarningDialog();
			window.addEventListener('message',lang.hitch(this,function(event) {
				if(event.data.MessageId =="ecm.widget.dialog.SessionExpireWarningDialog.show"){
					ecm.model.desktop.sessionExpireWarningTime = event.data.WarningTime;
					this._warningDialog.show();
					}
				}));
			window.addEventListener('message',lang.hitch(this,function(event) {
				if(event.data=="ecm.widget.dialog.SessionExpireWarningDialog._onExtendSession"){
					this._warningDialog.hide();
				}
			}));	
			this._logoffHandler = connect.connect(this._warningDialog,"_onLogoff",window,function() {
				window.opener.postMessage("ecm.widget.dialog.SessionExpireWarningDialog._onLogoff", "*");
			});
			
			this._extendhandler = connect.connect(this._warningDialog,"_onExtendSession",window,function() {
				window.opener.postMessage("ecm.widget.dialog.SessionExpireWarningDialog._onExtendSession", "*");
			});
			// <-- Session timer
			var onBeforeUnloadHandler;
			var oldOnBeforeUnload;

			var onBeforeUnload = lang.hitch(this, function(event) {
				this.logEntry("onBeforeUnload");
				try {
					if (oldOnBeforeUnload) {
						var results = oldOnBeforeUnload(event);
						if (results) {
							return results;
						}
					}
					if (onBeforeUnloadHandler) {
						onBeforeUnloadHandler.remove();
						onBeforeUnloadHandler = null;
					}
					if (this._workItem != null) {
						// The WorkItem is not cleaned up yet
						var launchStep = this._workItem.workflowVersion;

						// This is executing within the window close processing, so execute the unlock synchronously.

						if (launchStep) {
							this._workItem.unlockStep(false, null, true, null, this._getBackgroundRequest());
						} else {
							this._workItem.unlockStep(true, null, true, null, this._getBackgroundRequest());
						}
						if (this._canAccessOpener() && this._checkHost()) { // Check opener.ecm since it could be opened from a non ICN window without ecm widgets like Process designer.
							window.opener.ecm.widget.dialog.stepProcessorWindow._removeStepWindow(this._workItem);
						}
						this._workItem = null;
						this.destroyRecursive();
					}
				} catch (e) {
				}
				this.logExit("onBeforeUnload");
			});
			if (has("chrome") || has("safari")) {
				onBeforeUnloadHandler = on(window, "beforeunload", onBeforeUnload);
			} else { // For IE and Firefox, we must directly override window.onbeforeunload
				oldOnBeforeUnload = window.onbeforeunload;
				window.onbeforeunload = onBeforeUnload;
			}

			this._setupSkipNavigation();

			this.logExit("postCreate");
		},

		_getDesktopByIsoRegion: function(isoRegion, callback) {
			this.logDebug("_getDesktopByIsoRegion", "Isolated region: " + isoRegion);
			var params = {
				id: "navigator",
				type: "desktops",
				sorted: "true",
				isoRegion: isoRegion,
				configuration: "ApplicationConfig",
				application: "navigator"
			};

			var request = ecm.model.Request.invokeService("getRegionDesktop", null, params, function(response) {
				callback(response);
			});

			this.logExit("_getDesktopByIsoRegion");
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
				}
				if (this._warningDialog) {
					this._warningDialog.destroyRecursive();
					delete this._warningDialog;
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

		_setupSkipNavigation: function() {
			this.skipNavigation = construct.create("DIV", {
				"class": "ecmSkipNavigation",
				"role": "region",
				"aria-label": this.messages.skipNavigation_label_menu,
				style: "display: none;"
			}, document.body, "first");
			this.viewTabContainer.domNode.setAttribute("tabIndex", -1);
			this.skipNavigationLink = construct.create("A", {
				innerHTML: this.messages.skipNavigation_label_main,
				href: "#" + this.viewTabContainer.id,
				title: this.messages.skipNavigation_title_main
			}, this.skipNavigation, "last");

			this._updateSkipNavigation();
			this.connect(this.mainStackContainer, "selectChild", lang.hitch(this, "_updateSkipNavigation"));
		},

		_updateSkipNavigation: function() {
			domStyle.set(this.skipNavigation, "display", this.mainPane.selected ? "inline" : "none");
		},

		_setWindowTitle: function() {
			var appName = ecm.model.desktop.applicationName;
			if (appName != null) {
				document.title = idxHtml.escapeHTML(appName + " " + ecm.messages.process_step_processor);
			} else {
				document.title = idxHtml.escapeHTML(ecm.messages.process_step_processor);
			}
		},

		/**
		 * Creates an {@link ecm.model.WorkItem} object from the passed in parameter information. This is an abstract
		 * method and must be overridden.
		 * 
		 * @param repository
		 *            A {@link ecm.model.Repository} object.
		 */
		createWorkItem: function(repository) {

		},

		_getBackgroundRequest: function() {
			// Under IE8 the status dialog may keep the window from being released if the window is closed after the request completes.
			return (has("ie") < 9);
		},

		/**
		 * Need to put the last Request message from the desktop queue back into the WorkItem so that it can be passed
		 * back to the opener window.
		 */
		_setStatusMessage: function(item) {
			var messages = ecm.model.desktop.messages;
			// Create a separate copy of the message.
			item.F_StatusMessage = "" + messages[messages.length - 1];
		},

		_handleCloseMessage: function() {
			if (navigator.appName.indexOf("Microsoft") == -1) {
				this.mainStackContainer.selectChild(this.closePane);
			}
		},

		_checkHost: function() {
			var sameHost = false;
			if (window.opener) {
				try {
					var openerHost = window.opener.location.href;
					sameHost = true;
				} catch (e) {
					this.logDebug("_checkHost", "Check host: " + e.message);
				}
			}
			return sameHost;
		},

		_closeWindow: function() {
			if (this._canAccessOpener() && this._checkHost()) { // Check opener.ecm since it could have been opened from a non ICN window without any ecm widgets like from a Process designer.
				window.opener.ecm.widget.dialog.stepProcessorWindow._removeStepWindow(this._workItem);
			}

			setTimeout(lang.hitch(this, function() {
				setTimeout(function() {
					window.close();
				}, 300);
				// Destroy only locally constructed items, otherwise the destroy recursive causes problems
				// with the Request status dialog indicator and can make it look like a desktop is bing re-loaded.
				this._destroyModules();
			}), 0);
		},

		_canAccessOpener: function() {
			try {
				return window.opener && window.opener.ecm;
			} catch (e) {
				this.logDebug("_canAccessOpener", "Not able to get the window ICN opener: " + e.message);
				return false;
			}
		},

		/**
		 * Delete any event handles and dialogs that have been created, plus set workItem to null. This does not call
		 * any inherited destroy functions.
		 * 
		 * @private
		 */
		_destroyModules: function() {
			if (this._messageAddedHandler) {
				connect.disconnect(this._messageAddedHandler);
				this._messageAddedHandler = null;
			}
			if (this._requestStartedHandler) {
				connect.disconnect(this._requestStartedHandler);
				this._requestStartedHandler = null;
			}
			if (this._requestCompletedHandler) {
				connect.disconnect(this._requestCompletedHandler);
				this._requestCompletedHandler = null;
			}
			if (this._sessionExpiredHandler) {
				connect.disconnect(this._sessionExpiredHandler);
				this._sessionExpiredHandler = null;
			}
			if (this._statusDialog) {
				this._statusDialog.destroyRecursive();
				this._statusDialog = null;
			}
			if (this._errorDialog) {
				this._errorDialog.destroyRecursive();
				this._errorDialog = null;
			}
			if (this.skipNavigationLink) {
				if (this.skipNavigation) {
					this.skipNavigation.removeChild(this.skipNavigationLink);
				}
				construct.destroy(this.skipNavigationLink);
				this.skipNavigationLink = null;
			}
			if (this.skipNavigation) {
				if (document.body) {
					document.body.removeChild(this.skipNavigation);
				}
				construct.destroy(this.skipNavigation);
				this.skipNavigation = null;
			}
			if (this._logoffHandler) {
				connect.disconnect(this._logoffHandler);
				this._logoffHandler = null;
			}
			if (this._extendhandler) {
				connect.disconnect(this._extendhandler);
				this._extendhandler = null;
			}
			this._setShowWarnings(false);
			this._disconnectLoginButtonFromEnter();
			// Do not destroy the login dialog, it's a singleton that will handle it's own cleanup.
			// Just release the reference.
			this._loginDialog = null;
			this._workItem = null;
		},

		destroyRecursive: function() {
			this._destroyModules();
			this.inherited(arguments);
		}
	});
});
