/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"./WorklistFolder",
	"./ProcessInbasket",
	"./User",
	"./UserGroup"

], function(declare, lang, WorklistFolder, ProcessInbasket, User, UserGroup) {

	/**
	 * Constructor
	 * 
	 * @param properties
	 *            The properties for the model object. The properties can be any of the public fields as defined below
	 *            and on {@link ecm.model.WorklistFolder}.
	 * @name ecm.model.ProcessRole
	 * @class Represents a role that is defined on an IBM FileNet P8 process server to specify who has access to process
	 *        applications and who can use specific functionality within certain process applications. A process role
	 *        also determines who has access to in-baskets that are defined in an application space.
	 * @augments ecm.model.WorklistFolder
	 */
	return declare("ecm.model.ProcessRole", [
		WorklistFolder
	], {
		/** @lends ecm.model.ProcessRole.prototype */

		/**
		 * An instance of {@link ecm.model.ProcessApplicationSpace} for the parent application space.
		 */
		parent: null,

		/**
		 * The user and system attributes (also known as properties) associated with this item. This is an object with
		 * field names being the symbolic names of the attributes and values being arrays containing:
		 * <ol>
		 * <li>value</li>
		 * <li>value type</li>
		 * <li>value format</li>
		 * </ol>
		 */
		attributes: null,

		/**
		 * Returns an array of {@link ecm.model.ProcessInbasket} objects.
		 */
		worklists: null,

		/**
		 * Returns an array of {@link ecm.model.User} or {@link ecm.model.UserGroup} objects.
		 */
		participants: null,

		/**
		 * A string value defining the Process Engine connection point to use for this repository. (Optional)
		 * <p>
		 * This connection point overrides the connection point that is configured on this repository in the IBM Content
		 * Navigator administration tool.
		 * </p>
		 */
		connectionPoint: null,

		/**
		 * @private
		 */
		constructor: function(params) {
			if (!this.attributes) {
				this.attributes = {};
				this.participants = {};
			}

			this._attributeTypes = {};
			this._attributeFormats = {};

			if (params) {
				// At this point, this.attributes === params.attributes because params is already mixed in.
				// Build the attributes object then assign it to this.attributes.
				var attributes = {};
				for ( var i in params.attributes) {
					var jsonAttribute = params.attributes[i];
					attributes[i] = jsonAttribute[0];
					if (jsonAttribute.length > 1) {
						this._attributeTypes[i] = jsonAttribute[1];
					}
					if (jsonAttribute.length > 2) {
						this._attributeFormats[i] = jsonAttribute[2];
					}
				}
				this.attributes = attributes;

				if (params.participants) {
					// Need to bake up the participant information into the correct model layer classes
					this.participants = this._createUserGroupParticipantValue(params.participants);
				}
			}
		},

		/**
		 * Returns true if the item contains an attribute with the specified value. For multi-valued attributes, the
		 * specified value is compared with all values of the attribute and this function will return true if the value
		 * is equal to any value of the multi-valued attribute.
		 * 
		 * @param attribute
		 *            The attribute identifier.
		 * @param value
		 *            The value to test.
		 * @returns {Boolean} true if this item contains the specified attribute value, false otherwise.
		 */
		containsValue: function(attribute, value) {
			var v = this.attributes[attribute];
			if (value == v) {
				return true;
			} else if (lang.isArray(v)) {
				for ( var i in v) {
					if (value == v[i]) {
						return true;
					}
				}
			}
			return false;
		},

		/**
		 * Returns the value for an attribute.
		 * 
		 * @param attribute
		 *            The identifier of the attribute.
		 * @returns {Object} holding value of the attribute
		 */
		getValue: function(attribute) {
			return this.attributes[attribute];
		},

		/**
		 * Returns an array containing all the values of an attribute.
		 * 
		 * @param attribute
		 *            The identifier of the attribute.
		 * @returns {Array} holding the attribute values
		 */
		getValues: function(attribute) {
			var v = this.attributes[attribute];
			if (lang.isArray(v)) {
				return v;
			} else {
				return [
					v
				];
			}
		},

		/**
		 * Returns true if the process role has the specified attribute.
		 * 
		 * @param attribute
		 *            The attribute identifier for the attribute to test.
		 * @returns {Boolean} true if the specified attribute exists, false otherwise.
		 */
		hasAttribute: function(attribute) {
			return (typeof this.attributes[attribute] != "undefined");
		},

		/**
		 * Returns the type of the attribute.
		 * 
		 * @param attribute
		 *            The attribute name.
		 * @returns {String} The type of the attribute.
		 */
		getAttributeType: function(attribute) {
			return this._attributeTypes[attribute];
		},

		/**
		 * Returns the format of the attribute.
		 * 
		 * @param attribute
		 *            The attribute name.
		 * @returns {String} The format of the attribute.
		 */
		getAttributeFormat: function(attribute) {
			return this._attributeFormats[attribute];
		},

		/**
		 * Retrieves the in-baskets that are associated with this process role.
		 * 
		 * @param callback
		 *            A function, invoked when the in-baskets have been retrieved. An array of
		 *            {@link ecm.model.ProcessInbasket} objects are passed to the function.
		 * @param includeFetchCount
		 *            A {Boolean} setting to specify whether to return the total fetch count for each in-basket. Default
		 *            is false, no counts will be returned.
		 */
		retrieveWorklists: function(callback, includeFetchCount) {
			this.logEntry("retrieveWorklists");
			if (this.worklists) {
				callback(this.worklists);
			} else if (this.id == "all") {
				this.repository.retrieveWorklists(callback);
			} else {
				var requestParams = {
					repositoryId: this.repository.id,
					connection_point: this.connectionPoint,
					processrole_name: encodeURIComponent(this.name),
					include_fetch_count: includeFetchCount ? "true" : "false"
				};
				if (this.parent.auth_name) {
					requestParams.appspace_name = encodeURIComponent(this.parent.auth_name);
				} else {
					requestParams.appspace_name = encodeURIComponent(this.parent.name); // For backward compatibility
				}
				var self = this;
				var request = ecm.model.Request.invokeService("getProcessInbaskets", this.repository.type, requestParams, function(response) {
					self._retrieveWorklistsCompleted(response, callback);
				});
			}
			this.logExit("retrieveWorklists");
			return request;
		},

		_retrieveWorklistsCompleted: function(response, callback) {
			this.logEntry("_retrieveWorklistsCompleted");
			this.worklists = [];
			for ( var i in response.datastore.items) {
				var templateJSON = response.datastore.items[i];
				templateJSON.repository = this.repository;
				templateJSON.connectionPoint = this.connectionPoint;
				templateJSON.parent = this;

				var template = new ProcessInbasket(templateJSON);
				this.worklists.push(template);
			}
			callback(this.worklists);
			this.logExit("_retrieveWorklistsCompleted");
		},

		_createUserGroupParticipantValue: function(members) {
			this.logEntry("_createUserGroupParticipantValue");
			var participants = [];
			for ( var j in members) {
				var member = members[j];
				if (member.isGroup) {
					var group = new UserGroup(member);
					participants.push(group);
				} else {
					var user = new User(member);
					participants.push(user);
				}
			}
			this.logExit("_createUserGroupParticipantValue");
			return participants;
		}

	});
});
