(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("angular"), require("milsymbol"));
	else if(typeof define === 'function' && define.amd)
		define("angular-military-symbology", ["angular", "milsymbol"], factory);
	else if(typeof exports === 'object')
		exports["angular-military-symbology"] = factory(require("angular"), require("milsymbol"));
	else
		root["angular-military-symbology"] = factory(root["angular"], root["milsymbol"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var angular = __webpack_require__(1);
exports.ngMilitarySymbology = angular.module('ngMilitarySymbology', []);
// Components
__webpack_require__(4);
__webpack_require__(5);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);
module.exports = __webpack_require__(6);


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var angular = __webpack_require__(1);
var milsymbol_1 = __webpack_require__(2);
var milSymbols_module_1 = __webpack_require__(0);
var MilSymbolController = /** @class */ (function () {
    function MilSymbolController() {
    }
    return MilSymbolController;
}());
function milSymbolDirective() {
    return {
        restrict: 'E',
        bindToController: {
            sidc: '@',
            symOptions: '<'
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
                    var symbol = new milsymbol_1.Symbol(ctrl.sidc, ctrl.symOptions);
                    var symbolElement = symbol.asSVG();
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


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ms = __webpack_require__(2);
var milSymbols_module_1 = __webpack_require__(0);
var MilSymbolProvider = /** @class */ (function () {
    function MilSymbolProvider() {
    }
    MilSymbolProvider.prototype.setGlobals = function (globals) {
        if (this.isValid(globals)) {
            Object.keys(globals).forEach(function (method) {
                ms[method].apply(ms, globals[method]);
            });
        }
        else {
            console.warn('MSProvider.setGlobals expects an Object');
        }
    };
    MilSymbolProvider.prototype.$get = function () {
        return ms;
    };
    MilSymbolProvider.prototype.isValid = function (obj) {
        return !!obj && Object.keys(obj).length > 0 && obj.constructor === Object;
    };
    return MilSymbolProvider;
}());
exports.MilSymbolProvider = MilSymbolProvider;
milSymbols_module_1.ngMilitarySymbology.provider('MS', MilSymbolProvider);


/***/ }),
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
});