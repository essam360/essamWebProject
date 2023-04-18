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
	"dojox/html/entities",
	"idx/html",
	"../../../MessagesMixin",
	"../../../model/_itemUtils",
	"../../../model/_ModelObject",
	"../../../model/ContentItem"
], function(declare, lang, array, has, entities, idxHtml, MessagesMixin, itemUtils, _ModelObject, ContentItem) {

	/**
	 * @name ecm.widget.viewer.model.ViewerItem
	 * @class Represents a viewable item from the repository that is loaded into the viewer framework. This class
	 *        provides information about the viewer items that is used by the ContentViewer widget and the
	 *        ContentViewerPane widget.
	 * @augments ecm.model.Item
	 */
	var ViewerItem = declare("ecm.widget.viewer.model.ViewerItem", [
		_ModelObject,
		MessagesMixin
	], {
		/** @lends ecm.widget.viewer.model.ViewerItem.prototype */

		_viewers: null,
		_viewerClasses: null,
		item: null,
		repository: null,
		_nextItemIdx: null,
		_prevItemIdx: null,

		constructor: function(item) {
			var methodName = "constructor";
			this.logEntry(methodName, "item: " + item);
			this.item = item;
			this.id = item.id;
			this.repository = this.item.repository;
			this._item = item; // TODO:  Remove references to _item.
			this.logExit(methodName);
		},

		/**
		 * @deprecated As of 2.0.2. Accessors are being replaced with accessing public properties directly. Use
		 *             viewerItem.item.id.
		 */
		getId: function() {
			return this.item.id;
		},

		/**
		 * Returns the first matching viewer that maps to this item, from the current viewer map.
		 * 
		 * @param preview
		 *            Setting to true will return the matching preview viewer. If no preview mappings have been
		 *            specified, the HTML Conversion Viewer is returned. This parameter is optional and defaults to
		 *            false if not specified.
		 * @param forceExplicitMatch
		 *            Setting to true will return the first matching viewer that matches explicitly to the mime type of
		 *            this item, excluding any viewers mapped via wildcard (match all MIME types). Default, is the
		 *            boolean value returned from {@link ecm.widget.viewer.model.ViewerItem#explicitMatchRequired}.
		 * @param callback
		 *            Required to use getViewer with the asynchronous loader.
		 */
		getViewer: function(preview, forceExplicitMatch, callback) {
			var methodName = "getViewer";
			this.logEntry(methodName);

			var viewer = null;
			if (callback && lang.isFunction(callback)) {
				this.getViewers(preview, forceExplicitMatch, lang.hitch(this, function(viewers) {
					if (viewers.length > 0) {
						viewer = viewers[0];
						this.logDebug(methodName, "Returning viewer: " + viewer.label + ", for item mimetype: " + this.item.mimetype + ", repository type: " + this.item.repository.type);
					}

					callback(viewer);
				}));
			} else {
				var viewers = this.getViewers(preview, forceExplicitMatch);
				if (viewers.length > 0) {
					viewer = viewers[0];
					this.logDebug(methodName, "Returning viewer: " + viewer.label + ", for item mimetype: " + this.item.mimetype + ", repository type: " + this.item.repository.type);
				}
			}

			this.logExit(methodName);
			return viewer;
		},

		/**
		 * Gets the next fallback viewer in the list after the specified viewer.
		 * 
		 * @param viewer
		 *            The current viewer to get the fallback for
		 * @param callback
		 *            Required to use getFallbackViewer with the asynchronous loader.
		 */
		getFallbackViewer: function(viewer, callback) {
			var methodName = "getFallbackViewer";
			this.logEntry(methodName);

			var nextViewer = null;

			if (callback && lang.isFunction(callback)) {
				ecm.model.desktop.getViewersForItem(this.item, this.explicitMatchRequired(), lang.hitch(this, function(viewers) {
					nextViewer = this._getNextViewer(viewer, viewers);
					callback(nextViewer);
				}));
			} else {
				var viewers = ecm.model.desktop.getViewersForItem(this.item, this.explicitMatchRequired());
				nextViewer = this._getNextViewer(viewer, viewers)
			}

			this.logExit(methodName);
			return nextViewer;
		},

		/**
		 * Gets the next fallback preview viewer in the list after the specified viewer.
		 * 
		 * @param viewer
		 *            The current viewer to get the fallback for
		 * @param callback
		 *            Required to use getFallbackViewer with the asynchronous loader.
		 */
		getFallbackPreviewer: function(viewer, callback) {
			var methodName = "getFallbackPreviewer";
			this.logEntry(methodName);

			var nextViewer = null;

			if (callback && lang.isFunction(callback)) {
				ecm.model.desktop.getPreviewersForItem(this.item, false, lang.hitch(this, function(viewers) {
					nextViewer = this._getNextViewer(viewer, viewers);
					callback(nextViewer);
				}));
			} else {
				var viewers = ecm.model.desktop.getPreviewersForItem(this.item, this.explicitMatchRequired());
				nextViewer = this._getNextViewer(viewer, viewers)
			}

			this.logExit(methodName);
			return nextViewer;
		},

		_getNextViewer: function(viewer, viewers) {
			var methodName = "_getNextViewer";

			this.logDebug(methodName, "viewers list returned contains " + viewers.length + " entries.");

			var idx = -1;
			for (var n = 0; n < viewers.length; n++) {
				this.logDebug(methodName, "Checking viewer: " + viewers[n].id);
				if (viewers[n].id == viewer.id) {
					this.logDebug(methodName, "Match found");
					idx = n;
					break;
				} else {
					this.logDebug(methodName, "Does not match");
				}
			}

			if (idx < 0) {
				this.logDebug(methodName, "Warning - no matching viewer was found, the first viewer will be returned.");
			}

			this.logDebug(methodName, "Index of viewer: " + idx);
			var nextViewer = null;
			var nextIdx = idx + 1;

			this.logDebug(methodName, "Checking for " + nextIdx + " >= 0 AND " + nextIdx + " < " + viewers.length);
			if (nextIdx >= 0 && nextIdx < viewers.length) {
				this.logDebug(methodName, "Test passed");
				nextViewer = viewers[nextIdx];
				this.logDebug(methodName, "Returning viewer: " + nextViewer.id);
			} else {
				this.logDebug(methodName, "Test failed, returning null");
			}

			this.logExit(methodName);
			return nextViewer;
		},

		/**
		 * Returns an array of 0-n viewers that map to this item, in order of appearance in the current viewer map.
		 * 
		 * @param preview
		 *            Setting to true will always return an array containing the HTML Conversion Viewer as the first
		 *            entry. Set to false (default) to obtain mappings from the viewer map. (optional)
		 * @param forceExplicitMatch
		 *            Setting to true will return only viewer mappings that match explicitly to the mime type of this
		 *            item, excluding viewers mapped via wildcard (match all MIME types). Default, is the boolean value
		 *            returned from {@link ecm.widget.viewer.model.ViewerItem#explicitMatchRequired}.
		 * @param callback
		 *            Required to use getViewers with the asynchronous loader.
		 */
		getViewers: function(preview, forceExplicitMatch, callback) {
			var methodName = "getViewers";
			this.logEntry(methodName);

			if (this._viewers == null) {
				var explicitMatchRequired = (forceExplicitMatch === true) || this.explicitMatchRequired();

				this._viewers = new Array();
				if (this.item.id) {
					if (preview === true) {
						if (callback && lang.isFunction(callback)) {
							ecm.model.desktop.getPreviewersForItem(this.item, explicitMatchRequired, lang.hitch(this, function(viewers) {
								this._viewers = viewers;
								callback(viewers);
							}));
						} else {
							this._viewers = ecm.model.desktop.getPreviewersForItem(this.item, explicitMatchRequired);
						}
					} else {
						if (callback && lang.isFunction(callback)) {
							ecm.model.desktop.getViewersForItem(this.item, explicitMatchRequired, lang.hitch(this, function(viewers) {
								this._viewers = viewers;
								callback(viewers);
							}));
						} else {
							this._viewers = ecm.model.desktop.getViewersForItem(this.item, explicitMatchRequired);
						}
					}
				} else {
					this._viewers.push(ecm.model.desktop.getViewer("viewONEVirtualViewer"));
					if (callback && lang.isFunction(callback))
						callback(this._viewers);
				}
			} else if (callback && lang.isFunction(callback)) {
				callback(this._viewers);
			}

			this.logExit(methodName);
			return this._viewers;
		},

		/**
		 * Gets a list of the unique classes for viewers that are required to be loaded for this item.
		 * 
		 * @param preview
		 *            Setting to true will always return an array containing the viewer class of the HTML Conversion
		 *            Viewer as the first entry. Set to false (default) to obtain a list of viewer classes for all
		 *            mappings from the viewer map. (optional)
		 * @param forceExplicitMatch
		 *            Setting to true will return only viewer classes from mappings that match explicitly to the mime
		 *            type of this item, excluding viewer classes mapped via wildcard (match all MIME types). Default,
		 *            is the boolean value returned from
		 *            {@link ecm.widget.viewer.model.ViewerItem#explicitMatchRequired}.
		 */
		getViewerClasses: function(preview, forceExplicitMatch) {
			var methodName = "getViewerClasses";
			this.logEntry(methodName);

			if (this._viewerClasses == null) {
				var viewers = this._getCandidateViewers(preview, forceExplicitMatch);
				var foundAlready = new Object();

				this._viewerClasses = new Array();
				for ( var i in viewers) {
					var viewerClass = viewers[i].viewerClass;
					if (viewerClass != null && !foundAlready[viewerClass]) {
						this._viewerClasses.push(viewerClass);
					}
				}

				delete foundAlready;
			}

			this.logExit(methodName);
			return this._viewerClasses;
		},

		_getCandidateViewers: function(preview, forceExplicitMatch) {
			var explicitMatchRequired = (forceExplicitMatch === true) || this.explicitMatchRequired();
			var viewerMappings = ecm.model.desktop.viewerMappings;
			var candidateViewers = new Array();

			for ( var i in viewerMappings) {
				var viewer = viewerMappings[i].useViewer(this.item, explicitMatchRequired, null, preview);
				if (viewer) {
					candidateViewers.push(viewer);
				}
			}

			return candidateViewers;
		},

		/**
		 * For iframe-based viewers (Where {@link ecm.model.Viewer#viewerClass} is
		 * {@link ecm.widget.viewer.IframeDocViewer}), returns the launch URL, based on the first matching viewer that
		 * maps to this item.
		 * 
		 * @param preview
		 *            Setting to true will always return the launch URL based on the HTML Conversion Viewer. This
		 *            parameter is optional and defaults to false if not specified.
		 * @param callback
		 *            Required to use getLaunchUrl with the asynchronous loader.
		 */
		getLaunchUrl: function(preview, callback) {
			var methodName = "getLaunchUrl";
			this.logEntry(methodName);

			var launchUrl = null;
			if (callback && lang.isFunction(callback)) {
				this.getViewer(preview, lang.hitch(this, function(viewer) {
					callback(viewer.getLaunchUrl(this.item));
				}));
			} else {
				var viewer = this.getViewer(preview);
				launchUrl = viewer.getLaunchUrl(this.item);
			}

			this.logExit(methodName);
			return launchUrl;
		},

		/**
		 * For iframe-based viewers (Where {@link ecm.model.Viewer#viewerClass} is
		 * {@link ecm.widget.viewer.IframeDocViewer}), returns the docUrl value of the first matching viewer that maps
		 * to this item.
		 * 
		 * @param preview
		 *            Setting to true will always return the docUrl of the HTML Conversion Viewer. This parameter is
		 *            optional and defaults to false if not specified.
		 * @param callback
		 *            Required to use getDocUrl with the asynchronous loader.
		 */
		getDocUrl: function(preview, callback) {
			var methodName = "getDocUrl";
			this.logEntry(methodName);

			var docUrl = null;
			if (callback && lang.isFunction(callback)) {
				this.getViewer(preview, lang.hitch(this, function(viewer) {
					callback(viewer.getDocUrl(this.item));
				}));
			} else {
				var viewer = this.getViewer(preview);
				docUrl = viewer.getDocUrl(this.item);
			}

			this.logExit(methodName);
			return docUrl;
		},

		getHtmlName: function() {
			var methodName = "getHtmlName";
			this.logEntry(methodName);

			var displayName;
			if (this.item.id) {
				displayName = this.item.getDisplayValue("{NAME}");
				if (!displayName)
					displayName = this.item.name;
			} else {
				displayName = this.item.name ? this.item.name : this.messages.viewer_new_item_name;
			}

			var htmlName = entities.encode(displayName);
			this.logExit(methodName);
			return htmlName;
		},

		/**
		 * @deprecated As of 2.0.2. Accessors are being replaced with accessing public properties directly. Use
		 *             viewerItem.item.
		 */
		getItem: function() {
			var methodName = "getItem";
			this.logEntry(methodName);
			var item = this.item;
			this.logExit(methodName);
			return item;
		},

		/**
		 * Returns true or false depending on whether or not this item is part of a result obtained from the repository.
		 * 
		 * @return {boolean}
		 */
		hasResultSet: function() {
			var methodName = "hasResultSet";
			this.logEntry(methodName);
			var lookupItem = this._getLookupItem();
			this.logExit(methodName);
			return (lookupItem != null);
		},

		/**
		 * Returns true or false depending on whether or not this item is part of a result obtained from the repository,
		 * that has additional results available for retrieval. If true,
		 * {@link ecm.widget.viewer.model.ViewerItem#retrieveNextpage} can be called to retrieve the next page of
		 * results from the result set.
		 * 
		 * @return {boolean}
		 */
		hasResultSetContinuation: function() {
			var methodName = "hasResultSetContinuation";
			this.logEntry(methodName);

			var hasContinuation = false;
			var lookupItem = this._getLookupItem();
			if (lookupItem != null) {
				hasContinuation = lookupItem.getResultSet && lookupItem.resultSet != null && lookupItem.resultSet.hasContinuation();
			}

			this.logExit(methodName);
			return hasContinuation;
		},

		/**
		 * If this item is associated with a continuable result set that has more results available for retrieval, this
		 * call will retrieve the next page of results into the result set.
		 * 
		 * @param callback
		 *            An optional method to call on completion of the retrieval.
		 */
		retrieveNextPage: function(callback) {
			var methodName = "retrieveNextPage";
			this.logEntry(methodName);

			var lookupItem = this._getLookupItem();
			if (lookupItem != null) {
				var resultSet = lookupItem.resultSet;
				resultSet.retrieveNextPage(lang.hitch(this, function() {
					if (callback)
						callback();
				}));
			}

			this.logExit(methodName);
		},

		_getLookupItem: function() {
			var methodName = "_getLookupItem";
			this.logEntry(methodName);

			// Under IE we keep a reference to the original item from the results set,
			// since this.item is a separate instance retrieved under the viewer window.
			var lookupItem = this.item.origItem || this.item;
			var resultSet = null;
			if (lookupItem && lookupItem.resultSet)
				resultSet = lookupItem.resultSet;

			while (resultSet == null && lookupItem && lookupItem.parent != null && lookupItem.parent.resultSet) {
				lookupItem = lookupItem;
				resultSet = lookupItem.resultSet;
			}

			this.logExit(methodName);
			return (resultSet != null ? lookupItem : null);
		},

		/**
		 * If this item comes from a result set, this method will return the zero-based index of the item within the
		 * associated result set. Returns -1 if there is no result set associated with this item.
		 * 
		 * @return {number}
		 */
		getItemIndex: function() {
			var methodName = "getItemIndex";
			this.logEntry(methodName);

			var itemIndex = -1;
			var lookupItem = this._getLookupItem();
			if (lookupItem != null)
				itemIndex = lookupItem.resultSet.getIndexOfContentItem(lookupItem);

			this.logExit(methodName);
			return itemIndex;
		},

		/**
		 * If this item comes from a result set, this method will return the next item in the result set if delta is >
		 * 0, or the previous item in the result set if delta is < 0. Returns null in all other cases.
		 * 
		 * @return {Item}
		 */
		getAdjacentItem: function(delta) {
			var methodName = "getAdjacentItem";
			this.logEntry(methodName);

			var adjacentItem = null;
			if ((delta > 0 && this._nextItemIdx == null) || (delta < 0 && this._prevItemIdx == null)) {
				// we haven't tried looking for it yet, so look for it.
				var lookupItem = this._getLookupItem();
				if (lookupItem != undefined && lookupItem != null) {
					var resultSet = lookupItem.resultSet;

					if (lookupItem != null) {
						var index = resultSet.getIndexOfContentItem(lookupItem);
						if (delta > 0) {
							this._nextItemIdx = -1; // not found marker
							for (var n = index + 1; n < resultSet.items.length && adjacentItem == null; n++) {
								var item = this._getContentItem(resultSet, n);
								if (this._isItemViewable(item)) {
									adjacentItem = item;
									this._nextItemIdx = n;
								}
							}
						} else if (delta < 0) {
							this._prevItemIdx = -1; // not found marker
							for (var n = index - 1; n >= 0 && adjacentItem == null; n--) {
								var item = this._getContentItem(resultSet, n);
								if (this._isItemViewable(item)) {
									adjacentItem = item;
									this._prevItemIdx = n;
								}
							}
						}
					}
				}
			} else if ((delta > 0 && this._nextItemIdx > -1) || (delta < 0 && this._prevItemIdx > -1)) {
				// we have already looked for it, so just send the right answer:
				var lookupItem = this._getLookupItem();
				if (lookupItem != undefined && lookupItem != null) {
					var resultSet = lookupItem.resultSet;
					adjacentItem = this._getContentItem(resultSet, (delta > 0 ? this._nextItemIdx : this._prevItemIdx));
				}
			}

			this.logExit(methodName);
			return (adjacentItem);
		},
		
		_getItemByIndex:function(index){
			var methodName = "getItemById";
			this.logEntry(methodName);
			var lookupItem = this._getLookupItem();
			var item;
			if (lookupItem != undefined && lookupItem != null) {
				var resultSet = lookupItem.resultSet;
				item = resultSet.getItem(index);
			}
			this.logExit(methodName);
			return item;
		},
		
		/**
		 * Returns true if this item is a member of a result set that contains a viewable item following this item. If
		 * no viewable item is found, but the result set has continuation, this function will also return true.
		 * 
		 * @since 2.0.3.3
		 */
		hasNextItem: function() {
			var hasNext = (this._nextItemIdx != null && this._nextItemIdx > -1);
			if (!hasNext) {
				var nextItem = this.getAdjacentItem(1);

				if (nextItem == null) {
					hasNext = this.hasResultSetContinuation();
				} else
					hasNext = (nextItem != null);
			}

			return hasNext;
		},

		/**
		 * Returns true if this item is a member of a result set that contains a viewable item prior to this item.
		 * 
		 * @since 2.0.3.3
		 */
		hasPreviousItem: function() {
			var hasPrevious = (this._prevItemIdx != null && this._prevItemIdx > -1);
			if (!hasPrevious) {
				var prevItem = this.getAdjacentItem(-1);
				hasPrevious = (prevItem != null);
			}

			return hasPrevious;
		},

		_getContentItem: function(resultSet, index) {
			var methodName = "_getContentItem";
			this.logEntry(methodName);

			var item = resultSet.getItem(index);
			if (item.resultSet == null) {
				item.resultSet = resultSet;
			}
			item = itemUtils.getContentItem(item);

			this.logExit(methodName);
			return item;
		},

		_isItemViewable: function(item) {
			var methodName = "_isItemViewable";
			this.logEntry(methodName);
			var viewable = lang.isFunction(item.isViewable) ? item.isViewable() : false;
			this.logExit(methodName);
			return viewable;
		},

		/**
		 * @deprecated As of 2.0.2. Accessors are being replaced with accessing public properties directly. Use
		 *             viewerItem.item.resultSet.
		 */
		getResultSet: function() {
			var methodName = "getResultSet";
			this.logEntry(methodName);
			var resultSet = this.item.resultSet;
			this.logExit(methodName);
			return resultSet;
		},

		/**
		 * @deprecated As of 2.0.2. Accessors are being replaced with accessing public properties directly. Use
		 *             viewerItem.item.repository.
		 */
		getRepository: function() {
			var methodName = "getRepository";
			this.logEntry(methodName);
			var repository = this.item.repository;
			this.logExit(methodName);
			return repository;
		},

		/**
		 * Returns true or false to indicate whether or not viewer map lookups for this document must match explicitly
		 * by mimetype. Viewer mappings that match by wildcard (match all MIME types) are excluded.
		 * 
		 * @return {boolean}
		 */
		explicitMatchRequired: function() {
			var methodName = "explicitMatchRequired";
			this.logEntry(methodName);

			var explicitMimeClasses = new Array( //
			"ftDocumentEntryTemplate", //
			"ftFolderEntryTemplate", //
			"ftIcnDocumentEntryTemplate", //
			"ftIcnFolderEntryTemplate", //
			"ftExternalFile", //
			"ftEntryTemplate", //
			"ftCustomObjectEntryTemplate", //
			"ftFormTemplate", //
			"ftDeclareRecordEntryTemplate", //
			"ftWorkflow", //
			"ftPolicyDocument", //
			"ftPolicyWorkflow", //
			"ftFormData", //
			"ftSearchTemplate", //
			"ftSearchStored", //
			"ftUnifiedSearch" //
			);

			var requiresExplicit = false;
			var itemMimeClass = this.item.getMimeClass();
			var index;

			// Javascript array object indexOf is not supported in IE8 and earlier. Use the dojo array module wrapper for indexOf.
			requiresExplicit = this.item.isDocumentEntryTemplate() || this.item.isFolderEntryTemplate() || this.item.isDeclareRecordEntryTemplate() || array.indexOf(explicitMimeClasses, itemMimeClass) >= 0;

			// Check plugin open actions...
			if (!requiresExplicit && ecm.model.desktop.openActions) {
				if (ecm.model.desktop.openActions[this.item.repository.type] && ecm.model.desktop.openActions[this.item.repository.type][this.item.mimetype]) {
					requiresExplicit = true;
				}
			}

			this.logExit(methodName);
			return requiresExplicit;
		}
	});

	/**
	 * Loads the viewer in the target window securely
	 * 
	 * @param targetWindow
	 *            Name of the target window to display the viewer
	 * @param url
	 *            URL to load the viewer content
	 * @param newWindow
	 *            Boolean indicating if a new window should be created
	 * @memberof ecm.widget.viewer.model.ViewerItem
	 */
	ViewerItem.loadSecure = function(targetWindow, url, newWindow) {
		var urlAndQuery = url.split("?");
		var uri = urlAndQuery[0];
		var queryString = (urlAndQuery.length > 1 ? urlAndQuery[1] : null);

		if (queryString == null) {
			targetWindow.location = url; // If there are no query parameters, just set it.  This will probably never happen.
		} else {
			var formHtml = "<html><head></head><body><form id=\"_loadSourceForm\" action=\"" + uri + "\" method=\"POST\">";
			var parameters = queryString.split("&");
			var n;

			for (n in parameters) {
				var parameter = parameters[n];
				var keyValue = parameter.split("=");
				if (keyValue.length > 0) {
					formHtml += ("<input type=\"hidden\" name=\"" + idxHtml.escapeHTML(keyValue[0]) + "\" value=\"");
					if (keyValue.length > 1) {
						formHtml += idxHtml.escapeHTML(decodeURIComponent(keyValue[1]));
					}

					formHtml += ("\"'>");
				}
			}

			formHtml += "</form></body></html>";

			if (newWindow === true || has("ie")) {
				targetWindow.document.write(formHtml);
			} else {
				targetWindow.document.documentElement.innerHTML = formHtml;
			}

			var form = targetWindow.document.getElementById("_loadSourceForm");
			if (form)
				form.submit();
		}
	};

	return ViewerItem;
});
