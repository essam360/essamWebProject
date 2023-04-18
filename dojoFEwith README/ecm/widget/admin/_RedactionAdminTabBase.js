/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/dom-class",
	"dojo/_base/array",
	"dojo/aspect",
	"dijit/_Widget",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dojo/_base/connect",
	"dojo/dom-style",
	"ecm/Messages",
	"idx/layout/ButtonBar",
	"dijit/form/Button",
	"dijit/layout/TabContainer",
	"dijit/layout/ContentPane",
	"ecm/widget/admin/_NavigatorAdminTabBase",
	"ecm/widget/dialog/ConfirmationDialog"
], //

function(declare, lang, domClass, array, aspect, _Widget, _templatedMixin, _widgetsInTemplateMixin, connect, style, Messages, ButtonBar, Button, TabContainer, ContentPane, _NavigatorAdminTabBase, ConfirmationDialog) {

	/**
	 * @public
	 * @name ecm.widget.admin._RedactionAdminTabBase
	 * @class Provides a tab content view for an administration redaction object.
	 */
	return declare("ecm.widget.admin._RedactionAdminTabBase", [
		_NavigatorAdminTabBase
	], {
		/** @lends ecm.widget.admin._RedactionAdminTabBase.prototype */

		
		postCreate: function() {
			this.inherited(arguments);
		},		

	
		_onClose: function(){
			connect.publish("ecm.admin.TabRedactions.closeTab", [
			   this
			]);
		},

		onClose: function() {
			var doClose = true;
			if (this._dirty) {
				var self = this;
				var confirmClose = new ConfirmationDialog({
					text: ecm.messages.admin_prompt_close_without_save,
					title: ecm.messages.close,
					buttonLabel: ecm.messages.yes,
					cancelButtonLabel: ecm.messages.no,
					cancelButtonDefault: true,
					onExecute: function() {
						self._markClean();
						connect.publish("ecm.admin.TabRedactions.closeTab", [
							[
								self
							]
						]);
					}
				});
				confirmClose.show();
				return false;
			}
			return true;
		},		
		

		/**
		 * Opens the widget in the tabs pane.
		 * 
		 * @private
		 */
		openTab: function(widget) {
			connect.publish("ecm.admin.TabRedactions.openTab", [
				widget
			]);
		},		

		_closeChildren: function(item){
			connect.publish("ecm.admin.TabRedactions.closeChildren", [
			                                    				item
			                                    			]);
		}

	});

});
