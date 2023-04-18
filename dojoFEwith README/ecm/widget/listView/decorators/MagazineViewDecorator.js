/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/lang",
	"dojo/keys",
	"dojo/string",
	"dojo/_base/event",
	"dojo/_base/sniff",
	"dojo/dom-construct",
	"dojo/dom-style",
	"dojo/aspect",
	"dojo/has",
	"dijit/form/DropDownButton",
	"dijit/popup",
	"dijit/TooltipDialog",
	"idx/html",
	"./common",
	"ecm/model/Desktop",
	"ecm/model/SocialItem",
	"ecm/model/Teamspace",
	"ecm/widget/ItemCommentsPane",
	"ecm/widget/DownloadCount",
	"ecm/widget/Recommendations",
	"ecm/widget/Tags",
	"ecm/widget/ActionMenu"
], function(lang, keys, string, event, sniff, domConstruct, domStyle, aspect, has, DropDownButton, popup, TooltipDialog, idxHtml, common, Desktop, SocialItem, Teamspace, ItemCommentsPane, DownloadCount, Recommendations, Tags, ActionMenu) {

	/**
	 * @private Create ItemCommentPane to show the item's comments.
	 * @param item
	 *            Instance of an {@link ecm.model.Item} object for which you want to display comments.
	 * @param contentData
	 *            The domNode to display the comments.
	 * @param rowNode
	 *            The domNode for the row.
	 * @since 2.0.2
	 */
	var _createCommentPane = function(item, contentData, rowNode) {
		if (rowNode.commentWidget) {
			rowNode.commentWidget.destroyRecursive();
			rowNode.commentWidget = null;
		}
		_showContentData(contentData, rowNode);
		var commentWidget = new ItemCommentsPane({
			"style": "width: 100%; height: 100%"
		});
		domConstruct.place(commentWidget.domNode, contentData, "only");
		commentWidget.startup();
		commentWidget.set("item", item);
		commentWidget.render();
		rowNode.commentWidget = commentWidget;
	};

	/**
	 * @private Show the content data area.
	 * @param contentData
	 *            The domNode to display the comments.
	 * @param rowNode
	 *            The domNode for the row.
	 * @since 2.0.2
	 */
	var _showContentData = function(contentData, rowNode) {
		domStyle.set(contentData, "display", "");
		rowNode.setAttribute("expandedComment", "true");
	};

	/**
	 * @private Hide the content data area.
	 * @param contentData
	 *            The domNode to display the comments.
	 * @param rowNode
	 *            The domNode for the row.
	 * @since 2.0.2
	 */
	var _collapseContentData = function(contentData, rowNode) {
		domStyle.set(contentData, "display", "none");
		rowNode.setAttribute("expandedComment", "false");
		if (rowNode.commentWidget) {
			rowNode.commentWidget.destroyRecursive();
			rowNode.commentWidget = null;
		}
	};

	/**
	 * @private Process the array of input fields adding them to the domNode.
	 */
	var _processFields = function(arrayOfFields, domNode, cellWidget, item, store) {
		//  Display the field label and value for each field to display.
		domConstruct.empty(domNode);
		if (arrayOfFields.length > 0) {
			var addSeparator = false;
			for (var i = 0; i < arrayOfFields.length; i++) {
				var data = arrayOfFields[i];
				var field = data.field;
				var name = data.displayName ? data.displayName : field;
				if (name == "{CLASS}") {
					name = ecm.messages.class_label_no_html_encode;
				}

				var value = item.getDisplayValue ? item.getDisplayValue(field) : item.getValue(field);
				if (!value && store && store.getValue) {
					value = store.getValue(item, field);
				}

				// Add the data to the cellWidget
				if (data.decorator && lang.isFunction(data.decorator)) {
					addSeparator = data.decorator(cellWidget, domNode, name, value, field, data, addSeparator);
					if (addSeparator == undefined) {
						addSeparator = (domNode.children && domNode.children.length > 0);
					}
				} else {
					if (addSeparator) {
						// Add the separator
						domConstruct.place(domConstruct.create("div", {
							"class": "dijitInline labelValueSeparator",
							innerHTML: "|"
						}), domNode, "last");
					}

					var text = idxHtml.escapeHTML(value);
					var textDir = cellWidget.cell.grid.getTextDir(cellWidget.cell.column.id, text);
					var dir = "";
					if (textDir) {
						dir = " dir='" + textDir + "'";
						domNode.dir = cellWidget.isLeftToRight() ? "ltr" : "rtl";
					}
					// Add the label and value
					domConstruct.place(domConstruct.create("div", {
						"class": "dijitInline",
						innerHTML: "<label>" + string.substitute(ecm.messages.append_colon, [
							idxHtml.escapeHTML(name)
						]) + "</label>&nbsp;<div class='dijitInline value'" + dir + " >" + idxHtml.escapeHTML(value) + "</div>"
					}), domNode, "last");

					addSeparator = true;
				}
			}
		}
	};

	/**
	 * Handles decoration of the content column for the magazine view.
	 * 
	 * @param item
	 *            Instance of an {@link ecm.model.Item} object containing the attributes to display.
	 * @param rowId
	 *            Id of the row containing the cell.
	 * @param grid
	 *            The grid.
	 * @deprecated as of 2.0.2. Use contentCellDecorator.
	 */
	var createContentCellFromItem = function(item, rowId, grid) {
		var stateIconValue = common.multiStateIcon(item, this._states, false);
		var stateIcons = null;
		if (stateIconValue)
			stateIcons = stateIconValue.toString();

		if (!stateIcons || stateIcons == "&nbsp;")
			stateIcons = "";
		else
			stateIcons += "&nbsp;";

		var fieldsToDisplay = [];
		if (item.resultSet && item.resultSet.magazineStructure) {
			for (var i = 0; i < item.resultSet.magazineStructure.length; i++) {
				var data = item.resultSet.magazineStructure[i];
				if (data.field == "content") {
					if (data.fieldsToDisplay && data.fieldsToDisplay.length > 0) {
						fieldsToDisplay = data.fieldsToDisplay;
					}
					break;
				}
			}
		}
		var contentStr = "";
		if (fieldsToDisplay.length > 0) {
			for (var i = 0; i < fieldsToDisplay.length; i++) {
				var data = fieldsToDisplay[i];
				var field = data.field;
				var name = data.displayName;
				if (!name) {
					name = (field == "{CLASS}") ? ecm.messages.class_label_no_html_encode : field;
				}

				var value = item.getDisplayValue ? item.getDisplayValue(field) : item.getValue(field);
				if (!value && grid && grid.store && grid.store.getValue) {
					value = grid.store.getValue(item, field);
				}

				if (contentStr != "") {
					contentStr += "&nbsp;|&nbsp;";
				}
				if (name) {
					contentStr += "<label>" + string.substitute(ecm.messages.append_colon, [
						idxHtml.escapeHTML(name)
					]) + "</label>&nbsp;";
				}
				contentStr += value;
			}
		}

		// Check for summary text
		var summaryStr = "";
		if (item && item.attributeTypes) {
			for ( var attr in item.attributeTypes) {
				if (item.attributeTypes[attr] == "xs:summary") {
					var summary = item.getValue(attr);
					if (summary && summary.length > 0) {
						summaryStr = '<div class="summary">' + summary + '</div>';
					}
				}
			}
		}

		return [
			'<div style="width: 100%"><a class="title" href="javascript:;" onclick="event.preventDefault(); ',
			'event.stopPropagation(); ',
			'ecm.widget.listView.ContentList.callMethod(\'',
			this.id,
			'\', \'_performDefaultActionForRowId\', \'',
			rowId,
			'\'); ',
			'return false; ">',
			idxHtml.escapeHTML(item.name),
			'</a><br>',
			'<div class="content">',
			summaryStr,
			stateIcons ? stateIcons + '&nbsp;' : '',
			contentStr,
			'</div></div>'
		].join('');
	};

	/**
	 * @private
	 */
	var _setCommentsLabel = function(item, labelNode) {
		var commentCount = 0;
		commentCount = item.getValue(item._getCountPropertyName(SocialItem.prototype.TYPE.COMMENT)) || 0;
		var label = ecm.messages.comments_number;
		labelNode.innerHTML = string.substitute(string.substitute(label, [
			commentCount
		]));
	};

	/**
	 * @private Creates a new thumbnail DOM node and places it as the last element in the given cell widget.
	 */
	var _createThumbnailNode = function(name, data, cellWidget) {
		var thumbnailDom = domConstruct.create("img", {
			width: 60,
			height: 60,
			alt: name,
			src: data,
			onclick: lang.hitch(this, function() {
				ecm.widget.listView.ContentList.callMethod(this.id, '_performDefaultActionForRowId', rowId);
			}),
			onerror: function() {
				this.src = ecm.model.desktop.getServicesUrl() + "/ecm/widget/resources/images/spacer.gif";
				this.className = className;
			}
		});

		cellWidget.tooltipDialog = new TooltipDialog({
			'class': "ecmFilmstripEntryTooltip",
			content: '<img alt="' + name + '" src="' + data + '"/>'
		});

		thumbnailDom.onmouseover = lang.hitch(this, function() {
			popup.open({
				popup: cellWidget.tooltipDialog,
				around: thumbnailDom,
				orient: [
					"after-centered"
				],
			});
		});
		thumbnailDom.onmouseout = lang.hitch(this, function() {
			popup.close(cellWidget.tooltipDialog);
		});
		cellWidget.uninitialize = function() {
			if (this.tooltipDialog)
				this.tooltipDialog.destroy();
		};
		domConstruct.place(thumbnailDom, cellWidget.domNode, "last");
	};

	/**
	 * @name ecm.widget.listView.MagazineViewDecorator
	 * @class Decorators for the magazine view.
	 */
	return {
		/** @lends ecm.widget.listView.MagazineViewDecorator */

		/**
		 * Handles decoration of the thumbnail column for the magazine view.
		 * 
		 * @param data
		 *            Cell data in the grid.
		 * @param rowId
		 *            Id of the row containing the cell.
		 * @param rowIndex
		 *            Index of the row containing the cell.
		 */
		thumbnailDecorator: function(data, rowId, rowIndex) {
			var item = this.grid.row(rowId).item();
			var isFavorite = false;
			if (item.isInstanceOf(ecm.model.Favorite) && item.item) {
				item = item.item;
				isFavorite = true;
			}

			var className = item.getMimeClass() + "Large";
			var blankImg = require.toUrl("dojo/resources/blank.gif");
			var mimeType = null;
			if (!lang.isFunction(item.isFolder))
				mimeType = item.mimetype;
			else
				mimeType = item.isFolder() ? ecm.messages.folders_filed_in_folder_col_hdr : item.mimetype;

			if (mimeType == "item") {
				mimeType = ecm.messages.item;
			} else if (mimeType == null && item.isInstanceOf(Teamspace)) {
				mimeType = item.getStateMessage();
			}

			if (lang.isFunction(item.isFolder) && item.isFolder()) {
				className = "ftFolderLarge";

				if (item.syncEnabled) {
					className = "ftFolderSyncedIconLarge";
				} else if (item.isExternal) {
					className = "ftFolderSharedIconLarge";
				} else if (item.hasCollaborations) {
					className = "ftFolderCollaborationIconLarge";
				}
			}

			var showThumbnail = false;
			if (this._magazineView) {
				for (var i = 0; i < this._magazineView.length; i++) {
					var extraFieldsToDisplay = this._magazineView[i].extraFieldsToDisplay;

					if (extraFieldsToDisplay) {
						for (var j = 0; j < extraFieldsToDisplay.length; j++) {
							if (extraFieldsToDisplay[j].field == "CmThumbnails" || extraFieldsToDisplay[j].field == "Thumbnail") {
								showThumbnail = true;
								break;
							}
						}
					}
				}
			}
			if (isFavorite)
				showThumbnail = true;

			var thumbnail = item.getValue("thumbnail");
			var data = null;
			if (showThumbnail && thumbnail && thumbnail.image) {
				data = thumbnail.image;
			}

			var mimeTypeChar = mimeType == ecm.messages.folders_filed_in_folder_col_hdr ? ecm.messages.folder_char : ecm.messages.document_char;
			var highContrastSpan = '<span class="ecmMimeTypeIconChar" title="' + mimeType + '" onclick="ecm.widget.listView.ContentList.callMethod(\'' + this.id + '\', \'_performDefaultActionForRowId\', \'' + rowId + '\');" >' + mimeTypeChar + '</span>';

			if (data == null || data.length == 0) {
				// Fixes a bug in older safari browsers; We do not see this problem with Chrome and Safari 6, so
				// it is clearly not an issue with webkit browsers in general.
				if (has("safari") < 6) {
					return [
						highContrastSpan,
						'<img role="img" style="margin: 0px -6px" class="',
						className,
						'" alt="',
						mimeType,
						'" title="',
						mimeType,
						'" src="',
						blankImg,
						'" onclick="ecm.widget.listView.ContentList.callMethod(\'' + this.id + '\', \'_performDefaultActionForRowId\', \'' + rowId + '\');" />'
					].join('');
				} else {
					return [
						highContrastSpan,
						'<img role="img" width="60" height="60" class="',
						className,
						'" alt="',
						mimeType,
						'" title="',
						mimeType,
						'" src="',
						blankImg,
						'" onclick="ecm.widget.listView.ContentList.callMethod(\'' + this.id + '\', \'_performDefaultActionForRowId\', \'' + rowId + '\');" />'
					].join('');
				}
			} else {
				return [
					highContrastSpan,
					'<a class="thumbnail" href="#"><img width="60" height="60" role="img" alt="',
					mimeType,
					'" src="',
					data,
					'" onclick="ecm.widget.listView.ContentList.callMethod(\'',
					this.id,
					'\', \'_performDefaultActionForRowId\', \'',
					rowId,
					'\');" /><span><img src="',
					data,
					'"/></span></a>'
				].join('');
			}
		},

		/**
		 * Handles decoration of the thumbnail column for the magazine view.
		 * 
		 * @param data
		 *            Cell data in the grid.
		 * @param rowId
		 *            Id of the row containing the cell.
		 * @param rowIndex
		 *            Index of the row containing the cell.
		 * @since 2.0.3.2
		 */
		newThumbnailDecorator: function(data, rowId, rowIndex) {
			return "<div></div>";
		},

		/**
		 * Updates the cell widget template created by the newThumbnailDecorator method.
		 * 
		 * @param gridData
		 *            Contains the data in the grid cell. This will be null in this case, because the comment list
		 *            relies on retrieving the information from the actual item used to populate the row.
		 * @param storeData
		 *            Contains store data. This will be null in this method, because the appropriate flags are not
		 *            applied to the Grid to obtain raw store data in this method (it is not needed). See comments in
		 *            gridx/modules/CellWidget in the GridX documentation for details:
		 *            http://oria.github.io/gridx/gallery.html.
		 * @param cellWidget
		 *            Widget generated from the template provided in contentCellDecorator.
		 * @since 2.0.3.2
		 */
		newThumbnailCellValue: function(gridData, storeData, cellWidget) {
			var rowId = cellWidget.cell.row.id;
			var item = this.grid.row(rowId).item();
			var isFavorite = false;
			if (item.isInstanceOf(ecm.model.Favorite) && item.item) {
				item = item.item;
				isFavorite = true;
			}

			var className = item.getMimeClass() + "Large";
			var blankImg = require.toUrl("dojo/resources/blank.gif");
			var mimeType = null;
			if (!lang.isFunction(item.isFolder))
				mimeType = item.mimetype;
			else
				mimeType = item.isFolder() ? ecm.messages.folders_filed_in_folder_col_hdr : item.mimetype;

			if (mimeType == "item") {
				mimeType = ecm.messages.item;
			} else if (mimeType == null && item.isInstanceOf(Teamspace)) {
				mimeType = item.getStateMessage();
			}

			// Set the style class for a folder
			if (lang.isFunction(item.isFolder) && item.isFolder()) {
				className = "ftFolderLarge";

				if (item.syncEnabled) {
					className = "ftFolderSyncedIconLarge";
				} else if (item.isExternal) {
					className = "ftFolderSharedIconLarge";
				} else if (item.hasCollaborations) {
					className = "ftFolderCollaborationIconLarge";
				}
			}

			var showThumbnail = false;
			if (this._magazineView) {
				for (var i = 0; i < this._magazineView.length; i++) {
					var extraFieldsToDisplay = this._magazineView[i].extraFieldsToDisplay;

					if (extraFieldsToDisplay) {
						for (var j = 0; j < extraFieldsToDisplay.length; j++) {
							if (extraFieldsToDisplay[j].field == "CmThumbnails" || extraFieldsToDisplay[j].field == "Thumbnail") {
								showThumbnail = true;
								break;
							}
						}
					}
				}
			}
			if (isFavorite)
				showThumbnail = true;

			var thumbnail = item.getValue("thumbnail");
			var data = null;
			if (showThumbnail && thumbnail && thumbnail.image) {
				data = thumbnail.image;
			}

			var mimeTypeChar = mimeType == ecm.messages.folders_filed_in_folder_col_hdr ? ecm.messages.folder_char : ecm.messages.document_char;
			var highContrastSpan = domConstruct.create("span", {
				"class": "ecmMimeTypeIconChar",
				title: mimeType,
				onclick: lang.hitch(this, function() {
					ecm.widget.listView.ContentList.callMethod(this.id, '_performDefaultActionForRowId', rowId);
				}),
				innerHTML: mimeTypeChar
			});
			domConstruct.place(highContrastSpan, cellWidget.domNode, "only");

			if (data == null || data.length == 0) {
				if (!isFavorite && item.repository && item.repository.type == "box" && item.retrieveThumbnail) {
					item.retrieveThumbnail(lang.hitch(this, function() {
						thumbnail = item.getValue("thumbnail");
						if (thumbnail && thumbnail.image) {
							_createThumbnailNode(item.name, thumbnail.image, cellWidget);
						} else {
							var thumbnailDom = domConstruct.create("img", {
								'class': className,
								alt: item.name,
								title: this.grid.enforceTextDirWithUcc(0, item.name),
								src: require.toUrl("dojo/resources/blank.gif"),
								onclick: lang.hitch(this, function() {
									ecm.widget.listView.ContentList.callMethod(this.id, '_performDefaultActionForRowId', rowId);
								})
							});
							domConstruct.place(thumbnailDom, cellWidget.domNode, "last");
						}
					}), {
						backgroundRequest: true,
						requestFailedCallback: lang.hitch(this, function(response) {
							var thumbnailDom = domConstruct.create("img", {
								'class': className,
								alt: item.name,
								title: this.grid.enforceTextDirWithUcc(0, item.name),
								src: require.toUrl("dojo/resources/blank.gif"),
								onclick: lang.hitch(this, function() {
									ecm.widget.listView.ContentList.callMethod(this.id, '_performDefaultActionForRowId', rowId);
								})
							});
							domConstruct.place(thumbnailDom, cellWidget.domNode, "last");
						})
					});
				} else {
					var thumbnailDom = domConstruct.create("img", {
						'class': className,
						alt: item.name,
						title: this.grid.enforceTextDirWithUcc(0, item.name),
						src: require.toUrl("dojo/resources/blank.gif"),
						onclick: lang.hitch(this, function() {
							ecm.widget.listView.ContentList.callMethod(this.id, '_performDefaultActionForRowId', rowId);
						})
					});
					domConstruct.place(thumbnailDom, cellWidget.domNode, "last");
				}
			} else {
				_createThumbnailNode(item.name, data, cellWidget);
			}
		},

		/**
		 * Handles decoration of the content column for the magazine view on the search pane and browse pane for Content
		 * Manager connections. This method provides the template. contentCellValue sets out the template data.
		 * 
		 * @since 2.0.2
		 */
		contentCellDecorator: function() {
			return [
				"<div style='width: 100%' data-dojo-attach-point='contentDiv'>",
				"<div class='contentStateTitle' data-dojo-attach-point='titleData'><span data-dojo-attach-point='contentStateIcons' class='contentState'></span><a class='title' href='javascript:;' data-dojo-attach-point='contentNameAnchor'><span data-dojo-attach-point='contentName'></span></a></div>",
				"<div class='summary' data-dojo-attach-point='summaryData'></div>",
				"<div data-dojo-attach-point='contentFieldData' class='content'></div>",
				"<div data-dojo-attach-point='contentExtraFieldData' class='contentExtra'></div>",
				"<div data-dojo-attach-point='contentData' class='contentData' style='display: none;'></div>",
				"</div>"
			].join('');
		},

		/**
		 * Handles decoration of the content column in the browse or search magazine view when sync is enabled.
		 * 
		 * @since 2.0.3.6
		 */
		contentCellDecoratorSync: function() {
			return [
				"<div style='width: 100%' data-dojo-attach-point='contentDiv'>",
				"<div class='contentStateTitle' data-dojo-attach-point='titleData'><span data-dojo-attach-point='contentStateIcons' class='contentState'></span><a class='title' href='javascript:;' data-dojo-attach-point='contentNameAnchor'><span data-dojo-attach-point='contentName'></span></a></div>",
				"<div class='summary' data-dojo-attach-point='summaryData'></div>",
				"<div data-dojo-attach-point='contentFieldData' class='content'></div>",
				"<div data-dojo-attach-point='contentExtraFieldData' class='contentExtra'></div>",
				"<div data-dojo-attach-point='contentData' class='contentData' style='display: none;'></div>",
				"</div>"
			].join('');
		},

		/**
		 * Updates the cell widget template created by the contentCellDecorator method, adding an comment link to
		 * display ItemCommentsPane.
		 * 
		 * @param gridData
		 *            Contains the data in the grid cell. This will be null in this case, because the comment list
		 *            relies on retrieving the information from the actual item used to populate the row.
		 * @param storeData
		 *            Contains store data. This will be null in this method, because the appropriate flags are not
		 *            applied to the Grid to obtain raw store data in this method (it is not needed). See comments in
		 *            gridx/modules/CellWidget in the GridX documentation for details:
		 *            http://oria.github.io/gridx/gallery.html.
		 * @param cellWidget
		 *            Widget generated from the template provided in contentCellDecorator.
		 * @since 2.0.2
		 */
		contentCellValue: function(gridData, storeData, cellWidget) {
			var rowId = cellWidget.cell.row.id;
			var item = this.grid.row(rowId).item();

			/* if (sniff("ie")) {
				this.connect(cellWidget.contentData, 'onmousedown', lang.hitch(this, function(evt) {
					evt.cancelBubble = true; // This allows the comment input fields to be selected / focused
					this.grid.body._decorateEvent(evt); // This allows the row to be selected after cancelling the event
					this.grid.onRowMouseDown(evt);
				}));
			} */

			// Check for summary text
			domConstruct.empty(cellWidget.summaryData);
			var summaryStr = "";
			var highlightStr = "";
			if (item && item.attributeTypes) {
				for ( var attr in item.attributeTypes) {
					if (item.attributeTypes[attr] == "xs:summary") {
						summaryStr = item.getValue(attr);
					}
					// OD returns both a summary and a highlighted summary. Other repositories only return one summary field.
					if (item.attributeTypes[attr] == "xs:highlight") {
						highlightStr = item.getValue(attr);
					}
				}
			}

			if (highlightStr.length > 0) {
				cellWidget.summaryData.innerHTML = highlightStr;
			} else if (summaryStr.length > 0) {
				cellWidget.summaryData.innerHTML = summaryStr;
			}

			// Display the state icons
			var stateIconValue = common.multiStateIcon(item, this._states, false);
			var stateIcons = stateIconValue ? stateIconValue.toString() : null;
			if (!stateIcons || stateIcons == "&nbsp;")
				stateIcons = "";
			else
				stateIcons += "&nbsp;";
			cellWidget.contentStateIcons.innerHTML = stateIcons;

			// Display the name.  If click the name, perform the default action.
			cellWidget.contentName.innerHTML = idxHtml.escapeHTML(item.name);
			var dir = this.grid.getTextDir(cellWidget.cell.column.id, cellWidget.contentName.innerHTML);
			if (dir)
				cellWidget.contentName.style.direction = cellWidget.contentName.dir = dir;
			cellWidget.contentNameAnchor.clId = this.id;
			cellWidget.contentNameAnchor.rowId = rowId;
			cellWidget.contentNameAnchor.onclick = function(evt) {
				event.stop(evt);
				ecm.widget.listView.ContentList.callMethod(this.clId, '_performDefaultActionForRowId', this.rowId);
				return false;
			};

			// Get the list of regular and social/extra fields to display.
			var fieldsToDisplay = [];
			var extraFieldsToDisplay = [];
			if (this._magazineView) {
				for (var i = 0; i < this._magazineView.length; i++) {
					var data = this._magazineView[i];
					if (data.field == "content") {
						if (data.fieldsToDisplay && data.fieldsToDisplay.length > 0) {
							fieldsToDisplay = data.fieldsToDisplay;
						}
						if (data.extraFieldsToDisplay && data.extraFieldsToDisplay.length > 0) {
							extraFieldsToDisplay = data.extraFieldsToDisplay;
						}
						break;
					}
				}
			}

			// Uninitialize the cellWidget
			cellWidget.uninitialize = lang.hitch(this, function() {
				var objsToDestroy = cellWidget.objectsToDestroy;
				if (objsToDestroy) {
					for ( var i in objsToDestroy) {
						if (objsToDestroy[i].destroyRecursive) {
							objsToDestroy[i].destroyRecursive();
						} else if (objsToDestroy[i].destroy) {
							objsToDestroy[i].destroy();
						}
					}
					cellWidget.objsToDestroy = null;
				}
				var objsToRemove = cellWidget.objectsToRemove;
				if (objsToRemove) {
					for ( var i in objsToRemove) {
						objsToRemove[i].remove();
					}
					cellWidget.objectsToRemove = null;
				}
			});

			// The decorators can add objects to these array that will be removed/destroyed in cellWidget.uninitialize
			if (cellWidget.objectsToRemove == null) {
				cellWidget.objectsToRemove = [];
			}
			if (cellWidget.objectsToDestroy == null) {
				cellWidget.objectsToDestroy = [];
			}

			_processFields(fieldsToDisplay, cellWidget.contentFieldData, cellWidget, item, this.grid.store);
			_processFields(extraFieldsToDisplay, cellWidget.contentExtraFieldData, cellWidget, item, this.grid.store);
		},

		/**
		 * Updates the cell widget template created by the contentCellDecorator method, adding an comment link to
		 * display ItemCommentsPane and show sync status with multi state icons.
		 * 
		 * @param gridData
		 *            Contains the data in the grid cell. This will be null in this case, because the comment list
		 *            relies on retrieving the information from the actual item used to populate the row.
		 * @param storeData
		 *            Contains store data. This will be null in this method, because the appropriate flags are not
		 *            applied to the Grid to obtain raw store data in this method (it is not needed). See comments in
		 *            gridx/modules/CellWidget in the GridX documentation for details:
		 *            http://oria.github.io/gridx/gallery.html.
		 * @param cellWidget
		 *            Widget generated from the template provided in contentCellDecorator.
		 * @since 2.0.3.6
		 */
		contentCellValueSync: function(gridData, storeData, cellWidget) {
			var rowId = cellWidget.cell.row.id;
			var item = this.grid.row(rowId).item();

			/* if (sniff("ie")) {
				this.connect(cellWidget.contentData, 'onmousedown', lang.hitch(this, function(evt) {
					evt.cancelBubble = true; // This allows the comment input fields to be selected / focused
					this.grid.body._decorateEvent(evt); // This allows the row to be selected after cancelling the event
					this.grid.onRowMouseDown(evt);
				}));
			} */

			// Check for summary text
			domConstruct.empty(cellWidget.summaryData);
			var summaryStr = "";
			var highlightStr = "";
			if (item && item.attributeTypes) {
				for ( var attr in item.attributeTypes) {
					if (item.attributeTypes[attr] == "xs:summary") {
						summaryStr = item.getValue(attr);
					}
					// OD returns both a summary and a highlighted summary. Other repositories only return one summary field.
					if (item.attributeTypes[attr] == "xs:highlight") {
						highlightStr = item.getValue(attr);
					}
				}
			}

			if (highlightStr.length > 0) {
				cellWidget.summaryData.innerHTML = highlightStr;
			} else if (summaryStr.length > 0) {
				cellWidget.summaryData.innerHTML = summaryStr;
			}

			// Display the state icons
			var stateIconValue = common.multiStateIcon(item, this._states, false);
			var stateIcons = stateIconValue ? stateIconValue.toString() : null;
			if (!stateIcons || stateIcons == "&nbsp;")
				stateIcons = "";
			else
				stateIcons += "&nbsp;";
			cellWidget.contentStateIcons.innerHTML = stateIcons;

			if (item && item.syncEnabled) {

				var itemToSync = item;
				if (item.item) {
					itemToSync = item.item;
				}

				var syncImg = domConstruct.create("img", {
					src: require.toUrl("dojo/resources/blank.gif"),
					'className': item.getStateClass("syncEnabled") + "Magazine",
					alt: ecm.messages.sync_favorite_enable_hover,
					title: ecm.messages.sync_favorite_enable_hover,
					onclick: function(evt) {
						Desktop.syncServer.disableSyncForItems([
							itemToSync
						]);
						itemToSync.syncEnabled = false;
						item.syncEnabled = false;
					}
				});
				domConstruct.place(syncImg, cellWidget.contentStateIcons, "last");
				domConstruct.place(document.createTextNode(" "), cellWidget.contentStateIcons, "last");
			}

			// Display the name.  If click the name, perform the default action.
			cellWidget.contentName.innerHTML = idxHtml.escapeHTML(item.name);
			var dir = this.grid.getTextDir(cellWidget.cell.column.id, cellWidget.contentName.innerHTML);
			if (dir)
				cellWidget.contentName.style.direction = cellWidget.contentName.dir = dir;
			cellWidget.contentNameAnchor.clId = this.id;
			cellWidget.contentNameAnchor.rowId = rowId;
			cellWidget.contentNameAnchor.onclick = function(evt) {
				event.stop(evt);
				ecm.widget.listView.ContentList.callMethod(this.clId, '_performDefaultActionForRowId', this.rowId);
				return false;
			};

			// Get the list of regular and social/extra fields to display.
			var fieldsToDisplay = [];
			var extraFieldsToDisplay = [];
			if (this._magazineView) {
				for (var i = 0; i < this._magazineView.length; i++) {
					var data = this._magazineView[i];
					if (data.field == "content") {
						if (data.fieldsToDisplay && data.fieldsToDisplay.length > 0) {
							fieldsToDisplay = data.fieldsToDisplay;
						}
						if (data.extraFieldsToDisplay && data.extraFieldsToDisplay.length > 0) {
							extraFieldsToDisplay = data.extraFieldsToDisplay;
						}
						break;
					}
				}
			}

			// Uninitialize the cellWidget
			cellWidget.uninitialize = lang.hitch(this, function() {
				var objsToDestroy = cellWidget.objectsToDestroy;
				if (objsToDestroy) {
					for ( var i in objsToDestroy) {
						if (objsToDestroy[i].destroyRecursive) {
							objsToDestroy[i].destroyRecursive();
						} else if (objsToDestroy[i].destroy) {
							objsToDestroy[i].destroy();
						}
					}
					cellWidget.objsToDestroy = null;
				}
				var objsToRemove = cellWidget.objectsToRemove;
				if (objsToRemove) {
					for ( var i in objsToRemove) {
						objsToRemove[i].remove();
					}
					cellWidget.objectsToRemove = null;
				}
			});

			// The decorators can add objects to these array that will be removed/destroyed in cellWidget.uninitialize
			if (cellWidget.objectsToRemove == null) {
				cellWidget.objectsToRemove = [];
			}
			if (cellWidget.objectsToDestroy == null) {
				cellWidget.objectsToDestroy = [];
			}

			_processFields(fieldsToDisplay, cellWidget.contentFieldData, cellWidget, item, this.grid.store);
			_processFields(extraFieldsToDisplay, cellWidget.contentExtraFieldData, cellWidget, item, this.grid.store);
		},

		/**
		 * Reference attribute decorator for magazine view. This decorator is called by contentCellValue.
		 * 
		 * @private
		 * @param cellWidget
		 *            Widget generated from the template provided in contentCellDecorator.
		 * @param domNode
		 *            The dom node to add the content to.
		 * @param name
		 *            The field display name.
		 * @param value
		 *            The field display value.
		 * @since 2.0.2
		 */
		referenceAttributeDecorator: function(cellWidget, domNode, name, value) {
			// Add the separator
			if (domNode.children && domNode.children.length > 0) {
				domConstruct.place(domConstruct.create("span", {
					"class": "labelValueSeparator",
					innerHTML: "|"
				}), domNode, "last");
			}

			// Add the label
			domConstruct.place(domConstruct.create("label", {
				innerHTML: string.substitute(ecm.messages.append_colon, [
					idxHtml.escapeHTML(name)
				])
			}), domNode, "last");

			// Add the value
			if (value && value.length > 0) {
				var str = [
					'<a onclick="ecm.widget.listView.ContentList.callMethod(\'' + this.id + '\', \'_showReferenceAttributeData\', \'' + cellWidget.cell.row.id + '\', \'',
					value,
					'\', event);">',
					this.messages.add_document_properties_label,
					'...</a>'
				].join('');
				domConstruct.place(domConstruct.create("span", {
					innerHTML: str
				}), domNode, "last");
			}
		},

		/**
		 * Child component decorator for magazine view. This decorator is called by contentCellValue.
		 * 
		 * @private
		 * @param cellWidget
		 *            Widget generated from the template provided in contentCellDecorator.
		 * @param domNode
		 *            The dom node to add the content to.
		 * @param name
		 *            The field display name.
		 * @param value
		 *            The field display value.
		 * @since 2.0.2
		 */
		childComponentDecorator: function(cellWidget, domNode, name, value) {
			// Add the separator
			if (domNode.children && domNode.children.length > 0) {
				domConstruct.place(domConstruct.create("span", {
					"class": "labelValueSeparator",
					innerHTML: "|"
				}), domNode, "last");
			}

			// Add the label
			domConstruct.place(domConstruct.create("label", {
				innerHTML: string.substitute(ecm.messages.append_colon, [
					idxHtml.escapeHTML(name)
				])
			}), domNode, "last");

			// Add the value
			if (value && value.length > 0) {
				var childComponentName = value.substring("@Child{'".length, value.length - 2); //@Child{'childComponentName'}
				var str = [
					'<a onclick="ecm.widget.listView.ContentList.callMethod(\'' + this.id + '\', \'_showChildComponentData\', \'' + cellWidget.cell.row.id + '\', \'',
					childComponentName,
					'\', event);">',
					this.messages.values_label,
					'...</a>'
				].join('');
				domConstruct.place(domConstruct.create("span", {
					innerHTML: str
				}), domNode, "last");
			}
		},

		/**
		 * Handles displaying CmThumbnails field. Called by contentCellValue if this field is in the extra fields to
		 * display. This method adds its content to the cellWidget.contentExtraFieldData and cellWidget.contentData.
		 * 
		 * @private
		 * @param cellWidget
		 *            Widget generated from the template provided in contentCellDecorator.
		 * @param domNode
		 *            The dom node to add the content to.
		 * @param name
		 *            The field display name.
		 * @param value
		 *            The field display value.
		 * @since 2.0.2
		 */
		contentCellDecoratorCmThumbnails: function(cellWidget, domNode, name, value) {
			// This method is needed to not display the CmThumbnails in the extra fields to display list.
			// Instead, the thumbnail is used in the magazine view for the first column of the grid.
		},

		/**
		 * Handles displaying the comment count field. Called by contentCellValue if this field is in the extra fields
		 * to display. This method adds its content to the cellWidget.contentExtraFieldData and cellWidget.contentData.
		 * 
		 * @private
		 * @param cellWidget
		 *            Widget generated from the template provided in contentCellDecorator.
		 * @param domNode
		 *            The dom node to add the content to.
		 * @param name
		 *            The field display name.
		 * @param value
		 *            The field display value.
		 * @since 2.0.2
		 */
		contentCellDecoratorClbCommentCount: function(cellWidget, domNode, name, value, field, data, addSeparator) {
			var rowId = cellWidget.cell.row.id;
			var item = this.grid.row(rowId).item();
			if (!item || !item.isCommentable(true))
				return addSeparator;

			var self = this;
			var rowNode = this.grid.body.getRowNode({
				'rowId': rowId
			});
			var rowExpanded = rowNode && rowNode.getAttribute("expandedComment") != undefined && rowNode.getAttribute("expandedComment") == "true";

			// Show the comment icon and clickable text containing the number of comments.
			var commentSpan = domConstruct.create("span", {});
			var span = domConstruct.create("span", {
				"class": "dijitInline ecmComments"
			}, commentSpan);
			domConstruct.create("img", {
				"class": "ecmStatusIcon ecmSocialStatusIcon " + item.getStateClass("docNotes"),
				alt: "",
				title: "",
				src: require.toUrl("dojo/resources/blank.gif")
			}, span);
			domConstruct.create("span", {
				"class": "ecmStatusIconChar",
				title: "",
				innerHTML: ecm.messages.has_notes_icon_char
			}, span);
			var href = domConstruct.create("a", {
				href: "javascript:;",
				"class": "commentAnchor",
				collapsed: true
			}, commentSpan);
			var labelNode = domConstruct.create("span", {
				"class": "commentLabel"
			}, href);
			_setCommentsLabel(item, labelNode);

			// When click the link, open/close the content data.  If opened it, then show a new ItemCommentsPane.
			href.rowNode = rowNode;
			href.onkeydown = function(evt) {
				var evt = window.event ? window.event : evt;
				if (evt.keyCode == keys.SPACE) {
					var expandedComment = this.rowNode.getAttribute("expandedComment");
					if (expandedComment != undefined && expandedComment == "true") {
						_collapseContentData(cellWidget.contentData, this.rowNode);
					} else {
						_createCommentPane(item, cellWidget.contentData, this.rowNode);
					}
					self.grid.resize();
				}
			};
			href.onclick = function(evt) {
				event.stop(evt);
				var expandedComment = this.rowNode.getAttribute("expandedComment");
				if (expandedComment != undefined && expandedComment == "true") {
					_collapseContentData(cellWidget.contentData, this.rowNode);
				} else {
					_createCommentPane(item, cellWidget.contentData, this.rowNode);
				}
				self.grid.resize();
				return false;
			};

			// When the grid resizes, resize the comment widget.
			var connectionGridResize = aspect.after(this.grid, "resize", lang.hitch(rowNode, function() {
				if (this.commentWidget) {
					this.commentWidget.resize();
				}
			}));
			cellWidget.objectsToRemove.push(connectionGridResize);

			// Add the separator
			if (addSeparator) {
				domConstruct.place(domConstruct.create("span", {
					"class": "labelValueSeparator",
					innerHTML: "|"
				}), domNode, "last");
			}

			// Add the comment domNode to the cellWidget social data.
			domConstruct.place(commentSpan, domNode, "last");

			// If the rowNode contentData was expanded, then re-display the comment widget in the expanded rowNode.
			// This happens when the item onChange causes the cell to re-render (i.e. when click Properties action or when save Properties).
			if (rowExpanded) {
				if (rowNode.commentWidget && rowNode.commentWidget.domNode && rowNode.commentWidget.domNode.childNodes && rowNode.commentWidget.domNode.childNodes.length > 0) { // To avoid recreating the widget which causes flittering, redisplay the ItemCommentsPane
					_showContentData(cellWidget.contentData, rowNode);
					domConstruct.place(rowNode.commentWidget.domNode, cellWidget.contentData, "only");
					setTimeout(function() {
						rowNode.commentWidget.scrollToLastRow();
					});
				} else {
					setTimeout(function() {
						_createCommentPane(item, cellWidget.contentData, rowNode);
						self.grid.resize();
					});
				}
			} else if (rowNode.commentWidget) {
				rowNode.commentWidget.destroy();
				rowNode.commentWidget = null;
			}
		},

		/**
		 * Handles displaying ClbDownloadCount field. Called by contentCellValue if this field is in the extra fields to
		 * display. This method adds its content to the cellWidget.contentExtraFieldData.
		 * 
		 * @private
		 * @param cellWidget
		 *            Widget generated from the template provided in contentCellDecorator.
		 * @param domNode
		 *            The dom node to add the content to.
		 * @param name
		 *            The field display name.
		 * @param value
		 *            The field display value.
		 * @since 2.0.2
		 */
		contentCellDecoratorClbDownloadCount: function(cellWidget, domNode, name, value, field, data, addSeparator) {
			var rowId = cellWidget.cell.row.id;
			var item = this.grid.row(rowId).item();
			if (!item || !item.isDownloadCountable(true))
				return addSeparator;

			// Add the separator
			if (addSeparator) {
				domConstruct.place(domConstruct.create("span", {
					"class": "labelValueSeparator",
					innerHTML: "|"
				}), domNode, "last");
			}

			var downloadSpan = domConstruct.create("span", {});
			var downloadCount = new DownloadCount({
				"class": "dijitInline",
				showWhoLink: false,
				item: item,
				count: item.getValue("ClbDownloadCount")
			});
			domConstruct.place(downloadCount.domNode, downloadSpan, "last");
			domConstruct.place(downloadSpan, domNode, "last");
			downloadCount.startup();
		},

		/**
		 * Handles displaying ClbRecommendationCount field. Called by contentCellValue if this field is in the extra
		 * fields to display. This method adds its content to the cellWidget.contentExtraFieldData.
		 * 
		 * @private
		 * @param cellWidget
		 *            Widget generated from the template provided in contentCellDecorator.
		 * @param domNode
		 *            The dom node to add the content to.
		 * @param name
		 *            The field display name.
		 * @param value
		 *            The field display value.
		 * @since 2.0.3
		 */
		contentCellDecoratorClbRecommendationCount: function(cellWidget, domNode, name, value, field, data, addSeparator) {
			var rowId = cellWidget.cell.row.id;
			var item = this.grid.row(rowId).item();
			if (!item || !item.isRecommendable(true))
				return addSeparator;

			// Add the separator
			if (addSeparator) {
				domConstruct.place(domConstruct.create("span", {
					"class": "labelValueSeparator",
					innerHTML: "|"
				}), domNode, "last");
			}

			var recommendationSpan = domConstruct.create("span", {});
			var recommendations = new Recommendations({
				"class": "dijitInline",
				showWhoLink: false,
				item: item,
				count: item.getValue("ClbRecommendationCount"),
				verboseLink: item._myRecommendationId !== undefined
			});
			domConstruct.place(recommendations.domNode, recommendationSpan, "last");
			domConstruct.place(recommendationSpan, domNode, "last");
			recommendations.startup();
		},

		/**
		 * Handles displaying folder path. Called by contentCellValue if this field is in the extra fields to display.
		 * This method adds its content to the cellWidget.contentExtraFieldData.
		 * 
		 * @private
		 * @param cellWidget
		 *            Widget generated from the template provided in contentCellDecorator.
		 * @param domNode
		 *            The dom node to add the content to.
		 * @param name
		 *            The field display name.
		 * @param value
		 *            The field display value.
		 * @since 2.0.3.5
		 */
		contentCellDecoratorFolderPath: function(cellWidget, domNode, name, value, field, data, addSeparator) {
			// Add the separator
			if (addSeparator) {
				domConstruct.place(domConstruct.create("span", {
					"class": "labelValueSeparator",
					innerHTML: "|"
				}), domNode, "last");
			}

			var maninDiv = domConstruct.place(domConstruct.create("div", {}), domNode, "last");
			domConstruct.create("img", {
				"class": "ecmMimeTypeIcon dijitIconFolderClosed",
				alt: "",
				title: "",
				src: require.toUrl("dojo/resources/blank.gif")
			}, maninDiv, "last");

			var text = idxHtml.escapeHTML(value);
			var textDir = cellWidget.cell.grid.getTextDir(cellWidget.cell.column.id, text);
			var dir = "";
			if (textDir) {
				dir = " dir='" + textDir + "'";
				domNode.dir = cellWidget.isLeftToRight() ? "ltr" : "rtl";
			}
			// Add the label and value
			domConstruct.place(domConstruct.create("span", {
				innerHTML: "&nbsp;<label>" + string.substitute(ecm.messages.append_colon, [
					idxHtml.escapeHTML(name)
				]) + "</label>&nbsp;<span class='value'" + dir + " >" + idxHtml.escapeHTML(value) + "</span>"
			}), maninDiv, "last");

			return false; // No separator needed for next item because this is on its own line.
		},

		/**
		 * Handles displaying tags field. Called by contentCellValue if this field is in the extra fields to display.
		 * This method adds its content to the cellWidget.contentExtraFieldData.
		 * 
		 * @private
		 * @param cellWidget
		 *            Widget generated from the template provided in contentCellDecorator.
		 * @param domNode
		 *            The dom node to add the content to.
		 * @param name
		 *            The field display name.
		 * @param value
		 *            The field display value.
		 * @since 2.0.3
		 */
		contentCellDecoratorClbTags: function(cellWidget, domNode, name, value, field, data, addSeparator) {
			var rowId = cellWidget.cell.row.id;
			var item = this.grid.row(rowId).item();
			if (!item || !item.isTaggable(true))
				return addSeparator;

			// Add the separator
			if (addSeparator) {
				domConstruct.place(domConstruct.create("span", {
					"class": "labelValueSeparator",
					innerHTML: "|"
				}), domNode, "last");
			}

			var tagName = data && data.domTagName ? data.domTagName : "span";
			var tagSpan = domConstruct.create(tagName, {
				"style": "white-space: nowrap"
			});
			var span = domConstruct.create("span", {
				"class": "dijitInline ecmTags"
			}, tagSpan);
			domConstruct.create("img", {
				"class": "ecmStatusIcon ecmSocialStatusIcon " + item.getStateClass("docTag"),
				alt: "",
				title: "",
				src: require.toUrl("dojo/resources/blank.gif")
			}, span);
			domConstruct.create("span", {
				"class": "ecmStatusIconChar",
				title: "",
				innerHTML: ecm.messages.docTag_icon_char
			}, span);

			var tagsParams = {
				"class": "dijitInline",
				item: item,
				tags: item.getValue(item.getTagsPropertyName())
			};
			if (data && data.maxLabelTags)
				tagsParams.maxLabelTags = data.maxLabelTags;
			if (data && data.maxLabelWidth)
				tagsParams.maxLabelWidth = data.maxLabelWidth;

			var tags = new Tags(tagsParams);
			domConstruct.place(tags.domNode, tagSpan, "last");

			var pos = data && data.domPosition ? data.domPosition : "last";
			domConstruct.place(tagSpan, domNode, pos);

			var conn = aspect.after(cellWidget, "startup", function() {
				tags.updateLabel();
			});
			cellWidget.objectsToRemove.push(conn);
		},

		/**
		 * Handles decoration of the content column for the magazine view on the search pane and browse pane for Content
		 * Manager connections.
		 * 
		 * @param data
		 *            Cell data in the grid.
		 * @param rowId
		 *            Id of the row containing the cell.
		 * @param rowIndex
		 *            Index of the row containing the cell.
		 * @deprecated as of 2.0.2. Use contentCellDecorator.
		 */
		contentCellDecoratorCM8: function(data, rowId, rowIndex) {
			var item = this.grid.row(rowId).item();
			return createContentCellFromItem(item, rowId, "modifiedBy", "modifiedTimestamp");
		},

		/**
		 * Handles decoration of the content column for the magazine view on the search pane and browse pane for FileNet
		 * Content Manager connections.
		 * 
		 * @param data
		 *            Cell data in the grid.
		 * @param rowId
		 *            Id of the row containing the cell.
		 * @param rowIndex
		 *            Index of the row containing the cell.
		 * @deprecated as of 2.0.2. Use contentCellDecorator.
		 */
		contentCellDecoratorP8: function(data, rowId, rowIndex) {
			var item = this.grid.row(rowId).item();
			return createContentCellFromItem(item, "LastModifier", "DateLastModified");
		},

		/**
		 * Handles decoration of the content column for the magazine view on the search pane and browse pane for Content
		 * Management Interoperability Services (CMIS) connections.
		 * 
		 * @param data
		 *            Cell data in the grid.
		 * @param rowId
		 *            Id of the row containing the cell.
		 * @param rowIndex
		 *            Index of the row containing the cell.
		 * @deprecated as of 2.0.2. Use contentCellDecorator.
		 */
		contentCellDecoratorCMIS: function(data, rowId, rowIndex) {
			var item = this.grid.row(rowId).item();
			return createContentCellFromItem(item, "cmis:lastModifiedBy", "cmis:lastModificationDate");
		},

		/**
		 * Handles decoration of the content column for the magazine view on the search pane for Content Manager
		 * OnDemand repositories.
		 * 
		 * @param data
		 *            Cell data in the grid.
		 * @param rowId
		 *            Id of the row containing the cell.
		 * @param rowIndex
		 *            Index of the row containing the cell.
		 */
		contentCellDecoratorOD: function(data, rowId, rowIndex) {
			var item = this.grid.row(rowId).item();
			var contentStr = "";
			var summary = "";
			var highlightSummary = "";

			// Add first three non-icon fields to the content section of the magazine view and
			// get the summary if any exists.
			var resultSet = item.resultSet;
			if (resultSet && resultSet.structure) {
				var cells = resultSet.structure.cells;
				if (cells) {
					var fieldCount = 0;
					for ( var i in cells[0]) {
						var cell = cells[0][i];
						var field = cell.field;
						var type = item.getAttributeType(field);

						if (field != "multiStateIcon" && field != "mimeTypeIcon" && type != "xs:summary" && type != "xs:highlight" && fieldCount < 3) {
							if (fieldCount > 0)
								contentStr += "&nbsp;|&nbsp;";
							contentStr += "<label>" + string.substitute(ecm.messages.append_colon, [
								cell.name
							]) + "</label>&nbsp;" + (item.getDisplayValue ? item.getDisplayValue(field) : item.getValue(field));
							fieldCount++;
						}

						if (type == "xs:summary")
							summary += (item.getDisplayValue ? item.getDisplayValue(field) : item.getValue(field));
						if (type == "xs:highlight")
							highlightSummary += (item.getDisplayValue ? item.getDisplayValue(field) : item.getValue(field));
					}
				}
			}

			var summaryStr = "";
			if (highlightSummary.length > 0) {
				summaryStr = '<div class="summary">' + highlightSummary + '</div>';
			} else if (summary.length > 0) {
				summaryStr = '<div class="summary">' + summary + '</div>';
			}

			var stateIconValue = common.multiStateIcon(item, this._states, false);
			var stateIcons = null;
			if (stateIconValue)
				stateIcons = stateIconValue.toString();

			if (!stateIcons || stateIcons == "&nbsp;")
				stateIcons = "";
			else
				stateIcons += "&nbsp;";

			return [
				'<div style="width:100%"><div class="contentStateTitle"><span data-dojo-attach-point="contentStateIcons" class="contentState">',
				stateIcons,
				'</span><a class="title" href="javascript:;" onclick="event.preventDefault(); ',
				'event.stopPropagation(); ',
				'ecm.widget.listView.ContentList.callMethod(\'',
				this.id,
				'\', \'_performDefaultActionForRowId\', \'',
				rowId,
				'\'); ',
				'return false; ">',
				idxHtml.escapeHTML(item.name),
				'</a></div>',
				'<div class="content">',
				summaryStr,
				contentStr,
				'</div></div>'
			].join('');
		},

		/**
		 * Handles decoration of the content column in the favorites magazine view.
		 * 
		 * @param data
		 *            Cell data in the grid.
		 * @param rowId
		 *            Id of the row containing the cell.
		 * @param rowIndex
		 *            Index of the row containing the cell.
		 */
		contentCellDecoratorFavorite: function(data, rowId, rowIndex) {
			var item = this.grid.row(rowId).item();
			var name = item.getValue("label") || item.getValue("{NAME}");

			var dir = this.grid.textDir ? (this.isLeftToRight() ? ' dir = "ltr" ' : ' dir = "rtl" ') : "";
			var reposStr = "";
			if (Desktop.repositories.length > 1) {
				var reposLabel = item.getValue("repositoryLabel") || ecm.messages.repository_label;
				var reposName = "";
				if (this.grid.enforceTextDirWithUcc(0, item.getValue("repositoryName"))) {
					reposName = this.grid.enforceTextDirWithUcc(0, item.getValue("repositoryName"));
				} else if (item.repository && item.repository.name) {
					reposName = item.repository.name;
				}
				reposStr = "<label>" + string.substitute(ecm.messages.append_colon, [
					reposLabel
				]) + "</label>&nbsp;<div class='dijitInline value'" + dir + " >" + idxHtml.escapeHTML(reposName) + "</div>";
			}

			// Display the state icons
			var stateIcons = "";
			if (item && item.item) {
				var stateIconValue = common.multiStateIcon(item.item, this._states, false);
				stateIcons = stateIconValue ? stateIconValue.toString() : null;
				if (!stateIcons || stateIcons == "&nbsp;")
					stateIcons = "";
				else
					stateIcons += "&nbsp;";
			}

			return [
				'<div><div class="contentStateTitle">',
				'<span class="contentState">',
				stateIcons,
				'</span>',
				'<a class="title" href="javascript:;" onclick="event.preventDefault(); ',
				'event.stopPropagation(); ',
				'ecm.widget.listView.ContentList.callMethod(\'',
				this.id,
				'\', \'_performDefaultActionForRowId\', \'',
				rowId,
				'\'); ',
				'return false; ">',
				this.grid.enforceTextDirWithUcc(0, idxHtml.escapeHTML(name)),
				'</a></div>',
				'<div style="width: 100%" class="content"',
				dir,
				'>',
				reposStr,
				'</div></div>'
			].join('');
		},

		/**
		 * Handles decoration of the content column in the favorites magazine view when sync is enabled.
		 * 
		 * @since 2.0.3
		 */
		contentCellDecoratorFavoriteSync: function() {
			return [
				"<div style='width: 100%' data-dojo-attach-point='contentDiv'>",
				"<div class='contentStateTitle' data-dojo-attach-point='titleData'>",
				"<span data-dojo-attach-point='contentStateIcons' class='contentState'></span>",
				"<a class='title' href='javascript:;' data-dojo-attach-point='contentNameAnchor'></a></div>",
				"<div data-dojo-attach-point='contentFieldData' class='content'></div>"
			].join('');
		},

		/**
		 * Setups the content cellWidget in the favorites magazine view when sync is enabled.
		 * 
		 * @param gridData
		 *            Contains the data in the grid cell. This will be null in this case, because the comment list
		 *            relies on retrieving the information from the actual item used to populate the row.
		 * @param storeData
		 *            Contains store data. This will be null in this method, because the appropriate flags are not
		 *            applied to the Grid to obtain raw store data in this method (it is not needed). See comments in
		 *            gridx/modules/CellWidget in the GridX documentation for details:
		 *            http://oria.github.io/gridx/gallery.html.
		 * @param cellWidget
		 *            Widget generated from the template provided in contentCellDecorator.
		 * @since 2.0.3
		 */
		contentCellValueFavoriteSync: function(gridData, storeData, cellWidget) {
			var rowId = cellWidget.cell.row.id;
			var item = this.grid.row(rowId).item();

			var name = item.getValue("label") || item.getValue("{NAME}");
			var reposLabel = item.getValue("repositoryLabel") || ecm.messages.repository_label;
			var reposName = "";
			if (this.grid.enforceTextDirWithUcc(0, item.getValue("repositoryName"))) {
				reposName = this.grid.enforceTextDirWithUcc(0, item.getValue("repositoryName"));
			} else if (item.repository && item.repository.name) {
				reposName = item.repository.name;
			}
			var dir = this.grid.textDir ? (this.isLeftToRight() ? ' dir = "ltr" ' : ' dir = "rtl" ') : "";

			cellWidget.contentNameAnchor.innerHTML = this.grid.enforceTextDirWithUcc(0, idxHtml.escapeHTML(name));
			cellWidget.contentNameAnchor.onclick = lang.hitch(this, function(evt) {
				event.stop(evt);
				ecm.widget.listView.ContentList.callMethod(this.id, '_performDefaultActionForRowId', rowId);
				return false;
			});

			cellWidget.contentFieldData.setAttribute("dir", dir);

			// Display the state icons
			var stateIcons = "";
			var stateIcons = "";
			if (item && item.item) {
				var stateIconValue = common.multiStateIcon(item.item, this._states, false);
				if (item.mimetype == "teamspace") {
					stateIconValue = common.stateIcon(item.item);
				}
				stateIcons = stateIconValue ? stateIconValue.toString() : null;
				if (!stateIcons || stateIcons == "&nbsp;")
					stateIcons = "";
				else
					stateIcons += "&nbsp;";
			}
			cellWidget.contentStateIcons.innerHTML = stateIcons;

			if (item && item.syncEnabled) {

				var itemToSync = item;
				if (item.item) {
					itemToSync = item.item;
				}

				var syncImg = domConstruct.create("img", {
					src: require.toUrl("dojo/resources/blank.gif"),
					'className': item.getStateClass("syncEnabled") + "Magazine",
					alt: ecm.messages.sync_favorite_enable_hover,
					title: ecm.messages.sync_favorite_enable_hover,
					onclick: function(evt) {
						Desktop.syncServer.disableSyncForItems([
							itemToSync
						]);
						itemToSync.syncEnabled = false;
						item.syncEnabled = false;
					}
				});
				domConstruct.place(syncImg, cellWidget.contentStateIcons, "last");
				domConstruct.place(document.createTextNode(" "), cellWidget.contentStateIcons, "last");
			}

			// Add the label and value
			if (Desktop.repositories.length > 1) {
				domConstruct.place(domConstruct.create("div", {
					"class": "dijitInline",
					innerHTML: "<label>" + string.substitute(ecm.messages.append_colon, [
						idxHtml.escapeHTML(reposLabel)
					]) + "</label>&nbsp;<div class='dijitInline value'" + dir + " >" + idxHtml.escapeHTML(reposName) + "</div>"
				}), cellWidget.contentFieldData, "only");
			}
		},

		/**
		 * Handles decoration of the comment.
		 * 
		 * @param data
		 *            Cell data in the grid.
		 * @param rowId
		 *            Id of the row containing the cell.
		 * @param rowIndex
		 *            Index of the row containing the cell.
		 */
		contentCellDecoratorNotelog: function(data, rowId, rowIndex) {
			var item = this.grid.row(rowId).item();
			var text = item.getValue("commentText");
			text = this.grid.enforceTextDirWithUcc(0, idxHtml.escapeHTML(text).replace(/\n/g, "<br>"));
			var originator = item.getValue("originator");
			var dateAdded = item.getValue("dateAdded");

			return [
				"<div class='contentRow'><div class='contentColumnText'>",
				text,
				"</div>",
				"<div class='contentColumnStamp'>",
				this.grid.enforceTextDirWithUcc(0, idxHtml.escapeHTML(originator)) + '&emsp;&emsp;&emsp;' + idxHtml.escapeHTML(dateAdded),
				"</div>",
				"</div>"
			].join('');
		},

		/**
		 * Handles decoration of the content column for teamspace and teamspace template lists. This method creates the
		 * widget template and relies on contentCellValueTeamspaces to handle the actual data population of the cell.
		 * 
		 * @param data
		 *            Cell data in the grid.
		 * @param rowId
		 *            Id of the row containing the cell.
		 * @param rowIndex
		 *            Index of the row containing the cell.
		 */
		contentCellDecoratorTeamspaces: function(data, rowId, rowIndex) {
			var item = this.grid.row(rowId).item();
			var name = item.getValue("name");
			if (item.state == "default") {
				name += " (" + ecm.messages.repository_tab_DefaultTemplate + ")";
			}

			var stateIconValue = common.stateIcon(item);
			var stateIcons = stateIconValue ? stateIconValue.toString() : null;
			if (!stateIcons || stateIcons == "&nbsp;")
				stateIcons = "";
			else
				stateIcons += "&nbsp;";

			var description = item.getValue("desc");
			var contentStr = "";
			if (description && description.length > 0) {
				contentStr += '<span class="summary">' + this.grid.enforceTextDirWithUcc(0, idxHtml.escapeHTML(description)) + '</span><br>';
			}

			var modifiedByLabel;
			var modifiedTimestampLabel;
			if (this._magazineView) {
				for (var i = 0; i < this._magazineView.length; i++) {
					var data = this._magazineView[i];
					if (data.field == "lastModified") {
						modifiedTimestampLabel = data.name;
					} else if (data.field == "lastModifiedUser") {
						modifiedByLabel = data.name;
					}
				}
			}
			if (!modifiedByLabel)
				modifiedByLabel = ecm.messages.modified_label;
			var modifiedBy = item.getDisplayValue ? item.getDisplayValue("lastModifiedUser") : item.getValue("lastModifiedUser");
			if (!modifiedTimestampLabel)
				modifiedTimestampLabel = ecm.messages.modified_date_label;
			var stateLabel = ecm.messages.status_label;
			var modifiedTimestamp = item.getDisplayValue ? item.getDisplayValue("lastModified") : item.getValue("lastModified");
			contentStr += '<label>' + modifiedByLabel + '</label>&nbsp;' + this.grid.enforceTextDirWithUcc(0, modifiedBy) + '<span class="labelValueSeparator">|</span><label>' + modifiedTimestampLabel + '</label>&nbsp;' + modifiedTimestamp;
			if (item.type == "template" || item.type == "instance") {
				var stateMsg = null;
				if (item.state == "validate")
					stateMsg = ecm.messages.workspace_stat_validate;
				else if (item.state == "offline")
					stateMsg = ecm.messages.workspace_stat_offline;
				else if (item.state == "pendingDelete")
					stateMsg = ecm.messages.workspace_stat_pendingDelete;
				else if (item.state == "deleteError")
					stateMsg = ecm.messages.workspace_stat_deleteError;
				else if (item.state != "deleted")
					stateMsg = ecm.messages.workspace_stat_online;
				contentStr += '<span class="labelValueSeparator">|</span><label>' + stateLabel + '</label>&nbsp;' + stateMsg;
			}

			if (item.state == "offline" && item.type == "instance" && !item.currentUserIsOwner) {
				return [
					'<div style="width: 100%">',
					stateIcons,
					'<div class="title">',
					this.grid.enforceTextDirWithUcc(0, idxHtml.escapeHTML(name)),
					'</div><br>',
					'<div class="content">',
					contentStr,
					'</div></div>'
				].join('');

			} else {
				return [
					"<span data-dojo-attach-point='contentStateIcons' class='contentState'>",
					'<div style="width: 100%">',
					stateIcons,
					'<a class="title" href="javascript:;" onclick="event.preventDefault(); ',
					'event.stopPropagation(); ',
					'ecm.widget.listView.ContentList.callMethod(\'',
					this.id,
					'\', \'_performDefaultActionForRowId\', \'',
					rowId,
					'\'); ',
					'return false; ">',
					this.grid.enforceTextDirWithUcc(0, idxHtml.escapeHTML(name)),
					'</a><br>',
					'<div class="content">',
					contentStr,
					'</div></div>'
				].join('');
			}
		},

		/**
		 * Handles decoration of the content column in teamspace magazine view when sync is enabled.
		 * 
		 * @since 2.0.3.6
		 */
		contentCellDecoratorTeamspacesSync: function() {
			return [
				"<div style='width: 100%' data-dojo-attach-point='contentDiv'>",
				"<div class='contentStateTitle' data-dojo-attach-point='titleData'><span data-dojo-attach-point='contentStateIcons' class='contentState'></span><span data-dojo-attach-point='contentNameWithoutLink'></span><a class='title' href='javascript:;' data-dojo-attach-point='contentNameAnchor'><span data-dojo-attach-point='contentName'></span></a></div>",
				"<div data-dojo-attach-point='contentData' class='content'></div>",
				"</div>"
			].join('');
		},

		/**
		 * Setups the content cellWidget in the teamspace magazine view when sync is enabled.
		 * 
		 * @param gridData
		 *            Contains the data in the grid cell. This will be null in this case, because the comment list
		 *            relies on retrieving the information from the actual item used to populate the row.
		 * @param storeData
		 *            Contains store data. This will be null in this method, because the appropriate flags are not
		 *            applied to the Grid to obtain raw store data in this method (it is not needed). See comments in
		 *            gridx/modules/CellWidget in the GridX documentation for details:
		 *            http://oria.github.io/gridx/gallery.html.
		 * @param cellWidget
		 *            Widget generated from the template provided in contentCellDecoratorTeamspaces.
		 * @since 2.0.3.5
		 */
		contentCellValueTeamspaceSync: function(gridData, storeData, cellWidget) {
			var rowId = cellWidget.cell.row.id;
			var item = this.grid.row(rowId).item();
			var name = item.getValue("name");
			if (item.state == "default") {
				name += " (" + ecm.messages.repository_tab_DefaultTemplate + ")";
			}

			if (item.state == "offline" && item.type == "instance" && !item.currentUserIsOwner) {
				cellWidget.contentNameWithoutLink.innerHTML = this.grid.enforceTextDirWithUcc(0, idxHtml.escapeHTML(name));
			} else {
				cellWidget.contentNameAnchor.innerHTML = this.grid.enforceTextDirWithUcc(0, idxHtml.escapeHTML(name));
				cellWidget.contentNameAnchor.onclick = lang.hitch(this, function(evt) {
					evt.preventDefault();
					evt.stopPropagation();
					ecm.widget.listView.ContentList.callMethod(this.id, '_performDefaultActionForRowId', rowId);
					return false;
				});
			}

			var stateIconValue = common.stateIcon(item);
			var stateIcons = stateIconValue ? stateIconValue.toString() : null;
			if (!stateIcons || stateIcons == "&nbsp;")
				stateIcons = "";
			else
				stateIcons += "&nbsp;";

			cellWidget.contentStateIcons.innerHTML = stateIcons;

			if (item && item.syncEnabled) {

				var itemToSync = item;
				if (item.item) {
					itemToSync = item.item;
				}

				var syncImg = domConstruct.create("img", {
					src: require.toUrl("dojo/resources/blank.gif"),
					'className': item.getStateClass("syncEnabled") + "Magazine",
					alt: ecm.messages.sync_favorite_enable_hover,
					title: ecm.messages.sync_favorite_enable_hover,
					onclick: function(evt) {
						Desktop.syncServer.disableSyncForItems([
							itemToSync
						]);
						itemToSync.syncEnabled = false;
						item.syncEnabled = false;
					}
				});
				domConstruct.place(syncImg, cellWidget.contentStateIcons, "last");
			}

			var description = item.getValue("desc");
			var contentStr = "";
			if (description && description.length > 0) {
				contentStr += '<span class="summary">' + this.grid.enforceTextDirWithUcc(0, idxHtml.escapeHTML(description)) + '</span><br>';
			}

			var modifiedByLabel;
			var modifiedTimestampLabel;
			if (this._magazineView) {
				for (var i = 0; i < this._magazineView.length; i++) {
					var data = this._magazineView[i];
					if (data.field == "lastModified") {
						modifiedTimestampLabel = data.name;
					} else if (data.field == "lastModifiedUser") {
						modifiedByLabel = data.name;
					}
				}
			}
			if (!modifiedByLabel)
				modifiedByLabel = ecm.messages.modified_label;
			var modifiedBy = item.getDisplayValue ? item.getDisplayValue("lastModifiedUser") : item.getValue("lastModifiedUser");
			if (!modifiedTimestampLabel)
				modifiedTimestampLabel = ecm.messages.modified_date_label;
			var stateLabel = ecm.messages.status_label;
			var modifiedTimestamp = item.getDisplayValue ? item.getDisplayValue("lastModified") : item.getValue("lastModified");
			contentStr += '<label>' + modifiedByLabel + '</label>&nbsp;' + this.grid.enforceTextDirWithUcc(0, modifiedBy) + '<span class="labelValueSeparator">|</span><label>' + modifiedTimestampLabel + '</label>&nbsp;' + modifiedTimestamp;
			if (item.type == "template" || item.type == "instance") {
				var stateMsg = null;
				if (item.state == "validate")
					stateMsg = ecm.messages.workspace_stat_validate;
				else if (item.state == "offline")
					stateMsg = ecm.messages.workspace_stat_offline;
				else if (item.state == "pendingDelete")
					stateMsg = ecm.messages.workspace_stat_pendingDelete;
				else if (item.state == "deleteError")
					stateMsg = ecm.messages.workspace_stat_deleteError;
				else if (item.state != "deleted")
					stateMsg = ecm.messages.workspace_stat_online;
				contentStr += '<span class="labelValueSeparator">|</span><label>' + stateLabel + '</label>&nbsp;' + stateMsg;
			}

			cellWidget.contentData.innerHTML = contentStr;

		},

		/**
		 * Handles decoration of the plugin in the about dialog.
		 * 
		 * @param data
		 *            Cell data in the grid.
		 * @param rowId
		 *            Id of the row containing the cell.
		 * @param rowIndex
		 *            Index of the row containing the cell.
		 * @since 2.0.2
		 */
		aboutDialogContentCellDecorator: function(data, rowId, rowIndex) {
			var item = this.grid.row(rowId).item();
			return [
				"<div style='width: 100%'>",
				"<div class='pluginTitle'>",
				idxHtml.escapeHTML(this.grid.store.getValue(item, "name")),
				"</div>",
				"<div class='pluginId'>",
				idxHtml.escapeHTML(this.grid.store.getValue(item, "id")),
				"</div>",
				"<div class='pluginVersion'>",
				idxHtml.escapeHTML(this.grid.store.getValue(item, "version")),
				"</div>",
				"<div class='pluginLicense'>",
				idxHtml.escapeHTML(this.grid.store.getValue(item, "copyright")),
				"</div>",
				"</div>"
			].join('');
		},

		/**
		 * Handles decoration of the content column in the favorites magazine view.
		 * 
		 * @param data
		 *            Cell data in the grid.
		 * @param rowId
		 *            Id of the row containing the cell.
		 * @param rowIndex
		 *            Index of the row containing the cell.
		 */
		navigationContentCellDecorator: function(data, rowId, rowIndex) {
			var item = this.grid.row(rowId).item();
			var name = item.getValue("label") || item.getValue("{NAME}");

			var dir = this.grid.textDir ? (this.isLeftToRight() ? ' dir = "ltr" ' : ' dir = "rtl" ') : "";

			return [
				'<div><a class="title" href="javascript:;">',
				this.grid.enforceTextDirWithUcc(0, idxHtml.escapeHTML(name)),
				'</a></div>'
			].join('');
		}
	};
});
