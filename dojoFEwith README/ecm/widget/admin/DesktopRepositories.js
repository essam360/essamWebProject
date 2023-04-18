/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/sniff",
	"dojo/_base/array",
	"dojo/aspect",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"idx/html",
	"ecm/MessagesMixin",
	"ecm/model/admin/DesktopData",
	"ecm/model/admin/RepositoryConfig",
	"ecm/widget/FilteringSelect",
	"ecm/widget/HoverHelp",
	"idx/widget/SloshBucket",
	"ecm/widget/FilterTextBox",
	"dojo/store/Memory",
	"dijit/layout/ContentPane",
	"dojo/has!dojo-bidi?dojox/string/BidiComplex",
	"ecm/widget/admin/_NavigatorAdminTabBase",
	"dojo/text!./templates/DesktopRepositories.html"
], //

function(declare, lang, has, array, aspect, _TemplatedMixin, _WidgetsInTemplateMixin, idxHtml, MessagesMixin, DesktopData, RepositoryConfig, FilteringSelect, HoverHelp, SloshBucket, FilterTextBox, MemoryStore, ContentPane, BidiComplex, _NavigatorAdminTabBase, template) {

	/**
	 * @private Part of the NavigatorAdminPane widget.
	 * @name ecm.widget.admin.DesktopRepositories
	 * @class Provides a pane that is used to specify the repositories that are to be accessible from a desktop.
	 */
	return declare("ecm.widget.admin.DesktopRepositories", [
		ContentPane,
		_NavigatorAdminTabBase,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		MessagesMixin
	], {
		/** @lends ecm.widget.admin.DesktopRepositories.prototype */

		templateString: template,
		widgetsInTemplate: true,

		_previousFilter: "",

		postCreate: function() {
			this.inherited(arguments);

			this._isSloshBucketLoaded = false;
			this.sloshBucket.getGridTooltipText = lang.hitch(this, "_getGridTooltipText");

			this._filter.set("placeholder", this.messages.process_filter_label);

			this.own(aspect.after(this.sloshBucket, "onAddRemove", lang.hitch(this, "_onAddRemoveItems")));
			this.own(aspect.after(this.sloshBucket, "onMoved", lang.hitch(this, "onMarkDirty")));
			var filterDataFunc = lang.hitch(this, "_filterData");
			this.own(aspect.after(this._filter, "_onInput", filterDataFunc));
			this.own(aspect.after(this._filter, "_setValueAttr", filterDataFunc));
		},

		/**
		 * Call back from the sloshBucket.
		 */
		_getGridTooltipText: function(grid, item) {
			if (item) {
				var toolTip = [];

				// The one and only fixed value is the authentication source.
				var fixedSelectedValues = this.sloshBucket.getFixedSelectedValues();
				if (fixedSelectedValues && fixedSelectedValues.length == 1 && fixedSelectedValues[0] == item.id) {
					toolTip.push("<div><span class='tooltipLabel'>" + this.messages.is_authentication_source + "</span> ");
					toolTip.push("<span class='tooltipValue'>");
					var label = this.messages.yes;
					toolTip.push(idxHtml.escapeHTML(label));
					toolTip.push("</span></div><br>");
				}

				toolTip.push("<div><span class='tooltipLabel'>" + this.messages.display_name + "</span> ");
				toolTip.push("<span class='tooltipValue'>");
				var label = item.name;
				toolTip.push(idxHtml.escapeHTML(label));
				toolTip.push("</span></div>");

				toolTip.push("<div><span class='tooltipLabel'>" + this.messages.id_label + "</span> ");
				toolTip.push("<span class='tooltipValue'>");
				toolTip.push(idxHtml.escapeHTML(item.id));
				toolTip.push("</span></div>");

				toolTip.push("<div><span class='tooltipLabel'>" + this.messages.server_type + "</span> ");
				toolTip.push("<span class='tooltipValue'>");
				toolTip.push(idxHtml.escapeHTML(item.typeString));
				toolTip.push("</span></div>");

				toolTip.push("<div><span class='tooltipLabel'>" + this.messages.server_label + "</span> ");
				toolTip.push("<span class='tooltipValue'>");

				if (!has("dojo-bidi")) {
					toolTip.push(idxHtml.escapeHTML(item.serverName));
				} else {
					toolTip.push(BidiComplex.createDisplayString(idxHtml.escapeHTML(item.serverName), "URL"));
				}
				toolTip.push("</span></div>");

				if (item.portNumber) {
					toolTip.push("<div><span class='tooltipLabel'>" + this.messages.port_label + "</span> ");
					toolTip.push("<span class='tooltipValue'>");
					toolTip.push(idxHtml.escapeHTML(item.portNumber));
					toolTip.push("</span></div>");
				}
				return toolTip.join("");
			}
			return "";
		},

		_onAddRemoveItems: function() {
			var selectedReposData = this.sloshBucket.getSelectedItems();
			var selectedRepositoryIds = [];
			for ( var i in selectedReposData) {
				selectedRepositoryIds.push(selectedReposData[i].id);
			}
			this.onAddAndRemoveRepositories();
			this.onMarkDirty();
		},

		getInstructions: function() {
			return this.messages.admin_desktop_repositories_instructions;
		},

		/**
		 * Event invoked when repositories are added or removed in the selected repository list.
		 */
		onAddAndRemoveRepositories: function() {
		},

		// override
		onMarkDirty: function() {
		},

		// override 
		onCheckSave: function() {
		},

		/**
		 * @since 2.0.3
		 */
		setData: function(desktopData) {
			this.desktopData = desktopData;
		},

		// Called when the user hits the Reset button 
		loadData: function(onComplete) {
			this._isSloshBucketLoaded = false;
			this._loadSloshBucket();
			setTimeout(lang.hitch(this, function() {
				this.onCheckSave();
				if (onComplete) {
					onComplete();
				}
				this._isSloshBucketLoaded = true;
			}), 100);
		},

		// Called when the tab is selected
		onSelect: function() {
			if (!this._isSloshBucketLoaded) {
				this.loadData();
			}
		},

		// Check if all the data is valid - called when the user hits save
		validateData: function(focus) {
			if (this._isSloshBucketLoaded) {
				return true;
			} else {
				return false; // returning false - will check for valid after slosh bucket finishes loading
			}
		},

		// Called before save - copy the screen values into the model
		loadWithFieldValues: function(adminModel) {
			var selectedReposData = this.sloshBucket.getSelectedItems();
			var repositoryIds = [];
			for (var i = 0; i < selectedReposData.length; i++) {
				repositoryIds.push(selectedReposData[i].id);
			}
			adminModel.setValues(adminModel.REPOSITORIES, repositoryIds);
		},

		_loadSloshBucket: function() {
			var availableColumnsStructure = [
				{
					field: "name",
					name: ecm.messages.available_repositories_label,
					width: "100%"
				}
			];
			var availItems = [];
			for (var i = 0; i < this.desktopData.repositories.length; i++) {
				var modelItem = this.desktopData.repositories[i];
				
				// Don't allow Box server token repositories to be added to desktops.\
				if (modelItem.isBoxServerTokenEnabled()){
					continue;
				}
				
				/* the fields "isTeamspaceEnabled", "isWorkEnabled", and "isEntryTemplatesEnabled" are used by desktopAppearances to determine whether a repository is 
				 * enabled for those features */
				availItems.push({
					"id": modelItem.id,
					"portNumber": modelItem.getPortNumber() ? modelItem.getPortNumber() : "",
					"typeString": modelItem.getTypeString(),
					"type": modelItem.getType(),
					"name": modelItem.getName(),
					"serverName": modelItem.getServerName(),
					"isTeamSpaceEnabled": modelItem.getTeamspacesEnabled(),
					"isBrowseSupported": modelItem.getBrowseSupported(),
					"isSearchSupported": modelItem.getSearchSupported(),
					"isWorkEnabled": (modelItem.getType() == "cm" || (modelItem.getType() == "p8" && modelItem.getConnectionPoint() && modelItem.getConnectionPoint().length > 0)),
					"isEntryTemplatesEnabled": modelItem.getEntryTemplatesEnabled(),
					"serverTokenEnabled": modelItem.isBoxServerTokenEnabled()
				});
			}
			var store = new MemoryStore({
				data: availItems
			});
			this.sloshBucket.setAvailableGridData(store, availableColumnsStructure);
			if (has("text-direction") && this.sloshBucket.availableGrid) {
				this.sloshBucket.availableGrid.set("textDir", has("text-direction"));
			}

			this._filter.set('value', '');

			var selectedItems = [];
			if (this.desktopData.desktopConfig) {
				var selectedRepositoryIds = this.desktopData.desktopConfig.getValues(this.desktopData.desktopConfig.REPOSITORIES);
				if (selectedRepositoryIds) {
					for (var i = 0; i < selectedRepositoryIds.length; i++) {
						var modelItem = this.desktopData.getRepositoryConfig(selectedRepositoryIds[i]);
						if (modelItem) {
							selectedItems.push({
								"id": modelItem.id,
								"portNumber": modelItem.getPortNumber() ? modelItem.getPortNumber() : "",
								"typeString": modelItem.getTypeString(),
								"type": modelItem.getType(),
								"name": modelItem.getName(),
								"serverName": modelItem.getServerName(),
								"isTeamSpaceEnabled": modelItem.getTeamspacesEnabled(),
								"isSearchSupported": modelItem.getSearchSupported(),
								"isBrowseSupported": modelItem.getBrowseSupported(),
								"isWorkEnabled": (modelItem.getType() == "cm" || (modelItem.getType() == "p8" && modelItem.getConnectionPoint() && modelItem.getConnectionPoint().length > 0)),
								"isEntryTemplatesEnabled": modelItem.getEntryTemplatesEnabled(),
								"order": i
							});
						}
					}
				}
			}
			var selectedStore = new MemoryStore({
				data: selectedItems
			});
			var selectedColumnsStructure = [
				{
					field: "name",
					name: ecm.messages.selected_repositories_label
				}
			];
			var fixedArray = [];
			if (this.desktopData.desktopConfig && this.desktopData.desktopConfig.getAuthenticationType() == "2") {
				var repos = this.desktopData.desktopConfig.getDefaultRepository();
				if (repos) {
					fixedArray.push(repos);
				}
			}
			this.sloshBucket.setSelectedGridData(selectedStore, selectedColumnsStructure, fixedArray);
			if (has("text-direction") && this.sloshBucket.selectedGrid) {
				this.sloshBucket.selectedGrid.set("textDir", has("text-direction"));
			}
		},

		// return false if you want to mark tab as dirty - called when data is changed
		isResetingFields: function() {
			return true;
		},

		_onFieldChange: function() {
			if (this._isSloshBucketLoaded) {
				this.onMarkDirty();
			}
		},

		_filterData: function() {
			var value = this._filter.get("value");
			if (this._previousFilter != value) {
				this._previousFilter = value;
				this.sloshBucket.filter({
					name: value
				});
			}
		}

	});
});
