/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare", //
	"dojo/_base/lang", //
	"dojo/_base/connect", //
	"dojo/_base/event", //
	"dojo/cookie", //
	"dojo/dom", //
	"dojo/dom-style", //	
	"dijit/_Widget", //
	"dijit/layout/TabContainer", //
	"../LoggerMixin", //
	"../MessagesMixin", //
	"../model/Desktop", //
	"./dialog/ErrorDialog", //
	"./dialog/WarningDialog"
], //
function(declare, lang, connect, event, cookie, dom, domStyle, _Widget, TabContainer, LoggerMixin, MessagesMixin, Desktop, ErrorDialog, WarningDialog) {

	/**
	 * @name ecm.widget.DesktopPane
	 * @class Provides a widget that is used to display a desktop. Typically, this widget is embedded within the body
	 *        tag of the web page and uses the entire space of the page. This widget dynamically constructs the
	 *        appropriate layout for the desktop as defined by the <code>ecm.model.Desktop.getLayout</code> class.
	 * @augments dijit._Widget
	 */
	var DesktopPane = declare("ecm.widget.DesktopPane", [
		_Widget,
		LoggerMixin,
		MessagesMixin
	], {
		/** @lends ecm.widget.DesktopPane.prototype */

		isEntireWindow: true,
		/**
		 * The browser's locale.
		 */
		browserLocale: "",

		// _showWarnings: Boolean
		// 		Indicates whether to automatically display warning messages added to the desktop.
		_showWarnings: true,

		postMixInProperties: function() {
			this.logEntry("postMixInProperties");

			this.gutters = false;
			this._setValueFormatterLocale();

			// Process parameters from the URL if options weren't specified
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

			var view = Desktop.getRequestParam("view");
			if (view != null) {
				this.view = view;
				Desktop.view = this.view;
			}

			this.logExit("postMixInProperties");
		},

		postCreate: function() {
			this.logEntry("postCreate");

			// Disable F1 windows help - hover help has Ctrl F1 to show the hover help, but on windows, this also shows the windows help
			this.connect(document, "onhelp", function(evt) {
				event.stop(evt);
				return false;
			});

			// Connect an onBeforeUnload handler
			if (window && !window.onbeforeunload) {
				window.onbeforeunload = lang.hitch(this, "_handleOnBeforeUnload");
			}

			// Setup an error dialog just in case there's problems loading the desktop
			this._errorDialog = new ErrorDialog();
			this._messageAddedHandler = connect.connect(Desktop, "onMessageAdded", this._errorDialog, "messageAddedHandler");

			// Set up warning dialog for desktop load warnings if configured.
			this.setShowWarnings(this._showWarnings);

			if (!this.desktopId) {
				this.desktopId = Desktop.getRequestParam("desktop");
			}

			var useLastCacheParam = Desktop.getRequestParam("useLastCache");
			var useLastCache = useLastCache && (useLastCache == true || useLastCache == "true");
			Desktop.loadDesktop(this.desktopId, lang.hitch(this, "desktopLoaded"), null, useLastCache);

			Desktop._searchViaCeApi = Desktop.getRequestParam("searchViaCeApi");
			connect.connect(Desktop, "onDesktopLoaded", this, function() {
				var loadingAnimation = dom.byId("ECMWebUIloadingAnimation");
				if (loadingAnimation)
					domStyle.set(loadingAnimation, 'display', 'none');
			});
			this.logExit("postCreate");
		},

		/**
		 * Enables displaying warning messages that might occur when the desktop is loaded.
		 * 
		 * @param showWarnings
		 *            Indicates whether to display warning messages added to the desktop
		 * @since 2.0.3.5
		 */
		setShowWarnings: function(showWarnings) {
			this._showWarnings = showWarnings;
			if (showWarnings) {
				if (!this._warningMessageAddedHandler) {
					if (!this._warningDialog)
						this._warningDialog = new WarningDialog();
					this._warningMessageAddedHandler = connect.connect(Desktop, "onMessageAdded", this._warningDialog, "messageAddedHandler");
				}
			} else {
				if (this._warningMessageAddedHandler) {
					connect.disconnect(this._warningMessageAddedHandler);
					delete this._warningMessageAddedHandler;
				}
			}
		},

		desktopLoaded: function() {
			connect.disconnect(this._messageAddedHandler);
			// If there are load time error messages, like problems with a plug-in, destroying the error dialog 
			// here will hide the error message and scripting errors will appear in the console log. 
			// this._errorDialog.destroy();

			this.setShowWarnings(false);

			if (this.isEntireWindow) {
				document.title = Desktop.applicationName;
			}

			var layoutClass = Desktop.getRequestParam("layout");
			if (layoutClass) {
				try {
					require([
						layoutClass
					], lang.hitch(this, function(cls) {
						this._handleLayout(new cls({}));
					}));
				} catch (err) {
					//attempt to just construct class to be backwards compatible with R2
					var cls = lang.getObject(layoutClass);
					if (cls)
						this._handleLayout(new cls({}));
					else
						Desktop.getLayout(lang.hitch(this, "_handleLayout"));
				}
			} else {
				Desktop.getLayout(lang.hitch(this, "_handleLayout"));
			}
		},

		_handleOnBeforeUnload: function() {
			var message = null;
			var events = new Array();
			Desktop.onBeforeClose(events);
			if (events.length > 0) {
				message = "";
				for (var i = 0; i < events.length; i++) {
					message += "  " + events[i];
				}
			}

			// Don't return null here -- it causes a popup message to be displayed in IE asking the user
			// whether they want to leave the page.
			if (message != null) {
				return message;
			}
		},

		_setValueFormatterLocale: function() {
			var cookieLocale = cookie(ecm.model.Desktop.cookieLocaleValueFormat);
			var cookieLanguage = cookie(ecm.model.Desktop.cookieLocaleLanguage);
			if (!cookieLocale && !cookieLanguage) {
				// if no cookie locale && no cookie language, then no need to call setLocale.  ValueFormatter will use the dojo gregorian and number.
			} else if (cookieLocale && cookieLanguage && cookieLocale == cookieLanguage) {
				// if cookie for locale == cookie for language, then no need to call setLocale.  ValueFormatter will use the dojo gregorian and number. 
			} else if (!cookieLocale) {
				Desktop.valueFormatter.setLocale(this.browserLocale);
			} else {
				Desktop.valueFormatter.setLocale(cookieLocale);
			}
		},

		/**
		 * @private
		 */
		_handleLayout: function(layout) {
			this.layout = layout;
			if (this.layout.setFeatures)
				this.layout.setFeatures(Desktop.features, Desktop.defaultFeature, Desktop.defaultSecondaryPlugin);
			this.domNode.appendChild(this.layout.domNode);
			this.layout.startup();
			if (this.layout.focus) {
				this.layout.focus();
			}
		}
	});

	return DesktopPane;
});
