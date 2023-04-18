/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array",
	"dojo/_base/Deferred",
	"dojo/_base/event",
	"dojo/aspect",
	"dojo/dom-geometry",
	"dojo/dom-style",
	"dojo/keys",
	"dojo/on",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/MenuItem",
	"dijit/layout/BorderContainer",
	"gridx/modules/CellWidget",
	"gridx/modules/Edit",
	"gridx/modules/Focus",
	"gridx/modules/VScroller",
	"gridx/modules/move/Row",
	"../MessagesMixin",
	"../model/ResultSet",
	"../model/Comment",
	"./listView/ContentList",
	"./listView/editors/CommentEditor",
	"./listView/gridModules/FilterBar",
	"./listView/gridModules/RowContextMenuLoadMenu",
	"./listView/modules/Bar",
	"./listView/modules/FilterData",
	"./listView/modules/ViewMagazine",
	"./listView/modules/ReversedBody",
	"./dialog/ConfirmationDialog",
	"dojo/text!./templates/ItemCommentsPane.html"
],

function(declare, //
lang, //
array, //
Deferred, //
event, //
aspect, //
domGeometry, //
domStyle, //
keys, //
on, //
_TemplatedMixin, //
_WidgetsInTemplateMixin, //
MenuItem, //
BorderContainer, //
CellWidget, //
Edit, //
Focus, //
VScroller, //
MoveRow, //
MessagesMixin, //
ResultSet, //
Comment, //
ContentList, //
CommentEditor, //
FilterBar, //
RowContextMenuLoadMenu, //
Bar, //
FilterData, //
ViewMagazine, //
ReversedBody, //
ConfirmationDialog, //
template) {

	/**
	 * @name ecm.widget.ItemCommentsPane
	 * @class Provides a widget that is used to view comments of or add comments to an item. Also provides controls to
	 *        edit and delete accessible comments.
	 * @augments dijit.layout.BorderContainer
	 * @since 2.0.2
	 */
	return declare("ecm.widget.ItemCommentsPane", [
		BorderContainer,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		MessagesMixin
	], {
		/** @lends ecm.widget.ItemCommentsPane.prototype */
		templateString: template,
		gutters: false,

		item: null,
		_scrollToLastRow: true,
		_hasNew: false,

		/**
		 * Overrides <code>postCreate</code> to make necessary event connections.
		 */
		postCreate: function() {
			this.inherited(arguments);
			this._rendered = false;
			this.own(aspect.after(this._comments, "onRender", lang.hitch(this, function() {
				var maxHeight = Math.floor(domGeometry.getContentBox(this.domNode).h / 2) - 20;
				domStyle.set(this._commentEditor.commentTextarea.containerNode, "maxHeight", maxHeight + "px");
				this.onRenderComments(this._comments.getResultSet());
			})));
			this.own(aspect.after(this._comments, "onEmpty", lang.hitch(this, function() {
				this.onEmptyComments();
			})));
			this.own(aspect.after(this._comments, "onGridResize", lang.hitch(this, function() {
				if (this._scrollToLastRow) {
					this.scrollToLastRow();
					this._scrollToLastRow = false;
				}
			})));
			// When this pane is in the magazine view and the user vertically scrolls the comments, this code prevents propogating the event to the containing ContentList
			this.own(aspect.after(this._comments, "onModulesLoaded", lang.hitch(this, function() {
				this._comments.grid.own(on(this._comments.grid.domNode, "mousedown, mouseup, mouseover, mouseout, mousemove, click, dblclick", function(evt) {
					event.stop(evt);
				}));
			})));
			//aspect.after(this._commentEditor, "onSaveComment", lang.hitch(this, this._appendComment), true);
			this.own(aspect.after(this._commentEditor, "onSaveComment", lang.hitch(this, function() {
				this._commentEditor._clearCommentText();
				this.resize();
			})));
			this.own(aspect.after(this._commentEditor, "onStartComment", lang.hitch(this, function() {
				this.onNewComment();
			})));
			this.own(aspect.after(this._commentEditor, "onEmptyComment", lang.hitch(this, function() {
				this.resize();
				this.onCancelNewComment();
			})));
			this.own(on(this._commentEditor.commentTextarea, "input", lang.hitch(this, function(e) {
				this._commentHeight = domGeometry.getMarginBox(this._commentEditor.commentTextarea.textbox).h;
			})));
			this.own(on(this._commentEditor.commentTextarea, "keyup", lang.hitch(this, function(e) {
				var height = domGeometry.getMarginBox(this._commentEditor.commentTextarea.textbox).h;
				if (this._commentHeight != height)
					this.resize();
			})));
			this.watch("item", lang.hitch(this, function() {
				this._comments.reset();
				this._rendered = false;
				this._scrollToLastRow = true;

				domStyle.set(this._commentEditor.domNode, "display", this.item.isCommentable() ? "inline" : "none");

				this.own(aspect.after(this.item, "onCollaborate", lang.hitch(this, function(socialItem, added) {
					if (added && socialItem.type == socialItem.TYPE.COMMENT) {
						this._appendComment(socialItem);
					}
				}), true));

				var comment = new Comment({
					repository: this.item.repository,
					contentItem: this.item
				});
				this._commentEditor.set("value", comment);
			}));
		},

		/**
		 * Scrolls to the last row in the comments list.
		 */
		scrollToLastRow: function() {
			var grid = this._comments.grid;
			if (grid) {
				grid.vScroller.scrollToRow(0);
			}
		},

		/**
		 * An event function called when a comment is being made.
		 */
		onNewComment: function() {
			this._hasNew = true;
		},

		/**
		 * Discards the new comment that we being made.
		 */
		cancelNewComment: function() {
			this._commentEditor._setCommentText("");
		},

		/**
		 * An event function called when a comment is being made is discarded.
		 */
		onCancelNewComment: function() {
			this._hasNew = false;
		},

		/**
		 * Displays the comments of the item.
		 */
		render: function() {
			if (this.item && !this._rendered) {
				this._retrieveComments(lang.hitch(this, this._renderComments));
				this._rendered = true;
			}
		},

		/**
		 * @private
		 */
		_retrieveComments: function(callback) {
			if (this.item && lang.isFunction(this.item.retrieveComments))
				this.item.retrieveComments(callback);
		},

		_appendComment: function(/* Comment */comment) {
			if (this._comments && this._comments.getResultSet()) {
				var rs = this._comments.getResultSet();
				var before = rs.items.length;
				rs.prepend(new ResultSet({
					items: [
						comment
					]
				}));
				this._scrollToLastRow = rs.items.length > before;
				this.onAddComment(comment);
			}
		},

		/**
		 * An event function called after a new comment is added.
		 * 
		 * @param comment
		 *            A {@link ecm.model.Comment} object added.
		 */
		onAddComment: function(/* Comment */comment) {
			this._hasNew = false;
		},

		/**
		 * Determines if there is a new comment that hasn't been added yet.
		 * 
		 * @return {Boolean} A value of <code>true</code> if there is a new comment, otherwise false.
		 */
		isDirty: function() {
			return this._hasNew;
		},

		/**
		 * @private
		 */
		_renderComments: function(/* ResultSet */comments) {
			this._comments.coreModules = [
				CellWidget,
				MoveRow,
				Focus,
				VScroller
			];
			this._comments.setContentListModules([
				ViewMagazine,
				{
					moduleClass: Bar,
					top: [
						[
							[
								{
									moduleClass: FilterData,
									"className": "BarFilterData"
								}
							]
						]
					]
				}
			]);
			this._comments.setGridExtensionModules([
				{
					moduleClass: RowContextMenuLoadMenu,
					loadMenu: lang.hitch(this, this._loadCommentActionMenu)
				},
				{
					moduleClass: FilterBar,
					conditionContain: ecm.messages.operator_LIKE,
					conditionNotContain: ecm.messages.operator_NOTLIKE,
					conditionEqual: ecm.messages.operator_EQUAL,
					conditionNotEqual: ecm.messages.operator_NOTEQUAL,
					conditionStartWith: ecm.messages.operator_STARTSWITH,
					conditionEndWith: ecm.messages.operator_ENDSWITH,
					conditionRange: ecm.messages.operator_BETWEEN,
					conditionIsEmpty: ecm.messages.operator_NULL,
					conditionBefore: ecm.messages.operator_LESSOREQUAL,
					conditionAfter: ecm.messages.operator_GREATEROREQUAL,
					conditions: {
						string: [
							"equal",
							"contain",
							"startWith",
							"endWith",
							"notEqual",
							"notContain"
						],
						"boolean": [
							"equal"
						],
						date: [
							"equal",
							"before",
							"after",
							"range",
							"isEmpty"
						],
						number: [
							"equal",
							"greater",
							"less",
							"greaterEqual",
							"lessEqual",
							"notEqual",
							"isEmpty"
						],
						time: [
							"equal",
							"before",
							"after",
							"range",
							"isEmpty"
						],
						"enum": [
							"equal",
							"notEqual",
							"isEmpty"
						]
					}
				},
				Edit,
				ReversedBody
			]);
			this._comments.reset();
			this._comments.setResultSet(comments);
		},

		_loadCommentActionMenu: function(menu, selectedComments, grid, cell) {
			var def = new Deferred();
			if (!(selectedComments instanceof Array) || selectedComments.length < 1) {
				def.resolve(false);
				return def;
			}
			var comment = selectedComments[0];
			if (!comment.isEditable() && !comment.isDeletable()) {
				def.resolve(false);
				return def;
			}

			var self = this;
			if (grid && cell) {
				if (comment.isEditable() && comment.isMine()) {
					var editComment = new MenuItem({
						label: ecm.messages.edit,
						onClick: function(e) {
							cell.column.setEditable(true);
							grid.edit.begin(cell.row.id, cell.column.id).then(function() {
								cell.editor().commentTextarea.focusNode.focus();
							});
							cell.column.setEditable(false);
							self.own(aspect.after(grid.cellWidget, "restoreCellDecorator", function() {
								grid.focus.focusArea("body");
							}));
						}
					});
					menu.addChild(editComment);
				}

				if (comment.isDeletable()) {
					var deleteComment = new MenuItem({
						label: ecm.messages.delete_text,
						onClick: function(e) {
							if (self._confirmDelete && self._confirmDelete.open)
								return;
							if (self._confirmDelete)
								self._confirmDelete.destroy();

							self._confirmDelete = new ConfirmationDialog({
								text: ecm.messages.comments_delete_confirmation,
								buttonLabel: ecm.messages.delete_text,
								title: ecm.messages.confirmation_icon_tooltip,
								cancelButtonDefault: true,
								onExecute: function() {
									self._deleteComment(comment);
								},
								onCancel: function() {
								}
							});
							self._confirmDelete.show();
						}
					});
					menu.addChild(deleteComment);
				}
			}
			def.resolve(menu);

			return def;
		},

		_deleteComment: function(comment) {
			comment.deleteThis(); // The content list will delete the row automatically as it listens for onChange in the model
		},

		/**
		 * Adds if there is a new comment that hasn't been added yet.
		 */
		save: function(callback, errorback) {
			this._commentEditor.saveComment(callback, errorback);
		},

		/**
		 * An event function called after the comments pane is rendered.
		 * 
		 * @param comments
		 *            A {@link ecm.model.ResultSet} object containing {@link ecm.model.Comment} objects.
		 */
		onRenderComments: function(/* ResultSet */comments) {
		},

		onEmptyComments: function() {
		},

		/**
		 * Overrides <code>resize</code> to make necessary adjustments to the size of containing widgets before
		 * resizing.
		 */
		resize: function(changeSize) {
			var dim = changeSize ? changeSize : domGeometry.getContentBox(this.domNode);
			domGeometry.setMarginBox(this._commentEditor.domNode, {
				w: dim.w
			});

			var listHeight = dim.h - domGeometry.getMarginBox(this._commentEditor.domNode).h;
			dim = domGeometry.getMarginBox(this._comments.domNode);
			if (dim.h != listHeight) {
				domGeometry.setMarginBox(this._comments.domNode, {
					h: listHeight
				});
			}

			this.inherited(arguments);
		},

		destroy: function() {
			if (this._confirmDelete) {
				this._confirmDelete.destroyRecursive();
				this._confirmDelete = null;
			}
			this.inherited(arguments);
		}
	});

});
