exports.id = 246;
exports.ids = [246];
exports.modules = {

/***/ 4503:
/***/ ((module) => {

// Exports
module.exports = {
	"wrap": "Item_wrap__g9KWc",
	"img_item": "Item_img_item__3vkPS",
	"info_item": "Item_info_item__0EHbA",
	"tit_item": "Item_tit_item__mfoBK",
	"num_price": "Item_num_price__MTSpm",
	"txt_info": "Item_txt_info__QTN5i"
};


/***/ }),

/***/ 5246:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Item)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1831);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Item_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4503);
/* harmony import */ var _Item_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Item_module_css__WEBPACK_IMPORTED_MODULE_2__);



function Item({ item ={}  }) {
    const { name , image_link , price , description , updated_at , category , product_type , product_link ,  } = item;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_Item_module_css__WEBPACK_IMPORTED_MODULE_2___default().wrap),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_Item_module_css__WEBPACK_IMPORTED_MODULE_2___default().img_item),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: image_link,
                            alt: name
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_Item_module_css__WEBPACK_IMPORTED_MODULE_2___default().info_item),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                className: (_Item_module_css__WEBPACK_IMPORTED_MODULE_2___default().tit_item),
                                children: name
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("strong", {
                                className: (_Item_module_css__WEBPACK_IMPORTED_MODULE_2___default().num_price),
                                children: [
                                    "$",
                                    price
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                className: (_Item_module_css__WEBPACK_IMPORTED_MODULE_2___default().txt_info),
                                children: [
                                    category ? `${category}/` : "",
                                    product_type
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                color: "orange",
                                children: "\uAD6C\uB9E4\uD558\uAE30"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Header, {
                as: "h3",
                children: "Description"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                style: {
                    paddingBottom: 20,
                    fontSize: 18
                },
                children: description
            })
        ]
    });
};


/***/ })

};
;