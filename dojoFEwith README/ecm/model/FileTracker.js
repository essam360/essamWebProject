/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/kernel",
	"dojo/_base/lang",
	"dojo/dom",
	"dojo/dom-construct",
	"dojo/string",
	"dojo/_base/json",
	"dojo/_base/sniff",
	"./_ModelObject",
	"./Request",
	"./Message",
	"./Desktop"
], function(declare, kernel, lang, dom, domConstruct, string, dojojson, has, _ModelObject, Request, Message, Desktop) {

	/**
	 * @name ecm.model.FileTracker
	 * @class Provides the ability to access File Tracker applet functionality. File tracking streamlines the process of
	 *        adding documents to and checking documents out of and in to the repository. It also enables administrators
	 *        to manage how documents are stored on users’ machines.
	 * @augments ecm.model._ModelObject
	 * @since 2.0.3
	 */
	var FileTracker = declare("ecm.model.FileTracker", [
		_ModelObject
	], {
		/** @lends ecm.model.Print.prototype */

		/**
		 * @private all constants and properties below are private unless otherwise specified
		 */
		OK: 0,
		SERVER_RESPONSE_CALLBACK: -3000,
		SUCCESSFULLY_TRACKED_FILE_USING_UD: -2006,
		SUCCESSFULLY_TRACKED_FILE_USING_ADS: -2005,
		USER_CANCELLED_OPERATION: -2004,
		FOUND_TRACKED_RECORD_BY_FILE_PATH: -2003,
		FOUND_TRACKED_RECORD_BY_SCANNING: -2002,
		UPLOADED_FILE_SUCCESSFULLY: -2001,
		ERROR_RUN_TIME_ERROR: 2000,
		ERROR_INVALID_PATH: 3001,
		ERROR_NOT_FOUND: 3002,
		ERROR_NOT_TRACKED: 3003,
		ERROR_TRACKED_RECORD_NOT_MATCHED: 3004,
		ERROR_INVALID_FILENAME: 3005,
		ERROR_CANNOT_CREATE_TRACKING: 3006,
		ERROR_CANNOT_DELETE_TRACKING: 3007,
		ERROR_ACCESS_DENIED: 3008,
		ERROR_INVALID_ASSOCIATION: 3009,
		ERROR_NO_ASSOCIATION: 3010,
		ERROR_OUT_OF_MEMORY: 3011,
		ERROR_OPEN_FAILED: 3012,
		ERROR_BROWSE_FOR_FILE_FAILED: 3013,
		ERROR_FILE_TRACKER_NOT_LOADED: 5000,
		ERROR_PREPARE_RESPONSE: 5001,
		ERROR_UPLOAD_FAILED: 5002,
		ERROR_DELETE_FILE_FAILED: 5003,
		ERROR_DELETE_FILE_NOT_FILE: 5004,
		ERROR_DELETE_FILE_NOT_UPLOADED: 5005,
		ERROR_FILE_ATTRIBUTE_TRACKING_UNSUPPORTE_FS: 6000,
		INVALID_INPUT_ARGUMENTS: 7000,
		ERROR_CANNOT_WRITE_CONTENT_TO_FILE: 7001,
		ERROR_NO_PERMISSION: 7002,
		ERROR_FILE_EXISTED: 7003,
		ERROR_MALFORMED_URL: 7004,
		ERROR_OPEN_CONNECTION: 7005,
		ERROR_SAVE_FILE_FAILED: 7006,
		ERROR_SAVE_FILE_FAILED_AND_OPEN_FIALED: 7007,
		ERROR_ENVIRONMENT_VARIABLE_PATH_NOT_FOUND: 7008,
		ERROR_EXACT_PATH_NOT_FOUND: 7009,
		ERROR_FOLDER_NOT_FOUND: 7010,
		ERROR_BROWSER_SECURITY: 8000,

		callbackCount: 0,
		callbackMap: {},

		appletStarted: false,

		_defaultDirectory: "",

		_startCount: 0,

		_userSelectedDirectory: "",

		fileTrackerApplet: null,
		_hasJavaPlugin: null,

		_canUseFileTracker: false,
		_canUseFileTrackerSet: false,

		postCreate: function() {
			this.inherited(arguments);
			var self = this;

		},

		/**
		 * @private
		 */
		_initFileTracker: function() {

			var methodName = "_initFileTracker";
			this.logEntry(methodName);

			try {
				this._startFileTrackerApplet();
				if (!this._canUseFileTrackerSet) {

					var response = this.fileTrackerApplet.canUseFileTracker();

					var rValue = this.processMessage(response);
					if (rValue.hasError) {
						this._canUseFileTracker = false;
					} else {
						this._canUseFileTracker = true;
					}
					this._canUseFileTrackerSet = true;
				}
			} catch (e) {
				this._canUseFileTracker = false;
				this._canUseFileTrackerSet = true;
				this.logError(methodName, e.message);
			}
			this.logExit(methodName);

		},

		/**
		 * @private
		 */
		_startFileTrackerApplet: function() {
			this.logEntry("_startFileTrackerApplet");
			this.logDebug("_startFileTrackerApplet", "using: serviceURL codebase: " + ecm.model.desktop.getServicesUrl() + "/applets");
			this.logDebug("_startFileTrackerApplet", "same? _cServiceURL codebase: " + ecm.model.desktop._cServicesUrl + "/applets");
			if (!this.appletStarted) {
				this.appletStarted = true;
				this.fileTrackerApplet = this.createApplet("fileTrackerApplet", "1px", "1px", "com.ibm.ecm.applets.filetracker.FileTrackerApplet.class", ecm.model.desktop._cServicesUrl + "/applets", "fileTrackerapplet.jar");
			}
			this.logExit("_startFileTrackerApplet");
			return this.fileTrackerApplet;

		},

		/**
		 * @private
		 */
		_stopFileTrackerApplet: function() {
			this.logEntry("_stopFileTrackerApplet");

			if (this.appletStarted) {
				document.body.removeChild(this.fileTrackerApplet);
				this.printApplet = null;
				this.appletStarted = false;
			}
			this.logExit("_stopFileTrackerApplet");
		},

		/**
		 * Removes tracking information from specified files. The files are specified by passing an
		 * <code>itemInfo</code> Object in the below format.
		 * 
		 * @param itemInfo
		 *            Object specifying parameters as follows: { "documentInfo":[ { "docid":[ "doc id of the document" ],
		 *            "ObjectStoreName":[ "obect store symbolic name" ], "vsId":[ "VSID" ], "repositoryId":[ "repositry
		 *            id" ] } ] }
		 */
		removeFileTrackingInfo: function(itemInfo) {

			var methodName = "removeFileTrackingInfo";
			this.logEntry(methodName);
			this._initFileTracker();
			this.fileTrackerApplet.removeTrackingFileInfo(dojojson.toJson(itemInfo));
			return;
		},

		/**
		 * Returns an object representing the tracked file. The return value is a Javascript object whose representation
		 * is as follows : {filePath:"Absolute path to the file on the file system",fileName:"name of the tracked file"}
		 * 
		 * @param itemInfo
		 *            Object specifying parameters as follows: { "documentInfo":[ { "docid":[ "doc id of the document" ],
		 *            "ObjectStoreName":[ "obect store symbolic name" ], "vsId":[ "VSID" ], "repositoryId":[ "repositry
		 *            id" ] } ] }
		 */
		getTrackingInfo: function(itemInfo) {
			var methodName = "getTrackingInfo";
			this.logEntry(methodName);
			this._initFileTracker();
			var rValue = this.fileTrackerApplet.getTrackingFileInfo(dojojson.toJson(itemInfo));
			var response = this.processMessage(rValue);
			var filesTracked = null;
			if (!response.hasError && response.responses.length > 0) {
				var count = response.responses.length;
				filesTracked = response.responses[0].value;
			}
			this.logExit(methodName);
			return filesTracked;
		},

		/**
		 * Returns a string representation of the File Tracker tracking location.
		 */
		getTrackingDirectory: function() {
			var methodName = "getTrackingDirectory";
			this.logEntry(methodName);
			this._initFileTracker();

			var rValue = this.fileTrackerApplet.getTrackingDirectory();
			var response = this.processMessage(rValue);
			if (!response.hasError && response.value) {
				rValue = response.value;
			} else {
				rValue = "";
			}
			this.logExit(methodName);
			return rValue;

		},

		/**
		 * Launches a folder picker dialog box and returns the folder that was selected by the user as a string.
		 */
		browseForFolder: function() {
			var methodName = "browseForFolder";

			this.logEntry(methodName);
			this._initFileTracker();
			var rValue = this.fileTrackerApplet.browseFolders();
			var response = this.processMessage(rValue);

			if (!response.hasError && response.value && response.value.length > 0) {
				this._defaultDirectory = response.value;
			}
			this.logExit(methodName);
			return this._defaultDirectory;
		},

		/**
		 * Launches a file picker dialog and returns an object that represents the user-selected file. The return value
		 * is a JavaScript object whose representation is as follows: {filePath:"Absolute path to the file on the file
		 * system",fileName:"name of the tracked file"}
		 */
		browseForFiles: function() {
			var methodName = "browseForFiles";
			this.logEntry(methodName);
			this._initFileTracker();
			var rValue = this.fileTrackerApplet.browseForFiles();
			var response = this.processMessage(rValue);
			var selectedFiles = null;
			if (!response.hasError && response.responses.length > 0) {
				var count = response.responses.length;
				selectedFiles = response.responses[0].value;
//				for ( var i = 0; i < response.responses[i].value[0]; i++) {
//					selectedFiles.push(response.responses[i].value[0]);
//				}
			}
			this.logExit(methodName);
			return selectedFiles;
		},

		/**
		 * Uploads the file or files to a URL by using the an array of provided request parameters.
		 * 
		 * @param documentInfoObj
		 *            This Object parameter specifies the content URL and various request parameters in a format as
		 *            follows: { "contentUrl":"/navigator/jaxrs/p8/checkIn", "documentInfo":[ { "desktop":"default",
		 *            "repositoryId":"NexusDSDB2P8", "parm_content_source_type":"Document",
		 *            "docid":"Document,{336211AE-4EB8-4DB3-8E95-BD40317C20BA},{D8C21DB1-2301-43BC-B2CC-F97A95B0E3C0}",
		 *            "template_name":"Document", "parm_part_filename":"results.txt", "criterias":"[,
		 *            "childComponentValues":"[]", "acl":"null", "securityPolicyId":null, "asMinorVersion":"false",
		 *            "autoClassify":"false", "objectStoreId":"{336211AE-4EB8-4DB3-8E95-BD40317C20BA}",
		 *            "security_token":"586938845254117574", "filePath":"Absolute path to file on local file system" } ],
		 *            "isBackgroundRequest":false,}
		 * @param callback
		 *            A function invoked after a successful upload of the files.
		 */
		uploadFiles: function(documentInfoObj, callback) {
			var methodName = "uploadFiles";
			this.logEntry(methodName);

			this._initFileTracker();
			var responseBody = "";
			var request;
			var onRetry = lang.hitch(this, function() {
				this.fileTrackerApplet.uploadFiles(dojojson.toJson(documentInfoObj));
			});

			var callbackFunction = function(serverResponse, appletResponse) {

				request.requestCompleteCallback = function() {

					callback(arguments[0], appletResponse);
				};
				request.onRequestCompleted(request);
				request.getResponseText = function() {
					return (serverResponse);
				};
				request._onFinished();
			};

			documentInfoObj.callbackid = this.callbackCount++;
			this.callbackMap[documentInfoObj.callbackid] = callbackFunction;

			request = new Request({
				progressMessage: documentInfoObj.progressMessage,
				requestFailedCallback: documentInfoObj.onError,
				backgroundRequest: documentInfoObj.isBackgroundRequest,
				retry: onRetry,
				xmlHttpRequest: {
					status: 200,
					readyState: 4,
					getAllResponseHeaders: function() {
						return "";
					}
				},
				getResponseContentType: function() {
					return "application/json";
				},
				getResponseText: function() {
					return responseBody;
				}
			});
			request.onRequestStarted(request);
			onRetry();

			this.logExit(methodName);
		},

		/**
		 * Downloads and tracks files from a given URL to the file or files.
		 * 
		 * @param documentInfoObj
		 *            {"documentInfo":[{"contentUrl":"URL to document","params":{}}],"userSelectedDirectory":"Path to a
		 *            directory to download the files to
		 *            ","openFile":true,"overWriteFile":true,"isBackgroundRequest":true}
		 * @param callback -
		 *            Function to invoke after a successful download and tracking of the file.
		 */
		downloadAndTrackFiles: function(documentInfoObj, callback) {
			var methodName = "downloadAndTrackFiles";
			this.logEntry(methodName);
			this._initFileTracker();
			var request;
			var onRetry = lang.hitch(this, function() {
				this.fileTrackerApplet.downloadFileForTracking(dojojson.toJson(documentInfoObj));
			});

			var callbackFunction = function(serverResponse, appletResponse) {
				request.requestCompleteCallback = function() {
					callback(arguments[0], appletResponse);
				};
				request.onRequestCompleted(request);
				request.getResponseText = function() {
					return (serverResponse);
				};
				request._onFinished();

			};

			documentInfoObj.callbackid = this.callbackCount++;
			this.callbackMap[documentInfoObj.callbackid] = callbackFunction;
			request = new Request({
				progressMessage: documentInfoObj.progressMessage,
				requestFailedCallback: documentInfoObj.onError,
				backgroundRequest: documentInfoObj.isBackgroundRequest,
				retry: onRetry,
				xmlHttpRequest: {
					status: 200,
					readyState: 4,
					getAllResponseHeaders: function() {
						return "";
					}
				},
				getResponseContentType: function() {
					return "application/json";
				}

			});
			request.onRequestStarted(request);
			onRetry();
			this.logExit(methodName);
			return;
		},

		/**
		 * Deletes files from the tracked location. For example, this method can be used to remove files from the user's
		 * local file system when users check in documents or add documents to the repository.
		 * 
		 * @param documentInfoObj
		 *            An object representing the files to delete. The format is as follows: {filePath:"Absolute path to
		 *            the file on the file system",fileName:"name of the tracked file"}
		 */
		deleteFiles: function(documentInfoObj) {
			var methodName = "deleteFiles";
			this.logEntry(methodName);
			this._initFileTracker();
			var rValue = this.fileTrackerApplet.deleteFiles(dojojson.toJson(documentInfoObj));
			var response = this.processMessage(rValue);
			var deletedFile = false;
			if (!response.hasError) {
				deletedFile = true;
			}
			this.logExit(methodName);
			return deletedFile;

		},

		/**
		 * This utility function creates the correct tags to use for invoking an applet.
		 * 
		 * @param name
		 *            The name of the applet, for reference by other applets.
		 * @param width
		 *            The width of the applet.
		 * @param height
		 *            The height of the applet.
		 * @param code
		 *            The Java class for the applet.
		 * @param codebase
		 *            The directory in which to search for the applet's class or jar.
		 * @param archive
		 *            The jars containing classes for the applet.
		 * @param params
		 *            Additional applet parameters.
		 * @private
		 */
		createApplet: function(name, width, height, code, codebase, archive, params) {
			var methodName = "createApplet";
			this.logEntry(methodName);
			var applet = 0;
			var logLevel = ecm.logger.getLogLevel();
			var proxyUrl = "";
			var platform = (navigator && navigator.platform ? navigator.platform : "Win32");
			var jniSignatureUri = Request.appendSecurityToken("getJNISignature.do");
			var jniUriConnector = (jniSignatureUri.indexOf("?") < 0 ? "?" : "&");

			jniSignatureUri = jniSignatureUri + jniUriConnector + "platform=";
			var appletDiv;

			// create the applet element
			if (has("ie") || has("trident") || (navigator.appName.indexOf("Microsoft") != -1)) { // for IE, use object tag)) { // for IE, use object tag
				var objectHTML = '<object id="fileTrackerApplet" name="' + name + '" width="' + width + '" height="' + height + '" classid="clsid:8AD9C840-044E-11D1-B3E9-00805F499D93">' + '<param name="code" value="' + code + '"></param>' + '<param name="codebase" value="' + codebase + '"></param>' + '<param name="archive" value="' + archive + '"></param>' + '<param name="logLevel" value="' + logLevel + '"></param>' + '<param name="scriptable" value="true"></param>' + '<param name="mayscript" value="true"></param>';
//				var objectHTML = '<object name="' + name + '" width="' + width + '" height="' + height + '" classid="clsid:CAFEEFAC-0017-0000-FFFF-ABCDEFFEDCBA">' + '<param name="code" value="' + code + '"></param>' + '<param name="codebase" value="' + codebase + '"></param>' + '<param name="archive" value="' + archive + '"></param>' + '<param name="logLevel" value="' + logLevel + '"></param>' + '<param name="scriptable" value="true"></param>' + '<param name="mayscript" value="true"></param>';
				for ( var param in params) {
					objectHTML = objectHTML + '<param name="' + param + '" value="' + params[param] + '"></param>';
				}

				objectHTML = objectHTML + '<param name="' + 'WCProxy' + '" value="' + window.WCProxy + '"></param>';
				objectHTML = objectHTML + '<param name="' + 'config' + '" value=\'' + dojojson.toJson(ecm.model.desktop.fileTrackingPrefs) + '\'></param>';
				objectHTML = objectHTML + '<param name="' + 'logLevel' + '" value="' + logLevel + '"></param>';
				objectHTML = objectHTML + '<param name="' + 'clientLocale' + '" value="' + kernel.locale + '"></param>';
				objectHTML = objectHTML + '<param name="jniSignatureUri" value="' + jniSignatureUri + '"></param>';
				objectHTML = objectHTML + '<param name="platform" value="' + platform + '"></param>';
				//objectHTML = objectHTML + '<param name="platform" value="1.7+"></param>';
				objectHTML = objectHTML + '<div id="javaPluginNotFoundFT"><p>&nbsp;<p></div>';// 
				objectHTML = objectHTML + '</object>';
				appletDiv = document.createElement("div");
				document.body.appendChild(appletDiv);
				appletDiv.innerHTML = objectHTML;
				applet = appletDiv.firstChild;

			} else { // for other browsers, use applet tag
				var appletHTML = '<applet id="fileTrackerApplet" ' + ' alt="' + name + '" name="' + name + '" width="' + width + '" height="' + height + '" code="' + code + '" codebase="' + proxyUrl + codebase + '"archive="' + archive + '" mayscript="true">';
				appletHTML = appletHTML + '<param name="' + 'logLevel' + '" value="' + logLevel + '"></param>';
				for ( var param in params) {
					appletHTML = appletHTML + '<param name="' + param + '" value="' + params[param] + '"></param>';
				}
				appletHTML = appletHTML + '<param name="' + 'config' + '" value=\'' + dojojson.toJson(ecm.model.desktop.fileTrackingPrefs) + '\'></param>';
				appletHTML = appletHTML + '<param name="' + 'WCProxy' + '" value="' + window.WCProxy + '"></param>';
				appletHTML = appletHTML + '<param name="' + 'clientLocale' + '" value="' + kernel.locale + '"></param>';
				appletHTML = appletHTML + '<param name="platform" value="' + platform + '"></param>';
				appletHTML = appletHTML + '<param name="jniSignatureUri" value="' + jniSignatureUri + '"></param>';
				appletHTML = appletHTML + '<param name="java_arguments" value="-Djava.net.preferIPv4Stack=true"></param>';
				appletHTML = appletHTML + '<div id="javaPluginNotFoundFT"><p>&nbsp;<p></div>';//
				appletHTML = appletHTML + '</applet>';
				appletDiv = document.createElement("div");
				document.body.appendChild(appletDiv);
				appletDiv.innerHTML = appletHTML;
				applet = appletDiv.firstChild;
			}
			this.logExit(methodName);
			return applet;
		},
		/**
		 * @private
		 */
		isJavaPluginPresent: function() {
			var methodName = "_hasJavaPlugin";
			this.logEntry(methodName);

			var found = false;

			if ((navigator.appName.indexOf("Microsoft") != -1) || (navigator.userAgent.indexOf("Trident") != -1)) {
				found = true;
			} else if (FileTracker.hasJavaPlugin == null) {

				if (!this._javaPluginFound) {
					found = this._hasPlugin("application/x-java-applet");

					if (!found && has("ie")) {
						// The usual method of looking for a Java plugin in IE (attempting to load each ActiveX), is causing some sort of internal corruption in IE.  
						// For IE, we insert HTML into the object tag(s) of Applets being launched, which will be displayed when there is no Java plugin.  So for
						// IE, this call is a noop.
						found = true;
					}

					this.logDebug(methodName, "The Java plugin was " + (found ? "" : "NOT ") + "found");
					this._javaPluginFound = found;
				} else {
					found = this._javaPluginFound;
				}

				FileTracker.hasJavaPlugin = found;
			} else {
				found = FileTracker.hasJavaPlugin;
			}

			this.logExit(methodName);
			return found;
		},
		/**
		 * @private
		 */
		_hasPlugin: function(mimetype) {
			var methodName = "_hasPlugin";
			this.logEntry(methodName);

			var found = false;
			if (navigator.mimeTypes) {
				this.logDebug(methodName, "Looking in navigator.mimeTypes (" + navigator.mimeTypes.length + ") for " + mimetype + " support");
				var plugin = navigator.mimeTypes[mimetype];
				if (plugin && plugin.enabledPlugin) {
					this.logDebug(methodName, "Found plugin " + plugin.enabledPlugin.name + " which can open " + mimetype);
					found = true;
				}
			} else if (navigator.plugins) {
				this.logDebug(methodName, "Looking in navigator.plugin mimetypes (" + navigator.plugins.length + ") for " + mimetype + " support");
				for (var i = 0; i < navigator.plugins.length && !found; i++) {
					var plugin = navigator.plugins[i];
					this.logDebug(methodName, "Looking in plugin " + plugin.name);
					for (var j = 0; j < plugin.length && !found; j++) {
						if (plugin[j].type == mimetype) {
							this.logDebug(methodName, "Found plugin " + plugin.name + " which can open " + mimetype);
							found = true;
						}
					}
				}
			} else {
				this.logDebug(methodName, "navigator.mimeTypes and navigator.plugins are not available.  Returning false");
			}

			this.logExit(methodName);
			return found;
		},
		/**
		 * @private
		 */
		isJavaPluginPresent1: function() {

			var methodName = "isJavaPluginPresent";
			this.logEntry(methodName);
			this._initFileTracker();
			var found = true;
			var javaPluginNotFound = document.getElementById("javaPluginNotFound");
			if (javaPluginNotFound && javaPluginNotFound.offsetWidth > 0 && frameElement && frameElement.docViewer) {
				found = false;
			}
			this.logExit(methodName);

			return found;
		},

		/**
		 * @private
		 */
		processMessage: function(json, showSuccessMessage) {
			var methodName = "processMessage";
			this.logEntry(methodName);

			var response = dojojson.fromJson(json);
			if (response.hasError) {
				var errorPrefix = "", inserts = [];
				var showError = true;
				if (response.errorCode == 7) {//ERROR_OPEN_FAILED
					errorPrefix = "runtime_file_tracking_file_not_found_error";
				} else if (response.errorCode == 3) {
					errorPrefix = "runtime_file_tracking_ioexception_error";
				} else if (response.errorCode == this.ERROR_NOT_TRACKED) {
					showError = false;
				} else if (response.errorCode == this.ERROR_OPEN_FAILED) {
					showError = true;
					errorPrefix = "runtime_file_tracking_open_error";

				} else if (response.errorCode == this.ERROR_SAVE_FILE_FAILED) {
					showError = true;
					errorPrefix = "runtime_file_tracking_save_file_error";

				} else if (response.errorCode == this.ERROR_SAVE_FILE_FAILED_AND_OPEN_FIALED) {
					showError = true;
					errorPrefix = "runtime_file_tracking_save_file_after_checkout_error";

				} else if (response.errorCode == this.ERROR_ENVIRONMENT_VARIABLE_PATH_NOT_FOUND) {
					showError = true;
					errorPrefix = "runtime_file_tracking_ev_file_path_not_found_error";

				} else if (response.errorCode == this.ERROR_OPEN_CONNECTION) {
					showError = true;
					errorPrefix = "runtime_file_tracking_ioexception_error";

				} else if (response.errorCode == this.ERROR_FOLDER_NOT_FOUND) {
					showError = true;
					errorPrefix = "runtime_file_tracking_exact_file_path_not_found_error";

				} else if (response.errorCode == this.ERROR_EXACT_PATH_NOT_FOUND) {
					showError = true;
					errorPrefix = "runtime_file_tracking_exact_file_path_not_found_error";

				} else if (response.errorCode == this.ERROR_CANNOT_CREATE_TRACKING) {
					showError = false;
					errorPrefix = "runtime_file_tracking_exact_file_path_not_found_error";

				} else if (response.errorCode == this.ERROR_DELETE_FILE_FAILED) {
					showError = true;
					errorPrefix = "runtime_file_tracking_cannot_delete_file_error";

				} else if (response.errorCode == this.ERROR_BROWSER_SECURITY) {// thrown by FileTrackerApplet.canUseFileTracker method
					showError = true;

					// if safari the error could be because  safari is running in safe mode or because user does not have privileges to create files in the tracking directory
					if (has("mac") && has("safari")) {
						errorPrefix = "runtime_file_tracking_safari_safe_mode_error";
					} else {
						errorPrefix = "runtime_file_tracking_security_error";
					}
				} else {
					showError = true;
					errorPrefix = "runtime_file_tracking_generic_error";
				}

				if (showError) {
					if (response.responses && response.responses[0].value) {
						inserts.push(response.responses[0].value);
					} else if (response.value) {
						inserts.push(response.value);
					}
					Desktop.addMessage(Message.createErrorMessage(errorPrefix, inserts, false));
				}

				this._invokeCallback(response);

			} else {
				var successMessage = "";
				if (response.responses) {

					if (response.responses.length == 1 && ((response.responses[0].errorCode == this.ERROR_DELETE_FILE_FAILED || response.responses[0].errorCode == this.FOUND_TRACKED_RECORD_BY_FILE_PATH) || (response.responses[0].errorCode == this.FOUND_TRACKED_RECORD_BY_SCANNING) || (response.responses[0].errorCode == this.SUCCESSFULLY_TRACKED_FILE_USING_ADS))) {

						successMessage = string.substitute(ecm.messages.file_tracking_successfully_downloaded_document, [
							response.responses[0].originalDocumentName,
							response.responses[0].value
						]);
					} else if (response.responses.length > 1 && ((response.responses[0].errorCode == this.FOUND_TRACKED_RECORD_BY_FILE_PATH) || (response.responses[0].errorCode == this.FOUND_TRACKED_RECORD_BY_SCANNING) || (response.responses[0].errorCode == this.SUCCESSFULLY_TRACKED_FILE_USING_UD) || (response.responses[0].errorCode == this.SUCCESSFULLY_TRACKED_FILE_USING_ADS))) {

						var count = response.responses.length;
						var documentsDownloaded = [];
						for (var i = 0; i < count; i++) {
							documentsDownloaded.push(response.responses[i].originalDocumentName);
						}
						successMessage = string.substitute(ecm.messages.file_tracking_successfully_downloaded_document, [
							documentsDownloaded.join(",")
						]);

					}
				}

				if (successMessage && successMessage.length > 0) {
					Desktop.addMessage(new Message({
						number: 0,
						level: 0,
						text: successMessage
					}));
				}

				this._invokeCallback(response);

			}

			this.logExit(methodName);
			return response;
			//MessageFactory.createErrorMessage = function(messagePrefix, inserts, backgroundRequest);

		},
		_invokeCallback: function(response) {
			var callbackResponse;
			if (response.responses && response.responses.length > 0) {
				var callbackResponse;
				for (var i = 0; i < response.responses.length; i++) {
					if (response.responses[i].errorCode == this.SERVER_RESPONSE_CALLBACK) {
						callbackResponse = response.responses[i];
						break;
					}
				}
			} else if (response.errorCode == this.SERVER_RESPONSE_CALLBACK) {
				callbackResponse = response;
			}
			if (callbackResponse && callbackResponse.value) {
				var lookupId = callbackResponse.value.callbackId;
				if (lookupId && this.callbackMap[lookupId]) {
					var callbackFunc = this.callbackMap[lookupId];
					if (callbackFunc) {
						callbackFunc(callbackResponse.value.response || "{}", response);
					}
				}
			}
		},

		/**
		 * Returns a boolean indicating if the File Tracker is available for use.
		 */
		canUseFileTracker: function() {

			var methodName = "getTrackingInfo";
			this.logEntry(methodName);
			//this._initFileTracker();
			var flag = false;

			if (!this._canUseFileTrackerSet) {
				if (Desktop.fileTrackingPrefs && Desktop.fileTrackingPrefs.enableFileTracking) {

					if (this.isJavaPluginPresent()) {
						this._initFileTracker();
						if (this._canUseFileTracker) {
							flag = true;
						}
					} else {
						//java is not found
						Desktop.addMessage(Message.createErrorMessage("runtime_file_tracking_java__notfound_error", [], false));
						this._canUseFileTrackerSet = true;
						this._canUseFileTracker = false;
					}

				} else {
					flag = false;
				}
			} else {
				flag = this._canUseFileTracker;
			}

			return flag;

		}
	});

	/**
	 * @private
	 */
	FileTrackerLoadCompleteCallback = function() {

		ecm.model.fileTracker.fileTrackerApplet.fileTrackingPrefs = ecm.model.desktop.fileTrackingPrefs;
		ecm.model.fileTracker.fileTrackerApplet.setUpConfig(dojojson.toJson(ecm.model.desktop.fileTrackingPrefs));
		ecm.model.fileTracker.appletLoaded = true;
	};

	/**
	 * private
	 */
	FileTrackerProcessMessageCallback = function(json) {

		ecm.model.fileTracker.processMessage(json, false);
	};
	/**
	 * private
	 */
	FileTracker.hasJavaPlugin = null;

	/**
	 * @name ecm.model.FileTracker.
	 * @description A global instance of {@link ecm.model.FileTracker} for the IBM Content Navigator toolkit.
	 */
	ecm.model.fileTracker = new FileTracker({});
	return ecm.model.fileTracker;
});
////@ sourceURL= ./FileTracker.js
