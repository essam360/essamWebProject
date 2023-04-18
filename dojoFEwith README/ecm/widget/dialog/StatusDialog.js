/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/aspect",
	"dojo/sniff",
	"dojo/dom-class",
	"dojo/dom-style",
	"dijit/focus",
	"dijit/Dialog",
	"dijit/DialogUnderlay",
	"./BaseDialog",
	"dojo/text!./templates/StatusDialogContent.html"
], function(declare, lang, aspect, has, domClass, domStyle, focus, Dialog, DialogUnderlay, BaseDialog, template) {

	/**
	 * @name ecm.widget.dialog.StatusDialog
	 * @class Provides a dialog box that is used to display a status message during the processing of a request to the
	 *        server.
	 * @augments ecm.widget.dialog.BaseDialog
	 */
	return declare("ecm.widget.dialog.StatusDialog", [
		BaseDialog
	], {
		/** @lends ecm.widget.dialog.StatusDialog.prototype */

		contentString: template,
		widgetsInTemplate: true,

		/**
		 * The delay time in milliseconds before the status dialog will appear. By default this is 2000 milliseconds.
		 */
		delay: has("ecmMobile") ? 500 : 2000,

		/**
		 * The minimum duration that the dialog will appear in milliseconds. A minimum duration prevents the dialog from
		 * appearing and then disappearing so quickly that the user cannot have a chance to read it. The default time is
		 * 500 milliseconds.
		 */
		minDuration: 500,

		_zIndex: 1050,
		_showingCount: 0,
		_request: null,
		autofocus: true, // focus on the status dialog text so that JAWS can speak it
		refocus: true,
		fitContentArea: false, // For this status dialog, allow the content area to grow and display the full message.

		postCreate: function() {
			this.inherited(arguments);
			this._refocusBackup = this.refocus;
			domClass.add(this.domNode, "ecmStatusDialog minor");
			this.setTitle(this.messages.status_dialog_title);
			this.setWidth(150);

			// The "class" property provides a way to override the style settings for the underlay.
			// The suffix "_underlay" is appended to the end of each name in "class" and the resulting
			// "classname1_underlay", "classname2_underlay", ... class names are set on the underlay.
			//
			// main.css contains this entry to hide the underlay:
			//
			//    .ecmStatusDialog_underlay {
			//       opacity: .15 !important;
			//    }
			//
			this["class"] = "ecmStatusDialog";
			
			// Use our own underlay so that any dialog behind us can keep its underlay, which may have a different opacity than ours
			var t = this;
			var underlay = this._underlay = new DialogUnderlay();
			domClass.add(this._underlay.domNode, "ecmWait");
			domStyle.set(this._underlay.domNode, "zIndex", this._zIndex - 1);
			domStyle.set(this.domNode, "zIndex", t._zIndex);
			this.own(aspect.around(Dialog._DialogLevelManager, "show", function(originalFunction) {
				return function(dialog, underlayAttrs) {
					if (dialog == t) {
						// Save the current focus and add ourself to the dialog stack so that focus can be transferred as usual
						var ds = Dialog._dialogStack;
						var zIndex = ds[ds.length - 1].dialog ? ds[ds.length - 1].zIndex + 2 : Dialog._DialogLevelManager._beginZIndex;
						ds[ds.length - 1].focus = focus.curNode;
						ds.push({ dialog: dialog, underlayAttrs: underlayAttrs, zIndex: zIndex });
						
						underlay.set(underlayAttrs);
						if (!underlay.open)
							underlay.show();
					} else {
						originalFunction(dialog, underlayAttrs);
					}
				};
			}));
			this.own(aspect.before(Dialog._DialogLevelManager, "hide", function(dialog) {
				if (dialog == t)
					underlay.hide();
			}, true));
		},

		startup: function() {
			if (this.closeButtonNode) {
				domStyle.set(this.closeButtonNode, "display", "none");
				domStyle.set(this.titleBar, "display", "none");
				this._onKey = function() {
				};
				this.inherited("startup", arguments);
			}
		},

		/**
		 * This method is used to handle the start of a request. It is normally connected to
		 * ecm.model.Desktop.onRequestStarted event.
		 */
		requestStartedHandler: function(request) {
			this._request = request;
			if (!this._request.backgroundRequest) {
				this.contentNode.innerHTML = request.progressMessage;
				this.showActionBar(request.cancellable);
				if (request.cancellable === true) {
					this.cancelButton.set("label", this.cancelButtonLabel);
					domClass.replace(this.domNode, "ecmStatusDialogWithCancel", "ecmStatusDialog")
				} else {
					domClass.replace(this.domNode, "ecmStatusDialog", "ecmStatusDialogWithCancel")
				}
				if (this._showingCount <= 0) {
					domClass.add(document.body, "ecmWait");
					this._delayedShowTimeoutId = window.setTimeout(lang.hitch(this, this._delayedShow), request.delay || this.delay);
					this._showingCount = 1;
				} else {
					this._showingCount += 1;
				}
			}
		},

		/**
		 * This method is used to handle the completion of the request. It is normally connected to
		 * ecm.model.Desktop.onRequestCompleted event.
		 */
		requestCompletedHandler: function(request) {
			this._showingCount -= 1;
			if (!request.backgroundRequest) {
				if (this._showingCount <= 0) {
					// domStyle.set(document.body, "cursor", "auto");
					domClass.remove(document.body, "ecmWait");
					window.clearTimeout(this._delayedShowTimeoutId);
					this._request = null;
				}
			}
		},

		_overrideRefocusHandler: function(refocus) {
			this.refocus = refocus;
		},

		_revertRefocusHandler: function() {
			var refocus = (typeof this._refocusBackup === "undefined" || this._refocusBackup) ? true : false;
			setTimeout(lang.hitch(this, function() {
				this.refocus = refocus;
			}), 500);
		},

		_delayedShow: function() {
			if (this._showingCount > 0) {
				var t = this;
				ecm.model.desktop.onDisplayStatusDialog(this);
				this.show();
				setTimeout(lang.hitch(this, this._delayedHide), this.minDuration);

				// Make the status dialog and underlay appear in front of any open drop-down.
				if (this.domNode) {
					domStyle.set(this.domNode, "zIndex", t._zIndex);
				}
			}
		},

		_delayedHide: function() {
			if (this._showingCount <= 0) {
				domClass.remove(document.body, "ecmWait");
				this.hide();
			} else {
				setTimeout(lang.hitch(this, this._delayedHide), this.minDuration);
			}
		},

		/**
		 * This is triggered when the dialog is canceled.
		 */
		onCancel: function() {
			if (this._request) {
				this._request.cancel();
			}

			return false;
		},

		/**
		 * This is triggered when the dialog is hidden.
		 */
		onHide: function() {
			ecm.model.desktop.onHideStatusDialog(this);
		},
		
		destroy: function() {
			this.inherited(arguments);
			
			if (this._underlay) {
				this._underlay.destroy();
				delete this._underlay;
			}
		}

	});
});
