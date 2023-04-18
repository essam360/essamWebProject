/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare", //
	"dojo/_base/lang", //
	"dojo/_base/array", //
	"dijit/_Widget", //
	"dijit/_TemplatedMixin", //
	"dijit/_WidgetsInTemplateMixin", //
	"dijit/layout/ContentPane", //
	"../Messages", //
	"./SecurityPane", //
	"dojo/text!./templates/AddContentItemSecurityPane.html"
], //
function(declare, lang, array, _Widget, _TemplatedMixin, _WidgetsInTemplateMixin, ContentPane, Messages, SecurityPane, template) {

	/**
	 * @name ecm.widget.AddContentItemSecurityPane
	 * @class Provides the security pane that is used in the {@link ecm.widget.dialog.AddContentItemDialog} and
	 *        {@link ecm.widget.dialog.CheckInDialog} widgets. This pane is used to view and edit the security settings
	 *        of a document or folder that is being added or checked into a repository property values.
	 * @augments dijit._Widget
	 */
	return declare("ecm.widget.AddContentItemSecurityPane", [
		_Widget,
		_TemplatedMixin,
		_WidgetsInTemplateMixin
	], {
		/** @lends ecm.widget.AddContentItemSecurityPane.prototype */
		templateString: template,
		widgetsInTemplate: true,

		_messages: ecm.messages,
		_contentClass: null,
		_addContentItemDialog: null,

		_permission: null,
		_isReadOnly: false,

		postCreate: function() {
			this.inherited(arguments);
			this._securityPane.enableFolderPropagationOptions = this._securityPane.enableDocumentPermissionPropagationOptions = ecm.model.desktop.showSecurityInheritanceUI;
		},

		destroy: function() {
			delete this._contentClass;
			delete this._addContentItemDialog;
			this.inherited(arguments);
		},

		/**
		 * Updates the security pane to pick up the current security policy permissions.
		 */
		updateSecurityPolicyTemplate: function() {
			// Get a different template and re-render the permissions if there is security policy
			var securityPolicy = this.getSecurityPolicy();
			if (securityPolicy) {
				var addAsMajor = this._addContentItemDialog.addContentItemGeneralPane.getAsMajorVersion();
				this._renderPermissions(this._permissions, null, securityPolicy, this._isDocument, this._isReadOnly, true, addAsMajor);
			}
		},

		/**
		 * Updates the security pane to pick up the current parent folder inheritance permissions.
		 */
		updateParentFolder: function() {
			// Not until the content class is set.
			if (this._contentClass && this._hasParentFolderPermissions()) {
				var parentFolder = this._addContentItemDialog.parentFolder;
				parentFolder.retrievePermissions(lang.hitch(this, function(parentFolderPermissions) {
					this._securityPane.updateParentPermissions(parentFolderPermissions);
				}));
			}
		},

		/**
		 * @private Returns boolean indicating if the item has parent folder permissions that should be updated.
		 */
		_hasParentFolderPermissions: function() {
			if (!this._isDocument) {
				return (!this._addContentItemDialog._virtualItems && this._addContentItemDialog.parentFolder != null);
			} else {
				return (!this._addContentItemDialog._virtualItems && (this._addContentItemDialog._teamspace || (this._addContentItemDialog._entryTemplate && this._addContentItemDialog._entryTemplate.inheritSecurityFromParentFolder)));
			}
		},

		/**
		 * Stores a reference to the parent dialog widget.
		 * 
		 * @param addContentItemDialog
		 *            The parent dialog widget. A {@link ecm.widget.dialog.AddContentItemDialog} or
		 *            {@link ecm.widget.dialog.CheckInDialog}.
		 */
		setAddContentItemDialog: function(addContentItemDialog) {
			this._addContentItemDialog = addContentItemDialog;
		},

		/**
		 * Updates the security pane using the default security from the passed in class.
		 * 
		 * @param contentClass
		 *            A {@link ecm.model.ContentClass} object that is currently selected as the document or folder
		 *            class.
		 * @param isDocument
		 *            A boolean value indicating if the selected content class is a document class.
		 */
		setContentClass: function(contentClass, isDocument) {
			if (!this._contentClass || this._contentClass.id != contentClass.id || this._addContentItemDialog._entryTemplate) {
				this._isDocument = isDocument;
				this._contentClass = contentClass;
				this._markingValues = null;
				this._permissions = null;
				this._retrievePermissions();
			}
		},

		/**
		 * Updates the marking values from the passed in property values then updates the security pane.
		 * 
		 * @param properties
		 *            An array of item properties JSON.
		 */
		setProperties: function(properties) {
			if (this._contentClass) {
				var tempItem = new ecm.model.ContentItem({
					id: null,
					name: null,
					repository: this._contentClass.repository,
					template: this._contentClass.id
				});
				this._markingValues = tempItem.getMarkingValues(properties);
				if (this._permissions) { // Changing markings after the permissions have rendered.			
					this._securityPane.setMarkingValues(this._markingValues);
					this.resize(); // calls resize to refresh security UI.
				}
				tempItem = null;
			}
		},

		/**
		 * Returns the {@link ecm.model.SecurityPolicy} object currently assigned to the document or folder.
		 * 
		 * @return Returns an instance of {@link ecm.model.SecurityPolicy}.
		 */
		getSecurityPolicy: function() {
			var securityPolicy = null;

			if (this._addContentItemDialog._item) {
				// If the security pane has not been expanded then the content class will be null.
				if (this._contentClass) {
					// If the class is the same as the item's current class, use the item's security policy.
					if (this._contentClass.name == this._addContentItemDialog._item.getContentClass().name) {
						securityPolicy = this._addContentItemDialog._item._securityPolicy;
					} else { // The class was changed. Use the class security policy instead.
						securityPolicy = this._contentClass._securityPolicy;
					}
				}
			} else if (this._addContentItemDialog._entryTemplate && this._addContentItemDialog._entryTemplate.securityPolicy) {
				securityPolicy = this._addContentItemDialog._entryTemplate.securityPolicy;
			} else if (this._contentClass && this._contentClass._securityPolicy) {
				securityPolicy = this._contentClass._securityPolicy;
			}

			return securityPolicy;
		},

		/**
		 * @private
		 */
		_retrievePermissions: function() {
			if (this._addContentItemDialog._item) {
				if (this._addContentItemDialog._item.hasPrivilege("privModifyPermissions") == false) {
					this._isReadOnly = true;
				}
				this._addContentItemDialog._item.retrievePermissions(lang.hitch(this, function(permissions) {
					// Remove existing security policy permissions.
					// We need to show the security policy permissions that will be applied by the check in. 
					permissions = array.filter(permissions, function(permission) {
						return permission.permissionSource != ecm.model.Permission.PERMISSION_SOURCE.POLICY;
					});
					this._processPermissions(permissions);
				}));
			} else {
				var permissions;
				if (this._addContentItemDialog._entryTemplate && this._addContentItemDialog._entryTemplate.overrideClassSecurity) {
					permissions = this._addContentItemDialog._entryTemplate.permissions;
				}

				if ((!permissions || (permissions.length == 0)) && this._permissions) {
					permissions = this._permissions;
				}

				if (permissions && permissions.length > 0) {
					this._processPermissions(permissions);
				} else {
					// If permissions are not already set, use the class default instance permissions.
					this._contentClass.retrieveDefaultInstancePermissions(lang.hitch(this, this._processPermissions));
				}
			}
		},

		/**
		 * @private
		 */
		_processPermissions: function(permissions) {
			this._securityPane.reset();
			this._securityPane.setRepository(this._contentClass.repository);
			this._permissions = permissions;
			if (!this._isDocument) {
				if (!this._addContentItemDialog._virtualItems) {
					if (this._addContentItemDialog.parentFolder != null) {
						this._addContentItemDialog.parentFolder.retrievePermissions(lang.hitch(this, function(folderPermissions) {
							this._renderPermissions(this._permissions, folderPermissions, securityPolicy, this._isDocument, this._isReadOnly);
						}));
					} else {
						this._renderPermissions(this._permissions, null, securityPolicy, this._isDocument, this._isReadOnly);
					}
				} else {
					this._renderPermissions(this._permissions, null, securityPolicy, this._isDocument, this._isReadOnly);
				}
			} else {
				// Get the security policy.	
				var securityPolicy = this.getSecurityPolicy();
				var addAsMajor = this._addContentItemDialog.addContentItemGeneralPane.getAsMajorVersion();
				// Merge in the parent folder security if in a teamspace or when using an entry template with inheritSecurityFromParentFolder enabled.
				if (!this._addContentItemDialog._virtualItems && (this._addContentItemDialog._teamspace || (this._addContentItemDialog._entryTemplate && this._addContentItemDialog._entryTemplate.inheritSecurityFromParentFolder))) {
					if (this._addContentItemDialog.parentFolder != null) {
						this._addContentItemDialog.parentFolder.retrievePermissions(lang.hitch(this, function(folderPermissions) {
							this._renderPermissions(this._permissions, folderPermissions, securityPolicy, this._isDocument, this._isReadOnly, true, addAsMajor);
						}));
					} else {
						this._renderPermissions(this._permissions, null, securityPolicy, this._isDocument, this._isReadOnly, true, addAsMajor);
					}
				} else {
					this._renderPermissions(this._permissions, null, securityPolicy, this._isDocument, this._isReadOnly, true, addAsMajor);
				}
			}
		},

		/**
		 * @private
		 */
		_renderPermissions: function(permissions, parentPermissions, securityPolicy, isDocument, isReadOnly, applySecurityPolicy, useReleasedTemplate) {
			this._securityPane.renderPermissions(permissions, parentPermissions, securityPolicy, isDocument, isReadOnly, applySecurityPolicy, useReleasedTemplate);
			this._securityPane.setMarkingValues(this._markingValues);
		},

		/**
		 * Returns the current permissions array.
		 * 
		 * @return Returns an array of {@link ecm.model.Permission}
		 */
		getPermissions: function() {
			return this._securityPane.getPermissions();
		},

		/**
		 * Resizes the widget.
		 */
		resize: function() {
			this._contentPane.resize();
		}
	});
});
