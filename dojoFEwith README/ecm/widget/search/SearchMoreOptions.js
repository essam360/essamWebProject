/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/array",
	"dojo/_base/lang",
	"dojo/dom-class",
	"dijit/_WidgetBase",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"../../LoggerMixin",
	"../../model/SearchConfiguration",
	"../_OptionsLinkMixin",
	"./_ObjectTypeOption",
	"./_VersionOption",
	"./_PropertyTextOption",
	"./_FileTypeOption",
	"./_UserActionOption",
	"./_WorkOption",
	"./_ContentSizeOption",
	"../DropDownLink",
	"../DropDownDialog",
	"../HoverHelp",
	"dojo/text!./templates/SearchMoreOptions.html"
], function(declare, array, lang, domClass, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, LoggerMixin, SearchConfiguration, _OptionsLinkMixin, _ObjectTypeOption, _VersionOption, _PropertyTextOption, _FileTypeOption, _UserActionOption, _WorkOption, _ContentSizeOption, DropDownLink, DropDownDialog, HoverHelp, template) {

	/**
	 * @name ecm.widget.search.SearchMoreOptions
	 * @class Provides a widget that displays additional options for a search. The additional options include the object
	 *        type, version, join relationship of the property, and text conditions.
	 * @augments dijit._WidgetBase
	 */
	var options = declare("ecm.widget.search.SearchMoreOptions", [
		_WidgetBase,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		_OptionsLinkMixin
	], {
		/** @lends ecm.widget.search.SearchMoreOptions.prototype */
		templateString: template,

		/**
		 * The label of the widget.
		 */
		label: ecm.messages.search_options,

		/**
		 * The boolean value that controls visibility of the object type option.
		 */
		objectTypeOptionHidden: false,

		/**
		 * The boolean value that controls visibility of the version option.
		 */
		versionOptionHidden: false,

		/**
		 * The boolean value that controls visibility of the property text option.
		 */
		propertyTextOptionHidden: false,

		/**
		 * The boolean value that controls the visibility of the action filter.
		 */
		userActionOptionHidden: false,

		/**
		 * The boolean value that controls the visibility of the file type filter.
		 */
		fileTypeOptionHidden: false,

		/**
		 * The boolean value that controls the visibility of the work item filter.
		 * 
		 * @since 2.0.3
		 */
		workOptionHidden: false,

		/**
		 * The boolean value that controls visibility of property text readonly option.
		 */
		propertyTextReadOnlyOptionHidden: true,

		/**
		 * The boolean value that controls the visibility of the content size filter.
		 * 
		 * @since 2.0.3.5
		 */
		contentSizeOptionHidden: false,

		/**
		 * The constructor.
		 */
		constructor: function() {
			this._messages = ecm.messages;
		},

		/**
		 * @private
		 * @since 2.0.2
		 */
		doNotSummarizeOnClose: true,

		/**
		 * Initializes the widget.
		 */
		initialize: function() {
			this._versionOption.setHoverHelp(this._versionHoverHelp);
			this._userActionOption.setHoverHelp(this._userActionHoverHelp);
			this._workOption.setHoverHelp(this._workHoverHelp);

			var hasSingleObjectType = false;
			if (!this.objectTypeOptionHidden) {
				if (!this._selectedObjectType) {
					var searchConfig = SearchConfiguration.getSearchConfiguration({
						repository: this.repository
					});
					this._selectedObjectType = searchConfig.getDefaultSearchType();
				}
				this._objectTypeOption.initialize(this.repository, this._selectedObjectType);
				if (this._objectTypeOption._select.getOptions().length == 1) {
					hasSingleObjectType = true;
					this._objectTypeOption.set("disabled", true); // excluded in summary
					domClass.add(this._objectTypeOptionNode, "dijitHidden");
				}
			} else {
				domClass.add(this._objectTypeOptionNode, "dijitHidden");
			}

			this.versionOptionHidden = this.versionOptionHidden || this.repository._isBox();
			if (!this.versionOptionHidden) {
				this._versionOption.initialize(this.repository);
				if (!this._selectedVersionOption) {
					this._selectedVersionOption = this.repository.defaultSearchVersion || (this.repository._isP8() ? ecm.widget.search.SearchMoreOptions.VERSION_OPTION.RELEASED : ecm.widget.search.SearchMoreOptions.VERSION_OPTION.CURRENT);
				}
				if (this._selectedVersionOption != this._versionOption.getValue()) {
					this._versionOption.setValue(this._selectedVersionOption);
				}
				this._versionHoverHelp.set("message", this.repository._isP8() ? this._messages.search_version_hover_help_p8 : this._messages.search_version_hover_help_cm);
				if (!this._versionOptionDisabled)
					this._versionOption.set("disabled", this.repository._isP8Like() && this._objectTypeOption.getValue() == "folder");
				if (hasSingleObjectType && this.repository._isP8Like() && this._objectTypeOption.getValue() == "folder")
					domClass.add(this._versionOptionNode, "dijitHidden");
			} else {
				domClass.add(this._versionOptionNode, "dijitHidden");
				if (this.repository._isBox()) {
					this._versionOptionDisabled = true;
					this._versionOption.set("disabled", true); // excluded in summary
				}
			}

			if (this._propertyTextAnded === undefined) {
				this._propertyTextAnded = true;
			}
			if (this._propertyTextAnded != this._propertyTextOption.isAnded()) {
				this._propertyTextOption.setAnded(this._propertyTextAnded);
			}

			this._propertyTextReadOnlyOptionLabel.innerHTML = ecm.messages.search_using + " " + (this._propertyTextOption.isAnded() ? ecm.messages.search_property_and_text_criteria : ecm.messages.search_property_or_text_criteria);
			this.propertyTextOptionHidden = this.propertyTextOptionHidden || !this.repository._isCM();
			if (this.propertyTextOptionHidden) {
				domClass.add(this._propertyTextOptionNode, "dijitHidden");

				if (this.propertyTextReadOnlyOptionHidden) {
					this._propertyTextOption.set("disabled", true); // excluded in summary
				} else {
					domClass.remove(this._propertyTextReadOnlyOptionNode, "dijitHidden");
					this._propertyTextOption.set("disabled", false); // included in summary
				}
			}

			this.fileTypeOptionHidden = this.fileTypeOptionHidden || this.repository._isCM() || this.repository._isCmis() || (hasSingleObjectType && this.repository._isP8Like() && this._objectTypeOption.getValue() == "folder");
			if (this.fileTypeOptionHidden) {
				this._fileTypeOption.set("disabled", true);
				domClass.add(this._fileTypeOptionNode, "dijitHidden");
			}

			this.userActionOptionHidden = this.userActionOptionHidden || this.repository._isCmis() || this.repository._isBox();
			if (!this.userActionOptionHidden) {
				this._userActionOption.initialize(this.repository);
				this._userActionOption.setOn(this._userActionOn);
			} else {
				this._userActionOption.set("disabled", true);
				domClass.add(this._userActionOptionNode, "dijitHidden");
			}

			this.workOptionHidden = this.workOptionHidden || !this.repository._isCM();
			if (!this.workOptionHidden) {
				// Note: work option is initialized when opened to avoid fetching the processes unnecessarily
				this._workOption.setOn(this._workOptionOn);
				this._workOption.set("disabled", this._versionOption.getValue() == ecm.widget.search.SearchMoreOptions.VERSION_OPTION.ALL);
			} else {
				domClass.add(this._workOptionNode, "dijitHidden");
			}

			this.contentSizeOptionHidden = this.contentSizeOptionHidden || !this.repository._isBox();
			if (!this.contentSizeOptionHidden) {
				if (!this._selectedContentSize)
					this._selectedContentSize = "";
				if (this._selectedContentSize != this._contentSizeOption.getValue())
					this._contentSizeOption.setValue(this._selectedContentSize);
			} else {
				domClass.add(this._contentSizeOptionNode, "dijitHidden");
				this._contentSizeOption.set("disabled", true); // excluded in summary
			}

			this.inherited(arguments);
		},

		/**
		 * Saves all options of the widget.
		 */
		saveOptions: function() {
			if (!this.objectTypeOptionHidden) {
				var objectType = this._objectTypeOption.getValue();
				if (objectType != this._selectedObjectType) {
					this.onObjectTypeChange(objectType);
				}
				this._selectedObjectType = objectType;
			}

			if (!this.versionOptionHidden) {
				this._selectedVersionOption = this._versionOption.getValue();
			}

			if (!this.propertyTextOptionHidden) {
				this._propertyTextAnded = this._propertyTextOption.isAnded();
			}

			if (!this.fileTypeOptionHidden) {
				this._selectedFileTypes = this._fileTypeOption.getValue();
			}

			if (!this.userActionOptionHidden) {
				this._userActionOn = this._userActionOption.isOn();
				this._userAction = this._userActionOption.getUserAction();
			}

			if (!this.workOptionHidden) {
				this._workOptionOn = this._workOption.isOn();
				this._work = this._workOption.getWork();
			}

			if (!this.contentSizeOptionHidden) {
				this._selectedContentSize = this._contentSizeOption.getValue();
			}

			this.inherited(arguments);
		},

		/**
		 * Restores all options of the widget.
		 */
		restoreOptions: function() {
			if (!this.objectTypeOptionHidden) {
				this._objectTypeOption.setValue(this._selectedObjectType);
			}

			if (!this.versionOptionHidden) {
				this._versionOption.setValue(this._selectedVersionOption);
			}

			if (!this.propertyTextOptionHidden) {
				this._propertyTextOption.setAnded(this._propertyTextAnded);
			}

			if (!this.fileTypeOptionHidden) {
				this._fileTypeOption.setValue(this._selectedFileTypes);
			}

			if (!this.userActionOptionHidden) {
				this._userActionOption.setOn(this._userActionOn);
				this._userActionOption.setUserAction(this._userAction);
			}

			if (!this.workOptionHidden) {
				this._workOption.setOn(this._workOptionOn);
				this._workOption.setWork(this._work);
			}

			if (!this.contentSizeOptionHidden) {
				this._contentSizeOption.setValue(this._selectedContentSize);
			}

			this.inherited(arguments);
		},

		/**
		 * Gets all selected options.
		 * 
		 * @return An object that contains all selected options as parameters.
		 */
		getSelectedOptions: function() {
			var options = {};
			if (!this._getDisabledAttr()) {
				if (!this.objectTypeOptionHidden) {
					options.objectType = this._objectTypeOption.getValue();
				}

				if (!this.versionOptionHidden && !this._versionOption.get("disabled")) {
					options.versionOption = this._versionOption.getValue();
				}

				if (!this.propertyTextOptionHidden) {
					options.propertyTextAnded = this._propertyTextOption.isAnded();
				}

				if (!this.fileTypeOptionHidden && !this._fileTypeOption.get("disabled")) {
					options.macros = {
						fileTypes: this._fileTypeOption.getValue()
					};
				}

				if (!this.userActionOptionHidden && this._userActionOption.isOn()) {
					var userAction = this._userActionOption.getUserAction();
					var userNames = new Array();
					array.forEach(userAction.users, function(user) {
						userNames.push(user.shortName);
					});
					userAction.users = userNames;

					if (userAction.dateOperator == "BETWEEN") {
						// Sort the dates in ascending order
						var startDate = userAction.dates[0];
						var endDate = userAction.dates[1];
						if (startDate > endDate)
							userAction.dates = [
								endDate,
								startDate
							];
					}

					if (!options.macros)
						options.macros = new Object();
					options.macros.userActions = [
						userAction
					];
				}

				if (!this.workOptionHidden && this._workOption.isOn()) {
					if (!options.macros)
						options.macros = new Object();
					options.macros.works = [
						this._workOption.getWork()
					];
				}

				if (!this.contentSizeOptionHidden) {
					if (!options.macros)
						options.macros = new Object();
					options.macros.contentSizes = [
						this._contentSizeOption.getValue()
					];
				}
			}

			return options;
		},

		/**
		 * Resizes the widget.
		 */
		resize: function() {
			this.inherited(arguments);

			if (this._optionsLink.dropDown && this._optionsLink._opened) {

				this.ignoreRestore = true;
				this._optionsLink.toggleDropDown();//close
				this._optionsLink.toggleDropDown();//re-open
				this.ignoreRestore = false;
			}

		},

		/**
		 * Sets all selected options values.
		 * 
		 * @param options
		 *            A object contains all selected options as parameters.
		 * @param noSummary
		 *            A boolean- if true option value is not summarized otherwise it is.
		 */
		setSelectedOptions: function(options, noSummary) {
			if (!options)
				return;
			if (!this._getDisabledAttr()) {
				if (options.objectType && !this.objectTypeOptionHidden) {
					this._objectTypeOption.setValue(options.objectType);
					this._selectedObjectType = options.objectType;
				}
				if (options.versionOption && !this._versionOption.get("disabled")) {
					this._versionOption.setValue(options.versionOption);
					this._selectedVersionOption = options.versionOption;
				}
				if ("propertyTextAnded" in options) {
					this._propertyTextAnded = options.propertyTextAnded;
					this._propertyTextOption.setAnded(this._propertyTextAnded);
				}

				var macros = options.macros || {};
				if (!this.fileTypeOptionHidden) {
					this._fileTypeOption.setValue(macros.fileTypes);
					this._selectedFileTypes = macros.fileTypes;
				}
				if (!this.userActionOptionHidden) {
					this._userActionOn = macros.userActions && macros.userActions.length;
					this._userAction = this._userActionOn ? macros.userActions[0] : null;
					this._userActionOption.setOn(this._userActionOn);
					this._userActionOption.setUserAction(this._userAction);
					this._userActionOption.updateOptions(options.objectType, this.objectTypeOptionHidden);
				}
				if (!this.workOptionHidden) {
					this._work = macros.works && macros.works.length ? macros.works[0] : null;
					this._workOption.setWork(this._work);
					this._workOptionOn = this._work != null;
					this._workOption.setOn(this._workOptionOn);
				}
				if (!this.contentSizeOptionHidden) {
					this._selectedContentSize = macros.contentSizes && macros.contentSizes.length ? macros.contentSizes[0] : "";
					this._contentSizeOption.setValue(this._selectedContentSize);
				}
			}

			if (!noSummary) {
				this.inherited(arguments);
			}
		},

		/**
		 * Returns true if object type option is hidden.
		 * 
		 * @since 2.0.3.6
		 */
		isObjectTypeOptionHidden: function() {
			return domClass.contains(this._objectTypeOptionNode, "dijitHidden");
		},

		/**
		 * Returns true if version option is hidden.
		 * 
		 * @since 2.0.3.6
		 */
		isVersionOptionHidden: function() {
			return domClass.contains(this._versionOptionNode, "dijitHidden");
		},

		/**
		 * Sets the version option to disabled or enabled..
		 * 
		 * @param disabled
		 *            Boolean value of the version option status need to be set.
		 *            <code>true<code> means disabled. <code>false<code> means enabled.
		 */
		setVersionOptionDisabled: function(disabled) {
			this._versionOptionDisabled = disabled;
			if (this._versionOption.get("disabled") == disabled) {
				return;
			}
			if (this.repository && this.repository._isP8Like() && this._objectTypeOption.getValue() == "folder") {
				return;
			}

			this._versionOption.set("disabled", disabled);
			this.summarize();
			this.onChange();
		},

		/**
		 * Sets the text property option hidden of not.
		 * 
		 * @param hidden
		 *            Boolean value of the text property option status.
		 *            <code>true<code> means hidden. <code>false<code> means visible.
		 */
		setTextPropertyOptionHidden: function(hidden) {
			this.propertyTextOptionHidden = hidden;
			if (domClass.contains(this._propertyTextOptionNode, "dijitHidden") === hidden) {
				return;
			}

			if (hidden) {
				domClass.add(this._propertyTextOptionNode, "dijitHidden");
				this._propertyTextOption.set("disabled", true); // excluded in summary
			} else {
				domClass.add(this._propertyTextReadOnlyOptionNode, "dijitHidden");
				domClass.remove(this._propertyTextOptionNode, "dijitHidden");
				this._propertyTextOption.set("disabled", false);
			}

			this.summarize();
			this.onChange();

			// Resize the dialog the next time it opens
			this._optionsDialog.scheduleResize();
		},

		/**
		 * @private
		 */
		onOpen: function() {
			this.inherited(arguments);
			if (!this.workOptionHidden)
				this._workOption.initialize(this.repository);
		},

		/**
		 * Launches when object type is changed.
		 */
		onObjectTypeChange: function(objectType) {
		},

		/**
		 * @private
		 */
		_handleObjectTypeChange: function(objectType) {
			if (!this._versionOptionDisabled) {
				this._versionOption.set("disabled", this.repository && this.repository._isP8Like() && objectType == "folder");
			}

			if (!this.fileTypeOptionHidden) {
				this._fileTypeOption.set("disabled", objectType != "document" && objectType != "all");
			}

			if (!this.userActionOptionHidden) {
				this._userActionOption.updateOptions(objectType);
			}

			if (!this.contentSizeOptionHidden) {
				this._contentSizeOption.set("disabled", objectType == SearchConfiguration.prototype.OBJECT_TYPE.WEB_LINK);
			}
		},

		_handleVersionOptionChange: function(version) {
			if (!this.workOptionHidden)
				this._workOption.set("disabled", version == ecm.widget.search.SearchMoreOptions.VERSION_OPTION.ALL);
		},

		_handleUserActionOptionChange: function() {
			this._optionsDialog.setDisabledOKButton(!this._userActionOption.validate());
		},

		_handleWorkOptionChange: function() {
			this._optionsDialog.setDisabledOKButton(!this._workOption.validate());
		},

		/**
		 * @private Sets object type and version to null. After this method is called the initialize method can be
		 *          called to reset the options to the default ones for the repository.
		 */
		resetOptions: function() {
			this._selectedObjectType = null;
			this.objectTypeOptionHidden = false;
			domClass.remove(this._objectTypeOptionNode, "dijitHidden");
			this._objectTypeOption.set("disabled", false);

			this._selectedVersionOption = null;
			this.versionOptionHidden = false;
			domClass.remove(this._versionOptionNode, "dijitHidden");
			this._versionOptionDisabled = false;
			this._versionOption.set("disabled", false);

			// Resize the dialog the next time it opens
			this._optionsDialog.scheduleResize();
		}
	});

	/**
	 * Version option values.
	 * 
	 * @memberof ecm.widget.search.SearchMoreOptions
	 */
	ecm.widget.search.SearchMoreOptions.VERSION_OPTION = {
		RELEASED: "releasedversion",
		CURRENT: "currentversion",
		ALL: "allversions",
		NONE: "none"
	};

	return options;

});
