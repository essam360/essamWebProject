/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/dom-construct",
	"dojo/dom-style",
	"dojo/dom-class",
	"dojo/_base/lang",
	"dojo/_base/event",
	"dojo/_base/sniff",
	"dojo/aspect",
	"dojo/keys",
	"dijit/_Widget",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"../LoggerMixin",
	"./TitlePane",
	"dojo/text!./templates/TemplateMetadataPane.html"
], // 
function(declare, //
domConstruct, //
domStyle, //
domClass, //
lang, //
event, //
has, //
aspect, //
keys, //
_Widget, //
_TemplatedMixin, //
_WidgetsInTemplateMixin, //
LoggerMixin, //
TitlePane, //
template) {

	/**
	 * @name ecm.widget.TemplateMetadataPane
	 * @class Provides a widget that is used to view metadata of a box item.
	 * @augments dijit._Widget
	 */
	return declare("ecm.widget.TemplateMetadataPane", [
		_Widget,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		LoggerMixin
	], {
		/** @lends ecm.widget.TemplateMetadataPane.prototype */

		_messages: ecm.messages,
		_dirty: false,
		templateString: template,
		widgetsInTemplate: true,
		isReadOnly: false,
		isNew: false,
		isDelete: false,
		
		/**
		 * The reason for displaying the template metadata. Possible values are:
		 * <ul>
		 * <li>"create" - when creating a new content item</li>
		 * <li>"checkin" - when checking in a content item</li>
		 * <li>"editProperties" - when editing the properties of a content item</li>
		 * </ul>
		 * 
		 * @since 3.0
		 */
		reason: "create",

		postCreate: function() {
			this.inherited(arguments);

			if (this.templateMetadata) {

				// Create the title node.
				var titleSpan = domConstruct.create("span");
				titleSpan.appendChild(document.createTextNode(this.templateMetadata.displayName));
				
				if (!this.isReadOnly && (this.templateMetadata.name != "$customMetadata") && (this.templateMetadata.schemaAvailable || this.templateMetadata.newTemplate)){
					// Add a node for the delete button, set attributed, and connect events
					var removeSpan = domConstruct.create("span");
					domClass.add(removeSpan, "removeIcon");
					removeSpan.setAttribute("tabindex", "0");
					removeSpan.setAttribute("role", "button");
					removeSpan.setAttribute("aria-label", ecm.messages.properties_remove_template);
					removeSpan.setAttribute("title", ecm.messages.properties_remove_template);					
					this.connect(removeSpan, "onclick", lang.hitch(this, function(evt){
						this.deleteTemplate(evt);
					}));
					this.connect(removeSpan, "onkeydown", lang.hitch(this, function(evt){
						if (event.keycode == keys.ENTER){
							this.deleteTemplate(evt);
						}
					}));			
					
					titleSpan.appendChild(removeSpan);
				}
				
				var focusNode = this._titlePane.focusNode;
				focusNode.appendChild(titleSpan);
				domStyle.set(focusNode, "width", "100%");
				
				// Propagate the parent folder for use in EDS context
				if (this.initialParentFolder)
					this._commonProperties.setParentFolder(this.initialParentFolder);

				this.renderData();
			}
		},
		
		deleteTemplate: function(evt){
			event.stop(evt);
			this.isDelete = true;
			domStyle.set(this.domNode, "display", "none");
			this.onDeleteTemplate(this.templateMetadata);
		},
		
		onDeleteTemplate: function(templateMetadata){
		},

		/**
		 * Renders the data.
		 */
		renderData: function() {
			// Get the attribute definitions for the template metadata before rendering if there is a schema available.
			if (this.templateMetadata.schemaAvailable || this.templateMetadata.newTemplate) {
				var metadataTemplate = this.templateMetadata.repository.getMetadataTemplate(this.templateMetadata.id);
				this._commonProperties.createRendering(metadataTemplate, null, this.templateMetadata, this.reason, this.isReadOnly, false, lang.hitch(this, function(attributeDefinitions) {
					this.own(aspect.after(this._commonProperties, "onChange", lang.hitch(this, "onChange")));
				}));
			} else {
				this._commonProperties.renderAttributes(this.templateMetadata.attributeDefinitions, this.templateMetadata, this.reason, this.isReadOnly);
				this.own(aspect.after(this._commonProperties, "onChange", lang.hitch(this, "onChange")));
			}
		},

		/**
		 * Returns the first invalid field.
		 * 
		 * @return The first field widget that contains an invalid value. If all values are valid, <code>null</code>
		 *         is returned.
		 */
		getFirstInvalidField: function() {
			return this._commonProperties.getFirstInvalidField();
		},
		/**
		 * Sets the value for a properties pane property.
		 * 
		 * @param property
		 *            The string name (<code>Id</code>, not display name) of the property.
		 * @param value
		 *            The value to assign to the property.
		 * @return {Boolean} A value of <code>true</code> if the specified property is found, otherwise
		 *         <code>false</code>.
		 *         
		 * @since 3.0.1       
		 */
		setPropertyValue: function(property, value) {
			if (this._commonProperties) {
				var valueSet = this._commonProperties.setPropertyValue(property, value);

				// If the value was not set, it may be hidden so no property editor exists.
				// Set the value directly on the attribute definition.
				// For the case of add and checkin, the common properties pane attribute definitions 
				// are a private copy separate from the class definition attribute definitions.
				if (!valueSet) {
					dojo.some(this._commonProperties.attributeDefinitions, function(attrDef) {
						if (attrDef.id == property) {
							attrDef.defaultValue = value;
							valueSet = true;
							return true;
						}
					});
				}
			}
			return valueSet;
		},
		/**
		 * Validates the data.
		 * 
		 * @return A field widget that contains an invalid value. If all fields contain valid values, <code>null</code>
		 *         is returned.
		 */
		validate: function(onEditStatus, onSaveStatus) {
			var errorField = this._commonProperties.validateAll(onEditStatus, onSaveStatus);
			return errorField;
		},
		
		/**
		 * Places focus in the property field identified by <code>fieldName</code>, if found. This is typically used
		 * to set the focus on a field that has an invalid value.
		 * 
		 * @since 3.0.1
		 * 
		 * @param field
		 *            The field
		 */
		setFieldFocus: function(field){
			this._commonProperties.setFieldFocus(field.name);
		},

		/**
		 * Returns an array containing objects with index and values.
		 * 
		 * @return An array of value objects with the following properties:
		 *         <ul>
		 *         <li>name - The property Id string.</li>
		 *         <li>value - The property value.</li>
		 *         <li>dataType - A {@link ecm.model.AttributeDefinition} <code>dataType</code> value.</li>
		 *         <li>label - The property display name.</li>
		 *         </ul>
		 */
		getValues: function() {
			var values = [];
			
			if (!this.isDelete){
				// Include all read-only, hidden, and empty property values
				values = this._commonProperties.getPropertiesJSON(true, true, false);
			
				for(var i = 0; i < values.length; i++){
					value = values[i];
					if (value.dataType == "xs:date"){
						
						// Append the UTC timezone if not the timezone is not specified.
						var index = value.value.indexOf("T");
						var timePortion = value.value.substring(index);
						if (timePortion == "T00:00:00.000"){
							value.value += "Z";
						}
					}
				}
			}
			var obj = {
				name: this.templateMetadata.name,
				id: this.templateMetadata.id,
				dirty: this._dirty,
				isNew: this.isNew,
				isDelete: this.isDelete,
				criterias: values
			};
			return obj;
		},
	
		/**
		 * This event is fired when the field is changed.
		 * 
		 * @since 3.0
		 */
		onChange: function() {
			this._dirty = true;
		},

		/**
		 * Destroys the widget.
		 * 
		 * @since 3.0
		 */
		destroy: function() {
			this._commonProperties.destroy();
			this.inherited(arguments);
		}
	});
});
