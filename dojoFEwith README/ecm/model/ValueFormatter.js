/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/config",
	"dojo/_base/lang",
	"dojo/date/locale",
	"dojo/date/stamp",
	"dojo/number",
	"./_ModelObject",
	"dojox/string/BidiComplex",
	"dojox/date/islamic",
	"dojox/date/islamic/Date",
	"dojox/date/islamic/locale",
	"dojox/date/hebrew",
	"dojox/date/hebrew/Date",
	"dojox/date/hebrew/locale",
	"dojox/date/umalqura",
	"dojox/date/umalqura/Date",
	"dojox/date/umalqura/locale",
	"dojo/has"
], function(declare, config, lang, locale, stamp, number, _ModelObject, BidiComplex, islamic, islamicDate, islamicLocale, hebrew, hebrewDate, hebrewLocale, umalqura, umalquraDate, umalquraLocale, has) {

	/**
	 * @name ecm.model.ValueFormatter
	 * @class Represents the format that is applied to a property value prior to that value being displayed in the user
	 *        interface.
	 * @augments ecm.model._ModelObject
	 */
	return declare("ecm.model.ValueFormatter", [
		_ModelObject
	], {
		/** @lends ecm.model.ValueFormatter.prototype */

		/**
		 * @private
		 */
		constructor: function() {
			this.locale = config.locale; // Default to dojo's locale
			this.numberBundle = dojo.i18n.getLocalization("dojo.cldr", "number", this.locale);
			this.gregorian = dojo.i18n.getLocalization("dojo.cldr", "gregorian", this.locale);
		},

		/**
		 * Set the locale to use for formatting values.
		 * 
		 * @param locale
		 *            String locale value to use for the bundles.
		 * @since 2.0.2
		 */
		setLocale: function(locale) {
			if (locale) {
				this.locale = locale;
				this.numberBundle = dojo.i18n.getLocalization("dojo.cldr", "number", this.locale);
				this.gregorian = dojo.i18n.getLocalization("dojo.cldr", "gregorian", this.locale);
			}
		},

		/**
		 * Returns the separator used when displaying multi-value values.
		 */
		getSeparator: function() {
			return this.numberBundle["list"] || ",";
		},

		/**
		 * Returns the decimal point used when displaying double or decimal values.
		 */
		getDecimalPoint: function() {
			return this.numberBundle["decimal"] || ".";
		},

		formatTimestampHideTime: function(value, valueTimeZoneOffset) {
			var formattedValue = "";

			if (value != null && value != "") {
				var formatter = ecm.model.desktop.valueFormatter.getDefaultFormat("xs:date");
				if (lang.isArray(value)) {
					for (valueIndex in value) {
						var valueInstance = value[valueIndex];
						var valueTimezoneOffsetInstance = null;
						if (valueTimeZoneOffset && valueTimeZoneOffset instanceof Array && valueTimeZoneOffset.length > valueIndex) {
							valueTimezoneOffsetInstance = valueTimeZoneOffset[valueIndex];
						}

						if (formattedValue.length == 0) {
							formattedValue = this.formatTimestampHideTime(valueInstance, valueTimezoneOffsetInstance);
						} else {
							formattedValue += this.getSeparator() + " " + this.formatTimestampHideTime(valueInstance, valueTimezoneOffsetInstance);
						}
					}
				} else {
					var date = stamp.fromISOString(value);
					if (date) {
						if (valueTimeZoneOffset != null && !isNaN(valueTimeZoneOffset))
							date = new Date(date.getTime() + date.getTimezoneOffset() * 60000 + valueTimeZoneOffset * 60000);
						value = stamp.toISOString(date);
					}

					formattedValue = this.formatValue(value, "xs:date", formatter);
				}
			}
			return formattedValue;
		},

		/**
		 * Formats a value.
		 * 
		 * @param value
		 *            The value to format. For multi-values this will be an array of values.
		 * @param type
		 *            The type of the value, such as xs:string, xs:timestamp, etc. See
		 *            {@link ecm.model.AttributeDefinition} for data type definitions.
		 * @param valueTimeZoneOffset
		 *            The time zone offset of the value of type xt:timestamp.
		 */
		formatValue: function(value, type, format, valueTimeZoneOffset, separator) {
			var formattedValue = "";
			if (lang.isArray(value)) {
				for ( var i in value) {
					var v = value[i];
					var o = (valueTimeZoneOffset && valueTimeZoneOffset instanceof Array && valueTimeZoneOffset.length > i) ? valueTimeZoneOffset[i] : null;
					if (!formattedValue) {
						formattedValue = this.formatValue(v, type, format, o);
					} else {
						formattedValue += (separator ? separator : this.getSeparator()) + " " + this.formatValue(v, type, null, o);
					}
				}
			} else {
				// If the value is undefined or null...
				if (value == null) {
					formattedValue = "";
				} else {
					// Format based on special formatting if provided, otherwise based on type
					if (format == "socialCount") {
						formattedValue = value ? value : "";
					} else if (format == "fileSize") {
						var valueFloat = parseFloat(value);
						if (isNaN(valueFloat)) {
							// Not a valid number
							formattedValue = "" + value;
						} else if (valueFloat == 0) {
							// Empty file
							// Showing 0 KB
							formattedValue = "0 KB";
						} else if (valueFloat < (1024 * 1024)) {
							if (valueFloat / 1024 < 1) {
								formattedValue = "1 KB";
							} else {
								formattedValue = number.format((valueFloat / 1024.0), {
									locale: this.locale,
									places: 0
								}) + " KB";
							}
						} else {
							var valueMB = number.format((valueFloat / 1024.0 / 1024.0), {
								locale: this.locale,
								places: 1
							});
							var temp = number.parse(valueMB);
							if (temp < 1024) {
								// Less than 1GB
								formattedValue = valueMB + " MB";
							} else {
								// Greater than or equal to 1GB
								formattedValue = number.format((valueFloat / 1024.0 / 1024.0 / 1024.0), {
									locale: this.locale,
									places: 1
								}) + " GB";
							}
						}
					} else if (format == "path") {
						formattedValue = this.formatPath(value);
					} else if (type == "xs:date") {
						if (!value || value == "") {
							formattedValue = ""; // explicit check for no date value, display ""
						} else {
							var date = stamp.fromISOString(value);
							if (date == null) {
								return ecm.messages.error;
							}
							if (this.locale == "ar" && document.dir == "ltr") {
								format = "d/M/yyyy";
							}
							if (format) {
								if (has("calendar-type") == "hijri") {//calendar type chosen hijri
									var dateIslamic = new dojox.date.islamic.Date();
									var islamicDate = dateIslamic.fromGregorian(date);
									formattedValue = dojox.date.islamic.locale.format(islamicDate, {
										islamicLocale: this.locale,
										selector: "date",
										datePattern: format
									});
								} else if (has("calendar-type") == "hebrew") {//calendar type chosen hebrew
									var dateHebrew = new dojox.date.hebrew.Date();
									var hebrewDate = dateHebrew.fromGregorian(date);
									formattedValue = dojox.date.hebrew.locale.format(hebrewDate, {
										hebrewLocale: this.locale,
										selector: "date",
										datePattern: format
									});
								} else if (has("calendar-type") == "UmmAlQura") {//calendar type chosen Umm al-Qura
									var dateUmmAlQura = new dojox.date.umalqura.Date();
									var umalquraDate = dateUmmAlQura.fromGregorian(date);
									formattedValue = dojox.date.umalqura.locale.format(umalquraDate, {
										umalquraLocale: this.locale,
										selector: "date",
										datePattern: format
									});
								} else {
									formattedValue = locale.format(date, {
										locale: this.locale,
										selector: "date",
										datePattern: format
									});
								}
							} else {
								if (has("calendar-type") == "hijri") { //calendar type chosen hijri
									var dateIslamic = new dojox.date.islamic.Date();
									var islamicDate = dateIslamic.fromGregorian(date);
									formattedValue = dojox.date.islamic.locale.format(islamicDate, {
										islamicLocale: this.locale,
										selector: "date",
										formatLength: "short",
										fullYear: true
									});
								} else if (has("calendar-type") == "hebrew") {//calendar type chosen hebrew
									var dateHebrew = new dojox.date.hebrew.Date();
									var hebrewDate = dateHebrew.fromGregorian(date);
									formattedValue = dojox.date.hebrew.locale.format(hebrewDate, {
										hebrewLocale: this.locale,
										selector: "date",
										formatLength: "short",
										fullYear: true
									});
								} else if (has("calendar-type") == "UmmAlQura") {//calendar type chosen Umm al-Qura
									var dateUmmAlQura = new dojox.date.umalqura.Date();
									var umalquraDate = dateUmmAlQura.fromGregorian(date);
									formattedValue = dojox.date.umalqura.locale.format(umalquraDate, {
										umalquraLocale: this.locale,
										selector: "date",
										formatLength: "short",
										fullYear: true
									});
								} else {
									formattedValue = locale.format(date, {
										locale: this.locale,
										selector: "date",
										formatLength: "short",
										fullYear: true
									});
								}
							}
						}
					} else if (type == "xs:time") {
						if (!value || value == "") {
							formattedValue = ""; // explicit check for no time value, display ""
						} else {
							var date = stamp.fromISOString(value);
							if (format) {
								if (has("calendar-type") == "hijri") { //calendar type chosen hijri
									var dateIslamic = new dojox.date.islamic.Date();
									var islamicDate = dateIslamic.fromGregorian(date);
									formattedValue = dojox.date.islamic.locale.format(islamicDate, {
										islamicLocale: this.locale,
										selector: "time",
										timePattern: format
									});
								} else if (has("calendar-type") == "hebrew") {//calendar type chosen hebrew
									var dateHebrew = new dojox.date.hebrew.Date();
									var hebrewDate = dateHebrew.fromGregorian(date);
									formattedValue = dojox.date.hebrew.locale.format(hebrewDate, {
										hebrewLocale: this.locale,
										selector: "time",
										timePattern: format
									});
								} else if (has("calendar-type") == "UmmAlQura") {//calendar type chosen Umm al-Qura
									var dateUmmAlQura = new dojox.date.umalqura.Date();
									var umalquraDate = dateUmmAlQura.fromGregorian(date);
									formattedValue = dojox.date.umalqura.locale.format(umalquraDate, {
										umalquraLocale: this.locale,
										selector: "time",
										timePattern: format
									});
								} else {
									formattedValue = locale.format(date, {
										locale: this.locale,
										selector: "time",
										timePattern: format
									});
								}
							} else {
								if (has("calendar-type") == "hijri") {//calendar type chosen hijri
									var dateIslamic = new dojox.date.islamic.Date();
									var islamicDate = dateIslamic.fromGregorian(date);
									formattedValue = dojox.date.islamic.locale.format(islamicDate, {
										islamicLocale: this.locale,
										selector: "time",
										formatLength: "short"
									});
								} else if (has("calendar-type") == "hebrew") {//calendar type chosen hebrew
									var dateHebrew = new dojox.date.hebrew.Date();
									var hebrewDate = dateHebrew.fromGregorian(date);
									formattedValue = dojox.date.hebrew.locale.format(hebrewDate, {
										hebrewLocale: this.locale,
										selector: "time",
										formatLength: "short"
									});
								} else if (has("calendar-type") == "UmmAlQura") {//calendar type chosen Umm al-Qura
									var dateUmmAlQura = new dojox.date.umalqura.Date();
									var umalquraDate = dateUmmAlQura.fromGregorian(date);
									formattedValue = dojox.date.umalqura.locale.format(umalquraDate, {
										umalquraLocale: this.locale,
										selector: "time",
										formatLength: "short"
									});
								} else {
									formattedValue = locale.format(date, {
										locale: this.locale,
										selector: "time",
										formatLength: "short"
									});
								}
							}
						}
					} else if (type == "xs:timestamp") {
						if (!value || value == "") {
							formattedValue = ""; // explicit check for no datetime value, display ""
						} else {
							var date = stamp.fromISOString(value);
							if (date && valueTimeZoneOffset != null && !isNaN(valueTimeZoneOffset)) {
								date = new Date(date.getTime() + date.getTimezoneOffset() * 60000 + valueTimeZoneOffset * 60000);
							}
							if (this.locale == "ar" && document.dir == "ltr") {
								format = "d/M/yyyy h:mm a";
							}
							if (format) {
								if (has("calendar-type") == "hijri") {//calendar type chosen hijri
									var dateIslamic = new dojox.date.islamic.Date();
									var islamicDate = dateIslamic.fromGregorian(date);
									formattedValue = dojox.date.islamic.locale.format(islamicDate, {
										islamicLocale: this.locale,
										locale: this.locale,
										selector: "date",
										datePattern: format
									});
								} else if (has("calendar-type") == "hebrew") {//calendar type chosen hebrew
									var dateHebrew = new dojox.date.hebrew.Date();
									var hebrewDate = dateHebrew.fromGregorian(date);
									formattedValue = dojox.date.hebrew.locale.format(hebrewDate, {
										hebrewLocale: this.locale,
										locale: this.locale,
										selector: "date",
										datePattern: format
									});
								} else if (has("calendar-type") == "UmmAlQura") {//calendar type chosen Umm al-Qura
									var dateUmmAlQura = new dojox.date.umalqura.Date();
									var umalquraDate = dateUmmAlQura.fromGregorian(date);
									formattedValue = dojox.date.umalqura.locale.format(umalquraDate, {
										umalquraLocale: this.locale,
										locale: this.locale,
										selector: "date",
										datePattern: format
									});
								} else {
									formattedValue = locale.format(date, {
										locale: this.locale,
										selector: "date",
										datePattern: format
									});
								}
							} else {
								if (has("calendar-type") == "hijri") {//calendar type chosen hijri
									var dateIslamic = new dojox.date.islamic.Date();
									var islamicDate = dateIslamic.fromGregorian(date);
									formattedValue = dojox.date.islamic.locale.format(islamicDate, {
										islamicLocale: this.locale,
										formatLength: "short",
										fullYear: true
									});
								} else if (has("calendar-type") == "hebrew") {//calendar type chosen hebrew
									var dateHebrew = new dojox.date.hebrew.Date();
									var hebrewDate = dateHebrew.fromGregorian(date);
									formattedValue = dojox.date.hebrew.locale.format(hebrewDate, {
										hebrewLocale: this.locale,
										formatLength: "short",
										fullYear: true
									});
								} else if (has("calendar-type") == "UmmAlQura") {//calendar type chosen Umm al-Qura
									var dateUmmAlQura = new dojox.date.umalqura.Date();
									var umalquraDate = dateUmmAlQura.fromGregorian(date);
									formattedValue = dojox.date.umalqura.locale.format(umalquraDate, {
										umalquraLocale: this.locale,
										formatLength: "short",
										fullYear: true
									});
								} else {
									formattedValue = locale.format(date, {
										locale: this.locale,
										formatLength: "short",
										fullYear: true
									});
								}
							}
						}
					} else if (type == "xs:boolean") {
						if (value === "") {
							formattedValue = "";
						} else {
							formattedValue = value ? ecm.messages.true_label : ecm.messages.false_label;
						}
					} else if (type == "xs:decimal" || type == "xs:double" || type == "xs:score") {
						if (value === "") {
							formattedValue = "";
						} else {
							// Format the number using the given pattern or the locale specific pattern
							// Note: numbers with exponents can't be formatted so we just replace the decimal point
							var decimalPlaces = -1;
							if ((type == "xs:double" || type == "xs:score") && !(value + "").match(/E/i)) {
								// Preserve precision during formatting
								var index = (value + "").indexOf(".");
								decimalPlaces = index > 0 ? ((value + "").length - index - 1) : 0;
							}
							if (decimalPlaces > -1) {
								// Format the number
								formattedValue = number.format(value, {
									locale: this.locale,
									places: decimalPlaces
								});
							} else {
								// Replace the decimal point (if any) with the locale specific separator
								var decimalPoint = this.getDecimalPoint();
								if (decimalPoint != ".") {
									formattedValue = ("" + value).replace(".", decimalPoint);
								} else {
									formattedValue = "" + value;
								}
							}
						}
					} else {
						formattedValue = "" + value;
					}
				}
			}
			return formattedValue;
		},

		/**
		 * Returns the default format for the given data type.
		 * 
		 * @param type
		 *            The data type, such as xs:string, xs:timestamp, etc. See {@link ecm.model.AttributeDefinition} for
		 *            data type definitions.
		 */
		getDefaultFormat: function(type) {
			var format = null;
			var gregorian = this.gregorian;
			if (type == "xs:timestamp") {
				format = lang.replace(gregorian["dateTimeFormat-short"], [
					gregorian["timeFormat-short"],
					gregorian["dateFormat-short"]
				]);
				if (this.locale == "ar" && document.dir == "ltr") {
					format = "d/M/yyyy h:mm a";
				}
			} else if (type == "xs:date") {
				format = gregorian["dateFormat-short"];
				if (this.locale == "ar" && document.dir == "ltr") {
					format = "d/M/yyyy";
				}
			} else if (type == "xs:time") {
				format = gregorian["timeFormat-short"];
			}
			// expand 2 dijit years
			if (format && format.indexOf("yy") >= 0 && format.indexOf("yyyy") < 0) {
				format = format.replace("yy", "yyyy");
			}
			return format;
		},

		/**
		 * Formats a date.
		 * 
		 * @since 2.0.2
		 * @param date
		 *            The date to format.
		 * @param options
		 *            The options to use for formatting. See dojo.date.locale __FormatOptions for more information.
		 */
		formatDate: function(date, options) {
			if (!options) {
				options = {
					formatLength: "short",
					fullYear: true
				};
			}
			options.locale = this.locale;
			return locale.format(date, options);
		},

		/**
		 * Parses a date string. Returns a date.
		 * 
		 * @since 2.0.2
		 * @param dateString
		 *            The date string.
		 * @param options
		 *            The options to use for parsing. See dojo.date.locale __FormatOptions for more information.
		 */
		parseDate: function(dateString, options) {
			if (!options) {
				options = {
					formatLength: "short",
					fullYear: true
				};
			}
			options.locale = this.locale;
			return locale.parse(dateString, options);
		},

		/**
		 * Returns the locale to use for value formatting.
		 * 
		 * @since 2.0.2
		 */
		getLocale: function() {
			return this.locale;
		},

		/**
		 * Formats a path by inserting unicode characters to allow the path to be displayed correctly in right-to-left
		 * languages.
		 */
		formatPath: function(pathIn) {
			var formattedPathName = null;
			if (pathIn) {
				formattedPathName = BidiComplex.createDisplayString(pathIn, "FILE_PATH");
			}
			return formattedPathName;
		}
	});
});
