/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array",
	"dojo/aspect",
	"ecm/Messages"
], function(declare, lang, array, aspect, Messages) {

	/**
	 * Constructs the model object.
	 * 
	 * @param properties
	 *            The properties for the model object. These properties are accessible directly as fields of the object.
	 *            The following properties are understood:
	 *            <dl>
	 *            <dt>id
	 *            <dd>The identifier for the object, as known by the server.
	 *            <dt>name
	 *            <dd>The displayable name for the object.
	 *            </dl>
	 * @name ecm.model._ModelObject
	 * @class Provides a base class from which all model objects are derived. The _ModelObject class provides common
	 *        properties and logging for the other classes in the ecm.model package. <br>
	 *        <br>
	 *        Private functions should not be used to access public members of the class. Access member variables
	 *        directly. For example:
	 *        <p>
	 *        console.debug("Object name=" + obj.name);
	 *        </p>
	 *        <b>Note:</b> Private getter methods, such as getName, <b>will be removed</b> in a future release.
	 * @public
	 */
	var FileTrackingLocation = declare("ecm.model.admin.FileTrackingLocation", null, {

	});
	FileTrackingLocation.locationTypes = {
		INVALID: 0, // processing errors etc
		HOME_PATH: 1, //user home directory
		MY_DOCUMENTS: 2, // user document directory
		EXACT_PATH: 3, //exact path to the location
		EV_QP: 4, //env variable with  qualified path as suffix
		QP_EV: 5,
		EV: 6
	//
	};
	FileTrackingLocation.locationOptions = [
		{
			name: ecm.messages.admin_file_tracking_doc_directory_home_path,
			value: FileTrackingLocation.locationTypes.HOME_PATH
		},
		{
			name: ecm.messages.admin_file_tracking_doc_directory_my_documents,
			value: FileTrackingLocation.locationTypes.MY_DOCUMENTS
		},
		{
			name: ecm.messages.admin_file_tracking_ev_us,
			value: FileTrackingLocation.locationTypes.EV
		}
	];

	ecm.model.admin.fileTrackingLocation = FileTrackingLocation;

	return ecm.model.admin.fileTrackingLocation;
});
