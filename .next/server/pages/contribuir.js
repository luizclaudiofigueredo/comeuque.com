"use strict";
(() => {
var exports = {};
exports.id = 687;
exports.ids = [687];
exports.modules = {

/***/ 7017:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Contribuir),
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

;// CONCATENATED MODULE: ./components/empresa.js



function Empresa() {
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.Center, {
        px: [
            4,
            4,
            4,
            40,
            40
        ],
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
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
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                    direction: "column",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
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
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
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
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                    direction: "column",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
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
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
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

// EXTERNAL MODULE: ./components/layout.js + 2 modules
var layout = __webpack_require__(235);
;// CONCATENATED MODULE: ./components/lista_contas.js



function ListaConta({ conta  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
                h: "110px",
                alignItems: "center",
                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Image, {
                    src: conta.logo,
                    w: 90,
                    h: 90,
                    alt: "Logotipo"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                direction: "column",
                mb: 2,
                p: 4,
                cursor: "pointer",
                justify: "left",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Text, {
                        color: "whiteAlpha.800",
                        fontWeight: "bold",
                        children: [
                            conta.banco,
                            " (",
                            conta.numero_banco,
                            ")"
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Text, {
                        color: "#FF7A08",
                        fontWeight: "bold",
                        children: [
                            "Ag\xeancia: ",
                            conta.agencia
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Text, {
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

// EXTERNAL MODULE: ./config/fetchData.js
var fetchData = __webpack_require__(9031);
;// CONCATENATED MODULE: ./pages/contribuir.js









function Contribuir(props) {
    const { 0: contas , 1: setContas  } = (0,external_react_.useState)(props.contas);
    (0,external_react_.useEffect)(()=>{
        setContas(props.contas);
    }, [
        props.contas
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
        direction: "column",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(layout/* default */.Z, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(breadcrumbs/* default */.Z, {
                    pagina: "Contas banc\xe1rias",
                    anterior: "Home"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Empresa, {}),
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
                    children: contas.length === 0 ? /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        children: "Nenhuma Conta"
                    }) : contas.map((conta)=>/*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
                            direction: "row",
                            w: "full",
                            mt: "12px",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(ListaConta, {
                                conta: conta
                            })
                        }, conta._id)
                    )
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(copia_cola, {})
            ]
        })
    });
};
async function getServerSideProps() {
    const res = await (0,fetchData/* getData */.Yu)(`contas`);
    // server side rendering
    return {
        props: {
            contas: res.contas,
            result: res.result
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
var __webpack_exports__ = __webpack_require__.X(0, [235,798], () => (__webpack_exec__(7017)));
module.exports = __webpack_exports__;

})();