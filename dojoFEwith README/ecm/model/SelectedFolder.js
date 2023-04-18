/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"./_ModelObject",
	"./FolderTreeModel"
], function(declare, _ModelObject, FolderTreeModel) {

	/**
	 * Constructor
	 * 
	 * @param properties
	 *            The properties for the model object. The properties can be any of the public fields as defined below
	 *            and on ecm.model._ModelObject.
	 * @name ecm.model.SelectedFolder
	 * @class Represents a folder that is selected in the FolderSelector widget.
	 * @augments ecm.model._ModelObject
	 */
	return declare("ecm.model.SelectedFolder", [
		_ModelObject
	], {
		/** @lends ecm.model.SelectedFolder.prototype */

		VIEW: {
			EDITABLE: "editable",
			HIDDEN: "hidden",
			READ_ONLY: "readonly"
		},

		/**
		 * A {@link ecm.model.Item} object representing the selected folder.
		 */
		item: null,

		/**
		 * A string representing the selected folder's path.
		 */
		path: null,

		/**
		 * A boolean value indicating whether subfolders of the selected folder should be included.
		 */
		includeSubfolders: false,

		/**
		 * A string representing the selected folder's path which teamspace name is the displayed name, not the actual
		 * stored object name.
		 */
		displayedPath: null,

		/**
		 * A boolean flag indicating if a repository has been selected.
		 */
		repositorySelected: true,

		/**
		 * A boolean value indicating whether the folder is a root folder.
		 */
		root: false,

		/**
		 * @private Constructor used internally
		 * @param item
		 *            The selected folder object.
		 * @param item
		 *            Defines whether subfolders should be included in the selection.
		 */
		constructor: function(/*ecm.modelItem*/item, /*boolean*/includeSubfolders,
		/*ecm.model.Repository || ecm.model.Teamspace*/repositoryOrTeamspace,/*boolean*/inRepo) {
			this.logDebug("constructor", "item=" + item.name + ", includeSubfolders=" + includeSubfolders);
			this.item = item;
			this.includeSubfolders = includeSubfolders;
			this._view = this.VIEW.EDITABLE;
			if (inRepo != null)
				this.repositorySelected = inRepo;
			// Build the path to the folder.
			if (repositoryOrTeamspace && item) {
				this._buildPath(repositoryOrTeamspace, item);
			}
		},

		_buildPath: function(/*ecm.model.Repository || ecm.model.Teamspace*/repositoryOrTeamspace,
		/*ecm.modelItem*/selectedFolderItem) {

			// Get the repository of the root object.
			var repository = null;
			var teamspace = null;
			if (repositoryOrTeamspace.isInstanceOf && repositoryOrTeamspace.isInstanceOf(ecm.model.Repository)) {
				repository = repositoryOrTeamspace;
			} else {
				teamspace = repositoryOrTeamspace;
				repository = repositoryOrTeamspace.repository;
			}

			this.path = "\\";
			this.displayedPath = "\\";

			this.root = false;

			// If we have the PathName attribute for P8 use it -- other wise derive as for CM8.
			if (repository.type == "p8" && selectedFolderItem.attributes.PathName != null) {
				var folderPath = "";
				var folderPath_dis = "";
				if (teamspace == null) {
					this.path += repository.name;
					this.displayedPath += repository.name;
					if (selectedFolderItem.id != FolderTreeModel.THIS_TEAMSPACE_ID) {
						if (selectedFolderItem.attributes.PathName != "/") {
							folderPath = selectedFolderItem.attributes.PathName || "";
							var pathName = folderPath;

							var startIndex = pathName.indexOf("/");
							if (pathName && pathName.indexOf("/ClbTeamspaces/") == 0) {

								// See if the path has YYYY/MM after the ClbTeamspaces name. If so, adjust the index accordingly.
								if (pathName.lastIndexOf("/") != pathName.length - 1) {
									// Add an extra slash if needed when the path is a root teamspace.
									pathName = pathName + "/";
								}

								var pathPrefix = pathName.substring(0, 22);
								if (pathPrefix.match("\\d{4}\\/\\d{2}") != null) {
									startIndex = pathName.indexOf("/", startIndex + 1);
									startIndex = pathName.indexOf("/", startIndex + 1);
								} else {
									pathPrefix = pathName.substring(0, 26);
									if (pathPrefix.match("\\d{4}-old\\/\\d{2}") != null) {
										startIndex = pathName.indexOf("/", startIndex + 1);
										startIndex = pathName.indexOf("/", startIndex + 1);
									}
								}

								var secondSlashIndex = pathName.indexOf("/", startIndex + 1);
								var thirdSlashIndex = pathName.indexOf("/", secondSlashIndex + 1);
								if (secondSlashIndex >= 0 && thirdSlashIndex >= 0) {
									var teamspacename = pathName.substring(secondSlashIndex + 1, thirdSlashIndex);
									var displayedname = teamspacename.substring(0, teamspacename.lastIndexOf("_"));
									folderPath_dis = "/" + displayedname + pathName.substring(thirdSlashIndex);
								} else {
									var teamspacename = pathName.substring(secondSlashIndex + 1);
									var displayedname = teamspacename.substring(0, teamspacename.lastIndexOf("_"));
									folderPath_dis += pathName.substring(0, secondSlashIndex + 1) + displayedname;
								}
							} else {
								folderPath_dis = pathName;
							}
						}
					} else {
						folderPath = folderPath_dis = "\\" + selectedFolderItem.name;
					}
				} else {
					if (this.item.id != FolderTreeModel.THIS_TEAMSPACE_ID) {
						if (this.repositorySelected == true) {
							this.path += repository.name;
							this.displayedPath += repository.name;
							folderPath = selectedFolderItem.attributes.PathName || "";

						} else {
							this.path += teamspace.name;
							this.displayedPath += repository.name;
							folderPath = selectedFolderItem.attributes.PathName || "";
							folderPath_dis += "/";
							folderPath_dis += teamspace.name;

							// parse out the teamspace base folder and teamspace root out of the path
							// assume first 2 folders are the teamspace home dir (ClbTeamspaces) and the teamspace root folder
							var pathName = folderPath;
							var secondSlashIndex = pathName.indexOf("/", 1);

							// Check to see whether there are YYYY/MM folders below the ClbTeamspaces folder and adjust 
							// if present
							var folderPathIndex = -1;
							var datePrefix = pathName.substring(secondSlashIndex + 1, secondSlashIndex + 9);
							var foundMatch = false;
							if (datePrefix.match("\\d{4}\\/\\d{2}") != null) {
								foundMatch = true;
							} else {
								datePrefix = pathName.substring(secondSlashIndex + 1, secondSlashIndex + 13);
								if (datePrefix.match("\\d{4}-old\\/\\d{2}") != null) {
									{
										foundMatch = true;
									}
								}
							}
							if (foundMatch) {
								var thirdSlashIndex = pathName.indexOf("/", secondSlashIndex + 1);
								folderPathIndex = pathName.indexOf("/", thirdSlashIndex + 1);
							} else {
								folderPathIndex = pathName.indexOf("/", secondSlashIndex + 1);
							}

							if (folderPathIndex >= 0) {
								folderPath = pathName.substr(folderPathIndex);
								folderPath_dis += folderPath;
							}
						}
					} else {
						this.path += repository.name;
						this.displayedPath += repository.name;
						folderPath = folderPath_dis = "\\" + selectedFolderItem.name;
					}
				}
				this.root = !folderPath || (folderPath == "/");
				if (folderPath.length > 0) {
					this.path += folderPath.replace(/\//g, "\\");
					this.displayedPath += folderPath_dis.replace(/\//g, "\\");
				}
			} else {
				if (teamspace == null || selectedFolderItem.id == FolderTreeModel.THIS_TEAMSPACE_ID) {
					this.path += repository.name;
					this.displayedPath += repository.name;
				} else {
					if (this.repositorySelected == true) {
						this.path += repository.name;
						this.displayedPath += repository.name;
					} else {
						this.path += teamspace.name;
						this.displayedPath += repository.name;
					}

				}

				var folderPath = "";
				var folderPath_display = "";
				// If this is a favorite, append the Favorites pseudo node and the folder name.
				if (selectedFolderItem._isFavorite != null && selectedFolderItem._isFavorite == true) {
					folderPath = ecm.messages.favorites_pseudo_node + selectedFolderItem.name;
				} else {
					if (selectedFolderItem.id != FolderTreeModel.THIS_TEAMSPACE_ID) {
						var parent = selectedFolderItem.parent;
						if (parent) {
							folderPath = "\\" + selectedFolderItem.name;
							if (parent.parent == null)
								folderPath_display = "\\" + this.item.attributes.clbTitle;
							else
								folderPath_display = "\\" + selectedFolderItem.name;
							while (parent) {
								if (parent.parent) {
									var grandparent = parent.parent;
									if (grandparent) { // not root
										folderPath = "\\" + parent.name + folderPath;
										if (grandparent.parent == null) {
											folderPath_display = "\\" + parent.attributes.clbTitle + folderPath_display;
										} else {
											folderPath_display = "\\" + parent.name + folderPath_display;
										}
									} else if (parent._isFavorite != null && parent._isFavorite == true) {
										folderPath = ecm.messages.favorites_pseudo_node + parent.name + folderPath;
									}
									parent = grandparent;
								} else {
									parent = null;
								}
							}
						}
					} else {
						folderPath_display = "\\" + selectedFolderItem.name;
					}
				}
				this.root = !folderPath || (folderPath == "/");
				this.path += folderPath;
				this.displayedPath += folderPath_display;
			}
		}
	});
});
