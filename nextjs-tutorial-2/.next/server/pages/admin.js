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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Admin)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ \"semantic-ui-react\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction Admin() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { 0: isLogin , 1: setIsLogin  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const checkLogin = ()=>{\n        axios__WEBPACK_IMPORTED_MODULE_1___default().get(\"/api/IsLogin\").then((res)=>{\n            if (res.status === 200 && res.data.name) {\n                //로그인\n                setIsLogin(true);\n            } else {\n                router.push(\"/login\");\n            }\n        });\n    };\n    const logout = ()=>{\n        axios__WEBPACK_IMPORTED_MODULE_1___default().get(\"/api/logout\").then((res)=>{\n            if (res.status = 200) router.push(\"/\");\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        checkLogin();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            \"admin\",\n            isLogin && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                onClick: logout,\n                children: \"Logout\"\n            }, void 0, false, {\n                fileName: \"D:\\\\coding\\\\Study\\\\NextJS\\\\nextjs-tutorial-2\\\\pages\\\\admin.js\",\n                lineNumber: 33,\n                columnNumber: 19\n            }, this)\n        ]\n    }, void 0, true);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hZG1pbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQTBCO0FBQ2M7QUFDRztBQUNDO0FBRTdCLFNBQVNLLEtBQUssR0FBRztJQUM5QixNQUFNQyxNQUFNLEdBQUdMLHNEQUFTLEVBQUU7SUFDMUIsTUFBTSxFQVBSLEdBT1NNLE9BQU8sR0FQaEIsR0FPa0JDLFVBQVUsTUFBSUosK0NBQVEsQ0FBQyxLQUFLLENBQUM7SUFDN0MsTUFBTUssVUFBVSxHQUFHLElBQU07UUFDdkJULGdEQUFTLENBQUMsY0FBYyxDQUFDLENBQUNXLElBQUksQ0FBQyxDQUFDQyxHQUFHLEdBQUs7WUFDdEMsSUFBSUEsR0FBRyxDQUFDQyxNQUFNLEtBQUssR0FBRyxJQUFJRCxHQUFHLENBQUNFLElBQUksQ0FBQ0MsSUFBSSxFQUFFO2dCQUN2QztnQkFDQVAsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ2xCLE1BQU07Z0JBQ0xGLE1BQU0sQ0FBQ1UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ3ZCO1NBQ0YsQ0FBQyxDQUFDO0tBQ0o7SUFFRCxNQUFNQyxNQUFNLEdBQUcsSUFBTTtRQUNuQmpCLGdEQUFTLENBQUMsYUFBYSxDQUFDLENBQUNXLElBQUksQ0FBQyxDQUFDQyxHQUFHLEdBQUs7WUFDckMsSUFBS0EsR0FBRyxDQUFDQyxNQUFNLEdBQUcsR0FBRyxFQUFHUCxNQUFNLENBQUNVLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUMxQyxDQUFDLENBQUM7S0FDSjtJQUVEYixnREFBUyxDQUFDLElBQU07UUFDZE0sVUFBVSxFQUFFLENBQUM7S0FDZCxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVAscUJBQ0U7O1lBQUUsT0FFQTtZQUFDRixPQUFPLGtCQUFJLDhEQUFDTCxxREFBTTtnQkFBQ2dCLE9BQU8sRUFBRUQsTUFBTTswQkFBRSxRQUFNOzs7OztvQkFBUzs7b0JBQ25ELENBQ0g7Q0FDSCIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy10dXRvcmlhbC8uL3BhZ2VzL2FkbWluLmpzPzg1YzEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFkbWluKCkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IFtpc0xvZ2luLCBzZXRJc0xvZ2luXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBjaGVja0xvZ2luID0gKCkgPT4ge1xyXG4gICAgYXhpb3MuZ2V0KFwiL2FwaS9Jc0xvZ2luXCIpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICBpZiAocmVzLnN0YXR1cyA9PT0gMjAwICYmIHJlcy5kYXRhLm5hbWUpIHtcclxuICAgICAgICAvL+uhnOq3uOyduFxyXG4gICAgICAgIHNldElzTG9naW4odHJ1ZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcm91dGVyLnB1c2goXCIvbG9naW5cIik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGxvZ291dCA9ICgpID0+IHtcclxuICAgIGF4aW9zLmdldChcIi9hcGkvbG9nb3V0XCIpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICBpZiAoKHJlcy5zdGF0dXMgPSAyMDApKSByb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY2hlY2tMb2dpbigpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIGFkbWluXHJcbiAgICAgIHtpc0xvZ2luICYmIDxCdXR0b24gb25DbGljaz17bG9nb3V0fT5Mb2dvdXQ8L0J1dHRvbj59XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJheGlvcyIsInVzZVJvdXRlciIsIkJ1dHRvbiIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQWRtaW4iLCJyb3V0ZXIiLCJpc0xvZ2luIiwic2V0SXNMb2dpbiIsImNoZWNrTG9naW4iLCJnZXQiLCJ0aGVuIiwicmVzIiwic3RhdHVzIiwiZGF0YSIsIm5hbWUiLCJwdXNoIiwibG9nb3V0Iiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/admin.js\n");

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

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("semantic-ui-react");

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