/**
 * Licensed Materials - Property of IBM (C) Copyright IBM Corp. 2012 US Government Users Restricted Rights - Use,
 * duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */

define([
	"dojo/_base/lang",
	"dojo/_base/xhr",
	"./Logger"
], function(lang, xhr, Logger) {

	var version = lang.getObject("ecm.version", true);

	/**
	 * Provides the version of ecm in the form: version-revision, where version is version.release.mod and revision is a
	 * date in the form YYYYMMDD.
	 */
	version.getVersion = function(full) {
		var msg;
		var params = {
			url: require.toUrl("ecm/version.txt"),
			showProgress: false,
			handleAs: "json",
			sync: true,

			load: function(response, ioArgs) {
				msg = response.version;
				if (full) {
					msg += "-";
					msg += response.revision;
				}
				ecm.logger.logDebug("ecm.version.load", msg);
			},

			error: function(response, ioArgs) {
				ecm.logger.logDebug("ecm.version.error", response);
				return;
			}
		};
		xhr.get(params);
		return msg;
	};

	return version;
});
