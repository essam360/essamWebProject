/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare", //
	"dojo/_base/lang", //
	"ecm/MessagesMixin", //
	"ecm/widget/admin/model/_NavigatorAdminObjectBase", //
	"ecm/model/Action"
], //

function(declare, lang, MessagesMixin, _NavigatorAdminObjectBase, Action) {

	/**
	 * @private Part of the NavigatorAdminPane widget.
	 * @name ecm.widget.admin.model.NavigatorAdminSettingsObject
	 * @class Represents the general settings such as logging and icon mapping in the IBM Content Navigator
	 *        administration tool.
	 * @augments ecm.widget.admin.model._NavigatorAdminObjectBase
	 * @deprecated 2.0.3
	 */
	return declare("ecm.widget.admin.model.NavigatorAdminSettingsObject", [
		ecm.widget.admin.model._NavigatorAdminObjectBase
	], {
		/** @lends ecm.widget.admin.model.NavigatorAdminSettingsObject.prototype */

		/*
		 * Local variables
		 */

		_myAdminModel: null,

		/*
		 * Overwrite functions in _NavigatorAdminObjectBase
		 */

		/**
		 * Overwritten for initialization
		 */
		initialize: function() {
			this._myLabel = ecm.messages[this.name];

			this._mayHaveChildren = false;
			this._children = [];
			this._childrenLoaded = true;

			this._actions = [];
			this._actions.push(new Action({
				id: this._aOpen,
				name: this.getActionLabel(this._aOpen)
			}));

			this._myIconClass = "adminIconSettings";
			this._myTabWidgetClassName = "ecm.widget.admin.TabSettings";

			this._myAdminModel = ecm.model.admin.appCfg;
		}

	});
});
