/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/dom-construct",
	"dijit/popup",
	"dijit/form/CheckBox",
	"dijit/TooltipDialog",
	"dojo/text!./templates/_FilmstripEntry.html"
], function(declare, lang, domConstruct, popup, CheckBox, TooltipDialog, template) {

	/**
	 * @name FilmstripEntry
	 * @class Represents an entry in the filmstrip list. A filmstrip entry consists of a thumbnail with a name displayed
	 *        beneath it. Similar actions are available to this entry as a {@link dijit.form.CheckBox} and
	 *        {@link dijit.form.Button}.
	 * @augments dijit.form.CheckBox
	 * @private
	 */
	return declare("FilmstripEntry", [
		CheckBox
	], {

		baseClass: "ecmFilmstripEntry",

		templateString: template,

		item: null,

		postCreate: function() {
			this.inherited(arguments);
			this.connect(this.focusNode, "oncontextmenu", "onContextMenu");
		},

		uninitialize: function() {
			if (this.tooltipDialog) {
				this.tooltipDialog.destroyRecursive();
			}
		},

		/**
		 * Event fired when right click on the film strip entry.
		 */
		onContextMenu: function() {
		},

		/**
		 * Sets the item associated with this filmstrip entry.
		 * 
		 * @param content
		 *            Handle to the item (from a store).
		 */
		_setItemAttr: function(/*Object*/content) {
			this.item = content;
		},

		/**
		 * Sets the label for this filmstrip entry.
		 * 
		 * @param content
		 *            String to insert into the label area.
		 */
		_setLabelAttr: function(/*String*/content) {
			this.inherited(arguments, [
				this._cv ? this._cv(content) : content
			]);
			this.containerNode.innerHTML = content;
		},

		/**
		 * Set the thumbnail for this filmstrip entry. The thumbnail should be an HTML img as a string.
		 * 
		 * @param content
		 *            String representation of an html img.
		 */
		_setThumbnailAttr: function(/*String*/content) {
			this.inherited(arguments);

			var className = this.mimeClass + "Large";
			if (this.item.isFolder()) {
				var item = this.item;
				if (item.item) {
					item = item.item;
				}
				if (item.isExternal) {
					className = "ftFolderSharedIconLarge";
				} else if (item.hasCollaborations) {
					className = "ftFolderCollaborationIconLarge";
				} else {
					className = "ftFolderLarge";
				}
			} else if (this.mimeClass == "ftEntryTemplate" || this.mimeClass == "ftFormTemplate" || this.mimeClass == "ftCustomObjectEntryTemplate" || this.mimeClass == "ftWorkflow" || this.mimeClass == "ftTracker" || this.mimeClass == "ftWorkItem" || this.mimeClass == "ftPolicyDocument" || this.mimeClass == "ftPolicyWorkflow" || this.mimeClass == "ftFormData") {
				className = "ftDefaultLarge";
			}

			var thumbnailDom = null;
			if (content == null || content.image == null || content.image.length == 0) {
				thumbnailDom = domConstruct.create("img", {
					'class': className,
					alt: this.label,
					title: this.textDir ? this.enforceTextDirWithUcc(null, this.label) : this.label,
					src: require.toUrl("dojo/resources/blank.gif")
				});
			} else {
				thumbnailDom = domConstruct.create("img", {
					width: 60,
					height: 60,
					alt: this.label,
					src: content.image,
					onerror: function() {
						this.src = ecm.model.desktop.getServicesUrl() + "/ecm/widget/resources/images/spacer.gif";
						this.className = className;
					}
				});

				this.tooltipDialog = new TooltipDialog({
					'class': "ecmFilmstripEntryTooltip",
					content: '<img alt="' + this.label + '" src="' + content.image + '"/>'
				});

				this.domNode.onmouseover = lang.hitch(this, function() {
					popup.open({
						popup: this.tooltipDialog,
						around: this.domNode
					});
				});
				this.domNode.onmouseout = lang.hitch(this, function() {
					popup.close(this.tooltipDialog);
				});
			}

			if (thumbnailDom)
				this.thumbnailNode.appendChild(thumbnailDom);
		}
	});
});
