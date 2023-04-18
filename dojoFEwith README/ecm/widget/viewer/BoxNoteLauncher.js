/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/on",
	"dojo/string",
	"dijit/_WidgetsInTemplateMixin",
	"ecm/LoggerMixin",
	"ecm/MessagesMixin",
	"ecm/model/Desktop",
	"ecm/model/Message",
	"ecm/widget/viewer/DocViewer",
	"ecm/widget/viewer/model/ViewerItem",
	"dojo/text!./templates/BoxNoteLauncher.html"
],

function(declare, lang, on, string, _WidgetsInTemplateMixin, LoggerMixin, MessagesMixin, Desktop, Message, DocViewer, ViewerItem, template) {

	/**
	 * @name ecm.widget.viewer.BoxNoteLauncher
	 * @class Provides a widget that displays a link to open Box Notes in a separate window.
	 * @extends ecm.widget.viewer.DocViewer
	 */
	var BoxNoteLauncher = declare("ecm.widget.viewer.BoxNoteLauncher", [
		DocViewer,
		_WidgetsInTemplateMixin,
		LoggerMixin,
		MessagesMixin
	], {
		/** @lends ecm.widget.viewer.BoxNoteLauncher.prototype */
		templateString: template,

		postCreate: function() {
			this.inherited(arguments);
			var self = this;
			this.own(on(this.launcherNode, "click", function(e) {
				e.stopPropagation();
				self.launchBoxNote(e);
			}));
		},

		/**
		 * Returns true if the item is a Box Note.
		 * 
		 * @param item
		 *            The item to test.
		 * @return {Boolean} A value of <code>true</code> or <code>false</code>, indicating whether this viewer can open the specified item.
		 */
		canOpenItem: function(item) {
			return item.mimetype == "application/x-box-note";
		},

		/**
		 * Launches the Box Note.
		 */
		launchBoxNote: function(event) {
			var methodName = "launchBoxNote";
			this.logEntry(methodName);
			var viewerUrl = this.viewerDef.getLaunchUrl(this.item);
			var popupWindow = window.open("", "_blank");
			ViewerItem.loadSecure(popupWindow, viewerUrl, true);
			this.logExit(methodName);
		}
	});

	return BoxNoteLauncher;
});
