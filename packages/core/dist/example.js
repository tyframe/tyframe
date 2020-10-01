/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/core/abstract-application.ts":
/*!******************************************!*\
  !*** ./src/core/abstract-application.ts ***!
  \******************************************/
/*! exports provided: AbstractApplication */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractApplication", function() { return AbstractApplication; });
var AbstractApplication = /** @class */ (function () {
    function AbstractApplication(services, handler) {
        this.services = services;
        this.handler = handler;
    }
    return AbstractApplication;
}());



/***/ }),

/***/ "./src/decorator/application.ts":
/*!**************************************!*\
  !*** ./src/decorator/application.ts ***!
  \**************************************/
/*! exports provided: Application */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Application", function() { return Application; });
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Application = function (config) {
    return function (target) {
        return /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.services = config.services.map(function (service) { return new service(); });
                _this.handler = config.handler.map(function (handler) {
                    var instance = new handler();
                    instance.services = _this.services;
                    instance.config.forEach(function (configEntry) {
                        if (typeof configEntry.selector === 'string') {
                            var elements = document.querySelectorAll(configEntry.selector);
                            elements.forEach(function (element) {
                                return configEntry.types.forEach(function (type) { return element.addEventListener(type, instance.handle); });
                            });
                            return;
                        }
                        if ('addEventListener' in configEntry.selector) {
                            var selector_1 = configEntry.selector;
                            configEntry.types.forEach(function (type) { return selector_1.addEventListener(type, instance.handle.bind(instance)); });
                        }
                    });
                    return instance;
                });
                return _this;
            }
            return class_1;
        }(target));
    };
};


/***/ }),

/***/ "./src/handler/abstract-handler.ts":
/*!*****************************************!*\
  !*** ./src/handler/abstract-handler.ts ***!
  \*****************************************/
/*! exports provided: AbstractHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractHandler", function() { return AbstractHandler; });
var AbstractHandler = /** @class */ (function () {
    function AbstractHandler() {
        this.services = [];
        this.config = [];
    }
    AbstractHandler.prototype.getServiceByType = function (type) {
        return this.services.filter(function (service) { return service instanceof type; })[0];
    };
    return AbstractHandler;
}());



/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: AbstractApplication, Application, AbstractHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_abstract_application__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/abstract-application */ "./src/core/abstract-application.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AbstractApplication", function() { return _core_abstract_application__WEBPACK_IMPORTED_MODULE_0__["AbstractApplication"]; });

/* harmony import */ var _decorator_application__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./decorator/application */ "./src/decorator/application.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Application", function() { return _decorator_application__WEBPACK_IMPORTED_MODULE_1__["Application"]; });

/* harmony import */ var _handler_abstract_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handler/abstract-handler */ "./src/handler/abstract-handler.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AbstractHandler", function() { return _handler_abstract_handler__WEBPACK_IMPORTED_MODULE_2__["AbstractHandler"]; });

/* harmony import */ var _interface_application_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interface/application-config */ "./src/interface/application-config.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _interface_event_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./interface/event-config */ "./src/interface/event-config.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _interface_handler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./interface/handler */ "./src/interface/handler.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _interface_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./interface/service */ "./src/interface/service.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _type_constructor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./type/constructor */ "./src/type/constructor.ts");
/* empty/unused harmony star reexport */









/***/ }),

/***/ "./src/interface/application-config.ts":
/*!*********************************************!*\
  !*** ./src/interface/application-config.ts ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./src/interface/event-config.ts":
/*!***************************************!*\
  !*** ./src/interface/event-config.ts ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./src/interface/handler.ts":
/*!**********************************!*\
  !*** ./src/interface/handler.ts ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./src/interface/service.ts":
/*!**********************************!*\
  !*** ./src/interface/service.ts ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./src/type/constructor.ts":
/*!*********************************!*\
  !*** ./src/type/constructor.ts ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvYWJzdHJhY3QtYXBwbGljYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RlY29yYXRvci9hcHBsaWNhdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaGFuZGxlci9hYnN0cmFjdC1oYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDL0VBO0FBQUE7QUFBQTtJQUlJLDZCQUFZLFFBQW1CLEVBQUUsT0FBa0I7UUFDL0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDM0IsQ0FBQztJQUNMLDBCQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMTSxJQUFNLFdBQVcsR0FBRyxVQUFDLE1BQXlCO0lBQ2pELE9BQU8sVUFBd0IsTUFBUztRQUNwQztZQUFxQiwyQkFBTTtZQUFwQjtnQkFBQSxxRUF1Qk47Z0JBdEJHLGNBQVEsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxVQUFDLE9BQW9DLElBQWMsV0FBSSxPQUFPLEVBQUUsRUFBYixDQUFhLENBQUMsQ0FBQztnQkFDakcsYUFBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQUMsT0FBb0M7b0JBQzlELElBQU0sUUFBUSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7b0JBQy9CLFFBQVEsQ0FBQyxRQUFRLEdBQUcsS0FBSSxDQUFDLFFBQVEsQ0FBQztvQkFFbEMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBQyxXQUF3Qjt3QkFDN0MsSUFBSSxPQUFPLFdBQVcsQ0FBQyxRQUFRLEtBQUssUUFBUSxFQUFFOzRCQUMxQyxJQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDOzRCQUNqRSxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUMsT0FBTztnQ0FDckIsa0JBQVcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBSSxJQUFLLGNBQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUEvQyxDQUErQyxDQUFDOzRCQUFwRixDQUFvRixDQUN2RixDQUFDOzRCQUNGLE9BQU87eUJBQ1Y7d0JBRUQsSUFBSSxrQkFBa0IsSUFBSSxXQUFXLENBQUMsUUFBUSxFQUFFOzRCQUM1QyxJQUFNLFVBQVEsR0FBRyxXQUFXLENBQUMsUUFBdUIsQ0FBQzs0QkFDckQsV0FBVyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJLElBQUssaUJBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBL0QsQ0FBK0QsQ0FBQyxDQUFDO3lCQUN4RztvQkFDTCxDQUFDLENBQUMsQ0FBQztvQkFFSCxPQUFPLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxDQUFDLENBQUM7O1lBQ1AsQ0FBQztZQUFELGNBQUM7UUFBRCxDQUFDLENBdkJvQixNQUFNLEdBdUIxQjtJQUNMLENBQUM7QUFDTCxDQUFDOzs7Ozs7Ozs7Ozs7O0FDOUJEO0FBQUE7QUFBQTtJQUFBO1FBQ0ksYUFBUSxHQUFjLEVBQUUsQ0FBQztRQUN6QixXQUFNLEdBQWtCLEVBQUUsQ0FBQztJQU8vQixDQUFDO0lBSEcsMENBQWdCLEdBQWhCLFVBQWlCLElBQWM7UUFDM0IsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFDLE9BQWdCLElBQUssY0FBTyxZQUFZLElBQUksRUFBdkIsQ0FBdUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xGLENBQUM7SUFDTCxzQkFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7O0FDWkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0NBQTRDO0FBRUo7QUFFRztBQUVJO0FBQ047QUFDTDtBQUNBO0FBRUQiLCJmaWxlIjoiZXhhbXBsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiaW1wb3J0IHsgU2VydmljZSB9IGZyb20gJy4uL2ludGVyZmFjZS9TZXJ2aWNlJztcbmltcG9ydCB7IEhhbmRsZXIgfSBmcm9tICcuLy4uL2ludGVyZmFjZS9oYW5kbGVyJztcblxuZXhwb3J0IGNsYXNzIEFic3RyYWN0QXBwbGljYXRpb24ge1xuICAgIHByb3RlY3RlZCBzZXJ2aWNlczogU2VydmljZVtdXG4gICAgcHJvdGVjdGVkIGhhbmRsZXI6IEhhbmRsZXJbXVxuXG4gICAgY29uc3RydWN0b3Ioc2VydmljZXM6IFNlcnZpY2VbXSwgaGFuZGxlcjogSGFuZGxlcltdKSB7XG4gICAgICAgIHRoaXMuc2VydmljZXMgPSBzZXJ2aWNlcztcbiAgICAgICAgdGhpcy5oYW5kbGVyID0gaGFuZGxlcjtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBFdmVudENvbmZpZyB9IGZyb20gJy4vLi4vaW50ZXJmYWNlL2V2ZW50LWNvbmZpZyc7XG5pbXBvcnQgeyBIYW5kbGVyIH0gZnJvbSAnLi8uLi9pbnRlcmZhY2UvaGFuZGxlcic7XG5pbXBvcnQgeyBjb25zdHJ1Y3RvciwgZ2VuZXJpY0NvbnN0cnVjdG9yIH0gZnJvbSBcIi4uL3R5cGUvY29uc3RydWN0b3JcIjtcbmltcG9ydCB7IEFwcGxpY2F0aW9uQ29uZmlnIH0gZnJvbSBcIi4uL2ludGVyZmFjZS9hcHBsaWNhdGlvbi1jb25maWdcIjtcbmltcG9ydCB7IFNlcnZpY2UgfSBmcm9tICcuLi9pbnRlcmZhY2UvU2VydmljZSc7XG5cbmV4cG9ydCBjb25zdCBBcHBsaWNhdGlvbiA9IChjb25maWc6IEFwcGxpY2F0aW9uQ29uZmlnKTogKDxUPih0YXJnZXQ6IGdlbmVyaWNDb25zdHJ1Y3RvcjxUPikgPT4gdm9pZCkgPT4ge1xuICAgIHJldHVybiA8VCBleHRlbmRzIGNvbnN0cnVjdG9yPih0YXJnZXQ6IFQpID0+IHtcbiAgICAgICAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgdGFyZ2V0IHtcbiAgICAgICAgICAgIHNlcnZpY2VzID0gY29uZmlnLnNlcnZpY2VzLm1hcCgoc2VydmljZTogZ2VuZXJpY0NvbnN0cnVjdG9yPFNlcnZpY2U+KTogU2VydmljZSA9PiBuZXcgc2VydmljZSgpKTtcbiAgICAgICAgICAgIGhhbmRsZXIgPSBjb25maWcuaGFuZGxlci5tYXAoKGhhbmRsZXI6IGdlbmVyaWNDb25zdHJ1Y3RvcjxIYW5kbGVyPik6IEhhbmRsZXIgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IGhhbmRsZXIoKTtcbiAgICAgICAgICAgICAgICBpbnN0YW5jZS5zZXJ2aWNlcyA9IHRoaXMuc2VydmljZXM7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaW5zdGFuY2UuY29uZmlnLmZvckVhY2goKGNvbmZpZ0VudHJ5OiBFdmVudENvbmZpZyk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbmZpZ0VudHJ5LnNlbGVjdG9yID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGNvbmZpZ0VudHJ5LnNlbGVjdG9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnRW50cnkudHlwZXMuZm9yRWFjaCgodHlwZSkgPT4gZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGluc3RhbmNlLmhhbmRsZSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICgnYWRkRXZlbnRMaXN0ZW5lcicgaW4gY29uZmlnRW50cnkuc2VsZWN0b3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdG9yID0gY29uZmlnRW50cnkuc2VsZWN0b3IgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25maWdFbnRyeS50eXBlcy5mb3JFYWNoKCh0eXBlKSA9PiBzZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGluc3RhbmNlLmhhbmRsZS5iaW5kKGluc3RhbmNlKSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7IEV2ZW50Q29uZmlnIH0gZnJvbSAnLi4vaW50ZXJmYWNlL2V2ZW50LWNvbmZpZyc7XG5pbXBvcnQgeyBTZXJ2aWNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlL1NlcnZpY2UnO1xuaW1wb3J0IHsgSGFuZGxlciB9IGZyb20gJy4uL2ludGVyZmFjZS9oYW5kbGVyJztcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdEhhbmRsZXIgaW1wbGVtZW50cyBIYW5kbGVyIHtcbiAgICBzZXJ2aWNlczogU2VydmljZVtdID0gW107XG4gICAgY29uZmlnOiBFdmVudENvbmZpZ1tdID0gW107XG5cbiAgICBhYnN0cmFjdCBoYW5kbGUoZXZlbnQ6IEV2ZW50KTogdm9pZFxuXG4gICAgZ2V0U2VydmljZUJ5VHlwZSh0eXBlOiBGdW5jdGlvbikge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXJ2aWNlcy5maWx0ZXIoKHNlcnZpY2U6IFNlcnZpY2UpID0+IHNlcnZpY2UgaW5zdGFuY2VvZiB0eXBlKVswXTtcbiAgICB9XG59XG4iLCJleHBvcnQgKiBmcm9tICcuL2NvcmUvYWJzdHJhY3QtYXBwbGljYXRpb24nO1xuXG5leHBvcnQgKiBmcm9tICcuL2RlY29yYXRvci9hcHBsaWNhdGlvbic7XG5cbmV4cG9ydCAqIGZyb20gJy4vaGFuZGxlci9hYnN0cmFjdC1oYW5kbGVyJztcblxuZXhwb3J0ICogZnJvbSAnLi9pbnRlcmZhY2UvYXBwbGljYXRpb24tY29uZmlnJztcbmV4cG9ydCAqIGZyb20gJy4vaW50ZXJmYWNlL2V2ZW50LWNvbmZpZyc7XG5leHBvcnQgKiBmcm9tICcuL2ludGVyZmFjZS9oYW5kbGVyJztcbmV4cG9ydCAqIGZyb20gJy4vaW50ZXJmYWNlL3NlcnZpY2UnO1xuXG5leHBvcnQgKiBmcm9tICcuL3R5cGUvY29uc3RydWN0b3InO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==