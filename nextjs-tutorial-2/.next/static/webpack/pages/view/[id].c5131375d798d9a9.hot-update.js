"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/view/[id]",{

/***/ "./pages/view/[id].jsx":
/*!*****************************!*\
  !*** ./pages/view/[id].jsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Post; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _src_component_Item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/component/Item */ \"./src/component/Item.jsx\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Post() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var id = router.query.id;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(), item = ref[0], setItem = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true), isLoading = ref1[0], setLoading = ref1[1];\n    var API_URL = \"http://makeup-api.herokuapp.com/api/v1/products/\".concat(id, \".json\");\n    var getData = function() {\n        axios__WEBPACK_IMPORTED_MODULE_2___default().get(API_URL).then(function(res) {\n            console.log(res.data);\n            setItem(res.data);\n            setLoading(false);\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        if (id && id > 0) getData();\n    }, [\n        id\n    ]);\n    return isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Loader, {}, void 0, false, {\n        fileName: \"D:\\\\coding\\\\Study\\\\NextJS\\\\nextjs-tutorial-2\\\\pages\\\\view\\\\[id].jsx\",\n        lineNumber: 27,\n        columnNumber: 22\n    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_component_Item__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        item: item\n    }, void 0, false, {\n        fileName: \"D:\\\\coding\\\\Study\\\\NextJS\\\\nextjs-tutorial-2\\\\pages\\\\view\\\\[id].jsx\",\n        lineNumber: 27,\n        columnNumber: 42\n    }, this);\n};\n_s(Post, \"YUtJ0vRIJLGRqbLguiXAJxJ8a8I=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Post;\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy92aWV3L1tpZF0uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBd0M7QUFDZDtBQUNrQjtBQUNBO0FBQ0Q7O0FBRTVCLFNBQVNNLElBQUksR0FBRzs7SUFDN0IsSUFBTUMsTUFBTSxHQUFHUCxzREFBUyxFQUFFO0lBQzFCLElBQU0sRUFBSSxHQUFLTyxNQUFNLENBQUNFLEtBQUssQ0FBbkJELEVBQUU7SUFDVixJQUF3QkwsR0FBVSxHQUFWQSwrQ0FBUSxFQUFFLEVBVHBDLElBU2EsR0FBYUEsR0FBVSxHQUF2QixFQVRiLE9BU3NCLEdBQUlBLEdBQVUsR0FBZDtJQUNwQixJQUFnQ0EsSUFBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksQ0FBQyxFQVZoRCxTQVVrQixHQUFnQkEsSUFBYyxHQUE5QixFQVZsQixVQVU4QixHQUFJQSxJQUFjLEdBQWxCO0lBRTVCLElBQU1XLE9BQU8sR0FBRyxrREFBaUQsQ0FBSyxNQUFLLENBQVJOLEVBQUUsRUFBQyxPQUFLLENBQUM7SUFFNUUsSUFBTU8sT0FBTyxHQUFHLFdBQU07UUFDcEJkLGdEQUFTLENBQUNhLE9BQU8sQ0FBQyxDQUFDRyxJQUFJLENBQUMsU0FBQ0MsR0FBRyxFQUFLO1lBQy9CQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsR0FBRyxDQUFDRyxJQUFJLENBQUMsQ0FBQztZQUN0QlYsT0FBTyxDQUFDTyxHQUFHLENBQUNHLElBQUksQ0FBQyxDQUFDO1lBQ2xCUixVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDbkIsQ0FBQyxDQUFDO0tBQ0o7SUFFRFgsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2QsSUFBSU0sRUFBRSxJQUFJQSxFQUFFLEdBQUcsQ0FBQyxFQUFFTyxPQUFPLEVBQUUsQ0FBQztLQUM3QixFQUFFO1FBQUNQLEVBQUU7S0FBQyxDQUFDLENBQUM7SUFFVCxPQUFPSSxTQUFTLGlCQUFHLDhEQUFDUCxxREFBTTs7OztZQUFVLGlCQUFHLDhEQUFDRCwyREFBSTtRQUFDTSxJQUFJLEVBQUVBLElBQUk7Ozs7O1lBQUksQ0FBQztDQUM3RDtHQXJCdUJKLElBQUk7O1FBQ1hOLGtEQUFTOzs7QUFERk0sS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy92aWV3L1tpZF0uanN4P2MwOWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSXRlbSBmcm9tIFwiLi4vLi4vc3JjL2NvbXBvbmVudC9JdGVtXCI7XHJcbmltcG9ydCB7IExvYWRlciB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdCgpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgY29uc3QgW2l0ZW0sIHNldEl0ZW1dID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICBjb25zdCBBUElfVVJMID0gYGh0dHA6Ly9tYWtldXAtYXBpLmhlcm9rdWFwcC5jb20vYXBpL3YxL3Byb2R1Y3RzLyR7aWR9Lmpzb25gO1xyXG5cclxuICBjb25zdCBnZXREYXRhID0gKCkgPT4ge1xyXG4gICAgYXhpb3MuZ2V0KEFQSV9VUkwpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcbiAgICAgIHNldEl0ZW0ocmVzLmRhdGEpO1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoaWQgJiYgaWQgPiAwKSBnZXREYXRhKCk7XHJcbiAgfSwgW2lkXSk7XHJcblxyXG4gIHJldHVybiBpc0xvYWRpbmcgPyA8TG9hZGVyPjwvTG9hZGVyPiA6IDxJdGVtIGl0ZW09e2l0ZW19IC8+O1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJheGlvcyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSXRlbSIsIkxvYWRlciIsIlBvc3QiLCJyb3V0ZXIiLCJpZCIsInF1ZXJ5IiwiaXRlbSIsInNldEl0ZW0iLCJpc0xvYWRpbmciLCJzZXRMb2FkaW5nIiwiQVBJX1VSTCIsImdldERhdGEiLCJnZXQiLCJ0aGVuIiwicmVzIiwiY29uc29sZSIsImxvZyIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/view/[id].jsx\n");

/***/ })

});