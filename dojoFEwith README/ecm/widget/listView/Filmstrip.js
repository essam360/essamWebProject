/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/event",
	"dojo/_base/sniff",
	"dojo/_base/connect",
	"dojo/dom-construct",
	"dojo/dom-style",
	"dojo/dom-class",
	"dojo/dom-geometry",
	"dojo/keys",
	"dijit/_Widget",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"./_FilmstripEntry",
	"dojo/dnd/Source",
	"dojo/dnd/Manager",
	"idx/html",
	"dojo/text!./templates/Filmstrip.html"
], function(declare, lang, event, sniff, connect, domConstruct, domStyle, domClass, domGeom, keys, _Widget, _TemplatedMixin, _WidgetsInTemplateMixin, _FilmstripEntry, DndSource, DndManager, idxHtml, template) {

	/**
	 * @name ecm.widget.listView.Filmstrip
	 * @class Provides a widget that displays a filmstrip view of content.
	 * @augments dijit._Widget, dijit._TemplatedMixin, dijit._WidgetsInTemplateMixin
	 */
	return declare("Filmstrip", [
		_Widget,
		_TemplatedMixin,
		_WidgetsInTemplateMixin
	], {
		/** @lends ecm.widget.listView.Filmstrip.prototype */

		templateString: template,
		widgetsInTemplate: true,

		/**
		 * Message to show if there is no data to show in the filmstrip. Default is no message.
		 */
		emptyInfo: "",
		/**
		 * Boolean that indicates whether dragging a filmstrip item is allowed. If false, then the user cannot start
		 * dragging filmstrip items.
		 */
		isDraggingAllowed: true,
		/**
		 * Boolean indicating that it should be in copy state when start dragging a filmstrip item. If true, then when a
		 * drag is started, the avatar will be "copy".
		 */
		isDragCopy: false,
		/**
		 * @private
		 */
		_entries: null,
		/**
		 * @private
		 */
		_selectedEntry: null,

		postCreate: function() {
			this.inherited(arguments);

			// Block shift F10, so the browser doesn't show an annoying right-click window
			this.connect(this.domNode, "onkeydown", function(evt) {
				if (evt.keyCode === keys.F10 && evt.shiftKey) {
					event.stop(evt);
				}
				return false;
			});

			// Handles dnd within the application
			this.dndSource.onDrop = lang.hitch(this, "_onDrop");
			this.dndSource.onDndSourceOver = lang.hitch(this, "_onDndSourceOver");
			this.dndSource.onMouseMove = lang.hitch(this, "_onMouseMove");
			this.dndSource.getSelectedItems = lang.hitch(this, "_getSelectedItems");
			this.dndSource.startup();
			this.connect(DndManager.manager(), "_setCopyStatus", "_setCopyStatus");
			this.connect(this.emptyDiv, "onmouseover", "_onOverEmptyDiv");

			// Handles dnd from desktop
			var ie = sniff('ie');
			if (!ie || ie > 9) { // ie > 9 and non-ie browsers support HTML5 drag and drop
				this.connect(this.domNode, 'dragenter', '_onExternalDragOver');
				this.connect(this.domNode, 'dragover', '_onExternalDragOver');
				this.connect(this.domNode, 'dragexit', '_onExternalDragExit');
				this.connect(this.domNode, 'dragleave', '_onExternalDragExit');
				this.connect(this.domNode, 'drop', '_onExternalDrop');
			}
		},

		/**
		 * @private Returns the selected items in the <code>dojo.dnd.Source</code>.
		 */
		_getSelectedItems: function() {
			var array = [];
			var selection = this.dndSource.selection;
			for ( var id in selection) {
				var entry = this._entries[id];
				if (entry && entry.item) {
					array.push(entry.item);
				}
			}
			return array;
		},

		/**
		 * @private Handles checking if can drop on the empty div.
		 */
		_onOverEmptyDiv: function() {
			if (DndManager.manager().source) {
				// These lines allow the avatar to update via m.canDrop method
				this.dndSource.targetState = "";
				DndManager.manager().overSource(this.dndSource);

				this._targetDropItem = null;
				var canDrop = this.canDropItems(this._getSourceItems(), this._targetDropItem, DndManager.manager().copy);
				setTimeout(function() {
					DndManager.manager().canDrop(canDrop); // updates the avator
				}, 50); // set on timer due to dojo.dnd.Source::onDndSourceOver calling m.canDrop & always setting canDrop to true
			}
		},

		/**
		 * @private Called when the user hits the control key when dragging items within the appliacation.
		 */
		_setCopyStatus: function(copy) {
			var m = DndManager.manager();
			if (m.target && this.dndSource == m.target) {
				var canDrop = this.canDropItems(this._getSourceItems(), this._targetDropItem, copy);
				setTimeout(function() {
					m.canDrop(canDrop); // updates the avator
				}, 50); // set on timer due to dojo.dnd.Source::onDndSourceOver calling m.canDrop & always setting canDrop to true
			}
		},

		/**
		 * @private Override dojo.dnd.Source to not call m.canDrop. Topic event processor for /dnd/source/over, called
		 *          when detected a current source.
		 */
		_onDndSourceOver: function(source) {
			if (this.dndSource && this.dndSource !== source) {
				this.dndSource.mouseDown = false;
				if (this.dndSource.targetAnchor) {
					this.dndSource._unmarkTargetAnchor();
				}
			}
		},

		/**
		 * @private Override dojo.dnd.Source to call m.canDrop only if canDrop.
		 */
		_onMouseMove: function(evt) {
			if (!this.dndSource) {
				return;
			}
			if (this.dndSource.isDragging && this.dndSource.targetState == "Disabled") {
				return;
			}
			DndSource.superclass.onMouseMove.call(this.dndSource, evt);
			var m = DndManager.manager();
			if (!this.dndSource.isDragging && this.isDraggingAllowed) {
				if (this.dndSource.mouseDown && this.dndSource.isSource && (Math.abs(evt.pageX - this.dndSource._lastX) > this.dndSource.delay || Math.abs(evt.pageY - this.dndSource._lastY) > this.dndSource.delay)) {
					var nodes = this.dndSource.getSelectedNodes();
					if (nodes.length) {
						this.dndSource.copyOnly = this.isDragCopy;
						this.dndSource.selfCopy = this.isDragCopy;
						m.startDrag(this.dndSource, nodes, this.dndSource.copyState(connect.isCopyKey(evt)));
					}
				}
			}
			if (this.dndSource.isDragging) {
				var before = false;
				if (this.dndSource.current) {
					if (!this.dndSource.targetBox || this.dndSource.targetAnchor != this.dndSource.current) {
						this.dndSource.targetBox = domGeom.position(this.dndSource.current, true);
					}
					if (this.dndSource.horizontal) {
						// In LTR mode, the left part of the object means "before", but in RTL mode it means "after".
						before = (evt.pageX - this.dndSource.targetBox.x < this.dndSource.targetBox.w / 2) == domGeom.isBodyLtr(this.dndSource.current.ownerDocument);
					} else {
						before = (evt.pageY - this.dndSource.targetBox.y) < (this.dndSource.targetBox.h / 2);
					}
				}
				if (this.dndSource.current != this.dndSource.targetAnchor || before != this.dndSource.before) {
					this.dndSource._markTargetAnchor(before);
				}
				if (m.source) {
					this._targetDropItem = this._getExternalDropTargetItem(evt);
					var canDrop = this.canDropItems(this._getSourceItems(), this._targetDropItem, DndManager.manager().copy);
					setTimeout(function() {
						if (m.avatar) {
							m.canDrop(canDrop); // updates the avator
						}
					}, 50); // set on timer due to overSource calling m.canDrop & always setting canDrop to true
				}
			}
		},

		/**
		 * @private Returns array of source items being dragged.
		 */
		_getSourceItems: function() {
			var array = [];
			var dndSource = DndManager.manager().source;
			if (dndSource.tree) { // source is tree
				var treeNodes = DndManager.manager().source.getSelectedTreeNodes();
				array.push(treeNodes[0].item);

			} else if (dndSource.grid && dndSource.grid.select) { // source is a grid - could be same grid or another grid
				var ids = dndSource.grid.select.row.getSelected(); //dndSource.grid.dnd.row._selectedRowIds;
				for ( var i in ids) {
					var row = dndSource.grid.row(ids[i]);
					if (row) {
						array.push(row.item());
					}
				}

			} else if (dndSource.getSelectedItems) { // source is this filmstrip.  It has a getSelectedItems() method added to it.
				array = dndSource.getSelectedItems();
			}
			return array;
		},

		/**
		 * @private Called when drop an item an item within the filmstrip or from the tree to the filmstrip.
		 */
		_onDrop: function(source, nodes, copy) {
			var sourceItems = this._getSourceItems();
			if (this.canDropItems(sourceItems, this._targetDropItem, copy)) {
				return this.onDropItems(sourceItems, this._targetDropItem, copy);
			}
		},

		/**
		 * Filters the filmstrip.
		 * 
		 * @param ids
		 *            Array of item ids for the items to show. Any item not in the list will be hidden.
		 */
		filter: function(ids) {
			var children = this.dndSource.parent.children;
			for (var i = 0; i < children.length; i++) {
				var node = children[i];
				var id = node.getAttribute("id");
				if (id) {
					var shouldShow = false;
					for (var j = 0; j < ids.length; j++) {
						if (ids[j] == id) {
							shouldShow = true;
							break;
						}
					}
					domStyle.set(node, "display", shouldShow ? "" : "none");
				}
			}
		},

		/**
		 * Clears the filter.
		 */
		clearFilter: function() {
			var children = this.dndSource.parent.children;
			for (var i = 0; i < children.length; i++) {
				var node = children[i];
				var id = node.getAttribute("id");
				if (id) {
					domStyle.set(node, "display", "");
				}
			}
		},

		/**
		 * Builds the filmstrip list.
		 * 
		 * @param items
		 *            Array of {@link ecm.model.Item} or {@link ecm.model.Favorite}.
		 */
		render: function(items) {
			this._clearEntries();
			if (items && items.length > 0) {
				domClass.remove(this.filmstripEntries, "empty");
				domClass.add(this.emptyDiv, "dijitHidden");

				var nodes = [];
				for (var i = 0; i < items.length; i++) {
					var item = items[i];

					var self = this;
					var thumbnail = null;
					if (item && item.isInstanceOf(ecm.model.Favorite) && item.item) {
						thumbnail = item.item.getValue("thumbnail");
					} else {
						thumbnail = item.getValue("thumbnail");
					}

					var entry = new _FilmstripEntry({
						mimeClass: item.getMimeClass(),
						label: idxHtml.escapeHTML(item.name),
						item: item,
						thumbnail: thumbnail,
						textDir: sniff("text-direction"),
						onContextMenu: function(evt) {
							event.stop(evt);
							self.onItemContextMenu(this, evt);
						},
						onKeyPress: function(evt) {
							self._onKeyPress(evt, this);
						},
						onDblClick: function(evt) {
							event.stop(evt);
							self.onItemDblClick(this);
						},
						_onClick: function(evt) {
							event.stop(evt);
							self._onItemSelected(this);
						},
						onClick: function(evt) {
							event.stop(evt);
							self._onItemSelected(this);
						}
					});
					entry.domNode.setAttribute("id", item.id);
					nodes.push(entry.domNode);
					this._entries[item.id] = entry;
				}
				this.dndSource.insertNodes(false, nodes);

			} else {
				domClass.add(this.filmstripEntries, "empty");
				domClass.remove(this.emptyDiv, "dijitHidden");
			}
		},

		/**
		 * @private Handle key press event.
		 */
		_onKeyPress: function(evt, entry) {
			if (evt.keyCode == keys.ENTER) { // Enter involves onItemDblClick
				event.stop(evt);
				this.onItemDblClick(entry);

			} else if (evt.charCode == keys.SPACE) { // Space 
				event.stop(evt);
				entry.set("checked", true);
				this._onItemSelected(entry);

			} else if (evt.keyCode === keys.F10 && evt.shiftKey) { // Shift F10 displays the context menu
				event.stop(evt);
				this.onItemContextMenu(entry, evt);

			} else if (evt.keyCode == keys.HOME) { // Home moves the scroller to the far left and focuses on the first item
				event.stop(evt);
				this.domNode.scrollLeft = 0;
				var node = this._getFirstNode();
				if (node) {
					this._focusOnNode(node);
				}

			} else if (evt.keyCode == keys.END) { // End moves the scroller to the far right and focuses on the last item
				event.stop(evt);
				this.domNode.scrollLeft = this.domNode.scrollWidth - this.domNode.offsetWidth;
				var node = this._getLastNode();
				if (node) {
					this._focusOnNode(node);
				}

			} else if (evt.keyCode == keys.PAGE_UP) { // Page up moves the scroller left
				event.stop(evt);
				if (!this.domNode.scrollLeft) {
					var node = this._getFirstNode();
					if (node) {
						this._focusOnNode(node);
					}
				} else {
					this.domNode.scrollLeft -= this.domNode.offsetWidth;
				}

			} else if (evt.keyCode == keys.PAGE_DOWN) { // Page down moves the scroller right
				event.stop(evt);
				if (this.domNode.scrollLeft >= this.domNode.scrollWidth - this.domNode.offsetWidth) {
					var node = this._getLastNode();
					if (node) {
						this._focusOnNode(node);
					}
				} else {
					this.domNode.scrollLeft += this.domNode.offsetWidth;
				}
			}
		},

		/**
		 * @private Returns the first visible node.
		 */
		_getFirstNode: function() {
			var children = this.dndSource.parent.children;
			for (var i = 0; i < children.length; i++) {
				var node = children[i];
				if (domStyle.get(node, "display") != "none") {
					return node;
				}
			}
			return null;
		},

		/**
		 * @private Returns the last visible node.
		 */
		_getLastNode: function() {
			var children = this.dndSource.parent.children;
			for (var i = children.length - 1; i >= 0; i--) {
				var node = children[i];
				if (domStyle.get(node, "display") != "none") {
					return node;
				}
			}
			return null;
		},

		/**
		 * @private Called when drop files from the desktop on an item. Calls onDrop with the item, files, and event.
		 * @param evt
		 *            The event.
		 */
		_onExternalDrop: function(evt) {
			event.stop(evt);
			this.onDrop(this._getExternalDropTargetItem(evt), evt.dataTransfer.files, evt);
			return false;
		},

		/**
		 * @private
		 */
		_getExternalDropTargetItem: function(evt) {
			var node = this._getExternalDropTargetEntryNode(evt);
			if (node && this._entries) {
				var entry = this._entries[node.getAttribute("id")];
				if (entry) {
					return entry.item;
				}
			}
			return null;
		},

		/**
		 * @private
		 */
		_getExternalDropTargetEntryNode: function(evt) {
			var node = evt.target;
			while (true) {
				if (domClass.contains(node, "ecmFilmstripEntryContainer")) {
					return node;
				} else {
					node = node.parentNode;
					if (!node) {
						return null;
					}
				}
			}
		},

		/**
		 * @private On hover over the item, show item over indicator and call canDropOnItem to determine if can drop on
		 *          this item.
		 * @param evt
		 *            The event.
		 */
		_onExternalDragOver: function(evt) {
			event.stop(evt);
			//dndAutoScroll.autoScrollNodes(evt);
			var node = this._getExternalDropTargetEntryNode(evt);
			var item = null;
			if (node && this._entries) {
				domClass.add(node, "ecmFilmstripEntryHover");
				var entry = this._entries[node.getAttribute("id")];
				if (entry) {
					item = entry.item;
				}
			}
			if (this.canDropOnItem(item, evt)) { // Callback to see if the file(s) can be dropped on this row
				evt.dataTransfer.dropEffect = "copy";
			} else {
				evt.dataTransfer.dropEffect = "none";
			}
			if (evt["returnValue"]) {
				evt.returnValue = false;
			}
			return false;
		},

		/**
		 * @private Remove item over indicator when exit drag over of the item.
		 * @param evt
		 *            The event.
		 */
		_onExternalDragExit: function(evt) {
			event.stop(evt);
			var node = this._getExternalDropTargetEntryNode(evt);
			if (node) {
				domClass.remove(node, "ecmFilmstripEntryHover");
			}
			return false;
		},

		/**
		 * Scrolls to the item.
		 * 
		 * @param item
		 *            Instance of {@link ecm.model.Item} or {@link ecm.model.Favorite}.
		 */
		scrollToItem: function(item) {
			if (item && this._entries) {
				var entry = this._entries[item.id];
				if (entry) {
					this.domNode.scrollLeft = entry.domNode.offsetLeft;
				}
			}
		},

		/**
		 * @private Focuses on the input domNode.
		 */
		_focusOnNode: function(node) {
			if (node) {
				var id = node.getAttribute("id");
				if (id) {
					var entry = this._entries[id];
					if (entry) {
						entry.focus();
					}
				}
			}
		},

		/**
		 * Handles updates to the input item.
		 * 
		 * @param item
		 *            Instance of {@link ecm.model.Item} or {@link ecm.model.Favorite}.
		 */
		update: function(item) {
			if (this._entries && item) {
				var entry = this._entries[item.id];
				if (entry) {
					entry.set("label", idxHtml.escapeHTML(item.name));
					entry.set("mimeClass", item.getMimeClass());
					entry.set("item", item);
					if (item && item.isInstanceOf(ecm.model.Favorite) && item.item) {
						entry.set("thumnail", item.item.getValue("thumbnail"));
					} else {
						entry.set("thumnail", item.getValue("thumbnail"));
					}
					entry.domNode.setAttribute("id", item.id);
				}
			}
		},

		/**
		 * Handles deletion of the input item.
		 */
		deleteItem: function(item) {
			if (this._entries && item) {
				var entry = this._entries[item.id];
				if (entry) {
					this.dndSource.parent.removeChild(entry.domNode);
					this._entries[item.id] = null;
					if (this._selectedEntry && this._selectedEntry.item.id == item.id) {
						this._selectedEntry = null;
					}
					if (entry.destroyRecursive) {
						entry.destroyRecursive();
					} else if (entry.destroy) {
						entry.destroy();
					}
				}
			}
		},

		/**
		 * @private Clears all existing filmstrip entries.
		 */
		_clearEntries: function() {
			if (this._entries) {
				while (i in this._entries) {
					var entry = this._entries[i];
					if (entry) {
						if (entry.destroyRecursive) {
							entry.destroyRecursive();
						} else if (entry.destroy) {
							entry.destroy();
						}
					}
				}
			}
			this._entries = {};
			var children = this.dndSource.parent.children;
			if (children) {
				for (var i = children.length; i >= 0; i--) {
					var node = children[i];
					domConstruct.destroy(node);
				}
			}
			this.dndSource.clearItems();
		},

		/**
		 * Resizes the widget.
		 */
		resize: function() {
			domStyle.set(this.filmstripEntries, "width", "auto");
			this.inherited(arguments);
			var domNodeWidth = domGeom.getMarginBox(this.domNode).w;
			if (domNodeWidth > 0) {
				var filmstripWidth = domGeom.getMarginBox(this.filmstripEntries).w;
				if (filmstripWidth < domNodeWidth) {
					domStyle.set(this.filmstripEntries, "width", "98%"); // When move over empty space, will now call onMouseMove which will allow dropping on the empty space.
				}
			}
		},

		/**
		 * Selects the specified items.
		 * 
		 * @param items
		 *            Array of {@link ecm.model.Item} or {@link ecm.model.Favorite}.
		 */
		selectItems: function(items) {
			if (this._entries && items) {
				if (items.length > 0) {
					if (this._selectedEntry) {
						this._selectedEntry.set("checked", false);
					}
					var entry = this._entries[items[0].id];
					if (entry) {
						entry.set("checked", true);
						this._selectedEntry = entry;
					}
				}
			}
		},

		/**
		 * @private Handles a click event on any item in the filmstrip.
		 * @param entry
		 *            Instance of {@link ecm.widget.listView._FilmstripEntry}.
		 */
		_onItemSelected: function(entry) {
			if (this._selectedEntry) {
				this._selectedEntry.set("checked", false);
			}
			this._selectedEntry = entry;
			this.onItemSelected(entry);
		},

		/**
		 * Event fired when an item in the filmstrip is selected.
		 * 
		 * @param entry
		 *            Instance of {@link ecm.widget.listView._FilmstripEntry}.
		 */
		onItemDeselected: function(entry) {
		},

		/**
		 * Event fired when an item in the filmstrip is selected.
		 * 
		 * @param entry
		 *            Instance of {@link ecm.widget.listView._FilmstripEntry}.
		 */
		onItemSelected: function(entry) {
		},

		/**
		 * Event fired when an item in the filmstrip is double clicked.
		 * 
		 * @param entry
		 *            Instance of {@link ecm.widget.listView._FilmstripEntry}.
		 */
		onItemDblClick: function(entry) {
		},

		/**
		 * Event fired when an item in the filmstrip should show its context menu.
		 * 
		 * @param entry
		 *            Instance of {@link ecm.widget.listView._FilmstripEntry}.
		 * @param evt
		 *            The event.
		 */
		onItemContextMenu: function(entry, evt) {
		},

		/**
		 * Event fired when files from the desktop are dropped on an item in the filmstrip.
		 * 
		 * @param dropItem
		 *            The item dropped on. Can be null if dropped on the white space in the filmstrip.
		 * @param files
		 *            The files dragged from the desktop.
		 * @param evt
		 *            The event.
		 */
		onDrop: function(dropItem, files, evt) {
		},

		/**
		 * Event fired when internal items are dropped on an item in the filmstrip.
		 * 
		 * @param dropItem
		 *            The item dropped on. Can be null if dropped on the white space in the filmstrip.
		 * @param files
		 *            The files dragged from the desktop.
		 * @param evt
		 *            The event.
		 */
		onDropItems: function(dragItems, dropItem, isCopy) {
		},

		/**
		 * Optionally override in your application. Return true if can drop files from the desktop on the dropItem.
		 * 
		 * @param dropItem
		 *            The item to drop on. Can be null if dragging over the white space in the filmstrip.
		 * @param evt
		 *            The event.
		 */
		canDropOnItem: function(dropItem, evt) {
			return false;
		},

		/**
		 * Optionally override in your application. Return true if can drop internal documents on the dropItem.
		 * 
		 * @param dropItem
		 *            The item to drop on. Can be null if dragging over the white space in the filmstrip.
		 * @param evt
		 *            The event.
		 */
		canDropItems: function(dragItems, dropItem, isCopy) {
			return false;
		}
	});
});
