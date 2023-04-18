/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array",
	"dojo/aspect",
	"../LoggerMixin",
	"../MessagesMixin"
], function(declare, lang, array, aspect, LoggerMixin, MessagesMixin) {

	/**
	 * Constructs the model object.
	 * 
	 * @param properties
	 *            The properties for the model object. These properties are accessible directly as fields of the object.
	 *            The following properties are understood:
	 *            <dl>
	 *            <dt>id
	 *            <dd>The identifier for the object, as known by the server.
	 *            <dt>name
	 *            <dd>The displayable name for the object.
	 *            </dl>
	 * @name ecm.model._ModelObject
	 * @class Provides a base class from which all model objects are derived. The _ModelObject class provides common
	 *        properties and logging for the other classes in the ecm.model package. <br>
	 *        <br>
	 *        Private functions should not be used to access public members of the class. Access member variables
	 *        directly. For example:
	 *        <p>
	 *        console.debug("Object name=" + obj.name);
	 *        </p>
	 *        <b>Note:</b> Private getter methods, such as getName, <b>will be removed</b> in a future release.
	 * @public
	 */
	return declare("ecm.model._ModelObject", [
		LoggerMixin,
		MessagesMixin
	], {
		/** @lends ecm.model._ModelObject.prototype */

		/**
		 * A string identifier of the object. This is not normally displayed to the user but is used to identify the
		 * corresponding object on the server. Typically, the id will be a symbolic or non-display name, or persistent
		 * identifier (PID) or globally unique identifier (GUID) depending on the server. In some cases it is a
		 * combination of other identifiers. The application should consider the id to be atomic and not parse the
		 * string as the format may change.
		 */
		id: undefined,

		/**
		 * The displayable name of the object. This string is intended to represent the object to the user. When
		 * available, locale specific names will be used according to the locale of the client browser.
		 */
		name: undefined,

		/**
		 * @private Included here for compatibility but not published API
		 */
		constructor: function(id, name) {
			if (id instanceof Object && !id.declaredClass) {
				lang.mixin(this, id);
			} else {
				this.id = id;
				this.name = name;
			}
		},

		/**
		 * Destroys the _ModelObject
		 * 
		 * @since 2.0.3
		 */
		destroy: function() {
		},

		/**
		 * Track handles created by this _ModelObject and remove/destroy them when the model object is destroyed, unless
		 * they have already been removed/destroyed manually.
		 * 
		 * @returns The array of handles, so you can do for example: var handle = this.own(on(...));
		 * @since 2.0.3
		 */
		own: function() {
			array.forEach(arguments, function(handle) {
				// When this.destroy() is called, destroy handle. Using aspect.before() allows the handle to be destroyed 
				// before a subclass's destroy() method starts running, before it calls this.inherited() or even if it 
				// doesn't call this.inherited() at all.  If that's an issue, make an onDestroy() method and connect to that instead.
				var odh = aspect.before(this, "destroy", function() {
					handle["destroy"]();
				});

				// If handle is destroyed manually before this.destroy() is called, remove the listener set directly above.
				var hdh = aspect.after(handle, "destroy", function() {
					odh.remove();
					hdh.remove();
				}, true);
			}, this);

			return arguments;
		},

		/**
		 * Returns a string representation of the object. This is useful for debugging purposes and should only be used
		 * in that way.
		 */
		toString: function() {
			return this.declaredClass + "[" + this.id + "]";
		},

		/* Change management */

		/**
		 * This event is invoked whenever the object changes value, or when a child object of this object changes value.
		 * Note: If you change a field of a model object directly, such as the id or name, you should invoke this method
		 * to notify other model objects of the change.
		 * 
		 * @param modelObject
		 *            Either this object or the child object that has changed.
		 */
		onChange: function(modelObject) {
		},

		/**
		 * Clears any information that has been retrieved about the item and its subordinates, and signals the onChange
		 * event to force retrieval as needed.
		 */
		refresh: function() {
			this.onChange(this);
		}

	});
});
