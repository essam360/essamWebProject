/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array",
	"dojo/_base/event",
	"dojo/_base/connect",
	"dojo/dom-construct",
	"dojo/dom-class",
	"dojo/dom-geometry",
	"ecm/model/Desktop",
	"ecm/model/SearchTemplate",
	"ecm/widget/listView/modules/_Module",
	"ecm/widget/Breadcrumb",
	"ecm/widget/layout/HorizontalScrollPane",
	"ecm/widget/BreadcrumbDropDownDialog",
	"ecm/LoggerMixin",
],

function(declare, lang, array, event, connect, domConstruct, domClass, domGeom, Desktop, SearchTemplate, _Module, Breadcrumb, HorizontalScrollPane, BreadcrumbDropDownDialog, LoggerMixin) {

	/**
	 * @name ecm.widget.listView.modules.Breadcrumb
	 * @class This content list module provides breadcrumb capability. It uses the resultSet's parentFolder or
	 *        searchTemplate to get the start of the path. It then traverses the whole path using the parent on the item
	 *        or search template. If the breadcrumb is clicked, it calls contentList openItem.
	 * @augments ecm.widget.listView.modules._Module
	 */

	return declare("ecm.widget.listView.modules.Breadcrumb", [
		_Module,
		LoggerMixin
	], {
		/** @lends ecm.widget.listView.modules.Breadcrumb.prototype */

		name: 'breadcrumb',

		/**
		 * Optional root preview to display.
		 */
		rootPrefix: "",

		/**
		 * Boolean indicating if the root item name should be included.
		 */
		includeRootItemName: true,

		/**
		 * Boolean indicating if the breadcrumb should be disabled (i.e. not clickable).
		 */
		disabled: false,

		_closeConnection: null,

		/**
		 * See GridX API documentation for details.
		 */
		getAPIPath: function() {
			return {
				breadcrumbModule: this
			};
		},

		/**
		 * Preload listens to events and sets the breadcrumb.
		 */
		preload: function() {
			var t = this;
			t.breadcrumbContainer = new HorizontalScrollPane({
				"class": "breadcrumbContainer"
			});
			t.domNode = t.breadcrumbContainer.domNode;
			t.breadcrumb = new Breadcrumb();
			domConstruct.place(t.breadcrumb.domNode, t.breadcrumbContainer.containerNode);
			if (!t._bar) {
				domConstruct.place(t.breadcrumbContainer.domNode, t.contentList.topContainer.domNode);
			}
			t.breadcrumb.startup();
			t.breadcrumbContainer.startup();

			domClass.add(t.breadcrumb.domNode, "breadcrumb");
			t.breadcrumb.set("disabled", t.disabled);
			t.batchConnect([
				Desktop,
				'onChange',
				'_onChange'
			], [
				Desktop,
				'onFavoriteUpdated',
				'_onChange'
			], [
				t.contentList,
				'onSetResultSet',
				'_setBreadcrumb'
			], [
				t.breadcrumb,
				'onClick',
				'_onClickBreadcrumb'
			], [
				t.breadcrumb,
				'onClickSeparator',
				'_onClickSeparator'
			], [
				t.breadcrumbContainer.domNode,
				'oncontextmenu',
				'_stopEvent'
			]);
			t._setBreadcrumb();
		},

		/**
		 * Destroy the widget.
		 */
		destroy: function() {
			var t = this;
			if (t.breadcrumbContainer) {
				t.breadcrumbContainer.destroyRecursive();
				t.breadcrumbContainer = null;
			}
			if (t.breadcrumb) {
				t.breadcrumb.destroyRecursive();
				t.breadcrumb = null;
			}
			if (t._closeConnection != null) {
				t._closeConnection.remove();
				t._closeConnection = null;
			}
			if (t._dropDownDialog) {
				t._dropDownDialog.destroyRecursive();
				t._dropDownDialog = null;
			}
			t.inherited(arguments);
		},

		/**
		 * Returns the button area dom node that the buttons are contained in.
		 */
		getBreadcrumb: function() {
			var t = this;
			return t.breadcrumb ? t.breadcrumb : t.contentList.breadcrumb;
		},

		/**
		 * @private Stops the event.
		 */
		_stopEvent: function(evt) {
			event.stop(evt);
			return false;
		},

		/**
		 * @private If the breadcrumb label changed, then update it with the latest label.
		 * @param modelObject
		 *            The model object that changed.
		 */
		_onChange: function(modelObject) {
			var t = this, breadcrumb = t.getBreadcrumb();
			if (lang.isArray(modelObject)) {
				array.forEach(modelObject, function(changedModel, j) {
					var isChanged = false;
					var breadcrumbData = breadcrumb.getData();
					if (breadcrumbData) {
						for ( var i in breadcrumbData) {
							var bread = breadcrumbData[i];
							if (bread && bread.item) {
								var id = bread.item.id;
								if (id && id == changedModel.id && bread.label != changedModel.name) {
									isChanged = true;
									bread.label = changedModel.name;
								}
							}
						}
					}
					if (isChanged) {
						breadcrumb.setData(breadcrumbData);
					}
				}, this);
			}
		},

		/**
		 * @private Sets the content list's breadcrumb widget with the breadcrumb data.
		 */
		_setBreadcrumb: function(listParent) {
			var t = this, breadcrumb = t.getBreadcrumb();
			breadcrumb.setData(t._getBreadcrumbData(listParent));
		},

		/**
		 * @private Get the breadcrumb data as an array of objects of label & item.
		 */
		_getBreadcrumbData: function(listParent) {
			var t = this, resultSet = t.contentList.getResultSet();
			var array = [];
			// The result set may be null.
			if (resultSet) {
				var item = resultSet.parentFolder;
				if (!item && resultSet.searchTemplate) {
					item = resultSet.searchTemplate;
				}
				if (!item && resultSet.parentDocument) {
					item = resultSet.parentDocument;
				}
				if (item) {
					t._addItemAndParentItems(item, array, listParent);
				}
			}
			return array.reverse();
		},

		/**
		 * @private Add the item & label to the breadcrumb array until the parent is null.
		 */
		_addItemAndParentItems: function(item, array, listParent) {
			var t = this;
			var hasParent = this._hasParent(item, listParent);
			while (item) {
				var data = {
					item: item,
					label: item.name
				};
				if (!hasParent) {
					if (!t.includeRootItemName) {
						data.label = "";
					}
					if (t.rootPrefix) {
						data.labelPrefix = t.rootPrefix;
					}
				}

				if (item.compoundDocumentType && item.compoundDocumentType != null) {
					data.activeSeparator = true;
				}

				array.push(data);
				item = hasParent;
				hasParent = this._hasParent(item);
			}
		},

		_hasParent: function(item, listParent) {
			if (!item)
				return null;

			var returnValue = item.parent;
			if (listParent) {
				returnValue = listParent;
			} else if (item.parentFolder) {
				returnValue = item.parentFolder;
			} else if (item.resultSet && item.resultSet.parentDocument) { // breadcrumb logic for compound documents.
				returnValue = item.resultSet.parentDocument;
			}

			return returnValue;
		},

		/**
		 * @private On breadcrumb click, open item.
		 */
		_onClickBreadcrumb: function(breadcrumb) {
			var t = this, cl = t.contentList;
			// When click a search template from the breadcrumb, we want it to auto run
			if (breadcrumb.item && breadcrumb.item.isInstanceOf && breadcrumb.item.isInstanceOf(ecm.model._SearchTemplateBase)) {
				breadcrumb.item.autoRun = true;
			}

			if (breadcrumb.item && breadcrumb.item.compoundDocumentType && breadcrumb.item.compoundDocumentType != null && cl.openCompoundDocument) {
				cl.openCompoundDocument(breadcrumb.item); // navigate into compound document.
			} else {
				cl.openItem(breadcrumb.item);
			}
		},

		_onClickSeparator: function(breadcrumb, separator, evt) {
			var methodName = "_onClickSeparator";
			this.logEntry(methodName);

			if (!separator.isOpen()) {
				this.logDebug(methodName, "Opening separator");

				if (this._dropDownDialog && this._dropDownDialog.item && this._dropDownDialog.item == breadcrumb.item) {
					this.logDebug(methodName, "Same item, reuse last dialog.");
				} else {
					if (this._dropDownDialog) {
						this._dropDownDialog.destroyRecursive(false);
						this._dropDownDialog = undefined;
					}

					this.logDebug(methodName, "Creating new BreadcrumbDropDownDialog");
					this._dropDownDialog = new BreadcrumbDropDownDialog({
						targetContentList: this.contentList,
					});

					this._dropDownDialog.setItem(breadcrumb.item);
				}

				if (this._closeConnection != null) {
					this._closeConnection.remove();
					this._closeConnection = null;
				}

				this._closeConnection = this.connect(this._dropDownDialog, "onClose", lang.hitch(this, function(separator) {
					separator.close();
				}, separator));

				this.logDebug(methodName, "Showing BreadcrumbDropDownDialog");
				this._dropDownDialog.show({
					parent: separator,
					position: {
						x: evt.pageX,
						y: evt.pageY + 5
					}
				});

				separator.open();
			} else {
				this.logDebug(methodName, "Close separator");

				if (this._dropDownDialog && this._dropDownDialog.close) {
					this._dropDownDialog.close();
				}

				separator.close();
			}

			this.logExit(methodName);
		},

		/**
		 * Returns a boolean indicating if the input item is in the breadcrumb.
		 * 
		 * @since 2.0.3
		 */
		hasItem: function(item) {
			var t = this, breadcrumb = t.getBreadcrumb();
			var breadcrumbData = breadcrumb.getData();
			if (breadcrumbData) {
				for ( var i in breadcrumbData) {
					var bread = breadcrumbData[i];
					if (bread && bread.item && bread.item.id == item.id && bread.item.declaredClass && bread.item.declaredClass == item.declaredClass) {
						return true;
					}
				}
			}
			return false;
		}
	});
});
