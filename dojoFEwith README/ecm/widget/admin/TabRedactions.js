/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array",
	"dojo/_base/Deferred",
	"dojo/string",
	"dojo/aspect",
	"dojo/_base/sniff",
	"dojo/dom-construct",
	"dojo/dom-style",
	"dojo/dom-geometry",
	"dojo/_base/connect",
	"dijit/_Widget",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/layout/TabContainer",
	"ecm/MessagesMixin",
	"ecm/model/_ModelStore",
	"ecm/model/admin/AdminData",
	"ecm/widget/admin/_NavigatorAdminTabBase",
	"ecm/model/Action",
	"ecm/model/admin/AdminRoleConfig",
	"idx/layout/BorderContainer",
	"dijit/layout/ContentPane",
	"ecm/widget/admin/RedactionTabContainer",
	"ecm/widget/admin/TabRedactionReasons",
	"ecm/widget/admin/TabRedactionReason",
	"ecm/widget/admin/RedactionsSubTab",
	"ecm/widget/admin/RedactionTabController",
	"dojo/text!./templates/TabRedactions.html"
], //

function(declare, lang, array, Deferred, string, aspect, has, construct, style, domGeometry, connect, _Widget, _TemplatedMixin, _WidgetsInTemplateMixin, TabContainer,  MessagesMixin, _ModelStore,  AdminData,  _NavigatorAdminTabBase, Action, AdminRoleConfig, BorderContainer, ContentPane, RedactionTabContainer, TabRedactionReasons, TabRedactionReason, RedactionsSubTab, RedactionTabController, template) {

	/**
	 * @private Part of the NavigatorAdminPane widget.
	 * @name ecm.widget.admin.TabRedactions
	 * @class Provides a tab that shows the redaction tabs. 
	 */
	return declare("ecm.widget.admin.TabRedactions", [
		_NavigatorAdminTabBase,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		MessagesMixin
	], {
		/** @lends ecm.widget.admin.TabRedactions.prototype */

		templateString: template,
		widgetsInTemplate: true,
		_SECURITY_TOPIC: {
			category: "redactions.redactions"
		},


		postCreate: function() {
			this.inherited(arguments);
			this._iconClass = "adminIconTheme";
			this._iconClassTitle = ecm.messages.admin_redactions_policies_roles;
			this._setParentObject(this);

		},

		initialize: function() {
		
			this._reasonsTab.set("title", ecm.messages.admin_reasons);
			this._redactionsTab.set("title", ecm.messages.admin_redactions_policies_roles);
			this._redactionReasons.initialize();
			this._redactionsTab.onSelect();
			
			this._openTabHandle = connect.subscribe("ecm.admin.TabRedactions.openTab", this, this.openTab);
			this._closeTabHandle = connect.subscribe("ecm.admin.TabRedactions.closeTab", this, this.closeTab);
			this._closeChildrenHandle = connect.subscribe("ecm.admin.TabRedactions.closeChildren", this, this.closeChildren);
			this.resize();
			
			// Handle role based administration
			if (ecm.model.desktop.isDesktopAdminUser){
				ecm.model.admin.appCfg.getDesktopObjects(lang.hitch(this, function(desktopConfigs) {
					for (var i = 0; i < desktopConfigs.length; i++){
						var desktopConfig = desktopConfigs[i];
						if (desktopConfig.id == ecm.model.desktop.id){
							if (desktopConfig.isRoleBasedAdminEnabled()){
								desktopConfig.getAdminRoleConfig(lang.hitch(this, function(adminRoleConfig){
									if (adminRoleConfig){
										if (!adminRoleConfig.hasPrivilege(AdminRoleConfig.RBR_REASONS_PRIVILEGE)){
											style.set(this._reasonsTab.controlButton.domNode, "display", "none");
											this._tabContainer.selectChild(this._redactionsTab);
										}
										else if (!adminRoleConfig.hasPrivilege(AdminRoleConfig.RBR_POLICIES_ROLES_PRIVILEGE)){
											style.set(this._redactionsTab.controlButton.domNode, "display", "none");
										}
									}
								}));
							}
							break;
						}
					}
				}));
			}
		},

		
		
		
		destroy: function() {
			this.inherited(arguments);
			connect.unsubscribe(this._openTabHandle);
			connect.unsubscribe(this._closeTabHandle);
			connect.unsubscribe(this._closeChildrenHandle);
		},			
	
		/**
		 * Resizes the border container in this pane.
		 */
		resize: function() {
			this.borderContainer.resize();
			
			var contentBox = domGeometry.getContentBox(this.borderContainer.domNode);
//			console.log("border container content area height: " + contentBox.h + " width: " + contentBox.w);
			this._redactionsTab.resize(contentBox);
		},

		/**
		 * Opens a tab.
		 * 
		 * @param kwArgs
		 *            A tab to be opened
		 */
		openTab: function(kwArgs) {
			this._tabContainer.openTab(kwArgs);
		},

		/**
		 * Closes the specified tab.
		 * 
		 * @param kwArgs
		 *            A tab to be closed
		 * @param noConfirmDialog
		 *            A boolean flag to close a tab without confirmation
		 */
		closeTab: function(kwArgs, noConfirmDialog) {
			// If the last non-fixed tab being closed is a redaction reason tab, select back to Reasons on close...
			var tabChildren = this._tabContainer.getChildren();
			var selectReasonsTab = (kwArgs instanceof TabRedactionReason && tabChildren.length == 3);
			
			this._tabContainer.closeTab(kwArgs, noConfirmDialog);
			
			if ( selectReasonsTab ) {
				this._tabContainer.selectChild(tabChildren[0]);
			}
		},		
		
		closeChildren: function(kwArgs){
			this._tabContainer.closeChildren(kwArgs);
		}
	});

});
