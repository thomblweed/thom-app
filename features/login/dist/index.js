/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.all(/*! import() */[__webpack_require__.e("webpack_sharing_consume_default_react_react"), __webpack_require__.e("webpack_sharing_consume_default_shared"), __webpack_require__.e("src_Login_tsx"), __webpack_require__.e("src_bootstrap_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./bootstrap */ "./src/bootstrap.tsx"));


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "login:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/sharing */
/******/ 	(() => {
/******/ 		__webpack_require__.S = {};
/******/ 		var initPromises = {};
/******/ 		var initTokens = {};
/******/ 		__webpack_require__.I = (name, initScope) => {
/******/ 			if(!initScope) initScope = [];
/******/ 			// handling circular init calls
/******/ 			var initToken = initTokens[name];
/******/ 			if(!initToken) initToken = initTokens[name] = {};
/******/ 			if(initScope.indexOf(initToken) >= 0) return;
/******/ 			initScope.push(initToken);
/******/ 			// only runs once
/******/ 			if(initPromises[name]) return initPromises[name];
/******/ 			// creates a new share scope if needed
/******/ 			if(!__webpack_require__.o(__webpack_require__.S, name)) __webpack_require__.S[name] = {};
/******/ 			// runs all init snippets from all modules reachable
/******/ 			var scope = __webpack_require__.S[name];
/******/ 			var warn = (msg) => (typeof console !== "undefined" && console.warn && console.warn(msg));
/******/ 			var uniqueName = "login";
/******/ 			var register = (name, version, factory, eager) => {
/******/ 				var versions = scope[name] = scope[name] || {};
/******/ 				var activeVersion = versions[version];
/******/ 				if(!activeVersion || (!activeVersion.loaded && (!eager != !activeVersion.eager ? eager : uniqueName > activeVersion.from))) versions[version] = { get: factory, from: uniqueName, eager: !!eager };
/******/ 			};
/******/ 			var initExternal = (id) => {
/******/ 				var handleError = (err) => (warn("Initialization of sharing external failed: " + err));
/******/ 				try {
/******/ 					var module = __webpack_require__(id);
/******/ 					if(!module) return;
/******/ 					var initFn = (module) => (module && module.init && module.init(__webpack_require__.S[name], initScope))
/******/ 					if(module.then) return promises.push(module.then(initFn, handleError));
/******/ 					var initResult = initFn(module);
/******/ 					if(initResult && initResult.then) return promises.push(initResult['catch'](handleError));
/******/ 				} catch(err) { handleError(err); }
/******/ 			}
/******/ 			var promises = [];
/******/ 			switch(name) {
/******/ 				case "default": {
/******/ 					register("axios", "0.26.0", () => (__webpack_require__.e("vendors-node_modules_axios_index_js").then(() => (() => (__webpack_require__(/*! ./node_modules/axios/index.js */ "./node_modules/axios/index.js"))))));
/******/ 					register("react-dom", "17.0.2", () => (Promise.all([__webpack_require__.e("vendors-node_modules_react-dom_index_js"), __webpack_require__.e("webpack_sharing_consume_default_react_react")]).then(() => (() => (__webpack_require__(/*! ./node_modules/react-dom/index.js */ "./node_modules/react-dom/index.js"))))));
/******/ 					register("react-hook-form", "7.27.1", () => (Promise.all([__webpack_require__.e("vendors-node_modules_react-hook-form_dist_index_esm_mjs"), __webpack_require__.e("webpack_sharing_consume_default_react_react")]).then(() => (() => (__webpack_require__(/*! ./node_modules/react-hook-form/dist/index.esm.mjs */ "./node_modules/react-hook-form/dist/index.esm.mjs"))))));
/******/ 					register("react-router-dom", "6.2.2", () => (Promise.all([__webpack_require__.e("vendors-node_modules_react-router-dom_index_js"), __webpack_require__.e("webpack_sharing_consume_default_react_react")]).then(() => (() => (__webpack_require__(/*! ./node_modules/react-router-dom/index.js */ "./node_modules/react-router-dom/index.js"))))));
/******/ 					register("react", "17.0.2", () => (__webpack_require__.e("vendors-node_modules_react_index_js").then(() => (() => (__webpack_require__(/*! ./node_modules/react/index.js */ "./node_modules/react/index.js"))))));
/******/ 					register("thom-components", "0.0.31", () => (Promise.all([__webpack_require__.e("vendors-node_modules_thom-components_lib_index_esm_js"), __webpack_require__.e("webpack_sharing_consume_default_react_react")]).then(() => (() => (__webpack_require__(/*! ./node_modules/thom-components/lib/index.esm.js */ "./node_modules/thom-components/lib/index.esm.js"))))));
/******/ 				}
/******/ 				break;
/******/ 			}
/******/ 			if(!promises.length) return initPromises[name] = 1;
/******/ 			return initPromises[name] = Promise.all(promises).then(() => (initPromises[name] = 1));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "http://localhost:2001/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/consumes */
/******/ 	(() => {
/******/ 		var parseVersion = (str) => {
/******/ 			// see webpack/lib/util/semver.js for original code
/******/ 			var p=p=>{return p.split(".").map((p=>{return+p==p?+p:p}))},n=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(str),r=n[1]?p(n[1]):[];return n[2]&&(r.length++,r.push.apply(r,p(n[2]))),n[3]&&(r.push([]),r.push.apply(r,p(n[3]))),r;
/******/ 		}
/******/ 		var versionLt = (a, b) => {
/******/ 			// see webpack/lib/util/semver.js for original code
/******/ 			a=parseVersion(a),b=parseVersion(b);for(var r=0;;){if(r>=a.length)return r<b.length&&"u"!=(typeof b[r])[0];var e=a[r],n=(typeof e)[0];if(r>=b.length)return"u"==n;var t=b[r],f=(typeof t)[0];if(n!=f)return"o"==n&&"n"==f||("s"==f||"u"==n);if("o"!=n&&"u"!=n&&e!=t)return e<t;r++}
/******/ 		}
/******/ 		var rangeToString = (range) => {
/******/ 			// see webpack/lib/util/semver.js for original code
/******/ 			var r=range[0],n="";if(1===range.length)return"*";if(r+.5){n+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var e=1,a=1;a<range.length;a++){e--,n+="u"==(typeof(t=range[a]))[0]?"-":(e>0?".":"")+(e=2,t)}return n}var g=[];for(a=1;a<range.length;a++){var t=range[a];g.push(0===t?"not("+o()+")":1===t?"("+o()+" || "+o()+")":2===t?g.pop()+" "+g.pop():rangeToString(t))}return o();function o(){return g.pop().replace(/^\((.+)\)$/,"$1")}
/******/ 		}
/******/ 		var satisfy = (range, version) => {
/******/ 			// see webpack/lib/util/semver.js for original code
/******/ 			if(0 in range){version=parseVersion(version);var e=range[0],r=e<0;r&&(e=-e-1);for(var n=0,i=1,a=!0;;i++,n++){var f,s,g=i<range.length?(typeof range[i])[0]:"";if(n>=version.length||"o"==(s=(typeof(f=version[n]))[0]))return!a||("u"==g?i>e&&!r:""==g!=r);if("u"==s){if(!a||"u"!=g)return!1}else if(a)if(g==s)if(i<=e){if(f!=range[i])return!1}else{if(r?f>range[i]:f<range[i])return!1;f!=range[i]&&(a=!1)}else if("s"!=g&&"n"!=g){if(r||i<=e)return!1;a=!1,i--}else{if(i<=e||s<g!=r)return!1;a=!1}else"s"!=g&&"n"!=g&&(a=!1,i--)}}var t=[],o=t.pop.bind(t);for(n=1;n<range.length;n++){var u=range[n];t.push(1==u?o()|o():2==u?o()&o():u?satisfy(u,version):!o())}return!!o();
/******/ 		}
/******/ 		var ensureExistence = (scopeName, key) => {
/******/ 			var scope = __webpack_require__.S[scopeName];
/******/ 			if(!scope || !__webpack_require__.o(scope, key)) throw new Error("Shared module " + key + " doesn't exist in shared scope " + scopeName);
/******/ 			return scope;
/******/ 		};
/******/ 		var findVersion = (scope, key) => {
/******/ 			var versions = scope[key];
/******/ 			var key = Object.keys(versions).reduce((a, b) => {
/******/ 				return !a || versionLt(a, b) ? b : a;
/******/ 			}, 0);
/******/ 			return key && versions[key]
/******/ 		};
/******/ 		var findSingletonVersionKey = (scope, key) => {
/******/ 			var versions = scope[key];
/******/ 			return Object.keys(versions).reduce((a, b) => {
/******/ 				return !a || (!versions[a].loaded && versionLt(a, b)) ? b : a;
/******/ 			}, 0);
/******/ 		};
/******/ 		var getInvalidSingletonVersionMessage = (scope, key, version, requiredVersion) => {
/******/ 			return "Unsatisfied version " + version + " from " + (version && scope[key][version].from) + " of shared singleton module " + key + " (required " + rangeToString(requiredVersion) + ")"
/******/ 		};
/******/ 		var getSingleton = (scope, scopeName, key, requiredVersion) => {
/******/ 			var version = findSingletonVersionKey(scope, key);
/******/ 			return get(scope[key][version]);
/******/ 		};
/******/ 		var getSingletonVersion = (scope, scopeName, key, requiredVersion) => {
/******/ 			var version = findSingletonVersionKey(scope, key);
/******/ 			if (!satisfy(requiredVersion, version)) typeof console !== "undefined" && console.warn && console.warn(getInvalidSingletonVersionMessage(scope, key, version, requiredVersion));
/******/ 			return get(scope[key][version]);
/******/ 		};
/******/ 		var getStrictSingletonVersion = (scope, scopeName, key, requiredVersion) => {
/******/ 			var version = findSingletonVersionKey(scope, key);
/******/ 			if (!satisfy(requiredVersion, version)) throw new Error(getInvalidSingletonVersionMessage(scope, key, version, requiredVersion));
/******/ 			return get(scope[key][version]);
/******/ 		};
/******/ 		var findValidVersion = (scope, key, requiredVersion) => {
/******/ 			var versions = scope[key];
/******/ 			var key = Object.keys(versions).reduce((a, b) => {
/******/ 				if (!satisfy(requiredVersion, b)) return a;
/******/ 				return !a || versionLt(a, b) ? b : a;
/******/ 			}, 0);
/******/ 			return key && versions[key]
/******/ 		};
/******/ 		var getInvalidVersionMessage = (scope, scopeName, key, requiredVersion) => {
/******/ 			var versions = scope[key];
/******/ 			return "No satisfying version (" + rangeToString(requiredVersion) + ") of shared module " + key + " found in shared scope " + scopeName + ".\n" +
/******/ 				"Available versions: " + Object.keys(versions).map((key) => {
/******/ 				return key + " from " + versions[key].from;
/******/ 			}).join(", ");
/******/ 		};
/******/ 		var getValidVersion = (scope, scopeName, key, requiredVersion) => {
/******/ 			var entry = findValidVersion(scope, key, requiredVersion);
/******/ 			if(entry) return get(entry);
/******/ 			throw new Error(getInvalidVersionMessage(scope, scopeName, key, requiredVersion));
/******/ 		};
/******/ 		var warnInvalidVersion = (scope, scopeName, key, requiredVersion) => {
/******/ 			typeof console !== "undefined" && console.warn && console.warn(getInvalidVersionMessage(scope, scopeName, key, requiredVersion));
/******/ 		};
/******/ 		var get = (entry) => {
/******/ 			entry.loaded = 1;
/******/ 			return entry.get()
/******/ 		};
/******/ 		var init = (fn) => (function(scopeName, a, b, c) {
/******/ 			var promise = __webpack_require__.I(scopeName);
/******/ 			if (promise && promise.then) return promise.then(fn.bind(fn, scopeName, __webpack_require__.S[scopeName], a, b, c));
/******/ 			return fn(scopeName, __webpack_require__.S[scopeName], a, b, c);
/******/ 		});
/******/ 		
/******/ 		var load = /*#__PURE__*/ init((scopeName, scope, key) => {
/******/ 			ensureExistence(scopeName, key);
/******/ 			return get(findVersion(scope, key));
/******/ 		});
/******/ 		var loadFallback = /*#__PURE__*/ init((scopeName, scope, key, fallback) => {
/******/ 			return scope && __webpack_require__.o(scope, key) ? get(findVersion(scope, key)) : fallback();
/******/ 		});
/******/ 		var loadVersionCheck = /*#__PURE__*/ init((scopeName, scope, key, version) => {
/******/ 			ensureExistence(scopeName, key);
/******/ 			return get(findValidVersion(scope, key, version) || warnInvalidVersion(scope, scopeName, key, version) || findVersion(scope, key));
/******/ 		});
/******/ 		var loadSingleton = /*#__PURE__*/ init((scopeName, scope, key) => {
/******/ 			ensureExistence(scopeName, key);
/******/ 			return getSingleton(scope, scopeName, key);
/******/ 		});
/******/ 		var loadSingletonVersionCheck = /*#__PURE__*/ init((scopeName, scope, key, version) => {
/******/ 			ensureExistence(scopeName, key);
/******/ 			return getSingletonVersion(scope, scopeName, key, version);
/******/ 		});
/******/ 		var loadStrictVersionCheck = /*#__PURE__*/ init((scopeName, scope, key, version) => {
/******/ 			ensureExistence(scopeName, key);
/******/ 			return getValidVersion(scope, scopeName, key, version);
/******/ 		});
/******/ 		var loadStrictSingletonVersionCheck = /*#__PURE__*/ init((scopeName, scope, key, version) => {
/******/ 			ensureExistence(scopeName, key);
/******/ 			return getStrictSingletonVersion(scope, scopeName, key, version);
/******/ 		});
/******/ 		var loadVersionCheckFallback = /*#__PURE__*/ init((scopeName, scope, key, version, fallback) => {
/******/ 			if(!scope || !__webpack_require__.o(scope, key)) return fallback();
/******/ 			return get(findValidVersion(scope, key, version) || warnInvalidVersion(scope, scopeName, key, version) || findVersion(scope, key));
/******/ 		});
/******/ 		var loadSingletonFallback = /*#__PURE__*/ init((scopeName, scope, key, fallback) => {
/******/ 			if(!scope || !__webpack_require__.o(scope, key)) return fallback();
/******/ 			return getSingleton(scope, scopeName, key);
/******/ 		});
/******/ 		var loadSingletonVersionCheckFallback = /*#__PURE__*/ init((scopeName, scope, key, version, fallback) => {
/******/ 			if(!scope || !__webpack_require__.o(scope, key)) return fallback();
/******/ 			return getSingletonVersion(scope, scopeName, key, version);
/******/ 		});
/******/ 		var loadStrictVersionCheckFallback = /*#__PURE__*/ init((scopeName, scope, key, version, fallback) => {
/******/ 			var entry = scope && __webpack_require__.o(scope, key) && findValidVersion(scope, key, version);
/******/ 			return entry ? get(entry) : fallback();
/******/ 		});
/******/ 		var loadStrictSingletonVersionCheckFallback = /*#__PURE__*/ init((scopeName, scope, key, version, fallback) => {
/******/ 			if(!scope || !__webpack_require__.o(scope, key)) return fallback();
/******/ 			return getStrictSingletonVersion(scope, scopeName, key, version);
/******/ 		});
/******/ 		var installedModules = {};
/******/ 		var moduleToHandlerMapping = {
/******/ 			"webpack/sharing/consume/default/react/react": () => (loadSingletonVersionCheckFallback("default", "react", [1,17,0,2], () => (__webpack_require__.e("vendors-node_modules_react_index_js").then(() => (() => (__webpack_require__(/*! react */ "./node_modules/react/index.js"))))))),
/******/ 			"webpack/sharing/consume/default/shared": () => (loadStrictVersionCheck("default", "shared", [4,"file:","","/shared"])),
/******/ 			"webpack/sharing/consume/default/react-router-dom/react-router-dom": () => (loadSingletonVersionCheckFallback("default", "react-router-dom", [1,6,2,2], () => (__webpack_require__.e("vendors-node_modules_react-router-dom_index_js").then(() => (() => (__webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js"))))))),
/******/ 			"webpack/sharing/consume/default/thom-components/thom-components": () => (loadSingletonVersionCheckFallback("default", "thom-components", [3,0,0,31], () => (__webpack_require__.e("vendors-node_modules_thom-components_lib_index_esm_js").then(() => (() => (__webpack_require__(/*! thom-components */ "./node_modules/thom-components/lib/index.esm.js"))))))),
/******/ 			"webpack/sharing/consume/default/react-hook-form/react-hook-form": () => (loadStrictVersionCheckFallback("default", "react-hook-form", [1,7,27,1], () => (__webpack_require__.e("vendors-node_modules_react-hook-form_dist_index_esm_mjs").then(() => (() => (__webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.mjs"))))))),
/******/ 			"webpack/sharing/consume/default/react-dom/react-dom": () => (loadSingletonVersionCheckFallback("default", "react-dom", [1,17,0,2], () => (__webpack_require__.e("vendors-node_modules_react-dom_index_js").then(() => (() => (__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js")))))))
/******/ 		};
/******/ 		// no consumes in initial chunks
/******/ 		var chunkMapping = {
/******/ 			"webpack_sharing_consume_default_react_react": [
/******/ 				"webpack/sharing/consume/default/react/react"
/******/ 			],
/******/ 			"webpack_sharing_consume_default_shared": [
/******/ 				"webpack/sharing/consume/default/shared"
/******/ 			],
/******/ 			"src_Login_tsx": [
/******/ 				"webpack/sharing/consume/default/react-router-dom/react-router-dom",
/******/ 				"webpack/sharing/consume/default/thom-components/thom-components",
/******/ 				"webpack/sharing/consume/default/react-hook-form/react-hook-form"
/******/ 			],
/******/ 			"src_bootstrap_tsx": [
/******/ 				"webpack/sharing/consume/default/react-dom/react-dom"
/******/ 			]
/******/ 		};
/******/ 		__webpack_require__.f.consumes = (chunkId, promises) => {
/******/ 			if(__webpack_require__.o(chunkMapping, chunkId)) {
/******/ 				chunkMapping[chunkId].forEach((id) => {
/******/ 					if(__webpack_require__.o(installedModules, id)) return promises.push(installedModules[id]);
/******/ 					var onFactory = (factory) => {
/******/ 						installedModules[id] = 0;
/******/ 						__webpack_require__.m[id] = (module) => {
/******/ 							delete __webpack_require__.c[id];
/******/ 							module.exports = factory();
/******/ 						}
/******/ 					};
/******/ 					var onError = (error) => {
/******/ 						delete installedModules[id];
/******/ 						__webpack_require__.m[id] = (module) => {
/******/ 							delete __webpack_require__.c[id];
/******/ 							throw error;
/******/ 						}
/******/ 					};
/******/ 					try {
/******/ 						var promise = moduleToHandlerMapping[id]();
/******/ 						if(promise.then) {
/******/ 							promises.push(installedModules[id] = promise.then(onFactory)['catch'](onError));
/******/ 						} else onFactory(promise);
/******/ 					} catch(e) { onError(e); }
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(!/^webpack_sharing_consume_default_(react_react|shared)$/.test(chunkId)) {
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunklogin"] = self["webpackChunklogin"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.tsx");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEscVZBQU87Ozs7Ozs7VUNBUDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0M1QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEVBQUU7V0FDRjs7Ozs7V0NSQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ0pBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsdUJBQXVCLDRCQUE0QjtXQUNuRDtXQUNBO1dBQ0E7V0FDQSxpQkFBaUIsb0JBQW9CO1dBQ3JDO1dBQ0EsbUdBQW1HLFlBQVk7V0FDL0c7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsbUVBQW1FLGlDQUFpQztXQUNwRztXQUNBO1dBQ0E7V0FDQTs7Ozs7V0N6Q0E7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLG9KQUFvSjtXQUNwSjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLElBQUksYUFBYTtXQUNqQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NoREE7Ozs7O1dDQUE7V0FDQTtXQUNBLFdBQVcsNkJBQTZCLGlCQUFpQixHQUFHLHFFQUFxRTtXQUNqSTtXQUNBO1dBQ0E7V0FDQSxxQ0FBcUMsYUFBYSxFQUFFLHdEQUF3RCwyQkFBMkIsNEJBQTRCLDJCQUEyQiwrQ0FBK0MsbUNBQW1DO1dBQ2hSO1dBQ0E7V0FDQTtXQUNBLHFCQUFxQiw4QkFBOEIsU0FBUyxzREFBc0QsZ0JBQWdCLGVBQWUsS0FBSyw2REFBNkQsU0FBUyxTQUFTLFFBQVEsZUFBZSxLQUFLLGVBQWUscUdBQXFHLFdBQVcsYUFBYTtXQUM3WTtXQUNBO1dBQ0E7V0FDQSxnQkFBZ0IsOEJBQThCLHFCQUFxQixZQUFZLHNCQUFzQixTQUFTLGlEQUFpRCw2RkFBNkYsV0FBVyx1QkFBdUIsMkJBQTJCLHdCQUF3QixLQUFLLG9DQUFvQyxvQkFBb0Isd0JBQXdCLG9CQUFvQixTQUFTLEtBQUsseUJBQXlCLEtBQUssZ0NBQWdDLHlCQUF5QixRQUFRLGVBQWUsS0FBSyxlQUFlLDREQUE0RDtXQUN0b0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFQUFFO1dBQ0Y7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRUFBRTtXQUNGO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFQUFFO1dBQ0Y7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFQUFFO1dBQ0Y7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLENBQUM7O1dBRUQ7V0FDQTtXQUNBO1dBQ0EsQ0FBQztXQUNEO1dBQ0E7V0FDQSxDQUFDO1dBQ0Q7V0FDQTtXQUNBO1dBQ0EsQ0FBQztXQUNEO1dBQ0E7V0FDQTtXQUNBLENBQUM7V0FDRDtXQUNBO1dBQ0E7V0FDQSxDQUFDO1dBQ0Q7V0FDQTtXQUNBO1dBQ0EsQ0FBQztXQUNEO1dBQ0E7V0FDQTtXQUNBLENBQUM7V0FDRDtXQUNBO1dBQ0E7V0FDQSxDQUFDO1dBQ0Q7V0FDQTtXQUNBO1dBQ0EsQ0FBQztXQUNEO1dBQ0E7V0FDQTtXQUNBLENBQUM7V0FDRDtXQUNBO1dBQ0E7V0FDQSxDQUFDO1dBQ0Q7V0FDQTtXQUNBO1dBQ0EsQ0FBQztXQUNEO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU07V0FDTixLQUFLLFdBQVc7V0FDaEIsR0FBRztXQUNIO1dBQ0E7Ozs7O1dDdkxBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUM7O1dBRWpDO1dBQ0E7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTTtXQUNOO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7V0FDQTtXQUNBOzs7OztVRXJGQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2xvZ2luLy4vc3JjL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9sb2dpbi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9sb2dpbi93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9sb2dpbi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbG9naW4vd2VicGFjay9ydW50aW1lL2Vuc3VyZSBjaHVuayIsIndlYnBhY2s6Ly9sb2dpbi93ZWJwYWNrL3J1bnRpbWUvZ2V0IGphdmFzY3JpcHQgY2h1bmsgZmlsZW5hbWUiLCJ3ZWJwYWNrOi8vbG9naW4vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9sb2dpbi93ZWJwYWNrL3J1bnRpbWUvbG9hZCBzY3JpcHQiLCJ3ZWJwYWNrOi8vbG9naW4vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9sb2dpbi93ZWJwYWNrL3J1bnRpbWUvc2hhcmluZyIsIndlYnBhY2s6Ly9sb2dpbi93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9sb2dpbi93ZWJwYWNrL3J1bnRpbWUvY29uc3VtZXMiLCJ3ZWJwYWNrOi8vbG9naW4vd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vbG9naW4vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9sb2dpbi93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vbG9naW4vd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCgnLi9ib290c3RyYXAnKTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuLy8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbl9fd2VicGFja19yZXF1aXJlX18uYyA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmYgPSB7fTtcbi8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbi8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5lID0gKGNodW5rSWQpID0+IHtcblx0cmV0dXJuIFByb21pc2UuYWxsKE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uZikucmVkdWNlKChwcm9taXNlcywga2V5KSA9PiB7XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5mW2tleV0oY2h1bmtJZCwgcHJvbWlzZXMpO1xuXHRcdHJldHVybiBwcm9taXNlcztcblx0fSwgW10pKTtcbn07IiwiLy8gVGhpcyBmdW5jdGlvbiBhbGxvdyB0byByZWZlcmVuY2UgYXN5bmMgY2h1bmtzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnUgPSAoY2h1bmtJZCkgPT4ge1xuXHQvLyByZXR1cm4gdXJsIGZvciBmaWxlbmFtZXMgYmFzZWQgb24gdGVtcGxhdGVcblx0cmV0dXJuIFwiXCIgKyBjaHVua0lkICsgXCIuanNcIjtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsInZhciBpblByb2dyZXNzID0ge307XG52YXIgZGF0YVdlYnBhY2tQcmVmaXggPSBcImxvZ2luOlwiO1xuLy8gbG9hZFNjcmlwdCBmdW5jdGlvbiB0byBsb2FkIGEgc2NyaXB0IHZpYSBzY3JpcHQgdGFnXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmwgPSAodXJsLCBkb25lLCBrZXksIGNodW5rSWQpID0+IHtcblx0aWYoaW5Qcm9ncmVzc1t1cmxdKSB7IGluUHJvZ3Jlc3NbdXJsXS5wdXNoKGRvbmUpOyByZXR1cm47IH1cblx0dmFyIHNjcmlwdCwgbmVlZEF0dGFjaDtcblx0aWYoa2V5ICE9PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBzY3JpcHRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgcyA9IHNjcmlwdHNbaV07XG5cdFx0XHRpZihzLmdldEF0dHJpYnV0ZShcInNyY1wiKSA9PSB1cmwgfHwgcy5nZXRBdHRyaWJ1dGUoXCJkYXRhLXdlYnBhY2tcIikgPT0gZGF0YVdlYnBhY2tQcmVmaXggKyBrZXkpIHsgc2NyaXB0ID0gczsgYnJlYWs7IH1cblx0XHR9XG5cdH1cblx0aWYoIXNjcmlwdCkge1xuXHRcdG5lZWRBdHRhY2ggPSB0cnVlO1xuXHRcdHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuXG5cdFx0c2NyaXB0LmNoYXJzZXQgPSAndXRmLTgnO1xuXHRcdHNjcmlwdC50aW1lb3V0ID0gMTIwO1xuXHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKSB7XG5cdFx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgX193ZWJwYWNrX3JlcXVpcmVfXy5uYyk7XG5cdFx0fVxuXHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXdlYnBhY2tcIiwgZGF0YVdlYnBhY2tQcmVmaXggKyBrZXkpO1xuXHRcdHNjcmlwdC5zcmMgPSB1cmw7XG5cdH1cblx0aW5Qcm9ncmVzc1t1cmxdID0gW2RvbmVdO1xuXHR2YXIgb25TY3JpcHRDb21wbGV0ZSA9IChwcmV2LCBldmVudCkgPT4ge1xuXHRcdC8vIGF2b2lkIG1lbSBsZWFrcyBpbiBJRS5cblx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBudWxsO1xuXHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcblx0XHR2YXIgZG9uZUZucyA9IGluUHJvZ3Jlc3NbdXJsXTtcblx0XHRkZWxldGUgaW5Qcm9ncmVzc1t1cmxdO1xuXHRcdHNjcmlwdC5wYXJlbnROb2RlICYmIHNjcmlwdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNjcmlwdCk7XG5cdFx0ZG9uZUZucyAmJiBkb25lRm5zLmZvckVhY2goKGZuKSA9PiAoZm4oZXZlbnQpKSk7XG5cdFx0aWYocHJldikgcmV0dXJuIHByZXYoZXZlbnQpO1xuXHR9XG5cdDtcblx0dmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCB1bmRlZmluZWQsIHsgdHlwZTogJ3RpbWVvdXQnLCB0YXJnZXQ6IHNjcmlwdCB9KSwgMTIwMDAwKTtcblx0c2NyaXB0Lm9uZXJyb3IgPSBvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgc2NyaXB0Lm9uZXJyb3IpO1xuXHRzY3JpcHQub25sb2FkID0gb25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHNjcmlwdC5vbmxvYWQpO1xuXHRuZWVkQXR0YWNoICYmIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbn07IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5TID0ge307XG52YXIgaW5pdFByb21pc2VzID0ge307XG52YXIgaW5pdFRva2VucyA9IHt9O1xuX193ZWJwYWNrX3JlcXVpcmVfXy5JID0gKG5hbWUsIGluaXRTY29wZSkgPT4ge1xuXHRpZighaW5pdFNjb3BlKSBpbml0U2NvcGUgPSBbXTtcblx0Ly8gaGFuZGxpbmcgY2lyY3VsYXIgaW5pdCBjYWxsc1xuXHR2YXIgaW5pdFRva2VuID0gaW5pdFRva2Vuc1tuYW1lXTtcblx0aWYoIWluaXRUb2tlbikgaW5pdFRva2VuID0gaW5pdFRva2Vuc1tuYW1lXSA9IHt9O1xuXHRpZihpbml0U2NvcGUuaW5kZXhPZihpbml0VG9rZW4pID49IDApIHJldHVybjtcblx0aW5pdFNjb3BlLnB1c2goaW5pdFRva2VuKTtcblx0Ly8gb25seSBydW5zIG9uY2Vcblx0aWYoaW5pdFByb21pc2VzW25hbWVdKSByZXR1cm4gaW5pdFByb21pc2VzW25hbWVdO1xuXHQvLyBjcmVhdGVzIGEgbmV3IHNoYXJlIHNjb3BlIGlmIG5lZWRlZFxuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKF9fd2VicGFja19yZXF1aXJlX18uUywgbmFtZSkpIF9fd2VicGFja19yZXF1aXJlX18uU1tuYW1lXSA9IHt9O1xuXHQvLyBydW5zIGFsbCBpbml0IHNuaXBwZXRzIGZyb20gYWxsIG1vZHVsZXMgcmVhY2hhYmxlXG5cdHZhciBzY29wZSA9IF9fd2VicGFja19yZXF1aXJlX18uU1tuYW1lXTtcblx0dmFyIHdhcm4gPSAobXNnKSA9PiAodHlwZW9mIGNvbnNvbGUgIT09IFwidW5kZWZpbmVkXCIgJiYgY29uc29sZS53YXJuICYmIGNvbnNvbGUud2Fybihtc2cpKTtcblx0dmFyIHVuaXF1ZU5hbWUgPSBcImxvZ2luXCI7XG5cdHZhciByZWdpc3RlciA9IChuYW1lLCB2ZXJzaW9uLCBmYWN0b3J5LCBlYWdlcikgPT4ge1xuXHRcdHZhciB2ZXJzaW9ucyA9IHNjb3BlW25hbWVdID0gc2NvcGVbbmFtZV0gfHwge307XG5cdFx0dmFyIGFjdGl2ZVZlcnNpb24gPSB2ZXJzaW9uc1t2ZXJzaW9uXTtcblx0XHRpZighYWN0aXZlVmVyc2lvbiB8fCAoIWFjdGl2ZVZlcnNpb24ubG9hZGVkICYmICghZWFnZXIgIT0gIWFjdGl2ZVZlcnNpb24uZWFnZXIgPyBlYWdlciA6IHVuaXF1ZU5hbWUgPiBhY3RpdmVWZXJzaW9uLmZyb20pKSkgdmVyc2lvbnNbdmVyc2lvbl0gPSB7IGdldDogZmFjdG9yeSwgZnJvbTogdW5pcXVlTmFtZSwgZWFnZXI6ICEhZWFnZXIgfTtcblx0fTtcblx0dmFyIGluaXRFeHRlcm5hbCA9IChpZCkgPT4ge1xuXHRcdHZhciBoYW5kbGVFcnJvciA9IChlcnIpID0+ICh3YXJuKFwiSW5pdGlhbGl6YXRpb24gb2Ygc2hhcmluZyBleHRlcm5hbCBmYWlsZWQ6IFwiICsgZXJyKSk7XG5cdFx0dHJ5IHtcblx0XHRcdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcblx0XHRcdGlmKCFtb2R1bGUpIHJldHVybjtcblx0XHRcdHZhciBpbml0Rm4gPSAobW9kdWxlKSA9PiAobW9kdWxlICYmIG1vZHVsZS5pbml0ICYmIG1vZHVsZS5pbml0KF9fd2VicGFja19yZXF1aXJlX18uU1tuYW1lXSwgaW5pdFNjb3BlKSlcblx0XHRcdGlmKG1vZHVsZS50aGVuKSByZXR1cm4gcHJvbWlzZXMucHVzaChtb2R1bGUudGhlbihpbml0Rm4sIGhhbmRsZUVycm9yKSk7XG5cdFx0XHR2YXIgaW5pdFJlc3VsdCA9IGluaXRGbihtb2R1bGUpO1xuXHRcdFx0aWYoaW5pdFJlc3VsdCAmJiBpbml0UmVzdWx0LnRoZW4pIHJldHVybiBwcm9taXNlcy5wdXNoKGluaXRSZXN1bHRbJ2NhdGNoJ10oaGFuZGxlRXJyb3IpKTtcblx0XHR9IGNhdGNoKGVycikgeyBoYW5kbGVFcnJvcihlcnIpOyB9XG5cdH1cblx0dmFyIHByb21pc2VzID0gW107XG5cdHN3aXRjaChuYW1lKSB7XG5cdFx0Y2FzZSBcImRlZmF1bHRcIjoge1xuXHRcdFx0cmVnaXN0ZXIoXCJheGlvc1wiLCBcIjAuMjYuMFwiLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5lKFwidmVuZG9ycy1ub2RlX21vZHVsZXNfYXhpb3NfaW5kZXhfanNcIikudGhlbigoKSA9PiAoKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2luZGV4LmpzICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvaW5kZXguanNcIikpKSkpKTtcblx0XHRcdHJlZ2lzdGVyKFwicmVhY3QtZG9tXCIsIFwiMTcuMC4yXCIsICgpID0+IChQcm9taXNlLmFsbChbX193ZWJwYWNrX3JlcXVpcmVfXy5lKFwidmVuZG9ycy1ub2RlX21vZHVsZXNfcmVhY3QtZG9tX2luZGV4X2pzXCIpLCBfX3dlYnBhY2tfcmVxdWlyZV9fLmUoXCJ3ZWJwYWNrX3NoYXJpbmdfY29uc3VtZV9kZWZhdWx0X3JlYWN0X3JlYWN0XCIpXSkudGhlbigoKSA9PiAoKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vbm9kZV9tb2R1bGVzL3JlYWN0LWRvbS9pbmRleC5qcyAqLyBcIi4vbm9kZV9tb2R1bGVzL3JlYWN0LWRvbS9pbmRleC5qc1wiKSkpKSkpO1xuXHRcdFx0cmVnaXN0ZXIoXCJyZWFjdC1ob29rLWZvcm1cIiwgXCI3LjI3LjFcIiwgKCkgPT4gKFByb21pc2UuYWxsKFtfX3dlYnBhY2tfcmVxdWlyZV9fLmUoXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19yZWFjdC1ob29rLWZvcm1fZGlzdF9pbmRleF9lc21fbWpzXCIpLCBfX3dlYnBhY2tfcmVxdWlyZV9fLmUoXCJ3ZWJwYWNrX3NoYXJpbmdfY29uc3VtZV9kZWZhdWx0X3JlYWN0X3JlYWN0XCIpXSkudGhlbigoKSA9PiAoKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vbm9kZV9tb2R1bGVzL3JlYWN0LWhvb2stZm9ybS9kaXN0L2luZGV4LmVzbS5tanMgKi8gXCIuL25vZGVfbW9kdWxlcy9yZWFjdC1ob29rLWZvcm0vZGlzdC9pbmRleC5lc20ubWpzXCIpKSkpKSk7XG5cdFx0XHRyZWdpc3RlcihcInJlYWN0LXJvdXRlci1kb21cIiwgXCI2LjIuMlwiLCAoKSA9PiAoUHJvbWlzZS5hbGwoW19fd2VicGFja19yZXF1aXJlX18uZShcInZlbmRvcnMtbm9kZV9tb2R1bGVzX3JlYWN0LXJvdXRlci1kb21faW5kZXhfanNcIiksIF9fd2VicGFja19yZXF1aXJlX18uZShcIndlYnBhY2tfc2hhcmluZ19jb25zdW1lX2RlZmF1bHRfcmVhY3RfcmVhY3RcIildKS50aGVuKCgpID0+ICgoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyLWRvbS9pbmRleC5qcyAqLyBcIi4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci1kb20vaW5kZXguanNcIikpKSkpKTtcblx0XHRcdHJlZ2lzdGVyKFwicmVhY3RcIiwgXCIxNy4wLjJcIiwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uZShcInZlbmRvcnMtbm9kZV9tb2R1bGVzX3JlYWN0X2luZGV4X2pzXCIpLnRoZW4oKCkgPT4gKCgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL25vZGVfbW9kdWxlcy9yZWFjdC9pbmRleC5qcyAqLyBcIi4vbm9kZV9tb2R1bGVzL3JlYWN0L2luZGV4LmpzXCIpKSkpKSk7XG5cdFx0XHRyZWdpc3RlcihcInRob20tY29tcG9uZW50c1wiLCBcIjAuMC4zMVwiLCAoKSA9PiAoUHJvbWlzZS5hbGwoW19fd2VicGFja19yZXF1aXJlX18uZShcInZlbmRvcnMtbm9kZV9tb2R1bGVzX3Rob20tY29tcG9uZW50c19saWJfaW5kZXhfZXNtX2pzXCIpLCBfX3dlYnBhY2tfcmVxdWlyZV9fLmUoXCJ3ZWJwYWNrX3NoYXJpbmdfY29uc3VtZV9kZWZhdWx0X3JlYWN0X3JlYWN0XCIpXSkudGhlbigoKSA9PiAoKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vbm9kZV9tb2R1bGVzL3Rob20tY29tcG9uZW50cy9saWIvaW5kZXguZXNtLmpzICovIFwiLi9ub2RlX21vZHVsZXMvdGhvbS1jb21wb25lbnRzL2xpYi9pbmRleC5lc20uanNcIikpKSkpKTtcblx0XHR9XG5cdFx0YnJlYWs7XG5cdH1cblx0aWYoIXByb21pc2VzLmxlbmd0aCkgcmV0dXJuIGluaXRQcm9taXNlc1tuYW1lXSA9IDE7XG5cdHJldHVybiBpbml0UHJvbWlzZXNbbmFtZV0gPSBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbigoKSA9PiAoaW5pdFByb21pc2VzW25hbWVdID0gMSkpO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MjAwMS9cIjsiLCJ2YXIgcGFyc2VWZXJzaW9uID0gKHN0cikgPT4ge1xuXHQvLyBzZWUgd2VicGFjay9saWIvdXRpbC9zZW12ZXIuanMgZm9yIG9yaWdpbmFsIGNvZGVcblx0dmFyIHA9cD0+e3JldHVybiBwLnNwbGl0KFwiLlwiKS5tYXAoKHA9PntyZXR1cm4rcD09cD8rcDpwfSkpfSxuPS9eKFteLStdKyk/KD86LShbXitdKykpPyg/OlxcKyguKykpPyQvLmV4ZWMoc3RyKSxyPW5bMV0/cChuWzFdKTpbXTtyZXR1cm4gblsyXSYmKHIubGVuZ3RoKyssci5wdXNoLmFwcGx5KHIscChuWzJdKSkpLG5bM10mJihyLnB1c2goW10pLHIucHVzaC5hcHBseShyLHAoblszXSkpKSxyO1xufVxudmFyIHZlcnNpb25MdCA9IChhLCBiKSA9PiB7XG5cdC8vIHNlZSB3ZWJwYWNrL2xpYi91dGlsL3NlbXZlci5qcyBmb3Igb3JpZ2luYWwgY29kZVxuXHRhPXBhcnNlVmVyc2lvbihhKSxiPXBhcnNlVmVyc2lvbihiKTtmb3IodmFyIHI9MDs7KXtpZihyPj1hLmxlbmd0aClyZXR1cm4gcjxiLmxlbmd0aCYmXCJ1XCIhPSh0eXBlb2YgYltyXSlbMF07dmFyIGU9YVtyXSxuPSh0eXBlb2YgZSlbMF07aWYocj49Yi5sZW5ndGgpcmV0dXJuXCJ1XCI9PW47dmFyIHQ9YltyXSxmPSh0eXBlb2YgdClbMF07aWYobiE9ZilyZXR1cm5cIm9cIj09biYmXCJuXCI9PWZ8fChcInNcIj09Znx8XCJ1XCI9PW4pO2lmKFwib1wiIT1uJiZcInVcIiE9biYmZSE9dClyZXR1cm4gZTx0O3IrK31cbn1cbnZhciByYW5nZVRvU3RyaW5nID0gKHJhbmdlKSA9PiB7XG5cdC8vIHNlZSB3ZWJwYWNrL2xpYi91dGlsL3NlbXZlci5qcyBmb3Igb3JpZ2luYWwgY29kZVxuXHR2YXIgcj1yYW5nZVswXSxuPVwiXCI7aWYoMT09PXJhbmdlLmxlbmd0aClyZXR1cm5cIipcIjtpZihyKy41KXtuKz0wPT1yP1wiPj1cIjotMT09cj9cIjxcIjoxPT1yP1wiXlwiOjI9PXI/XCJ+XCI6cj4wP1wiPVwiOlwiIT1cIjtmb3IodmFyIGU9MSxhPTE7YTxyYW5nZS5sZW5ndGg7YSsrKXtlLS0sbis9XCJ1XCI9PSh0eXBlb2YodD1yYW5nZVthXSkpWzBdP1wiLVwiOihlPjA/XCIuXCI6XCJcIikrKGU9Mix0KX1yZXR1cm4gbn12YXIgZz1bXTtmb3IoYT0xO2E8cmFuZ2UubGVuZ3RoO2ErKyl7dmFyIHQ9cmFuZ2VbYV07Zy5wdXNoKDA9PT10P1wibm90KFwiK28oKStcIilcIjoxPT09dD9cIihcIitvKCkrXCIgfHwgXCIrbygpK1wiKVwiOjI9PT10P2cucG9wKCkrXCIgXCIrZy5wb3AoKTpyYW5nZVRvU3RyaW5nKHQpKX1yZXR1cm4gbygpO2Z1bmN0aW9uIG8oKXtyZXR1cm4gZy5wb3AoKS5yZXBsYWNlKC9eXFwoKC4rKVxcKSQvLFwiJDFcIil9XG59XG52YXIgc2F0aXNmeSA9IChyYW5nZSwgdmVyc2lvbikgPT4ge1xuXHQvLyBzZWUgd2VicGFjay9saWIvdXRpbC9zZW12ZXIuanMgZm9yIG9yaWdpbmFsIGNvZGVcblx0aWYoMCBpbiByYW5nZSl7dmVyc2lvbj1wYXJzZVZlcnNpb24odmVyc2lvbik7dmFyIGU9cmFuZ2VbMF0scj1lPDA7ciYmKGU9LWUtMSk7Zm9yKHZhciBuPTAsaT0xLGE9ITA7O2krKyxuKyspe3ZhciBmLHMsZz1pPHJhbmdlLmxlbmd0aD8odHlwZW9mIHJhbmdlW2ldKVswXTpcIlwiO2lmKG4+PXZlcnNpb24ubGVuZ3RofHxcIm9cIj09KHM9KHR5cGVvZihmPXZlcnNpb25bbl0pKVswXSkpcmV0dXJuIWF8fChcInVcIj09Zz9pPmUmJiFyOlwiXCI9PWchPXIpO2lmKFwidVwiPT1zKXtpZighYXx8XCJ1XCIhPWcpcmV0dXJuITF9ZWxzZSBpZihhKWlmKGc9PXMpaWYoaTw9ZSl7aWYoZiE9cmFuZ2VbaV0pcmV0dXJuITF9ZWxzZXtpZihyP2Y+cmFuZ2VbaV06ZjxyYW5nZVtpXSlyZXR1cm4hMTtmIT1yYW5nZVtpXSYmKGE9ITEpfWVsc2UgaWYoXCJzXCIhPWcmJlwiblwiIT1nKXtpZihyfHxpPD1lKXJldHVybiExO2E9ITEsaS0tfWVsc2V7aWYoaTw9ZXx8czxnIT1yKXJldHVybiExO2E9ITF9ZWxzZVwic1wiIT1nJiZcIm5cIiE9ZyYmKGE9ITEsaS0tKX19dmFyIHQ9W10sbz10LnBvcC5iaW5kKHQpO2ZvcihuPTE7bjxyYW5nZS5sZW5ndGg7bisrKXt2YXIgdT1yYW5nZVtuXTt0LnB1c2goMT09dT9vKCl8bygpOjI9PXU/bygpJm8oKTp1P3NhdGlzZnkodSx2ZXJzaW9uKTohbygpKX1yZXR1cm4hIW8oKTtcbn1cbnZhciBlbnN1cmVFeGlzdGVuY2UgPSAoc2NvcGVOYW1lLCBrZXkpID0+IHtcblx0dmFyIHNjb3BlID0gX193ZWJwYWNrX3JlcXVpcmVfXy5TW3Njb3BlTmFtZV07XG5cdGlmKCFzY29wZSB8fCAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKHNjb3BlLCBrZXkpKSB0aHJvdyBuZXcgRXJyb3IoXCJTaGFyZWQgbW9kdWxlIFwiICsga2V5ICsgXCIgZG9lc24ndCBleGlzdCBpbiBzaGFyZWQgc2NvcGUgXCIgKyBzY29wZU5hbWUpO1xuXHRyZXR1cm4gc2NvcGU7XG59O1xudmFyIGZpbmRWZXJzaW9uID0gKHNjb3BlLCBrZXkpID0+IHtcblx0dmFyIHZlcnNpb25zID0gc2NvcGVba2V5XTtcblx0dmFyIGtleSA9IE9iamVjdC5rZXlzKHZlcnNpb25zKS5yZWR1Y2UoKGEsIGIpID0+IHtcblx0XHRyZXR1cm4gIWEgfHwgdmVyc2lvbkx0KGEsIGIpID8gYiA6IGE7XG5cdH0sIDApO1xuXHRyZXR1cm4ga2V5ICYmIHZlcnNpb25zW2tleV1cbn07XG52YXIgZmluZFNpbmdsZXRvblZlcnNpb25LZXkgPSAoc2NvcGUsIGtleSkgPT4ge1xuXHR2YXIgdmVyc2lvbnMgPSBzY29wZVtrZXldO1xuXHRyZXR1cm4gT2JqZWN0LmtleXModmVyc2lvbnMpLnJlZHVjZSgoYSwgYikgPT4ge1xuXHRcdHJldHVybiAhYSB8fCAoIXZlcnNpb25zW2FdLmxvYWRlZCAmJiB2ZXJzaW9uTHQoYSwgYikpID8gYiA6IGE7XG5cdH0sIDApO1xufTtcbnZhciBnZXRJbnZhbGlkU2luZ2xldG9uVmVyc2lvbk1lc3NhZ2UgPSAoc2NvcGUsIGtleSwgdmVyc2lvbiwgcmVxdWlyZWRWZXJzaW9uKSA9PiB7XG5cdHJldHVybiBcIlVuc2F0aXNmaWVkIHZlcnNpb24gXCIgKyB2ZXJzaW9uICsgXCIgZnJvbSBcIiArICh2ZXJzaW9uICYmIHNjb3BlW2tleV1bdmVyc2lvbl0uZnJvbSkgKyBcIiBvZiBzaGFyZWQgc2luZ2xldG9uIG1vZHVsZSBcIiArIGtleSArIFwiIChyZXF1aXJlZCBcIiArIHJhbmdlVG9TdHJpbmcocmVxdWlyZWRWZXJzaW9uKSArIFwiKVwiXG59O1xudmFyIGdldFNpbmdsZXRvbiA9IChzY29wZSwgc2NvcGVOYW1lLCBrZXksIHJlcXVpcmVkVmVyc2lvbikgPT4ge1xuXHR2YXIgdmVyc2lvbiA9IGZpbmRTaW5nbGV0b25WZXJzaW9uS2V5KHNjb3BlLCBrZXkpO1xuXHRyZXR1cm4gZ2V0KHNjb3BlW2tleV1bdmVyc2lvbl0pO1xufTtcbnZhciBnZXRTaW5nbGV0b25WZXJzaW9uID0gKHNjb3BlLCBzY29wZU5hbWUsIGtleSwgcmVxdWlyZWRWZXJzaW9uKSA9PiB7XG5cdHZhciB2ZXJzaW9uID0gZmluZFNpbmdsZXRvblZlcnNpb25LZXkoc2NvcGUsIGtleSk7XG5cdGlmICghc2F0aXNmeShyZXF1aXJlZFZlcnNpb24sIHZlcnNpb24pKSB0eXBlb2YgY29uc29sZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBjb25zb2xlLndhcm4gJiYgY29uc29sZS53YXJuKGdldEludmFsaWRTaW5nbGV0b25WZXJzaW9uTWVzc2FnZShzY29wZSwga2V5LCB2ZXJzaW9uLCByZXF1aXJlZFZlcnNpb24pKTtcblx0cmV0dXJuIGdldChzY29wZVtrZXldW3ZlcnNpb25dKTtcbn07XG52YXIgZ2V0U3RyaWN0U2luZ2xldG9uVmVyc2lvbiA9IChzY29wZSwgc2NvcGVOYW1lLCBrZXksIHJlcXVpcmVkVmVyc2lvbikgPT4ge1xuXHR2YXIgdmVyc2lvbiA9IGZpbmRTaW5nbGV0b25WZXJzaW9uS2V5KHNjb3BlLCBrZXkpO1xuXHRpZiAoIXNhdGlzZnkocmVxdWlyZWRWZXJzaW9uLCB2ZXJzaW9uKSkgdGhyb3cgbmV3IEVycm9yKGdldEludmFsaWRTaW5nbGV0b25WZXJzaW9uTWVzc2FnZShzY29wZSwga2V5LCB2ZXJzaW9uLCByZXF1aXJlZFZlcnNpb24pKTtcblx0cmV0dXJuIGdldChzY29wZVtrZXldW3ZlcnNpb25dKTtcbn07XG52YXIgZmluZFZhbGlkVmVyc2lvbiA9IChzY29wZSwga2V5LCByZXF1aXJlZFZlcnNpb24pID0+IHtcblx0dmFyIHZlcnNpb25zID0gc2NvcGVba2V5XTtcblx0dmFyIGtleSA9IE9iamVjdC5rZXlzKHZlcnNpb25zKS5yZWR1Y2UoKGEsIGIpID0+IHtcblx0XHRpZiAoIXNhdGlzZnkocmVxdWlyZWRWZXJzaW9uLCBiKSkgcmV0dXJuIGE7XG5cdFx0cmV0dXJuICFhIHx8IHZlcnNpb25MdChhLCBiKSA/IGIgOiBhO1xuXHR9LCAwKTtcblx0cmV0dXJuIGtleSAmJiB2ZXJzaW9uc1trZXldXG59O1xudmFyIGdldEludmFsaWRWZXJzaW9uTWVzc2FnZSA9IChzY29wZSwgc2NvcGVOYW1lLCBrZXksIHJlcXVpcmVkVmVyc2lvbikgPT4ge1xuXHR2YXIgdmVyc2lvbnMgPSBzY29wZVtrZXldO1xuXHRyZXR1cm4gXCJObyBzYXRpc2Z5aW5nIHZlcnNpb24gKFwiICsgcmFuZ2VUb1N0cmluZyhyZXF1aXJlZFZlcnNpb24pICsgXCIpIG9mIHNoYXJlZCBtb2R1bGUgXCIgKyBrZXkgKyBcIiBmb3VuZCBpbiBzaGFyZWQgc2NvcGUgXCIgKyBzY29wZU5hbWUgKyBcIi5cXG5cIiArXG5cdFx0XCJBdmFpbGFibGUgdmVyc2lvbnM6IFwiICsgT2JqZWN0LmtleXModmVyc2lvbnMpLm1hcCgoa2V5KSA9PiB7XG5cdFx0cmV0dXJuIGtleSArIFwiIGZyb20gXCIgKyB2ZXJzaW9uc1trZXldLmZyb207XG5cdH0pLmpvaW4oXCIsIFwiKTtcbn07XG52YXIgZ2V0VmFsaWRWZXJzaW9uID0gKHNjb3BlLCBzY29wZU5hbWUsIGtleSwgcmVxdWlyZWRWZXJzaW9uKSA9PiB7XG5cdHZhciBlbnRyeSA9IGZpbmRWYWxpZFZlcnNpb24oc2NvcGUsIGtleSwgcmVxdWlyZWRWZXJzaW9uKTtcblx0aWYoZW50cnkpIHJldHVybiBnZXQoZW50cnkpO1xuXHR0aHJvdyBuZXcgRXJyb3IoZ2V0SW52YWxpZFZlcnNpb25NZXNzYWdlKHNjb3BlLCBzY29wZU5hbWUsIGtleSwgcmVxdWlyZWRWZXJzaW9uKSk7XG59O1xudmFyIHdhcm5JbnZhbGlkVmVyc2lvbiA9IChzY29wZSwgc2NvcGVOYW1lLCBrZXksIHJlcXVpcmVkVmVyc2lvbikgPT4ge1xuXHR0eXBlb2YgY29uc29sZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBjb25zb2xlLndhcm4gJiYgY29uc29sZS53YXJuKGdldEludmFsaWRWZXJzaW9uTWVzc2FnZShzY29wZSwgc2NvcGVOYW1lLCBrZXksIHJlcXVpcmVkVmVyc2lvbikpO1xufTtcbnZhciBnZXQgPSAoZW50cnkpID0+IHtcblx0ZW50cnkubG9hZGVkID0gMTtcblx0cmV0dXJuIGVudHJ5LmdldCgpXG59O1xudmFyIGluaXQgPSAoZm4pID0+IChmdW5jdGlvbihzY29wZU5hbWUsIGEsIGIsIGMpIHtcblx0dmFyIHByb21pc2UgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLkkoc2NvcGVOYW1lKTtcblx0aWYgKHByb21pc2UgJiYgcHJvbWlzZS50aGVuKSByZXR1cm4gcHJvbWlzZS50aGVuKGZuLmJpbmQoZm4sIHNjb3BlTmFtZSwgX193ZWJwYWNrX3JlcXVpcmVfXy5TW3Njb3BlTmFtZV0sIGEsIGIsIGMpKTtcblx0cmV0dXJuIGZuKHNjb3BlTmFtZSwgX193ZWJwYWNrX3JlcXVpcmVfXy5TW3Njb3BlTmFtZV0sIGEsIGIsIGMpO1xufSk7XG5cbnZhciBsb2FkID0gLyojX19QVVJFX18qLyBpbml0KChzY29wZU5hbWUsIHNjb3BlLCBrZXkpID0+IHtcblx0ZW5zdXJlRXhpc3RlbmNlKHNjb3BlTmFtZSwga2V5KTtcblx0cmV0dXJuIGdldChmaW5kVmVyc2lvbihzY29wZSwga2V5KSk7XG59KTtcbnZhciBsb2FkRmFsbGJhY2sgPSAvKiNfX1BVUkVfXyovIGluaXQoKHNjb3BlTmFtZSwgc2NvcGUsIGtleSwgZmFsbGJhY2spID0+IHtcblx0cmV0dXJuIHNjb3BlICYmIF9fd2VicGFja19yZXF1aXJlX18ubyhzY29wZSwga2V5KSA/IGdldChmaW5kVmVyc2lvbihzY29wZSwga2V5KSkgOiBmYWxsYmFjaygpO1xufSk7XG52YXIgbG9hZFZlcnNpb25DaGVjayA9IC8qI19fUFVSRV9fKi8gaW5pdCgoc2NvcGVOYW1lLCBzY29wZSwga2V5LCB2ZXJzaW9uKSA9PiB7XG5cdGVuc3VyZUV4aXN0ZW5jZShzY29wZU5hbWUsIGtleSk7XG5cdHJldHVybiBnZXQoZmluZFZhbGlkVmVyc2lvbihzY29wZSwga2V5LCB2ZXJzaW9uKSB8fCB3YXJuSW52YWxpZFZlcnNpb24oc2NvcGUsIHNjb3BlTmFtZSwga2V5LCB2ZXJzaW9uKSB8fCBmaW5kVmVyc2lvbihzY29wZSwga2V5KSk7XG59KTtcbnZhciBsb2FkU2luZ2xldG9uID0gLyojX19QVVJFX18qLyBpbml0KChzY29wZU5hbWUsIHNjb3BlLCBrZXkpID0+IHtcblx0ZW5zdXJlRXhpc3RlbmNlKHNjb3BlTmFtZSwga2V5KTtcblx0cmV0dXJuIGdldFNpbmdsZXRvbihzY29wZSwgc2NvcGVOYW1lLCBrZXkpO1xufSk7XG52YXIgbG9hZFNpbmdsZXRvblZlcnNpb25DaGVjayA9IC8qI19fUFVSRV9fKi8gaW5pdCgoc2NvcGVOYW1lLCBzY29wZSwga2V5LCB2ZXJzaW9uKSA9PiB7XG5cdGVuc3VyZUV4aXN0ZW5jZShzY29wZU5hbWUsIGtleSk7XG5cdHJldHVybiBnZXRTaW5nbGV0b25WZXJzaW9uKHNjb3BlLCBzY29wZU5hbWUsIGtleSwgdmVyc2lvbik7XG59KTtcbnZhciBsb2FkU3RyaWN0VmVyc2lvbkNoZWNrID0gLyojX19QVVJFX18qLyBpbml0KChzY29wZU5hbWUsIHNjb3BlLCBrZXksIHZlcnNpb24pID0+IHtcblx0ZW5zdXJlRXhpc3RlbmNlKHNjb3BlTmFtZSwga2V5KTtcblx0cmV0dXJuIGdldFZhbGlkVmVyc2lvbihzY29wZSwgc2NvcGVOYW1lLCBrZXksIHZlcnNpb24pO1xufSk7XG52YXIgbG9hZFN0cmljdFNpbmdsZXRvblZlcnNpb25DaGVjayA9IC8qI19fUFVSRV9fKi8gaW5pdCgoc2NvcGVOYW1lLCBzY29wZSwga2V5LCB2ZXJzaW9uKSA9PiB7XG5cdGVuc3VyZUV4aXN0ZW5jZShzY29wZU5hbWUsIGtleSk7XG5cdHJldHVybiBnZXRTdHJpY3RTaW5nbGV0b25WZXJzaW9uKHNjb3BlLCBzY29wZU5hbWUsIGtleSwgdmVyc2lvbik7XG59KTtcbnZhciBsb2FkVmVyc2lvbkNoZWNrRmFsbGJhY2sgPSAvKiNfX1BVUkVfXyovIGluaXQoKHNjb3BlTmFtZSwgc2NvcGUsIGtleSwgdmVyc2lvbiwgZmFsbGJhY2spID0+IHtcblx0aWYoIXNjb3BlIHx8ICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oc2NvcGUsIGtleSkpIHJldHVybiBmYWxsYmFjaygpO1xuXHRyZXR1cm4gZ2V0KGZpbmRWYWxpZFZlcnNpb24oc2NvcGUsIGtleSwgdmVyc2lvbikgfHwgd2FybkludmFsaWRWZXJzaW9uKHNjb3BlLCBzY29wZU5hbWUsIGtleSwgdmVyc2lvbikgfHwgZmluZFZlcnNpb24oc2NvcGUsIGtleSkpO1xufSk7XG52YXIgbG9hZFNpbmdsZXRvbkZhbGxiYWNrID0gLyojX19QVVJFX18qLyBpbml0KChzY29wZU5hbWUsIHNjb3BlLCBrZXksIGZhbGxiYWNrKSA9PiB7XG5cdGlmKCFzY29wZSB8fCAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKHNjb3BlLCBrZXkpKSByZXR1cm4gZmFsbGJhY2soKTtcblx0cmV0dXJuIGdldFNpbmdsZXRvbihzY29wZSwgc2NvcGVOYW1lLCBrZXkpO1xufSk7XG52YXIgbG9hZFNpbmdsZXRvblZlcnNpb25DaGVja0ZhbGxiYWNrID0gLyojX19QVVJFX18qLyBpbml0KChzY29wZU5hbWUsIHNjb3BlLCBrZXksIHZlcnNpb24sIGZhbGxiYWNrKSA9PiB7XG5cdGlmKCFzY29wZSB8fCAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKHNjb3BlLCBrZXkpKSByZXR1cm4gZmFsbGJhY2soKTtcblx0cmV0dXJuIGdldFNpbmdsZXRvblZlcnNpb24oc2NvcGUsIHNjb3BlTmFtZSwga2V5LCB2ZXJzaW9uKTtcbn0pO1xudmFyIGxvYWRTdHJpY3RWZXJzaW9uQ2hlY2tGYWxsYmFjayA9IC8qI19fUFVSRV9fKi8gaW5pdCgoc2NvcGVOYW1lLCBzY29wZSwga2V5LCB2ZXJzaW9uLCBmYWxsYmFjaykgPT4ge1xuXHR2YXIgZW50cnkgPSBzY29wZSAmJiBfX3dlYnBhY2tfcmVxdWlyZV9fLm8oc2NvcGUsIGtleSkgJiYgZmluZFZhbGlkVmVyc2lvbihzY29wZSwga2V5LCB2ZXJzaW9uKTtcblx0cmV0dXJuIGVudHJ5ID8gZ2V0KGVudHJ5KSA6IGZhbGxiYWNrKCk7XG59KTtcbnZhciBsb2FkU3RyaWN0U2luZ2xldG9uVmVyc2lvbkNoZWNrRmFsbGJhY2sgPSAvKiNfX1BVUkVfXyovIGluaXQoKHNjb3BlTmFtZSwgc2NvcGUsIGtleSwgdmVyc2lvbiwgZmFsbGJhY2spID0+IHtcblx0aWYoIXNjb3BlIHx8ICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oc2NvcGUsIGtleSkpIHJldHVybiBmYWxsYmFjaygpO1xuXHRyZXR1cm4gZ2V0U3RyaWN0U2luZ2xldG9uVmVyc2lvbihzY29wZSwgc2NvcGVOYW1lLCBrZXksIHZlcnNpb24pO1xufSk7XG52YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xudmFyIG1vZHVsZVRvSGFuZGxlck1hcHBpbmcgPSB7XG5cdFwid2VicGFjay9zaGFyaW5nL2NvbnN1bWUvZGVmYXVsdC9yZWFjdC9yZWFjdFwiOiAoKSA9PiAobG9hZFNpbmdsZXRvblZlcnNpb25DaGVja0ZhbGxiYWNrKFwiZGVmYXVsdFwiLCBcInJlYWN0XCIsIFsxLDE3LDAsMl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLmUoXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19yZWFjdF9pbmRleF9qc1wiKS50aGVuKCgpID0+ICgoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgcmVhY3QgKi8gXCIuL25vZGVfbW9kdWxlcy9yZWFjdC9pbmRleC5qc1wiKSkpKSkpKSxcblx0XCJ3ZWJwYWNrL3NoYXJpbmcvY29uc3VtZS9kZWZhdWx0L3NoYXJlZFwiOiAoKSA9PiAobG9hZFN0cmljdFZlcnNpb25DaGVjayhcImRlZmF1bHRcIiwgXCJzaGFyZWRcIiwgWzQsXCJmaWxlOlwiLFwiXCIsXCIvc2hhcmVkXCJdKSksXG5cdFwid2VicGFjay9zaGFyaW5nL2NvbnN1bWUvZGVmYXVsdC9yZWFjdC1yb3V0ZXItZG9tL3JlYWN0LXJvdXRlci1kb21cIjogKCkgPT4gKGxvYWRTaW5nbGV0b25WZXJzaW9uQ2hlY2tGYWxsYmFjayhcImRlZmF1bHRcIiwgXCJyZWFjdC1yb3V0ZXItZG9tXCIsIFsxLDYsMiwyXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uZShcInZlbmRvcnMtbm9kZV9tb2R1bGVzX3JlYWN0LXJvdXRlci1kb21faW5kZXhfanNcIikudGhlbigoKSA9PiAoKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oLyohIHJlYWN0LXJvdXRlci1kb20gKi8gXCIuL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXItZG9tL2luZGV4LmpzXCIpKSkpKSkpLFxuXHRcIndlYnBhY2svc2hhcmluZy9jb25zdW1lL2RlZmF1bHQvdGhvbS1jb21wb25lbnRzL3Rob20tY29tcG9uZW50c1wiOiAoKSA9PiAobG9hZFNpbmdsZXRvblZlcnNpb25DaGVja0ZhbGxiYWNrKFwiZGVmYXVsdFwiLCBcInRob20tY29tcG9uZW50c1wiLCBbMywwLDAsMzFdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5lKFwidmVuZG9ycy1ub2RlX21vZHVsZXNfdGhvbS1jb21wb25lbnRzX2xpYl9pbmRleF9lc21fanNcIikudGhlbigoKSA9PiAoKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oLyohIHRob20tY29tcG9uZW50cyAqLyBcIi4vbm9kZV9tb2R1bGVzL3Rob20tY29tcG9uZW50cy9saWIvaW5kZXguZXNtLmpzXCIpKSkpKSkpLFxuXHRcIndlYnBhY2svc2hhcmluZy9jb25zdW1lL2RlZmF1bHQvcmVhY3QtaG9vay1mb3JtL3JlYWN0LWhvb2stZm9ybVwiOiAoKSA9PiAobG9hZFN0cmljdFZlcnNpb25DaGVja0ZhbGxiYWNrKFwiZGVmYXVsdFwiLCBcInJlYWN0LWhvb2stZm9ybVwiLCBbMSw3LDI3LDFdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5lKFwidmVuZG9ycy1ub2RlX21vZHVsZXNfcmVhY3QtaG9vay1mb3JtX2Rpc3RfaW5kZXhfZXNtX21qc1wiKS50aGVuKCgpID0+ICgoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgcmVhY3QtaG9vay1mb3JtICovIFwiLi9ub2RlX21vZHVsZXMvcmVhY3QtaG9vay1mb3JtL2Rpc3QvaW5kZXguZXNtLm1qc1wiKSkpKSkpKSxcblx0XCJ3ZWJwYWNrL3NoYXJpbmcvY29uc3VtZS9kZWZhdWx0L3JlYWN0LWRvbS9yZWFjdC1kb21cIjogKCkgPT4gKGxvYWRTaW5nbGV0b25WZXJzaW9uQ2hlY2tGYWxsYmFjayhcImRlZmF1bHRcIiwgXCJyZWFjdC1kb21cIiwgWzEsMTcsMCwyXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uZShcInZlbmRvcnMtbm9kZV9tb2R1bGVzX3JlYWN0LWRvbV9pbmRleF9qc1wiKS50aGVuKCgpID0+ICgoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgcmVhY3QtZG9tICovIFwiLi9ub2RlX21vZHVsZXMvcmVhY3QtZG9tL2luZGV4LmpzXCIpKSkpKSkpXG59O1xuLy8gbm8gY29uc3VtZXMgaW4gaW5pdGlhbCBjaHVua3NcbnZhciBjaHVua01hcHBpbmcgPSB7XG5cdFwid2VicGFja19zaGFyaW5nX2NvbnN1bWVfZGVmYXVsdF9yZWFjdF9yZWFjdFwiOiBbXG5cdFx0XCJ3ZWJwYWNrL3NoYXJpbmcvY29uc3VtZS9kZWZhdWx0L3JlYWN0L3JlYWN0XCJcblx0XSxcblx0XCJ3ZWJwYWNrX3NoYXJpbmdfY29uc3VtZV9kZWZhdWx0X3NoYXJlZFwiOiBbXG5cdFx0XCJ3ZWJwYWNrL3NoYXJpbmcvY29uc3VtZS9kZWZhdWx0L3NoYXJlZFwiXG5cdF0sXG5cdFwic3JjX0xvZ2luX3RzeFwiOiBbXG5cdFx0XCJ3ZWJwYWNrL3NoYXJpbmcvY29uc3VtZS9kZWZhdWx0L3JlYWN0LXJvdXRlci1kb20vcmVhY3Qtcm91dGVyLWRvbVwiLFxuXHRcdFwid2VicGFjay9zaGFyaW5nL2NvbnN1bWUvZGVmYXVsdC90aG9tLWNvbXBvbmVudHMvdGhvbS1jb21wb25lbnRzXCIsXG5cdFx0XCJ3ZWJwYWNrL3NoYXJpbmcvY29uc3VtZS9kZWZhdWx0L3JlYWN0LWhvb2stZm9ybS9yZWFjdC1ob29rLWZvcm1cIlxuXHRdLFxuXHRcInNyY19ib290c3RyYXBfdHN4XCI6IFtcblx0XHRcIndlYnBhY2svc2hhcmluZy9jb25zdW1lL2RlZmF1bHQvcmVhY3QtZG9tL3JlYWN0LWRvbVwiXG5cdF1cbn07XG5fX3dlYnBhY2tfcmVxdWlyZV9fLmYuY29uc3VtZXMgPSAoY2h1bmtJZCwgcHJvbWlzZXMpID0+IHtcblx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGNodW5rTWFwcGluZywgY2h1bmtJZCkpIHtcblx0XHRjaHVua01hcHBpbmdbY2h1bmtJZF0uZm9yRWFjaCgoaWQpID0+IHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRNb2R1bGVzLCBpZCkpIHJldHVybiBwcm9taXNlcy5wdXNoKGluc3RhbGxlZE1vZHVsZXNbaWRdKTtcblx0XHRcdHZhciBvbkZhY3RvcnkgPSAoZmFjdG9yeSkgPT4ge1xuXHRcdFx0XHRpbnN0YWxsZWRNb2R1bGVzW2lkXSA9IDA7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVtpZF0gPSAobW9kdWxlKSA9PiB7XG5cdFx0XHRcdFx0ZGVsZXRlIF9fd2VicGFja19yZXF1aXJlX18uY1tpZF07XG5cdFx0XHRcdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0XHR2YXIgb25FcnJvciA9IChlcnJvcikgPT4ge1xuXHRcdFx0XHRkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1tpZF07XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVtpZF0gPSAobW9kdWxlKSA9PiB7XG5cdFx0XHRcdFx0ZGVsZXRlIF9fd2VicGFja19yZXF1aXJlX18uY1tpZF07XG5cdFx0XHRcdFx0dGhyb3cgZXJyb3I7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0XHR0cnkge1xuXHRcdFx0XHR2YXIgcHJvbWlzZSA9IG1vZHVsZVRvSGFuZGxlck1hcHBpbmdbaWRdKCk7XG5cdFx0XHRcdGlmKHByb21pc2UudGhlbikge1xuXHRcdFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkTW9kdWxlc1tpZF0gPSBwcm9taXNlLnRoZW4ob25GYWN0b3J5KVsnY2F0Y2gnXShvbkVycm9yKSk7XG5cdFx0XHRcdH0gZWxzZSBvbkZhY3RvcnkocHJvbWlzZSk7XG5cdFx0XHR9IGNhdGNoKGUpIHsgb25FcnJvcihlKTsgfVxuXHRcdH0pO1xuXHR9XG59IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5mLmogPSAoY2h1bmtJZCwgcHJvbWlzZXMpID0+IHtcblx0XHQvLyBKU09OUCBjaHVuayBsb2FkaW5nIGZvciBqYXZhc2NyaXB0XG5cdFx0dmFyIGluc3RhbGxlZENodW5rRGF0YSA9IF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpID8gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdIDogdW5kZWZpbmVkO1xuXHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSAhPT0gMCkgeyAvLyAwIG1lYW5zIFwiYWxyZWFkeSBpbnN0YWxsZWRcIi5cblxuXHRcdFx0Ly8gYSBQcm9taXNlIG1lYW5zIFwiY3VycmVudGx5IGxvYWRpbmdcIi5cblx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSkge1xuXHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZighL153ZWJwYWNrX3NoYXJpbmdfY29uc3VtZV9kZWZhdWx0XyhyZWFjdF9yZWFjdHxzaGFyZWQpJC8udGVzdChjaHVua0lkKSkge1xuXHRcdFx0XHRcdC8vIHNldHVwIFByb21pc2UgaW4gY2h1bmsgY2FjaGVcblx0XHRcdFx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IChpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSBbcmVzb2x2ZSwgcmVqZWN0XSkpO1xuXHRcdFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ2h1bmtEYXRhWzJdID0gcHJvbWlzZSk7XG5cblx0XHRcdFx0XHQvLyBzdGFydCBjaHVuayBsb2FkaW5nXG5cdFx0XHRcdFx0dmFyIHVybCA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIF9fd2VicGFja19yZXF1aXJlX18udShjaHVua0lkKTtcblx0XHRcdFx0XHQvLyBjcmVhdGUgZXJyb3IgYmVmb3JlIHN0YWNrIHVud291bmQgdG8gZ2V0IHVzZWZ1bCBzdGFja3RyYWNlIGxhdGVyXG5cdFx0XHRcdFx0dmFyIGVycm9yID0gbmV3IEVycm9yKCk7XG5cdFx0XHRcdFx0dmFyIGxvYWRpbmdFbmRlZCA9IChldmVudCkgPT4ge1xuXHRcdFx0XHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkpIHtcblx0XHRcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuXHRcdFx0XHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgIT09IDApIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IHVuZGVmaW5lZDtcblx0XHRcdFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhKSB7XG5cdFx0XHRcdFx0XHRcdFx0dmFyIGVycm9yVHlwZSA9IGV2ZW50ICYmIChldmVudC50eXBlID09PSAnbG9hZCcgPyAnbWlzc2luZycgOiBldmVudC50eXBlKTtcblx0XHRcdFx0XHRcdFx0XHR2YXIgcmVhbFNyYyA9IGV2ZW50ICYmIGV2ZW50LnRhcmdldCAmJiBldmVudC50YXJnZXQuc3JjO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLm1lc3NhZ2UgPSAnTG9hZGluZyBjaHVuayAnICsgY2h1bmtJZCArICcgZmFpbGVkLlxcbignICsgZXJyb3JUeXBlICsgJzogJyArIHJlYWxTcmMgKyAnKSc7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IubmFtZSA9ICdDaHVua0xvYWRFcnJvcic7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IudHlwZSA9IGVycm9yVHlwZTtcblx0XHRcdFx0XHRcdFx0XHRlcnJvci5yZXF1ZXN0ID0gcmVhbFNyYztcblx0XHRcdFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua0RhdGFbMV0oZXJyb3IpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmwodXJsLCBsb2FkaW5nRW5kZWQsIFwiY2h1bmstXCIgKyBjaHVua0lkLCBjaHVua0lkKTtcblx0XHRcdFx0fSBlbHNlIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdFx0XHR9XG5cdFx0fVxufTtcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblxufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua2xvZ2luXCJdID0gc2VsZltcIndlYnBhY2tDaHVua2xvZ2luXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBtb2R1bGUgY2FjaGUgYXJlIHVzZWQgc28gZW50cnkgaW5saW5pbmcgaXMgZGlzYWJsZWRcbi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXgudHN4XCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9