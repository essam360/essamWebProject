/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array",
	"dojo/aspect",
	"dojo/dom-attr",
	"dojo/dom-class",
	"dojo/dom-construct",
	"dojo/dom-geometry",
	"dojo/dom-style",
	"dojo/keys",
	"dojo/on",
	"dijit/_WidgetBase",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"idx/form/Link",
	"ecm/MessagesMixin",
	"ecm/LoggerMixin",
	"ecm/model/ResultSet",
	"ecm/model/Item",
	"ecm/model/SocialItem",
	"ecm/widget/_SocialListMixin",
	"dojo/text!./templates/Recommendations.html"
], //
function(declare, //
lang, //
array, //
aspect, //
domAttr, //
domClass, //
domConstruct, //
domGeometry, //
domStyle, //
keys, //
on, //
_WidgetBase, //
_TemplatedMixin, //
_WidgetsInTemplateMixin, //
Link, //
MessagesMixin, //  
LoggerMixin, //
ResultSet, //
Item, //
SocialItem, //
_SocialListMixin, //
template) { //

	/**
	 * @name ecm.widget.Recommendations
	 * @class Provides a widget that is used to display the like count property for a document, including a control to
	 *        recommend and retrieve and display the list of users that have liked the document.
	 * @augments dijit._WidgetBase
	 * @since 2.0.3
	 */
	return declare("ecm.widget.Recommendations", [
		_WidgetBase,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		_SocialListMixin,
		LoggerMixin,
		MessagesMixin
	], {
		/** @lends ecm.widget.Recommendations.prototype */
		templateString: template,

		postCreate: function() {
			this.inherited(arguments);

			domClass.add(this._innerStateIcon, Item.StateToCssClass[this._getSocialStateName()]);
			if (this.verboseLink)
				this._setStateIconLinkEvents(this._stateIcon.parentNode);
			this._setStateIconLinkEvents(this._innerStateIconLink.containerNode, true);
		},

		_setStateIconLinkEvents: function(stateIconLink, skipOnChange) {
			this.own(on(stateIconLink, "keyup, keypress", function(e) {
				if (e.keyCode == keys.ENTER || e.keyCode == keys.SPACE) {
					e.preventDefault();
					e.stopPropagation();
				}
			}));
			this.own(on(stateIconLink, "mousedown, mouseup, dblclick", function(e) {
				e.preventDefault();
				e.stopPropagation();
			}));
			this.own(on(stateIconLink, "keydown", lang.hitch(this, function(e) {
				if (e.keyCode == keys.ENTER || e.keyCode == keys.SPACE) {
					this._updateRecommendation(skipOnChange);
					e.stopPropagation();
				}
			})));
			this.own(on(stateIconLink, "click", lang.hitch(this, function(e) {
				this._updateRecommendation(skipOnChange);
				e.stopPropagation();
			})));
		},

		_getSocialStateName: function() {
			return "docRecommendation";
		},

		_getSocialType: function() {
			return SocialItem.prototype.TYPE.RECOMMENDATION;
		},

		_init: function() {
			this.inherited(arguments);
			if (!this.item)
				return;

			this._setLabel();

			this.own(aspect.after(this._countLink, "closeDropDown", lang.hitch(this, function() {
				if (this._countChanged)
					this.item.onChange([
						this.item
					]);
				this._countChanged = false;
			})));
		},

		_isActionAllowed: function() {
			return !this.showWhoLink && (this.item.isRecommendable() || this._myRecommendation && this._myRecommendation.isMine());
		},

		_updateRecommendation: function(skipOnChange) {
			if (!this._isActionAllowed())
				return;

			if (this._myRecommendation) {
				this._myRecommendation.deleteThis(lang.hitch(this, function() {
					this._countChanged = true;
					this._updateMySocialData();
					this._updateContentList();
					if (this.item._myRecommendationId)
						this.item._myRecommendationId = "";
				}), null, skipOnChange);
			} else {
				if (this.item.mySocialData) {
					this._setLabel();
					if (this._myRecommendation)
						return;
				}

				var myRec = new SocialItem({
					repository: this.item.repository,
					contentItem: this.item,
					type: SocialItem.prototype.TYPE.RECOMMENDATION
				});
				myRec.save(lang.hitch(this, function(myRecommendation) {
					this._countChanged = true;
					this._updateMySocialData(myRecommendation);

					if (this.contentList && this.contentList.getResultSet()) {
						var rs = this.contentList.getResultSet();
						var before = rs.items.length;
						rs.prepend(new ResultSet({
							items: [
								myRecommendation
							]
						}));
						this._updateContentList(true);
					}
				}), null, skipOnChange);
			}
		},

		_updateMySocialData: function(myRecommendation) {
			var data = this.item.mySocialData;
			if (myRecommendation) {
				if (!(data instanceof Array))
					data = [];
				data.push(myRecommendation);
			} else if (data instanceof Array) {
				data = array.filter(data, function(datum) {
					return datum.type != SocialItem.prototype.TYPE.RECOMMENDATION;
				});
			}
			this.item.mySocialData = data;
		},

		_retrieveSocialList: function(callback) {
			this.item.retrieveRecommendations(lang.hitch(this, function(resultSet) {
				this._recommendationsRetrieved = true;
				this.item.mySocialData = array.map(resultSet.mySocialData, lang.hitch(this, function(datum) {
					return SocialItem.createFromJSON(datum, this.item, null);
				}));
				this._setLabel();
				if (lang.isFunction(callback))
					callback(resultSet);
			}));
		},

		_setLabel: function() {
			this.inherited(arguments);

			var myRecommendation = null;
			var index = -1;
			if (array.some(this.item.mySocialData, function(datum, i) {
				index = i;
				return datum.type == SocialItem.prototype.TYPE.RECOMMENDATION;
			})) {
				myRecommendation = this.item.mySocialData[index];
			}

			this._myRecommendation = (myRecommendation && !myRecommendation.deleted) ? myRecommendation : null;
			if (!this._myRecommendation && this.item._myRecommendationId) {
				this._myRecommendation = new SocialItem({
					id: this.item._myRecommendationId,
					attributes: {
						originator: this.item.repository.userId
					},
					deletable: true,
					repository: this.item.repository,
					contentItem: this.item,
					type: SocialItem.prototype.TYPE.RECOMMENDATION
				});
			}

			var label = "";
			if (this.count > 0) {
				if (this.count == 1) {
					label = this._myRecommendation ? this.messages.recommendations_you : this.messages.recommendations_another;
				} else if (this.count == 2 && this._myRecommendation) {
					label = this.messages.recommendations_you_and_another;
				} else {
					label = this._myRecommendation ? lang.replace(this.messages.recommendations_you_and_others, [
						this.count - 1
					]) : lang.replace(this.messages.recommendations_others, [
						this.count
					]);
				}
			} else {
				label = this.messages.recommendations_none;
			}
			this._labelNode.innerHTML = label;

			if (!this.showWhoLink) {
				this._countLink.set("label", this.verboseLink ? label : lang.replace(this.messages.recommendations, [
					this.count
				]));
			}

			if (this.verboseLink)
				this._updateStateIcon(this._stateIcon, this._stateIconChar);
			this._updateStateIcon(this._innerStateIcon, this._innerStateIconChar);
			domStyle.set(this._innerStateIcon, "display", (this.verboseLink || this._recommendationsRetrieved) ? "inline" : "none");
			domStyle.set(this._innerStateIconChar, "display", (this.verboseLink || this._recommendationsRetrieved) ? "" : "none");
		},

		_updateStateIcon: function(stateIcon, stateIconChar) {
			var actionAllowed = this._isActionAllowed();
			domClass.remove(stateIcon, "recommended");
			domClass.remove(stateIcon, "unrecommended");
			domClass.add(stateIcon, this._myRecommendation ? "recommended" : "unrecommended");
			domClass.remove(stateIcon, "recommend");
			domClass.remove(stateIcon, "unrecommend");
			if (actionAllowed)
				domClass.add(stateIcon, this._myRecommendation ? "unrecommend" : "recommend");
			domAttr.set(stateIcon, "src", require.toUrl("dojo/resources/blank.gif"));
			var title = !actionAllowed ? "" : (this._myRecommendation ? this.messages.recommendations_unrecommend : this.messages.recommendations_recommend);
			domAttr.set(stateIcon, "alt", title);
			domAttr.set(stateIcon, "title", title);
			if (stateIcon.parentNode) {
				domStyle.set(stateIcon.parentNode, "cursor", actionAllowed ? "pointer" : "default");
				domAttr.set(stateIcon.parentNode, "tabindex", actionAllowed ? "0" : "-1");
			}
			domAttr.set(stateIconChar, "alt", title);
			domAttr.set(stateIconChar, "title", title);
			stateIconChar.innerHTML = this._myRecommendation ? this.messages[this._getSocialStateName() + "_icon_char"] : this.messages[this._getSocialStateName() + "Unlike_icon_char"];
		},

		resize: function() {
			var dim = domGeometry.getContentBox(this._dropdownDialog.containerNode);
			var listHeight = dim.h - domGeometry.getMarginBox(this._recommendationNode).h;
			dim = domGeometry.getMarginBox(this._gridNode);
			if (dim.h != listHeight) {
				domGeometry.setMarginBox(this._gridNode, {
					h: listHeight
				});
			}
		}
	});
});
