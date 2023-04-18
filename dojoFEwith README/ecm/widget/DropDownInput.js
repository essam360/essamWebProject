/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/sniff",
	"dojo/dom-class",
	"dojo/dom-style",
	"dojo/dom-attr",
	"dojo/string",
	"dijit/Tooltip",
	"dijit/form/DropDownButton",
	"../Messages",
	"./_HoverHelpMixin",
	"./_SinglePropertyEditorMixin",
	"./DropDownDialog",
	"./Ellipsis",
	"dojo/text!./templates/DropDownInput.html"
], //
function(declare, lang, has, domClass, domStyle, domAttr, string, Tooltip, DropDownButton, Messages, _HoverHelpMixin, _SinglePropertyEditorMixin, DropDownDialog, Ellipsis, template) {
	/**
	 * @name ecm.widget.DropDownInput
	 * @class Provides a widget that combines a drop-down list and a field. A user can enter a value in the field or
	 *        select a value from the drop-down list.
	 * @augments dijit.form.DropDownButton
	 */
	return declare("ecm.widget.DropDownInput", [
		DropDownButton,
		_HoverHelpMixin,
		_SinglePropertyEditorMixin
	], {
		/** @lends ecm.widget.DropDownInput.prototype */

		templateString: template,
		widgetsInTemplate: false,

		tooltipPosition: [
			"above",
		    "below",
		    "after",
		    "before"
		],
		
		/**
		 * Boolean indicating if the value is required.
		 */
		required: false,
		/**
		 * The value.
		 */
		value: null,
		/**
		 * Prompt message to display if there is an error.
		 */
		promptMessage: "",

		/**
		 * The initial value of the control, used for timestamp properties. Used to compare initial values with those
		 * displayed by the control to know when values have changed.
		 */
		initialDateTimeValues: [],

		/**
		 * @private The drop-down pane.
		 */
		_dropDownPane: null,
		/**
		 * @private The ellipsis.
		 */
		_ellipsis: null,
		/**
		 * @private Boolean indicating if the data is editable.
		 */
		_editable: true,
		/**
		 * @private Boolean indicating if the drop-down list should close onBlur.
		 */
		_allowCloseOnBlur: true,
		/**
		 * @private Boolean indicating the control has been cleared for multi select property editing.
		 */
		_multiSelectClear: false,

		/**
		 * Creates the <code>DropDownDialog</code> widget, sets the label on this widget, and listens to the following
		 * events: <code>onChange</code>, <code>onClickOK</code>, <code>onClickCancel</code>,
		 * <code>openDropDown</code>.
		 */
		postCreate: function() {
			this.inherited(arguments);
			this.textDir = has("text-direction");

			this._dropDownPane = this.dropDown;
			this.dropDown = new DropDownDialog({
				content: this._dropDownPane
			});

			this.connect(this._dropDownPane, "onChange", function() {

				if (this._dropDownPane.getLabel) {
					var label = this._dropDownPane.getLabel();
					if (label.length > 0 || this._multiSelectClear == false) {
						this.set('label', label);
						this._clearMultiSelectEmpty();
					}
				}
				if (this._dropDownPane.getValue) {
					var value = this._dropDownPane.getValue();
					if (value.length > 0 || this._multiSelectClear == false) {
						this.set('value', this._dropDownPane.getValue());
					}
				}
				this.closeDropDown(true);
			});

			this.connect(this.dropDown, "onClickOK", "_onClickOK");

			this.connect(this.dropDown, "onClickCancel", function() {
				if (this._dropDownPane.onHide)
					this._dropDownPane.onHide();
				this.closeDropDown(true);
			});

			this.connect(this, "openDropDown", function() {
				if (this._dropDownPane.onShow) {
					this._dropDownPane.onShow();
				}
			});

			this._ellipsis = new Ellipsis();
			if (this.readOnly) {
				this.readOnly = false;
				this.dropDown.setDisabledOKButton(true);
				this._editable = false;
				domClass.add(this._ellipsis.domNode, "readOnly");
			}
			if (has("dojo-bidi") && this.get("label")) {
				try {
					this.applyTextDir(this._ellipsis.containerNode, this.get("label"));
				} catch(e) {
				}
			}

			this.containerNode.appendChild(this._ellipsis.domNode);
			setTimeout(lang.hitch(this, function() {
				this._ellipsis.set("content", this.label);
				this._ellipsis.layout();

				// When the surrounding containers are not yet sized, 
				// the ellipsis height is set to 0 and the label is not displayed.
				// Check for this condition and set the height to the standard size.
				if (this._ellipsis.domNode) {
					var h = domStyle.get(this._ellipsis.domNode, "height");
					if (h == 0) {
						domStyle.set(this._ellipsis.domNode, "height", "15px");
					}
				}
			}), 0);

			if (this.width) {
				this.containerNode.style.width = this.width;
				this._ellipsis.domNode.style.width = this.width;
			}
		},

		/**
		 * @private
		 */
		_onClickOK: function(labelValues) {
			if (this._dropDownPane.onSave) {
				var onSaveSuccessful = this._dropDownPane.onSave();
				if (onSaveSuccessful != undefined && onSaveSuccessful == false) {
					return false;
				}
			}
			if (this._dropDownPane.getLabel) {
				var label = this._dropDownPane.getLabel();
				if (label.length > 0 || this._multiSelectClear == false) {
					this.set('label', label);
					this._clearMultiSelectEmpty();
				}
			}
			if (this._dropDownPane.getValue) {
				var value = this._dropDownPane.getValue();
				if (value.length > 0 || this._multiSelectClear == false) {
					this.set('value', this._dropDownPane.getValue());
				}
			}
			this.closeDropDown(true);
		},

		setDropDownClass: function(className) {
			domClass.add(this._popupStateNode, className);
		},

		/**
		 * Clears control for multi-value editing
		 * 
		 * @param kwArgs
		 *            Object containing information about the property.
		 */
		setMultiSelectClear: function(kwArgs) {
			if (kwArgs.cardinality == "SINGLE" && kwArgs.choiceListNested == true) {
				this.value = "";
			} else {
				if (kwArgs.choiceList != null) {
					this._dropDownPane.selectedValues = [];
				} else {
					this._dropDownPane.setLabelArray([]);
				}
			}
			this._setLabelAttr(ecm.messages.properties_value_empty);
			domClass.add(this.domNode, "ecmMultiSelectClearValueStyle");
			domClass.add(this._buttonNode, "ecmMultiSelectClearValueColor");
			this._multiSelectClear = true;
		},

		/**
		 * Sets text in the control to "read only". Used in multi item editing for read only properties.
		 */
		displayReadOnlyText: function() {
			this._setLabelAttr(ecm.messages.properties_value_read_only);
			domClass.add(this.domNode, "ecmMultiSelectClearValueStyle");
			domClass.add(this._buttonNode, "ecmMultiSelectClearValueColor");
		},

		/**
		 * @private
		 */
		_clearMultiSelectEmpty: function() {
			if (this._multiSelectClear == true && this.label.length > 0) {
				// Clear styles that may have been set in the multi select properties dialog.
				domClass.remove(this.domNode, "ecmMultiSelectClearValueStyle");
				domClass.remove(this._buttonNode, "ecmMultiSelectClearValueColor");
				this._multiSelectClear = false;
			}
		},

		/**
		 * Returns the value from the drop-down pane.
		 * 
		 * @return The value from the drop-down pane. If the drop-down pane is a <code>SingleValueTreePane</code>,
		 *         then the value is not an array. Otherwise the value is an array.
		 */
		getValue: function() {
			if (this._dropDownPane && this._dropDownPane.isInstanceOf && this._dropDownPane.isInstanceOf(ecm.widget.SingleValueTreePane)) {
				return this.get("value") ? this.get('value') : "";
			} else {
				// For MVCP timestamp properties, compare the current values in the control with the initial values, ignoring
				// seconds. Necessary so that values with seconds will be compared properly in the mid tier when updating property values.
				// (This control does not display the seconds portion of the property value).
				if (this.initialDateTimeValues != null && this.initialDateTimeValues.length > 0) {
					var currentValues = this.get("value") ? this.get('value') : [];
					var foundDifference = this.initialDateTimeValues.length == currentValues.length ? false : true;
					if (foundDifference == false) {
						for (var index = 0; index < currentValues.length && index < currentValues.length; index++) {
							var initialValue = this.initialDateTimeValues[index].substring(0, 17);
							var controlValue = currentValues[index].substring(0, 17);
							if (initialValue != controlValue) {
								foundDifference = true;
								break;
							}
						}
					}
					if (foundDifference) {
						return currentValues;
					} else {
						return this.initialDateTimeValues;
					}
				} else {
					return this.get("value") ? this.get('value') : [];
				}
			}
		},

		/**
		 * Determines if the drop-down input and dialog is editable.
		 * 
		 * @return {Boolean} A value of <code>true</code> if the drop-down input and dialog are editable, otherwise
		 *         <code>false</code>.
		 */
		isEditable: function() {
			return this._editable;
		},

		/**
		 * Cleans up the data when the widget is destroyed.
		 */
		destroy: function() {
			Tooltip.hide(this.domNode);
			if (this._ellipsis) {
				this._ellipsis.destroy();
				this._ellipsis = null;
			}
			if (this.dropDown) {
				this.dropDown.destroy();
				this.dropDown = null;
			}
			if (this._dropDownPane) {
				this._dropDownPane.destroy();
				this._dropDownPane = null;
			}
			this.inherited(arguments);
		},

		/**
		 * Sets the <code>label</code> attribute.
		 * 
		 * @param content
		 *            The value to show in the widget when the drop-down dialog is closed.
		 */
		_setLabelAttr: function(content) {
			this._set("label", content);
			this.set("title", content);
			if (this._originalLabel) {
				domAttr.set(this.focusNode, "aria-label", this._originalLabel + " " + content);
			}
			if (this._ellipsis) {
				this._ellipsis.set("content", content);
				if (has("dojo-bidi") && content) {
					try {
						this.applyTextDir(this._ellipsis.containerNode, content);  
					} catch(e) {
					}
				}
				this._ellipsis.layout();
			}
		},

		_setTitleAttr: function(title) {
			if (has("dojo-bidi") && this._ellipsis && this._ellipsis.containerNode) {
				domAttr.set(this._ellipsis.containerNode, "title", title);
				domAttr.remove(this.titleNode, "title");
			} else {
				domAttr.set(this.titleNode, "title", title);
			}
		},
		
		_setOriginalLabelAttr: function(content) {
			if (content) {
				this._originalLabel = string.substitute(ecm.messages.append_colon, [ content ]);
				var label = this.get("label");
				domAttr.set(this.focusNode, "aria-label", this._originalLabel + label);
			}
		},
		
		/**
		 * Returns the value.
		 */
		_getValueAttr: function(value) {
			return this.value;
		},

		/**
		 * Sets the value, validates the value, and calls <code>onChange</code>.
		 * 
		 * @param value
		 *            The value to set.
		 */
		_setValueAttr: function(value) {
			//we don't need to call the super class's method
			//_setValueAttr is not a function in the _FormWidgetMixin ;
			// in dojo versions >1.7 they can be array/string etc.
			// the ideal way to achieve what this function does is to watch for the value changes.
			this.value = value;
			this.validate(false);
			this.onChange(value);
		},

		/**
		 * Determines if the value is valid.
		 * 
		 * @return {Boolean} A value of <code>true</code> if the value is valid, otherwise <code>false</code>.
		 */
		isValid: function() {
			var isValid = !this.required || !this._isEmpty(this.value);
			if (this.customErrorMessage && this.customErrorValue == this.value) {
				isValid = false;
			}
			return isValid;
		},

		/**
		 * @private Returns Boolean indicating if the input value is empty.
		 */
		_isEmpty: function(value) {
			return (this.trim ? /^\s*$/ : /^$/).test(value);
		},

		/**
		 * Validates the drop-down value.
		 * 
		 * @param isFocused
		 *            A Boolean value indicating if this widget has the focus.
		 * @return {Boolean} A value of <code>true</code> if the drop-down value is valid, otherwise
		 *         <code>false</code>.
		 */
		validate: function(isFocused) {
			var message = "";
			var isValid = this.disabled || this.isValid(isFocused);
			var isEmpty = this._isEmpty(this.value);
			var state = ""; //var state = isValid ? "" : "Error";
			if (!isValid && this._hasBeenBlurred) {
				state = "Error";
			}
			this._set("state", state);
			if (this.state == "Error") {
				domClass.add(this.domNode, "Error");
				if (isFocused && this._hasBeenBlurred) {
					message = this.getErrorMessage();
				}
			} else {
				domClass.remove(this.domNode, "Error");
				if (this._editable && this._isEmpty(this.value)) {
					message = this.promptMessage;
				}
			}
			this.displayMessage(message);
			return isValid;
		},

		/**
		 * Displays the input message in a tooltip.
		 * 
		 * @param message
		 *            String to show in the tooltip.
		 */
		displayMessage: function(message) {
			Tooltip.hide(this.domNode);
			if (message) { // if (message && this._focused) {
				Tooltip.show(message, this.domNode, this.tooltipPosition, !this.isLeftToRight(), this.textDir);
			}
		},

		/**
		 * @private When focus on this widget, validate it.
		 */
		_onFocus: function() {
			this.validate(true);
		},

		/**
		 * @private When remove focus on from this widget, if _allowCloseOnBlur is true, validate the widget and close
		 *          the drop down.
		 */
		_onBlur: function() {
			if (this._allowCloseOnBlur) {
				this.validate(false);
				this.displayMessage(''); // erases the tooltip
				this.inherited(arguments);
			}
			if (this._dropDownPane && this._dropDownPane.onHide)
				this._dropDownPane.onHide();
		},

		/**
		 * @private Event called when the value is set.
		 */
		_onChange: function(value) {
			if (this.dropDown && this.dropDown.onHide)
				this.dropDown.onHide();
			this.inherited(arguments);
		},

		/**
		 * Retrieves the error message.
		 * 
		 * @return The error message string.
		 */
		getErrorMessage: function(/*Boolean*/isFocused) {
			if (this.customErrorMessage && this.customErrorValue == this.value) {
				return this.customErrorMessage;
			} else {
				return ecm.messages.property_missingMessage;
			}
		},

		/**
		 * Sets the custom validation error and validates the widget.
		 * 
		 * @param errorMessage
		 *            The custom validation error.
		 */
		setCustomValidationError: function(errorMessage) {
			this.customErrorMessage = errorMessage;
			this.customErrorValue = this.value; // to know for what value the error is appropriate
			// Set this to true so that the error state and message are displayed immediately.
			this._hasBeenBlurred = true;
			this.validate();
		},

		/**
		 * Sets whether or not the drop-down list should close when it loses focus.
		 * 
		 * @param allowCloseOnBlur
		 *            A Boolean value. If <code>true</code>, the drop-down list is automatically closed when it loses
		 *            focus.
		 */
		setAllowCloseOnBlur: function(allowCloseOnBlur) {
			this._allowCloseOnBlur = allowCloseOnBlur;
		},

		/**
		 * @private adding missing event callback
		 */
		_onButtonClick: function() {
		}
	});
});
