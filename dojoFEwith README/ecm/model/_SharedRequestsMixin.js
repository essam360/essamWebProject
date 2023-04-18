/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array",
	"dojo/_base/connect",
	"./Request",
	"../LoggerMixin",
	"../MessagesMixin"
], function(declare, lang, array, connect, Request, LoggerMixin, MessagesMixin) {

	/**
	 * @name ecm.model._SharedRequestsMixin
	 * @class Provides methods that allow multiple, identical requests to share a common server request.
	 * @public
	 * @since 2.0.3
	 */
	return declare("ecm.model._SharedRequestsMixin", [
		LoggerMixin,
		MessagesMixin
	], {
		/** @lends ecm.model._SharedRequestsMixin.prototype */

		/**
		 * Invokes a single request on behalf of an object method that may be called multiple times. The multiple calls
		 * are associated with the single request using the calling object's method name and a key value that is shared
		 * by the common requests.
		 * 
		 * @param params
		 *            An object containing parameters. The parameters include:
		 *            <ul>
		 *            <li>shareRequestMethod - String name of the object method calling
		 *            <code>invokeSharedRequest<code>.</li>
		 *            <li>sharedRequestKey - A string that uniquely identifies the shared request context. Multiple
		 *            calls to <code>invokeSharedRequest<code> for the same request context should provide the same value. Along with the
		 *            shareRequestMethod parameter, this value identifies a shared request. If not provided, the default value "shared" is 
		 *            used and all requests for the calling method share a common request.</li>
		 *            <li>sharedRequestCompleteCallback - The request completed callback method that was passed into the calling
		 *            method. When <code>invokeSharedRequest<code> is called for a shared request, this callback method is added to
		 *            the list of completed callbacks. The completed callbacks are called when <code>completeSharedRequest<code> is called after the request completes.</li>
		 *            <li>sharedRequestFailedCallback - The request failed callback method that was passed into the calling
		 *            method. When <code>invokeSharedRequest<code> is called for a shared request, this callback method is added to
		 *            the list of failed callbacks. The failed callbacks are called when <code>failSharedRequest<code> is called after the request fails.</li>
		 *            <li>serviceName - The name of the service. Refer to navigator/WEB-INF/struts.xml for a list of
		 *            the services.</li>
		 *            <li>repositoryType - The type of content repository: od, cm, p8, ci, cmis, or undefined for
		 *            common services.
		 *            <li>requestParams - An object containing additional and request parameters. Parameters include:
		 *            <ul>
		 *            	<li>requestHeaders - Parameters intended for the Request Header. When requestHeaders is provided,
		 *            	the caller is responsible for optionally setting the "Cache-Control" request header, as a default
		 *            	option will not be set. When requestHeaders is not provided, "Cache-Control" "no-cache" is used.</li>
		 *            	<li>requestParams - Parameters intended for the URL (for GET requests) or request body (for POST
		 *            	requests).</li>
		 *            	<li>cancellable - Flag indicating if the request can be canceled</li>
		 *            	<li>backgroundRequest - Flag indicating if the request should be run in the background.</li>
		 *            	<li>synchronous - Flag indicating if this is a synchronous request. By default all requests are
		 *            	asynchronous. Using synchronous requests is discouraged and should be used with extreme caution.</li>
		 *            	<li>requestCompleteCallback - Callback method called when the a response from the server is
		 *            	received.</li>
		 *            	<li>requestFailedCallback - Callback method called when a request returns from the server with
		 *            	errors.</li>
		 *            </ul>
		 *            </li>
		 *            </ul>
		 */
		invokeSharedRequest: function(params) {
			var request = null;
			if (params.sharedRequestMethod) {
				// If no key, assume all requests made by the calling method can be shared under the common key "shared" (no call-specific context).
				if (params.sharedRequestKey == null) {
					params.sharedRequestKey = "shared";
				}

				if (!this._sharedRequests) {
					this._sharedRequests = {};
				}
				if (!this._sharedRequests.methods) {
					this._sharedRequests.methods = {};
				}

				var sharedMethodRequests = this._sharedRequests.methods[params.sharedRequestMethod];
				if (!sharedMethodRequests) {
					sharedMethodRequests = {};
					this._sharedRequests.methods[params.sharedRequestMethod] = sharedMethodRequests;
				}

				var sharedRequest = sharedMethodRequests[params.sharedRequestKey];
				if (!sharedRequest) {
					sharedRequest = {
						sharedRequestCompleteCallbacks: [],
						sharedRequestFailedCallbacks: []
					};
					sharedMethodRequests[params.sharedRequestKey] = sharedRequest;
				}

				if (lang.isFunction(params.sharedRequestCompleteCallback)) {
					sharedRequest.sharedRequestCompleteCallbacks.push(params.sharedRequestCompleteCallback);
				}
				if (lang.isFunction(params.sharedRequestFailedCallback)) {
					sharedRequest.sharedRequestFailedCallbacks.push(params.sharedRequestFailedCallback);
				}

				if (!sharedRequest.request) {
					var requestParams = lang.mixin({}, params);
					var handleCancel = connect.subscribe("ecm.widget.dialog.LoginDialog.onCancel", lang.hitch(this, function(message) {
						// The login dialog is displayed if the desktop session or repository connection have expired.
						// If the login dialog is cancelled, the pending shared requests should be removed.
						connect.unsubscribe(handleCancel);
						this._removeSharedRequest(requestParams);
					}));
					requestParams.requestCompleteCallback = lang.hitch(this, function(response) {
						connect.unsubscribe(handleCancel);
						if (params.requestCompleteCallback) {
							params.requestCompleteCallback(response);
						} else {
							this._removeSharedRequest(requestParams);
						}
					});
					requestParams.requestFailedCallback = lang.hitch(this, function(response, errorMessages) {
						connect.unsubscribe(handleCancel);
						if (params.requestFailedCallback) {
							params.requestFailedCallback(response, errorMessages);
						} else {
							this._removeSharedRequest(requestParams);
						}
					});
					try {
						sharedRequest.request = Request.invokeServiceAPI(params.serviceName, params.repositoryType, requestParams);
					} catch (e) {
						try {
							connect.unsubscribe(handleCancel);
							if (params.requestFailedCallback) {
								params.requestFailedCallback();
							}
						} finally {
							this._removeSharedRequest(requestParams);
						}
						throw e;
					}
				}
				request = sharedRequest.request;
			}
			return request;
		},

		/**
		 * Clears all pending shared requests.
		 */
		clearSharedRequests: function() {
			delete this._sharedRequests;
		},

		/**
		 * @private
		 */
		_removeSharedRequest: function(params) {
			var sharedRequest = null;
			if (params && params.sharedRequestMethod && (params.sharedRequestKey != null) && this._sharedRequests && this._sharedRequests.methods) {
				var sharedMethodRequests = this._sharedRequests.methods[params.sharedRequestMethod];
				if (sharedMethodRequests) {
					sharedRequest = sharedMethodRequests[params.sharedRequestKey];
					delete sharedMethodRequests[params.sharedRequestKey];
				}
			}
			return sharedRequest;
		},

		/**
		 * Completes a successful shared request by clearing the shared request and passing each callback in the shared
		 * request completed callbacks list to the callback method.
		 * 
		 * @param params
		 *            An object containing parameters used to identify the shared request. The required parameters
		 *            include:
		 *            <ul>
		 *            <li>shareRequestMethod - String name of the object method calling
		 *            <code>invokeSharedRequest<code>.</li>
		 *            <li>sharedRequestKey - A string that uniquely identifies the shared request context. Multiple
		 *            calls to <code>invokeSharedRequest<code> for the same request context should provide the same value. Along with the
		 *            shareRequestMethod parameter, this value identifies a shared request.</li>
		 *            </ul>
		 * @param callback
		 * 			This callback is called once with each callback in the completed callbacks list,
		 * 			so that the callback can pass the results of the completed request to each completed callback.
		 */
		completeSharedRequest: function(params, callback) {
			var completeCallbacks;
			var sharedRequest = this._removeSharedRequest(params);
			if (sharedRequest && callback) {
				completeCallbacks = sharedRequest.sharedRequestCompleteCallbacks;
				if (completeCallbacks) {
					array.forEach(completeCallbacks, function(completeCallback) {
						try {
							callback(completeCallback);
						} catch (e) {
							// Ignore exceptions so that all callbacks are called.
						}
					});
				}
			}
		},

		/**
		 * Fails a shared request by clearing the shared request and passing each callback in the shared request failed
		 * callbacks list to the callback method.
		 * 
		 * @param params
		 *            An object containing parameters used to identify the shared request. The required parameters
		 *            include:
		 *            <ul>
		 *            <li>shareRequestMethod - String name of the object method calling
		 *            <code>invokeSharedRequest<code>.</li>
		 *            <li>sharedRequestKey - A string that uniquely identifies the shared request context. Multiple
		 *            calls to <code>invokeSharedRequest<code> for the same request context should provide the same value. Along with the
		 *            shareRequestMethod parameter, this value identifies a shared request.</li>
		 *            </ul>
		 * @param callback
		 * 			This callback is called once with each callback in the failed callbacks list,
		 * 			so that the callback can pass the results of the failed request to each failed callback.
		 */
		failSharedRequest: function(params, callback) {
			var failedCallbacks;
			var sharedRequest = this._removeSharedRequest(params);
			if (sharedRequest && callback) {
				failedCallbacks = sharedRequest.sharedRequestFailedCallbacks;
				if (failedCallbacks) {
					array.forEach(failedCallbacks, function(failedCallback) {
						try {
							callback(failedCallback);
						} catch (e) {
							// Ignore exceptions so that all callbacks are called.
						}
					});
				}
			}
		}
	});
});
