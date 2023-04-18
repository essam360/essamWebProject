/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array",
	"dojo/dom-class",
	"dojo/dom-style",
	"dojo/dom-geometry",
	"dijit/Tooltip",
	"ecm/widget/listView/modules/_View",
	"dojo/_base/connect",
	"dojo/dom-construct",
	"dijit/layout/ContentPane",
	"dijit/form/ToggleButton",
	"../Filmstrip",
	"ecm/LoggerMixin",
	"ecm/model/Desktop",
	"ecm/widget/viewer/ContentViewerPane"
], //
function(declare, lang, array, domClass, domStyle, domGeom, Tooltip, _View, connect, domConstruct, ContentPane, ToggleButton, Filmstrip, LoggerMixin, Desktop, ContentViewerPane) {

	/**
	 * @name ecm.widget.listView.modules.ViewFilmStrip
	 * @class This content list module provides filmstrip view capability.
	 * @augments ecm.widget.listView.modules._View
	 */

	return declare([
		_View,
		LoggerMixin
	], {
		/** @lends ecm.widget.listView.modules.ViewFilmStrip.prototype */

		name: 'viewFilmStrip',
		_docViewerPane: null,
		_queuedItem: null,

		/**
		 * See GridX API documentation for details.
		 */
		getAPIPath: function() {
			return {
				viewFilmStrip: this
			};
		},

		/**
		 * Creates the view button and listens to events.
		 */
		preload: function() {
			var t = this, cl = t.contentList;
			t.initialize();
			t._viewButton = t._createViewButton("viewFilmstrip", t.getCurrentViewName() == t.name, ecm.messages.filmstrip_view_button_tooltip, ecm.messages.filmstrip_view_button, false);
			domClass.add(t._viewButton.domNode, "filmstripViewButton");
			if (t.showViewSelectorButton) {
				domConstruct.place(t._viewButton.domNode, t.getViewNode());
			}
			if (t.name == t.getCurrentViewName()) {
				t._filmStripViewNeedsSelection = true;
			}

			t.connect(cl, "onSetResultSet", lang.hitch(t, function() {
				t._cleanup();
			}));
			t.connect(cl, "onModulesLoaded", lang.hitch(t, function() {
				if (t._filmStripViewNeedsSelection != undefined && t._filmStripViewNeedsSelection == true) {
					t._filmStripViewNeedsSelection = null;
					domStyle.set(cl.grid.domNode, "display", "none");
					t.onViewButtonClicked(t.name, "");

				} else if (t.getCurrentViewName() == t.name) {
					domStyle.set(cl.grid.domNode, "display", "none");
					t._cleanup();
					t._createFilmstrip();
					t._openContentView(t._getItemToDisplay());
					cl.resize();
				}
			}));
			t.connect(cl, "onRowSelectionChange", lang.hitch(t, function(items) {
				if (t._filmstrip) {
					var item = t._getItemToDisplay(items);
					if (item) {
						t._filmstrip.selectItems([
							item
						]);
					}
					t._openContentView(item);
				}
			}));
			t.aspect(cl, "_createGrid", "_cleanupGridConnections", null, "before");
		},

		/**
		 * Destroy.
		 */
		destroy: function() {
			var t = this;
			if (t._viewButton) {
				t._viewButton.destroyRecursive();
				t._viewButton = null;
			}
			t._cleanup();
			t.inherited(arguments);
		},

		/**
		 * @private Returns the item to display in the viewer. Looks through all the selected items and returns the item
		 *          with the smallest index.
		 */
		_getItemToDisplay: function(items) {
			var t = this, cl = t.contentList, g = cl.grid;
			if (!items) {
				items = cl.getSelectedItems();
			}
			var firstItem = null;
			var lastIndex = -1;
			for ( var i in items) {
				var item = items[i];
				var id = g.store.getIdentity(item);
				var index = g.model.idToIndex(id);
				if (index >= 0) {
					if (lastIndex == -1 || index < lastIndex) {
						firstItem = item;
						lastIndex = index;
					}
				}
			}
			return firstItem;
		},

		/**
		 * @private Returns boolean indicating if can drag a filmstrip item.
		 */
		_isDraggingAllowed: function() {
			var t = this, cl = t.contentList;
			var dndModule = cl.getGridModule("dnd");
			if (dndModule && dndModule.row) {
				return dndModule.row.isDraggingAllowed ? dndModule.row.isDraggingAllowed() : true;
			} else {
				return false;
			}
		},

		/**
		 * @private Returns boolean indicating if when drag a filmstrip item, it should be "copy" mode.
		 */
		_isDragCopy: function() {
			var t = this, cl = t.contentList;
			var dndModule = cl.getGridModule("dnd");
			if (dndModule && dndModule.row) {
				return dndModule.row.isDragCopy ? dndModule.row.isDragCopy() : true;
			} else {
				return false;
			}
		},

		/**
		 * @private Creates the filmstrip and adds the resultSet to it.
		 */
		_createFilmstrip: function() {
			var t = this, cl = t.contentList, g = cl.grid;
			var isDraggingAllowed = t._isDraggingAllowed();
			var isDragCopy = t._isDraggingAllowed() && t._isDragCopy();
			t._filmstrip = new Filmstrip({
				isDraggingAllowed: isDraggingAllowed,
				isDragCopy: isDragCopy,
				emptyInfo: g.body.emptyInfo
			});
			t._filmstripConnections = [];
			t._filmstripConnections.push(t.connect(t._filmstrip, "onItemSelected", "_filmstripEntryClick"));
			t._filmstripConnections.push(t.connect(t._filmstrip, "onItemContextMenu", "_filmstripEntryContextMenu"));
			t._filmstripConnections.push(t.connect(t._filmstrip, "onItemDblClick", "_filmstripEntryDblClick"));
			t._filmstripConnections.push(t.connect(t._filmstrip.domNode, "onscroll", "_doScroll"));
			domConstruct.place(t._filmstrip.domNode, cl.belowGridArea.domNode, "only");

			t._gridConnections = [];
			t._gridConnections.push(t.connect(g.store, "onSet", "_onSetGridItem"));
			t._gridConnections.push(t.connect(g.store, "deleteItem", "_onDeleteGridItem"));

			if (g.model._exts && g.model._exts.clientFilter) {
				t._gridConnections.push(t.connect(g.model, "onSizeChange", "_onModelSizeChange"));
			} else {
				t._gridConnections.push(t.connect(g.body, "onRender", "_onRenderBody"));
			}
			t.onCreateFilmstrip(t._filmstrip);

			t._filmstrip.render(cl.getResultSet().items);
			if (cl.grid.model._exts && cl.grid.model._exts.clientFilter && cl.grid.model._exts.clientFilter._ids) {
				t._filmstrip.filter(cl.grid.model._exts.clientFilter._ids);
			}

			var item = t._getItemToDisplay(cl.getSelectedItems());
			if (item) {
				g.select.row.clear(); // This view is single selection only; therefore, we clear the selection before selecting the grid item.
				var rowId = g.store.getIdentity(item);
				g.select.row.selectById(rowId);
			}
		},

		/**
		 * @private Destroy the viewers and filmstrip.
		 */
		_cleanup: function() {
			var t = this;
			if (t._viewerArea) {
				domConstruct.destroy(t._viewerArea);
				t._viewerArea = null;
			}
			if (t._contentViewer) {
				domConstruct.destroy(t._contentViewer.domNode);
				t._contentViewer = null;
			}

			t._cleanupGridConnections();

			if (t._docViewerPane != null) {
				domConstruct.destroy(t._docViewerPane.domNode);
				t._docViewerPane = null;
			}

			if (t._filmstrip) {
				if (t._filmstripConnections) {
					for ( var i in t._filmstripConnections) {
						t.disconnect(t._filmstripConnections[i]);
					}
				}
				t._filmstripConnections = null;

				t.onDestroyFilmstrip(t._filmstrip);
				t._filmstrip.destroyRecursive();
				t._filmstrip = null;
			}
		},

		/**
		 * @private Cleans up grid connections.
		 */
		_cleanupGridConnections: function() {
			var t = this;
			if (t._gridConnections) {
				for ( var i in t._gridConnections) {
					t.disconnect(t._gridConnections[i]);
				}
			}
			t._gridConnections = null;
		},

		/**
		 * @private Handles scrolling.
		 */
		_doScroll: function() {
			var t = this, cl = t.contentList, g = cl.grid;
			if (cl.getResultSet().hasContinuation()) {
				if (t._filmstrip.domNode.scrollLeft + t._filmstrip.domNode.offsetWidth >= t._filmstrip.domNode.scrollWidth) {
					domClass.add(document.body, "ecmWait");
					var request = ecm.model.Request({
						progressMessage: ecm.messages.progress_message_general,
						backgroundRequest: false
					});
					ecm.model.desktop.onRequestStarted(request);
					setTimeout(lang.hitch(t, function() {
						t._startRenderRows = true;
						g.body.renderRows(cl.getResultSet().items.length, 2, "bottom"); // This will cause a call to resultSet retrieveNextPage and then this._onRenderBody
						ecm.model.desktop.onRequestCompleted(request);
						domClass.remove(document.body, "ecmWait");
					}), 0);
				}
			}
		},

		/**
		 * @private This method listens to model size change. Filter the filmstrip or clear the filter on the filmstrip.
		 */
		_onModelSizeChange: function(x) {
			var t = this, cl = t.contentList;
			cl.grid.model.when({}).then(lang.hitch(t, function() {
				if (t._startRenderRows == undefined || !t._startRenderRows) {
					if (cl.grid.model._exts.clientFilter._ids) {
						t._filmstrip.filter(cl.grid.model._exts.clientFilter._ids);
					} else {
						t._filmstrip.clearFilter();
					}
				} else {
					t._filmstrip.render(cl.getResultSet().items);
					t._startRenderRows = false;

				}
			}));
		},

		/**
		 * @private This method is called after a next page of data is retrieved.
		 */
		_onRenderBody: function(start, count) {
			var t = this, cl = t.contentList;
			if (t._filmstrip && t._startRenderRows != undefined && t._startRenderRows) {
				t._filmstrip.render(cl.getResultSet().items);
			}
			t._startRenderRows = false;
		},

		/**
		 * @private Deletes the item in the filmstrip.
		 */
		_onDeleteGridItem: function(item) {
			var t = this;
			if (t._filmstrip) {
				t._filmstrip.deleteItem(item);
			}
		},

		/**
		 * @private Updates the item in the filmstrip and in the viewer.
		 */
		_onSetGridItem: function(item) {
			var t = this;
			if (t._filmstrip) {
				t._filmstrip.update(item);
				if (t._item && t._item.id == item.id) {
					t._openContentView(item);
				}
			}
		},

		/**
		 * Fires when the filmstrip is created.
		 * 
		 * @param filmstrip
		 *            The filmstrip {@link ecm.model.listView.Filmstrip} that was created.
		 */
		onCreateFilmstrip: function(filmstrip) {
		},

		/**
		 * Fires when the filmstrip is destroyed.
		 * 
		 * @param filmstrip
		 *            The filmstrip {@link ecm.model.listView.Filmstrip} that will be destroyed.
		 */
		onDestroyFilmstrip: function(filmstrip) {
		},

		/**
		 * @private Called before changing the view to allow the detail view to save the sort data.
		 */
		_beforeChangeView: function(buttonViewName) {
			var t = this, cl = t.contentList, gridArea = cl.gridArea, bottomArea = cl.belowGridArea, g = cl.grid;
			if (buttonViewName != t.name) {
				domStyle.set(g.domNode, "display", "block");
				domStyle.set(bottomArea.domNode, "display", "none");
				domClass.remove(gridArea.domNode, "filmstripView");
				t._cleanup();
			}
		},

		/**
		 * Handles a click event when a view button is clicked.
		 * 
		 * @param buttonViewName
		 *            Name of the view button clicked.
		 * @param currentViewName
		 *            Name of the current view button.
		 */
		onViewButtonClicked: function(buttonViewName, currentViewName) {
			var t = this, cl = t.contentList, gridArea = cl.gridArea, bottomArea = cl.belowGridArea, g = cl.grid;
			if (buttonViewName == t.name && currentViewName != t.name) {
				domClass.add(gridArea.domNode, "filmstripView");
				if (!t._filmstrip) {
					t._createFilmstrip();
				}
				var item = t._getItemToDisplay();

				t._openContentView(item);
				t._setShowPreview(false);
				domStyle.set(g.domNode, "display", "none");
				domStyle.set(bottomArea.domNode, "display", "block");
				cl.resize();

				t.setCurrentView(t.name, t._getStructure(), t._viewButton);

				if (item) {
					setTimeout(lang.hitch(this, function() {
						this._filmstrip.scrollToItem(item);
					}, 100));
				}
			} else if (buttonViewName != t.name) {
				domClass.remove(gridArea.domNode, "filmstripView");
				t._viewButton.set("checked", false);
			} else {
				t._viewButton.set("checked", true);
			}
		},

		/**
		 * @private Handle double click of the filmstrip entry.
		 */
		_filmstripEntryDblClick: function(entry) {
			var t = this, cl = t.contentList;
			var item = entry.get("item");
			var rowContextMenu = cl.getGridModule("rowContextMenu");
			if (item && rowContextMenu && rowContextMenu.performDefaultActionForItem) {
				rowContextMenu.performDefaultActionForItem(item);
			}
		},

		/**
		 * @private Handles context menu for the filmstrip entry.
		 */
		_filmstripEntryContextMenu: function(entry, evt) {
			var t = this, cl = t.contentList, g = cl.grid;
			var item = entry.get("item");
			var rowContextMenu = cl.getGridModule("rowContextMenu");
			if (item && rowContextMenu && rowContextMenu._showContextMenu) {
				var id = g.store.getIdentity(item);
				var index = g.model.idToIndex(id);
				if (index > -1) {
					evt.rowIndex = index;
					rowContextMenu._showContextMenu(evt);
				}
			}
		},

		/**
		 * @private Handles a click on an entry in the filmstrip.
		 * @param entry
		 *            Handle to the {@link ecm.widget.listView._FilmstripEntry} object selected by the user.
		 */
		_filmstripEntryClick: function(entry) {
			var t = this, cl = t.contentList, g = cl.grid;
			var item = entry.get("item");
			g.select.row.clear(); // This view is single selection only; therefore, we clear the selection before selecting the grid item.
			var rowId = g.store.getIdentity(item);
			g.select.row.selectById(rowId);
		},

		/**
		 * @private Open the embedded viewer.
		 * @param viewer
		 *            Handle to the {@link ecm.widget.viewer.Viewer} object.
		 * @param item
		 *            Handle to the {@link ecm.model.Item} object.
		 */
		_openContentView: function(item) {
			var methodName = "_openContentView";
			if (!this._contentViewer || !this._contentViewer.isLoading()) {
				this._queuedItem = null;
				var t = this;
				t._item = item;
				if (item) {
					if (item.isFolder && item.isFolder()) {
						if (item.item) {
							item = item.item;
						}
						if (item.isExternal) {
							t._createViewMimeIconArea(item, "ftFolderSharedIconLarge");
						} else if (item.hasCollaborations) {
							t._createViewMimeIconArea(item, "ftFolderCollaborationIconLarge");
						} else {
							t._createViewMimeIconArea(item, "ftFolderLarge");
						}
					} else {
						var mimeClass = item.getMimeClass();
						if (mimeClass == "ftEntryTemplate" || mimeClass == "ftFormTemplate" || mimeClass == "ftCustomObjectEntryTemplate" || mimeClass == "ftWorkflow" || mimeClass == "ftTracker" || mimeClass == "ftWorkItem" || mimeClass == "ftPolicyDocument" || mimeClass == "ftPolicyWorkflow" || mimeClass == "ftFormData") {
							t._createViewMimeIconArea(item, "ftDefaultLarge");
						} else if (item.isDocumentEntryTemplate() || item.isFolderEntryTemplate() || item.isDeclareRecordEntryTemplate() || mimeClass == "ftDocumentEntryTemplate" || mimeClass == "ftFolderEntryTemplate" || mimeClass == "ftIcnDocumentEntryTemplate" || mimeClass == "ftIcnFolderEntryTemplate" || mimeClass == "ftDeclareRecordEntryTemplate" || mimeClass == "ftAfp" || item.mimetype == "application/line" || mimeClass == "ftSearchStored" || mimeClass == "ftSearchTemplate" || mimeClass == "ftUnifiedSearch" || mimeClass == "ftNoContent" || mimeClass == "ftExternalFile" || mimeClass == "ftAudio" || mimeClass == "ftVideo" || mimeClass == "ftCompressed" || mimeClass == "ecmTeamspaceIcon" || t._isGoogleDocThatIsNotViewable(item)) {
							t._createViewMimeIconArea(item, mimeClass + "Large");
						} else {
							t._showItemInViewer(item);
						}
					}
				} else {
					t._createViewMimeIconArea();
				}
			} else {
				this.logDebug(methodName, "Item is alreaady loading, wait for it to complete.");
				if (this._isDifferentItem(item)) {
					this._queuedItem = item;
				} else {
					this._queuedItem = null; // If the last requested item is a match to the current, clear the queued item.
				}
			}
		},

		_isGoogleDocThatIsNotViewable: function(item) {
			return (item.mimetype == "application/vnd.google-apps.document" || item.mimetype == "application/vnd.google-apps.spreadsheet") && (!item.repository || !item.repository._isBox());
		},

		_isDifferentItem: function(item) {
			var isDifferent = true;

			if (this._item && this._item.getContentUrl && item && item.getContentUrl) {
				// If the items are ContentItems, compare content URLs for deeper comparison.  
				// This also assumes that the content URL is entirely determinant of the actual content.
				isDifferent = this._item.getContentUrl() != item.getContentUrl();
			} else if (this._item && item) {
				isDifferent - this._item.id != item.id;
			}

			return isDifferent;
		},

		_resolveItem: function(item, callback) {
			if (item.isInstanceOf && item.isInstanceOf(ecm.model.Favorite)) {
				if (item.item) {
					callback(item.item);
				} else {
					item.retrieveFavorite(lang.hitch(this, function() {
						callback(item.item);
					}));
				}
			} else {
				callback(item);
			}
		},

		/**
		 * @private Shows the item in the viewer.
		 */
		_showItemInViewer: function(item) {
			var t = this, cl = t.contentList, gridArea = cl.gridArea;
			if (t._viewerArea) {
				domStyle.set(t._viewerArea, "display", "none");
			}

			this._resolveItem(item, lang.hitch(this, function(item) {
				Desktop.getPreviewersForItem(item, false, lang.hitch(this, function(viewers) {
					var defaultPreviewDef = Desktop.getViewer("htmlConversion");
					var viewerDef = viewers != null && viewers.length > 0 ? viewers[0] : defaultPreviewDef;
					if (viewerDef) {
						if (this._contentViewer && this._contentViewer.viewerDef == viewerDef) {
							this._setDocViewerPane();
							domStyle.set(this._contentViewer.domNode, "display", "block");
							this._contentViewer.closeItem();
							this._setContentViewerItem(item);
						} else {
							this._loadViewer(viewerDef, item);
						}
					}
				}));
			}));
		},

		_fallbackPreviewer: function() {
			if (!this._documentLoaded()) {
				var methodName = "_fallbackPreviewer";
				var defaultPreviewDef = Desktop.getViewer("htmlConversion");
				if (this._item && this._contentViewer) {
					var item = this._item;
					var viewerDef = this._contentViewer.viewerDef;
					Desktop.getPreviewersForItem(item, false, lang.hitch(this, function(viewers) {
						if (viewers != null) {
							var found = -1;
							for (var n = 0; n < viewers.length && found == -1; n++) {
								if (viewerDef == viewers[n]) {
									found = n;
								}
							}

							if (found != -1) {
								if (found + 1 < viewers.length) {
									viewerDef = viewers[found + 1];
									this._loadViewer(viewerDef, item);
								}
							}
						}
					}));
				}
			}
		},

		_documentLoaded: function() {
			var found = (this._queuedItem != null);
			if (found) {
				setTimeout(lang.hitch(this, function() {
					this._openContentView(this._queuedItem);
				}), 1);
			}

			return found;
		},

		_setDocViewerPane: function() {
			var gridArea = this.contentList.gridArea;

			if (this._docViewerPane == null) {
				this._docViewerPane = new ContentPane();
				domConstruct.place(this._docViewerPane.domNode, gridArea.domNode, "last");
				domStyle.set(this._docViewerPane.domNode, "display", "block");
				domStyle.set(this._docViewerPane.domNode, "width", "100%");
				domStyle.set(this._docViewerPane.domNode, "height", "100%");
			} else {
				// put it back if it has been removed.
				var length = gridArea.domNode.children.length;
				if (length == 0 || this._docViewerPane.domNode != gridArea.domNode.children[length - 1]) {
					domConstruct.place(this._docViewerPane.domNode, gridArea.domNode, "last");
				}
			}
		},

		_loadViewer: function(viewerDef, item) {
			this._setDocViewerPane();

			if (this._contentViewer) {
				this._contentViewer.closeItem();
				this._contentViewer.destroyRecursive(true);
				this._contentViewer = null;
			}

			var cls = Desktop.getLoadedViewerClass(viewerDef);
			this._contentViewer = new cls({
				viewerDef: viewerDef,
				preview: true
			});

			connect.connect(this._contentViewer, "onFallback", this, "_fallbackPreviewer");
			connect.connect(this._contentViewer, "onDocumentLoaded", this, "_documentLoaded");
			domConstruct.place(this._contentViewer.domNode, this._docViewerPane.domNode, "only");
			this._setContentViewerItem(item);
		},

		/**
		 * @private Set the item in the content viewer.
		 */
		_setContentViewerItem: function(item) {
			var t = this;
			t._contentViewer.setItem(item);
			t._contentViewer.showItem();
			t._contentViewer.resize();
		},

		/**
		 * @private Adds a mime-specific image for the selected item, because it cannot be opened by the viewer.
		 * @param item
		 *            Handle to the {@link ecm.model.Item} object to view.
		 * @param className
		 *            Style class to use for the image tag.
		 */
		_createViewMimeIconArea: function(item, className) {
			var t = this, cl = t.contentList, gridArea = cl.gridArea;
			if (!t._viewerArea) {
				t._viewerArea = domConstruct.create("div", {
					'class': "viewerArea"
				});
				domConstruct.place(t._viewerArea, gridArea.domNode, "last");
			}

			if (t._contentViewer) {
				domStyle.set(t._contentViewer.domNode, "display", "none");
			}

			domConstruct.empty(t._viewerArea);
			domStyle.set(t._viewerArea, "display", "block");

			if (item) {
				var div = domConstruct.create("div", {
					'class': "viewerMimeIconArea"
				});
				var img = domConstruct.create("img", {
					'class': className,
					alt: item.mimetype == "folder" ? ecm.messages.folders_filed_in_folder_col_hdr : item.mimetype,
					title: item.mimetype == "folder" ? ecm.messages.folders_filed_in_folder_col_hdr : item.mimetype,
					src: Desktop.getServicesUrl() + "/ecm/widget/resources/images/spacer.gif"
				}, div);
				img.onclick = lang.hitch(t, function(imgx, im) {
					cl._performDefaultActionForRowId(cl.getSelectedItems()[0].id);
				});
				domConstruct.place(domConstruct.create("br"), div, "last");
				domConstruct.place(document.createTextNode(cl.grid.enforceTextDirWithUcc(0, item.name)), div, "last");
				domConstruct.place(div, t._viewerArea, "only");
			} else {
				var div = domConstruct.create("div", {
					'class': "viewerMimeIconArea empty"
				});
				domConstruct.place(domConstruct.create("br"), div, "last");
				domConstruct.place(document.createTextNode(ecm.messages.no_item_selected), div, "last");
				domConstruct.place(div, t._viewerArea, "only");
			}

			this._documentLoaded();
		}
	});
});
