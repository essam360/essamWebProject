/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/dom-construct",
	"../../model/Desktop",
	"../MessageBar",
	"../RepositorySelector",
	"../teamspaceBuilder/TeamspaceBuilder",
	"./_LaunchBarPane",
	"dojo/text!./templates/TeamspaceBuilderPane.html"
],

function(declare, //
lang, //
domConstruct, //
Desktop, //
MessageBar, //
RepositorySelector, //
TeamspaceBuilder, //
_LaunchBarPane, //
template) {

	/**
	 * @name ecm.widget.layout.TeamspaceBuilderPane
	 * @class Provides a pane for displaying the teamspace builder in the layout.
	 * @augments ecm.widget.layout._LaunchBarPane
	 */
	return declare("ecm.widget.layout.TeamspaceBuilderPane", [
		_LaunchBarPane
	], {
		/** @lends ecm.widget.layout.TeamspaceBuilderPane.prototype */

		templateString: template,
		widgetsInTemplate: true,
		/**
		 * Type of builder 'template' or 'instance'.
		 */
		type: "template", //template or instance
		/**
		 * Instance of {@link ecm.model.Teamspace}.
		 */
		model: null,

		/**
		 * Called after widget creation.
		 */
		postCreate: function() {
			this.connect(ecm.model.desktop, "onLogout", lang.hitch(this, function(repository) {
				if (this.teamspacePane) {
					this.teamspacePane.destroy();
				}
			}));
		},

		constructor: function(args) {
			this.type = args.type;
			this.mode = args.mode || "create";

		},

		/**
		 * Puts focus on the cancel button.
		 */
		focus: function() {
			if (this.teamspacePane) {
				this.teamspacePane.cancelButton.focus();
			}
		},

		/**
		 * Method called by parent container to pass additional parameters to this pane.
		 * 
		 * @param params
		 *            Contains parameters to set in the teamspace builder dijit.
		 */
		setParams: function(params) {
			var node = domConstruct.create("div", null, this.teamspaceBuilder);
			if (this.teamspacePane) {
				this.teamspacePane.destroy();
			}

			this.args = lang.mixin({
				parent: this
			}, this.args);
			this.teamspacePane = new TeamspaceBuilder({
				mode: params.mode,
				type: params.type,
				args: params
			}, node);

			this.teamspacePane.startup(); //call startup() after it has been added to the DOM, so that its contained BorderContainer can lay itself out.
			this.teamspacePane.setParams(params);
		},

		/**
		 * Loads the content of this pane.
		 */
		loadContent: function() {
			this.logEntry("loadContent");

			if (!this.isLoaded) {
				this.isLoaded = true;
			}

			this.logExit("loadContent");
		}
	});
});
