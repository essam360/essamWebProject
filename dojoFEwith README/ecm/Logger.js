/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/connect",
	"dojo/_base/lang"
], function(declare, connect, lang) {

	/**
	 * @name ecm.Logger
	 * @class Provides logging capabilities. Logging information is displayed in the JavaScript console and is recorded
	 *        in an internal trace table that can be dumped to see recent activity.
	 *        <p>
	 *        You do not need to create an instance of this class to send logging events. By including this JavaScript
	 *        at ecm.logger, an instance is automatically available. A class will normally inherit the
	 *        {@link ecm.LoggerMixin} to simplify access to the logging functions.
	 *        <p>
	 *        Four levels of logging are available:
	 *        <ol>
	 *        <li>Error</li>
	 *        <li>Warning</li>
	 *        <li>Information</li>
	 *        <li>Debug</li>
	 *        </ol>
	 */
	var Logger = declare("ecm.Logger", null, {
		/** @lends ecm.Logger.prototype */

		/**
		 * @private
		 */
		constructor: function() {
			this._logLevel = 0;
			this._appId = "CIWEB";
			this._logWindow = null;
			this._useConsole = true;
			this._initialized = false;
		},

		/**
		 * Returns the current log level.
		 */
		getLogLevel: function() {
			return this._logLevel;
		},

		/**
		 * Returns true if logging is being written to the JavaScript console.
		 */
		getUseConsole: function() {
			return this._useConsole;
		},

		/**
		 * Initializes logging.
		 * 
		 * @param logLevel
		 *            the logging level to use (as defined in the class description).
		 * @param useConsole
		 *            boolean, if true logging is written to the JavaScript console. If false a popup window is
		 *            displayed and logging is written to that window.
		 */
		initLogger: function(logLevel, useConsole) {
			if (!this._initialized) {
				if (typeof logLevel == "number") {
					this._logLevel = logLevel;
				} else if (typeof logLevel == "string") {
					this._logLevel = parseInt(logLevel);
				}
				if (!useConsole) {
					this._useConsole = false;
					this._setupLogWindow();
				}
				this._initialized = true;
			}
		},

		_setupLogWindow: function() {
			if ((this._logLevel > 0) && (this._logWindow == null)) {
				this._logWindow = window.open("", "_blank", "width=500,height=500,location=0,menubar=0,resizable=1,scrollbars=1,status=0,titlebar=0,toolbar=0");
				if ((window.onunload == null) || (typeof window.onunload != "function")) {
					window.onunload = lang.hitch(this, function() {
						this._logWindow.close();
						this._logWindow = null;
					});
				} else {
					var windowCloseLink = connect.connect(window, "onunload", this, function() {
						this._logWindow.close();
						this._logWindow = null;
					});
				}

				// Add some styling to make the log window easier to read.
				var header = new Array("<style>", "*", "{", "font-family: fixed,monospace;", "font-size: x-small;", "white-space: nowrap;", "}", "</style>");
				for ( var line = 0; line < header.length; line++) {
					this._logWindow.document.writeln(header[line]);
				}

				this._logWindow.focus();
				window.focus();
			} else if ((this._logLevel == 0) && (this._logWindow != null)) {
				this._logWindow.close();
				this._logWindow = null;
			}
		},

		/**
		 * Returns true if the log level is 4 or higher.
		 */
		isDebug: function() {
			return this._logLevel >= 4;
		},

		/** Logs an error message. */
		logError: function(location, message, extra) {
			this._log(1, location, message, extra);
		},

		/** Logs a warning message. */
		logWarning: function(location, message, extra) {
			this._log(2, location, message, extra);
		},

		/** Logs an informational message. */
		logInfo: function(location, message, extra) {
			this._log(3, location, message, extra);
		},

		/** Logs a debug message. */
		logDebug: function(location, message, extra) {
			this._log(4, location, message, extra);
		},

		/** Logs a function entry. */
		logEntry: function(location, extra) {
			this._log(4, location, "ENTRY", extra);
		},

		/** Logs a function exit. */
		logExit: function(location, extra) {
			this._log(4, location, "EXIT", extra);
		},

		/** Internal method to log. */
		_log: function(level, location, message, extra) {
			if (level <= this._logLevel) {
				var d = new Date();
				var logRecord = {
					level: level,
					timeStamp: d,
					loc: location,
					msg: message,
					extra: extra
				};
				var formattedLogRecord = this._formatLogRecord(logRecord);
				if (this._useConsole) {
					console.log(formattedLogRecord);
				} else {
					if (this._logWindow && (!this._logWindow.closed) && this._logWindow.document) {
						try {
							this._logWindow.document.writeln(formattedLogRecord);
							this._logWindow.scrollBy(0, 100); // keep scrolled to the bottom.
						} catch (err) {
						}
					}
				}
			}
		},

		/** Private function to format a record for the log table. */
		_formatLogRecord: function(logRecord) {
			var formattedLogRecord = this._useConsole ? "" : "<br>";
			var timestamp = logRecord.timeStamp;
			var hours = this._pad(timestamp.getHours(), 2);
			var minutes = this._pad(timestamp.getMinutes(), 2);
			var seconds = this._pad(timestamp.getSeconds(), 2);
			var milliseconds = this._pad(timestamp.getMilliseconds(), 3);
			formattedLogRecord += hours + ":" + minutes + ":" + seconds + "." + milliseconds + " ";
			formattedLogRecord += this._appId + " ";
			switch (logRecord.level) {
			case 1:
				formattedLogRecord += "ERROR:";
				break;
			case 2:
				formattedLogRecord += "WARN :";
				break;
			case 3:
				formattedLogRecord += "INFO :";
				break;
			case 4:
				if (logRecord.msg === "ENTRY") {
					formattedLogRecord += "ENTRY:";
					logRecord.msg = null;
				} else if (logRecord.msg === "EXIT") {
					formattedLogRecord += "EXIT :";
					logRecord.msg = null;
				} else {
					formattedLogRecord += "DEBUG:";
				}
				break;
			}
			formattedLogRecord += (" " + logRecord.loc);
			if (logRecord.msg != null) {
				formattedLogRecord += (" --- " + this._formatData(logRecord.msg));
			}
			if (logRecord.extra != null) {
				formattedLogRecord += (" --- " + this._formatData(logRecord.extra));
			}

			return formattedLogRecord;
		},

		/** Specially format the message or extra data if it is a JavaScript object. */
		_formatData: function(data) {
			if (typeof (data) == "object") {
				var formatted = "{";
				for ( var i in data) {
					if (typeof (data[i]) != "function") {
						if (formatted.length > 1) {
							formatted += ",";
						}
						if (i == "password") {
							formatted += i + ":" + this._blackoutPassword(data[i]);
						} else {
							formatted += i + ":" + data[i];

						}
					}
				}
				formatted += "}";
				return formatted;
			} else {
				return data;
			}
		},

		_pad: function(number, length) {
			var str = '' + number;
			while (str.length < length) {
				str = '0' + str;
			}
			return str;
		},

		_blackoutPassword: function(password) {
			var str = "";
			for ( var i in password) {
				str += '*';
			}
			return str;
		}

	});

	/**
	 * @name ecm.logger .
	 * @description A global instance of the {@link ecm.Logger} for the IBM Content Navigator toolkit.
	 */
	ecm.logger = new Logger();
	return ecm.logger;
});
