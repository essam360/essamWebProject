/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"ecm/model/Action"
], function(declare, lang, Action) {
	var _MergeSplitMixin = declare("ecm.widget.viewer._MergeSplitMixin", null, {
		isMergeSplitModeEnabled: function() {
			return this.mergeSplitContext && this.mergeSplitContext.isEnabled() && this.mergeSplitContext.isViewerInScope(this);
		},

		_isCheckoutItemEnabled: function(item) {
			return item.id && item.repository && Action._checkOutAction.canPerformAction(item.repository, [item]);
		},

		_isCheckinItemEnabled: function(item) {
			return item.id && item.repository && Action._checkInAction.canPerformAction(item.repository, [item]);
		},

		_isCancelCheckoutItemEnabled: function(item) {
			return item.id && item.repository && Action._cancelCheckoutAction.canPerformAction(item.repository, [item]);
		},

		_isAddItemEnabled: function(item) {
			return item.repository && item.repository.id && Action._addAction.canPerformAction(item.repository, item.id ? [item] : []);
		}
	});

	return _MergeSplitMixin;
});
