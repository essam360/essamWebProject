/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/event",
	"dojo/_base/connect",
	"dojo/_base/sniff",
	"dojo/aspect",
	"dijit/layout/ContentPane",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"ecm/MessagesMixin",
	"ecm/LoggerMixin",
	"ecm/model/Desktop",
	"../dialog/ErrorDialog",
	"../dialog/StatusDialog",
	"../dialog/LoginDialog",
	"../dialog/WarningDialog"
],

function(declare, //
lang, //
event, //
connect, //
has, //
aspect, //
ContentPane, //
_TemplatedMixin, //
_WidgetsInTemplateMixin, //
MessagesMixin, //
LoggerMixin, //
Desktop, //
ErrorDialog, //
StatusDialog, //
LoginDialog, //
WarningDialog) {

	/**
	 * @name ecm.widget.layout.BaseLayout
	 * @class Provides the base class from which all other layout widgets are derived. New layout widgets can extend
	 *        this BaseLayout widget to obtain base layout functionality. Base functionality includes:
	 *        <ol>
	 *        <li>Ability to enable demo and debug modes
	 *        <li>Processing and error dialog setup
	 *        <li>Login/Logout Handling
	 *        <li>Session timeout handling
	 *        </ol>
	 *        <p>
	 *        Layouts that extend the <code>ecm.widget.layout.BaseLayout</code> class must define a template. This
	 *        template must include an instance of the {@link ecm.widget.LoginPane} class and a main display panel
	 *        within a Dojo stack container. See the {@link ecm.widget.layout.MainLayout} class for an example.
	 *        </p>
	 * @augments dijit.layout._Widget, dijit._TemplatedMixin, dijit._WidgetsInTemplateMixin
	 */
	return declare("ecm.widget.layout.BaseLayout", [
		ContentPane,
		LoggerMixin,
		MessagesMixin,
		_TemplatedMixin,
		_WidgetsInTemplateMixin
	], {
		/** @lends ecm.widget.layout.BaseLayout.prototype */

		// _debug: Boolean
		// 		Flag determining is debug logging is enabled or not.
		_debug: false,

		// _demo: Boolean
		// 		Flag determining is demo mode is enabled or not. Demo mode uses
		//		local JSON files to demo the application instead of connecting to
		//		the ECM web services.
		_demo: false,

		_errorDialog: null,

		_statusDialog: null,

		_warningDialog: null,

		// _showWarnings: Boolean
		// 		Indicates whether to automatically display warning messages added to the desktop.
		_showWarnings: true,

		constructor: function() {
			this.logEntry("constructor");
			this._features = [];

			this.setDebugMode((Desktop.getRequestParam("debug") != null));
			this.setDemoMode((Desktop.getRequestParam("demo") != null));

			var servicesUrl = Desktop.getRequestParam("servicesUrl");
			if (servicesUrl) {
				Desktop.setServicesUrl(servicesUrl);
			}

			// Email link parameters
			var repoId = Desktop.getRequestParam("repositoryId");
			var templateName = Desktop.getRequestParam("template_name");
			var docId = Desktop.getRequestParam("docid");
			if (repoId && templateName && docId) {
				Desktop.emailLink = {
					repoId: repoId,
					templateName: templateName,
					docId: docId
				};
			}
			this.logExit("constructor");
		},

		/**
		 * Sets debug level according to the supplied value.
		 * 
		 * @param val
		 *            Boolean value indicating whether debug mode is enabled or disabled.
		 */
		setDebugMode: function(val) {
			this.logEntry("setDebugMode", val);
			this._debug = val;
			this.logExit("setDebugMode");
		},

		/**
		 * Creates the error dialog used to render error messages in this layout
		 */
		createErrorDialog: function() {
			return new ErrorDialog();
		},

		/**
		 * Creates the dialog used to render warning messages in this layout.
		 * 
		 * @since 2.0.3.3
		 */
		createWarningDialog: function() {
			return new WarningDialog();
		},

		/**
		 * Sets demo mode according to the supplied value.
		 * 
		 * @param val
		 *            Boolean value indicating whether demo mode is enabled or disabled.
		 */
		setDemoMode: function(val) {
			this.logEntry("setDemoMode", val);
			this._demo = val;

			if (this._demo) {
				this.logDebug("setDemoMode", "Enabled demo mode. Setting services URL to null.");
				Desktop.setServicesUrl(null);
			}
			this.logExit("setDemoMode");
		},

		/**
		 * Enables the automatic display of warning messages added to the desktop.
		 * 
		 * @param showWarnings
		 *            Indicates whether to automatically display warning messages added to the desktop
		 * @since 2.0.3.3
		 */
		setShowWarnings: function(showWarnings) {
			this._showWarnings = showWarnings;
			if (showWarnings) {
				if (!this._warningMessageAddedHandler) {
					if (!this._warningDialog)
						this._warningDialog = this.createWarningDialog();
					this._warningMessageAddedHandler = connect.connect(Desktop, "onMessageAdded", this._warningDialog, "messageAddedHandler");
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

		postCreate: function() {
			this.logEntry("postCreate");

			this.inherited(arguments);

			var ID = this.id;

			// Set up an error dialog and start monitoring for errors early, so error dialog appears for configuration errors
			if (this.includeSkipNavigationLinks == undefined || this.includeSkipNavigationLinks == true) {
				this._errorDialog = this.createErrorDialog();
				this._messageAddedHandler = connect.connect(Desktop, "onMessageAdded", this._errorDialog, "messageAddedHandler");
			}

			this.setShowWarnings(this._showWarnings);
			this._loginButtonKeyHandler = null;

			// Create and register the progress dialog
			this._statusDialog = new StatusDialog();
			this._requestStartedHandler = connect.connect(Desktop, "onRequestStarted", this._statusDialog, "requestStartedHandler");
			this._requestCompletedHandler = connect.connect(Desktop, "onRequestCompleted", this._statusDialog, "requestCompletedHandler");
			this.own(aspect.after(Desktop, "_onRequestOverrideStatusDialogRefocus", lang.hitch(this, function(refocus) {
				this._statusDialog._overrideRefocusHandler(refocus);
			}), true));
			this.own(aspect.after(Desktop, "_onRequestRevertStatusDialogRefocus", lang.hitch(this, function() {
				this._statusDialog._revertRefocusHandler();
			})));

			// Create and register the (re)login dialog
			this._loginDialog = LoginDialog.getLoginDialog();
			this._sessionExpiredHandler = connect.connect(Desktop, "onSessionExpired", this._loginDialog, "sessionExpiredHandler");

			this._disconnectLoginButtonFromEnter();
			this._connectLoginButtonToEnter();

			// Handle connect and disconnect events to show login or main panes
			this._onLoginHandler = connect.connect(Desktop, "onLogin", this, "_onLogin");

			// Handle drag & drop from outside the application

			// Safari on Windows may not immediately update the drag icon 
			// after the drop effect is changed from "none" to something else.
			// To help with this problem, show the drag icon as "copy" instead
			// of "none" so that the icon does not remain "none" over valid
			// drop targets. Nothing will be done with the drop.
			//
			// IE displays the "move" icon regardles of the dropEffect value.  
			var dropEffect = has("safari") ? "copy" : "none";

			var noDropCallbackSetDropEffect = function(evt) {
				evt.dataTransfer.dropEffect = dropEffect;
				event.stop(evt);
				return false;
			};

			var noDropCallback = function(evt) {
				event.stop(evt);
				return false;
			};

			this.connect(this.domNode, "dragenter", noDropCallbackSetDropEffect);
			this.connect(this.domNode, "dragover", noDropCallbackSetDropEffect);
			this.connect(this.domNode, "drop", noDropCallback);
			this.connect(this.domNode, "dragleave", noDropCallback);
			this.connect(this.domNode, "dragexit", noDropCallback);

			// If already logged in do not show the login panel
			if (ecm.model.desktop.connected) {
				this._onLogin();
			}

			// Register a CSS loaded listener to relayout when plugin CSS is loaded
			connect.connect(ecm.model.desktop, "onPluginCSSLoaded", this, function() {
				this.resize();
			});

			this.logExit("postCreate");
		},

		destroy: function() {
			this.logEntry("destroy");
			if (this._messageAddedHandler) {
				connect.disconnect(this._messageAddedHandler);
			}	
			connect.disconnect(this._requestStartedHandler);
			connect.disconnect(this._requestCompletedHandler);
			connect.disconnect(this._sessionExpiredHandler);
			connect.disconnect(this._onLoginHandler);
			if (this._errorDialog) {
				this._errorDialog.destroyRecursive();
				this._errorDialog = null;
			}
			if (this._statusDialog) {
				this._statusDialog.destroyRecursive();
				this._statusDialog = null;
			}
			this.setShowWarnings(false);
			this.inherited(arguments);
			this.logExit("destroy");
		},

		/**
		 * Returns an array of identifiers of the features supported by this layout.
		 */
		getAvailableFeatures: function() {
			return [];
		},

		/**
		 * Sets the features to be displayed by this layout. Implemented by subclasses. The BaseLayout implementation
		 * does nothing.
		 * 
		 * @param features
		 *            an array of identifiers for the features supported by this layout.
		 * @param defaultFeature
		 *            the identifier of the feature to initially show
		 */
		setFeatures: function(features, defaultFeature) {
		},

		/**
		 * Handles the login action.
		 * 
		 * @param repository
		 *            Handle to the authenticating repository.
		 */
		_onLogin: function(repository) {
			this.logEntry("_onLogin");

			this._disconnectLoginButtonFromEnter();
			this.mainStackContainer.selectChild(this.mainPane);

			if (this.repDisconnectHandler) {
				connect.disconnect(this.repDisconnectHandler);
			}

			this.repDisconnectHandler = connect.connect(Desktop, "onLogout", lang.hitch(this, function() {
				this.logEntry("_onLogout");
				this.mainStackContainer.selectChild(this.loginPane);
				this.loginPane.focus();
				this._connectLoginButtonToEnter();
				this.logExit("_onLogout");
			}));

			this.logExit("_onLogin");
		},

		focus: function() {
			if (this.mainStackContainer.selectedChildWidget && this.mainStackContainer.selectedChildWidget.focus) {
				this.mainStackContainer.selectedChildWidget.focus();
			}
		},

		/**
		 * Allows the user to press the enter key to send a click event to the log in button.
		 */
		_connectLoginButtonToEnter: function() {
			if (this._loginButtonKeyHandler)
				return;

			this._loginButtonKeyHandler = connect.connect(this, "onKeyDown", this, function(event) {
				if (event.keyCode == 13)
					this.loginPane.loginButton._onClick(event);
			});
		},

		/**
		 * Disconnects the log in key event handler.
		 */
		_disconnectLoginButtonFromEnter: function() {
			if (this._loginButtonKeyHandler) {
				connect.disconnect(this._loginButtonKeyHandler);
				this._loginButtonKeyHandler = null;
			}
		}
	});
});
