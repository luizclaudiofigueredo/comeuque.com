"use strict";
(() => {
var exports = {};
exports.id = 687;
exports.ids = [687];
exports.modules = {

/***/ 1487:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ copia_cola)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./lib/constant.js
var constant = __webpack_require__(1173);
;// CONCATENATED MODULE: external "copy-to-clipboard"
const external_copy_to_clipboard_namespaceObject = require("copy-to-clipboard");
var external_copy_to_clipboard_default = /*#__PURE__*/__webpack_require__.n(external_copy_to_clipboard_namespaceObject);
;// CONCATENATED MODULE: ./components/copia_cola.js





function CopiaCola() {
    const { 0: copia , 1: setCopia  } = (0,external_react_.useState)(false);
    const chave = "00020126560014br.gov.bcb.pix0134projetovidachurch.mendes@gmail.com27600016BR.COM.PAGSEGURO013667F5177B-2141-4B01-94F7-5ABE3B15AA165204000053039865802BR5922Comunidade Evangelica 6006MENDES62290525PAGS0000000002205102006276304CA8F";
    const handleEvent = ()=>{
        external_copy_to_clipboard_default()(chave);
        setCopia(true);
        setInterval(()=>{
            setCopia(false);
        }, 4000);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
        w: "full",
        mt: 4,
        direction: "column",
        alignItems: "center",
        px: [
            4,
            4,
            4,
            40,
            40
        ],
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                fontSize: "2xl",
                color: "white",
                children: "CHAVES PIX"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                bg: constant/* PRIMARY_COLOR */.iZ,
                w: [
                    "50%",
                    "50%",
                    "50%",
                    "25%",
                    "25%"
                ],
                h: 1,
                m: 4
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                p: [
                    2,
                    2,
                    2,
                    4,
                    4
                ],
                direction: [
                    "column",
                    "column",
                    "column",
                    "row",
                    "row"
                ],
                w: [
                    "full",
                    "full",
                    "full",
                    "2xl",
                    "2xl"
                ],
                alignContent: [
                    "left",
                    "left",
                    "left",
                    "center",
                    "center"
                ],
                alignItems: [
                    "left",
                    "left",
                    "left",
                    "center",
                    "center"
                ],
                justify: [
                    "left",
                    "left",
                    "left",
                    "space-around",
                    "space-around"
                ],
                mb: 10,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                        direction: "column",
                        p: [
                            9,
                            9,
                            9,
                            4,
                            4
                        ],
                        alignItems: "center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Image, {
                                w: "100%",
                                src: "qrcode.png",
                                alt: "qrcode"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                fontSize: "smaller",
                                color: "white",
                                children: "QRCode PagSeguro"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                        direction: "column",
                        py: 4,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                                direction: "column",
                                mb: 2,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Text, {
                                        color: "white",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                children: "BB"
                                            }),
                                            " (CNPJ)"
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                        color: "white",
                                        children: " 29.507.868/0001-04"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                                direction: "column",
                                mb: 2,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Text, {
                                        color: "white",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                children: "Stone"
                                            }),
                                            " (Telefone)"
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                        color: "white",
                                        children: "(24) 98186-5144"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                                direction: "column",
                                mb: 2,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Text, {
                                        color: "white",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                children: "PagSeguro"
                                            }),
                                            " (email)"
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                        color: "white",
                                        children: "projetovidachurch.mendes@gmail.com"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                bg: constant/* PRIMARY_COLOR */.iZ,
                onClick: handleEvent,
                children: copia ? "Copiado!" : "PIX Copia e Cola"
            })
        ]
    });
}
/* harmony default export */ const copia_cola = (CopiaCola);


/***/ }),

/***/ 9134:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Empresa)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



function Empresa() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Center, {
        px: [
            4,
            4,
            4,
            40,
            40
        ],
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
            direction: [
                "column",
                "column",
                "column",
                "row",
                "row"
            ],
            w: "full",
            justify: "space-between",
            p: 4,
            mb: 8,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                    direction: "column",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                            color: "whiteAlpha.800",
                            fontSize: [
                                10,
                                10,
                                10,
                                16,
                                16
                            ],
                            fontWeight: "bold",
                            children: "Favorecido:"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                            color: "#FF7A08",
                            fontSize: [
                                14,
                                14,
                                14,
                                24,
                                24
                            ],
                            fontWeight: "bold",
                            children: "Comunidade Evang\xe9lica da Cidade de Mendes"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                    direction: "column",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                            color: "whiteAlpha.800",
                            fontSize: [
                                10,
                                10,
                                10,
                                16,
                                16
                            ],
                            fontWeight: "bold",
                            children: "CNPJ:"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                            color: "#FF7A08",
                            fontSize: [
                                14,
                                14,
                                14,
                                24,
                                24
                            ],
                            fontWeight: "bold",
                            children: "29.507.868/0001-64"
                        })
                    ]
                })
            ]
        })
    });
};


/***/ }),

/***/ 6661:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ListaConta)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



function ListaConta({ conta  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                h: "110px",
                alignItems: "center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
                    src: conta.logo,
                    w: 90,
                    h: 90,
                    alt: "Logotipo"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                direction: "column",
                mb: 2,
                p: 4,
                cursor: "pointer",
                justify: "left",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                        color: "whiteAlpha.800",
                        fontWeight: "bold",
                        children: [
                            conta.banco,
                            " (",
                            conta.numero_banco,
                            ")"
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                        color: "#FF7A08",
                        fontWeight: "bold",
                        children: [
                            "Ag\xeancia: ",
                            conta.agencia
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                        color: "#FF7A08",
                        fontWeight: "bold",
                        children: [
                            "Conta: ",
                            conta.conta
                        ]
                    })
                ]
            })
        ]
    });
};


/***/ }),

/***/ 9582:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Contribuir),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_breadcrumbs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1865);
/* harmony import */ var _components_copia_cola__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1487);
/* harmony import */ var _components_empresa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9134);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8894);
/* harmony import */ var _components_lista_contas__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6661);
/* harmony import */ var _config_fetchData__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9031);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_layout__WEBPACK_IMPORTED_MODULE_6__]);
_components_layout__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









function Contribuir(props) {
    const { 0: contas , 1: setContas  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(props.contas);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        setContas(props.contas);
    }, [
        props.contas
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
        direction: "column",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_layout__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_breadcrumbs__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    pagina: "Contas banc\xe1rias",
                    anterior: "Home"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_empresa__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
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
                    children: contas.length === 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        children: "Nenhuma Conta"
                    }) : contas.map((conta)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                            direction: "row",
                            w: "full",
                            mt: "12px",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_lista_contas__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                conta: conta
                            })
                        }, conta._id)
                    )
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_copia_cola__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
            ]
        })
    });
};
async function getServerSideProps() {
    const res = await (0,_config_fetchData__WEBPACK_IMPORTED_MODULE_8__/* .getData */ .Yu)(`contas`);
    // server side rendering
    return {
        props: {
            contas: res.contas,
            result: res.result
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
var __webpack_exports__ = __webpack_require__.X(0, [238,894,798], () => (__webpack_exec__(9582)));
module.exports = __webpack_exports__;

})();