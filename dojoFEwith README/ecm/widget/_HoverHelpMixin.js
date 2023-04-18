/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/event",
	"dojo/keys",
	"dijit/registry",
	"../LoggerMixin"
], function(declare, lang, event, keys, registry, LoggerMixin) {
	/**
	 * @name ecm.widget._HoverHelpMixin
	 * @class Provides a base class for creating and displaying hover help in the user interface.
	 * @public
	 */
	return declare("ecm.widget._HoverHelpMixin", [
		LoggerMixin
	], {
		/** @lends ecm.widget._HoverHelpMixin.prototype */

		/**
		 * The ID of the {@link ecm.widget.HoverHelp} object that this widget points to.
		 * 
		 * @since 2.0.3.6
		 */
		hoverHelpId: null,

		postCreate: function() {
			this.inherited(arguments);

			// Ctrl F1 opens the hover help drop down dialog - Escape closes it
			this.connect(this.domNode, "onkeypress", lang.hitch(this, function(evt) {
				var hoverHelp = this._hoverHelp || ((typeof this.hoverHelpId == "string") && registry.byId(this.hoverHelpId)) || null;
				if (hoverHelp && evt.ctrlKey && evt.charOrCode == keys.F1 && registry.getEnclosingWidget(evt.target).setHoverHelp) {
					var focusNode = dijit.getFocus().node ? dijit.getFocus().node : this.focusNode;
					hoverHelp.openDropDownDialog(focusNode);
					event.stop(evt);
				}
				if (hoverHelp && hoverHelp.isOpenDropDownDialog() && evt.keyCode == keys.ESCAPE) {
					hoverHelp.closeDropDownDialog();
					this.focus();
					event.stop(evt);
				}
			}));
		},

		/**
		 * Set the hover help that should be opened when the user hits Ctrl F1.
		 */
		setHoverHelp: function(hoverHelp) {
			this._hoverHelp = hoverHelp;
		}
	});
});
