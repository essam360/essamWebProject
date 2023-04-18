/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/string",
	"dojo/has",
	"idx/html",
	"ecm/model/ContentItem"
], function(string, has, idxHtml, ContentItem) {

	/**
	 * @name ecm.widget.listView.common
	 * @class Contains the common decorators.
	 */
	return {
		/** @lends ecm.widget.listView.common */

		/**
		 * Creates HTML to render multiple states.
		 * 
		 * @param item
		 *            Handle to the {@link ecm.model.Item} containing the state information.
		 * @param states
		 *            Array of supported states.
		 * @param includeBlank
		 *            Boolean used to determine if blank space should be displayed if no states are available. In the
		 *            details view we want a blank space, but we do not want a blank space in magazine view.
		 */
		multiStateIcon: function(item, states, includeBlank) {
			var IconValue = function(states, item, includeBlank) {
				this.states = states;
				this.item = item;
				this.includeBlank = includeBlank;
				this._blankGif = require.toUrl("dojo/resources/blank.gif");
			};
			IconValue.prototype = new Object();
			IconValue.prototype.toString = function() {
				var htmlStr = '';
				if (this.states) {
					for ( var i in this.states) {
						var state = this.states[i];
						var marginClass = "";
						if (this.states.length > 1) {
							if (i < this.states.length - 1) {
								marginClass = "ecmIconMargin";
							}
						}
						if (state == "isLocked") {
							htmlStr = this._displayIsLocked(htmlStr, marginClass);
						} else if (state == "isShared") {
							htmlStr = this._displayIsShared(htmlStr, marginClass);
						} else if (state == "hasDeadline") {
							htmlStr = this._displayHasDeadline(htmlStr, marginClass);
						} else if (state == "hasMinorVersion") {
							htmlStr = this._displayHasMinorVersion(htmlStr, marginClass);
						} else if (state == "hasHold") {
							htmlStr = this._displayHasHold(htmlStr, marginClass);
						} else if (state == "hasNote") {
							htmlStr = this._displayHasNote(htmlStr, marginClass);
						} else if (state == "isSuspended") {
							htmlStr = this._displayIsSuspended(htmlStr, marginClass);
						} else if (state == "hasBookmark") {
							htmlStr = this._displayHasBookmark(htmlStr, marginClass);
						} else if (state == "isDeclared") {
							htmlStr = this._displayIsDeclared(htmlStr, marginClass);
						} else if (state == "isCompoundDocument") {
							htmlStr = this._displayIsCompoundDocument(htmlStr, marginClass);
						} else if (state == "offline") {
							htmlStr = this._displayIsOfflineTeamspace(htmlStr, marginClass);
						}
					}
				} else {
					htmlStr += '&nbsp;';
				}
				return htmlStr;
			};
			IconValue.prototype._displayIsOfflineTeamspace = function(htmlStr, marginClass) {
				if (this.item && this.item.state == 'offline') {
					var stateMsg = null;
					if (item.type == "template") {
						stateMsg = ecm.messages.offlineTemplate_icon_title;
					} else if (item.type == "instance") {
						stateMsg = ecm.messages.offlineTeamspace_icon_title;
					}
					if (this.item.type)
						htmlStr += '<img class="ecmStatusIcon ' + this.item.getStateClass("offline") + ' ' + marginClass + '" alt="' + stateMsg + '" title="' + stateMsg + '" src="' + this._blankGif + '"/>';
					if (has("highcontrast")) { // IE11 with JAWS reads this char
						htmlStr += '<span class="ecmStatusIconChar" title="' + ecm.messages.offlineTemplate_icon_title + '">' + stateMsg + '</span>';
					}
					htmlStr += '<div class="dijitHidden">' + stateMsg + '</div>'; // Read by JAWS
				} else {
					htmlStr = this._addBlankImage(htmlStr, marginClass);
				}
				return htmlStr;
			};
			IconValue.prototype._displayIsCompoundDocument = function(htmlStr, marginClass) {
				if (this.item && this.item.compoundDocumentType != null) {
					htmlStr += '<img class="ecmStatusIcon ' + this.item.getStateClass("docCompoundDocument") + ' ' + marginClass + '" alt="' + ecm.messages.compound_document_icon_title + '" title="' + ecm.messages.compound_document_icon_title + '" src="' + this._blankGif + '" />';
					if (has("highcontrast")) { // IE11 with JAWS reads this char
						htmlStr += '<span class="ecmStatusIconChar" title="' + ecm.messages.compound_document_icon_title + '">' + ecm.messages.compound_document_icon_char + '</span>';
					}
					htmlStr += '<div class="dijitHidden">' + ecm.messages.compound_document_icon_title + '</div>'; // Read by JAWS
				} else {
					htmlStr = this._addBlankImage(htmlStr, marginClass);
				}
				return htmlStr;
			};
			IconValue.prototype._displayIsDeclared = function(htmlStr, marginClass) {
				if (this.item && this.item.declaredAsRecord) {
					htmlStr += '<img class="ecmStatusIcon ' + this.item.getStateClass("docDeclaredRecord") + ' ' + marginClass + '" alt="' + ecm.messages.record_icon_title + '" title=' + ecm.messages.record_icon_title + '" src="' + this._blankGif + '" />';
					if (has("highcontrast")) { // IE11 with JAWS reads this char
						htmlStr += '<span class="ecmStatusIconChar" title="' + ecm.messages.record_icon_title + '">' + ecm.messages.record_icon_char + '</span>';
					}
					htmlStr += '<div class="dijitHidden">' + ecm.messages.record_icon_char + '</div>'; // Read by JAWS
				} else {
					htmlStr = this._addBlankImage(htmlStr, marginClass);
				}
				return htmlStr;
			};
			IconValue.prototype._displayHasDeadline = function(htmlStr, marginClass) {
				var deadline = this.item.getValue("F_StepDeadlineStatus");
				if (deadline == 2) {
					htmlStr += '<img class="ecmStatusIcon ' + this.item.getStateClass("workItemDeadlineImportance") + ' ' + marginClass + '" alt="' + ecm.messages.process_info_overdue + '" title="' + ecm.messages.process_info_overdue + '" src="' + this._blankGif + '"/>';
					if (has("highcontrast")) { // IE11 with JAWS reads this char
						htmlStr += '<span class="ecmStatusIconChar" title="' + ecm.messages.process_info_overdue + '">' + ecm.messages.process_info_overdue_char + '</span>';
					}
					htmlStr += '<div class="dijitHidden">' + ecm.messages.process_info_overdue + '</div>'; // Read by JAWS
				} else if (deadline == 1) {
					htmlStr += '<img class="ecmStatusIcon ' + this.item.getStateClass("workItemDeadlineReminderSent") + ' ' + marginClass + '" alt="' + ecm.messages.process_info_reminder_sent + '" title="' + ecm.messages.process_info_reminder_sent + '" src="' + this._blankGif + '"/>';
					if (has("highcontrast")) { // IE11 with JAWS reads this char
						htmlStr += '<span class="ecmStatusIconChar" title="' + ecm.messages.process_info_reminder_sent + '">' + ecm.messages.process_info_reminder_sent_char + '</span>';
					}
					htmlStr += '<div class="dijitHidden">' + ecm.messages.process_info_reminder_sent + '</div>'; // Read by JAWS
				} else if (deadline == 3) {
					// This is a P8 tracker workflow completed state and is not configurable
					htmlStr += '<img class="ecmStatusIcon ' + 'ecmMilestoneCompleteIcon' + ' ' + marginClass + '" alt="' + ecm.messages.tracker_milestone_completed + '" title="' + ecm.messages.tracker_milestone_completed + '" src="' + this._blankGif + '"/>';
					if (has("highcontrast")) { // IE11 with JAWS reads this char
						htmlStr += '<span class="ecmStatusIconChar" title="' + ecm.messages.tracker_milestone_completed + '">' + ecm.messages.suspended_icon_char + '</span>';
					}
					htmlStr += '<div class="dijitHidden">' + ecm.messages.tracker_milestone_completed + '</div>'; // Read by JAWS
				} else {
					htmlStr = this._addBlankImage(htmlStr, marginClass);
				}
				return htmlStr;
			};
			IconValue.prototype._displayIsShared = function(htmlStr, marginClass) {
				var allVersionSearchResults = false;
				var propertyVersionsResults = false;
				var showShareIcon = false;
				var showPendingIcon = false;

				if (item.resultSet) {
					if (item.resultSet._versionLookup && item.repository && item.resultSet._versionLookup[item.repository.id] == "allversions") {
						allVersionSearchResults = true;
					} else if (item.resultSet.context && item.resultSet.context == "PropertiesVersions") {
						propertyVersionsResults = true;
					}
				}

				var status = this.item.getShareStatus ? this.item.getShareStatus() : "";
				if (item.repository.type == "cm") {
					if (propertyVersionsResults) {
						if (status != ContentItem.SHARE_STATUS.NOT_SHARED) {
							var sharedVersionNumber = item.resultSet.items[0].getSharedVersionNumber();
							if (item.attributes.icn_sys_version == sharedVersionNumber) {
								if (status == ContentItem.SHARE_STATUS.SHARED) {
									showShareIcon = true;
								} else if (status == ContentItem.SHARE_STATUS.PENDING_SHARE) {
									showPendingIcon = true;
								}
							}
						}
					} else if (!allVersionSearchResults) {
						// Don't show share icons for all version search results.
						if (status == ContentItem.SHARE_STATUS.SHARED) {
							showShareIcon = true;
						} else if (status == ContentItem.SHARE_STATUS.PENDING_SHARE) {
							showPendingIcon = true;
						}
					}
				} else if (item.repository.type == "p8") {
					if (status == ContentItem.SHARE_STATUS.SHARED || (!(allVersionSearchResults || propertyVersionsResults) && status == ContentItem.SHARE_STATUS.VERSION_SHARED)) {
						showShareIcon = true;
					} else if (status == ContentItem.SHARE_STATUS.PENDING_SHARE || (!(allVersionSearchResults || propertyVersionsResults) && status == ContentItem.SHARE_STATUS.VERSION_PENDING_SHARE)) {
						showPendingIcon = true;
					}
				}

				if (showShareIcon) {
					htmlStr += '<img class="ecmStatusIcon ' + this.item.getStateClass("share") + ' ' + marginClass + '" alt="' + ecm.messages.is_shared + '" title="' + ecm.messages.is_shared + '" src="' + this._blankGif + '"/>';
					if (has("highcontrast")) { // IE11 with JAWS reads this char
						htmlStr += '<span class="ecmStatusIconChar" title="' + ecm.messages.is_shared + '">' + ecm.messages.is_shared_char + '</span>';
					}
					htmlStr += '<div class="dijitHidden">' + ecm.messages.is_shared + '</div>'; // Read by JAWS
				} else if (showPendingIcon) {
					htmlStr += '<img class="ecmStatusIcon ' + this.item.getStateClass("sharePending") + ' ' + marginClass + '" alt="' + ecm.messages.is_share_pending + '" title="' + ecm.messages.is_share_pending + '" src="' + this._blankGif + '"/>';
					if (has("highcontrast")) { // IE11 with JAWS reads this char
						htmlStr += '<span class="ecmStatusIconChar" title="' + ecm.messages.is_share_pending + '">' + ecm.messages.is_share_pending_char + '</span>';
					}
					htmlStr += '<div class="dijitHidden">' + ecm.messages.is_share_pending + '</div>'; // Read by JAWS
				} else {
					htmlStr = this._addBlankImage(htmlStr, marginClass);
				}
				return htmlStr;
			};
			IconValue.prototype._displayHasMinorVersion = function(htmlStr, marginClass) {
				// This item has minor versions if it is not the current version and it's version status is Released.
				if (!this.item.currentVersion && this.item["versionStatusInt"] && (this.item["versionStatusInt"] == ContentItem.P8_VERSION_STATUS.RELEASED)) {
					htmlStr += '<img class="ecmStatusIcon ' + this.item.getStateClass("docMinorVersions") + ' ' + marginClass + '" alt="' + ecm.messages.major_minor_version_icon_title + '" title="' + ecm.messages.major_minor_version_icon_title + '" src="' + this._blankGif + '"/>';
					if (has("highcontrast")) { // IE11 with JAWS reads this char
						htmlStr += '<span class="ecmStatusIconChar" title="' + ecm.messages.major_minor_version_icon_title + '">' + ecm.messages.major_minor_version_icon_char + '</span>';
					}
					htmlStr += '<div class="dijitHidden">' + ecm.messages.major_minor_version_icon_title + '</div>'; // Read by JAWS
				} else {
					htmlStr = this._addBlankImage(htmlStr, marginClass);
				}
				return htmlStr;
			};
			IconValue.prototype._displayIsLocked = function(htmlStr, marginClass) {
				var noPrivileges = this.item.hasPrivilege("privNone");
				if (noPrivileges) {
					// This is a special case where none of the state information is set and the object is really just ready only
					htmlStr += '<img class="ecmStatusIcon ecmReadOnlyIcon" alt="' + ecm.messages.read_only_icon_title + '" title="' + ecm.messages.read_only_icon_title + '" src="' + this._blankGif + '"/>';
					if (has("highcontrast")) { // IE11 with JAWS reads this char
						htmlStr += '<span class="ecmStatusIconChar" title="' + ecm.messages.read_only_icon_title + '">' + ecm.messages.read_only_icon_char + '</span>';
					}
					htmlStr += '<div class="dijitHidden">' + ecm.messages.read_only_icon_title + '</div>'; // Read by JAWS
				} else {
					if (this.item.showCheckoutForReservation) {
						var msg = string.substitute(ecm.messages.checked_out_icon_title, [
							item.lockedUser
						]);
						htmlStr += '<img class="ecmStatusIcon ' + this.item.getStateClass("docCheckedOut") + ' ' + marginClass + '" alt="' + msg + '" title="' + msg + '" src="' + this._blankGif + '"/>';
						if (has("highcontrast")) { // IE11 with JAWS reads this char
							htmlStr += '<span class="ecmStatusIconChar" title="' + string.substitute(ecm.messages.checked_out_icon_title, [
								item.lockedUser
							]) + '">' + ecm.messages.checked_out_icon_char + '</span>';
						}
						htmlStr += '<div class="dijitHidden">' + msg + '</div>'; // Read by JAWS
					} else {
						if ((this.item.repository.type == "cm" || (this.item.isFolder && !this.item.isFolder())) && this.item.locked) {
							var iconTitle;
							if (this.item && this.item.isInstanceOf && this.item.isInstanceOf(ecm.model.ContentItem)) {
								iconTitle = string.substitute(ecm.messages.checked_out_icon_title, [
									this.item.lockedUser
								]);
								htmlStr += '<img class="ecmStatusIcon ' + this.item.getStateClass("docCheckedOut") + ' ' + marginClass + '" alt="' + iconTitle + '" title="' + iconTitle + '" src="' + this._blankGif + '"/>';
								if (has("highcontrast")) { // IE11 with JAWS reads this char
									htmlStr += '<span class="ecmStatusIconChar" title="' + string.substitute(ecm.messages.checked_out_icon_title, [
										item.lockedUser
									]) + '">' + ecm.messages.checked_out_icon_char + '</span>';
								}
								htmlStr += '<div class="dijitHidden">' + iconTitle + '</div>'; // Read by JAWS
							} else {
								if (this.item.repository.type == "cm") {
									iconTitle = string.substitute(ecm.messages.checked_out_icon_title, [
										this.item.lockedUser
									]);
									htmlStr += '<img class="ecmStatusIcon ' + this.item.getStateClass("workItemCheckedOut") + ' ' + marginClass + '" alt="' + iconTitle + '" title="' + iconTitle + '" src="' + this._blankGif + '"/>';
									if (has("highcontrast")) { // IE11 with JAWS reads this char
										htmlStr += '<span class="ecmStatusIconChar" title="' + string.substitute(ecm.messages.checked_out_icon_title, [
											item.lockedUser
										]) + '">' + ecm.messages.checked_out_icon_char + '</span>';
									}
									htmlStr += '<div class="dijitHidden">' + iconTitle + '</div>'; // Read by JAWS
								} else {
									iconTitle = string.substitute(ecm.messages.locked_item_icon_title, [
										this.item.lockedUser
									]);
									htmlStr += '<img class="ecmStatusIcon ' + this.item.getStateClass("workItemLocked") + ' ' + marginClass + '" alt="' + iconTitle + '" title="' + iconTitle + '" src="' + this._blankGif + '"/>';
									if (has("highcontrast")) { // IE11 with JAWS reads this char
										htmlStr += '<span class="ecmStatusIconChar" title="' + string.substitute(ecm.messages.checked_out_icon_title, [
											item.lockedUser
										]) + '">' + ecm.messages.checked_out_icon_char + '</span>';
									}
									htmlStr += '<div class="dijitHidden">' + iconTitle + '</div>'; // Read by JAWS
								}
							}
						} else {
							htmlStr = this._addBlankImage(htmlStr, marginClass);
						}
					}
				}
				return htmlStr;
			};
			IconValue.prototype._displayHasHold = function(htmlStr, marginClass) {
				if (this.item.hasHold) {
					htmlStr += '<img class="ecmStatusIcon ' + this.item.getStateClass("docHold") + ' ' + marginClass + '" alt="' + ecm.messages.on_hold_icon_title + '" title="' + ecm.messages.on_hold_icon_title + '" src="' + this._blankGif + '"/>';
					if (has("highcontrast")) { // IE11 with JAWS reads this char
						htmlStr += '<span class="ecmStatusIconChar" title="' + ecm.messages.on_hold_icon_title + '">' + ecm.messages.hold_icon_char + '</span>';
					}
					htmlStr += '<div class="dijitHidden">' + ecm.messages.on_hold_icon_title + '</div>'; // Read by JAWS
				} else {
					htmlStr = this._addBlankImage(htmlStr, marginClass);
				}
				return htmlStr;
			};
			IconValue.prototype._displayHasNote = function(htmlStr, marginClass) {
				var properties = this.item;
				if (this.item.hasNote) {
					var commentCountAttrName = item._getCountPropertyName("comment");
					var title = this.item.getValue(commentCountAttrName) ? string.substitute(ecm.messages.comments_number, [
						this.item.getValue(commentCountAttrName)
					]) : ecm.messages.has_notes_icon_title;
					htmlStr += '<img class="ecmStatusIcon ' + this.item.getStateClass("docNotes") + ' ' + marginClass + '" alt="' + title + '" title="' + title + '" src="' + this._blankGif + '"/>';
					if (has("highcontrast")) { // IE11 with JAWS reads this char
						htmlStr += '<span class="ecmStatusIconChar" title="' + ecm.messages.has_notes_icon_title + '">' + ecm.messages.has_notes_icon_char + '</span>';
					}
					htmlStr += '<div class="dijitHidden">' + title + '</div>'; // Read by JAWS
				} else {
					htmlStr = this._addBlankImage(htmlStr, marginClass);
				}
				return htmlStr;
			};
			IconValue.prototype._displayIsSuspended = function(htmlStr, marginClass) {
				if (this.item.isSuspended) {
					htmlStr += '<img class="ecmStatusIcon ' + this.item.getStateClass("workItemSuspended") + ' ' + marginClass + '" alt="' + ecm.messages.suspended_icon_title + '" title="' + ecm.messages.suspended_icon_title + '" src="' + this._blankGif + '"/>';
					if (has("highcontrast")) { // IE11 with JAWS reads this char
						htmlStr += '<span class="ecmStatusIconChar" title="' + ecm.messages.suspended_icon_title + '">' + ecm.messages.suspended_icon_char + '</span>';
					}
					htmlStr += '<div class="dijitHidden">' + ecm.messages.suspended_icon_title + '</div>'; // Read by JAWS
				} else {
					htmlStr = this._addBlankImage(htmlStr, marginClass);
				}
				return htmlStr;
			};
			IconValue.prototype._displayHasBookmark = function(htmlStr, marginClass) {
				if (this.item.hasBookmarks) {
					htmlStr += '<img class="ecmStatusIcon ' + this.item.getStateClass("docBookmarks") + ' ' + marginClass + '" alt="' + ecm.messages.has_bookmark_icon_title + '" title="' + ecm.messages.has_bookmark_icon_title + '" src="' + this._blankGif + '"/>';
					if (has("highcontrast")) { // IE11 with JAWS reads this char
						htmlStr += '<span class="ecmStatusIconChar" title="' + ecm.messages.has_bookmark_icon_title + '">' + ecm.messages.has_bookmark_icon_char + '</span>';
					}
					htmlStr += '<div class="dijitHidden">' + ecm.messages.has_bookmark_icon_title + '</div>'; // Read by JAWS
				} else {
					htmlStr = this._addBlankImage(htmlStr, marginClass);
				}
				return htmlStr;
			};
			IconValue.prototype._addBlankImage = function(htmlStr, marginClass) {
				if (this.includeBlank) {
					htmlStr += '<img src="' + this._blankGif + '" alt="" class="' + marginClass + '" width="16px">';
					return htmlStr;
				} else {
					return htmlStr;
				}
			};
			IconValue.prototype.replace = function() {
				return this;
			};

			if (!states)
				states = [];

			return new IconValue(states, item, includeBlank);
		},

		/**
		 * Creates HTML to render a state for teamspaces.
		 * 
		 * @param item
		 *            Handle to the {@link ecm.model.Item} containing the state information.
		 * @since 2.0.3
		 */
		stateIcon: function(item) {
			var IconValue = function(item) {
				this.item = item;
				this.noPrivileges = item.hasPrivilege("privNone");
				if (item.isInstanceOf && item.isInstanceOf(ecm.model.Teamspace)) {
					this.state = item.state;
					this.isLocked = false;
					this.checkoutUser = null;
				} else {
					this.state = null;
					if (item.isFolder && item.locked) {
						this.isLocked = item.locked;
						this.checkoutUser = item.lockedUser;
					} else if (item.showCheckoutForReservation) {
						this.isLocked = true;
						this.checkoutUser = item.lockedUser;
					} else if (!item.hasHold) {
						this.isLocked = item.locked;
						this.checkoutUser = item.lockedUser;
					} else {
						this.isLocked = null;
						this.checkoutUser = null;
					}
				}
				this._blankGif = require.toUrl("dojo/resources/blank.gif");
			};
			IconValue.prototype = new Object();
			IconValue.prototype.toString = function() {
				var htmlStr = '';
				if (this.state != null) {
					if (this.state == "offline") {
						var stateMsg = null;
						if (item.type == "template") {
							stateMsg = ecm.messages.offlineTemplate_icon_title;
						} else if (item.type == "instance") {
							stateMsg = ecm.messages.offlineTeamspace_icon_title;
						}
						htmlStr += '<img role="presentation" class="ecmStatusIcon ' + this.item.getStateClass("offline") + '" alt="' + stateMsg + '" title="' + stateMsg + '" src="' + this._blankGif + '"/>';
					} else if (this.state == "pendingDelete")
						htmlStr += '<img role="presentation" class="ecmStatusIcon ' + this.item.getStateClass("deletePending") + '" alt="' + ecm.messages.pending_delete_icon_title + '" title="' + ecm.messages.pending_delete_icon_title + '" src="' + this._blankGif + '"/>';
					else if (this.state == "deleteError")
						htmlStr += '<img role="presentation" class="ecmStatusIcon ' + this.item.getStateClass("deleteError") + '" alt="' + ecm.messages.delete_error_icon_title + '" title="' + ecm.messages.delete_error_icon_title + '" src="' + this._blankGif + '"/>';
					else if (this.state == "default")
						htmlStr += '<img role="presentation" class="ecmStatusIcon ' + this.item.getStateClass("default") + '" alt="' + ecm.messages.defaultTemplate_icon_title + '" title="' + ecm.messages.defaultTemplate_icon_title + '" src="' + this._blankGif + '"/>';
					else if (this.state == "validate")
						htmlStr += '<img role="presentation" class="ecmStatusIcon ' + this.item.getStateClass("validate") + '" alt="' + ecm.messages.validateTemplate_icon_title + '" title="' + ecm.messages.validateTemplate_icon_title + '" src="' + this._blankGif + '"/>';
				} else if (this.noPrivileges) {
					htmlStr += '<img role="presentation" class="ecmNoAccessIcon" alt="' + ecm.messages.process_info_no_access + '" title="' + ecm.messages.process_info_no_access + '" src="' + this._blankGif + '"/>';
				} else if (this.isLocked) {
					htmlStr += '<img role="presentation" class="ecmStatusIcon ' + this.item.getStateClass("docCheckedOut") + '" alt="' + string.substitute(ecm.messages.checked_out_icon_title, [
						checkoutUser
					]) + '" title="' + string.substitute(ecm.messages.checked_out_icon_title, [
						checkoutUser
					]) + '" src="' + this._blankGif + '"/>';
				} else if (this.isLocked == null) {
					htmlStr += '<img role="presentation" class="ecmStatusIcon ' + this.item.getStateClass("docHold") + '" alt="' + ecm.messages.hold + '" title="' + ecm.messages.hold + '" src="' + this._blankGif + '"/>';
				} else {
					htmlStr += '&nbsp;';
				}
				return htmlStr;
			};
			IconValue.prototype.replace = function() {
				return this;
			};
			return new IconValue(item);
		},

		/**
		 * Creates HTML to render a mimetype icon.
		 * 
		 * @param item
		 *            Handle to the {@link ecm.model.Item} containing the mime type information.
		 */
		mimeTypeIcon: function(item) {
			var IconValue = function(iconClass, mimeType) {
				this.iconClass = iconClass;
				this.mimeType = mimeType;
				this._blankGif = require.toUrl("dojo/resources/blank.gif");
			};
			IconValue.prototype = new Object();
			IconValue.prototype.toString = function() {
				var mimeType = this.mimeType == "folder" ? ecm.messages.folders_filed_in_folder_col_hdr : idxHtml.escapeHTML(this.mimeType);
				if (!mimeType) {
					mimeType = ecm.messages.no_mime_type;
				} else if (mimeType == "item") {
					mimeType = ecm.messages.item;
				}
				var img = '<img class="' + this.iconClass + '" alt="' + mimeType + '" title="' + mimeType + '" src="' + this._blankGif + '" />';
				img += '<div class="dijitHidden">' + mimeType + '</div>'; // Read by JAWS
				return img;
			};
			IconValue.prototype.replace = function() {
				return this;
			};
			return new IconValue(item.getMimeClass(), item.mimetype);
		},

		/**
		 * Creates HTML to render a mimetype icon and enables an onclick event to open the specified item.
		 * 
		 * @param item
		 *            Handle to the {@link ecm.model.Item} containing the mime type information.
		 * @param listId
		 *            ID of the widget used to open the item.
		 * @param rowId
		 *            ID of the row containing the cell.
		 */
		mimeTypeIconWithOpenItem: function(item, listId, rowId) {
			var IconValue = function(iconClass, mimeType) {
				this.iconClass = iconClass;
				this.mimeType = mimeType;
				this._blankGif = require.toUrl("dojo/resources/blank.gif");
			};
			IconValue.prototype = new Object();
			IconValue.prototype.toString = function() {
				var mimeType = this.mimeType == "folder" ? ecm.messages.folders_filed_in_folder_col_hdr : idxHtml.escapeHTML(this.mimeType);
				if (!mimeType) {
					mimeType = ecm.messages.no_mime_type;
				} else if (mimeType == "item") {
					mimeType = ecm.messages.item;
				}
				var img = '<img role="img" class="ecmMimeTypeIcon ' + this.iconClass + '" alt="' + mimeType + '" title="' + mimeType + '" src="' + this._blankGif;
				img += '" onclick="ecm.widget.listView.ContentList.callMethod(\'' + listId + '\', \'_performDefaultActionForRowId\', \'' + rowId + '\');" />';
				var mimeTypeChar = this.mimeType == "folder" ? ecm.messages.folder_char : ecm.messages.document_char;
				if (has("highcontrast")) { // IE11 with JAWS reads this char
					img += '<span class="ecmMimeTypeIconChar" title="' + mimeType + '"';
					img += '" onclick="ecm.widget.listView.ContentList.callMethod(\'' + listId + '\', \'_performDefaultActionForRowId\', \'' + rowId + '\');" >' + mimeTypeChar + "</span>";
				}
				img += '<div class="dijitHidden">' + mimeType + '</div>'; // Read by JAWS
				return img;
			};
			IconValue.prototype.replace = function() {
				return this;
			};
			return new IconValue(item.getMimeClass(), item.mimetype);
		}
	};

});
