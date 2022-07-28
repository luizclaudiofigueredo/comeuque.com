"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 2015:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Slideshow)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "react-slideshow-image"
const external_react_slideshow_image_namespaceObject = require("react-slideshow-image");
// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(6290);
;// CONCATENATED MODULE: ./components/Slideshow.js


//These are Third party packages for smooth slideshow



const Slideshow = ({ images  })=>{
    //Array of Images
    const current = new Date();
    //These are custom properties for zoom effect while slide-show
    const zoomInProperties = {
        indicators: true,
        scale: 1.2,
        duration: 5000,
        transitionDuration: 500,
        infinite: true,
        prevArrow: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaChevronLeft, {
            size: 36,
            color: "#FF7A08"
        }),
        nextArrow: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaChevronRight, {
            size: 36,
            color: "#FF7A08"
        })
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "slide-container",
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_slideshow_image_namespaceObject.Zoom, {
            scale: 0.4,
            children: images.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx("img", {
                    style: {
                        width: "100%"
                    },
                    src: "http://comeuque.kallario.com.br" + item.my_url_slide,
                    alt: "{item.titulo}"
                }, index)
            )
        })
    });
};
/* harmony default export */ const components_Slideshow = (Slideshow);


/***/ }),

/***/ 5378:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Galeria)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "react-slick"
const external_react_slick_namespaceObject = require("react-slick");
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_namespaceObject);
;// CONCATENATED MODULE: external "react-icons/bs"
const bs_namespaceObject = require("react-icons/bs");
// EXTERNAL MODULE: external "react-icons/fi"
var fi_ = __webpack_require__(2750);
// EXTERNAL MODULE: ./components/botao.js
var botao = __webpack_require__(8719);
;// CONCATENATED MODULE: external "sweetalert2"
const external_sweetalert2_namespaceObject = require("sweetalert2");
var external_sweetalert2_default = /*#__PURE__*/__webpack_require__.n(external_sweetalert2_namespaceObject);
;// CONCATENATED MODULE: ./components/produtos.js






const handleShow = async (e)=>{
    e.preventDefault();
    external_sweetalert2_default().fire({
        title: "Quatro Queijos",
        text: "ingredientes: provolone + mussarela + ",
        imageUrl: "https://unsplash.it/400/200",
        imageWidth: 400,
        imageHeight: 300,
        imageAlt: "Custom image",
        color: "#ffffff",
        background: "#f58634",
        confirmButtonText: "Fazer Pedido!",
        confirmButtonColor: "#f7180d",
        showCloseButton: true
    });
};
const numberFormat = (value)=>new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(value)
;
function Rating() {
    return /*#__PURE__*/ _jsx(Box, {
        d: "flex",
        alignItems: "center",
        children: /*#__PURE__*/ _jsx(Flex, {
            children: /*#__PURE__*/ _jsx(Button, {
                h: "36px",
                borderRadius: 25,
                fontSize: "sm",
                bg: "#F53434",
                color: "white",
                px: 8,
                onClick: "#",
                children: "Fazer Pedido"
            })
        })
    });
}
function ProductAddToCart(data) {
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
        px: [
            4,
            10,
            30,
            50,
            50
        ],
        w: "full",
        alignItems: "center",
        justifyContent: "center",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
            bg: (0,react_.useColorModeValue)("#825321", "gray.800"),
            maxW: "650px",
            minW: "300px",
            borderWidth: "1px",
            rounded: "lg",
            shadow: "lg",
            position: "relative",
            children: [
                data.isNew && /*#__PURE__*/ jsx_runtime_.jsx(react_.Circle, {
                    size: "10px",
                    position: "absolute",
                    top: 2,
                    right: 2,
                    bg: "red.200"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(react_.Image, {
                    src: data.imageURL,
                    alt: `Picture of ${data.name}`,
                    roundedTop: "lg",
                    onClick: handleShow
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                    p: "6",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
                            mt: "1",
                            justifyContent: "center",
                            alignContent: "center",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                fontSize: "2xl",
                                fontWeight: "semibold",
                                as: "h4",
                                mb: 4,
                                color: "white",
                                lineHeight: "tight",
                                isTruncated: true,
                                children: data.name
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                            justifyContent: "space-between",
                            alignContent: "center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(botao/* default */.Z, {}),
                                /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                    fontSize: "2xl",
                                    color: (0,react_.useColorModeValue)("white", "white"),
                                    children: numberFormat(data.price)
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./components/titulo_wrapper.js



function TituloWrapper(props) {
    return /*#__PURE__*/ _jsx(Text, {
        fontSize: 36,
        color: "#ff0000",
        children: props.titulo
    });
}
/* harmony default export */ const titulo_wrapper = ((/* unused pure expression or super */ null && (TituloWrapper)));

;// CONCATENATED MODULE: ./components/galeria.js






const data = [
    {
        id: 1,
        isNew: true,
        imageURL: "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/216054.jpg",
        name: "Quatro Queijos",
        price: 28.0,
        rating: 4.2,
        numReviews: 18
    },
    {
        id: 2,
        isNew: true,
        imageURL: "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/216054.jpg",
        name: "Calabresa",
        price: 28.0,
        rating: 4.2,
        numReviews: 18
    },
    {
        id: 3,
        isNew: true,
        imageURL: "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/216054.jpg",
        name: "Portuguesa",
        price: 28.0,
        rating: 4.2,
        numReviews: 18
    },
    {
        id: 4,
        isNew: true,
        imageURL: "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/216054.jpg",
        name: "Atum",
        price: 36.0,
        rating: 4.2,
        numReviews: 18
    },
    {
        id: 5,
        isNew: true,
        imageURL: "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/216054.jpg",
        name: "Cheddar",
        price: 28.0,
        rating: 4.2,
        numReviews: 18
    },
    {
        id: 6,
        isNew: true,
        imageURL: "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/216054.jpg",
        name: "Banana com Canela",
        price: 28.0,
        rating: 4.2,
        numReviews: 18
    }, 
];
class Galeria extends external_react_.Component {
    render() {
        const width = this.props.width;
        var settings = {
            dots: false,
            infinite: true,
            slidesToShow: Math.floor(width / 300),
            slidesToScroll: 1,
            //autoplay: true,
            //speed: 2000,
            autoplaySpeed: 3000,
            cssEase: "linear"
        };
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
                    w: "full",
                    justify: "center",
                    align: "center",
                    alignItems: "center",
                    h: 40,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                        fontSize: 36,
                        color: "#ff0000",
                        children: "Destaques"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_slick_default()), {
                        ...settings,
                        children: data.map((d)=>/*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(ProductAddToCart, {
                                    ...d
                                })
                            }, d.id)
                        )
                    })
                })
            ]
        });
    }
};


/***/ }),

/***/ 9643:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useWindowDimensions)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
// useWindowDimensions.js

function useWindowDimensions() {
    const hasWindow = "undefined" !== "undefined";
    function getWindowDimensions() {
        const width = hasWindow ? window.innerWidth : null;
        const height = hasWindow ? window.innerHeight : null;
        return {
            width,
            height
        };
    }
    const { 0: windowDimensions , 1: setWindowDimensions  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(getWindowDimensions());
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (hasWindow) {
            function handleResize() {
                setWindowDimensions(getWindowDimensions());
            }
            window.addEventListener("resize", handleResize);
            return ()=>window.removeEventListener("resize", handleResize)
            ;
        }
    }, [
        hasWindow
    ]);
    return windowDimensions;
};


/***/ }),

/***/ 7808:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "uR": () => (/* binding */ getDados)
/* harmony export */ });
/* unused harmony exports postDados, putDados, patchDados, deleteDados */
const baseUrl = "http://comeuque.kallario.com.br";
const getDados = async (url, token)=>{
    try {
        const res = await fetch(`${baseUrl}/${url}.json`, {
            method: "GET"
        });
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};
const postDados = async (url, post, token)=>{
    return await fetch(`${baseUrl}/${url}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            post
        })
    }).then((response)=>response.json()
    ).catch((error)=>{
        console.log("Error: ", error);
    });
};
const putDados = async (url, post, token)=>{
    const res = await fetch(`${baseUrl}/${url}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": token
        },
        body: JSON.stringify(post)
    });
    const data = await res.json();
    return data;
};
const patchDados = async (url, post, token)=>{
    const res = await fetch(`${baseUrl}/${url}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Authorization": token
        },
        body: JSON.stringify(post)
    });
    const data = await res.json();
    return data;
};
const deleteDados = async (url, token)=>{
    const res = await fetch(`${baseUrl}/${url}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": token
        }
    });
    const data = await res.json();
    return data;
};


/***/ }),

/***/ 4369:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8894);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config_fetchDados__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7808);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_galeria__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5378);
/* harmony import */ var _components_useWindowDimensions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9643);
/* harmony import */ var _components_Slideshow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2015);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_layout__WEBPACK_IMPORTED_MODULE_1__]);
_components_layout__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








function Home(props) {
    const { 0: slides , 1: setSlide  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(props.slides);
    const { height , width  } = (0,_components_useWindowDimensions__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        setSlide(props.slides);
    }, [
        props.slides
    ]);
    const ProdutosWrapper = ()=>{
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Grid, {
            templateColumns: "repeat(2, 1fr)",
            gap: 6,
            mx: 10,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.GridItem, {
                    w: "100%",
                    h: "10",
                    bg: "blue.500",
                    px: 4
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.GridItem, {
                    w: "100%",
                    h: "10",
                    bg: "blue.500",
                    px: 4
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.GridItem, {
                    w: "100%",
                    h: "10",
                    bg: "blue.500",
                    px: 4
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.GridItem, {
                    w: "100%",
                    h: "10",
                    bg: "blue.500",
                    px: 4
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.GridItem, {
                    w: "100%",
                    h: "10",
                    bg: "blue.500",
                    px: 4
                })
            ]
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
        direction: "column",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_layout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
            empresa: props.empresa,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Slideshow__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    images: slides
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
                    direction: "column",
                    w: "full",
                    px: [
                        "10px",
                        "10px",
                        "10px",
                        "20px"
                    ],
                    justifyContent: "space-between",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_galeria__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        width: width
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
                    w: "full",
                    justify: "center",
                    align: "center",
                    alignItems: "center",
                    h: 40,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                        fontSize: 24,
                        color: "gray.700",
                        children: "Card\xe1pio"
                    })
                })
            ]
        })
    });
};
async function getServerSideProps() {
    const slides_res = await (0,_config_fetchDados__WEBPACK_IMPORTED_MODULE_7__/* .getDados */ .uR)(`slides`);
    const empresas = await (0,_config_fetchDados__WEBPACK_IMPORTED_MODULE_7__/* .getDados */ .uR)(`empresas/1`);
    return {
        props: {
            slides: slides_res,
            empresa: empresas
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ }),

/***/ 3745:
/***/ ((module) => {

module.exports = import("firebase/app");;

/***/ }),

/***/ 401:
/***/ ((module) => {

module.exports = import("firebase/auth");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [238,894], () => (__webpack_exec__(4369)));
module.exports = __webpack_exports__;

})();