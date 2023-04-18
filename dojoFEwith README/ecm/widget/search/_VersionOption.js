/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"../../LoggerMixin",
	"../../model/SearchConfiguration",
	"../_HoverHelpMixin",
	"./_SearchSelectOption"
], //
function(declare, LoggerMixin, SearchConfiguration, _HoverHelpMixin, _SearchSelectOption) {

	/**
	 * @private Part of {@link ecm.widget.search.SearchMoreOptions} widget
	 * @name ecm.widget.search._VersionOption
	 * @class Provides an option to select an version type of the items to search.
	 * @augments ecm.widget.search._SearchSelectOption
	 */
	return declare("ecm.widget.search._VersionOption", [
		_SearchSelectOption,
		_HoverHelpMixin
	], {
		/** @lends ecm.widget.search._VersionOption.prototype */
		constructor: function() {
			this._cache = {};
		},

		_labels: [
			ecm.messages.search_released_version,
			ecm.messages.search_current_version,
			ecm.messages.search_all_versions
		],

		initialize: function(repository) {
			this._select.removeOption(this._select.getOptions());

			var options = new Array();
			if (repository._isP8()) {
				options.push({
					label: ecm.messages.search_released_version,
					value: ecm.widget.search.SearchMoreOptions.VERSION_OPTION.RELEASED
				});
			}
			options.push({
				label: ecm.messages.search_current_version,
				value: ecm.widget.search.SearchMoreOptions.VERSION_OPTION.CURRENT
			});
			if (repository.type == "cmis" && !repository.capabilityAllVersionsSearchable) {
				//if the repository is cmis and does not support all version search, don't add the all versions option
			} else {
				options.push({
					label: ecm.messages.search_all_versions,
					value: ecm.widget.search.SearchMoreOptions.VERSION_OPTION.ALL
				});
			}
			this._select.addOption(options);
		}
	});

});
