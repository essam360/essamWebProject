/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/array",
	"dojo/dom",
	"dojo/_base/lang",
	"dojo/dom-class",
	"dojo/domReady!",
	"dojo/on",
	"dojo/_base/declare",
	"dijit/_WidgetBase",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"ecm/LoggerMixin",
	"dojo/parser",
	"idx/form/DropDownLink",
	"dijit/DropDownMenu",
	"dijit/MenuItem",
	"ecm/model/BoxCollaborator",
	"ecm/widget/dialog/ConfirmationDialog",
	"dojo/text!./templates/EditorPermissionLink.html"
], function(array, dom, lang, domClass, ready, on, declare, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, LoggerMixin, parser, DropDownLink, DropDownMenu, MenuItem, BoxCollaborator, ConfirmationDialog, template) {
	
	var _PermissionMenu = declare("ecm.widget._PermissionMenu", DropDownMenu, {
		
		// summary:
		//		An internally-used menu for dropdown that allows us a vertical scrollbar

		// Override Menu.autoFocus setting so that opening a Select highlights the current value.
		autoFocus: true,

		postCreate: function(){
			this.inherited(arguments);

			// stop mousemove from selecting text on IE to be consistent with other browsers
			this.own(on(this.domNode, "selectstart", function(evt){
				evt.preventDefault();
				evt.stopPropagation();
			}));
		},
		

		focus: function(){
			// summary:
			//		Overridden so that the previously selected value will be focused instead of only the first item
			var found = false,
				val = this.parentWidget.getValue();
			if(lang.isArray(val)){
				val = val[val.length - 1];
			}
			if(val){ // if focus selected
				array.forEach(this.parentWidget._getChildren(), function(child){
					if(child.value && (val === child.value)){ // find menu item widget with this value
						found = true;
						child.domNode.style="font-weight:bold"
						this.focusChild(child, false); // focus previous selection
					}
					else{
						child.domNode.style="font-weight:normal"
					}
				}, this);
			}
			if(!found){
				this.inherited(arguments); // focus first item by default
			}
		},
	});
	
	/**
	 * @name ecm.widget.EditorPermissionLink
	 * @since 3.0
	 * @augments dijit._Widget
	 */
	return declare("ecm.widget.EditorPermissionLink", [
	    _WidgetBase,
	    _TemplatedMixin,
	    _WidgetsInTemplateMixin,
	], {
		/** @lends ecm.widget.EditorPermissionLink.prototype */
		
		templateString: template,
		widgetsInTemplate: true,
		label: "",
		value: "",
		
		postCreate: function() {
			
			// Set the permission level for individual user dropdowns.
			if (this.maximumPermission){
				this.setMaximumAccess(this.maximumPermission);
			}
		},
		
		setMaximumAccess: function(maxAccessLevel){
			// creating drop-down menu based on the maximum access level that should be displayed.
			this.permissionMenu = new _PermissionMenu({ id: this.id + "_menu", parentWidget: this});
			
			var self = this;
			//sets default permission to a link drop-down menu
			self._editorPermissionLink.set('label', ecm.messages.box_permission_editor);
			self._editorPermissionLink.set('value', BoxCollaborator.editor);
			//creates MenuItem for Box permission given the current user's access.
			var foundMaximumAccess = false;
			for (var i = 0; i < BoxCollaborator.PERMISSIONS.length; i++) {
				var permissionLevel = BoxCollaborator.PERMISSIONS[i];
				if (permissionLevel == maxAccessLevel){
					foundMaximumAccess = true;
				}
				if (!foundMaximumAccess){
					continue;
				}
				var permissionMenuItem = new MenuItem({
					label: ecm.messages[permissionLevel],
					value: permissionLevel
				});
				
				//OnClick event of each MenuItem
				this.own(on(permissionMenuItem, "click", function(event){
					
					// Warn the user if they are changing the owner.
					var _self = self;
					var menuSelf = this;
					if (this.value == BoxCollaborator.owner){
						var confirmChangeOwner = new ConfirmationDialog({
							text: ecm.messages.box_collaboration_change_owner_prompt,
							title: ecm.messages.box_collaboration_change_owner_title,
							buttonLabel: ecm.messages.yes,
							cancelButtonLabel: ecm.messages.no,
							cancelButtonDefault: true,
							onExecute: function() {
								_self._setPermissionLevel(menuSelf.label, menuSelf.value);
							}
						});
						confirmChangeOwner.show();
					}
					else{	
						self._setPermissionLevel(this.label, this.value);
					}

				}));
				this.permissionMenu.addChild(permissionMenuItem);	
			}
			this._editorPermissionLink.dropDown = this.permissionMenu;
		},
		
		/**
		 * @private
		 */
		_setPermissionLevel: function(label, value){
			this._editorPermissionLink.set('label', label);
			this._editorPermissionLink.set('value', value);
			
			array.forEach(this._editorPermissionLink.dropDown.getChildren(), function(child){
				child.domNode.style="font-weight:normal";
			}, this._editorPermissionLink);		
			this.onChange()
		},
		
		/**
		 * @private
		 */
		_getChildren: function(){
			return this._editorPermissionLink.dropDown.getChildren();
		},
		
		getValue: function(){
			return this._editorPermissionLink.value;
		},
		
		setValue: function(data){
			this._editorPermissionLink.set('label', ecm.messages[data]);
			this._editorPermissionLink.set('value', data);
		},
		
		onChange: function(){
		}
	});	
});
