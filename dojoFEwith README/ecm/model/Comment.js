/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/window",
	"dojo/dom-construct",
	"./Request",
	"./ContentItem",
	"./SocialItem"
], function(declare, lang, win, domConstruct, Request, ContentItem, SocialItem) {

	/**
	 * Constructs a comment.
	 * 
	 * @name ecm.model.Comment
	 * @class Represents a single comment. Each comment is associated with a content item.
	 * @augments ecm.model.SocialItem
	 * @since 2.0.2
	 */
	var Comment = declare("ecm.model.Comment", [
		SocialItem
	], {
		/** @lends ecm.model.Comment.prototype */

		constructor: function() {
			this.type = SocialItem.prototype.TYPE.COMMENT;
		},

		/**
		 * Gets a DOM node containing the comment text with characters escaped for HTML and line feeds replaced with
		 * <code>&lt;br&gt;</code> tags.
		 */
		getCommentTextNode: function() {
			var textNode = win.doc.createDocumentFragment();
			var text = this.getValue("commentText");
			if (text) {
				var text = text.replace("\r\n", "\n");
				var textParts = text.split("\n");
				for (var i = 0; i < textParts.length; i++) {
					textNode.appendChild(win.doc.createTextNode(textParts[i]));
					if (i < textParts.length - 1)
						domConstruct.create("br", null, textNode);
				}
			}

			return textNode;
		},

		/**
		 * Gets the comment text. The comment text is not escaped for HTML. Call <code>getCommentTextNode()</code> to
		 * get a DOM node containing the comment text for display purposes.
		 */
		getCommentText: function() {
			return this.getValue("commentText") || "";
		},

		/**
		 * Sets the comment text.
		 * 
		 * @param commentText
		 *            Comment text to save
		 */
		setCommentText: function(/*String*/commentText) {
			this.setValue("commentText", commentText);
		},

		/**
		 * Returns true if this comment is created by the current user.
		 * 
		 * @deprecated replaced by isMine().
		 */
		isMyComment: function() {
			return this.isMine();
		},

		/**
		 * Returns true if this comment is editable by the current user.
		 * 
		 * @deprecated replaced by isEditable().
		 */
		isCommentEditable: function() {
			return this.isEditable();
		},

		/**
		 * Returns true if this comment is deletable by the current user.
		 * 
		 * @deprecated replaced by isDeletable().
		 */
		isCommentDeletable: function() {
			return this.isDeletable();
		},

		/**
		 * Saves the comment.
		 * 
		 * @deprecated replaced by save().
		 */
		saveComment: function(callback, errorback) {
			this.save(callback, errorback);
		},

		/**
		 * Returns true if this comment is a reply comment.
		 * 
		 * @since 2.0.3.5
		 */
		isReplyComment: function() {
			return !!this.getValue("replyComment");
		},

		/**
		 * Sets this comment as a reply comment.
		 * 
		 * @since 2.0.3.5
		 */
		setReplyComment: function(replyComment) {
			this.setValue("replyComment", !!replyComment);
		},

		/**
		 * @private
		 */
		_prepareJsonForService: function() {
			var json = this.inherited(arguments);
			json.commentText = this.getCommentText();

			return json;
		},

		/**
		 * @private
		 */
		_getSavedJson: function(response) {
			return response.savedComment;
		},

		/**
		 * @private
		 */
		_saveCompleted: function(response, callback, added) {
			this.inherited(arguments);
			this.contentItem.onCommentChanged(this, added);
		},

		/**
		 * Deletes the comment.
		 * 
		 * @deprecated replaced by deleteThis().
		 */
		deleteComment: function(callback, errorback) {
			this.deleteThis(callback, errorback);
		},

		/**
		 * @private
		 */
		_deleteCompleted: function(response, callback) {
			this.inherited(arguments);
			this.contentItem.onCommentChanged(this);
		}
	});

	/**
	 * @private Constructs a comment given a JSON representation of the item.
	 * @param commentJSON
	 *            The JSON representation of the comment.
	 * @param contentItem
	 *            An instance of {@link ecm.model.ContentItem} this comment is associated with.
	 * @param resultSet
	 *            An instance of {@link ecm.model.ResultSet} if this comment is from a result set.
	 */
	Comment.createFromJSON = function(commentJSON, contentItem, resultSet) {
		return new Comment(SocialItem.createJsonModel(commentJSON, contentItem, resultSet));
	};

	return Comment;
});
