/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/array",
	"dojo/dom-style",
	"dojo/data/ObjectStore",
	"dojo/store/Memory",
	"dojo/dom-class",
	"./BaseDialog",
	"ecm/widget/Select",
	"ecm/LoggerMixin",
	"dojo/text!./templates/SelectReasonDialogContent.html"
], function(declare, array, domStyle, ObjectStore, Memory, domClass, BaseDialog, Select, LoggerMixin, template) {

	/**
	 * @name ecm.widget.dialog.SelectReasonDialog
	 * @augments ecm.widget.dialog.BaseDialog
	 */
	return declare("ecm.widget.dialog.SelectReasonDialog", [
		BaseDialog, 
		LoggerMixin
	], {
		/** @lends ecm.widget.dialog.SelectReasonDialog.prototype */
		contentString: template,
		title: ecm.messages.viewer_select_redaction_reason_dialog_title,
		okLabel: ecm.messages.ok,
		cancelLabel: ecm.messages.cancel,

		/**
		 * The array of reason objects for which the current user is an editor.
		 * Each reason object in the array contains the Id, name, and description of the reason. 
		 */
		availableReasons: null,
		
		/**
		 * This is the Id of the selected reason. It is updated with the reason selected by the
		 * user in the select reason field after the OK button is clicked.
		 */
		selectedReason: null,

		postCreate: function() {
			this.inherited(arguments);
			domClass.add(this.domNode, "ecmSelectReasonDialog minor");
			this.setTitle(this.title);
			this.cancelButton.set("label", this.cancelLabel);
			this.addButton(this.okLabel, this.onOk, false, true);
			this.loadReasons();
		},
		
		loadReasons: function() {
			var methodName = "setAvailableReasons";
			
		    if ( this.availableReasons ) {
		    	
		    	// By default, options loaded from a store are sorted by label.
		    	
		    	var memoryData = array.map(this.availableReasons, function(reason) {
    				return {
		    	        id: reason.id,
		    	        label: reason.name
    				}
    			});
		    	
		    	// If this redaction does not have a reason, or the reason is not in the available list (an unexpected case),
		    	// then add the blank choice and make it the selected reason. Otherwise defaulting to the first choice would be misleading.
		    	if (!this.selectedReason || array.filter(this.availableReasons, function(item) { if (item.id == this.selectedReason) { return item } }, this).length == 0) {
		    	    // Add the "no reason selected" choice.
		    		memoryData.push ({
	    				id: "",
	    				label: ""
	    			})
	    			this.selectedReason = "";

		    		// Show required when no reason is selected for this redaction.
		    		domStyle.set(this.requiredSpan, "display", "");
		    		
		    		// Make room for the "required" red asterisk.
		    		domStyle.set(this._reasonSelector.domNode, "width:", "95%");
		    	}
		    	
		    	var reasonsStore = new ObjectStore({
		    		objectStore: new Memory({
		    			data: memoryData
		    		})
		    	});

		    	this._reasonSelector.setStore(reasonsStore, this.selectedReason); 
		    }	
		},
		
	    onOk: function() {
	    	var selectedReason = this._reasonSelector.getValue();
	    	// If a reason is not selected, set focus back to the reason field.
	    	if (!selectedReason) {
	    		this._reasonSelector.focus();
	    		return;
	    	}
	    	// Update the selected reason and close the dialog.
	    	this.selectedReason = selectedReason;
	    	this.hide();
	    }
	});
});
