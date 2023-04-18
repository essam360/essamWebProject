/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array",
	"dojo/json",
	"./Item",
	"./ContentItem",
	"./ContentClass",
	"./AttributeDefinition",
	"./UserGroup",
	"./User"
],

function(declare, lang, array, dojojson, Item, ContentItem, ContentClass, AttributeDefinition, UserGroup, User) {

	/**
	 * Constructs a work item.
	 * 
	 * @param properties
	 *            The properties for the work item. The properties can be any of the public fields as defined below and
	 *            on ecm.model.Item and ecm.model._ModelObject.
	 * @name ecm.model.WorkItem
	 * @class Represents a single work item from an IBM Content Manager repository or a workflow step from the IBM
	 *        FileNet P8 Process Engine.
	 * @augments ecm.model.Item
	 */
	var WorkItem = declare("ecm.model.WorkItem", [
		Item
	], {
		/** @lends ecm.model.WorkItem.prototype */

		/**
		 * A string value defining the Process Engine connection point to use for this repository. (Optional)
		 * <p>
		 * This connection point overrides the connection point that is configured on this repository in the IBM Content
		 * Navigator administration tool.
		 * </p>
		 */
		connectionPoint: null,

		/**
		 * An instance of {@link ecm.model.ContentItem} for the work item. (Content Manager only.)
		 */
		contentItem: null,

		/**
		 * The object store containing the FileNet P8 content item.
		 */
		objectStore: null,

		/**
		 * An instance of {@link ecm.model.ContentClass} for pseudo class of the work item. (FileNet P8 only.)
		 */
		workClass: null,

		/**
		 * The queue name that the current work item resides in. (FileNet P8 only.)
		 */
		queueName: "",

		/**
		 * The workflow version property. (FileNet P8 only.)
		 */
		workflowVersion: "",

		/**
		 * The work items work class name property. (FileNet P8 only.)
		 */
		workclass_name: "",

		/**
		 * The work items sheet name property. (FileNet P8 only.)
		 */
		sheet_name: "",

		/**
		 * The work items step name property. (FileNet P8 only.)
		 */
		step_name: "",

		/**
		 * The work items step tag property. (FileNet P8 only.)
		 */
		step_tag: "",

		/**
		 * The name of the extended EDS service property. (FileNet P8 only.)
		 */
		EDS_Service: null,

		/**
		 * The work items queue type property (userQueue or processQueue). (FileNet P8 only.)
		 */
		queue_type: null,

		/**
		 * A boolean which is true if the current user can return this work item to it's sender. (FileNet P8 only.)
		 */
		can_return: false,

		/**
		 * A boolean which is true if the current user can reassign this work item. (FileNet P8 only.)
		 */
		can_reassign: false,

		/**
		 * A boolean which is true if the current user can view the history information for this work item. (FileNet P8
		 * only.) only.
		 */
		can_view_history: false,

		/**
		 * A boolean which is true if the current user can view the status information for this work item. (FileNet P8
		 * only.)
		 */
		can_view_status: false,

		/**
		 * The processor base URL. Can be from different web applications. (FileNet P8 only.)
		 */
		F_StepBaseurl: null,

		/**
		 * The processor JSP location. (FileNet P8 only.)
		 */
		F_StepLocation: null,

		/**
		 * The processor URL template information. The template is used to format the processor URL. (FileNet P8 only.)
		 */
		F_StepTemplate: null,

		/**
		 * The requested processor pop-up window height information. (FileNet P8 only.)
		 */
		F_StepHeight: null,

		/**
		 * The requested processor pop-up window width information. (FileNet P8 only.)
		 */
		F_StepWidth: null,

		/**
		 * The <code>vwVersion</code> property value from the workflow definition content item. (FileNet P8 only.)
		 */
		F_VWVersion: null,

		/**
		 * The attachment Id property value. Formated string used by Process Engine to identify attachment items.
		 * (FileNet P8 only.)
		 */
		F_AttachmentId: null,

		/**
		 * Initiating attachment name (if defined in the Workflow Definition). (FileNet P8 only.)
		 */
		F_InitiatingAttachment: null,

		/**
		 * This flag is <code>true</code> if this is a FileNet P8 repository and a checkout icon should be shown for
		 * it because it has a reservation.
		 */
		showCheckoutForReservation: false,

		/**
		 * Set this flag to <code>true</code> or can it be set to <code>true</code> with a URL parameter of same
		 * name and it will over ride the base Url registered in Process Config Console for the application and start
		 * the step processors from localhost.
		 */
		useApplicationBaseUrl: false,

		/**
		 * @private Returns the object store of the FileNet P8 content item.
		 */
		getObjectStore: function() {
			if (!this.objectStore) {
				this.objectStore = this.objectStoreId ? {
					id: this.objectStoreId,
					symbolicName: this.objectStoreName,
					displayName: this.objectStoreDisplayName
				} : null;
			}

			return this.objectStore;
		},

		/**
		 * Returns an instance of a {@link ecm.model.ContentItem} created from the JSON for this work item. Can be used
		 * for Content Manager work items in order to invoke authoring actions on these items.
		 * 
		 * @returns {ecm.model.ContentItem}
		 */
		getContentItem: function() {
			return this.contentItem;
		},

		/**
		 * Sets the attachment id system parameter value.
		 * 
		 * @param id
		 *            String holding the attachment id value to be set.
		 */
		setAttachmentId: function(id) {
			this.F_AttachmentId = id;
		},

		/**
		 * Sets the subject system parameter value.
		 * 
		 * @param id
		 *            String holding the subject value to be set.
		 */
		setSubject: function(subject) {
			this.setValue("F_Subject", subject);
		},

		/**
		 * Returns true if the specified attribute is hidden.
		 */
		isAttributeHidden: function(attributeId) {
			return false;
		},

		/**
		 * Retrieves all attributes for the work item. Will only return a hard coded set of system attributes.
		 * 
		 * @param callback
		 *            A function that is called when the attribute refresh has completed.
		 */
		retrieveAttributes: function(callback) {
			this.logEntry("retrieveAttributes");
			try {
				this.getContentClass();
				this.onChange([
					this
				]);
			} catch (e) {
				// Trap and ignore any onChange handling errors so that the callbacks are processed.
			}
			if (callback) {
				callback(this);
			}
			this.logExit("retrieveAttributes");
		},

		/**
		 * This event is called for any change to the work item. This includes events that retrieve additional attribute
		 * information or that update attribute information about the item.
		 */
		onChange: function(item) {
			if (this.resultSet) {
				this.resultSet.onChange(item);
			}
			ecm.model.desktop.onChange(item);
		},

		/**
		 * Returns an instance of {@link ecm.model.ContentClass} for the pseudo class associated with this work items
		 * list of custom parameters. This item is constructed only after retrieving the step or launch parameters.
		 * 
		 * @returns {ecm.model.ContentClass}
		 */
		getWorkClass: function() {
			return this.workClass;
		},

		/**
		 * Returns an instance of {@link ecm.model.ContentClass} for the pseudo content class associated with this work
		 * item. Holds a hard coded set of standard system properties for the work item.
		 * 
		 * @returns {ecm.model.ContentClass}
		 */
		getContentClass: function() {
			if (this._contentClass) {
				return this._contentClass;
			}
			// Currently, causes any workItem to hold it's own instance of this class, used for displaying properties in Property Info Pane
			this._contentClass = new ContentClass({
				id: "Worklist",
				name: "Worklist",
				repository: this.repository,
				pseudoClass: true,
				allowsInstances: false
			});

			// This will always be a hard coded set of attributes, since there is no such thing as a "Class" in P8 BPM
			var attributes = [];

			var subject = new AttributeDefinition({
				id: "F_Subject",
				name: ecm.messages.process_info_subject,
				repositoryType: this.repository.type,
				dataType: "xs:string",
				system: true,
				settability: "",
				contentClass: this._contentClass
			});
			this.attributeSystemProperty["F_Subject"] = "true";
			this.attributeLabels["F_Subject"] = ecm.messages.process_info_subject;
			attributes.push(subject);

			var stepName = new AttributeDefinition({
				id: "F_StepName",
				name: ecm.messages.process_info_stepname,
				repositoryType: this.repository.type,
				dataType: "xs:string",
				system: true,
				settability: "",
				contentClass: this._contentClass
			});
			this.attributeSystemProperty["F_StepName"] = "true";
			this.attributeLabels["F_StepName"] = ecm.messages.process_info_stepname;
			attributes.push(stepName);

			var isLocked = new AttributeDefinition({
				id: "F_Locked",
				name: ecm.messages.process_info_is_locked,
				repositoryType: this.repository.type,
				dataType: "xs:boolean",
				system: true,
				settability: "",
				contentClass: this._contentClass
			});
			this.attributeSystemProperty["F_Locked"] = "true";
			this.attributeLabels["F_Locked"] = ecm.messages.process_info_is_locked;
			attributes.push(isLocked);

			var enqueueTime = new AttributeDefinition({
				id: "F_EnqueueTime",
				name: ecm.messages.process_info_received_on,
				repositoryType: this.repository.type,
				dataType: "xs:timestamp",
				system: true,
				settability: "",
				contentClass: this._contentClass
			});
			this.attributeSystemProperty["F_EnqueueTime"] = "true";
			this.attributeLabels["F_EnqueueTime"] = ecm.messages.process_info_received_on;
			attributes.push(enqueueTime);

			var overdue = new AttributeDefinition({
				id: "F_Overdue",
				name: ecm.messages.process_info_overdue,
				repositoryType: this.repository.type,
				dataType: "xs:string",
				system: true,
				settability: "",
				contentClass: this._contentClass
			});
			this.attributeSystemProperty["F_Overdue"] = "true";
			this.attributeLabels["F_Overdue"] = ecm.messages.process_info_overdue;
			attributes.push(overdue);

			var lockedUser = new AttributeDefinition({
				id: "F_LockedUser",
				name: ecm.messages.process_info_locked_by_user,
				repositoryType: this.repository.type,
				dataType: "xs:string",
				system: true,
				settability: "",
				contentClass: this._contentClass
			});
			this.attributeSystemProperty["F_LockedUser"] = "true";
			this.attributeLabels["F_LockedUser"] = ecm.messages.process_info_locked_by_user;
			attributes.push(lockedUser);

			var wobNum = new AttributeDefinition({
				id: "wobNum",
				name: ecm.messages.process_work_object_number,
				repositoryType: this.repository.type,
				dataType: "xs:string",
				system: true,
				settability: "",
				contentClass: this._contentClass
			});
			this.attributeSystemProperty["wobNum"] = "true";
			this.attributeLabels["wobNum"] = ecm.messages.process_work_object_number;
			attributes.push(wobNum);
			this._contentClass.attributeDefinitions = attributes;

			return this._contentClass;
		},

		/**
		 * Returns true if this item is a workitem.
		 */
		isWorkItem: function() {
			return true;
		},

		/**
		 * Returns true if this item has been declared as a record.
		 * 
		 * @returns {Boolean} true if item has been declared as a record, false otherwise.
		 */
		isDeclaredAsRecord: function() {
			return false;
		},

		/**
		 * Retrieves all parameters for a launched work item. Depending on how the item was originally created, it may
		 * only contain a subset of the parameters. This function will retrieve any additional missing parameters.
		 * 
		 * @param callback
		 *            A function that is called when the parameter retrieval has completed. It is passed this
		 *            {@link ecm.model.WorkItem} object.
		 */
		retrieveLaunchParameters: function(callback) {
			this.logEntry("retrieveLaunchParameters");
			this.logInfo("retrieveLaunchParameters", "launch_version = " + this.workflowVersion + ", attachmentId = " + this.F_AttachmentId);
			var self = this;
			var mode = this.F_Mode;
			if (mode == null) {
				mode = "";
			}
			var objectStore = this.getObjectStore();
			var request = ecm.model.Request.invokeService("getLaunchParameters", this.repository.type, {
				repositoryId: this.repository.id,
				connection_point: this.connectionPoint,
				objectStoreId: objectStore ? objectStore.id : "",
				launch_version: encodeURIComponent(this.workflowVersion || ""),
				attachmentId: this.F_AttachmentId,
				propertyMap: this.F_PropertyMap,
				workClassName: encodeURIComponent(this.workclass_name || ""),
				mode: mode
			}, function(response) {
				self.id = response.wobNum;
				self.name = response.Name;
				self._retrieveParametersCompleted(response, callback);
			});
			this.logExit("retrieveLaunchParameters");
		},

		/**
		 * Retrieves all parameters for a Step work item. Depending on how the item was originally created, it may only
		 * contain a subset of the parameters. This function will retrieve any additional missing parameters.
		 * 
		 * @param callback
		 *            A function that is called when the parameter retrieval has completed. It is passed this
		 *            {@link ecm.model.WorkItem} object.
		 * @param lockItem
		 *            A boolean value indicating whether to retrieve a read only version of the step element item. If
		 *            set to "false", will not check the locked status and will return the item if another user has it
		 *            locked. This parameter is optional, will default to "true" (will lock the item) if not set.
		 */
		retrieveStepParameters: function(callback, lockItem) {
			this.logEntry("retrieveStepParameters");
			this.logInfo("retrieveStepParameters", "queue_name = " + this.queueName + ", wob_num = " + this.id);
			var lockStepItem = true;
			if (lockItem != undefined) {
				lockStepItem = lockItem;
			}
			var self = this;
			var params = {
				repositoryId: this.repository.id
			};
			if (this.repository.type == "cm") {
				params.workItemId = this.id;
			} else {
				params.connection_point = this.connectionPoint;
				params.objectStoreId = this.objectStore ? this.objectStore.id : "";
				params.wob_num = this.id;
				params.queue_name = this.queueName ? encodeURIComponent(this.queueName) : "";
				params.step_lock_item = lockStepItem ? "true" : "false";

				// Add extra step resolution information used to retrieve the correct step element
				this._addQueryFilterParams(params);
			}

			var request = ecm.model.Request.invokeService("getStepParameters", this.repository.type, params, function(response) {
				self._retrieveParametersCompleted(response, callback);
			});
			this.logExit("retrieveStepParameters");
		},

		_retrieveParametersCompleted: function(response, callback) {
			this.logEntry("_retrieveParametersCompleted");
			this.workClass = new ContentClass({
				id: "WorkClass",
				name: "WorkClass",
				repository: this.repository,
				pseudoClass: true,
				allowsInstances: false
			});

			var attributeDefinitions = [];
			this.customactionAttr = [];
			for ( var i in response.criterias) {
				var attribute = response.criterias[i];
				var attributeId = attribute.name;
				if (attribute.dataType == "xs:group") {
					this.attributes[attributeId] = this._createUserGroupAttributeValue(attribute);
				} else {
					this.attributes[attributeId] = attribute.value; // "value" is correct element now
				}
				if (attribute.dataType || attribute.dataType == "") {
					this.attributeTypes[attributeId] = attribute.dataType;
				}
				if (attribute.format || attribute.format == "") {
					this.attributeFormats[attributeId] = attribute.format;
				}
				// handle special initiating attachment
				if (attribute.initiatingAttachment) {
					this.F_InitiatingAttachment = attribute.initiatingAttachment;
				}

				if (attribute.system) {
					this.attributeSystemProperty[attributeId] = attribute.system;
				}

				// handle cm8 custom action
				if (attribute.customaction != undefined) {
					this.customactionAttr.push(attribute);
				}

				attributeDefinitions.push(this._createAttributeDefinition(attribute));
			}

			if (this.repository.type == "p8") {
				this.queue_type = response.queue_type;
				this.step_name = response.step_name;
				this.sheet_name = response.sheet_name;
				this.workclass_name = response.workclass_name;
				if (response.EDS_Service) {
					// Pass optional EDS service data field
					this.EDS_Service = response.EDS_Service;
				}
				this.step_tag = response.step_tag;

				this.can_return = response.can_return;
				this.can_reassign = response.can_reassign;
				this.can_view_history = response.can_view_history;
				this.can_view_status = response.can_view_status;
			} else {
				this.step_name = response.processStep;
				this.workclass_name = response.process_name;
				this.can_showproperty = response.can_showproperty;
				this.docId = response.docId;
			}

			this.workClass.attributeDefinitions = attributeDefinitions;

			this.workClass.attributeDefinitionsById = {};
			array.forEach(this.workClass.attributeDefinitions, lang.hitch(this, function(attrDef) {
				this.workClass.attributeDefinitionsById[attrDef.id] = attrDef;
			}));

			this.onChange([
				this
			]);

			if (callback) {
				callback(this);
			}
			this.logExit("_retrieveParametersCompleted");
		},

		/**
		 * Retrieves all attachments for a Step work item. These are the work item parameters that are of type
		 * attachment and not the actual attachment items themselves.
		 * 
		 * @param callback
		 *            A function that is called when the attachment retrieval has completed. It is passed a
		 *            {@link ecm.model.ResultSet} object.
		 */
		retrieveAttachments: function(callback) {
			this.logEntry("retrieveAttachments");
			this.logInfo("retrieveAttachments", "queue_name = " + this.queueName + ", wob_num = " + this.id);
			if (this.resultSet && this.resultSet.setType == "attachmentItems") {
				this.logInfo("retrieveAttachments", "Returning cached result set of attachments");
				callback(this.resultSet);
			} else {
				var self = this;
				this.logInfo("retrieveAttachments", "Calling getStepAttachments action");
				var request = null;
				if (this.repository.type == "cm") {
					request = ecm.model.Request.invokeService("getStepAttachments", this.repository.type, {
						repositoryId: this.repository.id,
						workItemId: this.id,
						step_lock_item: "false"
					}, function(response) {
						self._retrieveAttachmentsCompleted(response, callback);
					});
				} else {
					var params = {
						repositoryId: this.repository.id,
						connection_point: this.connectionPoint,
						objectStoreId: this.objectStore ? this.objectStore.id : "",
						wob_num: this.id,
						queue_name: this.queueName ? encodeURIComponent(this.queueName) : "",
						launch_version: this.workflowVersion ? encodeURIComponent(this.workflowVersion) : "",
						attachmentId: this.F_AttachmentId ? this.F_AttachmentId : "",
						step_lock_item: "false"
					};

					// Add extra step resolution information used to retrieve the correct step element
					this._addQueryFilterParams(params);

					request = ecm.model.Request.invokeService("getStepAttachments", this.repository.type, params, function(response) {
						self._retrieveAttachmentsCompleted(response, callback);
					});
				}
			}
			this.logExit("retrieveAttachments");
		},

		_retrieveAttachmentsCompleted: function(response, callback) {
			this.logEntry("_retrieveAttachmentsCompleted");
			this.logInfo("_retrieveAttachmentsCompleted", "Returning new result set of attachments");

			response.repository = this.repository;
			response.parentFolder = this;
			response.setType = "attachmentItems";
			var results = WorkItem.createResultSet(response);

			this.resultSet = results;
			if (response.docid) {
				this.id = response.docid; // This is a new wobNum on re-creation (launch step only)
			}
			if (callback) {
				callback(results);
			}
			this.logExit("_retrieveAttachmentsCompleted");
		},

		/**
		 * Retrieves all transferred workflows for the specified repository.
		 * 
		 * @param callback
		 *            A function that is called when the transferred workflows retrieval has completed.
		 * @param item
		 *            A {@link ecm.model.ContentItem} object holding workflow definition. (since 2.0.2)
		 * @param filterClassNames
		 *            A String array of work class names. (since 2.0.2)
		 */
		retrieveTransferedWorkflows: function(callback, item, filterClassNames) {
			this.logEntry("retrieveTransferedWorkflows");
			var self = this;
			var request = ecm.model.Request.invokeService("getTransferedWorkflows", this.repository.type, {
				repositoryId: this.repository.id,
				connection_point: this.connectionPoint,
				docid: item ? item.id : "",
				filter_criteria: filterClassNames ? encodeURIComponent(dojojson.stringify(filterClassNames)) : ""
			}, function(response) {
				self._retrieveTransferedWorkflowsCompleted(response, callback);
			});
			this.logExit("retrieveTransferedWorkflows");
		},

		_retrieveTransferedWorkflowsCompleted: function(response, callback) {
			this.logEntry("_retrieveTransferedWorkflowsCompleted");
			if (response.workclass_name) {
				this.workclass_name = response.workclass_name;
				this.workclass_name_exists = response.workclass_name_exists;
			}
			if (callback) {
				callback(response.items);
			}
			this.logExit("_retrieveTransferedWorkflowsCompleted");
		},

		/**
		 * Transfers a workflow definition into the process engine server (ready for execution).
		 * 
		 * @since 2.0.2
		 * @param callback
		 *            A function that is called when the transfer workflow action has completed.
		 * @param item
		 *            A {@link ecm.model.ContentItem} object holding workflow definition.
		 * @param workClassName
		 *            A string holding the workflow class name to use when transferring the workflow definition
		 */
		transferWorkflow: function(callback, item, workClassName) {
			this.logEntry("transferWorkflow");
			this.workclass_name = workClassName;
			var self = this;
			var request = ecm.model.Request.invokeService("transferWorkflow", this.repository.type, {
				repositoryId: this.repository.id,
				connection_point: this.connectionPoint,
				docid: item.id,
				workclass_name: encodeURIComponent(workClassName || "")
			}, function(response) {
				self._transferWorkflowCompleted(response, callback);
			});
			this.logExit("transferWorkflow");
		},

		_transferWorkflowCompleted: function(response, callback) {
			this.logEntry("_transferWorkflowCompleted");
			if (callback) {
				callback(response);
			}
			this.logExit("_transferWorkflowCompleted");
		},

		/**
		 * Create the attachment Id string in a format that the FileNet P8 Process Engine can recognize.
		 * 
		 * @param item
		 *            A ContentItem object representing the attachment object.
		 * @returns {String} holding the new tokenized attachment id.
		 */
		createAttachmentId: function(item) {
			this.logEntry("createAttachmentId");
			var attachmentId = null;
			var name = item.name;
			var objectStoreName = item.getObjectStore().displayName;
			if (item.isFolder()) {
				var id = item.getValue("Id");
				if (!id) {
					id = item.id.split(",")[2];
				}
				attachmentId = name + "||2|3|" + objectStoreName + "|" + id;
			} else {
				var vsId = item.vsId;
				attachmentId = name + "||3|3|" + objectStoreName + "|" + vsId; // id should be the version series id
			}
			this.logInfo("createAttachmentId", "Created attachmentId = " + attachmentId);
			this.logExit("createAttachmentId");
			return attachmentId;
		},

		/**
		 * Create a default <code>F_Subject</code> string in to be used when launching a work item.
		 * 
		 * @param item
		 *            A <code>ContentItem</code> object representing the attachment object.
		 * @returns {String} holding new subject text.
		 */
		createSubject: function(item) {
			this.logEntry("createSubject");
			var subject = "";
			// create new resource string for this
			subject = this.name + " " + ecm.messages.suspend_for_duration_label + " " + item.name;
			this.logExit("createSubject");
			return subject;
		},

		_createUserGroupAttributeValue: function(attribute) {
			this.logEntry("_createUserGroupAttributeValue");
			var participants = [];
			for ( var j in attribute.value) {
				var value = attribute.value[j];
				if (value.isGroup) {
					var group = new UserGroup(value);
					participants.push(group);
				} else {
					var user = new User(value);
					participants.push(user);
				}
			}
			this.logExit("_createUserGroupAttributeValue");
			return participants;
		},

		_createAttributeDefinition: function(attribute) {
			this.logEntry("_createAttributeDefinition --- attr name: " + attribute.name);

			var attributeDefinition = AttributeDefinition.createFromJSON(attribute, this.workClass);
			attributeDefinition.searchable = false;

			if (attribute.dataType == "xs:group") {
				if (attribute.votingParameter) {
					attributeDefinition.setMetaData("votingParameter", attribute.votingParameter);
					attributeDefinition.setMetaData("votingNumber", attribute.votingNumber);
				}
			}

			this.logExit("_createAttributeDefinition");
			return attributeDefinition;
		},

		/**
		 * Retrieves attribute information similar to <code>ContentClass</code> but updated or restricted according to
		 * a list of attribute values. This method is used to provide dependent behavior between parameters when
		 * specifying their values in the step or launch processors.
		 * 
		 * @param attributes
		 *            An array of {Object} objects containing the attribute values, keyed by attribute identifier.
		 * @param callback
		 *            A function invoked when the attribute information has been retrieved. It is passed an array of
		 *            {@link ecm.model.AttributeDefinition} objects for those properties that have potentially changed
		 *            properties due to the attribute values passed in.
		 * @param onError
		 *            A callback function called if there is an error returned from the request.
		 */
		retrieveDependentParameters: function(attributes, callback, onError) {
			this.logEntry("retrieveDependentParameters");
			var self = this;
			var modifiedAttributes = [];
			var attributeDefinitions = this.workClass.attributeDefinitions;
			for ( var i in attributeDefinitions) {
				var attributeDefinition = attributeDefinitions[i];
				modifiedAttributes.push(this._getModifiedParameters(attributeDefinition, attributes[attributeDefinition.id]));
			}

			var reqParams = {
				repositoryId: this.repository.id
			};
			var attributeParameters = {
				"Name": this.name,
				"wobNum": this.id,
				"workclass_name": this.workclass_name,
				"step_name": this.step_name,
				criterias: modifiedAttributes
			};

			if (this.repository.type == "p8") {
				reqParams.connection_point = this.connectionPoint;
				reqParams.objectStoreId = this.objectStore ? this.objectStore.id : "";
				reqParams.wob_num = this.id;
				reqParams.queue_name = this.queueName ? encodeURIComponent(this.queueName) : "";

				attributeParameters.sheet_name = this.sheet_name;
				if (this.EDS_Service) {
					// Pass optional EDS Service field value if it exists
					attributeParameters.EDS_Service = this.EDS_Service;
				}
				if (this.queueName) {
					attributeParameters.queueName = this.queueName;
				} else {
					attributeParameters.queueName = "";
				}
			}

			var request = null;
			request = ecm.model.Request.postService("getDependentParameters", this.repository.type, reqParams, "text/json", dojojson.stringify(attributeParameters), function(response) {
				self._retrieveDependentParametersCompleted(response, callback);
			}, false, false, false, onError);

			this.logExit("retrieveDependentParameters");
			return request;
		},

		/**
		 * Returns true if any attribute in the class is marked as having dependent attributes. If the attribute
		 * definitions have not been retrieve then this will return false.
		 */
		hasDependentAttributes: function() {
			if (!this.workClass || !this.workClass.attributeDefinitions) {
				return false;
			}
			var hasDependentAttributes = false;
			for ( var i in this.workClass.attributeDefinitions) {
				if (this.workClass.attributeDefinitions[i].hasDependentAttributes) {
					hasDependentAttributes = true;
					break;
				}
			}
			return hasDependentAttributes;
		},

		_getModifiedParameters: function(attributeDefinition, value) {
			if (attributeDefinition.system) {
				value = this.getValue(attributeDefinition.id);
			} else if (attributeDefinition.dataType == "xs:attachment") {
				value = this.getValue(attributeDefinition.id);
			}

			// The AttributeDefinition and the WorkItem have the respective information updated accordingly.
			var attributeDef = {
				"name": attributeDefinition.id,
				"label": attributeDefinition.name,
				"dataType": attributeDefinition.dataType,
				"required": attributeDefinition.required,
				"readOnly": attributeDefinition.readOnly,
				"hidden": attributeDefinition.hidden,
				"system": attributeDefinition.system,
				"cardinality": attributeDefinition.cardinality,
				"hasDependentAttributes": attributeDefinition.hasDependentAttributes
			};

			if (value == null || value == undefined) {
				attributeDef.value = "";
			} else {
				attributeDef.value = value;
			}

			if (attributeDefinition.defaultValue == null || attributeDefinition.defaultValue == undefined) {
				attributeDef.defaultValue = "";
			} else {
				attributeDef.defaultValue = attributeDefinition.defaultValue;
			}

			var validValues = attributeDefinition.allowedValues;
			if (validValues) {
				attributeDef.validValues = validValues;
			} else {
				attributeDef.validValues = "";
			}
			var maxValue = attributeDefinition.maxValue;
			if (maxValue) {
				attributeDef.maxValue = maxValue;
			} else {
				attributeDef.maxValue = "";
			}
			var minValue = attributeDefinition.minValue;
			if (minValue) {
				attributeDef.minValue = minValue;
			} else {
				attributeDef.minValue = "";
			}
			var minEntry = attributeDefinition.minLength;
			if (minEntry) {
				attributeDef.minEntry = minEntry;
			} else {
				attributeDef.minEntry = "";
			}
			var maxEntry = attributeDefinition.maxLength;
			if (maxEntry) {
				attributeDef.maxEntry = maxEntry;
			} else {
				attributeDef.maxEntry = "";
			}

			return attributeDef;
		},

		_retrieveDependentParametersCompleted: function(response, callback) {
			this.logEntry("_retrieveDependentParametersCompleted");
			var attributeDefinitions = [];
			for ( var i in response.criterias) {
				var attribute = response.criterias[i];
				var attributeId = attribute.name;
				if (attribute.dataType == "xs:group") {
					this.attributes[attributeId] = this._createUserGroupAttributeValue(attribute);
				} else {
					this.attributes[attributeId] = attribute.value;
				}
				if (attribute.dataType || attribute.dataType == "") {
					this.attributeTypes[attributeId] = attribute.dataType;
				}
				if (attribute.format || attribute.format == "") {
					this.attributeFormats[attributeId] = attribute.format;
				}

				var attributeDefinition = this._createAttributeDefinition(attribute);
				attributeDefinitions.push(attributeDefinition);
			}

			if (callback) {
				callback(attributeDefinitions);
			}
			this.logExit("_retrieveDependentParametersCompleted");
		},

		/**
		 * Complete a work item step. Will save all parameter values and can dispatch the step onto the next route in
		 * the Process Engine.
		 * 
		 * @param attributes
		 *            An array of {Object} objects containing the attribute values, keyed by attribute identifier.
		 * @param dispatch
		 *            A boolean flag indicating whether to dispatch the item in the process engine. True when completing
		 *            a step, false when just saving the step data.
		 * @param callback
		 *            A function that is called when the processing the work item has completed. It is passed this
		 *            {@link ecm.model.WorkItem} object.
		 * @param synchronous
		 *            If true, the request is processed synchronously. (since 2.0.2)
		 * @param onError
		 *            A function invoked when the request fails. (since 2.0.2)
		 * @param backgroundRequest
		 *            If true, this request will run in the background without any status dialogs or wait cursor
		 *            indications. (since 2.0.2)
		 */
		completeStep: function(attributes, dispatch, callback, synchronous, onError, backgroundRequest) {
			this.logEntry("completeStep");
			this.logInfo("completeStep", "queue_name = " + this.queueName + ", wob_num = " + this.id, ", step_dispatch = ", +dispatch);
			var data = attributes;

			var params = {
				repositoryId: this.repository.id,
				step_dispatch: dispatch
			};
			if (this.repository.type == "cm") {
				params.workItemId = this.id;
				params.docid = this.docId;
				params.template_name = this.template;
			} else {
				params.connection_point = this.connectionPoint;
				params.objectStoreId = this.objectStore ? this.objectStore.id : "";
				params.wob_num = this.id;
				params.queue_name = this.queueName ? encodeURIComponent(this.queueName) : "";
				params.launch_version = this.workflowVersion ? encodeURIComponent(this.workflowVersion) : "";
				params.attachmentId = this.F_AttachmentId ? this.F_AttachmentId : "";

				// Add extra step resolution information used to retrieve the correct step element
				this._addQueryFilterParams(params);
			}

			var request = ecm.model.Request.postService("completeStep", this.repository.type, params, "text/json", dojojson.stringify(data), lang.hitch(this, function(response) {
				this._completeStepCompleted(response, callback);
			}), false, backgroundRequest, synchronous, onError);
			this.logExit("completeStep");
		},

		_completeStepCompleted: function(response, callback) {
			this.logEntry("_completeStepCompleted");
			this.onChange([
				this
			]);
			if (callback) {
				if (response && response.fieldErrors) {
					this.logInfo("_completeStepCompleted", "Response contains field validation errors");
				}
				callback(this, response);
			}
			this.logExit("_completeStepCompleted");
		},

		/**
		 * Unlocks a work item step.
		 * 
		 * @param abort
		 *            A boolean flag indicating whether to abort (unlock) the item in the Process Engine.
		 * @param callback
		 *            A function that is called when the processing the work item has completed. It is passed this
		 *            {@link ecm.model.WorkItem} object.
		 * @param synchronous
		 *            If true, the request is processed synchronously. (since 2.0.2)
		 * @param onError
		 *            A function invoked when the request fails. (since 2.0.2)
		 * @param backgroundRequest
		 *            If true, this request will run in the background without any status dialogs or wait cursor
		 *            indications. (since 2.0.2)
		 */
		unlockStep: function(abort, callback, synchronous, onError, backgroundRequest) {
			this.logEntry("unlockStep");
			if (this.repository.type == "p8") {
				this.logInfo("unlockStep", "queue_name = " + this.queueName + ", wob_num = " + this.id);
				var params = {
					repositoryId: this.repository.id,
					connection_point: this.connectionPoint,
					objectStoreId: this.objectStore ? this.objectStore.id : "",
					wob_num: this.id,
					queue_name: this.queueName ? encodeURIComponent(this.queueName) : "",
					step_abort_item: abort
				};
				// Add extra step resolution information used to retrieve the correct step element
				this._addQueryFilterParams(params);

				var request = ecm.model.Request.invokeService("unlockStep", this.repository.type, params, lang.hitch(this, function(response) {
					this._setUnlockStepCompleted(response, callback);
				}), false, synchronous, onError, backgroundRequest);
			} else {
				if (this.repository.type == "cm") {
					this.logInfo("unlockStep", "workpackage id = " + this.id);
					var request = ecm.model.Request.invokeService("unlock", this.repository.type, {
						repositoryId: this.repository.id,
						docid: [
							this.docId
						],
						template_name: this.template
					}, lang.hitch(this, function(response) {
						this._setUnlockStepCompleted(response, callback);
					}), false, synchronous, onError, backgroundRequest);
				}
			}
			this.logExit("unlockStep");
		},

		_setUnlockStepCompleted: function(response, callback) {
			this.logEntry("_setUnlockStepCompleted");
			this.onChange([
				this
			]);
			if (callback) {
				callback(this);
			}
			this.logExit("_setUnlockStepCompleted");
		},

		/**
		 * Retrieves the step or launch processor information for the specified work item. The step processor
		 * information includes the information necessary to construct a URL to the step processor page.
		 * 
		 * @param type
		 *            A string indicating the type of processor "step" or "launch"
		 * @param callback
		 *            A function that is called when the parameter retrieval has completed. It is passed this
		 *            {@link ecm.model.WorkItem} object.
		 * @param objectId
		 *            Optional string holding the object Id of the workflow definition to launch. If not specified, will
		 *            use the id of this work item.
		 * @param objectStoreName
		 *            Optional string holding the object store name of the workflow definition to launch. If not
		 *            specified, will use the object store name from this work items repository.
		 * @param synchronous
		 *            If true, the request is processed synchronously. (since 2.0.2)
		 * @param onError
		 *            A function invoked when the request fails. (since 2.0.2)
		 * @param backgroundRequest
		 *            If true, this request will run in the background without any status dialogs or wait cursor
		 *            indications. (since 2.0.2)
		 */
		retrieveProcessorInformation: function(type, callback, objectId, objectStoreName, synchronous, onError, backgroundRequest) {
			this.logEntry("retrieveProcessorInformation");
			var params = null;
			if (this.repository.type == "cm") {
				params = {
					repositoryId: this.repository.id,
					workItemId: this.id
				};
				if (this.contentItem && this.contentItem.template) {
					params.template = this.contentItem.template;
				}
				var self = this;
				var request = ecm.model.Request.invokeService("getProcessorInformation", this.repository.type, params, function(response) {
					self.locked = response.locked;
					self.lockedUser = response.lockedUser;
					if (callback) {
						callback(self);
					}
				}, false, synchronous, onError, backgroundRequest);
			} else {
				this.logInfo("retrieveProcessorInformation", "queue_name = " + this.queueName + ", wob_num = " + this.id);
				var self = this;
				params = {
					repositoryId: this.repository.id,
					connection_point: this.connectionPoint,
					objectStoreId: this.objectStore ? this.objectStore.id : "",
					step_type: type
				};
				if (this.useApplicationBaseUrl) {
					params.useApplicationBaseUrl = "true";
				}
				if (type && type == "launch") {
					if (objectId != null) {
						params.docid = objectId;
					} else {
						params.docid = this.id;
					}
					if (params.docid == null) {
						params.vsId = this.vsId;
					}
					if (objectStoreName != null) {
						params.object_store = objectStoreName;
					} else {
						params.object_store = this.repository.objectStoreName;
					}

					if (this.workclass_name != null) {
						params.workClassName = this.workclass_name;
					}
				} else {
					params.wob_num = this.id;
					params.queue_name = encodeURIComponent(this.queueName);
					params.step_id = this.F_StepProcId;
					params.step_name = this.attributes.F_StepName;
					params.step_lock_item = "true";
					// Add extra step resolution information used to retrieve the correct step element
					this._addQueryFilterParams(params);
				}

				var request = ecm.model.Request.invokeService("getProcessorInformation", this.repository.type, params, function(response) {
					self._retrieveProcessorInformationCompleted(response, callback);
				}, false, synchronous, onError, backgroundRequest);
			}

			this.logExit("retrieveProcessorInformation");
		},

		_retrieveProcessorInformationCompleted: function(response, callback) {
			this.logEntry("_retrieveProcessorInformationCompleted");
			this.F_StepBaseurl = response.step_baseurl;
			this.logInfo("_retrieveProcessorInformationCompleted", "BaseUrl = " + this.F_StepBaseurl);
			this.F_StepLocation = response.step_location;
			this.logInfo("_retrieveProcessorInformationCompleted", "Location = " + this.F_StepLocation);
			this.F_StepTemplate = decodeURIComponent(response.step_template);
			this.logInfo("_retrieveProcessorInformationCompleted", "Template = " + this.F_StepTemplate);
			this.F_StepHeight = response.step_height;
			this.F_StepWidth = response.step_width;
			if (response.vwversion) {
				this.F_VWVersion = response.vwversion;
			}
			if (response.workClassName) {
				this.workclass_name = response.workClassName;
			}

			this.locked = response.locked;
			this.lockedUser = response.lockedUser;

			if (callback) {
				callback(this);
			}
			this.logExit("_retrieveProcessorInformationCompleted");
		},

		/**
		 * Retrieves all workflow subscriptions that are associated to the object specified. This information comes from
		 * the Content Engine. This WorkItem must be constructed with the id and object store name of the Content Engine
		 * item.
		 * 
		 * @param callback
		 *            A function that is called when the workflow subscription retrieval has completed.
		 * @param isBackgroundRequest
		 *            A boolean flag indicating that this add request should be placed in a background process. (since
		 *            2.0.2)
		 * @param onError
		 *            A callback function called if there is an error returned when retrieving the subscriptions. (since
		 *            2.0.2)
		 */
		retrieveSubscriptions: function(callback, isBackgroundRequest, onError) {
			this.logEntry("retrieveSubscriptions");
			var self = this;
			var request = ecm.model.Request.invokeService("getSubscriptions", this.repository.type, {
				repositoryId: this.repository.id,
				connection_point: this.connectionPoint,
				objectStoreId: this.objectStore ? this.objectStore.id : "",
				docid: this.id
			}, function(response) {
				self._retrieveSubscriptionsCompleted(response, callback);
			}, false, false, onError, isBackgroundRequest ? isBackgroundRequest : false);

			this.logExit("retrieveSubscriptions");
		},

		_retrieveSubscriptionsCompleted: function(response, callback) {
			this.logEntry("_retrieveSubscriptionsCompleted");
			this.F_AttachmentId = response.attachmentId;
			this._subscriptions = response.datastore.items;
			if (callback) {
				callback(this, this._subscriptions);
			}
			this.logExit("_retrieveSubscriptionsCompleted");
		},

		/**
		 * Retrieves parameters for a Tracker item.
		 * 
		 * @param callback
		 *            A function that is called when the parameter retrieval has completed. It is passed this
		 *            {@link ecm.model.WorkItem} object.
		 */
		retrieveTrackerParameters: function(callback) {
			this.logEntry("retrieveTrackerParameters");
			this.logInfo("retrieveTrackerParameters", "queue_name = " + this.queueName + ", wob_num = " + this.id);
			var self = this;
			var request = ecm.model.Request.invokeService("getTrackerParameters", this.repository.type, {
				repositoryId: this.repository.id,
				connection_point: this.connectionPoint,
				objectStoreId: this.objectStore ? this.objectStore.id : "",
				wob_num: this.id,
				queue_name: this.queueName ? encodeURIComponent(this.queueName) : "",
				step_lock_item: "true"
			}, function(response) {
				self._retrieveTrackerParametersCompleted(response, callback);
			});
			this.logExit("retrieveTrackerParameters");
		},

		_retrieveTrackerParametersCompleted: function(response, callback) {
			this.logEntry("_retrieveTrackerParametersCompleted");
			this.workClass = new ContentClass({
				id: "TrackerClass",
				name: "TrackerClass",
				repository: this.repository,
				pseudoClass: true,
				allowsInstances: false
			});
			var attributeDefinitions = [];
			for ( var i in response.criterias) {
				var attribute = response.criterias[i];
				var attributeId = attribute.name;
				if (attribute.dataType == "xs:group") {
					this.attributes[attributeId] = this._createUserGroupAttributeValue(attribute);
				} else {
					this.attributes[attributeId] = attribute.value;
				}
				if (attribute.dataType || attribute.dataType == "") {
					this.attributeTypes[attributeId] = attribute.dataType;
				}
				if (attribute.format || attribute.format == "") {
					this.attributeFormats[attributeId] = attribute.format;
				}
				// handle special initiating attachment
				if (attribute.initiatingAttachment) {
					this.F_InitiatingAttachment = attribute.initiatingAttachment;
				}
				attributeDefinitions.push(this._createAttributeDefinition(attribute));
			}

			this.queue_type = response.queue_type;
			this.step_name = response.step_name;
			this.sheet_name = response.sheet_name;
			this.workclass_name = response.workclass_name;

			this.onChange([
				this
			]);
			if (callback) {
				callback(this);
			}
			this.logExit("_retrieveTrackerParametersCompleted");
		},

		/**
		 * Retrieves history information for a Tracker item.
		 * 
		 * @param callback
		 *            A function that is called when the history retrieval has completed.
		 */
		retrieveTrackerHistory: function(callback) {
			this.logEntry("retrieveTrackerHistory");
			var self = this;
			if (this._trackerHistory) {
				callback(this._trackerHistory);
			} else {
				var request = ecm.model.Request.invokeService("getTrackerHistory", this.repository.type, {
					repositoryId: this.repository.id,
					connection_point: this.connectionPoint,
					wob_num: this.id,
					queue_name: this.queueName ? encodeURIComponent(this.queueName) : ""
				}, function(response) {
					self._trackerHistory = response;
					self._retrieveTrackerHistoryCompleted(response, callback);
				});
			}
			this.logExit("retrieveTrackerHistory");
		},

		_retrieveTrackerHistoryCompleted: function(response, callback) {
			this.logEntry("_retrieveTrackerHistoryCompleted");
			if (callback) {
				callback(response);
			}
			this.logExit("_retrieveTrackerHistoryCompleted");
		},

		/**
		 * Retrieves milestone information for a Tracker item.
		 * 
		 * @param callback
		 *            A function that is called when the milestone retrieval has completed.
		 * @param milestoneLevel
		 *            Optional {String} value holding the requested milestone level. Will default to "99" if not
		 *            specified. Range is "1" to "99" inclusive.
		 * @param lockItem
		 *            A boolean value indicating whether to retrieve a read only version of the step element item. If
		 *            set to "false", will not check the locked status and will return the item if another user has it
		 *            locked. This parameter is optional, will default to "true" (will lock the item) if not set. (since
		 *            2.0.2)
		 */
		retrieveTrackerMilestones: function(callback, milestoneLevel, lockItem) {
			this.logEntry("retrieveTrackerMilestones");
			var lockStepItem = true;
			if (lockItem != undefined) {
				lockStepItem = lockItem;
			}

			var self = this;
			var request = ecm.model.Request.invokeService("getTrackerMilestones", this.repository.type, {
				repositoryId: this.repository.id,
				connection_point: this.connectionPoint,
				wob_num: this.id,
				queue_name: this.queueName ? encodeURIComponent(this.queueName) : "",
				milestone_level: milestoneLevel,
				step_lock_item: lockStepItem ? "true" : "false"
			}, function(response) {
				self._retrieveTrackerMilestonesCompleted(response, callback);
			});
			this.logExit("retrieveTrackerMilestones");
		},

		_retrieveTrackerMilestonesCompleted: function(response, callback) {
			this.logEntry("_retrieveTrackerMilestonesCompleted");
			if (callback) {
				callback(response);
			}
			this.logExit("_retrieveTrackerMilestonesCompleted");
		},

		/**
		 * Retrieves milestone information for a work item.
		 * 
		 * @param callback
		 *            A function that is called when the milestone retrieval has completed.
		 * @param milestoneLevel
		 *            Optional {String} value holding the requested milestone level. Will default to "99" if not
		 *            specified. Range is "1" to "99" inclusive.
		 */
		retrieveMilestones: function(callback, milestoneLevel) {
			this.logEntry("retrieveMilestones");
			var self = this;
			var request = ecm.model.Request.invokeService("getTrackerMilestones", this.repository.type, {
				repositoryId: this.repository.id,
				connection_point: this.connectionPoint,
				work_space_id: this.workSpaceId,
				work_class_id: this.workClassId,
				workflow_number: this.id,
				milestone_level: milestoneLevel
			}, function(response) {
				self._retrieveMilestonesCompleted(response, callback);
			});
			this.logExit("retrieveMilestones");
		},

		_retrieveMilestonesCompleted: function(response, callback) {
			this.logEntry("_retrieveMilestonesCompleted");
			if (callback) {
				callback(response);
			}
			this.logExit("_retrieveMilestonesCompleted");
		},

		/**
		 * Delete a Tracker item from the queue. The function actually dispatchs the work item effectively removing it
		 * from the queue.
		 * 
		 * @param lock
		 *            A boolean flag indicating whether the item should be locked before deleting.
		 * @param callback
		 *            A function that is called when the tracker item has been removed.
		 */
		deleteTracker: function(lock, callback) {
			this.logEntry("deleteTracker");
			this.logInfo("deleteTracker", "queue_name = " + this.queueName + ", wob_num = " + this.id);
			var self = this;
			var request = ecm.model.Request.invokeService("deleteTracker", this.repository.type, {
				repositoryId: this.repository.id,
				connection_point: this.connectionPoint,
				wob_num: this.id,
				queue_name: this.queueName ? encodeURIComponent(this.queueName) : "",
				step_lock_item: lock
			}, callback);
			this.logExit("deleteTracker");
		},

		/**
		 * Move this work item into my personal in-basket.
		 * 
		 * @param callback
		 *            A function that is called when the work item item has been moved.
		 * @param items
		 *            Optional. A collection of {@link ecm.model.WorkItem} objects to move to your personal in-basket.
		 *            If not set, will move the current work item (this). (since 2.0.2)
		 * @param synchronous
		 *            If true, the request is processed synchronously. (since 2.0.2)
		 * @param onError
		 *            A function invoked when the request fails. (since 2.0.2)
		 * @param backgroundRequest
		 *            If true, this request will run in the background without any status dialogs or wait cursor
		 *            indications. (since 2.0.2)
		 */
		moveToInbox: function(callback, items, synchronous, onError, backgroundRequest) {
			this.logEntry("moveToInbox");
			this.logInfo("moveToInbox", "queue_name = " + this.queueName);
			// Need to pass array of wob_nums for the multi-selected set of items...
			var wobNums = null;
			var instrSheetIds = null;
			var workOrderIds = null;
			if (items == undefined) {
				wobNums = this._buildWobNumArray(this);
				// Add instruction sheet and work order numbers if available (added in ICN 2.0.3.5)
				instrSheetIds = this._buildInstrSheetIdArray(this);
				workOrderIds = this._buildWorkOrderIdArray(this);
			} else {
				wobNums = this._buildWobNumArray(items);
				// Add instruction sheet and work order numbers if available (added in ICN 2.0.3.5)
				instrSheetIds = this._buildInstrSheetIdArray(items);
				workOrderIds = this._buildWorkOrderIdArray(items);
			}

			var params = {
				repositoryId: this.repository.id,
				connection_point: this.connectionPoint,
				objectStoreId: this.objectStore ? this.objectStore.id : "",
				queue_name: this.queueName ? encodeURIComponent(this.queueName) : "",
				wob_num: wobNums,
				instr_sheet_id: instrSheetIds,
				work_order_id: workOrderIds,
				step_lock_item: "true"
			};

			var self = this;
			var request = ecm.model.Request.invokeService("moveToInbox", this.repository.type, params, function(response) {
				self._moveToInboxCompleted(response, callback);
			}, false, synchronous, onError, backgroundRequest);
			this.logExit("moveToInbox");
		},

		_moveToInboxCompleted: function(response, callback) {
			this.logEntry("_moveToInboxCompleted");
			this.onChange([
				this
			]);
			if (callback) {
				callback(response);
			}
			this.logExit("_moveToInboxCompleted");
		},

		/**
		 * Return this work item to the previous sender.
		 * 
		 * @param callback
		 *            A function that is called when the work item item has been returned.
		 * @param synchronous
		 *            If true, the request is processed synchronously. (since 2.0.2)
		 * @param onError
		 *            A function invoked when the request fails. (since 2.0.2)
		 * @param backgroundRequest
		 *            If true, this request will run in the background without any status dialogs or wait cursor
		 *            indications. (since 2.0.2)
		 */
		returnToSender: function(callback, synchronous, onError, backgroundRequest) {
			this.logEntry("returnToSender");
			this.logInfo("returnToSender", "queue_name = " + this.queueName + ", wob_num = " + this.id);

			var params = {
				repositoryId: this.repository.id,
				connection_point: this.connectionPoint,
				objectStoreId: this.objectStore ? this.objectStore.id : "",
				wob_num: this.id,
				queue_name: this.queueName ? encodeURIComponent(this.queueName) : "",
				step_lock_item: "true"
			};

			// Add extra step resolution information used to retrieve the correct step element
			this._addQueryFilterParams(params);

			var self = this;
			var request = ecm.model.Request.invokeService("returnToSender", this.repository.type, params, function(response) {
				self._returnToSenderCompleted(response, callback);
			}, false, synchronous, onError, backgroundRequest);
			this.logExit("returnToSender");

		},

		_returnToSenderCompleted: function(response, callback) {
			this.logEntry("_returnToSenderCompleted");
			this.onChange([
				this
			]);
			if (callback) {
				callback(response);
			}
			this.logExit("_returnToSenderCompleted");
		},

		/**
		 * Reassign this work item to the specified user.
		 * 
		 * @param user
		 *            String holding specified user name to reassign the item too.
		 * @param displayName
		 *            String holding the display name.
		 * @param delegate
		 *            Boolean flag indicating whether the reassigned item should be delegated back to reassignee before
		 *            moving on to next route.
		 * @param callback
		 *            A function that is called when the work item item has been returned.
		 * @param items
		 *            Optional. A collection of {@link ecm.model.WorkItem} objects to reassign. If not set, will
		 *            reassign the current work item (this). (since 2.0.2)
		 * @param synchronous
		 *            If true, the request is processed synchronously. (since 2.0.2)
		 * @param onError
		 *            A function invoked when the request fails. (since 2.0.2)
		 * @param backgroundRequest
		 *            If true, this request will run in the background without any status dialogs or wait cursor
		 *            indications. (since 2.0.2)
		 */
		reassign: function(user, displayName, delegate, callback, items, synchronous, onError, backgroundRequest) {
			this.logEntry("reassign");
			this.logInfo("reassign", "queue name = " + this.queueName + ", new user = " + displayName);
			// Need to pass array of wob_nums for the multi-selected set of items...
			var wobNums = null;
			var instrSheetIds = null;
			var workOrderIds = null;
			if (items == undefined) {
				wobNums = this._buildWobNumArray(this);
				// Add instruction sheet and work order numbers if available (added in ICN 2.0.3.5)
				instrSheetIds = this._buildInstrSheetIdArray(this);
				workOrderIds = this._buildWorkOrderIdArray(this);
			} else {
				wobNums = this._buildWobNumArray(items);
				// Add instruction sheet and work order numbers if available (added in ICN 2.0.3.5)
				instrSheetIds = this._buildInstrSheetIdArray(items);
				workOrderIds = this._buildWorkOrderIdArray(items);
			}

			var params = {
				repositoryId: this.repository.id,
				connection_point: this.connectionPoint,
				objectStoreId: this.objectStore ? this.objectStore.id : "",
				wob_num: wobNums,
				queue_name: this.queueName ? encodeURIComponent(this.queueName) : "",
				step_lock_item: "true",
				user_name: user,
				user_display_name: displayName,
				delegate_flag: delegate
			};

			var self = this;
			var request = ecm.model.Request.invokeService("reassign", this.repository.type, params, function(response) {
				self._reassignCompleted(response, callback);
			}, false, synchronous, onError, backgroundRequest);
			this.logExit("reassign");
		},

		_reassignCompleted: function(response, callback) {
			this.logEntry("_reassignCompleted");
			this.onChange([
				this
			]);
			if (callback) {
				callback(response);
			}
			this.logExit("_reassignCompleted");
		},

		_buildWobNumArray: function(items) {
			// Need to pass array of wob_nums for the multi-selected set of items...
			var wobNums = [];
			if (items instanceof String) {
				wobNums.push(items);
			} else if (lang.isArray(items)) {
				for ( var i in items) {
					var item = items[i];
					if (item instanceof String) {
						wobNums.push(item);
					} else {
						wobNums.push(item.id);
					}
				}
			} else {
				wobNums.push(items.id);
			}
			return wobNums;
		},

		_buildInstrSheetIdArray: function(items) {
			// Need to pass array of instruction sheet ids for the multi-selected set of items...
			var instrSheetIds = [];
			if (this.F_InstrSheetId) { // if the workitems have been preloaded with instruction sheet Id
				if (lang.isArray(items)) {
					for ( var i in items) {
						var item = items[i];
						if (item instanceof WorkItem) {
							instrSheetIds.push(item.F_InstrSheetId);
						}
					}
				} else if (items instanceof WorkItem) { // this is a single item
					instrSheetIds.push(items.F_InstrSheetId);
				}
			}
			return instrSheetIds;
		},

		_buildWorkOrderIdArray: function(items) {
			// Need to pass array of work order ids for the multi-selected set of items...
			var workOrderIds = [];
			if (this.F_WorkOrderId) { // if the workitems have been preloaded with work order Id
				if (lang.isArray(items)) {
					for ( var i in items) {
						var item = items[i];
						if (item instanceof WorkItem) {
							workOrderIds.push(item.F_WorkOrderId);
						}
					}
				} else if (items instanceof WorkItem) {
					workOrderIds.push(items.F_WorkOrderId);
				}
			}
			return workOrderIds;
		},

		/**
		 * Launches a FileNet P8 workflow programmatically (no UI).
		 * <p>
		 * Will also set up the initiating attachment information from the content item that is passed in (however, not
		 * required).
		 * 
		 * @param item
		 *            {@link ecm.model.ContentItem} object for the object to be associated as the initiating attachment
		 * @param callback
		 *            A function that is called when the launch action has completed.
		 */
		launchWorkflow: function(item, callback) {
			this.logEntry("launchWorkflow");
			this.logInfo("launchWorkflow", "workflowObjectStoreName = " + this.objectStoreName + ", workflowId = " + this.id + ", workflowVsId = " + this.vsId);
			var request = null;
			if (this.repository._isP8()) {
				var self = this;
				var workflowId = this.id;
				if (!workflowId) {
					workflowId = "";
				} else {
					// Check the format of the id, send only the actual staic document id
					if (workflowId.indexOf(",") > 0) {
						workflowId = workflowId.split(",")[2];
					}
				}
				var params = {
					repositoryId: this.repository.id,
					connection_point: this.connectionPoint,
					workflowObjectStoreName: this.objectStoreName, // can be null, will pick up from repositoryId
					workflowId: workflowId,
					workflowVsId: this.vsId,
					workflowStyle: this.styleName,
					workClassName: encodeURIComponent(this.workclass_name || "")
				};
				if (item != null) {
					params.docid = item.getValue("Id");
					params.objectStoreName = item.repository.objectStoreName;
					params.attachmentId = this.createAttachmentId(item);
					params.subject = this.createSubject(item);
					this.logInfo("launchWorkflow", "objectStoreName = " + params.objectStoreName + ", docid = " + params.docid + ", attachmentId = " + params.attachmentId);
				}
				request = ecm.model.Request.invokeService("launchWorkflow", this.repository.type, params, function(response) {
					self._launchWorkflowCompleted(response, callback);
				});
			}
			this.logExit("launchWorkflow");
			return request;
		},

		_launchWorkflowCompleted: function(response, callback) {
			this.logEntry("_launchWorkflowCompleted");
			this.onChange([
				this
			]);
			if (callback) {
				callback(response);
			}
			this.logExit("_launchWorkflowCompleted");
		},

		/**
		 * Launches a Content Manager document routing workflow programmatically (no UI). Supports passing multiple
		 * items.
		 * 
		 * @param items
		 *            A collection of ContentItem objects to be started on a workflow.
		 * @param callback
		 *            A function that is called when the start action has completed.
		 */
		startWorkflow: function(items, callback) {
			this.logEntry("startWorkflow");
			var request = null;
			if (this.repository._isCM()) {
				var docidJson = '{';
				for ( var i in items) {
					docidJson = docidJson + '"' + "docid" + i + '":"' + items[i].id + '",';
				}
				docidJson = docidJson.substring(0, docidJson.length - 1) + '}';
				var params = lang.mixin(dojojson.parse(docidJson), {
					repositoryId: this.repository.id,
					process_name: this.workflowName,
					process_owner: this.owner,
					process_priority: this.priority
				});
				var self = this;
				request = ecm.model.Request.invokeService("startWorkflow", this.repository.type, params, function(response) {
					self._startWorkflowCompleted(response, callback);
				}, true);
			}
			this.logExit("startWorkflow");
			return request;
		},

		_startWorkflowCompleted: function(response, callback) {
			this.logEntry("_startWorkflowCompleted");
			if (callback) {
				callback(response);
			}
			this.logExit("_startWorkflowCompleted");
		},

		/**
		 * Edit a Content Manager document routing workflow.
		 * 
		 * @param items
		 *            A collection of ContentItem objects in a running workflow to be edited.
		 * @param callback
		 *            A function that is called when the edit action has completed.
		 */
		editWorkflow: function(items, callback) {
			this.logEntry("editWorkflow");
			var request = null;
			if (this.repository._isCM()) {
				var docidJson = '{';
				for ( var i in items) {
					docidJson = docidJson + '"' + "workItemId" + i + '":"' + items[i].id + '",';
				}
				docidJson = docidJson.substring(0, docidJson.length - 1) + '}';
				var params = lang.mixin(dojojson.parse(docidJson), {
					repositoryId: this.repository.id,
					process_name: this.workflowName,
					process_owner: this.owner,
					process_priority: this.priority
				});
				var self = this;
				request = ecm.model.Request.invokeService("editWorkflow", this.repository.type, params, function(response) {
					self._editWorkflowCompleted(response, callback);
				}, true);
			}
			this.logExit("editWorkflow");
			return request;
		},

		_editWorkflowCompleted: function(response, callback) {
			this.logEntry("_editWorkflowCompleted");
			this.onChange([
				this
			]);
			if (callback) {
				callback(response);
			}
			this.logExit("_editWorkflowCompleted");
		},

		/**
		 * Checks to see if the specified workflow is currently running in the Process Engine.
		 * 
		 * @param item
		 *            ContentItem object for the object participating in the workflow.
		 * @param callback
		 *            A function that is called when the action has completed. It is passed a boolean flag indicating
		 *            whether the workflow is running or not.
		 */
		isWorkflowRunning: function(item, callback) {
			this.logEntry("isWorkflowRunning");
			this.logInfo("isWorkflowRunning", "objectStoreName = " + item.repository.objectStoreName + ", docid = " + item.getValue("Id"));
			var self = this;
			var request = ecm.model.Request.invokeService("isWorkflowRunning", this.repository.type, {
				repositoryId: this.repository.id,
				connection_point: this.connectionPoint,
				docid: item.getValue("Id"),
				objectStoreName: item.repository.objectStoreName
			}, function(response) {
				self._isWorkflowRunningCompleted(response, callback);
			});
			this.logExit("isWorkflowRunning");
			return request;
		},

		_isWorkflowRunningCompleted: function(response, callback) {
			this.logEntry("_isWorkflowRunningCompleted");
			if (callback) {
				callback(response.workflowRunning);
			}
			this.logExit("_isWorkflowRunningCompleted");
		},

		/**
		 * Retrieves folder contents for Content Manager Worklist folders.
		 * 
		 * @param callback
		 *            A function that is called when the action has completed. It is passed a
		 *            {@link ecm.model.ResultSet} object.
		 * @param orderBy
		 *            The attribute identifier for the attribute to order the items.
		 * @param descending
		 *            If true, the items are ordered in descending order.
		 */
		openFolderContent: function(callback, orderBy, descending) {
			this.logEntry("openFolderContent");
			var request = ecm.model.Request.invokeService("openFolder", this.repository.type, {
				repositoryId: this.repository.id,
				docid: this.docid,
				order_by: orderBy ? orderBy : "",
				order_descending: descending ? "true" : "false",
				filter_type: ""
			}, lang.hitch(this, function(response) {
				this._openFolderContentCompleted(response, callback);
			}));
			this.logExit("openFolderContent");
			return request;
		},

		_openFolderContentCompleted: function(response, callback) {
			this.logEntry("_openFolderContentCompleted");

			response.repository = this.repository;
			response.parentFolder = this;
			response.setType = "contentItems";
			var results = WorkItem.createResultSet(response);
			callback(results);
			this.logExit("_openFolderContentCompleted");
		},

		/**
		 * Returns true if this item has content.
		 * 
		 * @returns {Boolean} true if this item has content, false otherwise.
		 */
		hasContent: function() {
			return !ecm.model.ContentItem.NoContentMimeTypes[this.mimetype];
		},

		/**
		 * Returns true if the item is a system object.
		 * 
		 * @returns {Boolean} true if this item is a system object, false otherwise.
		 */
		isSystemItem: function() {
			return false;
		},

		/**
		 * Returns true if the process queue this item is running in is a Tracker queue.
		 * 
		 * @returns {Boolean} true if work item is in tracker queue.
		 * @since 2.0.2
		 */
		isInTrackerQueue: function() {
			if (this.queueName != null) {
				if (this.queueName == "Tracker" || this.queueName == "Tracker(0)") {
					return true;
				} else {
					return false;
				}
			} else {
				return false;
			}
		},

		_retrieveActionList: function(callback) {
			if (this.processActionsVisible) {
				callback();
			} else {
				var self = this;
				var params = {
					requestParams: {}
				};
				params.requestParams = {						
					repositoryId: this.repository.id,
					workItemId: self.id
				};
				params.requestCompleteCallback = function(response) {
					self._retrieveActionListCompleted(response, callback);
				};
				var request = ecm.model.Request.invokeServiceAPI("getActionList", this.repository.type, params);
			}
		},

		_retrieveActionListCompleted: function(response, callback) {
			this.logEntry("_retrieveActionListCompleted");
			this.processActionsVisible = {};
		    this.hidden_remove= response.hidden_remove;
		    this.processActionsVisible["hidden_remove"] = response.hidden_remove;
		    this.hidden_resume = response.hidden_resume;
		    this.processActionsVisible["hidden_resume"] = response.hidden_resume;
		    this.hidden_suspend = response.hidden_suspend;
		    this.processActionsVisible["hidden_suspend"] = response.hidden_suspend;
		    this.hidden_Changepriority= response.hidden_Changepriority;
		    this.processActionsVisible["hidden_Changepriority"] = response.hidden_Changepriority;
		    this.hidden_Changeowner = response.hidden_Changeowner;
		    this.processActionsVisible["hidden_Changeowner"] = response.hidden_Changeowner;
		    this.hidden_ChangeProcess = response.hidden_ChangeProcess;
		    this.processActionsVisible["hidden_ChangeProcess"] = response.hidden_ChangeProcess;
			if (callback) {
				callback();
			}
			this.logExit("_retrieveActionListCompleted");
		},


		/**
		 * Return true if the work item can be reassigned. (FileNet P8 only.)
		 * 
		 * @param callback
		 *            A function that is called to return a flag indicating whether the item can be reassigned or not.
		 * @since 2.0.2
		 */
		canReassign: function(callback) {
			this.logEntry("canReassign");
			if (this.repository.type != "p8") {
				callback(this.can_reassign);
			} else {
				var canReassign = this.hasPrivilege("privCanReassign") || this.can_reassign;
				var tag = this.F_Tag ? this.F_Tag : this.step_tag;
				if (canReassign && (tag.indexOf("ICNParallel") == 0 || tag.indexOf("ICNSequential") == 0)) {
					this.logInfo("Check the ICN_AllowReassign flag");
					var allowReassign = this.getValue("ICN_AllowReassign");
					if (!allowReassign) {
						var params = {
							repositoryId: this.repository.id,
							connection_point: this.connectionPoint,
							objectStoreId: this.objectStore ? this.objectStore.id : "",
							wob_num: this.id,
							queue_name: this.queueName ? encodeURIComponent(this.queueName) : "",
							step_lock_item: "false"
						};
						ecm.model.Request.invokeService("getStepParameters", this.repository.type, params, function(response) {
							for ( var i in response.criterias) {
								var attribute = response.criterias[i];
								if (attribute.name == "ICN_AllowReassign") {
									canReassign = attribute.value ? attribute.value : false;
									break;
								}
							}
							callback(canReassign);
						});
					} else {
						callback(canReassign);
					}
				} else {
					callback(canReassign);
				}
			}

			this.logExit("canReassign");
		},

		/**
		 * @private
		 */
		_addQueryFilterParams: function(params) {
			// Add extra step resolution information used to retrieve the correct step element
			if (this.F_InstrSheetId && this.F_WorkOrderId) {
				params.instr_sheet_id = this.F_InstrSheetId;
				params.work_order_id = this.F_WorkOrderId;
			}
		},

		clone: function() {
			var thisClone = new ecm.model.WorkItem({
				id: this.id,
				name: this.name
			});
			lang.mixin(thisClone, this);

			thisClone.attributes = lang.clone(this.attributes);
			thisClone.attributeLabels = lang.clone(this.attributeLabels);
			thisClone.attributeTypes = lang.clone(this.attributeTypes);
			thisClone.attributeFormats = lang.clone(this.attributeFormats);
			thisClone.attributeDisplayValues = lang.clone(this.attributeDisplayValues);
			thisClone.attributeReadOnly = lang.clone(this.attributeReadOnly);
			thisClone.attributeItems = lang.clone(this.attributeItems);
			return thisClone;
		}
	});

	/**
	 * @private Constructs a work item, given a JSON representation of the item.
	 * @param itemJSON
	 *            The JSON representation of the content item.
	 * @param repository
	 *            An instance of {@link ecm.model.Repository} for the item.
	 * @param resultSet
	 *            An instance of {@link ecm.model.ResultSet} if this item is from a result set.
	 * @param parent
	 *            An instance of {@link ecm.model.WorkItem} for the parent of this item (if known).
	 */
	WorkItem.createFromJSON = function(itemJSON, repository, resultSet, parent) {
		var contentItemJSON = lang.clone(itemJSON);

		var attributes = {};
		var attributeTypes = {};
		var attributeFormats = {};
		var attributeDisplayValues = {};
		var attributeValueTimeZoneOffsets = {};
		var attributeSystemProperty = {};

		for ( var i in itemJSON.attributes) {
			var attr = itemJSON.attributes[i];
			attributes[i] = attr[0];
			if (attr.length > 1) {
				attributeTypes[i] = attr[1];
			}
			if (attr.length > 2) {
				attributeFormats[i] = attr[2];
			}
			if (attr.length > 3) {
				attributeDisplayValues[i] = attr[3];
			}
			if (attr.length > 6 && attr[6] != null && (attr[6].valueTimeZoneOffset || attr[6].valueTimeZoneOffset === 0)) {
				attributeValueTimeZoneOffsets[i] = attr[6].valueTimeZoneOffset;
			}
			if (attr.length > 6 && attr[6] != null && attr[6].isSystem) {
				attributeSystemProperty[i] = attr[6].isSystem;
			}
		}

		lang.mixin(itemJSON, {
			repository: repository,
			connectionPoint: parent ? parent.connectionPoint : "",
			resultSet: resultSet,
			parent: parent,
			attributes: attributes,
			attributeTypes: attributeTypes,
			attributeFormats: attributeFormats,
			attributeDisplayValues: attributeDisplayValues,
			attributeValueTimeZoneOffsets: attributeValueTimeZoneOffsets,
			attributeSystemProperty: attributeSystemProperty
		});

		if (itemJSON.F_StepTemplate) // Be sure to decode the step template if it is in the response JSON
			itemJSON.F_StepTemplate = decodeURIComponent(itemJSON.F_StepTemplate);
		var item = new WorkItem(itemJSON);
		if (repository._isCM()) {
			itemJSON.id = itemJSON.docid; // move over docid, it will be real object identifier (not workpackage)
			contentItemJSON.id = contentItemJSON.docid;
		}
		item.contentItem = ContentItem.createFromJSON(contentItemJSON, repository, resultSet, parent);

		return item;
	};

	return WorkItem;
});
