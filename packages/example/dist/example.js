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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL2NvcmUvc3JjL2NvcmUvYWJzdHJhY3QtYXBwbGljYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4uL2NvcmUvc3JjL2RlY29yYXRvci9hcHBsaWNhdGlvbi50cyIsIndlYnBhY2s6Ly8vLi4vY29yZS9zcmMvZGVjb3JhdG9yL2V2ZW50LnRzIiwid2VicGFjazovLy8uLi9jb3JlL3NyYy9oYW5kbGVyL2Fic3RyYWN0LWhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL2FwcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaGFuZGxlci9FeGFtcGxlSGFuZGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2UvRXhhbXBsZVNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFD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QUM7Q0FBQSxDQVBtQyxrRkFBZSxHQU9sRDtBQVAwQjs7Ozs7Ozs7Ozs7OztBQ2xCM0I7QUFBQTtBQUF3QztBQUV4QyxJQUFNLEdBQUcsR0FBRyxJQUFJLG9EQUFHLEVBQUUsQ0FBQztBQUN0QixHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNIVjtBQUFBO0FBQUE7SUFDSTtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQsNkJBQUksR0FBSjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBQ0wscUJBQUM7QUFBRCxDQUFDIiwiZmlsZSI6ImV4YW1wbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsImltcG9ydCB7IFNlcnZpY2UgfSBmcm9tICcuLi9pbnRlcmZhY2UvU2VydmljZSc7XG5pbXBvcnQgeyBIYW5kbGVyIH0gZnJvbSAnLi8uLi9pbnRlcmZhY2UvaGFuZGxlcic7XG5cbmV4cG9ydCBjbGFzcyBBYnN0cmFjdEFwcGxpY2F0aW9uIHtcbiAgICBwcm90ZWN0ZWQgc2VydmljZXM6IFNlcnZpY2VbXVxuICAgIHByb3RlY3RlZCBoYW5kbGVyOiBIYW5kbGVyW11cblxuICAgIGNvbnN0cnVjdG9yKHNlcnZpY2VzOiBTZXJ2aWNlW10sIGhhbmRsZXI6IEhhbmRsZXJbXSkge1xuICAgICAgICB0aGlzLnNlcnZpY2VzID0gc2VydmljZXM7XG4gICAgICAgIHRoaXMuaGFuZGxlciA9IGhhbmRsZXI7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgRXZlbnRDb25maWcgfSBmcm9tICcuLy4uL2ludGVyZmFjZS9ldmVudC1jb25maWcnO1xuaW1wb3J0IHsgSGFuZGxlciB9IGZyb20gJy4vLi4vaW50ZXJmYWNlL2hhbmRsZXInO1xuaW1wb3J0IHsgY29uc3RydWN0b3IsIGdlbmVyaWNDb25zdHJ1Y3RvciB9IGZyb20gXCIuLi90eXBlL2NvbnN0cnVjdG9yXCI7XG5pbXBvcnQgeyBBcHBsaWNhdGlvbkNvbmZpZyB9IGZyb20gXCIuLi9pbnRlcmZhY2UvYXBwbGljYXRpb24tY29uZmlnXCI7XG5pbXBvcnQgeyBTZXJ2aWNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlL1NlcnZpY2UnO1xuXG5leHBvcnQgY29uc3QgQXBwbGljYXRpb24gPSAoY29uZmlnOiBBcHBsaWNhdGlvbkNvbmZpZyk6ICg8VD4odGFyZ2V0OiBnZW5lcmljQ29uc3RydWN0b3I8VD4pID0+IHZvaWQpID0+IHtcbiAgICByZXR1cm4gPFQgZXh0ZW5kcyBjb25zdHJ1Y3Rvcj4odGFyZ2V0OiBUKSA9PiB7XG4gICAgICAgIHJldHVybiBjbGFzcyBleHRlbmRzIHRhcmdldCB7XG4gICAgICAgICAgICBzZXJ2aWNlcyA9IGNvbmZpZy5zZXJ2aWNlcy5tYXAoKHNlcnZpY2U6IGdlbmVyaWNDb25zdHJ1Y3RvcjxTZXJ2aWNlPik6IFNlcnZpY2UgPT4gbmV3IHNlcnZpY2UoKSk7XG4gICAgICAgICAgICBoYW5kbGVyID0gY29uZmlnLmhhbmRsZXIubWFwKChoYW5kbGVyOiBnZW5lcmljQ29uc3RydWN0b3I8SGFuZGxlcj4pOiBIYW5kbGVyID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBoYW5kbGVyKCk7XG4gICAgICAgICAgICAgICAgaW5zdGFuY2Uuc2VydmljZXMgPSB0aGlzLnNlcnZpY2VzO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGluc3RhbmNlLmNvbmZpZy5mb3JFYWNoKChjb25maWdFbnRyeTogRXZlbnRDb25maWcpOiB2b2lkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb25maWdFbnRyeS5zZWxlY3RvciA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChjb25maWdFbnRyeS5zZWxlY3Rvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZ0VudHJ5LnR5cGVzLmZvckVhY2goKHR5cGUpID0+IGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBpbnN0YW5jZS5oYW5kbGUpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoJ2FkZEV2ZW50TGlzdGVuZXInIGluIGNvbmZpZ0VudHJ5LnNlbGVjdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RvciA9IGNvbmZpZ0VudHJ5LnNlbGVjdG9yIGFzIEhUTUxFbGVtZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnRW50cnkudHlwZXMuZm9yRWFjaCgodHlwZSkgPT4gc2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBpbnN0YW5jZS5oYW5kbGUuYmluZChpbnN0YW5jZSkpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBIYW5kbGVyIH0gZnJvbSAnLi8uLi9pbnRlcmZhY2UvaGFuZGxlcic7XG5pbXBvcnQgeyBjb25zdHJ1Y3RvciwgZ2VuZXJpY0NvbnN0cnVjdG9yIH0gZnJvbSAnLi8uLi90eXBlL2NvbnN0cnVjdG9yJztcbmltcG9ydCB7IEV2ZW50Q29uZmlnIH0gZnJvbSAnLi8uLi9pbnRlcmZhY2UvZXZlbnQtY29uZmlnJztcblxuZXhwb3J0IGNvbnN0IEV2ZW50ID0gKGNvbmZpZzogRXZlbnRDb25maWdbXSk6ICg8SGFuZGxlcj4odGFyZ2V0OiBnZW5lcmljQ29uc3RydWN0b3I8SGFuZGxlcj4pID0+IHZvaWQpID0+IHtcbiAgICByZXR1cm4gPEhhbmRsZXIgZXh0ZW5kcyBjb25zdHJ1Y3Rvcj4odGFyZ2V0OiBIYW5kbGVyKSA9PiB7XG4gICAgICAgIHJldHVybiBjbGFzcyBleHRlbmRzIHRhcmdldCB7XG4gICAgICAgICAgICBjb25maWcgPSBjb25maWc7XG4gICAgICAgIH07XG4gICAgfTtcbn07XG4iLCJpbXBvcnQgeyBFdmVudENvbmZpZyB9IGZyb20gJy4uL2ludGVyZmFjZS9ldmVudC1jb25maWcnO1xuaW1wb3J0IHsgU2VydmljZSB9IGZyb20gJy4uL2ludGVyZmFjZS9TZXJ2aWNlJztcbmltcG9ydCB7IEhhbmRsZXIgfSBmcm9tICcuLi9pbnRlcmZhY2UvaGFuZGxlcic7XG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RIYW5kbGVyIGltcGxlbWVudHMgSGFuZGxlciB7XG4gICAgc2VydmljZXM6IFNlcnZpY2VbXSA9IFtdO1xuICAgIGNvbmZpZzogRXZlbnRDb25maWdbXSA9IFtdO1xuXG4gICAgYWJzdHJhY3QgaGFuZGxlKGV2ZW50OiBFdmVudCk6IHZvaWRcblxuICAgIGdldFNlcnZpY2VCeVR5cGUodHlwZTogRnVuY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VydmljZXMuZmlsdGVyKChzZXJ2aWNlOiBTZXJ2aWNlKSA9PiBzZXJ2aWNlIGluc3RhbmNlb2YgdHlwZSlbMF07XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgRXhhbXBsZVNlcnZpY2UgfSBmcm9tICcuLy4uL3NlcnZpY2UvRXhhbXBsZVNlcnZpY2UnO1xuaW1wb3J0IHsgRXhhbXBsZUhhbmRsZXIgfSBmcm9tICcuLy4uL2hhbmRsZXIvRXhhbXBsZUhhbmRsZXInO1xuaW1wb3J0IHsgQXBwbGljYXRpb24gfSBmcm9tICcuLi8uLi8uLi9jb3JlL3NyYy9kZWNvcmF0b3IvYXBwbGljYXRpb24nO1xuaW1wb3J0IHsgQWJzdHJhY3RBcHBsaWNhdGlvbiB9IGZyb20gJy4uLy4uLy4uL2NvcmUvc3JjL2NvcmUvYWJzdHJhY3QtYXBwbGljYXRpb24nO1xuXG5AQXBwbGljYXRpb24oe1xuICAgIHNlcnZpY2VzOiBbXG4gICAgICAgIEV4YW1wbGVTZXJ2aWNlXG4gICAgXSxcbiAgICBoYW5kbGVyOiBbXG4gICAgICAgIEV4YW1wbGVIYW5kbGVyXG4gICAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQXBwIGV4dGVuZHMgQWJzdHJhY3RBcHBsaWNhdGlvbiB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKFtdLCBbXSk7XG5cbiAgICAgICAgY29uc29sZS5sb2coJ0FwcGxpY2F0aW9uIGluaXRpYWxpemVkLicpOyBcbiAgICB9XG5cbiAgICBydW4oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdydW4nKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBFeGFtcGxlU2VydmljZSB9IGZyb20gJy4vLi4vc2VydmljZS9FeGFtcGxlU2VydmljZSc7XG5pbXBvcnQgeyBFdmVudCB9IGZyb20gJy4vLi4vLi4vLi4vY29yZS9zcmMvZGVjb3JhdG9yL2V2ZW50JztcbmltcG9ydCB7IEFic3RyYWN0SGFuZGxlciB9IGZyb20gJy4vLi4vLi4vLi4vY29yZS9zcmMvaGFuZGxlci9hYnN0cmFjdC1oYW5kbGVyJztcblxuQEV2ZW50KFtcbiAgICB7XG4gICAgICAgIHNlbGVjdG9yOiBkb2N1bWVudCxcbiAgICAgICAgdHlwZXM6IFsnY2xpY2snXSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgc2VsZWN0b3I6IHdpbmRvdyxcbiAgICAgICAgdHlwZXM6IFsnc2Nyb2xsJ10sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnLmV4YW1wbGUnLFxuICAgICAgICB0eXBlczogWydjbGljaycsICd0b3VjaCddLFxuICAgIH0sXG5dKVxuZXhwb3J0IGNsYXNzIEV4YW1wbGVIYW5kbGVyIGV4dGVuZHMgQWJzdHJhY3RIYW5kbGVyIHtcbiAgICBoYW5kbGUoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldCk7XG5cbiAgICAgICAgY29uc3Qgc2VydmljZSA9IHRoaXMuZ2V0U2VydmljZUJ5VHlwZShFeGFtcGxlU2VydmljZSkgYXMgRXhhbXBsZVNlcnZpY2U7XG4gICAgICAgIHNlcnZpY2UudGVzdCgpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEFwcCB9IGZyb20gJy4vYXBwbGljYXRpb24vYXBwJztcblxuY29uc3QgYXBwID0gbmV3IEFwcCgpO1xuYXBwLnJ1bigpO1xuIiwiZXhwb3J0IGNsYXNzIEV4YW1wbGVTZXJ2aWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0V4YW1wbGUgc2VydmljZSBpbml0aWFsaXplZCcpO1xuICAgIH1cblxuICAgIHRlc3QoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdydW4gbWV0aG9kIHRlc3QnKTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9