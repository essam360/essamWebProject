/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array",
	"dojo/aspect",
	"dojo/dom-class",
	"dojo/dom-construct",
	"dojo/string",
	"dijit/Tooltip",
	"dijit/_Widget",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"ecm/MessagesMixin",
	"ecm/model/UserGroup",
	"ecm/widget/CompositeButton",
	"dojo/text!./templates/UserGroupPane.html"
], //
function(declare, lang, array, aspect, domClass, domConstruct, string, Tooltip, _Widget, _TemplatedMixin, _WidgetsInTemplateMixin, MessagesMixin, UserGroup, CompositeButton, template) {

	/**
	 * @name ecm.widget.UserGroupPane
	 * @class Provides a pane that is used to display a list of user groups as composite buttons.
	 * @augments dijit._Widget
	 * @since 2.0.3
	 */
	return declare("ecm.widget.UserGroupPane", [
		_Widget,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		MessagesMixin
	], {
		/** @lends ecm.widget.UserGroupPane.prototype */

		templateString: template,
		widgetsInTemplate: true,

		/**
		 * Array of {@link ecm.model.UserGroup} to display.
		 */
		userGroupData: null,
		/**
		 * @private Array of composite buttons.
		 */
		_buttonArray: null,

		/**
		 * Post create.
		 */
		postCreate: function() {
			this.inherited(arguments);
			this._buttonArray = [];
			if (this.userGroupData && this.userGroupData.length > 0) {
				this.render();
			}
			this.watch("userGroupData", lang.hitch(this, function() {
				this.render();
			}));
		},

		/**
		 * Cleans up the widget
		 */
		destroy: function() {
			this.inherited(arguments);
			this._clear();
		},

		/**
		 * Fired when a user group is deleted from the pane.
		 */
		onChange: function() {
		},

		/**
		 * @private Renders the user and group data.
		 */
		render: function() {
			this._clear();
			if (this.userGroupData) {
				array.forEach(this.userGroupData, lang.hitch(this, function(userGroup, index) {
					var id = userGroup.id;
					var memberDiv = domConstruct.create("div", {
						"class": "member"
					}, this.domNode);
					var button = new CompositeButton({
						disabled: true,
						"class": "member",
						label: userGroup.displayName,
						tooltip: "",
						actionIconClass: "removeIcon",
						actionAltText: string.substitute(this.messages.remove_member, [
							userGroup.displayName
						])
					});
					domClass.remove(button._actionFocusNode, "dijitHidden");
					button.on("mouseover", function() {
						Tooltip.show(button.actionAltText, button._actionFocusNode);
					});
					button.on("mouseout", function() {
						Tooltip.hide(button._actionFocusNode);
					});
					button.own(aspect.after(button, "onActionButtonClick", lang.hitch(this, function(evt) {
						var index = this._getMemberIndex(id);
						this.userGroupData.splice(index, 1);
						this.onChange();
						this.render();
					}), true));
					memberDiv.appendChild(button.domNode);
					this._buttonArray.push(button);
				}));
			}
		},

		/**
		 * @private Returns the index in the members array for the input id.
		 */
		_getMemberIndex: function(id) {
			for ( var i = 0; i < this.userGroupData.length; i++) {
				if (this.userGroupData[i].id == id) {
					return i;
				}
			}
			return -1;
		},

		/**
		 * @private Destroys the buttons and clears the domNode.
		 */
		_clear: function() {
			if (this._buttonArray) {
				array.forEach(this._buttonArray, function(button) {
					if (!button._destroyed) {
						button.destroyRecursive();
					}
					delete button;
				});
			}
			if (this.domNode) {
				while (this.domNode.firstChild) {
					this.domNode.removeChild(this.domNode.firstChild);
				}
			}
		}
	});
});
