/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([ "dojo/_base/declare", "dojo/_base/lang", "./Logger" ], function(declare, lang, logger) {

	/**
	 * @name ecm.LoggerMixin
	 * @class This class can be mixed in to provide easier access to the logging function within the methods of the
	 *        class. See {@link ecm.Logger} for more detail on logging.
	 */
	return declare("ecm.LoggerMixin", null, {
		/** @lends ecm.LoggerMixin.prototype */

		/** Returns true if errors are being logged. */
		isLogError: function() {
			return ecm.logger.getLogLevel() >= 1;
		},

		/** Returns true if warnings are being logged. */
		isLogWarning: function() {
			return ecm.logger.getLogLevel() >= 2;
		},

		/** Returns true if informational messages are being logged. */
		isLogInfo: function() {
			return ecm.logger.getLogLevel() >= 3;
		},

		/** Returns true if debug messages are being logged. */
		isLogDebug: function() {
			return ecm.logger.getLogLevel() >= 4;
		},

		/** Logs an error. */
		logError: function(functionName, message, extra) {
			lang.hitch(this, ecm.logger.logError(this.declaredClass + "." + functionName, message, extra));
		},

		/** Logs a warning. */
		logWarning: function(functionName, message, extra) {
			lang.hitch(this, ecm.logger.logWarning(this.declaredClass + "." + functionName, message, extra));
		},

		/** Logs an informational message. */
		logInfo: function(functionName, message, extra) {
			lang.hitch(this, ecm.logger.logInfo(this.declaredClass + "." + functionName, message, extra));
		},

		/** Logs a debugging message. */
		logDebug: function(functionName, message, extra) {
			lang.hitch(this, ecm.logger.logDebug(this.declaredClass + "." + functionName, message, extra));
		},

		/** Logs entry to a function. */
		logEntry: function(functionName, message) {
			lang.hitch(this, ecm.logger.logEntry(this.declaredClass + "." + functionName, message));
		},

		/** Logs exit from a function. */
		logExit: function(functionName, message) {
			lang.hitch(this, ecm.logger.logExit(this.declaredClass + "." + functionName, message));
		}
	});
});
