"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _src_component_ItemList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/component/ItemList */ \"./src/component/ItemList.jsx\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(), list = ref[0], setList = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true), isLoading = ref1[0], setLoading = ref1[1];\n    var API_URL = \"http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline\";\n    var getData = function() {\n        axios__WEBPACK_IMPORTED_MODULE_4___default().get(API_URL).then(function(res) {\n            console.log(res.data);\n            setList(res.data);\n            setLoading(false);\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        getData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"HOME | \\uCF54\\uB529\\uC559\\uB9C8\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\coding\\\\Study\\\\NextJS\\\\nextjs-tutorial-2\\\\pages\\\\index.js\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"\\uCF54\\uB529 \\uC559\\uB9C8 \\uD648\\uC784\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\coding\\\\Study\\\\NextJS\\\\nextjs-tutorial-2\\\\pages\\\\index.js\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\coding\\\\Study\\\\NextJS\\\\nextjs-tutorial-2\\\\pages\\\\index.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            isLoading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    padding: \"300px 0\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Loader, {\n                    inline: \"centered\",\n                    active: true,\n                    children: \"Loading\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\coding\\\\Study\\\\NextJS\\\\nextjs-tutorial-2\\\\pages\\\\index.js\",\n                    lineNumber: 34,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\coding\\\\Study\\\\NextJS\\\\nextjs-tutorial-2\\\\pages\\\\index.js\",\n                lineNumber: 33,\n                columnNumber: 9\n            }, this),\n            !isLoading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Header, {\n                        as: \"h3\",\n                        style: {\n                            paddingTop: 40\n                        },\n                        children: \"\\uBCA0\\uC2A4\\uD2B8 \\uC0C1\\uD488\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\coding\\\\Study\\\\NextJS\\\\nextjs-tutorial-2\\\\pages\\\\index.js\",\n                        lineNumber: 41,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Divider, {}, void 0, false, {\n                        fileName: \"D:\\\\coding\\\\Study\\\\NextJS\\\\nextjs-tutorial-2\\\\pages\\\\index.js\",\n                        lineNumber: 44,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_component_ItemList__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        list: list\n                    }, void 0, false, {\n                        fileName: \"D:\\\\coding\\\\Study\\\\NextJS\\\\nextjs-tutorial-2\\\\pages\\\\index.js\",\n                        lineNumber: 45,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Header, {\n                        as: \"h3\",\n                        style: {\n                            paddingTop: 40\n                        },\n                        children: \"\\uC2E0\\uC0C1\\uD488\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\coding\\\\Study\\\\NextJS\\\\nextjs-tutorial-2\\\\pages\\\\index.js\",\n                        lineNumber: 46,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Divider, {}, void 0, false, {\n                        fileName: \"D:\\\\coding\\\\Study\\\\NextJS\\\\nextjs-tutorial-2\\\\pages\\\\index.js\",\n                        lineNumber: 49,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\coding\\\\Study\\\\NextJS\\\\nextjs-tutorial-2\\\\pages\\\\index.js\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this);\n};\n_s(Home, \"E3lQ0twlHiqq0Oh3MygrV3ba5uw=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUE2QjtBQUNFO0FBQ2E7QUFDRztBQUNyQjtBQUN1QjtBQUNXOztBQUU3QyxTQUFTVSxJQUFJLEdBQUc7O0lBQzdCLElBQXdCUCxHQUFVLEdBQVZBLCtDQUFRLEVBQUUsRUFUcEMsSUFTYSxHQUFhQSxHQUFVLEdBQXZCLEVBVGIsT0FTc0IsR0FBSUEsR0FBVSxHQUFkO0lBQ3BCLElBQWdDQSxJQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxDQUFDLEVBVmhELFNBVWtCLEdBQWdCQSxJQUFjLEdBQTlCLEVBVmxCLFVBVThCLEdBQUlBLElBQWMsR0FBbEI7SUFDNUIsSUFBTVksT0FBTyxHQUNYLHVFQUF1RTtJQUV6RSxJQUFNQyxPQUFPLEdBQUcsV0FBTTtRQUNwQlgsZ0RBQVMsQ0FBQ1UsT0FBTyxDQUFDLENBQUNHLElBQUksQ0FBQyxTQUFDQyxHQUFHLEVBQUs7WUFDL0JDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixHQUFHLENBQUNHLElBQUksQ0FBQyxDQUFDO1lBQ3RCVixPQUFPLENBQUNPLEdBQUcsQ0FBQ0csSUFBSSxDQUFDLENBQUM7WUFDbEJSLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNuQixDQUFDLENBQUM7S0FDSjtJQUVEWixnREFBUyxDQUFDLFdBQU07UUFDZGMsT0FBTyxFQUFFLENBQUM7S0FDWCxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ1AscUJBQ0UsOERBQUNPLEtBQUc7UUFBQ0MsU0FBUyxFQUFFcEIsMEVBQWdCOzswQkFDOUIsOERBQUNKLGtEQUFJOztrQ0FDSCw4REFBQzBCLE9BQUs7a0NBQUMsaUNBQVc7Ozs7OzRCQUFnQjtrQ0FDMUIsOERBQVBDLE1BQUk7d0JBQUNDLElBQUksRUFBQyxhQUFhO3dCQUFDQyxPQUFPLEVBQUMsd0NBQVU7Ozs7OzRCQUFvQjs7Ozs7O29CQUM5QztZQUNsQmhCLFNBQVMsa0JBQ1IsOERBQUNVLEtBQUc7Z0JBQUNPLEtBQUssRUFBRTtvQkFBRUMsT0FBTyxFQUFFLFNBQVM7aUJBQUU7MEJBQ2hDLDRFQUFDdEIscURBQU07b0JBQUN1QixNQUFNLEVBQUMsVUFBVTtvQkFBQ0MsTUFBTTs4QkFBQyxTQUVqQzs7Ozs7d0JBQVM7Ozs7O29CQUNMO1lBRVAsQ0FBQ3BCLFNBQVMsa0JBQ1Q7O2tDQUNFLDhEQUFDTCxxREFBTTt3QkFBQzBCLEVBQUUsRUFBQyxJQUFJO3dCQUFDSixLQUFLLEVBQUU7NEJBQUVLLFVBQVUsRUFBRSxFQUFFO3lCQUFFO2tDQUFFLGlDQUUzQzs7Ozs7NEJBQVM7a0NBQ1QsOERBQUM1QixzREFBTzs7Ozs0QkFBRztrQ0FDWCw4REFBQ0QsK0RBQVE7d0JBQUNLLElBQUksRUFBRUEsSUFBSTs7Ozs7NEJBQWE7a0NBQ2pDLDhEQUFDSCxxREFBTTt3QkFBQzBCLEVBQUUsRUFBQyxJQUFJO3dCQUFDSixLQUFLLEVBQUU7NEJBQUVLLFVBQVUsRUFBRSxFQUFFO3lCQUFFO2tDQUFFLG9CQUUzQzs7Ozs7NEJBQVM7a0NBQ1QsOERBQUM1QixzREFBTzs7Ozs0QkFBRzs7NEJBQ1Y7Ozs7OztZQUVELENBQ047Q0FDSDtHQTdDdUJHLElBQUk7QUFBSkEsS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBJdGVtTGlzdCBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudC9JdGVtTGlzdFwiO1xyXG5pbXBvcnQgeyBEaXZpZGVyLCBIZWFkZXIsIExvYWRlciB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICBjb25zdCBbbGlzdCwgc2V0TGlzdF0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgQVBJX1VSTCA9XHJcbiAgICBcImh0dHA6Ly9tYWtldXAtYXBpLmhlcm9rdWFwcC5jb20vYXBpL3YxL3Byb2R1Y3RzLmpzb24/YnJhbmQ9bWF5YmVsbGluZVwiO1xyXG5cclxuICBjb25zdCBnZXREYXRhID0gKCkgPT4ge1xyXG4gICAgYXhpb3MuZ2V0KEFQSV9VUkwpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcbiAgICAgIHNldExpc3QocmVzLmRhdGEpO1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXREYXRhKCk7XHJcbiAgfSwgW10pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5IT01FIHwg7L2U65Sp7JWZ66eIPC90aXRsZT5cclxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwi7L2U65SpIOyVmeuniCDtmYjsnoRcIj48L21ldGE+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAge2lzTG9hZGluZyAmJiAoXHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiBcIjMwMHB4IDBcIiB9fT5cclxuICAgICAgICAgIDxMb2FkZXIgaW5saW5lPVwiY2VudGVyZWRcIiBhY3RpdmU+XHJcbiAgICAgICAgICAgIExvYWRpbmdcclxuICAgICAgICAgIDwvTG9hZGVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgICB7IWlzTG9hZGluZyAmJiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxIZWFkZXIgYXM9XCJoM1wiIHN0eWxlPXt7IHBhZGRpbmdUb3A6IDQwIH19PlxyXG4gICAgICAgICAgICDrsqDsiqTtirgg7IOB7ZKIXHJcbiAgICAgICAgICA8L0hlYWRlcj5cclxuICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICA8SXRlbUxpc3QgbGlzdD17bGlzdH0+PC9JdGVtTGlzdD5cclxuICAgICAgICAgIDxIZWFkZXIgYXM9XCJoM1wiIHN0eWxlPXt7IHBhZGRpbmdUb3A6IDQwIH19PlxyXG4gICAgICAgICAgICDsi6Dsg4HtkohcclxuICAgICAgICAgIDwvSGVhZGVyPlxyXG4gICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICA8Lz5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkhlYWQiLCJJbWFnZSIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwiYXhpb3MiLCJJdGVtTGlzdCIsIkRpdmlkZXIiLCJIZWFkZXIiLCJMb2FkZXIiLCJIb21lIiwibGlzdCIsInNldExpc3QiLCJpc0xvYWRpbmciLCJzZXRMb2FkaW5nIiwiQVBJX1VSTCIsImdldERhdGEiLCJnZXQiLCJ0aGVuIiwicmVzIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsInN0eWxlIiwicGFkZGluZyIsImlubGluZSIsImFjdGl2ZSIsImFzIiwicGFkZGluZ1RvcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});