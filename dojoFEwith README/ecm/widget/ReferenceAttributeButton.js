/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare", //
	"dojo/_base/event", //
	"dojo/_base/lang", //
	"dojo/dom-attr", //
	"dojo/dom-class", //
	"dojo/dom-construct", //
	"dojo/keys", //
	"dijit/_Widget", //
	"idx/html", //
	"./_HoverHelpMixin", //
	"./_SinglePropertyEditorMixin"
], //
function(declare, //
event, //
lang, //
domAttr, //
domClass, //
domConstruct, //
keys, //
_Widget, //
idxHtml, //
_HoverHelpMixin, //
_SinglePropertyEditorMixin) {

	/**
	 * @name ecm.widget.ReferenceAttributeButton
	 * @class Provides a widget that is used as a button to display a the object identified by a reference attribute in
	 *        an IBM Content Manager repository.
	 * @public
	 */
	return declare("ecm.widget.ReferenceAttributeButton", [
		_Widget,
		_HoverHelpMixin,
		_SinglePropertyEditorMixin
	], {
		/** @lends ecm.widget.ReferenceAttributeButton.prototype */

		/**
		 * The node that will receive focus.
		 */
		focusNode: null,

		/**
		 * The display label.
		 */
		label: "",

		postCreate: function() {
			this.inherited(arguments);
			domClass.add(this.domNode, "ecmReferenceAttributeButton");
			domClass.add(this.domNode, "dijitInline");
			this.focusNode = domConstruct.create("span", {
				innerHTML: idxHtml.escapeHTML(this.label)
			});
			this.domNode.appendChild(this.focusNode);
			domAttr.set(this.focusNode, "tabindex", "0");

			this.connect(this.focusNode, "onkeyup", lang.hitch(this, function(evt) {
				if (domClass.contains(this.domNode, "disabled")) {
					event.stop(evt);
				} else if (evt.keyCode == keys.ENTER || evt.keyCode == keys.SPACE) {
					this.onClick(evt);
				}
			}));
			this.connect(this.focusNode, "onclick", lang.hitch(this, function(evt) {
				if (domClass.contains(this.domNode, "disabled")) {
					event.stop(evt);
				}
			}));
		},

		/**
		 * Retrieves the value.
		 * 
		 * @return The value.
		 */
		getValue: function() {
			return this.get("value") ? this.get('value') : "";
		},

		/**
		 * Disables or enables this control.
		 * 
		 * @param disabled
		 *            A boolean value. If <code>true</code>, this control is disabled. Otherwise this control is
		 *            enabled.
		 */
		_setDisabledAttr: function(disabled) {
			if (disabled) {
				domClass.add(this.domNode, "disabled");
			} else {
				domClass.remove(this.domNode, "disabled");
			}
		}
	});
});
