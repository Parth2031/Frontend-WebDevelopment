/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + chunkId + ".Daily.js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "bundled scripts/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/Daily.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/lodash/lodash.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/lodash.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvd2VicGFjay9idWlsZGluL2dsb2JhbC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanM/Y2QwMCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/webpack/buildin/global.js\n");

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(module) {\n\tif (!module.webpackPolyfill) {\n\t\tmodule.deprecate = function() {};\n\t\tmodule.paths = [];\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvd2VicGFjay9idWlsZGluL21vZHVsZS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanM/Y2VkMiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHRpZiAoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/webpack/buildin/module.js\n");

/***/ }),

/***/ "./src/App/ProjectItem.js":
/*!********************************!*\
  !*** ./src/App/ProjectItem.js ***!
  \********************************/
/*! exports provided: ProjectItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProjectItem\", function() { return ProjectItem; });\n/* harmony import */ var _Utility_DOMHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Utility/DOMHelper */ \"./src/Utility/DOMHelper.js\");\n// TODO:: \"import\" keyword Syntax -> import {name of function,class,etc which is to be imported} from 'path of file';\n// TODO:: \"export\" keyword Syntax -> export \"infront of item to be exported\"\n\n\n// import { InfoIcon } from './InfoIcon';\n\nconsole.log('Project Item created!');\n\nclass ProjectItem\n{\n  constructor(id, updateProjectListsFunction, type)\n  {\n    this.id = id;\n    this.updateProjectListsHandler = updateProjectListsFunction;\n    this.hasActiveInfoIcon = false;\n    this.connectMoreInfoButton();\n    this.connectSwitchButton(type);\n    this.connectDrag();\n  }\n\n  showMoreInfoHandler()\n  {\n    if (this.hasActiveInfoIcon) {\n      return;\n    }\n   \n    const projectElement = document.getElementById(this.id);\n    const infoIconText = projectElement.dataset.extraInfo;\n   \n    // const infoIcon = new InfoIcon( () => {\n    //     this.hasActiveInfoIcon = false;\n    //   },\n    //   infoIconText,\n    //   this.id\n    // );\n\n    // infoIcon.attach();\n    // this.hasActiveInfoIcon = true;\n\n    // * NOTE - \n    /*\n     ! import(path of file) is a function which is based on Promise Built-In Object and is used for dynamically calling a import file \n     ! only when needed rather than loading the whole file at the start of program loading. \n     ? It helps us to save the memory space of not loading the all file rather than only needed files are loaded.\n     */\n\n    __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./InfoIcon */ \"./src/App/InfoIcon.js\")).then( module =>\n    {\n      const infoIcon = new module.InfoIcon( () => {\n          this.hasActiveInfoIcon = false;\n        },\n        infoIconText,\n        this.id\n      );\n\n      infoIcon.attach();\n      this.hasActiveInfoIcon = true;\n    });\n  }\n\n  connectDrag()\n  {\n    const item = document.getElementById(this.id);\n  \n    item.addEventListener('dragstart', event =>\n    {\n      // ! dataTranfer is part of the Data Attributes Functionality Property and it has it's own methods as well in JS.\n\n      event.dataTransfer.setData('text/plain', this.id);\n      event.dataTransfer.effectAllowed = 'move';\n    });\n\n    item.addEventListener('dragend', event => {\n      console.log(event);\n    });\n  }\n\n  connectMoreInfoButton()\n  {\n    const projectItemElement = document.getElementById(this.id);\n    const moreInfoBtn = projectItemElement.querySelector('button:first-of-type');\n  \n    moreInfoBtn.addEventListener('click', this.showMoreInfoHandler.bind(this));\n  }\n\n  connectSwitchButton(type)\n  {\n    const projectItemElement = document.getElementById(this.id);\n    let switchBtn = projectItemElement.querySelector('button:last-of-type');\n  \n    switchBtn = _Utility_DOMHelper__WEBPACK_IMPORTED_MODULE_0__[\"DOMHelper\"].clearEventListeners(switchBtn);\n  \n    switchBtn.textContent = type === 'active' ? 'Finish' : 'Activate';\n  \n    switchBtn.addEventListener('click',this.updateProjectListsHandler.bind(null, this.id));\n  }\n\n  update(updateProjectListsFn, type)\n  {\n    this.updateProjectListsHandler = updateProjectListsFn;\n    this.connectSwitchButton(type);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQXBwL1Byb2plY3RJdGVtLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC9Qcm9qZWN0SXRlbS5qcz8yZTYwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRPRE86OiBcImltcG9ydFwiIGtleXdvcmQgU3ludGF4IC0+IGltcG9ydCB7bmFtZSBvZiBmdW5jdGlvbixjbGFzcyxldGMgd2hpY2ggaXMgdG8gYmUgaW1wb3J0ZWR9IGZyb20gJ3BhdGggb2YgZmlsZSc7XG4vLyBUT0RPOjogXCJleHBvcnRcIiBrZXl3b3JkIFN5bnRheCAtPiBleHBvcnQgXCJpbmZyb250IG9mIGl0ZW0gdG8gYmUgZXhwb3J0ZWRcIlxuXG5pbXBvcnQgeyBET01IZWxwZXIgfSBmcm9tICcuLi9VdGlsaXR5L0RPTUhlbHBlcic7XG4vLyBpbXBvcnQgeyBJbmZvSWNvbiB9IGZyb20gJy4vSW5mb0ljb24nO1xuXG5jb25zb2xlLmxvZygnUHJvamVjdCBJdGVtIGNyZWF0ZWQhJyk7XG5cbmV4cG9ydCBjbGFzcyBQcm9qZWN0SXRlbVxue1xuICBjb25zdHJ1Y3RvcihpZCwgdXBkYXRlUHJvamVjdExpc3RzRnVuY3Rpb24sIHR5cGUpXG4gIHtcbiAgICB0aGlzLmlkID0gaWQ7XG4gICAgdGhpcy51cGRhdGVQcm9qZWN0TGlzdHNIYW5kbGVyID0gdXBkYXRlUHJvamVjdExpc3RzRnVuY3Rpb247XG4gICAgdGhpcy5oYXNBY3RpdmVJbmZvSWNvbiA9IGZhbHNlO1xuICAgIHRoaXMuY29ubmVjdE1vcmVJbmZvQnV0dG9uKCk7XG4gICAgdGhpcy5jb25uZWN0U3dpdGNoQnV0dG9uKHR5cGUpO1xuICAgIHRoaXMuY29ubmVjdERyYWcoKTtcbiAgfVxuXG4gIHNob3dNb3JlSW5mb0hhbmRsZXIoKVxuICB7XG4gICAgaWYgKHRoaXMuaGFzQWN0aXZlSW5mb0ljb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICBcbiAgICBjb25zdCBwcm9qZWN0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpO1xuICAgIGNvbnN0IGluZm9JY29uVGV4dCA9IHByb2plY3RFbGVtZW50LmRhdGFzZXQuZXh0cmFJbmZvO1xuICAgXG4gICAgLy8gY29uc3QgaW5mb0ljb24gPSBuZXcgSW5mb0ljb24oICgpID0+IHtcbiAgICAvLyAgICAgdGhpcy5oYXNBY3RpdmVJbmZvSWNvbiA9IGZhbHNlO1xuICAgIC8vICAgfSxcbiAgICAvLyAgIGluZm9JY29uVGV4dCxcbiAgICAvLyAgIHRoaXMuaWRcbiAgICAvLyApO1xuXG4gICAgLy8gaW5mb0ljb24uYXR0YWNoKCk7XG4gICAgLy8gdGhpcy5oYXNBY3RpdmVJbmZvSWNvbiA9IHRydWU7XG5cbiAgICAvLyAqIE5PVEUgLSBcbiAgICAvKlxuICAgICAhIGltcG9ydChwYXRoIG9mIGZpbGUpIGlzIGEgZnVuY3Rpb24gd2hpY2ggaXMgYmFzZWQgb24gUHJvbWlzZSBCdWlsdC1JbiBPYmplY3QgYW5kIGlzIHVzZWQgZm9yIGR5bmFtaWNhbGx5IGNhbGxpbmcgYSBpbXBvcnQgZmlsZSBcbiAgICAgISBvbmx5IHdoZW4gbmVlZGVkIHJhdGhlciB0aGFuIGxvYWRpbmcgdGhlIHdob2xlIGZpbGUgYXQgdGhlIHN0YXJ0IG9mIHByb2dyYW0gbG9hZGluZy4gXG4gICAgID8gSXQgaGVscHMgdXMgdG8gc2F2ZSB0aGUgbWVtb3J5IHNwYWNlIG9mIG5vdCBsb2FkaW5nIHRoZSBhbGwgZmlsZSByYXRoZXIgdGhhbiBvbmx5IG5lZWRlZCBmaWxlcyBhcmUgbG9hZGVkLlxuICAgICAqL1xuXG4gICAgaW1wb3J0KCcuL0luZm9JY29uJykudGhlbiggbW9kdWxlID0+XG4gICAge1xuICAgICAgY29uc3QgaW5mb0ljb24gPSBuZXcgbW9kdWxlLkluZm9JY29uKCAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5oYXNBY3RpdmVJbmZvSWNvbiA9IGZhbHNlO1xuICAgICAgICB9LFxuICAgICAgICBpbmZvSWNvblRleHQsXG4gICAgICAgIHRoaXMuaWRcbiAgICAgICk7XG5cbiAgICAgIGluZm9JY29uLmF0dGFjaCgpO1xuICAgICAgdGhpcy5oYXNBY3RpdmVJbmZvSWNvbiA9IHRydWU7XG4gICAgfSk7XG4gIH1cblxuICBjb25uZWN0RHJhZygpXG4gIHtcbiAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCk7XG4gIFxuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgZXZlbnQgPT5cbiAgICB7XG4gICAgICAvLyAhIGRhdGFUcmFuZmVyIGlzIHBhcnQgb2YgdGhlIERhdGEgQXR0cmlidXRlcyBGdW5jdGlvbmFsaXR5IFByb3BlcnR5IGFuZCBpdCBoYXMgaXQncyBvd24gbWV0aG9kcyBhcyB3ZWxsIGluIEpTLlxuXG4gICAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YSgndGV4dC9wbGFpbicsIHRoaXMuaWQpO1xuICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLmVmZmVjdEFsbG93ZWQgPSAnbW92ZSc7XG4gICAgfSk7XG5cbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCBldmVudCA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhldmVudCk7XG4gICAgfSk7XG4gIH1cblxuICBjb25uZWN0TW9yZUluZm9CdXR0b24oKVxuICB7XG4gICAgY29uc3QgcHJvamVjdEl0ZW1FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCk7XG4gICAgY29uc3QgbW9yZUluZm9CdG4gPSBwcm9qZWN0SXRlbUVsZW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uOmZpcnN0LW9mLXR5cGUnKTtcbiAgXG4gICAgbW9yZUluZm9CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnNob3dNb3JlSW5mb0hhbmRsZXIuYmluZCh0aGlzKSk7XG4gIH1cblxuICBjb25uZWN0U3dpdGNoQnV0dG9uKHR5cGUpXG4gIHtcbiAgICBjb25zdCBwcm9qZWN0SXRlbUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkKTtcbiAgICBsZXQgc3dpdGNoQnRuID0gcHJvamVjdEl0ZW1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbjpsYXN0LW9mLXR5cGUnKTtcbiAgXG4gICAgc3dpdGNoQnRuID0gRE9NSGVscGVyLmNsZWFyRXZlbnRMaXN0ZW5lcnMoc3dpdGNoQnRuKTtcbiAgXG4gICAgc3dpdGNoQnRuLnRleHRDb250ZW50ID0gdHlwZSA9PT0gJ2FjdGl2ZScgPyAnRmluaXNoJyA6ICdBY3RpdmF0ZSc7XG4gIFxuICAgIHN3aXRjaEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsdGhpcy51cGRhdGVQcm9qZWN0TGlzdHNIYW5kbGVyLmJpbmQobnVsbCwgdGhpcy5pZCkpO1xuICB9XG5cbiAgdXBkYXRlKHVwZGF0ZVByb2plY3RMaXN0c0ZuLCB0eXBlKVxuICB7XG4gICAgdGhpcy51cGRhdGVQcm9qZWN0TGlzdHNIYW5kbGVyID0gdXBkYXRlUHJvamVjdExpc3RzRm47XG4gICAgdGhpcy5jb25uZWN0U3dpdGNoQnV0dG9uKHR5cGUpO1xuICB9XG59Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/App/ProjectItem.js\n");

/***/ }),

/***/ "./src/App/ProjectList.js":
/*!********************************!*\
  !*** ./src/App/ProjectList.js ***!
  \********************************/
/*! exports provided: ProjectList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProjectList\", function() { return ProjectList; });\n/* harmony import */ var _ProjectItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectItem */ \"./src/App/ProjectItem.js\");\n/* harmony import */ var _Utility_DOMHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Utility/DOMHelper */ \"./src/Utility/DOMHelper.js\");\n// TODO:: \"import\" keyword Syntax -> import {name of function,class,etc which is to be imported} from 'path of file';\n\n\n\n\n// ! \"*\" is used when we want to select all the exports from that choosen file.\n// ? \"as\" is used to change the name of selected file for the current file to be worked upon so to avoid clashing of same names in .... \n// ? .... exported and imported file\n\n// import * as DOMH from '../Utility/DOMHelper';\n\n// ! This example of ProjectItem is used to show that we cannot access this variable outside this file.\n// const ProjectItem = 'abc';\n\n// console.log(DEFAULT_VALUE);\n\nclass ProjectList\n{\n  constructor(type)\n  {\n    this.type = type;\n    const proItems = document.querySelectorAll(`#${type}-projects li`);\n    this.projects = [];\n    for (const proItem of proItems) {\n      this.projects.push(new _ProjectItem__WEBPACK_IMPORTED_MODULE_0__[\"ProjectItem\"](proItem.id, this.switchProject.bind(this), this.type));\n    }\n\n    console.log(this.projects);\n    this.connectDroppable();\n  }\n\n  connectDroppable()\n  {\n    console.log(globalThis);\n  \n    const list = document.querySelector(`#${this.type}-projects ul`);\n\n    // TODO:: In this, we are using Drag & Drop API as Events in Event Listeners.\n\n    list.addEventListener('dragenter', event =>\n    {\n      if (event.dataTransfer.types[0] === 'text/plain')\n      {\n        list.parentElement.classList.add('droppable');\n        event.preventDefault();\n      }\n    });\n\n    list.addEventListener('dragover', event =>\n    {\n      if (event.dataTransfer.types[0] === 'text/plain') {\n        event.preventDefault();\n      }\n    });\n\n    list.addEventListener('dragleave', event =>\n    {\n      if (event.relatedTarget.closest(`#${this.type}-projects ul`) !== list) {\n        list.parentElement.classList.remove('droppable');\n      }\n    });\n\n    list.addEventListener('drop', event =>\n    {\n      const projectId = event.dataTransfer.getData('text/plain');\n      if (this.projects.find(p => p.id === projectId)) {\n        return;\n      }\n      \n      document.getElementById(projectId).querySelector('button:last-of-type').click();\n      list.parentElement.classList.remove('droppable');\n    \n      // event.preventDefault();                    // ! <-- Not Required\n    });\n  }\n\n  setSwitchHandlerFunction(switchHandlerFunction) {\n    this.switchHandler = switchHandlerFunction;\n  }\n\n  addProject(project)\n  {\n    this.projects.push(project);\n  \n    // ! In this, DOMHelper becomes a object when imported from other file so we point towards it to access it's function.\n    _Utility_DOMHelper__WEBPACK_IMPORTED_MODULE_1__[\"DOMHelper\"].moveElement(project.id, `#${this.type}-projects ul`);\n  \n    // TODO: It is used when we are selecting at all imports from a file to which we have given a name,\"DOMHelp\" which also works as object. \n    // DOMHelp.moveElement(project.id, `#${this.type}-projects ul`);\n\n    project.update(this.switchProject.bind(this), this.type);\n  }\n\n  switchProject(projectId)\n  {\n    // const projectIndex = this.projects.findIndex(p => p.id === projectId);\n    // this.projects.splice(projectIndex, 1);\n\n    this.switchHandler(this.projects.find(p => p.id === projectId));\n    this.projects = this.projects.filter(p => p.id !== projectId);\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQXBwL1Byb2plY3RMaXN0LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC9Qcm9qZWN0TGlzdC5qcz8wZGNmIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRPRE86OiBcImltcG9ydFwiIGtleXdvcmQgU3ludGF4IC0+IGltcG9ydCB7bmFtZSBvZiBmdW5jdGlvbixjbGFzcyxldGMgd2hpY2ggaXMgdG8gYmUgaW1wb3J0ZWR9IGZyb20gJ3BhdGggb2YgZmlsZSc7XG5cbmltcG9ydCB7IFByb2plY3RJdGVtIGFzIFByb0l0ZW0gfSBmcm9tICcuL1Byb2plY3RJdGVtJztcbmltcG9ydCB7RE9NSGVscGVyfSBmcm9tICcuLi9VdGlsaXR5L0RPTUhlbHBlcidcblxuLy8gISBcIipcIiBpcyB1c2VkIHdoZW4gd2Ugd2FudCB0byBzZWxlY3QgYWxsIHRoZSBleHBvcnRzIGZyb20gdGhhdCBjaG9vc2VuIGZpbGUuXG4vLyA/IFwiYXNcIiBpcyB1c2VkIHRvIGNoYW5nZSB0aGUgbmFtZSBvZiBzZWxlY3RlZCBmaWxlIGZvciB0aGUgY3VycmVudCBmaWxlIHRvIGJlIHdvcmtlZCB1cG9uIHNvIHRvIGF2b2lkIGNsYXNoaW5nIG9mIHNhbWUgbmFtZXMgaW4gLi4uLiBcbi8vID8gLi4uLiBleHBvcnRlZCBhbmQgaW1wb3J0ZWQgZmlsZVxuXG4vLyBpbXBvcnQgKiBhcyBET01IIGZyb20gJy4uL1V0aWxpdHkvRE9NSGVscGVyJztcblxuLy8gISBUaGlzIGV4YW1wbGUgb2YgUHJvamVjdEl0ZW0gaXMgdXNlZCB0byBzaG93IHRoYXQgd2UgY2Fubm90IGFjY2VzcyB0aGlzIHZhcmlhYmxlIG91dHNpZGUgdGhpcyBmaWxlLlxuLy8gY29uc3QgUHJvamVjdEl0ZW0gPSAnYWJjJztcblxuLy8gY29uc29sZS5sb2coREVGQVVMVF9WQUxVRSk7XG5cbmV4cG9ydCBjbGFzcyBQcm9qZWN0TGlzdFxue1xuICBjb25zdHJ1Y3Rvcih0eXBlKVxuICB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICBjb25zdCBwcm9JdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYCMke3R5cGV9LXByb2plY3RzIGxpYCk7XG4gICAgdGhpcy5wcm9qZWN0cyA9IFtdO1xuICAgIGZvciAoY29uc3QgcHJvSXRlbSBvZiBwcm9JdGVtcykge1xuICAgICAgdGhpcy5wcm9qZWN0cy5wdXNoKG5ldyBQcm9JdGVtKHByb0l0ZW0uaWQsIHRoaXMuc3dpdGNoUHJvamVjdC5iaW5kKHRoaXMpLCB0aGlzLnR5cGUpKTtcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyh0aGlzLnByb2plY3RzKTtcbiAgICB0aGlzLmNvbm5lY3REcm9wcGFibGUoKTtcbiAgfVxuXG4gIGNvbm5lY3REcm9wcGFibGUoKVxuICB7XG4gICAgY29uc29sZS5sb2coZ2xvYmFsVGhpcyk7XG4gIFxuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHt0aGlzLnR5cGV9LXByb2plY3RzIHVsYCk7XG5cbiAgICAvLyBUT0RPOjogSW4gdGhpcywgd2UgYXJlIHVzaW5nIERyYWcgJiBEcm9wIEFQSSBhcyBFdmVudHMgaW4gRXZlbnQgTGlzdGVuZXJzLlxuXG4gICAgbGlzdC5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW50ZXInLCBldmVudCA9PlxuICAgIHtcbiAgICAgIGlmIChldmVudC5kYXRhVHJhbnNmZXIudHlwZXNbMF0gPT09ICd0ZXh0L3BsYWluJylcbiAgICAgIHtcbiAgICAgICAgbGlzdC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Ryb3BwYWJsZScpO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgbGlzdC5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIGV2ZW50ID0+XG4gICAge1xuICAgICAgaWYgKGV2ZW50LmRhdGFUcmFuc2Zlci50eXBlc1swXSA9PT0gJ3RleHQvcGxhaW4nKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBsaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdsZWF2ZScsIGV2ZW50ID0+XG4gICAge1xuICAgICAgaWYgKGV2ZW50LnJlbGF0ZWRUYXJnZXQuY2xvc2VzdChgIyR7dGhpcy50eXBlfS1wcm9qZWN0cyB1bGApICE9PSBsaXN0KSB7XG4gICAgICAgIGxpc3QucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkcm9wcGFibGUnKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGxpc3QuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIGV2ZW50ID0+XG4gICAge1xuICAgICAgY29uc3QgcHJvamVjdElkID0gZXZlbnQuZGF0YVRyYW5zZmVyLmdldERhdGEoJ3RleHQvcGxhaW4nKTtcbiAgICAgIGlmICh0aGlzLnByb2plY3RzLmZpbmQocCA9PiBwLmlkID09PSBwcm9qZWN0SWQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocHJvamVjdElkKS5xdWVyeVNlbGVjdG9yKCdidXR0b246bGFzdC1vZi10eXBlJykuY2xpY2soKTtcbiAgICAgIGxpc3QucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkcm9wcGFibGUnKTtcbiAgICBcbiAgICAgIC8vIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7ICAgICAgICAgICAgICAgICAgICAvLyAhIDwtLSBOb3QgUmVxdWlyZWRcbiAgICB9KTtcbiAgfVxuXG4gIHNldFN3aXRjaEhhbmRsZXJGdW5jdGlvbihzd2l0Y2hIYW5kbGVyRnVuY3Rpb24pIHtcbiAgICB0aGlzLnN3aXRjaEhhbmRsZXIgPSBzd2l0Y2hIYW5kbGVyRnVuY3Rpb247XG4gIH1cblxuICBhZGRQcm9qZWN0KHByb2plY3QpXG4gIHtcbiAgICB0aGlzLnByb2plY3RzLnB1c2gocHJvamVjdCk7XG4gIFxuICAgIC8vICEgSW4gdGhpcywgRE9NSGVscGVyIGJlY29tZXMgYSBvYmplY3Qgd2hlbiBpbXBvcnRlZCBmcm9tIG90aGVyIGZpbGUgc28gd2UgcG9pbnQgdG93YXJkcyBpdCB0byBhY2Nlc3MgaXQncyBmdW5jdGlvbi5cbiAgICBET01IZWxwZXIubW92ZUVsZW1lbnQocHJvamVjdC5pZCwgYCMke3RoaXMudHlwZX0tcHJvamVjdHMgdWxgKTtcbiAgXG4gICAgLy8gVE9ETzogSXQgaXMgdXNlZCB3aGVuIHdlIGFyZSBzZWxlY3RpbmcgYXQgYWxsIGltcG9ydHMgZnJvbSBhIGZpbGUgdG8gd2hpY2ggd2UgaGF2ZSBnaXZlbiBhIG5hbWUsXCJET01IZWxwXCIgd2hpY2ggYWxzbyB3b3JrcyBhcyBvYmplY3QuIFxuICAgIC8vIERPTUhlbHAubW92ZUVsZW1lbnQocHJvamVjdC5pZCwgYCMke3RoaXMudHlwZX0tcHJvamVjdHMgdWxgKTtcblxuICAgIHByb2plY3QudXBkYXRlKHRoaXMuc3dpdGNoUHJvamVjdC5iaW5kKHRoaXMpLCB0aGlzLnR5cGUpO1xuICB9XG5cbiAgc3dpdGNoUHJvamVjdChwcm9qZWN0SWQpXG4gIHtcbiAgICAvLyBjb25zdCBwcm9qZWN0SW5kZXggPSB0aGlzLnByb2plY3RzLmZpbmRJbmRleChwID0+IHAuaWQgPT09IHByb2plY3RJZCk7XG4gICAgLy8gdGhpcy5wcm9qZWN0cy5zcGxpY2UocHJvamVjdEluZGV4LCAxKTtcblxuICAgIHRoaXMuc3dpdGNoSGFuZGxlcih0aGlzLnByb2plY3RzLmZpbmQocCA9PiBwLmlkID09PSBwcm9qZWN0SWQpKTtcbiAgICB0aGlzLnByb2plY3RzID0gdGhpcy5wcm9qZWN0cy5maWx0ZXIocCA9PiBwLmlkICE9PSBwcm9qZWN0SWQpO1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/App/ProjectList.js\n");

/***/ }),

/***/ "./src/Daily.js":
/*!**********************!*\
  !*** ./src/Daily.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_ProjectList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App/ProjectList */ \"./src/App/ProjectList.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);\n// TODO:: Understanding Modular Javascript Project :-\r\n\r\n// ! \"import\" keyword Syntax -> import {name of function,class,etc which is to be imported} from 'path of file';\r\n\r\n\r\n// * NOTE - \"globalThis\" keyword is used instead of \"const\" when using modular javascript as globalThis help us to access any item from any file. \r\nglobalThis.DEFAULT_VALUE = 'MAX';\r\n\r\n// ? Using Third Party Packages which are third party library only but are installed as packages :\r\n\r\n\r\nconsole.log(lodash__WEBPACK_IMPORTED_MODULE_1__[\"difference\"]([2, 1], [2, 3]));\r\n\r\nclass App\r\n{\r\n  static init()\r\n  {\r\n    const activeProjectsList = new _App_ProjectList__WEBPACK_IMPORTED_MODULE_0__[\"ProjectList\"]('active');\r\n    const finishedProjectsList = new _App_ProjectList__WEBPACK_IMPORTED_MODULE_0__[\"ProjectList\"]('finished');\r\n    \r\n    activeProjectsList.setSwitchHandlerFunction(finishedProjectsList.addProject.bind(finishedProjectsList));\r\n    finishedProjectsList.setSwitchHandlerFunction(activeProjectsList.addProject.bind(activeProjectsList));\r\n  }\r\n\r\n  // ! In this function, we are Dynamically Loading Script using Event Listener when we want and not automatically is script loaded.\r\n\r\n  static loadScript()\r\n  {\r\n    const loadDynamicScript = document.createElement('script');\r\n    loadDynamicScript.src = 'src/Utility/Dynamic Script.js';\r\n    loadDynamicScript.defer = true;\r\n    document.head.append(loadDynamicScript);\r\n  }\r\n}\r\n\r\nApp.init();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvRGFpbHkuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvRGFpbHkuanM/NTg1NyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUT0RPOjogVW5kZXJzdGFuZGluZyBNb2R1bGFyIEphdmFzY3JpcHQgUHJvamVjdCA6LVxyXG5cclxuLy8gISBcImltcG9ydFwiIGtleXdvcmQgU3ludGF4IC0+IGltcG9ydCB7bmFtZSBvZiBmdW5jdGlvbixjbGFzcyxldGMgd2hpY2ggaXMgdG8gYmUgaW1wb3J0ZWR9IGZyb20gJ3BhdGggb2YgZmlsZSc7XHJcbmltcG9ydCB7IFByb2plY3RMaXN0IH0gZnJvbSAnLi9BcHAvUHJvamVjdExpc3QnO1xyXG5cclxuLy8gKiBOT1RFIC0gXCJnbG9iYWxUaGlzXCIga2V5d29yZCBpcyB1c2VkIGluc3RlYWQgb2YgXCJjb25zdFwiIHdoZW4gdXNpbmcgbW9kdWxhciBqYXZhc2NyaXB0IGFzIGdsb2JhbFRoaXMgaGVscCB1cyB0byBhY2Nlc3MgYW55IGl0ZW0gZnJvbSBhbnkgZmlsZS4gXHJcbmdsb2JhbFRoaXMuREVGQVVMVF9WQUxVRSA9ICdNQVgnO1xyXG5cclxuLy8gPyBVc2luZyBUaGlyZCBQYXJ0eSBQYWNrYWdlcyB3aGljaCBhcmUgdGhpcmQgcGFydHkgbGlicmFyeSBvbmx5IGJ1dCBhcmUgaW5zdGFsbGVkIGFzIHBhY2thZ2VzIDpcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5cclxuY29uc29sZS5sb2coXy5kaWZmZXJlbmNlKFsyLCAxXSwgWzIsIDNdKSk7XHJcblxyXG5jbGFzcyBBcHBcclxue1xyXG4gIHN0YXRpYyBpbml0KClcclxuICB7XHJcbiAgICBjb25zdCBhY3RpdmVQcm9qZWN0c0xpc3QgPSBuZXcgUHJvamVjdExpc3QoJ2FjdGl2ZScpO1xyXG4gICAgY29uc3QgZmluaXNoZWRQcm9qZWN0c0xpc3QgPSBuZXcgUHJvamVjdExpc3QoJ2ZpbmlzaGVkJyk7XHJcbiAgICBcclxuICAgIGFjdGl2ZVByb2plY3RzTGlzdC5zZXRTd2l0Y2hIYW5kbGVyRnVuY3Rpb24oZmluaXNoZWRQcm9qZWN0c0xpc3QuYWRkUHJvamVjdC5iaW5kKGZpbmlzaGVkUHJvamVjdHNMaXN0KSk7XHJcbiAgICBmaW5pc2hlZFByb2plY3RzTGlzdC5zZXRTd2l0Y2hIYW5kbGVyRnVuY3Rpb24oYWN0aXZlUHJvamVjdHNMaXN0LmFkZFByb2plY3QuYmluZChhY3RpdmVQcm9qZWN0c0xpc3QpKTtcclxuICB9XHJcblxyXG4gIC8vICEgSW4gdGhpcyBmdW5jdGlvbiwgd2UgYXJlIER5bmFtaWNhbGx5IExvYWRpbmcgU2NyaXB0IHVzaW5nIEV2ZW50IExpc3RlbmVyIHdoZW4gd2Ugd2FudCBhbmQgbm90IGF1dG9tYXRpY2FsbHkgaXMgc2NyaXB0IGxvYWRlZC5cclxuXHJcbiAgc3RhdGljIGxvYWRTY3JpcHQoKVxyXG4gIHtcclxuICAgIGNvbnN0IGxvYWREeW5hbWljU2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcbiAgICBsb2FkRHluYW1pY1NjcmlwdC5zcmMgPSAnc3JjL1V0aWxpdHkvRHluYW1pYyBTY3JpcHQuanMnO1xyXG4gICAgbG9hZER5bmFtaWNTY3JpcHQuZGVmZXIgPSB0cnVlO1xyXG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmQobG9hZER5bmFtaWNTY3JpcHQpO1xyXG4gIH1cclxufVxyXG5cclxuQXBwLmluaXQoKTtcclxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Daily.js\n");

/***/ }),

/***/ "./src/Utility/DOMHelper.js":
/*!**********************************!*\
  !*** ./src/Utility/DOMHelper.js ***!
  \**********************************/
/*! exports provided: DOMHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DOMHelper\", function() { return DOMHelper; });\nconsole.log('DOM Helper executing!');\n\nclass DOMHelper\n{\n  static clearEventListeners(element)\n  {\n    // ! Node.cloneNode(true) - It returns a duplicate of the node on which this method was called.\n    const clonedElement = element.cloneNode(true);\n\n    // ! ChildNode.replaceWith() - This method replaces this ChildNode in the children list of its parent with a set of Node or DOMString objects.\n    element.replaceWith(clonedElement);\n\n    return clonedElement;\n  }\n\n  static moveElement(elementId, newDestinationSelector)\n  {\n    const element = document.getElementById(elementId);\n    const destinationElement = document.querySelector(newDestinationSelector);\n  \n    destinationElement.append(element);\n\n    // ! The Element interface's scrollIntoView() method scrolls the element's parent container such that the element ....\n    // ! .... on which scrollIntoView() is called is visible to the user.\n    element.scrollIntoView({ behavior: 'smooth' });\n  }\n}\n\n// ? In this, the functions are exported and not the class so as to import them at when they are only needed in the Project.\n\n// export function clearEventListeners(element)\n// {\n//   const clonedElement = element.cloneNode(true);\n//   element.replaceWith(clonedElement);\n\n//   return clonedElement;\n// }\n\n// export function moveElement(elementId, newDestinationSelector)\n// {\n//   const element = document.getElementById(elementId);\n//   const destinationElement = document.querySelector(newDestinationSelector);\n//   destinationElement.append(element);\n\n//   element.scrollIntoView({ behavior: 'smooth' });\n// }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvVXRpbGl0eS9ET01IZWxwZXIuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvVXRpbGl0eS9ET01IZWxwZXIuanM/NTkyNiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zb2xlLmxvZygnRE9NIEhlbHBlciBleGVjdXRpbmchJyk7XG5cbmV4cG9ydCBjbGFzcyBET01IZWxwZXJcbntcbiAgc3RhdGljIGNsZWFyRXZlbnRMaXN0ZW5lcnMoZWxlbWVudClcbiAge1xuICAgIC8vICEgTm9kZS5jbG9uZU5vZGUodHJ1ZSkgLSBJdCByZXR1cm5zIGEgZHVwbGljYXRlIG9mIHRoZSBub2RlIG9uIHdoaWNoIHRoaXMgbWV0aG9kIHdhcyBjYWxsZWQuXG4gICAgY29uc3QgY2xvbmVkRWxlbWVudCA9IGVsZW1lbnQuY2xvbmVOb2RlKHRydWUpO1xuXG4gICAgLy8gISBDaGlsZE5vZGUucmVwbGFjZVdpdGgoKSAtIFRoaXMgbWV0aG9kIHJlcGxhY2VzIHRoaXMgQ2hpbGROb2RlIGluIHRoZSBjaGlsZHJlbiBsaXN0IG9mIGl0cyBwYXJlbnQgd2l0aCBhIHNldCBvZiBOb2RlIG9yIERPTVN0cmluZyBvYmplY3RzLlxuICAgIGVsZW1lbnQucmVwbGFjZVdpdGgoY2xvbmVkRWxlbWVudCk7XG5cbiAgICByZXR1cm4gY2xvbmVkRWxlbWVudDtcbiAgfVxuXG4gIHN0YXRpYyBtb3ZlRWxlbWVudChlbGVtZW50SWQsIG5ld0Rlc3RpbmF0aW9uU2VsZWN0b3IpXG4gIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudElkKTtcbiAgICBjb25zdCBkZXN0aW5hdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG5ld0Rlc3RpbmF0aW9uU2VsZWN0b3IpO1xuICBcbiAgICBkZXN0aW5hdGlvbkVsZW1lbnQuYXBwZW5kKGVsZW1lbnQpO1xuXG4gICAgLy8gISBUaGUgRWxlbWVudCBpbnRlcmZhY2UncyBzY3JvbGxJbnRvVmlldygpIG1ldGhvZCBzY3JvbGxzIHRoZSBlbGVtZW50J3MgcGFyZW50IGNvbnRhaW5lciBzdWNoIHRoYXQgdGhlIGVsZW1lbnQgLi4uLlxuICAgIC8vICEgLi4uLiBvbiB3aGljaCBzY3JvbGxJbnRvVmlldygpIGlzIGNhbGxlZCBpcyB2aXNpYmxlIHRvIHRoZSB1c2VyLlxuICAgIGVsZW1lbnQuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XG4gIH1cbn1cblxuLy8gPyBJbiB0aGlzLCB0aGUgZnVuY3Rpb25zIGFyZSBleHBvcnRlZCBhbmQgbm90IHRoZSBjbGFzcyBzbyBhcyB0byBpbXBvcnQgdGhlbSBhdCB3aGVuIHRoZXkgYXJlIG9ubHkgbmVlZGVkIGluIHRoZSBQcm9qZWN0LlxuXG4vLyBleHBvcnQgZnVuY3Rpb24gY2xlYXJFdmVudExpc3RlbmVycyhlbGVtZW50KVxuLy8ge1xuLy8gICBjb25zdCBjbG9uZWRFbGVtZW50ID0gZWxlbWVudC5jbG9uZU5vZGUodHJ1ZSk7XG4vLyAgIGVsZW1lbnQucmVwbGFjZVdpdGgoY2xvbmVkRWxlbWVudCk7XG5cbi8vICAgcmV0dXJuIGNsb25lZEVsZW1lbnQ7XG4vLyB9XG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBtb3ZlRWxlbWVudChlbGVtZW50SWQsIG5ld0Rlc3RpbmF0aW9uU2VsZWN0b3IpXG4vLyB7XG4vLyAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtZW50SWQpO1xuLy8gICBjb25zdCBkZXN0aW5hdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG5ld0Rlc3RpbmF0aW9uU2VsZWN0b3IpO1xuLy8gICBkZXN0aW5hdGlvbkVsZW1lbnQuYXBwZW5kKGVsZW1lbnQpO1xuXG4vLyAgIGVsZW1lbnQuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XG4vLyB9XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Utility/DOMHelper.js\n");

/***/ })

/******/ });