/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/_Widget",
	"ecm/MessagesMixin",
	"ecm/LoggerMixin",
	"ecm/model/SocialItem",
	"ecm/widget/_SocialListMixin",
	"dojo/text!./templates/DownloadCount.html"
], //
function(declare, //
lang, //
_TemplatedMixin, //
_WidgetsInTemplateMixin, //
_Widget, //
MessagesMixin, //  
LoggerMixin, //
SocialItem, //
_SocialListMixin, //
template) { //

	/**
	 * @name ecm.widget.DownloadCount
	 * @class Provides a widget that is used to display the download count property for a document, including a control
	 *        to retrieve and display the list of users that have downloaded the document.
	 * @augments dijit._Widget
	 * @since 2.0.2
	 */
	return declare("ecm.widget.DownloadCount", [
		_Widget,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		LoggerMixin,
		_SocialListMixin,
		MessagesMixin
	], {
		/** @lends ecm.widget.DownloadCount.prototype */

		templateString: template,
		widgetsInTemplate: true,

		_getSocialStateName: function() {
			return "docDownload";
		},

		_getSocialType: function() {
			return SocialItem.prototype.TYPE.DOWNLOAD;
		},

		_retrieveSocialList: function(callback) {
			this.item.retrieveDownloadRecords(lang.hitch(this, function(resultSet) {
				if (lang.isFunction(callback))
					callback(resultSet);
			}));
		},

		/**
		 * @private
		 */
		_setLabel: function() {
			this.inherited(arguments);

			if (!this.showWhoLink) {
				var label = "";
				if (this.verboseLink) {
					if (this.count > 0) {
						if (this.count == 1) {
							label = this.messages.downloadcount_single;
						} else {
							label = lang.replace(this.messages.downloadcount_multiple, [
								this.count
							]);
						}
					} else {
						label = this.messages.downloadcount_none;
					}
				} else {
					label = lang.replace(this.messages.downloadcount, [
						this.count
					]);
				}

				this._countLink.set("label", label);
			}
		}
	});
});
