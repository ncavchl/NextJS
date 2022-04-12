"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 3953:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/component/Footer.jsx

function Footer() {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        style: {
            marginTop: 40,
            padding: "40px 0",
            borderTop: "1px solid #999",
            textAlign: "center"
        },
        children: "Copyright @ncavchl"
    });
};

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "semantic-ui-react"
var external_semantic_ui_react_ = __webpack_require__(1831);
;// CONCATENATED MODULE: ./src/component/Gnb.jsx



function Gnb() {
    const router = (0,router_.useRouter)();
    let activeItem;
    if (router.pathname === "/") {
        activeItem = "home";
    } else if (router.pathname === "/about") {
        activeItem = "about";
    }
    const goLink = (e, data)=>{
        if (data.name === "home") {
            router.push("/");
        } else if (data.name === "about") {
            router.push("/about");
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Menu, {
        inverted: true,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Menu.Item, {
                name: "home",
                active: activeItem === "home",
                onClick: goLink
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Menu.Item, {
                name: "about",
                active: activeItem === "about",
                onClick: goLink
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Menu.Item, {
                name: "Contact Us",
                active: activeItem === "contact",
                onClick: ()=>{
                    router.push("/contact");
                }
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/component/Top.jsx



function Top() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        style: {
            marginTop: 40,
            padding: "40px 0",
            borderTop: "1px solid #999",
            textAlign: "center"
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                style: {
                    flex: "100px 0 0"
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: "/images/ping.jpg",
                    alt: "",
                    style: {
                        display: "block",
                        width: 80
                    }
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Header, {
                as: "h1",
                children: "\uCF54\uB529\uC559\uB9C8"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Gnb, {})
        ]
    });
};

;// CONCATENATED MODULE: ./pages/_app.jsx





function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        style: {
            width: 1000
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Top, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
        ]
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 1831:
/***/ ((module) => {

module.exports = require("semantic-ui-react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3953));
module.exports = __webpack_exports__;

})();