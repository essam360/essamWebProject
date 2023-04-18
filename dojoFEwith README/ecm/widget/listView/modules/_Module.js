/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array",
	"dojo/_base/Deferred",
	"dojo/_base/connect",
	"dojo/aspect"
], function(declare, lang, array, Deferred, connect, aspect) {

	/**
	 * @name ecm.widget.listView.modules._Module
	 * @class This is the abstract base class for the content list modules.
	 */

	var moduleBase = declare([], {
		/** @lends ecm.widget.listView.modules._Module.prototype */

		constructor: function(contentList, args) {
			var t = this;
			t.contentList = contentList;
			t.loaded = new Deferred;
			t._cnnts = [];
			t._sbscs = [];
			lang.mixin(t, args);
		},

		destroy: function() {
			var f = array.forEach;
			f(this._cnnts, connect.disconnect);
			f(this._sbscs, connect.unsubscribe);
		},

		/**
		 * Allows disconnect.
		 */
		disconnect: function(obj) {
			var t = this;
			var newArray = [];
			for (var i = 0; i < t._cnnts.length; i++) {
				if (t._cnnts[i] != obj) {
					newArray.push(t._cnnts[i]);
				}
			}
			t._cnnts = newArray;
			connect.disconnect(obj);
		},

		/**
		 * Allows aspect event to the object.
		 */
		aspect: function(obj, e, method, scope, pos) {
			var cnnt = aspect[pos || 'after'](obj, e, lang.hitch(scope || this, method), 1);
			this._cnnts.push(cnnt);
			return cnnt;
		},

		/**
		 * Allows connect the event to the object.
		 */
		connect: function(obj, e, method, scope, flag) {
			var t = this, s = scope || t;
			var cnnt = connect.connect(obj, e, s, method);
			t._cnnts.push(cnnt);
			return cnnt; //Object
		},

		/**
		 * Allows batch connection.
		 */
		batchConnect: function() {
			for (var i = 0, args = arguments, len = args.length; i < len; ++i) {
				if (lang.isArrayLike(args[i])) {
					this.connect.apply(this, args[i]);
				}
			}
		}
	});

	var mods = moduleBase._modules = {};

	/**
	 * @private
	 */
	moduleBase.register = function(modClass) {
		var p = modClass.prototype;
		return mods[p.name || p.declaredClass] = modClass;
	};
	//! means not string, should be 'eval'ed.
	moduleBase._markupAttrs = [
		'id',
		'name',
		'field',
		'width',
		'dataType',
		'!formatter',
		'!decorator',
		'!sortable'
	];

	return moduleBase;
});
