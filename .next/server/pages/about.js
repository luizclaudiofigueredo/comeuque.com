"use strict";
(() => {
var exports = {};
exports.id = 521;
exports.ids = [521];
exports.modules = {

/***/ 2296:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Video)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function Video({ video  }) {
    const url = `https://www.youtube.com/embed/${video.videoId}`;
    console.log(url);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "video-container",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("iframe", {
            width: "560",
            height: "315",
            title: video.titulo,
            src: url,
            frameBorder: "0",
            allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
            allowFullScreen: true
        })
    });
};


/***/ }),

/***/ 2441:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ About),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/breadcrumbs.js
var breadcrumbs = __webpack_require__(1865);
// EXTERNAL MODULE: ./components/layout.js + 2 modules
var layout = __webpack_require__(235);
// EXTERNAL MODULE: ./config/fetchData.js
var fetchData = __webpack_require__(9031);
;// CONCATENATED MODULE: ./components/player.js


function YoutubePlayer({ video  }) {
    const url = `https://www.youtube.com/embed/${video.videoId}`;
    return /*#__PURE__*/ _jsx(Flex, {
        justifyContent: "center",
        w: "full",
        direction: "column",
        children: /*#__PURE__*/ _jsx("div", {
            className: "video-container",
            children: /*#__PURE__*/ _jsx("iframe", {
                title: video.titulo,
                src: url,
                frameBorder: "0",
                allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
                allowFullScreen: true
            })
        })
    });
}
/* harmony default export */ const player = ((/* unused pure expression or super */ null && (YoutubePlayer)));

// EXTERNAL MODULE: ./components/video.js
var video = __webpack_require__(2296);
;// CONCATENATED MODULE: ./pages/about.js








function About(props) {
    const { 0: blog , 1: setBlog  } = (0,external_react_.useState)(props.blog);
    (0,external_react_.useEffect)(()=>{
        setBlog(props.blog);
    }, [
        props.blog
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
        direction: "column",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(layout/* default */.Z, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(breadcrumbs/* default */.Z, {
                    pagina: "Nossa Hist\xf3ria",
                    anterior: "Home"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
                    direction: [
                        "column",
                        "column",
                        "column",
                        "row",
                        "row"
                    ],
                    px: [
                        4,
                        4,
                        4,
                        40,
                        40
                    ],
                    mx: 6,
                    alignItems: "center",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(video/* default */.Z, {
                        video: blog
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                    direction: "column",
                    w: "full",
                    px: [
                        "10px",
                        "10px",
                        "10px",
                        "60px",
                        "60px"
                    ],
                    mt: [
                        10,
                        10,
                        10,
                        32,
                        32
                    ],
                    justifyContent: "space-between",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                            color: "whiteAlpha.800",
                            fontSize: 24,
                            mb: 4,
                            children: blog.titulo
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                            color: "whiteAlpha.800",
                            fontSize: 16,
                            children: blog.resumo
                        })
                    ]
                })
            ]
        })
    });
};
async function getServerSideProps() {
    const res = await (0,fetchData/* getData */.Yu)(`blogs?categoria=about`);
    return {
        props: {
            blog: res.blogs[0]
        }
    };
}


/***/ }),

/***/ 4513:
/***/ ((module) => {

module.exports = require("@chakra-ui/icons");

/***/ }),

/***/ 8930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6290:
/***/ ((module) => {

module.exports = require("react-icons/fa");

/***/ }),

/***/ 2750:
/***/ ((module) => {

module.exports = require("react-icons/fi");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [235,798], () => (__webpack_exec__(2441)));
module.exports = __webpack_exports__;

})();