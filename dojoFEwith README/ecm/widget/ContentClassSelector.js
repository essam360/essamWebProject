/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare", //
	"dojo/_base/lang", //
	"dojo/_base/array", //
	"dojo/_base/event", //
	"dojo/_base/query", //
	"dojo/_base/sniff",
	"dojo/aspect",
	"dojo/Deferred", //
	"dojo/dom-attr", //
	"dojo/dom-class", //
	"dojo/dom-construct", //
	"dojo/dom-geometry", //
	"dojo/dom-style", //
	"dojo/window", //
	"dojo/data/ObjectStore", //
	"dojo/store/Memory", //
	"dojox/grid/DataGrid", //
	"dojox/html/entities", //
	"dijit/_Widget", //
	"dijit/_TemplatedMixin", //
	"dijit/_WidgetsInTemplateMixin", // 
	"dijit/form/Button", //
	"dijit/form/CheckBox", //
	"ecm/widget/DropDownButton", //
	"dijit/layout/ContentPane", //
	"dijit/Tree", //
	"../Messages", //
	"../LoggerMixin", //
	"../model/ContentClass", //
	"../model/ContentClassTreeModel", //
	"./Ellipsis", //
	"./FilterTextBox", //
	"dojo/text!./templates/ContentClassSelector.html"
], // 
function(declare, //
lang, //
array, //
event, //
query, //
has, //
aspect, //
Deferred, //
domAttr, //
domClass, //
domConstruct, //
domGeom, //
domStyle, //
win, //
ObjectStore, //
Memory, //
DataGrid, //
entities, //
_Widget, //
_TemplatedMixin, //
_WidgetsInTemplateMixin, //
Button, //
CheckBox, //
DropDownButton, //
ContentPane, //
Tree, //
Messages, //
LoggerMixin, //
ContentClass, //
ContentClassTreeModel, //
Ellipsis, //
FilterTextBox, //
template) {

	/**
	 * @name ecm.widget.ContentClassSelector
	 * @class Provides a widget that contains a tree or drop-down list that is used to select the class for a document
	 *        or folder.
	 * @augments dijit._Widget
	 */
	var ContentClassSelector = declare("ecm.widget.ContentClassSelector", [
		_Widget,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		LoggerMixin
	], {
		/** @lends ecm.widget.ContentClassSelector.prototype */

		templateString: template,
		widgetsInTemplate: true,
		textDir: has("text-direction"),

		/**
		 * A list of class ids related to FileNet P8 Forms that are not to be displayed. The FormTemplate class is
		 * controlled by an Admin setting on the repository objects.
		 */
		p8FormsExcludeList: [
			"FormData",
			"FormPolicy"
		],

		/**
		 * A String specifying the class selector style, either <code>tree</code> or <code>dropdown</code>.
		 */
		selectorStyle: "tree",

		/**
		 * For Content Manager, if true then a pseudo class called <code>All</code> is automatically added to the
		 * class list.
		 */
		hasAll: true,

		/**
		 * A String used to filter the classes displayed.
		 */
		filterType: "",

		/**
		 * Only for Content Manager, specifies a class to filter by classification.
		 */
		filterTemplateName: "",

		/**
		 * A {@link ecm.model.Teamspace} object to associate with the class selector.
		 */
		teamspace: null,

		/**
		 * For IBM Content Manager Enterprise Edition, a boolean to control whether classes are filtered based on
		 * classification.
		 */
		filterByClassification: null,

		/**
		 * For Content Manager, a boolean to control whether classes are filtered based on hierarchical item types.
		 */
		filterHierarchicalItemTypes: false,

		/**
		 * A {@link ecm.model.ContentClass} object representing the currently selected class.
		 */
		selectedContentClass: null,

		/**
		 * IBM FileNet P8 only. Used when the class selector uses a class that is from a FileNet P8 object store that is
		 * different from the active repository. This is an object valued property where the object store information is
		 * stored in the properties <code>id</code>, <code>symbolicName</code>, and <code>displayName</code>.
		 */
		objectStore: null,

		/**
		 * Contains the label displayed in the drop down control.
		 */
		label: "",

		labelKey: null,

		/**
		 * String containing the id of the root class.
		 */
		rootClassId: null,

		/**
		 * Content class of the root object (cmis only).
		 */
		rootClass: null,

		/**
		 * If set to <code>true</code>, then only classes that allow instances can be selected (FileNet P8 only).
		 */
		onlySelectable: false,

		/**
		 * Boolean to allow multiple selection of classes.
		 */
		multiSelect: false,

		/**
		 * If true then when the widget is created, the first item in the list is selected by default.
		 */
		defaultToFirstItem: true,

		/**
		 * If <code>true</code> then the <strong>Include subclasses</strong> check box is displayed.
		 */
		showIncludeSubclasses: false,

		/**
		 * @private
		 */
		_preSetIncludeSubclasses: true,

		/**
		 * An array of strings containing the id of any classes to be filtered out of the class list.
		 */
		excludedItems: null,

		/**
		 * An array of class ids, if specified then only those classes are displayed in the class selector.
		 */
		itemList: null,

		/**
		 * For Content Manager, a boolean to control whether classes are filtered based on whether the class stores
		 * content.
		 */
		visibleOnlyIfStoresContent: false,

		/**
		 * For Content Manager, a boolean to control whether classes are filtered based on whether the class is for
		 * folders only.
		 */
		visibleOnlyForFolder: false,

		/**
		 * For Content Manager, a boolean to control whether classes are filtered based on whether the class is for
		 * documents only.
		 */
		visibleOnlyForDocument: false,

		/**
		 * If <code>true</code> then double clicking an item selects it and closes the dropdown.
		 */
		onDblClickSelectAndClose: true,
		
		/**
		 * For adds, the parent folder where we are adding a new document or folder
		 */
		parentFolder: null,

		_originalTreePanelHeight: null,
		_originalPopUpHeight: null,

		postCreate: function() {
			this.inherited(arguments);
			this.setRepository(this.repository);
		},

		/**
		 * @private
		 */
		_setDropdownidAttr: function(id) {
			this._dropdownid = id;
		},

		/**
		 * @private
		 */
		_setArialabelledbyAttr: function(id) {
			this._dropdownAriaLabelledBy = id;
		},

		/**
		 * Gets the repository.
		 * 
		 * @return Returns a {@link ecm.model.Repository} object.
		 */
		getRepository: function(repository) {
			return this.repository;
		},

		/**
		 * Sets the repository. Will cause the widget to be re-rendered.
		 * 
		 * @param repository
		 *            A {@link ecm.model.Repository} object.
		 * @param reload
		 *            A Boolean indicating whether to reload the model even if the repository is not changed
		 */
		setRepository: function(repository, reload) {
			if (!repository) {
				this.repository = repository;
				return;
			}
			// Clear the model if repository changed.
			if ((reload || (this.repository && this.repository.id != repository.id)) && (this._grid || this._treeModel)) {
				if (this._grid) {
					this._grid.destroy();
					this._grid = null;
				}
				
				if (this._tree) {
					this._tree.destroy();
					this._tree = null;
				}
				if (this._treeModel) {
					this._treeModel.destroy();
					this._treeModel = null;
				}
			}
			this.repository = repository;
			this.hasAll = this.hasAll && this.repository.allPseudoClassSupported;
			this._createRendering();
		},

		/**
		 * Sets the root class to be used by the class tree. Only used for cmis repositories.
		 * 
		 * @param rootClass
		 *            The class to be used for the root class.
		 * @param skipRendering
		 *            Boolean flag indicating whether to skip creating the rendering for this widget. (Since 2.0.3)
		 */
		setRootClass: function(rootClass, skipRendering) {
			if (rootClass && (this.rootClassId != rootClass.id)) {
				this.rootClass = rootClass;
				this.rootClassId = rootClass.id;
				if (this.repository) {
					if (this._treeModel) {
						this._treeModel.setBaseContentClass(rootClass);
					}
					if (!skipRendering) {
						this._createRendering();
					}
				}
			}
		},

		/**
		 * Sets the root class to be used by the class tree. Only used for FileNet P8 repositories.
		 * 
		 * @param rootClassId
		 *            The class name to be used for the root class.
		 * @param skipRendering
		 *            Boolean flag indicating whether to skip creating the rendering for this widget. (Since 2.0.3)
		 */
		setRootClassId: function(rootClassId, skipRendering) {
			if (rootClassId && (this.rootClassId != rootClassId)) {
				this.rootClassId = rootClassId;
				if (this.repository) {
					if (this._treeModel) {
						this._treeModel.setBaseClass(rootClassId);
					}
					if (!skipRendering) {
						this._createRendering();
					}
				}
			}
		},

		/**
		 * Sets whether hierarchical item types are to be filtered out of the class selector. Only used for Content
		 * Manager repositories.
		 * 
		 * @param filterHierarchicalItemTypes
		 *            If <code>true</code> then hierarchical item types are not displayed.
		 */
		setFilterHierarchicalItemTypes: function(filterHierarchicalItemTypes) {
			if (this.repository._isCM() && (!!this.filterHierarchicalItemTypes != !!filterHierarchicalItemTypes)) {
				this.filterHierarchicalItemTypes = filterHierarchicalItemTypes;
				this._refreshGrid();
			}
		},

		/**
		 * FileNet P8 only. Returns a FileNet P8 object store that is used when the class selector uses a class that is
		 * from a FileNet P8 object store that is different from the active repository. This is an object valued
		 * property where the object store information is stored in the properties <code>id</code>,
		 * <code>symbolicName</code>, and <code>displayName</code>.
		 * 
		 * @returns An object valued property where the object store information is stored in the properties id,
		 *          symbolicName, and displayName.
		 */
		getObjectStore: function() {
			return this.objectStore;
		},

		/**
		 * FileNet P8 only. Used when the class selector uses a class that is from a P8 object store that is different
		 * from the active repository. This is an object valued property where the object store information is stored in
		 * the properties <code>id</code>, <code>symbolicName</code>, and <code>displayName</code>.
		 * 
		 * @param objectStore
		 *            An object valued property where the object store information is stored in the properties id,
		 *            symbolicName, and displayName.
		 */
		setObjectStore: function(objectStore) {
			this.objectStore = objectStore;
		},

		/**
		 * Returns the current root class used.
		 * 
		 * @return The root class.
		 */
		getRootClassId: function() {
			return this.rootClassId;
		},

		/**
		 * Sets the style of the class selector. Two styles are supported: <code>tree</code>, and
		 * <code>dropdown</code>. If <code>tree</code> is specified then a Tree widget is rendered. If
		 * <code>dropdown</code> is specified then a dropdown control is created, clicking in the dropdown displays
		 * the class selector in a tree control.
		 * 
		 * @param style
		 *            Either <code>tree</code> or <code>dropdown</code>.
		 */
		setStyle: function(style) {
			this.selectorStyle = style;
		},

		/**
		 * Sets whether an option to include subclasses is shown. If <code>true</code> then a check box control is
		 * displayed for the <strong>Include subclasses</strong> option. This is only valid for the "dropdown" style.
		 * 
		 * @param showIncludeSubclasses
		 *            If true then the <strong>Include subclasses</strong> check box is displayed.
		 */
		setShowIncludeSubclasses: function(showIncludeSubclasses) {
			this.showIncludeSubclasses = showIncludeSubclasses;
			this._showIncSubclasses(showIncludeSubclasses);
			this.setLabel(null);
		},

		/**
		 * Allows a list of classes to be filtered out of the class selector. The specified classes will not be shown in
		 * the class selector.
		 * 
		 * @param excludedItems
		 *            An array of class ids to be excluded.
		 */
		setExcludedItems: function(excludedItems) {
			this.excludedItems = excludedItems;
			if (this._treeModel) {
				this._treeModel.setExcludedItems(excludedItems);
			}
		},

		/**
		 * Returns whether only classes that store content are visible. Only for Content Manager repositories.
		 * 
		 * @return If <code>true</code> then only classes that store content are visible.
		 */
		getVisibleOnlyIfStoresContent: function() {
			return this.visibleOnlyIfStoresContent;
		},

		/**
		 * Sets whether only classes that store content are visible. Only for Content Manager repositories.
		 * 
		 * @param visibleOnlyIfStoresContent
		 *            Specify <code>true</code> to only display classes that store content.
		 */
		setVisibleOnlyIfStoresContent: function(visibleOnlyIfStoresContent) {
			if (!!this.visibleOnlyIfStoresContent != !!visibleOnlyIfStoresContent) {
				this.visibleOnlyIfStoresContent = visibleOnlyIfStoresContent;
				this._refreshGrid();
			}
		},

		/**
		 * Returns whether only classes that are for folders are visible. If <code>true</code>, and the class is
		 * designated as not for folders, then it is not displayed. Only for Content Manager repositories.
		 * 
		 * @return If <code>true</code> then classes designated as not for folders are not displayed.
		 */
		getVisibleOnlyForFolder: function() {
			return this.visibleOnlyForFolder;
		},

		/**
		 * Sets whether only classes that are for folders are visible. If <code>true</code>, and the class is
		 * designated as not for folders, then it is not displayed. Only for Content Manager repositories.
		 * 
		 * @param visibleOnlyForFolder
		 *            If <code>true</code> then classes designated as not for folders are not displayed.
		 */
		setVisibleOnlyForFolder: function(visibleOnlyForFolder) {
			if (!!this.visibleOnlyForFolder != !!visibleOnlyForFolder) {
				this.visibleOnlyForFolder = visibleOnlyForFolder;
				if (this.visibleOnlyForFolder) {
					this.visibleOnlyForDocument = false;
				}
				this._refreshGrid();
			}
		},

		/**
		 * Returns whether only classes that are for documents are visible. If <code>true</code>, and the class is
		 * designated as for folders only, then it is not displayed. Only for Content Manager repositories.
		 * 
		 * @return If <code>true</code> then classes designated as for folders only are not displayed.
		 */
		getVisibleOnlyForDocument: function() {
			return this.visibleOnlyForDocument;
		},

		/**
		 * Sets whether only classes that are for documents are visible. If <code>true</code>, and the class is
		 * designated as for folders only, then it is not displayed. Only for Content Manager repositories.
		 * 
		 * @param visibleOnlyForDocument
		 *            If <code>true</code> then classes designated as for folders only are not displayed.
		 */
		setVisibleOnlyForDocument: function(visibleOnlyForDocument) {
			if (!!this.visibleOnlyForDocument != !!visibleOnlyForDocument) {
				this.visibleOnlyForDocument = visibleOnlyForDocument;
				if (this.visibleOnlyForDocument) {
					this.visibleOnlyForFolder = false;
				}
				this._refreshGrid();
			}
		},

		/**
		 * Refreshes the styles for each row in the tree.
		 */
		updateTreeRowStyles: function() {
			// Update the list display (disable or enable the classes that cannot store content).
			if (this._tree) {
				var children = this._tree.rootNode.getChildren();
				if (children && children.length > 0) {
					for (var i = 0; i < children.length; i++) {
						var child = children[i];
						if (child.item) {
							child._applyClassAndStyle(child.item, "row", "Row");
						}
					}
				}
			}
		},

		/**
		 * @private Renders the widget.
		 */
		_createRendering: function() {
			// don't render if no repository or no base class (unless it is cm, which ignores the base class)
			if (this.repository && this.rootClassId) {
				if (this.selectorStyle == "tree") {
					if (this.repository._isCM()) {
						this._createGrid();
						if (this.domNode) {
							domClass.add(this.domNode, "gridPanel");
							this.domNode.appendChild(this._grid.domNode);
						}
						this._initGrid();
					} else {
						this._createTree();
					}
				} else if (this.selectorStyle == "dropdown") {
					this._createDropDown();
				}
			}
		},

		/**
		 * @private
		 */
		_createTree: function() {
			if (this._dropdown) {
				this._dropdown.destroy();
				this._dropdown = null;
			}
			if (this._tree) {
				this._tree.destroy();
				this._tree = null;
			}
			if (this.selectorStyle == "tree") {
				this._createTreeDijit();
				if (this.domNode) {
					this.domNode.appendChild(this._tree.domNode);
				}
			}
		},

		/**
		 * @private
		 */
		_cleanupDropDown: function() {
			if (this._filter) {
				this._filter.destroy();
				this._filter = null;
			}
			if (this._incSubclasses) {
				this._incSubclasses.destroy();
				this._incSubclasses = null;
			}
			if (this._okButton) {
				this._okButton.destroy();
				this._okButton = null;
			}
			if (this._cancelButton) {
				this._cancelButton.destroy();
				this._cancelButton = null;
			}
			if (this._ellipsis) {
				this._ellipsis.destroy();
				this._ellipsis = null;
			}
			if (this._grid) {
				this._grid.destroy();
				this._grid = null;
			}
			if (this._tree) {
				this._tree.destroy();
				this._tree = null;
			}
			if (this._dropdown) {
				this._dropdown.destroy();
				this._dropdown = null;
			}
		},

		/**
		 * @private
		 */
		_createDropDown: function() {
			this._cleanupDropDown();

			if (this.selectorStyle == "dropdown") {
				// Use a grid for CM to take advantage of virtual scrolling, especially for large data sets 
				var isCM = this.repository._isCM();
				if (isCM)
					this._createGrid();
				else
					this._createTreeDijit();

				// Reset the focus order
				this._focusItems = [];

				// main content div:
				this._popupContent = domConstruct.create("div", {
					'class': 'ecmContentClassSelectorPopUpContent',
					'id': this.id + '_ClassSelectorPopUpContent'
				});

				// this holds the body of the dropdown (everything above the button panel)
				this._mainPanel = domConstruct.create("div", {
					'class': 'mainPanel',
					'id': this.id + '_MainPanel'
				});
				this._popupContent.appendChild(this._mainPanel);

				// this div will hold the filter, treepanel, title bar (in SearchClassSelector) 
				this._availClassesPane = domConstruct.create("div", {
					'class': 'availClassesPane',
					'id': this.id + '_availClassesPane'
				});
				this._mainPanel.appendChild(this._availClassesPane);

				// for CM libs add a filter control:
				if (isCM) {
					this._filterData = "";
					this._filterPanel = domConstruct.create("div", {
						'class': 'filterArea'
					});
					// add hidden label to filter textbox to make RPT happy
					var filterId = this.id + "_" + new Date().getTime();
					var label = domConstruct.create("label", {
						"for": filterId,
						"innerHTML": ecm.messages.multicolumn_list_filter_text
					}, this._filterPanel);
					domStyle.set(label, "display", "none");
					this._filter = new FilterTextBox({
						id: filterId,
						placeholder: ecm.messages.name_contains_label,
						title: ecm.messages.name_contains_label
					});
					this.connect(this._filter, "_onInput", "_filterItems");
					this.connect(this._filter, "_setValueAttr", "_filterItems");

					this._filterPanel.appendChild(this._filter.domNode);
					this._mainPanel.insertBefore(this._filterPanel, this._availClassesPane);
					this._focusItems.push(this._filter);
				}
				this._focusItems.push(this._grid || this._tree);

				this._treePanel = domConstruct.create("div", {
					"class": this._grid ? "gridPanel" : "treePanel",
					id: this.id + "_ClassSelectorTreePanel"
				});
				if (this._grid) {
					this._treePanel.appendChild(this._grid.domNode);
					this._availClassesPane.appendChild(this._treePanel);
					this._initGrid();
				} else {
					this._treePanel.appendChild(this._tree.domNode);
					
					if (has("trident") || has("ie")) { // Selecting a tree node with a long label in a scroller that has the scroller in the tree's parent causes IE to scroll
						var self = this;
						this.own(aspect.around(this._tree, "focusNode", function(originalFunc) {
							return function(node) {
								var scrollLeft = self._treePanel ? self._treePanel.scrollLeft : null;
								var ret = originalFunc.apply(this, arguments); // call the original method to create the new item
								if (self._treePanel && scrollLeft != undefined) {
									self._treePanel.scrollLeft = scrollLeft;
								}
								return ret;
							};
						}));
					}

					this._availClassesPane.appendChild(this._treePanel);
				}

				// add button bar
				this._buttonPane = domConstruct.create("div", {
					'class': 'buttonArea',
					'id': this.id + '_ClassSelectorButtonPane'
				});

				// include subclasses checkbox
				this._subclassPane = domConstruct.create("div", {
					'class': 'incSubClassesArea'
				});
				this._buttonPane.appendChild(this._subclassPane);
				this._incSubclasses = new CheckBox({
					'id': this.id + '_incSubclassesChk',
					checked: this._preSetIncludeSubclasses
				});
				this._subclassPane.appendChild(this._incSubclasses.domNode);
				var incSubclassLbl = domConstruct.create("label", {
					innerHTML: ecm.messages.include_subclasses_label,
					'for': this.id + '_incSubclassesChk'
				});
				this._subclassPane.appendChild(incSubclassLbl);
				this._showIncSubclasses(this.showIncludeSubclasses);

				this._buttonContainerNode = domConstruct.create("div", {
					'class': 'buttonContainer'
				});
				this._buttonPane.appendChild(this._buttonContainerNode);
				this._okButton = new Button({
					label: ecm.messages.ok_button_label,
					disabled: true,
					'id': this.id + '_okButton'
				});
				this.connect(this._okButton, "onClick", function() {
					this._pickSelectedItemAndClose();
				});
				this._buttonContainerNode.appendChild(this._okButton.domNode);

				this._cancelButton = new Button({
					label: ecm.messages.cancel,
					'id': this.id + '_cancelButton'
				});
				this.connect(this._cancelButton, "onClick", lang.hitch(this, function() {
					this._dropdown.closeDropDown();
					this._dropdown.focus();
				}));
				this._buttonContainerNode.appendChild(this._cancelButton.domNode);
				this._popupContent.appendChild(this._buttonPane);

				// This is cleaned up by DropDownButton.
				var cp = new ContentPane();

				//add buttons to list of focusable controls			
				this._focusItems.push(this._okButton);
				this._focusItems.push(this._cancelButton);
				this.connect(cp, "onKeyPress", "_onDropDownPaneKeyPress");

				if (this._tree) {
					// this fixes the highlighting of the nodes when the overflow scrolls horizontally
					this.connect(cp, "onFocus", function() {
						this._resizeTreeWidth(this._treePanel);
					});
					this.connect(this._tree, "onOpen", function() {
						this._resizeTreeWidth(this._treePanel);
					});
				}

				cp.set("content", this._popupContent);

				if (!this._dropdown) {
					var id = this._dropdownid ? this._dropdownid : this.id + "_" + new Date().getTime();
					this._dropdown = new DropDownButton({
						'class': 'ecmDropDownInput',
						id: id,
						dropDown: cp,
						autoWidth: false,
						labelId: this._dropdownAriaLabelledBy
					});

					var _this = this;
					this.connect(this._dropdown, "openDropDown", function() {
						ecm.model.desktop._onRequestOverrideStatusDialogRefocus(false);

						this._resizeHeight();
						this._updateButtonStates();
						
						if (this._grid) {
							// Resize the grid for a snug fit
							this._grid.resize();
							
							// Place the focus on the selected class, if any; otherwise, place it on the filter text box
							var selected = this._grid.selection.getSelected();
							var index = this._grid.getItemIndex(selected && selected.length ? selected[0] : null);
							if (index > -1) {
								this._filter.focus(); // needed to focus on grid next
								setTimeout(function() {
									_this._grid.focus.focusGrid();
									_this._grid.focus.setFocusIndex(index, 0);
								}, 500);
								focused = true;
							} else {
								setTimeout(lang.hitch(this, function() {
									this._filter.focus();
								}), 500);
							}
						} else if (this._tree) {
							var node = null;
							var selectedItems = _this._tree.get('selectedItems');
							if (selectedItems && selectedItems.length > 0) {
								var itemNodes = _this._tree.getNodesByItem(selectedItems[0]);
								node = itemNodes && itemNodes.length > 0 ? itemNodes[0] : null;
							} else if (_this._tree.lastFocused) {
								node = _this._tree.lastFocused;
							}
							
							if (node && _this._isItemInFilter(node)) {
								setTimeout(function() {
									if (_this._filter) {
										_this._filter.focus();
									} else {
										win.scrollIntoView(node.rowNode);
										_this._tree.focusNode(node);
									}
								}, 500);
							} else {
								this._cancelButton.focus();
							}
						}

						this._hideStatusDialogEventHandle = this.connect(ecm.model.desktop, "onHideStatusDialog", function() {
							setTimeout(function() {
								_this._focusLastFocused();
							}, 1250);
						});
					});
					this.connect(this._dropdown, "closeDropDown", function() {
						ecm.model.desktop._onRequestRevertStatusDialogRefocus();
						if (this._hideStatusDialogEventHandle) {
							this.disconnect(this._hideStatusDialogEventHandle);
							this._hideStatusDialogEventHandle = null;
						}
					});

					var lbl = this.label;
					if (this.defaultToFirstItem && this._tree && this._tree.showRoot && this._tree.rootNode.item && this._isSelectable(this._tree.rootNode.item)) {
						//this._dropdown.set("label", this._tree.rootNode.item.name);
						lbl = this._tree.rootNode.item.name;
						this._tree.set('selectedItems', [
							this._tree.rootNode.item
						]);
						//this._updateButtonStates();
						this.onContentClassSelected(this._tree.rootNode.item, this.isIncludeSubclasses());
					}

					this._ellipsis = new Ellipsis();
					this._dropdown.containerNode.appendChild(this._ellipsis.domNode);
					this.setLabel(lbl);
				}
				if (this.domNode && this._dropdown.domNode) {
					this.domNode.appendChild(this._dropdown.domNode);
				}
			}
			if (this.domNode) {
				domClass.add(this.domNode, "dijitInline");
			}
		},

		_focusLastFocused: function() {
			if (this._grid) {
				this._grid.focus.focusGrid();
			} else if (this._tree) {
				var node = this._tree.lastFocused;
				if (node) {
					this._tree.focusNode(node);
				}
			}
		},

		/**
		 * @private
		 */
		_isItemInFilter: function(nodeOrItem) {
			// check if the item not filtered out (the call to scrollIntoView and focusNode
			// causes an error if the node is not displayed because of filtering)  
			// Can pass in either the class or node item
			var isInFilter = true;
			var item = null;
			if (nodeOrItem.isInstanceOf && nodeOrItem.isInstanceOf(ecm.model.ContentClass)) {
				item = nodeOrItem;
			} else {
				item = nodeOrItem.item;
			}
			if (this._filterData && item) {
				var itemName = item.name.toLowerCase();
				isInFilter = itemName.indexOf(this._filterData.toLowerCase()) >= 0;
			}
			return isInFilter;
		},

		_createGrid: function() {
			if (this._grid) {
				this._grid.destroy();
				this._grid = null;
			}
			
			this._grid = new DataGrid({
				structure: [
					{
						field: "name",
						name: ecm.messages.available_classes_col_header,
						width: "100%"
					}
				],
				selectionMode: "single", // on par with tree behavior
				rowsPerPage: ContentClassSelector.GRID_PAGE_SIZE < 50 ? 50 : ContentClassSelector.GRID_PAGE_SIZE,
				canSort: function() {
					return false;
				},
				queryOptions: {
					ignoreCase: true	
				},
				store: new ObjectStore({
					objectStore: new Memory({
						identifier: "id",
						label: "name"
					})
				})
			});
			
			this.connect(this._grid, "onSelected", function(index) {
				this._handleSelection(this._grid.getItem(index));
			});
			this.connect(this._grid, "onRowDblClick", this._handleDblClick);
		},
		
		_initGrid: function() {
			// Use promises so that future calls to _populateGrid, which is asynchronous, are executed in sequence
			var deferred = new Deferred();
			this._gridPromise = deferred.promise;
			this._grid.startup();
			this._populateGrid(lang.hitch(this, function() {
				this.onLoaded();
				
				// Select the first class that isn't the All pseudo class if nothing's selected,
				// the selector is configured to pick a default and it's in the context of a drop-down
				if (!this.selectedContentClass && this.defaultToFirstItem && this.selectorStyle == "dropdown") {
					var items = this._grid.store.objectStore.data;
					if (items.length) {
						var index = 0, defaultClass = items[index].contentClass;
						if (defaultClass.id == "$common" && items.length > 1)
							defaultClass = items[++index].contentClass;
						this.setLabel(defaultClass.name);
						this._grid.selection.select(index);
						this.onContentClassSelected(defaultClass, null);
					}
				}
			}));
			deferred.resolve(); // go...
		},
		
		_populateGrid: function(callback) {
			var grid = this._grid, promise = this._gridPromise;
			if (!grid || !promise) // grid hasn't been initialized
				return;

			this._gridPromise = promise.then(lang.hitch(this, function() {
				var deferred = new Deferred();
				this.repository.retrieveContentClasses(lang.hitch(this, function(contentClasses) {
					if (grid._beingDestroyed || grid._destroyed) { // may have been reinitialized
						deferred.resolve();
						return;
					}
					
					try {
						// Add the All pseudo class if needed
						if (this.hasAll) {
							contentClasses = [].concat(contentClasses);
							contentClasses.unshift(new ContentClass({
								id: "$common",
								name: ecm.messages.search_class_all_pseudo,
								repository: this.repository,
								pseudoClass: true
							}));
						}
	
						// Add items that can be selected to the store
						var data = [];
						array.forEach(contentClasses, function(contentClass) {
							if ((!this.itemList || array.indexOf(this.itemList, contentClass.id) > -1)
									&& (!this.excludedItems || array.indexOf(this.excludedItems, contentClass.id) == -1)
									&& this._isVisible(contentClass)) {
								data.push({
									id: contentClass.id,
									name: contentClass.name,
									contentClass: contentClass
								});
							}
						}, this);
						grid.setStore(new ObjectStore({
							objectStore: new Memory({
								identifier: "id",
								label: "name",
								data: data
							})
						}));
						
						if (callback)
							callback();
					} catch (e) {
						this.logDebug("_populateGrid", "Failed to populate grid", e.message);
					} finally {
						deferred.resolve();
					}
				}), this.filterType);
				
				return deferred.promise;
			}));
		},
		
		_refreshGrid: function() {
			if (!this._grid) // no grid, no go
				return;
			
			var selected = this._grid.selection.getSelected();
			this._populateGrid(lang.hitch(this, function() {
				// Re-apply filter
				this._grid.filter({
					name: this._filterData ? "*" + this._filterData + "*" : "*"
				});
				
				// Reselect the grid item if it wasn't filtered out
				if (selected && selected.length) {
					var index = this._grid.getItemIndex(selected[0]);
					if (index > -1 && this._isItemInFilter(selected[0].contentClass))
						this._grid.selection.select(index);
				}
				
				// Reset the selected class if it's no longer valid 
				if (this.selectedContentClass && !this._isVisible(this.selectedContentClass))
					this.setSelected(null);
				
				this._updateButtonStates();
			}));
		},

		/**
		 * @private
		 */
		_createTreeDijit: function() {
			if (!this._treeModel) {
				this._treeModel = new ContentClassTreeModel(this.repository, this.hasAll, this.filterType, this.excludedItems, this.itemList, this.objectStore);

				// The rootClass should be used with CMIS repositories only.
				if (this.rootClass && this.repository._isCmis()) {
					this._treeModel.setBaseContentClass(this.rootClass);
				} else {
					var classLabel;
					if (this.rootClassId == "Document") {
						classLabel = ecm.messages.document_propagation_DOCUMENT;
					} else if (this.rootClassId == "Folder") {
						classLabel = ecm.messages.document_propagation_FOLDER;
					}
					this._treeModel.setBaseClass(this.rootClassId, classLabel);
				}
				this.connect(this, "_repositoryChanged", function(repository) {
					this._treeModel.setRepository(this.repository);
				});
			}

			if (!this._tree) {
				var showroot = !this.itemList && (this.repository.type != "cm"); //this.repository.type == "p8" && !this.itemList;
				this._tree = new Tree({
					model: this._treeModel,
					showRoot: showroot,
					persist: false,
					//getTooltip: lang.hitch(this, this._getItemToolTip),
					getRowClass: lang.hitch(this, this._getRowClass),
					getRowStyle: lang.hitch(this, this._getRowStyle),
					_onDownArrow: lang.hitch(this, this._onDownArrow),
					_onUpArrow: lang.hitch(this, this._onUpArrow),
					textDir: this.textDir
				});

				this.connect(this._tree, "onClick", function(/* dojo.data */item, /*TreeNode*/node, /*Event*/evt) {
					this._handleSelection(item);
				});
				this.connect(this._tree, "onDblClick", this._handleDblClick);
				this.connect(this._tree, "onLoad", function() {
					this.onLoaded();
				});

				// This returns the tree node's progress indicator back normal if errors occur during retrieve of children
				this.connect(this._treeModel, "onProcessingComplete", function(item) {
					var node = this._tree.getNodesByItem(item)[0];
					if (node) {
						node.unmarkProcessing();
						node.state = "UNCHECKED";
						node._expandNodeDeferred = null;
					}
				});

				// you can select by mouse down and drag outside too so need to handle that
				this.connect(this._tree, "onMouseDown", function(evt) {
					var nodes = query(".dijitTreeLabel", evt.target);
					if (nodes.length == 0) {
						nodes = query(".dijitTreeLabel", evt.target.parentNode);
					}
					if (nodes.length > 0) {
						var item = this._findSelectedItemByName(nodes[0].textContent);
						if (item) {
							this._handleSelection(item);
						}
					}
				});

				// this seems to be necessary to get the tooltip rendered for the root node:
				//if (showroot)
				//	this._tree.rootNode.domNode.title = this._tree.rootNode.item.name;

				if (this.defaultToFirstItem && !this._tree.showRoot && this.selectorStyle == "dropdown") {
					this.connect(this._tree, "onLoad", function() {
						var childItems = this._tree.rootNode.getChildren();
						var defaultItem = null;
						// don't auto select if something is already selected
						if (childItems && !this.selectedContentClass) {
							var defaultItem = childItems[0].item;
							if (defaultItem.id == "$common" && childItems.length > 1) {
								// Skip the All pseudo class
								defaultItem = childItems[1].item;
							}
							//this._dropdown.set("label", defaultItem.name);
							this.setLabel(defaultItem.name);
							this._tree.set('selectedItems', [
								defaultItem
							]);
							//this._updateButtonStates();
							this.onContentClassSelected(defaultItem, null);
						}
					});
				}
			}
		},

		/**
		 * @private
		 */
		_handleDblClick: function(/* dojo.data */item) {
			if (this._selectionOk() && this.onDblClickSelectAndClose) {
				this._pickSelectedItemAndClose();
			} else {
				this.onDoubleClickSelected(item);
			}
		},

		/**
		 * Sets the currently selected class.
		 * 
		 * @param contentClass
		 *            A string that is set to the id of the class to select, or an {@link ecm.model.ContentClass} object
		 *            representing the class to select.
		 */
		setSelected: function(contentClass) {
			// Support selecting by the class selector class id (for P8, class symbolic name)
			if (contentClass) {
				if (this._grid) {
					// Locate the content class and make sure it can be selected
					var item = this._grid.store.objectStore.get(lang.isString(contentClass) ? contentClass : contentClass.id);
					contentClass = item ? item.contentClass : null;
					if (contentClass && !this.isItemAvailable(contentClass))
						contentClass = null;
				} else {
					if (lang.isString(contentClass)) {
						// Get class node from class name
						var contentClassNode = this._tree.getNodesByItem(contentClass)[0];
						if (contentClassNode) {
							// Get class item from class node.
							contentClass = contentClassNode.item;
						} else {
							// Class not found. Fall through to the default behavior below.
							contentClass = null;
						}
					}
					
					// verify that it is in the tree
					if (contentClass) {
						var classNode = this._tree.getNodesByItem(contentClass)[0];
						// sometimes the class passed into this method does not have the right name (display name)
						// so use the one from the tree instead
						if (classNode) {
							contentClass = classNode.item;
							// If the class is not selectable in the current context then clear it.
							if ((contentClass != null) && !this.isItemAvailable(contentClass)) {
								contentClass = null;
							}
						}
					}
				}
			}

			// No contentClass provided or not in the tree; default to first content class
			if (contentClass == null) {
				if (this._tree && this._tree.showRoot && this._tree.rootNode.item && this._isSelectable(this._tree.rootNode.item)) {
					// default to root class
					contentClass = this._tree.rootNode.item;
				} else {
					// Default to the first selectable content class that is not the All pseudo class
					if (this._filterData && this._filterData.length > 0) {
						// Reset the filter to work with the entire set of classes
						this._doFilter("");
						this._filter.set("value", "");
					}
					var children = this._grid ? this._grid.store.objectStore.data : this._tree.rootNode.getChildren();
					if (children && children.length > 0) {
						for (var i = 0; i < children.length; i++) {
							var item = children[i][this._grid ? "contentClass" : "item"];
							if (item.id != "$common" && this.isItemAvailable(item)) {
								contentClass = item;
								break;
							}
						}
					}
				}
			}

			if (contentClass) {
				this.setLabel(contentClass.name);
				this.filterTemplateName = contentClass.id;
				if (this._grid) {
					this._grid.selection.select(this._grid.getItemIndex(contentClass));
				} else {
					this._tree.set('selectedItems', [
						contentClass
					]);
				}
				this.onContentClassSelected(contentClass, this.showIncludeSubclasses ? this._incSubclasses.checked : null);
				this._updateButtonStates();
			} else {
				this.clearSelection();
			}
		},

		/**
		 * Selects the initial selected class. This should be called after the onLoaded event. The provided class is
		 * selected even if it is not currently available in the tree model.
		 * 
		 * @since 2.0.3.6
		 */
		setInitialSelection: function(contentClass) {
			if (this.repository && contentClass) {
				if (lang.isString(contentClass)) {
					contentClass = this.repository.getContentClass(contentClass);
				}
				this.setLabel(contentClass.name);
				this.onContentClassSelected(contentClass, null);
			}
		},

		/**
		 * Clears the current selected class and clears the label.
		 */
		clearSelection: function() {
			this.selectedContentClass = null;
			this.label = null;
			this.setLabel(null);
			if (this._grid) {
				this._grid.selection.clear();
			} else if (this._tree) {
				this._tree.set('selectedItems', null);
			}
		},

		/**
		 * Returns the currently selected class. If multiple select is enabled, then an array of classes is returned.
		 * 
		 * @return An {@link ecm.model.ContentClass} object representing the selected item. If multiple select is
		 *         enabled, then an array of {@link ecm.model.ContentClass} objects is returned.
		 */
		getSelected: function() {
			var selectedItems = this._getSelectedItems();
			if (selectedItems == null && this.selectedContentClass) {
				selectedItems = this.selectedContentClass;
			}
			return selectedItems;
		},

		/**
		 * @private
		 */
		_getSelectedItems: function() {
			var selectedItems = null;
			if (this._grid) {
				var selected = array.map(this._grid.selection.getSelected(), "return item.contentClass;");
				if (selected.length)
					selectedItems = this.multiSelect ? selected : selected[0];
			} else if (this._tree) {
				selectedItems = this.multiSelect ? this._tree.selectedItems : this._tree.selectedItem;
			}
			
			return selectedItems;
		},

		/**
		 * Sets the <code>disabled</code> attribute of the dropdown control that contains the class tree.
		 * 
		 * @param disabled
		 *            Specify <code>true</code> to disable the dropdown control. Specify <code>false</code> to
		 *            enable it.
		 */
		setDisabled: function(disabled) {
			if (this._dropdown) {
				this._dropdown.set("disabled", disabled);
			}
		},

		/**
		 * @private Check whether the class can be selected.
		 */
		_isSelectable: function(contentClass) {
			var selOk = true;
			if ((this.repository._isP8() || this.repository._isCmis()) && (this.onlySelectable)) {
				selOk = contentClass.allowsInstances;
			}
			return selOk;
		},

		/**
		 * @private Check whether the class should be displayed.
		 */
		_isVisible: function(contentClass) {
			if (this.repository._isCM()) {
				if (this.filterType == "editItem") {
					// In edit mode, the current class (filter class) is always allowed.
					if (this.filterTemplateName == contentClass.id) {
						return true;
					}
				} else if (this.filterType == "createDocument" || this.filterType == "createFolder" || this.filterType == "createDocumentOrFolder" || this.filterType == "CMOOSfilter" || this.filterType == "CMEditServicefilter") {
					// In create document or create folder mode, the content class must grant privAddItem. 
					// Also hide the entry template classes.
					if (!contentClass.hasPrivilege("privAddItem") || contentClass.id == "ICMEntryTemplate") {
						return false;
					}
					
					// If we are adding a document or folder to a CM8 folder, check that we have permission to add the item to a folder.
					if (this.parentFolder && !contentClass.hasPrivilege("privAddLink")){
						return false;
					}
				}

				// Check hierarchical filter
				if (this.filterHierarchicalItemTypes && contentClass.hierarchical) {
					return false;
				}

				// Check classification filter
				if (this.filterTemplateName) {
					if (this.filterByClassification == null) {
						this.filterByClassification = (this.filterType == "editItem");
						if (this.filterByClassification) {
							this.filterContentClass = this.repository.getContentClass(this.filterTemplateName, this.objectStore);
						}
					}
					if (this.filterByClassification && this.filterContentClass) {
						// If the class does not grant privChangeClass or the item type classifications don't match, then hide the class.
						if ((!contentClass.hasPrivilege("privChangeClass") || this.filterContentClass.classification != contentClass.classification)) {
							return false;
						}
					}
				}

				// Check stores content filter
				// When storing content is required, the class must be able to store content and if properties are not being edited (change class does not required privAddContent),
				// then potentially a new document will be created and the user must be granted the privAddContent privilege on the class.
				if (this.visibleOnlyIfStoresContent	&& (!contentClass.storesContent || (this.filterType != "editItem" && !contentClass.hasPrivilege("privAddContent")))) {
					return false;
				}

				// Check folder filter
				if (this.visibleOnlyForFolder && contentClass.notForFolders) {
					return false;
				}

				// Check document filter
				if (this.visibleOnlyForDocument && contentClass.forFoldersOnly) {
					return false;
				}
				
				if (this.repository.officeOnlineEnabled && this.filterType == "CMOOSfilter")
				{
					if (!contentClass.supportsOOSReferenceAttribute || contentClass.versionControl=="ALWAYS" ) {
						return false
					}					
				}
				if (this.repository.editServiceEnabled && this.filterType == "CMEditServicefilter")
				{
					if (!contentClass.supportsOOSReferenceAttribute || contentClass.versionControl=="ALWAYS" ) {
						return false
					}					
				}
			}

			return true;
		},

		/**
		 * @private Check whether the selected classes are truly selectable.
		 */
		_selectionOk: function() {
			var selOk = true;
			var selectedItems = this._getSelectedItems();
			if (selectedItems != null) {
				if (lang.isArray(selectedItems)) {
					for (var i = 0; i < selectedItems.length; i++) {
						selOk = this.isItemAvailable(selectedItems[i]);
						if (!selOk) {
							break;
						}
					}
				} else {
					selOK = this.isItemAvailable(selectedItems);
				}
			}
			return selOk;
		},

		/**
		 * @private Handle clicking on an item
		 */
		_handleSelection: function(/* dojo.data */item) {
			if (this._tree && !this.multiSelect) {
				this._tree.set('selectedItems', [
					item
				]);
			}
			this._updateButtonStates();
			this.onSelected(item);
		},

		/**
		 * Callback when an item is double clicked. This is not called if the double click results in the item being
		 * selected and the dropdown being closed (usually when onDblClickSelectAndClose is <code>true</code>).
		 */
		onDoubleClickSelected: function(/* dojo.data */item) {

		},

		/**
		 * Callback when an item is selected.
		 */
		onSelected: function(/* dojo.data */item) {

		},

		/**
		 * Returns <code>true</code> if the specified class can be selected. Whether the class can be selected depends
		 * on the settings for <code>filterTemplateName</code>, <code>visibleOnlyIfStoresContent</code>,
		 * <code>visibleOnlyForFolder</code>, <code>visibleOnlyForDocument</code>, and <code>onlySelectable</code>.
		 * 
		 * @param contentClass
		 *            An {@link ecm.model.ContentClass} object.
		 */
		isItemAvailable: function(contentClass) {
			if (!contentClass)
				return false;

			if (this._grid) {
				var item = this._grid.store.objectStore.get(lang.isString(contentClass) ? contentClass : contentClass.id);
				contentClass = item ? item.contentClass : null;
			} else {
				var classItem = this._tree.getNodesByItem(contentClass)[0]; // so that contentClass can be a string
				contentClass = classItem ? classItem.item : null;
			}

			return contentClass != null && this._isVisible(contentClass) && this._isSelectable(contentClass);
		},

		/**
		 * @private search the selected items for the named item
		 */
		_findSelectedItemByName: function(itemName) {
			var selectedItem = null;
			for (var i = 0; i < this._tree.selectedItems.length; i++) {
				if (itemName == this._tree.selectedItems[i].name) {
					selectedItem = this._tree.selectedItems[i];
					break;
				}
			}
			return selectedItem;
		},

		/**
		 * @private
		 */
		_pickSelectedItemAndClose: function() {
			var selItem = this.getSelected();
			if (this._dropdown) {
				this._dropdown.closeDropDown();
				this._setSelectedItemLabel(selItem);
				this._dropdown.focus();
			}
			var incSubclasses = this.showIncludeSubclasses ? this._incSubclasses.checked : null;
			this.onContentClassSelected(selItem, incSubclasses);
		},

		/**
		 * @private
		 */
		_setSelectedItemLabel: function(selItem) {
			var lbl = "";
			if (lang.isArray(selItem)) {
				array.forEach(selItem, function(item, i) {
					if (lbl != "") {
						lbl += ", ";
					}
					lbl += item.name;
				});
			} else {
				lbl = selItem.name;
			}
			this.setLabel(lbl);
		},

		/**
		 * @private Need to set the width of the tree to the entire width of the scrolling div so the nodes highlight
		 *          correctly
		 */
		_resizeTreeWidth: function(scrollingNode) {
			if (scrollingNode) {
				setTimeout(lang.hitch(this, function() {
					if (this._tree && this._tree.domNode) {
						var currentSize = domGeom.getMarginBox(this._tree.domNode);
						var scrollWidth = scrollingNode.scrollWidth;
						// If the scrollbar width is wider than the tree's current width, set the tree's width.
						if (scrollWidth > currentSize.w) {
							domGeom.setMarginBox(this._tree.domNode, {
								w: scrollWidth
							});
						}
					}
				}), 300);
			}
		},

		/**
		 * @private
		 */
		_resizeHeight: function() {
			// Get the dimensions of the window and the space above and below the button.
			var windowBoxDimensions = win.getBox();
			var thisPosition = domGeom.position(this.domNode);
			var spaceBelow = windowBoxDimensions.h - thisPosition.y - thisPosition.h;
			var spaceAbove = thisPosition.y;
			var spaceAvailable = spaceBelow > spaceAbove ? spaceBelow : spaceAbove;

			// Add 5px margin.
			spaceAvailable -= 5;

			// If this is the first time the dropdown is opening, get the height of the two controls. 
			// Otherwise, reset the height back to their original values.
			if (this._originalTreePanelHeight == null) {
				this._originalTreePanelHeight = domStyle.get(this._treePanel.id, "height");
			} else {
				domStyle.set(this._treePanel.id, "height", this._originalTreePanelHeight + "px");
				if (this._grid)
					this._grid.resize({ h: this._originalTreePanelHeight });
			}
			if (this._originalPopUpHeight == null) {
				this._originalPopUpHeight = domStyle.get(this._popupContent.id, "height");
			} else {
				domStyle.set(this._popupContent.id, "height", this._originalPopUpHeight + "px");
			}

			// If the dropdown doesn't fit in the space available, reduce height up to 50%.
			if (this._originalPopUpHeight > spaceAvailable) {

				// Calculate the height of the tree control.
				var newTreePanelHeight = this._originalTreePanelHeight - (this._originalPopUpHeight - spaceAvailable);

				// Set the heights of the two controls.
				domStyle.set(this._treePanel.id, "height", newTreePanelHeight + "px");
				domStyle.set(this._popupContent.id, "height", spaceAvailable + "px");
				if (this._grid)
					this._grid.resize({ h: newTreePanelHeight });
			}
		},

		/**
		 * @private
		 */
		_getRowClass: function(/*dojo.data.Item*/item, /*Boolean*/opened) {
			if (item.isInstanceOf && item.isInstanceOf(ecm.model.ContentClass)) {
				if (!this._isSelectable(item)) {
					return "ecmContentClassNonSelectable";
				}
			}
		},

		/**
		 * @private
		 */
		_getRowStyle: function(/*dojo.data.Item*/item, /*Boolean*/opened) {
			if (item.isInstanceOf && item.isInstanceOf(ecm.model.ContentClass)) {
				return {
					display: this._isVisible(item) ? "" : "none"
				};
			}
		},

		/**
		 * @private
		 */
		_onDownArrow: function(/*Event*/evt, /*TreeNode*/node) {

			// summary:
			//		down arrow pressed; get next visible node, set focus there
			var nextNode = this._tree._getNext(node);

			while (nextNode && nextNode.domNode && nextNode.domNode.children && nextNode.domNode.children[0]) {
				if (domStyle.get(nextNode.domNode.children[0], "display") != "none") {
					break;
				} else {
					nextNode = this._tree._getNextNode(nextNode);
				}
			}

			if (nextNode && nextNode.isTreeNode) {
				this._tree.focusNode(nextNode);
			}
		},

		/**
		 * @private
		 */
		_onUpArrow: function(/*Event*/evt, /*TreeNode*/node) {

			// summary:
			//		Up arrow pressed; move to previous visible node

			// if younger siblings
			var previousSibling = node.getPreviousSibling();

			while (previousSibling && previousSibling.domNode && previousSibling.domNode.children && previousSibling.domNode.children[0]) {
				if (domStyle.get(previousSibling.domNode.children[0], "display") != "none") {
					break;
				} else {
					previousSibling = previousSibling.getPreviousSibling();
				}
			}

			if (previousSibling) {
				node = previousSibling;
				// if the previous node is expanded, dive in deep
				while (node.isExpandable && node.isExpanded && node.hasChildren()) {
					// move to the last child
					var children = node.getChildren();
					node = children[children.length - 1];
				}
			} else {
				// if this is the first child, return the parent
				// unless the parent is the root of a tree with a hidden root
				var parent = node.getParent();
				if (!(!this._tree.showRoot && parent === this._tree.rootNode)) {
					node = parent;
				}
			}

			if (node && node.isTreeNode) {
				this._tree.focusNode(node);
			}
		},

		/**
		 * @private
		 */
		_showIncSubclasses: function(/* boolean */show) {
			if (this._popupContent) {
				show ? domClass.remove(this._popupContent, "hideIncludeSubclasses") : domClass.add(this._popupContent, "hideIncludeSubclasses");
			}
			if (this._focusItems) {
				if (show) {
					// add checkbox to focusItems
					var treeindx = -1;
					for (var i = 0; i < this._focusItems.length; i++) {
						if (this._focusItems[i] == this._tree) {
							treeindx = i;
							break;
						}
					}
					if (treeindx >= 0) {
						this._focusItems.splice(treeindx + 1, 0, this._incSubclasses);
					} else {
						this._focusItems.push(this._incSubclasses);
					}
				} else {
					// remove include subclasses checkbox
					for (i = 0; i < this._focusItems.length; i++) {
						if (this._focusItems[i] == this._incSubclasses) {
							this._focusItems.splice(i, 1);
							break;
						}
					}
				}
			}
		},

		/**
		 * Sets the label of the dropdown control. Only valid for the <code>dropdown</code> style.
		 * 
		 * @param label
		 *            The label to set.
		 */
		setLabel: function(label) {
			if (label == null) {
				label = "";
			}
			this.label = label;
			var lblDiv = domConstruct.create("div");
			var classDiv = domConstruct.create("div", {
				'class': 'dijitInline className',
				innerHTML: has("dojo-bidi") ? this.enforceTextDirWithUcc(null, entities.encode(label)) : entities.encode(label)
			}, lblDiv);

			// The dropdown may not exist yet.
			if (this._dropdown) {
				this._dropdown.set("title", has("dojo-bidi") ? this.enforceTextDirWithUcc(null, label) : label); // jaws announces the title
			}

			if (this.showIncludeSubclasses && this._incSubclasses && this._incSubclasses.checked) {
				domConstruct.create("div", {
					'class': 'dijitInline',
					innerHTML: "&nbsp"
				}, lblDiv);
				domConstruct.create("div", {
					'class': 'dijitInline includeSubClassNote',
					innerHTML: ecm.messages.include_subclasses_note
				}, lblDiv);
			}
			if (this._ellipsis) {
				this._ellipsis.set("content", lblDiv);
				setTimeout(lang.hitch(this, function() {
					if (this._ellipsis) {
						this._ellipsis.layout();

						// When the surrounding containers are not yet sized, 
						// the ellipsis height is set to 0 and the label is not displayed.
						// Check for this condition and set the height to the standard size.
						var h = domStyle.get(this._ellipsis.domNode, "height");
						if (h == 0) {
							domStyle.set(this._ellipsis.domNode, "height", "15px");
						}
					}
				}));
			}
		},

		/**
		 * If the <strong>Include subclasses</strong> check box is displayed, this returns the check box checked state.
		 * Otherwise it returns <code>false</code>.
		 * 
		 * @return <code>True</code> if the <strong>Include subclasses</strong> check box is checked,
		 *         <code>false</code> if not checked or it is not displayed.
		 */
		isIncludeSubclasses: function() {
			return (this.showIncludeSubclasses ? this._incSubclasses.checked : false);
		},

		/**
		 * Sets the <code>checked</code> attribute of the <strong>Include subclasses</strong> check box.
		 * 
		 * @param includeSubclasses
		 *            Boolean specifying the <code>checked</code> attribute of the <strong>Include subclasses</strong>
		 *            check box. If <strong>Include subclasses</strong> is not displayed, then this is ignored.
		 */
		setIncludeSubclasses: function(includeSubclasses) {

			this._preSetIncludeSubclasses = includeSubclasses;
			if (this.showIncludeSubclasses && this._incSubclasses) {
				this._incSubclasses.set("checked", includeSubclasses);
			}
		},

		/**
		 * @private Apply the filter to the list of classes.
		 */
		_filterItems: function() {
			this.logEntry("_filterItems");
			var filterData = this._filter.get("value");
			this._doFilter(filterData);
			this.logExit("_filterItems");
		},

		/**
		 * @private Apply the filter to the list of classes
		 */
		_doFilter: function(filterData) {
			this.logEntry("_doFilter");
			// dont execute the filter if nothing changed
			if (this._filterData != filterData) {
				this._filterData = filterData;
				if (this._treeModel) {
					this._treeModel._filter(filterData);
	
					// check if the current selected items are still visible
					var selectedItems = this._tree.get('selectedItems');
					if (selectedItems && selectedItems.length > 0) {
						var _this = this;
						var selectionNotValid = array.some(selectedItems, function(selectedItem) {
							return !_this._isItemInFilter(selectedItem);
						});
	
						if (selectionNotValid) {
							// clear the selection
							this._tree.set('selectedItems', []);
							this._updateButtonStates();
						}
					}
				} else if (this._grid) {
					// Clear the selection prior to filtering, then reselect it if it wasn't filtered out
					var selected = this._grid.selection.getSelected();
					this._grid.selection.clear();
					this._grid.filter({
						name: filterData ? "*" + filterData + "*" : "*"
					});
					if (selected && selected.length) {
						if (this._isItemInFilter(selected[0].contentClass)) {
							var index = this._grid.getItemIndex(selected[0]);
							if (index > -1)
								this._grid.selection.select(index);
						}
						this._updateButtonStates();
					}
				}
			}
			this.logExit("_doFilter");
		},

		/**
		 * @private
		 */
		_onDropDownPaneKeyPress: function(evt) {
			if (evt.keyCode == 9 && this._focusItems && this._focusItems.length > 0) {
				event.stop(evt);

				// find current focus
				var currentFocus = -1;
				for (var i = 0; i < this._focusItems.length; i++) {
					if (this._focusItems[i].focused) {
						currentFocus = i;
						break;
					}
				}
				if (currentFocus >= 0) {
					// find next item to focus
					var nextItem = null;
					while (!nextItem) {
						if (evt.shiftKey) {
							currentFocus--;
							if (currentFocus < 0) {
								currentFocus = this._focusItems.length - 1;
							}
						} else {
							currentFocus++;
							if (currentFocus >= this._focusItems.length) {
								currentFocus = 0;
							}
						}
						nextItem = this._focusItems[currentFocus];
						// check if disabled
						if (nextItem == this._tree) {
							if (!this._isTreeFocusable()) {
								nextItem = null;
							}
						} else if (nextItem.isInstanceOf && nextItem.isInstanceOf(dojox.grid.DataGrid)) {
							// skip empty grids
							if (nextItem.store._arrayOfTopLevelItems.length == 0)
								nextItem = null;
						} else if (nextItem.disabled != null && nextItem.disabled == true) {
							nextItem = null;
						}
					}
					if (nextItem) {
						if (nextItem == this._tree) {
							this._focusTree();
						} else if (nextItem.isInstanceOf && nextItem.isInstanceOf(dojox.grid.DataGrid)) {
							var fm = nextItem.focus;
							fm.focusGrid();
							fm.setFocusIndex(0, 0);
						} else {
							nextItem.focus();
						}

					}
				}
			}
		},

		/**
		 * @private
		 */
		_focusTree: function() {
			// set focus on the tree digit. either set focus on the last focused node, or the first item.  The problems 
			// occur when there is filtering, the last focused may have been filtered out, or the tree may be empty, 
			// so need to check for that.
			var focusNode = this._getTreeFocusNode();
			if (focusNode) {
				this._tree.focusNode(focusNode);
			}
		},

		/**
		 * @private See if focus can be set on the tree, only false if everything has been filtered out (the tree is
		 *          empty)
		 */
		_isTreeFocusable: function() {
			var focusNode = this._getTreeFocusNode();
			return focusNode != null;
		},

		/**
		 * @private
		 */
		_getTreeFocusNode: function() {
			// Get the node in the tree to set focus on.  This would usually be the last focused node, or the root or 
			// first child node.  If last focused node was filtered out, or if the tree is empty then return null
			var focusNode = null;

			// try the current selected item, if none selected then use last focused item
			var selectedItems = this._tree.get('selectedItems');
			if (selectedItems && selectedItems.length > 0) {
				var itemNodes = this._tree.getNodesByItem(selectedItems[0]);
				focusNode = itemNodes && itemNodes.length > 0 ? itemNodes[0] : null;
			} else {
				focusNode = this._tree.lastFocused;
			}

			// now check if it is not filtered out and visible
			if (focusNode) {
				if (!this._isItemInFilter(focusNode)) {
					focusNode = null;
				} else if (!this._isVisible(focusNode.item)) {
					focusNode = null;
				}
			}

			// if none of that worked then use the first item
			if (!focusNode) {
				if (this._tree.get("showRoot")) {
					focusNode = this._tree.rootNode;
				} else {
					// get the first child
					var childNodes = this._tree.rootNode.getChildren();
					if (childNodes && childNodes.length > 0) {
						//focusNode = childNodes[0];
						// get first visible one
						var _this = this;
						array.some(childNodes, function(childNode) {
							if (_this._isVisible(childNode.item)) {
								focusNode = childNode;
								return true;
							} else {
								return false;
							}
						});
					}
				}
			}
			return focusNode;
		},

		/**
		 * @private Update the ok button
		 */
		_updateButtonStates: function() {
			if (this._okButton) {
				var selectedItems = this._getSelectedItems();
				var enabled = selectedItems != null && (!lang.isArray(selectedItems) || selectedItems.length > 0);
				if (enabled)
					enabled = this._selectionOk();
				this._okButton.set("disabled", !enabled);
			}
		},

		/**
		 * Callback when the grid or tree widget is loaded.
		 */
		onLoaded: function() {
			this.loaded = true;
		},

		/**
		 * Callback when a class has been selected.
		 * 
		 * @param item
		 *            A {@link ecm.model.ContentClass} object representing the selected class. If multiple select is
		 *            enabled, then this is a array of {@link ecm.model.ContentClass} objects.
		 * @param incSubclasses
		 *            A Boolean containing the <code>checked</code> state of the <strong>Include subclasses</strong>
		 *            check box.
		 */
		onContentClassSelected: function(item, incSubclasses) {
			// summary:
			//	Event called when a class is selected.
			this.selectedContentClass = item;
		},

		/**
		 * Cleans up any objects that were created.
		 */
		destroy: function() {
			var methodName = "destroy";
			this.logEntry(methodName);

			this._cleanupDropDown();
			
			if (this._treeModel) {
				this._treeModel.destroy();
				this._treeModel = null;
			}

			ecm.model.desktop._onRequestRevertStatusDialogRefocus();

			this.inherited(arguments);
			this.logExit(methodName);
		}
	});
	
	/**
	 * The number of rows displayed per page in the list of available classes (minimum of 50). Only for Content Manager repositories.
	 * 
	 * @since 3.0.1
	 */
	ContentClassSelector.GRID_PAGE_SIZE = 100;
	
	return ContentClassSelector;
});
