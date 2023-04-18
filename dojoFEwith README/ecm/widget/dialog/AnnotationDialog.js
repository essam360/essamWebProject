/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare", //
	"dojo/_base/lang", //
	"dojo/_base/connect", //
	"dojo/_base/json", //
	"dojo/_base/window", //
	"dojo/string", //
	"dojo/dom-class", //
	"dojo/dom-construct", //
	"dijit/layout/ContentPane", //
	"ecm/widget/dialog/BaseDialog", //
	"dojo/text!./templates/AnnotationDialogContent.html", //
	"ecm/widget/dialog/AddAnnotationDialog", //
	"ecm/model/Request", //
	"ecm/MessagesMixin"
], //
function(declare, lang, connect, json, win, string, domClass, domConstruct, ContentPane, BaseDialog, //
template, AddAnnotationDialog, Request, MessagesMixin) {

	/**
	 * @name ecm.widget.dialog.AnnotationDialog
	 * @class Provides a dialog box that is used to add and view annotations for an item in an IBM Content Manager
	 *        OnDemand repository.
	 * @augments ecm.widget.dialog.BaseDialog
	 */
	var AnnotationDialog = declare("ecm.widget.dialog.AnnotationDialog", [
		BaseDialog,
		MessagesMixin
	], {
		/** @lends ecm.widget.dialog.AnnotationDialog.prototype */

		repository: null,

		item: null,

		groupNames: null,

		addNoteDlg: null,

		contentString: template,

		constructor: function(args) {
			lang.mixin(this, args);
		},

		postCreate: function() {
			this.inherited(arguments);
			domClass.add(this.domNode, "ecmAnnotationDialog");
			this.setResizable(true);
			this.setTitle(ecm.messages.annotationDlg_title);
			this.setIntroText(ecm.messages.annotationDlg_description);
			this.setMaximized(true);
			this._addButton = this.addButton(ecm.messages.annotationDlg_addButtonLabel, "onAdd", false, true);
		},

		resize: function() {
			this.inherited(arguments);
		},

		viewAnnotations: function() {
			this.annotationContainer.containerNode.innerHTML = "";
			this._retrieveAnnotations(lang.hitch(this, function(response) {
				this.groupNames = response.userGroupNames;
				var notes = response.notes;
				if (notes && notes.length > 0) {
					for ( var i = 0; i < notes.length; i++) {
						var div = this._annotationFormatter(notes[i]);
						this.annotationContainer.containerNode.appendChild(div);
					}
				} else {
					domConstruct.create("DIV", {
						innerHTML: ecm.messages.annotationDlg_msg_noAnnotations,
						"class": "ecmAnnotationDlgNoAnnotations"
					}, this.annotationContainer.containerNode, "first");
				}
				this.resize();
			}));
		},

		_retrieveAnnotations: function(callback) {
			Request.invokeService("getNotes", this.repository.type, {
				repositoryId: this.repository.id,
				template_name: this.item.template,
				docid: this.item.id,
				alt_output: "json"
			}, function(response) {
				callback(response);
			}, true, false);
		},

		_annotationFormatter: function(annotation) {
			annotation = json.fromJson(annotation);
			var pageLabel = string.substitute(ecm.messages.annotationDlg_pageLabel, {
				pageNum: annotation.page
			});
			var groupName = annotation.groupName;
			var accType = "";
			if (groupName && groupName.length > 0) {
				accType = string.substitute(ecm.messages.annotationDlg_accLabel_privateGroup, {
					groupName: groupName
				});
			} else {
				accType = annotation.isPublic ? ecm.messages.annotationDlg_accLabel_public : ecm.messages.annotationDlg_accLabel_private;
			}
			var accLabel = string.substitute(ecm.messages.annotationDlg_accLabel, {
				accType: accType
			});
			var canCopyLabel = annotation.isOKToCopy ? ecm.messages.annotationDlg_copiable : ecm.messages.annotationDlg_cannotCopy;
			var divCon = domConstruct.create("DIV", {
				"class": "ecmAnnotationViewer",
				"tabIndex": "0"
			});
			domConstruct.create("SPAN", {
				innerHTML: annotation.timestamp,
				"class": "ecmAnnotationDlgTimeStamp"
			}, divCon);
			domConstruct.create("SPAN", {
				innerHTML: annotation.userID,
				"class": "ecmAnnotationDlgUser"
			}, divCon);
			domConstruct.create("SPAN", {
				innerHTML: pageLabel,
				"class": "ecmAnnotationDlgPage"
			}, divCon);
			domConstruct.create("SPAN", {
				innerHTML: accLabel,
				"class": "ecmAnnotationDlgAcc"
			}, divCon);
			domConstruct.create("SPAN", {
				innerHTML: canCopyLabel,
				"class": "ecmAnnotationDlgCanCopy"
			}, divCon);
			var textSpan = domConstruct.create("SPAN", {
				"class": "ecmAnnotationDlgContent"
			}, divCon);
			domConstruct.place(win.doc.createTextNode(annotation.text), textSpan, "only");

			return divCon;
		},

		onAdd: function() {
			if (!this.addNoteDlg) {
				this.addNoteDlg = new AddAnnotationDialog({
					repository: this.repository,
					item: this.item,
					groupNames: this.groupNames
				});
				connect.connect(this.addNoteDlg, "postAddAnnotation", lang.hitch(this, "viewAnnotations"));
			} else {
				this.addNoteDlg.initializeDlgContent(this.repository, this.item, this.groupNames);
			}
			this.addNoteDlg.reset();
			this.addNoteDlg.show();
			this.addNoteDlg.resize();
		}
	});

	return AnnotationDialog;

});
