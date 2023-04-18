/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/kernel",
	"dojo/_base/declare",
	"dojo/dom-construct",
	"./_Module"
], function(kernel, declare, domConstruct, _Module) {

	return declare(_Module, {
		/** @lends ecm.widget.listView.modules.Label.prototype */
		name: 'gridLabel',

		preload: function() {
			var t = this;
			t.domNode = domConstruct.create('div', {
				'class': 'gridLabel dijitInline',
				innerHTML: this.label
			});
		},

		destroy: function() {
			this.inherited(arguments);
			domConstruct.destroy(this.domNode);
		},

		label: '',

		setLabel: function(label) {
			this.domNode.innerHTML = this.label = label;
		}
	});
});
