/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/string",
	"dojo/_base/json",
	"dojo/_base/sniff",
	"dojox/html/entities",
	"./_ModelObject",
	"./Desktop",
	"./Item",
	"./Message",
	"./Request",
	"./Teamspace"
], function(declare, lang, string, dojojson, has, entities, _ModelObject, Desktop, Item, Message, Request, Teamspace) {

	/**
	 * @name ecm.model.Mail
	 * @class Provides the ability to send email using the workstation's default email application.
	 * @augments ecm.model._ModelObject
	 * @private
	 */
	var Mail = declare("ecm.model.Mail", [
		_ModelObject
	], {
		/** @lends ecm.model.Mail.prototype */

		/**
		 * Launches email, and attaches the specified items.
		 * 
		 * @param items
		 *            An array of {@link ecm.model.Item} objects representing the items to be emailed as attachments.
		 */
		emailItemsAsAttachments: function(items, version) {
			this.logEntry("emailItemsAsAttachments");
			this.convertToPDF = false;
			this._emailItemsAsAttachmentsByPartNum(items, null, version);
			this.logExit("emailItemsAsAttachments");
		},

		/**
		 * Launches email, and attaches the specified items with it's all parts/content elements.
		 * 
		 * @param items
		 *            An array of {@link ecm.model.Item} objects representing the items to be emailed as attachments.
		 */
		emailItemsAsAttachmentsAll: function(items, version) {
			this.logEntry("emailItemsAsAttachments");
			this.convertToPDF = false;
			this._emailItemsAsAttachmentsByPartNum(items, "all", version);
			this.logExit("emailItemsAsAttachments");
		},

		_emailItemsAsAttachmentsByPartNum: function(items, partNum, version) {
			var docNames = [];
			var mimeTypes = [];
			var docUrls = [];
			if (!items)
				return;

			// Add to the recent list
			items[0].repository.addRecentItems(items);

			for ( var i in items) {
				var repository = items[i].repository;
				var template = encodeURIComponent(items[i].template);
				var docId = encodeURIComponent(items[i].id);
				// Set the path to be relative to the navigator/applets folder:
				var url = "../jaxrs/" + repository.type + "/getDocument" + "?repositoryId=" + encodeURIComponent(repository.id) + "&template_name=" + template + "&retrieve_part=true" + "&alt_output=stream" + "&docid=" + docId;
				if (partNum != null) {
					url = url + "&part_number=" + partNum;
				}
				if (version != null && repository._isP8()) {
					url = url + "&vsId=" + encodeURIComponent(items[i].vsId) + "&version=" + version;
				}
				url = Request.setSecurityToken(url);
				docNames.push(items[i].name);
				mimeTypes.push(items[i].mimetype);
				docUrls.push(url);
			}
			this.sendMailWithAttachments(docNames, mimeTypes, docUrls, repository);
		},

		/**
		 * @since 2.0.3
		 */
		emailItemsFirstPartAsPDF: function(items, version) {
			this.convertToPDF = true;
			var docNames = [];
			var mimeTypes = [];
			var docUrls = [];
			if (!items)
				return;

			// Add to the recent list
			items[0].repository.addRecentItems(items);

			for ( var i in items) {
				var repository = items[i].repository;
				var template = encodeURIComponent(items[i].template);
				var docId = encodeURIComponent(items[i].id);
				// Set the path to be relative to the navigator/applets folder:
				var url = Request.getServiceRequestUrl("getDocument", items[i].repository.type);
				url = url + "?repositoryId=" + encodeURIComponent(repository.id) + "&template_name=" + template + "&retrieve_part=true" + "&alt_output=stream" + "&docid=" + docId;
				if (version != null && repository._isP8()) {
					url = url + "&vsId=" + encodeURIComponent(items[i].vsId) + "&version=" + version;
				}
				if (items[i].repository.type == "od" && items[i].mimetype == "application/afp") {
					// OnDemand only supports transform=pdf for application/afp type, and send as PDF is only
					// available on application/afp documents when AFP2PDF has been configured, otherwise it is grayed out.
					// So do not specify transform=pdf if in OnDemand, and type is not application/afp, otherwise content
					// retrieval will fail.
					url = url + "&transform=pdf";
				}				
				url = Request.setSecurityToken(url);
				var convertUrl = "/jaxrs/convertDocument";
				//defect 38685
				// the Url will be /jax.. in debug mode, but ./jax... in not debug mode.  
				convertUrl = ".." + convertUrl + "?docUrl=" + encodeURIComponent(url) + "&repositoryId=" + encodeURIComponent(repository.id) + "&contentType=" + encodeURIComponent(items[i].mimetype) + "&serverType=" + repository.type + "&targetContentType=application%2Fpdf&disposition=attachment&desktop=" + ecm.model.desktop.id;
				convertUrl = Request.setSecurityToken(convertUrl);

				docNames.push(items[i].name);
				mimeTypes.push(items[i].mimetype);
				docUrls.push(convertUrl);
			}
			this.sendMailWithAttachments(docNames, mimeTypes, docUrls, repository);
		},
		/**
		 * @since 2.0.3
		 */
		emailItemsAllPartsAsPDF: function(items, version) {
			//OD does not support this behavior.
			this.convertToPDF = true;
			var docNames = [];
			var mimeTypes = [];
			var docUrls = [];
			if (!items)
				return;

			// Add to the recent list
			items[0].repository.addRecentItems(items);

			for ( var i in items) {
				var repository = items[i].repository;
				var template = encodeURIComponent(items[i].template);
				var docId = encodeURIComponent(items[i].id);
				// Set the path to be relative to the navigator/applets folder:
				var url = Request.getServiceRequestUrl("getDocument", items[i].repository.type);
				url = url + "?repositoryId=" + encodeURIComponent(repository.id) + "&template_name=" + template + "&retrieve_part=true" + "&alt_output=stream" + "&docid=" + docId;
				if (version != null && repository._isP8()) {
					url = url + "&vsId=" + encodeURIComponent(items[i].vsId) + "&version=" + version;
				}
				url = Request.setSecurityToken(url);
				//var convertUrl = ecm.model.Request.getServiceRequestUrl("convertDocument", "");
				var convertUrl = "/jaxrs/convertDocument";
				//defect 38685
				// the Url will be /jax.. in debug mode, but ./jax... in not debug mode.  
				convertUrl = ".." + convertUrl + "?docUrl=" + encodeURIComponent(url) + "&repositoryId=" + encodeURIComponent(repository.id) + "&contentType=" + encodeURIComponent(items[i].mimetype) + "&serverType=" + repository.type + "&targetContentType=application%2Fpdf&disposition=attachment&desktop=" + ecm.model.desktop.id + "&part_number=all";
				convertUrl = Request.setSecurityToken(convertUrl);
				docNames.push(items[i].name);
				mimeTypes.push(items[i].mimetype);
				docUrls.push(convertUrl);
			}
			this.sendMailWithAttachments(docNames, mimeTypes, docUrls, repository);
		},

		/**
		 * Launches email, and includes links to the specified items.
		 * 
		 * @param items
		 *            An array of {@link ecm.model.Item} objects representing the items to be emailed as links.
		 * @param version
		 *            The version to include in the links, i.e., "current" or "released" (optional).
		 */
		emailItemsAsLinks: function(items, version) {
			this.logEntry("emailItemsAsLinks");
			this.convertToPDF = false;
			// Send links with email applet
			var template;

			var repository = items[0].repository;
			if (items[0].isInstanceOf && items[0].isInstanceOf(ecm.model.Teamspace)) {
				template = items[0].className;
				// Add to recent list
				repository.addRecentTeamspaces(items);
			} else {
				template = items[0].template;
				// Add to the recent list
				repository.addRecentItems(items);
			}

			var baseURL = location.protocol + "//" + location.host + location.pathname;
			var desktop = Desktop.id;
			if (navigator.appVersion.indexOf("Mac") == -1) {
				ecm.model.mail.sendLinks(baseURL, desktop, items[0].repository, template, items, version);
			} else {
				// Send links without using email applet for MacOS
				var body = "";
				for ( var i in items) {
					var item = items[i];
					var url = Item.getBookmark(item, version, desktop, item.repository.id, item.repository.type, template, window.WCProxy);

					var extension;
					var docName;
					if (item.isInstanceOf && item.isInstanceOf(ecm.model.Teamspace)) {
						extension = ".teamspace";
						docName = string.trim(item.name);
					} else {
						docName = (item.name && item.name.length > 0) ? string.trim(item.name) : ecm.messages.untitled_document_name;
						extension = ecm.model.mail.getExtFromMimeType(item.mimetype);
					}

					if (docName.lastIndexOf(extension) + extension.length != docName.length) {
						docName += extension;
					}
					body = body + docName + "\n";
					body = body + url + "\n\n";
				}
				location.href = "mailto:?subject=&body=" + encodeURIComponent(body);
			}
			this.logExit("emailItemsAsLinks");
		},

		/** Creates the applet tag to include in the non-visual email applet */
		_startEmailApplet: function() {
			var locationString = "_startEmailApplet";
			if (!this.appletStarted) {
				this._initializeRetries();
				var applet = this.createApplet("emailApplet", "1px", "1px", "com.ibm.ecm.applets.email.EmailApplet.class", Desktop.servicesUrl + "/applets", "emailapplet.jar");
				document.body.appendChild(applet);
				this.appletStarted = true;
				this.emailApplet = applet;
				this.logDebug(locationString, "Email applet started");
			} else {
				this.logDebug(locationString, "did NOT start Email applet because it was already started");
			}
		},

		_initializeRetries: function() {
			this.appletStartRetried = false;
			this._appletStartRetries = 0;
			this._appletRetryLimit = 2;
		},

		_appletStartRetried: function() {
			var methodName = "_appletStartRetried";
			if (this.appletStartRetried == undefined) { // Keep the DOH tests from failing.
				this._initializeRetries();
			}

			if (!this.appletStartRetried) {
				this.logDebug(methodName, "Try " + (this._appletStartRetries + 1));
				this.appletStartRetried = (++this._appletStartRetries) >= this._appletRetryLimit;
			}

			return this.appletStartRetried;
		},

		_appletStartRetriedAtLeastOnce: function() { // The only purpose of this method is to satisfy DOH tests.
			var returnValue = false;

			if (this.appletStartRetried != undefined) {
				returnValue = this._appletStartRetries > 0;
			}

			return returnValue;
		},

		/** Destroys the applet tag for the non-visual email applet. */
		_stopEmailApplet: function() {
			if (this.appletStarted) {
				document.body.removeChild(this.emailApplet);
				this.emailApplet = null;
				this.appletStarted = false;
			}
		},

		/** Creates an email message with the given file name and body as an attachment. */
		_sendMailWithAttachmentData: function(filename, body) {
			this.filename = filename;
			this.body = body;
			this._startEmailApplet();
			window.setTimeout("ecm.model.mail._sendMailWithAttachmentData_delayed()", 1000, "JavaScript");
		},

		/** Invoked from sendMailWithAttachmentData using a timeout, to allow the applet time to initialize. */
		_sendMailWithAttachmentData_delayed: function() {
			var locationString = "_sendMailWithAttachmentData_delayed";
			try {
				var status;
				this.emailApplet.setSubject("");
			} catch (e) { // retry to load applet
				if (!this._appletStartRetried()) {
					window.setTimeout("ecm.model.mail._sendMailWithAttachmentData_delayed()", 4000, "JavaScript");
					return;
				} else {
					this._displayErrorDialog(-1); // initialization error
					return;
				}
			}
			this.emailApplet.setSubject("");
			this.emailApplet.setNoteText("");
			status = this.emailApplet.addAttachmentData(this.filename, this.body);
			if (status != 0) {
				this._stopEmailApplet();
				this._displayErrorDialog(status);
				return;
			}
			try {
				status = this.emailApplet.sendMail();
			} catch (e) {
				this.logDebug(locationString, "emailApplet.sendMail threw exception:  " + e);
			}
			var messageParam = null;
			if (status == 4) {
				messageParam = dojojson.fromJson(this.emailApplet.getTempFilesNotDeletedJSONArray());
			}
			this._stopEmailApplet();
			if (status != 0) {
				this._displayErrorDialog(status, messageParam);
			}
		},

		/** Creates an email with the given files (passed as URLs) as attachments. */
		sendMailWithAttachments: function(docNames, mimeTypes, docUrls, repository) {
			this.docNames = docNames;
			this.mimeTypes = mimeTypes;
			this.docUrls = docUrls;
			this.repository = repository;
			this._startEmailApplet();
			window.setTimeout("ecm.model.mail._sendMailWithAttachments_delayed()", 1000, "JavaScript");
		},

		/** Invoked from sendMailWithAttachments using a timeout, to allow the applet time to initialize. */
		_sendMailWithAttachments_delayed: function() {
			var locationString = "_sendMailWithAttachments_delayed";
			var status;

			try {
				this.emailApplet.setSubject("");
			} catch (e) { // retry to load applet
				if (!this._appletStartRetried()) {
					window.setTimeout("ecm.model.mail._sendMailWithAttachments_delayed()", 4000, "JavaScript");
					return;
				} else {
					this._displayErrorDialog(-1); // initialization error
					return;
				}
			}
			this.emailApplet.setSubject("");

			for (var i = 0; i < this.docNames.length; i++) {
				this.logDebug(locationString, "repositoryName=" + this.repository.name + ", docname=" + this.docNames[i] + ", attachment URL=" + this.docUrls[i]);
				status = this.emailApplet.addAttachmentURL(this.docNames[i], this.mimeTypes[i], this.docUrls[i], false);
				if (status == this.emailApplet.STATUS_SESSION_EXPIRED) {
					// create a dummy request with retry method overridden for purposes of retrying after relogin
					var dummyRequest = new Request();
					dummyRequest.repository = this.repository;
					dummyRequest.retry = lang.hitch(this, function() {
						this._sendMailWithAttachments_delayed();
					});
					Desktop.onSessionExpired(dummyRequest);
					return;
				} else if (status != 0) {
					this.logDebug(locationString, "nonzero retcode from emailApplet.addAttachmentURL, status=" + status);
					this._stopEmailApplet();
					this._displayErrorDialog(status);
					return;
				}
			}
			try {
				status = this.emailApplet.sendMail();
			} catch (e) {
				this.logDebug(locationString, "emailApplet.sendMail threw exception:  " + e);
			}
			var messageParam = null;
			if (status == 4) {
				var filesNotDeletedJSON = this.emailApplet.getTempFilesNotDeletedJSONArray();
				messageParam = dojojson.fromJson(filesNotDeletedJSON);
			}
			this._stopEmailApplet();
			if (status != 0) {
				this._displayErrorDialog(status, messageParam);
			}
		},

		/** Creates an email with the given files (passed as URLs) as attachments. */
		sendLinks: function(baseURL, desktop, repository, template, items, version) {
			this.baseURL = baseURL;
			this.desktop = desktop;
			this.repository = repository;
			this.template = template;
			//this.items = items;
			this.items = [];
			for (var i = 0; i < items.length; i++) {
				this.items[i] = items[i].clone();
				if (!this.items[i].name || this.items[i].name == "") {
					if (this.items[i].filename) {
						this.items[i].name = this.items[i].filename;
					} else if (this.items[i].template_label) {
						this.items[i].name = this.items[i].template_label;
					} else if (this.items[i].id) {
						this.items[i].name = this.items[i].id;
					} else {
						this.items[i].name = "No name";
					}
				}
			}
			this.version = version;
			this._startEmailApplet();
			window.setTimeout("ecm.model.mail._sendLinks_delayed()", 1000, "JavaScript");
		},

		/** Invoked from sendLinks using a timeout, to allow the applet time to initialize. */
		_sendLinks_delayed: function() {
			var locationString = "_sendLinks_delayed";
			var status;
			// true: HTML doc with list of links. Each link is a anchor tag.
			// Attached as a file via MAPI. Most mail clients will inline HTML files
			// false: list of URLs without anchor tags
			var attachHtmlFileWithListOfLinks = true;

			try {
				this.emailApplet.setSubject("");
			} catch (e) { // retry to load applet
				this.logDebug(locationString, "emailApplet.setSubject threw exception: " + e);
				if (!this._appletStartRetried()) {
					this.logDebug(locationString, "applet not started, so call " + locationString + " after delay=4000 milliseconds");
					window.setTimeout("ecm.model.mail._sendLinks_delayed()", 4000, "JavaScript");
					return;
				} else {
					this._displayErrorDialog(-1); // initialization error
					return;
				}
			}

			var data = "";
			var noteText = "";
			if (attachHtmlFileWithListOfLinks) {
				data += "<html><head>";
				data += '<meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />';
				//data += "</head><body><ul>";
				data += "</head><body>";
			}
			// template
			this.logDebug(locationString, "template : '" + this.template + "'");
			for (var i = 0; i < this.items.length; i++) {
				var item = this.items[i];
				var docURL = Item.getBookmark(item, this.version, this.desktop, item.repository.id, item.repository.type, this.template, window.WCProxy);
				var extension;
				var docName;
				extension = "";
				if (!item.name || item.name == "") {
					item.name = ecm.messages.untitled_document_name;
				}
				if (!item.mimetype || item.mimetype == "") {
					item.mimetype = "";
				}
				if (item.isInstanceOf && item.isInstanceOf(ecm.model.Teamspace)) {
					docName = string.trim(item.name);
				} else if (item.getContentClass().name == Teamspace.TEAMSPACE_CONTENTCLASS_P8 || item.getContentClass().name == ecm.model.Teamspace.TEAMSPACE_CONTENTCLASS_CM8) {
					if (item.repository._isP8())
						docName = string.trim(item.getValue(Teamspace.NAME_ATTRIBUTE));
					else
						docName = string.trim(item.getValue(Teamspace.TITLE_ATTRIBUTE));
				} else {
					docName = string.trim(item.name);
					extension = this.getExtFromMimeType(item.mimetype);

				}
				if (docName.lastIndexOf(extension) + extension.length != docName.length) {
					docName += extension;
				}

				if (attachHtmlFileWithListOfLinks) {
					var anchor = '<a href="' + docURL + '">' + entities.encode(docName) + '</a>';
					data += anchor + "<br>";
					this.logDebug(locationString, "added link:  " + anchor);
				} else {
					noteText += "\n" + docName + ":    " + docURL + "\n";
				}
			}
			if (attachHtmlFileWithListOfLinks) {
				//data += "</ul></body></html>";
				data += "</body></html>";
				// .html so Outlook and Notes will inline the file
				var attachmentName = "WEBiLinks.html";
				try {
					status = this.emailApplet.addAttachmentData(attachmentName, data);
					if (status != 0) {
						this.logDebug(locationString, "emailApplet.addAttachmentData returned status=" + status);
						this._stopEmailApplet();
						this._displayErrorDialog(status);
						return;
					}
					this.emailApplet.setNoteText("");
				} catch (e) {
					this.logDebug(locationString, "emailApplet.addAttachmentData threw exception:  " + e);
					this._stopEmailApplet();
					this._displayErrorDialog(status);
					return;
				}
			} else {
				this.emailApplet.setNoteText(noteText);
			}
			try {
				status = this.emailApplet.sendMail();
			} catch (e) {
				this.logDebug(locationString, "emailApplet.sendMail threw exception:  " + e);
			}
			this._stopEmailApplet();
			if (status != 0) {
				this.logDebug(locationString, "emailApplet.addAttachmentData returned status=" + status);
				this._displayErrorDialog(status);
			}
		},

		/** Sends mail with the given subject and text only. Recipients or attachments are not included. */
		// never called
		sendMail: function(subject, body) {
			this.subject = subject;
			this.body = body;
			this._startEmailApplet();
			window.setTimeout("ecm.model.mail._sendMail_delayed()", 1000, "JavaScript");
		},

		/** Invoked from sendMail using a timeout, to allow the applet time to initialize. */
		_sendMail_delayed: function() {
			var locationString = "_sendMail_delayed";
			var status;
			try {
				this.emailApplet.setSubject("");
			} catch (e) { // retry to load applet
				if (!this._appletStartRetried()) {
					window.setTimeout("this._sendMail_delayed()", 4000, "JavaScript");
					return;
				} else {
					this._displayErrorDialog(-1); // initialization error
					return;
				}
			}
			this.emailApplet.setSubject(this.subject);
			this.emailApplet.setNoteText(this.body);
			try {
				status = this.emailApplet.sendMail();
			} catch (e) {
				this.logDebug(locationString, "emailApplet.sendMail threw exception:  " + e);
			}
			this._stopEmailApplet();
			if (status != 0) {
				this._displayErrorDialog(status);
			}
		},

		/** Look up detailed messages for applet status codes and invoke the error dialog. */
		_displayErrorDialog: function(status, messageParam) {
			var message;
			var details;
			var number;
			var userResponse;
			switch (status) {
			case -1:
				message = Message.createErrorMessage("email_applet_init_failed");
				break;
			case 1:
				message = Message.createErrorMessage("email_applet_JNI_LOAD_FAILED");
				break;
			case 2:
				message = Message.createErrorMessage("email_applet_TEMP_FILE_NOT_CREATED");
				break;
			case 3:
				message = Message.createErrorMessage("email_applet_TEMP_FILE_WRITE_FAILED");
				break;
			case 4:
				var filesNotDeletedString = "";
				if (messageParam && ((messageParam instanceof Array) || (!messageParam.propertyIsEnumerable('length') && (typeof messageParam === 'object') && (typeof messageParam.length === 'number')))) {
					for ( var i in messageParam) {
						filesNotDeletedString += "<br>";
						filesNotDeletedString += messageParam[i];
					}
				}
				message = Message.createErrorMessage("email_applet_TEMP_FILE_NOT_DELETED", [
					filesNotDeletedString
				]);
				break;
			case 5:
				message = Message.createErrorMessage("email_applet_MALFORMED_ATTACHMENT_URL");
				break;
			case 6:
				message = Message.createErrorMessage("email_applet_ATTACHMENT_URL_CANNOT_OPEN");
				break;
			case 7:
				message = Message.createErrorMessage("email_applet_ATTACHMENT_URL_READ_FAILED");
				break;
			case 9:
				if (this.convertToPDF) {
					message = Message.createErrorMessage("email_applet_CONVERT_DOC_FAILED");
				} else {
					message = Message.createErrorMessage("email_applet_RETRIEVE_DOC_FAILED");
				}
				break;
			case 101:
				break; // not a failure
			case 102:
				message = Message.createErrorMessage("email_applet_MAPI_USER_ABORT");
				break;
			case 103:
				message = Message.createErrorMessage("email_applet_MAPI_LOGON_FAILURE");
				break;
			case 104:
				message = Message.createErrorMessage("email_applet_MAPI_DISK_FULL");
				break;
			case 105:
				message = Message.createErrorMessage("email_applet_MAPI_INSUFFICIENT_MEMORY");
				break;
			case 106:
				message = Message.createErrorMessage("email_applet_MAPI_ACCESS_DENIED");
				break;
			case 108:
				message = Message.createErrorMessage("email_applet_MAPI_TOO_MANY_SESSIONS");
				break;
			case 109:
				message = Message.createErrorMessage("email_applet_MAPI_TOO_MANY_FILES");
				break;
			case 110:
				message = Message.createErrorMessage("email_applet_MAPI_TOO_MANY_RECIPIENTS");
				break;
			case 111:
				message = Message.createErrorMessage("email_applet_MAPI_ATTACHMENT_NOT_FOUND");
				break;
			case 112:
				message = Message.createErrorMessage("email_applet_MAPI_ATTACHMENT_OPEN_FAILURE");
				break;
			case 113:
				message = Message.createErrorMessage("email_applet_MAPI_ATTACHMENT_WRITE_FAILURE");
				break;
			case 114:
				message = Message.createErrorMessage("email_applet_MAPI_UNKNOWN_RECIPIENT");
				break;
			case 115:
				message = Message.createErrorMessage("email_applet_MAPI_BAD_RECIPTYPE");
				break;
			case 116:
				message = Message.createErrorMessage("email_applet_MAPI_NO_MESSAGES");
				break;
			case 117:
				message = Message.createErrorMessage("email_applet_MAPI_INVALID_MESSAGE");
				break;
			case 118:
				message = Message.createErrorMessage("email_applet_MAPI_TEXT_TOO_LARGE");
				break;
			case 119:
				message = Message.createErrorMessage("email_applet_MAPI_INVALID_SESSION");
				break;
			case 120:
				message = Message.createErrorMessage("email_applet_MAPI_TYPE_NOT_SUPPORTED");
				break;
			case 121:
				message = Message.createErrorMessage("email_applet_MAPI_AMBIGUOUS_RECIPIENT");
				break;
			case 122:
				message = Message.createErrorMessage("email_applet_MAPI_MESSAGE_IN_USE");
				break;
			case 123:
				message = Message.createErrorMessage("email_applet_MAPI_NETWORK_FAILURE");
				break;
			case 124:
				message = Message.createErrorMessage("email_applet_MAPI_INVALID_EDITFIELDS");
				break;
			case 125:
				message = Message.createErrorMessage("email_applet_MAPI_INVALID_RECIPS");
				break;
			case 126:
				message = Message.createErrorMessage("email_applet_MAPI_NOT_SUPPORTED");
				break;
			}
			if (message) {
				Desktop.addMessage(message);
			}
		},

		// Warning: Keep in sync with WCMimeTypeUtil.java's getExtFromMimeType method.
		getExtFromMimeType: function(mimeType) {
			mimeType = mimeType.toLowerCase();
			if (mimeType == "image/gif") {
				return ".gif";
			} else if (mimeType == "image/g3fax") {
				return ".g3f";
			} else if (mimeType == "image/jpg" || mimeType == "image/jpeg" || mimeType == "image/pjpeg") {
				return ".jpg";
			} else if (mimeType == "tif" || mimeType == "image/tif" || mimeType == "image/tiff" || mimeType == "image/tiff1stp") {
				return ".tiff";
			} else if (mimeType == "pdf" || mimeType == "application/pdf") {
				return ".pdf";
			} else if (mimeType == "application/line" || mimeType == "application/lin") {
				return ".lin";
			} else if (mimeType == "application/vnd.ibm.modcap") {
				return ".mda";
			} else if (mimeType == "application/afp" || mimeType == "application/vnd.ibm.afplinedata") {
				return ".afp";
			} else if (mimeType == "txt" || mimeType == "text/plain") {
				return ".txt";
			} else if (mimeType == "text/htm" || mimeType == "text/html") {
				return ".htm";
			} else if (mimeType == "text/richtext" || mimeType == "application/rtf") {
				return ".rtf";
			} else if (mimeType == "doc" || mimeType == "application/msword") {
				return ".doc";
			} else if (mimeType == "application/vnd.ms-word.document.macroenabled.12") {
				return ".docm";
			} else if (mimeType == "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
				return ".docx";
			} else if (mimeType == "application/vnd.ms-word.template.macroenabled.12") {
				return ".dotm";
			} else if (mimeType == "application/vnd.openxmlformats-officedocument.wordprocessingml.template") {
				return ".dotx";
			} else if (mimeType == "application/vnd.ms-powerpoint.template.macroenabled.12") {
				return ".potm";
			} else if (mimeType == "application/vnd.openxmlformats-officedocument.presentationml.template") {
				return ".potx";
			} else if (mimeType == "application/vnd.ms-powerpoint.addin.macroenabled.12") {
				return ".ppam";
			} else if (mimeType == "application/vnd.ms-powerpoint.slideshow.macroenabled.12") {
				return ".ppsm";
			} else if (mimeType == "application/vnd.openxmlformats-officedocument.presentationml.slideshow") {
				return ".ppsx";
			} else if (mimeType == "application/vnd.ms-powerpoint.presentation.macroenabled.12") {
				return ".pptm";
			} else if (mimeType == "application/vnd.openxmlformats-officedocument.presentationml.presentation") {
				return ".pptx";
			} else if (mimeType == "application/vnd.ms-excel.addin.macroenabled.12") {
				return ".xlam";
			} else if (mimeType == "application/vnd.ms-excel.sheet.binary.macroenabled.12") {
				return ".xlsb";
			} else if (mimeType == "application/vnd.ms-excel.sheet.macroenabled.12") {
				return ".xlsm";
			} else if (mimeType == "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet") {
				return ".xlsx";
			} else if (mimeType == "application/vnd.ms-excel.template.macroenabled.12") {
				return ".xltm";
			} else if (mimeType == "application/vnd.openxmlformats-officedocument.spreadsheetml.template") {
				return ".xltx";
			} else if (mimeType == "txt" || mimeType == "application/vnd.lotus-wordpro") {
				return ".lwp";
			} else if (mimeType == "application/vnd.lotus-1-2-3") {
				return ".123";
			} else if (mimeType == "application/vnd.lotus-freelance") {
				return ".prz";
			} else if (mimeType == "xls" || mimeType == "application/vnd.ms-excel") {
				return ".xls";
			} else if (mimeType == "ppt" || mimeType == "application/vnd.ms-powerpoint") {
				return ".ppt";
			} else if (mimeType == "application/wordperfect5.1") {
				return ".wp";
			} else if (mimeType == "image/bmp") {
				return ".bmp";
			} else if (mimeType == "image/png") {
				return ".png";
			} else if (mimeType == "image/pcx" || mimeType == "image/x-pcx") {
				return ".pcx";
			} else if (mimeType == "image/dcx" || mimeType == "image/x-dcx") {
				return ".dcx";
			} else if (mimeType == "application/dwg") {
				return ".dwg";
			} else if (mimeType == ("application/vnd.framemaker")) {
				return ".fm";
			} else if (mimeType == ("application/octet-stream")) {
				return ".bin";
			} else if (mimeType == "application/dca-rft") {
				return ".ftf";
			} else if (mimeType == ("text/xml")) {
				return ".xml";
			} else if (mimeType == ("audio/basic")) {
				return ".au";
			} else if (mimeType == ("video/quicktime")) {
				return ".mov";
			} else if (mimeType == "video/msvideo" || mimeType == "video/x-msvideo" || mimeType == "video/x-ibm-ivsplugin") {
				return ".avi";
			} else if (mimeType == ("audio/x-wav")) {
				return ".wav";
			} else if (mimeType == "application/vnd.visio" || mimeType == "application/visio") {
				return ".vsd";
			} else if (mimeType == ("application/x-visio")) {
				return ".vst";
			} else if (mimeType == "application/vnd.ms-project" || mimeType == "application/msproject") {
				return ".mpp";
			} else if (mimeType == ("application/x-project")) {
				return ".mpt";
			} else if (mimeType == ("audio/x-midi")) {
				return ".midi";
			} else if (mimeType == ("audio/mpeg")) {
				return ".mpeg";
			} else if (mimeType == ("audio/mp3")) {
				return ".mp3";
			} else if (mimeType == ("video/mpeg")) {
				return ".mpg";
			} else if (mimeType == "audio/vnd.qcelp") {
				return ".qcp";
			} else if (mimeType == "video/x-ms-asf") {
				return ".asf";
			} else if (mimeType == "audio/x-aiff") {
				return ".aif";
			} else if (mimeType == "application/x-tar", mimeType == "application/g-tar", mimeType == "application/x-gtar", mimeType == "application/tar") {
				return ".tar";
			} else if (mimeType == "image/cgm") {
				return ".cgm";
			} else if (mimeType == "message/rfc82 " || mimeType == "application/vnd.eml") {
				return ".eml";
			} else if (mimeType == "application/dxf" || mimeType == "application/x-autocad" || mimeType == "aplication/x-dxf") {
				return "dxf";
			} else if (mimeType == "text/calendar") {
				return ".ics";
			} else if (mimeType == "video/mp4") {
				return ".mp4";
			} else if (mimeType == "video/x-m4v") {
				return ".m4v";
			} else if (mimeType == -"application/zip" || mimeType == "application/x-zip" || mimeType == "application/x-zip" || mimeType == "application/x-zip-compressed") {
				return ".zip";
			} else if (mimeType == "application/vnd.ms-xpsdocument") {
				return ".xps";
			} else if (mimeType == "application/NikuWorkbench") {
				return ".rmp";
			} else if (mimeType == "application/postscript") {
				return ".ps";
			} else if (mimeType == "application/vnd.ms-tnef") {
				return ".tnf";
			} else if (mimeType == "application/x-lotus-dxl") {
				return ".dxl";
			} else if (mimeType == "application/x-troff") {
				return ".roff";
			} else if (mimeType == "text/url") {
				return ".utl";
			} else if (mimeType == "application/vnd.ms-outlook" || mimeType == "application/outlook", mimeType == "application/vnd.msoutlook" || mimeType == "application/x-msg" || mimeType == "application/outlook" || mimeType == "application/x-filenet-filetype-msg") {
				return ".msg";
			} else if (mimeType == "application/x-mspublisher" || mimeType == "application/vnd-ms.publisher") {
				return ".pub";
			} else if (mimeType == "audio/x-dss") {
				return ".dss";
			} else if (mimeType == "application/dicom") {
				return ".dcm";
			} else if (mimeType == "text/csv" || mimeType == "application/csv") {
				return ".csv";
			} else if (mimeType == "application/x-rar-compressed") {
				return ".rar";
			} else if (mimeType == "application/x-compress") {
				return ".z";
			} else if (mimeType == "application/x-compressed" || mimeType == "application/x-gzip") {
				return ".gz";
			} else if (mimeType == "application/vnd.ms-infopath") {
				return ".xsn";
					
			} else {
				return "";
			}
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
		 *            The directory to search for the applet's class or jar
		 * @param archive
		 *            The jars containing classes for the applet.
		 * @param params
		 *            Additional applet parameters.
		 */
		createApplet: function(name, width, height, code, codebase, archive, params) {
			var methodName = "createApplet";
			this.logEntry(methodName);

			var applet = 0;
			var logLevel = ecm.logger.getLogLevel();
			var proxyUrl = "";
			var platform = (navigator && navigator.platform ? navigator.platform : "Win32");
			var appletDiv;

			this.logDebug(methodName, "Platform is: " + platform);

			// create the applet element
			if (has("ie") || has("trident")) { // for IE, use object tag
				var objectHTML = '<object name="' + name + '" width="' + width + '" height="' + height + '" classid="clsid:8AD9C840-044E-11D1-B3E9-00805F499D93">' + '<param name="code" value="' + code + '"></param>' + '<param name="codebase" value="' + codebase + '"></param>' + '<param name="archive" value="' + archive + '"></param>' + '<param name="logLevel" value="' + logLevel + '"></param>' + '<param name="scriptable" value="true"></param>' + '<param name="mayscript" value="true"></param>';
				for ( var param in params) {
					objectHTML = objectHTML + '<param name="' + param + '" value="' + params[param] + '"></param>';
				}
				objectHTML = objectHTML + '<param name="' + 'userAgent' + '" value="' + navigator.userAgent + '"></param>';
				objectHTML = objectHTML + '<param name="' + 'platform' + '" value="' + platform + '"></param>';
				objectHTML = objectHTML + '<param name="' + 'proxyUrl' + '" value="' + proxyUrl + '"></param>';
				objectHTML = objectHTML + '</object>';
				this.logDebug(methodName, "Generated object HTML: " + objectHTML);
				appletDiv = document.createElement("div");
				appletDiv.innerHTML = objectHTML;
				applet = appletDiv.firstChild;
			} else { // for other browsers, use applet tag
				var appletHTML = '<applet name="' + name + '" width="' + width + '" height="' + height + '" code="' + code + '" codebase="' + proxyUrl + codebase + '"archive="' + archive + '" mayscript="true">';
				appletHTML = appletHTML + '<param name="' + 'logLevel' + '" value="' + logLevel + '"></param>';
				for ( var param in params) {
					appletHTML = appletHTML + '<param name="' + param + '" value="' + params[param] + '"></param>';
				}
				appletHTML = appletHTML + '<param name="' + 'userAgent' + '" value="' + navigator.userAgent + '"></param>';
				appletHTML = appletHTML + '<param name="' + 'platform' + '" value="' + platform + '"></param>';
				appletHTML = appletHTML + '<param name="' + 'WCProxy' + '" value="' + window.WCProxy + '"></param>';
				appletHTML = appletHTML + '</applet>';
				this.logDebug(methodName, "Generated appletHTML: " + appletHTML);
				appletDiv = document.createElement("div");
				appletDiv.innerHTML = appletHTML;
				applet = appletDiv.firstChild;
			}

			this.logExit(methodName);
			return applet;
		}
	});

	/**
	 * @name ecm.model.mail.
	 * @description A global instance of {@link ecm.model.Mail} for the IBM Content Navigator toolkit.
	 */
	ecm.model.mail = new Mail();
	return ecm.model.mail;
});
