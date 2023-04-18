/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/event",
	"dojo/_base/array",
	"dojo/dom-class",
	"ecm/widget/listView/modules/_Module",
	"ecm/widget/RepositorySelector",
	"ecm/model/Desktop"
], //
function(declare, lang, event, array, domClass, _Module, RepositorySelector, Desktop) {

	/**
	 * @name ecm.widget.listView.modules.RepositorySelector
	 * @class This content list module provides the ability to display the repository selector in the content list.
	 * @augments ecm.widget.listView.modules._Module
	 * @since 2.0.3
	 */

	return declare(_Module, {
		/** @lends ecm.widget.listView.modules.RepositorySelector.prototype */

		name: 'repositorySelector',

		/**
		 * Boolean indicating if the repository selector should be hidden if there is only one repository.
		 */
		hideWhenOneRepository: true,
		/**
		 * An optional function. If defined, the repository will only be added to the repository selection list if the
		 * return value is true.
		 */
		validateRepository: null,

		/**
		 * See GridX API documentation for details.
		 */
		getAPIPath: function() {
			return {
				repositorySelector: this
			};
		},

		/**
		 * Preload.
		 */
		preload: function() {
			var t = this, cl = t.contentList;
			t._repositorySelector = t._createRepositorySelector();
			t.domNode = t._repositorySelector.domNode;
			if (t._repositorySelector.getNumRepositories() == 0 || (t.hideWhenOneRepository && t._repositorySelector.getNumRepositories() == 1)) {
				domClass.add(t._repositorySelector.domNode, "dijitHidden");
				t.aspect(cl, "onModulesLoaded", lang.hitch(t, function() {
					if (t.domNode.parentNode) {
						domClass.add(t.domNode.parentNode, "dijitHidden");
					}
				}));
			}
		},

		/**
		 * Destroy.
		 */
		destroy: function() {
			var t = this;
			if (t._repositorySelector) {
				t._repositorySelector.destroy();
				t._repositorySelector = null;
			}
			t.inherited(arguments);
		},

		/**
		 * Set the selected repository id.
		 * 
		 * @param repositoryId
		 *            The repository id to select.
		 */
		setRepositoryId: function(repositoryId) {
			this._repositorySelector.getDropdown().set("value", repositoryId);
		},

		/**
		 * Get the selected repository id.
		 * 
		 * @return The repository id that is selected.
		 */
		getRepositoryId: function(repositoryId) {
			return this._repositorySelector.getDropdown().get("value");
		},

		/**
		 * Event called when a Repository is selected.
		 * 
		 * @param repository
		 *            Instance of {@link ecm.model.Repository}.
		 */
		onSelect: function(repository) {
		},

		/**
		 * Focus on the dropdown.
		 */
		focus: function() {
			this._repositorySelector.getDropdown().focus();
		},

		/**
		 * @private Creates the repository selector.
		 */
		_createRepositorySelector: function() {
			var t = this;
			// Overrides getRepositories and getNumRepositories in the repository selector widget. 
			// getRepositories calls validateRepository method to determine if the repository should be included in the selector.
			var repositorySelector = new RepositorySelector({
				getNumRepositories: lang.hitch(t, function() {
					return t._numRepositories;
				}),
				getRepositories: lang.hitch(t, function() {
					var repositories = Desktop.repositories;
					if (t.validateRepository) {
						var repositoriesList = [];
						for (var i = 0; i < repositories.length; i++) {
							var repository = repositories[i];
							if (t.validateRepository(repository)) {
								repositoriesList.push(repository);
							}
						}
						t._numRepositories = repositoriesList.length;
						return repositoriesList;
					} else {
						t._numRepositories = repositories.length;
						return repositories;
					}
				})
			});

			t.aspect(repositorySelector, "onSelect", lang.hitch(t, function(repositories) {
				t.onSelect(repositories[0]);
			}));
			t.aspect(repositorySelector.domNode, "oncontextmenu", lang.hitch(t, function(evt) {
				event.stop(evt);
				return false;
			}, t, "before"));
			return repositorySelector;
		}

	});
});
