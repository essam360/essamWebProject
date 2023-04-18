/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare", //
	"dojo/_base/lang", //
	"dojo/string", //
	"ecm/MessagesMixin", //
	"ecm/widget/admin/model/_NavigatorAdminObjectBase", //
	"ecm/Messages", //
	"ecm/model/Action"
], //

function(declare, lang, string, MessagesMixin, _NavigatorAdminObjectBase, Messages, Action) {

	/**
	 * @private Part of the NavigatorAdminPane widget.
	 * @name ecm.widget.admin.model.NavigatorAdminInstanceObject
	 * @class Provides methods that are used to handle Desktop, Repository, Plugin, Viewer Map, and Menu objects in the
	 *        IBM Content Navigator administration tool.
	 *        <p>
	 *        The methods behave differently based on the type of object. For example, the getMenuActions lists the menu
	 *        actions that are available for an object. This method returns the Edit and Copy actions for the default
	 *        Viewer Map object. The method returns the Edit and Delete actions for a Repository object.
	 *        </p>
	 * @augments ecm.widget.admin.model._NavigatorAdminObjectBase
	 */
	return declare("ecm.widget.admin.model.NavigatorAdminInstanceObject", [
		_NavigatorAdminObjectBase
	], {
		/** @lends ecm.widget.admin.model.NavigatorAdminInstanceObject.prototype */

		/*
		 * Local variables
		 */

		_type: "",

		/*
		 * General getters and setters
		 */

		setType: function(type) {
			this._type = type;
		},

		/*
		 * Overwrite functions in _NavigatorAdminObjectBase
		 */

		/**
		 * Overwritten for initialization
		 */
		initialize: function() {

			if (lang.isFunction(this.getName)) {
				this._myLabel = this.getName();
			} else {
				this._myLabel = this.name;
			}

			this._mayHaveChildren = false;
			this._children = [];
			this._childrenLoaded = true;

			this._actions = this._buildMenuActions();

			switch (this._type) {
			case this._tDESKTOP:
				this._myIconClass = "adminIconDesktop";
				this._myTabWidgetClassName = "ecm.widget.admin.TabDesktop";
				break;

			case this._tREPOSITORY:
				this._myIconClass = "adminIconRepository";
				if (this._myAdminModel) {
					this._myIconClass = this._myAdminModel.getTypeIconClass();
				}
				this._myTabWidgetClassName = "ecm.widget.admin.TabRepository";
				break;

			case this._tMENU:
				this._myIconClass = "adminIconMenu";
				if (this._myAdminModel) {
					this._myIconClass = this._myAdminModel.getIconClass();
				}
				this._myTabWidgetClassName = "ecm.widget.admin.TabMenu";
				break;
			case this._tREDACTION_REASONS:
				this._myIconClass = "adminIconRedactionReason";
				if (this._myAdminModel) {
					this._myIconClass = this._myAdminModel.getIconClass();
				}
				this._myTabWidgetClassName = "ecm.widget.admin.TabRedactionReason";
				break;
				
			case this._tVIEWERS:
				this._myIconClass = "adminIconMapping";
				this._myTabWidgetClassName = "ecm.widget.admin.TabViewer";
				break;

			case this._tPLUGIN:
				this._myIconClass = "adminIconPlugin";
				this._myTabWidgetClassName = "ecm.widget.admin.TabPlugin";
				break;

			case this._tTHEME:
				this._myIconClass = "adminIconTheme";
				this._myTabWidgetClassName = "ecm.widget.admin.TabTheme";
				break;
			}
		},

		getMenuActions: function() {
			return this._actions;
		},

		_buildMenuActions: function() {
			var actions = [];
			actions.push(new Action({
				id: this._aOpen,
				name: this.getActionLabel(this._aOpen)
			}));
			if (this._type == this._tMENU) {
				actions.push(new Action({
					id: "Separator"
				}));
				actions.push(new Action({
					id: this._aCopy,
					name: this.getActionLabel(this._aCopy)
				}));
			} else if (this._type == this._tVIEWERS) {
				actions.push(new Action({
					id: "Separator"
				}));
				actions.push(new Action({
					id: this._aCopy,
					name: this.getActionLabel(this._aCopy)
				}));
			} else {
				var self = this;
				this._isDeletable(function(deletable) {
					if (deletable) {
						actions.push(new Action({
							id: "Separator"
						}));
						actions.push(new Action({
							id: self._aDelete,
							name: self.getActionLabel(self._aDelete)
						}));
					}
				});
			}
			return actions;
		},

		_getDeleteConfirmationText: function() {
			switch (this._type) {
			case this._tDESKTOP:
				return string.substitute(ecm.messages.admin_delete_confirmation_desktops, [
					1
				]);
				break;

			case this._tREPOSITORY:
				return string.substitute(ecm.messages.admin_delete_confirmation_repositories, [
					1
				]);
				break;

			case this._tMENU:
				return string.substitute(ecm.messages.admin_delete_confirmation_menus, [
					1
				]);
				break;

			case this._tVIEWERS:
				return string.substitute(ecm.messages.admin_delete_confirmation_viewer_mappings, [
					1
				]);
				break;

			case this._tPLUGIN:
				return string.substitute(ecm.messages.admin_delete_confirmation_plugins, [
					1
				]);
				break;

			case this._tTHEME:
				return string.substitute(ecm.messages.admin_delete_confirmation_themes, [
					1
				]);
				break;

			default:
				return string.substitute(ecm.messages.admin_delete_confirmation, [
					1
				]);
				break;
			}
		},

		/**
		 * Overwritten to disallow deleting the default desktop
		 */
		_isDeletable: function(/* function(boolean) */callback) {
			if (this._type == this._tDESKTOP) {
				if (this.id == "DESKTOP_admin") {
					callback(false);
					return;
				}
				if (ecm.model.admin.appCfg.getDesktopName() == this._myAdminModel.id) {
					//var dialog = new MessageDialog({
					//	text: ecm.messages.admin_delete_default_desktop
					//});
					//dialog.show();
					callback(false);
					return;
				}
				if (this._myAdminModel && (this._myAdminModel.getDefault() == "Yes")) {
					callback(false);
					return;
				}
			}
			callback(true);
		},

		/**
		 * Overwritten to execute the actual delete operation
		 */
		_doDelete: function() {
			switch (this._type) {
			case this._tDESKTOP:
				ecm.model.admin.appCfg.deleteApplicationDesktopsConfig([
					this._myAdminModel
				], lang.hitch(this, this._onDeleteComplete), {
					securityTopic: ecm.model.admin.appCfg.SECURITY_CATEGORY_DESKTOPS
				});
				break;
			case this._tPLUGIN:
				ecm.model.admin.appCfg.deleteApplicationPluginsConfig([
					this._myAdminModel
				], lang.hitch(this, this._onDeleteComplete), {
					securityTopic: ecm.model.admin.appCfg.SECURITY_CATEGORY_PLUGINS
				});
				break;
			case this._tTHEME:
				ecm.model.admin.appCfg.deleteApplicationThemesConfig([
					this._myAdminModel
				], lang.hitch(this, this._onDeleteComplete), {
					securityTopic: ecm.model.admin.appCfg.SECURITY_CATEGORY_THEMES
				});
				break;
			case this._tREPOSITORY:
				ecm.model.admin.appCfg.deleteApplicationRepositoriesConfig([
					this._myAdminModel
				], lang.hitch(this, this._onDeleteComplete), {
					securityTopic: ecm.model.admin.appCfg.SECURITY_CATEGORY_REPOSITORIES
				});
				break;
			case this._tVIEWERS:
				ecm.model.admin.appCfg.deleteApplicationViewersConfig([
					this._myAdminModel
				], lang.hitch(this, this._onDeleteComplete), {
					securityTopic: ecm.model.admin.appCfg.SECURITY_CATEGORY_VIEWERS
				});
				break;
			case this._tMENU:
				ecm.model.admin.appCfg.deleteApplicationMenusConfig([
					this._myAdminModel
				], lang.hitch(this, this._onDeleteComplete), {
					securityTopic: ecm.model.admin.appCfg.SECURITY_CATEGORY_MENUS
				});
				break;
			}
		},

		/**
		 * Overwritten to perform action on admin model change
		 */
		onAdminModelChange: function() {
			var newName = this._myAdminModel.getName();

			var n = "";
			if (lang.isFunction(this.getName)) {
				n = this.getName();
			} else {
				n = this.name;
			}
			if (newName != n) {
				this.name = newName;
				this._myLabel = newName;
			}
			this._onChange();
		}

	});

});
