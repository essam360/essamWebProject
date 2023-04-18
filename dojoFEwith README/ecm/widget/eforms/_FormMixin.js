/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/connect",
	"dojo/io-query",
	"ecm/LoggerMixin",
	"ecm/Messages",
	"ecm/model/Desktop"
], function(declare, connect, ioQuery, LoggerMixin, Messages, Desktop) {
	/**
	 * @name ecm.widget.process._FormMixin
	 * @class Provides a mixin that defines methods for working with eforms. This class loads desktop and bootstrap
	 *        eform plugins needed by Eform features.
	 * @public
	 */
	return declare("ecm.widget.eforms._FormMixin", [
		LoggerMixin
	], {
		/** @lends ecm.widget.eforms._FormMixin.prototype */

		_messages: ecm.messages,

		/**
		 * Load the desktop to bootstrap the required eform plugins.
		 * 
		 * @param onDeskTopLoadedCallback
		 *            Callback event connected to the onDesktopLoaded event.
		 */
		_loadDesktop: function(onDeskTopLoadedCallback) {
			this.logEntry("_loadDesktop");
			var repoId = Desktop.getRequestParam("repositoryId");
			var desktopId = Desktop.getRequestParam("desktopId");
			if (desktopId) {
				Desktop.loadDesktop(desktopId);
			} else {
				Desktop.loadDesktop();
			}

			if (onDeskTopLoadedCallback) {
				connect.connect(Desktop, "onDesktopLoaded", this, function() {
					this.logEntry("_onDesktopLoaded");
					onDeskTopLoadedCallback();
					this.logExit("_onDesktopLoaded");
				});
			}
			this.logExit("_loadDesktop");
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
		}
	});
});
