/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/dom-style"
], function(declare, lang, domStyle) {
	/**
	 * @name ecm.widget._SinglePropertyEditorMixin
	 * @class Provides a base class for a single property editor.
	 * @public
	 */
	return declare("ecm.widget._SinglePropertyEditorMixin", null, {
		/** @lends ecm.widget._SinglePropertyEditorMixin.prototype */

		postCreate: function() {
			this.inherited(arguments);
		},

		/**
		 * Returns true if this is a read only field.
		 */
		isReadOnly: function() {
			return this.isEditable ? !this.isEditable() : this.readOnly;
		},

		/**
		 * Returns true if this is a hidden field.
		 */
		isHidden: function() {
			var hidden = false;
			try {
				hidden = domStyle.get(this.domNode, "display") == "none";
			} catch (e) {
				; // ignore - ie is throwing an error
			}
			return hidden;
		},

		/**
		 * Returns the prompt text which was set by SinglePropertyEditorFactory when it created this editor.
		 */
		getPromptText: function() {
			return this.promptText ? this.promptText : "";
		},

		/**
		 * Return the editor's value as an array.
		 */
		getValueAsArray: function() {
			var v = this.getValue ? this.getValue() : this.get("value");
			if (v instanceof Array) {
				if (v.length == 0) {
					v.push("");
				}
			} else if (v == null) {
				v = [];
			} else {
				v = [
					v + ""
				];
			}
			return v;
		},

		/**
		 * Used by search to determine if search should create 2 editor fields or just 1 editor field. For example,
		 * xs:date field should display 2 editor fields when the operator is BETWEEN. However, multi-value choice list
		 * supports only 1 editor field for all operators.
		 */
		supportsPairedSearchFields: function() {
			if (this.dataType == "xs:guid" || this.dataType == "xs:reference" || this.dataType == "xs:object" || this.dataType == "xs:group" || this.dataType == "xs:user") {
				return false;
			} else if (this.isInstanceOf && this.isInstanceOf(ecm.widget.DropDownInput)) {
				return false;
			}
			return true;
		}
	});
});
