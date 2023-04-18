/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/dom-class",
	"dijit/_Widget",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"ecm/widget/eforms/_FormMixin",
	"dojo/text!./templates/FormSigningContainer.html"
], function(declare, lang, domClass, _Widget, _TemplatedMixin, _WidgetsInTemplateMixin, _FormMixin, template) {
	/**
	 * @name ecm.widget.eforms.FormSigningContainer
	 * @class Provides the container for the IBM FileNet P8 eform signing page.
	 */
	return declare("ecm.widget.eforms.FormSigningContainer", [
		_Widget,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		_FormMixin
	], {
		/** @lends ecm.widget.eforms.FormSigningContainer.prototype */

		templateString: template,
		widgetsInTemplate: false,

		postCreate: function() {
			this.logEntry("postCreate");

			var repositoryId = this.repositoryId;
			var cellName = this.cellName;
			var row = this.row;
			var serialNumber = this.serialNumber;

			this._loadDesktop(lang.hitch(this, function() {
				require([
					"eforms/widget/FormSigningPane"
				], lang.hitch(this, function(FormSigningPane) {
					// Load document form widget			
					var signingPane = new FormSigningPane({
						repositoryId: repositoryId,
						row: row,
						cellName: cellName,
						serialNumber: serialNumber
					});
					signingPane.startup();
					this.containerNode.appendChild(signingPane.domNode);
				}));
			}));

			domClass.add(this.containerNode, "ecmLoginPane");

			this.logExit("postCreate");
		}
	});
});
