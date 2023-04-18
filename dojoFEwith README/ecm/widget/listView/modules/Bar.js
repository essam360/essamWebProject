/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array",
	"ecm/widget/listView/modules/_Module",
	"dojo/_base/connect",
	"dojo/dom-construct"
], function(declare, lang, array, _Module, connect, domConstruct) {

	/**
	 * @name ecm.widget.listView.modules.Bar
	 * @class This content list module provides the bar capability which allows users to arrange the content list
	 *        widgets.
	 * @augments ecm.widget.listView.modules._Module
	 * @since 2.0.2
	 */

	return declare(_Module, {
		/** @lends ecm.widget.listView.modules.Bar.prototype */

		name: 'bar',

		/**
		 * See GridX API documentation for details.
		 */
		getAPIPath: function() {
			return {
				bar: this
			};
		},

		/**
		 * Creates the widget and parses the input data.
		 */
		preload: function() {
			var t = this;
			t.contentListModules = {};
			if (t.top) {
				t._topNode = domConstruct.create("div", {}, t.contentList.topContainer.domNode);
				t.contentListModules.top = t._parse(t.top, t._topNode);
			}
			if (t.bottom) {
				t._bottomNode = domConstruct.create("div", {}, t.contentList.bottomArea.domNode);
				t.contentListModules.bottom = t._parse(t.bottom, t._bottomNode);
			}
		},

		/**
		 * Destroy.
		 */
		destroy: function() {
			var t = this;
			t._forEachModule(function(module) {
				if (module.destroyRecursive) {
					module.destroyRecursive();
				} else if (module.destroy) {
					module.destroy();
				}
			});
			t.contentListModules = {};
			if (t._topNode) {
				domConstruct.destroy(t._topNode);
				t._topNode = null;
			}
			if (t._bottomNode) {
				domConstruct.destroy(t._bottomNode);
				t._bottomNode = null;
			}
			t.inherited(arguments);
		},

		/**
		 * Returns the content list module with the input name.
		 * 
		 * @param name
		 *            Name of the module.
		 * @return Instance of {@link ecm.widget.listView.modules._Module}.
		 */
		getContentListModule: function(name) {
			var module = this._getContentListModule(name, this.contentListModules.top);
			if (!module) {
				module = this._getContentListModule(name, this.contentListModules.bottom);
			}
			return module;
		},

		/**
		 * @private
		 */
		_getContentListModule: function(name, contentListModules) {
			if (contentListModules) {
				var count = contentListModules.length;
				for ( var i = 0; i < count; i++) {
					var tableModules = contentListModules[i];
					var count2 = tableModules.length;
					for ( var j = 0; j < count2; j++) {
						var module = tableModules[j];
						if (module && module.name && module.name == name) {
							return module;
						}
					}
				}
			}
			return null;
		},

		/**
		 * @private
		 */
		_forEachModule: function(callback) {
			function forEach(contentListModules) {
				if (contentListModules) {
					var count = contentListModules.length;
					for ( var i = 0; i < count; i++) {
						var tableModules = contentListModules[i];
						var count2 = tableModules.length;
						for ( var j = 0; j < count2; j++) {
							callback(tableModules[j]);
						}
					}
				}
			}
			forEach(this.contentListModules.top);
			forEach(this.contentListModules.bottom);
		},

		/**
		 * @private
		 */
		_parse: function(tableDefs, node) {
			var contentListModules = [];
			for ( var h = 0; h < tableDefs.length; h++) {
				var rowDefs = tableDefs[h];
				var tableNode = domConstruct.toDom('<table class="Bar" border="0" cellspacing="0" role="presentation"></table>');
				var modulesInTable = [];
				if (rowDefs && rowDefs.length) {
					for ( var i = 0; i < rowDefs.length; i++) {
						var columnDefs = rowDefs[i];
						var tr = domConstruct.create("tr");
						if (columnDefs && columnDefs.length) {
							for ( var j = 0; j < columnDefs.length; j++) {
								var columnDef = this._normalizeData(columnDefs[j]);
								var td = domConstruct.create("td");
								array.forEach([
									"colSpan",
									"rowSpan",
									"style"
								], lang.partial(this._setAttr, td, columnDef, 0));
								this._setAttr(td, columnDef, "class", "className");
								this._createData(columnDef, td, modulesInTable);
								tr.appendChild(td);
							}
						}
						tableNode.appendChild(tr);
					}
				}
				contentListModules.push(modulesInTable);
				node.appendChild(tableNode);
			}
			return contentListModules;
		},

		/**
		 * @private
		 */
		_setAttr: function(node, def, domAttr, attr) {
			if (def[attr]) {
				node.setAttribute(domAttr || attr, def[attr]);
				delete def[attr];
			}
		},

		/**
		 * @private
		 */
		_createData: function(columnDef, td, modules) {
			if (columnDef) {
				if (columnDef.moduleClasses) {
					for ( var k = 0; k < columnDef.moduleClasses.length; k++) {
						var moduleClass = columnDef.moduleClasses[k];
						if (moduleClass) {
							var module = null;
							var cls = moduleClass.moduleClass ? moduleClass.moduleClass : moduleClass;
							try {
								module = new cls(this.contentList, columnDef);
								module._bar = this;
								module._barNode = td;
								if (moduleClass.moduleClass) {
									lang.mixin(module, moduleClass);
								}
								module.preload();
							} catch (e) {
								console.error(e);
							}
							modules.push(module);
						}
					}

				} else if (columnDef.moduleClass) {
					var module = null;
					var cls = columnDef.moduleClass;
					delete columnDef.moduleClass;
					try {
						module = new cls(this.contentList, columnDef);
						module._bar = this;
						module.preload();
						td.appendChild(module.domNode);
					} catch (e) {
						console.error(e);
					}
					modules.push(module);

				} else if (columnDef.content) {
					td.innerHTML = columnDef.content;
				}
			}
		},

		/**
		 * @private
		 */
		_normalizeData: function(columnDef) {
			if (!columnDef || !lang.isObject(columnDef) || lang.isFunction(columnDef)) {
				columnDef = {
					moduleClass: columnDef
				};
			} else {
				columnDef = lang.mixin({}, columnDef); //Shallow copy, so user's input won't be changed.
			}
			if (lang.isString(columnDef.moduleClass)) {
				try {
					columnDef.moduleClass = require(columnDef.moduleClass);
				} catch (e) {
					console.error(e);
				}
			}
			if (!lang.isFunction(columnDef.moduleClass)) {
				columnDef.moduleClass = null;
			}
			if (columnDef.moduleClasses && !lang.isArray(columnDef.moduleClasses)) {
				columnDef.moduleClasses = null;
			}
			return columnDef;
		}

	});
});
