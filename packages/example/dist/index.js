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

/***/ "../core/src/core/abstract-application.ts":
/*!************************************************!*\
  !*** ../core/src/core/abstract-application.ts ***!
  \************************************************/
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

/***/ "../core/src/decorator/application.ts":
/*!********************************************!*\
  !*** ../core/src/decorator/application.ts ***!
  \********************************************/
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

/***/ "../core/src/decorator/event.ts":
/*!**************************************!*\
  !*** ../core/src/decorator/event.ts ***!
  \**************************************/
/*! exports provided: Event */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Event", function() { return Event; });
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
var Event = function (config) {
    return function (target) {
        return /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.config = config;
                return _this;
            }
            return class_1;
        }(target));
    };
};


/***/ }),

/***/ "../core/src/handler/abstract-handler.ts":
/*!***********************************************!*\
  !*** ../core/src/handler/abstract-handler.ts ***!
  \***********************************************/
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

/***/ "./src/application/app.ts":
/*!********************************!*\
  !*** ./src/application/app.ts ***!
  \********************************/
/*! exports provided: App */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
/* harmony import */ var _service_ExampleService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../service/ExampleService */ "./src/service/ExampleService.ts");
/* harmony import */ var _handler_ExampleHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../handler/ExampleHandler */ "./src/handler/ExampleHandler.ts");
/* harmony import */ var _core_src_decorator_application__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/src/decorator/application */ "../core/src/decorator/application.ts");
/* harmony import */ var _core_src_core_abstract_application__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/src/core/abstract-application */ "../core/src/core/abstract-application.ts");
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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        var _this = _super.call(this, [], []) || this;
        console.log('Application initialized.');
        return _this;
    }
    App.prototype.run = function () {
        console.log('run');
    };
    App = __decorate([
        Object(_core_src_decorator_application__WEBPACK_IMPORTED_MODULE_2__["Application"])({
            services: [
                _service_ExampleService__WEBPACK_IMPORTED_MODULE_0__["ExampleService"]
            ],
            handler: [
                _handler_ExampleHandler__WEBPACK_IMPORTED_MODULE_1__["ExampleHandler"]
            ],
        })
    ], App);
    return App;
}(_core_src_core_abstract_application__WEBPACK_IMPORTED_MODULE_3__["AbstractApplication"]));



/***/ }),

/***/ "./src/handler/ExampleHandler.ts":
/*!***************************************!*\
  !*** ./src/handler/ExampleHandler.ts ***!
  \***************************************/
/*! exports provided: ExampleHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleHandler", function() { return ExampleHandler; });
/* harmony import */ var _service_ExampleService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../service/ExampleService */ "./src/service/ExampleService.ts");
/* harmony import */ var _core_src_decorator_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../core/src/decorator/event */ "../core/src/decorator/event.ts");
/* harmony import */ var _core_src_handler_abstract_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../core/src/handler/abstract-handler */ "../core/src/handler/abstract-handler.ts");
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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ExampleHandler = /** @class */ (function (_super) {
    __extends(ExampleHandler, _super);
    function ExampleHandler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExampleHandler.prototype.handle = function (event) {
        console.log(event.target);
        var service = this.getServiceByType(_service_ExampleService__WEBPACK_IMPORTED_MODULE_0__["ExampleService"]);
        service.test();
    };
    ExampleHandler = __decorate([
        Object(_core_src_decorator_event__WEBPACK_IMPORTED_MODULE_1__["Event"])([
            {
                selector: document,
                types: ['click'],
            },
            {
                selector: window,
                types: ['scroll'],
            },
            {
                selector: '.example',
                types: ['click', 'touch'],
            },
        ])
    ], ExampleHandler);
    return ExampleHandler;
}(_core_src_handler_abstract_handler__WEBPACK_IMPORTED_MODULE_2__["AbstractHandler"]));



/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _application_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./application/app */ "./src/application/app.ts");

var app = new _application_app__WEBPACK_IMPORTED_MODULE_0__["App"]();
app.run();


/***/ }),

/***/ "./src/service/ExampleService.ts":
/*!***************************************!*\
  !*** ./src/service/ExampleService.ts ***!
  \***************************************/
/*! exports provided: ExampleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleService", function() { return ExampleService; });
var ExampleService = /** @class */ (function () {
    function ExampleService() {
        console.log('Example service initialized');
    }
    ExampleService.prototype.test = function () {
        console.log('run method test');
    };
    return ExampleService;
}());



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL2NvcmUvc3JjL2NvcmUvYWJzdHJhY3QtYXBwbGljYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4uL2NvcmUvc3JjL2RlY29yYXRvci9hcHBsaWNhdGlvbi50cyIsIndlYnBhY2s6Ly8vLi4vY29yZS9zcmMvZGVjb3JhdG9yL2V2ZW50LnRzIiwid2VicGFjazovLy8uLi9jb3JlL3NyYy9oYW5kbGVyL2Fic3RyYWN0LWhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL2FwcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaGFuZGxlci9FeGFtcGxlSGFuZGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2UvRXhhbXBsZVNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFD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QUM7Q0FBQSxDQVBtQyxrRkFBZSxHQU9sRDtBQVAwQjs7Ozs7Ozs7Ozs7OztBQ2xCM0I7QUFBQTtBQUF3QztBQUV4QyxJQUFNLEdBQUcsR0FBRyxJQUFJLG9EQUFHLEVBQUUsQ0FBQztBQUN0QixHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNIVjtBQUFBO0FBQUE7SUFDSTtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQsNkJBQUksR0FBSjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBQ0wscUJBQUM7QUFBRCxDQUFDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJpbXBvcnQgeyBTZXJ2aWNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlL1NlcnZpY2UnO1xuaW1wb3J0IHsgSGFuZGxlciB9IGZyb20gJy4vLi4vaW50ZXJmYWNlL2hhbmRsZXInO1xuXG5leHBvcnQgY2xhc3MgQWJzdHJhY3RBcHBsaWNhdGlvbiB7XG4gICAgcHJvdGVjdGVkIHNlcnZpY2VzOiBTZXJ2aWNlW11cbiAgICBwcm90ZWN0ZWQgaGFuZGxlcjogSGFuZGxlcltdXG5cbiAgICBjb25zdHJ1Y3RvcihzZXJ2aWNlczogU2VydmljZVtdLCBoYW5kbGVyOiBIYW5kbGVyW10pIHtcbiAgICAgICAgdGhpcy5zZXJ2aWNlcyA9IHNlcnZpY2VzO1xuICAgICAgICB0aGlzLmhhbmRsZXIgPSBoYW5kbGVyO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEV2ZW50Q29uZmlnIH0gZnJvbSAnLi8uLi9pbnRlcmZhY2UvZXZlbnQtY29uZmlnJztcbmltcG9ydCB7IEhhbmRsZXIgfSBmcm9tICcuLy4uL2ludGVyZmFjZS9oYW5kbGVyJztcbmltcG9ydCB7IGNvbnN0cnVjdG9yLCBnZW5lcmljQ29uc3RydWN0b3IgfSBmcm9tIFwiLi4vdHlwZS9jb25zdHJ1Y3RvclwiO1xuaW1wb3J0IHsgQXBwbGljYXRpb25Db25maWcgfSBmcm9tIFwiLi4vaW50ZXJmYWNlL2FwcGxpY2F0aW9uLWNvbmZpZ1wiO1xuaW1wb3J0IHsgU2VydmljZSB9IGZyb20gJy4uL2ludGVyZmFjZS9TZXJ2aWNlJztcblxuZXhwb3J0IGNvbnN0IEFwcGxpY2F0aW9uID0gKGNvbmZpZzogQXBwbGljYXRpb25Db25maWcpOiAoPFQ+KHRhcmdldDogZ2VuZXJpY0NvbnN0cnVjdG9yPFQ+KSA9PiB2b2lkKSA9PiB7XG4gICAgcmV0dXJuIDxUIGV4dGVuZHMgY29uc3RydWN0b3I+KHRhcmdldDogVCkgPT4ge1xuICAgICAgICByZXR1cm4gY2xhc3MgZXh0ZW5kcyB0YXJnZXQge1xuICAgICAgICAgICAgc2VydmljZXMgPSBjb25maWcuc2VydmljZXMubWFwKChzZXJ2aWNlOiBnZW5lcmljQ29uc3RydWN0b3I8U2VydmljZT4pOiBTZXJ2aWNlID0+IG5ldyBzZXJ2aWNlKCkpO1xuICAgICAgICAgICAgaGFuZGxlciA9IGNvbmZpZy5oYW5kbGVyLm1hcCgoaGFuZGxlcjogZ2VuZXJpY0NvbnN0cnVjdG9yPEhhbmRsZXI+KTogSGFuZGxlciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgaGFuZGxlcigpO1xuICAgICAgICAgICAgICAgIGluc3RhbmNlLnNlcnZpY2VzID0gdGhpcy5zZXJ2aWNlcztcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpbnN0YW5jZS5jb25maWcuZm9yRWFjaCgoY29uZmlnRW50cnk6IEV2ZW50Q29uZmlnKTogdm9pZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY29uZmlnRW50cnkuc2VsZWN0b3IgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoY29uZmlnRW50cnkuc2VsZWN0b3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWdFbnRyeS50eXBlcy5mb3JFYWNoKCh0eXBlKSA9PiBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgaW5zdGFuY2UuaGFuZGxlKSksXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCdhZGRFdmVudExpc3RlbmVyJyBpbiBjb25maWdFbnRyeS5zZWxlY3Rvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0b3IgPSBjb25maWdFbnRyeS5zZWxlY3RvciBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZ0VudHJ5LnR5cGVzLmZvckVhY2goKHR5cGUpID0+IHNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgaW5zdGFuY2UuaGFuZGxlLmJpbmQoaW5zdGFuY2UpKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgSGFuZGxlciB9IGZyb20gJy4vLi4vaW50ZXJmYWNlL2hhbmRsZXInO1xuaW1wb3J0IHsgY29uc3RydWN0b3IsIGdlbmVyaWNDb25zdHJ1Y3RvciB9IGZyb20gJy4vLi4vdHlwZS9jb25zdHJ1Y3Rvcic7XG5pbXBvcnQgeyBFdmVudENvbmZpZyB9IGZyb20gJy4vLi4vaW50ZXJmYWNlL2V2ZW50LWNvbmZpZyc7XG5cbmV4cG9ydCBjb25zdCBFdmVudCA9IChjb25maWc6IEV2ZW50Q29uZmlnW10pOiAoPEhhbmRsZXI+KHRhcmdldDogZ2VuZXJpY0NvbnN0cnVjdG9yPEhhbmRsZXI+KSA9PiB2b2lkKSA9PiB7XG4gICAgcmV0dXJuIDxIYW5kbGVyIGV4dGVuZHMgY29uc3RydWN0b3I+KHRhcmdldDogSGFuZGxlcikgPT4ge1xuICAgICAgICByZXR1cm4gY2xhc3MgZXh0ZW5kcyB0YXJnZXQge1xuICAgICAgICAgICAgY29uZmlnID0gY29uZmlnO1xuICAgICAgICB9O1xuICAgIH07XG59O1xuIiwiaW1wb3J0IHsgRXZlbnRDb25maWcgfSBmcm9tICcuLi9pbnRlcmZhY2UvZXZlbnQtY29uZmlnJztcbmltcG9ydCB7IFNlcnZpY2UgfSBmcm9tICcuLi9pbnRlcmZhY2UvU2VydmljZSc7XG5pbXBvcnQgeyBIYW5kbGVyIH0gZnJvbSAnLi4vaW50ZXJmYWNlL2hhbmRsZXInO1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0SGFuZGxlciBpbXBsZW1lbnRzIEhhbmRsZXIge1xuICAgIHNlcnZpY2VzOiBTZXJ2aWNlW10gPSBbXTtcbiAgICBjb25maWc6IEV2ZW50Q29uZmlnW10gPSBbXTtcblxuICAgIGFic3RyYWN0IGhhbmRsZShldmVudDogRXZlbnQpOiB2b2lkXG5cbiAgICBnZXRTZXJ2aWNlQnlUeXBlKHR5cGU6IEZ1bmN0aW9uKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlcnZpY2VzLmZpbHRlcigoc2VydmljZTogU2VydmljZSkgPT4gc2VydmljZSBpbnN0YW5jZW9mIHR5cGUpWzBdO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEV4YW1wbGVTZXJ2aWNlIH0gZnJvbSAnLi8uLi9zZXJ2aWNlL0V4YW1wbGVTZXJ2aWNlJztcbmltcG9ydCB7IEV4YW1wbGVIYW5kbGVyIH0gZnJvbSAnLi8uLi9oYW5kbGVyL0V4YW1wbGVIYW5kbGVyJztcbmltcG9ydCB7IEFwcGxpY2F0aW9uIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9zcmMvZGVjb3JhdG9yL2FwcGxpY2F0aW9uJztcbmltcG9ydCB7IEFic3RyYWN0QXBwbGljYXRpb24gfSBmcm9tICcuLi8uLi8uLi9jb3JlL3NyYy9jb3JlL2Fic3RyYWN0LWFwcGxpY2F0aW9uJztcblxuQEFwcGxpY2F0aW9uKHtcbiAgICBzZXJ2aWNlczogW1xuICAgICAgICBFeGFtcGxlU2VydmljZVxuICAgIF0sXG4gICAgaGFuZGxlcjogW1xuICAgICAgICBFeGFtcGxlSGFuZGxlclxuICAgIF0sXG59KVxuZXhwb3J0IGNsYXNzIEFwcCBleHRlbmRzIEFic3RyYWN0QXBwbGljYXRpb24ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihbXSwgW10pO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdBcHBsaWNhdGlvbiBpbml0aWFsaXplZC4nKTsgXG4gICAgfVxuXG4gICAgcnVuKCkge1xuICAgICAgICBjb25zb2xlLmxvZygncnVuJyk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgRXhhbXBsZVNlcnZpY2UgfSBmcm9tICcuLy4uL3NlcnZpY2UvRXhhbXBsZVNlcnZpY2UnO1xuaW1wb3J0IHsgRXZlbnQgfSBmcm9tICcuLy4uLy4uLy4uL2NvcmUvc3JjL2RlY29yYXRvci9ldmVudCc7XG5pbXBvcnQgeyBBYnN0cmFjdEhhbmRsZXIgfSBmcm9tICcuLy4uLy4uLy4uL2NvcmUvc3JjL2hhbmRsZXIvYWJzdHJhY3QtaGFuZGxlcic7XG5cbkBFdmVudChbXG4gICAge1xuICAgICAgICBzZWxlY3RvcjogZG9jdW1lbnQsXG4gICAgICAgIHR5cGVzOiBbJ2NsaWNrJ10sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHNlbGVjdG9yOiB3aW5kb3csXG4gICAgICAgIHR5cGVzOiBbJ3Njcm9sbCddLFxuICAgIH0sXG4gICAge1xuICAgICAgICBzZWxlY3RvcjogJy5leGFtcGxlJyxcbiAgICAgICAgdHlwZXM6IFsnY2xpY2snLCAndG91Y2gnXSxcbiAgICB9LFxuXSlcbmV4cG9ydCBjbGFzcyBFeGFtcGxlSGFuZGxlciBleHRlbmRzIEFic3RyYWN0SGFuZGxlciB7XG4gICAgaGFuZGxlKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgICAgICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQpO1xuXG4gICAgICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzLmdldFNlcnZpY2VCeVR5cGUoRXhhbXBsZVNlcnZpY2UpIGFzIEV4YW1wbGVTZXJ2aWNlO1xuICAgICAgICBzZXJ2aWNlLnRlc3QoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBBcHAgfSBmcm9tICcuL2FwcGxpY2F0aW9uL2FwcCc7XG5cbmNvbnN0IGFwcCA9IG5ldyBBcHAoKTtcbmFwcC5ydW4oKTtcbiIsImV4cG9ydCBjbGFzcyBFeGFtcGxlU2VydmljZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdFeGFtcGxlIHNlcnZpY2UgaW5pdGlhbGl6ZWQnKTtcbiAgICB9XG5cbiAgICB0ZXN0KCkge1xuICAgICAgICBjb25zb2xlLmxvZygncnVuIG1ldGhvZCB0ZXN0Jyk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==