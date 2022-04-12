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
exports.id = "pages/view/[id]";
exports.ids = ["pages/view/[id]"];
exports.modules = {

/***/ "./src/component/Item.module.css":
/*!***************************************!*\
  !*** ./src/component/Item.module.css ***!
  \***************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"wrap\": \"Item_wrap__g9KWc\",\n\t\"img_item\": \"Item_img_item__3vkPS\",\n\t\"info_item\": \"Item_info_item__0EHbA\",\n\t\"tit_item\": \"Item_tit_item__mfoBK\",\n\t\"num_price\": \"Item_num_price__MTSpm\",\n\t\"txt_info\": \"Item_txt_info__QTN5i\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50L0l0ZW0ubW9kdWxlLmNzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtdHV0b3JpYWwvLi9zcmMvY29tcG9uZW50L0l0ZW0ubW9kdWxlLmNzcz83MWIyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIndyYXBcIjogXCJJdGVtX3dyYXBfX2c5S1djXCIsXG5cdFwiaW1nX2l0ZW1cIjogXCJJdGVtX2ltZ19pdGVtX18zdmtQU1wiLFxuXHRcImluZm9faXRlbVwiOiBcIkl0ZW1faW5mb19pdGVtX18wRUhiQVwiLFxuXHRcInRpdF9pdGVtXCI6IFwiSXRlbV90aXRfaXRlbV9fbWZvQktcIixcblx0XCJudW1fcHJpY2VcIjogXCJJdGVtX251bV9wcmljZV9fTVRTcG1cIixcblx0XCJ0eHRfaW5mb1wiOiBcIkl0ZW1fdHh0X2luZm9fX1FUTjVpXCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/component/Item.module.css\n");

/***/ }),

/***/ "./pages/view/[id].jsx":
/*!*****************************!*\
  !*** ./pages/view/[id].jsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _src_component_Item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/component/Item */ \"./src/component/Item.jsx\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-react */ \"semantic-ui-react\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nconst Post = ({ item  })=>{\n    const { 0: isLoading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: item && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                            children: \"HOME | \\uCF54\\uB529\\uC559\\uB9C8\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\coding\\\\Study\\\\NextJS\\\\nextjs-tutorial-2\\\\pages\\\\view\\\\[id].jsx\",\n                            lineNumber: 16,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            name: \"description\",\n                            content: \"\\uCF54\\uB529 \\uC559\\uB9C8 \\uD648\\uC784\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\coding\\\\Study\\\\NextJS\\\\nextjs-tutorial-2\\\\pages\\\\view\\\\[id].jsx\",\n                            lineNumber: 17,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\coding\\\\Study\\\\NextJS\\\\nextjs-tutorial-2\\\\pages\\\\view\\\\[id].jsx\",\n                    lineNumber: 15,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_component_Item__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    item: item\n                }, void 0, false, {\n                    fileName: \"D:\\\\coding\\\\Study\\\\NextJS\\\\nextjs-tutorial-2\\\\pages\\\\view\\\\[id].jsx\",\n                    lineNumber: 19,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true)\n    }, void 0, false);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post);\nasync function getServerSideProps(context) {\n    const id = context.params.id;\n    const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;\n    const res = await axios__WEBPACK_IMPORTED_MODULE_2___default().get(API_URL);\n    const data = res.data;\n    return {\n        props: {\n            item: data\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy92aWV3L1tpZF0uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQXdDO0FBQ2Q7QUFDa0I7QUFDQTtBQUNmO0FBQ2M7QUFFM0MsTUFBTU8sSUFBSSxHQUFHLENBQUMsRUFBRUMsSUFBSSxHQUFFLEdBQUs7SUFDekIsTUFBTSxFQVJSLEdBUVNDLFNBQVMsR0FSbEIsR0FRb0JDLFVBQVUsTUFBSVAsK0NBQVEsQ0FBQyxJQUFJLENBQUM7SUFFOUMscUJBQ0U7a0JBQ0dLLElBQUksa0JBQ0g7OzhCQUNFLDhEQUFDSCxrREFBSTs7c0NBQ0gsOERBQUNNLE9BQUs7c0NBQUMsaUNBQVc7Ozs7O3FDQUFnQjtzQ0FDMUIsOERBQVBDLE1BQUk7NEJBQUNDLElBQUksRUFBQyxhQUFhOzRCQUFDQyxPQUFPLEVBQUMsd0NBQVU7Ozs7O3FDQUFROzs7Ozs7NkJBQzlDOzhCQUNQLDhEQUFDViwyREFBSTtvQkFBQ0ksSUFBSSxFQUFFQSxJQUFJOzs7Ozs2QkFBSTs7d0JBQ25CO3FCQUVKLENBQ0g7Q0FDSDtBQUVELGlFQUFlRCxJQUFJLEVBQUM7QUFFYixlQUFlUSxrQkFBa0IsQ0FBQ0MsT0FBTyxFQUFFO0lBQ2hELE1BQU1DLEVBQUUsR0FBR0QsT0FBTyxDQUFDRSxNQUFNLENBQUNELEVBQUU7SUFDNUIsTUFBTUUsT0FBTyxHQUFHLENBQUMsZ0RBQWdELEVBQUVGLEVBQUUsQ0FBQyxLQUFLLENBQUM7SUFDNUUsTUFBTUcsR0FBRyxHQUFHLE1BQU1uQixnREFBUyxDQUFDa0IsT0FBTyxDQUFDO0lBQ3BDLE1BQU1HLElBQUksR0FBR0YsR0FBRyxDQUFDRSxJQUFJO0lBQ3JCLE9BQU87UUFDTEMsS0FBSyxFQUFFO1lBQ0xmLElBQUksRUFBRWMsSUFBSTtTQUNYO0tBQ0YsQ0FBQztDQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLXR1dG9yaWFsLy4vcGFnZXMvdmlldy9baWRdLmpzeD9jMDllIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEl0ZW0gZnJvbSBcIi4uLy4uL3NyYy9jb21wb25lbnQvSXRlbVwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCB7IExvYWRlciB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5cclxuY29uc3QgUG9zdCA9ICh7IGl0ZW0gfSkgPT4ge1xyXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7aXRlbSAmJiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICA8dGl0bGU+SE9NRSB8IOy9lOuUqeyVmeuniDwvdGl0bGU+XHJcbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCLsvZTrlKkg7JWZ66eIIO2ZiOyehFwiPjwvbWV0YT5cclxuICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgIDxJdGVtIGl0ZW09e2l0ZW19IC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdDtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4gIGNvbnN0IGlkID0gY29udGV4dC5wYXJhbXMuaWQ7XHJcbiAgY29uc3QgQVBJX1VSTCA9IGBodHRwOi8vbWFrZXVwLWFwaS5oZXJva3VhcHAuY29tL2FwaS92MS9wcm9kdWN0cy8ke2lkfS5qc29uYDtcclxuICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoQVBJX1VSTCk7XHJcbiAgY29uc3QgZGF0YSA9IHJlcy5kYXRhO1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBpdGVtOiBkYXRhLFxyXG4gICAgfSxcclxuICB9O1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJheGlvcyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSXRlbSIsIkhlYWQiLCJMb2FkZXIiLCJQb3N0IiwiaXRlbSIsImlzTG9hZGluZyIsInNldExvYWRpbmciLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImdldFNlcnZlclNpZGVQcm9wcyIsImNvbnRleHQiLCJpZCIsInBhcmFtcyIsIkFQSV9VUkwiLCJyZXMiLCJnZXQiLCJkYXRhIiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/view/[id].jsx\n");

/***/ }),

/***/ "./src/component/Item.jsx":
/*!********************************!*\
  !*** ./src/component/Item.jsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Item)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ \"semantic-ui-react\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Item_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Item.module.css */ \"./src/component/Item.module.css\");\n/* harmony import */ var _Item_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Item_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction Item({ item ={}  }) {\n    const { name , image_link , price , description , updated_at , category , product_type , product_link ,  } = item;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Item_module_css__WEBPACK_IMPORTED_MODULE_2___default().wrap),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_Item_module_css__WEBPACK_IMPORTED_MODULE_2___default().img_item),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: image_link,\n                            alt: name\n                        }, void 0, false, {\n                            fileName: \"D:\\\\coding\\\\Study\\\\NextJS\\\\nextjs-tutorial-2\\\\src\\\\component\\\\Item.jsx\",\n                            lineNumber: 20,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\coding\\\\Study\\\\NextJS\\\\nextjs-tutorial-2\\\\src\\\\component\\\\Item.jsx\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_Item_module_css__WEBPACK_IMPORTED_MODULE_2___default().info_item),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                className: (_Item_module_css__WEBPACK_IMPORTED_MODULE_2___default().tit_item),\n                                children: name\n                            }, void 0, false, {\n                                fileName: \"D:\\\\coding\\\\Study\\\\NextJS\\\\nextjs-tutorial-2\\\\src\\\\component\\\\Item.jsx\",\n                                lineNumber: 23,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                className: (_Item_module_css__WEBPACK_IMPORTED_MODULE_2___default().num_price),\n                                children: [\n                                    \"$\",\n                                    price\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\coding\\\\Study\\\\NextJS\\\\nextjs-tutorial-2\\\\src\\\\component\\\\Item.jsx\",\n                                lineNumber: 24,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: (_Item_module_css__WEBPACK_IMPORTED_MODULE_2___default().txt_info),\n                                children: [\n                                    category ? `${category}/` : \"\",\n                                    product_type\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\coding\\\\Study\\\\NextJS\\\\nextjs-tutorial-2\\\\src\\\\component\\\\Item.jsx\",\n                                lineNumber: 25,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                                color: \"orange\",\n                                children: \"\\uAD6C\\uB9E4\\uD558\\uAE30\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\coding\\\\Study\\\\NextJS\\\\nextjs-tutorial-2\\\\src\\\\component\\\\Item.jsx\",\n                                lineNumber: 29,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\coding\\\\Study\\\\NextJS\\\\nextjs-tutorial-2\\\\src\\\\component\\\\Item.jsx\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\coding\\\\Study\\\\NextJS\\\\nextjs-tutorial-2\\\\src\\\\component\\\\Item.jsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Header, {\n                as: \"h3\",\n                children: \"Description\"\n            }, void 0, false, {\n                fileName: \"D:\\\\coding\\\\Study\\\\NextJS\\\\nextjs-tutorial-2\\\\src\\\\component\\\\Item.jsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                style: {\n                    paddingBottom: 20,\n                    fontSize: 18\n                },\n                children: description\n            }, void 0, false, {\n                fileName: \"D:\\\\coding\\\\Study\\\\NextJS\\\\nextjs-tutorial-2\\\\src\\\\component\\\\Item.jsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50L0l0ZW0uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFtRDtBQUNaO0FBRXhCLFNBQVNHLElBQUksQ0FBQyxFQUFFQyxJQUFJLEVBQUcsRUFBRSxHQUFFLEVBQUU7SUFDMUMsTUFBTSxFQUNKQyxJQUFJLEdBQ0pDLFVBQVUsR0FDVkMsS0FBSyxHQUNMQyxXQUFXLEdBQ1hDLFVBQVUsR0FDVkMsUUFBUSxHQUNSQyxZQUFZLEdBQ1pDLFlBQVksS0FDYixHQUFHUixJQUFJO0lBRVIscUJBQ0U7OzBCQUNFLDhEQUFDUyxLQUFHO2dCQUFDQyxTQUFTLEVBQUVaLDhEQUFXOztrQ0FDekIsOERBQUNXLEtBQUc7d0JBQUNDLFNBQVMsRUFBRVosa0VBQWU7a0NBQzdCLDRFQUFDZSxLQUFHOzRCQUFDQyxHQUFHLEVBQUVaLFVBQVU7NEJBQUVhLEdBQUcsRUFBRWQsSUFBSTs7Ozs7Z0NBQUk7Ozs7OzRCQUMvQjtrQ0FDTiw4REFBQ1EsS0FBRzt3QkFBQ0MsU0FBUyxFQUFFWixtRUFBZ0I7OzBDQUM5Qiw4REFBQ21CLFFBQU07Z0NBQUNQLFNBQVMsRUFBRVosa0VBQWU7MENBQUdHLElBQUk7Ozs7O29DQUFVOzBDQUNuRCw4REFBQ2dCLFFBQU07Z0NBQUNQLFNBQVMsRUFBRVosbUVBQWdCOztvQ0FBRSxHQUFDO29DQUFDSyxLQUFLOzs7Ozs7b0NBQVU7MENBQ3RELDhEQUFDaUIsTUFBSTtnQ0FBQ1YsU0FBUyxFQUFFWixrRUFBZTs7b0NBQzdCUSxRQUFRLEdBQUcsQ0FBQyxFQUFFQSxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRTtvQ0FDOUJDLFlBQVk7Ozs7OztvQ0FDUjswQ0FDUCw4REFBQ1gscURBQU07Z0NBQUMwQixLQUFLLEVBQUMsUUFBUTswQ0FBQywwQkFBSTs7Ozs7b0NBQVM7Ozs7Ozs0QkFDaEM7Ozs7OztvQkFDRjswQkFDTiw4REFBQ3pCLHFEQUFNO2dCQUFDMEIsRUFBRSxFQUFDLElBQUk7MEJBQUMsYUFBVzs7Ozs7b0JBQVM7MEJBQ3BDLDhEQUFDQyxHQUFDO2dCQUFDQyxLQUFLLEVBQUU7b0JBQUVDLGFBQWEsRUFBRSxFQUFFO29CQUFFQyxRQUFRLEVBQUUsRUFBRTtpQkFBRTswQkFBR3ZCLFdBQVc7Ozs7O29CQUFLOztvQkFDL0QsQ0FDSDtDQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLXR1dG9yaWFsLy4vc3JjL2NvbXBvbmVudC9JdGVtLmpzeD9hN2Y0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1dHRvbiwgSGVhZGVyIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vSXRlbS5tb2R1bGUuY3NzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJdGVtKHsgaXRlbSA9IHt9IH0pIHtcclxuICBjb25zdCB7XHJcbiAgICBuYW1lLFxyXG4gICAgaW1hZ2VfbGluayxcclxuICAgIHByaWNlLFxyXG4gICAgZGVzY3JpcHRpb24sXHJcbiAgICB1cGRhdGVkX2F0LFxyXG4gICAgY2F0ZWdvcnksXHJcbiAgICBwcm9kdWN0X3R5cGUsXHJcbiAgICBwcm9kdWN0X2xpbmssXHJcbiAgfSA9IGl0ZW07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXB9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1nX2l0ZW19PlxyXG4gICAgICAgICAgPGltZyBzcmM9e2ltYWdlX2xpbmt9IGFsdD17bmFtZX0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmluZm9faXRlbX0+XHJcbiAgICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT17c3R5bGVzLnRpdF9pdGVtfT57bmFtZX08L3N0cm9uZz5cclxuICAgICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPXtzdHlsZXMubnVtX3ByaWNlfT4ke3ByaWNlfTwvc3Ryb25nPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMudHh0X2luZm99PlxyXG4gICAgICAgICAgICB7Y2F0ZWdvcnkgPyBgJHtjYXRlZ29yeX0vYCA6IFwiXCJ9XHJcbiAgICAgICAgICAgIHtwcm9kdWN0X3R5cGV9XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwib3JhbmdlXCI+6rWs66ek7ZWY6riwPC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8SGVhZGVyIGFzPVwiaDNcIj5EZXNjcmlwdGlvbjwvSGVhZGVyPlxyXG4gICAgICA8cCBzdHlsZT17eyBwYWRkaW5nQm90dG9tOiAyMCwgZm9udFNpemU6IDE4IH19PntkZXNjcmlwdGlvbn08L3A+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJCdXR0b24iLCJIZWFkZXIiLCJzdHlsZXMiLCJJdGVtIiwiaXRlbSIsIm5hbWUiLCJpbWFnZV9saW5rIiwicHJpY2UiLCJkZXNjcmlwdGlvbiIsInVwZGF0ZWRfYXQiLCJjYXRlZ29yeSIsInByb2R1Y3RfdHlwZSIsInByb2R1Y3RfbGluayIsImRpdiIsImNsYXNzTmFtZSIsIndyYXAiLCJpbWdfaXRlbSIsImltZyIsInNyYyIsImFsdCIsImluZm9faXRlbSIsInN0cm9uZyIsInRpdF9pdGVtIiwibnVtX3ByaWNlIiwic3BhbiIsInR4dF9pbmZvIiwiY29sb3IiLCJhcyIsInAiLCJzdHlsZSIsInBhZGRpbmdCb3R0b20iLCJmb250U2l6ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/component/Item.jsx\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("semantic-ui-react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/view/[id].jsx"));
module.exports = __webpack_exports__;

})();