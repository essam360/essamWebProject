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
	"../LoggerMixin",
	"../MessagesMixin",
	"./Action",
], function(declare, lang, array, string, LoggerMixin, MessagesMixin, Action) {

	/**
	 * @private edit service mixin
	 * @name ecm.model._EditServiceMixin
	 * @since 3.0.1
	 */
	return declare("ecm.model._EditServiceMixin", [
        MessagesMixin                                          
	], {
		/** @lends ecm.model._EditServiceMixin.prototype */
		
		/**
		 * @private
		 */
		_addEditServiceActions: function(repository, actions) {
			//add Edit service actions to New menu
			//var toolbarNames = ["ContentListToolbar", "TeamspaceContentListToolbar", "SearchResultsToolbar"];
			//var contextMenus = ["ObjectStoreFolderContextMenu", "AttachmentFolderContextMenu", "FolderContextMenu", "TeamspaceSubFolderContextMenu", "FavoriteFolderContextMenu", "MySyncedFilesFolderContextMenu"];

			var defaultCategories = ["Word", "Excel", "PowerPoint"];
			
			if ((repository && (repository._isP8() || repository._isCM())  && ecm.model.desktop.streamlineEnabled)) {
				//find new edit service action in first level of menu
				var newEditServiceDocument = array.filter(actions, function(item){
				    return item.id == "NewEditServiceDocument";
			    });	
				
				if (newEditServiceDocument && newEditServiceDocument.length > 0) {	
					var categories = repository.editServiceCategories;	
					//remove old New Edit Document actions and sub menus from actions list
					for (var i = 0; i < actions.length; i++){
                		if (actions[i].id.indexOf("NewEditDocument") == 0 || actions[i].id.indexOf("subMenu") == 0 ) {
                			actions.splice(i,1);
                			i--;
                		}
                	}
					//recover the office online actions
					for (var i = 0; i < actions.length; i++){
						if (actions[i].id.indexOf("HiddenEditDocument") == 0  ) {
							actions[i].id = actions[i].id.replace(/HiddenEditDocument/, "");
                		}
					}
					
					var position = -1;
					for (var i = 0; i < actions.length; i++) {
						if (actions[i].id == "NewEditServiceDocument") {
							position = i;
							break;
						}
					}
					
					for (var i = 0; categories && i < categories.length; i++) {
						var category = categories[i];						
						if (array.indexOf(defaultCategories, category.name) == -1 || category.enable) {
							var newEditAction = lang.clone(newEditServiceDocument[0]);						
							newEditAction.id = "NewEditDocument" + category.name;
							newEditAction.icon = newEditAction.id + ".png";
							newEditAction.label = string.substitute(this.messages.icn_edit_action_in_new_menu_name, [category.displayName]);
							newEditAction.name = string.substitute(this.messages.icn_edit_action_in_new_menu_name, [category.displayName]);
							if (category.name == "Word") {
								newEditAction.iconClass = "ftWordProcessing";
							} else if (category.name == "Excel") {
								newEditAction.iconClass = "ftData";
							} else if (category.name == "PowerPoint") {
								newEditAction.iconClass = "ftPresentation";
							} else {
								newEditAction.iconClass = "ftEditServiceDocumentIcon";
							}
							actions.splice(position, 0, newEditAction);
							position++;
						}
					}
										
					if (this._isOfficeOnlineActionsVisible(repository)) {
						for (var k = 0; k < defaultCategories.length; k++) {
							var categoryName = defaultCategories[k];
							var officeOnlineActionId = "New" + categoryName + "Document";
						    var editServiceActionId = "NewEditDocument" + categoryName;
							//check if both office online and edit service actions are in the menu
							var officeOnlineAction = array.filter(actions, function(item){
								return item.id == officeOnlineActionId;
							});
							var editServiceAction = array.filter(actions, function(item){
								return item.id == editServiceActionId;
							});
							
							if (officeOnlineAction && officeOnlineAction.length > 0 && editServiceAction && editServiceAction.length > 0) {
								
								var subMenu = new Action();
								subMenu.name = string.substitute(this.messages.icn_edit_action_in_new_menu_name, [categoryName])
								subMenu.id = "subMenu" + categoryName;
								subMenu.labelId = "subMenu" + categoryName;
								subMenu.icon = subMenu.id + ".png";
								subMenu.action = "actionSubMenu" + categoryName;
								if (categoryName == "Word") {
									subMenu.iconClass = "ftWordProcessing";
								} else if (categoryName == "Excel") {
									subMenu.iconClass = "ftData";
								} else if (categoryName == "PowerPoint") {
									subMenu.iconClass = "ftPresentation";
								} else {
									subMenu.iconClass = "ftEditServiceDocumentIcon";
								}
	
								//add office online and edit service actions into sub menu
								subMenu.subActions.push(lang.clone(editServiceAction[0]));
								subMenu.subActions.push(lang.clone(officeOnlineAction[0]));
								
								//change the icon class and name of actions in sub menu
								for (var i = 0; i < subMenu.subActions.length; i++) {
									subMenu.subActions[i].iconClass = "";
		                			if (subMenu.subActions[i].id == editServiceActionId) {
		                				subMenu.subActions[i].name = this.messages.icn_edit_action_in_new_menu_submenu_edit_service_name;
		                			} else if (subMenu.subActions[i].id == officeOnlineActionId) {
		                				subMenu.subActions[i].name = this.messages.icn_edit_action_in_new_menu_submenu_oo_name;
		                			}
			                	}
								//remove the 2 actions in menu which merged into submenu
								for (var i = 0; i < actions.length; i++) {
									//hidden the office online actions
			                		if (actions[i].id == officeOnlineActionId) {
			                			actions[i].id = "HiddenEditDocument" + actions[i].id;
			                		}
			                		if (actions[i].id == editServiceActionId) {
			                			actions.splice(i,1);
			                			i--;
			                		}
			                	}
								//find the index of office online action							
								var index = -1;
								for (var i = 0; i < actions.length; i++) {
									if (actions[i].id == "HiddenEditDocument" + officeOnlineActionId) {
										index = i;
										break;
									}
								}
								//insert submenu into the menu
								actions.splice(index, 0, subMenu);
							}
						}							
				    }					
				} else {
					//find new edit service action in second level of menu
					var newMenu;
					for (var i = 0; i < actions.length; i++) {
						if (actions[i].actions && actions[i].actions.length > 0) {
							newEditServiceDocument = array.filter(actions[i].actions, function(item){
							    return item.id == "NewEditServiceDocument";
						    });
							if (newEditServiceDocument && newEditServiceDocument.length > 0) {
								newMenu = actions[i];
								break;
							}							
						}
					}
					if (newMenu) {
						newMenu = [newMenu];
						var categories = repository.editServiceCategories;	
						var newActions = newMenu[0].actions;						
						//remove old New Edit Document actions and sub menus from actions list
						for (var i = 0; i < newActions.length; i++){
	                		if (newActions[i].id.indexOf("NewEditDocument") == 0 || newActions[i].id.indexOf("subMenu") == 0 ) {
	                			newActions.splice(i,1);
	                			i--;
	                		}
	                	}
						//recover the office online actions
						for (var i = 0; i < newActions.length; i++){
							if (newActions[i].id.indexOf("HiddenEditDocument") == 0  ) {
								newActions[i].id = newActions[i].id.replace(/HiddenEditDocument/, "");
	                		}
						}						
						var position1 = -1;
						for (var i = 0; i < newActions.length; i++) {
							if (newActions[i].id == "NewEditServiceDocument") {
								position1 = i;
								break;
							}
						}					    
						for (var i = 0; categories && i < categories.length; i++) {
							var category = categories[i];							
							if (array.indexOf(defaultCategories, category.name) == -1 || category.enable) {
								var newEditAction = this._getNewEditAction(repository);
								newEditAction.id = "NewEditDocument" + category.name;
								newEditAction.icon = newEditAction.id + ".png";
								newEditAction.label = string.substitute(this.messages.icn_edit_action_in_new_menu_name, [category.displayName]);
								newEditAction.name = string.substitute(this.messages.icn_edit_action_in_new_menu_name, [category.displayName]);
								if (category.name == "Word") {
									newEditAction.iconClass = "ftWordProcessing";
								} else if (category.name == "Excel") {
									newEditAction.iconClass = "ftData";
								} else if (category.name == "PowerPoint") {
									newEditAction.iconClass = "ftPresentation";
								} else {
									newEditAction.iconClass = "ftEditServiceDocumentIcon";
								}
								newActions.splice(position1, 0, newEditAction);
								position1++;
							}
						}
							
						var subActions = newMenu[0].subActions;
						//remove old New Edit Document actions and sub menus from subActions list
						for (var i = 0; i < subActions.length; i++){
	                		if (subActions[i].id.indexOf("NewEditDocument") == 0 || subActions[i].id.indexOf("subMenu") == 0 ) {
	                			subActions.splice(i,1);
	                			i--;
	                		}
	                	}
						//recover the office online actions
						for (var i = 0; i < subActions.length; i++){
	                		if (subActions[i].id.indexOf("HiddenEditDocument") == 0  ) {
	                			subActions[i].id = subActions[i].id.replace(/HiddenEditDocument/, "");
	                		}
						}						
						var position2 = -1;
						for (var i = 0; i < subActions.length; i++) {
							if (subActions[i].id == "NewEditServiceDocument") {
								position2 = i;
								break;
							}
						}						
						for (var i = 0; categories && i < categories.length; i++) {
							var category = categories[i];
							if (array.indexOf(defaultCategories, category.name) == -1 || category.enable) {
								var newSubEditAction = this._getNewEditAction(repository);
								newSubEditAction.id = "NewEditDocument" + category.name;
								newSubEditAction.icon = newSubEditAction.id + ".png";
								newSubEditAction.label = string.substitute(this.messages.icn_edit_action_in_new_menu_name, [category.displayName]);
								newSubEditAction.name = string.substitute(this.messages.icn_edit_action_in_new_menu_name, [category.displayName]);
								if (category.name == "Word") {
									newSubEditAction.iconClass = "ftWordProcessing";
								} else if (category.name == "Excel") {
									newSubEditAction.iconClass = "ftData";
								} else if (category.name == "PowerPoint") {
									newSubEditAction.iconClass = "ftPresentation";
								} else {
									newSubEditAction.iconClass = "ftEditServiceDocumentIcon";
								}
								subActions.splice(position2, 0, newSubEditAction);
								position2++;
							}
						}

						if (this._isOfficeOnlineActionsVisible(repository)) {
							for (var k = 0; k < defaultCategories.length; k++) {
								var categoryName = defaultCategories[k];
								var officeOnlineActionId = "New" + categoryName + "Document";
							    var editServiceActionId = "NewEditDocument" + categoryName;
								
							    //check if both office online and edit service actions are in the actions
								var officeOnlineAction = array.filter(newMenu[0].actions, function(item){
									return item.id == officeOnlineActionId;
								});
								var editServiceAction = array.filter(newMenu[0].actions, function(item){
									return item.id == editServiceActionId;
								});								
								if (officeOnlineAction && officeOnlineAction.length > 0 && editServiceAction && editServiceAction.length > 0) {
									var subMenu = new Action();
									subMenu.name = string.substitute(this.messages.icn_edit_action_in_new_menu_name, [categoryName])
									subMenu.id = "subMenu" + categoryName;
									subMenu.labelId = "subMenu" + categoryName;
									subMenu.icon = subMenu.id + ".png";
									subMenu.action = "actionSubMenu" + categoryName;
									if (categoryName == "Word") {
										subMenu.iconClass = "ftWordProcessing";
									} else if (categoryName == "Excel") {
										subMenu.iconClass = "ftData";
									} else if (categoryName == "PowerPoint") {
										subMenu.iconClass = "ftPresentation";
									} else {
										subMenu.iconClass = "ftEditServiceDocumentIcon";
									}
																		
									//add office online and edit service actions into sub menu
									subMenu.subActions.push(lang.clone(editServiceAction[0]));
									subMenu.subActions.push(lang.clone(officeOnlineAction[0]));
									
									//change the icon class and name of actions in sub menu
									for (var i = 0; i < subMenu.subActions.length; i++) {
										subMenu.subActions[i].iconClass = "";
			                			if (subMenu.subActions[i].id == editServiceActionId) {
			                				subMenu.subActions[i].name = this.messages.icn_edit_action_in_new_menu_submenu_edit_service_name;
			                			} else if (subMenu.subActions[i].id == officeOnlineActionId) {
			                				subMenu.subActions[i].name = this.messages.icn_edit_action_in_new_menu_submenu_oo_name;
			                			}
				                	}
									
									//remove the 2 actions in New menu which merged into sub menu
									for (var i = 0; i < newActions.length; i++) {
										//hidden the office online actions
				                		if (newActions[i].id == officeOnlineActionId) {
				                			newActions[i].id = "HiddenEditDocument" + newActions[i].id;
				                		}
				                		if (newActions[i].id == editServiceActionId) {
				                			newActions.splice(i,1);
				                			i--;
				                		}
				                	}
									var index1 = -1;
									for (var i = 0; i < newActions.length; i++) {
										if (newActions[i].id == "HiddenEditDocument" + officeOnlineActionId) {
											index1 = i;
											break;
										}
									}
									//insert submenu into New menu
									newActions.splice(index1, 0, subMenu);
								}
								
								//check if both office online and edit service actions are in the sub actions
								officeOnlineAction = array.filter(newMenu[0].subActions, function(item){
									return item.id == officeOnlineActionId;
								});
								editServiceAction = array.filter(newMenu[0].subActions, function(item){
									return item.id == editServiceActionId;
								});								
								if (officeOnlineAction && officeOnlineAction.length > 0 && editServiceAction && editServiceAction.length > 0) {									
									var subMenu = new Action();
									subMenu.name = string.substitute(this.messages.icn_edit_action_in_new_menu_name, [categoryName])
									subMenu.id = "subMenu" + categoryName;
									subMenu.labelId = "subMenu" + categoryName;
									subMenu.icon = subMenu.id + ".png";
									subMenu.action = "actionSubMenu" + categoryName;
									if (categoryName == "Word") {
										subMenu.iconClass = "ftWordProcessing";
									} else if (categoryName == "Excel") {
										subMenu.iconClass = "ftData";
									} else if (categoryName == "PowerPoint") {
										subMenu.iconClass = "ftPresentation";
									} else {
										subMenu.iconClass = "ftEditServiceDocumentIcon";
									}
																		
									//add office online and edit service actions into sub menu
									subMenu.subActions.push(lang.clone(editServiceAction[0]));
									subMenu.subActions.push(lang.clone(officeOnlineAction[0]));
									
									//change the icon class and name of actions in sub menu
									for (var i = 0; i < subMenu.subActions.length; i++) {
										subMenu.subActions[i].iconClass = "";
			                			if (subMenu.subActions[i].id == editServiceActionId) {
			                				subMenu.subActions[i].name = this.messages.icn_edit_action_in_new_menu_submenu_edit_service_name;
			                			} else if (subMenu.subActions[i].id == officeOnlineActionId) {
			                				subMenu.subActions[i].name = this.messages.icn_edit_action_in_new_menu_submenu_oo_name;
			                			}
				                	}
									
									//remove the 2 actions in New menu which merged into sub menu
									for (var i = 0; i < subActions.length; i++) {
										//hidden the office online actions
				                		if (subActions[i].id == officeOnlineActionId) {
				                			subActions[i].id = "HiddenEditDocument" + subActions[i].id;
				                		}
				                		if (subActions[i].id == editServiceActionId) {
				                			subActions.splice(i,1);
				                			i--;
				                		}
				                	}
									var index2 = -1;
									for (var i = 0; i < subActions.length; i++) {
										if (subActions[i].id == "HiddenEditDocument" + officeOnlineActionId) {
											index2 = i;
											break;
										}
									}
									//insert submenu into New menu
									subActions.splice(index2, 0, subMenu);
								}							
							}
						}
					}
				}
			}
		},
		
		_isOfficeOnlineActionsVisible: function(repository) {
			if ((repository._isP8() || repository._isCM()) && ecm.model.desktop.officeOnlineEnabled && repository.officeOnlineEnabled) {	
				return true;
			} else {
				return false;
			}
		},
		
		_getNewEditAction: function(repository) {
			var action = new Action();
			action.action = "actionAddEditServiceDocument";
			action.dynamic = false;
			action.global = true;
			action.icon = "NewEditServiceDocument.png";
			action.id = "NewEditServiceDocument";
			action.label = "New Edit Service Document";
			action.name = "New Edit Service Document";
			action.multiDoc = false;
			action.privilegeName = "addDoc";
			if (repository._isCM()) {
				action.serverTypes = "cm";
			} else if (repository._isP8()) {
				action.serverTypes = "p8";
			}		
			return action;
		},
				
	});
});
