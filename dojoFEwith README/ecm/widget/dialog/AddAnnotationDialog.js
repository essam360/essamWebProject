/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare", //
	"dojo/_base/lang", //
	"dojo/dom-class", //
	"dijit/form/SimpleTextarea", //
	"dijit/form/RadioButton", //
	"dijit/form/Select", //
	"dijit/form/CheckBox", //
	"ecm/widget/dialog/BaseDialog", //
	"ecm/model/Request", //
	"ecm/MessagesMixin", //
	"dojo/text!./templates/AddAnnotationDialogContent.html"
], //
function(declare, lang, domClass, SimpleTextarea, RadioButton, Select, CheckBox, BaseDialog, Request, MessagesMixin, template) {

	/**
	 * @name ecm.widget.dialog.AddAnnotationDialog
	 * @class Provides a dialog box that is used to add annotations to a document in an IBM Content Manager OnDemand
	 *        repository.
	 * @augments ecm.widget.dialog.BaseDialog
	 */
	var AddAnnotationDialog = declare("ecm.widget.dialog.AddAnnotationDialog", [
		BaseDialog,
		MessagesMixin
	], {
		/** @lends ecm.widget.dialog.AddAnnotationDialog.prototype */

		repository: null,
		item: null,
		groupNames: null,

		contentString: template,

		constructor: function(args) {
			lang.mixin(this, args);
		},

		postCreate: function() {
			this.inherited(arguments);
			domClass.add(this.domNode, "ecmAddAnnotationDialog");
			this._updateSelector();
			this.setTitle(ecm.messages.addAnnotationDlg_title);
			this._addButton = this.addButton(ecm.messages.addAnnotationDlg_buttonLabel_save, "_onAddNewAnnotation", true, false);
		},

		initializeDlgContent: function(repository, item, groupNames) {
			this.repository = repository;
			this.item = item;
			this.groupNames = groupNames;
			this._updateSelector();
		},

		resize: function() {
			this.inherited(arguments);
		},

		getValue: function() {
			return this.newAnnotationTextarea.value;
		},

		_validate: function() {
			var text = this.getValue();
			if (!text || lang.trim(text).length == 0) {
				this._addButton.set("disabled", true);
				return false;
			}
			if (this.privateGroupRadioButton.get("checked")) {
				var groupName = this.groupNameSelector.getValue();
				if (!groupName || lang.trim(groupName).length == 0) {
					this._addButton.set("disabled", true);
					return false;
				}
			}
			this._addButton.set("disabled", false);
			return true;
		},

		_updateSelector: function() {
			var oldOptions = this.groupNameSelector.options;
			if (oldOptions && oldOptions.length > 0) {
				this.groupNameSelector.removeOption(oldOptions);
			}
			if (this.groupNames && this.groupNames.length > 0) {
				this.privateGroupRadioButton.set("disabled", false);
				for ( var i = 0; i < this.groupNames.length; i++) {
					this.groupNameSelector.addOption({
						label: this.groupNames[i],
						value: this.groupNames[i]
					});
				}
			} else {
				this.privateGroupRadioButton.set("disabled", true);
			}
		},

		_toggleSelectorDisplay: function(evt) {
			this.groupNameSelector.set("disabled", !evt);
		},

		_onAddNewAnnotation: function() {
			if (this.validate()) {
				var text = this.getValue();
				var copiable = this.copiableCheckBox.get("checked");
				var isPublic = this.publicRadioButton.get("checked");
				var groupName = this.privateGroupRadioButton.get("checked") ? this.groupNameSelector.getValue() : "";
				Request.invokeService("addNote", this.repository.type, {
					repositoryId: this.repository.id,
					template_name: this.item.template,
					docid: this.item.id,
					groupName: groupName,
					text: text,
					isOKToCopy: copiable ? "true" : "false",
					isPublic: isPublic ? "true" : "false"
				}, lang.hitch(this, function(response) {
					this.hide();
					this.postAddAnnotation();
				}), true, false);
			}
		},

		postAddAnnotation: function() {

		}
	});

	return AddAnnotationDialog;
});
