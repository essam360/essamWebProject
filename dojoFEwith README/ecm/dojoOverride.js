/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
/**
 * Contains fixes to minor Dojo 1.9 bugs.
 */

// Use require() since it does not expect an object to be returned.
require([
	"dojo/_base/kernel",
	"dojo/_base/declare",
	"dojo/_base/Deferred",
	"dojo/_base/lang",
	"dojo/_base/array",
	"dojo/_base/connect",
	"dojo/_base/event",
	"dojo/_base/sniff",
	"dojo/aspect",
	"dojo/i18n",
	"dojo/date",
	"dojo/date/locale",
	"dojo/dom",
	"dojo/dom-attr",
	"dojo/dom-attr", // Needed for alternate load name
	"dojo/dom-class",
	"dojo/dom-construct",
	"dojo/dom-geometry",
	"dojo/dom-geometry", // Needed for alternate load name
	"dojo/dom-style",
	"dojo/keys",
	"dojo/on",
	"dojo/regexp",
	"dojo/_base/window",
	"dojo/_base/fx",
	"dojo/fx",
	"dojox/date/hebrew/locale",
	"dijit/Menu",
	"dijit/Tree",
	"dijit/_Widget",
	"dijit/_TemplatedMixin",
	"dijit/_HasDropDown",
	"dijit/Dialog",
	"dijit/DialogUnderlay",
	"dijit/BackgroundIframe",
	"dijit/Viewport",
	"dijit/place",
	"dijit/popup",
	"dijit/registry",
	"dijit/layout/BorderContainer",
	"dijit/form/_ComboBoxMenuMixin",
	"dijit/form/_TextBoxMixin",
	"dijit/form/Select",
	"dojox/widget/Standby",
	"gridx/modules/Header",
	"gridx/modules/Body",
	"gridx/modules/extendedSelect/Row",
	"gridx/Grid",
	"gridx/core/model/cache/Sync",
	"idx/widget/SloshBucket",
	"idx/form/_DateTimeTextBox"
],

function(kernel, declare, Deferred, lang, array, connect, event, has, aspect, i18n, date, dateLocale, dom, attr, domAttr, domClass, domConstruct, geometry, domGeometry, domStyle, keys, on, regexp, baseWindow, baseFx, fx, hebrewLocale, Menu, Tree, _Widget, _TemplatedMixin, _HasDropDown, Dialog, DialogUnderlay, BackgroundIframe, Viewport, place, popup, registry, BorderContainer, _ComboBoxMenuMixin, _TextBoxMixin, Select, Standby, Header, Body, Row, Grid, Cache, SloshBucket, _DateTimeTextBox) {

	/**
	 * Return a Promise based on given Deferred or Promise, with back-compat addCallback() and addErrback() shims
	 */
	function shimmedPromise(/*Deferred|Promise*/d) {
		return lang.delegate(d.promise || d, {
			addCallback: function(callback) {
				this.then(callback);
			},
			addErrback: function(errback) {
				this.otherwise(errback);
			}
		});
	}

	if (has("host-browser")) {
		if (has("ios") || has("android") || has("bb") || navigator.userAgent.indexOf("Windows Phone") > 0) {
			has.add("ecmMobile", true);
			has.add("ecmMobileView", window.location.search.toLowerCase().indexOf("fullsite=true") == -1);
			require([
				"dojox/mobile/common"
			]);
		}
		if (navigator.userAgent.match(/(iPad|Nexus 7|Nexus 9|Nexus 10)/))
			has.add("ecmTablet", true);
	}

	/**
	 * Newer versions of IE8 on Windows Vista and Windows 7 return a special instance of empty string "" for the HTML
	 * control "value" property if the value was never modified. The built-in JScript JSON.stringify() method
	 * incorrectly replaces that special instance with the string "null". To avoid this behavior, replace all "" passed
	 * to JSON.stringify with a different instance of "".
	 */
	if (has("ie") == 8) {
		var origStringify = JSON.stringify;
		JSON.stringify = function(obj, replacer, space) {
			return origStringify(obj, function(k, v) {
				if (replacer) {
					v = replacer(k, v);
				}
				return v === "" ? "" : v;
			}, space);
		};
	}

	/**
	 * Hides the dialog.
	 */
	Dialog.prototype.hide = function() {
		// summary:
		//		Hide the dialog
		// returns: dojo/promise/Promise
		//		Promise object that resolves when the display animation is complete

		// If we haven't been initialized yet then we aren't showing and we can just return.
		// Likewise if we are already hidden, or are currently fading out.
		if (!this._alreadyInitialized || !this.open) {
			if (!this._resolvedDeferred) {
				this._resolvedDeferred = new Deferred();
				this._resolvedDeferred.resolve(true);
			}
			return this._resolvedDeferred.promise;
		}
		if (this._fadeInDeferred) {
			this._fadeInDeferred.cancel();
		}

		// fade-in Animation object, setup below
		var fadeOut;

		this._fadeOutDeferred = new Deferred(lang.hitch(this, function() {
			fadeOut.stop();
			delete this._fadeOutDeferred;
		}));
		// fire onHide when the promise resolves.
		this._fadeOutDeferred.then(lang.hitch(this, 'onHide'));

		// If delay is 0, code below will delete this._fadeOutDeferred instantly, so grab promise while we can.
		var promise = this._fadeOutDeferred.promise;

		fadeOut = baseFx.fadeOut({
			node: this.domNode || { style: {} },
			duration: this.duration,
			onEnd: lang.hitch(this, function() {
				if (this.domNode) {
					this.domNode.style.display = "none";
				}
				Dialog._DialogLevelManager.hide(this);
				if (this._fadeOutDeferred) {
					this._fadeOutDeferred.resolve(true);
					delete this._fadeOutDeferred;
				}
			})
		}).play();

		if (this._scrollConnected) {
			this._scrollConnected = false;
		}
		var h;
		while (h = this._modalconnects.pop()) {
			h.remove();
		}

		if (this._relativePosition) {
			delete this._relativePosition;
		}
		this._set("open", false);

		return promise;
	};

	/**
	 * Hides the dialog underlay.
	 */
	DialogUnderlay.prototype.hide = function() {
		if (this.bgIframe) {
			this.bgIframe.destroy();
			delete this.bgIframe;
		}
		this.domNode.style.display = "none";
		while (this._modalConnects.length) {
			(this._modalConnects.pop()).remove();
		}
		this.open = false;
	};

	/**
	 * Returns the widget responsible for rendering the splitter associated with region
	 */
	BorderContainer.prototype.getSplitter = function(region) {
		var ltr = this.isLeftToRight();
		var region2 = "";
		if (region == "right") {
			region2 = (ltr) ? "trailing" : "leading";
		} else if (region == "left") {
			region2 = (ltr) ? "leading" : "trailing";
		}
		var x = array.filter(this.getChildren(), function(child) {
			return (child.region == region || child.region == region2);
		});
		if (x && x.length > 0) {
			return x[0]._splitterWidget;
		} else {
			return null;
		}
	};

	// Fix IE bug - when click on tree expander/collapser icon on a long tree node row containing a horizontal scrollbar, evt.target is the dijitTreeRow node.
	if (has("ie") || has("trident")) {
		aspect.around(Tree.prototype, "__click", function(originalOnClick) {
			return function(nodeWidget, evt) {
				var isExpandoClick = this.isExpandoNode(evt.target, nodeWidget);
				if (nodeWidget.isExpandable && !isExpandoClick && evt && evt.target && evt.target.className && evt.target.className.indexOf("dijitTreeRow") > -1) {
					arguments[2] = true; // doOpen = true
				}
				originalOnClick.apply(this, arguments);
			};
		});
	}

	/**
	 * Singular variant of _setPathsAttr
	 */
	Tree.prototype._setPathAttr = function(/*Item[]|String[]*/path) {
		if (path.length) {
			return shimmedPromise(this.set("paths", [
				path
			]).then(function(paths) {
				if (paths && paths.length) {
					return paths[0];
				} else {
					return null;
				}
			}));
		} else {
			// Empty list is interpreted as "select nothing"
			return shimmedPromise(this.set("paths", []).then(function(paths) {
				if (paths && paths.length) {
					return paths[0];
				} else {
					return null;
				}
			}));
		}
	};

	/**
	 * http://bugs.dojotoolkit.org/ticket/11822
	 * <p>
	 * Also enable the background IFrame for Chrome, to keep popups in front of the viewer applet.
	 * <p>
	 * Updated for Dojo 1.9.
	 */
	// This overrides the open method in the PopupManager singleton.
	dijit.popup.open = function(/*__OpenArgs*/args) {
		// summary:
		//		Popup the widget at the specified position
		//
		// example:
		//		opening at the mouse position
		//		|		popup.open({popup: menuWidget, x: evt.pageX, y: evt.pageY});
		//
		// example:
		//		opening the widget as a dropdown
		//		|		popup.open({parent: this, popup: menuWidget, around: this.domNode, onClose: function(){...}});
		//
		//		Note that whatever widget called dijit/popup.open() should also listen to its own _onBlur callback
		//		(fired from _base/focus.js) to know that focus has moved somewhere else and thus the popup should be closed.

		var stack = this._stack, widget = args.popup, node = widget.domNode, orient = args.orient || [
			"below",
			"below-alt",
			"above",
			"above-alt"
		], ltr = args.parent ? args.parent.isLeftToRight() : domGeometry.isBodyLtr(widget.ownerDocument), around = args.around, id = (args.around && args.around.id) ? (args.around.id + "_dropdown") : ("popup_" + this._idGen++);

		// If we are opening a new popup that isn't a child of a currently opened popup, then
		// close currently opened popup(s).   This should happen automatically when the old popups
		// gets the _onBlur() event, except that the _onBlur() event isn't reliable on IE, see [22198].
		while (stack.length && (!args.parent || !dom.isDescendant(args.parent.domNode, stack[stack.length - 1].widget.domNode))) {
			this.close(stack[stack.length - 1].widget);
		}

		// Get pointer to popup wrapper, and create wrapper if it doesn't exist.  Remove display:none (but keep
		// off screen) so we can do sizing calculations.
		var wrapper = this.moveOffScreen(widget);

		if (widget.startup && !widget._started) {
			widget.startup(); // this has to be done after being added to the DOM
		}

		// Limit height to space available in viewport either above or below aroundNode (whichever side has more
		// room), adding scrollbar if necessary. Can't add scrollbar to widget because it may be a <table> (ex:
		// dijit/Menu), so add to wrapper, and then move popup's border to wrapper so scroll bar inside border.
		var maxHeight, popupSize = domGeometry.position(node);
		if ("maxHeight" in args && args.maxHeight != -1) {
			maxHeight = args.maxHeight || Infinity; // map 0 --> infinity for back-compat of _HasDropDown.maxHeight
		} else {
			var viewport = Viewport.getEffectiveBox(this.ownerDocument), aroundPos = around ? domGeometry.position(around, false) : {
				y: args.y - (args.padding || 0),
				h: (args.padding || 0) * 2
			};
			maxHeight = Math.floor(Math.max(aroundPos.y, viewport.h - (aroundPos.y + aroundPos.h)));
		}
		if (popupSize.h > maxHeight) {
			// Get style of popup's border.  Unfortunately domStyle.get(node, "border") doesn't work on FF or IE,
			// and domStyle.get(node, "borderColor") etc. doesn't work on FF, so need to use fully qualified names.
			var cs = domStyle.getComputedStyle(node), borderStyle = cs.borderLeftWidth + " " + cs.borderLeftStyle + " " + cs.borderLeftColor;
			domStyle.set(wrapper, {
				overflowY: "scroll",
				height: maxHeight + "px",
				border: borderStyle
			// so scrollbar is inside border
			});
			node._originalStyle = node.style.cssText;
			node.style.border = "none";
		}

		domAttr.set(wrapper, {
			id: id,
			style: {
				zIndex: this._beginZIndex + stack.length
			},
			"class": "dijitPopup " + (widget.baseClass || widget["class"] || "").split(" ")[0] + "Popup",
			dijitPopupParent: args.parent ? args.parent.id : ""
		});

		if (stack.length == 0 && around) {
			// First element on stack. Save position of aroundNode and setup listener for changes to that position.
			this._firstAroundNode = around;
			this._firstAroundPosition = domGeometry.position(around, true);
			this._aroundMoveListener = setTimeout(lang.hitch(this, "_repositionAll"), 50);
		}

		if (has("config-bgIframe") && !widget.bgIframe) {
			// setting widget.bgIframe triggers cleanup in _WidgetBase.destroyRendering()
			widget.bgIframe = new BackgroundIframe(wrapper);

			// Applet IFRAME fix: Create background iframes for IE and Chrome.
			if (!widget.bgIframe._subBgIframes && widget.bgIframe._createSubBgIframes && typeof widget.bgIframe._createSubBgIframes == "function" ) {
				widget.bgIframe._createSubBgIframes(widget);
			}
		}

		// position the wrapper node and make it visible
		var layoutFunc = widget.orient ? lang.hitch(widget, "orient") : null, best = around ? place.around(wrapper, around, orient, ltr, layoutFunc) : place.at(wrapper, args, orient == 'R' ? [
			'TR',
			'BR',
			'TL',
			'BL'
		] : [
			'TL',
			'BL',
			'TR',
			'BR'
		], args.padding, layoutFunc);

		// Applet IFRAME fix: Create background iframes for IE and Chrome.
		if (has("config-bgIframe") && widget.bgIframe && widget.bgIframe._subBgIframes) {
			widget.bgIframe._showSubBgIframes(widget.domNode);
		}

		wrapper.style.visibility = "visible";
		node.style.visibility = "visible"; // counteract effects from _HasDropDown

		var handlers = [];

		// provide default escape and tab key handling
		// (this will work for any widget, not just menu)
		handlers.push(on(wrapper, "keydown", lang.hitch(this, function(evt) {
			if (evt.keyCode == keys.ESCAPE && args.onCancel) {
				evt.stopPropagation();
				evt.preventDefault();
				args.onCancel();
			} else if (evt.keyCode == keys.TAB) {
				evt.stopPropagation();
				evt.preventDefault();
				var topPopup = this.getTopPopup();
				if (topPopup && topPopup.onCancel) {
					topPopup.onCancel();
				}
			}
		})));

		// watch for cancel/execute events on the popup and notify the caller
		// (for a menu, "execute" means clicking an item)
		if (widget.onCancel && args.onCancel) {
			handlers.push(widget.on("cancel", args.onCancel));
		}

		handlers.push(widget.on(widget.onExecute ? "execute" : "change", lang.hitch(this, function() {
			var topPopup = this.getTopPopup();
			if (topPopup && topPopup.onExecute) {
				topPopup.onExecute();
			}
		})));

		stack.push({
			widget: widget,
			wrapper: wrapper,
			parent: args.parent,
			onExecute: args.onExecute,
			onCancel: args.onCancel,
			onClose: args.onClose,
			handlers: handlers
		});

		if (widget.onOpen) {
			// TODO: in 2.0 standardize onShow() (used by StackContainer) and onOpen() (used here)
			widget.onOpen(best);
		}

		return best;
	};

	_ComboBoxMenuMixin.prototype.clearResultList = function() {
		// summary:
		//		Clears the entries in the drop down list, but of course keeps the previous and next buttons.
		var container = this.containerNode;

		// This is the original code, which removes children from within the list (1 position back from the end).
		//
		// while(container.childNodes.length > 2){
		//	container.removeChild(container.childNodes[container.childNodes.length - 2]);
		// }

		// Save off the prev and next buttons before removing the children.
		var prevButton = container.removeChild(container.firstChild);
		var nextButton = container.removeChild(container.lastChild);
		// Removing children from the front of the list performed best across IE, Firefox, and Chrome:
		//     http://jsperf.com/innerhtml-vs-removechild/220
		while (container.firstChild) {
			container.removeChild(container.firstChild);
		}
		// Put back the prev and next buttons.
		container.appendChild(prevButton);
		container.appendChild(nextButton);

		this._setSelectedAttr(null);
	};

	/**
	 * Work around a Dojo defect where tabIndex=-1 wasn't being set. This caused accessibility violations in RPT.
	 */
	Select.prototype._setDisplay = function(/*String*/newDisplay) {
		// summary:
		//		sets the display for the given value (or values)

		var lbl = (this.labelType === 'text' ? (newDisplay || '').replace(/&/g, '&amp;').replace(/</g, '&lt;') : newDisplay) || this.emptyLabel;
		this.containerNode.innerHTML = '<span role="option" tabIndex="-1" aria-selected="true" class="dijitReset dijitInline ' + this.baseClass.replace(/\s+|$/g, "Label ") + '">' + lbl + '</span>';
	};

	/**
	 * Fix issue with dojo/date/locale not accepting 5 digit years as valid.
	 */
	var _buildDateTimeRE_Allow5DigitYear = function(tokens, bundle, options, pattern) {
		pattern = regexp.escapeString(pattern);
		if (!options.strict) {
			pattern = pattern.replace(" a", " ?a");
		} // kludge to tolerate no space before am/pm
		return pattern.replace(/([a-z])\1*/ig, function(match) {
			// Build a simple regexp.  Avoid captures, which would ruin the tokens list
			var s, c = match.charAt(0), l = match.length, p2 = '', p3 = '';
			if (options.strict) {
				if (l > 1) {
					p2 = '0' + '{' + (l - 1) + '}';
				}
				if (l > 2) {
					p3 = '0' + '{' + (l - 2) + '}';
				}
			} else {
				p2 = '0?';
				p3 = '0{0,2}';
			}
			switch (c) {
			case 'y':
				s = '10000|\\d{2,4}'; // Support matching the 5 digit overflow year 10000. for local time zones ahead of the limit year GMT 9999. 
				break;
			case 'M':
			case 'L':
				s = (l > 2) ? '\\S+?' : '1[0-2]|' + p2 + '[1-9]';
				break;
			case 'D':
				s = '[12][0-9][0-9]|3[0-5][0-9]|36[0-6]|' + p2 + '[1-9][0-9]|' + p3 + '[1-9]';
				break;
			case 'd':
				s = '3[01]|[12]\\d|' + p2 + '[1-9]';
				break;
			case 'w':
				s = '[1-4][0-9]|5[0-3]|' + p2 + '[1-9]';
				break;
			case 'E':
			case 'e':
			case 'c':
				s = '.+?'; // match anything including spaces until the first pattern delimiter is found such as a comma or space
				break;
			case 'h': //hour (1-12)
				s = '1[0-2]|' + p2 + '[1-9]';
				break;
			case 'k': //hour (0-11)
				s = '1[01]|' + p2 + '\\d';
				break;
			case 'H': //hour (0-23)
				s = '1\\d|2[0-3]|' + p2 + '\\d';
				break;
			case 'K': //hour (1-24)
				s = '1\\d|2[0-4]|' + p2 + '[1-9]';
				break;
			case 'm':
			case 's':
				s = '[0-5]\\d';
				break;
			case 'S':
				s = '\\d{' + l + '}';
				break;
			case 'a':
				var am = options.am || bundle['dayPeriods-format-wide-am'], pm = options.pm || bundle['dayPeriods-format-wide-pm'];
				s = am + '|' + pm;
				if (!options.strict) {
					if (am != am.toLowerCase()) {
						s += '|' + am.toLowerCase();
					}
					if (pm != pm.toLowerCase()) {
						s += '|' + pm.toLowerCase();
					}
					if (s.indexOf('.') != -1) {
						s += '|' + s.replace(/\./g, "");
					}
				}
				s = s.replace(/\./g, "\\.");
				break;
			default:
				// case 'v':
				// case 'z':
				// case 'Z':
				s = ".*";
//					console.log("parse of date format, pattern=" + pattern);
			}

			if (tokens) {
				tokens.push(match);
			}

			return "(" + s + ")"; // add capture
		}).replace(/[\xa0 ]/g, "[\\s\\xa0]"); // normalize whitespace.  Need explicit handling of \xa0 for IE.
	};
	var _processPattern_Allow5DigitYear = function(pattern, applyPattern, applyLiteral, applyAll) {
		//summary: Process a pattern with literals in it

		// Break up on single quotes, treat every other one as a literal, except '' which becomes '
		var identity = function(x) {
			return x;
		};
		applyPattern = applyPattern || identity;
		applyLiteral = applyLiteral || identity;
		applyAll = applyAll || identity;

		//split on single quotes (which escape literals in date format strings)
		//but preserve escaped single quotes (e.g., o''clock)
		var chunks = pattern.match(/(''|[^'])+/g), literal = pattern.charAt(0) == "'";

		array.forEach(chunks, function(chunk, i) {
			if (!chunk) {
				chunks[i] = '';
			} else {
				chunks[i] = (literal ? applyLiteral : applyPattern)(chunk.replace(/''/g, "'"));
				literal = !literal;
			}
		});
		return applyAll(chunks.join(''));
	};
	dateLocale._parseInfo = function(/*__FormatOptions?*/options) {
		options = options || {};
		var locale = i18n.normalizeLocale(options.locale), bundle = dateLocale._getGregorianBundle(locale), formatLength = options.formatLength || 'short', datePattern = options.datePattern || bundle["dateFormat-" + formatLength], timePattern = options.timePattern || bundle["timeFormat-" + formatLength], pattern;
		if (options.selector == 'date') {
			pattern = datePattern;
		} else if (options.selector == 'time') {
			pattern = timePattern;
		} else {
			pattern = bundle["dateTimeFormat-" + formatLength].replace(/\{(\d+)\}/g, function(match, key) {
				return [
					timePattern,
					datePattern
				][key];
			});
		}

		var tokens = [], re = _processPattern_Allow5DigitYear(pattern, lang.hitch(this, _buildDateTimeRE_Allow5DigitYear, tokens, bundle, options));
		return {
			regexp: re,
			tokens: tokens,
			bundle: bundle
		};
	};

	/**
	 * Added the following 3 methods to fix 1 line Hebrew bug. In _buildDateTimeRE, changed the regular expression for
	 * month to include 13 (due to leap years having 13 months).
	 */
	function _processPattern(pattern, applyPattern, applyLiteral, applyAll) {
		// summary:
		//		Process a pattern with literals in it

		// Break up on single quotes, treat every other one as a literal, except '' which becomes '
		var identity = function(x) {
			return x;
		};
		applyPattern = applyPattern || identity;
		applyLiteral = applyLiteral || identity;
		applyAll = applyAll || identity;

		//split on single quotes (which escape literals in date format strings)
		//but preserve escaped single quotes (e.g., o''clock)
		var chunks = pattern.match(/(''|[^'])+/g);
		var literal = pattern.charAt(0) == "'";

		array.forEach(chunks, function(chunk, i) {
			if (!chunk) {
				chunks[i] = '';
			} else {
				chunks[i] = (literal ? applyLiteral : applyPattern)(chunk);
				literal = !literal;
			}
		});
		return applyAll(chunks.join(''));
	}
	function _buildDateTimeRE(tokens, bundle, options, pattern) {
		// based on and similar to dojo.date.locale._buildDateTimeRE
		pattern = regexp.escapeString(pattern);
		var locale = i18n.normalizeLocale(options.locale);

		return pattern.replace(/([a-z])\1*/ig, function(match) {

			// Build a simple regexp.  Avoid captures, which would ruin the tokens list
			var s;
			var c = match.charAt(0);
			var l = match.length;
			var p2 = '', p3 = '';
			if (options.strict) {
				if (l > 1) {
					p2 = '0' + '{' + (l - 1) + '}';
				}
				if (l > 2) {
					p3 = '0' + '{' + (l - 2) + '}';
				}
			} else {
				p2 = '0?';
				p3 = '0{0,2}';
			}
			switch (c) {
			case 'y':
				s = '\\S+';
				break;
			case 'M':
				if (locale.match('^he(?:-.+)?$')) {
					s = (l > 2) ? '\\S+ ?\\S+' : '\\S{1,4}';
				} else {
					s = (l > 2) ? '\\S+ ?\\S+' : p2 + '[1-9]|1[0-3]'; // Fix dojo bug where Hebrew allows for 13 months in leap years.  Dojo was only allowing for 12 months in a year.
				}
				break;
			case 'd':
				if (locale.match('^he(?:-.+)?$')) {
					s = '\\S[\'\"\'\u05F3]{1,2}\\S?';
				} else {
					s = '[12]\\d|' + p2 + '[1-9]|30';
				}
				break;
			case 'E':
				if (locale.match('^he(?:-.+)?$')) {
					s = (l > 3) ? '\\S+ ?\\S+' : '\\S';
				} else {
					s = '\\S+';
				}
				break;
			case 'h': //hour (1-12)
				s = p2 + '[1-9]|1[0-2]';
				break;
			case 'k': //hour (0-11)
				s = p2 + '\\d|1[01]';
				break;
			case 'H': //hour (0-23)
				s = p2 + '\\d|1\\d|2[0-3]';
				break;
			case 'K': //hour (1-24)
				s = p2 + '[1-9]|1\\d|2[0-4]';
				break;
			case 'm':
			case 's':
				s = p2 + '\\d|[0-5]\\d';
				break;
			case 'S':
				s = '\\d{' + l + '}';
				break;
			case 'a':
				var am = options.am || bundle['dayPeriods-format-wide-am'], pm = options.pm || bundle['dayPeriods-format-wide-pm'];
				if (options.strict) {
					s = am + '|' + pm;
				} else {
					s = am + '|' + pm;
					if (am != am.toLowerCase()) {
						s += '|' + am.toLowerCase();
					}
					if (pm != pm.toLowerCase()) {
						s += '|' + pm.toLowerCase();
					}
				}
				break;
			default:
				s = ".*";
			}
			if (tokens) {
				tokens.push(match);
			}
			return "(" + s + ")"; // add capture
		}).replace(/[\xa0 ]/g, "[\\s\\xa0]"); // normalize whitespace.  Need explicit handling of \xa0 for IE. */
	}
	hebrewLocale._parseInfo = function(/*oblect?*/options) {
		options = options || {};
		var locale = i18n.normalizeLocale(options.locale);
		var hlocale = lang.getObject("date.hebrew.locale", true, dojox);
		var bundle = hlocale._getHebrewBundle(locale);

		var formatLength = options.formatLength || 'short';
		var datePattern = options.datePattern || bundle["dateFormat-" + formatLength];
		var timePattern = options.timePattern || bundle["timeFormat-" + formatLength];

		var pattern;
		if (options.selector == 'date') {
			pattern = datePattern;
		} else if (options.selector == 'time') {
			pattern = timePattern;
		} else {
			pattern = (timePattern === undefined) ? datePattern : datePattern + ' ' + timePattern; //hebrew resource file does not contain time patterns - a bug?
		}

		var tokens = [];

		var re = _processPattern(pattern, lang.hitch(this, _buildDateTimeRE, tokens, bundle, options));
		return {
			regexp: re,
			tokens: tokens,
			bundle: bundle
		};
	};

	/**
	 * Override the _build method defined in gridx/modules/Header to support adding an aria-label to a column header.
	 */
	Header.prototype._build = function() {
		var t = this, g = t.grid, f = g.focus, sb = [
			'<table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr>'
		];
		array.forEach(g._columns, function(col) {
			col._domId = (g.id + '-' + col.id).replace(/\s+/, '');
			sb.push('<td id="', col._domId, //
			'" role="columnheader" aria-readonly="true" tabindex="-1" colid="', col.id, //
			'" class="gridxCell ', //
			f && f.currentArea() == 'header' && col.id == t._focusHeaderId ? t._focusClass : '', //
			(lang.isFunction(col.headerClass) ? col.headerClass(col) : col.headerClass) || '', //
			'" style="width:', col.width, ';min-width:', col.width, ';', //
			g.getTextDirStyle(col.id, col.name), //
			(lang.isFunction(col.headerStyle) ? col.headerStyle(col) : col.headerStyle) || '', //
			/* ICN custom: */col.headerAriaLabel ? ('" aria-label="' + col.headerAriaLabel) : '', '"><div class="gridxSortNode">', //
			(lang.isFunction(col.headerFormatter) ? col.headerFormatter(col) : col.name) || '', //
			'</div></td>'); //
		});
		sb.push('</tr></table>');
		t.innerNode.innerHTML = sb.join('');
		domClass.toggle(t.domNode, 'gridxHeaderRowHidden', t.arg('hidden'));
	};
	
	_TextBoxMixin.prototype._setValueAttr = function(value, /*Boolean?*/ priorityChange, /*String?*/ formattedValue){
		// summary:
		//		Hook so set('value', ...) works.
		//
		// description:
		//		Sets the value of the widget to "value" which can be of
		//		any type as determined by the widget.
		//
		// value:
		//		The visual element value is also set to a corresponding,
		//		but not necessarily the same, value.
		//
		// formattedValue:
		//		If specified, used to set the visual element value,
		//		otherwise a computed visual value is used.
		//
		// priorityChange:
		//		If true, an onChange event is fired immediately instead of
		//		waiting for the next blur event.

		var filteredValue;
		if(value !== undefined){
			// TODO: this is calling filter() on both the display value and the actual value.
			// I added a comment to the filter() definition about this, but it should be changed.
			filteredValue = this.filter(value);
			if(typeof formattedValue != "string"){
				if(filteredValue !== null && ((typeof filteredValue != "number") || !isNaN(filteredValue))){
					formattedValue = this.filter(this.format(filteredValue, this.constraints));
				}else{
					formattedValue = '';
				}
					
				// Ensure the filtered value does not change after being formatted. See track #17955.
				//
				// This check is only applied when the formatted value is not specified by the caller in order to allow the 
				// behavior to be overriden. This is needed whenever value synonyms cannot be determined using parse/compare. For
				// example, dijit/form/FilteringSelect determines the formatted value asynchronously and applies it using a 
				// callback to this method.
				//
				// TODO: Should developers be warned that they broke the round trip on format?
				
				// Override ->
				// Comparing date values in this way is problematic. The format may discard some information, like
				// leaving off seconds, causing the compare to fail because the valueFromFormattedValue will not be
				// the same as the original value. Skip this check for date values.
				var valueFromFormattedValue = this.filter(this.parse(formattedValue, this.constraints));
				if (!(filteredValue instanceof Date) && !(valueFromFormattedValue instanceof Date)) {
					if (this.compare(filteredValue, valueFromFormattedValue) != 0){
						formattedValue = null;
					}
				}
				// <-- Override				
			}
		}
		if(formattedValue != null /* and !undefined */ && ((typeof formattedValue) != "number" || !isNaN(formattedValue)) && this.textbox.value != formattedValue){
			this.textbox.value = formattedValue;
			this._set("displayedValue", this.get("displayedValue"));
		}

		this.inherited("_setValueAttr", arguments, [filteredValue, priorityChange, formattedValue]); // <-- Override (have to provide the method name)
	};
	
	_DateTimeTextBox.prototype.startup = function() {
		this.inherited("startup", arguments);
        var PopupProto = lang.isString(this.popupClass) ? lang.getObject(this.popupClass, false) : this.popupClass;
        lang.extend(PopupProto, {
            postMixInProperties:function(){
                this.inherited("postMixInProperties", arguments);
                this.dateClassObj = function () {
	                var arg = arguments[0];
	                var date = arg != null ? new Date(arg) : new Date();
	                if ((isNaN(date.getTime()) || date == "Invalid Date") && arg instanceof Date){
	                    date = new Date();
	                    date.setFullYear(arg.getFullYear());
	                    date.setMonth(arg.getMonth());
	                    date.setDate(arg.getDate());
	                    date.setTime(arg.getTime());
	                }
	                return date;
                }
            }
        });
	};
	
	/**
	 * Sets the store, layout, and fixed values for the selected (right) grid. Call
	 * <code>setAvailableGridData</code> method before calling <code>setSelectedGridData</code> method.
	 * 
	 * @param store
	 *            The selected values store.
	 * @param layout
	 *            The selected values structure.
	 * @param fixedValues
	 *            Array of values that cannot be removed from the selected values grid. (Optional)
	 */
	SloshBucket.prototype.setSelectedGridData = function(store, layout, fixedValues) {
		if (this.selectedGrid) {
			this.selectedGrid.destroy();
		}
		this._fixedSelectedValues = fixedValues;

		if (this.selectedLabel.length == 0) {
			domClass.add(this._selectedLabel, "dijitHidden");
		} else {
			domClass.remove(this._selectedLabel, "dijitHidden");
		}
		if (!this.canReorderSelectedGridData) {
			domClass.add(this._valuesGridContentPane, "dijitSloshBucketHideSortButtons");
			domClass.add(this._moveUpDownButtonContainer, "dijitHidden");
		}

		var selectedValuesMap = (this.canReorderSelectedGridData || this.hideAvailableOnAdd) ? this._preprocessSelectedStore(store, fixedValues) : {};
		this.selectedGrid = new Grid({
			store: store,
			structure: this._hitchEscapeHtmlDecorators(layout),
			cacheClass: Cache,
			selectRowTriggerOnCell: true,
			modules: this._getSelectedGridModules(),
			columnWidthAutoResize: true
		});
		domConstruct.place(this.selectedGrid.domNode, this._valuesGridContainer, "only");
		this.selectedGrid.startup();

		this._setSelectedGridConnections();
		
		//#13677 add selectGridData into availableGridData if not exsit in availableGridData
		var availableStore = this.availableGrid.model.store;
		for (var i in store.data){
			var row = store.data[i];
			// Override -->
			// Restore the behavior prior to the IDX upgrade included in ICN 2.0.3 FP7.
			// ICN's entry template property layout supports storing the same value multiple times in the selected list,
			// so the basis for uniqueId in the selected list is different from the basis in the available list.
			// if(row && !availableStore.get(store.getIdentity(row))){
			if(row && !availableStore.get(row.id)){ // <-- Override
				availableStore.add(row);
			}
		}

		if (this.hideAvailableOnAdd) {
			this._hideAvailableGridItems(selectedValuesMap);
		} else {
			this.availableGrid.select.row.clear();
		}
		// Disable the buttons 
		this._addButton.set("disabled", true);
		this._removeButton.set("disabled", true);
		if (this.canReorderSelectedGridData) {
			this._upButton.set("disabled", true);
			this._downButton.set("disabled", true);
		}
		if (this._started) {
			this.resize();
		}
	};

	Body.prototype._moveFocus= function(rowStep, colStep, evt){
		if(rowStep || colStep){
			var r, c,
				t = this,
				g = t.grid,
				columnCount = g._columns.length,
				vc = g.view.visualCount,
				//IE8 will destroy this event object after setTimeout
				e = has('ie') < 9 ? lang.mixin({}, evt) : evt;
			g.focus.stopEvent(evt); //Prevent scrolling the whole page.
			if(typeof(t._focusCellRow) == "number")
				r = t._focusCellRow + rowStep;
			else
				r = t.model.idToIndex(t._focusCellRow) + rowStep;
			r = r < 0 ? 0 : (r >= vc ? vc - 1 : r);
			c = t._focusCellCol + colStep;
			c = c < 0 ? 0 : (c >= columnCount ? columnCount - 1 : c);
			if((!evt.shiftKey || (g.contentList && !g.contentList.multiSelect) ) && g.select){
				var id = g.select.row._lastSelectedIds;
					if(id && id.length != 0)
						for(var idInstance = 0; idInstance < id.length; idInstance++)
							g.select.row.deselectById(id[idInstance]);
				g.select.row.selectById(t.model.indexToId(r));

			}
			g.vScroller.scrollToRow(r).then(function(){
				t._focusCell(0, r, c);
				t.onMoveToCell(r, c, e);
			});
		}
	};
	
	Row.prototype._onMoveToCell= function(rowVisIndex, colIndex, e){
		var t = this;
		if(t.arg('triggerOnCell') && e.shiftKey && (e.keyCode == keys.UP_ARROW || e.keyCode == keys.DOWN_ARROW)){
			t._start({row: rowVisIndex}, t.grid._isCtrlKey(e), 1);	//1 as true
			t._end();
		}
		else if(t.arg('triggerOnCell') && (e.keyCode == keys.UP_ARROW || e.keyCode == keys.DOWN_ARROW)){
			t._start({row: rowVisIndex}, t.grid._isCtrlKey(e), 0);	//1 as true
			t._end();
		}
	};
	/**
	 * Work around a problem in IDX 1.5.2.13 - ICN Defect 77730.
	 * In some cases in magazine view, selecting the last element in a list when scroll bars are present causes the list to move up and 
	 * select items between the last item in the list and an item near the top of the list. 
	 * This happens intermittently and most often in FireFox.
	 * 
	 * IDX defect 14454 has been entered to address this issue. This code should be removed when that defect is fixed.
	 * 
	 * According to comments on IDX defect 14454, this problem should be fixed in gridx 1.3 in IDX 1.5.3.5. This function
	 * should be removed when we move to that version.
	 */
	Body.prototype._focusCell = function(evt, rowVisIdx, colIdx) {
		var t = this, g = t.grid;
		g.focus.stopEvent(evt);
		colIdx = colIdx >= 0 ? colIdx : t._focusCellCol;

		// Override -->
		// This next line causes the problem and replaced the next line in IDX 1.5.2.13
//		rowVisIdx = rowVisIdx >= 0 ? rowVisIdx : t.model.idToIndex(t._focusCellRow);
		rowVisIdx = rowVisIdx >= 0 ? rowVisIdx : t._focusCellRow;
		// <-- Override
		var colId = g._columns[colIdx] ? g._columns[colIdx].id : undefined, n = t.getCellNode({
			visualIndex: rowVisIdx,
			colId: colId
		}) || t.getCellNode({
			visualIndex: 0,
			colId: colId
		});
		if (n) {
			t._blurCell();
			domClass.add(n, 'gridxCellFocus');
			t._focusCellRow = t.model.indexToId(rowVisIdx);
			t._focusCellCol = colIdx;
			g.header._focusHeaderId = colId;

			if (has('ie') < 8) {
				//In IE7 focus cell node will scroll grid to the left most.
				//So save the scrollLeft first and then set it back.
				//FIXME: this still makes the grid body shake, any better solution?
				var scrollLeft = g.bodyNode.scrollLeft;
				n.focus();
				g.bodyNode.scrollLeft = scrollLeft;
			} else {
				n.focus();
			}
			g.hScroller.scrollToColumn(colId, n.parentNode.parentNode.parentNode.parentNode);//this is for columnlock hack
		} else if (!g.rowCount()) {
			g.emptyNode.focus();
			return true;
		}
		return n;
	};
});
