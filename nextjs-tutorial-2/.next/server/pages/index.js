(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 8316:
/***/ ((module) => {

// Exports
module.exports = {
	"wrap": "ItemList_wrap__N6maq",
	"img_item": "ItemList_img_item__Bw9Bt",
	"tit_item": "ItemList_tit_item__jzBCb",
	"txt_info": "ItemList_txt_info__dx4Qs",
	"num_price": "ItemList_num_price__O6rNE"
};


/***/ }),

/***/ 9051:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "semantic-ui-react"
var external_semantic_ui_react_ = __webpack_require__(1831);
// EXTERNAL MODULE: ./src/component/ItemList.module.css
var ItemList_module = __webpack_require__(8316);
var ItemList_module_default = /*#__PURE__*/__webpack_require__.n(ItemList_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./src/component/ItemList.jsx




function ItemList({ list =[]  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Grid, {
            columns: 3,
            children: /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Grid.Row, {
                children: list.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Grid.Column, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                            href: "/detail/[id]",
                            as: `/detail/${item.id}`,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (ItemList_module_default()).wrap,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: item.image_link,
                                            alt: item.name,
                                            className: (ItemList_module_default()).img_item
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                            className: (ItemList_module_default()).tit_item,
                                            children: item.name
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                            className: (ItemList_module_default()).txt_info,
                                            children: [
                                                item.category,
                                                " ",
                                                item.product_type
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("strong", {
                                            className: (ItemList_module_default()).num_price,
                                            children: [
                                                "$",
                                                item.price
                                            ]
                                        })
                                    ]
                                })
                            })
                        })
                    }, item.id)
                )
            })
        })
    });
};

;// CONCATENATED MODULE: ./pages/index.js







function Home({ list  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "HOME | \uCF54\uB529\uC559\uB9C8"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "\uCF54\uB529 \uC559\uB9C8 \uD648\uC785\uB2C8\uB2E4."
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Header, {
                        as: "h3",
                        style: {
                            paddingTop: 40
                        },
                        children: "\uBCA0\uC2A4\uD2B8 \uC0C1\uD488"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Divider, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(ItemList, {
                        list: list.slice(0, 9)
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Header, {
                        as: "h3",
                        style: {
                            paddingTop: 40
                        },
                        children: "\uC2E0\uC0C1\uD488"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Divider, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(ItemList, {
                        list: list.slice(9)
                    })
                ]
            })
        ]
    });
};
async function getStaticProps() {
    const apiUrl = "http://makeup-api.herokuapp.com/api/v1/products.json?brand=dior";
    const res = await external_axios_default().get(apiUrl);
    const data = res.data;
    return {
        props: {
            list: data,
            name: process.env.name
        }
    };
}


/***/ }),

/***/ 2167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 4241:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/routing-items.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [895,664], () => (__webpack_exec__(9051)));
module.exports = __webpack_exports__;

})();