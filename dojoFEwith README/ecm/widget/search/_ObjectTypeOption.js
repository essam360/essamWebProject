/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/array",
	"dojo/_base/declare",
	"dojo/_base/lang",
	"../../LoggerMixin",
	"../../model/SearchConfiguration",
	"./_SearchSelectOption"
], function(array, declare, lang, LoggerMixin, SearchConfiguration, _SearchSelectOption) {

	/**
	 * @private Part of {@link ecm.widget.search.SearchMoreOptions} widget
	 * @name ecm.widget.search._ObjectTypeOption
	 * @class Provides an option to select an object type (document, folder, or documents and folders) of the items to
	 *        search.
	 * @augments ecm.widget.search._SearchSelectOption
	 */
	return declare("ecm.widget.search._ObjectTypeOption", [
		_SearchSelectOption
	], {
		/** @lends ecm.widget.search._ObjectTypeOption.prototype */
		constructor: function() {
			this._cache = {};
		},

		_labels: [
			ecm.messages.object_type_documents,
			ecm.messages.object_type_folders,
			ecm.messages.object_type_documents_folders,
			ecm.messages.object_type_web_link,
			ecm.messages.object_type_documents_folders_web_links,
		],

		initialize: function(repository, selectedType) {
			var _type = SearchConfiguration.prototype.OBJECT_TYPE;
			var documentHidden = selectedType != _type.DOCUMENT && selectedType != _type.ALL && array.indexOf(repository.searchFilteredSearchTypes, _type.DOCUMENT) > -1;
			var folderHidden = selectedType != _type.FOLDER && selectedType != _type.ALL && array.indexOf(repository.searchFilteredSearchTypes, _type.FOLDER) > -1;
			var options = new Array();

			if (documentHidden && folderHidden) { // shouldn't happen
				this.logWarning("initialize", "Both documents and folders are configured to be hidden on repository: " + repository.name);
				documentHidden = false;
			}

			if (!documentHidden) {
				options.push({
					label: ecm.messages.object_type_documents,
					value: _type.DOCUMENT,
					selected: selectedType == _type.DOCUMENT
				});
			}

			if (!folderHidden && (!repository._isCmis() || repository.folderSearchSupported)) {
				options.push({
					label: ecm.messages.object_type_folders,
					value: _type.FOLDER,
					selected: selectedType == _type.FOLDER
				});
			}

			if (repository._isCM()) {
				if (!documentHidden && !folderHidden) {
					options.push({
						label: ecm.messages.object_type_documents_folders,
						value: _type.ALL,
						selected: selectedType == _type.ALL
					});
				}
			} else if (repository._isBox()) {
				options.push({
					label: ecm.messages.object_type_web_links,
					value: _type.WEB_LINK,
					selected: selectedType == _type.WEB_LINK
				});
				options.push({
					label: ecm.messages.object_type_documents_folders_web_links,
					value: _type.ALL,
					selected: selectedType == _type.ALL
				});
			}

			this._select.removeOption(this._select.getOptions());
			this._select.addOption(options);
		}
	});

});
