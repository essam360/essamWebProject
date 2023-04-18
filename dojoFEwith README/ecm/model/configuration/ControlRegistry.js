/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"pvr/widget/editors/CheckBoxEditor",
	"pvr/widget/editors/CheckBoxListEditor",
	"pvr/widget/editors/DateTextBoxEditor",
	"pvr/widget/editors/DateTimeTextBoxEditor",
	"pvr/widget/editors/DropDownGridEditor",
	"pvr/widget/editors/DropDownListEditor",
	"pvr/widget/editors/DropDownSloshBucketEditor",
	"pvr/widget/editors/DropDownTreeSelectEditor",
	"pvr/widget/editors/DropDownTreeSloshBucketEditor",
	"pvr/widget/editors/FilteringSelectEditor",
	"pvr/widget/editors/NumberSpinnerEditor",
	"pvr/widget/editors/NumberTextBoxEditor",
	"pvr/widget/editors/RadioButtonSetEditor",
	"pvr/widget/editors/SelectEditor",
	"pvr/widget/editors/StaticTextEditor",
	"pvr/widget/editors/TextareaEditor",
	"pvr/widget/editors/TextBoxEditor",
	"pvr/widget/editors/TimeTextBoxEditor",
	"pvr/widget/editors/formatters/DateTimeFormatter",
	"pvr/widget/editors/formatters/NumberFormatter",
	"pvr/widget/editors/formatters/TextFormatter",
	"dojo/i18n!pvr/nls/common"
], function(declare, CheckBoxEditor, CheckBoxListEditor, DateTextBoxEditor, DateTimeTextBoxEditor, DropDownGridEditor, DropDownListEditor, DropDownSloshBucketEditor, DropDownTreeSelectEditor, DropDownTreeSloshBucketEditor, FilteringSelectEditor, NumberSpinnerEditor, NumberTextBoxEditor, RadioButtonSetEditor, SelectEditor, StaticTextEditor, TextareaEditor, TextBoxEditor, TimeTextBoxEditor, DateTimeFormatter, NumberFormatter, TextFormatter, resources) {

	return {
//		widgets: {
//			// TODO Define a standard widget registration format.
//		},
		editors: {
			editorConfigs: {
				"checkBox": {
					label: resources.editorLabel.checkBox,
					editorClass: CheckBoxEditor,
					supportsLabel: true,
					falseIfNull: true,
					minimumFieldWidth: "16px",
					defaultFieldWidth: "16px",
					defaultColumnWidth: "60px"
				},
				"checkBoxList": {
					label: resources.editorLabel.checkBoxList,
					editorClass: CheckBoxListEditor
				},
				"dateTextBox": {
					label: resources.editorLabel.dateTextBox,
					editorClass: DateTextBoxEditor,
					formatterClass: DateTimeFormatter
				},
				"dateTimeTextBox": {
					label: resources.editorLabel.dateTimeTextBox,
					editorClass: DateTimeTextBoxEditor,
					formatterClass: DateTimeFormatter,
					minimumFieldWidth: "44px",
					defaultFieldWidth: "364px",
					defaultColumnWidth: "364px"
				},
				"dropDownGrid": {
					label: resources.editorLabel.dropDownGrid,
					editorClass: DropDownGridEditor
				},
				"dropDownList": {
					label: resources.editorLabel.dropDownList,
					editorClass: DropDownListEditor
				},
				"dropDownSloshBucket": {
					label: resources.editorLabel.dropDownSloshBucket,
					editorClass: DropDownSloshBucketEditor
				},
				"dropDownTreeSelect": {
					label: resources.editorLabel.dropDownTreeSelect,
					editorClass: DropDownTreeSelectEditor
				},
				"dropDownTreeSloshBucket": {
					label: resources.editorLabel.dropDownTreeSloshBucket,
					editorClass: DropDownTreeSloshBucketEditor
				},
				"filteringSelect": {
					label: resources.editorLabel.filteringSelect,
					editorClass: FilteringSelectEditor
				},
				"numberSpinner": {
					label: resources.editorLabel.numberSpinner,
					editorClass: NumberSpinnerEditor,
					formatterClass: NumberFormatter,
					localizedSettings: [
						"hint"
					]
				},
				"numberTextBox": {
					label: resources.editorLabel.numberTextBox,
					editorClass: NumberTextBoxEditor,
					formatterClass: NumberFormatter,
					localizedSettings: [
						"hint"
					]
				},
				"radioButtonSet": {
					label: resources.editorLabel.radioButtonSet,
					editorClass: RadioButtonSetEditor
				},
				"select": {
					label: resources.editorLabel.select,
					editorClass: SelectEditor
				},
				"staticText": {
					label: resources.editorLabel.staticText,
					editorClass: StaticTextEditor,
					defaultFieldWidth: "100%"
				},
				"textArea": {
					label: resources.editorLabel.textArea,
					editorClass: TextareaEditor,
					formatterClass: TextFormatter,
					localizedSettings: [
						"hint"
					],
					defaultFieldWidth: "100%"
				},
				"textBox": {
					label: resources.editorLabel.textBox,
					editorClass: TextBoxEditor,
					formatterClass: TextFormatter,
					localizedSettings: [
						"hint"
					]
				},
				"timeTextBox": {
					label: resources.editorLabel.timeTextBox,
					editorClass: TimeTextBoxEditor,
					formatterClass: DateTimeFormatter
				}
			},
			mappings: {
				types: {
					"string": {
						single: {
							editorConfigs: [
								"textBox",
								"textArea"
							],
							defaultEditorConfig: "textBox"
						},
						multi: {
							editorConfigs: [
								"dropDownGrid",
								"dropDownList"
							],
							defaultEditorConfig: "dropDownList"
						}
					},
					"integer": {
						single: {
							editorConfigs: [
								"numberTextBox",
								"numberSpinner"
							],
							defaultEditorConfig: "numberTextBox"
						},
						multi: {
							editorConfigs: [
								"dropDownGrid",
								"dropDownList"
							],
							defaultEditorConfig: "dropDownList"
						}
					},
					"float": {
						single: {
							editorConfigs: [
								"numberTextBox",
								"numberSpinner"
							],
							defaultEditorConfig: "numberTextBox"
						},
						multi: {
							editorConfigs: [
								"dropDownGrid",
								"dropDownList"
							],
							defaultEditorConfig: "dropDownList"
						}
					},
					"boolean": {
						single: {
							editorConfigs: [
								"checkBox",
								"select",
								"radioButtonSet"
							],
							defaultEditorConfig: "select"
						},
						multi: {
							editorConfigs: [
								"dropDownGrid",
								"dropDownList"
							],
							defaultEditorConfig: "dropDownList"
						}
					},
					"date": {
						single: {
							editorConfigs: [
								"dateTextBox"
							],
							defaultEditorConfig: "dateTextBox"
						},
						multi: {
							editorConfigs: [
								"dropDownGrid",
								"dropDownList"
							],
							defaultEditorConfig: "dropDownList"
						}
					},
					"time": {
						single: {
							editorConfigs: [
								"timeTextBox"
							],
							defaultEditorConfig: "timeTextBox"
						},
						multi: {
							editorConfigs: [
								"dropDownGrid",
								"dropDownList"
							],
							defaultEditorConfig: "dropDownList"
						}
					},
					"datetime": {
						single: {
							editorConfigs: [
								"dateTimeTextBox",
								"dateTextBox",
								"timeTextBox"
							],
							defaultEditorConfig: "dateTimeTextBox"
						},
						multi: {
							editorConfigs: [
								"dropDownGrid",
								"dropDownList"
							],
							defaultEditorConfig: "dropDownList"
						}
					}
				},
				choices: {
					flat: {
						single: {
							editorConfigs: [
								"select",
								"filteringSelect",
								"radioButtonSet",
								"staticText"
							],
							defaultEditorConfig: "filteringSelect"
						},
						multi: {
							editorConfigs: [
								"dropDownGrid",
								"dropDownList",
								"dropDownSloshBucket"
							],
							defaultEditorConfig: "dropDownSloshBucket"
						}
					},
					hierarchical: {
						single: {
							editorConfigs: [
								"dropDownTreeSelect"
							],
							defaultEditorConfig: "dropDownTreeSelect"
						},
						multi: {
							editorConfigs: [
								"dropDownTreeSloshBucket"
							],
							defaultEditorConfig: "dropDownTreeSloshBucket"
						}
					}
				},
				multiEditors: {
					editorConfigs: [
						"dropDownGrid",
						"dropDownList"
					],
					defaultEditorConfig: "dropDownList" // Set default to be ICN version of multi-value pickers
				}
			}
		}
	};
});
