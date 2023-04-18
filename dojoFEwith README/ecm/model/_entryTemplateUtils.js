/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/array",
	"dojo/_base/lang",
	"dojo/date/stamp",
	"dojo/date",
	"dojox/collections/ArrayList",
	"dojox/collections/Set",
	"ecm/model/ChildComponentSearchCriteria",
	"ecm/model/SearchConfiguration"
], function(array, lang, dateStamp, date, ArrayList, Set, ChildComponentSearchCriteria, SearchConfiguration) {

	/**
	 * @private Entry template utilities
	 * @name ecm.model._entryTemplateUtils
	 * @since 2.0.2
	 */
	var utils = {

		/**
		 * Applies custom properties to the given entry template.
		 * 
		 * @param entryTemplate
		 *            An instance of {@link ecm.model.EntryTemplate}
		 * @param urlProperties
		 *            An array of objects of the form { property: "id", value: "value" || [ "value-1", ... ,"value-n" ] }
		 */
		applyEntryTemplateProperties: function(entryTemplate, urlProperties) {
			var methodName = "ecm.model._entryTemplateUtils.applyEntryTemplateProperties";
			entryTemplate.logEntry(methodName);
			var self = this;
			array.forEach(urlProperties, function(externalProperty) {
				entryTemplate.propertiesOptions.some(function(option){
					if(option.id==externalProperty.property && self._checkData(option, externalProperty)){
						if(dateArray.indexOf(option.dataType)>-1){ // handle date
							if(option.cardinality=="SINGLE"){
								option.defaultValue=new Date(externalProperty.value).toISOString();
							}else if(option.cardinality=="LIST" && Array.isArray(externalProperty.value)){
								var ar = [];
								for(var i=0; i<externalProperty.value.length; i++){
									ar.push(new Date(externalProperty.value[i]).toISOString());
								}
								option.defaultValue = ar;
							}
						}else{
							option.defaultValue=externalProperty.value;
						}
						
						return true;
					}
				});
			});
			entryTemplate.logExit(methodName);
		},

		
		//Check data
		_checkData:function(entryTemplateProperty, externalProperty){
			if(entryTemplateProperty.cardinality=="SINGLE" && Array.isArray(externalProperty.value)==false){
				return this._checkDataType(entryTemplateProperty, externalProperty);
			}else if(entryTemplateProperty.cardinality=="LIST" && Array.isArray(externalProperty.value)){
				var listResult=true;
				if(dateArray.indexOf(entryTemplateProperty.dataType)>-1){//date
					for(var i=0; i<externalProperty.value.length;i++){
						if(!this._isValidDateString(externalProperty.value[i])){
							listResult =false;
							break;
						}
					}
				}else if(floatArray.indexOf(entryTemplateProperty.dataType)>-1){//float
					for(var i=0; i<externalProperty.value.length;i++){
						if(!this._isValidFloatString(externalProperty.value[i].toString()) || typeof externalProperty.value[i] !="number"){
							listResult =false;
							break;
						}
					}
				}else if(intArray.indexOf(entryTemplateProperty.dataType)>-1){//int
					for(var i=0; i<externalProperty.value.length;i++){
						if(!this._isValidIntString(externalProperty.value[i].toString()) || typeof externalProperty.value[i] !="number"){
							listResult =false;
							break;
						}
					}
				}
				return listResult;
			}else{
				return false;
			}
		},
		
		//check date type
		_checkDataType: function(entryTemplateProperty, externalProperty){
			if(entryTemplateProperty.dataType.indexOf("xs:string")>-1 && typeof externalProperty.value =="string"){
				return true;
			}else if (floatArray.indexOf(entryTemplateProperty.dataType)>-1 && typeof externalProperty.value =="number" && this._isValidFloatString(externalProperty.value.toString())){
				return true;
			}else if(intArray.indexOf(entryTemplateProperty.dataType)>-1 && typeof externalProperty.value =="number" && this._isValidIntString(externalProperty.value.toString())){
				return true;
			}else if (entryTemplateProperty.dataType=="xs:boolean" && typeof externalProperty.value =="boolean"){
				return true;
			}else if (dateArray.indexOf(entryTemplateProperty.dataType)>-1 && this._isValidDateString(externalProperty.value)){
				return true;
			}else{
				return false;
			}
		},
		
		//Check if the string is a valid date string.
		_isValidDateString: function(str){
			var d = new Date(str);
			if(!isNaN(d.getTime())){
				return true;
			}else{
				return false;
			}
		},
		
		_isValidFloatString: function(str){
			return /^-?\d+(\.\d+)?$/.test(str) && !isNaN(parseFloat(str));
		},
		
		_isValidIntString: function(str){
			return /^-?\d+$/.test(str) && parseInt(str).toString()==str;
		}
	};

	var numberArray = ["xs:integer","xs:double","xs:decimal","xs:long","xs:short","xs:float"];
	var intArray = ["xs:integer","xs:long","xs:short"];
	var floatArray = ["xs:double","xs:decimal","xs:float"];
	var dateArray = ["xs:timestamp","xs:date","xs:time"];
	
	return utils;
});
