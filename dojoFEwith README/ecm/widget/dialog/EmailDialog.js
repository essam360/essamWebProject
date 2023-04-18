/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/array",
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/aspect",
	"dojo/dom-class",
	"dojo/dom-geometry",
	"dojo/json",
	"dojo/keys",
	"dojo/string",
	"dojo/window",
	"dijit/form/SimpleTextarea",
	"dijit/layout/BorderContainer",
	"dijit/layout/ContentPane",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetBase",
	"dijit/_WidgetsInTemplateMixin",
	"ecm/model/Desktop",
	"ecm/model/Item",
	"ecm/model/Message",
	"ecm/model/Request",
	"ecm/model/Teamspace",
	"ecm/widget/CompositeButtonListPane",
	"ecm/widget/DropDownDialog",
	"ecm/widget/HoverHelp",
	"ecm/widget/ValidationTextBox",
	"ecm/widget/dialog/BaseDialog",
	"ecm/widget/dialog/ConfirmationDialog",
	"ecm/widget/dialog/ErrorDialog",
	"ecm/widget/dialog/LoginDialog",
	"ecm/MessagesMixin",
	"idx/html",
	"dojo/text!./templates/EmailDialogContent.html"
], function(array, declare, lang, aspect, domClass, domGeometry, json, keys, string, win, SimpleTextarea, BorderContainer, ContentPane, _TemplatedMixin, _WidgetBase, _WidgetsInTemplateMixin, Desktop, Item, Message, Request, Teamspace, CompositeButtonListPane, DropDownDialog, HoverHelp, ValidationTextBox, BaseDialog, ConfirmationDialog, ErrorDialog, LoginDialog, MessagesMixin, idxHtml, template) {
	
	/**
	 * @private An input for e-mail addresses.
	 */
	var _EmailAddressListInput = declare("ecm.widget.dialog._EmailAddressListInput", [ _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, MessagesMixin ], {
		/** @lends ecm.widget.dialog._EmailAddressListInput.prototype */
		
		templateString: '<div class="ecmEmailAddressListInput"><div data-dojo-type="ecm/widget/CompositeButtonListPane" data-dojo-attach-point="list"></div></div>',
		widgetsInTemplate: true,
		
		postCreate: function() {
			this.inherited(arguments);

			this.input = new ValidationTextBox({
				trim: false,
				propercase: false,
				pattern: EmailDialog.emailAddressPattern,
				invalidMessage: this.messages.email_address_invalid,
				onKeyUp: lang.hitch(this, "_onInputKeyUp"),
				onBlur: lang.hitch(this, "_onInputBlur"),
				onChange: lang.hitch(this, "onChange"),
				isValid: lang.hitch(this, function() {
					var valid = this.input.validator(this.input.get("value"), this.input.get("constraints"));
					if (valid)
						valid = array.every(this._parseInput(), "return item.match(this.emailAddressPattern);", EmailDialog);
					return valid;
				})
			}).placeAt(this.list._itemsNode);
			this.input.startup();

			this.own(aspect.after(this.list, "onItemRemoved", lang.hitch(this, function() {
				this.onChange();
			})));
			this.own(aspect.after(this.list, "onItemAdded", lang.hitch(this, function() {
				this.input.placeAt(this.list._itemsNode);
				this.input.focus();
				win.scrollIntoView(this.input.domNode);
				this.onChange();
			})));
        },
		
		_onInputKeyUp: function(e) {
			if (e && e.keyCode == keys.ENTER) {
				if (this.input.isValid())
					this._addInputToList();
				else
					this.input.validate(); // shows the error
			} else if (this._hasInputSeparator()) {
				this._addInputToList();
			}
		},
		
		_onInputBlur: function() {
			if (this.input.get("value") != "")
				this._addInputToList();
		},
		
		_hasInputSeparator: function() {
			var value = this.input.get("value");
			if (value.length > 0) {
				var startLookup = false;
				for (var i = 0; i < value.length; i++) {
					var c = value[i];
					if (startLookup) {
						if (this._isSeparator(c))
							return true;
					} else if (!this._isSeparator(c)) {
						startLookup = true;
					}
				}
			}
			return false;
		},
		
		_addInputToList: function() {
			if (this.input.isValid()) {
				array.forEach(this._parseInput(), "this.list.addItem({ id: item, displayName: item });", this);
				this.input.set("value", "");
			} else {
				this.input.validate(); // shows the error
			}
		},
		
		_parseInput: function() {
			var inputValue = this.input.get("value"), values = [], value = "";
			for (var i = 0; i < inputValue.length; i++) {
				var c = inputValue[i];
				if (this._isSeparator(c)) {
					if (value.length > 0)
						values.push(value);
					value = "";
				} else {
					value += c;
				}
			}
			if (value.length > 0)
				values.push(value);
			
			return values;
		},
		
		_isSeparator: function(c) {
			return c == " " || c == ";" || c == ",";
		},
		
		_getValueAttr: function() {
			return array.map(this.list.getItems(), "return item.id;");
		},
		
		_setValueAttr: function(values) {
			this.list.removeAllItems();
			array.forEach(values, function(value) {
				if (value.match(EmailDialog.emailAddressPattern)) {
					this.list.addItem({
						id: value,
						displayName: value
					});
				}
			}, this);
		},
		
		focus: function() {
			this.input.focus();
		},
		
		isValid: function() {
			return this.input.isValid();
		},
		
		onChange: function() {
		},
		
		destroy: function() {
			this.inherited(arguments);
			
			if (this.input) {
				this.input.destroy();
				delete this.input;
			}
		}
	});
	
	/**
	 * @name ecm.widget.dialog.EmailDialog
	 * @class Provides a dialog that is used to send an e-mail with attached documents or item links.
	 * @augments ecm.widget.dialog.BaseDialog
	 */
	var EmailDialog = declare("ecm.widget.dialog.EmailDialog", [ BaseDialog, MessagesMixin ], {
		/** @lends ecm.widget.dialog.EmailDialog.prototype */
		
		contentString: template,
		
		/**
		 * An array of {@link ecm.model.Item} objects to be attached to the e-mail (optional).
		 */
		attachments: null,
		
		/***
		 * Defines how items are to be e-mailed (optional).
		 * <ul>
		 * <li>link - As a link (default)</li>
		 * <li>attachment - As an attachment</li>
		 * <li>allParts - All parts as a compressed file</li>
		 * <li>pdf - As PDF</li>
		 * <li>allPartsPdf - All parts as a PDF file</li>
		 * </ul>
		 */
		attachmentType: "link",
		
		/**
		 * The version of the items to be attached, i.e, "current" or "released" (optional).
		 */
		attachmentVersion: null,
		
		postCreate: function() {
			this.inherited(arguments);
			
			domClass.add(this.domNode, "ecmEmailDialog");
			this.setTitle(this.messages.email_new_message);
			this.setResizable(true);
			this.sendButton = this.addButton(this.messages.email_send, "onSend", true, false);
			
			if (Desktop.fromEmailModifiable) {
				domClass.remove(this.fromTable, "dijitHidden");
				this.fromInput.set("pattern", EmailDialog.emailAddressPattern);
			}
			
			this.toInput = this.createEmailAddressListInput(this.id + "_to", this.toCell);
			this.ccInput = this.createEmailAddressListInput(this.id + "_cc", this.ccCell);
			this.bccInput = this.createEmailAddressListInput(this.id + "_bcc", this.bccCell);
			
			this.own(aspect.after(Desktop, "onHideStatusDialog", lang.hitch(this, function(statusDialog) {
				if (this._request && this._request.cancelled)
					this.onCancel();
			}), true));
		},
		
		/**
		 * Creates an input for e-mail addresses.
		 * 
		 * @param id
		 *            A unique ID for the input
		 * @param domNode
		 *            The DOM node where the input will be placed at
		 */
		createEmailAddressListInput: function(id, domNode) {
			var input = new _EmailAddressListInput({
				id: id,
				onChange: lang.hitch(this, "updateSendButtonState")
			}).placeAt(domNode);
			input.startup();
			
			return input;
		},
		
		/**
		 * Shows the dialog.
		 */
		show: function() {
			var args = arguments;
			this.loadDefaults(lang.hitch(this, function() {
				if (!Desktop.fromEmailModifiable && !this.fromInput.get("value")) {
					if (!this._errorDialog)
						this._errorDialog = new ErrorDialog();
					this._errorDialog.showMessage(Message.createErrorMessage("email_missing_from_error", [
						Desktop.userId,
						Desktop.name
					]));
				} else {
					this.inherited(args);
					this.listAttachments();
					this.updateSendButtonState();
					this._resize();
					setTimeout(lang.hitch(this, function() {
						this.fromInput.focus();
						this.fromInput.focusNode.select();
					}), 500);
				}
			}));
		},
		
		/**
		 * An extension point for filling the form with predefined values before the dialog is shown.
		 * Since this might be an asynchronous process, <code>callback</code> must be called to show the dialog.
		 * 
		 * @param callback
		 *            A callback function that must be called to show the dialog after the form has been filled
		 */
		loadDefaults: function(callback) {
			var repository = Desktop.getDefaultRepository();
			if (repository) {
				repository.getUserEmail(repository.userId, lang.hitch(this, function(email) {
					if (email)
						this.fromInput.set("value", email);
					callback();
				}));
			} else {
				callback();
			}
		},
		
		/**
		 * Lists the attachments.
		 */
		listAttachments: function() {
			if (this.attachmentType && this.attachmentType != "link") {
				domClass.add(this.attachmentsLabelRow, "dijitHidden");
				this.attachmentsLabel.innerHTML = this.messages.email_attachments;
			}
			
			array.forEach(this.attachments, function(item) {
				this.attachmentListPane.addItem({
					id: item.id,
					displayName: item.name || "",
					iconClass: item.getMimeClass() + "Large",
					iconAltText: item.mimetype == "item" ? this.messages.item : item.mimetype
				});
			}, this);
		},
		
		/**
		 * Returns true if all inputs are valid.
		 */
		isValid: function() {
			if (array.some([ this.fromInput, this.toInput, this.ccInput, this.bccInput ], "return !item.isValid();"))
				return false;
			
			if (array.every([ this.toInput, this.ccInput, this.bccInput ], "return !item.get('value') || !item.get('value').length;"))
				return false;
			
			return true;
		},
		
		/**
		 * Disables the send button if there is invalid input.
		 */
		updateSendButtonState: function() {
			this.sendButton.set("disabled", !this.isValid());
		},
		
		/**
		 * Shows the CC field.
		 */
		showCC: function() {
			domClass.add(this.ccLink, "dijitHidden");
			domClass.remove(this.ccTable, "dijitHidden");
			this._resize();
			if (lang.isFunction(this.ccInput.focus))
				this.ccInput.focus();
		},
		
		/**
		 * Shows the BCC field.
		 */
		showBCC: function() {
			domClass.add(this.bccLink, "dijitHidden");
			domClass.remove(this.bccTable, "dijitHidden");
			this._resize();
			if (lang.isFunction(this.bccInput.focus))
				this.bccInput.focus();
		},
		
		/**
		 * Sends the e-mail.
		 */
		onSend: function() {
			this.sendButton.set("disabled", true);
			if (!this.subjectInput.get("value")) {
				if (!this._confirmationDialog) {
					this._confirmationDialog = new ConfirmationDialog({
						title: this.messages.email_subject_reminder,
						text: this.messages.email_subject_reminder_confirm,
						buttonLabel: this.messages.email_send,
						cancelButtonLabel: ecm.messages.email_dont_send,
						onExecute: lang.hitch(this, "_send"),
						onCancel: lang.hitch(this, function() {
							this.sendButton.set("disabled", false);
							setTimeout(lang.hitch(this, function() {
								this.subjectInput.focus();
							}), 500);
						})
					});
				}
				this._confirmationDialog.show();
			} else if (this.isValid()) {
				this._send();
			}
		},
		
		_send: function() {
			var data = {
				from: this.fromInput.get("value"),
				to: this.toInput.get("value"),
				cc: this.ccInput.get("value"),
				bcc: this.bccInput.get("value"),
				subject: this.subjectInput.get("value"),
				message: this.messageInput.get("value")
			};
			var items = this._filterAttachments();
			if (items.length) {
				var item = items[0], className;
				if (item.isInstanceOf && item.isInstanceOf(ecm.model.Teamspace)) {
					className = item.className;
					item.repository.addRecentTeamspaces(items);
				} else {
					className = item.template;
					item.repository.addRecentItems(items);
				}
				if (!this.attachmentType)
					this.attachmentType = "link";
				data.items = array.map(items, function(item) {
					var pnumber = this.attachmentType == "allParts" || this.attachmentType == "allPartsPdf" ? -1 : 0;
					if ( item.celement != null ) {
						pnumber = Number(item.celement);
					}
					return {
						repositoryId: item.repository.id,
						repositoryType: item.repository.type,
						id: item.id,
						vsId: item.vsId,
						version: this.attachmentVersion,
						className: className,
						name: item.name || item.filename || item.template_label || item.id,
						mimeType: item.mimetype,
						partNumber: pnumber,
						targetContentType: this.attachmentType == "pdf" || this.attachmentType == "allPartsPdf" ? "application/pdf" : null,
						link: this.attachmentType == "link" ? Item.getBookmark(item, this.attachmentVersion, Desktop.id, item.repository.id, item.repository.type, className, window.WCProxy) : null
					};
				}, this);
			}
			
			this._request = Request.postServiceAPI("email", null, "text/json", {
				requestParams: {
					desktop: Desktop.id
				},
				requestBody: json.stringify(data),
				cancellable: this.attachmentType != "link" && items.length > 0,
				notifyOnCancel: this.attachmentType != "link" && items.length > 0,
				backgroundRequest: false,
				synchronous: false,
				requestCompleteCallback: lang.hitch(this, "onCancel"),
				requestFailedCallback: lang.hitch(this, function(response) {
					this.sendButton.set("disabled", false);
					if (response.disconnectedRepositories && response.disconnectedRepositories.length)
						this._reconnect(response.disconnectedRepositories, this._request);
				}),
				callerHandledErrorNumbers: [ 2602 ] // disconnected error handled above
			});
		},
		
		_filterAttachments: function() {
			var itemLookup = {};
			array.forEach(this.attachmentListPane.getItems(), "this[item.id] = item;", itemLookup);
			return array.filter(this.attachments, "return item.id in this;", itemLookup)
		},
		
		_resize: function() {
			var size = domGeometry.getContentBox(this._contentNode);
			if (size.h > 0 && !this.isMaximized()) {
				domGeometry.setMarginBox(this.contentArea, {
					h: size.h
				}); 
				this.resize();
			}
		},
		
		_reconnect: function(repositoryIds, request) {
			var dialog = LoginDialog.getLoginDialog();
			dialog.setRepository(Desktop.getRepository(repositoryIds.shift()));
			if (repositoryIds.length == 0) {
				dialog.show(false, request);
			} else {
				var t = this;
				dialog.show(false, null, function() {
					setTimeout(function() {
						t._reconnect(repositoryIds, request);
					}, 1000);
				});
			}
		},
		
		/**
		 * Overrides <code>ecm.widget.dialog.BaseDialog.destroy()</code> to destroy the To, Cc, and Bcc inputs.
		 */
		destroy: function() {
			this.inherited(arguments);

			if (this.toInput) {
				this.toInput.destroy();
				delete this.toInput;
			}
			
			if (this.ccInput) {
				this.ccInput.destroy();
				delete this.ccInput;
			}
			
			if (this.bccInput) {
				this.bccInput.destroy();
				delete this.bccInput;
			}
			
			if (this._errorDialog) {
				this._errorDialog.destroy();
				delete this._errorDialog;				
			}
			
			if (this._confirmationDialog) {
				this._confirmationDialog.destroy();
				delete this._confirmationDialog;				
			}
		}
	});
	
	/**
	 * The regular expression used to validate e-mail addresses.
	 */
	EmailDialog.emailAddressPattern = ".+\\@.+\\..+";
	
	return EmailDialog;
});
