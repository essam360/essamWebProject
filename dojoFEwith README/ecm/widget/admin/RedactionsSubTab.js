/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array",
	"dojo/_base/sniff",
	"dojo/string",
	"dojo/dom-construct",
	"dojo/dom-class",
	"dojo/on",
	"dojo/dom-style",
	"dojo/dom-construct",
	"dojo/dom-geometry",
	"dojo/aspect",
	"dojo/store/Memory",
	"dijit/Tooltip",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/layout/BorderContainer",
	"dijit/layout/ContentPane",
	"dijit/form/Button",
	"ecm/MessagesMixin",
	"ecm/LoggerMixin",
	"ecm/model/Desktop",
	"ecm/model/Repository",
	"ecm/widget/HoverHelp",
	"ecm/widget/ValidationTextBox",
	"ecm/widget/RepositorySelector",
	"ecm/widget/dialog/ErrorDialog",
	"ecm/widget/admin/AdminLoginDialog",
	"idx/layout/TitlePane",
	"ecm/widget/admin/_RedactionAdminTabBase",
	"ecm/widget/admin/RedactionRoles",
	"ecm/widget/admin/RedactionPolicies",
	"dojo/text!./templates/RedactionsSubTab.html"
],

function(declare, lang, array, has, string, domConstruct, domClass, on, domStyle, construct,  domGeometry, aspect, MemoryStore, Tooltip, _TemplatedMixin, _WidgetsInTemplateMixin, BorderContainer, ContentPane, Button, MessagesMixin, LoggerMixin, Desktop, Repository, HoverHelp, ValidationTextBox, RepositorySelector, ErrorDialog, AdminLoginDialog, TitlePane, _RedactionAdminTabBase, RedactionRoles, RedactionPolicies, template) {

	/**
	 * @private Part of the NavigatorAdminPane widget.
	 * @name ecm.widget.admin.RedactionsSubTab
	 * @class Provides a widget that is used to configure the role based redactions.
	 * @since 3.0
	 */
	return declare("ecm.widget.admin.RedactionsSubTab", [
		ContentPane,
		_RedactionAdminTabBase,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		MessagesMixin,
		LoggerMixin
	], {
		/** @lends ecm.widget.admin.RedactionsSubTab.prototype */

		templateString: template,
		widgetsInTemplate: true,
		
		currentRepository: null,
		_repoConfigMap: {},

		postCreate: function() {
			this.logEntry("postCreate");
			
			this._isLoaded = false;
			this.inherited(arguments);
			this._setHoverHelp();
			this._redactionPoliciesTitlePane.set("title", this.messages.admin_repository_redaction_policies);
			this._redactionRolesTitlePane.set("title", this.messages.admin_repository_redaction_roles);
			
			this._repoConfigMap = {};
			ecm.model.admin.appCfg.getRepositoryObjects(lang.hitch(this, function(reposObjects) {
				var redactionRepositories = [];
				for (var i = 0; i < reposObjects.length; i++){
					var repositoryConfig = reposObjects[i];
					if (repositoryConfig.getType() == "p8" && repositoryConfig.getRedactionEnabled()){
						var repoId = repositoryConfig.id + "_CIWEBADMIN";
						redactionRepositories.push({
							"id": repoId,
							"label": repositoryConfig.getName()
						})
						this._repoConfigMap[repoId] = repositoryConfig;
					}
				}
				
				if (redactionRepositories.length > 1){
					this.logDebug("Found multiple redaction repositories.");
					this.connectButton.set("disabled", false);
					this._repositorySelector.set("store", new MemoryStore({
						data: redactionRepositories
					}));
					this._repositorySelector.set("placeHolder", this.messages.admin_repository_placeholder);
					domStyle.set(this.repositorySelectorArea, "display", "block");
					domStyle.set(this.headingText, "display", "none");
					domStyle.set(this.connectButtonDiv, "display", "none");
				}
				else if (redactionRepositories.length == 1){
					this.logDebug("Found single redaction repsitory: " + redactionRepositories[0].id);
					this.connectButton.set("disabled", false);
					var name = redactionRepositories[0].label;
					if (has("text-direction")) {
						name = this.enforceTextDirWithUcc(null, name);
					}
					construct.place("<label>" + string.substitute(this.messages.admin_repository_generic_heading, [
					          name
					]) + "</label>", this.headingText, "only");
					domStyle.set(this.repositorySelectorArea, "display", "none");
					domStyle.set(this.headingText, "display", "block");
					
					domStyle.set(this.connectButtonDiv, "display", "block");
					this.connectButton.set("disabled", true);
					
					this.currentRepository = redactionRepositories[0];
				}
				else {
					// No redaction repositories
					this.connectButton.set("disabled", true);
				}
			}));
			this.logExit("postCreate");
		},
		
		_onShow: function(){
			this.inherited(arguments);
			
			// Authenticate to the current repository if not connected.
			if (this.currentRepository && !this.currentRepository.connected){
				this._connectToRepository(this.currentRepository.id);
			}
		},
		
		onRepositorySelectorSelect: function(){
			this.logEntry("onRepositorySelectorSelect");
			
			var repositoryId = this._repositorySelector.get("value");
			this._connectToRepository(repositoryId);
			
			this.logExit("onRepositorySelectorSelect");
		},
		
		onConnectButtonClick: function(){
			this._connectToRepository(this.currentRepository.id);
		},
		
		/**
		 * @private
		 */
		_connectToRepository: function(repositoryId){
			this.logEntry("_connectToRepository");
			
			if (repositoryId && repositoryId != "") {
				if (!this._loginDialog) {
					this._loginDialog = new AdminLoginDialog();
					this.own(aspect.after(this._loginDialog, "onCancel", lang.hitch(this, function(commonProperties){
						var repoKeys = Object.keys(this._repoConfigMap);
						if (repoKeys.length > 1){
							// If the user hasn't authenticated to any repositories, deselect the one they selected so the hint prompt will show.
							if (this.currentRepository != null && this.currentRepository.connected){
								this._repositorySelector.set('value', this.currentRepository.id);
							}
							else {
								this._repositorySelector.set('value', null);
							}
						}
						else {
							this.connectButton.set("disabled", false);
						}
					})));
				}

				var repo = ecm.model.desktop.getRepository(repositoryId);
				if (repo != null && repo.connected) {
					this.logDebug("Repository already connected: " + repo.id);
					this.currentRepository = repo;
					this._redactionRoles.setRepository(this.currentRepository);
					this._redactionPolicies.setRepository(this.currentRepository);
				} else {
					var repoConfig = this._repoConfigMap[repositoryId];
					if (repoConfig){
						repo = new Repository({
							id: repositoryId,
							name: repoConfig.getName(),
							type: repoConfig.getType()
						});
						ecm.model.desktop._storeAdminRepository(repo);
						var params = {
							displayName: repoConfig.getName(),
							serverName: repoConfig.getServerName(),
							objectStore: repoConfig.getObjectStore(),
							objectStoreDisplayName: repoConfig.getObjectStoreDisplayName(),
							protocol: repoConfig.getProtocol()
						};
						
						this.logDebug("Connecting to repository: " + repo.id);
						this._loginDialog.show(repo.type, repo.id, repo.name, params, lang.hitch(this, function(response) {
							this.connectButton.set("disabled", true);
							repo._loadRepository(response);
							this.currentRepository = repo;
							this._redactionRoles.setRepository(this.currentRepository);
							this._redactionPolicies.setRepository(this.currentRepository);
						}));
					}
				}
			}
			this.logExit("_connectToRepository");
		},
		
		onSelect: function() {
			this.logEntry("onSelect");
			
			this._redactionRoles.parentObject = this;
			if (this.currentRepository){
				this._redactionRoles.setRepository(this.currentRepository);
				this._redactionPolicies.setRepository(this.currentRepository);
			}
			this.resize();
			this._redactionRoles.resize();
			this._redactionPolicies.resize();
			
			this.logExit("onSelect");
		},		
		
		_setHoverHelp: function() {
			
		},

		destroy: function() {
			this.inherited(arguments);
		},

		/**
		 * Loads the UI with the model data. Called when the user hits the Reset button.
		 */
		loadData: function(container, callback) {
			this.logEntry("loadData");
			
			this.resize();
			if (callback) {
				callback();
			}
			setTimeout(lang.hitch(this, function() {
				this._isLoaded = true;
			}), 400);
			this.logExit("loadData");
		},

		
		/**
		 * Overwritten to return if it is resetting the fields to the original values.
		 */
		isResetingFields: function() {
			return false;
		},

		/**
		 * Resizes the border container in this pane.
		 */
		resize: function(dimensions) {
//			var contentBox = domGeometry.getContentBox(this.domNode);
//			console.log("content area height: " + contentBox.h + " width: " + contentBox.w);
			
			if (dimensions){
				domGeometry.setMarginBox(this.domNode, {
					h: dimensions.h,
					w: dimensions.w
				});
			}
			
			this._redactionRoles.resize();
			this._redactionPolicies.resize();
		},		
		/**
		 * Reset button selected.
		 */
		resetData: function() {
			if (!this.isResetingFields()) {
				this.loadData();
			}
		},

		/**
		 * Called before save to load the model with the UI data.
		 */
		loadWithFieldValues: function(repositoryConfig) {
			this.logEntry("loadWithFieldValues");
		
			this.logExit("loadWithFieldValues");
		},

		/**
		 * Fired when a field is marked dirty.
		 */
		onMarkDirty: function() {
		},

		/**
		 * Determines if the save button should be enabled.
		 */
		validateData: function() {
			return true;
		},

		/**
		 * @private Field changed.
		 */
		_onFieldChange: function() {
			if (this._isLoaded && !this.isResetingFields()) {
				this.onMarkDirty();
			}
		},

		/**
		 * Sets the repository data model.
		 */
		setData: function(data) {
			this.repositoryData = data;
		}
	});

});
