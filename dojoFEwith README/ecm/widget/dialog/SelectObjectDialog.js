/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/dom-class",
	"dojo/dom-style",
	"dojo/aspect",
	"ecm/Messages",
	"ecm/widget/dialog/BaseDialog",
	"ecm/widget/SelectObject",
	"dojo/text!./templates/SelectObjectDialogContent.html"
], //
function(declare, lang, domClass, domStyle, aspect, Messages, BaseDialog, SelectObject, template) {

	/**
	 * @name ecm.widget.dialog.SelectObjectDialog
	 * @class Provides a dialog box that is used to search for and select repository items.
	 * @augments ecm.widget.dialog.BaseDialog
	 */
	return declare("ecm.widget.dialog.SelectObjectDialog", [
		BaseDialog
	], {
		/** @lends ecm.widget.dialog.SelectObjectDialog.prototype */

		contentString: template,
		widgetsInTemplate: true,
		_messages: ecm.messages,

		/**
		 * Specifies what object types can be selected. Valid values are <code>any</code>, <code>document</code>,
		 * or <code>folder</code>.
		 */
		selectionMode: "any",

		/**
		 * Sets the option to allow selecting specific versions of a document. If <code>true</code> is specified then
		 * a button is displayed that lists the versions of the selected document.
		 */
		showVersionSelection: false,

		/**
		 * If showVersionSelection is true, then this option allows the user to show or hide the select versions button.
		 * 
		 * @since 2.0.3
		 */
		showSelectVersionButton: true,

		/**
		 * Set to <code>true</code> to allow multiple selection of objects.
		 */
		multiSelect: true,

		/**
		 * Sets the option of whether to allow the <strong>Search in</strong> option to include multiple repositories
		 * or only the current repository. If set to <code>true</code> then all FileNet P8 repositories in the same
		 * domain as the current repository will be available to search in. If <code>false</code> then only the
		 * current repository will appear.
		 */
		showMultiRepositorySelector: false,

		/**
		 * Sets the option of whether to allow the <strong>Search in</strong> option to include all repositories
		 * assigned to the desktop. If set to <code>true</code> then all repositories assigned to the desktop will be
		 * available to search in. If <code>false</code> then the <strong>Search in</strong> option will display
		 * repositories based on the setting for showMultiRepositorySelector.
		 * 
		 * @since 2.0.3
		 */
		showAllRepositories: false,

		/**
		 * Sets the option of whether to allow the <strong>Existing search</strong> option to include a repository
		 * selector. If set to <code>true</code> then the user will have the option to select from multiple
		 * repositories to find documents to select. If <code>false</code> then only the current repository will be
		 * used.
		 * 
		 * @since 2.0.3
		 */
		showExistingSearchRepositorySelector: true,

		/**
		 * Sets the option whether to allow the <strong>Existing search</strong> option to include cross repository
		 * search templates. If set to <code>true</code> then cross repository search templates (if any) will be
		 * included in the search selector. If set to <code>false</code> then cross repository search templates will
		 * be excluded from the search selector.
		 * 
		 * @since 2.0.3
		 */
		showCrossRepositorySearches: true,

		/**
		 * An array of class ids, if specified then only those classes are displayed in the class selector.
		 * 
		 * @since 2.0.3
		 */
		classSelectorItemList: null,

		/**
		 * Boolean indicating if the class selector should be disabled.
		 * 
		 * @since 2.0.3
		 */
		classSelectorDisabled: false,

		/**
		 * Boolean indicating if the return data should include the version series id when selecting a specific P8 document version.
		 * 
		 * @since 3.0.1
		 */
		includeDocumentVsId: false,
		
		/**
		 * Comma separated string containing the list of repository types. Not required if only using dialog in P8
		 * repository.
		 * 
		 * @since 2.0.3
		 */
		repositoryTypes: null,

		postCreate: function() {
			this.inherited(arguments);
			domClass.add(this.domNode, "ecmSelectObjectDialog");
			this.setMaximized(true);
			this.setSizeToViewportRatio(true);
			if (!this.title) {
				this.set("title", this.messages.select_object_title);
			}
			this._okButton = this.addButton(this.messages.ok, "_onOk", true, false);

			this.selectObject.showCrossRepositorySearches = this.showCrossRepositorySearches;
			this.selectObject.showExistingSearchRepositorySelector = this.showExistingSearchRepositorySelector;
			this.selectObject.setShowMultiRepositorySelector(this.showMultiRepositorySelector);
			this.selectObject.setShowAllRepositories(this.showAllRepositories);
			this.selectObject.setRepositoryTypes(this.repositoryTypes); // Must be called before setRepository
			if (this.classSelectorItemList) {
				this.selectObject.setClassSelectorItemList(this.classSelectorItemList);
			}
			if (this.repository) {
				this.selectObject.setRepository(this.repository);
			}
			this.selectObject.setShowVersionSelection(this.showVersionSelection);
			this.selectObject.setShowSelectVersionButton(this.showSelectVersionButton);
			this.selectObject.setClassSelectorDisabled(this.classSelectorDisabled);
			this.selectObject.setIncludeDocumentVsId(this.includeDocumentVsId);

			this.connect(this.selectObject, "onSelectionChange", function(selectedItems, isValid) {
				this._okButton.set("disabled", !isValid);
			});
		},

		/**
		 * @private Execute the callback and close the dialog.
		 */
		_onOk: function() {
			this.selectObject.getSelectedItems(this._callback);
			this.onCancel();
		},

		/**
		 * Shows the dialog.
		 * 
		 * @param callback
		 *            A function that is called when the dialog is closed. The list of selected items is passed as a
		 *            parameter to the callback. Each item is an object with the following properties:
		 *            <ul>
		 *            <li><code>id</code>: The id of the item</li>
		 *            <li><code>name</code>: the name of the item</li>
		 *            <li><code>mimetype</code>: the items mimetype</li>
		 *            <li><code>version</code>: the version selected (<code>current</code>,
		 *            <code>released</code>, if <code>null</code> then a static version was selected)</li>
		 *            <li><code>contentItem</code>: the content item object</li>
		 *            <li><code>vsId</code>: for FileNet P8 docs, the version series id (only if
		 *            <code>current</code> or <code>released</code> version is specified)</li>
		 *            </ul>
		 */
		show: function(callback) {
			var d = this.inherited(arguments);
			this._callback = callback;
			this.resize();
			return d;
		}
	});
});
