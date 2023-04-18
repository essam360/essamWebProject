/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/lang",
	"ecm/model/ContentClass"
], function(lang, ContentClass) {
	var utils = {
		getItemParentFolder: function(item) {
			if (!item)
				return null;

			var parentFolder = item.parent;
			if (parentFolder && parentFolder.declaredClass) {
				if (parentFolder.declaredClass == "ecm.model.Favorite")
					parentFolder = parentFolder.item;
				else if (parentFolder.declaredClass == "ecm.model.WorkItem")
					parentFolder = parentFolder.contentItem;
			}

			return (parentFolder && lang.isFunction(parentFolder.isFolder) && parentFolder.isFolder()) ? parentFolder : null;
		},

		getContentItem: function(item) {
			if (!item)
				return null;

			if (item.declaredClass == "ecm.model.Favorite") {
				item = item.item;
			} else if (item.declaredClass == "ecm.model.WorkItem") {
				item = item.contentItem;
			}

			return item;
		},
		
		lookupChoiceList: function(val, choiceList, choiceListDispVal) {
			if (!choiceList)
				return;

			var choices = choiceList.choices;
			if (choices) {
				for ( var i in choices) {
					if (choices[i].choices && choices[i].choices.length > 0) {
						// has a sub list
						utils.lookupChoiceList(val, choices[i], choiceListDispVal);
						//if (choiceListDispVal != null) {
						//break;
						//}
					} else {
						//for multi-value choice lists
						if (lang.isArray(val)) {
							for ( var j in val) {
								if (choices[i].value == val[j]) {
									choiceListDispVal[j] = choices[i].displayName;
								}
							}

						} else {
							if (choices[i].value == val) {
								choiceListDispVal[0] = choices[i].displayName;
								break;
							}
						}
					}
				}
			}
		},

		cmRefreshParentIfPartAlwaysVersions: function(item, partTypeName, callback) {
			if (!item || !item.repository || !item.repository._isCM())
				return;
			var cc = item.getContentClass();
			var parent = utils.getItemParentFolder(item);
			if (!cc || !parent || !lang.isFunction(parent.refresh))
				return;

			cc.retrieveAttributeDefinitions(lang.hitch(this, function() {
				if (cc["partVersionControlOf" + partTypeName] == ContentClass.VERSION_CONTROL.ALWAYS) {
					parent.refresh();
					if (lang.isFunction(callback))
						callback();
				}
			}));
		}
	};

	return utils;
});
