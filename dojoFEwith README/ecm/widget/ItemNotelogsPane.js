/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/sniff",
	"dojo/io/iframe",
	"dojo/dom",
	"dojo/dom-class",
	"dojo/dom-construct",
	"dojo/dom-geometry",
	"dojo/dom-style",
	"dojo/keys",
	"dojo/on",
	"dijit/_TemplatedMixin",
	"dijit/form/SimpleTextarea",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/layout/BorderContainer",
	"dijit/layout/ContentPane",
	"../MessagesMixin",
	"../model/ResultSet",
	"../model/Comment",
	"./listView/ContentList",
	"./listView/modules/ViewMagazine",
	"idx/form/Textarea",
	"dojo/text!./templates/ItemNotelogsPane.html"
],

function(declare, //
lang, //
has, //
iframe,//
dom, //
domClass, //
domConstruct, //
domGeometry, //
domStyle, //
keys,//
on,//
_TemplatedMixin, //
SimpleTextarea,//
_WidgetsInTemplateMixin, //
BorderContainer, //
ContentPane,//
MessagesMixin, //
ResultSet,//
Comment,//
ContentList,//
ViewMagazine,//
TextBox,//
template) {

	/**
	 * @name ecm.widget.ItemNotelogsPane
	 * @class Provides a widget that is used to view notelogs of or add notelogs to an item. Also provides controls to
	 *        edit and delete accessible notelogs.
	 * @augments dijit.layout.BorderContainer
	 * @since 2.0.2
	 */
	return declare("ecm.widget.ItemNotelogsPane", [
		BorderContainer,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		MessagesMixin
	], {
		/** @lends ecm.widget.ItemNotelogsPane.prototype */
		templateString: template,
		widgetsInTemplate: true,
		gutters: false,
		_item: null,
		_messages: ecm.messages,
		promptCreateNewVersion: false,
		_downloadDeferred: null,
		_editMode: false,
		_backgroundRequest: false,
		textDir: has("text-direction"),
		/**
		 * cache the original notelog text for cancel edit in viewer.
		 */
		origNotelogsText: "",

		_fromViewer: false,

		postCreate: function() {
			this.inherited(arguments);
			if (this._editPropertiesDialog) {
				this.connect(this._editPropertiesDialog, this._editPropertiesDialog._changeVersion, "_enableWidgets");
			}
			this.connect(this._notelogs, "onRender", lang.hitch(this, function() {
				this.onRenderNotelogs(this._notelogs.getResultSet());
				var maxHeight = Math.floor(domGeometry.getContentBox(this.domNode).h / 2) - 40;
				domStyle.set(this._notelogAddingTextarea.containerNode, "maxHeight", maxHeight + "px");
			}));
			this.connect(this._notelogAddingTextarea, "_onBlur", lang.hitch(this, function(evt) {
				this._onAddTextAreaBlur(evt);
			}));
			this.connect(this._notelogAddingTextarea, "_resize", lang.hitch(this, function() {
				this._onAddTextAreaResize();
			}));
			this.connect(this._notelogAddingTextarea, "resize", lang.hitch(this, function() {
				this._onAddTextAreaResize();
			}));
			on(this._notelogAddingTextarea, "keyup", lang.hitch(this, function(e) {
				if (e.keyCode == keys.ENTER && !e.shiftKey) {
					e.preventDefault();
					e.stopPropagation();
				}
				this.onChange();
			}));
			on(this._notelogAddingTextarea, "keydown", lang.hitch(this, function(e) {
				if (e.keyCode == keys.ENTER && !e.shiftKey && !this._enterKeyHandlerOverridden && this._fromViewer) {
					//in viewer, enter still means add notelog
					e.preventDefault();
					e.stopPropagation();
					this.addNotelog();
				}
			}));
			on(this._notelogAddingTextarea, "keypress", function(e) {
				if (e.keyCode == keys.ENTER && !e.shiftKey) {
					e.preventDefault();
					e.stopPropagation();
				}
			});
			this.connect(this._noteLogRawText, "onInput", lang.hitch(this, function() {
				this._cancelUpdateRawNotelogsButton.set("disabled", false);
				this._updateRawNotelogsButton.set("disabled", false);
			}));

		},

		onChange: function() {
			if (this._editMode) {
				if (this._isRawTextEdited()) {
					this._isDirty = true;
				} else {
					this._isDirty = false;
				}
			} else {
				if (this._isNewTextAdded()) {
					this._isDirty = true;
				} else {
					this._isDirty = false;
				}
			}
		},

		_isRawTextEdited: function() {
			return this._noteLogRawText.get("value") != this.origNotelogsText;
		},

		_isNewTextAdded: function() {
			return lang.trim(this._notelogAddingTextarea.get("value")).length > 0;
		},

		save: function(callback, errorback) {
			if (this._editMode) {
				this._onClickUpdateRawNotelogsButton(callback, errorback);
			} else {
				this.addNotelog(callback, errorback);
			}
		},

		cancel: function() {
			if (this._editMode) {
				this._cancelUpdateRawNotelogs();
			} else {
				this._cancelAddNotelog();
			}
		},

		/**
		 * Sets an item to the pane
		 * 
		 * @param item
		 *            A document {@link ecm.model.ContentItem}.
		 */
		setItem: function(item) {
			this._item = item;
			this._notelogs.reset();
			this.cancel();
			this._rendered = false;
			this._editMode = false;
		},
		/**
		 * set background request for viewer, _backgroundRequest=true, do not display any status dialog when calling
		 * service.
		 */
		setBackgroundRequest: function(bool) {
			//for viewer split window
			this._backgroundRequest = bool;
		},
		_enableWidgets: function(bool) {
			if (this._editPropertiesDialog && this._editPropertiesDialog._versionSelector && this._editPropertiesDialog._versionSelector.store && this._editPropertiesDialog._versionSelector.store.data && this._editPropertiesDialog._versionSelector.store.data[0]) {
				if (this._item.attributes && this._item.attributes.icn_sys_version != this._editPropertiesDialog._versionSelector.store.data[0].name) {
					//disable notelog edit for history versions.
					bool = false;
				}
			}
			this._downloadNotelogButton.set("disabled", !bool);
			this._notelogAddingTextarea.set("disabled", !bool);
			this._noteLogRawText.set("disabled", !bool);
			if (this._fromViewer) {
				this._updateRawNotelogsButton.set("disabled", !bool);
			}
			if (this._backgroundRequest)
				this._cancelUpdateRawNotelogsButton.set("disabled", !bool);
			this._notelogEditButton.set("disabled", !bool);
			this._toggleCreateNewVersion.set("disabled", !bool);
		},
		addNotelog: function(callback, errorback) {
			// Don't allow saving an empty notelog and safeguard against re-entry
			var text = lang.trim(this._notelogAddingTextarea.get("value"));
			if (text.length == 0 || this._adding)
				return;
			
			this._adding = true;
			
			var createNewVersion = this._toggleCreateNewVersion.get("checked");
			this._enableWidgets(false);
			domClass.add(document.body, "ecmWait");
			this._item.addNotelog(text, createNewVersion, lang.hitch(this, function(response) {
				this._adding = false;
				this.onSave();
				if (this._fromViewer) {
					this._notelogAddingTextarea.set("value", "");
					this._renderNotelogs(response);
					this.onChange();
					if (callback)
						callback(response);
				} else {
					if (this._item.repository._isCM() && response.rows && response.rows[0]) {
						//TODO:will be change in story 42052
						this._item._checkInCompleted(response, callback);
					} else {
						if (callback) {
							callback(response);
						}
					}
				}
			}), lang.hitch(this, function(response) {
				//this is error callback function
				this._adding = false;
				this._enableWidgets(true);
				domClass.remove(document.body, "ecmWait");
				if (errorback)
					errorback(response);
			}), this._backgroundRequest);
		},
		_layOutNotelogWidgets: function() {
			if (this._item == null)
				return;
			var checkedOutByOther = (this._item.locked && this._item.lockedUser) ? (this._item.repository.userId.toUpperCase() != this._item.lockedUser.toUpperCase()) : false;
			//Initialize buttons
			if (this._item.hasPrivilege("privModifyNotes") && !checkedOutByOther) {
				if (this._editMode) {
					if (!domClass.contains(this._notelogEditButton.domNode, "dijitHidden")) {
						domClass.add(this._notelogEditButton.domNode, "dijitHidden");
					}
					if (domClass.contains(this._updateRawNotelogsButton.domNode, "dijitHidden") && this._fromViewer) {
						domClass.remove(this._updateRawNotelogsButton.domNode, "dijitHidden");
					}
					if (domClass.contains(this._cancelUpdateRawNotelogsButton.domNode, "dijitHidden")) {
						domClass.remove(this._cancelUpdateRawNotelogsButton.domNode, "dijitHidden");
					}
				} else {
					if (domClass.contains(this._notelogEditButton.domNode, "dijitHidden")) {
						domClass.remove(this._notelogEditButton.domNode, "dijitHidden");
					}
					if (!domClass.contains(this._updateRawNotelogsButton.domNode, "dijitHidden")) {
						domClass.add(this._updateRawNotelogsButton.domNode, "dijitHidden");
					}
					if (!domClass.contains(this._cancelUpdateRawNotelogsButton.domNode, "dijitHidden")) {
						domClass.add(this._cancelUpdateRawNotelogsButton.domNode, "dijitHidden");
					}
				}
			}
			if (!this._item.hasPrivilege("privModifyNotes") || checkedOutByOther) {
				if (!domClass.contains(this._notelogEditButton.domNode, "dijitHidden")) {
					domClass.add(this._notelogEditButton.domNode, "dijitHidden");
				}
			}
			if (this._item.hasPrivilege("privModifyNotes") && this._editMode && !checkedOutByOther) {
				//edit mode
				if (domClass.contains(this._editNotelogPane.domNode, "dijitHidden")) {
					domClass.remove(this._editNotelogPane.domNode, "dijitHidden");
				}
				if (!domClass.contains(this._notelogContentListArea.domNode, "dijitHidden")) {
					domClass.add(this._notelogContentListArea.domNode, "dijitHidden");
				}
				if (!domClass.contains(this._addNotelogsPane.domNode, "dijitHidden")) {
					domClass.add(this._addNotelogsPane.domNode, "dijitHidden");
				}
			} else {
				//none edit mode
				if (!domClass.contains(this._editNotelogPane.domNode, "dijitHidden")) {
					domClass.add(this._editNotelogPane.domNode, "dijitHidden");
				}
				if (domClass.contains(this._notelogContentListArea.domNode, "dijitHidden")) {
					domClass.remove(this._notelogContentListArea.domNode, "dijitHidden");
				}
				if (!checkedOutByOther && (this._item.hasPrivilege("privAddNotes") || this._item.hasPrivilege("privModifyNotes"))) {
					//there is add pane
					if (!domClass.contains(this._notelogContentListArea.domNode, "ecmNotelogsContentlistWithAddPane")) {
						domClass.add(this._notelogContentListArea.domNode, "ecmNotelogsContentlistWithAddPane");
					}
					if (domClass.contains(this._addNotelogsPane.domNode, "dijitHidden")) {
						domClass.remove(this._addNotelogsPane.domNode, "dijitHidden");
					}
					var messageHint = this.messages.notelog_hint;
					if (this._fromViewer) {
						messageHint = this.messages.notelog_add_hint + "  " + messageHint;
					}
					this._notelogAddingTextarea.set("hint", messageHint);
					domGeometry.setMarginBox(this._addNotelogsPane.domNode, {
						w: domGeometry.getContentBox(this.containerNode).w
					});
					var width = domGeometry.getContentBox(this._addNotelogsBox).w;
					domStyle.set(this._notelogAddingTextarea.iconNode, "display", "none");
					domStyle.set(this._notelogAddingTextarea.containerNode, "overflow-y", "hidden");
					domGeometry.setMarginBox(this._notelogAddingTextarea.containerNode, {
						w: width
					});
				} else {
					//there is no add pane
					domClass.remove(this._notelogContentListArea.domNode, "ecmNotelogsContentlistWithAddPane");
					if (!domClass.contains(this._notelogContentListArea.domNode, "ecmNotelogsContentlistWithoutAddPane")) {
						domClass.add(this._notelogContentListArea.domNode, "ecmNotelogsContentlistWithoutAddPane");
					}
					if (!domClass.contains(this._addNotelogsPane.domNode, "dijitHidden")) {
						domClass.add(this._addNotelogsPane.domNode, "dijitHidden");
					}
					this._notelogContentListArea.set("region", "center");
				}
			}
			//if (!this._item.hasPrivilege("privModifyNotes") || checkedOutByOther) {
			//	this._noteLogRawText.set("readonly", true);
			//	this._noteLogRawText.domNode.style.background = "#EEE";
			//}
			var readonly = (!this._item.hasPrivilege("privModifyNotes") && !this._item.hasPrivilege("privAddNotes")) || checkedOutByOther;
			if (this.promptCreateNewVersion && !readonly) {
				domClass.remove(this._toggleCreateNewVersion.domNode, "dijitHidden");
				domClass.remove(this._labelToggleCreateNewVersion, "dijitHidden");
			} else {
				if (!domClass.contains(this._toggleCreateNewVersion.domNode, "dijitHidden")) {
					domClass.add(this._toggleCreateNewVersion.domNode, "dijitHidden");
					domClass.add(this._labelToggleCreateNewVersion, "dijitHidden");
				}
			}
			/*
			if (!(dojo.isIE && this._backgroundRequest) && this.promptCreateNewVersion) {
				// in IE, viewer encounter layout problem with this dijitalignright CSS class
				//so skip IE viewer case.
				if (!domClass.contains(this.checkboxBar.domNode, "dijitAlignRight")) {
					domClass.add(this.checkboxBar.domNode, "dijitAlignRight");
				}
			}*/
			if (domClass.contains(this._notelogContentListArea.domNode, "disableGridxAlternatingRows")) {
				domClass.remove(this._notelogs.gridArea.domNode, "gridxAlternatingRows");
			}
			this.layout();
			if (dojo.isFF) {
				var computedStyle = domStyle.getComputedStyle(this._addNotelogsBox);
				var height = parseInt(computedStyle.fontSize) + parseInt(computedStyle.paddingBottom) + parseInt(computedStyle.paddingTop);
				domStyle.set(this._notelogAddingTextarea.containerNode, "height", height + "px");
			}
		},
		_onAddTextAreaResize: function(evt) {
			//this is due to idx defect. when idx textarea resize, it doesn't keep the width value I set
			//will be removed after idx has fixed the defect
			var width = domGeometry.getContentBox(this._addNotelogsBox).w;
			domStyle.set(this._notelogAddingTextarea.iconNode, "display", "none");
			domStyle.set(this._notelogAddingTextarea.containerNode, "overflow-y", "hidden");
			domGeometry.setMarginBox(this._notelogAddingTextarea.containerNode, {
				w: width
			});
			if (!this._notelogAddingTextarea.focused) {
				if (dojo.isFF) {
					var computedStyle = domStyle.getComputedStyle(this._addNotelogsBox);
					var height = parseInt(computedStyle.fontSize) + parseInt(computedStyle.paddingBottom) + parseInt(computedStyle.paddingTop);
					domStyle.set(this._notelogAddingTextarea.containerNode, "height", height + "px");
				}
			}
		},
		_onAddTextAreaBlur: function(evt) {
			var computedStyle = domStyle.getComputedStyle(this._addNotelogsBox);
			var height = parseInt(computedStyle.fontSize) + parseInt(computedStyle.paddingBottom) + parseInt(computedStyle.paddingTop);
			domStyle.set(this._notelogAddingTextarea.containerNode, "height", height + "px");

		},
		_validateAddingNotelog: function() {
			var notelog = this._notelogAddingTextarea.get("value");
			return true;
		},
		/**
		 * The handler for the button "Edit Notelog"
		 */
		editNotelog: function() {
			this._editMode = true;
			this._layOutNotelogWidgets();
			this._updateRawNotelogsButton.set("disabled", true);
			this._cancelUpdateRawNotelogsButton.set("disabled", true);
			on(this._noteLogRawText, "keyup", lang.hitch(this, function(e) {
				if (e.keyCode == keys.ENTER) {
					e.preventDefault();
					e.stopPropagation();
				}
				this.onChange();
			}));
			this.onChange();
		},
		_onClickDownload: function() {
			var contentUrl = ecm.model.Request.getServiceRequestUrl("getNotes", this._item.repository.type);
			// Create form for passing download parameter values to get around the 2K URL length limitation for IE 
			var downloadForm = dom.byId("notelogDownloadForm");
			if (downloadForm) {
				document.body.removeChild(downloadForm);
			}
			downloadForm = document.createElement("form");
			downloadForm.setAttribute("id", "notelogDownloadForm");
			downloadForm.setAttribute("name", "notelogDownloadForm");
			downloadForm.setAttribute("method", "post");
			downloadForm.setAttribute("accept-charset", "UTF-8");
			var parms = {
				repositoryId: this._item.repository.id,
				docid: this._item.id,
				desktop: ecm.model.desktop.id,
				downloadNotelog: true,
				disposition: "attachment"
			};
			ecm.model.Request.setSecurityToken(parms);
			var value;
			for ( var name in parms) {
				value = parms[name];
				if (lang.isArray(value)) {
					for ( var i in value) {
						var parmNode = document.createElement("input");
						parmNode.setAttribute("type", "hidden");
						parmNode.setAttribute("name", name);
						parmNode.setAttribute("value", value[i]);
						downloadForm.appendChild(parmNode);
					}
				} else {
					var parmNode = document.createElement("input");
					parmNode.setAttribute("type", "hidden");
					parmNode.setAttribute("name", name);
					parmNode.setAttribute("value", value);
					downloadForm.appendChild(parmNode);
				}
			}
			document.body.appendChild(downloadForm);

			if (this._downloadDeferred != null) {
				this._downloadDeferred.cancel();
				this._downloadDeferred = null;
			} else {
				//to clear the queue of iframe when we first uses it
				//or else the download will be blocked.
				this._downloadDeferred = iframe.send({
					url: null
				});
				this._downloadDeferred.cancel();
			}
			this._downloadDeferred = iframe.send({
				url: contentUrl,
				handleAs: "html",
				form: downloadForm
			});
		},
		/**
		 * The handler for the button "Save Changes"
		 */
		_onClickUpdateRawNotelogsButton: function(callback, errorback) {
			var text = this._noteLogRawText.get("value");
			var createNewVersion = this._toggleCreateNewVersion.get("checked");
			this._enableWidgets(false);
			domClass.add(document.body, "ecmWait");
			this._item.updateNotelogs(text, createNewVersion, lang.hitch(this, function(response) {
				this._renderNotelogs(response);
				this.onChange();
				this.onSave();
				if (callback)
					callback(response);
			}), lang.hitch(this, function(response) {
				//this is error callback function
				this._enableWidgets(true);
				domClass.remove(document.body, "ecmWait");
				if (errorback)
					errorback(response);
			}), this._backgroundRequest);
		},
		/**
		 * Displays the notelogs of the item.
		 */
		render: function() {
			//initialize and show CM notelog top buttons area (download button,  toggleRawNotelogs button).
			this._layOutNotelogWidgets();
			if (this._item && !this._rendered) {
				this._retrieveNotelogs(lang.hitch(this, this._renderNotelogs));
				this._rendered = true;
			}
		},

		_retrieveNotelogs: function(callback) {
			if (this._item && lang.isFunction(this._item.retrieveNotelogs)) {
				this._enableWidgets(false);
				domClass.add(document.body, "ecmWait");
				this._item.retrieveNotelogs(callback, lang.hitch(this, function(response) {
					//this is error callback function
					this._enableWidgets(true);
					domClass.remove(document.body, "ecmWait");
				}), this._backgroundRequest);
			}
		},
		/**
		 * @private reuse P8 comments model to display content list of CM notelogs
		 */
		_renderComments: function(notelogs) {
			notelogs.magazineStructure = [
				{
					"field": "content",
					"decorator": "MagazineViewDecorator.contentCellDecoratorNotelog"
				}
			];
			this._notelogs.setContentListModules([
				ViewMagazine
			]);
			this._notelogs.reset();
			this._notelogs.setResultSet(notelogs);

		},
		_renderNotelogs: function(notelogs) {
			if (!domClass.contains(document.body, "ecmWait")) {
				domClass.add(document.body, "ecmWait");
			}
			var checkedOutByOther = (this._item.locked && this._item.lockedUser) ? (this._item.repository.userId.toUpperCase() != this._item.lockedUser.toUpperCase()) : false;
			/*if (this._item.hasPrivilege("privModifyNotes") && !checkedOutByOther && notelogs.stamp && notelogs.stamp != null) {
				this._noteLogRawText.set("value", notelogs.text + "\n\n" + notelogs.stamp);
			} else
			*///remark due to the new UX design, although CM eClient display it. 
			this._noteLogRawText.set("value", notelogs.text);
			//this.origNotelogsText = notelogs.text;
			this.origNotelogsText = this._noteLogRawText.get("value");
			// Add version prompt checkboxes
			if (notelogs.promptCreateNewVersion != undefined) {
				this.promptCreateNewVersion = notelogs.promptCreateNewVersion;
			}
			this._editMode = false;// display list view after saving in edit mode
			this._renderComments(notelogs);
			this._enableWidgets(true);
			if (notelogs.text != "")
				this._downloadNotelogButton.set("disabled", false);
			else
				this._downloadNotelogButton.set("disabled", true);
			this._layOutNotelogWidgets();
			this._updateRawNotelogsButton.set("disabled", true);
			this._cancelUpdateRawNotelogsButton.set("disabled", true);
			domClass.remove(document.body, "ecmWait");
		},
		/**
		 * An event function called after the comments pane is rendered.
		 * 
		 * @param notelogs
		 *            A {@link ecm.model.ResultSet} object containing {@link ecm.model.Comment} objects.
		 */
		onRenderNotelogs: function(/* ResultSet */notelogs) {
		},
		/**
		 * cancel edit notelog and restore the original content
		 */
		_cancelUpdateRawNotelogs: function() {
			this._noteLogRawText.set("value", this.origNotelogsText);
			this._updateRawNotelogsButton.set("disabled", true);
			this._cancelUpdateRawNotelogsButton.set("disabled", true);
			this.onChange();
		},
		_cancelAddNotelog: function() {
			this._notelogAddingTextarea.set("value", "");
			this.onChange();
		},
		onSave: function() {
		}
	});

});
