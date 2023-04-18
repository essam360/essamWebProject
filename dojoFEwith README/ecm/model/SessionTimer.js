/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare", //
	"dojo/_base/lang", //
	"dojo/_base/sniff",
	"dojo/on",
	"dojo/dom-class", //
	"dojo/dom-style", // domStyle.set, domStyle.get
	"dijit/registry", //
	"dojox/timing/_base",
	"../widget/dialog/SessionExpireWarningDialog", //
], //
function(declare, //
lang, //
has,
on,
domClass, //
domStyle, //
registry, //
baseTimer, //
sessionExpireWarningDialog) {

	/**
	 * @name ecm.model.SessionTimer
	 * @class Provides a timer that is used to count session time out
	 * @augments dojox.timing
	 */
	var SessionTimer = declare("ecm.model.SessionTimer", [
	  
	], {
		/** @lends ecm.model.SessionTimer.prototype */
		_leftTime:null,
		timer:null,
		interval:null,
		warningDialog:null,
		isRunning:false,
		limitTime:null,
		sessionExpireWarningTime: 2,
	
		constructor: function(limitT) {
			this._leftTime = limitT;
			this.limitTime = limitT;
			this.interval = 1000;
			this.warningDialog = sessionExpireWarningDialog.getSessionExpireWarningDialog();
			this.warningDialog.sessionExpireWarningTime = this.sessionExpireWarningTime;
		},
		
		start: function(){
		// summary:
		//		Start the timer ticking.
		// description:
		//		Calls the "onStart()" handler, if defined.
		//		Note that the onTick() function is not called right away,
		//		only after first interval passes.
		if (typeof this.onStart == "function"){
			this.onStart();
		}
		
		this.sessionExpireWarningTime = ecm.model.desktop.sessionExpireWarningTime;
		this.warningDialog.sessionExpireWarningTime = this.sessionExpireWarningTime;
		this._leftTime = this.limitTime;
		if(this.timer == null){
			this.timer = new dojox.timing.Timer(this.interval);
			this.timer.onTick = lang.hitch(this,"onTick");
		}
		this.timer.start();
		this.isRunning = true;
		},
		
		stop: function(){
			// summary:
			//		Stop the timer.
			// description:
			//		Calls the "onStop()" handler, if defined.
			if (typeof this.onStop == "function"){
				this.onStop();
			}
			this.isRunning = false;
			this._leftTime = 0;
			if(this.timer != null)
				this.timer.stop();
		},
		
		onTick: function(){
			this._leftTime--;
			if(this._leftTime == this.sessionExpireWarningTime*60+30){
				this.warningDialog.show();
			}
			if(this._leftTime == 30){
				this.warningDialog._onLogoff();
			}
		},
		
		reset: function(limitT){
			this.sessionExpireWarningTime = ecm.model.desktop.sessionExpireWarningTime;
			this.warningDialog.sessionExpireWarningTime = this.sessionExpireWarningTime;
			this._leftTime = limitT;
			this.limitTime = limitT;
		}
	});
	/**
	 * Static method that returns a singleton global instance of the Session Timer.
	 * 
	 * @returns Returns the global instance of the Session Timer.
	 * @memberof ecm.model.SessionTimer
	 */
	SessionTimer.getSessionTimer = function(limitT) {
		if (!SessionTimer._sessionTimer) {
			SessionTimer._sessionTimer = new SessionTimer(limitT);

			var onBeforeUnload = function(event) {
				if (oldOnBeforeUnload) {
					var results = oldOnBeforeUnload(event);
					if (results) {
						return results;
					}
				}
				if (onBeforeUnloadHandler) {
					onBeforeUnloadHandler.remove();
					onBeforeUnloadHandler = null;
				}
				if (SessionTimer._sessionTimer) {
					if(SessionTimer._sessionTimer.warningDialog)
						SessionTimer._sessionTimer.warningDialog.destroyRecursive();
					delete SessionTimer._sessionTimer;
				}
			};
			if (has("chrome") || has("safari")) {
				var onBeforeUnloadHandler = on(window, "beforeunload", onBeforeUnload);
			} else { // For IE and Firefox, we must directly override window.onbeforeunload
				var oldOnBeforeUnload = window.onbeforeunload;
				window.onbeforeunload = onBeforeUnload;
			}
		}
		return SessionTimer._sessionTimer;
	};
	return ecm.model.SessionTimer;
});
