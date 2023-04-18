/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([ "dojo/_base/declare", "dojo/_base/lang", "dijit/_TemplatedMixin", "dijit/_WidgetsInTemplateMixin", "dijit/_Widget", "dijit/popup", "dijit/form/Button", "ecm/widget/DropDownDialog" ], function(declare, lang, _TemplatedMixin, _WidgetsInTemplateMixin, _Widget, popup, Button, DropDownDialog) {
	/**
	 * @name ecm.widget._DropDownDialogButtonMixin
	 * @class A widget that can be used to drop down a DropDownDialog with a dijit Button
	 * @augments dijit._Widget
	 */
	return declare("ecm.widget._DropDownDialogButtonMixin", [ _Widget, _TemplatedMixin, _WidgetsInTemplateMixin ], {
		/** @lends ecm.widget._DropDownDialogButtonMixin.prototype */

		postCreate: function() {
			this.inherited(arguments);

			this.connect(this._dropDownDialog, "onOpen", this.onOpen);
			this.connect(this._dropDownDialog, "onClickCancel", function() {
				this._dropDownDialog.onCancel();
			});
			this.connect(this._dropDownDialog, "onClickOK", this.onSave);
			this.connect(this._dropDownDialog, "_onBlur", function() {
				this._dropDownDialog.onCancel();
			});
		},

		onOpen: function() {
			this._dropDownDialog.resize();
		},

		onSave: function() {
			this._dropDownDialog.onCancel();
			this.onChange();
		},

		onClick: function(event) {
			this._open(event.currentTarget);
		},

		_open: function(target) {
			popup.open({
				parent: this,
				popup: this._dropDownDialog,
				around: target,
				onCancel: lang.hitch(this, function() {
					popup.close(this._dropDownDialog);
				})
			});
		}
	});
});
