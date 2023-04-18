/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([	
	"dojo/_base/declare",
	"dojo/_base/array",
	"dojo/_base/lang",
	"dojo/_base/xhr",
	"dojo/_base/Deferred",
	"dojo/DeferredList",
	"./_ModelObject",
	"./Request"
], function(declare, array, lang, xhr, Deferred, DeferredList, _ModelObject, Request) {

	/**
	 * @name ecm.model.Conversion
	 * @class Provides the ability print document utilizing the conversion service
	 * @augments ecm.model._ModelObject
	 * @private
	 */
	declare("ecm.model.Conversion", [
		_ModelObject
	], {
		/** @lends ecm.model.Conversion.prototype */
		
		supportedContentTypes: {},
		
		// These are not currently supported by the Daeja conversion service. Needs to work with Daeja to add support for these types.
		// TODO this is only a workaround for now.  Daeja Conversion service should support these types.
		_notSupportedConversionContentType: {
			"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
			"application/vnd.ms-excel": "application/vnd.ms-excel",
			"image/jpeg": "image/jpeg",
			"image/tiff": "image/tiff"
		},
		
		// list of mime types that print sevice supports:
		_printServiceSupportedTypes: new Array(
				"application/pdf",
				"image/bmp",
				"image/gif",
				"image/jpeg",
				"image/jpg",
				"image/pjpeg", 
				"image/png",
				"image/tiff",
				"image/tif",
				"application/msword",
				"application/vnd.ms-excel",
				"application/vnd.ms-excel.addin.macroEnabled.12",
				"application/vnd.ms-excel.sheet.binary.macroEnabled.12",
				"application/vnd.ms-excel.sheet.macroEnabled.12",
				"application/vnd.ms-excel.template.macroEnabled.12",
				"application/vnd.ms-powerpoint",
				"application/vnd.ms-powerpoint.addin.macroEnabled.12",
				"application/vnd.ms-powerpoint.presentation.macroEnabled.12",
				"application/vnd.ms-powerpoint.slideshow.macroEnabled.12",
				"application/vnd.ms-powerpoint.template.macroEnabled.12",
				"application/vnd.ms-word.document.macroEnabled.12",
				"application/vnd.ms-word.template.macroEnabled.12",
				"application/vnd.openxmlformats-officedocument.presentationml.presentation",
				"application/vnd.openxmlformats-officedocument.presentationml.slideshow",
				"application/vnd.openxmlformats-officedocument.presentationml.template",
				"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
				"application/vnd.openxmlformats-officedocument.spreadsheetml.template",
				"application/vnd.openxmlformats-officedocument.wordprocessingml.document",
				"application/vnd.openxmlformats-officedocument.wordprocessingml.template",
				
				"image/cals",
				"image/dicom",
				"image/pcx",
				"application/vnd.ibm.modcap",
				"image/x-dcx",
				"application/vnd.lotus-1-2-3",
				"application/x-lotus123",
				"application/vnd.lotus-freelance",
				"application/x-lotus-freelance",
				"application/vnd.lotus-wordpro",
				"application/x-lotus-wordpro",
				"application/vnd.oasis.opendocument.graphics",
				"application/vnd.oasis.opendocument.presentation",
				"application/vnd.oasis.opendocument.spreadsheet",
				"application/vnd.oasis.opendocument.text",
				"application/x-vnd.oasis.opendocument.graphics",
				"application/x-vnd.oasis.opendocument.presentation",
				"application/x-vnd.oasis.opendocument.spreadsheet",
				"application/x-vnd.oasis.opendocument.text",
				"application/rtf",
				"application/x-rtf",
				"text/richtext"),
				
		
		_cancelPrinting: false,		
		
		// load the viewer print api
		initialize: function() {
			this._loadBootstrap();
		},
		
		// load the viewone print api from the viewer
		_loadBootstrap: function() {
			var methodName = "_loadBootstrap";
			this.logEntry(methodName);
			var bootstrapId = "viewonePrintBootstrap";
			if (!window.viewonePrintBootstrap && document.getElementById(bootstrapId) == null && !this._loadedBootstrap || this.loadingBootstrap) {
				window.viewonePrintBootstrap = {
					"loading": "true"
				};

				this._loadingBootstrap = true;
				var stubUrl = ecm.model.desktop.getServicesUrl() + "/jaxrs/v1/viewoneAction?";
				var requestContent = {
					op: 'com.ibm.ecm',
					security_token: "token",
					plugin: 'ViewONEPlugin',
					action: 'ViewONEPlatform',
					helpParameters: "security_token,action,plugin"
				};
				this.logDebug(methodName, "requesting print bootstrap script");
				xhr.get({
					url: stubUrl,
					content: requestContent, 
					load: lang.hitch(this, function(data, args) {
						var oHead = document.getElementsByTagName('HEAD').item(0);
						var oScript = document.createElement("script");
						oScript.language = "javascript";
						oScript.type = "text/javascript";
						oScript.id = bootstrapId;
						oScript.defer = "true";
						oScript.text = data;
						oHead.appendChild(oScript);
						this.logDebug(methodName, "viewer print bootstrap script loaded ");
						this.viewerPrintReady();
					}),

					error: lang.hitch(this, function(data, args) {
						this._loadingBootstrap = false;
						this.logError("Error retrieving viewer print bootstrap");
					})
				});
			} else {
				if (document.getElementById(bootstrapId) != null) {
					this._loadingBootstrap = false;
					this._loadedBootstrap = true;
					this.logDebug(methodName, "ViewOne print bootstrap already loaded.");
					if (window[bootstrapId]) {
						this.viewerPrintReady();
					} else {
						this.logError(methodName + ": viewer print load failure.");
					}
				} else if (this._loadingBootstrap) {
					this.logDebug(methodName, "already loading print bootstrap.")
				}
			}
			this.logExit(methodName);
		},

		viewerPrintReady: function() {
			this._loadingBootstrap = false;
			this._loadedBootstrap = true;
		},
		
		/*
		 * Returns true if the mime type is supported by print
		 */
		typeIsSupportedByPrintService: function(mimeType) {
			return array.indexOf(this._printServiceSupportedTypes, mimeType.toLowerCase()) >= 0;			
		},
			
		/**
		 * Generates a URL that can be used to retrieve the content for printing a document.
		 * 
		 * @param item
		 *            An instance of {@link ecm.model.ContentItem} for the document.
		 */
		_getDocumentUrl: function(item, partNumber) {
			var docId = item.id;
			//var docName = item.name;
			var template = item.getContentClass().id;
			var repositoryId = item.repository.id;
			var mimeType = item.mimetype || "";
			var serverType = item.repository.type;
			var vsId = item.vsId; // required for p8 documents
			var replicationGroup = item.replicationGroup; // replicationGroup
			
			var docUrl = ecm.model.desktop._cServicesUrl + "/jaxrs/" + serverType + "/getDocument?docid=" + encodeURIComponent(docId) + "&template_name=" + encodeURIComponent(template) + "&repositoryId=" + encodeURIComponent(repositoryId);
			if (vsId)
				docUrl = docUrl + "&vsId=" + encodeURIComponent(vsId);

			if (item.version)
				docUrl = docUrl + "&version=" + item.version;

			if (replicationGroup)
				docUrl = docUrl + "&replicationGroup=" + replicationGroup;

			if (partNumber != null)
				docUrl = docUrl + "&element=" + partNumber; // "&part_number=" + partNumber;
			
			docUrl = ecm.model.Request.setSecurityToken(docUrl);			
			
			return docUrl;
		},
				
		_getDocumentAsPDFUrl: function(item, partNumber) {
			var docId = item.id;
			//var docName = item.name;
			var template = item.getContentClass().id;
			var repositoryId = item.repository.id;
			var mimeType = item.mimetype || "";
			var repositoryType = item.repository.type;
			var vsId = item.vsId; // required for p8 documents
			
			var docUrl = ecm.model.desktop._cServicesUrl + "/jaxrs" + "/getDocumentContentAsPDF?docid=" + encodeURIComponent(docId) + 
				"&template_name=" + encodeURIComponent(template) + "&repositoryId=" + encodeURIComponent(repositoryId) + "&repositoryType=" + repositoryType + "&desktop=" + ecm.model.desktop.id;
			
			docUrl = docUrl + "&mimetype=" + encodeURIComponent(mimeType);
			
			if (vsId)
				docUrl = docUrl + "&vsId=" + encodeURIComponent(vsId);

			if (item.version)
				docUrl = docUrl + "&version=" + item.version;
			if (partNumber != null)
				docUrl = docUrl + "&element=" + partNumber; //  For CM, we need to use "&part_number=" + partNumber;
			
			docUrl = ecm.model.Request.setSecurityToken(docUrl);			
			
			return docUrl;
		},
		
		print: function(printParams, callback, errorBack) {
			this._cancelPrinting = false;			
			this._progressPercentages = {};
			var items = printParams.items;
			var allParts = printParams.allParts;
			var coverPage = printParams.includeCoverPage;
			if (allParts) {
				this._printMultiPartDocument(items, coverPage, false, callback, errorBack);
			} else if (items.length > 1 || coverPage === true) {
				//this._printMultiDocuments(items, coverPage, false, callback, errorBack);
				this._printThenMergeDocuments(items, coverPage, false, callback, errorBack);
				//this._printMultiUsingAPI(printParams, callback, errorBack);
			} else {
				this._printUsingAPI(printParams, callback, errorBack);
			}
		},		
		
		// can be used for single or multi
		_printMultiUsingAPI: function(printParams, callback, errorBack) {
			var self = this;
			var coverPage = printParams.includeCoverPage;
			var items = printParams.items;
			var pj = new com.ibm.ecm.PrintJob();
			var viewOneParams = {
					"plugin": "ViewONEPlugin",
					"action":"ViewONEPlatform"				
				};
			var endPointUrl = Request.getServiceRequestUrl("v1/viewoneAction", null, viewOneParams);
			com.ibm.ecm.PrintJob.endpoint = ecm.model.Request.appendSecurityToken(endPointUrl);
			
			for (var i = 0; i < items.length; i++) {
				var item = null;
				var index = null;
				// check if content element
				if (items[i].item) {
					item = items[i].item;
					index = items[i].index;
				} else {
					item = items[i];
				}
				var docURL = null;
				// for OD file types, need to get as pdf
				if (item.repository._isOnDemand() && (item.mimetype == "application/afp" || item.mimetype == "application/line")) {
					docURL = window.location.origin +  this._getDocumentAsPDFUrl(item);
				}
				else {
					docURL =  window.location.origin +  this._getDocumentUrl(item, printParams.partNumber);
				}
				var coverPageURL = null;
				if (coverPage) {
					var coverPageIndex = null;
					if (index != null) {
						if (typeof index === "string")
							coverPageIndex = parseInt(index) + 1;
						else							
							coverPageIndex = index + 1;
					}
					coverPageURL = window.location.origin + this._getCoverPageURL(item, coverPageIndex) + "&format=html";
					
				}
				if (i == 0) {
					pj.setDocument(docURL);
					pj.setPages("all");
					pj.setTitle(coverPageURL);
				}
				else {
					var pj2 = new com.ibm.ecm.PrintJob();
					pj2.setDocument(docURL);
					pj2.setPages("all");
					pj2.setTitle(coverPageURL);
					pj.addPrintJob(pj2);
				}
			}
			var listener = function(status) {
				self.onStatusUpdated(status);
			}
			pj.setProgressListener(listener);
	        pj.print().then(function(url) {
	        	self._openPDF(url);
	        	if (callback)
	  				callback();
	        }, function(err){
	        	if (errorBack)
	        		errorBack(err);
	        });  
		},
		
		/*
		 * Print using the view-one api (viewone-api.js) which is called com.ibm.ecm.PrintJob 
		 */
		_printUsingAPI: function(printParams, callback, errorBack) {
			var self = this;
			var items = printParams.items;
			var item = null;
			// check if content element
			if (items[0].item) {
				item = items[0].item;
			} else {
				item = items[0];
			}
			var pj = new com.ibm.ecm.PrintJob();
			
			var viewOneParams = {
					"plugin": "ViewONEPlugin",
					"action":"ViewONEPlatform"				
					//"info":"true",				
					//"sa":"1",
					//"cl":"v",
					//"op": op,
					//"sub_op":subOp
				};
			
			var endPointUrl = Request.getServiceRequestUrl("v1/viewoneAction", null, viewOneParams);
			
			//pj.endpoint = ecm.model.Request.appendSecurityToken(endPointUrl);
			com.ibm.ecm.PrintJob.endpoint = ecm.model.Request.appendSecurityToken(endPointUrl);
			var docURL = null;
			// for OD file types, need to get as pdf
			if (item.repository._isOnDemand() && (item.mimetype == "application/afp" || item.mimetype == "application/line")) {
				//docURL = window.location.origin +  this._getDocumentAsPDFUrl(item);
				docURL =  window.location.origin +  this._getDocumentUrl(item) + "&transform=pdf";
			}
			else {
				docURL =  window.location.origin +  this._getDocumentUrl(item, printParams.partNumber);
			}
			pj.setDocument(docURL);
			pj.setPages("all");
			var listener = function(status) {
				self.onStatusUpdated(status);
			}
			pj.setProgressListener(listener);
	        pj.print().then(function(url) {
	        	self._openPDF(url);
	        	if (callback)
	  				callback();
	        }, function(err){
	        	if (errorBack)
	        		errorBack(err);
	        });  
		},
		
		// TODO:  Needs to add more logic to correctly cancel the print request and 
		// return to the calling module accordingly. 
		cancel: function() {
			this._cancelPrinting = true;
		},
		
		_getAnnotationUrl: function(item) {
			var docId = item.id;
			//var docName = item.name;
			var template = item.getContentClass().id;
			var repositoryId = item.repository.id;
			var mimeType = item.mimetype || "";
			var serverType = item.repository.type;
			var vsId = item.vsId; // required for p8 documents
			var replicationGroup = item.replicationGroup; // replicationGroup
			
			var docUrl = ecm.model.desktop._cServicesUrl + "/jaxrs/" + serverType + "/getAnnotations?docid=" + encodeURIComponent(docId) + "&template_name=" + encodeURIComponent(template) + "&repositoryId=" + encodeURIComponent(repositoryId);
			if (vsId)
				docUrl = docUrl + "&vsId=" + encodeURIComponent(vsId);
	
			if (item.version)
				docUrl = docUrl + "&version=" + item.version;
	
			if (replicationGroup)
				docUrl = docUrl + "&replicationGroup=" + replicationGroup;
	
			docUrl = docUrl + "&alt_output=V1";
			
			docUrl = ecm.model.Request.setSecurityToken(docUrl);
				
			return docUrl;
		},
		
		_getAnnotationSummaryPageURL: function(item) {			
			var repositoryId = item.repository.id;
			var docId = item.id;
			var mimeType = item.mimetype || "";
			var serverType = item.repository.type;
			var vsId = item.vsId; // required for p8 documents		
			
			var sepUrl = ecm.model.desktop._cServicesUrl + "/jaxrs/" + serverType + "/getAnnotationSummaryPage?id=" + encodeURIComponent(docId) +  
				"&repositoryId=" + encodeURIComponent(repositoryId) + 
				"&fileName=" + encodeURIComponent(item.name)
			
			if (vsId)
				sepUrl = sepUrl + "&vsId=" + encodeURIComponent(vsId);
			if (item.version)
				docUrl = docUrl + "&version=" + item.version;
			
			sepUrl = ecm.model.Request.setSecurityToken(sepUrl);
			return sepUrl;
		},	
		
		_getCoverPageURL: function(item, partNumber) {			
			var repositoryId = item.repository.id;
			var docId = item.id;
			var mimeType = item.mimetype || "";
			var serverType = item.repository.type;
			var template = item.getContentClass().id;
			
			var sepUrl = ecm.model.desktop._cServicesUrl + "/jaxrs/" + serverType + "/getCoverPage?docid=" + encodeURIComponent(docId) + "&template_name=" + encodeURIComponent(template) +  
				"&repositoryId=" + encodeURIComponent(repositoryId) + 
				"&fileName=" + encodeURIComponent(item.name);
			if (partNumber != null) {
				sepUrl = sepUrl + "&part_number=" + partNumber; 
			}
			
			sepUrl = ecm.model.Request.setSecurityToken(sepUrl);
			return sepUrl;
		},		
			
		_printDocument: function(item, callback) {
			var docURL;			
			// Daeja supported mimetype, so give Daeja the RAW content
			if (this.supportedContentTypes[item.mimetype]) {
				docURL = window.location.origin +  this._getDocumentUrl(item);
			} else {	// Daeja doesn't support this mimetype, so give Daeja a PDF content by using ICN to convert it to PDF
				docURL = window.location.origin +  this._getDocumentAsPDFUrl(item);
			}
			this._print(docURL, callback);
		},			
		
		_print: function(docURL, callback, errback, doNotOpenPDF) {
			var xml = this._getPrintXML(docURL);
			var params = this._getViewOneParams("standalone_print", "start", {
				"marginTop":"0",
				"marginBottom":"0",
				"marginLeft":"0",
				"marginRight":"0",
				"printOriginalSize":"false",
				"copies":"1",
				"pages":"all",
				//"paperSizeName":"A4",
				//"orientation":"44331",
				"printerName":"pdf",
			});				
			this._count = 1;
			this._progressPercentages = {};
			this._post(params, xml, lang.hitch(this, function(responseText) {				
				var printStatus = this._getStatus(responseText, "print");
				if (!printStatus.error) {
					
					// TODO TNT clean up
					if (this._cancelPrinting) {
						return;
					}
					
			  		this._poll(printStatus.id, "print", lang.hitch(this, function(url) {
			  			
			  			// TODO TNT clean up
						if (this._cancelPrinting) {
							return;
						}
						
						if (doNotOpenPDF == null || !doNotOpenPDF) {
							this._openPDF(url.split("&amp;").join("&"));
						}
			  			if (callback)
			  				callback(url);
			  		}), errback);
			  	} else {
			  		// error
			  		if (errback)
			  			errback(printStatus.status);
			  	}
			  	
			}));
			
		},		
		
		_printMultiDocuments: function(items, includeCoverPage, includeAnnotationSummaryPage, callback, errback) {		
			this._convertDocuments(items, includeCoverPage, includeAnnotationSummaryPage, lang.hitch(this, function(convertedItems) {
				// TODO TNT clean up
				if (this._cancelPrinting) {
					return;
				}
				this._handleConvertedDocuments(convertedItems, callback, errback);
			}), errback);								
		},
		
		// used to build and print the results from convertedItems, use doc builder to build the list of items into a single pdf, then 
		// use the print service to print it.
		// convertedItems is the return value of convertedItems, which is the deferred list response.
		// callback is called after printing
		_handleConvertedDocuments: function(convertedItems, callback, errback) {
			var urls = array.map(convertedItems, function(convertedItem) {
				return convertedItem[1];
			});
			var xml = this._getDocBuilderXML(urls);
			this._count = 1;
			this._progressPercentages = {};							
			
			//var xml = this._getDocBuilderXML(items, response);
			var params = this._getViewOneParams("docbuilder", "start");	
			this._post(params, xml, lang.hitch(this, function(responseText) {
				var printStatus = this._getStatus(responseText, "builder");				
				if (!printStatus.error) {
					this._progressPercentages = {};																							
			  		this._poll(printStatus.id, "builder", lang.hitch(this, function(url) {							  			
			  			// TODO TNT clean up
						if (this._cancelPrinting) {
							return;
						}							
						
			  			// TNT TODO window.open(url.split("&amp;").join("&"));	// Open in new window to verify the result.
			  			this._progressPercentages = {};
			  			this._print(url, callback);
			  		}), errback);
			  	} else {
			  		// error returned 
			  		if (errback) {
			  			errback(printStatus.status);
			  		}
			  	}
			}));			
		},
						
		_printMultiPartDocument: function(items, includeCoverPage, includeAnnotationSummaryPage, callback, errback) {	
			/*
			"documentContentElements": [{
				"id": "Document,{C4769981-6E9C-447D-AA29-2A714566A527},{A0043B5B-0000-C317-A4CC-258FCD667F4A}",
				"contentElements": [0,
				1]
			}]
			*/			
			this._progressPercentages = {};
			this._getPartInfo(items, lang.hitch(this, function(documentElements) {	
				if (this._cancelPrinting) {
					return;
				}
				// build the collection of document elements
				var docElements = this._buildDocumentElements(items, documentElements.documentContentElements);
				this._printThenMergeDocuments(docElements, includeCoverPage, includeAnnotationSummaryPage, callback, errback);
			}));										
		},
		
		// calls a ICN action to get info on a document's parts/content elements.  Need the mimetypes of each part
		_getPartInfo: function(items, callback) {					
			var repositoryType = items[0].repository.type;
			var repositoryIDs = [];
			var templateNames = [];
			var ObjectStoreNames = [];
			var docIDs = [];
			var fileNames = [];
			for ( var i in items) {
				repositoryIDs.push(items[i].repository.id);
				ObjectStoreNames.push(items[i].repository.objectStoreName);
				templateNames.push(items[i].template);
				docIDs.push(items[i].id);
				fileNames.push(items[i].name);
			}

			var params = {
				repositoryId: repositoryIDs,
				ObjectStoreName: ObjectStoreNames,
				docid: docIDs,
				template_name: templateNames,				
				parm_part_filename: fileNames,
				desktop: ecm.model.desktop.id
			};
						
			ecm.model.Request.setSecurityToken(params);
			
			var request = ecm.model.Request.invokeServiceAPI("getPartInfo", repositoryType, {
				requestParams: params,
				cancellable: true,
				notifyOnCancel: true,
				backgroundRequest: false,
				synchronous: false,
				requestCompleteCallback: lang.hitch(this, function(response) {
					if (response) {
						callback(response);
					}
				})
			});			
		},
		
		/*
		 * for multi-part printing, build the collection of document parts to print
		 * return a list of objects with the following properties:
		 * 		item 		: the content item the content element/part belongs to
		 *  	contentType	: the content type/mime type of the content element/part
		 *  	index		: the content element number or part number to print
		 * 
		 */
		_buildDocumentElements: function(items, documentElements) {
			var elementsList = [];
			for (var i = 0; i < documentElements.length; i++) {
				// get the item
				var item;
				for (var j = 0; j < items.length; j++) {
					if (documentElements[i].id == items[j].id) {
						item = items[j];
						break;
					}
				}
				// now go thru all the contentElements in documentElements
				if (item) {
					for (var j = 0; j < documentElements[i].contentElements.length; j++) {
						var element = {};
						element.item = item;
						element.contentType = documentElements[i].contentElements[j].contentType;
						element.index = documentElements[i].contentElements[j].index;
						elementsList.push(element);
					}
				}
			}
			return elementsList;
		},
		
		/*
		 * items is a list of item objects, or for multi part printing a list of objects in the format:
		 *  { item : the content item the content element/part belongs to
		 *    contentType: the content type/mime type of the content element/part
		 *    index: the content element number or part number to print
		 *  }
		 */
		_convertDocuments: function(items, includeCoverPage, includeAnnotationSummaryPage, callback, errback) {
			var deferreds = [];			
			for (i = 0; i < items.length; i++) {	
				// Adds convert calls to deferred list
				var deferred;
				
				// check if printing a content element
				var item = null;
				var contentType = null;
				var index = null;
				if (items[i].item) {
					item = items[i].item;
					contentType = items[i].contentType;
					index = items[i].index;
				} else {
					item = items[i];
					contentType = items[i].mimetype;
				}
				
				if (includeCoverPage) {
					var coverPageDeferred = new Deferred();
					// Adds separator page to the deferred list 
					// use a separate index for the coverpage so it is 1 based
					var coverPageIndex = null;
					if (index != null) {
						if (typeof index === "string")
							coverPageIndex = parseInt(index) + 1;
						else							
							coverPageIndex = index + 1;
					}
					var coverPageURL = window.location.origin + this._getCoverPageURL(item, coverPageIndex);				
					deferreds.push(coverPageDeferred);				
					coverPageDeferred.resolve(coverPageURL);
				}
				
				// Daeja supported mimetype, so give Daeja the RAW content
				if (contentType != "application/pdf" && this.supportedContentTypes[contentType] && 
						!(this._notSupportedConversionContentType[contentType])) {
					deferred = this._createConvertDocumentDeferred(item, index);	
					deferreds.push(deferred);
					this._count++;
				} else {	
					// Daeja doesn't support this mimetype, so give Daeja a PDF content by using ICN to convert it to PDF
					deferred = new Deferred();						
					deferreds.push(deferred);
					if (contentType == "application/pdf") {
						deferred.resolve(window.location.origin +  this._getDocumentUrl(item, index));	// No need to convert, content is already PDF
					} else {
						deferred.resolve(window.location.origin +  this._getDocumentAsPDFUrl(item, index));
					}
				}
				
				if (includeAnnotationSummaryPage) {
					var annotSumamryPageDeferred = new Deferred();
					// Adds separator page to the deferred list 
					var coverPageURL = window.location.origin + this._getAnnotationSummaryPageURL(items[i]);				
					deferreds.push(annotSumamryPageDeferred);				
					annotSumamryPageDeferred.resolve(coverPageURL);
				}
			}
			var deferredList = new DeferredList(deferreds);
			deferredList.then(function(response) {
				callback(response);
			}, function(err) {
				if (errback) {
					errback(response);
				}
			});
		},												
		
		_createConvertDocumentDeferred: function(item, partNumber) {
			var deferred = new Deferred();		
			var docURL = window.location.origin +  this._getDocumentUrl(item, partNumber);
			var xml = this._getConversionXML(docURL);			
			var params = this._getViewOneParams("standalone_conversion", "start");		
			this._post(params, xml, lang.hitch(this, function(deferred, responseText) {
				var printStatus = this._getStatus(responseText, "conversion");
				if (printStatus.complete === true) {
					deferred.resolve(printStatus.url);			  	
				} else {
					this._poll(printStatus.id, "conversion", function(URL) {
						deferred.resolve(URL);
				  	});
				}  	
			}, deferred));
			return deferred;
		},
		
		_post: function(viewOneParams, xmlPayload, callback, errback) {			
			
			request = ecm.model.Request.invokeXMLService("v1/viewoneAction", null, viewOneParams, lang.hitch(this, function(responseText) {
				callback(responseText);
			}), null, null, lang.hitch(this, function(data, args) {
				// Needs to do some error handling and display the error to the user.				
			}), false, null, xmlPayload); 
		},
		
		_getViewOneParams: function(op, subOp, params) {									
			var viewOneParams = {
				"plugin": "ViewONEPlugin",
				"action":"ViewONEPlatform",				
				"info":"true",				
				"sa":"1",
				"cl":"v",
				"op": op,
				"sub_op":subOp
			};
			ecm.model.Request.setSecurityToken(viewOneParams);
			if (params) {
				lang.mixin(viewOneParams, params);
			}			
			
			return viewOneParams;
		},			
		
		_poll: function(printId, type, callback, errback) {
			var params = this._getStatusParams(printId, type);			
			var interval = setInterval(lang.hitch(this, function() {	
				this._post(params, null, lang.hitch(this, function(responseText) {
					var printStatus = this._getStatus(responseText, type);
				  	if (printStatus.complete === true) {
				  		clearInterval(interval);
				  		if (callback) 
				  			callback(printStatus.url);			  		
				  	} else if (printStatus.error === true) {
				 		clearInterval(interval);
				 		this._cancelPrinting = true;
				 		if (errback) 
				 			errback(printStatus.status);
				 	} 	
				  	if (this._cancelPrinting) {
				  		clearInterval(interval);
				  		callback(null);
				  	}
				}));			
			}), 2000);			
		},
		
		_openPDF: function(url) {
//			var printIframe = document.getElementById('IframePrint');
//			printIframe.src = url; // assign url to src property
//			
			// todo use has
            var ua = navigator.userAgent;
            if ((ua.indexOf('Edge') !== -1) || (ua.indexOf('Firefox') !== -1)) {
                window.open(url, "_blank");
            } else {
                var iframe = document.createElement("iframe");
                iframe.style.visibility = "hidden"; // display: none doesn't work in FireFox so use visibility: hidden
                iframe.style.width = "0px";
                iframe.style.height = "0px";
                iframe.src = url;
                document.body.appendChild(iframe);
            }
		},						
				
		_getStatusParams: function(printId, type) {		
			var subAction = "status";
			if (this._cancelPrinting) {
				subAction = "cancel";
			}
			if (type == "builder") {				
				return this._getViewOneParams("docbuilder", subAction, {
					"workerid": printId
				});
			}
			else if (type == "conversion") {				
				return this._getViewOneParams("standalone_conversion", subAction, {
					"workerid": printId
				});
			}
			else {
				return this._getViewOneParams("standalone_print", subAction, {
					"workerid": printId
				});
			}
		},				
		
		_getStatus: function(responseText, type) {													
			if (!responseText || responseText.length == 0) {
				return {
					"status": "error",
					"error" : true,
					"message": this._getStatusMessage(type)
				}
			}
						
			// Parse the response XML for the current status
			var parser = new DOMParser();
			var xmlDoc = parser.parseFromString(responseText,"text/xml");
			
			var workStatusElement = xmlDoc.getElementsByTagName("workstatus");
			var id;
			if (workStatusElement && workStatusElement.length > 0) {
				id = workStatusElement[0].getAttribute('id');
			}	
			
			var responseStatus = {
				"id": id.trim(),
				"error": false,
				"message": this._getStatusMessage(type)				
			};
			var element = xmlDoc.getElementsByTagName("error");					
			if (element && element.length > 0) {
				/*			 
				<?xml version="1.0" ?>
				<workstatus id="printThreadId_e6c62716-e776-4183-8cc4-b32222bf2fdb_11">
					<error>
						Print aborted
					</error>
					<mimeType>application/pdf</mimeType>
				</workstatus>
				*/
				var value = element[0].childNodes[0].nodeValue; // error node value
				responseStatus["status"] = value.trim();			
				responseStatus["error"] = true;
				value = this._getNodeValue(workStatusElement[0], "mimeType")
				if (value) {				
					responseStatus["mimeType"] = value.trim();
				}				
			} else {			
				element = xmlDoc.getElementsByTagName("working");			
				if (element && element.length > 0) {
					/*
					<?xml version="1.0" ?>
					<workstatus id="printThreadId_31736659-ce8a-4a18-bf95-c19d974c6a25_2">
						<working>
							Preparing File
						</working>
						<percentage>25.0</percentage>
						<mimeType>application/pdf</mimeType>
					</workstatus>
					*/
					var value = element[0].childNodes[0].nodeValue; // working node value
					responseStatus["status"] = value.trim();
					value = this._getNodeValue(workStatusElement[0], "percentage")
					if (value) {				
						responseStatus["percentage"] = value.trim();
					}	
					value = this._getNodeValue(workStatusElement[0], "mimeType")
					if (value) {				
						responseStatus["mimeType"] = value.trim();
					}						
				} else {				
					element = xmlDoc.getElementsByTagName("complete");			
					if (element && element.length > 0) {
						/*
						Print:
						<workstatus id="printThreadId_e6c62716-e776-4183-8cc4-b32222bf2fdb_1">
							<complete>
								File Preparation Complete
							</complete>
							<url>http://bambusa:80/navigator/jaxrs/v1/viewoneAction?plugin=ViewONEPlugin&amp;action=ViewONEPlatform&amp;security_token=7289564447423514394&amp;marginTop=0&amp;marginBottom=0&amp;marginLeft=0&amp;marginRight=0&amp;printOriginalSize=false&amp;copies=1&amp;pages=-1&amp;paperSizeName=A4&amp;orientation=44331&amp;printerName=pdf&amp;desktop=default&amp;op=upload.getdocwithticket&amp;docId=f1ffce5f8f6846afb45bd2c4bce3bd4a</url>
							<mimeType>application/pdf</mimeType>
							<numPagesProcessed>0</numPagesProcessed>
							<totalPagesToProcess>0</totalPagesToProcess>
						</workstatus>
						
						Convert:
						<?xml version="1.0" ?>
						<workstatus id="ConversionThreadId_e6c62716-e776-4183-8cc4-b32222bf2fdb_3">
							<complete>
								File Preparation Complete
							</complete>
							<url>http://bambusa:80/navigator/jaxrs/v1/viewoneAction?plugin=ViewONEPlugin&amp;action=ViewONEPlatform&amp;security_token=7289564447423514394&amp;desktop=default&amp;op=upload.getdocwithticket&amp;docId=64fffbadabb84eeeb6f441fad8b77a4e</url>
							<mimeType>application/pdf</mimeType>
							<numPagesProcessed>0</numPagesProcessed>
							<totalPagesToProcess>0</totalPagesToProcess>
						</workstatus>
						
						Builder: 
						<?xml version="1.0" ?>
						<workstatus id="DocBuilderThreadId_e6c62716-e776-4183-8cc4-b32222bf2fdb_4">
							<complete>
								File Preparation Complete
							</complete>
							<results>
							<result>
								<type>document</type>
								<viewId>V3</viewId>
								<url>http://bambusa:80/navigator/jaxrs/v1/viewoneAction?plugin=ViewONEPlugin&amp;action=ViewONEPlatform&amp;security_token=7289564447423514394&amp;desktop=default&amp;op=upload.getdocwithticket&amp;docId=ede3f1d436d0431982bf46e8bba8d7cb</url>
								<size>0</size>
								<name>MyDocument2.pdf</name>
								<mimeType>application/pdf</mimeType>
							</result>
							</results>
							<numPagesProcessed>0</numPagesProcessed>
							<totalPagesToProcess>0</totalPagesToProcess>
						</workstatus>
						*/
						responseStatus["complete"] = true;
						var value = element[0].childNodes[0].nodeValue; // complete node value
						responseStatus["status"] = value.trim();
						value = this._getNodeValue(workStatusElement[0], "percentage")
						if (value) {				
							responseStatus["percentage"] = value.trim();
						}	
						value = this._getNodeValue(workStatusElement[0], "mimeType")
						if (value) {				
							responseStatus["mimeType"] = value.trim();
						}
						value = this._getNodeValue(workStatusElement[0], "url")
						if (value) {				
							responseStatus["url"] = value.trim();
						}			
					}		
				}
			}
			if (responseStatus.percentage) {				
				responseStatus.percentage = this._getStatusPercentage(responseStatus.id, responseStatus.percentage);
			}						
			this.onStatusUpdated(responseStatus);
			this.logDebug("_getStatus", "print response status: " + responseStatus.status);
			return responseStatus;
		},				
						
		_getNodeValue: function(parentElement, tagName) {
			var value;
			var element = parentElement.getElementsByTagName(tagName);
			if (element && element.length > 0) {
				value = element[0].childNodes[0].nodeValue.trim(); // node value					
			}	
			return value;
		},
		
		_getStatusPercentage: function(id, percentage) {
			var totalPercentage = 0;
			var relPercentage = (percentage / (100 * this._count)) * 100;
			if (!this._progressPercentages)
				this._progressPercentages = {};
			this._progressPercentages[id] = relPercentage;							
			for (var prop in this._progressPercentages) {
				totalPercentage += this._progressPercentages[prop];
			}		
			return totalPercentage;
		},
		
		_getStatusMessage: function(type) {
			if (type == "builder") {				
				return this.messages.print_service_status_merging;
			}
			else if (type == "conversion") {				
				return this.messages.print_service_status_converting;
			}
			else {
				return this.messages.print_service_status_formatting;
			}
		},
		
		_getPrintXML: function(docURL) {
			 var printXML = "";
			 if (docURL) {				
				 var url = docURL.split("&").join("&amp;");
				 printXML = "<?xml version=\"1.0\" encoding=\"UTF-8\"?><burnspec version=\"1.3\">" + 
					"<documentConfig version=\"0\" codebase=\"http://localhost:8080/viewone/v1files/?v=0&amp;op=resource\">" + 
//						"<parameter name=\"transparentRedactionColor\" value=\"255,0,0\"/>" + 
//						"<parameter name=\"annDeleteToolbarButton\" value=\"true\"/>" + 
//						"<parameter name=\"annotateEdit\" value=\"true\"/>" + 
//						"<parameter name=\"annotationStamp1\" value=\"image:fmoeller.tif\"/>" + 
//						"<parameter name=\"tabletUIOn\" value=\"true\"/>" + 
//						"<parameter name=\"toolbarSize\" value=\"0\"/>" + 
//						"<parameter name=\"quickNavigateView\" value=\"false\"/>" + 
//						"<parameter name=\"allowRedactionFontSubstitutions\" value=\"true\"/>" + 
//						"<parameter name=\"bar1Button1\" value=\"test1(),help,1.jpg,2.jpg,true\"/>" + 
//						"<parameter name=\"complexBreakLineMethod\" value=\"false\"/>" +
						"<parameter name=\"allowPrintHeader\" value=\"false\"/>" +
//						"<parameter name=\"printFeature1\" value=\"printLabels\"/>" + 
					"</documentConfig>" + 
					"<filename url=\"" + url + "\" metadata=\"data:,\"/>" + 
					"<annotations content-transfer-encoding=\"base64\" encoding=\"UTF-8\" format=\"ini\">W0VNUFRZXQ==</annotations></burnspec>";	 	
			 }
			 return printXML;
		},
		
		_getDocBuilderXML: function(urls) {		
			var actions = this._getDocBuilderJSON(urls);
			var viewId = "V" + (urls.length - 1);
			var xml = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>" + 
				"<burnspec version=\"1.3\">" + 
				"<documentConfig version=\"4.1.6.0.0.0\" codebase=\"http://localhost:8080/viewone/v1files/?v=0&amp;op=resource\">" +    
						"<parameter name=\"burnPDFtoPDF\" value=\"true\"/>" + 
						"<parameter name=\"forceJavaPdf\" value=\"true\"/>" + 
					"</documentConfig>" + 
					"<actions>" + JSON.stringify(actions) + "</actions>" + 
					"<output>" + 
						"<result viewId=\"" + viewId + "\" type=\"document\" mimeType=\"application/pdf\" label=\"MyDocument2.pdf\" />" + 
					"</output>" + 
				"</burnspec>";
			
			return xml;
		},
		
		_getDocBuilderJSON: function(urls) {
			var jsonArray = [];			
			for (i = 0; i < urls.length; i++) {	
				var d = new Date();
				var json = {
					"type": "LoadDocument",
					"viewId": "V" + i,
					"source": {						
						"location": urls[i].split("&").join("&amp;") ,
					    "versionInfo": d.toISOString()
					}
				}
				jsonArray.push(json);
			}		
			var count = urls.length - 1;
			var viewId = "V" + count;
			for (j = count - 1; j >= 0; j--) {
				var json = {
					"type": "CopyPages",
					"fromView": "V" + j,
					"fromFirstPage": 1, 
					"fromLastPage": -1,
					"toView": viewId,
					"toPage": 1
				}
				jsonArray.push(json);
			}
			return jsonArray;
		},		
		
		_getDocBuilderXMLV1: function(items, convertedDocs) {		
			var actions = this._getDocBuilderJSON(convertedDocs);
			var viewId = "V" + (convertedDocs.length - 1);
			var xml = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>" + 
				"<burnspec version=\"1.3\">" + 
					"<documentConfig version=\"4.1.6.0.0.0\" codebase=\"http://localhost:8080/viewone/v1files/?v=0&amp;op=resource\">" +  
						"<parameter name=\"burnPDFtoPDF\" value=\"true\"/>" + 
						"<parameter name=\"forceJavaPdf\" value=\"true\"/>" + 
					"</documentConfig>" + 
					"<actions>" + JSON.stringify(actions) + "</actions>" + 
					"<output>" + 
						"<result viewId=\"" + viewId + "\" type=\"document\" mimeType=\"application/pdf\" label=\"MyDocument2.pdf\" />" + 
					"</output>" + 
				"</burnspec>";
			
			return xml;
		},
		
		_getDocBuilderJSONV1: function(convertedDocs) {
			var jsonArray = [];			
			for (i = 0; i < convertedDocs.length; i++) {	
				var d = new Date();
				var json = {
					"type": "LoadDocument",
					"viewId": "V" + i,
					"source": {						
						"location": convertedDocs[i][1],
					    "versionInfo": d.toISOString()
					}
				}
				jsonArray.push(json);
			}		
			var count = convertedDocs.length - 1;
			var viewId = "V" + count;
			for (j = count - 1; j >= 0; j--) {
				var json = {
					"type": "CopyPages",
					"fromView": "V" + j,
					"fromFirstPage": -1, 
					"fromLastPage": -1,
					"toView": viewId,
					"toPage": 1
				}
				jsonArray.push(json);
			}
			return jsonArray;
		},		
		
		_getConversionXML: function(docURL) {
			var xml = null;
			if (docURL) {
			 	xml = "<?xml version=\"1.0\" encoding=\"UTF-8\"?><burnspec version=\"1.3\">" + 
					"<documentConfig version=\"0\" codebase=\"http://localhost:8080/viewone/v1files/?v=0&amp;op=resource\">" + 
//						"<parameter name=\"transparentRedactionColor\" value=\"255,0,0\"/>" + 
//						"<parameter name=\"annDeleteToolbarButton\" value=\"true\"/>" + 
//						"<parameter name=\"annotateEdit\" value=\"true\"/>" + 
//						"<parameter name=\"annotationStamp1\" value=\"image:fmoeller.tif\"/>" + 
//						"<parameter name=\"tabletUIOn\" value=\"true\"/>" + 
//						"<parameter name=\"toolbarSize\" value=\"0\"/>" + 
//						"<parameter name=\"quickNavigateView\" value=\"false\"/>" + 
//						"<parameter name=\"allowRedactionFontSubstitutions\" value=\"true\"/>" + 
//						"<parameter name=\"bar1Button1\" value=\"test1(),help,1.jpg,2.jpg,true\"/>" + 
//						"<parameter name=\"complexBreakLineMethod\" value=\"false\"/>" + 
//						"<parameter name=\"printFeature1\" value=\"printLabels\"/>" + 
					"</documentConfig>" + 
					"<filename url=\"" + docURL.split("&").join("&amp;") + "\"/>" + 
					"<conversionformat format=\"pdf\"/></burnspec>";
			} 			
			return xml;
		},
		
		// print by calling print first, then send the list to doc builder
		_printThenMergeDocuments: function(items, includeCoverPage, includeAnnotationSummaryPage, callback, errback) {
			var deferreds = [];
			for (var i = 0; i < items.length; i++) {
				
				// check if printing a content element
				var item = null;
				var contentType = null;
				var index = null;
				if (items[i].item) {
					item = items[i].item;
					contentType = items[i].contentType;
					index = items[i].index;
				} else {
					item = items[i];
					contentType = items[i].mimetype;
				}
				deferreds.push(this._createPrintDeferred(item, index, errback));
			}
			var deferredList = new DeferredList(deferreds);
			var self = this;
			deferredList.then(function(response) {
				// build list of urls
				var urls = [];
				for (var i = 0; i < response.length; i++) {
					
					if (includeCoverPage) {
						var item = null;
						var contentType = null;
						var index = null;
						if (items[i].item) {
							item = items[i].item;
							contentType = items[i].contentType;
							index = items[i].index;
						} else {
							item = items[i];
							contentType = items[i].mimetype;
						}
						var coverPageIndex = null;
						if (index != null) {
							if (typeof index === "string")
								coverPageIndex = parseInt(index) + 1;
							else							
								coverPageIndex = index + 1;
						}
						var coverPageURL = window.location.origin + self._getCoverPageURL(item, coverPageIndex);
						urls.push(coverPageURL);
					}

					var url = response[i][1];
					urls.push(url.split("&amp;").join("&"));
				}
				// send list to doc builder
				self._mergePrintedDocuments(urls, callback, errback);
			}, function(err) {
				if (errback)
					errback(err);
			});
			
		},
		
		// returns a deferred that calls print on the specified item
		_createPrintDeferred: function(item, partNumber, errBack) {
			var deferred = new Deferred();
			var cb = function(url) {
				deferred.resolve(url);
			}
			var docURL = null;
			// for OD file types, need to get as pdf
			if (item.repository._isOnDemand() && (item.mimetype == "application/afp" || item.mimetype == "application/line")) {
				//docURL = window.location.origin +  this._getDocumentAsPDFUrl(item);
				docURL =  window.location.origin +  this._getDocumentUrl(item, partNumber) + "&transform=pdf";
			}
			else {
				docURL =  window.location.origin +  this._getDocumentUrl(item, partNumber);
			}
			
			this._print(docURL, cb, errBack, true);
			return deferred;
		},
		
		// use doc builder to combine the list of urls
		_mergePrintedDocuments: function(urls, callback, errback) {
			var xml = this._getDocBuilderXML(urls);
			this._count = 1;
			this._progressPercentages = {};							
			var params = this._getViewOneParams("docbuilder", "start");	
			this._post(params, xml, lang.hitch(this, function(responseText) {
				var printStatus = this._getStatus(responseText, "builder");				
				if (!printStatus.error) {
					this._progressPercentages = {};																							
			  		this._poll(printStatus.id, "builder", lang.hitch(this, function(url) {							  			
						if (this._cancelPrinting) {
							return;
						}							
			  			this._progressPercentages = {};
			  			this._openPDF(url);
			  			if (callback)
			  				callback();
			  		}), errback);
			  	} else {
			  		// error returned 
			  		if (errback) {
			  			errback(printStatus.status);
			  		}
			  	}
			}));			
		},
		
		
		onStatusUpdated: function(status) {			
		}
	});
});
