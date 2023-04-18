/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/aspect",
	"dojo/string",
	"dojo/dom-class",
	"dojo/dom-construct",
	"dojo/dom-geometry",
	"dojo/has",
	'dojo/store/Memory',
	"dijit/form/Button",
	"dijit/layout/ContentPane",
	"dijit/layout/BorderContainer",
	"dijit/ToolbarSeparator",
	"gridx/Grid",
	'gridx/core/model/cache/Sync',
	'gridx/modules/select/Row',
	"gridx/modules/Focus",
	"gridx/modules/Filter",
	"ecm/model/Desktop",
	"ecm/widget/dialog/LoginDialog",
	"./_LaunchBarDialogPane",
	"ecm/widget/FilterTextBox",
	"dojo/text!./templates/BrowseFlyoutPane.html"
],

function(declare, //
lang, //
aspect, //
string, //
domClass, //
domConstruct, //
domGeom, //
has, //
MemoryStore, //
Button, //
ContentPane, //
BorderContainer, //
ToolbarSeparator, //
Grid, //
Cache, //
Row, //
Focus, //
FilterModule, //
Desktop, //
LoginDialog, //
_LaunchBarDialogPane, //
FilterTextBox, //
template) {

	/**
	 * @name ecm.widget.layout.BrowseFlyoutPane
	 * @class Provides a fly-out pane that is used to browse folders and documents.
	 * @augments ecm.widget.layout._LaunchBarDialogPane
	 */
	return declare("ecm.widget.layout.BrowseFlyoutPane", [
		_LaunchBarDialogPane
	], {
		/** @lends ecm.widget.layout.BrowseFlyoutPane.prototype */

		templateString: template,
		widgetsInTemplate: true,

		postCreate: function() {
			this.inherited(arguments);

			this.own(aspect.after(Desktop, "onLogout", lang.hitch(this, function() {
				this.grid.select.row.clear();
			})));
		},

		/**
		 * Resizes the widget
		 */
		resize: function() {
			this.inherited(arguments);

			if (this.bottomPane && this.grid) {
				var paneContentBox = domGeom.getContentBox(this.bottomPane);
				this.grid.resize({
					h: paneContentBox.h,
					w: paneContentBox.w
				});
			}
		},

		/**
		 * Select the repository.
		 * 
		 * @param repository
		 *            Instance of {@link ecm.model.Repository}.
		 */
		selectRepository: function(repository) {
			this.logEntry("selectRepository");
			this.selectContentPane("browsePane", {
				repository: repository
			});
			this.onRepositoryChange(this, repository);
			this.closePopup();
			this.logExit("selectRepository");
		},

		/**
		 * Focus on the filter.
		 */
		focus: function() {
			this._filter.focus();
		},

		/**
		 * Loads the content of this pane.
		 */
		loadContent: function() {
			this.logEntry("loadContent");

			this.grid = new Grid({
				cacheClass: Cache,
				store: this._getRepositoryStore(),
				structure: [
					{
						id: 'iconClass',
						field: 'iconClass',
						name: '',
						headerAriaLabel: string.substitute(this.messages.repository_type_icon, [
							this.messages.repository
						]),
						width: '32px',
						decorator: lang.hitch(this, function(data, rowId, rowIndex) {
							var item = this.grid.row(rowId).item();
							var imgTitle = this._getTypeString(item.repository.type);
							var blankImg = require.toUrl("dojo/resources/blank.gif");

							return [
								'<img role="img" width="32" height="32" class="',
								data,
								'" alt="',
								imgTitle,
								'" title="',
								imgTitle,
								'" src="',
								blankImg,
								'"/>',
								'<div class="dijitHidden">', // read by JAWS
								imgTitle,
								'</div>'
							].join('');
						})
					},
					{
						id: 'content',
						field: 'content',
						name: '',
						headerAriaLabel: string.substitute(this.messages.repository_name_and_type, [
							this.messages.repository
						])
					}
				],
				selectRowTriggerOnCell: true,
				modules: [
					Row,
					FilterModule,
					Focus
				]
			});

			domConstruct.place(this.grid.domNode, this.bottomPane.domNode, "only");
			this.grid.startup();
			this.grid.focus.removeArea('header');
			this.resize();

			this._filterCheckerFunction = lang.hitch(this, "_filterChecker");
			this.connect(this._filter, "_onInput", lang.hitch(this, "_filterData"));
			this.connect(this._filter, "_setValueAttr", lang.hitch(this, "_filterData"));

			this.connect(this.grid.select.row, "onSelected", lang.hitch(this, function(selected) {
				var repository = ecm.model.desktop.getRepository(selected.item().id);

				if (repository.connected) {
					this.selectRepository(repository);
				} else if (!repository.connected) {
					var logingDialog = LoginDialog.getLoginDialog();
					logingDialog.connectToRepository(repository, lang.hitch(this, function() {
						this.selectRepository(repository);
					}));
				}
			}));

			this.isLoaded = true;
			this.needReset = false;
			this.logExit("loadContent");
		},

		/**
		 * Called when user enters data in the FilterTextBox.
		 */
		_filterData: function(evt) {
			var value = this._filter.get("value");
			this._prevFilter = string.trim(value).toLowerCase();
			var grid = this.grid;
			if (grid) {
				grid.model.filter(this._filterCheckerFunction);
				grid.body.refresh();
			}
		},

		/**
		 * Called for each row to determine if it matches the filter data.
		 */
		_filterChecker: function(row, id) {
			return row.item.repository.name.toLowerCase().indexOf(this._prevFilter) > -1;
		},

		/**
		 * Retrieves given repository.
		 * 
		 * @param repository
		 *            Instance of {@link ecm.model.Repository}.
		 */
		_getRepositoryStore: function(repository) {
			this.logEntry("_getRepositoryStore");
			var repositories = ecm.model.desktop.repositories;
			var items = [];
			for ( var i in repositories) {
				var repository = repositories[i];

				var iconClass = repository.iconClass;
				if (!iconClass) {
					iconClass = this._getRepositoryIcon(repository.type);
				}

				if (repository.getPrivilege("foldering") && repository.showInBrowseView) {
					var contentStr = '<div class="content" width="100%"><span class="title">' + repository.name + '</span><br><label>' + this.messages.type_label + '</label>&nbsp;' + this._getTypeString(repository.type) + '</div>';
					items.push({
						id: repository.id,
						iconClass: iconClass,
						repository: repository,
						content: contentStr
					});
				}
			}

			var repositoryStore = new MemoryStore({
				data: items
			});
			this.logExit("_getRepositoryStore");
			return repositoryStore;
		},

		/**
		 * Returns a css class name for the repository type.
		 * 
		 * @param type
		 *            The string repository type. Can be "od", "cm", "p8", or "cmis".
		 * @return String css class name.
		 */
		_getRepositoryIcon: function(type) {
			var iconStr = "";
			if (type == "od")
				iconStr = "odRepositoryIcon";
			else if (type == "cm")
				iconStr = "cmRepositoryIcon";
			else if (type == "p8")
				iconStr = "p8RepositoryIcon";
			else if (type == "ci")
				iconStr = "ciRepositoryIcon";
			else if (type == "cmis")
				iconStr = "cmisRepositoryIcon";
			else if (type == "box")
				iconStr = "boxRepositoryIcon";
			else
				iconStr = "repositoryIcon";
			return iconStr;
		},

		/**
		 * Returns the display name of the server type.
		 * 
		 * @param type
		 *            The string repository type. Can be "od", "cm", "p8", or "cmis".
		 * @return String display name of the repository.
		 */
		_getTypeString: function(type) {
			if (type == "od")
				return this.messages.ondemand;
			else if (type == "cm")
				return this.messages.content_manager;
			else if (type == "p8")
				return this.messages.filenet_p8;
			else if (type == "ci")
				return this.messages.content_integrator;
			else if (type == "cmis")
				return this.messages.cmis;
			else if (type == "box")
				return this.messages.box_content;
			else
				return type;
		},

		/**
		 * Event invoked when a repository changes.
		 * 
		 * @param pane
		 *            This widget.
		 * @param repository
		 *            Instance of {@link ecm.model.Repository}.
		 */
		onRepositoryChange: function(pane, repository) {
		}
	});
});
