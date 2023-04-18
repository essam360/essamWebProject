/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/connect",
	"dojo/dom-construct",
	"dojo/io-query",
	"ecm/LoggerMixin",
	"ecm/model/Desktop",
	"ecm/widget/layout/FavoritesPane",
	"ecm/model/UnifiedSearchTemplate",
	"ecm/model/Teamspace",
	"ecm/widget/layout/TeamspacePane",
	"ecm/widget/layout/SearchTabPane",
	"ecm/widget/viewer/ContentViewer",
	"ecm/widget/viewer/model/ViewerItem",
	"ecm/widget/dialog/EFormWindow",
	"ecm/widget/dialog/MessageDialog",
	"ecm/widget/layout/CommonActionsHandler"
],

function(declare, //
lang, //
connect, //
domConstruct, //
ioQuery, //
LoggerMixin, //
Desktop, //
FavoritesPane, //
UnifiedSearchTemplate, //
Teamspace, //
TeamspacePane, //
SearchTabPane, //
ContentViewer, //
ViewerItem, //
EFormWindow, //
MessageDialog, //
CommonActionsHandler) {

	/**
	 * @name ecm.widget.layout.BookmarkActionsHandler
	 * @class Extends the {@link CommonActionsHandler} class to provide additional handlers for actions that are related
	 *        to bookmarks.
	 * @augments ecm.widget.layout.CommonActionsHandler
	 */
	return declare("ecm.widget.layout.BookmarkActionsHandler", [
		CommonActionsHandler,
		LoggerMixin
	], {
		/** @lends ecm.widget.layout.BookmarkActionsHandler.prototype */

		_contentPane: null,

		_customFeaturePanes: null,

		/**
		 * Set the content pane.
		 * 
		 * @param contentPane
		 *            The content pane.
		 */
		setContentPane: function(contentPane) {
			this._contentPane = contentPane;
		},

		/**
		 * Returns the name of the first feature assigned to the desktop that is derived from the specified parent
		 * class. If no class is found, the method returns null.
		 * 
		 * @param parentClass
		 *            Parent class instance
		 * @param callback
		 *            Callback function.
		 * @since 2.0.3
		 */
		getFeatureFromDesktop: function(parentClass, callback) {
			if (Desktop.features) {
				this._createCustomFeatures(function(features) {
					if (features) {
						var feature = null;

						for ( var i in features) {
							if (features[i].isInstanceOf && features[i].isInstanceOf(parentClass)) {
								feature = features[i];
								break;
							}
						}

						if (lang.isFunction(callback))
							callback(feature);
					} else if (lang.isFunction(callback)) {
						callback();
					}
				});
			} else if (lang.isFunction(callback)) {
				callback();
			}
		},

		/**
		 * Creates custom feature pane widgets defined in the desktop.
		 * 
		 * @param callback
		 *            Callback function.
		 * @since 2.0.3
		 * @private
		 */
		_createCustomFeatures: function(callback) {
			if (lang.isArray(this._customFeaturePanes) && lang.isFunction(callback)) {
				callback(this._customFeaturePanes);
			} else {
				if (Desktop.features) {
					var self = this;
					var requireList = [];
					var classNames = [];
					var featureMap = {};

					for ( var i in Desktop.features) {
						if (Desktop.features[i] && Desktop.features[i].featureClass) {
							var className = Desktop.features[i].featureClass;
							requireList.push(className.split('.').join('/'));
							classNames.push(className);
							featureMap[className] = Desktop.features[i];
						}
					}

					if (requireList.length > 0) {
						this._customFeaturePanes = [];

						require(requireList, function() {
							for ( var j in classNames) {
								var cls = lang.getObject(classNames[j]);
								if (cls)
									self._customFeaturePanes.push(new cls({
										feature: featureMap[classNames[j]]
									}));
							}

							if (lang.isFunction(callback))
								callback(self._customFeaturePanes);
						});
					} else if (lang.isFunction(callback)) {
						callback();
					}
				}
			}
		},

		/**
		 * Overrides CommonActionsHandler view via config action.
		 * 
		 * @param repository
		 *            Instance of {@link ecm.model.Repository}.
		 * @param item
		 *            The selected item.
		 */
		actionViewViaConfig: function(repository, item, callback, teamspace, resultSet, parameterMap, openUseSelf) {
			var methodName = "actionViewViaConfig";
			this.logEntry(methodName);
			if (this._contentPane != null) {
				this.logDebug(methodName, "contentPane is defined");

				var viewerItem = new ViewerItem(item);
				ecm.model.desktop.getViewersForItem(item, viewerItem.explicitMatchRequired(), lang.hitch(this, function(viewers) {
					var viewer = null;
					if (viewers != null && viewers.length > 0) {
						viewer = viewers[0];
					}

					if (viewer != null) {
						if (viewer.launchInSeparateWindow) {
							if (item && !item.hasPrivilege("privViewDoc")) {

								var dialog = new MessageDialog({
									text: ecm.messages.viewer_privilege_to_view_error_explanation
								});
								dialog.show();
							} else {

								if (this._delegateToDownload(viewer, item)) {

									// Get the version from the bookmark URL.
									var version;
									var queryParameters = ioQuery.queryToObject(dojo.doc.location.search.substr(dojo.doc.location.search[0] === "?" ? 1 : 0));
									if (queryParameters["version"] != null) {
										version = queryParameters["version"];
									} else {
										version = "specific";
									}
									
									// Pass the version to the download action.
									this.actionDownload(repository, [
										item
									], undefined, undefined, undefined, undefined, undefined, version);
								} else {
									window.location = viewer.getLaunchUrl(item);
								}
							}
						} else {
							var tabStyle = "margin: 0px; padding: 0px; width: 100%; height: 100%;";
							this._contentViewer = new ContentViewer({
								style: tabStyle,
								isBookmark: true,
								id: "contentViewer"
							});

							//this._contentPane.set("content", this._contentViewer);
							domConstruct.place(this._contentViewer.domNode, this._contentPane.domNode);
							this._contentViewer.startup();

							if (item != null) {
								// By the time we get here, we've already dealt with the version/vsId parameters.
								// It is taken care of by an earlier retrieval that is done in BookmarkLayout.js.
								// So just get the exact doc ID.
								if (item.vsId) {
									delete item.vsId;
								}
								if (item && !item.hasPrivilege("privViewDoc")) {

									var dialog = new MessageDialog({
										text: ecm.messages.viewer_privilege_to_view_error_explanation
									});
									dialog.show();
								} else {
									this._contentViewer.open(item);
								}
							}
						}
					} else {
						var handled = this._actionViewInternal(repository, item, callback, teamspace, resultSet, parameterMap, openUseSelf);
						if (!handled) {
							handled = this._actionViewNoViewer(item);
						}
					}
				}));
			} else {
				this.logDebug(methodName, "contentPane is NULL");
			}
			this.logExit(methodName);
		},

		/**
		 * @private Opens the item in the pane.
		 * @param repository
		 *            Instance of {@link ecm.model.Repository}.
		 * @param item
		 *            The selected item.
		 */
		_openFolder: function(repository, item) {
			var methodName = "_openFolder";
			this.logEntry(methodName);
			if (this._contentPane != null) {
				this.logDebug(methodName, "contentPane is defined");
				this._contentPane.set("content", "");

				this.getFeatureFromDesktop(FavoritesPane, lang.hitch(this, function(pane) {
					if (!pane) {
						pane = new FavoritesPane({
							rootLabel: ecm.messages.links,
							feature: Desktop.getFeatureById("favorites")
						});
					}
					pane.bookmarkFolder = item;
					domConstruct.place(pane.domNode, this._contentPane.domNode);
					pane.startup();

					// Propagate teamspace context if the folder is in a teamspace
					item.retrieveTeamspace(lang.hitch(this, function(teamspace) {
						item._teamspaceId = teamspace ? teamspace.id : null;
						pane.loadContent([
							{
								id: item.id,
								name: item.name,
								repositoryId: repository.id,
								teamspaceId: item._teamspaceId,
								template: item.getContentClass().id,
								privileges: item.privileges,
								rowProperties: {
									_value: item,
									_type: "itemProperties"
								},
								attributes: {
									"{NAME}": [
										item.name
									]
								},
								mimetype: (item.mimetype || "folder")
							}
						]);
						this._contentPane.resize();

						var _pane = pane;
						var _item = item;
					}));
				}));

			} else {
				this.logDebug(methodName, "contentPane is NULL");
			}
			this.logExit(methodName);
		},

		/**
		 * Overrides CommonActionsHandler open teamspace action.
		 * 
		 * @param repository
		 *            Instance of {@link ecm.model.Repository}.
		 * @param item
		 *            The selected item.
		 */
		actionOpenTeamspace: function(repository, item) {
			var methodName = "actionOpenTeamspace";
			this.logEntry(methodName);
			var _this = this;
			if (this._contentPane != null) {
				this.logDebug(methodName, "contentPane is defined");
				repository.retrieveTeamspaceById(item.id, Teamspace.INSTANCE, function(teamspace) {
					teamspace.initFromJson();
					_this._contentPane.set("content", "");

					if (teamspace.state == "offline" && !teamspace.currentUserIsOwner) {
						if (this.messageDialog) {
							this.messageDialog.destroy();
						}
						_this.messageDialog = new MessageDialog({
							text: ecm.messages.offlineTeamspace_open_msg
						});
						_this.messageDialog.show();
					} else {

						_this.getFeatureFromDesktop(TeamspacePane, function(pane) {
							if (!pane) {
								pane = new TeamspacePane({
									teamspace: teamspace
								});
							}

							domConstruct.place(pane.domNode, _this._contentPane.domNode);
							pane.startup();
							pane.setParams({
								teamspace: teamspace
							});

							_this._contentPane.resize();
						});
					}
				});
			} else {
				this.logDebug(methodName, "contentPane is NULL");
			}
			this.logExit(methodName);
		},

		/**
		 * Overrides <code>ecm.widget.layout.CommonActionsHandler.actionEditSearch</code>.
		 */
		actionEditSearch: function(repository, items, callback, teamspace, resultSet, parameterMap) {
			var methodName = "actionEditSearch";
			this.logEntry(methodName);
			if (!parameterMap)
				parameterMap = {};
			if (!parameterMap.widget)
				parameterMap.widget = this;
			this.inherited(arguments);
			this.logExit(methodName);
		},

		/**
		 * Overrides CommonActionsHandler open search action.
		 * 
		 * @param repository
		 *            Instance of {@link ecm.model.Repository}.
		 * @param item
		 *            The selected item.
		 */
		actionOpenSearch: function(repository, items, callback, teamspace, resultSet, parameterMap, version) {
			var methodName = "actionOpenSearch";
			this.logEntry(methodName);
			if (this._contentPane != null) {
				this.logDebug(methodName, "contentPane is defined");
				var pane = this._contentPane.searchTabPane;
				if (!pane) {
					this._contentPane.set("content", "");
					var pane = new SearchTabPane();
					pane.selected = true;
					pane.setRepository(repository);
					domConstruct.place(pane.domNode, this._contentPane.domNode);
					pane.startup();
					pane.setParams({
						tabType: "search",
						repository: repository,
						openNewTab: false,
						selected: true,
						closable: true,
						version: version,
						runSearchOnLoad: parameterMap ? parameterMap.runSearchOnLoad : false,
						openItemOnLoad: parameterMap ? parameterMap.openItemOnLoad : false,
						hideSearchCriteria: parameterMap ? parameterMap.hideSearchCriteria : false,
						"searchTemplate": items instanceof Array && items.length > 0 ? items[0] : items
					});
					this._contentPane.searchTabPane = pane;
					this._contentPane.resize();
				} else {
					this.inherited(arguments);
				}
			} else {
				this.logDebug(methodName, "contentPane is NULL");
			}
			this.logExit(methodName);
		},

		/**
		 * Overrides <code>ecm.widget.layout.CommonActionsHandler.actionOpenSearchNewTab</code>.
		 */
		actionOpenSearchNewTab: function(repository, items, callback, teamspace, resultSet, parameterMap) {
			var methodName = "actionOpenSearchNewTab";
			this.logEntry(methodName);
			if (!parameterMap)
				parameterMap = {};
			if (!parameterMap.widget)
				parameterMap.widget = this;
			this.inherited(arguments);
			this.logExit(methodName);
		},

		/**
		 * Help function to open the EForm object using the internal viewer framework logic..
		 * 
		 * @param repository
		 *            A {@link ecm.model.Repository} object
		 * @param items
		 *            A {@link ecm.model.ContentItem} object, only open the eform.
		 */
		actionOpenEFormBookmark: function(repository, contentItem) {
			this._actionViewInternal(repository, contentItem, null, null, null, null, true);
		},

		/**
		 * Opens a browser popup window and renders the selected eform object in that window.
		 * 
		 * @param repository
		 *            A {@link ecm.model.Repository} object
		 * @param items
		 *            An array of {@link ecm.model.ContentItem} objects, only opens the first item.
		 * @param callback
		 *            A callback function.
		 * @param servicesUrl
		 *            A String holding a services URL to use when opening the eform object.
		 * @param openUseSelf
		 *            A Boolean indicating whether the window should be displayed in the same window (true) or a popup
		 *            (false)
		 */
		actionOpenEForm: function(repository, items, callback, servicesUrl, openUseSelf) {
			var methodName = "actionOpenEForm";
			this.logEntry(methodName);
			var contentItem = items[0];
			if (servicesUrl != null) {
				ecm.widget.dialog.eformWindow.servicesUrl = servicesUrl;
				if (openUseSelf == true) {
					var eformUrl = ecm.widget.dialog.eformWindow.getEFormUrl(contentItem, null);
					window.location = eformUrl;
				} else {
					ecm.widget.dialog.eformWindow.open(contentItem, callback);
				}
			}
			this.logExit(methodName);
		},

		/**
		 * @private
		 */
		onEditItem: function(item, data) {
			var tabType = item.isInstanceOf && item.isInstanceOf(ecm.model.UnifiedSearchTemplate) ? "unifiedsearchbuilder" : "searchbuilder";
			this._contentPane.searchTabPane.setParams({
				tabType: tabType,
				repository: item.repository,
				selected: true,
				closable: true,
				searchTemplate: item
			});
		},

		/**
		 * @private
		 */
		onOpenItem: function(item, data) {
			this._contentPane.searchTabPane.setParams({
				tabType: "search",
				repository: item.repository,
				selected: true,
				closable: true,
				openNewTab: data.openNewTab,
				version: data.version,
				searchTemplate: item
			});
		}
	});
});
