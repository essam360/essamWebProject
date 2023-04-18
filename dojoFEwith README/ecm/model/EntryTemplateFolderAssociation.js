/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"./_ModelObject"
], function(declare, _ModelObject) {

	/**
	 * Constructor
	 * 
	 * @param properties
	 *            The properties for the entry template Folder Association object. The properties can be any of the
	 *            public fields as defined below and on ecm.model._ModelObject.
	 * @name ecm.model.EntryTemplateFolderAssociation
	 * @class Represents the settings for an entry template folder association.
	 * @augments ecm.model._ModelObject
	 */
	return declare("ecm.model.EntryTemplateFolderAssociation", [
		_ModelObject
	], {
		/** @lends ecm.model.EntryTemplateFolderAssociation.prototype */

		/**
		 * {@link ecm.model.EntryTemplate} EntryTemplate object A reference to the entry template content item
		 */
		entryTemplate: null,

		/**
		 * If true, use the current folder selected by the user (associated folder) as the parent folder for added
		 * documents. If false, use the folder selected in the entry template.
		 */
		currentFolderAsParent: true,

		/**
		 * An array of references to ICN file types (named collections of MIME types). Defines which content MIME types
		 * the associated entry template may be used with
		 */
		fileTypes: []

	});
});
