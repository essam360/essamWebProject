/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/connect",
	"dojo/_base/event",
	"ecm/LoggerMixin",
	"ecm/MessagesMixin",
	"ecm/model/Desktop",
	"ecm/widget/DesktopPane",
	"ecm/widget/layout/BookmarkActionsHandler",
	"ecm/widget/dialog/ErrorDialog"
], //
function(declare, lang, connect, event, LoggerMixin, MessagesMixin, Desktop, DesktopPane, BookmarkActionsHandler, ErrorDialog) {

	/**
	 * @name ecm.widget.BookmarkPane
	 * @class Provides a widget that is provides a URL-addressable page that can display a bookmarked folder. The URL
	 *        for the page can be created from the <strong>View Link</strong> action or the <strong>Email as Link</strong>
	 *        action for a folder.
	 * @augments ecm.widget.DesktopPane
	 */
	return declare("ecm.widget.BookmarkPane", [
		DesktopPane,
		LoggerMixin,
		MessagesMixin
	], {
		/** @lends ecm.widget.BookmarkPane.prototype */

		_repoId: null,
		_docId: null,

		postMixInProperties: function() {
			this.logEntry("postMixInProperties");

			this.gutters = false;
			this._setValueFormatterLocale();

			var servicesUrl = Desktop.getRequestParam("servicesUrl");
			if (servicesUrl) {
				Desktop.setServicesUrl(servicesUrl);
			}

			// Email link parameters
			this._repoId = Desktop.getRequestParam("repositoryId");
			this._docId = Desktop.getRequestParam("docid");
			this._version = Desktop.getRequestParam("version");
			this._vsId = Desktop.getRequestParam("vsId");
			this.desktopId = Desktop.getRequestParam("desktop");

			this._reposSymbolicName = Desktop.getRequestParam("repositoryName");

			this.logExit("postMixInProperties");
		},

		postCreate: function() {
			this.logEntry("postCreate");

			// Disable F1 windows help - hover help has Ctrl F1 to show the hover help, but on windows, this also shows the windows help
			this.connect(document, "onhelp", function(evt) {
				event.stop(evt);
				return false;
			});

			// Setup an error dialog just in case there's problems loading the desktop
			this._errorDialog = new ErrorDialog();
			this._messageAddedHandler = connect.connect(Desktop, "onMessageAdded", this._errorDialog, "messageAddedHandler");

			// Set up warning dialog for desktop load warnings if configured.
			this.setShowWarnings(this._showWarnings);

			// Load the desktop, to get the information needed to complete the layout
			// Enable server desktop config caching to improve bookmark page performance.
			Desktop.loadDesktop(this.desktopId, lang.hitch(this, "desktopLoaded"), false, true);
			this.logExit("postCreate");
		},

		desktopLoaded: function() {
			connect.disconnect(this._messageAddedHandler);
			this._errorDialog.destroy();

			this.setShowWarnings(false);

			if (this.isEntireWindow) {
				document.title = Desktop.applicationName;
			}

			if (this._repoId) {
				var repository = Desktop.getRepository(this._repoId);
				if (repository)
					Desktop.setInitialRepository(repository);
			} else if (this._reposSymbolicName) {
				var repository = Desktop.getRepositoryByName(this._reposSymbolicName);
				if (repository)
					Desktop.setInitialRepository(repository);
			}

			Desktop.getBookmarkLayout(lang.hitch(this, function(layout) {
				this.domNode.appendChild(layout.domNode);
				layout.searchCriteriaJson = this.searchCriteriaJson;
				layout.itemPropertiesJson = this.itemPropertiesJson;
				layout.startup();
				if (layout.focus) {
					layout.focus();
				}
			}), {
				repository: repository
			});
		}
	});
});
