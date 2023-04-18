/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang", 
	"dojo/_base/array",
	"dojo/string",
	"dojo/dom-class",
	"dojo/dom-construct",
	"dojo/dom-attr",
	"dojo/store/Memory",
	"dojo/aspect",
	"dojo/data/ItemFileReadStore",
	"dijit/_WidgetBase",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"ecm/widget/CheckBox",
	"../../LoggerMixin",
	"dojo/text!./templates/AdvancedSearchCriterionOptions.html"
], function(declare, lang, array, string, domClass,domConstruct,domAttr, Memory, aspect, ItemFileReadStore,_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin,CheckBox,LoggerMixin, template) {

	/**
	 * @private Part of {@link ecm.widget.search.BasicSearchDefinition} and {@link ecm.widget.search.SearchForm} widgets
	 * @name ecm.widget.search.AdvancedSearchCriterionOptions
	 * @class Provides a widget that is used to specify advanced criterion options for IBM FileNet P8 or CM8 repositories. 
	 * @augments dijit._WidgetBase
	 */
	return declare("ecm.widget.search.AdvancedSearchCriterionOptions", [
		_WidgetBase,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		LoggerMixin
	], {
		/** @lends ecm.widget.search.AdvancedSearchCriterionOptions.prototype */
		templateString: template,
		
		messages: ecm.messages,
		
		postCreate: function() {
			this.logEntry("postCreate");
			var editableStore = new Memory();
			editableStore.data = [];
			editableStore.data.push({
				label:this.messages.advanced_search_options_editable,
				id:"editable"
			});
			editableStore.data.push({
				label:this.messages.advanced_search_options_required ,
				id:"required"
			});
			editableStore.data.push({
				label:this.messages.advanced_search_options_readonly ,
				id:"readonly"
			});
			editableStore.data.push({
				label:this.messages.advanced_search_options_hidden ,
				id:"hidden"
			});
			
			editableStore.getLabel = function(item){
				return item.label;
			}
			
			this._editableSelector.set("store", editableStore);
			this._editableSelector.set("value", this.messages.advanced_search_options_editable);
			this._editableSelector.set("searchAttr", "name");
			this._editableSelector.set("invalidMessage", this.messages.property_pulldown_invalid);
			
			this.connect(this._useAll, "onClick", lang.hitch(this, function(event) {
				this._clickUseAllButton();
			}));
			this.connect(this._useSelected, "onClick", lang.hitch(this, function(event) {
				this._clickUseSelectedButton();
			}));
			
			
			if( this.wid ){
				this.attributeDefinition = this.wid.attributeDefinition;
			}
			
			//set editable
			if( this.wid ){
				if( this.wid._valueRequired ){
					this._editableSelector.set("value", "required");
				}else if( this.wid._readOnly ){
					this._editableSelector.set("value", "readonly");
				}else if( this.wid._hidden ){
					this._editableSelector.set("value", "hidden");
				}
				
				this.wid._setOptionNodeToolTip();
				
				//set operators
				if( this.wid._hasSeletecOperators ){
					this._useSelected.set("checked", true);
					this._useAll.set("checked", false);
					this._allOperators = this.wid._allOperators;
					this._selectedOperators = this.wid._selectedOperators;
										
				}else{
					//all operators
					this._useAll.set("checked", true);
					this._useSelected.set("checked", false);
					if(!this.wid._allOperators ){
						this._allOperators = this.attributeDefinition.availableOperators;
					}else{
						this._allOperators = this.wid._allOperators;
					}

				}
				
				
				this._operatorCheckboxes = [];
				for( var i in this._allOperators ){
					var operatorDiv = domConstruct.create("div");
					domClass.add(operatorDiv, "advancedOptionsPaneTd");
					var checkbox = new CheckBox({name: this.attributeDefinition.id + this._allOperators[i], value:this._allOperators[i]  });
					if( this._useAll.get("checked" )){
						checkbox.set( "checked", true);
						checkbox.set("disabled", true);
					}else if( array.some(this._selectedOperators, lang.hitch(this, function(operator){
						if( operator == this._allOperators[i] ){
							return true;
						}
					})) ){
						checkbox.set( "checked", true);
					}
					
					var label = domConstruct.create("label", {"for": this.attributeDefinition + this._allOperators[i], innerHTML:this.messages["operator_" + this._allOperators[i]]});
					
					var br = domConstruct.create("br",null);
					
					operatorDiv.appendChild(checkbox.domNode);
					operatorDiv.appendChild(label);
					operatorDiv.appendChild(br);
					
					if( i<8 ){
						this._operatorsPane1.appendChild(operatorDiv);
					}else{
						this._operatorsPane2.appendChild(operatorDiv);
					}
					
					this.connect(checkbox, "onClick", lang.hitch(this, function(event) {
						this._validate();
					}));
					
					this._operatorCheckboxes[this._allOperators[i]] = checkbox;
				}
				
			}
			
			this.logExit("postCreate");
		},
		
		_validate:function(){
			var validated = true;
			
			var noOperator=true;
			for( var i in this._operatorCheckboxes ){
				if( this._operatorCheckboxes[i].get("checked") ){
					noOperator=false;
					break;
				}
			}
			
			if( noOperator ){
				validated = false;
			}
			
			if( !validated ){
				this._dialog._okButton.set( "disabled", true ); 
			}else{
				this._dialog._okButton.set( "disabled", false );
			}
		},
		
		_clickUseAllButton: function(){
			for( var i in this._operatorCheckboxes ){
				this._operatorCheckboxes[i].set( "checked", true);
				this._operatorCheckboxes[i].set( "disabled", true );
			}
		},
		
		_clickUseSelectedButton: function(){
			for( var i in this._operatorCheckboxes ){
				this._operatorCheckboxes[i].set( "disabled", false );
			}
		},
		
		save: function(){
			if( this.wid ){
				//save editable
				var editable = this._editableSelector.get("value");
				if( editable == "required" ){
					this.wid._valueRequired = true;
					this.wid._readOnly = false;
					this.wid._hidden = false;
				}else if( editable == "readonly" ){
					this.wid._readOnly = true;
					this.wid._valueRequired = false;
					this.wid._hidden = false;
				}else if( editable == "hidden" ){
					this.wid._hidden = true;
					this.wid._valueRequired = false;
					this.wid._readOnly = false;
				}else{
					this.wid._hidden = false;
					this.wid._valueRequired = false;
					this.wid._readOnly = false;
				}
				this.wid._setOptionNodeToolTip();
				this.wid._hasSeletecOperators = this._useSelected.get("checked");
				if( !this.wid._allOperators ){
					//init the all operators.
					this.wid._allOperators = this.attributeDefinition.availableOperators;
				}
				this._selectedOperators = new Array();
				for( var i in this.wid._allOperators ){
					if(  this._operatorCheckboxes[this.wid._allOperators[i]].get("checked") ){
						this._selectedOperators.push( this.wid._allOperators[i] );
					}
				}
				this.wid._selectedOperators = this._selectedOperators;
				this.wid._setToSelectedOperators();
				this.wid._processAdvancedSettingsIcon();
			}
		}
	});

});

