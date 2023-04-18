/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/array",
	"dojo/_base/lang",
	"dojo/_base/connect",
	"dojo/_base/sniff",
	"dojo/dom-construct",
	"dojo/dom-class",
	"dojo/dom-attr",
	"dojo/string",
	"dojo/aspect",
	"dojo/dom-style",
	"dijit/registry",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"ecm/LoggerMixin",
	"ecm/model/admin/AdminData",
	"ecm/model/admin/RepositoryConfig",
	"ecm/model/admin/RepositoryData",
	"ecm/widget/admin/_NavigatorAdminTabBase",
	"ecm/widget/HoverHelp",
	"ecm/widget/ValidationTextBox",
	"ecm/widget/FilteringSelect",
	"ecm/widget/admin/RepositorySystemProperties",
	"ecm/widget/admin/RepositoryConfigurationParameters",
	"ecm/widget/admin/RepositoryFolders",
	"ecm/widget/admin/RepositorySearch",
	"ecm/widget/admin/RepositoryOfficeConf",
	"ecm/widget/admin/RepositoryConnections",
	"ecm/widget/RadioButton",
	"ecm/widget/RangeBoundTextBox",
	"ecm/widget/dialog/BaseDialog",
	"ecm/MessagesMixin",
	"ecm/model/Repository",
	"ecm/model/ContentClass",
	"ecm/model/Desktop",
	"ecm/widget/admin/AdminLoginDialog",
	"ecm/widget/dialog/MessageDialog",
	"idx/layout/BorderContainer",
	"dijit/form/Button",
	"dijit/form/Select",
	"dijit/layout/ContentPane",
	"dijit/layout/ScrollingTabController",
	"dijit/layout/TabContainer",
	"dojo/store/Memory",
	"ecm/widget/admin/RepositoryTabController",
	"dojo/has!dojo-bidi?dojox/string/BidiComplex",
	"dojo/text!./templates/TabRepository.html"
], //

function(declare, array, lang, connect, has, construct, domClass, domAttr, string, aspect, style, registry, _TemplatedMixin, _WidgetsInTemplateMixin, LoggerMixin, AdminData, RepositoryConfig, RepositoryData, _NavigatorAdminTabBase, HoverHelp, ValidationTextBox, FilteringSelect, RepositorySystemProperties, RepositoryConfigurationParameters, RepositoryFolders, RepositorySearch, RepositoryOfficeConf, RepositoryConnections, RadioButton, RangeBoundTextBox, BaseDialog, MessagesMixin, Repository, ContentClass,//
Desktop, AdminLoginDialog, MessageDialog, BorderContainer, Button, Select, ContentPane, ScrollingTabController, TabContainer, MemoryStore, RepositoryTabController, BidiComplex, template) {

	/**
	 * @private Part of the NavigatorAdminPane widget.
	 * @name ecm.widget.admin.TabRepository
	 * @class Provides a tab that is used to view and configure a repository. Users use this tab to edit repository
	 *        parameters, system properties, and folders.
	 */

	return declare("ecm.widget.admin.TabRepository", [
		_NavigatorAdminTabBase,
		_TemplatedMixin,
		MessagesMixin,
		_WidgetsInTemplateMixin,
		LoggerMixin
	], {

		templateString: template,
		widgetsInTemplate: true,

		_loginDialog: null,
		_ODSSLFieldsRequired: null,

		/**
		 * Overwritten to initialize this widget.
		 */
		initialize: function() {
			var id = "";
			var action = "new";
			var type = this._myUserData;
			if (this._myAdminModel && this._myAdminModel.id) {
				id = this._myAdminModel.id;
				action = "edit";
				type = this._myAdminModel.getType();
			} else if (this._myAdminModelForCopy && this._myAdminModelForCopy.id) {
				id = this._myAdminModelForCopy.id;
				action = "copy";
				type = this._myAdminModelForCopy.getType();
			}
			this.textDir = has("text-direction");
			this.repositoryData = RepositoryData.createRepositoryData(id, action, type, this._SECURITY_TOPIC);
			this.repositoryData.repositoryConfig = this._myAdminModel ? this._myAdminModel : this._myAdminModelForCopy;

			this.connectButton.set("disabled", true);
			this._disableSave();
			this._disableReset();
			if (this.repositoryData.isEdit()) {
				this.idField.set('disabled', true);
			}
			this._setHoverHelp();
			if (this.repositoryData.type == "box") {
				this._instructions.innerHTML = this._messages.admin_box_instructions;
			}

			this.resetButton.set("title", ecm.messages.reset_hover);
			this._general.set("title", ecm.messages.admin_general);
			this._configurationParameters.set("title", ecm.messages.admin_configuration_parameters);
			this._systemProperties.set("title", ecm.messages.admin_system_properties);
			this._repositoryFolders.set("title", ecm.messages.admin_browse);
			this._repositorySearch.set("title", ecm.messages.admin_search);
			this._repositoryOfficeConf.set("title", ecm.messages.admin_office_conf);
			this._repositoryConnections.set("title", ecm.messages.admin_collaboration);
			this._updateName(this.repositoryData.isEdit() ? this._myAdminModel.getName() : ecm.messages.admin_new_repository);

			this.own(aspect.after(this._tabContainer, "selectChild", lang.hitch(this, "_selectTab"), true));
			this.own(aspect.after(Desktop, "onSessionExpired", lang.hitch(this, "sessionExpiredHandler"), true));

			this.registerTab(this._configurationParameters, [
				"p8",
				"cm",
				"od",
				"cmis",
				"box"
			]);
			this.registerTab(this._systemProperties, [
				"p8",
				"cm",
				"od",
				"cmis"
			]);
			this.registerTab(this._repositoryFolders, [
				"p8",
				"cm",
				"od",
				"cmis"
			]);
			this.registerTab(this._repositorySearch, [
				"p8",
				"cm",
				"od",
				"cmis"
			]);
			this.registerTab(this._repositoryOfficeConf, [
				"p8",
				"cm"
			]);
			this.registerTab(this._repositoryConnections, [
				"p8"
			]);


			this._loadData();
		},

		_onNameChange: function() {
			if (!this.idField.get('disabled')) {
				this.idField.set('value', this._getIdValueFromName(this.nameField.get('value')));
			}
			this._onFieldChange();
		},

		_setHoverHelp: function() {
			this.idField.setHoverHelp(this.idFieldHoverHelp);
			if (this.idField.get('disabled')) {
				this.idFieldHoverHelp.set('message', this._messages.admin_repository_id_disabled_hover);
				this.idFieldHoverHelp.setFocusable(true);
			}
			this.nameField.setHoverHelp(this.nameFieldHoverHelp);
			var type = this.repositoryData.type;
			if (type == "cm") {
				this.cmserverField.setHoverHelp(this.cmserverFieldHoverHelp);
			} else if (type == "p8") {
				var msg = ecm.messages.admin_server_p8_name_hover + " <a href='#' onclick='ecm.model.admin.appCfg.openSupport1HelpWindow(\"p8phx004.htm\")'>" + ecm.messages.learn_more + "</a>";
				this.p8serverFieldHoverHelp._setMessageAttr(msg);
				this.p8serverField.setHoverHelp(this.p8serverFieldHoverHelp);
				this.objectStore.setHoverHelp(this.objectStoreFieldHoverHelp);
				this.objectStoreDisplayName.setHoverHelp(this.objectStoreDisplayNameFieldHoverHelp);
			} else if (type == "od") {
				this.odserverField.setHoverHelp(this.odserverFieldHoverHelp);
				if (has("dojo-bidi")) {
					BidiComplex.attachInput(this.odserverField.focusNode, "URL");
				}
				this.portField.setHoverHelp(this.portFieldHoverHelp);
				this.enableODSSL.setHoverHelp(this.rcODUseSSLFieldHoverHelp);
				this.disableODSSL.setHoverHelp(this.rcODUseSSLFieldHoverHelp);
				this.keyringDatabaseFile.setHoverHelp(this.rcodKeyringDatabaseFileHoverHelp);
				this.keyringStashFile.setHoverHelp(this.rcodKeyringStashFileHoverHelp);
			} else if (type == "cmis") {
				this.cmisUrlField.setHoverHelp(this.cmisUrlFieldHoverHelp);
				this.cmisRepositoryID.setHoverHelp(this.cmisRepositoryIDHoverHelp);
			} else if (type == "box") {
				this.enableBoxOAuth.setHoverHelp(this.enableBoxOAuthHoverHelp);
				this.disableBoxOAuth.setHoverHelp(this.enableBoxOAuthHoverHelp);
			}
		},

		equals: function(widget) {
			var equals = this.inherited(arguments);
			if (equals && this.repositoryData.type != widget.repositoryData.type) { // check for type being the same - this allows multiple new repository tabs to be open
				equals = false;
			}
			return equals;
		},

		sessionExpiredHandler: function(request, error) {
			// If a desktop repository was attached to the request, the desktop will be handling the session expired.
			if (!request.repository) {
				this._setConnected(false);
				this._tabContainer.selectChild(this._general);
			}
		},

		_loadData: function() {
			this.repositoryData.loadDataBeforeLogOn(lang.hitch(this, function() {
				this._repositorySearch.setData(this.repositoryData);
				this._repositoryFolders.setData(this.repositoryData);
				this._repositoryOfficeConf.setData(this.repositoryData);
				this._repositoryConnections.setData(this.repositoryData);
				this._configurationParameters.setData(this.repositoryData);
				this._systemProperties.setData(this.repositoryData);

				this._loadGeneralTab();
			}));
		},

		_loadGeneralTab: function() {
			this._init = false;

			this.idField.set('value', this.repositoryData.repositoryConfig.id);
			this.idField.pattern = '([a-zA-Z0-9])*';
			this.idField.invalidMessage = this._messages.admin_id_invalid;

			this.nameField.set('value', this.repositoryData.repositoryConfig.getName());
			this.nameField.pattern = '([^"*|<>?:\\\\/;])*';
			this.nameField.invalidMessage = this._messages.admin_name_invalid;
			this.repositoryData.repositoryConfig.setName(this.nameField.get('value'));


			this.protocol.set("disabled", true);

			if (this.repositoryData.type == "p8") {
				// WSI Protocol is supported on CE 5.2.1.x
				var onlyWSI = false; 
				if (this.repositoryData.repositoryConfig && this.repositoryData.repositoryConfig["_attributes"] && this.repositoryData.repositoryConfig._attributes["enableWSI"]) 
					onlyWSI = true;
				this.p8serverField.set('value', this.repositoryData.repositoryConfig.getServerName());
				this.objectStore.set('value', this.repositoryData.repositoryConfig.getObjectStore() ? this.repositoryData.repositoryConfig.getObjectStore() : "");
				this.objectStoreDisplayName.set('value', this.repositoryData.repositoryConfig.getObjectStoreDisplayName() ? this.repositoryData.repositoryConfig.getObjectStoreDisplayName() : "");

				var protocol = this.repositoryData.repositoryConfig.getProtocol() ? this.repositoryData.repositoryConfig.getProtocol() : "Navigator";
				if(onlyWSI && (!this.repositoryData.repositoryConfig.id || this.repositoryData.repositoryConfig.id.length ==  0 ))
					protocol = "FileNetP8WSI";
				this.repositoryData.repositoryConfig.setProtocol(protocol);
				this.protocol.set('value', protocol);

				this.objectStoreDisplayName.pattern = '([^"*|<>?:\\\\/;])*';
				this.objectStoreDisplayName.invalidMessage = this._messages.admin_name_invalid;
			} else if (this.repositoryData.type == "od") {
				this._configurationParameters.set("iconClass", "");
				this._configurationParameters.loadData(this);
				this._configurationParameters.resize();
				this._repositorySearch.loadData(this);
				this.odserverField.set('value', this.repositoryData.repositoryConfig.getServerName());
				if (!this.repositoryData.repositoryConfig.getPortNumber()) {
					this.repositoryData.repositoryConfig.setPortNumber("1445");
				}
				this.portField.set('value', this.repositoryData.repositoryConfig.getPortNumber() ? this.repositoryData.repositoryConfig.getPortNumber() : "");

				if (this.repositoryData.repositoryConfig.getODSSL()) {
					this.enableODSSL.set('checked', true);
				} else {
					this.disableODSSL.set('checked', true);
				}
				this.keyringDatabaseFile.set('value', this.repositoryData.repositoryConfig.getODKeyringDBFile());
				this.keyringStashFile.set('value', this.repositoryData.repositoryConfig.getODKeyringStashFile());
				this.setODSSLEnablement();
			} else if (this.repositoryData.type == "cm") {
				this._loadCMServerList();
			} else if (this.repositoryData.type == "cmis") {
				this.cmisUrlField.set('value', this.repositoryData.repositoryConfig.getServerName());
				this.cmisRepositoryID.set('value', this.repositoryData.repositoryConfig.getCMISReposID() ? this.repositoryData.repositoryConfig.getCMISReposID() : "");
			} else if (this.repositoryData.type == "box") {
				// TODO: Handle any parameters required for Box
				if (this.repositoryData.repositoryConfig.isOAuthEnabled()) {
					this.enableBoxOAuth.set('checked', true);
				} else {
					this.disableBoxOAuth.set('checked', true);
				}
				this.boxOAuthClientId.set('value', this.repositoryData.repositoryConfig.getOAuthClientId());
				this.boxOAuthClientSecret.set('value', this.repositoryData.repositoryConfig.getOAuthClientSecret());
				this.boxOAuthSubdomain.set('value', this.repositoryData.repositoryConfig.getBoxOAuthSubdomain());
				this.boxEnterpriseId.set("value", this.repositoryData.repositoryConfig.getBoxEnterpriseId());
				this.boxPublicKeyId.set("value", this.repositoryData.repositoryConfig.getBoxPublicKeyId());
				this.boxPrivateKeyPath.set("value", this.repositoryData.repositoryConfig.getBoxPrivateKeyPath());
				if (this.repositoryData.repositoryConfig.isBoxServerTokenEnabled()){
					this.enableBoxServerAuth.set("checked", true);
				}
				else{
					this.enableBoxServerAuth.set("checked", false);
				}
				this.setBoxOAuthEnablement();
				if (this.repositoryData.repositoryConfig.isCorsUploadEnabled()){
					this.boxEnableCORS.set("checked", true);
				}
				else {
					this.boxEnableCORS.set("checked", false);
				}
			} else { // a plugin provided repository type
				this._buildPluginConfigPane();
			}

			this._enableTypeData(this.repositoryData.type);
			this._initConnectButton(lang.hitch(this, function() {
				this._checkSave();
				setTimeout(lang.hitch(this, function() {
					this._init = true;
				}), 300);
			}));
		},

		_initConnectButton: function(onComplete) {
			var repository = this.repositoryData.repository;
			if (this._init) {
				if (repository && repository.connected) {
					this._setConnected(true, onComplete);
				} else {
					this.connectButton.set("disabled", this.repositoryData.isNew() ? true : false);
					if (onComplete)
						onComplete();
				}
			} else {
				this.connectButton.set("disabled", this.repositoryData.isNew() ? true : false);
				if (onComplete)
					onComplete();
			}
		},

		_onReset: function() {
			if (this.isResetingMyFields()) {
				if (this._connected) {
					this._configurationParameters.resetData(this);
					this._systemProperties.resetData(this);
					this._repositorySearch.resetData(this);
					this._repositoryFolders.resetData(this);
					if (this.repositoryData.type == "p8" || this.repositoryData.type == "cm") {
						this._repositoryOfficeConf.resetData();
					}
					if (this.repositoryData.type == "p8") {
						this._repositoryConnections.resetData();
					}
				}
				this._markClean();
			} else {
				this.inherited(arguments);
				this._setConnected(false); // when hit the reset button - let's force showing the connect button if doing a new repository
			}
		},

		_markDirty: function() {
			this.inherited(arguments);
		},

		_markClean: function() {
			this.inherited(arguments);
		},

		_loadCMServerList: function() {
			var storeData = [];
			for (var i = 0; i < this.repositoryData.cmServers.length; i++) {
				storeData.push({
					"id": this.repositoryData.cmServers[i],
					"label": this.repositoryData.cmServers[i]
				});
			}
			this.cmserverField.set("store", new MemoryStore({
				data: storeData
			}));
			this.cmserverField.set('value', this.repositoryData.repositoryConfig.getServerName());
		},

		_enableTypeData: function(type) {
			style.set(this.cmData, "display", "none");
			style.set(this.odData, "display", "none");
			style.set(this.p8Data, "display", "none");
			style.set(this.cmisData, "display", "none");
			style.set(this.boxData, "display", "none");
			style.set(this.pluginData, "display", "none");
			if (type == "cm" || type == "od" || type == "p8" || type == "cmis" || type == "box") {
				style.set(this[type + "Data"], "display", "");
			} else {
				style.set(this.pluginData, "display", "");
			}
		},

		_buildPluginConfigPane: function() {
			ecm.model.admin.appCfg.getServerObjects(lang.hitch(this, function(types) {
				// find repositorytype (server object) that corresponds to the type for this repository
				for ( var i in types) {
					if (types[i].getType() == this.repositoryData.type) {
						this._configClass = types[i].getConfigClass();
						this._connectedConfigClass = types[i].getConnectedConfigClass();
						if (!this._connectedConfigClass && this._configurationParameters.controlButton) { // hide configuration parameters tab if no parameters
							style.set(this._configurationParameters.controlButton.domNode, "display", "none");
						}
						var configDijit = types[i].getConfigClass();
						if (!this._configDijit) {
							require([
								configDijit.split('.').join('/')
							], lang.hitch(this, function(cls) {
								this._configDijit = new cls();
							}));
						}
						connect.connect(this._configDijit, "onSaveNeeded", this, function() {
							this._onFieldChange();
						});
						this.pluginData.appendChild(this._configDijit.domNode);

						this._configDijit.startup();
					}
				}
				if (!this._configDijit) { // the plugin did not load correctly
					this.setErrorMessage(this.messages.admin_plugin_for_repository_not_loaded);
					style.set(this.connectButtonDiv, "display", "none");
					this.nameField.set('disabled', "true");
				} else {
					this._configDijit.load(this.repositoryData.repositoryConfig);
				}
			}), {
				login_desktop: Desktop.id,
				userid: ecm.model.desktop.userId,
				securityTopic: this._SECURITY_TOPIC.category
			});
		},

		_loadWithFieldValues: function(adminModel) {
			var isNewOrCopy = this.repositoryData.isNew() || this.repositoryData.isCopied();
			if (isNewOrCopy) {
				adminModel.id = this.idField.get('value');
				adminModel.setValue("id", adminModel.id);
			}
			adminModel.setName(this.nameField.get('value'));
			adminModel.setWarning(false);
			if (this.repositoryData.type == "p8") {
				adminModel.setServerName(this.p8serverField.get('value'));
				adminModel.setObjectStore(this.objectStore.get('value'));
				adminModel.setObjectStoreDisplayName(this.objectStoreDisplayName.get('value'));
				adminModel.setProtocol(this.protocol.get('value'));
			} else if (this.repositoryData.type == "od") {
				adminModel.setServerName(this.odserverField.get('value'));
				adminModel.setPortNumber(this.portField.get('value'));
				adminModel.setODSSL(this.enableODSSL.get('checked'));
				adminModel.setODKeyringDBFile(this.keyringDatabaseFile.get('value'));
				adminModel.setODKeyringStashFile(this.keyringStashFile.get('value'));
			} else if (this.repositoryData.type == "cm") {
				adminModel.setServerName(this.cmserverField.get('value'));
			} else if (this.repositoryData.type == "cmis") {
				adminModel.setServerName(this.cmisUrlField.get('value'));
				adminModel.setCMISReposID(this.cmisRepositoryID.get('value'));
				adminModel.setProtocol("CMIS/REST");
			} else if (this.repositoryData.type == "box") {
				adminModel.setOAuthEnabled(this.enableBoxOAuth.get('checked'));
				adminModel.setOAuthClientId(this.boxOAuthClientId.get('value'));
				adminModel.setOAuthClientSecret(this.boxOAuthClientSecret.get('value'));
				adminModel.setBoxOAuthSubdomain(this.boxOAuthSubdomain.get('value'));
				adminModel.setBoxServerTokenEnabled(this.enableBoxServerAuth.get("checked"));
				adminModel.setBoxEnterpriseId(this.boxEnterpriseId.get("value"));
				adminModel.setBoxPublicKeyId(this.boxPublicKeyId.get("value"));
				adminModel.setBoxPrivateKeyPath(this.boxPrivateKeyPath.get("value"));
				adminModel.setEnableCORSUpload(this.boxEnableCORS.get("checked"));
			} else {
				this._configDijit.save(adminModel);
			}

			if (this._connected || (this.repositoryData.type == "od")) {
				this._configurationParameters.loadWithFieldValues(adminModel);
				this._repositorySearch.loadWithFieldValues(adminModel);
			}
			if (this._connected) {
				this._systemProperties.loadWithFieldValues(adminModel);
				this._repositoryFolders.loadWithFieldValues(adminModel);
				if (this.repositoryData.type == "p8") {
					this._repositoryOfficeConf.loadWithFieldValues(adminModel);
					this._repositoryConnections.loadWithFieldValues(adminModel);
				} else if (this.repositoryData.type == "cm") {
					this._repositoryOfficeConf.loadWithFieldValues(adminModel);
				}
			}
		},

		onSelect: function() {
			if (!domAttr.has(this._general.controlButton.focusNode, "aria-describedby")) {
				domAttr.set(this._general.controlButton.focusNode, "aria-describedby", this._instructions.id);
			}
			this._disableTabs(this._connected ? false : true);
			if (this.repositoryData.type == "od") {
				style.set(this._systemProperties.controlButton.domNode, "display", "none");
				style.set(this._repositoryFolders.controlButton.domNode, "display", "none");
				style.set(this._repositoryOfficeConf.controlButton.domNode, "display", "none");
				style.set(this._repositoryConnections.controlButton.domNode, "display", "none");
			} else if (this.repositoryData.type == "cm") {
				style.set(this._repositoryConnections.controlButton.domNode, "display", "none");
			} else if (this.repositoryData.type == "p8") {
			} else if (this.repositoryData.type == "cmis") {
				style.set(this._repositoryOfficeConf.controlButton.domNode, "display", "none");
				style.set(this._repositoryConnections.controlButton.domNode, "display", "none");
			} else if (this.repositoryData.type == "box") {
				style.set(this._configurationParameters.controlButton.domNode, "display", "none");
				style.set(this._systemProperties.controlButton.domNode, "display", "none");
				style.set(this._repositoryFolders.controlButton.domNode, "display", "none");
				style.set(this._repositorySearch.controlButton.domNode, "display", "none");
				style.set(this._repositoryOfficeConf.controlButton.domNode, "display", "none");
				style.set(this._repositoryConnections.controlButton.domNode, "display", "none");
			} else { // plugin repository type
				style.set(this._systemProperties.controlButton.domNode, "display", "none");
				style.set(this._repositoryFolders.controlButton.domNode, "display", "none");
				style.set(this._repositorySearch.controlButton.domNode, "display", "none");
				style.set(this._repositoryOfficeConf.controlButton.domNode, "display", "none");
				style.set(this._repositoryConnections.controlButton.domNode, "display", "none");
				if (this._configDijit && !this._connectedConfigClass && this._configurationParameters.controlButton) { // hide configuration parameters tab if no parameters
					style.set(this._configurationParameters.controlButton.domNode, "display", "none");
				}
			}
		},

		_selectTab: function(page) {
			if (page.onSelect) {
				page.onSelect();
			}
		},

		_onFieldChange: function() {
			if (!this._init) // we have not finish initialization yet.
				return;

			if (this.repositoryData.type == "od") {
				this.setODSSLEnablement();
			}
			if (this.repositoryData.type == "box") {
				this.setBoxOAuthEnablement();
			}
			if (this._connected) {
				// If connected & there is a change on the general tab, then show the logon button & disable the tabs to force a re-connect
				var currentLogonParms = this.getLogonParams();
				for ( var i in currentLogonParms) {
					if (i != "displayName") { // don't need to re-connect for change in displayName
						if (lang.trim(this._connectedLogonParams[i]) != lang.trim(currentLogonParms[i])) {
							this._setConnected(false);
							break;
						}
					}
				}
			}
			if (!this._isResetingFields()) {
				this._markDirty();
			}
			this._checkSave();
		},

		setODSSLEnablement: function() {
			var useSSL = this.enableODSSL.get('checked');
			if ((this._ODSSLFieldsRequired == null) || (this._ODSSLFieldsRequired != useSSL)) {
				this.keyringDatabaseFile.set('disabled', !this.enableODSSL.get('checked'));
				this.keyringStashFile.set('disabled', !this.enableODSSL.get('checked'));
				this.keyringDatabaseFile.set('required', this.enableODSSL.get('checked'));
				this.keyringStashFile.set('required', this.enableODSSL.get('checked'));
				this.odKeyringDatabaseRequired.hidden = !this.enableODSSL.get('checked');
				this.odKeyringStashRequired.hidden = !this.enableODSSL.get('checked');
				this._ODSSLFieldsRequired = useSSL;
			}
		},

		setBoxOAuthEnablement: function() {
			// If they are using developer authentication, hide the sections that don't apply.
			var developerEnabled = this.disableBoxOAuth.get("checked");
			if (developerEnabled){
				style.set(this.boxOAuthClientIdRow, "display", "none");
				style.set(this.boxOAuthClientSecretRow, "display", "none");
				style.set(this.boxOAuthSubDomainRow, "display", "none");
				style.set(this.boxEnterpriseIdRow, "display", "none");
				style.set(this.boxPublicKeyIdRow, "display", "none");
				style.set(this.boxPrivateKeyRow, "display", "none");
				style.set(this.boxServerUserEmailRow, "display", "none");
				style.set(this.enableCORSDiv, "display", "none");
			}
			else {
				style.set(this.boxOAuthClientIdRow, "display", "");
				style.set(this.boxOAuthClientSecretRow, "display", "");
				style.set(this.boxOAuthSubDomainRow, "display", "");
				
				var serverEnabled = this.enableBoxServerAuth.get("checked");
				if (serverEnabled){
					style.set(this.boxEnterpriseIdRow, "display", "");
					style.set(this.boxPublicKeyIdRow, "display", "");
					style.set(this.boxPrivateKeyRow, "display", "");
					style.set(this.boxServerUserEmailRow, "display", "");
					style.set(this.boxOAuthSubDomainRow, "display", "none");
					style.set(this.enableCORSDiv, "display", "none");
				}
				else {
					style.set(this.boxEnterpriseIdRow, "display", "none");
					style.set(this.boxPublicKeyIdRow, "display", "none");
					style.set(this.boxPrivateKeyRow, "display", "none");
					style.set(this.boxServerUserEmailRow, "display", "none");
					style.set(this.boxOAuthSubDomainRow, "display", "");
					style.set(this.enableCORSDiv, "display", "");
				}
			}
		},

		/**
		 * Overwritten to return if it is resetting the fields to the original values.
		 */
		_isResetingFields: function() {
			var isResetting = this.isResetingMyFields();
			if (this._connected || this.repositoryData.type == "od") {
				if (isResetting) {
					isResetting = this._configurationParameters.isResetingFields();
				}
				if (isResetting) {
					isResetting = this._systemProperties.isResetingFields();
				}
				if (isResetting) {
					isResetting = this._repositoryFolders.isResetingFields();
				}
				if (isResetting) {
					isResetting = this._repositorySearch.isResetingFields();
				}
				if (isResetting && (this.repositoryData.type == "p8" || this.repositoryData.type == "cm")) {
					isResetting = this._repositoryOfficeConf.isResetingFields();
				}
				if (isResetting && this.repositoryData.type == "p8") {
					isResetting = this._repositoryConnections.isResetingFields();
				}				
				
				
			}
			return isResetting;
		},

		isResetingMyFields: function() {
			var isResetting = true;
			if (this.repositoryData.repositoryConfig) {
				if ((this.idField.get('value') != this.repositoryData.repositoryConfig.id) || (this.nameField.get('value') != this.repositoryData.repositoryConfig.getName())) {
					isResetting = false;
				}
				if (this.repositoryData.type == "od") {
					if ((!has("dojo-bidi") ? this.odserverField.get('value') : BidiComplex.stripSpecialCharacters(this.odserverField.get('value'))) != this.repositoryData.repositoryConfig.getServerName()) {
						isResetting = false;
					}
					if (this.portField.get('value') != this.repositoryData.repositoryConfig.getPortNumber()) {
						isResetting = false;
					}

					var odSSL = this.enableODSSL.get('checked');
					if ((odSSL != this.repositoryData.repositoryConfig.getODSSL()) || (this.keyringDatabaseFile.get('value') != this.repositoryData.repositoryConfig.getODKeyringDBFile()) || (this.keyringStashFile.get('value') != this.repositoryData.repositoryConfig.getODKeyringStashFile())) {
						isResetting = false;
					}
				} else if (this.repositoryData.type == "p8") {
					if (this.p8serverField.get('value') != this.repositoryData.repositoryConfig.getServerName()) {
						isResetting = false;
					}
					if (this.objectStore.get('value') != this.repositoryData.repositoryConfig.getObjectStore()) {
						isResetting = false;
					}
					if (this.objectStoreDisplayName.get('value') != this.repositoryData.repositoryConfig.getObjectStoreDisplayName()) {
						isResetting = false;
					}
					if (this.protocol.get('value') != this.repositoryData.repositoryConfig.getProtocol()) {
						isResetting = false;
					}
				} else if (this.repositoryData.type == "cm") {
					if (this.cmserverField.get('value') != this.repositoryData.repositoryConfig.getServerName()) {
						isResetting = false;
					}
				} else if (this.repositoryData.type == "cmis") {
					if (this.cmisUrlField.get('value') != this.repositoryData.repositoryConfig.getServerName()) {
						isResetting = false;
					}
					if (this.cmisRepositoryID.get('value') != this.repositoryData.repositoryConfig.getCMISReposID()) {
						isResetting = false;
					}
				} else if (this.repositoryData.type == "box") {
					var boxOAuth = this.enableBoxOAuth.get('checked');
					var boxServerAuth = this.enableBoxServerAuth.get('checked');
					if (boxOAuth != this.repositoryData.repositoryConfig.isOAuthEnabled()) {
						isResetting = false;
					}
					else if (boxServerAuth != this.repositoryData.repositoryConfig.isBoxServerTokenEnabled()){
						isResetting = false;
					}
					if (this.boxOAuthClientId.get('value') != this.repositoryData.repositoryConfig.getOAuthClientId()){
						isResetting = false;
					}
					if (this.boxOAuthClientSecret.get('value') != this.repositoryData.repositoryConfig.getOAuthClientSecret()){
						isResetting = false;
					}
					if (this.boxEnterpriseId.get('value') != this.repositoryData.repositoryConfig.getBoxEnterpriseId()){
						isResetting = false;
					}
					if (this.boxPublicKeyId.get('value') != this.repositoryData.repositoryConfig.getBoxPublicKeyId()){
						isResetting = false;
					}
					if (this.boxPrivateKeyPath.get('value') != this.repositoryData.repositoryConfig.getBoxPrivateKeyPath()){
						isResetting = false;
					}
					if (this.boxOAuthSubdomain.get('value') != this.repositoryData.repositoryConfig.getBoxOAuthSubdomain()){
						isResetting = false;
					}
				} else {
					isResetting = false;
				}
			} else {
				if ((this.idField.get('value') != "") || (this.nameField.get('value') != "")) {
					isResetting = false;
				}
				if (this.repositoryData.type == "od") {
					if (this.portField.get('value') != "") {
						isResetting = false;
					}
				} else if (this.repositoryData.type == "p8") {
					if (this.objectStore.get('value') != "") {
						isResetting = false;
					}
					if (this.objectStoreDisplayName.get('value') != "") {
						isResetting = false;
					}
				} else if (this.repositoryData.type == "cmis") {
					if (this.cmisUrlField.get('value') != "") {
						isResetting = false;
					}
					if (this.cmisRepositoryID.get('value') != "") {
						isResetting = false;
					}
				} else if (this.repositoryData.type == "box") {
					// TODO any logic needed here?
				} else {
					// TODO any logic needed here?
				}
			}
			return isResetting;
		},

		getLogonParams: function() {
			var params = {};
			params.displayName = this.nameField.get('value');
			if (this.repositoryData.type == "p8") {
				params.serverName = this.p8serverField.get('value');
				params.objectStore = this.objectStore.get('value');
				params.objectStoreDisplayName = this.objectStoreDisplayName.get('value');
				params.protocol = this.protocol.get('value');
			} else if (this.repositoryData.type == "od") {
				params.serverName = !has("dojo-bidi") ? this.odserverField.get('value') : BidiComplex.stripSpecialCharacters(this.odserverField.get('value'));
				params.portNumber = this.portField.get('value');
				params.useSSL = this.enableODSSL.get('checked') ? "true" : "false";
				params.keyringDBFile = this.keyringDatabaseFile.get('value');
				params.keyringStashFile = this.keyringStashFile.get('value');
			} else if (this.repositoryData.type == "cm") {
				params.serverName = this.cmserverField.get('value');
			} else if (this.repositoryData.type == "cmis") {
				params.serverName = this.cmisUrlField.get('value');
				params.cmisRepositoryID = this.cmisRepositoryID.get('value');
				params.protocol = "CMIS/REST";
			} else if (this.repositoryData.type == "box") {
				params.oAuthEnabled = this.enableBoxOAuth.get('checked');
				params.oAuthClientId = this.boxOAuthClientId.get('value');
				params.oAuthClientSecret = this.boxOAuthClientSecret.get('value');
				params.boxOAuthSubdmain = this.boxOAuthSubdomain.get('value');
				params.boxServerTokenEnabled = this.enableBoxServerAuth.get("checked");
				if (params.boxServerTokenEnabled){
					params.boxEnterpriseId = this.boxEnterpriseId.get("value");
					params.boxPublicKeyId = this.boxPublicKeyId.get("value");
					params.boxPrivateKeyPath = this.boxPrivateKeyPath.get("value");
				}
			} else {
				this._configDijit.getLogonParams(params);
			}
			return params;
		},

		/**
		 * Overwritten to actually save the data and invoke onComplete() with the status.
		 */
		_saveData: function(/* function(success) */onComplete, closingAfterSave) {
			var oldTeamspacesEnabled = this.repositoryData.repositoryConfig.getTeamspacesEnabled();
			this._loadWithFieldValues(this.repositoryData.repositoryConfig);
			var isEdit = this.repositoryData.isEdit();
			this.repositoryData.save((style.get(this.connectButtonDiv, "display") == "none"), lang.hitch(this, function(msg) {
				if( this.idField ){
					this.idField.set('disabled', true);
				}
				this._updateName(this.repositoryData.repositoryConfig.getName());
				this.setTitle(this.repositoryData.repositoryConfig.getName());
				if (isEdit) {
					var repository = this.repositoryData.repository;
					if (repository) {
						repository.repositoryConfig = this.repositoryData.repositoryConfig;
						repository.onChange(repository);
					}
				}
				
				if (this.repositoryData.type == "p8" || this.repositoryData.type == "cm") {
					if (this.repositoryData.repositoryConfig.getTeamspacesEnabled() != oldTeamspacesEnabled)
						Desktop.onTeamspacesValueChanged(this.repositoryData.repositoryConfig.id, this.repositoryData.repositoryConfig.getTeamspacesEnabled());
				}

				if (!closingAfterSave) {
					this._configurationParameters.refreshCMEntryTemplateEnabledClasses();
					this._configurationParameters.refreshCMBoxShareEnabledClasses();
					if( (this.repositoryData.type == "p8" || this.repositoryData.type == "cm") && this._repositoryOfficeConf ){
						this._repositoryOfficeConf._afterSaving();
					}
					
				}

				if (onComplete) {
					onComplete(true);
				}
			}));
		},

		_getRepositoryHeading: function() {
			var type = this.repositoryData.type;
			if (type == "cm") {
				return this._messages.admin_repository_cm_heading;
			} else if (type == "p8") {
				return this._messages.admin_repository_p8_heading;
			} else if (type == "ci") {
				return this._messages.admin_repository_ci_heading;
			} else if (type == "od") {
				return this._messages.admin_repository_od_heading;
			} else if (type == "cmis") {
				return (this._messages.admin_repository_cmis_heading);
			} else if (type == "box") {
				return (this._messages.admin_repository_box_heading);
			}
			return "${0}";
		},

		_updateName: function(name) {
			if (has("text-direction")) {
				name = this.enforceTextDirWithUcc(null, name);
			}
			construct.place("<label>" + string.substitute(this._getRepositoryHeading(), [
				name
			]) + "</label>", this.headingText, "only");
		},

		isUniqueId: function() {
			var isUnique = this.repositoryData.isUniqueId(this.idField.get('value'));
			if (!isUnique) {
				this.idField.setCustomValidationError(this._messages.admin_id_in_use);
			}
			this.idField.validate();
			return isUnique;
		},

		/**
		 * Overwritten to check if all the data is valid.
		 */
		_validateData: function(focus) {
			if (!this._init) // we have not finish initialization yet.
				return;

			this.connectButton.set("disabled", true);
			if (!this.idField.get('disabled') && !this.isUniqueId()) {
				if (focus) {
					this.idField.focus();
				}
				return false;
			}
			if (!this.idField.isValid() || (!this.idField.get('disabled') && (this.idField.get('value').length < 1))) {
				if (focus) {
					this.idField.focus();
				}
				return false;
			}
			if (!this.nameField.isValid() || (this.nameField.get('value').length < 1)) {
				if (focus) {
					this.nameField.focus();
				}
				return false;
			}
			if (this.repositoryData.type == "od") {
				if (!this.odserverField.isValid() || (this.odserverField.get('value').length < 1)) {
					if (focus) {
						this.odserverField.focus();
					}
					return false;
				}
				if (!this.portField.isValid() || (this.portField.get('value').length < 1)) {
					if (focus) {
						this.portField.focus();
					}
					return false;
				}
				if (this.enableODSSL.get('checked')) {
					if (this.keyringDatabaseFile.get('value').length < 1) {
						if (focus) {
							this.keyringDatabaseFile.focus();
						}
						return false;
					}
					if (this.keyringStashFile.get('value').length < 1) {
						if (focus) {
							this.keyringStashFile.focus();
						}
						return false;
					}
				}
			} else if (this.repositoryData.type == "p8") {
				if (!this.p8serverField.isValid() || (this.p8serverField.get('value').length < 1)) {
					if (focus) {
						this.p8serverField.focus();
					}
					return false;
				}
				if (!this.objectStore.isValid() || (this.objectStore.get('value').length < 1)) {
					if (focus) {
						this.objectStore.focus();
					}
					return false;
				}
				if (!this.objectStoreDisplayName.isValid() || (this.objectStoreDisplayName.get('value').length < 1)) {
					if (focus) {
						this.objectStoreDisplayName.focus();
					}
					return false;
				}
			} else if (this.repositoryData.type == "cm") {
				if (!this.cmserverField.isValid() || (this.cmserverField.get('value').length < 1)) {
					if (focus) {
						this.cmserverField.focus();
					}
					return false;
				}
			} else if (this.repositoryData.type == "cmis") {
				if (!this.cmisUrlField.isValid() || (this.cmisUrlField.get('value').length < 1)) {
					if (focus) {
						this.cmisUrlField.focus();
					}
					return false;
				}
				if (!this.cmisRepositoryID.isValid() || (this.cmisRepositoryID.get('value').length < 1)) {
					if (focus) {
						this.cmisRepositoryID.focus();
					}
					return false;
				}
			} else if (this.repositoryData.type == "box") {
				if (!this.disableBoxOAuth.get('checked')){
					if (!this.boxOAuthClientId.isValid() || this.boxOAuthClientId.get('value').length < 1){
						if (focus) {
							this.boxOAuthClientId.focus();
						}
						return false;
					}
					
					if (!this.boxOAuthClientSecret.isValid() || this.boxOAuthClientSecret.get('value').length < 1){
						if (focus) {
							this.boxOAuthClientSecret.focus();
						}
						return false;
					}
					
					if (this.enableBoxServerAuth.get('checked')){
						if (!this.boxEnterpriseId.isValid() || this.boxEnterpriseId.get('value').length < 1){
							if (focus) {
								this.boxEnterpriseId.focus();
							}
							return false;
						}
						
						if (!this.boxPublicKeyId.isValid() || this.boxPublicKeyId.get('value').length < 1){
							if (focus) {
								this.boxPublicKeyId.focus();
							}
							return false;
						}
						
						if (!this.boxPrivateKeyPath.isValid() || this.boxPrivateKeyPath.get('value').length < 1){
							if (focus) {
								this.boxPrivateKeyPath.focus();
							}
							return false;
						}
					}
				}
			} else {
				if (!this._configDijit || !this._configDijit.validate()) {
					return false;
				}
			}

			this.connectButton.set("disabled", false);

			var isValid = true;
			if (this._connected && (this.repositoryData.type == "cm" || this.repositoryData.type == "od" || this.repositoryData.type == "p8" || this.repositoryData.type == "cmis")) {
				isValid = this._configurationParameters.validateData(focus);
				if (isValid) {
					isValid = this._systemProperties.validateData(focus);
				}
				if (isValid) {
					isValid = this._repositoryFolders.validateData(focus);
				}
				if (isValid) {
					isValid = this._repositorySearch.validateData(focus);
				}
				if (isValid) {
					isValid = this._repositoryOfficeConf.validateData(focus);
				}
				if (isValid) {
					isValid = this._repositoryConnections.validateData(focus);
				}
						
			}
			return isValid;
		},

		_onConnectToRepository: function() {
			if (this._loginDialog) {
				this._loginDialog.destroyRecursive();
			}

			this._loginDialog = new AdminLoginDialog();
			var id = this.repositoryData.repositoryConfig.id ? this.repositoryData.repositoryConfig.id : this.idField.get('value');
			var repository = new Repository({
				id: id,
				name: this.nameField.get('value'),
				type: this.repositoryData.repositoryConfig.getType(),
				serverTokenEnabled: this.enableBoxServerAuth.get("checked"),
				isForAdministration: true
			});
			ecm.model.desktop._storeAdminRepository(repository);

			repository._logonParams = this.getLogonParams();
			this._loginDialog.show(repository.type, repository.id, repository.name, repository._logonParams, lang.hitch(this, function(response) {
				this.repositoryData.repositoryConfig.setTempId(id); // we need this info for test of tabs
				this.repositoryData.id = id;
				if (response) {
					repository._loadRepository(response);
					if (this.repositoryData.isEdit()) {
						repository.name = this.repositoryData.repositoryConfig.getName();
					}
					if (this.repositoryData.type == "p8") {
						// Update the object store names.
						this.objectStore.set('value', repository.objectStore.symbolicName);
						this.objectStoreDisplayName.set('value', repository.objectStore.displayName);
					}
					this.repositoryData.repository = repository;
					this.repositoryData.privFindUsersAndGroups = response.privFindUsersAndGroups;
					this.repositoryData.capabilityAllVersionsSearchable = response.capabilityAllVersionsSearchable;
					this.repositoryData.folderSearchSupported = response.folderSearchSupported;
					array.some(response.servers, lang.hitch(this, function(server) {
						if (server.id == repository.id) {

							if (this.repositoryData.type == "cm") {
								this.repositoryData.repositoryConfig.setFolderingEnabled(server.priv_foldering);
								this.repositoryData.isCM842 = server.isCM842;
							} else if (this.repositoryData.type == "od") {
								this.repositoryData.isOD85 = server.isOD85;
							}
							return true;
						}
					}));
				}
				this._setConnected(true);
			}));
		},

		_setConnected: function(bool, onComplete) {
			this._connected = bool;
			if (bool) {
				this._connectedLogonParams = this.getLogonParams();
				this._hideLogonButton();
				this.repositoryData.loadData(lang.hitch(this, function() {
					
					// Load the server email user.
					if (this.repositoryData.repository.serverTokenEnabled){
						this.boxServerEmail.set("value", this.repositoryData.repository.userEmailAddress);
					}
					this._loadOtherTabs(onComplete);
				}));
			} else {
				this._connectedLogonParams = null;
				this._showLogonButton();
				this._disableTabs(true);
				if (onComplete)
					onComplete();
			}
		},

		_hideLogonButton: function() {
			style.set(this.connectButtonDiv, "display", "none"); // since we are connected, hide the connect button
		},

		_showLogonButton: function() {
			style.set(this.connectButtonDiv, "display", "");
		},

		_loadOtherTabs: function(onComplete) {
			if (this.repositoryData.type == "od") {
				//this._configurationParameters.resize();
				this._repositorySearch.loadData(this, lang.hitch(this, function() {
					this._configurationParameters.loadData(this, onComplete);
					this._disableTabs(false);
					if (onComplete)
						onComplete();
				}));
			} else if (this.repositoryData.type == "p8" || this.repositoryData.type == "cmis" || this.repositoryData.type == "cm") {

				this._systemProperties.loadData(this, lang.hitch(this, function() { // system and folder page is not shown for OD type of repository.
					this._repositorySearch.loadData(this, lang.hitch(this, function() {
						this._repositoryFolders.loadData(this, lang.hitch(this, function() {
							this._configurationParameters.loadData(this, lang.hitch(this, function() {
								this._showTSUpgradeMessage();
								this._showSyncUpgradeMessage();
								this._repositoryConnections.loadData(this, lang.hitch(this, function() {
									if (this.repositoryData.type == "p8" || this.repositoryData.type == "cm") {
										this._repositoryOfficeConf.loadData(this, lang.hitch(this, function() {
											this._disableTabs(false);
											if (onComplete)
												onComplete();
										}));
									} else {
										this._disableTabs(false);
										if (onComplete)
											onComplete();
									}
								}));
		
							}));
						}));
					}));
				}));
			} else { // a custom repository type
				this._configurationParameters.loadData(this, lang.hitch(this, function() {
					this._disableTabs(false);
					if (onComplete)
						onComplete();
				}));
			}
		},

		_disableTabs: function(bool) {
			if (this._configurationParameters.controlButton) {
				this._configurationParameters.set("disabled", bool);// && !isOD);
				this._systemProperties.set("disabled", bool);
				this._repositoryFolders.set("disabled", bool);
				this._repositoryOfficeConf.set("disabled", bool);
				this._repositoryConnections.set("disabled", bool);
				this._repositorySearch.set("disabled", bool); //&& !isOD);
			}
			if (!bool) {
				this._checkSave();
			}
		},

		/**
		 * @private
		 */
		_showSyncUpgradeMessage: function() {
			var updateState = this.repositoryData.repositoryConfig._getSyncUpdateState();
			if (!updateState && this.repositoryData.repositoryConfig.getSyncEnabled()) {
				this.setErrorMessage(this._messages.synchUpgradeMsg, "inlineMessage inlineMessageWarning");
			}
		},

		/**
		 * @private
		 */
		_showTSUpgradeMessage: function() {
			var updateState = this.repositoryData.repositoryConfig._getTeamspaceUpdateState();

			if (!updateState && this.repositoryData.repositoryConfig.getTeamspacesEnabled()) {
				this.setErrorMessage(this._messages.teamspaceUpgradeMsg, "inlineMessage inlineMessageWarning");
			}
		},

		clearErrorMessage: function() {
			// Hide the message.
			style.set(this.inlineMessage, "display", "none");
			// Restore to default of error.
			attr.set(this.inlineMessage, "class", "inlineMessage inlineMessageError");
			// Remove the text.
			if (this.messageText.firstChild) {
				this.messageText.removeChild(this.messageText.firstChild);
			}
		},

		setErrorMessage: function(message, msgClassNames) {
			if (!msgClassNames)
				msgClassNames = "inlineMessage inlineMessageError";
			domAttr.set(this.inlineMessage, "class", msgClassNames);
			if (this.messageText.firstChild) {
				// Update the existing message text.
				this.messageText.firstChild.nodeValue = message;
			} else {
				// Create the message text.
				var textNode = document.createTextNode(message);
				this.messageText.appendChild(textNode);
			}
			style.set(this.inlineMessage, "display", "");
		},

		onHelp: function(topic) {
			if (topic)
				ecm.model.admin.appCfg.openNewHelpWindow.openNewHelpWindow(topic);
		},

		resize: function() {
			this.borderContainer.resize();
		}

	});

});
