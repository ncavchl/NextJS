(() => {
var exports = {};
exports.id = 226;
exports.ids = [226];
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

/***/ 6583:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _id_),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "semantic-ui-react"
var external_semantic_ui_react_ = __webpack_require__(1831);
// EXTERNAL MODULE: ./src/component/Item.module.css
var Item_module = __webpack_require__(4503);
var Item_module_default = /*#__PURE__*/__webpack_require__.n(Item_module);
;// CONCATENATED MODULE: ./src/component/Item.jsx



function Item({ item ={}  }) {
    const { name , image_link , price , description , updated_at , category , product_type , product_link ,  } = item;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Item_module_default()).wrap,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Item_module_default()).img_item,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: image_link,
                            alt: name
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Item_module_default()).info_item,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                className: (Item_module_default()).tit_item,
                                children: name
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("strong", {
                                className: (Item_module_default()).num_price,
                                children: [
                                    "$",
                                    price
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                className: (Item_module_default()).txt_info,
                                children: [
                                    category ? `${category}/` : "",
                                    product_type
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Button, {
                                color: "orange",
                                children: "\uAD6C\uB9E4\uD558\uAE30"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Header, {
                as: "h3",
                children: "Description"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                style: {
                    paddingBottom: 20,
                    fontSize: 18
                },
                children: description
            })
        ]
    });
};

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./pages/view/[id].jsx







const Post = ({ item  })=>{
    const { 0: isLoading , 1: setLoading  } = (0,external_react_.useState)(true);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: item && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("title", {
                            children: "HOME | \uCF54\uB529\uC559\uB9C8"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            name: "description",
                            content: "\uCF54\uB529 \uC559\uB9C8 \uD648\uC784"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Item, {
                    item: item
                })
            ]
        })
    });
};
/* harmony default export */ const _id_ = (Post);
async function getServerSideProps(context) {
    const id = context.params.id;
    const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
    const res = await external_axios_default().get(API_URL);
    const data = res.data;
    return {
        props: {
            item: data
        }
    };
}


/***/ }),

/***/ 2167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 1831:
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
var __webpack_exports__ = (__webpack_exec__(6583));
module.exports = __webpack_exports__;

})();