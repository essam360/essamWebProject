/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/dom-class",
	"dojo/dom-attr",
	"dojo/dom-construct",
	"dojo/dom-geometry",
	"dojo/has",
	"dojo/_base/sniff",
	"dijit/_Widget",
	"ecm/LoggerMixin",
	"ecm/model/Desktop",
	"ecm/model/Request"
], //
function(declare, //
lang, //
domClass, //
domAttr, //
domConstruct, //
domGeom, //
has, //
sniff, //
_Widget, //
LoggerMixin, //
Desktop, //
Request) {

	/**
	 * @name ecm.widget.ItemPreviewPane
	 * @class Provides a widget that displays a preview of the content for an item.
	 * @augments dijit._Widget, ecm.LoggerMixin
	 */
	var ItemPreviewPane = declare("ecm.widget.ItemPreviewPane", [
		_Widget,
		LoggerMixin
	], {
		/** @lends ecm.widget.ItemPreviewPane.prototype */

		_item: null,

		_thumbnailRequest: null,

		_thumbnailRequestItem: null,

		_nextThumbnailItem: null,

		previewWidth: 200,

		previewHeight: 200,

		postCreate: function() {
			this.logEntry("postCreate");
			this.inherited(arguments);

			domClass.add(this.domNode, "ecmItemPreviewPane");
			this.containerDiv = domConstruct.create("div", {
				'class': "imageContainer"
			});
			domConstruct.place(this.containerDiv, this.domNode, "only");

			this.logExit("postCreate");
		},

		setItem: function(item) {
			this.logEntry("setItem", item);

			if (this._item != item) {
				this._item = item;

				if (this._item) {
					this._updateView();
				} else {
					domConstruct.empty(this.containerDiv);
					this.thumbnailImg = null;
				}
			}

			this.logExit("setItem");
		},

		_updateView: function() {
			var mimeClass = this._item.getMimeClass();
			domConstruct.empty(this.containerDiv);

			if (mimeClass == "ftEntryTemplate" || mimeClass == "ftFormTemplate" || mimeClass == "ftCustomObjectEntryTemplate" || mimeClass == "ftWorkflow" || mimeClass == "ftTracker" || mimeClass == "ftWorkItem" || mimeClass == "ftPolicyDocument" || mimeClass == "ftPolicyWorkflow" || mimeClass == "ftFormData") {
				this.thumbnailImg = domConstruct.create("img", {
					'class': "ftDefaultLarge",
					alt: this._item.mimetype == "folder" ? ecm.messages.folders_filed_in_folder_col_hdr : this._item.mimetype,
					title: this._item.mimetype == "folder" ? ecm.messages.folders_filed_in_folder_col_hdr : this._item.mimetype,
					src: Desktop.getServicesUrl() + "/ecm/widget/resources/images/spacer.gif"
				});

				domConstruct.place(this.thumbnailImg, this.containerDiv, "only");
			} else if (mimeClass == "dijitIconFolderClosed") {
				this.thumbnailImg = domConstruct.create("img", {
					'class': "ftFolderLarge",
					alt: this._item.mimetype == "folder" ? ecm.messages.folders_filed_in_folder_col_hdr : this._item.mimetype,
					title: this._item.mimetype == "folder" ? ecm.messages.folders_filed_in_folder_col_hdr : this._item.mimetype,
					src: Desktop.getServicesUrl() + "/ecm/widget/resources/images/spacer.gif"
				});

				domConstruct.place(this.thumbnailImg, this.containerDiv, "only");
			} else if (this._item.isFolder() || this._item.isDocumentEntryTemplate() || this._item.isFolderEntryTemplate() || this._item.isDeclareRecordEntryTemplate() || mimeClass == "ftDocumentEntryTemplate" || mimeClass == "ftFolderEntryTemplate" || mimeClass == "ftIcnDocumentEntryTemplate" || mimeClass == "ftIcnFolderEntryTemplate" || mimeClass == "ftDeclareRecordEntryTemplate" || mimeClass == "ftSearchStored" || mimeClass == "ftSearchTemplate" || mimeClass == "ftUnifiedSearch" || mimeClass == "ftNoContent" || mimeClass == "ftExternalFile" || mimeClass == "ftAudio" || mimeClass == "ftVideo" || mimeClass == "ftCompressed" || mimeClass == "ecmTeamspaceIcon" || mimeClass == "ftAfp" || this._item.mimetype == "application/line") {
				this.thumbnailImg = domConstruct.create("img", {
					'class': mimeClass + "Large",
					alt: this._item.mimetype == "folder" ? ecm.messages.folders_filed_in_folder_col_hdr : this._item.mimetype,
					title: this._item.mimetype == "folder" ? ecm.messages.folders_filed_in_folder_col_hdr : this._item.mimetype,
					src: Desktop.getServicesUrl() + "/ecm/widget/resources/images/spacer.gif"
				});

				domConstruct.place(this.thumbnailImg, this.containerDiv, "only");
			} else {
				// First check to see if the thumbnail content is contained in the item already. If so,
				// we will render the thumbnail content without calling any thumbnail generation code.
				var thumbnail = this._item.getValue("thumbnail");
				if (!thumbnail && this._item._previewThumbnail && this._item._previewThumbnail != null) {
					thumbnail = this._item._previewThumbnail;
				}

				if (thumbnail && thumbnail.image && thumbnail.image.length > 0) {
					this.thumbnailImg = this._createImg(thumbnail.image);
					domConstruct.place(this.thumbnailImg, this.containerDiv, "only");
				} else {
					if (lang.isFunction(this.constructor.customThumbnailFunc)) {
						var imgSrc = this.constructor.customThumbnailFunc(this._item, this.containerDiv);
						// If we have image content we should use it to create the HTML IMG element. If not,
						// we will use the default thumbnail generator.
						if (imgSrc) {
							this.thumbnailImg = this._createImg(imgSrc);
							domConstruct.place(this.thumbnailImg, this.containerDiv, "only");
						} else {
							this._generateThumbnail(mimeClass);
						}
					} else {
						this._generateThumbnail(mimeClass);
					}
				}
			}

			this.onCompleteRendering();
		},

		_handleThumbnailResponse: function(mimeClass, image) {
			if (this._loaderDiv)
				domClass.add(this._loaderDiv, "dijitHidden");
			if (image != null) {
				domAttr.remove(this.thumbnailImg, "width");
				domAttr.remove(this.thumbnailImg, "height");
				this.thumbnailImg.style.width = this.previewWidth;
				this.thumbnailImg.style.height = this.previewHeight;
				this.thumbnailImg.className = "previewImg";
				this.thumbnailImg.src = image;
			} else {
				this.thumbnailImg.src = Desktop.getServicesUrl() + "/ecm/widget/resources/images/spacer.gif";
				this.thumbnailImg.className = mimeClass + "Large";
			}

			this._thumbnailRequestCompleted(image);
		},

		/**
		 * Calls IBM Content Navigator's default thumbnail generator to create a thumbnail of the content associated
		 * with the item provided.
		 * 
		 * @private
		 * @since 2.0.3
		 */
		_generateThumbnail: function(mimeClass) {
			var params1 = this._item.getPageImageUrl(1, -3, 0, false, 1.0, 1.0, this.previewWidth, this.previewHeight);

			this._loaderDiv = domConstruct.create("div", {
				"class": "ecmLoading"
			}, this.containerDiv, "only");
			this._loaderDiv.innerHTML = "<svg class=\"ecmLoader\" viewBox=\"25 25 50 50\"><circle class=\"ecmLoader__path\" cx=\"50\" cy=\"50\" r=\"20\"></circle></svg>";

			this.thumbnailImg = domConstruct.create("img", {
				'class': 'dijitHidden',
				alt: "foo",//this._item.mimetype == "folder" ? ecm.messages.folders_filed_in_folder_col_hdr : this._item.mimetype,
				title: "foo",//this._item.mimetype == "folder" ? ecm.messages.folders_filed_in_folder_col_hdr : this._item.mimetype,
				src: Desktop.getServicesUrl() + "/ecm/widget/resources/images/busy_large.gif",
				onerror: function() {
					this.src = Desktop.getServicesUrl() + "/ecm/widget/resources/images/spacer.gif";
					this.className = mimeClass + "Large";
					if (has("ie") < 9) {
						this.style.width = 64;
						this.style.height = 64;
					}
				}
			});

			domConstruct.place(this.thumbnailImg, this.containerDiv);

			if (this._thumbnailRequestItem == null || (this._thumbnailRequest != null && this._thumbnailRequest.getReadyState() == 4)) {
				this._thumbnailRequestItem = this._item;
				this._nextThumbnailItem = null;

				var customCalled = false;
				if (lang.isFunction(this.constructor.thumbnailGeneratorFunc)) {
					var returnValue = this.constructor.thumbnailGeneratorFunc(this._item, lang.hitch(this, function(image) {
						this._handleThumbnailResponse(mimeClass, image);
					}), lang.hitch(this, function() {
						this._handleThumbnailResponse(mimeClass, null);
					}));

					if (returnValue === true) {
						customCalled = true;
					} else if (returnValue != null && returnValue instanceof Request) {
						this._thumbnailRequest = returnValue;
						customCalled = true;
					}
				}

				if (!customCalled) {
					if (this._item && this._item.repository && this._item.repository.type == "box") {
						this._thumbnailRequest = this._item.retrieveThumbnail(lang.hitch(this, function() {
							var thumbnail = this._item.getValue("thumbnail");

							if (thumbnail && thumbnail.image) {
								this._handleThumbnailResponse(mimeClass, thumbnail.image);
							} else {
								this._handleThumbnailResponse(mimeClass, null);
							}
						}), {
							backgroundRequest: true,
							requestFailedCallback: lang.hitch(this, function(response) {
								this._handleThumbnailResponse(mimeClass, null);
							})
						});
					} else {
						var params = this._item.getPageImageRequestParameters(1, -3, 0, false, 1.0, 1.0, this.previewWidth, this.previewHeight);
						params.jsonRequest = true;

						this._thumbnailRequest = ecm.model.Request.invokeService("getPageImage", "", params, lang.hitch(this, function(response) {
							this._handleThumbnailResponse(mimeClass, response.image);
						}), false, false, lang.hitch(this, function(response) {
							this._handleThumbnailResponse(mimeClass, null);
						}), true);
					}
				}
			} else {
				if (this._nextThumbnailItem != null) {
					this.logDebug("_updateView - replacing queued thumbnail request.");
				} else {
					this.logDebug("_updateView - queuing thumbnail request.");
				}

				this._nextThumbnailItem = this._item; // enqueue
			}
		},

		/**
		 * Creates an HTML IMG element from the image content provided.
		 * 
		 * @param imgContent
		 *            BASE64 encoded version of the raw image content.
		 * @private
		 * @since 2.0.3
		 */
		_createImg: function(imgContent) {
			var img = domConstruct.create("img", {
				'class': 'previewImg',
				alt: this._item.mimetype == "folder" ? ecm.messages.folders_filed_in_folder_col_hdr : this._item.mimetype,
				title: this._item.mimetype == "folder" ? ecm.messages.folders_filed_in_folder_col_hdr : this._item.mimetype,
				src: imgContent,
				onload: lang.hitch(this, function() {
					var marginBox = domGeom.getMarginBox(img);

					if (marginBox.h > this.previewHeight) {
						var scalePercentage = 1 - ((marginBox.h - this.previewHeight) / marginBox.h);
						var scaledHeight = Math.round(marginBox.h * scalePercentage);
						var scaledWidth = Math.round(marginBox.w * scalePercentage);

						img.style.width = scaledWidth;
						img.style.height = scaledHeight;
					} else if (marginBox.w > this.previewWidth) {
						var scalePercentage = 1 - ((marginBox.w - this.previewWidth) / marginBox.w);
						var scaledHeight = Math.round(marginBox.h * scalePercentage);
						var scaledWidth = Math.round(marginBox.w * scalePercentage);

						img.style.width = scaledWidth;
						img.style.height = scaledHeight;
					}
				}),
				onerror: function() {
					this.src = Desktop.getServicesUrl() + "/ecm/widget/resources/images/spacer.gif";
					this.className = mimeClass + "Large";
				}
			});
			return img;
		},

		_thumbnailRequestCompleted: function(image) {
			var methodName = "_thumbnailRequestCompleted";
			this.logEntry(methodName);

			var thumbnailRequestItem = this._thumbnailRequestItem;
			var nextThumbnailItem = this._nextThumbnailItem;

			if (image != null) {
				this.logDebug(methodName, "Caching thumbnail image.");
				this._thumbnailRequestItem._previewThumbnail = {
					image: image
				};
			}

			this._thumbnailRequestItem = null;
			this._nextThumbnailItem = null;

			if (thumbnailRequestItem != null && thumbnailRequestItem != this._item && nextThumbnailItem != null && nextThumbnailItem == this._item) {
				// call asynchronously, so that successive requests don't stack.
				this.logDebug(methodName, "Calling asycnhronously to _updateView to display the queued thumbnail.")
				setTimeout(lang.hitch(this, function() {
					this._updateView();
				}));
			}

			this.logExit(methodName);
		},

		onCompleteRendering: function() {
		}
	});

	/**
	 * This static method allows the <code>ItemPreviewPane</code> to use a custom thumbnail generator function. The
	 * custom thumbnail function will receive a handle to the {@link ecm.model.ContentItem} object containing the
	 * content. The thumbnail function should return a base64 encoded version of the image content that can be set as
	 * the "src" attribute on an HTML image tag. For example, todo: add example here. If the custom function does not
	 * support a particular item or the repository associated with the item it should return null. Returning null will
	 * cause the ItemPreviewPane to use IBM Content Navigator's default thumbnail generator instead.
	 * 
	 * @param itemPreviewThumbnailFunc
	 *            The function to call to retrieve or generate a thumbnail.
	 * @since 2.0.3
	 * @memberof ecm.widget.ItemPreviewPane
	 * @deprecated Use ItemPreviewPane.setThumbnailGenerator
	 */
	ItemPreviewPane.addCustomThumbnailGenerator = function(itemPreviewThumbnailFunc) {
		if (lang.isFunction(itemPreviewThumbnailFunc)) {
			ItemPreviewPane.customThumbnailFunc = itemPreviewThumbnailFunc;
		}
	};

	/**
	 * This static method allows the <code>ItemPreviewPane</code> to use a custom thumbnail generator function. The
	 * custom thumbnail function will receive three parameters:
	 * <ul>
	 * <li>item - An instance of {@link ecm.model.ContentItem}, containing the content.</li>
	 * <li>successCallback - A callback function to call, with a single parameter, containing the base64 encoded
	 * version of the image content for the thumbnail.</li>
	 * <li>failedCallback - A callback function to call, with no parameters, when the thumbnail could not be retrieved
	 * or generated.</li>
	 * </ul>
	 * The thumbnail function should return one of three possible values:
	 * <ul>
	 * <li>An instance of ecm.model.Request for the Request that was issued to generate the thumbnail.</li>
	 * <li>A value of (boolean) true, indicating that the function processed the image request in some way that did not
	 * require generating an instance of ecm.model.Request, and will call one of the callbacks.</li>
	 * <li>A value of null, indicating that the function is not going to process the image request, and that the
	 * default thumbnail generating should be used</li>
	 * </ul>
	 * 
	 * @param thumbnailGeneratorFunc
	 *            The function to call to retrieve or generate a thumbnail.
	 * @since 2.0.3.7
	 * @memberof ecm.widget.ItemPreviewPane
	 */
	ItemPreviewPane.setThumbnailGenerator = function(thumbnailGeneratorFunc) {
		if (lang.isFunction(thumbnailGeneratorFunc)) {
			ItemPreviewPane.thumbnailGeneratorFunc = thumbnailGeneratorFunc;
		}
	}

	return ItemPreviewPane;
});
