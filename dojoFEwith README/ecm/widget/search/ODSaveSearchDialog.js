/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/dom-class",
	"dojo/data/ItemFileReadStore",
	"dijit/form/CheckBox",
	"dijit/form/ComboBox",
	"../../LoggerMixin",
	"../dialog/BaseDialog",
	"dojo/text!./templates/ODSaveSearchDialogContent.html"
], function(declare, lang, domClass, ItemFileReadStore, CheckBox, ComboBox, LoggerMixin, BaseDialog, template) {

	/**
	 * @private Part of {@link ecm.widget.search.SearchTab} widget
	 * @name ecm.widget.search.ODSaveSearchDialog
	 * @class Provides a dialog box that is used to choose a saved search in an IBM Content Manager OnDemand repository.
	 * @augments ecm.widget.dialog.BaseDialog
	 */
	return declare("ecm.widget.search.ODSaveSearchDialog", [
		BaseDialog
	], {
		/** @lends ecm.widget.search.ODSaveSearchDialog.prototype */
		contentString: template,

		constructor: function(args) {
			if (args) {
				this._callback = args.callback;
				this._searchTemplate = args.searchTemplate;
				this.repository = this._searchTemplate.repository;
			}
		},

		postCreate: function() {
			this.inherited(arguments);
			domClass.add(this.domNode, "ecmODSaveSearchDialog");
			this.setTitle(this.messages.save_search);
			this.setIntroText(this.messages.od_save_search_help_text);
			this._okButton = this.addButton(this.messages.save, "_onOK", true, true);
		},

		_createComboBox: function(queries) {
			var items = [];

			if (this.nameComboBox)
				this.nameComboBox.destroy();

			if (queries && queries.length > 0) {
				for (i in queries) {
					items.push({
						name: queries[i],
						id: queries[i]
					});
				}
			}

			var data = {
				identifier: 'id',
				label: 'name',
				items: items
			};

			var store = new ItemFileReadStore({
				data: data
			});

			this.nameComboBox = new ComboBox({
				id: this.id + "_name",
				required: true,
				store: store,
				maxLength: 30
			});
			this.comboBoxArea.appendChild(this.nameComboBox.domNode);

			this.connect(this.nameComboBox, "onKeyUp", function() {
				var name = this.nameComboBox.get("value");
				this._okButton.set("disabled", !name || name.length <= 0);
			});

			this.connect(this.nameComboBox, "onChange", function() {
				var name = this.nameComboBox.get("value");
				this._okButton.set("disabled", !name || name.length <= 0);
			});
		},

		/**
		 * Shows the dialog.
		 */
		show: function() {
			var d = this.inherited(arguments);
			this._okButton.set("disabled", true);

			if (this._searchTemplate) {
				var self = this;

				this._searchTemplate.retrieveODSavedQueries(function(odSavedQueries) {
					self._createComboBox(odSavedQueries);

					if (!self._searchTemplate.odViewPrivateSearch || !self._searchTemplate.odViewPublicSearch) {
						self._isPublicCheckBox.set("disabled", true);

						if (self._searchTemplate.odViewPublicSearch && !self._searchTemplate.odViewPrivateSearch)
							self._isPublicCheckBox.set("checked", true);
						else
							self._isPublicCheckBox.set("checked", false);
					} else {
						self._isPublicCheckBox.set("disabled", false);
					}
				});
			}

			this.resize();
			return d;
		},

		_onOK: function() {
			if (this._callback) {
				this._callback({
					name: this.nameComboBox.get("value"),
					isPublic: this._isPublicCheckBox.get("value")
				});
			}
			this.onCancel();
		},

		onCancel: function() {
		}
	});

});
