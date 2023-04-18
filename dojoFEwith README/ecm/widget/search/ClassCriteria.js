/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array",
	"dojo/string",
	"dojo/dom-geometry",
	"dojo/data/ItemFileWriteStore",
	"dojox/grid/DataGrid",
	"dijit/_WidgetBase",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"../../LoggerMixin",
	"../_OptionsLinkMixin",
	"./_ClassCriteria",
	"../DropDownDialog",
	"../DropDownLink",
	"dojo/text!./templates/ClassCriteria.html"
], function(declare, lang, array, string, domGeometry, ItemFileWriteStore, DataGrid, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, LoggerMixin, _OptionsLinkMixin, _ClassCriteria, DropDownDialog, DropDownLink, template) {

	/**
	 * @private Used internally by {@link ecm.widget.search.SearchBuilder} and {@link ecm.widget.search.SearchTab}
	 *          widgets
	 * @name ecm.widget.search.ClassCriteria
	 * @class Provides a widget that is used to display the item class on which a saved search is defined to search. For
	 *        a saved search that was defined in IBM FileNet Workplace XT to support searching multiple item classes,
	 *        this widget includes a link to open a drop-down list of the item classes from which users can select.
	 * @augments dijit._WidgetBase
	 */
	return declare("ecm.widget.search.ClassCriteria", [
		_WidgetBase,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		_OptionsLinkMixin
	], {
		/** @lends ecm.widget.search.ClassCriteria.prototype */
		templateString: template,

		constructor: function() {
			this._messages = ecm.messages;
		},

		postCreate: function() {
			this.inherited(arguments);
			this._classCriteriaContent._classCriteria = this;
		},

		onOpen: function() {
			this.inherited(arguments);

			if (this._grid) {
				this._grid.resize(domGeometry.getContentBox(this._classCriteriaContent.domNode));
				this._disableReadOnlyClasses();
				this._onUpdateRow();
			} else {
				var layout = [
					{
						name: " ",
						attrs: "aria-label='" + string.substitute(this._messages.select_class_label, [
							this._messages.class_label
						]) + "'",
						field: "selected",
						width: "20px",
						editable: true,
						cellType: dojox.grid.cells.Bool,
						styles: "text-align: center;"
					},
					{
						name: this._messages.class_label,
						field: "className",
						width: "100%"
					}
				];
				this._grid = new DataGrid({
					store: this._store,
					structure: layout,
					updateDelay: 0,
					onStyleRow: this._onStyleRow
				}, document.createElement("div"));
				this._classCriteriaContent.domNode.appendChild(this._grid.domNode);
				this._grid.startup();
				this._grid.resize(domGeometry.getContentBox(this._classCriteriaContent.domNode));
				this.connect(this._grid, "updateRow", this._onUpdateRow);
			}
		},

		saveOptions: function() {
			if (!this._grid)
				return;

			this._fetchSelectedClasses();
			this._updateLink();

			this.inherited(arguments);
		},

		_updateLink: function(disable) {
			this._store.fetch({
				onComplete: lang.hitch(this, function(items) {
					var selectedCount = 0;
					for (var i = 0; i < items.length; i++) {
						if (this._isItemSelected(items[i]))
							selectedCount++;
					}

					var searchIn = selectedCount > 1 ? string.substitute(this._messages.search_class_multiple, [
						selectedCount
					]) : this._messages.search_class;
					this._optionsLink.set("label", searchIn);
					if (selectedCount < 2 && disable)
						this.set("disabled", true);
				})
			});
		},

		_isItemSelected: function(item) {
			return array.some(this._selectedClasses, function(selectedItem) {
				return selectedItem.className == item.className[0];
			});
		},

		restoreOptions: function() {
			if (!this._grid)
				return;

			this._store.fetch({
				onComplete: lang.hitch(this, function(items) {
					for (var i = 0; i < items.length; i++) {
						var item = items[i];
						this._store.setValue(item, "selected", this._isItemSelected(item));
					}
				})
			});

			this.inherited(arguments);
		},

		getSelectedOptions: function() {
			return this._selectedClasses;
		},

		setSelectedOptions: function(selectedClasses) {
			if (!selectedClasses)
				return;
			if (!this._getDisabledAttr()) {
				this._selectedClasses = selectedClasses;
				this.restoreOptions();
			}

			this.inherited(arguments);
		},

		_fetchSelectedClasses: function() {
			this._selectedClasses = [];
			this._store.fetch({
				onItem: lang.hitch(this, function(item) {
					if (item.selected[0])
						this._selectedClasses.push({
							className: item.className[0],
							searchSubclasses: item.searchSubclasses[0]
						});
				})
			});
		},

		setSearchTemplate: function(searchTemplate, refresh) {
			if (this._grid) {
				if (refresh) {
					this._selectedClasses = [];
					var classes = searchTemplate.classes;
					if (classes) {
						for (var i = 0; i < classes.length; i++) {
							if (!classes[i].isHidden())
								this._selectedClasses.push({
									className: this._resolveClassName(searchTemplate, classes[i]),
									searchSubclasses: classes[i].searchSubclasses
								});
						}
					} else {
						this._selectedClasses.push({
							className: searchTemplate.classDisplayName,
							searchSubclasses: searchTemplate.includeSubclasses
						});
					}
					this.restoreOptions();
					this._updateLink(true);
				}
			} else {
				this._store = new ItemFileWriteStore({
					data: this._getStoreData(searchTemplate)
				});
				this._fetchSelectedClasses();
				this._updateLink(true);
			}
		},

		_getCheckBoxNode: function(rowIndex) {
			return this._grid.getCell(0).view.getCellNode(rowIndex, 0).firstChild;
		},

		_disableReadOnlyClasses: function() {
			this._store.fetch({
				onComplete: lang.hitch(this, function(items) {
					for (var i = 0; i < items.length; i++) {
						if (items[i].readOnly[0]) {
							var checkbox = this._getCheckBoxNode(i);
							checkbox.disabled = true;
						}
					}
				})
			});
		},

		_onUpdateRow: function() {
			this._store.fetch({
				onComplete: lang.hitch(this, function(items) {
					var selectedCount = 0;
					for (var i = 0; i < items.length; i++) {
						var checkbox = this._getCheckBoxNode(i);
						if (checkbox.checked)
							selectedCount++;
						if (items[i].readOnly[0])
							checkbox.disabled = true;
					}
					if (selectedCount < 3) {
						var disable = selectedCount < 2;
						for (var i = 0; i < items.length; i++) {
							var checkbox = this._getCheckBoxNode(i);
							if (!items[i].readOnly[0] && checkbox.checked && disable != checkbox.disabled)
								checkbox.disabled = disable;
						}
					}
				})
			});
		},

		_onStyleRow: function(row) {
			row.customClasses += " searchCriteriaGridRow";
			this.focus.styleRow(row);
			this.edit.styleRow(row);
		},

		_getStoreData: function(searchTemplate) {
			var data = {
				identifier: "className",
				items: []
			};
			var classes = searchTemplate.classes;
			if (classes) {
				for (var i = 0; i < classes.length; i++) {
					if (classes[i].isHidden())
						continue;
					var className = this._resolveClassName(searchTemplate, classes[i]);
					var item = {
						selected: true,
						className: className,
						searchSubclasses: classes[i].searchSubclasses,
						readOnly: classes[i].isReadOnly()
					};
					data.items.push(item);
				}
			} else {
				var className = searchTemplate.classDisplayName;
				var item = {
					selected: true,
					className: className,
					searchSubclasses: searchTemplate.includeSubclasses,
					readOnly: false
				};
				data.items.push(item);
			}

			return data;
		},

		_resolveClassName: function(searchTemplate, searchClass) {
			return searchTemplate.repository._isCM() && searchClass.id === "$common" ? this._messages.search_class_all_pseudo : searchClass.name;
		},

		destroy: function() {
			this.inherited(arguments);
			this._store = null;
			if (this._grid) {
				this._grid.destroy();
				this._grid = null;
			}
		}
	});

});
