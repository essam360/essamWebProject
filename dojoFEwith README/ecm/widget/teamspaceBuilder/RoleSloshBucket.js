/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/array",
	"ecm/LoggerMixin",
	"ecm/widget/teamspaceBuilder/Pane",
	"ecm/widget/teamspaceBuilder/TeamspaceBuilder",
	"ecm/widget/teamspaceBuilder/EditRoleDialog",
	"ecm/widget/VerticalSloshBucket"
],

function(declare, //
array, //
LoggerMixin, //
Pane, //
TeamspaceBuilder, //
EditRoleDialog, //
VerticalSloshBucket) {

	/**
	 * @private Part of TeamspaceBuilder widget
	 * @name ecm.widget.teamspaceBuilder.RoleSloshBucket
	 * @class Provides a slosh bucket that is used to assign roles to users in a teamspace.
	 *        <p>
	 *        In IBM Content Navigator, this widget is used in the <strong>Select Users</strong> pane.
	 *        </p>
	 * @augments ecm.widget.teamspaceBuilder.VerticalSloshBucket
	 */
	return declare("ecm.widget.teamspaceBuilder.RoleSloshBucket", [
		VerticalSloshBucket,
		LoggerMixin
	], {
		/** @lends ecm.widget.teamspaceBuilder.RoleSloshBucket.prototype */
		doubleClickAddSelection: false,

		addItemToSelection: function(obj) {
			obj.owner = false;
			this._selectionStore.newItem(obj);
			this._selectionStore.save();
		},

		// check whether the make available button should be disabled
		_setMakeAvailableState: function(item) {
			var preDefined = item.preDefined ? item.preDefined[0] : false;
			var available = item.available ? item.available[0] : false;
			if (item.privileges.length == 0 || preDefined || available) {
				this.selectionToolbar.makeAvailable.set('disabled', true);
				return;
			}
			// check if it is in the available store:
			var availItems = this._availableStore._arrayOfAllItems;
			var self = this;
			array.some(availItems, function(availItem) {
				if (item.id[0] == availItem.id[0]) {
					self.selectionToolbar.makeAvailable.set('disabled', true);
					return true;
				}
			});
		},

		// if owner role is selected, disable remove button
		onSelectSelection: function(selectedItems) {
			this.inherited(arguments);

			var storeItems = this.selectionList.grid.selection.getSelected();
			for ( var i = 0; i < storeItems.length; i++) {
				// prevent removing of owner role
				var item = storeItems[i];
				this._setMakeAvailableState(item);
				var owner = this._selectionStore.getValue(item, "owner");
				if (owner) {
					this.selectionToolbar.removeButton.set('disabled', true);
					this.removeButton.set('disabled', true);
					break;
				}
			}
		}
	});
});
