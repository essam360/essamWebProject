/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/array",
	"dojo/_base/lang",
	"dojo/aspect",
	"dojo/dom-class",
	"dijit/_Widget",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/form/Button",
	"dijit/layout/ContentPane",
	"ecm/LoggerMixin",
	"ecm/MessagesMixin",
	"ecm/model/ContentClass",
	"ecm/model/EntryTemplate",
	"ecm/model/Repository",
	"ecm/model/SecurityPolicy",
	"ecm/widget/CheckBox",
	"ecm/widget/RadioButton",
	"ecm/widget/SecurityPane",
	"ecm/widget/SecurityPolicySelector",
	"ecm/widget/HoverHelp",
	"idx/layout/BorderContainer",
	"dojo/text!./templates/SecurityPane.html"
],

function(declare, //
array, //
lang, //
aspect, //
domClass, //
_Widget, //
_TemplatedMixin, //
_WidgetsInTemplateMixin, //
Button, //
ContentPane, //
LoggerMixin, //
MessagesMixin, //
ContentClass, //
EntryTemplate, //
Repository, //
SecurityPolicy, //
CheckBox, //
RadioButton, //
SecurityPane, //
SecurityPolicySelector, //
HoverHelp, //
BorderContainer, //
template) {

	/**
	 * @name ecm.widget.entryTemplateBuilder.SecurityPane
	 * @class Provides a widget that has the entry template security settings.
	 * @augments dijit._Widget
	 * @since 2.0.3
	 */
	return declare("ecm.widget.entryTemplateBuilder.SecurityPane", [
		_Widget,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		LoggerMixin,
		MessagesMixin
	], {
		/** @lends ecm.widget.entryTemplateBuilder.SecurityPane */

		templateString: template,
		widgetsInTemplate: true,

		/**
		 * Instance of {@link ecm.model.ContentClass}.
		 */
		contentClass: null,
		/**
		 * Instance of {@link ecm.model.EntryTemplate}.
		 */
		entryTemplate: null,
		/**
		 * The entry template type string. One of the <code>EntryTemplate.TYPE</code> object type values.
		 */
		type: null,
		/**
		 * Default value for override class security.
		 */
		overrideClassSecurityDefault: true,

		postCreate: function() {
			this.logEntry("postCreate");
			this._initialized = false;
			this.inherited(arguments);

			this.securityShow.setHoverHelp(this.securityShowHoverHelp);
			this.securityHide.setHoverHelp(this.securityHideHoverHelp);
			this.overrideClassSecurity.setHoverHelp(this.overrideClassSecurityHoverHelp);
			this.inheritSecurity.setHoverHelp(this.inheritSecurityHoverHelp);

			this.own(aspect.after(this._securityPane, "onChange", lang.hitch(this, "onFieldChange")));
			this.own(aspect.after(this._securityPolicySelector, "onLoaded", lang.hitch(this, function() {
				var securityPolicy = this._securityPolicySelector.get("value");
				if (securityPolicy && securityPolicy.id) {
					var selectedSecurityPolicy = this._securityPolicySelector.getSelectedItem();
					if (selectedSecurityPolicy && selectedSecurityPolicy.displayName != this._securityPolicySelector.get("value").displayName) {
						this._securityPolicySelector.set("value", selectedSecurityPolicy);
					}
					this._displaySecurityPolicyMessage();
				}
			})));
			this.own(aspect.after(this._securityPolicySelector, "onChange", lang.hitch(this, function() {
				this._displaySecurityPolicyMessage();
				this._onFieldChange();
			})));

			this._securityPane.enableFolderPropagationOptions = this._securityPane.enableDocumentPermissionPropagationOptions = ecm.model.desktop.showSecurityInheritanceUI;
			this.logExit("postCreate");
		},

		/**
		 * @private Loads the screen data.
		 */
		_loadData: function() {
			if (this.entryTemplate.mode == "add") {
				if (!this.contentClass.repository._isCM() || !this.contentClass.itemTypeSecurity) {
					this.securityShow.set("checked", true);
					this.overrideClassSecurity.set("checked", this.overrideClassSecurityDefault);
				}
				this._retrieveAndRenderContentClassDefaultPermission();
			} else {
				if (this.entryTemplate.allowUserSetSecurity) {
					this.securityShow.set("checked", true);
				} else {
					this.securityHide.set("checked", true);
				}

				if (this.contentClass.repository._isP8() && this.type == EntryTemplate.TYPE.DOCUMENT) {
					this.inheritSecurity.set("checked", this.entryTemplate.inheritSecurityFromParentFolder);
					this._securityPolicySelector.set("value", this.entryTemplate.securityPolicy);

					// Retrieve the security policies because we don't yet have the display name or the preserve flag for this security policy.
					if (this.entryTemplate.securityPolicy && this.entryTemplate.securityPolicy.id) {
						this._securityPolicySelector.retrieveSecurityPolicies();
					}
				}

				this.overrideClassSecurity.set("checked", this.entryTemplate.overrideClassSecurity);
				if (this.entryTemplate.overrideClassSecurity) {
					this._permissions = this.entryTemplate.permissions;
					this._renderPermissions();
				} else {
					this._retrieveAndRenderContentClassDefaultPermission();
				}
			}
		},

		/**
		 * @private Displays the class security message.
		 */
		_displayClassSecurityMessage: function(message) {
			if (message) {
				this.classSecurityInlineMessageText.innerHTML = message;
				domClass.remove(this.classSecurityInlineMessageDiv, "dijitHidden");
			} else {
				domClass.add(this.classSecurityInlineMessageDiv, "dijitHidden");
			}
		},

		/**
		 * @private Displays the security policy message.
		 */
		_displaySecurityPolicyMessage: function() {
			var securityPolicy = this._securityPolicySelector.get("value");
			if (securityPolicy && securityPolicy.preserveDirectPermissions != null) {
				if (securityPolicy.preserveDirectPermissions == false) {
					this.securityPolicyInlineMessageText.innerHTML = this.messages.entry_template_security_policy_message_override;
					domClass.remove(this.securityPolicyInlineMessageDiv, "dijitHidden");
					domClass.remove(this.securityPolicyInlineMessageDiv, "inlineMessageInfo");
					domClass.add(this.securityPolicyInlineMessageDiv, "inlineMessageWarning");
				} else {
					this.securityPolicyInlineMessageText.innerHTML = this.messages.entry_template_security_policy_message_add;
					domClass.remove(this.securityPolicyInlineMessageDiv, "dijitHidden");
					domClass.remove(this.securityPolicyInlineMessageDiv, "inlineMessageWarning");
					domClass.add(this.securityPolicyInlineMessageDiv, "inlineMessageInfo");
				}
			} else {
				domClass.add(this.securityPolicyInlineMessageDiv, "dijitHidden");
			}
		},

		/**
		 * @private Retrieves and renders the default permissions for the content class.
		 */
		_retrieveAndRenderContentClassDefaultPermission: function() {
			if (this.contentClass) {
				this.contentClass.retrieveDefaultInstancePermissions(lang.hitch(this, function(permissions) {
					permissions = lang.clone(permissions);
					// if (this.overrideClassSecurity.get("checked")) {
					// 	array.forEach(permissions, function(permission) {
					// 		// Change the class permission source items to direct permission.
					// 		if (permission.permissionSource == "0") {
					// 			permission.permissionSource = "1";
					// 		}
					// 
					// 	}, this);
					// }
					this._permissions = permissions;
					this._securityPane.setRepository(this.contentClass.repository);
					this._renderPermissions();
				}), true);
			}
		},

		/**
		 * @private Renders the permissions in the security pane.
		 */
		_renderPermissions: function() {
			this._securityPane.reset();
			var securityPolicy = null;
			var isReadOnly = !this.overrideClassSecurity.get("checked");
			var isDocument = this.type != EntryTemplate.TYPE.FOLDER;
			this._securityPane.renderPermissions(this._permissions, null, securityPolicy, isDocument, isReadOnly, false, false, true);
			if (!this._initialized) {
				setTimeout(lang.hitch(this, function() {
					this._initialized = true;
				}), 500);
			}
		},

		/**
		 * Set the content class. Called by the SettingsPane to set the content class for this pane.
		 */
		setContentClass: function(contentClass) {
			this.contentClass = contentClass;
			// If this class is a CM item type using item type level security, the user cannot override the security.
			if (this.contentClass.repository._isCM()) {
				if (this.contentClass.itemTypeSecurity) {
					this._displayClassSecurityMessage(this.messages.entry_template_class_security_message_no_override);
					this.securityHide.set("checked", true);
					this.securityShow.set("disabled", true);
					domClass.add(this.securityShowLabel, "labelReadOnly");
					this.securityHide.set("disabled", true);
					domClass.add(this.securityHideLabel, "labelReadOnly");

					this.overrideClassSecurity.set("checked", false);
					this.overrideClassSecurity.set("disabled", true);
					domClass.add(this.overrideClassSecurityLabel, "labelReadOnly");
					this.overrideClassSecurityLabel.innerHTML = this.messages.entry_template_security_change;
				} else { // Item level security
					this._displayClassSecurityMessage();
					this.securityShow.set("checked", true);
					this.securityShow.set("disabled", false);
					domClass.remove(this.securityShowLabel, "labelReadOnly");
					this.securityHide.set("disabled", false);
					domClass.remove(this.securityHideLabel, "labelReadOnly");

					this.overrideClassSecurity.set("checked", this.overrideClassSecurityDefault);
					this.overrideClassSecurity.set("disabled", false);
					domClass.remove(this.overrideClassSecurityLabel, "labelReadOnly");
					if (this.contentClass.defaultSecurityFromClass) {
						this.overrideClassSecurityLabel.innerHTML = this.messages.entry_template_security_change;
					} else {
						this.overrideClassSecurityLabel.innerHTML = this.messages.entry_template_security_default_item_security;
					}
				}
				if (!this._initialized) {
					this.overrideClassSecurityDefault = this.overrideClassSecurity.get("checked");
				}
			}
			this._securityPolicySelector.set("repository", this.contentClass.repository);
			this._securityPane.setRepository(this.contentClass.repository);
			if (!this._initialized) {
				this._loadData();
			} else {
				this._retrieveAndRenderContentClassDefaultPermission();
			}
		},

		/**
		 * @private
		 */
		_onFieldChange: function() {
			if (this._initialized) {
				this.onFieldChange();
			}
		},

		/**
		 * Fired when a field changes value.
		 */
		onFieldChange: function() {
			this.logEntry("onFieldChange");
		},

		/**
		 * @private Called when the checkbox for selecting users and groups is changed. Re-display the security pane.
		 */
		_onChangeOverrideClassSecurity: function() {
			if (this.contentClass.repository._isCM()) {
				if (this.overrideClassSecurity.get("checked")) {
					this._displayClassSecurityMessage(this.messages.entry_template_class_security_required_privileges);
				} else {
					if (this.contentClass.itemTypeSecurity) {
						this._displayClassSecurityMessage(this.messages.entry_template_class_security_message_no_override);
					} else {
						this._displayClassSecurityMessage();
					}
				}
			}
			this._retrieveAndRenderContentClassDefaultPermission();
			this.onFieldChange();
		},

		/**
		 * @private Called when the clear button is pressed next to the security policy pulldown.
		 */
		_onClearSecurityPolicy: function() {
			this._securityPolicySelector.set("value", null);
		},

		/**
		 * Set the type. Called by the SettingsPane to set the type.
		 */
		setType: function(type) {
			if (this.type != type) {
				this.type = type;
				if (this.repository._isP8() && this.type == EntryTemplate.TYPE.DOCUMENT) {
					domClass.remove(this._securityPolicyDiv, "dijitHidden");
					domClass.remove(this._inheritSecurityDiv, "dijitHidden");
					this._displaySecurityPolicyMessage();
				} else {
					domClass.add(this._securityPolicyDiv, "dijitHidden");
					domClass.add(this._inheritSecurityDiv, "dijitHidden");
					domClass.add(this.securityPolicyInlineMessageDiv, "dijitHidden");
				}
			}
		},

		/**
		 * Loads the model with the screen data.
		 */
		loadModel: function() {
			this.entryTemplate.allowUserSetSecurity = this.securityShow.get("checked");
			this.entryTemplate.overrideClassSecurity = this.overrideClassSecurity.get("checked");
			if (this.entryTemplate.overrideClassSecurity) {
				this.entryTemplate.permissions = this._securityPane.getPermissions();
				this.entryTemplate._permissionsDirectList = this._securityPane._getDirectPermissions();
			} else {
				this.entryTemplate.permissions = null;
				this.entryTemplate._permissionsDirectList = null;
			}
			if (this.contentClass.repository._isP8() && this.type == EntryTemplate.TYPE.DOCUMENT) {
				this.entryTemplate.securityPolicy = this._securityPolicySelector.get("value");
				this.entryTemplate.inheritSecurityFromParentFolder = this.inheritSecurity.get("checked");
			} else {
				this.entryTemplate.securityPolicy = null;
				this.entryTemplate.inheritSecurityFromParentFolder = false;
			}
		}
	});
});
