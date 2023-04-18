/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"ecm/model/Request",
	"./_ModelObject"
], function(declare, Request, _ModelObject) {

	/**
	 * Constructs the viewer model object.
	 * 
	 * @param properties
	 *            The properties for the viewer model object. These properties can be any of the fields as defined below
	 *            and on ecm.model._ModelObject.
	 * @name ecm.model.Viewer
	 * @class Represents a viewer that is used to display content. This class maintains the name and launching
	 *        information that is configured for the viewer. This information is used by the ContentViewer widget to
	 *        invoke the viewer. Private functions should not be used to access public members of the class. Access
	 *        member variables directly. For example:
	 *        <p>
	 *        var viewer = new Viewer({ id: "myviewer", name: "myviewer"});<br>
	 *        console.debug("Viewer ID=" + viewer.id);
	 *        </p>
	 *        <b>Note:</b> Private getter methods, such as getUrlLaunchPattern, <b>will be removed</b> in a future
	 *        release.
	 * @augments ecm.model._ModelObject
	 */
	var Viewer = declare("ecm.model.Viewer", [
		_ModelObject
	], {
		/** @lends ecm.model.Viewer.prototype */

		/**
		 * A URL template that will launch the viewer. The template can have the following variables:
		 * <ul>
		 * <li>docId: The identifier for the document
		 * <li>docName: The name of the document. The name can be displayed in the user interface
		 * <li>template: The identifier of the content class for the document
		 * <li>mimeType: The MIME content type of the document
		 * <li>serverType: The content repository type (cm, od, p8, ci, cmis)
		 * <li>vsId: For P8 documents
		 * <li>replicationGroup: For P8 documents
		 * <li>docUrl: A URL that will load the document content
		 * <li>privs: A string of privileges for the document
		 * </ul>
		 */
		launchUrl: null,

		/**
		 * Boolean indicating if the viewer should be include the security token in the url.
		 */
		includeSecurityToken: true,

		/**
		 * Boolean indicating if the viewer should be launched in a separate browser window.
		 */
		launchInSeparateWindow: false,

		/**
		 * The name of the Dojo class implementing the viewer. This class is extension of
		 * {@link ecm.widget.viewer.DocViewer}.
		 */
		viewerClass: "ecm.widget.viewer.IframeDocViewer",

		viewerMappings: null,

		/**
		 * An object containing fields for the content types supported by this viewer.
		 */
		supportedContentTypes: null,

		/**
		 * The viewer is suitable for use in document Preview.
		 * 
		 * @since 2.0.3
		 */
		isPreviewViewer: false,

		/**
		 * The viewer is suitable for use in Merge and Split mode.
		 * 
		 * @since 3.0.1
		 */
		isMergeSplitViewer: false,

		/**
		 * @private
		 */
		constructor: function() {
			if (!this.viewerMappings) {
				this.viewerMappings = {};
			}
			if (!this.supportedContentTypes) {
				this.supportedContentTypes = {};
			}
		},

		/**
		 * Add an associated mapping to the viewer's mapping list.
		 */
		addViewerMapping: function(viewerMapping) {
			// Store by key so that we do not create duplicates.
			this.viewerMappings[viewerMapping.getKey()] = viewerMapping;
			var contentType = viewerMapping.contentType || "";
			this.supportedContentTypes[contentType] = contentType;
		},

		/**
		 * Generates the generic doc retrieval URL that typically gets encoded into the viewer launch URL.
		 */
		getDocUrl: function(item, version) {
			var methodName = "getDocUrl";
			this.logEntry(methodName);

			var servicesUrl = ecm.model.desktop._cServicesUrl; // Services URL as interpreted from the client-side.
			var docId = item.id;
			var template = "";
			var contentClass = item.getContentClass();
			if (contentClass) {
				template = contentClass.id;
			}
			var repositoryId = item.repository.id;
			var serverType = item.repository.type;
			var vsId = item.vsId; // required for p8 documents
			var replicationGroup = item.replicationGroup; // replicationGroup
			var objectStoreName = item.repository.objectStoreName;
			version = version || item._getSearchVersion();

			var docUrl = servicesUrl + "/jaxrs/" + serverType + "/getDocument?docid=" + encodeURIComponent(docId) + "&template_name=" + encodeURIComponent(template) + "&repositoryId=" + encodeURIComponent(repositoryId);

			//add CMOD autofind info in the url
			if (serverType == "od") {
				var autofindInfo = item.resultSet && item.resultSet.AutoFindInfo
				if (autofindInfo != null) {
					var autofindInfoNum = item.resultSet.AutoFindInfo.length;
					for ( var n = 0; n < autofindInfoNum; n++) {
						docUrl = docUrl + "&AutoFindInfo" + n.toString() + "=" + encodeURIComponent(item.resultSet.AutoFindInfo[n]);
					}
					docUrl = docUrl + "&AutoFindInfoNum=" + encodeURIComponent(autofindInfoNum);
				}
			}

			//else {
			//docUrl = docUrl + "&AutoFindInfoNum=0";
			//}
			// Only include the vsId when looking at folder containees, or if version is not null.
			if (vsId) {
				var resultSet = item.resultSet;
				if ((version != null && version != "specific") || (resultSet && resultSet.parentFolder)) {
					this.logDebug(methodName, "Adding vsId");
					docUrl = docUrl + "&vsId=" + encodeURIComponent(vsId);
				}
			}

			if (version != null) {
				this.logDebug(methodName, "Adding version");
				if(item.versionStatusInt == ecm.model.ContentItem.P8_VERSION_STATUS.RESERVED){
					version = "Reservation";
				}
				docUrl = docUrl + "&version=" + version;
			}

			if (replicationGroup) {
				this.logDebug(methodName, "Adding replicationGroup");
				docUrl = docUrl + "&replicationGroup=" + encodeURIComponent(replicationGroup);
			}

			if (objectStoreName) {
				this.logDebug(methodName, "Adding objectStoreName");
				docUrl = docUrl + "&objectStoreName=" + encodeURIComponent(objectStoreName);
			}

			if (item.isVirtualFolder) {
				this.logDebug(methodName, "Item is from a virtual folder. Adding virtual folder flag and application group id.");
				docUrl = docUrl + "&virtualFolder=" + item.isVirtualFolder + "&appGroupId=" + item.appGroupId;
			}
			
			this.logExit(methodName);
			return ecm.model.Request.setSecurityToken(docUrl);
		},

		/**
		 * Generates a URL that can be used to launch this viewer within a browser window or iframe, for the given item.
		 * 
		 * @param item
		 *            An instance of {@link ecm.model.ContentItem} for the document.
		 */
		getLaunchUrl: function(item) {
			var methodName = "getLaunchUrl";
			this.logEntry(methodName);

			// summary:
			// composes the URL to use to launch this viewer for the given item
			// Don't use navigator for the name of the services URL - navigator is the name of the browser info object
			var servicesUrl = ecm.model.desktop._cServicesUrl; // Services URL as interpreted from the client-side.
			var docId = item.id;
			var repositoryDocId = docId;
			if (item.repository.type == "box") {
				var indexof = docId.lastIndexOf(",");
				if (indexof > -1) {
					repositoryDocId = docId.substring(indexof + 1);
				}
			}
			var docName = item.name;
			var repositoryId = item.repository.id;
			var mimeType = item.mimetype || "";
			var serverType = item.repository.type;
			var vsId = item.vsId; // required for p8 documents
			var replicationGroup = item.replicationGroup; // replicationGroup
			var objectStoreName = item.repository.objectStoreName;
			var docUrl = this.getDocUrl(item);

			if (servicesUrl == ".") { // using relative path
				if (this.launchUrl.indexOf("servicesUrl+'/viewers/") == 0 && docUrl.indexOf("./") == 0) { // one of our viewers and a relative docUrl
					docUrl = "." + docUrl; // fix docUrl to be correctly relative
					servicesUrl = "." + servicesUrl;
				}
			}

			var privs = "&printDoc=" + item.hasPrivilege("privPrintDoc") + "&exportDoc=" + item.hasPrivilege("privExport") + //
			"&viewAnnotations=" + item.hasPrivilege("privViewAnnotations") + "&editAnnotations=" + item.hasPrivilege("privEditAnnotations") + //
			"&editDoc=" + item.hasPrivilege("privEditDoc") + "&editProperties=" + item.hasPrivilege("privEditProperties");

			var launchUrl;
			if (this.includeSecurityToken != undefined && this.includeSecurityToken == false) {
				launchUrl = eval(this.launchUrl);
			} else {
				launchUrl = Request.appendSecurityToken(eval(this.launchUrl));
			}

			if (launchUrl.indexOf("../viewers") == 0) { // viewers is wrongly addressed (due to servicesUrl set to .. above)
				launchUrl = launchUrl.substring(1); // fix to be ./viewers
			}

			this.logExit(methodName);
			return launchUrl;
		}
	});

	/**
	 * @private
	 */
	Viewer.canOpenItem = function(docViewer, item) {
		return docViewer.canOpenItem(item);
	};

	return Viewer;
});
