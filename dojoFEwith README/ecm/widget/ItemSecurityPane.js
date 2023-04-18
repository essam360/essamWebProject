/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare", //
	"dojo/_base/lang", //
	"dijit/_TemplatedMixin", //
	"dijit/_WidgetsInTemplateMixin", //
	"dijit/layout/ContentPane", //
	"../Messages", //         
	"./SecurityPane", //         
	"dojo/text!./templates/ItemSecurityPane.html"
], //
function(declare, lang, _TemplatedMixin, _WidgetsInTemplateMixin, ContentPane, Messages, SecurityPane, template) { //

	/**
	 * @name ecm.widget.ItemSecurityPane
	 * @class Provides a widget that contains the SecurityPane widget and is used by the Edit Properties dialog. This
	 *        class retrieves the item permissions and other item information that is required by the SecurityPane
	 *        widget to display the security information.
	 * @augments dijit.layout.ContentPane
	 */
	return declare("ecm.widget.ItemSecurityPane", [
		ContentPane,
		_TemplatedMixin,
		_WidgetsInTemplateMixin
	], {
		/** @lends ecm.widget.ItemSecurityPane.prototype */

		templateString: template,
		widgetsInTemplate: true,

		_messages: ecm.messages,
		_item: null,
		_rendered: false,

		_securityPolicy: "",

		postCreate: function() {
			this.inherited(arguments);
			this._rendered = false;
			this._securityPane.fitToParent = true;
			this._securityPane.enableFolderPropagationOptions = this._securityPane.enableDocumentPermissionPropagationOptions = ecm.model.desktop.showSecurityInheritanceUI;
			this.connect(this._securityPane, "onChange", "onChange");
		},

		/**
		 * Sets the item.
		 * 
		 * @param item
		 *            Instance of {@link ecm.model.ContentItem}
		 */
		setItem: function(item, isReadOnly) {
			if (item) {
				this._item = item;
				this._contentClass = this._item.getContentClass();
				if (this._contentClass && this._contentClass.repository && this._contentClass.repository._isCM() && this._contentClass.itemTypeSecurity) {
					isReadOnly = true;
				}
			}
			this._isReadOnly = (isReadOnly != undefined) ? isReadOnly : false;
		},

		/**
		 * Displays the permissions of the current selected item.
		 */
		render: function() {
			if (this._item && !this._rendered) {
				this._securityPane._clear();
				this._securityPane.setRepository(this._item.repository);
				this._securityPane.setItem(this._item);
				this._retrievePermissions();
				this._rendered = true;
			}
		},

		/**
		 * Sets the item properties.
		 * 
		 * @param properties
		 *            An array of item properties JSON
		 */
		setProperties: function(properties) {
			var markingValues = this._item.getMarkingValues(this._isReadOnly ? null : properties);
			this._securityPane.setMarkingValues(markingValues);
		},

		_retrievePermissions: function() {
			this._item.retrievePermissions(lang.hitch(this, function(permissions) {
				this._securityPane.renderPermissions(permissions, null, this._item._securityPolicy, !this._item.isFolder(), this._isReadOnly || !this._item.hasPrivilege("privModifyPermissions"), false, false);
				this.resize();
			}));

		},

		/**
		 * Returns the current permission array.
		 * 
		 * @return Returns an array of {@link ecm.model.Permission}
		 */
		getPermissions: function() {
			if (this._rendered) {
				return this._securityPane.getPermissions();
			}

			return null;
		},

		/**
		 * An event that gets trigger when a permission item has been modified, added, or removed from the permission
		 * array.
		 */
		onChange: function() {
		}
	});
});
