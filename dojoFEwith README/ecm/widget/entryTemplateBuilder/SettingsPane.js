/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/array",
	"dojo/_base/lang",
	"dojo/dom-construct",
	"dojo/aspect",
	"dojo/keys",
	"dojo/dom-class",
	"dijit/_Widget",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/form/Button",
	"dijit/layout/ContentPane",
	"ecm/LoggerMixin",
	"ecm/MessagesMixin",
	"ecm/model/Repository",
	"ecm/model/ContentClass",
	"ecm/model/EntryTemplate",
	"ecm/widget/HoverHelp",
	"idx/layout/BorderContainer",
	"ecm/widget/TitlePane",
	"dojo/text!./templates/SettingsPane.html"
],

function(declare, //
array, //
lang, //
domConstruct, //
aspect, //
keys, //
domClass, //
_Widget, //
_TemplatedMixin, //
_WidgetsInTemplateMixin, //
Button, //
ContentPane, //
LoggerMixin, //
MessagesMixin, //
Repository, //
ContentClass, //
EntryTemplate, //
HoverHelp, //
BorderContainer, //
TitlePane, //
template) {

	/**
	 * @name ecm.widget.entryTemplateBuilder.SettingsPane
	 * @class Provides a widget that has the entry template settings.
	 * @augments dijit._Widget
	 * @since 2.0.3
	 */
	return declare("ecm.widget.entryTemplateBuilder.SettingsPane", [
		_Widget,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		LoggerMixin,
		MessagesMixin
	], {
		/** @lends ecm.widget.entryTemplateBuilder.SettingsPane */

		templateString: template,
		widgetsInTemplate: true,

		/**
		 * Instance of {@link ecm.model.Repository}.
		 */
		repository: null,

		/**
		 * Instance of {@link ecm.model.ContentClass}.
		 */
		contentClass: null,

		/**
		 * Array of label and pane objects to add to this page.
		 */
		data: null,

		/**
		 * Instance of {@link ecm.model.EntryTemplate}.
		 */
		entryTemplate: null,

		/**
		 * Post create.
		 */
		postCreate: function() {
			this.logEntry("postCreate");
			this.inherited(arguments);
			if (this.data && this.data.length > 0 && this.entryTemplate) {
				this._renderData();
			}
			this.watch("data", lang.hitch(this, function() {
				if (this.data && this.data.length > 0 && this.entryTemplate) {
					this._renderData();
				}
			}));
			this.watch("entryTemplate", lang.hitch(this, function() {
				if (this.data && this.data.length > 0 && this.entryTemplate) {
					this._renderData();
				}
			}));
			this.logExit("postCreate");
		},

		/**
		 * Destroy.
		 */
		destroy: function() {
			this.inherited(arguments);
			this.data = null;
			if (this._titlePanes) {
				for ( var i in this._titlePanes) {
					this._titlePanes[i].destroy();
					this._titlePanes[i] = null;
				}
				this._titlePanes = null;
			}
			if (this._panes) {
				for ( var i in this._panes) {
					this._panes[i].destroy();
					this._panes[i] = null;
				}
				this._panes = null;
			}
		},

		/**
		 * @private Renders the data on the screen. Loops through the data and creates the navigation nodes and
		 *          container panes.
		 */
		_renderData: function() {
			if (this.data) {
				var firstNavNode = null;
				this._panes = [];
				this._titlePanes = [];
				array.forEach(this.data, function(dataItem, i) {
					if (dataItem.pane) {
						var pane = this._createDataPane(dataItem, i);
						if (pane) {
							this._addListeners(pane);
							this._panes.push(pane);
							var heading = this._createDataHeading(dataItem, i);
							this._titlePanes.push(heading);
							this.contentContainer.appendChild(heading.domNode);
							heading.startup();
							pane.startup();
							heading.addChild(pane);
						}
					}
					if (dataItem.label) {
						var node = this._createNavigationNode(dataItem, i);
						if (firstNavNode == null) {
							firstNavNode = node;
						}
						this.navigationList.appendChild(node);
					}
				}, this);
				if (firstNavNode != null) {
					this._selectNavigationNode(firstNavNode);
				}
				this._afterCreateDataPanes();
			}
		},

		/**
		 * @private Creates the heading.
		 */
		_createDataHeading: function(dataItem, index) {
			var node = new TitlePane({
				"class": "contentHeading",
				"id": this.id + "_pane_" + index,
				title: dataItem.label
			});
			if (dataItem["class"]) {
				domClass.add(node.domNode, dataItem["class"]);
			}
			if (dataItem["hoverHelp"]) {
				var span = domConstruct.create("span");
				span.appendChild(document.createTextNode(dataItem.label));
				var hoverHelp = new HoverHelp({
					message: dataItem["hoverHelp"]
				});
				hoverHelp.startup();
				node.setHoverHelp(hoverHelp);
				span.appendChild(hoverHelp.domNode);
				node.set("title", span);
			}
			node._suffix = index;
			return node;
		},

		/**
		 * @private Creates the data pane to display in the container.
		 */
		_createDataPane: function(dataItem, index) {
			var widgetReq = dataItem.pane.split('.').join('/');
			var obj = null;
			var params = {
				entryTemplate: this.entryTemplate
			};
			if (this.repository) {
				params.repository = this.repository;
			}
			require([
				widgetReq
			], function(cls) {
				obj = new cls(params);
			});
			obj._suffix = index;
			domClass.add(obj.domNode, "contentData");
			return obj;
		},

		/**
		 * @private Add listeners to the data pane.
		 */
		_addListeners: function(dataPane) {
			if (dataPane.onHidePane) {
				this.own(aspect.after(dataPane, "onHidePane", lang.hitch(this, function(hide) {
					var titlePane = this._getTitlePane(dataPane._suffix);
					if (titlePane) {
						if (hide) {
							domClass.add(titlePane.domNode, "dijitHidden");
						} else {
							domClass.remove(titlePane.domNode, "dijitHidden");
						}
					}
					var children = this.navigationList.getElementsByTagName("li");
					for (var i = 0; i < children.length; i++) {
						var link = children[i];
						if (link._suffix == dataPane._suffix) {
							if (hide) {
								domClass.add(link, "dijitHidden");
							} else {
								domClass.remove(link, "dijitHidden");
							}
							break;
						}
					}
				}), true));
			}
			if (dataPane.onFieldChange) {
				this.own(aspect.after(dataPane, "onFieldChange", lang.hitch(this, "onFieldChange")));
			}
			if (dataPane.onSetContentClass) {
				this.own(aspect.after(dataPane, "onSetContentClass", lang.hitch(this, function(contentClass) {
					this.contentClass = contentClass;
					array.forEach(this._panes, function(pane) {
						if (pane.setContentClass) {
							pane.setContentClass(contentClass);
						}
					});
					this.onSetContentClass(this.contentClass); // Send out the message to the builder
				}), true));
			}
			if (dataPane.onSetOriginalContentClass) {
				this.own(aspect.after(dataPane, "onSetOriginalContentClass", lang.hitch(this, function(originalContentClass) {
					this.onSetOriginalContentClass(originalContentClass); // Send out the message to the builder
				}), true));
			}
			if (dataPane.onChangeRepository) {
				this.own(aspect.after(dataPane, "onChangeRepository", lang.hitch(this, function(repository) {
					this.repository = repository;
					array.forEach(this._panes, function(pane) {
						if (pane.setRepository) {
							pane.setRepository(repository);
						}
					});
					this.onChangeRepository(this.repository);
				}), true));
			}
			if (dataPane.onChangeType) {
				this.own(aspect.after(dataPane, "onChangeType", lang.hitch(this, function(type) {
					array.forEach(this._panes, function(pane) {
						if (pane.setType) {
							pane.setType(type);
						}
					});
				}), true));
			}
			if (dataPane.onOpenDesigner) {
				this.own(aspect.after(dataPane, "onOpenDesigner", lang.hitch(this, "onOpenDesigner")));
				this.own(aspect.after(dataPane, "onClearDesigner", lang.hitch(this, "onClearDesigner")));
			}
			if (dataPane.onChangeDestination) {
				this.own(aspect.after(dataPane, "onChangeDestination", lang.hitch(this, function(destination) {
					array.forEach(this._panes, function(pane) {
						if (pane.setDestination) {
							pane.setDestination(destination);
						}
					});
				}), true));
			}
		},

		/**
		 * Fired when the content class is set and sends around a cloned content class with some modifications from the
		 * builder.
		 */
		onSetContentClass: function(contentClass) {
		},

		/**
		 * Fired when the content class is set and sends around the original content class from the repository. It has
		 * no ET settings applied.
		 */
		onSetOriginalContentClass: function(originalContentClass) {
		},

		/**
		 * Fired when the repository is changed.
		 */
		onChangeRepository: function(repository) {
		},

		/**
		 * Fired when the layout designer should be opened in the view.
		 */
		onOpenDesigner: function() {
		},

		/**
		 * Fired when the layout designer should cleared of any existing layout information.
		 */
		onClearDesigner: function() {
		},

		/**
		 * Called to update the attribute definition meta-data from the designer settings.
		 * 
		 * @param contentClass
		 *            AN {@link ecm.model.ContentClass} object with updated attribute meta-data.
		 */
		updateContentClass: function(contentClass) {
			array.forEach(this._panes, function(pane) {
				if (pane.updateContentClass) {
					pane.updateContentClass(contentClass);
				}
			});
		},

		/**
		 * Called to enable/disable the Clear layout button on the properties pane.
		 * 
		 * @param True
		 *            if the clear layout button should be disabled.
		 */
		setClearLayout: function(disabled) {
			array.forEach(this._panes, function(pane) {
				if (pane.setClearLayout) {
					pane.setClearLayout(disabled);
				}
			});
		},

		/**
		 * Called to reset the selected content class settings on the properties pane.
		 */
		resetContentClass: function() {
			array.forEach(this._panes, function(pane) {
				if (pane.resetContentClass) {
					pane.resetContentClass();
				}
			});
		},

		/**
		 * @private Called after all the data panes are first created.
		 */
		_afterCreateDataPanes: function() {
			// Since content class is async, set content class if the onSetContentClass missed setting it on a subsequent pane.
			array.some(this._panes, function(pane) {
				if (pane.onSetContentClass && pane.contentClass) {
					this.contentClass = pane.contentClass;
					array.forEach(this._panes, function(pane) {
						if (pane.setContentClass) {
							pane.setContentClass(this.contentClass);
						}
					});
					return true; // Done.
				}
			}, this);
		},

		/**
		 * @private Creates the navigation node to display in the left navigation.
		 */
		_createNavigationNode: function(dataItem, index) {
			var node = domConstruct.create("li", {
				"class": "navListItem",
				"tabindex": 0,
				"id": this.id + "_nav_" + index,
				"innerHTML": dataItem.label
			});
			if (dataItem["class"]) {
				domClass.add(node, dataItem["class"]);
			}
			node._suffix = index;

			var self = this;
			this.own(aspect.after(node, "onclick", function(evt) {
				self._selectNavigationNode(evt.target);
				self._selectContainerPane(this._suffix);
			}, true));
			this.own(aspect.after(node, "onkeypress", function(evt) {
				if (evt.type != "click" && evt.charCode == keys.SPACE) {
					self._selectNavigationNode(evt.target);
					self._selectContainerPane(this._suffix);
				}
			}, true));

			return node;
		},

		/**
		 * @private Repositions the container scrolling the header with the input suffixId into view.
		 */
		_selectContainerPane: function(suffixId) {
			var titlePane = this._getTitlePane(suffixId);
			if (titlePane) {
				if (!titlePane.open) {
					titlePane.toggle();
				}
				this.scrollableContainer.domNode.scrollTop = titlePane.domNode.offsetTop;
				titlePane.domNode.focus();
			}
		},

		/**
		 * @private Returns the title pane with the input suffix.
		 */
		_getTitlePane: function(suffixId) {
			for (var i = 0; i < this._titlePanes.length; i++) {
				var titlePane = this._titlePanes[i];
				if (suffixId == titlePane._suffix) {
					return titlePane;
				}
			}
			return null;
		},

		/**
		 * @private Selects the input navigation node.
		 */
		_selectNavigationNode: function(navNode) {
			var children = this.navigationList.getElementsByTagName("li");
			for (var i = 0; i < children.length; i++) {
				var link = children[i];
				if (navNode && link.id == navNode.id) {
					domClass.add(link, "selected");
				} else {
					domClass.remove(link, "selected");
				}
			}
		},

		/**
		 * Fired when a field changes value.
		 */
		onFieldChange: function() {
		},

		/**
		 * Returns messages array.
		 */
		getMessages: function() {
			var messageList = [];
			if (this._panes) {
				array.forEach(this._panes, function(pane) {
					if (pane.getMessages) {
						var messages = pane.getMessages();
						if (messages) {
							array.forEach(messages, function(message) {
								messageList.push(message);
							}, this);
						}
					}
				}, this);
			}
			return messageList;
		},

		/**
		 * Resize.
		 */
		resize: function() {
			this.borderContainer.resize();
		},

		/**
		 * Calls each pane asking it to load the model with its screen data.
		 */
		loadModel: function() {
			array.forEach(this._panes, function(pane) {
				if (pane.loadModel) {
					pane.loadModel();
				}
			});
		}
	});
});
