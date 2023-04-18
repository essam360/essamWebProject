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
	 *            The properties for the model object. The properties can be any of the public fields as defined below
	 *            and on ecm.model._ModelObject.
	 * @name ecm.model.TeamspaceTemplate
	 * @class Represents a template that is used to construct instances of teamspaces.
	 * @augments ecm.model._ModelObject
	 */
	return declare("ecm.model.TeamspaceTemplate", [
		_ModelObject
	], {
		/** @lends ecm.model.TeamspaceTemplate.prototype */

		/**
		 * The description of the teamspace template.
		 */
		description: null,

		/**
		 * A {@link ecm.model.Repository} object
		 */
		repository: null,

		/**
		 * A {@link ecm.model.TeamspaceTemplate} object
		 */
		teamspaceTemplate: null,

		_modelType: "workspaceInstance"

	});
});
