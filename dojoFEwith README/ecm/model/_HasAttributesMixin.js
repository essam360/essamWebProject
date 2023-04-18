/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/array",
	"dojo/_base/json",
	"dojo/_base/lang",
	"../LoggerMixin",
	"./_SharedRequestsMixin",
	"./AttributeDefinition",
	"./ChildComponentDefinition",
	"./ChildComponent"
], function(declare, array, dojojson, lang, LoggerMixin, _SharedRequestsMixin, AttributeDefinition, ChildComponentDefinition, ChildComponent) {

	/**
	 * @name ecm.model._HasAttributesMixin
	 * @class Provides methods that are used to handle content class attributes. <code>ContentClass</code> and
	 *        <code>SearchContentClasses</code> mixes in <code>_HasAttributesMixin.
	 * @public
	 */
	return declare("ecm.model._HasAttributesMixin", [
		LoggerMixin,
		_SharedRequestsMixin
	], {
		/** @lends ecm.model._HasAttributesMixin.prototype */
		
		/**
		 * The name of the service that is used to retrieve the attribute definitions.
		 * 
		 * @since 5.0.3
		 */
		retrieveAttributeDefinitionsService: "openContentClass",

		/**
		 * Sets the list of attribute information. Can be used to pass in pseudo attribute definitions.
		 * 
		 * @param attributeDefinitions
		 *            A list of Properties passed in externally (instead of being retrieved from the repository).
		 */
		setAttributeDefinitions: function(attributeDefinitions) {
			this.attributeDefinitions = attributeDefinitions;
		},

		/**
		 * Clears the attribute information that had been previously retrieved. The next call to
		 * retrieveAttributeDefinitions will re-acquire the information from the content server.
		 */
		unloadAttributeDefinitions: function() {
			// summary:
			// removes any attribute contents so that they will be retrieved from the server on next call to
			// retrieveAttributeDefinitions
			this.attributeDefinitions = null;
			this.allAttributeDefinitions = null;
		},

		isPseudoClass: function() {
			return false;
		},

		/**
		 * Retrieves detailed attribute information for the content class.
		 * 
		 * @param callback
		 *            A function that is invoked when the retrieval completes. The attribute definitions are passed to
		 *            this function as an array of {@link ecm.model.AttributeDefinition} objects.
		 * @param isBackgroundRequest
		 *            If true, this service call to retrieve attribute information will be handled silently in the
		 *            background without any status dialogs or cursor changes.
		 * @param onError
		 * @since 2.0.3 A callback function called if there is an error returned from the request.
		 */
		retrieveAttributeDefinitions: function(callback, isBackgroundRequest, onError) {
			this.logEntry("retrieveAttributeDefinitions");
			var request = null;
			if (this.attributeDefinitions) {
				if (callback) {
					callback(this.attributeDefinitions, this.childComponentDefinitions);
				}
			} else {
				var params = {
					repositoryId: this.repository.id,
					objectStoreId: this.objectStore ? this.objectStore.id : "",
					template_name: this.id,
					pseudo_class: this.pseudoClass
				};
				if (this.repository._isCM() && this.id == "$common") {
					params.filterByAvailableClasses = "true";
					params.filter_type = "searches";
				} else if (this._formType) { // used when retrieving attributes during an OD document add
					params.form_type = this._formType;
				}
				var sharedRequestParams = {
					sharedRequestMethod: "retrieveAttributeDefinitions",
					sharedRequestCompleteCallback: callback,
					requestFailedCallback: onError,
					serviceName: this.retrieveAttributeDefinitionsService,
					repositoryType: this.repository.type,
					requestParams: params,
					requestCompleteCallback: lang.hitch(this, function(response) {
						this._retrieveAttributeDefinitionsCompleted(response, sharedRequestParams);
					}),
					requestFailedCallback: lang.hitch(this, function(response, errorMessages) {
						this.failSharedRequest(sharedRequestParams, lang.hitch(this, function(callback) {
							callback(response, errorMessages);
						}));
					}),
					backgroundRequest: isBackgroundRequest
				};
				request = this.invokeSharedRequest(sharedRequestParams);
			}
			this.logExit("retrieveAttributeDefinitions");
			return request;
		},

		_retrieveAttributeDefinitionsCompleted: function(response, sharedRequestParams) {
			this.logEntry("_retrieveAttributeDefinitionsCompleted");

			this.attributeDefinitions = this._createAttributeDefinitions(response);
			this.childComponentDefinitions = this._createChildComponentDefinitions(response);

			if (this.attributeDefinitionsById !== undefined) {
				this.attributeDefinitionsById = {};
				array.forEach(this.attributeDefinitions, lang.hitch(this, function(attrDef) {
					this.attributeDefinitionsById[attrDef.id] = attrDef;
				}));
			}

			this.completeSharedRequest(sharedRequestParams, lang.hitch(this, function(callback) {
				callback(this.attributeDefinitions, this.childComponentDefinitions);
			}));

			this.logExit("_retrieveAttributeDefinitionsCompleted");
		},

		_createAttributeDefinitions: function(response) {
			var methodName = "_createAttributeDefinitions";
			//this.logEntry(methodName, "criteria len: " + ((response && response.criterias) ? response.criterias.length : 0));
			var attributeDefinitions = [];
			for ( var i in response.criterias)
				attributeDefinitions.push(AttributeDefinition.createFromJSON(response.criterias[i], this));

			this.logExit(methodName);
			return attributeDefinitions;
		},

		_createChildComponentDefinitions: function(response) {
			var childDefinitions = null;
			if (response.parm_childcomponents) { // CM child components
				array.forEach(response.parm_childcomponents, function(childComponent) {
					if (childComponent.criterias) { // if this doesn't exist the child component is not a definition but is an instance
						var childDefinition = new ChildComponentDefinition({
							id: childComponent.template_name,
							name: childComponent.template_label,
							repository: this.repository,
							attributeDefinitions: this._createAttributeDefinitions(childComponent),
							minCardinality: childComponent.parm_minCardinality,
							maxCardinality: childComponent.parm_maxCardinality
						});
						if (childDefinitions == null) {
							childDefinitions = [];
						}
						childDefinitions.push(childDefinition);
					}
				}, this);
			}
			return childDefinitions;
		},

		_createChildComponents: function(response, childComponentDefinitions) {
			var childComponents = null;
			if (response.parm_childcomponents) { // CM child components
				for ( var j in response.parm_childcomponents) {
					var childcomponentJson = response.parm_childcomponents[j];
					if (childcomponentJson.values) { // if this doesn't exist the child component is not an instance but is a definition

						// The child component json is not directly usable to construct a child component model object.  It is converted to parameters
						// that can be used to create a child component model object here.
						var childcomponentParams = {
							template_name: childcomponentJson.name,
							template_label: childcomponentJson.name,
							criterias: []
						};
						var childComponentDefinition;
						for ( var i in childComponentDefinitions) {
							if (childComponentDefinitions[i].id == childcomponentJson.name) {
								childComponentDefinition = childComponentDefinitions[i];
								break;
							}
						}
						for ( var k in childcomponentJson.values) {
							var childcomponentInstanceJson = childcomponentJson.values[k];
							for ( var a in childcomponentInstanceJson.values) {
								if (k == 0) {
									childcomponentParams.criterias[a] = {};
									var name = childcomponentInstanceJson.values[a].name;
									name = name.substr(name.lastIndexOf("/") + 1); // also needed for ChildComponent constructor
									childcomponentParams.criterias[a].name = name;
									childcomponentParams.criterias[a].validValues = [];
									if (childComponentDefinition) {
										childcomponentParams.criterias[a].classAttributeDefinition = childComponentDefinition.attributeDefinitionsById[name];
									}
								}

								var oldChildCompAttrDef = childcomponentParams.criterias[a];
								var newChildCompAttrDef = childcomponentInstanceJson.values[a];

								oldChildCompAttrDef.validValues.push(newChildCompAttrDef.value);

								// Use the JSON attribute definition property names, not the model object attribute definition property names.
								if (newChildCompAttrDef && newChildCompAttrDef.updated) {
									if (newChildCompAttrDef.updatedLabel) {
										oldChildCompAttrDef.label = newChildCompAttrDef.label;
									}
									if (newChildCompAttrDef.updatedReadOnly) {
										oldChildCompAttrDef.readOnly = newChildCompAttrDef.readOnly;
									}
									if (newChildCompAttrDef.updatedRequired) {
										oldChildCompAttrDef.required = newChildCompAttrDef.required;
									}
									if (newChildCompAttrDef.updatedHidden) {
										oldChildCompAttrDef.hidden = newChildCompAttrDef.hidden;
									}
									if (newChildCompAttrDef.updatedMinValue) {
										oldChildCompAttrDef.minValue = newChildCompAttrDef.minValue;
									}
									if (newChildCompAttrDef.updatedMaxValue) {
										oldChildCompAttrDef.maxValue = newChildCompAttrDef.maxValue;
									}
									if (newChildCompAttrDef.updatedMinEntry) {
										oldChildCompAttrDef.minEntry = newChildCompAttrDef.minEntry;
									}
									if (newChildCompAttrDef.updatedMaxEntry) {
										oldChildCompAttrDef.maxEntry = newChildCompAttrDef.maxEntry;
									}
									if (newChildCompAttrDef.updatedFormat) {
										oldChildCompAttrDef.format = newChildCompAttrDef.format;
									}
									if (newChildCompAttrDef.updatedFormatDescription) {
										oldChildCompAttrDef.formatDescription = newChildCompAttrDef.formatDescription;
									}
									if (newChildCompAttrDef.updatedChoiceList) {
										oldChildCompAttrDef.choiceList = newChildCompAttrDef.choiceList;
									}
									if (newChildCompAttrDef.updatedHasDependentAttributes) {
										oldChildCompAttrDef.hasDependentAttributes = newChildCompAttrDef.hasDependentAttributes;
									}
								}
							}
						}
					}

					var childComponent = new ChildComponent(childcomponentParams);
					if (childComponents == null) {
						childComponents = [];
					}
					childComponents.push(childComponent);
				}
			}
			return childComponents;
		},

		/**
		 * Retrieves detailed attribute information for the content class. Some attribute properties needed for
		 * authoring and editing are not returned by this call to cut down the cache size.
		 * 
		 * @param callback
		 *            A function that is invoked when the retrieval completes. The attribute definitions are passed to
		 *            this function as an array of {@link ecm.model.AttributeDefinition} objects.
		 * @param includeSubclassDefinitions
		 *            A boolean value indicating if subclass definitions will be included in the retrieval.
		 * @param onError
		 * @since 2.0.3 A callback function called if there is an error returned from the request.
		 */
		retrieveAttributeDefinitionsForSearches: function(callback, includeSubclassDefinitions, onError) {
			this.logEntry("retrieveAttributeDefinitionsForSearches");
			if (!this.repository._isP8Like() || !includeSubclassDefinitions) {
				this.retrieveAttributeDefinitions(callback, false, onError);
			} else {
				// Retrieve P8 class properties including subclass properties for searches.  Some attribute properties needed for authoring
				// and editing will not be returned to cut down the cache size.
				if (this.allAttributeDefinitions) {
					if (callback) {
						callback(this.allAttributeDefinitions, this.childComponentDefinitions);
					}
				} else {
					var self = this;
					var params = {
						repositoryId: this.repository.id,
						objectStoreId: this.objectStore ? this.objectStore.id : "",
						template_name: this.id,
						pseudo_class: this.pseudoClass,
						filter_type: "searches",
						include_subclass_definitions: "true"
					}
					if (this.repository._isCM() && this.id == "$common") {
						params.filterByAvailableClasses = "true";
					}
					var request = ecm.model.Request.invokeService(this.retrieveAttributeDefinitionsService, this.repository.type, params, function(response) {
						self._retrieveAttributeDefinitionsForSearchesCompleted(response, callback, null, includeSubclassDefinitions);
					}, null, null, onError, false);
				}
			}
			this.logExit("retrieveAttributeDefinitionsForSearches");
			return request;
		},

		_retrieveAttributeDefinitionsForSearchesCompleted: function(response, callback) {
			this.logEntry("_retrieveAttributeDefinitionsForSearchesCompleted");
			this.allAttributeDefinitions = this._createAttributeDefinitions(response);
			this.childComponentDefinitions = this._createChildComponentDefinitions(response);
			if (callback) {
				callback(this.allAttributeDefinitions, this.childComponentDefinitions);
			}
			this.logExit("_retrieveAttributeDefinitionsForSearchesCompleted");
		},

		/**
		 * Retrieves attribute information similar to ContentClass but updated or restricted according to a list of
		 * attribute values. This method is used to provide dependent behavior between properties when specifying their
		 * values in property editors and add dialogs. The server may return different attribute information based on
		 * the properties in the context object.
		 * 
		 * @param params
		 *            An object containing the parameter properties listed below.
		 *            <ul>
		 *            <li><code>attributes</code><br>
		 *            An object containing the attribute values, keyed by attribute identifier.</li>
		 *            <br>
		 *            <li><code>childComponentValues</code><br>
		 *            IBM Content Manager only. An object containing child component values, keyed by child component
		 *            identifier.</li>
		 *            <br>
		 *            <li><code>context</code><br>
		 *            An object containing additional context properties that will be passed to the server. Only string
		 *            values are supported. May include:<br>
		 *            <ul>
		 *            <li><code>entryTemplateId</code><br>
		 *            FileNet P8 and IBM Content Manager only. The active {@link ecm.model.EntryTemplate} id.</li>
		 *            <br>
		 *            <li><code>entryTemplateName</code><br>
		 *            FileNet P8 and IBM Content Manager only. The active {@link ecm.model.EntryTemplate} name.</li>
		 *            <br>
		 *            <li><code>entryTemplateVsId</code><br>
		 *            FileNet P8 only. The active {@link ecm.model.EntryTemplate} version series id.
		 *            </ul>
		 *            </li>
		 *            <br>
		 *            <li><code>callback</code><br>
		 *            A function invoked when the attribute information has been retrieved. It is passed:<br>
		 *            <ol>
		 *            <li>An array of {@link ecm.model.AttributeDefinition} objects for those attributes that have
		 *            potentially changed properties due to the attribute values passed in. Note that this array does
		 *            not usually contain all of the attributes of the content class.</li>
		 *            <br>
		 *            <li>An array of {@link ecm.model.ChildComponentDefinition} objects for child components
		 *            definitions that have potentially changed.</li>
		 *            <br>
		 *            <li>An array of {@link ecm.model.ChildComponent} objects for child components that have
		 *            potentially changed.</li>
		 *            </ol>
		 *            </li>
		 *            <br>
		 *            <li><code>isBackgroundRequest</code><br>
		 *            A boolean value indicating whether the request should be run in the background.</li>
		 *            <br>
		 *            <li><code>onError</code><br>
		 *            A callback function called if there is an error returned from the request.</li>
		 *            </ul>
		 * @since 2.0.3
		 */
		retrieveDependentAttrDefs: function(params) {
			this.logEntry("retrieveDependentAttrDefs");

			var attributes = params.attributes;
			var childComponentValues = params.childComponentValues;
			var context = params.context;
			var callback = params.callback;
			var isBackgroundRequest = params.isBackgroundRequest;
			var onError = params.onError;

			if ((this.hasDependentAttributes() || params.alwaysRetrieve) //
					&& (this.repository.type == "p8" || this.repository.type == "cm" || this.repository.type == "cmis" || this.repository.type == "box" //
					// Until support for OD edit is added to edsPlugin, check that the context action is search or addItem. 
					|| (this.repository.type == "od" && context && (context.action == "search" || context.action == "addItem" || context.action == "editProperties" || context.action == "viewEditProperties")))) {
				var requestParams = {
					repositoryId: this.repository.id,
					objectStoreId: this.objectStore ? this.objectStore.id : "",
					template_name: this.id,
					pseudo_class: this.pseudoClass
				};
				if (context) {
					requestParams.context = dojojson.toJson(context);
				}

				var attributeParams;
				if (childComponentValues && childComponentValues.length > 0) {
					// Use new attributeParams when child components are present
					attributeParams = {
						criterias: attributes,
						childComponentValues: childComponentValues
					};
				} else { // use the old request params that only understand attributes
					attributeParams = attributes;
				}

				var self = this;
				var request = ecm.model.Request.postService("getDependentAttributeInfo", this.repository.type, requestParams, "text/json", dojojson.toJson(attributeParams), function(response) {
					self._retrieveDependentAttrDefsCompleted(response, callback);
				}, false, isBackgroundRequest ? isBackgroundRequest : false, false, onError);
			} else {
				// Manufacture a list of attribute definitions with the values filled in.  This is to mimic getDependentAttributeInfo without the overhead of the call
				var dependentAttributeDefinitions = [];
				for ( var i in this.attributeDefinitions) {
					var dependentAttributeDefinition = this.attributeDefinitions[i].clone();

					// Remove update flags from past EDS calls so that past changes are not applied again.
					for ( var propAttr in dependentAttributeDefinition) {
						if (dependentAttributeDefinition.hasOwnProperty(propAttr) && propAttr.indexOf("updated") == 0) {
							delete dependentAttributeDefinition[propAttr];
						}
					}

					var value = attributes[dependentAttributeDefinition.id];
					if (typeof value !== "undefined") {
						dependentAttributeDefinition.defaultValue = value;
						dependentAttributeDefinition.updatedDefaultValue = true;
						dependentAttributeDefinition.updated = true;
					}
					dependentAttributeDefinitions.push(dependentAttributeDefinition);
				}
				var childComponents = null;
				// Note: although child components with current values should likely also be manufactured, they
				// are not being done by getDependentAttributeInfo right now, so not duplicating them here
				if (callback) {
					callback(dependentAttributeDefinitions, this.childComponentDefinitions, childComponents);
				}
			}
			this.logExit("retrieveDependentAttrDefs");
			return request;
		},

		/**
		 * Retrieves attribute information similar to ContentClass but updated or restricted according to a list of
		 * attribute values. This method is used to provide dependent behavior between properties when specifying their
		 * values in property editors and add dialogs.
		 * 
		 * @param attributes
		 *            An object containing the attribute values, keyed by attribute identifier.
		 * @param childComponentValues
		 *            IBM Content Manager only. An object containing child component values, keyed by child component
		 *            identifier.
		 * @param callback
		 *            A function invoked when the attribute information has been retrieved. It is passed:
		 *            <ol>
		 *            <li> an array of {@link ecm.model.AttributeDefinition} objects for those attributes that have
		 *            potentially changed properties due to the attribute values passed in. Note that this array does
		 *            not usually contain all of the attributes of the content class.
		 *            <li>an array of {@link ecm.model.ChildComponentDefinition} objects for child components
		 *            definitions that have potentially changed
		 *            <li>an array of {@link ecm.model.ChildComponent} objects for child components that have
		 *            potentially changed.
		 *            </ol>
		 * @param isBackgroundRequest
		 *            A boolean value indicating whether the request should be run in the background.
		 * @param onError
		 *            A callback function called if there is an error returned from the request.
		 * @deprecated 2.0.3
		 */
		retrieveDependentAttributeDefinitions: function(attributes, childComponentValues, callback, isBackgroundRequest, onError) {
			this.logEntry("retrieveDependentAttributeDefinitions");
			var returnVal = this.retrieveDependentAttrDefs({
				attributes: attributes,
				childComponentValues: childComponentValues,
				callback: callback,
				isBackgroundRequest: isBackgroundRequest,
				onError: onError
			});
			this.logExit("retrieveDependentAttributeDefinitions");
			return returnVal;
		},

		_retrieveDependentAttrDefsCompleted: function(response, callback) {
			this.logEntry("_retrieveDependentAttrDefsCompleted");
			var attributeDefinitions = this._createAttributeDefinitions(response);
			var childComponentDefinitions = this._createChildComponentDefinitions(response) || this.childComponentDefinitions;
			var childComponents = this._createChildComponents(response, childComponentDefinitions);
			if (callback) {
				callback(attributeDefinitions, childComponentDefinitions, childComponents);
			}
			this.logExit("_retrieveDependentAttrDefsCompleted");
		},

		/**
		 * Returns true if any attribute in the class is marked as having dependent attributes. If the attribute
		 * definitions have not been retrieve then this will return true.
		 */
		hasDependentAttributes: function() {
			if (!this.attributeDefinitions) {
				return true;
			}
			var hasDependentAttributes = false;
			for ( var i in this.attributeDefinitions) {
				if (this.attributeDefinitions[i].hasDependentAttributes) {
					hasDependentAttributes = true;
				}
			}
			if (this.childComponentDefinitions) {
				for ( var i in this.childComponentDefinitions) {
					if (this.childComponentDefinitions[i].hasDependentAttributes) {
						hasDependentAttributes = true;
					}
				}
			}
			return hasDependentAttributes;
		}
	});

});
