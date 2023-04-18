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
	 * @name ecm.widget.admin.model.NavigatorAdminObject
	 * @class Represents a admin tree object in the IBM Content Navigator administration tool.
	 * @augments ecm.widget.admin.model._NavigatorAdminObjectBase
	 * @since 2.0.3
	 */
	return declare("ecm.widget.admin.model.NavigatorAdminObject", [
		ecm.widget.admin.model._NavigatorAdminObjectBase
	], {
		/** @lends ecm.widget.admin.model.NavigatorAdminObject.prototype */

		_myAdminModel: null,
		_mayHaveChildren: false,
		_childrenLoaded: true,

		constructor: function(obj) {
			this.inherited(arguments);

			this._actions = [];
			this._actions.push(new Action({
				id: this._aOpen,
				name: this.getActionLabel(this._aOpen)
			}));

			this._myLabel = ecm.messages[this.name] ? ecm.messages[this.name] : this.name;
			this._myIconClass = obj && obj.iconClass ? obj.iconClass : "";
			this._myTabWidgetClassName = obj && obj.tabClass ? obj.tabClass : "";
			this._myAdminModel = ecm.model.admin.appCfg;
		}

	});
});
