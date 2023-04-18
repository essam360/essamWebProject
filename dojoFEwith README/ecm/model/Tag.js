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
	 * Constructs a tag.
	 * 
	 * @name ecm.model.Tag
	 * @class Represents a single tag. Each tag is associated with a content item.
	 * @augments ecm.model.SocialItem
	 * @since 2.0.3
	 */
	var Tag = declare("ecm.model.Tag", [
		SocialItem
	], {
		/** @lends ecm.model.Tag.prototype */

		constructor: function() {
			this.type = SocialItem.prototype.TYPE.TAG;
		},

		/**
		 * Gets the tag.
		 */
		getTagValue: function() {
			return this.getValue("tagValue");
		},

		/**
		 * Sets the tag.
		 * 
		 * @param tagValue
		 *            Tag to save
		 */
		setTagValue: function(/*String*/tagValue) {
			this.setValue("tagValue", tagValue);
		},

		/**
		 * @private
		 */
		_prepareJsonForService: function() {
			var json = this.inherited(arguments);
			json.tagValue = this.getTagValue();

			return json;
		}
	});

	/**
	 * @private Constructs a comment given a JSON representation of the item.
	 * @param itemJson
	 *            The JSON representation of the comment.
	 * @param contentItem
	 *            An instance of {@link ecm.model.ContentItem} this comment is associated with.
	 * @param resultSet
	 *            An instance of {@link ecm.model.ResultSet} if this comment is from a result set.
	 */
	Tag.createFromJSON = function(itemJson, contentItem, resultSet) {
		return new Tag(SocialItem.createJsonModel(itemJson, contentItem, resultSet));
	};

	return Tag;
});
