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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Gnb; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n\n\n\nvar _s = $RefreshSig$();\nfunction Gnb() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var activeItem;\n    if (router.pathname === \"/\") {\n        activeItem = \"home\";\n    } else if (router.pathname === \"/about\") {\n        activeItem = \"about\";\n    }\n    var goLink = function(e, data) {\n        if (data.name === \"home\") {\n            router.push(\"/\");\n        } else if (data.name === \"about\") {\n            router.push(\"/about\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Menu, {\n        inverted: true,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Menu.Item, {\n                name: \"home\",\n                active: activeItem === \"home\",\n                onClick: goLink\n            }, void 0, false, {\n                fileName: \"C:\\\\cheon\\\\coding\\\\front\\\\NextJS\\\\nextjs-tutorial-2\\\\src\\\\component\\\\Gnb.jsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Menu.Item, {\n                name: \"about\",\n                active: activeItem === \"about\",\n                onClick: goLink\n            }, void 0, false, {\n                fileName: \"C:\\\\cheon\\\\coding\\\\front\\\\NextJS\\\\nextjs-tutorial-2\\\\src\\\\component\\\\Gnb.jsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Menu.Item, {\n                name: \"Contact Us\",\n                active: activeItem === \"contact\",\n                onClick: function() {\n                    router.push(\"/contact\");\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\cheon\\\\coding\\\\front\\\\NextJS\\\\nextjs-tutorial-2\\\\src\\\\component\\\\Gnb.jsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\cheon\\\\coding\\\\front\\\\NextJS\\\\nextjs-tutorial-2\\\\src\\\\component\\\\Gnb.jsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n};\n_s(Gnb, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Gnb;\nvar _c;\n$RefreshReg$(_c, \"Gnb\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50L0duYi5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFBd0M7QUFDQzs7QUFFMUIsU0FBU0UsR0FBRyxHQUFHOztJQUM1QixJQUFNQyxNQUFNLEdBQUdILHNEQUFTLEVBQUU7SUFDMUIsSUFBSUksVUFBVTtJQUNkLElBQUlELE1BQU0sQ0FBQ0UsUUFBUSxLQUFLLEdBQUcsRUFBRTtRQUMzQkQsVUFBVSxHQUFHLE1BQU0sQ0FBQztLQUNyQixNQUFNLElBQUlELE1BQU0sQ0FBQ0UsUUFBUSxLQUFLLFFBQVEsRUFBRTtRQUN2Q0QsVUFBVSxHQUFHLE9BQU8sQ0FBQztLQUN0QjtJQUVELElBQU1FLE1BQU0sR0FBRyxTQUFDQyxDQUFDLEVBQUVDLElBQUksRUFBSztRQUMxQixJQUFJQSxJQUFJLENBQUNDLElBQUksS0FBSyxNQUFNLEVBQUU7WUFDeEJOLE1BQU0sQ0FBQ08sSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2xCLE1BQU0sSUFBSUYsSUFBSSxDQUFDQyxJQUFJLEtBQUssT0FBTyxFQUFFO1lBQ2hDTixNQUFNLENBQUNPLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUN2QjtLQUNGO0lBQ0QscUJBQ0UsOERBQUNULG1EQUFJO1FBQUNVLFFBQVE7OzBCQUNaLDhEQUFDVix3REFBUztnQkFBQ1EsSUFBSSxFQUFDLE1BQU07Z0JBQUNJLE1BQU0sRUFBRVQsVUFBVSxLQUFLLE1BQU07Z0JBQUVVLE9BQU8sRUFBRVIsTUFBTTs7Ozs7b0JBQUk7MEJBQ3pFLDhEQUFDTCx3REFBUztnQkFDUlEsSUFBSSxFQUFDLE9BQU87Z0JBQ1pJLE1BQU0sRUFBRVQsVUFBVSxLQUFLLE9BQU87Z0JBQzlCVSxPQUFPLEVBQUVSLE1BQU07Ozs7O29CQUNmOzBCQUNGLDhEQUFDTCx3REFBUztnQkFDUlEsSUFBSSxFQUFDLFlBQVk7Z0JBQ2pCSSxNQUFNLEVBQUVULFVBQVUsS0FBSyxTQUFTO2dCQUNoQ1UsT0FBTyxFQUFFLFdBQU07b0JBQ2JYLE1BQU0sQ0FBQ08sSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2lCQUN6Qjs7Ozs7b0JBQ0Q7Ozs7OztZQUNHLENBQ1A7Q0FDSDtHQWpDdUJSLEdBQUc7O1FBQ1ZGLGtEQUFTOzs7QUFERkUsS0FBQUEsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50L0duYi5qc3g/MGVhMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgTWVudSB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR25iKCkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGxldCBhY3RpdmVJdGVtO1xyXG4gIGlmIChyb3V0ZXIucGF0aG5hbWUgPT09IFwiL1wiKSB7XHJcbiAgICBhY3RpdmVJdGVtID0gXCJob21lXCI7XHJcbiAgfSBlbHNlIGlmIChyb3V0ZXIucGF0aG5hbWUgPT09IFwiL2Fib3V0XCIpIHtcclxuICAgIGFjdGl2ZUl0ZW0gPSBcImFib3V0XCI7XHJcbiAgfVxyXG5cclxuICBjb25zdCBnb0xpbmsgPSAoZSwgZGF0YSkgPT4ge1xyXG4gICAgaWYgKGRhdGEubmFtZSA9PT0gXCJob21lXCIpIHtcclxuICAgICAgcm91dGVyLnB1c2goXCIvXCIpO1xyXG4gICAgfSBlbHNlIGlmIChkYXRhLm5hbWUgPT09IFwiYWJvdXRcIikge1xyXG4gICAgICByb3V0ZXIucHVzaChcIi9hYm91dFwiKTtcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8TWVudSBpbnZlcnRlZD5cclxuICAgICAgPE1lbnUuSXRlbSBuYW1lPVwiaG9tZVwiIGFjdGl2ZT17YWN0aXZlSXRlbSA9PT0gXCJob21lXCJ9IG9uQ2xpY2s9e2dvTGlua30gLz5cclxuICAgICAgPE1lbnUuSXRlbVxyXG4gICAgICAgIG5hbWU9XCJhYm91dFwiXHJcbiAgICAgICAgYWN0aXZlPXthY3RpdmVJdGVtID09PSBcImFib3V0XCJ9XHJcbiAgICAgICAgb25DbGljaz17Z29MaW5rfVxyXG4gICAgICAvPlxyXG4gICAgICA8TWVudS5JdGVtXHJcbiAgICAgICAgbmFtZT1cIkNvbnRhY3QgVXNcIlxyXG4gICAgICAgIGFjdGl2ZT17YWN0aXZlSXRlbSA9PT0gXCJjb250YWN0XCJ9XHJcbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgcm91dGVyLnB1c2goXCIvY29udGFjdFwiKTtcclxuICAgICAgICB9fVxyXG4gICAgICAvPlxyXG4gICAgPC9NZW51PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsIk1lbnUiLCJHbmIiLCJyb3V0ZXIiLCJhY3RpdmVJdGVtIiwicGF0aG5hbWUiLCJnb0xpbmsiLCJlIiwiZGF0YSIsIm5hbWUiLCJwdXNoIiwiaW52ZXJ0ZWQiLCJJdGVtIiwiYWN0aXZlIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/component/Gnb.jsx\n");

/***/ })

});