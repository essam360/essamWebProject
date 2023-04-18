/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare", //
	"dojo/_base/lang", //
	"dojo/_base/sniff", //
	"dojo/dom-geometry", //
	"dojo/dom-style", //
	"dijit/form/MultiSelect", //
	"dijit/registry", //
	"../../Messages", //
	"./BaseDialog", //
	"./CreateHoldDialog", //
	"dojo/text!./templates/ApplyRemoveHoldDialogContent.html"
], //
function(declare, //
lang, //
has, //
domGeom, //
domStyle, //
MultiSelect, //
registry, //
Messages, //
BaseDialog, //
CreateHoldDialog, //
template) {

	/**
	 * @name ecm.widget.dialog.ApplyRemoveHoldDialog
	 * @class Provides a dialog box that is used to apply or remove holds on IBM Content Manager OnDemand documents.
	 * @augments ecm.widget.dialog.BaseDialog
	 */
	return declare("ecm.widget.dialog.ApplyRemoveHoldDialog", [
		BaseDialog
	], {
		/** @lends ecm.widget.dialog.ApplyRemoveHoldDialog.prototype */

		messages: ecm.messages,
		contentString: template,
		widgetsInTemplate: true,
		_repository: null,
		_items: null,
		_callback: null,
		_holdsSelectorWidget: null,
		_isApply: true,
		_availableHolds: null,

		constructor: function() {
			this.messages = ecm.messages;
		},

		postCreate: function() {
			this.inherited(arguments);
//			if (!has("ie")) { // IE resizable dialog is growing the dialog infinitely when opening it so let's just not do IE as not resizable
			this.setResizable(true);
//			}
			this.setTitle(this.messages.applyHold);
			//this.setWidth(400);
			//this.setIntroText(this.messages.applyHoldSelectText);
			this.okButton = this.addButton(this.messages.applyHold, "_applyRemoveHold", false, true);
			this.createHoldButton = this.addButton(this.messages.createHold, "_createHold", false, true);
		},

		/**
		 * Shows the dialog.
		 * 
		 * @param repository -
		 *            ???.
		 * @param items -
		 *            the items to which holds will be applied or removed.
		 */
		show: function(items, isApply, callback) {
			var methodName = "show";
			var d = this.inherited(arguments);
			this.logEntry(methodName, "isApply: " + isApply);
			this.okButton.set("disabled", true);
			this.repository = items[0].repository;
			this._items = items;
			this._isApply = isApply;
			this._callback = callback;
			if (!this._isApply) {
				this.logDebug(methodName, "title: " + this.messages.removeHold);
				//this.titleNode.innerHTML = this.messages.removeHold;
				//this.introTextNode.innerHTML = this.messages.removeHoldSelectText;
				this.setTitle(this.messages.showHolds_title);
				//this.setIntroText(this.messages.removeHoldSelectText);
				this.selectorLabelNode.innerHTML = this.messages.appliedHolds;
				this.okButton.set("label", this.messages.removeHold);
			} else {
				this.logDebug(methodName, "title: " + this.messages.applyHold);
				this.setTitle(this.messages.applyHold);
				//this.setIntroText(this.messages.removeHoldSelectText);
				this.selectorLabelNode.innerHTML = this.messages.availableHolds;
				this.okButton.set("label", this.messages.applyHold);
			}
			domStyle.set(this.createHoldButton.domNode, "display", this._isApply ? "" : "none");
			this._holdsSelectorWidget = registry.byId(this.id + "_holdsSelector");
			var _this = this;
			this.repository.retrieveHolds(items, this._isApply, function(holds, canCreateHold) {
				// populate holds selection options
				var holdsSelector = _this._holdsSelectorWidget.domNode;
				holdsSelector.options.length = 0;
				for ( var i in holds) {
					var newHoldOption = document.createElement("OPTION");
					newHoldOption.setAttribute("value", holds[i].name);
					//newHoldOption.appendChild(document.createTextNode(holds[i].name + " - " + holds[i].label));
					newHoldOption.appendChild(document.createTextNode(holds[i].name));
					newHoldOption.title = holds[i].label;
					holdsSelector.appendChild(newHoldOption);
				}
				// hide create hold button if no privilege
				domStyle.set(_this.createHoldButton.domNode, "display", _this._isApply && canCreateHold ? "" : "none");
				this._availableHolds = holds;

				//if (_this._isApply && items.length == 1) {
				if (_this._isApply) {
					// retrieve holds already applied to items and disable selections (only for 1 item for now)
					_this.repository.retrieveHolds(items, items.length > 1 ? "applyMultiple" : false, function(holds) {
						var holdsSelectorOptions = _this._holdsSelectorWidget.domNode.options;
						for ( var i in holds) {
							for ( var j in holdsSelectorOptions) {
								if (holds[i].name == holdsSelectorOptions[j].getAttribute("value")) {
									holdsSelectorOptions[j].setAttribute("disabled", true);
									break;
								}
							}
						}
					});
				}
			});
			this.resize();
			this.logExit(methodName);
			return d;
		},

		hide: function() {
			this.inherited(arguments);
		},

		_onSelectionChange: function() {
			// holdsSelector value changed
			this.okButton.set("disabled", this._holdsSelectorWidget.get("value").length > 0 ? false : true);
		},

		_createHold: function() {
			// launch create hold dialog
			var _this = this;
			var createHoldDialog = new CreateHoldDialog();
			createHoldDialog.show(this.repository, this._availableHolds, function(holdName, holdDescription) {
				var newHoldOption = document.createElement("OPTION");
				newHoldOption.setAttribute("value", holdName);
				newHoldOption.setAttribute("selected", true);
				//newHoldOption.appendChild(document.createTextNode(holdName + " - " + holdDescription));
				newHoldOption.appendChild(document.createTextNode(holdName));
				newHoldOption.title = holdDescription;
				_this._holdsSelectorWidget.domNode.appendChild(newHoldOption);
				_this._onSelectionChange();
			});
		},

		_done: function() {
			this.hide();
			if (this._callback) {
				this._callback();
			}
		},

		_applyRemoveHold: function() {
			// Apply/remove selected holds to/from items
			var selectedholds = this._holdsSelectorWidget.get("value");
			var _this = this;
			if (this._isApply) {
				this.repository.applyHold(this._items, selectedholds, lang.hitch(this, this._done));
			} else {
				this.repository.removeHold(this._items, selectedholds, lang.hitch(this, this._done));
			}
		}
	});
});
