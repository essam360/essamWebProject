/**
 * Licensed Materials - Property of IBM (C) Copyright IBM Corp. 2012, 2013 US Government Users Restricted Rights - Use,
 * duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */

define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array",
	"dojo/_base/sniff",
	"dojo/dom-style",
	"dojo/dom-class",
	"dojo/dom-attr",
	"dojo/dom-geometry",
	"dijit/form/Button",
	"dijit/layout/BorderContainer",
	"dijit/layout/ContentPane",
	"idx/html",
	"../../model/Desktop",
	"../layout/_LaunchBarPane",
	"ecm/Messages",
	"ecm/LoggerMixin",
	"ecm/model/Desktop",
	"ecm/model/AsyncTaskSchedule",
	"dojo/text!./templates/TeamspaceDecommissionPane.html"
],

function(declare, //
lang, //
array, //
has, //
domStyle, //
domClass, //
domAttr, //
domGeometry, //
Button, //
BorderContainer, //
ContentPane, //
idxhtml, //
Desktop, //
_LaunchBarPane, //
Messages, //
LoggerMixin, //
Desktop, //
AsyncTaskSchedule, //
template) {

	/**
	 * @name ecm.widget.layout.TeamspacePane
	 * @class Provides a pane that is used to display a teamspace in the layout.
	 * @augments ecm.widget.layout._LaunchBarPane, ecm.widget.layout._SearchTabMixin,
	 *           ecm.widget.layout._SearchSelectorMixin,
	 */
	return declare("ecm.widget.layout.TeamspaceDecomissionPane", [
		_LaunchBarPane
	], {
		/** @lends ecm.widget.layout.TeamspacePane.prototype */

		templateString: template,
		widgetsInTemplate: true,

		OPTIONS: {
			DELETE_ALL: "delete_all",
			REFILE_ALL: "refile_all"
		},

		/**
		 * Parameters to pass to a customer configured task
		 */
		taskParms: null,
		/**
		 * Default task used to delete teamspaces.
		 */
		TASKS: {
			DELETE_P8: "com.ibm.ecm.inctasks.p8.P8CleanupTeamspaceTask.class",
			DELETE_CM: "com.ibm.ecm.inctasks.cm.CMCleanupTeamspaceTask.class"
		},
		/**
		 * Optional full canonical class name for the asynchronous deletion task. If not specified, the default value
		 * will be used.
		 */
		taskManagerClassHandlerName: null,

		/**
		 * Selected destination folder
		 */
		selectedDestinationFolder: null,

		_dockPanes: null,

		constructor: function() {
			this._saveInDropDownTitle = this.messages.add_document_location_label.replace(/'/g, "\\'");
		},

		/**
		 * Disconnects handlers and destroys dock panes created by this widget.
		 */
		destroy: function() {
			this.inherited(arguments);
		},

		/**
		 * Called after widget creation.
		 */
		postCreate: function() {
			this.logEntry("postCreate");

			this.fileInDropDown.set("title", this.messages.teamspaceDecommissionReFileIn);

			this.connect(ecm.model.desktop, "onLogout", lang.hitch(this, function(repository) {
				this.teamspace = null;
			}));

			this.connect(this._borderContainer, "resize", lang.hitch(this, function() {
				this._onResize();
			}));
			if (this.repository) {
				this.fileInDropDown.rootItemToFilter = this.teamspace.id;
				this.fileInDropDown.setRoot(this.repository);
				this.fileInDropDown.displayTeamspacesInitially = true;

			}
			this.watch("repository", lang.hitch(this, function() {
				this.fileInDropDown.setRoot(this.repository);
			}));

			this.teamspaceName.innerHTML = idxhtml.escapeHTML(this.teamspace.name);

			this.inherited(arguments);
			this.textDir = has("text-direction");
			this._onFieldChange();

			this.logExit("postCreate");
		},

		/**
		 * @private
		 */
		_onResize: function() {

			var borderContainerSize = domGeometry.getContentBox(this._borderContainer.domNode);
			var topPaneSize = domGeometry.getContentBox(this._topPane.domNode);
			var bottomPaneSize = domGeometry.getContentBox(this._bottomPane.domNode);

			var bottomPaneHeight = borderContainerSize.h - topPaneSize.h;
			//domGeometry.setMarginBox(this._bottomPane.domNode, {
			//h: bottomPaneHeight
			//});
			//this_bottomPane.resize({
			//	h: bottomPaneHeight
			//});
		},
		/**
		 * Method called by parent container to pass additional parameters to this pane.
		 * 
		 * @param params
		 *            Contains a handle to the teamspace object to use when displaying this pane.
		 */
		setParams: function(params) {
			this.isLoaded = false;
			this.teamspace = params.teamspace;
			this.repository = this.teamspace.repository;
			this.uid = params.uid;
		},

		onRifileAll: function() {

		},

		onDeleteAll: function() {

		},

		/**
		 * @private
		 */
		_onFieldChange: function() {
			if (this._deleteAll.checked) {
				this.deleteOption = this.OPTIONS.DELETE_ALL;
				this.fileIn.style.visibility = "hidden";
			} else {
				this.deleteOption = this.OPTIONS.REFILE_ALL;
				this.fileIn.style.visibility = "visible";
			}
			if (this._isValid())
				this._enableFinishButton(true);
			else
				this._enableFinishButton(false);
		},
		/**
		 * @private
		 */
		_onFileInChange: function() {
			this.onChangeDestination(this.fileInDropDown.getSelected());
			this.selectedDestinationFolder = this.fileInDropDown.getSelected().item;
			this._onFieldChange();
		},
		/**
		 * Fired when save in value changes.
		 * 
		 * @param saveInValue
		 *            The selected {@link ecm.model.SelectedFolder} object.
		 */
		onChangeDestination: function(selectedValue) {
		},

		/**
		 * Fired when the cancel button is clicked.
		 */
		onCancel: function() {
			var layout = ecm.model.desktop.getLayout();
			var manageTeamspaces = layout.launchBarContainer.getContentPaneByID("manageTeamspaces");
			if (manageTeamspaces) {
				manageTeamspaces.closeTab({
					uid: this.uid
				}, false);
			}
		},

		_enableFinishButton: function(disabled) {
			this.finishButton.set("disabled", !disabled);
		},
		/**
		 * @private
		 */
		_isValid: function() {

			if (this._refileAll.checked) {
				if (this.selectedDestinationFolder != null && !this.selectedDestinationFolder.isInstanceOf(ecm.model.Repository))
					return true;
				else
					return false;
			} else {
				return true;
			}
		},
		_getTaskParms: function() {
			var taskParams = this.taskParms;
			if (!this.taskParms && this.repository._isCM()) {
				return {
					teamspaceId: "",
					userId: "",
					password: "",
					database: "",
					deleteDocuments: false
				};
			} else if (!this.taskParms) {
				return {
					uri: "http://localhost:9081/wsi/FNCEWS40MTOM/",
					userId: "p8admin",
					password: "IBMFileNetP8",
					domainName: this.repository.domainId,
					objectStoreName: this.repository.objectStoreName,
					teamspaceId: this.teamspace.id,
					deleteDocuments: false
				};
			}

		},
		_onSchedule: function() {
			var handler = this.taskManagerClassHandlerName;
			if (!handler && this.repository._isCM())
				handler = this.TASKS.DELETE_CM;
			else if (!handler)
				handler = this.TASKS.DELETE_P8;

			var schedule = new AsyncTaskSchedule({
				isRecurring: false,
				mode: "0", //Single. This means the task will only run once
				name: this.messages.teamspaceDecommissionTaskName,
				description: this.messages.teamspaceDecommissionTaskDescription,
				userId: this.repository.userId,
				password: "",
				emailAddress: "",
			});

			Desktop.taskManager.scheduleAsyncTask(schedule, handler, this._getTaskParms(), null, lang.hitch(this, function() {
				Desktop.taskManager.onAsyncTaskItemAdded();
			}, this.asyncTaskType.categorization));

		},
		/**
		 * Fired when the finish button is clicked.
		 */
		onFinish: function() {
			if (this._isValid()) {

				if (this.deleteOption == this.OPTIONS.DELETE_ALL) {
					this._onSchedule();
				} else if (this.deleteOption == this.OPTIONS.REFILE_ALL) {
					this.repository.decommissionTeamspace(this.teamspace, this.deleteOption, this.selectedDestinationFolder.id, function(id) {
						alert("decommissioned");
					});
				}
			}

		}
	});
});
