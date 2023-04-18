/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array",
], function(declare, lang, array) {

	return {
		bindings: {
			collection: {
				attributes: {
					// ICN model layer ContentClass object has "attributeDefinitions" collection
					"properties": "attributeDefinitions"
				},
				methods: {
					endModelUpdateAsync: function(model, callback) {
						if (model.isDependentAttributesRetrievalPending()) {
							model.retrieveDependentProperties(callback);
						} else {
							callback();
						}
					}
				}
			},
			property: {
				attributes: {
					common: {
						cardinality: {
							// ICN model layer the cardinality values are capitalized and need to be converted
							get: function(model) {
								return model.cardinality === "SINGLE" ? "single" : "multi";
							}
						},
						type: {
							// ICN model layer uses "dataType" (instead of "type"), plus the values have a namespace "xs:"
							// Also, Designer uses different "type" value for some properties need to convert
							get: function(model) {
								var index = model.dataType.indexOf("xs:");
								if (index == 0) {
									var type = model.dataType.substr(3); // Strip off the namespace
									if (type == "short" || type == "long") {
										type = "integer";
									} else if (type === "double" || type == "decimal") {
										type = "float";
									} else if (type === "timestamp") {
										type = "datetime";
									} else if (type === "date") {
										type = "date";
									} else if (type === "time") {
										type = "time";
									} else if (type === "guid") {
										type = "string";
									} else if (type === "string:ext" || type === "string:alphanum" || type === "string:alpha" || type === "string:num") {
										type = "string";
									}
									return type;
								} else {
									return model.dataType;
								}
							}
						},
						choices: {
							// ICN has different structure for choice list model (choiceList instead of choices)
							// Plus ICN uses "displayName" instead of "label", so these need to be converted.
							get: function(model) {
								return this.convertChoiceList(model.choiceList, model.dataType, model.choiceListNested);
							},
							change: {
								event: "onChoiceListChanged",
								handler: function(model, choiceList, dataType, nested) {
									return this.convertChoiceList(choiceList, dataType, nested);
								}
							}
						},
						rowRequired: {
							get: function(model) {
								return true; // Keeps the multi-value editors from entering "no Value" settings.
							}
						},
						hidden: {
							controlled: function(model) {
								return this.isControlled(model);
							}
						},
						readOnly: {
							controlled: function(model) {
								return this.isControlled(model);
							}
						},
						required: {
							controlled: function(model) {
								return this.isControlled(model);
							}
						},
						value: {
							controlled: function(model) {
								return this.isValueControlled(model);
							}
						}
					}
				}
			},
			sandbox: {
				convertChoiceList: function(choiceList, dataType, nested) {
					if (choiceList) {
						var choices = [];
						var self = this;
						array.forEach(choiceList.choices, function(choice) {
							// Check for hierarchical choice lists 
							if (choice.value == undefined) {
								if (choice.choices) {
									var hierChoices = self.convertChoiceList(choice, dataType, null);
									choices.push({
										label: choice.displayName,
										canRemove: choice.canRemove == undefined ? true : choice.canRemove,
										canAdd: choice.canAdd == undefined ? true : choice.canAdd,
										choices: hierChoices
									});
								}
							} else {
								if (dataType == "xs:integer" && typeof choice.value === "string") {
									choices.push({
										label: choice.displayName,
										canRemove: choice.canRemove == undefined ? true : choice.canRemove,
										canAdd: choice.canAdd == undefined ? true : choice.canAdd,
										value: parseInt(choice.value)
									});
								} else {
									choices.push({
										label: choice.displayName,
										canRemove: choice.canRemove == undefined ? true : choice.canRemove,
										canAdd: choice.canAdd == undefined ? true : choice.canAdd,
										value: choice.value
									});
								}
							}
						});
						if (nested) {
							if (choiceList.displayName) {
								var hierChoices = {
									label: choiceList.displayName,
									canRemove: choiceList.canRemove == undefined ? true : choiceList.canRemove,
									canAdd: choiceList.canAdd == undefined ? true : choiceList.canAdd,
									choices: choices
								};
								return hierChoices; // For hierarchical choice lists, need to return Object not array
							} else {
								return choices; // Straight choice list
							}
						} else {
							return choices; // return array for recursion levels
						}
					}
					return null;
				},

				isValueControlled: function(model) {
					if (model.reason && (model.reason == "editProperties" || model.reason == "viewEditProperties" || model.reason == "checkin")) {
						if (!model.required) {
							return true; // Means controller value is used over view
						} else {
							// If the field is required, don't control it (which lets the model defaultValue be set if there is no value)
							return false;
						}
					} else {
						return false;
					}
				},

				isControlled: function(model) {
					if (model.reason && (model.reason == "create" || model.reason == "editProperties" || model.reason == "viewEditProperties" || model.reason == "checkin")) {
						return true; // Means - model controller value is used over Property Settings (View), from EDS look ups
					} else {
						return false;
					}
				}
			}
		}
	};

});
