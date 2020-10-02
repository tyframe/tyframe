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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvYWJzdHJhY3QtYXBwbGljYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RlY29yYXRvci9hcHBsaWNhdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaGFuZGxlci9hYnN0cmFjdC1oYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDL0VBO0FBQUE7QUFBQTtJQUlJLDZCQUFZLFFBQW1CLEVBQUUsT0FBa0I7UUFDL0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDM0IsQ0FBQztJQUNMLDBCQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMTSxJQUFNLFdBQVcsR0FBRyxVQUFDLE1BQXlCO0lBQ2pELE9BQU8sVUFBd0IsTUFBUztRQUNwQztZQUFxQiwyQkFBTTtZQUFwQjtnQkFBQSxxRUF1Qk47Z0JBdEJHLGNBQVEsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxVQUFDLE9BQW9DLElBQWMsV0FBSSxPQUFPLEVBQUUsRUFBYixDQUFhLENBQUMsQ0FBQztnQkFDakcsYUFBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQUMsT0FBb0M7b0JBQzlELElBQU0sUUFBUSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7b0JBQy9CLFFBQVEsQ0FBQyxRQUFRLEdBQUcsS0FBSSxDQUFDLFFBQVEsQ0FBQztvQkFFbEMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBQyxXQUF3Qjt3QkFDN0MsSUFBSSxPQUFPLFdBQVcsQ0FBQyxRQUFRLEtBQUssUUFBUSxFQUFFOzRCQUMxQyxJQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDOzRCQUNqRSxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUMsT0FBTztnQ0FDckIsa0JBQVcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBSSxJQUFLLGNBQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUEvQyxDQUErQyxDQUFDOzRCQUFwRixDQUFvRixDQUN2RixDQUFDOzRCQUNGLE9BQU87eUJBQ1Y7d0JBRUQsSUFBSSxrQkFBa0IsSUFBSSxXQUFXLENBQUMsUUFBUSxFQUFFOzRCQUM1QyxJQUFNLFVBQVEsR0FBRyxXQUFXLENBQUMsUUFBdUIsQ0FBQzs0QkFDckQsV0FBVyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJLElBQUssaUJBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBL0QsQ0FBK0QsQ0FBQyxDQUFDO3lCQUN4RztvQkFDTCxDQUFDLENBQUMsQ0FBQztvQkFFSCxPQUFPLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxDQUFDLENBQUM7O1lBQ1AsQ0FBQztZQUFELGNBQUM7UUFBRCxDQUFDLENBdkJvQixNQUFNLEdBdUIxQjtJQUNMLENBQUM7QUFDTCxDQUFDOzs7Ozs7Ozs7Ozs7O0FDOUJEO0FBQUE7QUFBQTtJQUFBO1FBQ0ksYUFBUSxHQUFjLEVBQUUsQ0FBQztRQUN6QixXQUFNLEdBQWtCLEVBQUUsQ0FBQztJQU8vQixDQUFDO0lBSEcsMENBQWdCLEdBQWhCLFVBQWlCLElBQWM7UUFDM0IsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFDLE9BQWdCLElBQUssY0FBTyxZQUFZLElBQUksRUFBdkIsQ0FBdUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xGLENBQUM7SUFDTCxzQkFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7O0FDWkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0NBQTRDO0FBRUo7QUFFRztBQUVJO0FBQ047QUFDTDtBQUNBO0FBRUQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsImltcG9ydCB7IFNlcnZpY2UgfSBmcm9tICcuLi9pbnRlcmZhY2UvU2VydmljZSc7XG5pbXBvcnQgeyBIYW5kbGVyIH0gZnJvbSAnLi8uLi9pbnRlcmZhY2UvaGFuZGxlcic7XG5cbmV4cG9ydCBjbGFzcyBBYnN0cmFjdEFwcGxpY2F0aW9uIHtcbiAgICBwcm90ZWN0ZWQgc2VydmljZXM6IFNlcnZpY2VbXVxuICAgIHByb3RlY3RlZCBoYW5kbGVyOiBIYW5kbGVyW11cblxuICAgIGNvbnN0cnVjdG9yKHNlcnZpY2VzOiBTZXJ2aWNlW10sIGhhbmRsZXI6IEhhbmRsZXJbXSkge1xuICAgICAgICB0aGlzLnNlcnZpY2VzID0gc2VydmljZXM7XG4gICAgICAgIHRoaXMuaGFuZGxlciA9IGhhbmRsZXI7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgRXZlbnRDb25maWcgfSBmcm9tICcuLy4uL2ludGVyZmFjZS9ldmVudC1jb25maWcnO1xuaW1wb3J0IHsgSGFuZGxlciB9IGZyb20gJy4vLi4vaW50ZXJmYWNlL2hhbmRsZXInO1xuaW1wb3J0IHsgY29uc3RydWN0b3IsIGdlbmVyaWNDb25zdHJ1Y3RvciB9IGZyb20gXCIuLi90eXBlL2NvbnN0cnVjdG9yXCI7XG5pbXBvcnQgeyBBcHBsaWNhdGlvbkNvbmZpZyB9IGZyb20gXCIuLi9pbnRlcmZhY2UvYXBwbGljYXRpb24tY29uZmlnXCI7XG5pbXBvcnQgeyBTZXJ2aWNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlL1NlcnZpY2UnO1xuXG5leHBvcnQgY29uc3QgQXBwbGljYXRpb24gPSAoY29uZmlnOiBBcHBsaWNhdGlvbkNvbmZpZyk6ICg8VD4odGFyZ2V0OiBnZW5lcmljQ29uc3RydWN0b3I8VD4pID0+IHZvaWQpID0+IHtcbiAgICByZXR1cm4gPFQgZXh0ZW5kcyBjb25zdHJ1Y3Rvcj4odGFyZ2V0OiBUKSA9PiB7XG4gICAgICAgIHJldHVybiBjbGFzcyBleHRlbmRzIHRhcmdldCB7XG4gICAgICAgICAgICBzZXJ2aWNlcyA9IGNvbmZpZy5zZXJ2aWNlcy5tYXAoKHNlcnZpY2U6IGdlbmVyaWNDb25zdHJ1Y3RvcjxTZXJ2aWNlPik6IFNlcnZpY2UgPT4gbmV3IHNlcnZpY2UoKSk7XG4gICAgICAgICAgICBoYW5kbGVyID0gY29uZmlnLmhhbmRsZXIubWFwKChoYW5kbGVyOiBnZW5lcmljQ29uc3RydWN0b3I8SGFuZGxlcj4pOiBIYW5kbGVyID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBoYW5kbGVyKCk7XG4gICAgICAgICAgICAgICAgaW5zdGFuY2Uuc2VydmljZXMgPSB0aGlzLnNlcnZpY2VzO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGluc3RhbmNlLmNvbmZpZy5mb3JFYWNoKChjb25maWdFbnRyeTogRXZlbnRDb25maWcpOiB2b2lkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb25maWdFbnRyeS5zZWxlY3RvciA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChjb25maWdFbnRyeS5zZWxlY3Rvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZ0VudHJ5LnR5cGVzLmZvckVhY2goKHR5cGUpID0+IGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBpbnN0YW5jZS5oYW5kbGUpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoJ2FkZEV2ZW50TGlzdGVuZXInIGluIGNvbmZpZ0VudHJ5LnNlbGVjdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RvciA9IGNvbmZpZ0VudHJ5LnNlbGVjdG9yIGFzIEhUTUxFbGVtZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnRW50cnkudHlwZXMuZm9yRWFjaCgodHlwZSkgPT4gc2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBpbnN0YW5jZS5oYW5kbGUuYmluZChpbnN0YW5jZSkpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBFdmVudENvbmZpZyB9IGZyb20gJy4uL2ludGVyZmFjZS9ldmVudC1jb25maWcnO1xuaW1wb3J0IHsgU2VydmljZSB9IGZyb20gJy4uL2ludGVyZmFjZS9TZXJ2aWNlJztcbmltcG9ydCB7IEhhbmRsZXIgfSBmcm9tICcuLi9pbnRlcmZhY2UvaGFuZGxlcic7XG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RIYW5kbGVyIGltcGxlbWVudHMgSGFuZGxlciB7XG4gICAgc2VydmljZXM6IFNlcnZpY2VbXSA9IFtdO1xuICAgIGNvbmZpZzogRXZlbnRDb25maWdbXSA9IFtdO1xuXG4gICAgYWJzdHJhY3QgaGFuZGxlKGV2ZW50OiBFdmVudCk6IHZvaWRcblxuICAgIGdldFNlcnZpY2VCeVR5cGUodHlwZTogRnVuY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VydmljZXMuZmlsdGVyKChzZXJ2aWNlOiBTZXJ2aWNlKSA9PiBzZXJ2aWNlIGluc3RhbmNlb2YgdHlwZSlbMF07XG4gICAgfVxufVxuIiwiZXhwb3J0ICogZnJvbSAnLi9jb3JlL2Fic3RyYWN0LWFwcGxpY2F0aW9uJztcblxuZXhwb3J0ICogZnJvbSAnLi9kZWNvcmF0b3IvYXBwbGljYXRpb24nO1xuXG5leHBvcnQgKiBmcm9tICcuL2hhbmRsZXIvYWJzdHJhY3QtaGFuZGxlcic7XG5cbmV4cG9ydCAqIGZyb20gJy4vaW50ZXJmYWNlL2FwcGxpY2F0aW9uLWNvbmZpZyc7XG5leHBvcnQgKiBmcm9tICcuL2ludGVyZmFjZS9ldmVudC1jb25maWcnO1xuZXhwb3J0ICogZnJvbSAnLi9pbnRlcmZhY2UvaGFuZGxlcic7XG5leHBvcnQgKiBmcm9tICcuL2ludGVyZmFjZS9zZXJ2aWNlJztcblxuZXhwb3J0ICogZnJvbSAnLi90eXBlL2NvbnN0cnVjdG9yJztcbiJdLCJzb3VyY2VSb290IjoiIn0=