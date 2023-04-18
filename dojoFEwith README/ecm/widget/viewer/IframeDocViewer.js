/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/connect",
	"dojo/dom-construct",
	"dojo/has",
	"dojo/topic",
	"dojo/dom-geometry",
	"dojox/html/entities",
	"ecm/widget/viewer/DocViewer",
	"ecm/LoggerMixin",
	"ecm/widget/viewer/model/ViewerItem",
	"ecm/widget/_HasPluginMixin",
	"dojo/_base/sniff"
], //
function(declare, lang, connect, domConstruct, has, topic, domGeom, entities, DocViewer, LoggerMixin, //
ViewerItem, _HasPluginMixin) {

	/**
	 * @name ecm.widget.viewer.IframeDocViewer
	 * @class Provides a base implementation for all iframe-based document viewers. This class can be used standalone,
	 *        in conjunction with the launch URL as defined in the {@link ecm.model.Viewer} object, to implement
	 *        URL-based viewers.
	 * @augments ecm.widget.viewer.DocViewer
	 */
	var IframeDocViewer = declare("ecm.widget.viewer.IframeDocViewer", [
		DocViewer,
		LoggerMixin,
		_HasPluginMixin
	], {

		/** @lends ecm.widget.viewer.IframeDocViewer.prototype */

		_src: "",
		_loadedSrc: "",
		_resetAboutBlank: false,
		_viewerIframe: null,
		docViewerClass: "ECMIframeDocViewer",
		_loadViaGetMethod: false,
		_incompatibleMap : {lineDataHTML:"IE,Safari"},

		/** @private */
		postCreate: function() {
			this.inherited(arguments);
			connect.connect(this, "onLoad", this, "_checkAboutBlank");
		},

		/**
		 * Assigns an item to this viewer. This call is not required to display the document (item) in the user
		 * interface. The parameters are the <code>viewerItem</code> to view, and the page number to start on. If
		 * unspecified, the page number to start on is assumed to be page 1.
		 * 
		 * @param item
		 *            The item that is being assigned to this viewer.
		 * @param pageNumber
		 *            For document viewers that support page control, the page number to start on. If not specified,
		 *            page 1 is assumed. (optional)
		 */
		setItem: function(item, pageNumber) {
			var methodName = "setItem";
			this.logEntry(methodName);
			this.inherited(arguments);
			this._setViewerUrl();
			this.logExit(methodName);
		},

		/**
		 * Displays the item, if an item has been set on this viewer. The callback will be called on successful
		 * completion of showing the item.
		 * 
		 * @param callback
		 *            The callback to call on successful completion of this call. (optional)
		 */
		showItem: function(callback) {
			var methodName = "showItem";
			this.logEntry(methodName);

			this._setViewerUrl(); // refresh _src, in case the security token changed.
			if (this._loadedSrc != this._src) {
				this._isLoading = true;
				this.logDebug(methodName, "Reloading the iframe");
				this._loadSource(this._src);
			}

			this.logExit(methodName);
		},

		closeItem: function() {
			this.inherited(arguments);
			this._loadedSrc = "";
		},

		/** @private */
		resize: function() {
			var parent = this.getParent();

			if (parent) {
				var parentMargin = domGeom.getContentBox(parent.domNode);
				domGeom.setMarginBox(this.domNode, {
					w: parentMargin.w,
					h: parentMargin.h
				});

				if (this._viewerIframe) {
					domGeom.setMarginBox(this._viewerIframe, {
						w: parentMargin.w,
						h: parentMargin.h
					});
				}
			}
		},

		/**
		 * Determines if the current document is in the process of being loaded.
		 * 
		 * @return (Boolean) A value of <code>true</code> or <code>false</code>, if the document is in the process
		 *         of loading into the viewer.
		 */
		isLoading: function() {
			var methodName = "isLoading";
			this.logEntry(methodName);

			try {
				if (this._isLoading && this._viewerIframe.contentDocument && this._viewerIframe.contentDocument.readyState == "complete" && this._viewerIframe.contentDocument.URL != "about:blank") {
					this._isLoading = false;
				}
			} catch (error) {
				try {
					if (this._isLoading && this._viewerIframe.document && this._viewerIframe.document.readyState == "complete" && this._viewerIframe.document.URL != "about:blank") {
						this._isLoading = false;
					}
				} catch (error) {
					this.logDebug(methodName, "Error in IframeDocViewer.isLoading: " + error);
				}
			}

			this.logExit(methodName);
			return this._isLoading;
		},

		/**
		 * Determines if the document has completed loading.
		 * 
		 * @return (Boolean) A value of <code>true</code> or <code>false</code>, if loading and display of the
		 *         document has completed.
		 */
		isLoaded: function() {
			return this._loadedSrc == this._src && !this.isLoading();
		},

		/**
		 * Determines if the viewer is Applet-based, by looking for applet elements in the DOM loaded into the contained
		 * iframe.
		 * 
		 * @return (Boolean) A value of <code>true</code> or <code>false</code>, if the viewer is Applet-based.
		 */
		isAppletViewer: function() {
			var viewerDocument = null;
			try {
				viewerDocument = this._viewerIframe.contentWindow.document;
			} catch (e) {
				this.logError(e);
			}

			return (viewerDocument != null && viewerDocument.applets && viewerDocument.applets.length > 0);
		},

		/**
		 * Determines if the viewer is iframe-based. Because <code>IframeDocViewer</code> is iframe-based, this method
		 * returns <code>true</code>.
		 * 
		 * @return (Boolean) <code>True</code>.
		 */
		isIframeViewer: function() {
			return true;
		},

		/**
		 * Sets the iframe <code>src</code> value for this viewer to <code>about:blank</code>, unloading it.
		 */
		unloadIframe: function() {
			if (this._viewerIframe != null) {
				this._src = "about:blank";
				this._viewerIframe.src = "about:blank";
				this._loadedSrc = "about:blank";
			}
		},

		/** @private */
		uninitialize: function() {
			this.inherited(arguments);
			this.unloadIframe();
		},

		//  /////////////////////////////////////////////////////////////////////////////// 
		//  Everything below this line is internal, and not part of the public interface.
		//  ///////////////////////////////////////////////////////////////////////////////

		_encode: function(value) {
			return entities.encode("" + value);
		},

		_checkAboutBlank: function() {
			var methodName = "_checkAboutBlank";
			this.logEntry(methodName);

			this.logDebug(methodName, "this._resetAboutBlank == " + this._resetAboutBlank);
			if (this._resetAboutBlank && this._src != "about:blank" && this._viewerIframe.contentWindow.location.href === "about:blank") {
				this.logDebug(methodName, "Reloading the iframe: " + this._src);
				this._loadSource(this._src);
			} else {
				this._iframeLoaded();
			}

			this.logExit(methodName);
		},

		_initializeIframe: function() {
			if (this.containerNode.children.length > 0) {
				this.containerNode.removeChild(this.containerNode.children[0]);
				this._viewerIframe = null;
			}

			this._viewerIframe = domConstruct.create('iframe', {
				style: {
					margin: "0px",
					padding: "0px",
					width: "100%",
					height: "100%"
				},
				allowfullscreen: "true"
			});

			this.containerNode.appendChild(this._viewerIframe);
			this._viewerIframe.docViewer = this;
			this._viewerIframe.title = "IframeDocViewer";

			connect.connect(this._viewerIframe, "onload", this, "onLoad");
			connect.connect(this, "onLoad", lang.hitch(this, function() {
				if (this.isAppletViewer() || this.isPluginViewer()) {
					topic.publish("ecm.BackgroundIframe.create");
				}
			}));
		},

		_setViewerUrl: function() {
			var methodName = "_setViewerUrl";
			this.logEntry(methodName);

			var item = (this._item.origItem ? this._item.origItem : this._item);
			var viewerUrl = this.viewerDef.getLaunchUrl(item);
			if (ecm.logger.getLogLevel() >= 4)
				viewerUrl += "&debug=true";
			if (this._pageNumber && this._pageNumber > 1)
				viewerUrl += ("&pageNumber=" + this._pageNumber);
			if (ecm.model.desktop.id)
				viewerUrl += ("&desktop=" + ecm.model.desktop.id);

			this._src = viewerUrl;
			this.logExit(methodName);
		},

		_loadSource: function(url) {
			var methodName = "_loadSource";
			this.logEntry(methodName);
			this._isLoading = true;
			this._initializeIframe();
			if (this._loadViaGetMethod)
				this._viewerIframe.contentWindow.location = url;
			else
				ViewerItem.loadSecure(this._viewerIframe.contentWindow, url);
			this._loadedSrc = url;
			this.logExit(methodName);
		},

		_onViewerEvent: function(event) {
			var methodName = "_onViewerEvent";
			this.logEntry(methodName);

			var response = null;
			if (event.id) {
				switch (event.id) {
				case "checkCompatibility":
					if(event.version){
						response = this._checkBrowserCompatibility(this.viewerDef.id);
						if (!response) {
							this.onFallback(lang.hitch(this, function() {
								this.contentViewerPane._showErrorDialog("browser_not_support_this_viewer",null,[this.viewerDef.label]);
							}));
						} else if (event.callback) {
							event.callback();
						}
					}
					else
						this.onFallback(lang.hitch(this, function() {
							this.contentViewerPane._showErrorDialog("viewer_unable_to_view_error",null);
						}));
					break;
				case "hasJavaPlugin": // Required for Line Data Applet
					response = this._hasJavaPlugin();
					if (!response) {
						this.onFallback(lang.hitch(this, function() {
							this.contentViewerPane._showErrorDialog("viewer_java_plugin_not_found", (event.callback ? event.callback : null));
						}));
					} else if (event.callback) {
						event.callback();
					}
					break;
				case "hasNoJavaPlugin": // Required for Applet based viewers on IE
					if (has("ie") || has("trident")) {
						IframeDocViewer.hasJavaPlugin = false;
						this.onFallback(lang.hitch(this, function() {
							this.contentViewerPane._showErrorDialog("viewer_java_plugin_not_found", (event.callback ? event.callback : null));
						}));
					}
					break;
				case "setResetAboutBlank":
					if (event.resetAboutBlank) {
						this._resetAboutBlank = event.resetAboutBlank;
						this.contentViewerPane._resetAboutBlank = event.resetAboutBlank;
					}
					break;
				}
			}

			this.logExit(methodName);
			return response;
		},

		_iframeLoaded: function() {
			var methodName = "_iframeLoaded";
			this.logEntry(methodName);
			this.onDocumentLoaded();
			this.logExit(methodName);
		},
		
		_checkBrowserCompatibility: function(viewername){
			var methodName = "_checkBrowserCompatibility";
			this.logEntry(methodName);
			var agent = this.browserType() ;
			for(var mapInfo in this._incompatibleMap){
				if(mapInfo == viewername){
					if(this._incompatibleMap.hasOwnProperty(mapInfo)){
						var nonSupportBrowsers = this._incompatibleMap[mapInfo].split(',');
						for(var i=0;i<nonSupportBrowsers.length;i++){
							if(agent == nonSupportBrowsers[i]){
								this.logDebug(methodName,"Browser "+ nonSupportBrowsers[i] + " is not supported by this viwer.");
								return false;
							}
						}
					}
				}
			}
			return true;
			this.onDocumentLoaded();
			this.logExit(methodName);	
		},
		
		browserType:function(){  
		   var userAgent = navigator.userAgent;    
		   var isIE = (userAgent.indexOf("Trident") > -1 || userAgent.indexOf("MSIE") > -1 ); 
		   var isEdge = userAgent.indexOf("Edge") > -1 && !isIE;  
		   var isFF = userAgent.indexOf("Firefox") > -1; 
		   var isSafari = userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") == -1 && !isEdge; 
		   var isChrome = userAgent.indexOf("Chrome") > -1 && userAgent.indexOf("Safari") > -1 && !isEdge;  
		   if(isIE) {return "IE";}
		   if (isFF) {  return "FireFox";}   
		   if (isSafari) {  return "Safari";}  
		   if (isChrome) { return "Chrome";}  
		   if (isEdge) { return "Edge";}  
		},
		   
		_hasJavaPlugin: function() {
			var methodName = "_hasJavaPlugin";
			this.logEntry(methodName);

			if (IframeDocViewer.hasJavaPlugin == null) {
				var found = false;
				if (!this._javaPluginFound) {
					found = this._hasPlugin("application/x-java-applet");

					if (!found && (has("ie") || has("trident"))) {
						// The usual method of looking for a Java plugin in IE (attempting to load each ActiveX), is causing some sort of internal corruption in IE.  
						// For IE, we insert HTML into the object tag(s) of Applets being launched, which will be displayed when there is no Java plugin.  So for
						// IE, this call is a noop.
						// ...IE11 was supposed to fix this, but id didn't, so make it a noop for trident (IE11) too.
						found = true;
					}

					this.logDebug(methodName, "The Java plugin was " + (found ? "" : "NOT ") + "found");
					this._javaPluginFound = found;
				} else {
					found = this._javaPluginFound;
				}

				IframeDocViewer.hasJavaPlugin = found;
			} else {
				found = IframeDocViewer.hasJavaPlugin;
			}

			this.logExit(methodName);
			return found;
		}
	});

	IframeDocViewer.hasJavaPlugin = null;

	return IframeDocViewer;
});
