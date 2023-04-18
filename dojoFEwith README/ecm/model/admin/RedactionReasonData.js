/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array",
	"./ApplicationConfig",
	"./ServerConfig",
	"ecm/model/Desktop",
	"ecm/model/Request",
	"ecm/model/RedactionReason",
	"ecm/Messages",
	"../../LoggerMixin"
], function(declare, lang, array, ApplicationConfig, ServerConfig, Desktop, Request, RedactionReason, Messages, LoggerMixin) {

	/**
	 * @name ecm.model.admin.RedactionReasonData
	 * @class Represents the admin settings configuration objects needed to create and edit redaction reasons.
	 * @augments ecm.LoggerMixin
	 * @private
	 * @since 3.0
	 */
	var RedactionReasonData = declare("ecm.model.admin.RedactionReasonData", [
		LoggerMixin
	], {
		/** @lends ecm.model.admin.RedactionReason.prototype */

		/**
		 * An array of {@link ecm.model.RedactionReason} objects.
		 */
		redactionReasons: [],
		
		/**
		 * A object holding the common used parameters such as application. More parameters can be added later.
		 */
		default_params: {
			application: "navigator"
		},

		/**
		 * Constructor.
		 */
		constructor: function(_SECURITY_TOPIC) {
			this.logDebug("construct RedactionReasonData");

			if (!this.redactionReasons) {
				this.redactionReasons = [];
			}
			
			this._SECURITY_TOPIC = _SECURITY_TOPIC;

		},



		/**
		 * Loads the redaction reason data.
		 */
		loadData: function(callback) {
			this.logEntry(arguments.callee.nom);


			Request.invokeService("getRedactionReasons", null, params, lang.hitch(this, function(response) {
				for ( var i in response.redactionReasons) {
					var entry = response.redactionReasons[i];
					var redactionReason = new RedactionReason(entry);;
					this.redactionReasons.push(redactionReason);					
				}

				if (callback) {
					callback();
				}
			}));
		
			this.logExit(arguments.callee.nom);
		},

		/**
		 * Adds or updates the mid-tier. 
		 */
		save: function(callback) {
			this.logEntry(arguments.callee.nom);
			var params = lang.mixin({
				desktopId: Desktop.id,
				login_desktop: Desktop.id,
				userid: ecm.model.desktop.userId,
				securityTopic: this._SECURITY_TOPIC.category,
				action: "update"
			}, this.default_params);

			var postData = JSON.stringify(this.redactionReasons);
			Request.postService("admin/updateRedactionReasonsData", null, params, "text/json", postData, lang.hitch(this, function(response) { // onFinished
				if (callback) {
					callback();
				}
			}));
			this.logExit(arguments.callee.nom);
		},

		_noOp: null

	});

	/**
	 * Static function that constructs an desktop data object.
	 * 
	 * @param type
	 *            server type.
	 * @memberof ecm.model.admin.RedactionReasonData
	 */
	RedactionReasonData.createRedactionReasonData = function(_SECURITY_TOPIC) {
		return new RedactionReasonData(_SECURITY_TOPIC);
	};
	return RedactionReasonData;
});
