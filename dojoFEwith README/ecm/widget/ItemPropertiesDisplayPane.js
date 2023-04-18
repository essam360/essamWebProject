/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/array",
	"dojo/_base/lang",
	"dojo/_base/query",
	"dojo/_base/event",
	"dojo/dom-class",
	"dojo/dom-construct",
	"dojo/dom-geometry",
	"dojo/dom-style",
	"dojo/aspect",
	"dojo/Deferred",
	"dojox/uuid/generateRandomUuid",
	"dijit/focus",
	"dijit/_Contained",
	"dijit/_Widget",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/layout/ContentPane",
	"dijit/layout/BorderContainer",
	"ecm/model/_itemUtils",
	"ecm/widget/PropertyGrid",
	"idx/layout/TitlePane",
	"idx/form/Link",
	"idx/html",
	"../Messages",
	"../MessagesMixin",
	"../LoggerMixin",
	"../model/AttributeDefinition",
	"../model/ContentItem",
	"../model/Desktop",
	"../model/SearchTemplate",
	"../model/WorkItem",
	"./TeamList",
	"./ChildComponentSelector",
	"./ContentListDropDownDialog",
	"./ItemPreviewPane",
	"./ItemPropertiesPane",
	"./ContentListEditPane",
	"dojo/text!./templates/ItemPropertiesDisplayPane.html"
],

function(declare, //
array, //
lang, //
query, //
event, //
domClass, //
domConstruct, //
domGeom, //
domStyle, //
aspect, //
Deferred, //
generateRandomUuid,//
focus, //
_Contained, //
_Widget, //
_TemplatedMixin, //
_WidgetsInTemplateMixin, //
ContentPane, //
BorderContainer, //
ItemUtils, //
PropertyGrid, //
TitlePane, //
Link, //
idxHtml, //
Messages, //
MessagesMixin, //
LoggerMixin, //
AttributeDefinition, //
ContentItem, //
Desktop, //
SearchTemplate, //
WorkItem, //
TeamList, //
ChildComponentSelector, //
ContentListDropDownDialog, //
ItemPreviewPane, //
ItemPropertiesPane, //
ContentListEditPane, //
template) {

	/**
	 * @name ecm.widget.ItemPropertiesDisplayPane
	 * @class Provides a widget that displays a read-only view of the properties for an item.
	 * @augments dijit._Widget
	 */
	var ItemPropertiesDisplayPane = declare("ecm.widget.ItemPropertiesDisplayPane", [
		_Widget,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		_Contained,
		MessagesMixin,
		LoggerMixin
	], {
		/** @lends ecm.widget.ItemPropertiesDisplayPane.prototype */

		templateString: template,
		widgetsInTemplate: true,

		/**
		 * Boolean indicating if the system properties should be shown. Setting this to false will collapse the system
		 * properties view, but will not remove them entirely from the view.
		 */
		showSystemProps: true,

		/**
		 * Boolean indicating if the system properties should be rendered. Setting this to false will remove system
		 * properties from the view.
		 */
		renderSystemProps: true,

		/**
		 * Boolean indicating if the preview should be shown.
		 */
		showPreview: true,
		/**
		 * @private The item to show.
		 */
		_item: null,

		_resizeHandle: null,

		/**
		 * A string value of the CommonPropertiesPane class to be created. This allows plugin writers to provide a
		 * custom CommonPropertiesPane widget.
		 * 
		 * @since 2.0.2
		 */
		commonPropertiesPaneClass: "ecm/widget/CommonPropertiesPane",

		/**
		 * Boolean indicating if the edit function is enabled.
		 */
		allowEdit: false,

		postCreate: function() {
			this.logEntry("postCreate");
			this.inherited(arguments);

			this._separator = ecm.model.desktop.valueFormatter.getSeparator();
			this.sysPropsExpanded = this.showSystemProps;

			// Block right-click event, so the browser doesn't show an annoying right-click window
			this.connect(this.domNode, "oncontextmenu", function(evt) {
				event.stop(evt);
				return false;
			});

			if (this.getShowPreview()) {
				if (this.previewNode && this.previewNode.domNode) {
					domStyle.set(this.previewNode.domNode, "display", "");
					// Resize the properties pane when the preview pane changes size.
					this.connect(this.previewNode, "onCompleteRendering", lang.hitch(this, function() {
						this.resize();
					}));
				}
			} else {
				if (this.previewNode && this.previewNode.domNode)
					domStyle.set(this.previewNode.domNode, "display", "none");
			}

			if (this.allowEdit) {
				this.connect(this.previewPane, "onCompleteRendering", lang.hitch(this, function() {
					this.resize();
				}));
			}

			// update when the item is changed
			this.connect(ecm.model.desktop, "onChange", function(modelObject) {
				if (this._item && lang.isArray(modelObject)) {
					array.forEach(modelObject, function(changedModel, i) {
						if (this._item.id == changedModel.id) {
							if (changedModel.deleted) {
								this.setItem(null);
								this._toggleItemEditPane(false);
								this._showItemProperties(false);
							} else {
								if (this._item && this._item.retrieveAttributes) {
									// Ignore updates while saving.
									if (this.propertiesPane && this.propertiesPane._executingItemSave)
										return;
									this.logDebug("onChange", "item has been changed in the model, reload properties");
									if (this._item.repository && this._item.repository.type == "od"
											&& this._item.isInstanceOf && this._item.isInstanceOf(SearchTemplate)) {
										this._addODSearchTemplateCustomProperties(this._item.name);
										if (this.getShowPreview()) {
											this.previewNode.setItem(this._item);
										} else {
											this.previewNode.setItem(null);
										}
									} else {
										this._retrievedAttributes();
									}
								}
							}
						}
					}, this);
				}
			});

			this.connect(ecm.model.desktop, "logoff", lang.hitch(this, function() {
				this._toggleItemEditPane(false);
				this._showItemProperties(false);
			}));

			this._showItemProperties(true);

			this.logExit("postCreate");
		},

		_retrievedAttributes: function() {
			// Updated item responses may contain only search result properties. If there are no system properties,
			// or hidden properties are missing, then retrieve the other attributes (not applicable to OnDemand items)
			if ((this._item.repository && this._item.repository.type == "od")
					|| (this._hasSystemProperties(this._item) == this._hasSystemPropertiesDefinedInAdmin(this._item)) && !this._missingHiddenProperties(this._item)) {
				delete this.handlingRetrieveOnChange;
				this.updateView();
				if (this.getShowPreview()) { // show preview here due to after checkin, then need to update the image
					this.previewNode.setItem(this._item);
				} else {
					this.previewNode.setItem(null);
				}
			} else {
				// Prevent a loop if no system properties are retrieved.
				if (this.handlingRetrieveOnChange) {
					delete this.handlingRetrieveOnChange;
					this.updateView(); // there must be no system properties for this item, let's just show the data we got
					if (this.getShowPreview()) { // show preview here after checkin, then need to update the image
						this.previewNode.setItem(this._item);
					} else {
						this.previewNode.setItem(null);
					}
				} else {
					this.handlingRetrieveOnChange = true;
					this._item.retrieveAttributes(null, true, false, lang.hitch(this, this._retrieveAttributesFailed));
				}
			}
		},

		/**
		 * @private Displays the error message when retrieve attributes fails.
		 */
		_retrieveAttributesFailed: function(response, errorMessages) {
			if (errorMessages && errorMessages.length > 0) {
				var message;
				var errorMessage = errorMessages[0];
				var adminResponse = (errorMessage.adminResponse && errorMessage.adminResponse.length > 0) ? ("<br/><br/>" + errorMessage.adminResponse) : "";
				if (errorMessage.explanation && errorMessage.explanation.length > 0) {
					if (errorMessage.userResponse && errorMessage.userResponse.length > 0) {
						message = errorMessage.explanation + "<br/><br/>" + errorMessage.userResponse + adminResponse;
					} else {
						message = errorMessage.explanation + adminResponse;
					}
				} else {
					if (errorMessage.userResponse && errorMessage.userResponse.length > 0) {
						message = errorMessage.userResponse + adminResponse;
					} else {
						message = "";
					}
				}
				var type;
				//collapse and disable the title panes if no items are set
				if (this._titlePanes) {
					for ( var i in this._titlePanes) {
						var titlePane = this._titlePanes[i];
						if (titlePane) {
							titlePane.collapsible = false;
							if ((this._titlePane && titlePane == this._titlePane) || titlePane == this._systemTitlePane) {
								if (!titlePane.open)
									titlePane.toggle();
								domStyle.set(titlePane.hideNode, "display", "none");
							} else
								domStyle.set(titlePane.domNode, "display", "none");
						}
					}
					type = "first";
				} else {
					type = "only";
				}
				this._displayMessage(type, message || ecm.messages.no_item_selected);
			}
		},

		/**
		 * @private Returns true if the item has system properties.
		 */
		_hasSystemProperties: function(item) {
			var hasSysProps = false;
			if (item) {
				if (item.repository && (item.repository._isOnDemand() || item.repository._isBox() || (item.repository._isP8() && item.isInstanceOf && item.isInstanceOf(ecm.model.WorkItem)))) {
					if (item.attributeSystemProperty) {
						for ( var i in item.attributeSystemProperty) {
							hasSysProps = true; // has at least one system property
							break;
						}
					}
				} else {
					var sysProperties = item.isFolder() ? item.repository.folderSystemProperties : item.repository.documentSystemProperties;
					for ( var sysPropKey in item.attributeSystemProperty) {
						if (array.indexOf(sysProperties, sysPropKey) != -1) {
							hasSysProps = true;
							break;
						}
					}
				}
			}
			return hasSysProps;
		},

		/**
		 * @private Returns true if there is system properties defined in ICN admin for the repository
		 */
		_hasSystemPropertiesDefinedInAdmin: function(item) {
			var hasSysPropDefines = false;
			if (item && item.repository) {
				var sysProperties = item.isFolder() ? item.repository.folderSystemProperties : item.repository.documentSystemProperties;
				if (sysProperties && sysProperties.length > 0) {
					hasSysPropDefines = true;
				}
			}
			return hasSysPropDefines;
		},

		/**
		 * @private Returns true if the item class includes hidden properties, but they are missing from the item.
		 */
		_missingHiddenProperties: function(item) {
			var missingHiddenProps = false;
			if (item) {
				// The content class should already be retrieved when this is called.
				var contentClass = item.getContentClass();
				if (contentClass.attributeDefinitions) {
					missingHiddenProps = !array.every(contentClass.attributeDefinitions, function(attrDef) {
						// Return true if not hidden or the hidden attribute is present on the item.
						return !attrDef.hidden || item.hasAttribute(attrDef.id);
					});
				}
			}
			return missingHiddenProps;
		},

		/**
		 * @private Returns true if the item is a teamspace.
		 */
		_isTeamspace: function(item, checkForTeamspaceFolder) {
			if (checkForTeamspaceFolder)
				return item && ((item.isInstanceOf && item.isInstanceOf(ecm.model.Teamspace)) || (item.template == "ICMTeamspace") || (item.template == "ICMTeamspaceTemplate"));
			else
				return item && (item.isInstanceOf && item.isInstanceOf(ecm.model.Teamspace));
		},

		/**
		 * Destroys the widget.
		 */
		destroy: function() {
			if (this._titlePanes) {
				for ( var i in this._titlePanes) {
					this._titlePanes[i].destroy();
				}
				delete this._titlePanes;
			}
			if (this._childComponentSelectors) {
				for ( var i in this._childComponentSelectors) {
					this._childComponentSelectors[i].destroy();
					this._childComponentSelectors[i] = null;
				}
				delete this._childComponentSelectors;
			}
			if (this._contentListDropDownDialog) {
				this._contentListDropDownDialog.destroy();
				delete this._contentListDropDownDialog;
			}
			if (this._editLink) {
				this._editLink.destroy();
				delete this._editLink;
			}
			if (this._connectSocialCounts) {
				this.disconnect(this._connectSocialCounts);
				delete this._connectSocialCounts;
			}
			if (this.propertiesPane) {
				this.propertiesPane.destroyRecursive();
				delete this.propertiesPane;
			}

			this.inherited(arguments);
		},

		/**
		 * Sets the item for this pane.
		 * 
		 * @param item
		 *            Instance of {@link ecm.model.Item}, {@link ecm.model.Favorite}, or {@link ecm.model.Teamspace}.
		 */
		setItem: function(item) {
			var methodName = "setItem";
			this.logEntry(methodName, item);

			if (item) {
				if (item.isInstanceOf && item.isInstanceOf(ecm.model.Favorite)) {
					this._item = item.item;
					if (!this._item) {
						item.retrieveFavorite(lang.hitch(this, function(obj) {
							this._item = obj;
							this._setItemConnections(this._item);
							if (item.type == "search" && this._item.repository.type == "od") { // don't retrieve od search template
								this._addODSearchTemplateCustomProperties(this._item.name);
								if (this.getShowPreview()) {
									this.previewNode.setItem(this._item);
								} else {
									this.previewNode.setItem(null);
								}
							} else if (this._isTeamspace(this._item, false) || (this._hasSystemProperties(this._item) == this._hasSystemPropertiesDefinedInAdmin(this._item))) {
								this.updateView();
								if (this.getShowPreview()) {
									this.previewNode.setItem(this._item);
								} else {
									this.previewNode.setItem(null);
								}
							} else {
								this._item.retrieveAttributes(null, true, false, lang.hitch(this, this._retrieveAttributesFailed));
								this._showItemProperties(true);
							}
						}));
					} else {
						this._setItemConnections(this._item);
						if (item.type == "search" && this._item.repository.type == "od") { // don't retrieve od search template
							this._addODSearchTemplateCustomProperties(this._item.name);
							if (this.getShowPreview()) {
								this.previewNode.setItem(this._item);
							} else {
								this.previewNode.setItem(null);
							}
						} else if (this._isTeamspace(this._item, false) || (this._hasSystemProperties(this._item) == this._hasSystemPropertiesDefinedInAdmin(this._item))) {
							this.updateView();
							if (this.getShowPreview()) {
								this.previewNode.setItem(this._item);
							} else {
								this.previewNode.setItem(null);
							}
						} else {
							this._item.retrieveAttributes(null, true, false, lang.hitch(this, this._retrieveAttributesFailed));
							this._showItemProperties(true);
						}
					}
				} else {
					this._item = item;
					this._setItemConnections(this._item);
					this._item.retrieveAttributes(null, true, false, lang.hitch(this, this._retrieveAttributesFailed));
					this._showItemProperties(true);
				}
			} else {
				// item here is null or undefined
				delete this._item;
				this._setItemConnections(null);
				if (this.getShowPreview()) {
					this.previewNode.setItem(null);
				}

				//this will make the doc info pane open, but nothing is displayed.
				//without this line, it will show "No item is selected"
				//this._showItemProperties(false);

				// give the user the opportunity to save unsaved data
				// by simulating the close of the properties edit pane
				if (this.propertiesPane != null) {
					this.propertiesPane.onClose();
				}
				// hide the properties edit pane
				this._toggleItemEditPane(false);

				//collapse and disable the title panes if no items are set
				if (this._titlePanes) {
					for ( var i in this._titlePanes) {
						var titlePane = this._titlePanes[i];
						if (titlePane) {
							// Destroy titlePane child node.
							var children = titlePane.getChildren();
							if (children) {
								for ( var j in children) {
									var child = children[j];
									if (child) {
										titlePane.removeChild(child);
										child.destroy();
									}
								}
							}
						}
					}

					this.displayNoItemSelected("first");
				} else {
					this.displayNoItemSelected("only");
				}
			}
			this.logExit(methodName);
		},

		/**
		 * @private
		 */
		_setItemConnections: function(item) {
			if (this._connectSocialCounts) {
				this.disconnect(this._connectSocialCounts);
				this._connectSocialCounts = null;
			}
			if (item) {
				this._connectSocialCounts = this.connect(item, "onCollaborate", "_retrievedAttributes"); // re-display the properties to get the latest social counts
			}
		},

		/**
		 * Returns the item.
		 * 
		 * @return Instance of {@link ecm.model.Item}, {@link ecm.model.Favorite}, or {@link ecm.model.Teamspace}.
		 */
		getItem: function() {
			return this._item;
		},

		/**
		 * Returns boolean to determine if preview pane should be displayed.
		 * 
		 * @return Boolean indicating if the preview should be shown.
		 */
		getShowPreview: function() {
			if (this._item && !this._item.hasPrivilege("privViewDoc") && this._item.mimetype != "folder")
				return false;
			return this.showPreview && ecm.model.desktop.enableThumbnails && this.previewNode;
		},

		/**
		 * Sets the show preview.
		 * 
		 * @param show
		 *            Boolean indicating if the preview should show.
		 */
		setShowPreview: function(show) {
			this.showPreview = show;
			if (show) {
				domStyle.set(this.previewNode.domNode, "display", "");
				if (ecm.model.desktop.enableThumbnails && this._item && this._item.hasPrivilege("privViewDoc")) {
					this.previewNode.setItem(this._item);
				}
			} else {
				domStyle.set(this.previewNode.domNode, "display", "none");
			}
		},

		/**
		 * Displays a message and disables all the title panes.
		 * 
		 * @param type
		 *            String value to pass into <code>domConstruct.place</code>. For example, <code>"first"</code>
		 *            or <code>"only"</code>.
		 */
		_displayMessage: function(type, message) {
			var nodes = query(".ecmItemPropertiesDisplayNoItemText", this.propertiesNode);
			if (!nodes || (nodes && nodes.length == 0)) {
				var textNode = domConstruct.create("div", {
					innerHTML: message
				});
				domClass.add(textNode, "ecmItemPropertiesDisplayNoItemText");
				domConstruct.place(textNode, this.propertiesNode, type);
			} else {
				nodes[0].innerHTML = message;
			}
			if (this._editLinkNode)
				domStyle.set(this._editLinkNode, "display", "none");
		},

		/**
		 * Displays a text that no items are selected and disables all the title panes.
		 * 
		 * @param type
		 *            String value to pass into <code>domConstruct.place</code>. For example, <code>"first"</code>
		 *            or <code>"only"</code>.
		 */
		displayNoItemSelected: function(type) {
			this._displayMessage(type, ecm.messages.no_item_selected);
		},

		/**
		 * Returns the formatted value for the input attribute definition.
		 * 
		 * @param attributeDefinition
		 *            Instance of {@link ecm.model.AttributeDefinition}.
		 * @return The formatted value.
		 */
		getItemAttributeValue: function(attributeDefinition) {
			// Note: We're not using getDisplayValue as this will give the value formatted for display
			// in the content list or other table.  Instead, we'll format the value according to the attribute
			// definition, similar to properties editor
			var unformattedValue = this._item.getValue(attributeDefinition.id);
			var formattedValue;

			// If there's a choice list, use it to look up the value's display name
			var choiceList;
			if (this._item.attributeChoiceLists && (attributeDefinition.id in this._item.attributeChoiceLists))
				choiceList = this._item.attributeChoiceLists[attributeDefinition.id].choiceList;
			else
				choiceList = attributeDefinition.getChoiceList();

			if (choiceList && unformattedValue != null) {
				formattedValue = unformattedValue;
				var newValue = [];
				ItemUtils.lookupChoiceList(unformattedValue, choiceList, newValue);
				if (newValue && newValue.length >= 1) {
					if (lang.isArray(formattedValue))
						formattedValue = newValue;
					else
						formattedValue = newValue[0];
				}
			} else {
				var dataType = attributeDefinition.dataType;
				var format = attributeDefinition.format;
				var valueFormatter = ecm.model.desktop.valueFormatter;

				// Hide the time portion of date time properties for P8 if configured in the desktop.
				if (ecm.model.desktop.enableHideTimePortion && attributeDefinition.repositoryType == "p8" && attributeDefinition.system == false && attributeDefinition.dataType == "xs:timestamp" && valueFormatter.formatTimestampHideTime) {
					formattedValue = valueFormatter.formatTimestampHideTime(unformattedValue, this._item.attributeValueTimeZoneOffsets ? this._item.attributeValueTimeZoneOffsets[attributeDefinition.id] : null);
				} else {
					formattedValue = valueFormatter.formatValue(unformattedValue, dataType, format, this._item.attributeValueTimeZoneOffsets ? this._item.attributeValueTimeZoneOffsets[attributeDefinition.id] : null);
				}
			}
			return formattedValue;
		},

		/**
		 * Determines whether to show a specific attribute definition for the item.
		 * 
		 * @param attributeDefinition
		 *            Instance of {@link ecm.model.AttributeDefinition}.
		 * @param item
		 *            The item to be displayed
		 */
		isItemPropertyShown: function(attributeDefinition, item) {
			return !attributeDefinition.hidden && !attributeDefinition.system && !(item && item.isInstanceOf && item.isInstanceOf(ecm.model.ContentItem) && item.isAttributeHidden(attributeDefinition.id));
		},

		/**
		 * Determines whether the current item is read-only. The editing capabilities for this properties display pane
		 * will be turned off if true is returned.
		 * 
		 * @param item
		 *            The item to be displayed
		 * @since 2.0.2
		 */
		isItemReadOnly: function(item) {
			var methodName = "isItemReadOnly";
			var _isReadOnly = true;
			if (item.repository.type == "box"){
				var propertiesReadOnly = this._arePropertiesReadOnly(item);
				var metadataReadOnly = this.isMetadataReadOnly(item);
				_isReadOnly = (propertiesReadOnly && metadataReadOnly);
			}
			else {
				_isReadOnly = this._arePropertiesReadOnly(item)
			}
			return _isReadOnly;
		},
		
		/**
		 * Determines whether the properties of the current item are read-only.
         * 
		 * @private
		 * @param item
		 *            The item to be displayed
		 * @since 3.0.1
		 */
		_arePropertiesReadOnly: function(item){
			var methodName = "_arePropertiesReadOnly";
			var propertiesReadOnly = true;
			if (this.allowEdit && !this._isTeamspace(item, true)) {
				var hasEditPriv = item.repository.type == "cm" ? (item.hasPrivilege("privEditProperties") && item.hasPrivilege("privCheckOutDoc")) : item.hasPrivilege("privEditProperties");
				this.logDebug(methodName, "item edit priv: " + hasEditPriv + " - (" + item.hasPrivilege("privEditProperties") + "," + item.hasPrivilege("privCheckOutDoc") + ")");
				var isCheckedOutByOther = (item.locked && item.lockedUser) ? (item.repository.userId.toUpperCase() != item.lockedUser.toUpperCase()) : false;
				this.logDebug(methodName, "checkedOutByOther: " + (isCheckedOutByOther ? "true - " + item.lockedUser : "false"));
				propertiesReadOnly = (!hasEditPriv || isCheckedOutByOther) ? true : false;
			}
			return propertiesReadOnly;
		},
		
		isMetadataReadOnly: function(item){
			var _metadataReadOnly = true;
			if (item.repository.type == "box"){
				if (this._item.isFolder()){
					_metadataReadOnly = !this._item.hasPrivilege("privAddToFolder");
				}
				else if (this._item.locked){
					_metadataReadOnly = !this._item.hasPrivilege("privCheckInDoc");
				}
				else {
					_metadataReadOnly = !this._item.hasPrivilege("privCheckOutDoc");
				}
			}
			return _metadataReadOnly;
		},

		/**
		 * Updates the view with the item's data.
		 */
		updateView: function() {
			var methodName = "updateView";
			this.logEntry(methodName);
			if (this._isTeamspace(this._item, false)) {
				this._item.repository.retrieveTeamspaceById(this._item.id, this._item.type, lang.hitch(this, function(teamspace) {
					this._item = teamspace;
					this._updateTeamspaceView();
				}));
			} else {
				if (this._systemTitlePane) {
					domStyle.set(this._systemTitlePane, "display", "");
				}

				var contentClass = this._item.getContentClass();
				contentClass.retrieveAttributeDefinitions(lang.hitch(this, function(attributeDefinitions, childComponentDefinitions) {
					this.logEntry("retrieveAttributeDefinitionsCallback", "edit enabled: " + this.allowEdit);
					if (!this._item) { // If the retrieveAttributeDefinitions takes a while, the item may already be null
						return;
					}
					if (this._titlePanes) {
						for ( var i in this._titlePanes) {
							this._titlePanes[i].destroy();
						}
					}
					this._titlePanes = [];

					if (this._editLinkConnect) {
						this.disconnect(this._editLinkConnect);
						this._editLinkConnect = undefined;
					}
					if (this._editLink) {
						this._editLink.destroy();
						this._editLink = undefined;
					}
					if (this._editLinkNode) {
						domConstruct.destroy(this._editLinkNode);
						this._editLinkNode = undefined;
					}

					var _isReadOnly = this.isItemReadOnly(this._item);
					this.logDebug(methodName, "isReadOnly: " + _isReadOnly);
					var arePropertiesReadOnly = this._arePropertiesReadOnly(this._item);
					this.logDebug(methodName, "arePropertiesReadOnly: " + arePropertiesReadOnly);
					var _isMetadataReadOnly = this.isMetadataReadOnly(this._item);
					this.logDebug(methodName, "isMetadataReadOnly: " + _isMetadataReadOnly);

					// Look to see if this item has an entry template associated
					var entryTemplateId = this._item.entryTemplateId;
					if (entryTemplateId && (entryTemplateId.length > 0)) {
						var entryTemplate = this._item.repository.getEntryTemplateById(entryTemplateId);
						var propertiesEntryTemplateRetrievedHandler = lang.hitch(this, function(entryTemplate) {
							if (!this._item) { // If the retrieveEntryTemplate takes a while, the item may already be null
								return;
							}
							if (!entryTemplate.isRetrieved) {
								this._setupItemProperties(this._item, contentClass, attributeDefinitions, childComponentDefinitions, _isReadOnly, null, arePropertiesReadOnly, _isMetadataReadOnly);
							} else if (entryTemplate.useForDocumentInformationProperties) {
								this._setupItemProperties(this._item, contentClass, attributeDefinitions, childComponentDefinitions, _isReadOnly, entryTemplate, arePropertiesReadOnly, _isMetadataReadOnly);
							} else {
								this._setupItemProperties(this._item, contentClass, attributeDefinitions, childComponentDefinitions, _isReadOnly, null, arePropertiesReadOnly, _isMetadataReadOnly);
							}
						});

						if (!entryTemplate.isRetrieved) {
							entryTemplate.retrieveEntryTemplate(propertiesEntryTemplateRetrievedHandler, false, true);
						} else {
							propertiesEntryTemplateRetrievedHandler(entryTemplate);
						}
					} else {
						this._setupItemProperties(this._item, contentClass, attributeDefinitions, childComponentDefinitions, _isReadOnly, null, arePropertiesReadOnly, _isMetadataReadOnly);
					}
					this.logExit("retrieveAttributeDefinitionsCallback", "");
				}), true);
			}
			this.logExit(methodName);
		},

		/**
		 * @private
		 */
		_setupItemProperties: function(item, contentClass, attributeDefinitions, childComponentDefinitions, isReadOnly, entryTemplate, propertiesReadOnly, metadataReadOnly) {
			var methodName = "_setupItemProperties";
			this.logEntry(methodName);

			if (this._item && !(this._item.isInstanceOf && this._item.isInstanceOf(ecm.model.WorkItem))) {
				this._addCustomProperties(contentClass, attributeDefinitions, childComponentDefinitions, entryTemplate);
			} else {
				this._removeAllProperties();
			}
			this._addSystemProperties(attributeDefinitions);

			if (this.allowEdit) {
				// keep the edit and readonly panes in sync with the same item
				if (this.propertiesPane != null && this._showingEdit) {
					this.propertiesPane.setItem(item, isReadOnly, entryTemplate, propertiesReadOnly, metadataReadOnly);
				}

				if (item != null && !isReadOnly) {
					this._editLink = new Link({
						label: ecm.messages.edit,
						"class": "editPropertiesLink"
					});
					this._editLinkNode = domConstruct.create("span", {
						"class": "editPropertiesLinkAction"
					});
					this._editLink.placeAt(this._editLinkNode, "end");
					this.propertiesTitlePane.titleBarNode.appendChild(this._editLinkNode, "end");

					this._editLinkConnect = this.connect(this._editLink, "onClick", lang.hitch(this, function(event) {
						this.logDebug("updateView::onClick", "toggle edit mode to editor");
						this._showingEdit = true;
						// Always retrieve the item attributes to get the current values and allow EDS to apply changes (intialExistingObject).
						item.retrieveAttributes(lang.hitch(this, function(item) {
							// Edit action onClick toggles to the edit mode
							this._toggleItemEditPane(true, item, isReadOnly, entryTemplate);
							if (this.propertiesPane.itemPropertiesPane && this.propertiesPane.itemPropertiesPane._contentClassSelectorDiv) {
								focus.focus(this.propertiesPane.itemPropertiesPane._contentClassSelectorDiv);
							}
							if (this.renderSystemProps && (this._hasSystemProperties(this._item) == this._hasSystemPropertiesDefinedInAdmin(this._item))) {
								domStyle.set(this.propertiesPane.itemPropertiesPane._systemPropertiesTitle.domNode, "display", "");
								this._showItemProperties(true);

								if (this.showSystemProps != this.propertiesPane.itemPropertiesPane._systemPropertiesTitle.open) {
									this.propertiesPane.itemPropertiesPane._systemPropertiesTitle.toggle();
									this.showSystemProps = this.propertiesPane.itemPropertiesPane._systemPropertiesTitle.open;
								}
							} else {
								domStyle.set(this.propertiesPane.itemPropertiesPane._systemPropertiesTitle.domNode, "display", "none");
							}
						}), true, false, lang.hitch(this, this._retrieveAttributesFailed));
					}));

					this._showItemProperties(true);
				}
			} else {
				this._showItemProperties(true);
				if (this._editLinkNode && this._editLinkNode.domNode) {
					domStyle.set(this._editLinkNode.domNode, "display", "none");
				}
				this._toggleItemEditPane(false);
			}
			this.logExit(methodName);
		},

		/**
		 * @private
		 */
		_showItemProperties: function(show) {
			this.logDebug("_showItemProperties", "toggle to: " + show);
			if (this.propertiesContainer && this.propertiesContainer.domNode) {
				if (show) {
					domStyle.set(this.propertiesContainer.domNode, "display", "");
					domStyle.set(this.propertiesContainer.domNode, "height", "auto"); //domStyle.set(this.propertiesContainer.domNode, "height", "100%");
				} else {
					domStyle.set(this.propertiesContainer.domNode, "display", "none");
					domStyle.set(this.propertiesContainer.domNode, "height", "0%");
				}
			}
		},

		/**
		 * @private
		 */
		_toggleItemEditPane: function(show, item, isReadOnly, entryTemplate) {
			this.logDebug("_toggleItemEditPane", "toggle to: " + show);
			this._showingEdit = show;
			if (show) { // edit pane
				// even in edit mode, the propertiesNode does not have a domNode
				// so moved to its immediate parent which does have a domNode
				if (this.propertiesNodePane && this.propertiesNodePane.domNode) {
					domStyle.set(this.propertiesNodePane.domNode, "height", "0%");
					domStyle.set(this.propertiesNodePane.domNode, "display", "none");
				}

				if (this.propertiesPane == null) {
					this.propertiesPane = new ContentListEditPane({
						commonPropertiesPaneClass: this.commonPropertiesPaneClass
					});
					this.propertiesPane.itemPropertiesDisplayPane = this;
					this.propertiesPaneEditable.domNode.appendChild(this.propertiesPane.domNode);
					this.propertiesPane.setItem(item, isReadOnly, entryTemplate);

					this.connect(this.propertiesPane, "onCancel", lang.hitch(this, function(event) {
						this.logDebug("_toggleItemEditPane::onCancel", "toggle edit mode to readOnly");
						// if selected to cancel, toggle back to readonly mode
						this._toggleItemEditPane(false);
						if (this.propertiesTitlePane) {
							focus.focus(this.propertiesTitlePane.focusNode);
						}
						this._showItemProperties(true);
						this.resize();
					}));
				}
				domStyle.set(this.propertiesPaneEditable.domNode, "height", "100%");
				domStyle.set(this.propertiesPaneEditable.domNode, "display", "");
				// Need to call resize, to allow the layout to size controls properly
				this.resize();
			} else { // display pane
				if (this.propertiesNodePane && this.propertiesNodePane.domNode) {
					domStyle.set(this.propertiesNodePane.domNode, "height", "100%");
					domStyle.set(this.propertiesNodePane.domNode, "display", "");
				}
				if (this.propertiesPaneEditable && this.propertiesPaneEditable.domNode) {
					domStyle.set(this.propertiesPaneEditable.domNode, "height", "0%");
					domStyle.set(this.propertiesPaneEditable.domNode, "display", "none");
				}
			}
		},

		/**
		 * @private
		 */
		_removeAllProperties: function() {
			while (this.propertiesNode.hasChildNodes()) {
				this.propertiesNode.removeChild(this.propertiesNode.lastChild);
			}
		},

		/**
		 * @private Updates the properties display for a teamspace.
		 */
		_updateTeamspaceView: function() {
			if (this._systemTitlePane) {
				domStyle.set(this._systemTitlePane.domNode, "display", "none");
			}

			this._titlePanes = [];
			this._titlePane = new TitlePane({
				'class': 'propertyGridTitlePane',
				'aria-label': ecm.messages.custom_properties_title,
				title: ecm.messages.custom_properties_title,
				collapsible: true
			});
			var pairs = [];

			pairs.push([
				ecm.messages.Name,
				this._item.name,
				ecm.messages.Name,
				"xs:string"
			]);
			pairs.push([
				ecm.messages.description,
				this._item.desc,
				ecm.messages.description,
				"xs:string"
			]);
			pairs.push([
				ecm.messages.modifier,
				this._item.lastModifiedUser,
				ecm.messages.modified_label,
				"xs:string"
			]);

			// Calling getLastModified in Teamspace already formats the date using the desktop date formatter, so we do not
			// need the property grid to format it again.
			pairs.push([
				ecm.messages.modified_date,
				this._item.getLastModified(),
				ecm.messages.modified_date,
				"xs:string"
			]);

			this._createLabelValue(this._titlePane, pairs);
			domConstruct.place(this._titlePane.domNode, this.propertiesNode, "only");
			this._titlePanes.push(this._titlePane);

			// Add team member list
			this._teamTitlePane = new TitlePane({
				'class': 'propertyGridTitlePane',
				'aria-label': ecm.messages.manage_teamspace_team_tab_title,
				title: ecm.messages.manage_teamspace_team_tab_title,
				collapsible: true,
				open: false
			});

			var teamList = new TeamList({
				teamspace: this._item
			});
			teamList.setTeam(this._item.team);
			this._teamTitlePane.addChild(teamList);

			domConstruct.place(this._teamTitlePane.domNode, this.propertiesNode, "last");
			this._titlePanes.push(this._teamTitlePane);
		},

		/**
		 * @private Adds the OD search template properties.
		 */
		_addODSearchTemplateCustomProperties: function(name) {
			if (this._titlePanes) {
				for ( var i in this._titlePanes) {
					this._titlePanes[i].destroy();
				}
			}
			this._titlePanes = [];
			this._titlePane = new TitlePane({
				'class': 'propertyGridTitlePane',
				'aria-label': ecm.messages.custom_properties_title,
				title: ecm.messages.custom_properties_title,
				collapsible: true
			});
			var pairs = [];
			pairs.push([
				ecm.messages.Name,
				name,
				name,
				"xs:string",
				false
			]);
			this._createLabelValue(this._titlePane, pairs);
			domConstruct.place(this._titlePane.domNode, this.propertiesNode, "only");
			this._titlePanes.push(this._titlePane);
		},

		/**
		 * @private Adds the properties and child component data.
		 */
		_addCustomProperties: function(contentClass, attributeDefinitions, childComponentDefinitions, entryTemplate) {
			var methodName = "_addCustomProperties";
			this.logEntry(methodName);
			this._titlePane = new TitlePane({
				'class': 'propertyGridTitlePane',
				'aria-label': ecm.messages.custom_properties_title,
				title: ecm.messages.custom_properties_title,
				collapsible: true
			});
			var pairs = [];

			if (this._item.repository.type != "box") {
				// Add the class name.
				pairs.push([
					ecm.messages.class_label,
					contentClass.name,
					contentClass.id + "-" + generateRandomUuid(),//defect 39178, the class name may be as same as property name. It will cause error
					"xs:string",
					false
				]); // already be encoded if overriden via UI Labels
			}

			if (entryTemplate != null) {
				var attrDefs = [];
				var attrDefsById = {};
				for ( var attrDefNdx in attributeDefinitions) {
					var attrDef = attributeDefinitions[attrDefNdx];
					// Clone the attribute definition. The content class reference is copied.
					attrDef = attrDef.clone();
					attrDefs.push(attrDef);
					// Also create a map by attribute id for faster lookup.
					attrDefsById[attrDef.id] = attrDef;
				}
				attributeDefinitions = this._applyEntryTemplateAttributes(this._item.repository, attrDefs, attrDefsById, entryTemplate);
			}

			for ( var i in attributeDefinitions) {
				var attributeDefinition = attributeDefinitions[i];
				if (this.isItemPropertyShown(attributeDefinition, this._item)) { // First show the non-system attributes
					var value = this.getItemAttributeValue(attributeDefinition);
					if (lang.isArray(value) && value.length > 1) {
						var newValue = "";
						for (var i = 0; i < value.length; i++) {
							if (i > 0) {
								newValue += this._separator + " ";
							}
							newValue += value[i];
						}
						value = newValue;
					}

					if (!AttributeDefinition.isValueEmpty(value)) {
						pairs.push([
							attributeDefinition.name,
							value,
							attributeDefinition.id,
							attributeDefinition.dataType,
							undefined,
							attributeDefinition.propertyFormatter
						]);
					}
				}
			}
			this._createLabelValue(this._titlePane, pairs);
			domConstruct.place(this._titlePane.domNode, this.propertiesNode, "only");
			this._titlePanes.push(this._titlePane);
			this.propertiesTitlePane = this._titlePane;

			//this.logDebug(methodName, "update child comp: " + childComponentDefinitions);
			if (childComponentDefinitions) {
				this.logDebug(methodName, "updating child components");
				this._childComponentSelectors = [];
				for ( var i in childComponentDefinitions) {
					var childComponentDefinition = childComponentDefinitions[i];
					var childComponentModelItem = this._item.getChildComponent(childComponentDefinition.id);
					if (childComponentModelItem && childComponentDefinition.hasAttributes()) {
						var childComponentSelector = new ChildComponentSelector({
							childComponentItem: childComponentModelItem
						//childComponentDefinition: childComponentDefinition
						});
						childComponentSelector.startup();
						this._childComponentSelectors.push(childComponentSelector);
						this.connect(childComponentSelector, "onClickReferenceAttribute", "_onClickReferenceAttribute");

						var titlePane = new TitlePane({
							parseOnLoad: false,
							'aria-label': childComponentDefinition.name,
							title: childComponentDefinition.name
						});
						this._titlePanes.push(titlePane);
						titlePane.set("content", childComponentSelector.domNode);
						this.propertiesNode.appendChild(titlePane.domNode);
					}
				}
			}

			if (this._item.templateMetadata && this._item.templateMetadata.length > 0) {
				for ( var i in this._item.templateMetadata) {
					var metadataPropertyPairs = [];
					var templateMetadata = this._item.templateMetadata[i];

					for ( var j in templateMetadata.attributeDefinitions) {
						var attributeDefinition = templateMetadata.attributeDefinitions[j];
						if (this.isItemPropertyShown(attributeDefinition, this._item)) {
							var value = templateMetadata.getDisplayValue(attributeDefinition.id);
							if (lang.isArray(value) && value.length > 1) {
								var newValue = "";
								for (var i = 0; i < value.length; i++) {
									if (i > 0) {
										newValue += this._separator + " ";
									}
									newValue += value[i];
								}
								value = newValue;
							}

							metadataPropertyPairs.push([
								attributeDefinition.label,
								value,
								attributeDefinition.id,
								attributeDefinition.dataType,
								undefined,
								attributeDefinition.propertyFormatter
							])

						}
					}

					var titlePane = new TitlePane({
						parseOnLoad: false,
						'aria-label': templateMetadata.name,
						title: templateMetadata.displayName
					});
					this._createLabelValue(titlePane, metadataPropertyPairs);
					this._titlePanes.push(titlePane);
					this.propertiesNode.appendChild(titlePane.domNode);
				}
			}
			this.logExit(methodName);
		},

		/**
		 * @private
		 */
		_applyEntryTemplateAttributes: function(repository, attributeDefs, attributeDefsById, entryTemplate) {
			this.logEntry("_applyEntryTemplateAttributes");
			if (!entryTemplate) {
				return attributeDefs;
			}

			var propsOptions = entryTemplate.propertiesOptions;
			if (!propsOptions) {
				return attributeDefs;
			}

			var entryTemplateAttrDefs = [];
			var entryTemplateAttrDefsById = {};
			var attrDef;

			// Apply the entry template attribute order and values.
			for ( var propOptionsNdx in propsOptions) {
				var propOptions = propsOptions[propOptionsNdx];
				// Get the full attribute definition for the entry template attribute.
				attrDef = attributeDefsById[propOptions.id];
				// The entry template attribute may no longer exist in the class or have out of date characteristics.
				// If the attribute is not found or the data type does not match then ignore this entry template attribute.
				if (!attrDef || (attrDef.dataType != propOptions.dataType)) {
					continue;
				}
				// Apply the entry template hidden option if it is true.
				// The entry template option does not turn off hidden if the class enables hidden.
				if (propOptions.hidden) {
					attrDef.hidden = true;
				}
				// Apply the entry template read only option if it is true.
				// The entry template option does not turn off read only if the class enables read only.
				if (propOptions.readOnly) {
					attrDef.readOnly = true;
				}
				// Apply the template required option if it is true.
				// The entry template option does not turn off required if the class enables required.
				if (propOptions.required) {
					attrDef.required = true;
				}
				entryTemplateAttrDefs.push(attrDef);
				entryTemplateAttrDefsById[attrDef.id] = attrDef;
			}

			// Now append any attribute definitions that were missing from the template.
			for ( var attrDefNdx in attributeDefs) {
				attrDef = attributeDefs[attrDefNdx];
				if (!entryTemplateAttrDefsById[attrDef.id]) {
					entryTemplateAttrDefs.push(attrDef);
					entryTemplateAttrDefsById[attrDef.id] = attrDef;
				}
			}

			this.logExit("_applyEntryTemplateAttributes");
			return entryTemplateAttrDefs;
		},

		/**
		 * Adds a new set of properties to the display.
		 */
		addCustomTitlePane: function(titlePane, propertyPairs) {
			this._createLabelValue(titlePane, propertyPairs);
			this.propertiesNode.appendChild(titlePane.domNode);
			this._titlePanes.push(titlePane);
		},

		/**
		 * Returns the array of title panes created.
		 * 
		 * @return Array of {@link idx.layout.TitlePane}.
		 */
		getTitlePanes: function() {
			return this._titlePanes;
		},

		/**
		 * @private Called when a reference attribute is clicked. Opens the drop down dialog with the reference
		 *          attribute data.
		 */
		_onClickReferenceAttribute: function(itemId, evt) {
			if (!this._contentListDropDownDialog) {
				this._contentListDropDownDialog = new ContentListDropDownDialog();
			}
			this._contentListDropDownDialog.setItem(this._item.repository, itemId, lang.hitch(this, function() {
				this._contentListDropDownDialog.show({
					position: {
						x: evt.pageX,
						y: evt.pageY
					}
				});
			}));
		},

		/**
		 * @private Adds the system properties.
		 */
		_addSystemProperties: function(attributeDefinitions) {
			if (this.renderSystemProps && this._hasSystemProperties(this._item)) {
				this._systemTitlePane = new TitlePane({
					'class': 'propertyGridTitlePane',
					'aria-label': ecm.messages.system_properties_title,
					title: ecm.messages.system_properties_title,
					open: this.sysPropsExpanded,
					collapsible: true
				});
				var pairs = [];
				if (this._item && this._item.isInstanceOf && (this._item.isInstanceOf(ecm.model.ContentItem) || this._item.isInstanceOf(ecm.model.WorkItem))) {
					var sysProperties = this._item.isFolder() ? this._item.repository.folderSystemProperties : this._item.repository.documentSystemProperties;
					for ( var index in this._item.attributeSystemProperty) {
						// P8 WorkItems have fix set of system properties and not driven by external list
						if (!this._item.repository._isP8() || !this._item.isInstanceOf(ecm.model.WorkItem)) {
							if (array.indexOf(sysProperties, index) == -1)
								continue;
						}
						if (this._item.repository._isBox() && index == "comment_count") {
							var name = this._item.getAttrLabel(index);
							var value = this._item.getDisplayValue(index);
							if (value && value != "0") {
								var params = [
									name,
									value ? value : 0,
									index,
									null,
									undefined
								];
								pairs.push(params);
							}
						} else if (!this._item.repository._isBox() && (index == "ClbDownloadCount" || index == "ClbRecommendationCount" || index == "ClbCommentCount")) {
							var name = this._item.getAttrLabel(index);
							var value = this._item.getDisplayValue(index);
							if (value && value != "0") {
								var params = [
									name,
									value ? value : 0,
									index,
									null,
									undefined
								];
								if (index == "ClbDownloadCount" || index == "ClbRecommendationCount") {
									params.push(index == "ClbDownloadCount" ? "ecm.widget.DownloadCount" : "ecm.widget.Recommendations");
									params.push({
										count: this._item.getValue(index == "ClbDownloadCount" ? "ClbDownloadCount" : "ClbRecommendationCount")
									});
								}
								pairs.push(params);
							}
						} else {
							for ( var j in attributeDefinitions) {
								var attributeDefinition = attributeDefinitions[j];
								var name = this._item.getAttrLabel(attributeDefinition.id);
								var value = this.getItemAttributeValue(attributeDefinition);
								if (attributeDefinition.id == index && value) {
									if (index == "VersionStatus" && this._item && this._item.repository && this._item.repository.type == "p8") {
										value = this._item.getDisplayValue(index);
									}
									pairs.push([
										name,
										value,
										attributeDefinition.id,
										attributeDefinition.dataType,
										undefined,
										attributeDefinition.propertyFormatter
									]);
									break;
								}
							}
						}
					}
					if (this._item.repository.type == "od") { // System properties are defined on the item only (not on the content class)
						var item = this._item;
						var attrs = item.attributes;
						if (attrs) {
							for ( var attr in attrs) {
								if (item.attributeSystemProperty[attr] && attr != "hitLength" && attr != "idValue") {
									var dataType = "xs:string";
									if (attr == "file_size") {
										item.attributeFormats[attr] = "fileSize";
									}
									var value = item.getDisplayValue(attr);
									var label = item.getAttrLabel(attr);
									pairs.push([
										label,
										value,
										attr,
										dataType
									]);
								}
							}
						}
					}
					this._createLabelValue(this._systemTitlePane, pairs);
					this.propertiesNode.appendChild(this._systemTitlePane.domNode);
					this._titlePanes.push(this._systemTitlePane);

					// Passing this in for the "open" value above doesn't seem to work.
					// Toggle open or closed as appropriate.
					if (this.sysPropsExpanded) {
						if (!this._systemTitlePane.open) {
							this._systemTitlePane.toggle();
						}
					}
					this._systemTitlePane.own(aspect.after(this._systemTitlePane, "toggle", lang.hitch(this, function() {
						this.sysPropsExpanded = this._systemTitlePane.open;
					})));

					//this.resize();
					this.onCompleteRendering();
				}
			}
		},

		/**
		 * @private Adds the pairs input data to the input titlePane.
		 */
		_createLabelValue: function(titlePane, pairs) {
			this.addPropertiesToTitlePane(titlePane, pairs);
		},

		/**
		 * Adds and creates all the properties for the title pane.
		 * 
		 * @param titlePane
		 *            The title pane to add to.
		 * @param pairs
		 *            A set of label and value pairs that will be added to the title pane.
		 * @since 2.0.3
		 */
		addPropertiesToTitlePane: function(titlePane, pairs) {
			array.forEach(titlePane.getChildren(), function(child) {
				titlePane.removeChild(child);
			}, this);
			var data = {};
			var resources = {};
			var formatters = null;
			var formatterAttributes = {};
			var propertiesArray = [];
			for (var i = 0; i < pairs.length; i++) {
				var p = pairs[i];
				var label = p[0];
				var value = p[1];
				var id = p[2];
				var type = p[3];
				var formatter = p[5];
				var formatterAttribs = p[6];

				var encodeLabel = p[4] != undefined ? p[4] : true;
				if (encodeLabel && label) {
					label = idxHtml.escapeHTML(label);
				}
				if (value) {
					var escapeHTML = function(s) {
						s = idxHtml.escapeHTML(s);
						return s && s.replace ? s.replace(/\s/g, "&nbsp") : s;						
					}
					if (lang.isArray(value)) {
						value = array.map(value, function(v) {
							return escapeHTML(v);							
						});					
					} else {
						value = escapeHTML(value);						
					}				
				}
				if (value && type && type == "xs:reference") {
					value = "<a href='javascript:;' onclick=\"event.preventDefault(); event.stopPropagation(); ecm.widget.ItemPropertiesDisplayPane.onClick(evt, '" + value + "', '" + this._item.repository.id + "'); return false; \">" + ecm.messages.add_document_properties_label + "...</a>";
				}
				id = id.replace(/[ \.]/g, '_');
				data[id] = value;
				resources[id + "Label"] = label;
				propertiesArray.push(id);

				if (formatter) {
					if (!formatters)
						formatters = {};
					formatters[id] = formatter;

					if (formatterAttribs)
						formatterAttributes[id] = formatterAttribs;
				}
			}

			if (propertiesArray.length > 0) {
				var properties = propertiesArray.join(",");
				if (formatters) {
					var propertiesGrid = new PropertyGrid({
						tabindex: "0", // adding tabindex for jaws using contrl insert ; to go to this title pane region 
						"aria-label": titlePane.get("title"),
						data: data,
						properties: properties,
						labelKeySuffix: "Label",
						formatFunc: lang.hitch(this, function(prop, data) {
							return this._formatFunction(prop, data, formatters, formatterAttributes, this._item, propertiesGrid);
						}),
						resources: resources
					});
				} else {
					var propertiesGrid = new PropertyGrid({
						tabindex: "0", // adding tabindex for jaws using contrl insert ; to go to this title pane region 
						"aria-label": titlePane.get("title"),
						data: data,
						properties: properties,
						labelKeySuffix: "Label",
						formatFunc: this._formatFuncTest,
						resources: resources
					});
				}
				titlePane.addChild(propertiesGrid);
				propertiesGrid.startup();
			}
		},

		_formatFunction: function(prop, data, formatters, formatterAttributes, item, grid) {
			if (formatters[prop] && formatters[prop].length > 0) {
				if (grid._widgetFormats && grid._widgetFormats[prop]) {
					return grid_widgetFormats[prop];
				} else {
					var widgetClassName = formatters[prop].split('.').join('/');
					var attribs = formatterAttributes ? formatterAttributes[prop] : null;
					var d = new Deferred();
					require([
						widgetClassName
					], function(widgetClass) {
						var params = {
							propertyName: prop,
							item: item,
							data: data
						};
						if (attribs)
							lang.mixin(params, attribs);
						var widget = new widgetClass(params);
						if (!grid._widgetFormats)
							grid._widgetFormats = {};

						grid._widgetFormats[prop] = widget;
						d.resolve(widget);
					});
					return d;
				}
			}
		},

		/**
		 * Resizes the pane.
		 */
		resize: function(newSize, currentSize) {
			clearTimeout(this._resizeHandle);
			this._resizeHandle = setTimeout(lang.hitch(this, function() {
				this._asynchResize(newSize, currentSize);
			}), 100);
		},

		/**
		 * Calls out the superclass's resize method.
		 */
		_asynchResize: function() {
			// since this is called asynchronously, domNode may have been destroyed already
			var pn = this.domNode ? this.getParent() : null;
			if (this.domNode && pn) {
				var box = domGeom.getContentBox(pn.containerNode);
				box.w = pn.containerNode.scrollWidth;
				if (pn.titleBarNode != null) {
					domGeom.setMarginBox(this.domNode, box); //domGeom.getContentBox(pn.containerNode));
				} else {
					domGeom.setMarginBox(this.domNode, box); //domGeom.getContentBox(pn.domNode));
				}

				var marginBox = domGeom.getMarginBox(this.domNode);
				var height = marginBox.h;
				if (this.getShowPreview()) {
					var previewHeight = domGeom.getMarginBox(this.previewNode.domNode).h;
					height -= previewHeight;
				}

				domGeom.setMarginBox(this.propertiesNode, {
					h: height,
					w: marginBox.w
				});

				if (this._titlePanes) {
					for ( var i in this._titlePanes) {
						this._titlePanes[i].resize();
					}
				}
				if (this._childComponentSelectors) {
					for ( var i in this._childComponentSelectors) {
						this._childComponentSelectors[i].resize();
					}
				}

				// To prevent an endlessly recurring loop through the parent's layoutChildren() call,
				// only call the parent resize once. This is needed for the parent to get a chance
				// to re-fit the properties pane following the size change.
				//
				// We should figure out a better way to handle sizing, so that there is no need
				// to call resize on the parent.
				if (!this.parentResizing) {
					this.parentResizing = true;
					pn.resize();
					// Need to call resize, to allow the layout to size controls properly
					if (this.propertiesPane) {
						this.propertiesPane.itemPropertiesPane.resizeLayout();
						this.propertiesPane.itemPropertiesPane.resizeCustomMetadata();
					}
				} else {
					delete this.parentResizing;
				}
			}
		},

		/**
		 * This event is fired when the rendering is complete.
		 */
		onCompleteRendering: function() {
		}
	});

	/**
	 * @private
	 */
	ItemPropertiesDisplayPane.onClick = function(evt, itemId, repositoryId) {
		var repository = ecm.model.desktop.getRepository(repositoryId);
		var dialog = new ContentListDropDownDialog();
		dialog.setItem(repository, itemId, function() {
			dialog.show({
				position: {
					x: evt.pageX,
					y: evt.pageY
				}
			});
		});
	};

	return ItemPropertiesDisplayPane;
});
