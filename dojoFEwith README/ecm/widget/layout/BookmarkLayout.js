/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array",
	"dojo/_base/connect",
	"dojo/aspect",
	"dojo/dom-construct",
	"dojo/json",
	"dijit/layout/BorderContainer",
	"dijit/layout/StackContainer",
	"dijit/layout/ContentPane",
	"ecm/model/_searchUtils",
	"ecm/model/Desktop",
	"ecm/widget/LoginPane",
	"ecm/widget/Banner",
	"ecm/widget/layout/BookmarkActionsHandler",
	"ecm/widget/layout/HomePane",
	"ecm/widget/layout/MainLayout",
	"dojo/text!./templates/BookmarkLayout.html"
],

function(declare, //
lang, //
array, //
connect, //
aspect, //
domConstruct, //
dojojson, //
BorderContainer, //
StackContainer, //
ContentPane, //
utils, //
Desktop, //
LoginPane, //
Banner, //
BookmarkActionsHandler, //
HomePane, //
MainLayout, //
template) {

	/**
	 * @name ecm.widget.layout.BookmarkLayout
	 * @class Provides a desktop layout that is used to display bookmarks.
	 * @augments ecm.widget.layout.BaseLayout
	 */
	var BookmarkLayout = declare("ecm.widget.layout.BookmarkLayout", [
		MainLayout
	], {
		/** @lends ecm.widget.layout.BookmarkLayout.prototype */

		templateString: template,
		widgetsInTemplate: true,
		_docId: null,
		_bookmarkLoaded: false,

		/**
		 * Repository of the item. If not set, the initial repository from the desktop will be used.
		 * 
		 * @since 2.0.2
		 */
		repository: null,

		postCreate: function() {
			this.logEntry("postCreate");

			// Force the global and status toolbar off, we do not want to show them
			Desktop.showGlobalToolbar = false;
			Desktop.showStatusbar = false;

			this.inherited(arguments);

			// Set use the common actions handler
			var actionsHandler = new BookmarkActionsHandler();
			actionsHandler.setContentPane(this.mainPane);
			Desktop.setActionsHandler(actionsHandler);

			this.logExit("postCreate");
		},

		_onLogin: function(repository) {
			this.logEntry("_onLogin");
			this.inherited(arguments);

			this.loginPane.domNode.style.visibility = "hidden";

			var docId = Desktop.getRequestParam("docid");			
			this._docId = docId ? decodeURIComponent(docId) : null;
			var element = Desktop.getRequestParam("element");
			this._element = element ? decodeURIComponent(element) : null;
			var templateId = Desktop.getRequestParam("template_name");
			this._templateId = templateId ? decodeURIComponent(templateId) : null;
			this._version = Desktop.getRequestParam("version");
			this._vsId = Desktop.getRequestParam("vsId");
			this._embedded = Desktop.getRequestParam("embedded") == "true";
			this._autoRunSearch = Desktop.getRequestParam("autoRunSearch") == "true";
			this._autoOpenItem = Desktop.getRequestParam("autoOpenItem") == "true";
			this._hideSearchCriteria = Desktop.getRequestParam("hideSearchCriteria") == "true";
			this._homePlugin = Desktop.getRequestParam("homePlugin");
			this._openBookmark();
//d33945
			if (this.repDisconnectHandler) {
				connect.disconnect(this.repDisconnectHandler);
			}

			this.repDisconnectHandler = connect.connect(Desktop, "onLogout", lang.hitch(this, function() {
				this.logEntry("_onLogout");
				window.location.reload();
				this.logExit("_onLogout");
			}));
//exit d33945
			this.logExit("_onLogin");
		},

		_openBookmark: function() {
			var methodName = "_openBookmark";
			this.logEntry(methodName);

			if (this._embedded) {
				// Hide the banner
				this.banner.domNode.style.display = "none";
				this.borderContainer.layout();
			}

			if (this._started && !this._bookmarkOpened && this._hasRequiredParameters()) {
				this._getData();
			} else {
				this.logDebug(methodName, "Opening the bookmark is being skipped.");
			}

			this.logExit(methodName);
		},

		_hasRequiredParameters: function() {
			var repository = this.repository ? this.repository : Desktop.getDefaultRepository();

			return !!repository && (!!this._docId || repository._isP8() && !!this._vsId); // for P8, a released version is returned by default
		},

		_getData: function() {
			var methodName = "_getData";
			var repository = this.repository ? this.repository : Desktop.getDefaultRepository();
			var loginDialog = ecm.widget.dialog.LoginDialog.getLoginDialog();
			loginDialog.connectToRepository(repository, lang.hitch(this, function() {
				if (this._isSearch(repository, this._docId, this._templateId)) {
					var self = this;
					var version = this._version;
					repository.retrieveSearchTemplate(this._docId, this._vsId, version, function(item) {
						if (self.searchCriteriaJson) {
							self.logDebug(methodName, "searchCriteriaJson: " + self.searchCriteriaJson);
							try {
								var searchCriteria = dojojson.parse(self.searchCriteriaJson);
								var handle = aspect.after(item, "_applyRetrievedSearchCriteria", function() {
									handle.remove();
									try {
										utils.applyCustomCriteria(this, searchCriteria);
									} catch (e) {
										self.logError(methodName, "Failed to apply custom criteria: " + e);
									}
								});
							} catch (e) {
								self.logError(methodName, "Failed to parse searchCriteriaJson: " + e);
							}
						}
						Desktop.getActionsHandler(function(actionsHandler) {
							if (actionsHandler) {
								actionsHandler.actionOpenSearch(repository, item, null, null, null, {
									runSearchOnLoad: self._autoRunSearch || false,
									openItemOnLoad: self._autoOpenItem || false,
									hideSearchCriteria: self._hideSearchCriteria || false
								}, version || "specific");
							}
						});
					});
				} else if (this._homePlugin) {
					var homePane = null;
					array.some(HomePane.extensionPanes, lang.hitch(this, function(pane) {
						if (pane.params && pane.params.plugin && pane.params.plugin == this._homePlugin && pane.tabPaneClass)
							homePane = pane.tabPaneClass;
						return !!homePane;
					}));
					this._loadHomeContentPane(homePane);
				} else {
					var self = this;
					Desktop.getActionsHandler(lang.hitch(this, function(actionsHandler) {
						actionsHandler._bookmarkLayout = this;
						repository.retrieveItem(this._docId, function(item) {
							if ( self._element ) {
								item.celement = self._element;
							}						
							if (item.getContentClass().id == "ICMTeamspace" || item.getContentClass().id == "ClbTeamspace") {
								actionsHandler.actionOpenTeamspace(repository, item);
							} else if (item && item.isFolder && item.isFolder()) {
								actionsHandler._openFolder(repository, item);
							} else if (item && item.mimetype) {
								switch (item.mimetype) {
								case "application/x-filenet-documentpolicy":
								case "application/x-filenet-itxformtemplate":
								case "application/vnd.xfdl.design":
								case "application/x-filenet-formdata":
								case "application/vnd.xfdl":
									// Make call into function to resolve the XT service URL from the XT plugin first
									actionsHandler.actionOpenEFormBookmark(repository, item);
									break;
								case "application/x-filenet-documententrytemplate":
								case "application/x-filenet-folderentrytemplate":
								case "application/x-filenet-entrytemplate":
								case "application/x-filenet-customobjectentrytemplate":
								case "application/x-filenet-declarerecordentrytemplate":
								case "application/x-icn-documententrytemplate":
								case "application/x-icn-folderentrytemplate":
								case "application/x-icn-declarerecordentrytemplate":
									if(self.itemPropertiesJson){
										try{
											item.urlProperties = dojojson.parse(self.itemPropertiesJson);
										}catch(e){
											self.logError(methodName, "Failed to parse itemProperties JSON: " + e);
										}
									}
									actionsHandler.actionView(repository, [
										item
									]);
									break;
								case "application/x-box-web-link":
								case "application/x-filenet-external":
									actionsHandler.actionView(Desktop.getDefaultRepository(), [
										item
									], true);
									break;
								default:
									actionsHandler.actionViewViaConfig(repository, item);
									break;
								}
							} else {
								if (!item.hasContent()) {
									actionsHandler.actionEdit(repository, [
										item
									]);
								} else {
									actionsHandler.actionViewViaConfig(repository, item);
								}
							}
						}, this._templateId, this._version, this._vsId);
					}));
				}
				this._bookmarkOpened = true;
			}));
		},

		_loadHomeContentPane: function(contentPane) {
			if (!lang.isFunction(contentPane)) {
				this.logDebug(methodName, "contentPane not found");
				return;
			}
			var feature = this._getHomeFeature(this._homePlugin);
			if (!feature) {
				this.logDebug(methodName, "feature not found");
				return;
			}
			var pane = new contentPane({
				feature: feature
			});
			if (pane.domNode) {
				domConstruct.place(pane.domNode, this.mainPane.domNode);
				var handle = aspect.after(pane, "startup", function() {
					handle.remove();
					if (lang.isFunction(pane.loadContent))
						pane.loadContent();
				});
				pane.startup();
				this.mainPane.resize();
			} else {
				this.logDebug(methodName, "contentPane doesn't have a domNode");
			}
		},

		_getHomeFeature: function(plugin) {
			var feature;
			array.some(Desktop.features, function(feat) {
				return array.some(feat.secondaryPanes, function(pane) {
					if (pane.plugin == plugin)
						feature = feat;

					return !!feature;
				});
			});
			if (!feature)
				feature = Desktop.getFeatureById("favorites");

			return feature;
		},

		startup: function() {
			this.inherited(arguments);
			this._openBookmark();
		},

		_isSearch: function(repository, id, className) {
			if (!className)
				return false;

			var p8Search = repository._isP8() && (className == "StoredSearch" || className == "IcnSearch");
			var cmSearch = repository._isCM() && className == "ICMSearch";
			var odSearch = repository._isOnDemand() && id == className; // OD search and class are one and the same

			return p8Search || cmSearch || odSearch;
		}
	});

	return BookmarkLayout;
});
//@ sourceURL=BookmarkLayout.js
