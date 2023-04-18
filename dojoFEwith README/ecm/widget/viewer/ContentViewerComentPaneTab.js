/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/aspect",
	"dojo/dom-style",
	"dojo/dom-class",
	"dojo/dom-geometry",
	"dojo/string",
	"dijit/_Widget",
	"dojox/html/entities",
	"idx/html",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/layout/ContentPane",
	"dijit/layout/BorderContainer",
	"dijit/layout/StackContainer",
	"dijit/layout/TabContainer",
	"dijit/form/Button",
	"ecm/model/_itemUtils",
	"ecm/model/ContentClass",
	"ecm/widget/CheckBox",
	"ecm/widget/HoverHelp",
	"ecm/LoggerMixin",
	"ecm/MessagesMixin",
	"ecm/widget/ItemNotelogsPane",
	"ecm/widget/viewer/model/ViewerItem",
	"ecm/widget/dialog/ConfirmationDialog",
	"ecm/widget/dialog/YesNoCancelDialog",
	"ecm/widget/dialog/StatusDialog",
	"ecm/widget/dialog/ErrorDialog",
	"ecm/widget/dialog/MessageDialog",
	"dojo/text!./templates/ContentViewerComentPaneTab.html"
],

function(declare, lang, aspect, domStyle, domClass, domGeometry, string, _Widget, entities, idxHtml, _TemplatedMixin, _WidgetsInTemplateMixin, ContentPane, BorderContainer, StackContainer, TabContainer, Button, itemUtils, ContentClass, CheckBox, HoverHelp, LoggerMixin, MessagesMixin, ItemNotelogsPane, ViewerItem, ConfirmationDialog, YesNoCancelDialog, StatusDialog, ErrorDialog, MessageDialog, template) {
	/**
	 * @private
	 * @name ecm.widget.viewer.ContentViewerCommentPaneTab
	 */
	return declare("ecm.widget.viewer.ContentViewerCommentPaneTab", [
		ContentPane,
		_Widget,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		LoggerMixin,
		MessagesMixin
	], {
		/** @lends ecm.widget.viewer.ContentViewerCommentPaneTab.prototype */
		widgetsInTemplate: true, // has child widgets that get instantiated from the html declaration

		templateString: template,
		_item: null,
		_contentViewer: null,

		postCreate: function() {
			this.inherited(arguments);
			this.own(aspect.after(this.itemNotelogsPane, "onRenderNotelogs", lang.hitch(this, function() {
				this.onLoaded();
			})));
			this.own(aspect.after(this.itemNotelogsPane, "onSave", lang.hitch(this, function() {
				// refresh the parent folder if the version policy is always create
				itemUtils.cmRefreshParentIfPartAlwaysVersions(this._item.origItem ? this._item.origItem : this._item, "ICMNOTELOG");
			})));
			this.own(aspect.after(this.itemCommentsPane, "onRenderComments", lang.hitch(this, function() {
				this.onLoaded();
			})));
			this.own(aspect.after(this.itemCommentsPane, "onEmptyComments", lang.hitch(this, function() {
				this.onLoaded();
			})));
		},

		/** @private */
		layout: function() {
			this.inherited(arguments);
			this._resizePane();
		},

		_resizePane: function() {
			if (!this._item)
				return;
			if (this._isItemFromCM()) {
				this.itemNotelogsPane.render();
			} else {
				this.itemCommentsPane.layout();
				this.itemCommentsPane.resize(this._getCommentsNodeDimention());
			}
		},

		resize: function() {
			this.inherited(arguments);
			this._resizePane();
		},

		_getCommentsNodeDimention: function() {
			var dim = domGeometry.getContentBox(this.domNode);
			dim.h = dim.h - domGeometry.getMarginBox(this.titleViewerComment).h;
			return dim;
		},

		_isItemFromCM: function() {
			return this._item && this._item.repository._isCM();
		},

		/**
		 * Sets an item to the pane
		 * 
		 * @param item
		 *            A document {@link ecm.model.ContentItem}.
		 */
		setItem: function(item, viewerTab) {
			var methodName = "setItem";
			this.logEntry(methodName);
			this._item = item;
			if (item.origItem) {
				this.own(aspect.after(item, "onCollaborate", lang.hitch(this, function() {
					item.origItem.attributes = lang.clone(item.attributes);
					item.origItem.onCollaborate();
				})));
			}

			this._hide();
			if (this._isItemFromCM())
				this._renderNotelogsPane();
			else
				this._renderCommentsPane();
			this.logExit(methodName);
		},

		_hide: function() {
			domStyle.set(this.itemNotelogsPane.domNode, "visibility", "hidden");
			domStyle.set(this.itemNotelogsPane.domNode, "display", "none");
			domStyle.set(this.itemCommentsPane.domNode, "display", "none");
		},

		_renderNotelogsPane: function() {
			domStyle.set(this.itemNotelogsPane.domNode, "display", "");
			if (!domClass.contains(this.itemNotelogsPane._cmNotelogTopButtonsArea.domNode, "ViewerNotelogActionBar"))
				domClass.add(this.itemNotelogsPane._cmNotelogTopButtonsArea.domNode, "ViewerNotelogActionBar");
			this.titleViewerComment.innerHTML = '<span>' + this.messages.notelogs + '</span>';
			this.itemNotelogsPane.setBackgroundRequest(false);
			this.itemNotelogsPane._fromViewer = true;
			this.itemNotelogsPane.setItem(this._item);
			this.itemNotelogsPane.resize();
			this.itemNotelogsPane.render();
			domStyle.set(this.itemNotelogsPane.domNode, "visibility", "visible");
		},

		_renderCommentsPane: function() {
			this.titleViewerComment.innerHTML = '<span>' + this.messages.comments + '</span>';
			this.itemCommentsPane.set("item", this._item);
			this.itemCommentsPane.resize(this._getCommentsNodeDimention());
			this.itemCommentsPane.render();
			domStyle.set(this.itemCommentsPane.domNode, "display", "");
		},

		isDirty: function() {
			return this._isItemFromCM() ? this.itemNotelogsPane._isDirty : this.itemCommentsPane.isDirty();
		},

		_okToClose: function() {
			return !this.isDirty();
		},

		setParent: function(parent) {
			this._contentViewer = parent;
		},

		onLoaded: function() {
			var methodName = "onLoaded";
			this.logEntry(methodName);
			if (!this._isItemFromCM()) {
				this.itemCommentsPane.resize(this._getCommentsNodeDimention());
				if (this._contentViewer) {
					this._contentViewer.mainBorderContainer.layout();
					this._contentViewer.mainBorderContainer.resize();
				}
			}
			this.logExit(methodName);
		},

		onClose: function(onProceedCallback, onCancelCallback) {
			var methodName = "onClose";
			this.logEntry(methodName);
			if (!this.isDirty()) {
				if (onProceedCallback)
					onProceedCallback(this._item);
				this._hide();

				return;
			}

			this._getConfirmationDialog(onProceedCallback, onCancelCallback).show();
			this.logExit(methodName);
		},

		_getConfirmationDialog: function(onProceedCallback, onCancelCallback) {
			var methodName = "_getConfirmationDialog";
			if (this._confirmDialog)
				this._confirmDialog.destroyRecursive(false);

			var executeCalled = false;
			this._confirmDialog = new YesNoCancelDialog({
				title: this.messages.viewer_editproperties_title,
				text: this._isItemFromCM() ? this.messages.viewer_notelogs_prompt_discard_changes : this.messages.viewer_comments_prompt_discard_changes,
				onYes: lang.hitch(this, function() {
					this.logDebug(methodName, "onYes: " + this._item.name);
					executeCalled = true;
					this._confirmDialog.hide();
					this.save(onProceedCallback, onCancelCallback);
				}),
				onNo: lang.hitch(this, function() {
					this.logDebug(methodName, "onNo: " + this._item.name);
					executeCalled = true;
					this._confirmDialog.hide();
					this.cancelChanges();
					if (onProceedCallback)
						onProceedCallback(this._item);
				}),
				onShow: lang.hitch(this, function() {
					this.logDebug(methodName, "onShow: " + this._item.name);
				}),
				onHide: lang.hitch(this, function() {
					this.logDebug(methodName, "onHide: " + this._item.name);
					if (executeCalled)
						this._hide();
					if (!executeCalled && onCancelCallback) {
						onCancelCallback();
						executeCalled = true;
					}
				})
			});
			domClass.add(this._confirmDialog.domNode, "ecmConfirmationWarningDialog viewerConfirmationDialog");
			this.own(this._confirmDialog);

			return this._confirmDialog;
		},

		save: function(onProceedCallback, onCancelCallback) {
			if (this._isItemFromCM())
				this.itemNotelogsPane.save(onProceedCallback, onCancelCallback);
			else
				this.itemCommentsPane.save(onProceedCallback, onCancelCallback);
		},

		cancelChanges: function() {
			if (this._isItemFromCM())
				this.itemNotelogsPane.cancel();
			else
				this.itemCommentsPane.cancelNewComment();
		}
	});
});
