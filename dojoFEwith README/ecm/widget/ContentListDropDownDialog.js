/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/dom-construct",
	"dojo/dom-style",
	"dijit/form/Button",
	"dijit/popup",
	"../MessagesMixin",
	"../LoggerMixin",
	"../model/Desktop",
	"./DropDownDialog",
	"./ItemPropertiesStackPane"
], //
function(declare, //
lang, //
domConstruct, //
domStyle, //
Button, //
popup, //
MessagesMixin, //
LoggerMixin, //
Desktop, //
DropDownDialog, //
ItemPropertiesStackPane) {

	/**
	 * @name ecm.widget.ContentListDropDownDialog
	 * @class Provides a widget that contains a drop-down list that is used in a content list.
	 * @augments ecm.widget.DropDownDialog
	 */
	return declare("ecm.widget.ContentListDropDownDialog", [
		DropDownDialog,
		LoggerMixin,
		MessagesMixin
	], {
		/** @lends ecm.widget.ContentListDropDownDialog.prototype */

		autofocus: false,
		hideCancelButton: true,
		parseOnLoad: false,

		postCreate: function() {
			this.inherited(arguments);
			domStyle.set(this.domNode, "width", "600px");

			this.setOKButtonLabel(this.messages.close);
			this._createExtraButtons();
			this._addButtonConnections();
		},

		/**
		 * Creates a stackpane for the specified item id's data.
		 * 
		 * @param repository
		 *            Instance of {@link ecm.model.Repository}.
		 * @param itemid
		 *            The id of the item.
		 * @param callback
		 *            Callback function.
		 */
		setItem: function(repository, itemId, callback) {
			domStyle.set(this._previousButton.domNode, "display", "none");
			domStyle.set(this._viewContentButton.domNode, "display", "");
			this._viewContentButton.set("disabled", true);

			this._createStackPane().setItem(repository, itemId, callback);
		},

		/**
		 * Set the root pane to display in the stackpane.
		 * 
		 * @param item
		 *            The item.
		 * @param pane
		 *            The pane.
		 */
		setRootPane: function(item, pane) {
			domStyle.set(this._previousButton.domNode, "display", "none");
			domStyle.set(this._viewContentButton.domNode, "display", "none");

			this._createStackPane().setPane(item, pane);
		},

		/**
		 * @private Creates the item properties stack pane.
		 */
		_createStackPane: function() {
			if (this._stackPane) {
				this._stackPane.destroy();
			}
			this._stackPane = new ItemPropertiesStackPane();
			this._stackPane.firstTime = true;
			this.set("content", this._stackPane);
			this.connect(this._stackPane, "onStartRendering", "_onStartRendering");
			this.connect(this._stackPane, "onCompleteRendering", "_onCompleteRenderingContent");
			return this._stackPane;
		},

		/**
		 * @private
		 */
		_onStartRendering: function() {
			this._isRendering = true;
		},

		/**
		 * @private
		 */
		_onCompleteRenderingContent: function(item) {
			if (item) {
				this._viewContentButton.set("disabled", !this._canViewItem(item));
				domStyle.set(this._viewContentButton.domNode, "display", "");
			} else {
				this._viewContentButton.set("disabled", true);
			}
			if (!this._stackPane.firstTime) {
				domStyle.set(this._previousButton.domNode, "display", "");
			}
			this._previousButton.set("disabled", !this._stackPane.hasPrevious());
			this._stackPane.firstTime = false;
			this._isRendering = false;
		},

		/**
		 * @private
		 */
		_createExtraButtons: function() {
			this._viewContentButton = new Button({
				label: this.messages.open
			});
			domConstruct.place(this._viewContentButton.domNode, this.buttonNode.firstChild, "before");

			// Previous button
			this._previousButton = new Button({
				label: this.messages.back_label,
				"style": "display: none",
				"class": "left"
			});
			domConstruct.place(this._previousButton.domNode, this.buttonNode.firstChild, "before");
		},

		/**
		 * @private
		 */
		_addButtonConnections: function() {
			this.connect(this, "onClickOK", "close");
			this.connect(this._previousButton, "onClick", lang.hitch(this, function() {
				if (this._stackPane.showPrevious) {
					this._stackPane.showPrevious();
				}
			}));
			var actionsHandler = ecm.model.desktop.getActionsHandler();
			if (actionsHandler) {
				this.connect(this._viewContentButton, "onClick", lang.hitch(this, function() {
					actionsHandler.actionView(null, [
						this._stackPane.getSelectedPane().getItem()
					]);
				}));
			}
			this.connect(this, "onOpen", lang.hitch(this, function() {
				setTimeout(lang.hitch(this, function() {
					this.focus();
				}, 0));
			}));
		},

		/**
		 * @private Return Boolean indicating if the item is viewable.
		 */
		_canViewItem: function(item) {
			return item.hasContent() && item.hasPrivilege("privViewDoc");
		},

		/**
		 * Shows the popup.
		 * 
		 * @param data
		 *            Data to set as the content.
		 */
		show: function(data) {
			if (data && data.content) {
				this.set("content", data.content);
				if (this._content) {
					this._content.destroy();
				}
				this._content = data.content;
			}
			popup.open({
				onCancel: lang.hitch(this, function() {
					this.close();
				}),
				popup: this,
				x: data && data.position && data.position.x ? data.position.x : null,
				y: data && data.position && data.position.y ? data.position.y : null
			});
			this._stackPane.resize();
		},

		/**
		 * Close the popup.
		 */
		close: function() {
			popup.close(this);
		},

		/**
		 * Close the popup if not rendering and if blur.
		 */
		_onBlur: function() {
			if (this._isRendering != undefined && this._isRendering == false) {
				this.close();
			}
		},
		
		destroy: function() {
			if (this._content) {
				this._content.destroy();
				delete this._content;
			}
			if (this._stackPane) {
				this._stackPane.destroy();
				delete this._stackPane;
			}
			if (this._previousButton) {
				this._previousButton.destroy();
				delete this._previousButton;
			}
			if (this._viewContentButton) {
				this._viewContentButton.destroy();
				delete this._viewContentButton;
			}
			this.inherited(arguments);
		}
	});
});
