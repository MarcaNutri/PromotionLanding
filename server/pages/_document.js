"use strict";
(() => {
var exports = {};
exports.id = 660;
exports.ids = [660];
exports.modules = {

/***/ 776:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _document)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(893);
// EXTERNAL MODULE: ./node_modules/next/document.js
var next_document = __webpack_require__(859);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: ./src/components/Analytics/index.jsx


const Analytics = ()=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("script", {
                async: true,
                src: `https://www.googletagmanager.com/gtag/js?id=${process.env.PUBLIC_GA_KEY}`
            }),
            /*#__PURE__*/ jsx_runtime.jsx("script", {
                dangerouslySetInnerHTML: {
                    __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', '${process.env.PUBLIC_GA_KEY}');
      `
                }
            })
        ]
    });
/* harmony default export */ const components_Analytics = (Analytics);

;// CONCATENATED MODULE: ./src/pages/_document.tsx



const Document = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(next_document.Html, {
        lang: "pt-br",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(next_document.Head, {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("link", {
                        rel: "preconnect",
                        href: "https://fonts.googleapis.com"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("link", {
                        rel: "preconnect",
                        href: "https://fonts.gstatic.com"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("link", {
                        href: "https://fonts.googleapis.com/css2?family=Jomhuria&family=Roboto:wght@400;500&display=swap",
                        rel: "stylesheet"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("link", {
                        rel: "icon",
                        type: "image/png",
                        href: "../../assets/logo-small.png"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("body", {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(next_document.Main, {}),
                    /*#__PURE__*/ jsx_runtime.jsx(next_document.NextScript, {}),
                    /*#__PURE__*/ jsx_runtime.jsx(components_Analytics, {})
                ]
            })
        ]
    });
};
/* harmony default export */ const _document = (Document);


/***/ }),

/***/ 140:
/***/ ((module) => {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 716:
/***/ ((module) => {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 368:
/***/ ((module) => {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 724:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 743:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/html-context.js");

/***/ }),

/***/ 524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,859], () => (__webpack_exec__(776)));
module.exports = __webpack_exports__;

})();