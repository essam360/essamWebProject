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
	"dojo/DeferredList",
	"ecm/MessagesMixin",
	"ecm/model/Message",
	"ecm/widget/dialog/MessageDialog",
	"ecm/LoggerMixin"
], function(declare, lang, array, Deferred, DeferredList, MessagesMixin, Message, MessageDialog, LoggerMixin) {

	/**
	 * @name ecm.widget._DroppedFilesAddDocMixin
	 * @class Provides methods that are used to handle content class attributes. <code>ContentClass</code> and
	 *        <code>SearchContentClasses</code> mixes in <code>_DroppedFilesAddDocMixin</code>.
	 * @public
	 */
	return declare("ecm.widget._DroppedFilesAddDocMixin", 
			[
	           MessagesMixin,
	           LoggerMixin
	           ], {
		/** @lends ecm.widget._DroppedFilesAddDocMixin.prototype */

		_eventHasFiles: function(evt) {
			if (!evt.dataTransfer || !evt.dataTransfer.files || evt.dataTransfer.files.length == 0) {
				if (!this._NoFilesMsgDialog) {
					this._NoFilesMsgDialog = new MessageDialog({
						buttonLabel: this.messages.warning_dialog_title,
						text: this.messages.add_drag_and_drop_no_files,
						tooltip: this.messages.warning_dialog_title
					});
				}
				this._NoFilesMsgDialog.show();
				return false;
			}
			return true;
		},
		
		_addFile: function(file){
			var methodName = "_getFilesFromDirectory"
			if( !this._files ){
				this._files = [];
			}
			if( file != null && file.name && this._checkFileName( file.name ) ){
				this.logDebug( "add file: " + file.name );
				this.logDebug( "file fullPath: " + file.fullPath );
				this._files.push( file )
			}
			
		},
		
		_checkFileName: function( fileName ){
			//only ignore some annoying hidden system files.
			if( navigator.userAgent.indexOf( "Window" ) > 0 ){
				if( fileName == "Thumbs.db" ){
					return false;
				}
			}else{
				//for MAC
				if( fileName == ".DS_Store" ){
					return false;
				}
			}
			return true;
		},
		
		_getFilesFromDirectory: function(directoryEntry, path){
			 var dirReader, entriesReader;
			 var methodName = "_getFilesFromDirectory"
			  this.logEntry( methodName );
		      dirReader = directoryEntry.createReader();
		      entriesReader = (function(self) {
		        return function(entries) {
		          var entry, _i, _len;
		          for (_i = 0, _len = entries.length; _i < _len; _i++) {
		            entry = entries[_i];
		            self.logDebug(methodName, i+": file entry? - " + entry.isFile );
		            if (entry.isFile) {
		              entry.file(function(file) {
		            	  self.logDebug(methodName,  "file entry:" + file.name );
		                
		                file.fullPath = "" + path + "/" + file.name;
		                self.logDebug(methodName,  "file.fullPath:" + file.fullPath );
		                return self._addFile(file);
		              });
		            } else if (entry.isDirectory) {
		            	self.logDebug(methodName,  "get from directory:" + path );
		            	self.logDebug(methodName,  "get from directory level:" + self._level );
		            	self._level++;
		            	self._getFilesFromDirectory(entry, "" + path + "/" + entry.name);
		            }
		          }
		          self._level--;
		          self.logDebug(methodName,   "minus level:" + self._level );
		        };
		      })(this);
		      dirReader.readEntries(entriesReader, function(error) {
		        return typeof console !== "undefined" && console !== null ? typeof console.log === "function" ? console.log(error) : void 0 : void 0;
		      });
		      this.logExit( methodName );
		},
		
		_getFiles: function( items, callback ){
			var entry, item, _i, _len, _results;
		      _results = [];
		      for (_i = 0, _len = items.length; _i < _len; _i++) {
		        item = items[_i];
		        if ((item.webkitGetAsEntry != null) && (entry = item.webkitGetAsEntry())) {
		          if (entry.isFile) {
		            _results.push(this._addFile(item.getAsFile()));
		          } else if (entry.isDirectory) {
		        	 this._level = 1;
		            _results.push(this._getFilesFromDirectory(entry, entry.name));
		          } else {
		            _results.push(void 0);
		          }
		        } else if (item.getAsFile != null) {
		          if ((item.kind == null) || item.kind === file) {
		            _results.push(this._addFile(item.getAsFile()));
		          } else {
		            _results.push(void 0);
		          }
		        } else {
		          _results.push(void 0);
		        }
		      }
		      if( callback ){
		    	  ecm.model.desktop._callback = callback;
		    	  setTimeout( 'ecm.model.desktop._callback()', 800 );
		      }
		      return _results;
		},

		_numberWithinMaxDocToAdd: function(files, targetItem) {
			var addAllowed = true;

			if (ecm.model.desktop) {
				var maxNumDocs = ecm.model.desktop.maxNumberDocToAdd;
				var errmessage = "add_document_too_many_items_error"
				if (targetItem.repository && targetItem.repository.type == "od") {
					maxNumDocs = 1
					errmessage = "add_document_too_many_items_od_error"
				}
				if (files.length > maxNumDocs) {
					ecm.model.desktop.addMessage(Message.createErrorMessage(errmessage, [
						maxNumDocs,
						files.length
					]));
					addAllowed = false;
				}
			}

			return addAllowed;
		},

		_verifyCanAddFilesFailure: function(items) {
			if (ecm.model.desktop) {
				var message;
				if (items.length > 1) {
					message = Message.createErrorMessage("add_document_multiple_items_error", [
						items.length,
						items
					]);
				} else {
					message = Message.createErrorMessage("add_document_single_item_error", [
						((items.length == 1) ? items[0] : null)
					]);
				}
				ecm.model.desktop.addMessage(message);
			}
		},

		// Pre-check for file upload failures.
		_verifyCanAddFiles: function(files, targetItem) {
			var topDeferred = new Deferred();
			if (files && files.length > 0) {
				if (typeof FileReader !== "undefined") {
					var deferreds = [];
					for (var i = 0; i < files.length; i++) {
						var deferred = new Deferred();
						deferreds.push(deferred);
						var file;
						if( files.item ){
							file = files.item(i); 
						}else{
							file = files[i];
						}
						
						//Dnd folders just supports p8
						if( targetItem && targetItem.repository && !targetItem.repository._isP8() && file.fullPath && ( file.fullPath.includes( "\\" ) || file.fullPath.includes("/") ) ){
							deferred.reject(file);
						}else{
						
							// We need to check whether any folders are being uploaded.
							// Preliminary folder screening
							if (file.type == "") {
								// Advanced folder screening: check to see that the item can be read (folders cannot be read).
								var fileReader = new FileReader();
								fileReader.onloadend = lang.hitch(fileReader, function(deferred, file) {
									if (this.error && (this.error.code != this.error.ABORT_ERR)) {
										deferred.reject(file);
									} else {
										// This may have been resolved already by the onerror handler.
										if (deferred.fired == -1) {
											deferred.resolve(file);
										}
									}
								}, deferred, file);
								fileReader.onerror = lang.hitch(fileReader, function(deferred, file) {
									if (this.error && this.error.code != this.error.ABORT_ERR) {
										deferred.reject(file);
									}
								}, deferred, file);
								fileReader.onprogress = lang.hitch(fileReader, function() {
									if (this.readyState == FileReader.LOADING) {
										this.abort();
									}
								});
								try {
									fileReader.readAsArrayBuffer(file);
								} catch (error) {
									deferred.reject(file);
								}
							} else {
								deferred.resolve(file);
							}
						}
					}
					var deferredList = new DeferredList(deferreds);
					deferredList.then(function(results) {
						var filenames = [];
						for (var i = 0; i < results.length; i++) {
							if (!results[i][0]) {
								filenames.push((results[i][1]["name"] || ""));
							}
						}
						if (filenames.length > 0) {
							topDeferred.reject(filenames);
						} else {
							topDeferred.resolve(true);
						}
					});
				} else {
					// FileReader is not available.
					// The best we can do is assume that a file with no type and size 0 is a folder. 
					var badFileNames = [];
					array.forEach(files, function(file) {
						if (!file.type && !file.size) {
							badFileNames.push(file.name);
						}
					});
					if (badFileNames.length > 0) {
						this._verifyCanAddFilesFailure(badFileNames);
					}
				}
			} else {
				topDeferred.resolve(true);
			}
			return topDeferred;
		}
	});
});
