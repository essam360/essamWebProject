/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/array",
	"dojo/_base/lang",
	"dojo/string",
	"dojo/aspect",
	"dojo/window",
	"dojo/dom-construct",
	"dojo/dom-style",
	"dojo/dom-attr",
	"dojo/Deferred",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/layout/BorderContainer",
	"dijit/layout/ContentPane",
	"ecm/widget/PropertyGrid",
	"ecm/widget/LayoutPropertiesPane",
	"idx/html",
	"idx/layout/TitlePane",
	"../Messages",
	"../model/AttributeDefinition",
	"../model/SearchTemplate",
	"../model/SocialItem",
	"../model/Desktop",
	"./CommonPropertiesPane",
	"./ContentClassSelector",
	"dojo/text!./templates/ItemPropertiesPane.html"
],

function(declare, //
array, //
lang, //
string, //
aspect, //
win, //
domConstruct, //
domStyle, //
domAttr, //
Deferred, //
_TemplatedMixin, //
_WidgetsInTemplateMixin, //
BorderContainer, //
ContentPane, //
PropertyGrid, //
LayoutPropertiesPane, //
idxHtml, //
TitlePane, //
Messages, //
AttributeDefinition, //
SearchTemplate, //
SocialItem, //
Desktop, //
CommonPropertiesPane, //
ContentClassSelector, //
template) {

	/**
	 * @name ecm.widget.ItemPropertiesPane
	 * @class Provides a widget that is used to edit the properties of an item.
	 * @augments dijit._Widget
	 */
	var ItemPropertiesPane = declare("ecm.widget.ItemPropertiesPane", [
		BorderContainer,
		_TemplatedMixin,
		_WidgetsInTemplateMixin
	], {
		/** @lends ecm.widget.ItemPropertiesPane.prototype */

		templateString: template,
		widgetsInTemplate: true,
		gutters: false,

		/**
		 * A boolean value. Determines whether or not the content class selector widget is displayed. If
		 * <code>true</code> it is displayed. Otherwise, only the class name is displayed.
		 */
		useContentClassSelector: true,

		/**
		 * A string value passed to the CommonPropertiesPane widget to set the reason (or mode) for property rendering.
		 * 
		 * @since 2.0.2
		 */
		reason: "editProperties",

		/**
		 * A string value of the CommonPropertiesPane class to be created. This allows plugin writers to provide a
		 * custom CommonPropertiesPane widget.
		 * 
		 * @since 2.0.2
		 */
		commonPropertiesPaneClass: "ecm/widget/CommonPropertiesPane",

		_messages: ecm.messages,
		_templateId: "",
		_previousPropertyValues: null,
		_item: null,
		_classChanged: false,

		autoScroll: true,

		postCreate: function() {
			this.inherited(arguments);
			this._addExtensions();
		},

		destroy: function() {
			if (this._contentClassSelector) {
				if (this._contentClassSelector.domNode) {
					this._contentClassSelectorDiv.removeChild(this._contentClassSelector.domNode);
				}
				this._contentClassSelector.destroyRecursive();
				delete this._contentClassSelector;
			}
			if (this._extensions) {
				array.forEach(this._extensions, function(extension, i) {
					if (extension.domNode) {
						this.customPropertiesPane.removeChild(extension.domNode);
					}
					if (lang.isFunction(extension.destroyRecursive)) {
						extension.destroyRecursive();
					} else if (lang.isFunction(extension.destroy)) {
						extension.destroy();
					}
					this._extensions[i] = null;
				}, this);
				delete this._extensions;
			}
			if (this._commonProperties) {
				if (lang.isFunction(this._commonProperties.destroyRecursive)) {
					this._commonProperties.destroyRecursive();
				} else if (lang.isFunction(this._commonProperties.destroy)) {
					this._commonProperties.destroy();
				}
				delete this._commonProperties;
			}
			if (this._systemPropertiesTitle) {
				array.forEach(this._systemPropertiesTitle.getChildren(), function(child) {
					this._systemPropertiesTitle.removeChild(child);
					if (lang.isFunction(child.destroyRecursive)) {
						child.destroyRecursive();
					} else if (lang.isFunction(child.destroy)) {
						child.destroy();
					}
				}, this);
				this._systemPropertiesTitle.destroyRecursive();
				delete this._systemPropertiesTitle;
			}
			this.inherited(arguments);
		},

		/**
		 * Retrieves the content class selector widget.
		 * 
		 * @return A {@link ecm.widget.ContentClassSelector} widget.
		 */
		getContentClassSelector: function() {
			return this._contentClassSelector;
		},

		/**
		 * Returns the folder or document that is being edited.
		 * 
		 * @return The folder or document {@link ecm.model.ContentItem}.
		 */
		getItem: function() {
			return this._item;
		},

		/**
		 * @private
		 */
		_getTeamspaceInfo: function(teamspace, isDocument) {
			var itemList = null;
			var classes = null;
			var defaultClass = null;
			var hasDefaultClass = false;
			if (teamspace && isDocument && (teamspace.type == ecm.model.Teamspace.RUNTIME || teamspace.type == ecm.model.Teamspace.INSTANCE)) {
				// build array of class id's.
				classes = teamspace.contentClasses;
				var defaultTeamspaceClass = teamspace.defaultClass;
				if (classes.length > 0) {
					itemList = [];
					for (var i = 0; i < classes.length; i++) {
						itemList[i] = classes[i].id;
						if (this._contentClass && this._contentClass.id == itemList[i])
							hasDefaultClass = true;
					}
				}
				if (hasDefaultClass == false && this._contentClass) { // add the current class to the list
					if (!itemList) {
						itemList = [];
					}
					itemList.push(this._contentClass.id);
				}

				if (!defaultClass)
					defaultClass = classes[0]; // if no default on teamspace use first class
			}
			return {
				defaultClass: defaultClass,
				itemList: itemList
			};
		},

		/**
		 * Sets the folder or document that will be edited.
		 * 
		 * @param item
		 *            A folder or document {@link ecm.model.ContentItem}.
		 * @param isReadOnly
		 *            A boolean. If <code>true</code> the entire item is read only.
		 * @param params
		 *            An object containing additional parameters and objects for the property pane. (@since 2.0.3)
		 */
		setItem: function(item, isReadOnly, params) {
			this._item = item;
			this._entryTemplate = null;
			if (params && params.entryTemplate)
				this._entryTemplate = params.entryTemplate;

			this._isReadOnly = (isReadOnly == undefined) ? false : isReadOnly;
			this.repository = item.repository;
			this._contentClass = this._item.getContentClass();

			if (this._contentClassSelector) {
				if (this._contentClassSelector.domNode) {
					this._contentClassSelectorDiv.removeChild(this._contentClassSelector.domNode);
				}
				this._contentClassSelector.destroyRecursive();
				this._contentClassSelector = null;
			}
			var teamspaceInfo = this._getTeamspaceInfo(this.teamspace, !item.isFolder() ? true : false);
			var itemList = teamspaceInfo.itemList;

			// If this is OnDemand or box, do not create the class selector.
			if (this.repository.type != "od" && this.repository.type != "box") {
				if (this.useContentClassSelector) {
					var id = this.id + "_contentClassSelector";
					this._contentClassSelector = new ContentClassSelector({
						defaultToFirstItem: false,
						repository: item.repository,
						selectorStyle: "dropdown",
						hasAll: false,
						itemList: itemList,
						rootClassId: item.isFolder() ? (item.repository._isBox() ? "folder" : "Folder") : (item.repository._isBox() ? "file" : "Document"),
						objectStore: item.objectStore,
						filterType: "editItem",
						filterTemplateName: this._contentClass.id,
						dropdownid: id,
						arialabelledby: domAttr.get(this._classLabel, "id"),
						"class": "dijitInline"
					});
					domAttr.set(this._classLabel, "for", id);

					this._contentClassSelectorDiv.appendChild(this._contentClassSelector.domNode);
					domAttr.set(this._contentClassSelectorDiv, "tabindex", "-1");

					// Edit properties allows changing the class only on CM when an entry template does not apply.
					if (isReadOnly || (this.repository.type != "cm") || this._entryTemplate || !item.hasPrivilege("privChangeClass")) {
						this._contentClassSelector._dropdown.set("disabled", true);
						this._contentClassSelector.setLabel(this._contentClass.name);
					}

					// Select the class now if the the class selector is finished loading (i.e., the list of available classes
					// is rendered almost instantly when CM classes are cached); otherwise, defer selection until it's loaded
					var selectClass = lang.hitch(this, function() {
						// For CM...
						if (item.repository.type == "cm") {
							// Restrict the class list based on the current class (other classes must be same classification).
							this._contentClassSelector.filterTemplateName = this._contentClass.id;

							// Restrict the class list based on whether or not the item is a folder or document.
							if (this._item.isFolder()) {
								this._contentClassSelector.setVisibleOnlyForFolder(true);
							} else {
								this._contentClassSelector.setVisibleOnlyForDocument(true);
							}

							// Restrict the class list depending on whether or not the item has content.
							if (item.hasContent()) {
								this._contentClassSelector.setVisibleOnlyIfStoresContent(true);
							}
						}

						this._contentClassSelector.setSelected(this._contentClass);
					}); 
					if (this._contentClassSelector.loaded) {
						selectClass();
					}
					this.connect(this._contentClassSelector, "onLoaded", function() {
						selectClass();
					});

					if (this.repository.type == "cm") { // P8 & OD currently do not support re-index
						// NOTE: disabling this connect for p8 because I'm seeing an extra call to onContentClassSelected with Document content class
						this.connect(this._contentClassSelector, "onContentClassSelected", lang.hitch(this, function(contentClass) {
							if (contentClass.id != this._contentClass.id) {
								// Once the class has been changed, _classChanged remains true.
								// All properties must be validated at all times after the class is changed.
								this._classChanged = true;
								this._contentClass = contentClass;
								// Include all read only, hidden, and empty property values.
								var prevProps = this.getPropertiesJSON(true, true, false);
								// Restructure the properties values list so that values can be retrieved by property name.
								this._previousPropertyValues = {};
								for (var i = 0; i < prevProps.length; i++) {
									var prevProp = prevProps[i];
									this._previousPropertyValues[prevProp.name] = prevProp.value;
								}
								this._renderProperties();

								// Fire the onChange event so Save button will be enabled.
								this.onClassChange();
							}
						}));
					}
				} else {
					// if you don't want the 2 extra calls to get content classes via the content class selector, below shows the class name
					var contentClass = this._item.getContentClass();
					var div = domConstruct.create("div", {
						innerHTML: idxHtml.escapeHTML(contentClass.name)
					});
//					while (this._contentClassSelectorDiv.hasChildNodes()) {
//						this._contentClassSelectorDiv.removeChild(this._contentClassSelectorDiv.lastChild);
//					}
					domConstruct.empty(this._contentClassSelectorDiv);

					this._contentClassSelectorDiv.appendChild(div);
				}
			} else {
				domStyle.set(this._documentTypePane.domNode, "display", "none");
			}

			this._previousPropertyValues = null;
			this._renderProperties();
		},

		/**
		 * @private
		 */
		_renderProperties: function() {
			if (!this._commonProperties) {
				// Construct the correct properties pane for displaying property controls
				var commonPropertiesClass = this.commonPropertiesPaneClass;
				if (this._entryTemplate && this._entryTemplate.markup) {
					commonPropertiesClass = this._entryTemplate.layoutPropertiesPaneClass;
				}
				require([
					commonPropertiesClass
				], lang.hitch(this, function(cls) {
					this._commonProperties = new cls();
					this._commonPropertiesContainer.set("content", this._commonProperties);

					this.own(aspect.after(this._commonProperties, "onChange", lang.hitch(this, "onChange"), true));
					this.own(aspect.after(this._commonProperties, "onClickReferenceAttribute", lang.hitch(this, "onClickReferenceAttribute"), true));
					this.own(aspect.after(this._commonProperties, "onMarkingPropertyChange", lang.hitch(this, "onMarkingPropertyChange"), true));
					this.own(aspect.after(this._commonProperties, "onRetrySave", lang.hitch(this, "onRetrySave"), true));
					this.own(aspect.after(this._commonProperties, "onCompleteRendering", lang.hitch(this, "onCompleteRendering"), true));

					this._retrieveAttributes();
				}));
			} else {
				this._retrieveAttributes();
			}
		},

		/**
		 * Clears the current property rendering.
		 * 
		 * @param setToNull
		 *            Boolean flag indicating whether to additional set the common properties widget to null.
		 */
		clearRendering: function(setToNull) {
			if (this._commonProperties) {
				this._commonProperties.clearRendering();
				if (setToNull) {
					this._commonProperties.destroyRecursive();
					this._commonProperties = null;
				}
			}
		},

		/**
		 * @private
		 */
		_retrieveAttributes: function() {
			this.clearRendering();
			this._contentClass.retrieveAttributeDefinitions(lang.hitch(this, function(attributeDefinitions, childComponentDefinitions) {

				//get app group cache
				var appGrpCache = null;
				var updateAppGrpCache = true;
				if( this._item && this._item.repository && this._item.repository._isOnDemand() && this._item.application_group ){
					if(!this._item.repository._appGroupCache){
						this._item.repository._appGroupCache = [];
					}
					appGrpCache = this._item.repository._appGroupCache[this._item.application_group];
					if( appGrpCache ){
						updateAppGrpCache = false;
					}else{
						appGrpCache = [];
					}
				}
				
				// Create a copy of the attribute definitions so that we don't modify the class attribute definitions.
				var attrDefs = [];
				var attrDefsById = {};
				var attrDef;
				for ( var attrDefNdx in attributeDefinitions) {
					attrDef = attributeDefinitions[attrDefNdx];
					// Clone the attribute definition. The content class reference is copied.
					// Also create a map by attribute id for faster lookup.
					attrDef = attrDef.clone();

					// If read only is not set in the class attribute definition, but is set on the item attribute, then enable read only for the attrDef copy.
					if (!attrDef.readOnly && this._item.attributeReadOnly && this._item.attributeReadOnly[attrDef.id]) {
						attrDef.readOnly = true;
					}
					
					if( this._item && this._item.repository && this._item.repository._isOnDemand() ){
						//if it is OnDemand, and the property in folder is not in item, it is readonly
						if( this._item.attributes && this._item.attributes[attrDef.id]==null){
							attrDef.readOnly = true;
						}
						//if it is OnDemand, the readonly may come from app group cache
						if( !updateAppGrpCache  ){
							if( appGrpCache && appGrpCache[attrDef.id] && appGrpCache[attrDef.id].readOnly ){
								attrDef.readOnly = true;
							}
						}else{
							//init and update the appGroupCache
							if(appGrpCache && this._item.attributeReadOnly && this._item.attributeReadOnly[attrDef.id]){
								appGrpCache[attrDef.id] = {};
								appGrpCache[attrDef.id].readOnly = true;
							}
						}
					}
					
					attrDefs.push(attrDef);
					attrDefsById[attrDef.id] = attrDef;
				}
				
				if( updateAppGrpCache &&  appGrpCache){
					this._item.repository._appGroupCache[this._item.application_group] = appGrpCache;
				}

				// Create a copy of the child component definitions so that we don't modify the class child component definitions.
				if (childComponentDefinitions) {
					var childCompDefs = [];
					var childCompDefsById = {};
					for ( var i in childComponentDefinitions) {
						var childCompDef = childComponentDefinitions[i].clone();
						childCompDefs.push(childCompDef);
						childCompDefsById[childCompDef.id] = childCompDef;
					}
				}

				if (this._entryTemplate) {
					// Apply the entry template settings.
					attrDefs = this._commonProperties._applyEntryTemplateAttributes(this._contentClass.repository, attrDefs, attrDefsById, this._entryTemplate, this.reason);
				}

				// In the viewer window edit properties context, if this is a P8 repository with role-based redaction enabled, and the user
				// has permission to create role-based redaction annotations, then the user will be allowed to change the value of the SensitiveContent property. 
				if (this.reason == "viewEditProperties" && this._item.repository._isP8() && this._item.repository.redactionEnabled && this._item.repository.getPrivilege("addRoleBasedRedaction")) {
					var sensitiveContentAttr = attrDefsById["ClbSensitiveContent"];
					if (sensitiveContentAttr) {
						// Show the sensitive content property.
						sensitiveContentAttr.hidden = false;
						
						// The value cannot be null if role-based redactions exist.
						sensitiveContentAttr.required = this._item.hasRoleBasedRedactions;
						
						// Filter the choices.
						sensitiveContentAttr.choiceList = lang.clone(sensitiveContentAttr.contentClass.attributeDefinitionsById["ClbSensitiveContent"].choiceList);
						sensitiveContentAttr.choiceList.choices = array.filter(sensitiveContentAttr.choiceList.choices, function(choice) {
							var showChoice;
							switch (parseInt(choice.value)) {
							case 0: // Does not contain...
								// Only show this choice if there are no role-based redactions.
								showChoice = !this._item.hasRoleBasedRedactions;
								break;
							case 1: // Contains...
								// Only show this choice if there are role-based redactions.
								showChoice = this._item.hasRoleBasedRedactions;
								break;
							case 2: // Processing is pending...
								// This choice is always available.
								showChoice = true;
								break;
							case 3: // May contain...
								// This choice is always available.
								showChoice = true;
								break;
							default:
								return true;
							}
							return showChoice;
						}, this);


						//
						// Force an appropriate default value.
						//
						// The Contains... choice should only be selected if role-based redactions exist and the review 
						// for sensitive content is complete.
						//
						// Documents with role-based redactions that are set to Contains... will be available for viewing.
						//
						// Documents set to May contain... or Processing is pending... will not be available for viewing.
						// View access will be denied by the customer's configuration of CE security (based on property 
						// values etc.).
						//
						// For ambiguous scenarios, such as the document has role-based redactions but null or Does not contain... 
						// is selected, or the document does not have redactions but the Contains... choice is selected, 
						// the value will be changed to the May contain... choice below.
						//
						// When the setting is changed automatically to May contain... the expectation is that a role-based 
						// redaction editor will eventually manually select Contains... (has redactions, review complete), 
						// or Does not contain... (no redactions, review complete), or null (no redactions, sensitive content 
						// review does not apply to this document).
						//
						var value = this._item.attributes["ClbSensitiveContent"];

						// For the purposes of the check below, normalize a null or empty value to 0.
						value = value || 0;
						
						switch (value) {
						case 0: // Does not contain...
							if (this._item.hasRoleBasedRedactions) {
								// This is an ambiguous state. Change to May contain... to prevent viewing this document.
								this._item.attributes["ClbSensitiveContent"] = 3;
							} // ...else no change.
							break;
						case 1: // Contains...
							if (!this._item.hasRoleBasedRedactions) {
								// This is an ambiguous state. Change to May contain... to prevent viewing this document.
								this._item.attributes["ClbSensitiveContent"] = 3;
							} // ...else no change.
							break;
						case 2: // Processing is pending...
						case 3: // May contain...
						default:
							// No change...
						}
					}
				}
				
				// In order for EDS to have a chance to change attribute definitions, call retrieveDependentAttrDefs
				// with the current values of the item and update the current attribute definitions with the info returned

				var itemAttributes = this._item.attributes;
				// If the class was changed (there are previously entered property values)...
				if (this._previousPropertyValues) {
					itemAttributes = lang.clone(itemAttributes);
					for ( var i in attrDefs) {
						var classAttribute = attrDefs[i];
						var attrValues = itemAttributes[classAttribute.id];

						// Previously entered property values override the values from the item, including values that the user cleared.
						if (typeof this._previousPropertyValues[classAttribute.id] !== "undefined") {
							attrValues = this._previousPropertyValues[classAttribute.id];
						}

						// If the attribute is not found on the item and there is no previously entered value,
						// or no value is set and the attribute definition requires a value,
						// use the attribute definition default value.
						if (typeof attrValues === "undefined" || (classAttribute.required && AttributeDefinition.isValueEmpty(attrValues))) {
							// Use the attribute definition default value.
							attrValues = classAttribute.defaultValue;
						}
						// Update the copy of the item attributes.
						itemAttributes[classAttribute.id] = attrValues;
					}
					this._previousPropertyValues = null;
				}

				// First apply the item's current values. 
				array.forEach(attrDefs, function(attrDef) {
					if (itemAttributes[attrDef.id] !== undefined) {
						attrDef.defaultValue = itemAttributes[attrDef.id];
					}
				});

				this._commonProperties._setObjectId(itemAttributes, this._item);

				var alwaysRetrieve = false;

				var context = {};
				if (this.reason == "create") {
					context.action = "addItem";
					// Force the dependent attributes retrieve for this initial startup request,
					// so that EDS is always called to apply changes based on the selected folder.
					alwaysRetrieve = this._contentClass.edsIsEnabled;
					if (lang.isFunction(this._commonProperties.getParentFolder)) {
						var parentFolder = this._commonProperties.getParentFolder();
						if (parentFolder) {
							context.parentFolderId = parentFolder.id;
						}
					}
				} else if (this.reason == "editParameters") {
					context.action = "workflow";
				} else {
					context.action = this.reason;
				}
				if (this._entryTemplate && this._entryTemplate.id) {
					context.entryTemplateId = this._entryTemplate.id;
					context.entryTemplateName = this._entryTemplate.name;
					if (this._entryTemplate.repository._isP8()) {
						context.entryTemplateVsId = this._entryTemplate.vsId;
					} else if (this._entryTemplate.repository._isCM()) {
						context.entryTemplateItemId = this._entryTemplate.itemId;
					}
				}
				this._contentClass.retrieveDependentAttrDefs({
					attributes: itemAttributes,
					context: context,
					alwaysRetrieve: alwaysRetrieve,
					callback: lang.hitch(this, function(dependentAttributeDefs, dependentChildComponentDefs, dependentChildComponents) {

						// Apply the dependent attribute changes
						this._commonProperties._applyDependentAttributeValues(attrDefs, attrDefsById, dependentAttributeDefs, null, this.reason);
						this._commonProperties.renderAttributes(attrDefs, this._item, this.reason, this._isReadOnly, {
							entryTemplate: this._entryTemplate
						});

						if (childCompDefs) {
							if (dependentChildComponentDefs) {
								var depChildCompDef;
								for ( var i in dependentChildComponentDefs) {
									depChildCompDef = dependentChildComponentDefs[i];
									childCompDef = childCompDefsById[depChildCompDef.id];
									if (childCompDef) {
										this._commonProperties._applyDependentAttributeValues(childCompDef.attributeDefinitions, childCompDef.attributeDefinitionsById, depChildCompDef.attributeDefinitions, null, this.reason);
									}
								}
							}
							this._commonProperties.renderChildComponents(childCompDefs, this._item, this._isReadOnly);
						}
						if (this._contentClass.repository._isBox() && (this._contentClass.id == "file" || this._contentClass.id == "folder")){
							this._commonProperties.renderTemplateMetadata(this._item, this._isReadOnly, this.reason);
						}
						this._renderSystemProperties(attrDefs, this._item);

						// For P8 folders, validate the folder name.
						if (this.repository.type == "p8" && this._item.isFolder()) {
							var field = this._commonProperties.getFieldWithName("FolderName");
							if (field) {
								field.invalidMessage = this._messages.invalid_folder_name_message;
								field.originalValidator = field.validator;
								field.validator = function(value, constraints) {
									if (value.indexOf('\\') > -1 || value.indexOf('/') > -1 || value.indexOf(':') > -1 || value.indexOf('*') > -1 || value.indexOf('?') > -1 || value.indexOf('"') > -1 || value.indexOf('<') > -1 || value.indexOf('>') > -1 || value.indexOf('|') > -1) {
										return false;
									} else if (this.required && this._isEmpty(value)) {
										return false;
									} else {
										return this.originalValidator(value, constraints);
									}
								};
							}

						} else if (this.repository.type == "box" && this._item.template != "web_link") {
							// Add validation to the Box folder and Box file name.  Web links don't need validation.
							var field = this._commonProperties.getFieldWithName("name");
							if (field) {
								if (this._item.isFolder()) {
									field.invalidMessage = this._messages.invalid_box_folder_name_message;
									field.set("maxLength", 255);
								} else {
									field.invalidMessage = this._messages.invalid_box_file_name_message;
								}
								field.originalValidator = field.validator;
								field.validator = function(value, constraints) {
									if (value.indexOf('\\') > -1 || value.indexOf('/') > -1) {
										return false;
									} else if (this.required && this._isEmpty(value)) {
										return false;
									} else {
										var v = this.getValue ? this.getValue() : value;
										v = string.trim(v);
										if (v == "." || v == "..") {
											return false;
										} else {
											return this.originalValidator(value, constraints);
										}
									}
								};
							}
						}
					})
				});
			}));
		},

		/**
		 * @private
		 */
		_renderSystemProperties: function(properties, item) {
			// Process system properties
			array.forEach(this._systemPropertiesTitle.getChildren(), function(child) {
				this._systemPropertiesTitle.removeChild(child);
				child.destroyRecursive();
			}, this);

			var data = {};
			var resources = {};
			var propertiesArray = [];
			var formatters = null;
			var formatterAttribs = {};
			var sysProperties = item.isFolder() ? item.repository.folderSystemProperties : item.repository.documentSystemProperties;
			for ( var index in item.attributeSystemProperty) {
				if (array.indexOf(sysProperties, index) == -1)
					continue;

				if (item.repository._isBox() && index == "comment_count") {
					var dv = item.getDisplayValue(index);
					data[index] = dv ? dv : 0;
					propertiesArray.push(index);
					resources[index + "Label"] = item.getAttrLabel(index);
				} else if (!item.repository._isBox() && (index == "ClbDownloadCount" || index == "ClbCommentCount" || index == "ClbRecommendationCount")) {
					var dv = item.getDisplayValue(index);
					data[index] = dv ? dv : 0;
					propertiesArray.push(index);
					resources[index + "Label"] = item.getAttrLabel(index);
					if (index == "ClbDownloadCount") {
						if (!formatters)
							formatters = {};
						formatters["ClbDownloadCount"] = "ecm.widget.DownloadCount";
						formatterAttribs["ClbDownloadCount"] = {
							count: item.getValue("ClbDownloadCount")
						};
					} else if (index == "ClbRecommendationCount") {
						if (!formatters)
							formatters = {};
						formatters["ClbRecommendationCount"] = "ecm.widget.Recommendations";
						formatterAttribs["ClbRecommendationCount"] = {
							count: item.getValue("ClbRecommendationCount")
						};
					}
				} else {
					for (var i = 0; i < properties.length; i++) {
						var prop = properties[i];
						var value = item.getDisplayValue(prop.id);
						var dataType = prop.dataType || "xs:string";
						var label = item.getAttrLabel(prop.id);
						var name = prop.id;
						if (name == index) {
							if (value) {
								value = idxHtml.escapeHTML(value);
							}
							if (prop.format == "path" && !item.attributeFormats[prop.id]) {
								value = Desktop.valueFormatter.formatPath(value);
							}
							data[name] = value;
							if (label) {
								label = idxHtml.escapeHTML(label);
							}
							resources[name + "Label"] = label || name;
							propertiesArray.push(name);

							if (prop.propertyFormatter) {
								if (!formatters)
									formatters = {};
								formatters[name] = prop.propertyFormatter;
							}
							break;
						}
					}
				}

			}

			if (item.repository.type == "od") { // System properties are defined on the item only (not on the content class)
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
							var name = attr;
							data[name] = value;
							resources[name + "Label"] = label || name;
							propertiesArray.push(name);
						}
					}
				}
			}

			if (propertiesArray.length > 0) {
				var systemProperties = propertiesArray.join(",");
				//var data = {givenName: 'Joe', surname: 'Schmoe', d2: 'd2 value', age: 31, birthDate: new Date(1980,0,1)};
				//var properties = "givenName,surname,d2,age(int),birthDate(dat)";
				//var resources="{fullNameLabel: 'Full Name', statusLabel: 'Status', ageAndBirthLabel: 'Age (Birth Year)'}">
				var systemPropertiesGrid = null;

				if (formatters) {
					systemPropertiesGrid = new PropertyGrid({
						tabindex: "0", // adding tabindex for jaws using contrl insert ; to go to this title pane region 
						"aria-label": ecm.messages.system_properties_title,
						data: data,
						properties: systemProperties,
						labelKeySuffix: "Label",
						resources: resources,
						formatFunc: lang.hitch(this, function(prop, data) {
							return this._formatFunction(prop, data, formatters, formatterAttribs, item, systemPropertiesGrid);
						})
					});
				} else {
					systemPropertiesGrid = new PropertyGrid({
						tabindex: "0", // adding tabindex for jaws using contrl insert ; to go to this title pane region 
						"aria-label": ecm.messages.system_properties_title,
						data: data,
						properties: systemProperties,
						labelKeySuffix: "Label",
						resources: resources
					});
				}
				this._systemPropertiesTitle.addChild(systemPropertiesGrid);
				systemPropertiesGrid.startup();
				this.own(aspect.after(item, "onCollaborate", lang.hitch(this, function() {
					var commentCountAttrName = item._getCountPropertyName(SocialItem.prototype.TYPE.COMMENT);
					if (systemPropertiesGrid.data[commentCountAttrName] && systemPropertiesGrid._rows instanceof Array) {
						var nc = item.getSocialCount(SocialItem.prototype.TYPE.COMMENT);
						if (nc > -1 && nc != systemPropertiesGrid.data[commentCountAttrName]) {
							systemPropertiesGrid.data[commentCountAttrName] = nc;
							for (var rowIndex = 0; rowIndex < systemPropertiesGrid._rows.length; rowIndex++) {
								if (systemPropertiesGrid._rows[rowIndex].propertyName == commentCountAttrName) {
									systemPropertiesGrid._rows[rowIndex].reformat();
									break;
								}
							}
						}
					}
				})));
			}

			// default system props to closed
			if (this._systemPropertiesTitle.open)
				this._systemPropertiesTitle.toggle();
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
		 * @private
		 */
		_addExtensions: function() {
			if (this.constructor.extensions) {
				for (var i = 0; i < this.constructor.extensions.length; i++) {
					var extension = this.constructor.extensions[i];

					if (extension) {
						var extensionPane = new extension();
						this.customPropertiesPane.appendChild(extensionPane.domNode);
						if (!this._extensions) {
							this._extensions = [];
						}
						this._extensions.push(extensionPane);
					}
				}
			}
		},

		/**
		 * This event method is called after the properties have been rendered.
		 */
		onCompleteRendering: function() {
			setTimeout(lang.hitch(this, function() {
				if (this.validate(this.autoScroll, true, false) == null) {
					if (this.autoScroll) {
						this._focusFirstField();
					}
				}
			}, 500));
		},

		/**
		 * Resizes the layout properties pane.
		 */
		resizeLayout: function() {
			if (this._commonProperties){
				if (this._commonProperties.isInstanceOf(ecm.widget.LayoutPropertiesPane)){
					this._commonProperties.resize();
				}
				else if (this._commonProperties._customMetadataPane){
					this._commonProperties._customMetadataPane.resize();
				}
			}
		},
		
		/**
		 * Resizes custom metadata
		 * @since 3.0.1
		 */
		resizeCustomMetadata: function(){
			if (this._commonProperties && this._commonProperties._customMetadataPane) {
				this._commonProperties._customMetadataPane.resize();
			}
		},

		/**
		 * @private
		 */
		_focusFirstField: function() {
			this._centerPane.domNode.scrollTop = '0px';
			this._centerPane.domNode.scrollLeft = '0px';
			if (this._commonProperties && this._commonProperties.getFields() && this._commonProperties.getFields().length > 0) {
				this._commonProperties.getFields()[0].focus();
			}
		},

		/**
		 * Checks if the property fields contain valid values. See {@link ecm.widget.CommonPropertiesPane}
		 * <code>validateAll</code>.
		 * 
		 * @param focus
		 *            A boolean value. If <code>true</code> and there is a field with an invalid value, focus is
		 *            automatically set to the invalid field.
		 * @param onEditStatus
		 *            A boolean value. If <code>true</code>, item properties are being modified. Only property fields
		 *            that have been modified are checked.
		 * @param onSaveStatus
		 *            A boolean value. If <code>true</code>, changes are being saved. The first property field widget
		 *            from the list of property fields with invalid values is returned.
		 * @return Returns <code>null</code> if all checked property fields contain valid values. Otherwise, returns
		 *         the first property field widget that contains an invalid value.
		 */
		validate: function(focus, onEditStatus, onSaveStatus) {
			var errorField;
			if (this._commonProperties) {
				// Validate all properties if the class was changed.
				// The _classChanged flag is not reset to false, all properties
				// must continue to be validated for the duration of this edit properties action.
				if (this._classChanged) {
					var setFocus = focus && onSaveStatus; // set err focus if saving
					errorField = this._commonProperties.validateAll(false, false, setFocus);
				} else {
					errorField = this._commonProperties.validateAll(onEditStatus, onSaveStatus, focus);
				}
			}
			return errorField;
		},

		/**
		 * Assigns an error to a property field.
		 * 
		 * @param fieldName
		 *            A property Id string.
		 * @param errorMessage
		 *            The error message string.
		 * @param errorValue
		 *            The invalid value.
		 */
		setFieldError: function(fieldName, errorMessage, errorValue) {
			if (this._commonProperties) {
				this._commonProperties.setFieldError(fieldName, errorMessage, errorValue);
			}
		},
		
		/**
		 * Assigns an error to the given template metadata field.
		 *
		 * @param templateId
		 *            The ID of the template metadata
		 * @param fieldName
		 *            The ID of the field
		 * @param errorMessage
		 *            The error message
		 * @since 3.0
		 */
		setTemplateMetadataFieldError: function(templateId, fieldName, errorMessage) {
			if (this._commonProperties)
				this._commonProperties.setTemplateMetadataFieldError(templateId, fieldName, errorMessage);
		},

		/**
		 * Places focus in the property field identified by <code>fieldName</code>, if found. This is typically used
		 * to set the focus on a field that has an invalid value.
		 * 
		 * @param fieldName
		 *            The property Id string.
		 */
		setFieldFocus: function(fieldName) {
			if (this._commonProperties) {
				this._commonProperties.setFieldFocus(fieldName);
			}
		},
		
		/**
		 * Places the focus on the given template metadata field.
		 * 
		 * @param templateId
		 *            The ID of the template metadata
		 * @param fieldName
		 *            The ID of the field
		 * @since 3.0
		 */
		setTemplateMetadataFieldFocus: function(templateId, fieldName) {
			if (this._commonProperties) {
				this._commonProperties.setTemplateMetadataFieldFocus(templateId, fieldName);
			}
		},

		/**
		 * Enables or disables each data type <code>"xs:reference"</code> property field if it is not read only. See
		 * {@link ecm.widget.CommonPropertiesPane} <code>setDisabledNavigation</code>.
		 * 
		 * @param disableField
		 *            A boolean value. If a property field is not read only and contains data type
		 *            <code>"xs:reference"</code>, then the property field is disabled if disableField is true or
		 *            enabled if <code>disableField</code> is <code>false</code>. If the field is read only or is
		 *            not for data type <code>"xs:reference"</code> then no change is made to the field.
		 */
		setDisabledNavigation: function(bool) {
			if (this._commonProperties) {
				this._commonProperties.setDisabledNavigation(bool);
			}
		},

		/**
		 * Retrieves the content class.
		 * 
		 * @return A {@link ecm.model.ContentClass}.
		 */
		getContentClass: function() {
			return this._contentClass;
		},

		/**
		 * Retrieves the property values JSON string. See {@link ecm.widget.CommonPropertiesPane}
		 * <code>getPropertiesJSON</code> for more details.
		 * 
		 * @param includeReadonly
		 *            A boolean value. If <code>true</code>, values for read only properties are included. Otherwise
		 *            read only property values are excluded from the JSON.
		 * @param includeHidden
		 *            A boolean value. if <code>true</code>, values for hidden properties are included. The parameter
		 *            <code>excludeEmptyValues</code> also applies to hidden properties.
		 * @param excludeEmptyValues
		 *            A boolean value. If <code>true</code>, properties with empty values are excluded.
		 * @return The JSON string for the current state of the properties.
		 */
		getPropertiesJSON: function(includeReadonly, includeHidden, excludeEmptyValues) {
			return this._commonProperties ? this._commonProperties.getPropertiesJSON(includeReadonly, includeHidden, excludeEmptyValues) : [];
		},

		/**
		 * Retrieves the array of child component values.
		 * 
		 * @return An array of child component values. Each entry contains the set of values for the corresponding child
		 *         component, in order.
		 */
		getChildComponentValues: function() {
			return this._commonProperties ? this._commonProperties.getChildComponentValues() : [];
		},
		
		/**
		 * Retrieves the array of template metadata values.
		 * @since 3.0
		 * 
		 * @return An array of template values. Each entry contains the set of values for the corresponding metadata
		 *         template, in order.
		 */
		getTemplateMetadataValues: function() {
			var metadataValues = null;
			if (this._commonProperties && this._commonProperties.getTemplateMetadataValues){
				metadataValues = this._commonProperties.getTemplateMetadataValues();
			}
			return metadataValues;
		},

		/**
		 * This event method is called when a property field value changes. See {@link ecm.widget.CommonPropertiesPane}
		 * <code>onChange</code>.
		 */
		onChange: function() {
		},

		/**
		 * This event method is called when a reference attribute is clicked. This method is not called if the reference
		 * attribute field is disabled.
		 */
		onClickReferenceAttribute: function() {
		},

		/**
		 * This event method is called after a marking property value is changed (IBM FileNet P8 only). See
		 * {@link ecm.widget.CommonPropertiesPane} <code>onMarkingPropertyChange</code>.
		 */
		onMarkingPropertyChange: function() {
		},

		/**
		 * This event is fired when a save operation can be retried. See {@link ecm.widget.CommonPropertiesPane}
		 * <code>onRetrySave</code>.
		 */
		onRetrySave: function() {
		},

		/**
		 * This event method is called when the item content class is changed.
		 */
		onClassChange: function() {
		}
	});

	/**
	 * This static method allows the <code>ItemPropertiesPane</code> to be extended with additional sections.
	 * 
	 * @param itemPropertiesExtensionClass
	 *            The constructor function for creating an instance of the extenstion.
	 * @memberof ecm.widget.ItemPropertiesPane
	 */
	ItemPropertiesPane.addExtension = function(itemPropertiesPaneExtensionClass) {
		if (!ItemPropertiesPane.extensions) {
			ItemPropertiesPane.extensions = [];
		}
		ItemPropertiesPane.extensions.push(itemPropertiesPaneExtensionClass);
	};

	return ItemPropertiesPane;
});
