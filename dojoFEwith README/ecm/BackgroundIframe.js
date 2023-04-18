/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
// -----------------------------------------------------------------
//
// 	This modified BackgroundIFrame.js has been updated for Dojo 1.9
//
// -----------------------------------------------------------------
define([
	"require", // require.toUrl
	"dijit/main", // to export dijit.BackgroundIframe
	"dijit/registry",
	"dojo/_base/array",
	"dojo/_base/config",
	"dojo/_base/connect",
	"dojo/dom-construct", // domConstruct.create
	"dojo/dom-geometry",
	"dojo/dom-style", // domStyle.set
	"dojo/_base/lang", // lang.extend lang.hitch
	"dojo/on",
	"dojo/topic",
	"dojo/sniff" // has("ie"), has("trident"), has("quirks"), has("chrome")
], function(require, dijit, registry, array, config, connect, domConstruct, domGeom, domStyle, lang, on, topic, has) {

	// module:
	//		dijit/BackgroundIFrame

	// Flag for whether to create background iframe behind popups like Menus and Dialog.
	// A background iframe is useful to prevent problems with popups appearing behind applets/pdf files,
	// and is also useful on older versions of IE (IE6 and IE7) to prevent the "bleed through select" problem.
	// By default, it's enabled for IE6-11.
	// TODO: For 2.0, make this false by default.  Also, possibly move definition to has.js so that this module can be
	// conditionally required via  dojo/has!bgIfame?dijit/BackgroundIframe
	has.add("config-bgIframe", has("ie") || has("trident") || has("chrome") || has("ff")); // Applet IFRAME fix
	has.add("config-bgIframe-force", has("chrome") || has("ff")); // For browsers that require a more invasive solution

	var _frames = new function() {
		// summary:
		//		cache of iframes

		var queue = [];

		this.pop = function() {
			var iframe;
			if (queue.length) {
				iframe = queue.pop();
				iframe.style.display = "";
			} else {
				// transparency needed for DialogUnderlay and for tooltips on IE (to see screen near connector)
				if (has("ie") < 9) {
					var burl = config["dojoBlankHtmlUrl"] || require.toUrl("dojo/resources/blank.html") || "javascript:\"\"";
					var html = "<iframe src='" + burl + "' role='presentation'" + " style='position: absolute; left: 0px; top: 0px;" + "z-index: -1; filter:Alpha(Opacity=\"0\");'>";
					iframe = document.createElement(html);
				} else {
					iframe = domConstruct.create("iframe");
					iframe.src = 'javascript:""';
					iframe.className = "dijitBackgroundIframe";
					iframe.setAttribute("role", "presentation");
					domStyle.set(iframe, "opacity", 0.1);
				}
				iframe.tabIndex = -1; // Magic to prevent iframe from getting focus on tab keypress - as style didn't work.
			}
			return iframe;
		};

		this.push = function(iframe) {
			iframe.style.display = "none";
			queue.push(iframe);
		};
	}();

	dijit.BackgroundIframe = function(/*DomNode*/node) {
		// summary:
		//		For IE/FF z-index shenanigans. id attribute is required.
		//
		// description:
		//		new dijit.BackgroundIframe(node).
		//
		//		Makes a background iframe as a child of node, that fills
		//		area (and position) of node

		if (!node.id) {
			throw new Error("no id");
		}
		if (has("config-bgIframe")) {
			var iframe = (this.iframe = _frames.pop());
			node.appendChild(iframe);
			if (has("ie") < 7 || has("quirks") || has("trident")) {
				this.resize(node);
				this._conn = on(node, 'resize', lang.hitch(this, "resize", node));
			} else {
				domStyle.set(iframe, {
					width: '100%',
					height: '100%'
				});
			}
			// Applet IFRAME fix: Create, place, and show the background iframes.
			if (node.id) {
				var widget = registry.byId(node.id);
				if (widget) {
					// This code is executed for dialogs, but not for other popups (registry.byId() fails).
					// For other popups see dijit.popup.open in dojoOverride.js.
					if (!this._bifSubscription) {
						// Subscribe for iframe opens, that might happen later.
						this._bifSubscription = topic.subscribe("ecm.BackgroundIframe.create", lang.hitch(this, function() {
							this._createSubBgIframes(widget);
							this._showSubBgIframes(node);
						}));
					}

					this._createSubBgIframes(widget);
					this._showSubBgIframes(node);
				}
			}
		}
	};

	lang.extend(dijit.BackgroundIframe, {
		resize: function(node) {
			// summary:
			//		Resize the iframe so it's the same size as node.
			//		Needed on IE6 and IE/quirks because height:100% doesn't work right.
			if (this.iframe) {
				// var iWidth = node.offsetWidth + (has("trident") ? 2 : 0); // Applet IFRAME fix
				var iWidth = node.offsetWidth;
				var iHeight = node.offsetHeight + (has("trident") ? 2 : 0); // Applet IFRAME fix
				domStyle.set(this.iframe, {
					width: iWidth + 'px', // Applet IFRAME fix
					height: iHeight + 'px' // Applet IFRAME fix
				});
			}
		},
		destroy: function() {
			// summary:
			//		destroy the iframe
			if (this._conn) {
				this._conn.remove();
				this._conn = null;
			}
			if (this.iframe) {
				this.iframe.parentNode.removeChild(this.iframe);
				_frames.push(this.iframe);
				delete this.iframe;
			}
			// Applet IFRAME fix: Cleanup the background iframes.
			if (this._subBgIframes) {
				array.forEach(this._subBgIframes, function(subBgIframe) {
					connect.disconnect(subBgIframe.onClose);
					connect.disconnect(subBgIframe.onOpen);
					if (subBgIframe.appletSizes) {
						// Under Firefox we have to make the applet node size 0 to prevent burn through.
						// Now restore the original size. For best results, the applet element should be 
						// sized to width and height 100%. 
						for ( var appletId in subBgIframe.appletSizes) {
							if (subBgIframe.appletSizes.hasOwnProperty(appletId)) {
								var appletSize = subBgIframe.appletSizes[appletId];
								domStyle.set(appletSize.applet, "width", appletSize.width);
								domStyle.set(appletSize.applet, "height", appletSize.height);
								appletSize.applet = null;
							}
						}
					}

					if (subBgIframe.bgIframe) {
						domConstruct.destroy(subBgIframe.bgIframe);
						subBgIframe.bgIframe = null;
					}
				});
				delete this._subBgIframes;
			}
			if (this._bifSubscription) {
				this._bifSubscription.remove();
				this._bifSubscription = null;
			}
		},
		// Applet IFRAME fix: Place and show the background iframes.
		_showSubBgIframes: function(node) {
			array.forEach(this._subBgIframes, function(subBgIframe) {
				var nodePos = null;
				var framePos = null;
				try {
					// Some of these background iframes may not be necessary, because their corresponding popups
					// are not being displayed, or are collapsed.  In those cases, sometimes, DOJO will generate
					// JavaScript errors in IE browsers.  So we put try/catches around these parts of the code, to 
					// prevent them from breaking the UI...
					nodePos = domGeom.position(node);
					framePos = domGeom.position(subBgIframe.frame);
					nodePos.x -= framePos.x;
					nodePos.y -= framePos.y;
				} catch (e) {
					if (console) {
						console.log(e);
					}
				}
				if (subBgIframe.bgIframe != null && nodePos != null && framePos != null) {
					try {
						// Some of these background iframes may not be necessary, because their corresponding popups
						// are not being displayed, or are collapsed.  In those cases, sometimes, DOJO will generate
						// JavaScript errors in IE browsers.  So we put try/catches around these parts of the code, to 
						// prevent them from breaking the UI...
						if (has("config-bgIframe-force")) {
							domStyle.set(subBgIframe.bgIframe, {
								left: nodePos.x + "px",
								top: nodePos.y + "px",
								width: nodePos.w + "px",
								height: nodePos.h + "px",
								display: "block",
								opacity: "1"
							});
						} else {
							domStyle.set(subBgIframe.bgIframe, {
								left: nodePos.x + "px",
								top: nodePos.y + "px",
								width: nodePos.w + "px",
								height: nodePos.h + "px",
								display: ""
							});
						}
					} catch (e) {
						if (console) {
							console.log(e);
						}
					}
				}
			});
		},
		// Applet IFRAME fix: Create the background iframes.
		_createSubBgIframes: function(widget) {
			this._subBgIframes = [];
			var frames = document.getElementsByTagName('iframe');
			if (frames && frames.length) {
				for (var i = 0; i < frames.length; i++) {
					var frame = frames[i];
					// Ignore other background frames.
					if (frame.className && frame.className.indexOf("dijitBackgroundIframe") >= 0) {
						continue;
					}
					// Don't try to work with the contents of a frame that has a different origin,
					// or security exceptions may be thrown.
					try {
						var origin = location.href.substring(0, location.href.indexOf(location.pathname));
						if (!frame.contentWindow || !frame.contentWindow.document || !frame.contentWindow.document.URL || frame.contentWindow.document.URL.indexOf(origin) != 0) {
							continue;
						}
					} catch (e) {
						continue;
					}
					if (frame.contentWindow.document.body) {
						if (this._bifSubscription) {
							this._bifSubscription.remove();
							this._bifSubscription = null;
						}

						// ICN uses object for IE, embed for Chrome.
						var applets = [];

						var appletElements = frame.contentWindow.document.getElementsByTagName('applet');
						if (appletElements && appletElements.length > 0) {
							array.forEach(appletElements, function(appletElement) {
								applets.push(appletElement);
							});
						}

						var embeds = frame.contentWindow.document.getElementsByTagName('embed');
						if (embeds && embeds.length > 0) {
							array.forEach(embeds, function(embed) {
								applets.push(embed);
							});
						}

						var objects = frame.contentWindow.document.getElementsByTagName('object');
						if (objects && objects.length > 0) {
							array.forEach(objects, function(object) {
								applets.push(object);
							});
						}

						if (applets && applets.length > 0) {
							var newIframe = lang.clone(this.iframe);
							domStyle.set(newIframe, "position", "fixed");
							// Initially hidden, until positioned.
							domStyle.set(newIframe, "display", "none");

							try {
								domConstruct.place(newIframe, frame.contentWindow.document.body, "last");
								if (has("config-bgIframe-force")) {
									newIframe.contentWindow.document.write("<html><body bgcolor='white'></body></html>");
								}
							} catch (error) {
								newIframe = null;
							}

							var newSubBgIframe = {
								frame: frame,
								bgIframe: newIframe,

								onClose: connect.connect(widget, "onClose", (function(subBgIframe) {
									return function() {
										if (subBgIframe != null) {
											domStyle.set(subBgIframe, "display", "none");
										}
									};
								})(newIframe)),

								onOpen: connect.connect(widget, "onOpen", (function(subBgIframe) {
									return function() {
										if (subBgIframe != null) {
											domStyle.set(subBgIframe, "display", "");
										}
									};
								})(newIframe))
							};

							if (newIframe == null) {
								// Under Firefox we have to make the applet node size 0 to prevent burn through.
								var appletSizes = {};
								array.forEach(applets, function(applet) {
									appletSizes[applet.id] = {
										applet: applet,
										width: applet.width,
										height: applet.height
									};
									domStyle.set(applet, "width", "1px");
									domStyle.set(applet, "height", "1px");
								});
								newSubBgIframe.appletSizes = appletSizes;
							}
							this._subBgIframes.push(newSubBgIframe);
						}
					}
				}
			}
		}
	});

	return dijit.BackgroundIframe;
});
