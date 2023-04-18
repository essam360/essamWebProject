/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array",
	"./_ModelObject",
	"./_AttributeMixin"
], function(declare, lang, array, _ModelObject, _AttributeMixin) {

	/**
	 * @name ecm.model.AttributeDefinition
	 * @class Represents the definition of an attribute for a class of items in a repository. The type of items in the
	 *        class depends on the repository: <table width="406" border="1">
	 *        <tr>
	 *        <th width="196" scope="col">Repository</th>
	 *        <th width="194" scope="col">Class and attributes</th>
	 *        </tr>
	 *        <tr>
	 *        <td>IBM Content Manager </td>
	 *        <td>Item type and user and system attributes</td>
	 *        </tr>
	 *        <tr>
	 *        <td>IBM FileNet P8 </td>
	 *        <td>Class and user properties</td>
	 *        </tr>
	 *        <tr>
	 *        <td>IBM Content Manager OnDemand </td>
	 *        <td>Application</td>
	 *        </tr>
	 *        </table> <br>
	 *        Private functions should not be used to access public members of the class. Access member variables
	 *        directly. For example:
	 *        <p>
	 *        var attrDef = new AttributeDefinition({ id: "symbolicName", name: "propertyName", dataType: "xs:string"
	 *        });<br>
	 *        console.debug("Data type=" + attrDef.dataType);
	 *        </p>
	 *        <b>Note:</b> Private getter methods, such as getDataType, <b>will be removed</b> in a future release.
	 * @augments ecm.model._ModelObject
	 */
	var AttributeDefinition = declare("ecm.model.AttributeDefinition", [
		_ModelObject,
		_AttributeMixin
	], {
		/** @lends ecm.model.AttributeDefinition.prototype */

		/**
		 * The repository type of the attribute.
		 */
		repositoryType: null,

		/**
		 * The data type of the attribute. Can have these values:
		 * <ul>
		 * <li>xs:date: A date value
		 * <li>xs:time: A time value
		 * <li>xs:timestamp: A time stamp value
		 * <li>xs:decimal: A decimal value
		 * <li>xs:double: A double-precision floating point value
		 * <li>xs:short: A 16-bit signed integer
		 * <li>xs:integer: A 32-bit signed integer
		 * <li>xs:long: A 64-bit signed integer
		 * <li>xs:string: A string
		 * <li>xs:string:alpha: A string, only alphabetic characters
		 * <li>xs:string:alphanum: A string, only alpha-numeric characters
		 * <li>xs:string:ext: A string with extended characters
		 * <li>xs:string:num: A string, only numeric characters
		 * <li>xs:binary: A binary value
		 * <li>xs:object: A reference to an object
		 * <li>xs:guid: A system identifier for an object
		 * </ul>
		 */
		dataType: "xs:string",

		/**
		 * The format of the attribute.
		 */
		format: "",

		/**
		 * The default value to use for the attribute.
		 */
		defaultValue: "",

		/**
		 * Boolean value indicating that a value is required for the attribute.
		 */
		required: false,

		/**
		 * The cardinality of the attribute. This has two valid values:
		 * <ul>
		 * <li>SINGLE: The attribute can have only a single value
		 * <li>LIST: The attribute can have multiple values
		 * </ul>
		 */
		cardinality: "SINGLE",

		/**
		 * Boolean value. <br>
		 * For P8 repositories:<br>
		 * If <code>true</code>, when this attribute is multi-valued then the repository does not allow a particular
		 * value to appear more than once in the values for this attribute.<br>
		 * If <code>false</code>, the repository allows duplicate values.<br>
		 * For CM repositories: <br>
		 * If <code>true</code>, the repository requires a unique value for this attribute across all documents that
		 * are instances of the class that contains this attribute definition.<br>
		 * If <code>false</code>, the value for this attribute can exist in other documents that are instances of the
		 * class that contains this attribute definition.<br>
		 */
		uniqueValues: false,

		/**
		 * For P8 object data type, the name of the class for which a selected document must have.
		 */
		requiredClass: null,

		/**
		 * A choice list for the attribute.
		 */
		choiceList: null,

		/**
		 * Boolean value indicating that the value is read-only.
		 */
		readOnly: false,

		/**
		 * Boolean value indicating that the attribute should be hidden from the user in displays.
		 */
		hidden: false,

		/**
		 * Boolean value indicating that the attribute is system defined.
		 */
		system: false,

		/**
		 * An indicator of the appropriate places where the attribute value should be set. Can have these values:
		 * <ul>
		 * <li>readOnly
		 * <li>onlyBeforeCheckin
		 * <li>onlyOnCreate
		 * <li>readWrite
		 * </ul>
		 */
		settability: "readWrite",

		/**
		 * An array of allowed values for the attribute.
		 */
		allowedValues: null,

		/**
		 * The maximum length in characters for the attribute.
		 */
		maxLength: undefined,

		/**
		 * The minimum length in characters for the attribute.
		 */
		minLength: undefined,

		/**
		 * The minimum value for the attribute.
		 */
		minValue: undefined,

		/**
		 * The maximum value for the attribute.
		 */
		maxValue: undefined,

		/**
		 * The instance of {@link ecm.model.ContentClass} containing this attribute.
		 */
		contentClass: null,
		
		/**
		 * The instance of {@link ecm.model.MetadataTemplate} containing this attribute (Box only).
		 * 
		 * @since 3.0
		 */
		metadataTemplate: null,

		/**
		 * Boolean indicating if this attribute can be searched.
		 */
		searchable: true,

		/**
		 * Boolean indicating if this attribute can be text searched.
		 */
		textSearchable: false,

		/**
		 * Boolean value indicating if this attribute can have a null value.
		 */
		nullable: true,

		/**
		 * Boolean indicating if by changing this attribute other attribute values may become invalid or if their choice
		 * lists may change.
		 */
		hasDependentAttributes: false,

		/**
		 * Boolean indicating if an attribute uses a long column.
		 */
		usesLongColumn: false,

		/**
		 * Returns a human-readable description of the format pattern.
		 */
		formatDescription: "",

		/**
		 * Boolean value indicating whether the attribute can be sorted.
		 */
		orderable: true,

		/**
		 * A P8 marking list for the attribute.
		 */
		markingList: null,

		/**
		 * A boolean value indicating whether this is a sub-class attribute.
		 */
		subClassAttribute: false,

		/**
		 * The foreign key value (CM only).
		 */
		foreignKey: null,

		/**
		 * A boolean value indicating open choice setting (CMIS only).
		 */
		openChoice: false,

		/**
		 * A custom property formatter widget class to use when displaying the attribute within a property grid. For
		 * example: "mywidgets/MyPropertyFormatter"
		 * 
		 * @since 2.0.2
		 */
		propertyFormatter: null,

		/**
		 * A custom property editor widget class to use when creating an editor for the attribute within the
		 * {@link ecm.widget.SinglePropertyEditorFactory}. For example: "mywidgets/MyPropertyEditor"
		 * 
		 * @since 2.0.2
		 */
		propertyEditor: null,

		/**
		 * Indicates the description of the property.
		 * 
		 * @since 2.0.2.3
		 */
		description: "",

		/**
		 * An array of operators that can be selected when building the search criteria. The list of operators must be
		 * appropriate for the attribute's data type, allowed values, and repository type. For example, when an
		 * attribute is a single-valued string data type that uses a long column in a FileNet Content Manager
		 * repository, you can assign the following array of operators: [ "STARTSWITH", "ENDSWITH", "LIKE", "NOTLIKE",
		 * "NULL", "NOTNULL" ].
		 * 
		 * @since 2.0.3.4
		 */
		availableOperators: null,

		/**
		 * @private
		 */
		constructor: function() {
			if (!this.format) {
				this.format = ecm.model.desktop.valueFormatter.getDefaultFormat(this.dataType);
			} else {
				// OD is returning JSON dates of %m\/%d\/%y. The DatePicker doesn't like this format.
				if (this.dataType == "xs:date" && this.format == "%m\/%d\/%y") {
					this.format = "MM/dd/yy"; // "m\/d\/y";
				}
			}
			// choice lists require additional processing to ensure the display names are filled in

			if (this.markingList) {
				this._fillInChoiceListDisplayNames(this.markingList);
			} else if (this.choiceList) {
				this._fillInChoiceListDisplayNames(this.choiceList);
			}
		},

		_fillInChoiceListDisplayNames: function(choiceList) {
			for ( var i in choiceList.choices) {
				var choice = choiceList.choices[i];
				if (choice.choices) {
					this._fillInChoiceListDisplayNames(choice);
				} else {
					if (choice.displayName) {
					} else {
						var offset = (choiceList.valueTimeZoneOffset instanceof Array && choiceList.valueTimeZoneOffset.length > i) ? choiceList.valueTimeZoneOffset[i] : null;
						choice.displayName = ecm.model.desktop.valueFormatter.formatValue(choice.value, this.dataType, this.format, offset);
					}
				}
			}
		},

		/**
		 * Returns a clone of this attribute definition. All contents are cloned except for the content class,
		 * repository, and choice list. The content class, repository, and choice list references are copied.
		 */
		clone: function() {
			// First create a minimal attribute definition.
			var thisClone = new ecm.model.AttributeDefinition({
				id: this.id,
				name: this.name
			});
			// Then clone the contents.
			for ( var prop in this) {
				if (this.hasOwnProperty(prop)) {
					// Except for contentClass and repository (if set). Cloning contentClass enters a cycle because the
					// content class references this attribute definition.
					// We want a copy of the reference to the cached contentClass anyway.
					// Choice lists may be large, so share the reference to the choice list. Choice lists should be replaced, not modified.
					if (prop == "contentClass" || prop == "repository" || prop == "choiceList" || prop == "metadataTemplate") {
						thisClone[prop] = this[prop];
					} else {
						thisClone[prop] = lang.clone(this[prop]);
					}
				}
			}
			return thisClone;
		},

		/**
		 * Adds an extended meta data value to the attribute definition.
		 * 
		 * @param metaName
		 *            A string value holding the addition meta data name
		 * @param metaData
		 *            A object holding the meta data value.
		 */
		setMetaData: function(metaName, metaData) {
			if (!this.metaData) {
				this.metaData = {};
			}
			this.metaData[metaName] = metaData;
		},

		/**
		 * Returns the extended meta data value.
		 * 
		 * @param metaName
		 *            A string holding the meta data field name
		 */
		getMetaData: function(metaName) {
			if (this.metaData) {
				return this.metaData[metaName];
			} else {
				return null;
			}
		}
	});

	/**
	 * Static function that determines if the passed in value is an array.
	 * 
	 * @param value
	 *            The value check for being an array.
	 * @return A boolean value, <code>true>/code> if the passed in value is an array.
	 * @memberof ecm.model.AttributeDefinition
	 * @since 2.0.3.7
	 */
	AttributeDefinition.isArray = function(value) {
		return value != null && (lang.isArray(value) || (!value.propertyIsEnumerable('length') && (typeof value === 'object') && (typeof value.length === 'number')));
	},

	/**
	 * Static function that determines if the passed in value is considered to be empty.
	 * <p>
	 * Empty values are:
	 * <ul>
	 * <li><code>undefined</code></li>
	 * <li><code>null</code></li>
	 * <li><code>""</code> - <code>typeof "string"</code></li>
	 * <li><code>String("")</code> - <code>typeof "object"</code>, <code>instanceof String</code></li>
	 * <li>An empty array or array of length 1 that contains one of the empty values above.</li>
	 * </ul>
	 * </p>
	 * <p>
	 * The numeric value 0 is not considered to be an empty value.
	 * </p>
	 * 
	 * @param value
	 *            The value to test for empty.
	 * @return A boolean value, <code>true>/code> if the passed in value is considered to be empty.
	 * @memberof ecm.model.AttributeDefinition
	 */
	AttributeDefinition.isValueEmpty = function(value) {
		// If value is undefined or null...
		if (value == null) {
			return true;
			// ...else if value is a string...
		} else if (typeof value == "string" || value instanceof String) {
			return (value == "");
			// ...else if value is an array...
		} else if (AttributeDefinition.isArray(value)) {
			if (value.length == 0) {
				return true;
			}
			if (value.length == 1) {
				return AttributeDefinition.isValueEmpty(value[0]);
			}
		}
		return false;
	};

	/**
	 * Static function that determines if the passed in single value is found in the choice list. An empty value
	 * (undefined, null, or "") is treated as in the choice list.
	 * 
	 * @param choiceList
	 *            A choice list
	 * @param value
	 *            A single value (not an array of values) that will checked against the choice list.
	 * @return A boolean value, <code>true>/code> if the given value is found in the choice list.
	 * @memberof ecm.model.AttributeDefinition
	 * @since 2.0.3.7
	 */
	AttributeDefinition.valueInChoiceList = function(choiceList, value) {
		var found = false;
		// The value is valid if it is empty (no value), or if there is no choice list to check (treat as no restrictions).
		if (AttributeDefinition.isValueEmpty(value) || choiceList == null) {
			found = true;
		} else {
			// Treat a choice list that has no choices as not containing the value (no valid choices).
			if (AttributeDefinition.isArray(choiceList.choices)) {
				found = array.some(choiceList.choices, function(choice) {
					if (AttributeDefinition.isArray(choice.choices)) { // nested choice list
						if (AttributeDefinition.valueInChoiceList(choice, value)) {
							return true;
						}
					} else if (choice.value == value) {
						return true;
					}
				});
			}
		}
		return found;
	},

	/**
	 * Static function that determines if the passed in single value, or all values in the array of values, are found in
	 * the choice list. If values is undefined, null, "", [], or [""] then it is treated as in the choice list.
	 * 
	 * @param choiceList
	 *            A choice list
	 * @param value
	 *            A single value or an array of values to check against the choice list. If an array, all of the values
	 *            will be checked.
	 * @return A boolean value, <code>true>/code> if all of the given values are found in the choice list.
	 * @memberof ecm.model.AttributeDefinition
	 * @since 2.0.3.7
	 */
	AttributeDefinition.allValuesInChoiceList = function(choiceList, values) {
		var allFound = false;
		if (AttributeDefinition.isValueEmpty(values) || choiceList == null) {
			allFound = true;
		} else {
			if (AttributeDefinition.isArray(values)) {
				// Create a map of the values for faster value checking.
				var valueMap = {};
				var buildValueMap = function(choices) {
					array.forEach(choices, function(choice) {
						if (choice != null) {
							if (AttributeDefinition.isArray(choice.choices)) {
								buildValueMap(choice.choices);
							} else if (!AttributeDefinition.isValueEmpty(choice.value)) {
								valueMap[choice.value] = choice;
							}
						}
					});
				}
				buildValueMap(choiceList.choices);
				allFound = array.every(values, function(value) {
					return AttributeDefinition.isValueEmpty(value) || valueMap[value] != null;
				});
				valueMap = null;
			} else {
				allFound = AttributeDefinition.valueInChoiceList(choiceList, values);
			}
		}
		return allFound;
	},

	/**
	 * Static function that determines if the passed in single value, or all values in the array of values, and their display names
	 * are found in the choice list. If values is undefined, null, "", [], or [""] then it is treated as in the choice list.
	 * 
	 * @param choiceList
	 *            A choice list
	 * @param values
	 *            A single value or an array of values to check against the choice list. If an array, all of the values
	 *            will be checked.
	 * @param displayNames
	 *            A single display name or an array of display names to check against the choice list. If an array, all of the names
	 *            will be checked.
	 * @return A boolean value, <code>true>/code> if all of the given values and display names are found in the choice list.
	 * @memberof ecm.model.AttributeDefinition
	 * @since 3.0.1
	 */
	AttributeDefinition.allValuesAndDisplayNamesInChoiceList = function(choiceList, values, displayNames) {
		var allFound = false;
		if (AttributeDefinition.isValueEmpty(values) || choiceList == null) {
			allFound = true;
		} else {
			// Create a map of the values for faster value checking.
			var valueMap = {};
			var buildValueMap = function(choices) {
				array.forEach(choices, function(choice) {
					if (choice != null) {
						if (AttributeDefinition.isArray(choice.choices)) {
							buildValueMap(choice.choices);
						} else if (!AttributeDefinition.isValueEmpty(choice.value)) {
							valueMap[choice.value] = choice;
						}
					}
				});
			}
			buildValueMap(choiceList.choices);
			if (!AttributeDefinition.isArray(values))
				values = [ values ];
			allFound = array.every(values, function(value, i) {
				return AttributeDefinition.isValueEmpty(value) || valueMap[value] != null && valueMap[value].displayName == displayNames[i];
			});
			valueMap = null;
		}
		return allFound;
	},

	/**
	 * Static function that returns display names of the passed in single value, or all values in the array of values
	 * found in the choice list.
	 * 
	 * @param choiceList
	 *            A choice list
	 * @param values
	 *            A single value or an array of values to check against the choice list. If an array, all of the values
	 *            will be checked.
	 * @return An array of display names for the given values
	 * @memberof ecm.model.AttributeDefinition
	 * @since 3.0.1
	 */
	AttributeDefinition.retrieveDisplayNamesInChoiceList = function(choiceList, values) {
		var names = [];
		if (!AttributeDefinition.isValueEmpty(values) && choiceList != null) {
			// Create a map of the values for faster value checking.
			var valueMap = {};
			var buildValueMap = function(choices) {
				array.forEach(choices, function(choice) {
					if (choice != null) {
						if (AttributeDefinition.isArray(choice.choices)) {
							buildValueMap(choice.choices);
						} else if (!AttributeDefinition.isValueEmpty(choice.value)) {
							valueMap[choice.value] = choice;
						}
					}
				});
			}
			buildValueMap(choiceList.choices);
			if (!AttributeDefinition.isArray(values))
				values = [ values ];
			names = array.map(values, function(value, i) {
				return (AttributeDefinition.isValueEmpty(value) || valueMap[value] == null) ? "" : valueMap[value].displayName;
			});
			valueMap = null;
		}
		return names;
	},

	/**
	 * Static function that determines if the passed in choice lists are equal.
	 * 
	 * @param choiceList1
	 *            A choice list
	 * @param choiceList2
	 *            Another choice list
	 * @return A boolean value, <code>true>/code> if choice lists are equal.
	 * @memberof ecm.model.AttributeDefinition
	 * @since 3.0.1
	 */
	AttributeDefinition.equalChoiceLists = function(choiceList1, choiceList2) {
		if ((!choiceList1 || !AttributeDefinition.isArray(choiceList1.choices)) && !choiceList2 || !AttributeDefinition.isArray(choiceList2.choices))
			return true;
		if (choiceList1.choices.length != choiceList2.choices.length)
			return false;

		var equal = true;
		for (var i = 0; i < choiceList1.choices.length; i++) {
			var choice1 = choiceList1.choices[i];
			var choice2 = choiceList2.choices[i];
			if (!choice1 && !choice2)
				continue;
			if (!choice1 != !choice2 || AttributeDefinition.isArray(choice1.choices) != AttributeDefinition.isArray(choice2.choices)) {
				equal = false;
				break;
			}
			if (AttributeDefinition.isArray(choice1.choices)) {
				if (!AttributeDefinition.equalChoiceLists(choice1, choice2)) {
					equal = false;
					break;
				}
			} else if (choice1.value != choice2.value || choice1.displayName != choice2.displayName) {
				equal = false;
				break;
			}
		}

		return equal;
	},

	/**
	 * @private
	 * @since 2.0.2
	 */
	AttributeDefinition.createFromJSON = function(itemJSON, contentClass) {
		itemJSON.id = itemJSON.name;
		// The ECM model display name is stored in the name property. 
		itemJSON.name = itemJSON.label;
		itemJSON.contentClass = contentClass;
		itemJSON.repositoryType = contentClass.repository.type;
		itemJSON.maxLength = itemJSON.maxEntry;
		itemJSON.minLength = itemJSON.minEntry;
		itemJSON.openChoice = itemJSON.open_choice;
		itemJSON.allowedValues = itemJSON.validValues;
		itemJSON.updatedDefaultValue = itemJSON.updatedValue;
		//limit the change for od only, and eds enabled
		if (itemJSON.repositoryType == "od" && itemJSON.updatedDefaultValue)
			itemJSON.defaultValue = (itemJSON.value != undefined) ? itemJSON.value : itemJSON.values;
		else
			itemJSON.defaultValue = itemJSON.value;

		// Allow the JSON names to be included in the attribute definition model object.
		// When EDS is used, the JSON names are used to apply the EDS changes.

		return new AttributeDefinition(itemJSON);
	};

	return AttributeDefinition;
});
