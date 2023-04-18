/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/array",
	"dojo/_base/event",
	"dojo/_base/sniff",
	"dojo/_base/lang",
	"dojo/window",
	"dojo/dom-attr",
	"dojo/dom-class",
	"dojo/dom-construct",
	"dojo/dom-geometry",
	"dojo/dom-style",
	"dojo/parser",
	"dijit/focus",
	"dijit/registry",
	"dojox/layout/ResizeHandle",
	"dijit/Dialog",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/form/Button",
	"dijit/layout/ContentPane",
	"dijit/layout/utils",
	"ecm/LoggerMixin",
	"ecm/MessagesMixin",
	"dojo/text!./templates/BaseDialog.html"
], function(declare, array, event, has, lang, winUtils, domAttr, domClass, domConstruct, domGeom, domStyle, parser, focus, registry, ResizeHandle, Dialog, _TemplatedMixin, _WidgetsInTemplateMixin, Button, ContentPane, layoutUtils, LoggerMixin, MessagesMixin, template) {

	/**
	 * @name ecm.widget.dialog.BaseDialog
	 * @class Provides the base dialog box from which all other <code>ecm.widget.dialog</code> dialog box classes are
	 *        derived.
	 *        <p>
	 *        To specify the content of a dialog box, use a <code>contentString</code> object and not a
	 *        <code>templateString</code> object.
	 * @augments dijit.Dialog
	 */
	return declare("ecm.widget.dialog.BaseDialog", [
		Dialog,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		MessagesMixin,
		LoggerMixin
	], {
		/** @lends ecm.widget.dialog.BaseDialog.prototype */
		templateString: template,
		widgetsInTemplate: true,

		contentString: null,
		cancelButtonLabel: ecm.messages.cancel,

		/**
		 * A boolean value that controls whether or not the content area is automatically fitted within the dialog box.
		 * If true, the dialog box will not be automatically sized to fit around the content area.
		 */
		fitContentArea: true,

		resizable: false,

		/**
		 * If true, the dialog is displayed as fullscreen and restore button is hidden.
		 * 
		 * @since 2.0.3.3
		 */
		lockFullscreen: false,
		
		/**
		 * A boolean indicating whether the dialog can be expanded/restored.
		 * 
		 * @since 3.0.1
		 */
		expandable: true,

		_sizeToViewportRatio: false,

		postCreate: function() {
			this.inherited(arguments);

			this._maximizeButton.set("title", this.messages.maximize);
			this._restoreButton.set("title", this.messages.restore);

			if (this.lockFullscreen) {
				this.setMaximized(true);
				this.setResizable(false);
			} else if (!this.expandable) {
				this.setExpandable(false);
			}
		},

		/**
		 * Builds the rendering, using <code>contentString</code> as the HTML template for the content area of the
		 * dialog box.
		 */
		buildRendering: function() {
			this.inherited(arguments);

			//appending contentString to Dialog's containerNode
			if (this.contentString) {
				this.contentArea.innerHTML = this._stringRepl(this.contentString);
				var node = this.contentArea;

				// recurse through the node, looking for, and attaching to, our
				// attachment points and events, which should be defined on the template node.
				this._attachTemplateNodes(node);

				if (this.widgetsInTemplate) {

					parser.parse(node, {
						noStart: !this._earlyTemplatedStartup,
						template: true,
						inherited: {
							dir: this.dir,
							lang: this.lang,
							textDir: this.textDir
						},
						propsThis: this, // so data-dojo-props of widgets in the template can reference "this" to refer to me
						contextRequire: this.contextRequire,
						scope: "dojo" // even in multi-version mode templates use dojoType/data-dojo-type
					}).then(lang.hitch(this, function(widgets) {
						this._startupWidgets = widgets;

						// _WidgetBase::destroy() will destroy any supporting widgets under this.domNode.
						// If we wanted to, we could call this.own() on anything in this._startupWidgets that was moved outside
						// of this.domNode (like Dialog, which is moved to <body>).

						// Hook up attach points and events for nodes that were converted to widgets
						for (var i = 0; i < widgets.length; i++) {
							this._processTemplateNode(widgets[i], function(n, p) {
								// callback to get a property of a widget
								return n[p];
							}, function(widget, type, callback) {
								// callback to do data-dojo-attach-event to a widget
								if (type in widget) {
									// back-compat, remove for 2.0
									return widget.connect(widget, type, callback);
								} else {
									// 1.x may never hit this branch, but it's the default for 2.0
									return widget.on(type, callback, true);
								}
							});
						}

						// Cleanup flag set above, just in case
						if (this.containerNode && this.containerNode.stopParser) {
							delete this.containerNode.stopParser;
						}
					}));
				}
			}

			if (!this.lockFullscreen && this.resizable) {
				this.setResizable(true);
			}
		},

		/**
		 * Sets the title of the dialog box.
		 */
		setTitle: function(title) {
			this.set("title", title ? title.replace(/&#39;/g, "'") : title);
		},

		/**
		 * Sets the title of the dialog box.
		 */
		_setTitleAttr: function(title) {
			this.titleNode.innerHTML = title;
			domAttr.set(this.titleBar, "title", title);
			//domAttr.set(this.domNode, "title", title); // This is causing the buttons to have this title as the hover help
			domAttr.set(this.domNode, "aria-label", title);
		},

		/**
		 * Sets the introduction text on the dialog box. This is text that appears below the title bar that describes
		 * how to use the dialog.
		 */
		setIntroText: function(text) {
			if (this.introText.firstChild) {
				// Update the existing message text.
				this.introText.innerHTML = text; // allows html in the text. // this.introText.firstChild.nodeValue = text;
			} else {
				// Create the message text.
				var textNode = document.createTextNode(text);
				this.introText.appendChild(textNode);
			}
			this.resize();
		},

		/**
		 * Sets the introduction text reference link on the dialog box. This is a link that appears after the
		 * introduction text.
		 */
		setIntroTextRef: function(text, link) {
			this.introTextRef.innerHTML = '<a href="' + link + '" target="_blank">' + text + '</a>';
			this.resize();
		},

		/**
		 * Sets the width of the dialog box (in pixels). The height of the dialog will automatically adjust to fit the
		 * content, but not move beyond 80% of the total window height.
		 */
		setWidth: function(width) {
			if (!this._sizeToViewportRatio) {
				domStyle.set(this.domNode, {
					width: width + "px",
					minWidth: width + "px",
					maxWidth: width + "px",
					height: "auto",
					maxHeight: "80%"
				});
			}
			this.resize();
		},

		/**
		 * Sets both the width and height of the dialog box in pixels.
		 */
		setSize: function(width, height) {
			if (!this._sizeToViewportRatio) {
				domStyle.set(this.domNode, {
					width: width + "px",
					minWidth: width + "px",
					maxWidth: width + "px",
					height: height + "px",
					minHeight: height + "px",
					maxHeight: height + "px"
				});
			}
			this.resize();
		},

		/**
		 * Set the dialog as maximized or restored.
		 * 
		 * @param bool
		 *            Boolean indicating if the dialog should be maximized.
		 * @since 2.0.3
		 */
		setMaximized: function(bool) {
			if (this.lockFullscreen) {
				domClass.add(this.domNode, "fullscreen");
				domClass.add(this._maximizeButton.domNode, "dijitHidden");
				domClass.add(this._restoreButton.domNode, "dijitHidden");
			} else if (bool) {
				domClass.add(this.domNode, "fullscreen");
				domClass.add(this._maximizeButton.domNode, "dijitHidden");
				domClass.remove(this._restoreButton.domNode, "dijitHidden");
			} else {
				domClass.remove(this.domNode, "fullscreen");
				domClass.remove(this._maximizeButton.domNode, "dijitHidden");
				domClass.add(this._restoreButton.domNode, "dijitHidden");
			}
		},

		/**
		 * Automatically resize this dialog to the browser's viewport ratio (height and width) when the dialog is not
		 * maximized and the browser window is resized by the user.
		 * 
		 * @param bool
		 *            Boolean indicating if the non-maximized dialog should be resized to the browser's viewport ratio.
		 * @since 2.0.3.5
		 */
		setSizeToViewportRatio: function(bool) {
			this._sizeToViewportRatio = bool;
			if (bool) {
				this.setResizable(false);
			}
		},

		/**
		 * Returns a boolean indicating if the dialog is maximized.
		 * 
		 * @since 2.0.3
		 */
		isMaximized: function() {
			return domClass.contains(this.domNode, "fullscreen");
		},

		/**
		 * @private Called when the user clicks the maximize button on the dialog.
		 */
		_onMaximize: function() {
			this._prevDomNodeMB = domGeom.position(this.domNode);
			this.setMaximized(true);

			// Move focus from the maximize button to the restore button.
			var focusedWidget = registry.getEnclosingWidget(focus.curNode);
			if (focusedWidget == this._maximizeButton) {
				this._restoreButton.focus();
			}

			domStyle.set(this.actionBar, "height", "auto");
			domStyle.set(this.titleBar, "width", "");
			domStyle.set(this.domNode, {
				"height": "auto",
				"width": "auto",
				"minWidth": "none",
				"maxWidth": "none",
				"minHeight": "none",
				"maxHeight": "none"
			});
			if (this._relativePosition) {
				delete this._relativePosition;
			}
			this.resize();
		},

		/**
		 * @private Called when the user clicks the restore button on the dialog.
		 */
		_onRestore: function() {
			this.setMaximized(false);
			
			// Reset the action and title bar's height
			domStyle.set(this.actionBar, "height", "");
			domStyle.set(this.titleBar, "height", "");

			// Move focus from the restore button to the maximize button.
			var focusedWidget = registry.getEnclosingWidget(focus.curNode);
			if (focusedWidget == this._restoreButton) {
				this._maximizeButton.focus();
			}

			if (this._relativePosition) {
				delete this._relativePosition;
			}
			
			if (this._sizeToViewportRatio) {
				this.resize();
			} else {
				this._relativePosition = this._prevDomNodeMB; // sets the dialog location and size as it was previously
				this.resize(this._prevDomNodeMB);
			}
		},

		/**
		 * Enables or disables resizing of the dialog box. A resize indicator appears on the bottom trailing corner of
		 * the dialog box to indicate that it can be resized.
		 */
		setResizable: function(resizable) {
			this.resizable = !this.lockFullscreen && !this._sizeToViewportRatio && resizable;
			if (this.resizable) {
				domStyle.set(this.resizeHandle.domNode, "visibility", "visible");
			} else {
				domStyle.set(this.resizeHandle.domNode, "visibility", "hidden");
			}
		},
		
		/**
		 * Indicates whether the dialog can be expanded/restored.
		 */
		setExpandable: function(expandable) {
			this.expandable = expandable;
			if (this.expandable) {
				this.setMaximized(domClass.contains(this.domNode, "fullscreen"));
			} else {
				domClass.add(this._maximizeButton.domNode, "dijitHidden");
				domClass.add(this._restoreButton.domNode, "dijitHidden");
			}
		},

		/**
		 * Prevent drag over the underlay.
		 */
		show: function() {
			var d = this.inherited(arguments);
			if (this._isUnderlayConnect == undefined && dijit._underlay) {
				this.connect(dijit._underlay.domNode, "dragover", "onDragOver");
				this._isUnderlayConnect = true;
			}
			this.resize();
			return d;
		},

		/**
		 * Prevent drag over the dialog.
		 */
		_onShow: function() {
			this.inherited(arguments);
			if (this._isDialogConnect == undefined) {
				this.connect(this.domNode, "dragover", "onDragOver");
				this._isDialogConnect = true;
			}
		},

		/**
		 * Displays the drag over not allowed icon.
		 */
		onDragOver: function(evt) {
			event.stop(evt);
			evt.dataTransfer.dropEffect = "none";
			return false;
		},

		/**
		 * Overrides the <code>dijit.Dialog</code> resize behavior. If the content area contains a widget that
		 * implements resize, then that widget's resize method will be invoked as well.
		 */
		resize: function(coords) {
			if (coords) {
				domGeom.setMarginBox(this.domNode, coords);
			}
			if (this.domNode.style.display != "none") {
				this._checkIfSingleChild();

				// If we resized the dialog contents earlier, reset them back to original size, so
				// that if the user later increases the viewport size, the dialog can display w/out a scrollbar.
				// Need to do this before the domGeom.position(this.domNode) call below.
				if (this._singleChild) {
					if (typeof this._singleChildOriginalStyle != "undefined") {
						this._singleChild.domNode.style.cssText = this._singleChildOriginalStyle;
						delete this._singleChildOriginalStyle;
					}
				} else {
					domStyle.set(this.containerNode, {
						width: "auto",
						height: "auto"
					});
				}

				var bb = domGeom.position(this.domNode);

				// Get viewport size but then reduce it by a bit; Dialog should always have some space around it
				// to indicate that it's a popup.  This will also compensate for possible scrollbars on viewport.
				var viewport = winUtils.getBox(this.ownerDocument);
				viewport.w *= this.maxRatio;
				viewport.h *= this.maxRatio;

				if (bb.w >= viewport.w || bb.h >= viewport.h) {
					// Reduce size of dialog contents so that dialog fits in viewport
					var containerSize = domGeom.position(this.containerNode), w = Math.min(bb.w, viewport.w) - (bb.w - containerSize.w), h = Math.min(bb.h, viewport.h) - (bb.h - containerSize.h);

					if (this._singleChild && this._singleChild.resize) {
						if (typeof this._singleChildOriginalStyle == "undefined") {
							this._singleChildOriginalStyle = this._singleChild.domNode.style.cssText;
						}
						this._singleChild.resize({
							w: w,
							h: h
						});
					} else {
						domStyle.set(this.containerNode, {
							width: w + "px",
							height: h + "px",
							overflow: "auto",
							position: "relative" // workaround IE bug moving scrollbar or dragging dialog
						});
					}
				} else {
					if (this._singleChild && this._singleChild.resize) {
						this._singleChild.resize();
					}
				}
				if (!has("touch")) {
					// If the user has scrolled the display then reposition the Dialog.  But don't do it for touch
					// devices, because it will counteract when a keyboard pops up and then the browser auto-scrolls
					// the focused node into view.
					this._position();
				}
			}

			var size = domGeom.getContentBox(this.domNode);
			if (size.h <= 0) {
				return;
			}

			var mb = domGeom.getMarginBox(this.domNode);
			if (!this.isMaximized()) {
				// Set the titlebar width so we can get the correct height later in this method
				domGeom.setMarginBox(this.titleBar, {
					w: mb.w
				});
			} else {
				domGeom.setMarginBox(this.titleBar, {
					h: mb.h
				});
			}
			domGeom.setMarginBox(this.inlineMessage, {
				w: this.isMaximized() ? mb.w - 20 : mb.w
			});
			domGeom.setMarginBox(this.secondaryInlineMessagesArea, {
				w: this.isMaximized() ? mb.w - 20 : mb.w
			});

			var containerSize = layoutUtils.marginBox2contentBox(this.containerNode, {
				w: size.w,
				h: size.h
			});
			// Set the container height.  When change the height of the browser, the dialog can have 80% max height which needs to be set on the container node.
			domStyle.set(this.containerNode, {
				height: containerSize.h + "px",
				width: containerSize.w + "px"
			});

			// Calculate the height and width for the content area.
			// If not maximized, then the content area height = container height - inlineMessage height - title bar height - action bar height
			// If maximized, then the content area height = container height - inlineMessage height
			var ht = containerSize.h;
			if (this.inlineMessage && domStyle.get(this.inlineMessage, "display") != "none") {
				var inlineMessage = domGeom.getMarginBox(this.inlineMessage);
				ht = ht - inlineMessage.h;
			}
			if (this.secondaryInlineMessagesArea && domStyle.get(this.secondaryInlineMessagesArea, "display") != "none") {
				ht -= domGeom.getMarginBox(this.secondaryInlineMessagesArea).h;
			}
			if (!this.isMaximized()) {
				var titlebar = domGeom.getMarginBox(this.titleBar);
				var actionbar = domGeom.getMarginBox(this.actionBar);
				ht = ht - actionbar.h - titlebar.h;
			}
			var contentAreaMB = {
				w: containerSize.w,
				h: ht
			};

			if (this.fitContentArea && (!has("ie") || (!this.lockFullscreen && (this.resizable || this._sizeToViewportRatio)))) {
				domStyle.set(this.containerNode, "overflow", "hidden");
				// Fix webkit problem with scroll bars appearing when the content area is resized.
				if (has("webkit") && !this.keepContentAreaOverflowAuto) {
					domStyle.set(this.contentArea, "overflow", "hidden");
				}
				domGeom.setMarginBox(this.contentArea, contentAreaMB);
			}
			if (!this.fitContentArea) {
				domStyle.set(this.containerNode, "overflow", "auto");
			}

			if (this.contentArea.firstChild && this.contentArea.firstChild.getAttribute) {
				var firstDijit = registry.byNode(this.contentArea.firstChild);
				if (firstDijit && firstDijit.resize) {
					var contentSize = layoutUtils.marginBox2contentBox(this.contentArea, contentAreaMB);
					firstDijit.resize(contentSize);
				}
			}
		},

		/**
		 * Resize to the viewport ratio size if not maximized and _sizeToViewportRatio.
		 * 
		 * @private
		 */
		_size: function() {
			this.inherited(arguments);
			if (!this.isMaximized() && this._sizeToViewportRatio) {
				var viewport = winUtils.getBox(this.ownerDocument);
				viewport.w *= this.maxRatio;
				viewport.h *= this.maxRatio;
				var bb = domGeom.position(this.domNode);
				if (bb.w < viewport.w || bb.h < viewport.h) {
					domStyle.set(this.containerNode, {
						width: viewport.w + "px",
						height: viewport.h + "px",
						overflow: "auto",
						position: "relative" // workaround IE bug moving scrollbar or dragging dialog
					});
				}
			}
		},

		/**
		 * Shows or hides the action bar.
		 * 
		 * @param show
		 *            If true, the action bar will be shown. If false, the action bar is hidden.
		 */
		showActionBar: function(show) {
			if (show) {
				domStyle.set(this.actionBar, "display", "block");
			} else {
				domStyle.set(this.actionBar, "display", "none");
			}
			this.resize();
		},

		/**
		 * Adds a button to the dialog's button bar. Returns the <code>dojo.form.Button</code> instance created for
		 * the button.
		 * 
		 * @param buttonLabel
		 *            The label to use for the button.
		 * @param clickFunction
		 *            The name of a function in this object to call when the button is clicked.
		 * @param disabled
		 *            If true, the button will be initially disabled.
		 * @param isDefault
		 *            If true, this button will be clicked when the Enter key is pressed anywhere on the dialog.
		 * @param idPrefix
		 *            if provided, this string is added to the front of the dynamically generated button widget id
		 *            string. This makes it easier to identify the dynamically created button by it's id.
		 */
		addButton: function(buttonLabel, clickFunction, disabled, isDefault, idPrefix) {
			this.cancelButton.set("label", this.cancelButtonLabel);

			var params = {
				label: buttonLabel
			};
			if (idPrefix) {
				params.id = registry.getUniqueId(idPrefix + "_dijit_form_Button");
			}
			var button = new Button(params);
			if (clickFunction) {
				this.connect(button, "onClick", clickFunction);
			}
			domConstruct.place(button.domNode, this.actionBar.firstChild, "before");
			domConstruct.place(this.messageRef, this.actionBar.firstChild, "before");

			if (disabled) {
				button.set("disabled", true);
			}
			if (isDefault) {
				this.connect(this, "onKeyDown", function(event) {
					if (event.keyCode == 13 && this[clickFunction]) {
						var w = registry.getEnclosingWidget(event.target);
						if (!(w && (w.type == "button" || (w.type == "text" && w.textbox instanceof HTMLTextAreaElement)))) {
							// Call onBlur() on the widget with focus to apply pending changes. 
							if (focus.curNode) {
								var focusedWidget = registry.getEnclosingWidget(focus.curNode);
								if (focusedWidget && focusedWidget.onBlur) {
									focusedWidget.onBlur();
								}
							}
							this[clickFunction]();
						}
					}
				});
			}

			if (!this._addedButtons)
				this._addedButtons = [];
			this._addedButtons.push(button);

			return button;
		},

		/**
		 * Sets a hyperlink that is displayed in the action bar, on the opposite side of the buttons. This hyperlink is
		 * used to provide the message identifier and link to additional information in the error dialog.
		 * 
		 * @param text
		 *            The text of the reference.
		 * @param link
		 *            The URL of the hyperlink.
		 */
		setReferenceLink: function(text, link, hoverHelp) {
			if (hoverHelp == null) {
				hoverHelp = "";
			}
			this.messageRef.innerHTML = '<a href="' + link + '" target="_blank" title="' + hoverHelp + '">' + text + '</a>';
		},

		/**
		 * Displays a category "error", "warning", "info" or "confirm" text message at the top of the dialog box, under
		 * the dialog's introduction text.
		 * <p>
		 * <strong>Note:</strong> LoginPane.js contains a copy of this method.
		 * 
		 * @param text
		 *            The text of the message.
		 * @param category
		 *            The message category - "error", "warning", "info" or "confirm". If not provided "error" is
		 *            assumed.
		 */
		setMessage: function(textMessage, category) {
			this.logEntry("setMessage");
			// If no message...
			if (!textMessage || (textMessage.length == 0)) {
				this.clearMessage();
			} else {
				var msgClassNames;
				if (category == "warning") {
					msgClassNames = "inlineMessage inlineMessageWarning";
				} else if (category == "info") {
					msgClassNames = "inlineMessage inlineMessageInfo";
				} else if (category == "confirm") {
					msgClassNames = "inlineMessage inlineMessageConfirm";
				} else { // Default category is "error"
					msgClassNames = "inlineMessage inlineMessageError";
				}
				domAttr.set(this.inlineMessage, "class", msgClassNames);
				this.messageText.innerHTML = textMessage;
				domStyle.set(this.inlineMessage, "display", "");
				this.resize();
			}
			this.logExit("setMessage");
		},

		/**
		 * Clears the text message at the top of the dialog, under the dialog's introduction text.
		 * <p>
		 * <strong>Note:</strong> LoginPane.js contains a copy of this method.
		 */
		clearMessage: function() {
			this.logEntry("clearMessage");
			// Hide the message.
			domStyle.set(this.inlineMessage, "display", "none");
			// Restore to default of error.
			domAttr.set(this.inlineMessage, "class", "inlineMessage inlineMessageError");
			// Remove the text.
			if (this.messageText.firstChild) {
				this.messageText.removeChild(this.messageText.firstChild);
				this.resize();
			}
			this.logExit("clearMessage");
		},

		/**
		 * Displays a category "error", "warning", "info" or "confirm" text message at the top of the dialog box, under
		 * the dialog's main text message which may be hidden.
		 * 
		 * @param text
		 *            The text of the message.
		 * @param category
		 *            The message category - "error", "warning", "info" or "confirm". If not provided "error" is
		 *            assumed.
		 * @since 2.0.3.2
		 */
		appendSecondaryMessage: function(textMessage, category) {
			this.logEntry("appendSecondaryMessage");
			// If no message...
			if (!textMessage)
				return;

			if (!this._secondaryInlineMessages)
				this._secondaryInlineMessages = {};
			if (!category)
				category = "error";
			var node = this._secondaryInlineMessages[category];
			if (!node) {
				var msgClassNames;
				if (category == "warning") {
					msgClassNames = "inlineMessage inlineMessageWarning";
				} else if (category == "info") {
					msgClassNames = "inlineMessage inlineMessageInfo";
				} else if (category == "confirm") {
					msgClassNames = "inlineMessage inlineMessageConfirm";
				} else { // Default category is "error"
					msgClassNames = "inlineMessage inlineMessageError";
				}
				var container = domConstruct.create("div", {
					"class": msgClassNames
				}, this.secondaryInlineMessagesArea);
				domConstruct.create("div", {
					"class": "messageIcon"
				}, container);
				node = domConstruct.create("div", {
					"class": "messageText",
					role: "alert"
				}, container);
				this._secondaryInlineMessages[category] = node;
			}
			if (node.innerHTML)
				textMessage = " " + textMessage;
			node.innerHTML += textMessage;
			domStyle.set(this.secondaryInlineMessagesArea, "display", "");
			this.resize();
			this.logExit("appendSecondaryMessage");
		},

		/**
		 * Clears the secondary text message at the top of the dialog, under the dialog's main text message which may be
		 * hidden.
		 * 
		 * @param category
		 *            The message category - "error", "warning", "info" or "confirm". If not provided "error" is
		 *            assumed.
		 * @since 2.0.3.2
		 */
		clearSecondaryMessage: function(category) {
			this.logEntry("clearSecondaryMessage");
			if (!category)
				category = "error";
			if (!this._secondaryInlineMessages)
				this._secondaryInlineMessages = {};
			var node = this._secondaryInlineMessages[category];
			if (node) {
				this._secondaryInlineMessages[category] = null;
				if (!this._secondaryInlineMessages.error && !this._secondaryInlineMessages.warning && !this._secondaryInlineMessages.info && !this._secondaryInlineMessages.confirm)
					domStyle.set(node.parentNode.parentNode, "display", "none");
				domConstruct.destroy(node.parentNode);
				this.resize();
			}
			this.logExit("clearSecondaryMessage");
		},

		/**
		 * Hides the dialog.
		 */
		hide: function() {
			if (this._prevDomNodeMB) {
				delete this._prevDomNodeMB;
			}
			return this.inherited(arguments);
		},

		/**
		 * Fix dojo bug where the user sometimes cannot see the dialog after resizing the browser because the dialog
		 * became offscreen after the resize.
		 * 
		 * @private
		 */
		_position: function() {
			this.inherited(arguments);
			if (!domClass.contains(this.ownerDocumentBody, "dojoMove")) { // don't do anything if called during auto-scroll
				var viewport = winUtils.getBox(this.ownerDocument);
				var thePosition = domGeom.position(this.domNode);
				if (thePosition.x && viewport.w && thePosition.x > (viewport.w - thePosition.w)) {
					domStyle.set(this.domNode, {
						left: (viewport.w - thePosition.w) + "px"
					});
				}
				if (thePosition.y && viewport.h && thePosition.y > (viewport.h - thePosition.h)) {
					domStyle.set(this.domNode, {
						top: (viewport.h - thePosition.h) + "px"
					});
				}
			}
		},

		/**
		 * Destroys the dialog box. This method should be called when the dialog box is no longer needed, to prevent
		 * memory leaks.
		 */
		destroy: function() {
			if (this.cancelButton)
				this.cancelButton.destroy();
			if (this._addedButtons instanceof Array) {
				array.forEach(this._addedButtons, function(button, i) {
					button.destroy();
					this._addedButtons[i] = null;
				}, this);
				delete this._addedButtons;
			}
			if (this._maximizeButton) {
				this._maximizeButton.destroy();
			}
			if (this._restoreButton) {
				this._restoreButton.destroy();
			}
			if (this._prevDomNodeMB) {
				delete this._prevDomNodeMB;
			}

			this._firstFocusItem = null;
			
			this.inherited(arguments);
		}
	});
});
