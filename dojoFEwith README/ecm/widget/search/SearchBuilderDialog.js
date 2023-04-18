/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/sniff",
	"dojo/dom-class",
	"dojo/dom-style",
	"dijit/_Widget",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/layout/ContentPane",
	"ecm/Messages",
	"./SearchBuilder",
	"../dialog/BaseDialog",
	"dojo/text!./templates/SearchBuilderDialogContent.html"
],

function(declare, //
lang, //
has, //
domClass, //
domStyle, //
_Widget, //
_TemplatedMixin, //
_WidgetsInTemplateMixin, //
ContentPane, //
Messages, //
SearchBuilder, //
BaseDialog, //
template) {

	/**
	 * @name ecm.widget.search.SearchBuilderDialog
	 * @class Provides a dialog box that is used to add search templates.
	 * @augments ecm.widget.dialog.BaseDialog
	 */
	return declare("ecm.widget.search.SearchBuilderDialog", [
		BaseDialog
	], {
		/** @lends ecm.widget.search.SearchBuilderDialog.prototype */
		contentString: template,
		widgetsInTemplate: true,

		/**
		 * A {@link ecm.widget.search.SearchBuilder} widget contained in this widget
		 */
		builder: null,

		/**
		 * @private A boolean value indicating if this widget is in teamspace mode
		 */
		_teamspaceMode: false,
		/**
		 * @private A string value containing the name of a teamspace
		 */
		_teamspaceName: ecm.messages.search_in_thisteamspaces,

		constructor: function(args) {
			if (args) {
				this._teamspaceMode = args.teamspaceMode;
				if (args.teamspacename) {
					this._teamspaceName = args.teamspacename;
				}
			}
		},

		/**
		 * @private Sets the title of the dialog and propagates {@link ecm.model.Repository} object to
		 *          {@link ecm.widget.search.SearchBuilder} widget.
		 */
		postCreate: function() {
			this.inherited(arguments);
			domClass.add(this.domNode, "ecmSearchBuilderDialog");
			this.setMaximized(true);
			this.setSizeToViewportRatio(true);
			//if (!has("ie")) { // IE doesn't seem to be handling the resizable of this screen well
				//this.setResizable(true);
			//}
			this.builder.setRepository(this.repository);
			this.setTitle(this.messages.open_search_builder);
			domStyle.set(this.domNode, "maxHeight", "none");

			if (this._teamspaceMode) {
				// hide the original save and cancel buttons inside the search definition
				this.builder.searchDefinition.saveButton.domNode.style.display = "none";
				this.builder.searchDefinition.saveAsButton.domNode.style.display = "none";
				this.builder.searchDefinition.cancelButton.domNode.style.display = "none";

				//enable the flag to show "This teamspace" in folder selector
				if (this.builder.searchDefinition.folderSelector._folderSelector) {
					this.builder.searchDefinition.folderSelector._folderSelector.teamspacemode = true;
					this.builder.searchDefinition.folderSelector._folderSelector.teamspacename = this._teamspaceName;
				}

				// add the save button to the dialog and configure events for the new save button
				var saveSearchButton = this.addButton(ecm.messages.save_template, null, false, false);
				this.builder.searchDefinition.configureSaveButton(saveSearchButton);
			}
		}
	});
});
