"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/component/Gnb.jsx":
/*!*******************************!*\
  !*** ./src/component/Gnb.jsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Gnb; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n\n\n\nvar _s = $RefreshSig$();\nfunction Gnb() {\n    _s();\n    var activeItem = \"home\";\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var goLink = function(e, data) {\n        if (data.name === \"home\") {\n            router.push(\"/\");\n        } else if (data.name === \"about\") {\n            router.push(\"/about\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Menu, {\n        inverted: true,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Menu.Item, {\n                name: \"home\",\n                active: activeItem === \"home\",\n                onClick: goLink\n            }, void 0, false, {\n                fileName: \"D:\\\\coding\\\\Study\\\\NextJS\\\\nextjs-tutorial-2\\\\src\\\\component\\\\Gnb.jsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Menu.Item, {\n                name: \"about\",\n                active: activeItem === \"about\",\n                onClick: goLink\n            }, void 0, false, {\n                fileName: \"D:\\\\coding\\\\Study\\\\NextJS\\\\nextjs-tutorial-2\\\\src\\\\component\\\\Gnb.jsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Menu.Item, {\n                name: \"friends\",\n                active: activeItem === \"friends\",\n                onClick: goLink\n            }, void 0, false, {\n                fileName: \"D:\\\\coding\\\\Study\\\\NextJS\\\\nextjs-tutorial-2\\\\src\\\\component\\\\Gnb.jsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\coding\\\\Study\\\\NextJS\\\\nextjs-tutorial-2\\\\src\\\\component\\\\Gnb.jsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this);\n};\n_s(Gnb, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Gnb;\nvar _c;\n$RefreshReg$(_c, \"Gnb\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50L0duYi5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFBd0M7QUFDQzs7QUFFMUIsU0FBU0UsR0FBRyxHQUFHOztJQUM1QixJQUFNQyxVQUFVLEdBQUcsTUFBTTtJQUN6QixJQUFNQyxNQUFNLEdBQUdKLHNEQUFTLEVBQUU7SUFFMUIsSUFBTUssTUFBTSxHQUFHLFNBQUNDLENBQUMsRUFBRUMsSUFBSSxFQUFLO1FBQzFCLElBQUlBLElBQUksQ0FBQ0MsSUFBSSxLQUFLLE1BQU0sRUFBRTtZQUN4QkosTUFBTSxDQUFDSyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDbEIsTUFBTSxJQUFJRixJQUFJLENBQUNDLElBQUksS0FBSyxPQUFPLEVBQUU7WUFDaENKLE1BQU0sQ0FBQ0ssSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3ZCO0tBQ0Y7SUFDRCxxQkFDRSw4REFBQ1IsbURBQUk7UUFBQ1MsUUFBUTs7MEJBQ1osOERBQUNULHdEQUFTO2dCQUFDTyxJQUFJLEVBQUMsTUFBTTtnQkFBQ0ksTUFBTSxFQUFFVCxVQUFVLEtBQUssTUFBTTtnQkFBRVUsT0FBTyxFQUFFUixNQUFNOzs7OztvQkFBSTswQkFDekUsOERBQUNKLHdEQUFTO2dCQUNSTyxJQUFJLEVBQUMsT0FBTztnQkFDWkksTUFBTSxFQUFFVCxVQUFVLEtBQUssT0FBTztnQkFDOUJVLE9BQU8sRUFBRVIsTUFBTTs7Ozs7b0JBQ2Y7MEJBQ0YsOERBQUNKLHdEQUFTO2dCQUNSTyxJQUFJLEVBQUMsU0FBUztnQkFDZEksTUFBTSxFQUFFVCxVQUFVLEtBQUssU0FBUztnQkFDaENVLE9BQU8sRUFBRVIsTUFBTTs7Ozs7b0JBQ2Y7Ozs7OztZQUNHLENBQ1A7Q0FDSDtHQTFCdUJILEdBQUc7O1FBRVZGLGtEQUFTOzs7QUFGRkUsS0FBQUEsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50L0duYi5qc3g/MGVhMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgTWVudSB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR25iKCkge1xyXG4gIGNvbnN0IGFjdGl2ZUl0ZW0gPSBcImhvbWVcIjtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgZ29MaW5rID0gKGUsIGRhdGEpID0+IHtcclxuICAgIGlmIChkYXRhLm5hbWUgPT09IFwiaG9tZVwiKSB7XHJcbiAgICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcclxuICAgIH0gZWxzZSBpZiAoZGF0YS5uYW1lID09PSBcImFib3V0XCIpIHtcclxuICAgICAgcm91dGVyLnB1c2goXCIvYWJvdXRcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPE1lbnUgaW52ZXJ0ZWQ+XHJcbiAgICAgIDxNZW51Lkl0ZW0gbmFtZT1cImhvbWVcIiBhY3RpdmU9e2FjdGl2ZUl0ZW0gPT09IFwiaG9tZVwifSBvbkNsaWNrPXtnb0xpbmt9IC8+XHJcbiAgICAgIDxNZW51Lkl0ZW1cclxuICAgICAgICBuYW1lPVwiYWJvdXRcIlxyXG4gICAgICAgIGFjdGl2ZT17YWN0aXZlSXRlbSA9PT0gXCJhYm91dFwifVxyXG4gICAgICAgIG9uQ2xpY2s9e2dvTGlua31cclxuICAgICAgLz5cclxuICAgICAgPE1lbnUuSXRlbVxyXG4gICAgICAgIG5hbWU9XCJmcmllbmRzXCJcclxuICAgICAgICBhY3RpdmU9e2FjdGl2ZUl0ZW0gPT09IFwiZnJpZW5kc1wifVxyXG4gICAgICAgIG9uQ2xpY2s9e2dvTGlua31cclxuICAgICAgLz5cclxuICAgIDwvTWVudT5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJNZW51IiwiR25iIiwiYWN0aXZlSXRlbSIsInJvdXRlciIsImdvTGluayIsImUiLCJkYXRhIiwibmFtZSIsInB1c2giLCJpbnZlcnRlZCIsIkl0ZW0iLCJhY3RpdmUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/component/Gnb.jsx\n");

/***/ })

});