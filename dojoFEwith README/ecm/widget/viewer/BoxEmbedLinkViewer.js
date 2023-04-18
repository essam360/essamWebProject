/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/string",
	"ecm/model/Request",
	"ecm/widget/dialog/ConfirmationDialog",
	"ecm/widget/viewer/IframeDocViewer",
	"ecm/LoggerMixin",
	"ecm/MessagesMixin"
],
function(declare, lang, string, Request, ConfirmationDialog, IframeDocViewer, LoggerMixin, MessagesMixin) {

	/**
	 * @name ecm.widget.viewer.BoxEmbedLinkViewer
	 * @class Provides a viewer widget that displays items by embedding the Box viewer.
	 * @augments ecm.widget.viewer.IframeDocViewer
	 */
	var BoxEmbedLinkViewer = declare("ecm.widget.viewer.BoxEmbedLinkViewer", [
		IframeDocViewer,
		LoggerMixin,
		MessagesMixin
	], {
		/** @lends ecm.widget.viewer.BoxEmbedLinkViewer.prototype */
		_loadViaGetMethod: true,
		_loadedItemId: null,
		_linkTimestamp: 0,

		/**
		 * Displays an item by embedding the Box viewer.
		 */
		showItem: function() {
			var methodName = "showItem";
			this.logEntry(methodName);
			var itemKey = this._item.repository.id + ":" + this._item.id;
			if (this._loadedItemId == itemKey && this.isActive())
				return;
			this._loadedItemId = itemKey;

			var params = {
				docid: this._item.id,
				repositoryId: this._item.repository.id
			};
			Request.invokeService("getEmbedLink", this._item.repository.type, params, lang.hitch(this, function(response) {
				this._linkTimestamp = new Date().getTime();
				this.logDebug(methodName, "link timestamp: " + this._linkTimestamp);
				this._startReloadTimer();
				this._showItem(response.embedLink);
			}), null, null, lang.hitch(this, function() {
				this.logError(methodName, "failed to get Box embed link");
				setTimeout(lang.hitch(this, function() {
					this.onFallback();
				}, 1));
			}), false);
			this.logExit(methodName);
		},

		_showItem: function(link) {
			if (!link) {
				this.logDebug("_showItem", "no Box embed link");
				setTimeout(lang.hitch(this, function() {
					this.onFallback();
				}, 1));
				return;
			}

			this._src = link + "?showDownload=true";
			if (!this.preview)
				 this._src += "&showAnnotations=true";
			if (this._loadedSrc != this._src) {
				this._isLoading = true;
				this._loadSource(this._src);
			}
		},

		_startReloadTimer: function() {
			this._clearReloadTimer();
			var lifespan = this._getLinkLifespanInMilliseconds();
			this.logDebug("_startReloadTimer", "lifespan: " + lifespan);
			this._reloadTimer = setTimeout(lang.hitch(this, function() {
				this._reloadTimer = null;
				this._confirmReloading();
			}), lifespan);
		},

		_clearReloadTimer: function() {
			if (this._reloadTimer) {
				clearTimeout(this._reloadTimer);
				this.logDebug("_clearReloadTimer", "timer cleared");
			}
			this._reloadTimer = null;
			if (this._confirmDialog) {
				this._confirmDialog.hide();
				this.logDebug("_clearReloadTimer", "confirm dialog hidden");
			}
		},

		_confirmReloading: function() {
			if (!this._isViewerActive()) {
				this.logDebug("_confirmReloading", "no confirmation if not active");
				return;
			}

			if (!this._confirmDialog) {
				var self = this;
				this._confirmDialog = new ConfirmationDialog({
					text: string.substitute(self.messages.viewer_box_view_expiring, [
						60 - self._getLinkLifespanInMinutes()
					]),
					title: self.messages.confirmation_icon_tooltip,
					onExecute: function() {
						self._loadedItemId = null;
						self._linkTimestamp = 0;
						self.showItem();
					},
					onCancel: function() {
					}
				});
			}
			this._confirmDialog.show();
		},

		_isViewerActive: function() {
			return !this.contentViewerPane || this.contentViewerPane.contentViewerTab.selected;
		},

		isActive: function() {
			return !this._linkTimestamp || (new Date().getTime() - this._linkTimestamp) < this._getLinkLifespanInMilliseconds();
		},

		_getLinkLifespanInMilliseconds: function() {
			return this._getLinkLifespanInMinutes() * 60 * 1000;
		},

		_getLinkLifespanInMinutes: function() {
			var lifespan = 55;
			try {
				var value = window.opener && window.opener.ecm ? parseInt(window.opener.ecm.model.desktop.getRequestParam("boxEmbedLinkLifespan")) : NaN;
				if (value && !isNaN(value))
					lifespan = value > 1 ? value : 1;
			} catch (e) {
			}
			return lifespan;
		},

		closeItem: function() {
			this.inherited(arguments);
			this._linkTimestamp = 0;
			this._clearReloadTimer();
		},

		destroy: function() {
			if (this._confirmDialog) {
				this._confirmDialog.destroyRecursive();
				this._confirmDialog = null;
			}
			this.inherited(arguments);
		}
	});

	return BoxEmbedLinkViewer;
});
