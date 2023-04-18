/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare", //
	"dojo/_base/lang", //
	"dojo/dom-geometry", //
	"dojo/dom-style", //
	"dijit/_Widget", //
	"dijit/_TemplatedMixin", //
	"dijit/_WidgetsInTemplateMixin", //
	"dijit/layout/BorderContainer", //
	"dijit/layout/StackContainer", //
	"dijit/registry", //
	"../MessagesMixin", //         
	"../LoggerMixin", //
	"./Ellipsis", //
	"./Breadcrumb", //
	"./ItemPropertiesPane", //
	"dojo/text!./templates/ItemPropertiesStackPane.html"
], //
function(declare, //
lang, //
domGeom, //
domStyle, //
_Widget, //
_TemplatedMixin, //
_WidgetsInTemplateMixin, //
BorderContainer, //
StackContainer, //
registry, //
MessagesMixin, //
LoggerMixin, //
Ellipsis, //
Breadcrumb, //
ItemPropertiesPane, //
template) { //

	/**
	 * @name ecm.widget.ItemPropertiesStackPane
	 * @class Provides a pane that contains a stack of <code>ItemPropertiesPane</code> widgets. Typically, the
	 *        <code>ItemPropertiesStackPane</code> contains a single <code>ItemPropertiesPane</code> widget.
	 *        However, for reference attributes, a separate
	 *        <code>ItemPropertiesPane<code> widget is added to the stack for each 
	 *        reference attribute the user opens. The user sees the top widget in the stack.
	 * @augments dijit._Widget
	 */
	return declare("ecm.widget.ItemPropertiesStackPane", [
		_Widget,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		LoggerMixin,
		MessagesMixin
	], {
		/** @lends ecm.widget.ItemPropertiesStackPane.prototype */

		templateString: template,
		widgetsInTemplate: true,

		/**
		 * The {@link ecm.model.Repository} for the item.
		 */
		repository: null,

		postCreate: function() {
			this.inherited(arguments);
			this.connect(this._breadcrumb, "onClick", "_onClickBreadcrumb");
		},

		/**
		 * Sets a root pane (i.e., sets the child component selector pane when the user hits <strong>Values...</strong>
		 * link in the content list).
		 * 
		 * @param item
		 *            This parameter is used to the get the content class name for display in the breadcrumb and the
		 *            repository (for loading reference attribute items).
		 * @param pane
		 *            The child component selector pane.
		 */
		setPane: function(item, pane) {
			this.onStartRendering();
			domStyle.set(this._breadcrumbContainer.domNode, "display", "none");
			this.connect(pane, "onClickReferenceAttribute", "_onClickReferenceAttribute");
			this.repository = item.repository;
			this._addToBreadcrumb(item, pane);
			this._stackContainer.addChild(pane);
			this._stackContainer.selectChild(pane);
			this.onCompleteRendering();
		},

		/**
		 * Sets a root item for the item properties pane (i.e., the user hits the <strong>Properties...</strong> link
		 * in the content list and wants to set the item reference attribute to display).
		 * 
		 * @param repository
		 *            The {@link ecm.model.Repository} for the item.
		 * @param itemId
		 *            The <code>itemId</code> of the item.
		 * @param callback
		 *            This method is called after the item is retrieved and the properties are rendered.
		 */
		//  
		setItem: function(repository, itemId, callback) {
			domStyle.set(this._breadcrumbContainer.domNode, "display", "none");
			this.repository = repository;
			this.onStartRendering();
			this._loadItem(itemId, callback);
		},

		/**
		 * @private
		 */
		_onCompleteRendering: function() {
			if (this.getSelectedPane()) {
				this.onCompleteRendering(this.getSelectedPane().getItem());
			}
			this.resize();
		},

		/**
		 * Retrieves the selected pane widget.
		 * 
		 * @return The selected pane widget.
		 */
		getSelectedPane: function() {
			return this._stackContainer.selectedChildWidget;
		},

		/**
		 * Resizes the widget.
		 */
		resize: function() {
			this._borderContainer.resize();
			var size = domGeom.getMarginBox(this._stackContainer.domNode);
			var pane = this.getSelectedPane();
			if (pane) {
				domGeom.setMarginBox(pane.domNode, {
					w: size.w - 5,
					h: size.h
				});
				if (pane.resizeIt) {
					pane.resizeIt();
				}
			}
		},

		/**
		 * This event method is called before properties are rendered.
		 */
		onStartRendering: function() {
		},

		/**
		 * This event method is called after properties are rendered.
		 */
		onCompleteRendering: function(item) {
		},

		/**
		 * Determines if there is a previous item in the breadcrumb.
		 * 
		 * @return {Boolean} A value of <code>true</code> if there is a previous item in the breadcrumb, otherwise
		 *         returns <code>false</code>.
		 */
		hasPrevious: function() {
			return (this._breadcrumb.getData().length == 1) ? false : true;
		},

		/**
		 * Removes the current breadcrumb item and selects the previous breadcrumb item as the new current item.
		 */
		showPrevious: function() {
			this._breadcrumb.pop();
			this._onClickBreadcrumb();
		},

		/**
		 * @private
		 */
		_loadItem: function(itemId, callback) {
			this.repository.retrieveItem(itemId, lang.hitch(this, function(item) {
				item.retrieveAttributes(lang.hitch(this, function(item) {
					var itemPropertiesPane = new ItemPropertiesPane({
						useContentClassSelector: false
					});
					this.connect(itemPropertiesPane, "onCompleteRendering", "_onCompleteRendering");
					this.connect(itemPropertiesPane, "onClickReferenceAttribute", "_onClickReferenceAttribute");

					itemPropertiesPane.setItem(item, true);
					itemPropertiesPane.startup();
					this._addToBreadcrumb(item, itemPropertiesPane);
					this._stackContainer.addChild(itemPropertiesPane);
					this._stackContainer.selectChild(itemPropertiesPane);
					this._onCompleteRendering(); // since useContentClassSelector is set to false, we have all the data
					if (callback) {
						callback();
					}
				}), true);
			}));
		},

		/**
		 * @private
		 */
		_onClickReferenceAttribute: function(evt) {
			var referenceItemId = evt.target ? registry.getEnclosingWidget(evt.target).get("value") : evt;
			if (referenceItemId) {
				this.onStartRendering();
				domStyle.set(this._breadcrumbContainer.domNode, "display", "");
				this._loadItem(referenceItemId, lang.hitch(this, function() {
				}));
			}
		},

		/**
		 * @private
		 */
		_onClickBreadcrumb: function() {
			this._breadcrumbContainer.layout();
			var lastBreadcrumbData = this._breadcrumb.getData()[this._breadcrumb.getData().length - 1];
			var pane = lastBreadcrumbData.pane;
			this._stackContainer.selectChild(pane);
			this.onCompleteRendering(pane.getItem ? pane.getItem() : null);
		},

		/**
		 * @private
		 */
		_addToBreadcrumb: function(item, pane) {
			var array = this._breadcrumb.getData() ? this._breadcrumb.getData() : [];
			array.push({
				label: item.getContentClass().name,
				item: item,
				pane: pane
			});
			this._breadcrumb.setData(array);
		}
	});
});
