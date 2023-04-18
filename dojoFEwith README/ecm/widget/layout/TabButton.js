/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/dom-attr",
	"dojo/dom-class",
	"dojo/dom-construct",
	"dojo/dom-geometry",
	"dijit/registry",
	"dijit/MenuItem",
	"dijit/Tooltip",
	"idx/layout/MoveableTabContainer",
	"../../Messages",
	"../../LoggerMixin",
	"dojo/text!./templates/_TabButton.html"
],

function(declare, //
lang, //
domAttr, //
domClass, //
domConstruct, //
domGeometry, //
registry, //
MenuItem, //
Tooltip, //
MoveableTabContainer, //
Messages, //
LoggerMixin, //
buttonTemplate) {

	return declare("ecm.widget.layout.TabButton", [
		idx.layout.MoveableTabButton
	], {
		templateString: buttonTemplate,

		maxWidth: 200,

		showDropDown: true,

		/**
		 * Callback for when the button is clicked. If type="submit", return true to perform submit, or false to cancel
		 * it.
		 * 
		 * @e Click event handle
		 */
		onClick: function(/*Event*/e) {
			return false; // Boolean
		},

		postCreate: function() {
			this.inherited(arguments);

			if (!this.showDropDown) {
				domClass.add(this.dropDownContainer, "dijitHidden");
			}

			this.watch("label", function(attr, oldVal, newVal) {
				this.setTitleToolTip(newVal);
			});

			this.tabTooltip = new Tooltip({
				connectId: [
					this.id
				]
			});

			this.tabTooltip.startup();
			
			domAttr.set(this.focusNode, "aria-labelledby", domAttr.get(this.containerNode, "id"));
		},

		setTitleToolTip: function(tooltipMessage) {
			this.tabTooltip.set("label", tooltipMessage);
		},

		/**
		 * Hide/show the close button
		 * 
		 * @param disp
		 *            Boolean determining if the close button should be hidden or shown.
		 */
		_setCloseButtonAttr: function(/*Boolean*/disp) {
			this._set("closeButton", disp);
			domClass.toggle(this.innerDiv, "dijitClosable", disp);
			this.closeNode.style.display = disp ? "" : "none";

			var controlButton = this;
			var menu = registry.byId(controlButton.id + "_Menu");
			if (menu && disp) {
				var cm = registry.byId(controlButton.id + "_closeTabMenu");
				if (!cm) {
					menu.addChild(new MenuItem({
						label: ecm.messages.close_tab,
						id: controlButton.id + "_closeTabMenu",
						dir: controlButton.dir,
						lang: controlButton.lang,
						onClick: function(evt) {
							var button = registry.byNode(this.getParent().currentTarget);
							controller.onCloseButtonClick(button.page);
						}
					}));
				}

			} else if (menu && !disp) {
				var cm = registry.byId(controlButton.id + "_closeTabMenu");
				if (cm) {
					menu.removeChild(cm);
					cm.destroy();
				}
			}
		}
	});
});
