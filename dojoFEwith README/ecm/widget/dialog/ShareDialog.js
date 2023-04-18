/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/sniff",
	"dojo/string",
	"dojo/dom-attr",
	"dojo/dom-class",
	"dojo/dom-style",
	"dojo/dom-construct",
	"dojo/date/stamp",
	"dojo/window",
	"dojo/aspect",
	"dojo/keys",
	"dijit/form/Textarea",
	"dijit/form/SimpleTextarea",
	"dijit/form/DropDownButton",
	"dijit/form/Button",
	"dijit/layout/BorderContainer",
	"dijit/layout/ContentPane",
	"ecm/widget/HoverHelp",
	"ecm/widget/ValidationTextBox",
	"ecm/widget/ComboBox",
	"ecm/widget/CheckBox",
	"ecm/widget/DropDownDialog",
	"ecm/widget/RadioButton",
	"ecm/widget/DatePicker",
	"ecm/widget/CompositeButtonListPane",
	"ecm/widget/dialog/BaseDialog",
	"ecm/widget/dialog/ErrorDialog",
	"ecm/model/Message",
	"ecm/model/Request",
	"ecm/model/Desktop",
	"ecm/MessagesMixin",
	"idx/layout/TitlePane",
	"idx/html",
	"dojo/text!./templates/ShareDialogContent.html"
], //
function(declare, lang, has, string, domAttr, domClass, domStyle, domConstruct, stamp, winUtils, aspect, keys, Textarea, SimpleTextarea, DropDownButton, Button, BorderContainer, ContentPane, HoverHelp, ValidationTextBox, ComboBox, CheckBox, DropDownDialog, RadioButton, DatePicker, CompositeButtonListPane, BaseDialog, ErrorDialog, Message, Request, Desktop, MessagesMixin, TitlePane, idxHtml, template) {

	/**
	 * @name ecm.widget.dialog.ShareDialog
	 * @class Provides a dialog that is used to share a document.
	 * @augments ecm.widget.dialog.BaseDialog
	 * @since 2.0.3.5
	 */
	var ShareDialog = declare("ecm.widget.dialog.ShareDialog", [
		BaseDialog,
		MessagesMixin
	], {
		/** @lends ecm.widget.dialog.ShareDialog.prototype */

		contentString: template,
		item: null,
		selectedShareVersion: null, // Used when this.item isn't the selected share version
		_emailFilter: ".+\\@.+\\..+",
		_defaultSetPassword: "_~!@$^&*()",
		_changedPassword: false,
		shareMode: 0, // 0 - initial share, 1 - reshare, 2 - share new version
		allowVersionSelection: true,

		postCreate: function() {
			this.inherited(arguments);
			domClass.add(this.domNode, "ecmShareDialog");
			this.shareWithEmailInput.setHoverHelp(this.shareWithEmailInputHoverHelp);
			this.password.set("placeholder", this.messages.share_password_placeholder);
			this.connect(this.password.domNode, "onpaste", this._onPaste);
			this.comment.set("value", this.messages.share_comments_default);
			this.advancedTwisty.set("title", this.messages.share_options);
			this.setTitle(this.messages.share_title);
			this.setIntroText(this.messages.share_instructions_new);
			this.setResizable(true);
			this._initExpire();
			this._initMyEmail();
			this._initShareWithEmail();
			this._locale = Desktop.valueFormatter.getLocale();
			this._shareButton = this.addButton(this.messages.share_buttonLabel_share, "_onShare", true, false);
		},

		destroy: function() {
			if (this._errorDialog) {
				this._errorDialog.destroyRecursive();
				this._errorDialog = null;
			}
			this.inherited(arguments);
		},

		/**
		 * Shows the dialog.
		 */
		show: function() {
			if (this.item && this.item.repository) {
				this._displayItemInHeader(this.item);

				// Hide the allow download checkbox if no content
				if (this._canDownloadItem()) {
					domClass.remove(this.allowDownloadRow, "dijitHidden");
				} else {
					domClass.add(this.allowDownloadRow, "dijitHidden");
				}

				var args = arguments;
				this.getUserEmail(lang.hitch(this, function(emailAddress){
					if (emailAddress) {
						this.myEmail.set("value", emailAddress);
					}
					// If the email address is readOnly and no email address is configured, display error message.
					if (this.myEmail.get("readOnly") && !emailAddress) {
						if (!this._errorDialog) {
							this._errorDialog = new ErrorDialog();
						}
						this._errorDialog.showMessage(Message.createErrorMessage("share_no_my_email_error", [
							this.item.repository.userId,
							ecm.model.desktop.name
						]));

					} else {
						this._getShareData(lang.hitch(this, function(response) { // Check if the item is already shared. 
							if (response && response.errorMessage) {
								if (!this._errorDialog) {
									this._errorDialog = new ErrorDialog();
								}
								this._errorDialog.showMessage(response.errorMessage);
							} else {
								var currentVersion = response.currentVersion != undefined ? response.currentVersion : "";
								if (response && response.link) { // existing share exists for this item
									this.shareWithEmailInputHoverHelp.set("message", this.messages.share_email_addresses_reshare_hover);
									if (response.isAnotherVersionShared != undefined && response.isAnotherVersionShared == true) {
										this.setIntroText(this.messages.share_instructions_another_version_shared);
										var versionShared = response.versionShared != undefined ? response.versionShared : "";
										var canModifyShareOptions = response && (response.canModifyShareOptions == undefined || response.canModifyShareOptions == true);
										if (this.allowVersionSelection && canModifyShareOptions) { // Show radio buttons and warning
											domClass.add(this.versionShareInfoDiv, "dijitHidden");
											domClass.remove(this.anotherVersionSharedDiv, "dijitHidden");
											this.anotherVersionSharedMessageText.innerHTML = string.substitute(this.messages.share_version_message, [
												versionShared
											]);
											this.versionUpdateShareRadio.set("checked", true);
											this.versionUpdateShareLabel.innerHTML = string.substitute(this.messages.share_version_update, [
												versionShared
											]);
											if (this.item.repository.type == "cm") {
												this.versionUpdateShareHoverHelp.set("message", this.messages.share_version_update_cm_hover);
											} else {
												this.versionUpdateShareHoverHelp.set("message", this.messages.share_version_update_p8_hover);
											}
											this.shareNewVersionLabel.innerHTML = string.substitute(this.messages.share_version_change_to_current, [
												currentVersion
											]);
											if (this.item.repository.type == "cm") {
												this.shareNewVersionHoverHelp.set("message", this.messages.share_version_change_to_current_cm_hover);
											} else {
												this.shareNewVersionHoverHelp.set("message", this.messages.share_version_change_to_current_p8_hover);
											}
											this.shareMode = "1";
										} else { // Another version is shared.  If can modify share, the user can update the share to this selected current version.
											domClass.add(this.anotherVersionSharedDiv, "dijitHidden");
											domClass.remove(this.versionShareInfoInlineMessage, "dijitHidden");
											this.versionShareInfoMessageText.innerHTML = string.substitute(this.messages.share_selected_version_message, [
												versionShared,
												currentVersion
											]);
											domClass.remove(this.versionShareInfoDiv, "dijitHidden");
											domClass.remove(this.versionShareInfoHoverHelp.domNode, "dijitHidden");
											if (canModifyShareOptions) {
												this.versionShareInfo.innerHTML = string.substitute(this.messages.share_version_change_to_current, [
													currentVersion
												]);
												if (this.item.repository.type == "cm") {
													this.versionShareInfoHoverHelp.set("message", this.messages.share_version_change_to_current_cm_hover);
												} else {
													this.versionShareInfoHoverHelp.set("message", this.messages.share_version_change_to_current_p8_hover);
												}
												this.shareMode = "2";
											} else {
												this.versionShareInfo.innerHTML = string.substitute(this.messages.share_version_update, [
													versionShared
												]);
												if (this.item.repository.type == "cm") {
													this.versionShareInfoHoverHelp.set("message", this.messages.share_version_update_cm_hover);
												} else {
													this.versionShareInfoHoverHelp.set("message", this.messages.share_version_update_p8_hover);
												}
												this.shareMode = "1";
											}
										}
									} else { // This item is shared
										this.setIntroText(this.messages.share_instructions_existing);
										if (this.selectedShareVersion) {
											domClass.remove(this.versionShareInfoInlineMessage, "dijitHidden");
											this.versionShareInfoMessageText.innerHTML = string.substitute(this.messages.share_different_version_message, [
												currentVersion,
												this.selectedShareVersion
											]);
										}
										domClass.remove(this.versionShareInfoDiv, "dijitHidden");
										domClass.remove(this.versionShareInfoHoverHelp.domNode, "dijitHidden");
										if (this.item.repository.type == "cm") {
											this.versionShareInfoHoverHelp.set("message", this.messages.share_version_update_cm_hover);
										} else {
											this.versionShareInfoHoverHelp.set("message", this.messages.share_version_update_p8_hover);
										}
										domClass.add(this.anotherVersionSharedDiv, "dijitHidden");

										if (this.item.repository.type == "cm" && this.item.versionControl != null && this.item.versionControl == false && this.item.isVersionControlByApp != null && this.item.isVersionControlByApp == false && (response.canModifyShareOptions == undefined || response.canModifyShareOptions == true)) {
											// Never version item type
											this.versionShareInfo.innerHTML = string.substitute(this.messages.share_version_new, [
												currentVersion
											]);
											this.shareMode = "2";
										} else {
											this.versionShareInfo.innerHTML = string.substitute(this.messages.share_version_update, [
												currentVersion
											]);
											this.shareMode = "1";
										}
									}
									// Show the Share link
									domClass.remove(this.shareLinkDiv, "dijitHidden");
									this.shareLink.set("value", response.link);

									// Close the share options twisty and set its instructions 
									this.advancedTwisty.set("open", false);
									this.advancedInstructions.innerHTML = this.messages.share_advanced_existing_instructions;
									if (response.canModifyShareOptions == undefined || response.canModifyShareOptions == true) {
										this.shareOptionsMessageText.innerHTML = this.messages.share_options_edit_warning; // Display info message in the twisty about changing share options
										domClass.remove(this.shareOptionsInlineMessage, "dijitHidden");
									} else {
										domClass.add(this.shareOptionsInlineMessage, "dijitHidden");
									}

									// Load the UI for with the download, expire date, and password data.
									this.allowDownload.set("checked", response.downloadEnabled);
									if (response.expirationDate) {
										this._expiryDate = response.expirationDate;
										this._expiryDateDisplayValue = Desktop.valueFormatter.formatValue(response.expirationDate, "xs:date");
									}
									this._setExpireButtonLabel();
									this.password.set("value", response.passwordEnabled ? this._defaultSetPassword : "");

								} else { // the item has not been shared
									this.setIntroText(this.messages.share_instructions_new);
									domClass.add(this.shareLinkDiv, "dijitHidden"); // Hide the share link
									domClass.remove(this.versionShareInfoDiv, "dijitHidden");
									this.versionShareInfo.innerHTML = string.substitute(this.messages.share_version_new, [
										currentVersion
									]);
									domClass.remove(this.versionShareInfoHoverHelp.domNode, "dijitHidden");
									if (this.item.repository.type == "cm") {
										this.versionShareInfoHoverHelp.set("message", this.messages.share_version_new_cm_hover);
									} else {
										this.versionShareInfoHoverHelp.set("message", this.messages.share_version_new_p8_hover);
									}
									if (!domClass.contains(this.allowDownloadRow, "dijitHidden")) {
										this.allowDownload.set("checked", true); // Default download to checked
									}
									this.shareMode = "0";
								}

								// If no authority to change the share options, then disable them and remove the share options instructions.
								if (response && response.canModifyShareOptions != undefined && response.canModifyShareOptions == false) {
									this.allowDownload.set("disabled", true);
									this.expireButton.set("disabled", true);
									this.password.set("disabled", true);
								}

								this.inherited(args); // Display the dialog
								this._shareButton.set("disabled", !this._isValid());
								setTimeout(lang.hitch(this, function() {
									this._focusItem();
								}), 500);
							}
						}));
					}
				}));
			}
		},
		
		/**
		 * Attempts to retrieve an email address given a user id. An extention point is called first that is used by
		 * the EmailMappingPlugin. If it doesn't return a value, repository.getUserEmail() is called.
		 */
		getUserEmail: function(callback){
			
			// Call getUserEmailExternal() first to see if the EmailMappingPlugin or another plugin is available to provide
			// an email address for the user.
			this.getUserEmailExternal(this.item.repository.userId, lang.hitch(this, function(emailAddress){
				if (emailAddress){
					callback(emailAddress);
				}
				else{
					// If a plugin didn't provide an email address for the user, try getting it from the repository service.
					this.item.repository.getUserEmail(this.item.repository.userId, lang.hitch(this, function(emailAddress){
						callback(emailAddress)
					}));
				}
			}));
		},
		
		/**
		 * An extension point used by the EmailMappingPlugin to provide an email address given a user id. It can also be used by other plugins.
		 * Since this might be an asynchronous process, <code>callback</code> must be called to return the user's email address.
		 * 
		 * @param callback
		 *            A callback function that must be called to return the user's email address.
		 */
		getUserEmailExternal: function(userId, callback){
			callback();
		},

		/*
		_getReleaseVersion: function(version) {
			var indexOf = version.indexOf(".");
			if (indexOf > -1) {
				var majorVersion = version.substring(0, indexOf);
				var minorVersion = version.substring(indexOf + 1);
				return majorVersion + ".0";
			} else {
				return "";
			}
		},

		_hasMinorVersionWarning: function(versionShared, currentVersion) {
			if (this.item.repository.type == "p8") {
				var indexOf = versionShared.indexOf(".");
				if (indexOf > -1) {
					var versionSharedMajorVersion = versionShared.substring(0, indexOf);
					var versionSharedMinorVersion = versionShared.substring(indexOf + 1);
					indexOf = currentVersion.indexOf(".");
					if (indexOf > -1) {
						var currentVersionMajorVersion = currentVersion.substring(0, indexOf);
						var currentVersionMinorVersion = currentVersion.substring(indexOf + 1);
						if (currentVersionMinorVersion != "0") { // If want to share a minor version
							if (versionSharedMajorVersion == currentVersionMajorVersion && versionSharedMinorVersion != "0") { // if already sharing a minor version for the same major version
								return false;
							} else {
								return true;
							}
						}
					}
				}
			}
			return false;
		}, */

		_onUpdateAlreadySharedVersion: function() {
			this.shareMode = "1"; // reshare
		},

		_onShareNewVersion: function() {
			this.shareMode = "2"; // share new version
		},

		/**
		 * Focuses on an item on the UI.
		 * 
		 * @private
		 */
		_focusItem: function() {
			if (!domClass.contains(this.shareLinkDiv, "dijitHidden")) {
				this.shareLink.focus();
				this.shareLink.focusNode.select();

			} else if (this.myEmail.get("readOnly")) {
				this.shareWithEmailInput.focus();

			} else {
				this.myEmail.focus();
				this.myEmail.focusNode.select();
			}
		},

		/**
		 * Returns boolean indicating if the UI should show the download checkbox.
		 * 
		 * @private
		 */
		_canDownloadItem: function() {
			return !this.item.hasContent || this.item.hasContent();
		},

		/**
		 * Returns the share link if the item is already shared.
		 * 
		 * @private
		 */
		_getShareData: function(callback) {
			this._canShare(lang.hitch(this, function(canShareResponse) {
				if (canShareResponse && canShareResponse.errorMessage) {
					callback(canShareResponse);
				} else {
					this.item.getShareData(lang.hitch(this, function(response) {
						this._getCanModifyShareOptions(response, lang.hitch(this, function(canModifyShareOptions) {
							response.canModifyShareOptions = canModifyShareOptions;
							if (response.laterVersionShared) { // A later version of the document is already shared - don't allow share
								response.errorMessage = Message.createErrorMessage("share_later_version_shared_error");
							}
							callback(response);
						}));
					}));
				}
			}));
		},

		/**
		 * Returns errorMessage response in the callback if the item cannot be shared.
		 * 
		 * @private
		 */
		_canShare: function(callback) {
			if (this.item.repository.type == "cm") {
				var contentClass = this.item.repository.getContentClass(this.item.template);
				if (contentClass.supportsBoxShareTracking) {
					callback();
				} else {
					// The class may not have been initialized. Get the attribute definitions that will initialize
					// the supportsBoxShareTracking flag.
					contentClass.retrieveAttributeDefinitions(lang.hitch(this, function() {
						if (contentClass.supportsBoxShareTracking) {
							callback();
						} else {
							callback({
								errorMessage: Message.createErrorMessage("class_not_support_share_error", [
									contentClass.name
								])
							});
						}
					}));
				}
			} else {
				callback();
			}
		},

		/**
		 * Returns a boolean in the callback indicating if the share options can be modified by the user.
		 * 
		 * @private
		 */
		_getCanModifyShareOptions: function(response, callback) {
			if (!response.link) { // on initial share, can set the share options
				callback(true);
			} else {
				this.item.hasPrivilegeToDeleteShareCallback(callback);
			}
		},

		/**
		 * Display info about the item that is being shared.
		 * 
		 * @private
		 */
		_displayItemInHeader: function(item) {
			var mimeType = item.mimetype == "item" ? this.messages.item : item.mimetype;
			var className = item.getMimeClass() + "Large";
			var thumbnail = item.getValue("thumbnail");
			var thumbnailData = thumbnail && thumbnail.image ? thumbnail.image : null;
			var img = null;
			if (thumbnailData) {
				img = '<img role="img" width="60" height="60" style="display: inline-block" class="' + className + '" alt="' + mimeType + '" title="' + mimeType + '" src="' + thumbnailData + '"/>';
			} else {
				var blankImg = require.toUrl("dojo/resources/blank.gif");
				img = '<img role="img" width="60" height="60" style="display: inline-block" class="' + className + '" alt="' + mimeType + '" title="' + mimeType + '" src="' + blankImg + '"/>';
			}
			this.itemToShareIcon.innerHTML = img;
			this.itemToShareTitle.innerHTML = '<span class="name">' + idxHtml.escapeHTML(item.name) + '</span>';
		},

		/**
		 * Initialize the expiration widget.
		 * 
		 * @private
		 */
		_initExpire: function() {
			this._setExpireButtonLabel();

			this.own(aspect.after(this.expireDate.domNode, "onkeyup", lang.hitch(this, function() {
				this.expireDateRadio.set("checked", true);
				this.expireDlg.setDisabledOKButton(!this.expireDate.isValid());
			})));

			this.expireDate.set("constraints", {
				datePattern: Desktop.valueFormatter.getDefaultFormat("xs:date"),
				selector: 'date',
				strict: true,
				min: new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
				locale: this._locale
			});

			this.own(aspect.after(this.expireDlg, "onOpen", lang.hitch(this, function(a) {
				if (!this._expiryDate) {
					this.neverExpireRadio.set("checked", true);
					this.expireDate.set("displayedValue", "");
				} else {
					this.expireDateRadio.set("checked", true);
					this.expireDate.set("displayedValue", this._expiryDateDisplayValue);
				}
			}), true));
		},

		_onChangeExpireDate: function() {
			this.expireDateRadio.set("checked", true);
			this.expireDlg.setDisabledOKButton(!this.expireDate.isValid());
		},

		_onChangeExpireDateRadio: function() {
			if (this.expireDateRadio.get("checked")) {
				if (this.expireDate.get("displayedValue").trim() == "") {
					this.expireDlg.setDisabledOKButton(true);
				} else {
					this.expireDlg.setDisabledOKButton(!this.expireDate.isValid());
				}
			} else {
				this.expireDlg.setDisabledOKButton(false);
			}
		},

		_onCancelExpireDialog: function() {
			this.expireDlg.onCancel();
		},

		_onPaste: function() {
			// Allow the paste to finish before firing the change notification.
			setTimeout(lang.hitch(this, function() {
				this._onChangePassword();
			}), 0);
		},

		_onChangePassword: function() {
			// If the user is appending to the default password, replace with the value they are adding.
			var passwordValue = this.password.get("value");
			if (this._changedPassword == false && passwordValue.substring(0, this._defaultSetPassword.length) === this._defaultSetPassword) {
				this.password.set("value", passwordValue.substring(this._defaultSetPassword.length, passwordValue.length));
			}
			this._changedPassword = true;
		},

		_onOkExpireDialog: function() {
			var expiryDate = this.neverExpireRadio.get("checked") ? null : this.expireDate.getValue();
			var expiryDateDisplayValue = this.neverExpireRadio.get("checked") ? "" : this.expireDate.get("displayedValue");
			if (this._expiryDate != expiryDate) {
				this._expiryDate = expiryDate;
				this._expiryDateDisplayValue = expiryDateDisplayValue;
			}
			this._setExpireButtonLabel();
			this.expireDlg.onCancel();
		},

		_setExpireButtonLabel: function() {
			this.expireButton.set("label", this._expiryDateDisplayValue ? this._expiryDateDisplayValue : this.messages.share_expire_none);
		},

		resize: function() {
			this.inherited(arguments);
			this.borderContainer.resize();
		},

		/**
		 * Initialize the my email widget.
		 * 
		 * @private
		 */
		_initMyEmail: function() {
			this.myEmail.set("placeholder", this.messages.share_email_address_placeholder);
			this.myEmail.set("pattern", this._emailFilter);
			this.myEmail.set("invalidMessage", this.messages.share_email_address_invalid);
			this.myEmail.set("readOnly", Desktop.shareMyEmailModifiable != undefined ? !Desktop.shareMyEmailModifiable : false);

			this.myEmail.isValid = lang.hitch(this, function() {
				var val = this.myEmail.validator(this.myEmail.get("value"), this.myEmail.get('constraints'));
				//if (val) {
				//if (this.myEmail.get("value") && this._isEmailIdInList(this.myEmail.get("value"))) {
				//val = false;
				//}
				//}
				return val;
			});
			this.myEmail.getErrorMessage = lang.hitch(this, function() {
				//if (this.myEmail.get("value") && this._isEmailIdInList(this.myEmail.get("value"))) {
				//return this.messages.share_cannot_share_with_self;
				//} else {
				return this.messages.share_email_address_invalid;
				//}
			});

			this.own(aspect.before(this.myEmail.domNode, "onkeyup", lang.hitch(this, function() {
				this._shareButton.set("disabled", !this._isValid());
			}), true));
		},

		/**
		 * Initialize the share with email widget.
		 * 
		 * @private
		 */
		_initShareWithEmail: function() {
			this.own(aspect.after(this.shareWithEmailList, "onItemRemoved", lang.hitch(this, function() {
				this._shareButton.set("disabled", !this._isValid());
				this._setShareWithPlaceholder();
				this.myEmail.validate(); // Validating my email.  My email may be valid now that a share with email is removed.
			})));

			this.own(aspect.after(this.shareWithEmailList, "onItemAdded", lang.hitch(this, function() {
				this._shareButton.set("disabled", !this._isValid());
				this._setShareWithPlaceholder();
				this.shareWithEmailInput.focus();
				winUtils.scrollIntoView(this.shareWithEmailInput.domNode);
			})));

			this._setShareWithPlaceholder();
			this.shareWithEmailInput.set("pattern", this._emailFilter);
			this.shareWithEmailInput.set("invalidMessage", this.messages.share_email_address_invalid);

			this.shareWithEmailInput.isValid = lang.hitch(this, function() {
				var val = this.shareWithEmailInput.validator(this.shareWithEmailInput.get("value"), this.shareWithEmailInput.get('constraints'));
				if (val) {
					// Check if all the email addresses are valid
					var emailAddresses = this._getEmailAddresses(this.shareWithEmailInput.get("value"));
					var myEmail = this.myEmail.get("value").trim();
					for (var i = 0; i < emailAddresses.length; i++) {
						var emailAddress = emailAddresses[i];
						if (!emailAddress.match(this._emailFilter)) {
							val = false;
							break;
							//} else if (emailAddress == myEmail) {
							//val = false;
							//break;
						}
					}
				}
				return val;
			});
			this.shareWithEmailInput.getErrorMessage = lang.hitch(this, function() {
				//var emailAddresses = this._getEmailAddresses(this.shareWithEmailInput.get("value"));
				//var myEmail = this.myEmail.get("value").trim();
				//var isMyEmail = false;
				//for ( var i = 0; i < emailAddresses.length; i++) {
				//if (emailAddresses[i] == myEmail) {
				//isMyEmail = true;
				//break;
				//}
				//}
				//if (isMyEmail) {
				//return this.messages.share_cannot_share_with_self;
				//} else {
				return this.messages.share_email_address_invalid;
				//}
			});

			this.own(aspect.after(this.shareWithEmailInput.domNode, "onkeyup", lang.hitch(this, function() {
				this._shareButton.set("disabled", !this._isValid());
			}), true));

			this.own(aspect.after(this.shareWithEmailInput, "onBlur", lang.hitch(this, function() {
				// Automatically add the share with input email address to the list after blur.
				if (this.shareWithEmailInput.get("value") != "") {
					this._addToShareWithEmailList();
				}
			}), true));
		},

		/**
		 * Show the placeholder on the share with input if there are no items in the list.
		 * 
		 * @private
		 */
		_setShareWithPlaceholder: function() {
			if (this.shareWithEmailList.getItems().length == 0) {
				this.shareWithEmailInput.set("placeholder", this.messages.share_email_addresses_placeholder);
			} else {
				this.shareWithEmailInput.set("placeholder", "");
			}
		},

		/**
		 * Fired when there is an email addresses that should be handled.
		 * 
		 * @private
		 */
		_onEmailChange: function(evt) {
			if (evt && evt.keyCode == keys.ENTER) {
				if (this.shareWithEmailInput.isValid()) {
					this._addToShareWithEmailList();
				} else {
					this.shareWithEmailInput.validate(); // Shows the error message
				}
			} else if (this._shareWithInputContainsDataAndSeparator()) {
				this._addToShareWithEmailList();
			}
		},

		/**
		 * Returns boolean indicating if the share with input contains data plus a separator.
		 * 
		 * @private
		 */
		_shareWithInputContainsDataAndSeparator: function() {
			var email = this.shareWithEmailInput.get("value");
			if (email.length > 0) {
				var startLookForSeparator = false; // Look for separator only after a valid input char is entered
				for (var i = 0; i < email.length; i++) {
					var c = email[i];
					if (startLookForSeparator) {
						if (this._isSeparator(c)) {
							return true;
						}
					} else if (!this._isSeparator(c)) {
						startLookForSeparator = true;
					}
				}
			}
			return false;
		},

		/**
		 * Returns boolean indicating if the email id is in the list.
		 * 
		 * @private
		 */
		_isEmailIdInList: function(id) {
			var alreadyAdded = false;
			var items = this.shareWithEmailList.getItems();
			for (var i = 0; i < items.length; i++) {
				if (id === items[i].id) {
					alreadyAdded = true;
					break;
				}
			}
			return alreadyAdded;
		},

		/**
		 * Adds the share with input emails to the list.
		 * 
		 * @private
		 */
		_addToShareWithEmailList: function() {
			if (this.shareWithEmailInput.isValid()) {
				var email = this.shareWithEmailInput.get("value").trim();
				var emailAddresses = this._getEmailAddresses(email);
				for (var i = 0; i < emailAddresses.length; i++) {
					var emailAddress = emailAddresses[i];
					this.shareWithEmailList.addItem({
						id: emailAddress,
						displayName: emailAddress
					});
				}
				this.shareWithEmailInput.set("value", "");
			} else {
				this.shareWithEmailInput.validate();
			}
		},

		/**
		 * Returns boolean indicating if the input is a separator.
		 * 
		 * @private
		 */
		_isSeparator: function(c) {
			return (c == " " || c == ";" || c == ",");
		},

		/**
		 * Return the email addresses from the input data. Split the data on comma, semicolon, and space.
		 * 
		 * @private
		 */
		_getEmailAddresses: function(data) {
			var emails = [];
			var currentEmail = "";
			for (var i = 0; i < data.length; i++) {
				var c = data[i];
				if (this._isSeparator(c)) {
					if (currentEmail.length > 0) {
						emails.push(currentEmail);
					}
					currentEmail = "";
				} else {
					currentEmail += c;
				}
			}
			if (currentEmail.length > 0) {
				emails.push(currentEmail);
			}
			return emails;
		},

		/**
		 * Returns true if the screen data is valid.
		 * 
		 * @private
		 */
		_isValid: function() {
			if (!this.shareWithEmailInput.isValid()) {
				return false;
			} else if (!this.myEmail.isValid() || this.myEmail.get("value") == "") {
				return false;
			} else {
				return true;
			}
		},

		/**
		 * Called when the user hits the Share button. Saves the data to the mid-tier.
		 * 
		 * @private
		 */
		_onShare: function() {
			if (this._isValid()) {
				var data = {
					"shareMode": this.shareMode,
					"shareWith": this.shareWithEmailList.getItems(),
					"myEmail": this.myEmail.get("value"),
					"comment": this.comment.get("value"),
				};
				// If the user can update the share permissions, then include them in the request.
				if (!this.allowDownload.get("disabled")) {
					data.allowDownload = this.allowDownload.get("checked");
					data.expireDate = this._expiryDate;
					data.expireDateDisplayValue = this._expiryDateDisplayValue;
					data.changedPassword = this._changedPassword;
					// If the password changed, then include it in the request.
					if ((this.shareMode == 0) || (this._changedPassword)) {
						data.password = this.password.get("value");
					}
				}
				this.item.share(data, lang.hitch(this, function() {
					this.onCancel();
				}));
			}
		}
	});

	return ShareDialog;
});
