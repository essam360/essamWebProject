/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/array",
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/sniff",
	"dojo/aspect",
	"dojo/dom-construct",
	"dojo/on",
	"dojo/store/Memory",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/form/Button",
	"dijit/layout/BorderContainer",
	"dijit/layout/ContentPane",
	"ecm/MessagesMixin",
	"ecm/model/ChildComponentDefinition",
	"ecm/model/SearchConfiguration",
	"ecm/model/_searchUtils",
	"ecm/widget/search/AttributeMappingDialog",
	"gridx/Grid",
	"gridx/core/model/cache/Sync",
	"gridx/modules/ColumnResizer",
	"gridx/modules/Focus",
	"gridx/modules/SingleSort",
	"gridx/modules/select/Row",
	"idx/html",
	"dojo/text!./templates/AttributeMappingsPane.html"
],
function(array, declare, lang, has, aspect, domConstruct, on, Memory, _TemplatedMixin, _WidgetsInTemplateMixin, Button, BorderContainer, ContentPane, MessagesMixin, ChildComponentDefinition, SearchConfiguration, utils, AttributeMappingDialog, Grid, Cache, ColumnResizer, Focus, SingleSort, Row, idxHtml, template) {

	/**
	 * @private Part of the {@link ecm.widget.search.UnifiedSearchBuilder} widget.
	 * @name ecm.widget.search.AttributeMappingsPane
	 * @augments dijit.layout.BorderContainer
	 * @since 2.0.2
	 */
	return declare("ecm.widget.search.AttributeMappingsPane", [
		BorderContainer,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		MessagesMixin
	], {
		/** @lends ecm.widget.search.AttributeMappingsPane.prototype */

		searchRepositories: null,

		attributeMappings: null,

		gutters: false,
		templateString: template,
		widgetsInTemplate: true,

		constructor: function() {
			if (!this.searchRepositories)
				this.searchRepositories = [];
			if (!this.attributeMappings)
				this.attributeMappings = [];
		},

		postCreate: function() {
			this.inherited(arguments);
			this._createGrid();
			this._updateState();
		},

		_setSearchRepositoriesAttr: function(searchRepositories) {
			this.searchRepositories = searchRepositories;
			if (this._grid)
				this._updateState();
		},

		_setAttributeMappingsAttr: function(attributeMappings) {
			this.attributeMappings = attributeMappings;
			if (this._grid) {
				this._grid.setStore(this._createStore());
				this._updateState();
			}
		},

		_onAddButtonClick: function() {
			this._showDialog();
		},

		_onEditButtonClick: function() {
			this._showDialog(this._getSelected());
		},

		_onDeleteButtonClick: function() {
			this._delete(this._getSelected());
		},

		_prepareForGrid: function(attributeMappings) {
			var searchConfig = SearchConfiguration.getSearchConfiguration();
			array.forEach(attributeMappings, lang.hitch(this, function(mapping) {
				var attrib = mapping.toAttributeDefinition();
				mapping._name = idxHtml.escapeHTML(attrib.valueRequired ? "* " + attrib.name : attrib.name);
				mapping._type = searchConfig.getDataTypeLabel(attrib.isInstanceOf(ChildComponentDefinition) ? "xs:childcomponent" : attrib.dataType, true);
				mapping._searchable = attrib.searchable;

				var repositoryNames = array.map(mapping.mappedAttributes, function(attrib) { return utils.getAttributeRepository(attrib).name; });
				mapping._repositories = repositoryNames.join(", ");
			}));
		},

		_createStore: function() {
			if (!this.attributeMappings)
				this.attributeMappings = [];
			this._prepareForGrid(this.attributeMappings);
			return new Memory({ data: this.attributeMappings });
		},

		_createGrid: function() {
			var iconDecorator = lang.hitch(this, function(data, rowId, rowIndex) {
				var html = "";
				if (!data) {
					var title = this.messages.unified_search_display_only_property;
					html = "<img src=\"dojo/resources/blank.gif\" class=\"ecmDisplayOnlyProperty\" title=\"" + title + "\" alt=\"" + title + "\" />";
				}
				return html;
			});
			var nameDecorator = lang.hitch(this, function(data, rowId, rowIndex) {
				var mapping = this._grid.row(rowId).item(), attrib = mapping.toAttributeDefinition(), name = idxHtml.escapeHTML(mapping.name);
				return attrib.valueRequired ? "<span class=\"required\" aria-label=\"" + ecm.messages.unified_search_required_property + "\">*</span> " + name : name;
			});
			this._grid = new Grid({
				store: this._createStore(),
				cacheClass: Cache,
				structure: [
					{ id: "icon", field: "_searchable", name: " ", headerAriaLabel: this.messages.unified_search_display_only_property, decorator: iconDecorator, width: "16px" },
					{ id: "name", field: "_name", name: this.messages.unified_search_mapping_name, decorator: nameDecorator },
					{ id: "type", field: "_type", name: this.messages.type_heading },
					{ id: "repositories", field: "_repositories", name: this.messages.repositories, sortable: false }
				],
				selectRowTriggerOnCell: true,
				textDir: has("text-direction"),
				modules: [
					Row,
					Focus,
					ColumnResizer,
					{
						moduleClass: SingleSort,
						initialOrder: { colId: "name", descending: false }
					}
				]
			});
			domConstruct.place(this._grid.domNode, this._gridPane.domNode, "only");
			this._grid.startup();
			this.resize();

			this.own(aspect.after(this._grid.model, "onNew", lang.hitch(this, function(id, index, row) {
				this._grid.select.row.clear();
				this._grid.select.row.selectById(id);
				setTimeout(lang.hitch(this, function() {
					this._grid.vScroller.scrollToRow(this._grid.row(id).visualIndex(), true);
				}), 100);
			}), true));
			this.own(aspect.after(this._grid, "onRowDblClick", lang.hitch(this, function(e) {
				this._showDialog(this._grid.row(e.rowIndex).item());
			}), true));
			this.own(aspect.after(this._grid.select.row, "onSelected", lang.hitch(this, "_updateState")));
			this.own(aspect.after(this._grid.select.row, "onDeselected", lang.hitch(this, "_updateState")));
		},

		_showDialog: function(attributeMapping) {
			if (!this._dialog) {
				this._dialog = new AttributeMappingDialog({
					attributeMappingsPane: this
				});
				this.own(aspect.after(this._dialog, "onSave", lang.hitch(this, "_update"), true));
			}
			this._dialog.show(this.searchRepositories, attributeMapping);
		},

		_getSelected: function() {
			var rowIds = this._grid.select.row.getSelected();
			return rowIds.length > 0 ? this._grid.row(rowIds[0]).item() : null;
		},

		_update: function(attributeMapping) {
			var updated = false;
			var original = this._grid.model.store.get(attributeMapping.id);
			if (original) {
				if (this.onUpdate(original, attributeMapping)) {
					this._prepareForGrid([ attributeMapping ]);
					this._grid.model.store.put(attributeMapping);
					updated = true;
				}
			} else if (this.onAdd(attributeMapping)) {
				this._prepareForGrid([ attributeMapping ]);
				this._grid.model.store.add(attributeMapping);
				updated = true;
			}
			return updated;
		},

		_delete: function(attributeMapping) {
			if (this.onDelete(attributeMapping))
				this.remove([ attributeMapping ]);
		},

		update: function(attributeMapping) {
			this._prepareForGrid([ attributeMapping ]);
			this._grid.model.store.put(attributeMapping);
		},

		remove: function(attributeMappings) {
			this._grid.select.row.clear();
			array.forEach(attributeMappings, lang.hitch(this, function(mapping) {
				this._grid.model.store.remove(mapping.id);
			}));
		},

		onAdd: function(attributeMapping) {
			return true;
		},

		onUpdate: function(oldAttributeMapping, newAttributeMapping) {
			return true;
		},

		onDelete: function(attributeMapping) {
			return true;
		},

		findById: function(id) {
			return this._grid.model.store.get(id);
		},

		findBySearchRepository: function(searchRepository) {
			return array.filter(this.attributeMappings, function(mapping) {
				return array.some(mapping.mappedAttributes, function(attrib) {
					return utils.getAttributeRepository(attrib).id == searchRepository.id;
				});
			});
		},

		_updateState: function() {
			var selected = this._getSelected();
			this._addButton.set("disabled", this.searchRepositories.length == 0);
			this._editButton.set("disabled", !selected);
			this._deleteButton.set("disabled", !selected);
		},

		destroy: function() {
			this.inherited(arguments);
			if (this._dialog) {
				this._dialog.destroy();
				delete this._dialog;
			}
		}
	});
});
