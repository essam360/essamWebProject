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
	"dojo/dom-geometry",
	"dojo/dom-style",
	"dojo/has",
	"dojo/string",
	"dijit/Tooltip",
	"dijit/_Widget",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"idx/html",
	"ecm/MessagesMixin",
	"ecm/model/Permission",
	"ecm/model/UserGroup",
	"ecm/widget/CompositeButton",
	"ecm/widget/MultiIconCompositeButton",
	"ecm/widget/HoverHelp",
	"dojo/text!./templates/UserGroupPrivilegePane.html"
], //
function(declare, lang, array, aspect, domClass, domConstruct, domGeom, domStyle, has, string, Tooltip, _Widget, _TemplatedMixin, _WidgetsInTemplateMixin, idxHtml, MessagesMixin, Permission, UserGroup, CompositeButton, MultiIconCompositeButton, HoverHelp, template) {

	/**
	 * @name ecm.widget.UserGroupPrivilegePane
	 * @class Provides a pane that is used to display the privileges along with the list of user group containing that
	 *        privilege.
	 * @augments dijit._Widget
	 * @since 2.0.3
	 */
	return declare("ecm.widget.UserGroupPrivilegePane", [
		_Widget,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		MessagesMixin
	], {
		/** @lends ecm.widget.UserGroupPane.prototype */

		templateString: template,
		widgetsInTemplate: true,

		/**
		 * An option collection of permission levels, used to display detailed tooltips for assigned users and groups
		 */
		levels: null,
		
		/**
		 * Array of privileges containing a label and a array of user groups.
		 */
		userGroupData: null,
		/**
		 * @private Array of composite buttons.
		 */
		_buttonArray: null,

		/**
		 * @private Array of all hover help widgets.
		 */
		_hoverHelpArray: null,

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
			// Lock down the current size when re-rendering to prevent unnecessary scrolling
			// when an assignment is deleted.
			var marginBox = domGeom.getMarginBox(this.domNode);
			domStyle.set(this.domNode, {
				"width": marginBox.w + "px",
				"height": marginBox.h + "px"
			});

			this._clear();
			this._removeTooltips = [];
			if (this.userGroupData) {
				array.forEach(this.userGroupData, lang.hitch(this, function(accessControlItem) {
					var privilegeContainer = domConstruct.create("div", {
						"class": "privilegeContainer"
					}, this.domNode);
					var leftPane = domConstruct.create("div", {
						"class": "leftPane ecmLabel",
						innerHTML: accessControlItem.label + ":"
					}, privilegeContainer);

					if (accessControlItem.hover) {
						if (!this._hoverHelpArray)
							this._hoverHelpArray = [];
						var hoverHelp = new HoverHelp({
							message: this.messages[accessControlItem.hover],
							isFocusable: true
						})
						this._hoverHelpArray.push(hoverHelp);
						domConstruct.place(hoverHelp.domNode, leftPane, "last");
						hoverHelp.startup();
					}

					var rightPane = domConstruct.create("div", {
						"class": "rightPane"
					}, privilegeContainer);
					array.forEach(accessControlItem.usersGroups, lang.hitch(this, function(userGroup, index) {
						var member = domConstruct.create("div", {
							"class": "member"
						}, rightPane);

						var button;
						var tooltipMsg = "";
						var name = idxHtml.escapeHTML(userGroup.emailAddress || userGroup.displayName || userGroup.name); 
						name = has("dojo-bidi") ? this.enforceTextDirWithUcc(null, name) : name;
						var removeMessage = string.substitute(this.messages.remove_member, [ name ]);
						
						if (this.levels) {
							var iconsClass = [];
							var iconsAltText = [];
							if (userGroup.permissionSource == Permission.PERMISSION_SOURCE.INHERITED || userGroup.permissionSource == Permission.PERMISSION_SOURCE.POLICY || userGroup.permissionSource == Permission.PERMISSION_SOURCE.SECURITY_PROXY) {
								iconsClass.push("inheritedIcon");
								iconsAltText.push(string.substitute(this.messages.inherited_member_hover_help, [ name ]));
							} else if (userGroup.inheritableDepth == 1) {
								iconsClass.push("singleInheritanceIcon");
								iconsAltText.push(string.substitute(this.messages.singleLevelInheritance_member_hover_help, [ name ]));
							} else if (userGroup.inheritableDepth == -1) {
								iconsClass.push("infiniteInheritanceIcon");
								iconsAltText.push(string.substitute(this.messages.infiniteLevelInheritance_member_hover_help, [ name ]));
							}
							
							tooltipMsg = this._getToolTip(accessControlItem, userGroup);
							
							if (iconsClass.length > 0) {
								button = new ecm.widget.MultiIconCompositeButton({
									disabled: true,
									"class": "member",
									label: userGroup.displayName ? userGroup.displayName : userGroup.name,
									tooltip: tooltipMsg,
									iconsClass: iconsClass,
									iconsAltText: iconsAltText,
									actionIconClass: "removeIcon",
									actionAltText: removeMessage
								});
							}
						}

						if (!button) {
							button = new CompositeButton({
								disabled: true,
								"class": "member",
								label: userGroup.displayName ? userGroup.displayName : userGroup.name,
								tooltip: tooltipMsg,
								actionIconClass: "removeIcon",
								actionAltText: removeMessage
							});
						}

						if (!userGroup.readonly) {
							domClass.remove(button._actionFocusNode, "dijitHidden");
							var tooltip = new Tooltip({
								connectId: [
								    // If a tooltip message is set, only apply the remove tooltip message to the delete X button.
								    // If no tooltip is set, have the remove tooltip message apply to the entire button.
									tooltipMsg ? button._actionFocusNode : button.domNode
								],
								label: removeMessage
							});
							tooltip.startup();
							this._removeTooltips.push(tooltip);
							
							button.own(aspect.after(button, "onActionButtonClick", lang.hitch(this, function(evt) {
								accessControlItem.usersGroups.splice(index, 1);
								this.onChange();
								this.render();
							}), true));
						}

						member.appendChild(button.domNode);
						this._buttonArray.push(button);
					}));
					rightPane.appendChild(domConstruct.create("div", {
						"class": "member",
						innerHTML: "&nbsp;"
					}));
				}));
			}
			
			// Clear the fixed size that prevented scrolling while re-rendering.
			domStyle.set(this.domNode, {
				"width": "",
				"height": ""
			});
		},

		/**
		 * @private
		 */
		_getToolTip: function(accessControlItem, userGroup) {
			if (!this.levels)
				return "";
			
			var tooltip = [];
			var enabled;
			var partial;
			var levels = this.levels[accessControlItem.id] ? this.levels[accessControlItem.id] : this.levels["default"]; 
			array.forEach(levels, function(level) {
				// The permissions for the redaction policy Editors are from the security parent custom object 
				// for instances of redaction policy objects, not the security from the class definitions for
				// redaction policy object.
				//
				// Assume a user or group in the Editors list is also granted create instance permission in the 
				// class definition security for redaction policy objects.
				if (accessControlItem.id == "editors" && level.id == "CREATE_INSTANCE") {
					enabled = true;
				} else {
					enabled = (userGroup.accessMask & level.mask) == level.mask;
				}
				partial = !enabled && level.minMask && ((userGroup.accessMask & level.minMask) == level.minMask);
				tooltip.unshift(this._getLevelToolTipText(level.name, enabled, partial));
			}, this);
			
			// Displays the grantee name at the top of the tooltip pane
			var name = idxHtml.escapeHTML(userGroup.emailAddress || userGroup.displayName || userGroup.name); 
			name = has("dojo-bidi") ? this.enforceTextDirWithUcc(null, name) : name;

			tooltip.unshift("<div style='white-space:nowrap;'>" + idxHtml.escapeHTML(name) + "</div><hr/>");

			return tooltip.join("");
		},

		/**
		 * @private
		 */
		_getLevelToolTipText: function(name, enabled, partial) {
			var tooltip;
			if (enabled) {
				tooltip = ("<div class='ecmSecurityPaneTooltip' style='white-space:nowrap;'>" + name + "</div>");
			} else {
				if (partial) {
					tooltip = ("<div class='ecmSecurityPaneTooltip' style='white-space:nowrap;'><span class='stateIcon'><img tabindex='0' alt='" + this.messages.partial_hover_help + "' class='partialIcon' src='dojo/resources/blank.gif'></span>" + name + "</div><div style='clear: both;'></div>");
				} else {
					tooltip = ("<div class='ecmSecurityPaneTooltip' style='text-decoration:line-through; white-space:nowrap;'>" + name + "</div>");
				}
			}
			return tooltip;
		},

		/**
		 * @private Destroys the buttons and clears the domNode.
		 */
		_clear: function() {
			if (this._hoverHelpArray) {
				array.forEach(this._hoverHelpArray, function(hoverHelp) {
					if (!hoverHelp.destroyed) {
						hoverHelp.destroy();
					}
					delete hoverHelp;
				});
			}
			if (this._buttonArray) {
				array.forEach(this._buttonArray, function(button) {
					if (!button._destroyed) {
						button.destroyRecursive();
					}
					delete button;
				});
			}
			if (this._removeTooltips) {
				array.forEach(this._removeTooltips, function(tooltip) {
					tooltip.destroy();
				});
				this._removeTooltips = null;
			}
			if (this.domNode) {
				while (this.domNode.firstChild) {
					this.domNode.removeChild(this.domNode.firstChild);
				}
			}
		}
	});
});
