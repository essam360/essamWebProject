/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/connect",
	"dojo/_base/xhr",
	"dojo/dom-style",
	"dojo/dom-geometry",
	"dojo/string",
	"dijit/_Widget",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/Toolbar",
	"dijit/form/Button",
	"dijit/form/ComboBox",
	"dijit/form/FilteringSelect",
	"dijit/ToolbarSeparator",
	"ecm/LoggerMixin",
	"ecm/MessagesMixin",
	"ecm/model/Desktop",
	"ecm/model/Message",
	"ecm/model/Request",
	"ecm/widget/dialog/ErrorDialog",
	"dojo/data/ItemFileReadStore",
	"ecm/widget/viewer/DocViewer",
	"ecm/model/_OutsideInSupportedMixin",
	"dojo/text!./templates/AjaxViewerTemplate.html"
],

function(declare, lang, connect, xhr, domStyle, domGeom, string, _Widget, _TemplatedMixin, _WidgetsInTemplateMixin, //
Toolbar, Button, ComboBox, FilteringSelect, ToolbarSeparator, //
LoggerMixin, MessagesMixin, Desktop, Message, Request, ErrorDialog, ItemFileReadStore, //
DocViewer, _OutsideInSupportedMixin, template) {//

// --------------------------------------------------------------------------------------
// ajaxViewer Widget
// --------------------------------------------------------------------------------------

	/**
	 * @name ecm.widget.viewer.AjaxViewer
	 * @class Provides a widget that supports page-by-page viewing of documents.
	 *        <p>
	 *        <strong>Note:</strong> Although methods on this widget indicate that it can support annotations display
	 *        and editing, annotations viewing and editing are not currently supported.
	 * @extends ecm.widget.viewer.DocViewer
	 */
	var AjaxViewer = declare("ecm.widget.viewer.AjaxViewer", [
		DocViewer,
		_WidgetsInTemplateMixin,
		MessagesMixin,
		_OutsideInSupportedMixin
	], {
		/** @lends ecm.widget.viewer.AjaxViewer.prototype */

		imagesDir: null,

		// Parameters to tag (also instance vars).  Note that these
		// must be non-null to avoid problems (dojo won't set the instance vars to the tag
		// values if the vars are undefined)
		docUrl: "", // holds url of document being viewed
		docName: "",
		contentType: "",
		serverType: "",
		printDocPrivilege: true,
		viewAnnotationsPrivilege: true,
		editAnnotationsPrivilege: false,
		editDocPrivilege: false,
		editPropertiesPrivilege: false,
		width: "100%",
		height: "100%",

		// Template settings
		templateString: template,

		// Set to true to enable annotations editing
		enableAnnotations: false,

		// Instance variables for controls on the toolbar
		saveButton: null,
		printButton: null,
		firstPageButton: null,
		previousPageButton: null,
		pageSelect: null,
		nextPageButton: null,
		lastPageButton: null,
		zoomInButton: null,
		zoomSelect: null,
		zoomOutButton: null,
		rotateLeftButton: null,
		rotateRightButton: null,
		rotate180Button: null,
		invertButton: null,
		lightenButton: null,
		darkenButton: null,
		dullButton: null,
		sharpenButton: null,
		createHighlightButton: null,
		createNoteButton: null,
		editPropertiesButton: null,
		deleteButton: null,

		// Instance variables to hold information on the document being viewed
		pageCount: 0,
		canRotate: false,
		canEnhance: false,
		canInvert: false,
		canShowAnnotations: false,
		canBalance: false,
		printable: false,
		canManipulatePages: false,
		minScale: 1.0,
		maxScale: 1.0,

		// Instance variables to hold the state of the document being viewed.
		pageNo: 1,
		currentScaleSelection: 4, // corresponds to 100%
		scale: 1.0,
		displayableWidth: 760,
		displayableHeight: 500,
		annotationSet: null,
		inverted: false,
		page: null, // keeps info about each page, which is rotation, contrast, brightness

		// Instance vars for viewer setings
		renderAhead: true,

		// Instance variables for other controls
		propertiesDialog: null,

		// Initialize to a sane default.
		_pageImageCacheId: new Date().getTime(),

		_isNewItem: false,

		constructor: function() {
			if (!this.page) {
				this.page = [];
			}
		},

		/** @private */
		postCreate: function() {
			this.inherited(arguments);
			this.imagesDir = ecm.model.desktop.getServicesUrl() + "/ecm/widget/resources/images";
			this.logDebug("ajaxViewer.postCreate");
			this.domNode.widget = this;
			this.domNode.style.width = this.width;
			this.domNode.style.height = this.height;
			this.domNode.style.overflow = "hidden";

			this.buildToolbar();
			this.buildPageFrame();

			// Initially size page frame and setup event handler for resize
			connect.connect(this.domNode, "onresize", this, "onresize");
			connect.connect(window, "onresize", this, "onresize");
			this.onresize();

			// allow javascript within the docUrl specification
			if (this.docUrl) {
				this._showItem();
			}
			this.logDebug("ajaxViewer.postCreate", "completed");
		},

		/**
		 * Determines if the viewer can open the item on the current client and mid-tier platforms. If IBM Content
		 * Navigator is deployed on Linux for System z, and the document is an office document type, this method will
		 * return <code>false</code>.
		 * 
		 * @param item
		 *            The item to test.
		 * @return {Boolean} A value of <code>true</code> or <code>false</code>, indicating whether this viewer can
		 *         open the specified item.
		 */
		canOpenItem: function(item) {
			var methodName = "canOpenItem";
			this.logEntry(methodName);

			var canOpen = true;
			if (this._isOIType(item.mimetype)) {
				var os = ecm.model.desktop.appServerOs;
				if (os != null) {
					if (os.arch == "s390x") {
						this.logDebug(methodName, "zLinux Platform is not supported for " + mimeType + ".  canOpenItem will return false.");
						canOpen = false;
					}
				}
			}

			this.logExit(methodName);
			return canOpen;
		},

		setItem: function(id, pageNumber) {
			this.inherited(arguments);
			this._pageImageCacheId = new Date().getTime();
			this._isNewItem = true;
		},

		/**
		 * Displays the item, if an item has been set on this viewer. The callback will be called on successful
		 * completion of showing the item.
		 * 
		 * @param callback
		 *            The callback to call on successful completion of this call. (optional)
		 */
		showItem: function(callback) {
			if (this._isNewItem) {
				this._isNewItem = false;
				this.docName = this._item.name;
				this.docUrl = Request.setSecurityToken(this.viewerDef.getDocUrl(this._item));
				this.contentType = this._item.mimetype;
				this.serverType = this._item.repository.type;
				this.printDocPrivilege = this._item.hasPrivilege("privPrintDoc");
				this.viewAnnotationsPrivilege = this._item.hasPrivilege("privViewAnnotations");
				this.editAnnotationsPrivilege = this._item.hasPrivilege("privEditAnnotations");
				this.editDocPrivilege = this._item.hasPrivilege("privEditDoc");
				this.editPropertiesPrivilege = this._item.hasPrivilege("privEditProperties");
				this._showItem(callback);
				this._isLoading = true;
			}
		},

		_showItem: function(callback) {
			if (this.docUrl != null && this.docUrl.length > 0) {
				this.displayDocument(this.docUrl, this.docName, this.contentType, this.serverType);
			}
		},

		/**
		 * Closes the item. Terminates display of the document in the viewer, and clears any states related to the item
		 * that is assigned to this viewer.
		 */
		closeItem: function() {
			this.inherited(arguments);
			this.ajaxViewerPage.style.display = "none";
			this.errorLoadingDocumentPage.style.display = "none";
			this.loadingDocumentPage.style.display = "none";
		},

		/**
		 * Determines if the viewer contains unsaved changes.
		 * 
		 * @return {Boolean} A value of <code>true</code> or <code>false</code>, if annotations have been added,
		 *         modified, or deleted.
		 */
		isDirty: function() {
			var dirty = false;
			if (this.annotationSet != null) {
				dirty = this.annotationSet.dirty;
			}
			return dirty;
		},

		/**
		 * Saves all annotation changes, if annotation editing is supported.
		 * 
		 * @param callback
		 *            If specified, call the callback upon completion of the save.
		 */
		saveAnnotations: function(callback) {
			this.save();
		},

		/**
		 * Determines if the viewer is printing the document.
		 * 
		 * @return {Boolean} A value of <code>true</code> or <code>false</code>, if the viewer is in the process of
		 *         printing a document.
		 */
		isPrinting: function() {
			return false;
		},

		/**
		 * Returns the page number of the current page that is being viewed.
		 * 
		 * @return {number} A number that represents the current page being viewed.
		 */
		getPageNumber: function() {
			return this.pageNo;
		},

		/**
		 * Constructs the toolbar.
		 * 
		 * @deprecated As of 2.0.2. This method will be made private.
		 */
		buildToolbar: function() {
			this.logDebug("ajaxViewer.buildToolbar");
			// get the node from args/frag
			var tbar = new Toolbar();
			this.ajaxViewerToolbar.appendChild(tbar.domNode);

			if (this.enableAnnotations) {
				this.saveButton = new Button({
					label: "<img src=" + this.imagesDir + "/save_23.png>"
				});
				this.saveButton.domNode.title = this.messages.ajaxViewer_save;
				this.saveButton.containerNode.firstChild.alt = this.messages.ajaxViewer_save;
				connect.connect(this.saveButton, "onClick", this, "save");
				tbar.addChild(this.saveButton);
			}

			this.printButton = new Button({
				label: "<img src=" + this.imagesDir + "/print_23.png>"
			});
			this.printButton.domNode.title = this.messages.ajaxViewer_print;
			this.printButton.containerNode.firstChild.alt = this.messages.ajaxViewer_print;
//		this.printButton.tabIndex = 0;
			connect.connect(this.printButton, "onClick", this, "print");
			tbar.addChild(this.printButton);

			var tbarSpacer = new ToolbarSeparator();
			tbar.addChild(tbarSpacer);
			tbarSpacer.domNode.ondblclick = this._dump;

			this.firstPageButton = new Button({
				label: "<img src=" + this.imagesDir + "/page_gotofirst_23.png>"
			});
			this.firstPageButton.domNode.title = this.messages.ajaxViewer_firstPage;
			this.firstPageButton.containerNode.firstChild.alt = this.messages.ajaxViewer_firstPage;
//		this.firstPageButton.tabIndex = -1;
			connect.connect(this.firstPageButton, "onClick", this, "firstPage");
			tbar.addChild(this.firstPageButton);

			this.previousPageButton = new Button({
				label: "<img src=" + this.imagesDir + "/page_previous_23.png>"
			});
			this.previousPageButton.domNode.title = this.messages.ajaxViewer_previousPage;
			this.previousPageButton.containerNode.firstChild.alt = this.messages.ajaxViewer_previousPage;
//		this.previousPageButton.tabIndex = -1;
			connect.connect(this.previousPageButton, "onClick", this, "previousPage");
			tbar.addChild(this.previousPageButton);

			var pageSelectValues = {
				identifier: "id",
				items: []
			};
			pageSelectValues.items[0] = {
				name: this.messages.ajaxViewer_unknownPageCount,
				id: 1
			};
			this.pageSelectDataStore = new ItemFileReadStore({
				data: pageSelectValues
			});
			this.pageSelect = new FilteringSelect({
				name: "pageSelect",
				store: this.pageSelectDataStore
			});
			this.pageSelect.tabIndex = -1;
			connect.connect(this.pageSelect, "onChange", this, "gotoPage");
			tbar.addChild(this.pageSelect);

			this.nextPageButton = new Button({
				label: "<img src=" + this.imagesDir + "/page_next_23.png>"
			});
			this.nextPageButton.domNode.title = this.messages.ajaxViewer_nextPage;
			this.nextPageButton.containerNode.firstChild.alt = this.messages.ajaxViewer_nextPage;
			this.nextPageButton.tabIndex = -1;
			connect.connect(this.nextPageButton, "onClick", this, "nextPage");
			tbar.addChild(this.nextPageButton);

			this.lastPageButton = new Button({
				label: "<img src=" + this.imagesDir + "/page_gotolast_23.png>"
			});
			this.lastPageButton.domNode.title = this.messages.ajaxViewer_lastPage;
			this.lastPageButton.containerNode.firstChild.alt = this.messages.ajaxViewer_lastPage;
			this.lastPageButton.tabIndex = -1;
			connect.connect(this.lastPageButton, "onClick", this, "lastPage");
			tbar.addChild(this.lastPageButton);

			var tbarSpacer = new ToolbarSeparator();
			tbar.addChild(tbarSpacer);

			this.zoomOutButton = new Button({
				label: "<img src=" + this.imagesDir + "/zoom_out_23.png>"
			});
			this.zoomOutButton.domNode.title = this.messages.ajaxViewer_zoomOut;
			this.zoomOutButton.containerNode.firstChild.alt = this.messages.ajaxViewer_zoomOut;
			this.zoomOutButton.tabIndex = -1;
			connect.connect(this.zoomOutButton, "onClick", this, "zoomOut");
			tbar.addChild(this.zoomOutButton);

			var zoomSelectValues = {
				identifier: "id",
				items: []
			};
			zoomSelectValues.items[0] = {
				name: this.messages.ajaxViewer_25percent,
				id: 1
			};
			zoomSelectValues.items[1] = {
				name: this.messages.ajaxViewer_50percent,
				id: 2
			};
			zoomSelectValues.items[2] = {
				name: this.messages.ajaxViewer_75percent,
				id: 3
			};
			zoomSelectValues.items[3] = {
				name: this.messages.ajaxViewer_100percent,
				id: 4
			};
			zoomSelectValues.items[4] = {
				name: this.messages.ajaxViewer_150percent,
				id: 5
			};
			zoomSelectValues.items[5] = {
				name: this.messages.ajaxViewer_200percent,
				id: 6
			};
			zoomSelectValues.items[6] = {
				name: this.messages.ajaxViewer_300percent,
				id: 7
			};
			zoomSelectValues.items[7] = {
				name: this.messages.ajaxViewer_400percent,
				id: 8
			};
			zoomSelectValues.items[8] = {
				name: this.messages.ajaxViewer_fitWidth,
				id: 9
			};
			zoomSelectValues.items[9] = {
				name: this.messages.ajaxViewer_fitHeight,
				id: 10
			};
			zoomSelectValues.items[10] = {
				name: this.messages.ajaxViewer_fitPage,
				id: 11
			};

			this.zoomSelectDataStore = new ItemFileReadStore({
				data: zoomSelectValues
			});
			this.zoomSelect = new FilteringSelect({
				name: "zoomCustom",
				store: this.zoomSelectDataStore
			});
			this.zoomSelect.tabIndex = -1;
			connect.connect(this.zoomSelect, "onChange", this, "zoomCustom");
			tbar.addChild(this.zoomSelect);

			this.zoomInButton = new Button({
				label: "<img src=" + this.imagesDir + "/zoom_in_23.png>"
			});
			this.zoomInButton.domNode.title = this.messages.ajaxViewer_zoomIn;
			this.zoomInButton.containerNode.firstChild.alt = this.messages.ajaxViewer_zoomIn;
			this.zoomInButton.tabIndex = -1;
			connect.connect(this.zoomInButton, "onClick", this, "zoomIn");
			tbar.addChild(this.zoomInButton);

			var tbarSpacer = new ToolbarSeparator();
			tbar.addChild(tbarSpacer);

			this.rotateLeftButton = new Button({
				label: "<img src=" + this.imagesDir + "/page_rotate270_23.png>"
			});
			this.rotateLeftButton.domNode.title = this.messages.ajaxViewer_rotate270;
			this.rotateLeftButton.containerNode.firstChild.alt = this.messages.ajaxViewer_rotate270;
			this.rotateLeftButton.tabIndex = -1;
			connect.connect(this.rotateLeftButton, "onClick", this, "rotateLeft");
			tbar.addChild(this.rotateLeftButton);

			this.rotateRightButton = new Button({
				label: "<img src=" + this.imagesDir + "/page_rotate90_23.png>"
			});
			this.rotateRightButton.domNode.title = this.messages.ajaxViewer_rotate90;
			this.rotateRightButton.containerNode.firstChild.alt = this.messages.ajaxViewer_rotate90;
			this.rotateRightButton.tabIndex = -1;
			connect.connect(this.rotateRightButton, "onClick", this, "rotateRight");
			tbar.addChild(this.rotateRightButton);

			this.rotate180Button = new Button({
				label: "<img src=" + this.imagesDir + "/page_rotate180_23.png>"
			});
			this.rotate180Button.domNode.title = this.messages.ajaxViewer_rotate180;
			this.rotate180Button.containerNode.firstChild.alt = this.messages.ajaxViewer_rotate180;
			this.rotate180Button.tabIndex = -1;
			connect.connect(this.rotate180Button, "onClick", this, "rotate180");
			tbar.addChild(this.rotate180Button);

			var tbarSpacer = new ToolbarSeparator();
			tbar.addChild(tbarSpacer);

			this.darkenButton = new Button({
				label: "<img src=" + this.imagesDir + "/decrease_brightness_23.png>"
			});
			this.darkenButton.domNode.title = this.messages.ajaxViewer_darken;
			this.darkenButton.containerNode.firstChild.alt = this.messages.ajaxViewer_darken;
			this.darkenButton.tabIndex = -1;
			connect.connect(this.darkenButton, "onClick", this, "darken");
			tbar.addChild(this.darkenButton);

			this.lightenButton = new Button({
				label: "<img src=" + this.imagesDir + "/increase_brightness_23.png>"
			});
			this.lightenButton.domNode.title = this.messages.ajaxViewer_lighten;
			this.lightenButton.containerNode.firstChild.alt = this.messages.ajaxViewer_lighten;
			this.lightenButton.tabIndex = -1;
			connect.connect(this.lightenButton, "onClick", this, "lighten");
			tbar.addChild(this.lightenButton);

			this.dullButton = new Button({
				label: "<img src=" + this.imagesDir + "/decrease_contrast_23.png>"
			});
			this.dullButton.domNode.title = this.messages.ajaxViewer_lessContrast;
			this.dullButton.containerNode.firstChild.alt = this.messages.ajaxViewer_lessContrast;
			this.dullButton.tabIndex = -1;
			connect.connect(this.dullButton, "onClick", this, "dull");
			tbar.addChild(this.dullButton);

			this.sharpenButton = new Button({
				label: "<img src=" + this.imagesDir + "/increase_contrast_23.png>"
			});
			this.sharpenButton.domNode.title = this.messages.ajaxViewer_moreContrast;
			this.sharpenButton.containerNode.firstChild.alt = this.messages.ajaxViewer_moreContrast;
			this.sharpenButton.tabIndex = -1;
			connect.connect(this.sharpenButton, "onClick", this, "sharpen");
			tbar.addChild(this.sharpenButton);

			this.invertButton = new Button({
				label: "<img src=" + this.imagesDir + "/page_invert_23.png>"
			});
			this.invertButton.domNode.title = this.messages.ajaxViewer_invert;
			this.invertButton.containerNode.firstChild.alt = this.messages.ajaxViewer_invert;
			this.invertButton.tabIndex = -1;
			connect.connect(this.invertButton, "onClick", this, "invert");
			tbar.addChild(this.invertButton);

			if (this.enableAnnotations) {

				var tbarSpacer = new ToolbarSeparator();
				tbar.addChild(tbarSpacer);

				this.createHighlightButton = new Button({
					label: "<img src=" + this.imagesDir + "/hilite_23.png>"
				});
				this.createHighlightButton.domNode.title = this.messages.ajaxViewer_createHighlight;
				this.createHighlightButton.containerNode.firstChild.alt = this.messages.ajaxViewer_createHighlight;
				this.createHighlightButton.tabIndex = -1;
				connect.connect(this.createHighlightButton, "onClick", this, "createHighlight");
				tbar.addChild(this.createHighlightButton);

				this.createNoteButton = new Button({
					label: "<img src=" + this.imagesDir + "/annot_new_23.png>"
				});
				this.createNoteButton.domNode.title = this.messages.ajaxViewer_createNote;
				this.createNoteButton.containerNode.firstChild.alt = this.messages.ajaxViewer_createNote;
				this.createNoteButton.tabIndex = -1;
				connect.connect(this.createNoteButton, "onClick", this, "createNote");
				tbar.addChild(this.createNoteButton);

				this.editPropertiesButton = new Button({
					label: "<img src=" + this.imagesDir + "/annotation_properties_23.png>"
				});
				this.editPropertiesButton.domNode.title = this.messages.ajaxViewer_editAnnotation;
				this.editPropertiesButton.containerNode.firstChild.alt = this.messages.ajaxViewer_editAnnotation;
				this.editPropertiesButton.tabIndex = -1;
				connect.connect(this.editPropertiesButton, "onClick", this, "editProperties");
				tbar.addChild(this.editPropertiesButton);

				this.deleteButton = new Button({
					label: "<img src=" + this.imagesDir + "/delete_23.png>"
				});
				this.deleteButton.domNode.title = this.messages.ajaxViewer_deleteAnnotation;
				this.deleteButton.containerNode.firstChild.alt = this.messages.ajaxViewer_deleteAnnotation;
				this.deleteButton.tabIndex = -1;
				connect.connect(this.deleteButton, "onClick", this, "deleteAnnotation");
				tbar.addChild(this.deleteButton);

				tbar.startup();
			}

		},

		/**
		 * Sets up the full page frame. Because the HTML template already constructed the DOM objects for it, only some
		 * resizing is needed.
		 * 
		 * @deprecated As of 2.0.2. This method will be made private.
		 */
		buildPageFrame: function() {
			this.logDebug("ajaxViewer.buildPageFrame");
			document.body.scrollable = false;
			this.onresize();
			//resizeHandles = new ResizeHandles(this.ajaxViewerPageFrame);
			this.connect(this.ajaxViewerPageFrame, "onmousedown", "onPageSelected");
		},

		/**
		 * Causes the viewer to display the given document.
		 * 
		 * @deprecated As of 2.0.2. Use setItem and showItem.
		 */
		displayDocument: function(docUrl, docName, contentType, serverType) {
			this.logDebug("ajaxViewer.displayDocument ", docUrl);
			this.docUrl = docUrl;
			if (docName != undefined) {
				this.docName = docName;
			} else {
				this.docName = docUrl;
			}
			if (contentType != undefined) {
				this.contentType = contentType;
			} else {
				this.contentType = "";
			}
			if (serverType != undefined) {
				this.serverType = serverType;
			} else {
				this.serverType = "";
			}
			this.pageNo = this._pageNumber;
			this.scale = 1.0;
			this.page = new Array(); // reset all page information.
			this.ajaxViewerPage.style.display = "none";
			this.errorLoadingDocumentPage.style.display = "none";
			this.loadingDocumentPage.style.display = "inline";

			// Note: page count is retrieved as part of view services info, to reduce calls.  If this becomes a problem (due to fast
			// first page, change the view services info call to not retrieve page count, and add the retrievePageCount back in.
			//	this.retrievePageCount();
			this.retrieveViewServicesInfo();
			// Note: displayPage is delayed until after viewServicesInfo completes to avoid multiple session creations
			this.updateToolStates();

			// Note: annotations are not currently supported in AjaxViewer
			//	this.annotationSet = annotationSet;

			if (this.annotationSet != null) {
				connect.connect(this.annotationSet, "selectAnnotation", this, "onAnnotationSelected");
			}
		},

		/**
		 * Retrieves the page count of the document from the server. Once the page count is returned, update the
		 * toolbar.
		 * 
		 * @deprecated As of 2.0.2. This method will be made private.
		 */
		retrievePageCount: function() {
			this.logDebug("ajaxViewer.retrievePageCount");

			var noProxyDocUrl = this.docUrl;
			if (this.docUrl.indexOf("/wc") > 0) {
				noProxyDocUrl = this.docUrl.substring(this.docUrl.indexOf("/wc"), this.docUrl.length);
			}
			xhr.get({
				url: Request.setSecurityToken(ecm.model.desktop.getServicesUrl() + "/getPageCount.do?docUrl=" + encodeURIComponent(noProxyDocUrl) + "&contentType=" + this.contentType + "&serverType=" + this.serverType),
				handleAs: "json",
				load: lang.hitch(this, function(response) {
					this.logDebug("ajaxViewer.retrievePageCount received " + response.pageCount);
					this.pageCount = response.pageCount;
					this.updatePageSelect();
					this.updateToolStates();
				}),
				error: lang.hitch(this, function(error) {
					AjaxViewer.showServiceError(error);
					this.logDebug("ajaxViewer.retrievePageCount received error");
				}),
				mimetype: "text/json"
			});

			this.logDebug("ajaxViewer.retrievePageCount", "completed");
		},

		/**
		 * Retrieves viewing services information about the document from the server. When the information is returned,
		 * update the toolbar.
		 * 
		 * @deprecated As of 2.0.2. This method will be made private.
		 */
		retrieveViewServicesInfo: function() {
			this.logDebug("ajaxViewer.retrieveViewServicesInfo");

			var noProxyDocUrl = this.docUrl;
			if (this.docUrl.indexOf("/wc") > 0) {
				noProxyDocUrl = this.docUrl.substring(this.docUrl.indexOf("/wc"), this.docUrl.length);
			}

			xhr.get({
				url: Request.setSecurityToken(ecm.model.desktop.getServicesUrl() + "/getViewServicesInfo.do?docUrl=" + encodeURIComponent(noProxyDocUrl) + "&contentType=" + this.contentType + "&serverType=" + this.serverType),
				handleAs: "json",
				load: lang.hitch(this, function(response) {
					this.logDebug("ajaxViewer.retrieveViewServicesInfo received response: " + response);
					if (response.errors) {
						this.logError("load", response.errors);
						this.errorLoadingDocumentPage.style.display = "inline";
						this.loadingDocumentPage.style.display = "none";
						this.ajaxViewerPage.style.display = "none";
						if (response.errors.length > 0) {
							AjaxViewer.showServiceError(response.errors[0]);
						}
						this.onDocumentLoaded(response.errors[0]);
						return;
					}
					if (response.pageCount)
						this.pageCount = response.pageCount;
					if (response.canRotate)
						this.canRotate = response.canRotate;
					if (response.canEnhance)
						this.canEnhance = response.canEnhance;
					if (response.canInvert)
						this.canInvert = response.canInvert;
					if (response.canShowAnnotations)
						this.canShowAnnotations = response.canShowAnnotations;
					if (response.canBalance)
						this.canBalance = response.canBalance;
					if (response.canPrint)
						this.printable = response.canPrint;
					if (response.canManipulatePages)
						this.canManipulatePages = response.canManipulatePages;
					if (response.minScale)
						this.minScale = response.minScale;
					if (response.maxScale)
						this.maxScale = response.maxScale;

					this.updatePageSelect();
					this.updateToolStates();
					this.onDocumentLoaded();
					this.displayPage();
				}),
				error: lang.hitch(this, function(error) {
					this.logDebug("ajaxViewer.retrieveViewServicesInfo received error");
					this.errorLoadingDocumentPage.style.display = "inline";
					this.loadingDocumentPage.style.display = "none";
					this.ajaxViewerPage.style.display = "none";
					this.onDocumentLoaded(error);
				}),
				mimetype: "text/json"
			});

			this.logDebug("ajaxViewer.retrieveViewServicesInfo", "completed");
		},

		/* Invokes WCLogger.dump */
		_dump: function() {
			WCLogger.dump();
		},

		/**
		 * Event method that is invoked when a page is selected (that is, when the user clicks on the page rather than
		 * clicking on an annotation).
		 */
		onPageSelected: function() {
			this.logDebug("ajaxViewer.onPageSelected");
			if (this.annotationSet != null) {
				this.annotationSet.selectAnnotation(null);
			}
			return false;
		},

		/** Event method that is invoked when an annotation is selected */
		onAnnotationSelected: function() {
			this.logDebug("ajaxViewer.onAnnotationSelected");
			this.updateToolStates();
		},

		/**
		 * Repopulates the page drop-down with new page values.
		 * 
		 * @deprecated As of 2.0.2. This method will be made private.
		 */
		updatePageSelect: function() {
			this.logDebug("ajaxViewer.updatePageSelected");

			var pageSelectValues = {
				identifier: "id",
				items: []
			};
			for (var i = 0; i < this.pageCount; i++) {
				var pageNo = i + 1;
				pageSelectValues.items[i] = {
					id: pageNo,
					name: string.substitute(this.messages.ajaxViewer_nOfm, [
						i + 1,
						this.pageCount
					])
				};
			}
			this.pageSelectDataStore = new ItemFileReadStore({
				data: pageSelectValues
			});
			var oldPageSelectDomNode = this.pageSelect.domNode;
			this.pageSelect = new FilteringSelect({
				name: "pageSelect",
				store: this.pageSelectDataStore,
				tabIndex: -1
			}, oldPageSelectDomNode);
			connect.connect(this.pageSelect, "onChange", this, "gotoPage");
		},

		/**
		 * Handle save.
		 * 
		 * @deprecated As of 2.0.2. Use saveAnnotations.
		 */
		save: function() {
			this.logDebug("ajaxViewer.save");
		},

		/**
		 * Launches the print preview window.
		 */
		print: function() {
			this.logDebug("ajaxViewer.print");
			var url = ecm.model.desktop.getServicesUrl() + "/viewers/ajaxViewerPrint.jsp?docUrl=" + encodeURIComponent(this.docUrl) + "&docName=" + encodeURIComponent(this.docName) + "&pageCount=" + this.pageCount;
			var localUrl = location.href;
			if (localUrl.indexOf("debug=true") > -1) {
				url += "&debug=true";
			}
			document.printableView = window.open(Request.setSecurityToken(url), "printableView", "scrollbars=yes,resizable=yes,left=50,top=100,width=860,height=500", true);
		},

		/**
		 * Handles page reload.
		 */
		reload: function() {
			this.logDebug("ajaxViewer.reload");
			this.errorLoadingDocumentPage.style.display = "none";
			this.ajaxViewerPage.style.display = "none";
			this.ajaxViewerPage.href = null;
			this.loadingDocumentPage.style.display = "none";
			this.displayPage();
			this.updateToolStates();
		},

		/**
		 * Handles the first page <code>onClick</code> event.
		 */
		firstPage: function() {
			this.logDebug("ajaxViewer.firstPage");
			this.pageNo = 1;
			this.displayPage();
			this.updateToolStates();
		},

		/**
		 * Handles the previous page <code>onClick</code> event.
		 */
		previousPage: function() {
			this.logDebug("ajaxViewer.previousPage");
			if (this.pageNo > 1) {
				this.pageNo = this.pageNo - 1;
			}
			this.displayPage();
			this.updateToolStates();
		},

		/**
		 * Handles the page selection event.
		 * 
		 * @param i
		 *            The selected page number.
		 */
		gotoPage: function(i) {
			this.logDebug("ajaxViewer.gotoPage");
			if (i && this.pageNo != i) {
				this.pageNo = new Number(i); // since i is a string, this is needed
				this.displayPage();
				this.updateToolStates();
			}
		},

		/**
		 * Handles the next page <code>onClick</code> event.
		 */
		nextPage: function() {
			this.logDebug("ajaxViewer.nextPage");
			if (this.pageNo < this.pageCount) {
				this.pageNo = this.pageNo + 1;
			}
			this.displayPage();
			this.updateToolStates();
		},

		/**
		 * Handles the last page <code>onClick</code> event.
		 */
		lastPage: function() {
			this.logDebug("ajaxViewer.lastPage");
			this.pageNo = this.pageCount;
			this.displayPage();
			this.updateToolStates();
		},

		/**
		 * Handles the zoomOut <code>onClick</code> event.
		 */
		zoomOut: function() {
			this.logDebug("ajaxViewer.zoomOut");
			if (this.currentScaleSelection > 8) { // ie, one of the fits
				this.currentScaleSelection = 3; // 75%
			} else if (this.currentScaleSelection > 1) {
				this.currentScaleSelection--;
			}
			this.updateScaleFromSelection();
			this.displayPage();
			this.updateToolStates();
		},

		/**
		 * Handles the zoom customer selection event.
		 * 
		 * @param zoom
		 *            The zoom selection, which is a value between 1 and 11. Each value represents a specific zoom
		 *            percentage or mode as listed: 1=25%, 2=50%, 3=75%, 4=100%, 5=150%, 6=200%, 7=300%, 8=400%, 9=Fit
		 *            width, 10=Fit height, 11=Fit page.
		 */
		zoomCustom: function(zoom) {
			this.logDebug("ajaxViewer.zoomCustom");
			if (zoom != this.currentScaleSelection) {
				this.currentScaleSelection = zoom;
				this.updateScaleFromSelection();
				this.displayPage();
				this.updateToolStates();
			}
		},

		/**
		 * Handles the zoomIn <code>onClick</code> event.
		 */
		zoomIn: function() {
			this.logDebug("ajaxViewer.zoomIn");
			if (this.currentScaleSelection > 8) { // ie, one of the fits
				this.currentScaleSelection = 5; // 125%
			} else if (this.currentScaleSelection < 8) { // corresponds to 400%
				this.currentScaleSelection++;
			}
			this.updateScaleFromSelection();
			this.displayPage();
			this.updateToolStates();
		},

		/**
		 * Updates the scale according to the current scale selection
		 * 
		 * @deprecated As of 2.0.2. This method will be made private.
		 */
		updateScaleFromSelection: function() {
			this.logDebug("ajaxViewer.updateScaleFromSelection");
			var zoom = this.currentScaleSelection;
			if (zoom == 1) { // 25%
				this.scale = 0.25;
			} else if (zoom == 2) { // 50%
				this.scale = 0.5;
			} else if (zoom == 3) { // 75%
				this.scale = 0.75;
			} else if (zoom == 4) { // 100%
				this.scale = 1.0;
			} else if (zoom == 5) { // 150%
				this.scale = 1.5;
			} else if (zoom == 6) { // 200%
				this.scale = 2.0;
			} else if (zoom == 7) { // 300%
				this.scale = 3.0;
			} else if (zoom == 8) { // 400%
				this.scale = 4.0;
			} else if (zoom == 9) { // fit width
				this.scale = -1.0;
			} else if (zoom == 10) { // fit height
				this.scale = -2.0;
			} else if (zoom == 11) { // fit page
				this.scale = -3.0;
			}
			this.displayableWidth = this.ajaxViewerPageFrame.offsetWidth - 12; // the 12 accounts for margins around the image
			this.displayableHeight = this.ajaxViewerPageFrame.offsetHeight - 12;
			this.logDebug("ajaxViewer.updateScaleFromSelection", "set scale to " + this.scale);
		},

		/**
		 * Handles rotate left <code>onClick</code> event
		 */
		rotateLeft: function() {
			this.logDebug("ajaxViewer.rotateLeft");
			page = this.getPageInfo(this.pageNo);
			page.rotation--;
			if (page.rotation < 0) {
				page.rotation = 3;
			}
			this.displayPage();
			this.updateToolStates();
		},

		/**
		 * Handles rotate right <code>onClick</code> event
		 */
		rotateRight: function() {
			this.logDebug("ajaxViewer.rotateRight");
			page = this.getPageInfo(this.pageNo);
			page.rotation++;
			if (page.rotation > 3) {
				page.rotation = 0;
			}
			this.displayPage();
			this.updateToolStates();
		},

		/**
		 * Handles the <code>onClick</code> event to rotate the page 180 degrees.
		 */
		rotate180: function() {
			this.logDebug("ajaxViewer.rotate180");
			page = this.getPageInfo(this.pageNo);
			page.rotation += 2;
			if (page.rotation > 3) {
				page.rotation -= 4;
			}
			this.displayPage();
			this.updateToolStates();
		},

		/**
		 * Darkens the current page.
		 */
		darken: function() {
			this.logDebug("ajaxViewer.darken");
			page = this.getPageInfo(this.pageNo);
			if (page.brightness > 0) {
				page.brightness -= 0.20;
			}
			this.displayPage();
			this.updateToolStates();
		},

		/**
		 * Lightens the current page.
		 */
		lighten: function() {
			this.logDebug("ajaxViewer.lighten");
			page = this.getPageInfo(this.pageNo);
			if (page.brightness < 2.0) {
				page.brightness += 0.20;
			}
			this.displayPage();
			this.updateToolStates();
		},

		/**
		 * Reduces contrast on the current page.
		 */
		dull: function() {
			this.logDebug("ajaxViewer.dull");
			page = this.getPageInfo(this.pageNo);
			if (page.contrast > 0.0) {
				page.contrast -= 0.20;
			}
			this.displayPage();
			this.updateToolStates();
		},

		/**
		 * Increases contrast on the current page
		 */
		sharpen: function() {
			this.logDebug("ajaxViewer.sharpen");
			page = this.getPageInfo(this.pageNo);
			if (page.contrast < 2.0) {
				page.contrast += 0.20;
			}
			this.displayPage();
			this.updateToolStates();
		},

		/**
		 * Inverts the current page.
		 */
		invert: function() {
			this.logDebug("ajaxViewer.invert");
			this.inverted = !this.inverted;
			this.displayPage();
			this.updateToolStates();
		},

		/**
		 * Creates a highlight annotation
		 * 
		 * @private
		 */
		createHighlight: function() {
			this.logDebug("ajaxViewer.createHighlight");
			var annotation = new HighlightAnnotation();
			annotation.pageNo = this.pageNo;
			this.annotationSet.addAnnotation(annotation);
			this.displayAnnotations();
		},

		/**
		 * Creates a note annotation
		 * 
		 * @private
		 */
		createNote: function() {
			this.logDebug("ajaxViewer.createNote");
			var annotation = new NoteAnnotation();
			annotation.pageNo = this.pageNo;
			this.annotationSet.addAnnotation(annotation);
			this.displayAnnotations();
		},

		/**
		 * Edit properties of selected annotation
		 * 
		 * @private
		 */
		editProperties: function() {
			this.logDebug("ajaxViewer.editProperties");
			this.propertiesDialog = dojo.widget.createWidget("FloatingPane", {
				"id": "propertiesPanel",
				"title": this.messages.ajaxViewer_editAnnotationTitle,
				"constrainToContainer": "true",
				"resizable": "true",
				"displayCloseAction": "true"
			});
			this.propertiesDialog.domNode.style.position = "absolute";
			this.propertiesDialog.domNode.style.left = "100";
			this.propertiesDialog.domNode.style.top = "100";
			this.domNode.appendChild(this.propertiesDialog.domNode);
			this.propertiesDialog.resizeTo(300, 200);
			this.propertiesDialog.setContent(this.annotationSet.selectedAnnotation.getPropertiesPanel());
			this.propertiesDialog.show();
		},

		/**
		 * Deletes the selected annotation
		 * 
		 * @private
		 */
		deleteAnnotation: function() {
			this.logDebug("ajaxViewer.deleteAnnotation");
			this.annotationSet.removeAnnotation(this.annotationSet.selectedAnnotation);
			this.displayAnnotations();
			this.updateToolStates();
		},

		/**
		 * Update toolbar tool state (enable, disable, selected, selected item) according to current state of document
		 * being viewed.
		 * 
		 * @deprecated As of 2.0.2. This method will be made private.
		 */
		updateToolStates: function() {
			this.logDebug("ajaxViewer.updateToolStates");

			page = this.getPageInfo(this.pageNo);

			// Save
			if (this.enableAnnotations) {
				if (this.canEditAnnotations()) {
					this.saveButton.setAttribute('disabled', false);
				} else {
					this.saveButton.setAttribute('disabled', true);
				}
			}

			// Print
			if (this.canPrint()) {
				this.printButton.setAttribute('disabled', false);
			} else {
				this.printButton.setAttribute('disabled', true);
			}

			// The paging tools
			if (this.pageNo <= 1) {
				this.firstPageButton.setAttribute('disabled', true);
				this.previousPageButton.setAttribute('disabled', true);
			} else {
				this.firstPageButton.setAttribute('disabled', false);
				this.previousPageButton.setAttribute('disabled', false);
			}
			this.pageSelect.setValue(this.pageNo);
			if (this.pageNo >= this.pageCount) {
				this.nextPageButton.setAttribute('disabled', true);
				this.lastPageButton.setAttribute('disabled', true);
			} else {
				this.nextPageButton.setAttribute('disabled', false);
				this.lastPageButton.setAttribute('disabled', false);
			}

			// The zooming tools
			if (this.currentScaleSelection > 1) {
				this.zoomOutButton.setAttribute('disabled', false);
			} else {
				this.zoomOutButton.setAttribute('disabled', true);
			}
			this.zoomSelect.setValue(this.currentScaleSelection);
			if (this.currentScaleSelection < 8 || this.currentScaleSelection > 8) { // 8 corresponds to 400%
				this.zoomInButton.setAttribute('disabled', false);
			} else {
				this.zoomInButton.setAttribute('disabled', true);
			}

			// Rotation tools
			if (this.canRotate) {
				this.rotateLeftButton.setAttribute('disabled', false);
				this.rotateRightButton.setAttribute('disabled', false);
				this.rotate180Button.setAttribute('disabled', false);
			} else {
				this.rotateLeftButton.setAttribute('disabled', true);
				this.rotateRightButton.setAttribute('disabled', true);
				this.rotate180Button.setAttribute('disabled', true);
			}

			// Invert, enhance, contrast and brightness
			if (this.canBalance) {
				if (page.brightness > 0.0) {
					this.darkenButton.setAttribute('disabled', false);
				} else {
					this.darkenButton.setAttribute('disabled', true);
				}
				if (page.brightness < 2.0) {
					this.lightenButton.setAttribute('disabled', false);
				} else {
					this.lightenButton.setAttribute('disabled', true);
				}
				if (page.contrast > 0.0) {
					this.dullButton.setAttribute('disabled', false);
				} else {
					this.dullButton.setAttribute('disabled', true);
				}
				if (page.contrast < 2.0) {
					this.sharpenButton.setAttribute('disabled', false);
				} else {
					this.sharpenButton.setAttribute('disabled', true);
				}
			} else {
				this.darkenButton.setAttribute('disabled', true);
				this.lightenButton.setAttribute('disabled', true);
				this.dullButton.setAttribute('disabled', true);
				this.sharpenButton.setAttribute('disabled', true);
			}

			if (this.canInvert) {
				this.invertButton.setAttribute('disabled', false);
			} else {
				this.invertButton.setAttribute('disabled', true);
			}

			// Annotation tools
			if (this.enableAnnotations) {
				if (this.canCreateAnnotations()) {
					this.createNoteButton.setAttribute('disabled', false);
					this.createHighlightButton.setAttribute('disabled', false);
				} else {
					this.createNoteButton.setAttribute('disabled', true);
					this.createHighlightButton.setAttribute('disabled', true);
				}
				if (this.canEditAnnotations() && this.annotationSet != null && this.annotationSet.selectedAnnotation != null) {
					this.editPropertiesButton.setAttribute('disabled', false);
					this.deleteButton.setAttribute('disabled', false);
				} else {
					this.editPropertiesButton.setAttribute('disabled', true);
					this.deleteButton.setAttribute('disabled', true);
				}
			}

		},

		/**
		 * Returns <code>true</code> if the document can be printed.
		 */
		canPrint: function() {
			// Note: The canPrint information from getViewServicesInfo is only valid for
			// for printing in Java.  Since print is done in Javascript, it isn't used here.
			if (this.printDocPrivilege == undefined) {
				return true;
			}
			return this.printDocPrivilege;
		},

		/**
		 * Returns true if annotations can be created.
		 * 
		 * @private
		 */
		canCreateAnnotations: function() {
			if (this.annotationSet == null) {
				return false;
			}
			return true;
		},

		/**
		 * Returns true if annotations can be edited.
		 * 
		 * @private
		 */
		canEditAnnotations: function() {
			if (this.annotationSet == null) {
				return false;
			}
			return true;
		},

		/**
		 * Invoked to update the displayed page after loading a document or performing an action on the document.
		 * 
		 * @deprecated As of 2.0.2. This method will be made private.
		 */
		displayPage: function() {
			this.logDebug("ajaxViewer.displayPage");
			this.ajaxViewerPage.onload = lang.hitch(this, function() {
				this.errorLoadingDocumentPage.style.display = "none";
				this.loadingDocumentPage.style.display = "none";
				this.ajaxViewerPage.style.display = "inline";
			});
			this.ajaxViewerPage.onerror = lang.hitch(this, function() {
				this.errorLoadingDocumentPage.style.display = "inline";
				this.loadingDocumentPage.style.display = "none";
				this.ajaxViewerPage.style.display = "none";
				AjaxViewer.showError("ajaxViewer_getPage_failed");
			});
			page = this.getPageInfo(this.pageNo);

			var noProxyDocUrl = this.docUrl;
			if (this.docUrl.indexOf("/wc") > 0) {
				noProxyDocUrl = this.docUrl.substring(this.docUrl.indexOf("/wc"), this.docUrl.length);
			}

			this.ajaxViewerPage.src = ecm.model.desktop.getServicesUrl() + "/getPageImage.do?docUrl=" + encodeURIComponent(noProxyDocUrl) + "&pageImageCacheId=" + this._pageImageCacheId + "&contentType=" + this.contentType + "&serverType=" + this.serverType + "&pageNo=" + this.pageNo + "&scale=" + this.scale + "&rotation=" + page.rotation + "&inverted=" + this.inverted + "&brightness=" + page.brightness + "&contrast=" + page.contrast + "&displayableWidth=" + this.displayableWidth + "&displayableHeight=" + this.displayableHeight;
			this.ajaxViewerPage.src = Request.setSecurityToken(this.ajaxViewerPage.src);
			this.logDebug("ajaxViewer.displayPage", "set ajaxViewerPage.src to " + this.ajaxViewerPage.src);
			if (this.renderAhead && this.pageNo + 1 <= this.pageCount) {
				page = this.getPageInfo(this.pageNo + 1);
				this.nextViewerPage.src = ecm.model.desktop.getServicesUrl() + "/getPageImage.do?docUrl=" + encodeURIComponent(noProxyDocUrl) + "&pageImageCacheId=" + this._pageImageCacheId + "&contentType=" + this.contentType + "&serverType=" + this.serverType + "&pageNo=" + (this.pageNo + 1) + "&scale=" + this.scale + "&rotation=" + page.rotation + "&inverted=" + this.inverted + "&brightness=" + page.brightness + "&contrast=" + page.contrast + "&displayableWidth=" + this.displayableWidth + "&displayableHeight=" + this.displayableHeight;
				this.nextViewerPage.src = Request.setSecurityToken(this.nextViewerPage.src);
			}
			this.displayAnnotations();
		},

		/**
		 * Creates a page info object.
		 * 
		 * @deprecated As of 2.0.2. This method will be made private.
		 */
		getPageInfo: function(pageNo) {
			page = this.page[pageNo];
			if (page) {
				return page;
			}
			page = {
				rotation: 0,
				contrast: 1.0,
				brightness: 1.0
			};
			this.page[pageNo] = page;
			return page;
		},

		/**
		 * Displays the annotations for the selected page on top of the document page.
		 * 
		 * @private
		 */
		displayAnnotations: function() {
			this.logDebug("ajaxViewer.displayAnnotations");
			if (this.annotationSet != null) {
				this.annotationSet.scale = this.scale;
				for (var i = 0; i < this.annotationSet.getAnnotationCount(); i++) {
					var annotation = this.annotationSet.getAnnotation(i);
					if (annotation.pageNo == this.pageNo) {
						annotation.showAnnotation(this.ajaxViewerPageFrame);
						annotation.updateView();
					} else {
						annotation.hideAnnotation();
					}
				}
			}
		},

		lastClientHeight: 0,
		lastClientWidth: 0,

		/**
		 * Handle resize of the top level DOM node, resizing the page area to fit.
		 * 
		 * @deprecated As of 2.0.2. This method will be made private.
		 */
		onresize: function() {
			var methodName = "onresize";
			this.logEntry(methodName);
			this.resize();
			this.logExit(methodName);
		},

		/** @private */
		resize: function() {
			var methodName = "resize";
			this.logEntry(methodName);

			// To avoid infinite loops, remember the last window's size and avoid resizing if
			// the window has not changed in size
			var fullmb = domGeom.getMarginBox(this.domNode);
			if (fullmb.h != this.lastClientHeight || fullmb.w != this.lastClientWidth) {
				this.lastClientHeight = fullmb.h;
				this.lastClientWidth = fullmb.w;
				var tbmb = domGeom.getMarginBox(this.ajaxViewerToolbar);
				domGeom.setMarginBox(this.ajaxViewerPageFrame, {
					w: fullmb.w,
					h: fullmb.h - tbmb.h
				});
			}

			this.logExit(methodName);
		},

		/** @private */
		layout: function() {
			var methodName = "layout";
			this.logEntry(methodName);
			this.resize();
			this.logExit(methodName);
		}
	});

	/**
	 * Shows an error message
	 * 
	 * @message The message string to show in the error dialog.
	 * @private
	 */
	AjaxViewer.showError = function(message) {
		var errorDialog = new ErrorDialog({
			onHide: lang.hitch(this, function() {
				// stub.
			})
		});

		var message = Message.createErrorMessage(message);
		errorDialog.showMessage(message);
	};

	/**
	 * Shows a service error message
	 * 
	 * @param message
	 *            The message string to show in the error dialog.
	 * @private
	 */
	AjaxViewer.showServiceError = function(error) {
		var errorDialog = new ErrorDialog({
			onHide: lang.hitch(this, function() {
				// stub.
			})
		});

		var message = new Message({
			id: "id???",
			number: error.number,
			level: 4,
			text: error.text,
			explanation: error.explanation,
			userResponse: error.userResponse,
			adminResponse: error.adminResponse,
			moreInformation: error.moreInformation
		});
		errorDialog.showMessage(message);
	};

	return AjaxViewer;
});
