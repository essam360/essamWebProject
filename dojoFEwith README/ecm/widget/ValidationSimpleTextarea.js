/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dijit/form/SimpleTextarea",
	"./ValidationTextBox",
	"dojo/text!./templates/ValidationSimpleTextarea.html"
], //
function(declare, SimpleTextarea, ValidationTextBox, template) {
	/**
	 * @name ecm.widget.ValidationTextarea
	 * @class Provides a widget that contains a textarea in which the user input is validated against the specified
	 *        criterion.
	 *        <p>
	 *        This class extends <code>ecm.widget.ValidationTextBox</code> and the Dojo
	 *        <apiname>dijit.form.SimpleTextarea</apiname> class to add validation.
	 *        </p>
	 * @public
	 * @augments dijit.form.ValidationTextarea
	 */
	return declare("ecm.widget.ValidationSimpleTextarea", [
		ValidationTextBox,
		SimpleTextarea
	], {
		/** @lends ecm.widget.ValidationSimpleTextarea.prototype */

		templateString: template,

		// regExp: [extension protected] String
		//		regular expression string used to validate the input
		//		Do not specify both regExp and regExpGen
		//
		// The default regExp string will be set by the SinglePropertyEditorFactory, it will either set a default or
		// pass in the specified custom expression from the meta data used to create the control (can be from EDS service).
		//

		/**
		 * Sets the rows.
		 */
		postCreate: function() {
			this.inherited(arguments);
			var rows = this.style.rows || "3";
			this.set("rows", rows);
		},

		/**
		 * Returns <code>false</code> for <code>isValidSet</code> which is called by <code>validator</code>
		 * method.
		 */
		_isValidSubset: function() {
			return false;
		}

	});
});
