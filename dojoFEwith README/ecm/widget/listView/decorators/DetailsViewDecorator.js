/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/lang",
	"dojo/string",
	"dojo/dom-construct",
	"./common",
	"ecm/model/Desktop",
	"ecm/model/Teamspace"
], function(lang, string, domConstruct, common, Desktop, Teamspace) {

	/**
	 * @name ecm.widget.listView.DetailsViewDecorator
	 * @class Contains the details view decorators.
	 */
	return {
		/** @lends ecm.widget.listView.DetailsViewDecorator */

		/**
		 * Decorator that shows the reference attribute on click.
		 * 
		 * @param data
		 *            Data contained in the cell.
		 * @param rowId
		 *            Id of the row containing the cell.
		 * @param rowIndex
		 *            Index of the row containing the cell.
		 */
		referenceAttributeDecorator: function(data, rowId, rowIndex) {
			if (data && data.length > 0) {
				return [
					'<a onclick="ecm.widget.listView.ContentList.callMethod(\'' + this.id + '\', \'_showReferenceAttributeData\', \'' + rowId + '\', \'',
					data,
					'\', event);">',
					this.messages.add_document_properties_label,
					'...</a>'
				].join('');
			} else {
				return '';
			}
		},

		/**
		 * Decorator that shows the child component on click.
		 * 
		 * @param data
		 *            Data contained in the cell.
		 * @param rowId
		 *            Id of the row containing the cell.
		 * @param rowIndex
		 *            Index of the row containing the cell.
		 */
		childComponentDecorator: function(data, rowId, rowIndex) {
			if (data && data.length > 0) {
				var childComponentName = data.substring("@Child{'".length, data.length - 2); //@Child{'childComponentName'}
				return [
					'<a onclick="ecm.widget.listView.ContentList.callMethod(\'' + this.id + '\', \'_showChildComponentData\', \'' + rowId + '\', \'',
					childComponentName,
					'\', event);">',
					this.messages.values_label,
					'...</a>'
				].join('');
			} else {
				return '';
			}
		},

		/**
		 * Decorator that renders a single icon state.
		 * 
		 * @param data
		 *            Data contained in the cell.
		 * @param rowId
		 *            Id of the row containing the cell.
		 * @param rowIndex
		 *            Index of the row containing the cell.
		 */
		iconDecorator: function(data, rowId, rowIndex) {
			var item = this.grid.row(rowId).item();
			return common.stateIcon(item);
		},

		/**
		 * A decorator that renders multiple states.
		 * 
		 * @param data
		 *            Data contained in the cell.
		 * @param rowId
		 *            Id of the row containing the cell.
		 * @param rowIndex
		 *            Index of the row containing the cell.
		 */
		multiStateDecorator: function(data, rowId, rowIndex) {
			var item = this.grid.row(rowId).item();
			return common.multiStateIcon(item, this._states, true);
		},

		/**
		 * Decorator that displays a mime-specific icon.
		 * 
		 * @param data
		 *            Data contained in the cell.
		 * @param rowId
		 *            Id of the row containing the cell.
		 * @param rowIndex
		 *            Index of the row containing the cell.
		 */
		mimeTypeDecorator: function(data, rowId, rowIndex) {
			var item = this.grid.row(rowId).item();
			if (item.item) {
				item = item.item;
			}
			return common.mimeTypeIconWithOpenItem(item, this.id, rowId);
		},

		/**
		 * Decorator that displays the icon for the preserve direct permissions for the security policy selector.
		 * 
		 * @param data
		 *            Data contained in the cell.
		 * @param rowId
		 *            Id of the row containing the cell.
		 * @param rowIndex
		 *            Index of the row containing the cell.
		 * @since 2.0.3
		 */
		preserveDirectPermissionsDecorator: function(data, rowId, rowIndex) {
			var item = this.grid.row(rowId).item();
			var blankGif = require.toUrl("dojo/resources/blank.gif");
			if (data) {
				var altText = ecm.messages.entry_template_security_policy_preserve_true_hover;
				var img = '<img role="img" class="ecmMimeTypeIcon preserveDirectPermissionsTrueIcon" alt="' + altText + '" title="' + altText + '" src="' + blankGif + '" />';
				img += '<span class="ecmMimeTypeIconChar" title="' + altText + '" >' + ecm.messages.entry_template_security_policy_preserve_true_char + '</span>';
				return img;
			} else {
				var altText = ecm.messages.entry_template_security_policy_preserve_false_hover;
				var img = '<img role="img" class="ecmMimeTypeIcon preserveDirectPermissionsFalseIcon" alt="' + altText + '" title="' + altText + '" src="' + blankGif + '" />';
				img += '<span class="ecmMimeTypeIconChar" title="' + altText + '" >' + ecm.messages.entry_template_security_policy_preserve_false_char + '</span>';
				return img;
			}
		},

		/**
		 * Decorator that displays the icon for the teamspace.
		 * 
		 * @param data
		 *            Data contained in the cell.
		 * @param rowId
		 *            Id of the row containing the cell.
		 * @param rowIndex
		 *            Index of the row containing the cell.
		 */
		teamspaceIconDecorator: function(data, rowId, rowIndex) {
			var item = this.grid.row(rowId).item();
			var htmlStr = '';
			var className = item.getMimeClass() + "Small";
			var blankGif = require.toUrl("dojo/resources/blank.gif");
			var title;
			if (item && item.isInstanceOf(Teamspace)) {
				title = item.getStateMessage();
			}
			if (item.type == "template")
				htmlStr += '<img role="presentation" class="' + className + '" alt="' + ecm.messages.teamspace_template_icon_title + '" title="' + title + '" src="' + blankGif + '" onclick="ecm.widget.listView.ContentList.callMethod(\'' + this.id + '\', \'_performDefaultActionForRowId\', \'' + rowId + '\');"/>';
			else if (item.type == "instance")
				htmlStr += '<img role="presentation" class="' + className + '" alt="' + ecm.messages.teamspace_icon_title + '" title="' + title + '" src="' + blankGif + '" onclick="ecm.widget.listView.ContentList.callMethod(\'' + this.id + '\', \'_performDefaultActionForRowId\', \'' + rowId + '\');"/>';
			else
				htmlStr += '&nbsp;';

			return htmlStr;
		},

		/**
		 * Decorator that displays a display name for the teamspace state value.
		 * 
		 * @param data
		 *            Data contained in the cell.
		 * @param rowId
		 *            Id of the row containing the cell.
		 * @param rowIndex
		 *            Index of the row containing the cell.
		 */
		teamspaceStateLabelDecorator: function(data, rowId, rowIndex) {
			var item = this.grid.row(rowId).item();
			if (item.type == "template" || item.type == "instance") {
				var stateMsg = null;
				if (item.state == "validate")
					stateMsg = ecm.messages.workspace_stat_validate;
				else if (item.state == "offline")
					stateMsg = ecm.messages.workspace_stat_offline;
				else if (item.state == "pendingDelete")
					stateMsg = ecm.messages.workspace_stat_pendingDelete;
				else if (item.state == "errorDelete")
					stateMsg = ecm.messages.workspace_stat_deleteError;
				else
					stateMsg = ecm.messages.workspace_stat_online;
			}
			return stateMsg;
		},

		/**
		 * Decorator that reads the containment name from the item and displays it in the containment name column.
		 * 
		 * @param data
		 *            Data contained in the cell.
		 * @param rowId
		 *            Id of the row containing the cell.
		 * @param rowIndex
		 *            Index of the row containing the cell.
		 * @since 2.0.3
		 */
		containmentNameDecorator: function(data, rowId, rowIndex) {
			var item = this.grid.row(rowId).item();
			return item.containmentName;
		},

		/**
		 * Decorator that uses the {@link ecm.model.Desktop} defined formatter to format a folder path name.
		 * 
		 * @param data
		 *            Data contained in the cell.
		 * @param rowId
		 *            Id of the row containing the cell.
		 * @param rowIndex
		 *            Index of the row containing the cell.
		 * @since 2.0.3
		 */
		folderPathNameDecorator: function(data, rowId, rowIndex) {
			return Desktop.valueFormatter.formatPath(data);
		},

		/**
		 * A decorator that renders the multi-state icon display column in the favorites details view.
		 * 
		 * @param data
		 *            Data contained in the cell.
		 * @param rowId
		 *            Id of the row containing the cell.
		 * @param rowIndex
		 *            Index of the row containing the cell.
		 */
		favoriteMultiStateIcon: function(data, rowId, rowIndex) {
			var item = this.grid.row(rowId).item();
			if (item && item.item) {
				return common.multiStateIcon(item.item, this._states, false);
			} else {
				var IconValue = function() {
				};
				IconValue.prototype = new Object();
				IconValue.prototype.toString = function() {
					return '';
				};
				return new IconValue();
			}
		},

		/**
		 * Decorator to configure a details view column for sync.
		 * 
		 * @since 2.0.3
		 */
		syncServiceDetailsDecorator: function() {
			return "<div></div>";
		},

		/**
		 * Reads the item in the grid row to determine if sync is enabled and updates the cellWidget to include an icon
		 * that both indicates if sync is enabled for the item and allows the user to quickly enable/disable sync on the
		 * item.
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
		syncServiceDetailsCellValue: function(gridData, storeData, cellWidget) {
			var rowId = cellWidget.cell.row.id;
			var item = this.grid.row(rowId).item();

			var stateIcons = "";
			if (item) {
				var itemToGetIcon = item;
				if (item.item) {
					itemToGetIcon = item.item;
				}
				var stateIconValue = common.multiStateIcon(itemToGetIcon, this._states, true);
				if (itemToGetIcon instanceof ecm.model.Teamspace && itemToGetIcon.state == "offline") {
					//stateIconValue = common.stateIcon(itemToGetIcon);
					stateIconValue = common.multiStateIcon(itemToGetIcon, [
						"offline"
					], true);
				}
				stateIcons = stateIconValue ? stateIconValue.toString() : null;
				if (!stateIcons || stateIcons == "&nbsp;")
					stateIcons = "";
				else
					stateIcons += "&nbsp;";
			}
			cellWidget.domNode.innerHTML = stateIcons;

			var className = "";
			var tooltip = ecm.messages.sync_favorite_sync_unavailable_hover;
			var onClickHandler = null;

			if (item.item) {
				item.syncEnabled = item.item.syncEnabled;
			}

			if (item && item.syncEnabled) {
				className = item.getStateClass("syncEnabled");
				tooltip = ecm.messages.sync_favorite_enable_hover;
				var itemToSync = item;
				if (item.item) {
					itemToSync = item.item;
				}
				onClickHandler = function(evt) {
					Desktop.syncServer.disableSyncForItems([
						itemToSync
					]);
					item.syncEnabled = false;
				};
			}

			var imgParams = {
				src: require.toUrl("dojo/resources/blank.gif"),
				"class": className,
				alt: tooltip,
				title: tooltip
			};

			if (lang.isFunction(onClickHandler)) {
				imgParams.onclick = onClickHandler;
			}

			var syncImg = domConstruct.create("img", imgParams);
			domConstruct.place(syncImg, cellWidget.domNode, "last");
		}
	};
});
