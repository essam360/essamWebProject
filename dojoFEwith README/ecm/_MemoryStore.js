/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([ "dojo/_base/declare", "dojo/store/Memory" ],
function(declare, Memory) {
	/**
	 * @name ecm._MemoryStore
	 * @class Extends dojo.store.Memory to provide sorting and support for the "before" put directive (see Store.PutDirectives).
	 * @private
	 */
	return declare("ecm._MemoryStore", Memory, {
		put: function(object, options) {
			var data = this.data,
				index = this.index,
				idProperty = this.idProperty;
			var id = object[idProperty] = (options && "id" in options) ? options.id : idProperty in object ? object[idProperty] : Math.random();
			if (id in index) {
				// object exists
				if(options && options.overwrite === false){
					throw new Error("Object already exists");
				}
				// replace the entry in data
				data[index[id]] = object;
			} else {
				// add the new object
				if (options && options.before && options.before[idProperty] in index) {
					data.splice(index[options.before[idProperty]], 0, object);
					for (var i in data)
						index[data[i][idProperty]] = i;
				} else {
					index[id] = data.push(object) - 1;
				}
			}
			return id;
		},

		sort: function(sortFunction) {
			var data = this.data,
				index = this.index,
				idProperty = this.idProperty;
			data.sort(sortFunction || function(a, b) { return a.name.toUpperCase().localeCompare(b.name.toUpperCase());	});
			for (var i in data)
				index[data[i][idProperty]] = i;
		}
	});
});
