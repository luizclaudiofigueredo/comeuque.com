"use strict";
exports.id = 235;
exports.ids = [235];
exports.modules = {

/***/ 6198:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ botao)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@chakra-ui/icons"
var icons_ = __webpack_require__(4513);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: external "react-icons/fi"
var fi_ = __webpack_require__(2750);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/modal.js


function Modal({ title , children , dismissable , onClose  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "modal black",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "modal-content",
                children: [
                    dismissable && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "close",
                        onClick: onClose,
                        children: "\xd7"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "modal-flex-row",
                        children: [
                            title && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        children: title
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("hr", {})
                                ]
                            }),
                            children
                        ]
                    })
                ]
            })
        })
    });
};

// EXTERNAL MODULE: ./lib/constant.js
var constant = __webpack_require__(1173);
;// CONCATENATED MODULE: ./components/botao.js







function Botao(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Button, {
        display: "flex",
        variant: "solid",
        bg: props.ColorBackground || "red",
        color: "white",
        size: "sm",
        mr: 4,
        w: "full",
        h: props.height || 35,
        py: props.paddingY || 0,
        mt: props.marginTop || 0,
        _hover: {
            bg: "#9d0008",
            color: "white"
        },
        onClick: Modal("Modal", "<div>Hello World</div>", false, true),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_.chakra.a, {
                href: "#",
                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Icon, {
                    as: props.Icon || fi_.FiShoppingCart,
                    h: 4,
                    w: 4,
                    mx: 2,
                    alignSelf: "center"
                })
            }),
            props.title || "Fazer Pedido"
        ]
    });
}
/* harmony default export */ const botao = (Botao);


/***/ }),

/***/ 235:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(6290);
// EXTERNAL MODULE: ./lib/constant.js
var constant = __webpack_require__(1173);
;// CONCATENATED MODULE: ./components/footer.js





const SocialButton = ({ children , label , href ,  })=>{
    return /*#__PURE__*/ _jsxs(chakra.button, {
        bg: useColorModeValue("blackAlpha.100", "whiteAlpha.100"),
        rounded: "full",
        w: 8,
        h: 8,
        cursor: "pointer",
        as: "a",
        href: href,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "background 0.3s ease",
        _hover: {
            bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200")
        },
        children: [
            /*#__PURE__*/ _jsx(VisuallyHidden, {
                children: label
            }),
            children
        ]
    });
};
function SmallWithSocial() {
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
        bg: (0,react_.useColorModeValue)(constant/* PRIMARY_COLOR */.iZ, "gray.900"),
        color: (0,react_.useColorModeValue)("#825221", "gray.200"),
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Container, {
            as: react_.Stack,
            maxW: "6xl",
            py: 4,
            direction: {
                base: "column",
                md: "row"
            },
            spacing: 4,
            justify: {
                base: "center",
                md: "space-between"
            },
            align: {
                base: "center",
                md: "center"
            },
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                    children: "\xa9 2022 - Todos os direitos reservados - Com\xea Uqu\xea"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                    children: "kallario.com.br"
                })
            ]
        })
    });
};

// EXTERNAL MODULE: external "@chakra-ui/icons"
var icons_ = __webpack_require__(4513);
// EXTERNAL MODULE: ./components/botao.js + 1 modules
var botao = __webpack_require__(6198);
;// CONCATENATED MODULE: ./components/navbar.js





const Links = [
    "Home",
    "Nossa Hist\xf3ria",
    "Card\xe1pio",
    "Fale Conosco"
];
const NavLink = ({ children  })=>/*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
        textTransform: "uppercase",
        px: 2,
        py: 1,
        color: "#825221",
        rounded: "md",
        _hover: {
            textDecoration: "none",
            bg: (0,react_.useColorModeValue)("orange", "gray.700")
        },
        href: "#",
        children: children
    })
;
function NavBar() {
    const { isOpen , onOpen , onClose  } = (0,react_.useDisclosure)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
        bg: (0,react_.useColorModeValue)(constant/* PRIMARY_COLOR */.iZ, "#825221"),
        px: 4,
        pos: "fixed",
        w: "100%",
        zIndex: 2,
        boxShadow: "md",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                h: 24,
                alignItems: "center",
                justifyContent: "space-between",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.IconButton, {
                        size: "md",
                        icon: isOpen ? /*#__PURE__*/ jsx_runtime_.jsx(icons_.CloseIcon, {}) : /*#__PURE__*/ jsx_runtime_.jsx(icons_.HamburgerIcon, {}),
                        "aria-label": "Open Menu",
                        display: {
                            md: "none"
                        },
                        onClick: isOpen ? onClose : onOpen
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.HStack, {
                        spacing: 8,
                        alignItems: "center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Image, {
                                    src: "images/logosite-final.png",
                                    h: "55px",
                                    alt: "Logotipo",
                                    paddingTop: 2
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.HStack, {
                                as: "nav",
                                spacing: 4,
                                display: {
                                    base: "none",
                                    md: "flex"
                                },
                                children: Links.map((link)=>/*#__PURE__*/ jsx_runtime_.jsx(NavLink, {
                                        children: link
                                    }, link)
                                )
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                        alignItems: "center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(botao/* default */.Z, {}),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Menu, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.MenuButton, {
                                        as: react_.Button,
                                        rounded: "full",
                                        variant: "link",
                                        cursor: "pointer",
                                        minW: 0
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.MenuList, {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(react_.MenuItem, {
                                                children: "Link 1"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(react_.MenuItem, {
                                                children: "Link 2"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(react_.MenuDivider, {}),
                                            /*#__PURE__*/ jsx_runtime_.jsx(react_.MenuItem, {
                                                children: "Link 3"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            isOpen ? /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                pb: 4,
                display: {
                    md: "none"
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Stack, {
                    as: "nav",
                    spacing: 4,
                    children: Links.map((link)=>/*#__PURE__*/ jsx_runtime_.jsx(NavLink, {
                            children: link
                        }, link)
                    )
                })
            }) : null
        ]
    });
};

;// CONCATENATED MODULE: ./components/layout.js





function Layout({ empresa , children  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
        bg: "#ffffff",
        direction: "column",
        minHeight: "100vh",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(NavBar, {}),
            children,
            /*#__PURE__*/ jsx_runtime_.jsx(SmallWithSocial, {
                empresa: empresa
            })
        ]
    });
}
/* harmony default export */ const layout = (Layout);


/***/ }),

/***/ 1173:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$U": () => (/* binding */ LIGHT_COLOR),
/* harmony export */   "cu": () => (/* binding */ DARK_COLOR),
/* harmony export */   "iZ": () => (/* binding */ PRIMARY_COLOR)
/* harmony export */ });
/* unused harmony exports EMPRESA, NAVITEMS */
const EMPRESA = "Kalla Rio Tecnologia";
const PRIMARY_COLOR = "#ffd817";
const DARK_COLOR = "#825221";
const LIGHT_COLOR = "gray.800";
const NAVITEMS = [
    {
        label: "Home",
        href: "/"
    },
    {
        label: "Nossa Hist\xf3ria",
        href: "/about"
    },
    {
        label: "Card\xe1pio",
        href: "/contribuir"
    },
    {
        label: "Fale Conosco",
        href: "/contato"
    }, 
];


/***/ })

};
;