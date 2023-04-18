/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/lang",
	"dojo/_base/array"
], function(lang, array) {
	var viewoneUtils = {
		getLabelAnnotations: function(viewer) {
			var labels = viewer.getAnnotationLabels("any", -1).split(viewer.getDelimiter());
			return array.map(labels, function(label) {
				return viewer.getAnnotation(label);
			});
		},

		isLabelAnnotationsEqual: function(viewer, labelAnnotations) {
			return viewoneUtils._isMapsEqual(viewoneUtils.getLabelAnnotations(viewer), labelAnnotations);
		},

		_isMapsEqual: function(map1, map2) {
			var keys1 = Object.keys(map1);
			var keys2 = Object.keys(map2);
			if (keys1.length != keys2.length)
				return false;
			return array.every(keys1, function(key) {
				return map1[key] == map2[key];
			});
		}
	};
	return viewoneUtils;
});
