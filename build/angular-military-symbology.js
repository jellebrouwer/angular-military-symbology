(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("angular"), require("milsymbol"));
	else if(typeof define === 'function' && define.amd)
		define("angular-military-symbology", ["angular", "milsymbol"], factory);
	else if(typeof exports === 'object')
		exports["angular-military-symbology"] = factory(require("angular"), require("milsymbol"));
	else
		root["angular-military-symbology"] = factory(root["angular"], root["milsymbol"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_4__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(6);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var angular_1 = __webpack_require__(2);
	exports.ngMilitarySymbology = angular_1.module('ngMilitarySymbology', []);
	// Components
	__webpack_require__(3);
	__webpack_require__(5);


/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var angular = __webpack_require__(2);
	var milSymbols_module_1 = __webpack_require__(1);
	var MS = __webpack_require__(4);
	var MilSymbolController = (function () {
	    function MilSymbolController() {
	    }
	    return MilSymbolController;
	}());
	function milSymbolDirective() {
	    return {
	        restrict: 'E',
	        bindToController: {
	            sidc: '@',
	            symOptions: '='
	        },
	        controller: MilSymbolController,
	        controllerAs: 'milSymbolCtrl',
	        link: function (scope, element, attrs, ctrl) {
	            element.addClass('mil-symbol');
	            scope.$watch(function () {
	                return ctrl.sidc;
	            }, function (newValue) {
	                if (newValue) {
	                    renderSymbol();
	                }
	                else {
	                    removeElement(getSVGs());
	                }
	            });
	            scope.$watch(function () {
	                return ctrl.symOptions;
	            }, function (newValue) {
	                if (newValue) {
	                    ctrl.symOptions.size = ctrl.symOptions.size || 50;
	                    renderSymbol();
	                }
	            }, true);
	            function renderSymbol() {
	                if (ctrl.sidc) {
	                    var symbol = new MS.symbol(ctrl.sidc, ctrl.symOptions).getMarker(), symbolElement = symbol.asSVG();
	                    if (getSVGs().length > 0) {
	                        removeElement(getSVGs());
	                    }
	                    angular.element(element).append(symbolElement);
	                }
	            }
	            function removeElement(el) {
	                el.remove();
	            }
	            function getSVGs() {
	                return angular.element(element).find('svg');
	            }
	        }
	    };
	}
	milSymbols_module_1.ngMilitarySymbology.directive('milSymbol', milSymbolDirective);


/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var milSymbols_module_1 = __webpack_require__(1);
	var MS = __webpack_require__(4);
	var MilSymbolProvider = (function () {
	    function MilSymbolProvider() {
	    }
	    MilSymbolProvider.prototype.setGlobals = function (globals) {
	        if (this.isValid(globals)) {
	            Object.keys(globals).forEach(function (method) {
	                MS[method].apply(MS, globals[method]);
	            });
	        }
	        else {
	            console.warn('MSProvider.setGlobals expects an Object');
	        }
	    };
	    MilSymbolProvider.prototype.$get = function () {
	        return MS;
	    };
	    MilSymbolProvider.prototype.isValid = function (obj) {
	        return !!obj && Object.keys(obj).length > 0 && obj.constructor === Object;
	    };
	    return MilSymbolProvider;
	}());
	exports.MilSymbolProvider = MilSymbolProvider;
	milSymbols_module_1.ngMilitarySymbology.provider('MS', MilSymbolProvider);


/***/ },
/* 6 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ])
});
;