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
	"dojo/_base/window",
	"dojo/aspect",
	"dojo/dom-geometry",
	"dojo/dom-style",
	"dojo/keys",
	"dojo/on",
	"dojo/string",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/_Widget",
	"dijit/focus",
	"ecm/MessagesMixin",
	"ecm/LoggerMixin",
	"ecm/model/ContentItem",
	"ecm/model/Request",
	"ecm/model/ResultSet",
	"ecm/model/SocialItem",
	"ecm/widget/CompositeButton",
	"ecm/widget/Ellipsis",
	"ecm/widget/HoverHelp",
	"ecm/widget/ValidationTextBox",
	"dojo/text!./templates/Tags.html"
], //
function(declare, //
lang, //
array, //
has, //
baseWin, //
aspect, //
domGeometry, //
domStyle, //
keys, //
on, //
string, //
_TemplatedMixin, //
_WidgetsInTemplateMixin, //
_Widget, //
focus, //
MessagesMixin, //  
LoggerMixin, //
ContentItem, //
Request, //
ResultSet, //
SocialItem, //
CompositeButton, //
Ellipsis, //
HoverHelp, //
ValidationTextBox, //
template) { //

	/**
	 * @name ecm.widget.Tags
	 * @class Provides a widget that is used to display the tags of a document, including a control to edit and retrieve
	 *        and display the list of all tags that have added the document.
	 * @augments dijit._Widget
	 * @since 2.0.3
	 */
	return declare("ecm.widget.Tags", [
		_Widget,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		LoggerMixin,
		MessagesMixin
	], {
		/** @lends ecm.widget.Tags.prototype */
		templateString: template,
		widgetsInTemplate: true,

		/**
		 * The {@link ecm.model.ContentItem} object being collaborated on.
		 */
		item: null,

		/**
		 * The maximum number of tags displayed as label
		 */
		maxLabelTags: 5,

		/**
		 * The maximum width of tags displayed as label
		 */
		maxLabelWidth: 300,

		postCreate: function() {
			this.inherited(arguments);
			this.logEntry("postCreate");

			this._dropdownDialog.setOKButtonLabel(this.messages.close);
			this.own(aspect.after(this._editLink, "openDropDown", lang.hitch(this, "_loadDropDown")));
			this.own(aspect.after(this._dropdownDialog, "onClickOK", lang.hitch(this, function() {
				this._dropdownDialog.onCancel();
			})));

			this.own(aspect.before(ecm.model.desktop, "onDisplayStatusDialog", lang.hitch(this, function() {
				this._editLink.setAllowCloseOnBlur(false);
			})));
			this.own(aspect.after(ecm.model.desktop, "onHideStatusDialog", lang.hitch(this, function() {
				this._editLink.setAllowCloseOnBlur(true);
			})));

			this.own(on(this.domNode, "keyup, keypress, keydown", function(e) {
				if (e.keyCode == keys.ENTER || e.keyCode == keys.SPACE)
					e.stopPropagation();
			}));
			this.own(on(this.domNode, "mousedown, mouseup, click, dblclick", function(e) {
				e.stopPropagation();
			}));

			this.own(on(this._newTagsTextBox.focusNode, "keyup keypress", function(e) {
				if (e.keyCode == keys.ENTER) {
					e.preventDefault();
					e.stopPropagation();
				}
			}));
			this.own(on(this._newTagsTextBox.focusNode, "keydown", lang.hitch(this, function(e) {
				if (e.keyCode == keys.ENTER && !e.shiftKey && !this._enterKeyHandlerOverridden) {
					e.preventDefault();
					e.stopPropagation();
					this._addTags();
				}
			})));
			this._newTagsTextBox.textDir = has("text-direction");
			this._newTagsTextBox.set("placeHolder", this.messages.tags_hint);

			if (this.item)
				this._init();
			this.watch("item", lang.hitch(this, function() {
				this._init();
			}));

			this._editLink.startup();
			this.logExit("postCreate");
		},

		_init: function() {
			if (!this.item)
				return;

			this._isLoaded = false;
			this.updateLabel();
			this._updateHoverHelp();

			this.own(aspect.after(this.item, "onChange", lang.hitch(this, function() {
				this._updateTags();
			})));
			this.own(aspect.after(this.item, "onCollaborate", lang.hitch(this, function(socialItem, added, skipOnChange) {
				if (skipOnChange && socialItem && socialItem.type == SocialItem.prototype.TYPE.TAG)
					this._updateTags();
			}), true));
			this.own(aspect.after(this._editLink, "closeDropDown", lang.hitch(this, function() {
				if (this._tagsChanged)
					this.item.onChange([
						this.item
					]);
				this._tagsChanged = false;
			})));
		},

		_updateTags: function() {
			var tags = this.item.getValue(this.item.getTagsPropertyName());
			if (tags != undefined)
				this.tags = tags;
			this.updateLabel();
			this._isLoaded = false;
		},

		uninitialize: function() {
			this.inherited(arguments);
			this._destroyTagButtons();
			if (this._tagsLabel)
				this._tagsLabel.destroy();
		},

		_showMessageIfNone: function() {
			domStyle.set(this._tagsNodeNone, "display", this.tags instanceof Array && this.tags.length > 0 ? "none" : "");
		},

		_destroyTagButtons: function(tags) {
			if (!(this._tagButtons instanceof Array) || this._tagButtons.length < 1)
				return;

			for (var i = 0; i < this._tagButtons.length; i++) {
				var button = this._tagButtons[i];
				var destroy = !(tags instanceof Array) || array.some(tags, function(tag) {
					return button.label == tag;
				});
				if (destroy) {
					button.destroy();
					this._tagButtons.splice(i, 1);
					i--;
					var ti = this.tags.indexOf(button.label);
					if (ti > -1)
						this.tags.splice(ti, 1);
				}
			}
			this.item.setValue(this.item.getTagsPropertyName(), this.tags);
			this._showMessageIfNone();
		},

		_createTagButtons: function(tagItems) {
			this.tags = [];
			this._destroyTagButtons();
			this._appendTagButtons(tagItems);
			this.updateLabel();
		},

		_appendTagButtons: function(tagItems) {
			array.forEach(tagItems, lang.hitch(this, function(item) {
				var tag = item.getTagValue();
				var button = new CompositeButton({
					label: tag,
					disabled: !item.isDeletable(),
					titleDisabled: true,
					actionIconClass: "removeIcon",
					actionAltText: string.substitute(this.messages.tags_delete, [
						tag
					])
				});
				button.own(aspect.after(button, "onActionButtonClick", lang.hitch(this, function() {
					item.deleteThis(lang.hitch(this, function() {
						this._tagsChanged = true;
						// focus the close button before destroying the tag being deleted
						focus.focus(this._dropdownDialog._okButton.focusNode);
						this._destroyTagButtons([
							tag
						]);
					}), lang.hitch(this, function() {
					}), true);
				})));
				this._tagsNode.appendChild(button.domNode);
				if (!(this._tagButtons instanceof Array))
					this._tagButtons = [];
				this._tagButtons.push(button);
				this.tags.push(tag);
				this._tagsNode.scrollTop = this._tagsNode.scrollHeight;
			}));
			this.item.setValue(this.item.getTagsPropertyName(), this.tags);
			this._showMessageIfNone();
		},

		_updateNewTagsTextBox: function() {
			var taggable = this.item.isTaggable();
			this._newTagsTextBox.set("disabled", taggable ? false : true);
			this._newTagsTextBox.set("placeHolder", taggable ? this.messages.tags_hint : this.messages.tags_no_access);
		},

		_addTags: function() {
			var userEnteredTags = this._newTagsTextBox.get("value");
			if (!userEnteredTags || !this.item)
				return;

			this.item.addTags(userEnteredTags, lang.hitch(this, function(resultSet) {
				this._newTagsTextBox.set("value", "");
				this._tagsChanged = true;
				this._createTagButtons(resultSet.items);
			}), null, true);
		},

		/**
		 * Sets the item being collaborated on.
		 * 
		 * @param contentItem
		 *            A {@link ecm.model.ContentItem} object.
		 */
		setItem: function(contentItem) {
			this.set("item", contentItem);
		},

		/**
		 * @private
		 */
		_loadDropDown: function(loadCallback) {
			this.resize();
			if (!this.item)
				return;

			this._editLink.setAllowCloseOnBlur(false);
			if (this._isLoaded) {
				this._editLink.setAllowCloseOnBlur(true);
			} else {
				this.item.retrieveTags(lang.hitch(this, function(resultSet) {
					this._createTagButtons(resultSet.items);
					this._updateNewTagsTextBox();
					this._editLink.setAllowCloseOnBlur(true);
					this._isLoaded = true;
					this.resize();
					if (lang.isFunction(loadCallback))
						loadCallback();
				}), lang.hitch(this, function() {
					this._editLink.setAllowCloseOnBlur(true);
				}));
			}
		},

		/**
		 * Updates the label.
		 */
		updateLabel: function() {
			if (!(this.tags instanceof Array))
				this.tags = [];

			if (!this._tagsLabel) {
				this._tagsLabel = new Ellipsis({
					fitParent: true
				});
				this._editLink.linkNode.appendChild(this._tagsLabel.domNode);
				this._tagsLabel.startup();
			}

			var tags = "";
			var count = 0;
			var maxWidthReached = false;
			var labelWidth = 0;
			array.forEach(this.tags, lang.hitch(this, function(tag) {
				if (tags)
					tags += ecm.model.desktop.valueFormatter.getSeparator() + " ";
				tags += tag;
				count++;

				if (count <= this.maxLabelTags && !maxWidthReached) {
					var visibleNode = baseWin.doc.createTextNode(string.substitute(string.substitute(this.messages.tags, [
						tags
					])));
					this._tagsLabel.set("content", visibleNode);
					var width = domGeometry.getMarginBox(this._tagsLabel.containerNode).w;
					maxWidthReached = width > this.maxLabelWidth && count > 1;
					this._tagsLabel.set("fitParent", !maxWidthReached);
					if (!maxWidthReached)
						labelWidth = width;
				}
			}));
			var labelNode = baseWin.doc.createTextNode(string.substitute(string.substitute(this.messages.tags, [
				tags ? tags : this.messages.none
			])));
			this._tagsLabel.set("content", labelNode);
			this._tagsLabel._ellipsisDisabled = count <= this.maxLabelTags && !maxWidthReached;
			if (!labelWidth && !tags)
				labelWidth = domGeometry.getMarginBox(this._tagsLabel.containerNode).w;
			if (labelWidth)
				this._tagsLabel.layout(labelWidth + 12); // 12 for '...'
		},

		_updateHoverHelp: function() {
			this._newTagsTextBoxHoverHelp.set("message", this.item && this.item.repository && this.item.repository._isBox() ? this.messages.tags_hover_help_box : this.messages.tags_hover_help);
		},

		resize: function() {
			var dim = domGeometry.getContentBox(this._dropdownDialog.containerNode);
			var listHeight = dim.h - domGeometry.getMarginBox(this._newTagsNode).h;
			dim = domGeometry.getMarginBox(this._tagsNode);
			if (dim.h != listHeight) {
				domGeometry.setMarginBox(this._tagsNode, {
					h: listHeight
				});
			}
		}
	});
});
