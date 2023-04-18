/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dijit/_Widget",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/layout/BorderContainer",
	"dijit/layout/ContentPane",
	"../RepositorySelector",
	"../WorklistSelector",
	"./_LaunchBarDialogPane",
	"./_RepositorySelectorMixin",
	"dojo/text!./templates/FlyoutPane.html"
],

function(declare, lang, _Widget, _TemplatedMixin, _WidgetsInTemplateMixin, BorderContainer, ContentPane, RepositorySelector, WorklistSelector, _LaunchBarDialogPane, _RepositorySelectorMixin, template) {

	/**
	 * @name ecm.widget.layout.WorkFlyoutPane
	 * @class Provides a fly-out pane that is used to select repositories and to navigate IBM Content Manager worklists
	 *        and IBM FileNet P8 application spaces.
	 * @augments ecm.widget.layout._LaunchBarDialogPane, ecm.widget.layout._RepositorySelectorMixin
	 */
	return declare("ecm.widget.layout.WorkFlyoutPane", [
		_LaunchBarDialogPane,
		_RepositorySelectorMixin
	], {
		/** @lends ecm.widget.layout.WorkFlyoutPane.prototype */

		templateString: template,
		widgetsInTemplate: true,
		viewMode: 3, // Work

		postCreate: function() {
			this.logEntry("postCreate");
			this.inherited(arguments);
			this.defaultLayoutRepositoryComponent = "work";
			this.repositorySelector = new RepositorySelector({
				'class': "reposSelectorArea",
				repositoryTypes: "cm,p8",
				workflowEnabledOnly: true,
				type: "dropdown",
				viewMode: 3
			// Work
			});
			this.setRepositoryTypes("cm,p8");
			this.doRepositorySelectorConnections();

			// If there is more than one repository in the list, show the selector to the user.
			if (this.repositorySelector.getNumRepositories() > 1)
				this.topPane.domNode.appendChild(this.repositorySelector.domNode);

			this.logExit("postCreate");
		},

		focus: function() {
			if (this.repositorySelector && this.repositorySelector.getDropdown()) {
				this.repositorySelector.getDropdown().focus();
			}
		},

		/**
		 * Sets a specific repository as being selected in the work pane.
		 * 
		 * @param repository
		 *            An {@link ecm.model.Repository} object to be selected.
		 */
		setRepository: function(repository) {
			this.logEntry("setRepository");

			//Saves the new repository.  It might not be set yet if teh pane has not been selected.
			this.repository = repository;

			//only set the repository in the pane if the pane is selected.  If not, hold the repository until the pane is selected.
			if (this.selected) {
				if (this.repository != null) {
					this.repositorySelector.getDropdown().set("value", this.repository.id);
					if (this.worklistSelector && this.repository.getPrivilege("workflow"))
						this.worklistSelector.setRepository(this.repository);
					else if (this.worklistSelector)
						this.worklistSelector.setRepository(null);
				} else {
					if (this.worklistSelector)
						this.worklistSelector.setRepository(null);
				}
				this.needReset = false;
			} else {
				if (this.worklistSelector) {
					this.worklistSelector.setRepository(null);
				}
			}
			this.logExit("setRepository");
		},

		/**
		 * Loads the work flyout pane content for rendering.
		 */
		loadContent: function() {
			this.logEntry("loadContent");

			this.focus(); // focus 1st before calling setPaneDefaultLayoutRepository so that if it causes the logon dialog to show, the focus will go back to flyout when done logging on

			//this handles retrieving the default layout repository, login, and setting it as the repository if no repository has been set yet.
			this.setPaneDefaultLayoutRepository();

			if (this.repository && this.repository.connected) {
				this.repositorySelector.getDropdown().set("value", this.repository.id);

				this.worklistSelector = new WorklistSelector();
				this._doWorkSelectorConnections();

				if (this.repository.getPrivilege("workflow"))
					this.worklistSelector.setRepository(this.repository);

				this.bottomPane.domNode.appendChild(this.worklistSelector.domNode);
				this.isLoaded = true;
			}
			this.needReset = false;

			this.logExit("loadContent");
		},

		/**
		 * Resets the content of this pane.
		 */
		reset: function() {
			this.logEntry("reset");
			this.setRepository(this.repository);
			this.needReset = false;

			this.logExit("reset");
		},

		/**
		 * @private Sets up event handles for the work selector.
		 */
		_doWorkSelectorConnections: function() {
			this.logEntry("_doWorkSelectorConnections");
			var self = this;

			this.connect(this.worklistSelector, "onProcessRoleSelected", function(processRole) {
				processRole.retrieveWorklists(lang.hitch(this, function(result) {
					self.selectContentPane("workPane", {
						worklist: result[0],
						repository: self.repository
					});
					self.closePopup();
				}));
			});

			this.connect(this.worklistSelector, "onWorklistSelected", function(worklist) {
				self.selectContentPane("workPane", {
					worklist: worklist,
					repository: self.repository
				});
				self.closePopup();
			});

			this.logExit("_doWorkSelectorConnections");
		}
	});
});
