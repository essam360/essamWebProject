/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/Deferred",
	"dojo/_base/sniff",
	"dojo/dom-construct",
	"dojo/dom-geometry",
	"dojo/dom-style",
	"dojo/aspect",
	"dojo/keys",
	"dojo/on",
	"dojo/string",
	"dijit/_WidgetBase",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"idx/form/Textarea",
	"../../../model/Comment",
	"../../../MessagesMixin",
	"../../../LoggerMixin",
	"dojo/text!../templates/CommentEditor.html"
],

function(declare, //
lang, //
Deferred, //
has, //
domConstruct, //
domGeometry, //
domStyle, //
aspect, //
keys, //
on, //
string, //
_WidgetBase, //
_TemplatedMixin, //
_WidgetsInTemplateMixin, //
Textarea, //
Comment, //
MessagesMixin, //
LoggerMixin, //
template) {

	/**
	 * @name ecm.widget.listView.editors.CommentEditor
	 * @class Provides an editor that is used to add or edit comments of an item.
	 * @augments dijit._WidgetBase
	 * @since 2.0.2
	 */
	var CommentEditor = declare("ecm.widget.listView.editors.CommentEditor", [
		_WidgetBase,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		MessagesMixin,
		LoggerMixin
	], {
		/** @lends ecm.widget.listView.editors.CommentEditor.prototype */
		templateString: template,

		value: null,
		_commentStarted: false,

		/**
		 * Overrides <code>postCreate</code> to make necessary event connections.
		 */
		postCreate: function() {
			this.inherited(arguments);
			this.commentTextarea.set("textDir", has("text-direction"));
			this.watch("value", lang.hitch(this, function() {
				this._setCommentText(this.value.getCommentText());
				domConstruct.empty(this._labelNode);
				domConstruct.empty(this._metadataNode);
				if (this.value.id) {
					domConstruct.create("label", {
						"for": this.commentTextarea.id,
						innerHTML: this.messages.comments_label
					}, this._labelNode);
					domConstruct.create("span", {
						"class": "commentColumn",
						innerHTML: this.value.getOriginatorDisplayName()
					}, this._metadataNode);
					domConstruct.create("span", {
						"class": "commentColumn",
						"style": "width:100%",
						innerHTML: this.value.getDateAdded()
					}, this._metadataNode);
					if (this.value.getItemVersion()) {
						domConstruct.create("span", {
							"class": "commentLastColumn",
							innerHTML: string.substitute(this.messages.comments_commented_version, [
								this.value.getItemVersion()
							])
						}, this._metadataNode);
					}
				}
				this.commentTextarea.set("hint", this.value.id ? this.messages.comments_hint : this.messages.comments_add_hint);
			}));
			this.own(on(this.commentTextarea.focusNode, "keyup", lang.hitch(this, function(e) {
				if (e.keyCode == keys.ENTER && !e.shiftKey) {
					e.preventDefault();
					e.stopPropagation();
				} else if (e.keyCode == 65 && e.ctrlKey) {
					e.stopPropagation();
				} else {
					if (this._getCommentText()) {
						if (!this._commentStarted)
							this.onStartComment();
					} else {
						this.onEmptyComment();
					}
				}
			})));
			this.own(on(this.commentTextarea.focusNode, "keypress", function(e) {
				if (e.keyCode == keys.ENTER && !e.shiftKey) {
					e.preventDefault();
					e.stopPropagation();
				} else if (e.keyCode == 65 && e.ctrlKey) {
					e.stopPropagation();
				}
			}));
			this.own(on(this.commentTextarea.focusNode, "keydown", lang.hitch(this, function(e) {
				if (e.keyCode == keys.ENTER && !e.shiftKey && !this._enterKeyHandlerOverridden) {
					e.preventDefault();
					e.stopPropagation();
					this.saveComment();
				} else if (e.keyCode == 65 && e.ctrlKey) {
					e.stopPropagation();
				}
			})));
			this.own(on(this.commentTextarea.focusNode, "mousedown, mouseup, click, dblclick", function(e) {
				e.stopPropagation();
			}));
			domStyle.set(this.commentTextarea.iconNode, "display", "none");
		},

		/**
		 * Returns true if the comment text is not empty
		 */
		isValid: function() {
			var comment = this._getCommentText();

			return comment && lang.trim(comment).length > 0 ? true : false;
		},

		/**
		 * @private
		 */
		_getCommentText: function() {
			return this.commentTextarea ? this.commentTextarea.get("value") : "";
		},

		/**
		 * @private
		 */
		_setCommentText: function(commentText) {
			if (this.commentTextarea) {
				this.commentTextarea.set("value", commentText);
				this.commentTextarea._resizeVertical();
				if (!commentText)
					this.onEmptyComment();
			}
		},

		/**
		 * @private
		 */
		_clearCommentText: function() {
			if (this.commentTextarea) {
				this.commentTextarea.set("value", "");
				this.commentTextarea._resizeVertical();
			}
		},

		/**
		 * Saves a comment to the item with the text in the input box.
		 */
		saveComment: function(callback, errorback) {
			// Don't allow saving an empty comment and safeguard against re-entry
			var text = this._getCommentText();
			if (!text || text.trim().length == 0 || this._saving)
				return;

			this._saving = true;
			this.value.setCommentText(text);
			try {
				this.value.save(lang.hitch(this, function(response) {
					this._saving = false;
					var c = new Comment({
						repository: this.value.repository,
						contentItem: this.value.contentItem
					});
					this.set("value", c);
					if (lang.isFunction(callback))
						callback(response);
					this.onSaveComment(response);
				}), lang.hitch(this, function(response) {
					this._saving = false;
					if (lang.isFunction(errorback))
						errorback(response);
				}), this.value.id);
			} catch (e) {
				this._saving = false;
				this.logDebug("saveComment", "Error while saving a comment: " + e.message, e);
				if (lang.isFunction(errorback))
					errorback(e);
			}
		},

		/**
		 * This event is called after the comment is saved.
		 * 
		 * @param response
		 *            A JSON object containing the saved comment and an array of all comments of the item
		 */
		onSaveComment: function(response) {
		},

		/**
		 * This event is called when a comment is being added or edited.
		 */
		onStartComment: function() {
			this._commentStarted = true;
		},

		/**
		 * This event is called when a comment is emptied.
		 */
		onEmptyComment: function() {
			this._commentStarted = false;
		},

		/**
		 * Overrides <code>resize</code> to adjust the size of the text input box after resizing.
		 */
		resize: function() {
			this.inherited(arguments);

			this._resizeTextareaWidth();
		},

		_resizeTextareaWidth: function() {
			if (this.domNode) {
				var width = domGeometry.getContentBox(this.domNode).w;
				domGeometry.setMarginBox(this.commentTextarea.containerNode, {
					w: width
				});
			}
		}
	});

	/**
	 * This is called by the gridx Edit module to set the comment being edited.
	 */
	CommentEditor.toEditor = function(storeData, gridData, cell, editor) {
		editor.own(on(editor.commentTextarea.focusNode, "keyup", function(e) {
			if (e.keyCode == keys.ENTER && !e.shiftKey || e.keyCode == keys.ESCAPE || e.keyCode == keys.TAB) {
				e.preventDefault();
				e.stopPropagation();
				if (e.keyCode == keys.ESCAPE) {
					cell.grid.edit.cancel(cell.row.id, cell.column.id);
				}
			} else if (e.keyCode == keys.ENTER && e.shiftKey) {
				cell.grid.resize();
				editor._resizeTextareaWidth();
				cell.grid.vScroller.scrollToRow(cell.row.index(), true);
			} else if (e.keyCode == 65 && e.ctrlKey) {
				e.stopPropagation();
			}
		}));
		editor.own(on(editor.commentTextarea.focusNode, "keypress", function(e) {
			if (e.keyCode == keys.ENTER && !e.shiftKey || e.keyCode == keys.ESCAPE || e.keyCode == keys.TAB) {
				e.preventDefault();
				e.stopPropagation();
			} else if (e.keyCode == 65 && e.ctrlKey) {
				e.stopPropagation();
			}
		}));
		editor.own(on(editor.commentTextarea.focusNode, "keydown", function(e) {
			if (e.keyCode == keys.ENTER && !e.shiftKey || e.keyCode == keys.ESCAPE || e.keyCode == keys.TAB) {
				e.preventDefault();
				e.stopPropagation();
				if (e.keyCode == keys.ENTER || e.keyCode == keys.TAB) {
					cell.grid.edit.apply(cell.row.id, cell.column.id);
				}
			} else if (e.keyCode == 65 && e.ctrlKey) {
				e.stopPropagation();
			}
		}));
		editor._enterKeyHandlerOverridden = true;

		editor.own(aspect.after(cell.grid.edit, "onBegin", function() {
			if (editor.domNode) {
				var gridHeight = domGeometry.getContentBox(cell.grid.mainNode).h;
				domStyle.set(editor.commentTextarea.containerNode, "maxHeight", (gridHeight - 20) + "px");
			}
			editor.resize();
		}));
		editor.own(aspect.after(cell.grid.edit, "onCancel", function() {
			cell.grid.resize();
		}));
		editor.own(aspect.after(cell.grid.edit, "onApply", function() {
			cell.grid.resize();
		}));

		var rowId = cell.row.id;
		var item = cell.grid.row(rowId).item();

		return item;
	};

	/**
	 * @private
	 */
	CommentEditor.customApplyEdit = function(cell, comment) {
		var def = new Deferred();
		var editor = cell.editor();
		editor.saveComment(function() {
			def.resolve("Comment cell edit succeeded");
		}, function() {
			def.reject("Comment cell edit failed");
		});

		return def;
	};

	return CommentEditor;
});
