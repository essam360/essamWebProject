/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare", //
	"dojo/_base/lang", //
	"dijit/_WidgetBase", //
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/form/SimpleTextarea", //
	"dijit/form/Button", //
	"../model/Request", //
	"../model/Comment", //
	"../MessagesMixin", //
	"dojo/text!./templates/AddNotelogPane.html"
], //

function(declare, //
lang, //
_WidgetBase, //
_TemplatedMixin, //
_WidgetsInTemplateMixin, //
SimpleTextarea, //
Button, //
Request, //
Comment, //
MessagesMixin, //
template) {

	/**
	 * @name ecm.widget.AddCommentPane
	 * @class Provides a pane that is used to add comments to a document.
	 * @augments dijit._WidgetBase
	 * @since 2.0.2
	 */
	return declare("ecm.widget.AddCommentPane", [
		_WidgetBase,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		MessagesMixin
	], {
		/** @lends ecm.widget.AddCommentPane.prototype */
		templateString: template,

		_item: null,

		/**
		 * Sets an item to the pane
		 * 
		 * @param item
		 *            A document {@link ecm.model.ContentItem}.
		 */
		setItem: function(item) {
			this._item = item;
		},

		/**
		 * @private
		 */
		_validate: function() {
			var comment = this._getCommentText();
			if (!comment || lang.trim(comment).length == 0) {
				this.commentAddButton.set("disabled", true);
				return false;
			}
			this.commentAddButton.set("disabled", false);

			return true;
		},

		/**
		 * @private
		 */
		_getCommentText: function() {
			return this.commentTextarea.get("value");
		},

		/**
		 * Add a comment to the item set in this pane with the text added to the input box.
		 */
		addComment: function() {
			this.commentAddButton.set("disabled", true);
			var text = this._getCommentText();
			//story 26656 enter
			if (this._item.repository._isCM()) {
				this._item.addNotelog(text, lang.hitch(this, function(response) {
					this.commentTextarea.set("value", "");
					this.onAddComment(response);
				}), lang.hitch(this, function(response) {
					this.commentAddButton.set("disabled", false);
				}));
				//story 26656 leave
			} else {
				var comment = new Comment({
					repository: this._item.repository,
					contentItem: this._item
				});
				comment.setCommentText(text);
				comment.saveComment(lang.hitch(this, function(response) {
					this.commentTextarea.set("value", "");
					this.onAddComment(response);
				}), lang.hitch(this, function(response) {
					this.commentAddButton.set("disabled", false);
				}));
			}
		},

		/**
		 * This event is called after the comment is added.
		 * 
		 * @param response
		 *            A JSON object containing the saved comment and an array of all comments of the item
		 */
		onAddComment: function(response) {
		}
	});

});
