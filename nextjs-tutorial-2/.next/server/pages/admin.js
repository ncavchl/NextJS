"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/admin";
exports.ids = ["pages/admin"];
exports.modules = {

/***/ "./pages/admin.js":
/*!************************!*\
  !*** ./pages/admin.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Admin)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction Admin() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const checkLogin = ()=>{\n        axios__WEBPACK_IMPORTED_MODULE_1___default().get(\"/api/IsLogin\").then((res)=>{\n            if (res.status === 200 && res.data.name) {\n            //로그인\n            } else {\n                router.push(\"/login\");\n            }\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        checkLogin();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: \"admin\"\n    }, void 0, false);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hZG1pbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUEwQjtBQUNjO0FBQ047QUFFbkIsU0FBU0csS0FBSyxHQUFHO0lBQzlCLE1BQU1DLE1BQU0sR0FBR0gsc0RBQVMsRUFBRTtJQUMxQixNQUFNSSxVQUFVLEdBQUcsSUFBTTtRQUN2QkwsZ0RBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQ08sSUFBSSxDQUFDLENBQUNDLEdBQUcsR0FBSztZQUN0QyxJQUFJQSxHQUFHLENBQUNDLE1BQU0sS0FBSyxHQUFHLElBQUlELEdBQUcsQ0FBQ0UsSUFBSSxDQUFDQyxJQUFJLEVBQUU7WUFDdkM7YUFDRCxNQUFNO2dCQUNMUCxNQUFNLENBQUNRLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUN2QjtTQUNGLENBQUMsQ0FBQztLQUNKO0lBRURWLGdEQUFTLENBQUMsSUFBTTtRQUNkRyxVQUFVLEVBQUUsQ0FBQztLQUNkLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFUCxxQkFBTztrQkFBRSxPQUFLO3FCQUFHLENBQUM7Q0FDbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtdHV0b3JpYWwvLi9wYWdlcy9hZG1pbi5qcz84NWMxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWRtaW4oKSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgY2hlY2tMb2dpbiA9ICgpID0+IHtcclxuICAgIGF4aW9zLmdldChcIi9hcGkvSXNMb2dpblwiKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDIwMCAmJiByZXMuZGF0YS5uYW1lKSB7XHJcbiAgICAgICAgLy/roZzqt7jsnbhcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByb3V0ZXIucHVzaChcIi9sb2dpblwiKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNoZWNrTG9naW4oKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiA8PmFkbWluPC8+O1xyXG59XHJcbiJdLCJuYW1lcyI6WyJheGlvcyIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsIkFkbWluIiwicm91dGVyIiwiY2hlY2tMb2dpbiIsImdldCIsInRoZW4iLCJyZXMiLCJzdGF0dXMiLCJkYXRhIiwibmFtZSIsInB1c2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/admin.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/admin.js"));
module.exports = __webpack_exports__;

})();