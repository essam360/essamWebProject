/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array"
], function(declare, lang, array) {

var MergeSplitContext = declare("ecm.widget.viewer.MergeSplitContext", null, {
	_enabled: false,
	_scope: {
		repositoryId: null,
		viewerClass: null
	},
	_viewers: [],
	_selectedViewer: null,

	isEnabled: function() {
		return this._enabled;
	},

	_enable: function() {
		this._enabled = true;
		this._setScope();
		this._viewers = [];
	},

	_disable: function() {
		this._enabled = false;
		this._setScope();
		this._viewers = [];
	},

	_toggle: function(viewer) {
		if (this._enabled)
			this._disable();
		else
			this._enable();

		this._applyMergeSplitMode(viewer);
		this.onToggled(viewer);
	},

	_applyMergeSplitMode: function(viewer) {
		if (!viewer || !viewer.item.id)
			return;

		if (this._enabled && this.isViewerInScope(viewer)) {
			if (this._isSelectedViewer(viewer))
				viewer.enableMergeSplitMode();
			this._addViewer(viewer);
		} else {
			if (this._isSelectedViewer(viewer))
				viewer.disableMergeSplitMode();
			this._removeViewer(viewer);
		}
	},

	_setSelectedViewer: function(viewer) {
		this._selectedViewer = viewer;
	},

	_isSelectedViewer: function(viewer) {
		return !!viewer && viewer == this._selectedViewer;
	},

	isViewerInScope: function(viewer) {
		if (!!viewer && !viewer.item.id)
			return true;

		return !!viewer && !viewer.preview && viewer.isMergeSplitSupported() &&
			(viewer.item.repository._isP8() || viewer.item.repository._isCM()) && 
			(!this._scope.repositoryId || this._scope.repositoryId == viewer.item.repository.id) &&
			(!this._scope.viewerClass || this._scope.viewerClass == viewer.viewerDef.viewerClass);
	},

	_setScope: function(viewer) {
		this._scope.repositoryId = viewer ? viewer.item.repository.id : null;
		this._scope.viewerClass = viewer ? viewer.viewerDef.viewerClass : null;
	},

	getRepositoryIdInScope: function() {
		return this._enabled ? this._scope.repositoryId : null;
	},

	_isItemInScope: function(item) {
		return !this._scope.repositoryId || this._scope.repositoryId == item.repository.id;
	},

	onToggled: function() {
	},

	getViewers: function() {
		return this._viewers;
	},

	_addViewer: function(viewer) {
		if (!this._enabled || !this.isViewerInScope(viewer) || array.indexOf(this._viewers, viewer) != -1)
			return false;

		var before = this._viewers.length;
		this._viewers.push(viewer);
		if (this._viewers.length == 1)
			this._setScope(viewer);
		return this._viewers.length > before ? this._viewers.length : false;
	},

	_removeViewer: function(viewer) {
		if (array.indexOf(this._viewers, viewer) == -1)
			return false;

		var before = this._viewers.length;
		this._viewers = array.filter(this._viewers, function(v) {
			return v != viewer;
		});
		if (this._viewers.length == 0) {
			if (this._enabled)
				this._toggle();
			else
				this._disable();
		}
		return this._viewers.length < before ? this._viewers.length : false;
	},

	isAnyViewerDirty: function() {
		var dirty = array.some(this._viewers, function(viewer) {
			return viewer.isDirty() && !viewer.ignoreDirty();
		});
		return dirty;
	},

	onItemAdded: function(item) {
	},

	onMergeSplitModeFailed: function(viewer) {
		this._applyMergeSplitMode(viewer);
	}
});

return MergeSplitContext;

});
