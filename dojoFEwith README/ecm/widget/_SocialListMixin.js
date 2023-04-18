/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/aspect",
	"dojo/dom-construct",
	"dojo/dom-geometry",
	"dojo/dom-style",
	"dojo/keys",
	"dojo/on",
	"ecm/LoggerMixin",
	"ecm/MessagesMixin",
	"ecm/model/Item",
	"ecm/widget/DropDownDialog",
	"ecm/widget/DropDownLink",
	"ecm/widget/listView/modules/Bar",
	"ecm/widget/listView/modules/FilterData",
	"ecm/widget/listView/modules/ReversedBody",
	"ecm/widget/listView/modules/ViewMagazine",
	"ecm/widget/listView/gridModules/ColumnWidth",
	"gridx/modules/CellWidget",
	"gridx/modules/ColumnResizer",
	"gridx/modules/Focus",
	"gridx/modules/VScroller",
	"gridx/modules/move/Row"
], //
function(declare, //
lang, //
aspect, //
domConstruct, //
domGeometry, //
domStyle, //
keys, //
on, //
LoggerMixin, //
MessagesMixin, //
Item, //
DropDownDialog, //
DropDownLink, //
Bar, //
FilterData, //
ReversedBody, //
ViewMagazine, //
ColumnWidth, //
CellWidget, //
ColumnResizer, //
Focus, //
VScroller, //
MoveRow) {

	/**
	 * @private Part of {@link ecm.widget.DownloadCount} and {@link ecm.widget.Recommendations} widgets
	 * @name ecm.widget._SocialListMixin
	 * @class Provides a list of users who collaborated on an object. P8 only.
	 * @since 2.0.3
	 */
	return declare("ecm.widget._SocialListMixin", LoggerMixin, {
		/** @lends ecm.widget._SocialListMixin.prototype */

		/**
		 * The {@link ecm.model.ContentItem} object being collaborated on.
		 */
		item: null,

		/**
		 * The total count of collaboration objects that the item has.
		 */
		count: 0,

		/**
		 * A boolean indicating whether a verbose label should be used on the link that expands the list with users.
		 */
		verboseLink: false,

		/**
		 * Boolean indicating if the Who... link should display.
		 */
		showWhoLink: true,

		_stateIcon: null,

		postCreate: function() {
			this.inherited(arguments);

			this.logEntry("postCreate");

			var anchor = domConstruct.create("a", null, this._countLink.containerNode, "before");
			this._stateIcon = domConstruct.create("img", {
				"class": "ecmStatusIcon ecmSocialStatusIcon " + Item.StateToCssClass[this._getSocialStateName()],
				alt: "",
				title: "",
				src: require.toUrl("dojo/resources/blank.gif")
			}, anchor);

			var stateChar = this.messages[this._getSocialStateName() + "_icon_char"];
			this._stateIconChar = domConstruct.create("span", {
				"class": "ecmStatusIconChar",
				title: "",
				innerHTML: stateChar
			}, anchor);

			this._dropdownDialog.setOKButtonLabel(ecm.messages.close);

			this.own(aspect.after(this._countLink, "openDropDown", lang.hitch(this, "_loadDropDown")));

			// connect dialog events
			this.own(aspect.after(this._dropdownDialog, "onClickOK", lang.hitch(this, function() {
				this._dropdownDialog.onCancel();
			})));

			this.own(aspect.before(ecm.model.desktop, "onDisplayStatusDialog", lang.hitch(this, function() {
				this._countLink.setAllowCloseOnBlur(false);
			})));
			this.own(aspect.after(ecm.model.desktop, "onHideStatusDialog", lang.hitch(this, function() {
				this._countLink.setAllowCloseOnBlur(true);
			})));

			this.own(on(this.domNode, "keyup, keypress, keydown", function(e) {
				if (e.keyCode == keys.ENTER || e.keyCode == keys.SPACE)
					e.stopPropagation();
			}));
			this.own(on(this.domNode, "mousedown, mouseup, click, dblclick", function(e) {
				e.stopPropagation();
			}));

			if (this.item)
				this._init();
			this.watch("item", lang.hitch(this, function() {
				this._init();
			}));

			this._countLink.startup();
			this.logExit("postCreate");
		},

		_getSocialStateName: function() {
			return "";
		},

		_getSocialType: function() {
			return "";
		},

		_init: function() {
			if (!this.item)
				return;

			this._isLoaded = false;
			this._setLabel();

			this.own(aspect.after(this.item, "onChange", lang.hitch(this, function() {
				this._updateCount();
			})));
			this.own(aspect.after(this.item, "onCollaborate", lang.hitch(this, function(socialItem, added, skipOnChange) {
				if (skipOnChange && socialItem && socialItem.type == this._getSocialType())
					this._updateCount();
			}), true));
		},

		_updateCount: function() {
			var c = this.item.getSocialCount(this._getSocialType());
			if (c > -1)
				this.count = c;
			this._setLabel();
			this._isLoaded = false;
		},

		uninitialize: function() {
			this.inherited(arguments);

			if (this.contentList)
				this.contentList.destroy();
		},

		/**
		 * Sets the object being collaborated on.
		 * 
		 * @param contentItem
		 *            A {@link ecm.model.ContentItem} object.
		 */
		setItem: function(contentItem) {
			this.set("item", contentItem);
		},

		_retrieveSocialList: function(callback) {
		},

		/**
		 * @private
		 */
		_loadDropDown: function(loadCallback) {
			if (this.item) {
				this._countLink.setAllowCloseOnBlur(false);
				if (this._isLoaded) {
					// if this widget is in a grid with a Focus module, then need time to allow the grid cell to focus
					setTimeout(lang.hitch(this, function() {
						this._countLink.setAllowCloseOnBlur(true);
					}), 200);
					if (domGeometry.getMarginBox(this.contentList.grid.bodyNode).h == 0)
						this._updateContentList(true);
				} else {
					this._retrieveSocialList(lang.hitch(this, function(resultSet) {
						if (!this.contentList) {
							require([
								"ecm/widget/listView/ContentList"
							], lang.hitch(this, function(ContentList) {
								this.contentList = new ContentList({
									coreModules: [
										CellWidget,
										ColumnResizer,
										Focus,
										VScroller,
										ColumnWidth
									]
								});
								this.contentList.setContentListModules([
									{
										moduleClass: ViewMagazine,
										showViewSelectorButton: false
									},
									{
										moduleClass: Bar,
										top: [
											[
												[
													{
														moduleClass: FilterData,
														"className": "BarFilterData",
														showFilterButton: false
													}
												]
											]
										]
									}
								]);
								this.contentList.setGridExtensionModules([
									ReversedBody
								]);
								this._gridNode.appendChild(this.contentList.domNode);

							}));
						}
						this.resize();
						this.contentList.setResultSet(resultSet);
						if (lang.isFunction(loadCallback))
							loadCallback();
						this._countLink.setAllowCloseOnBlur(true);
						this._isLoaded = true;
					}));
				}
			}
		},

		/**
		 * @private
		 */
		_setLabel: function() {
			if (!this.count)
				this.count = 0;

			domStyle.set(this._countValue, "display", this.showWhoLink ? "" : "none");
			domStyle.set(this._stateIcon, "display", this.showWhoLink ? "none" : "");
			if (this.showWhoLink) {
				this._countValue.innerHTML = this.count.toString();
				domStyle.set(this._countLink.containerNode, "display", this.count ? "" : "none");
			} else {
				this._countLink.set("label", this.count ? this.count.toString() : "0");
			}
		},

		/**
		 * @private
		 */
		_updateContentList: function(scrollToBottom) {
			if (!this.contentList)
				return;

			var count = this.contentList.grid.rowCount();
			this.contentList.grid.body.renderRows(0, count);
			this.contentList.grid.view.updateRootRange(0, count);
			if (scrollToBottom) {
				var h = this.connect(this.contentList.grid.vScroller, '_onBodyChange', function() {
					setTimeout(lang.hitch(this, function() {
						this.contentList.grid.vScroller.scrollToRow(0);
					}), 100);
					h.remove();
				});
			}
		},

		resize: function() {
			var listHeight = domGeometry.getContentBox(this._dropdownDialog.containerNode).h;
			var dim = domGeometry.getMarginBox(this._gridNode);
			if (dim.h != listHeight) {
				domGeometry.setMarginBox(this._gridNode, {
					h: listHeight
				});
			}
		}
	});
});
