/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare", 
	"dojo/_base/lang", 
	"dojo/_base/event",
	"dojo/_base/sniff", 
	"dojo/aspect",
	"dojo/dom-class", 
	"dojo/dom-construct", 
	"dojo/dom-style", 
	"dijit/_TemplatedMixin", 
	"dijit/_WidgetsInTemplateMixin", 
	"dijit/form/Button", 
	"ecm/widget/DropDownButton", 
	"dijit/form/Textarea", 
	"dijit/layout/ContentPane", 
	"idx/html", 
	"../MessagesMixin",          
	"../LoggerMixin", 
	"../model/Item", 
	"../model/Teamspace", 
	"./DropDownDialog", 
	"./listView/ContentList", 
	"dojo/text!./templates/ShowHyperlinkPane.html"
], //
function(declare, //
lang, //
event, //
has, //
aspect, //
domClass, //
domConstruct, //
domStyle, //
_TemplatedMixin, //
_WidgetsInTemplateMixin, //
Button, //
DropDownButton, //
Textarea, //
ContentPane, //
idxHtml, //
MessagesMixin, //         
LoggerMixin, //
Item, //
Teamspace, //
DropDownDialog, //
ContentList, //
template) { //

	/**
	 * @name ecm.widget.ShowHyperlinkPane
	 * @class Provides a widget that is used to display the hyperlink for a document or folder.
	 * @augments
	 */
	return declare("ecm.widget.ShowHyperlinkPane", [
		ContentPane,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		LoggerMixin,
		MessagesMixin
	], {
		/** @lends ecm.widget.ShowHyperlinkPane.prototype */

		templateString: template,
		widgetsInTemplate: true,

		_item: null,
		_selectedDocument: null,
		_showVersionSelection: true,

		postCreate: function() {
			this.logEntry("postCreate");
			// When the dropdown button is clicked, load it with the version data
			this._selectVersionButton.isLoaded = function() {
				return false;
			};
			this._selectVersionButton.loadDropDown = lang.hitch(this, "_loadDropDown");

			this.textDir = has("text-direction");

			// Connect dialog events
			this.own(aspect.after(this._selectVersionDialog, "onClickCancel", lang.hitch(this, "_closeSelectVersionDialog"), true));
			this.own(aspect.after(this._selectVersionDialog, "onClickOK", lang.hitch(this, function() {
				this._showHyperlinkValue(this._selectedDocument, null);
				this._closeSelectVersionDialog();
			}), true));
			this.own(aspect.after(this._selectVersionDialog, "onOpen", lang.hitch(this, "_onOpenDropDownDialog"), true));

			// Connect content list events
			this.own(aspect.after(this._selectVersionPane, "onRowSelectionChange", lang.hitch(this, function(selectedItems) {
				this._selectedDocument = selectedItems[0];
				this._selectVersionDialog.setDisabledOKButton(!(selectedItems.length == 1));
			}), true));
			this.own(aspect.after(this._selectVersionPane, "onRowDblClick", lang.hitch(this, function(item) {
				this._showHyperlinkValue(item, null);
				this._closeSelectVersionDialog();
			}), true));
			this.own(aspect.after(this._selectVersionPane.domNode, "oncontextmenu", lang.hitch(this, function(evt) {
				event.stop(evt);
			}), true));
			this.logExit("postCreate");
		},

		setItem: function(item, version) {
			this.logEntry("setItem");
			this._item = item;

			// Add folder/document type icon
			var iconClass = this._item.getMimeClass();
			domClass.add(this._itemInfoIcon, iconClass);

			if ((this._item.isFolder && this._item.isFolder()) || (this._item.isInstanceOf && this._item.isInstanceOf(ecm.model.Teamspace))) {
				// Add folder name
				domConstruct.create("SPAN", {
					innerHTML: idxHtml.escapeHTML(this._item.name)
				}, this._itemInfoName);

				// Hide show document version options
				domStyle.set(this._showHyperlinkShowOptions, "display", "none");

				// Show folder hyperlink
				this._showHyperlinkValue(this._item);
			} else {
				// Add document name
				domConstruct.create("SPAN", {
					innerHTML: idxHtml.escapeHTML(this._item.name)
				}, this._itemInfoName);

				if (this._item.repository.type != "p8") {
					// Hide show document version options
					this._releasedVersionButton.domNode.style.display = "none";
				}

				if (version == "specific" || (this._item.resultSet && this._item.resultSet.context == "PropertiesVersions")) {
					// Show the URL for the passed in item version.
					this._showHyperlinkValue(this._item);
				} else {
					// Show the "released" version url by default for P8, otherwise current
					if (this._item.repository.type == "p8") {
						if (version == "current")
							this._onCurrentVersionClick();
						else
							this._onReleasedVersionClick();
					} else {
						this._onCurrentVersionClick();
					}
				}
			}
			this.applyTextDir(this._itemInfoName.lastChild);
			this.logExit("setItem");
		},

		setShowVersionSelection: function(showSelection) {
			this._showVersionSelection = showSelection;
			if (showSelection) {
				domStyle.set(this._showHyperlinkShowOptions, "display", "inline");
			} else {
				domStyle.set(this._showHyperlinkShowOptions, "display", "none");
				if (this._item) {
					this._showHyperlinkValue(this._item);
				}
			}
		},

		_onReleasedVersionClick: function() {
			this._item.retrieveVersion("released", lang.hitch(this, function(docItem) {
				if (docItem == null) {
					// Display a message if the released version does not exist (there may be only a minor, current version).
					this._hyperlinkTextArea.set("value", this.messages.show_hyperlink_no_released_version_msg);
				} else {
					this._showHyperlinkValue(docItem, "released");
				}
			}));
		},

		_onCurrentVersionClick: function() {
			this._item.retrieveVersion("current", lang.hitch(this, function(docItem) {
				this._showHyperlinkValue(docItem, "current");
			}));
		},

		_showHyperlinkValue: function(item, version) {
			this.logEntry("_showHyperlinkValue");
			if (item != null) {
				var bookmarkUrl = ecm.model.Item.getBookmark(item, version); // move to common code.
				this._hyperlinkTextArea.set("value", bookmarkUrl);
			} else {
				this._hyperlinkTextArea.set("value", "");
			}
			this.logExit("_showHyperlinkValue");
		},

		_closeSelectVersionDialog: function() {
			this._selectVersionDialog.onCancel();
		},

		_onSelectVersionClick: function() {
			this.logEntry("_onSelectVersionClick");
			this.logExit("_onSelectVersionClick");
		},

		_onOpenDropDownDialog: function() {
			// moved the setResultSet here to allow the grid to size the % width properly
			setTimeout(lang.hitch(this, function() {
				this._selectVersionPane.setResultSet(this.resultSet);
				this._selectVersionDialog.focus();
			}), 200);
		},

		_loadDropDown: function(loadCallback) { // called by dropdown dialog buttton to load it
			this._item.repository.retrieveVersions(this._item, null, lang.hitch(this, function(resultSet) {
				this.resultSet = resultSet;
				this._selectVersionDialog.setDisabledOKButton(true);
				loadCallback();
			}), true);
		}
	});
});
