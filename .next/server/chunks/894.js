"use strict";
exports.id = 894;
exports.ids = [894];
exports.modules = {

/***/ 8719:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4513);
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2750);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);





function Botao() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
        variant: "solid",
        colorScheme: "red",
        size: "sm",
        mr: 4,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.chakra.a, {
                href: "#",
                display: "flex",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
                    as: react_icons_fi__WEBPACK_IMPORTED_MODULE_3__.FiShoppingCart,
                    h: 5,
                    w: 5,
                    mx: 2,
                    alignSelf: "center"
                })
            }),
            "Fazer Pedido"
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Botao);


/***/ }),

/***/ 6675:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ FooterSmall)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__);



const Logo = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
        src: "images/logosite-final.png",
        h: "90px",
        alt: "Logotipo",
        paddingTop: 2
    });
};
const SocialButton = ({ children , label , href ,  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.chakra.button, {
        bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("blackAlpha.100", "whiteAlpha.100"),
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
            bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("blackAlpha.200", "whiteAlpha.200")
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.VisuallyHidden, {
                children: label
            }),
            children
        ]
    });
};
function FooterSmall({ empresa  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
        bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("#825221", "gray.900"),
        color: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("white", "gray.200"),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Container, {
                as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack,
                maxW: "6xl",
                py: 4,
                spacing: 4,
                justify: "center",
                align: "center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Logo, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                        direction: "row",
                        spacing: 6,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
                                href: "#",
                                children: "Home"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
                                href: "#",
                                children: "Hist\xf3ria"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
                                href: "#",
                                children: "Card\xe1pio"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
                                href: "#",
                                children: "Contato"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                borderTopWidth: 1,
                borderStyle: "solid",
                borderColor: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("gray.200", "gray.700"),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Container, {
                    as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack,
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
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                            children: [
                                "\xa9 2022 Powered by ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: "https://www.kallario.com.br",
                                    children: "Kalla Rio"
                                }),
                                "."
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                            direction: "row",
                            spacing: 6,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SocialButton, {
                                    label: "Facebook",
                                    href: `https://www.facebook.com/${empresa.facebook}`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaFacebook, {})
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SocialButton, {
                                    label: "Instagram",
                                    href: `https://www.facebook.com/${empresa.instagram}`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaInstagram, {})
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SocialButton, {
                                    label: "Youtube",
                                    href: `https://www.facebook.com/${empresa.youtube}`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaYoutube, {})
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};


/***/ }),

/***/ 8894:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6675);
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6866);
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2264);
/* harmony import */ var _rodape__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7921);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_menu__WEBPACK_IMPORTED_MODULE_4__]);
_menu__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








function Layout({ empresa , children  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
        bg: "#ffffff",
        direction: "column",
        minHeight: "100vh",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_navbar__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
            children,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_footer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                empresa: empresa
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6866:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4513);
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1173);
/* harmony import */ var _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9238);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_5__]);
_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






function MainMenu() {
    const { isOpen , onToggle  } = useDisclosure();
    return /*#__PURE__*/ _jsxs(Box, {
        children: [
            /*#__PURE__*/ _jsxs(Flex, {
                bg: "#825221",
                color: "white",
                minH: "42px",
                paddingTop: {
                    base: 2
                },
                paddingBottom: {
                    base: 4
                },
                px: {
                    base: 25
                },
                align: "center",
                justify: "space-between",
                children: [
                    /*#__PURE__*/ _jsx(Flex, {
                        flex: {
                            base: 1,
                            md: "auto"
                        },
                        ml: {
                            base: -2
                        },
                        display: {
                            base: "flex",
                            md: "none"
                        },
                        children: /*#__PURE__*/ _jsx(IconButton, {
                            onClick: onToggle,
                            icon: isOpen ? /*#__PURE__*/ _jsx(CloseIcon, {
                                w: 3,
                                h: 3,
                                color: PRIMARY_COLOR
                            }) : /*#__PURE__*/ _jsx(HamburgerIcon, {
                                w: 7,
                                h: 7,
                                color: PRIMARY_COLOR
                            }),
                            variant: "ghost",
                            "aria-label": "Toggle Navigation"
                        })
                    }),
                    /*#__PURE__*/ _jsxs(Flex, {
                        flex: {
                            base: 1
                        },
                        justify: {
                            base: "space-between",
                            md: "space-between"
                        },
                        children: [
                            /*#__PURE__*/ _jsx(Text, {
                                textAlign: useBreakpointValue({
                                    base: "center",
                                    md: "left"
                                }),
                                fontFamily: "heading",
                                color: useColorModeValue("white", "#0a0b09"),
                                children: /*#__PURE__*/ _jsx(Link, {
                                    href: "/",
                                    children: /*#__PURE__*/ _jsx("a", {
                                        children: /*#__PURE__*/ _jsx(Image, {
                                            src: "images/logosite-final.png",
                                            h: "60px",
                                            alt: "Logotipo",
                                            paddingTop: 2
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ _jsx(Flex, {
                                display: {
                                    base: "none",
                                    md: "flex"
                                },
                                ml: 10,
                                mt: 5,
                                children: /*#__PURE__*/ _jsx(DesktopNav, {})
                            }),
                            /*#__PURE__*/ _jsx(Flex, {
                                mt: 4,
                                children: /*#__PURE__*/ _jsx(Button, {
                                    h: "36px",
                                    borderRadius: 25,
                                    fontSize: "sm",
                                    bg: "#F53434",
                                    color: "white",
                                    mx: 8,
                                    px: 16,
                                    onClick: "#",
                                    children: "Fazer Pedido"
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ _jsx(Collapse, {
                in: isOpen,
                animateOpacity: true,
                children: /*#__PURE__*/ _jsx(MobileNav, {})
            })
        ]
    });
};
const DesktopNav = ()=>{
    const linkColor = useColorModeValue("white", "gray.600");
    const linkHoverColor = useColorModeValue("#FF7A08", "white");
    const popoverContentBgColor = useColorModeValue("gray.500", "gray.800");
    const { user  } = useAuth();
    return /*#__PURE__*/ _jsxs(Stack, {
        direction: "row",
        spacing: 8,
        children: [
            NAV_ITEMS.map((navItem)=>/*#__PURE__*/ _jsx(Box, {
                    children: /*#__PURE__*/ _jsxs(Popover, {
                        trigger: "hover",
                        placement: "bottom-start",
                        children: [
                            /*#__PURE__*/ _jsx(PopoverTrigger, {
                                children: /*#__PURE__*/ _jsx(Link, {
                                    p: 2,
                                    href: navItem.href ?? "#",
                                    fontSize: "0.938rem",
                                    fontWeight: 500,
                                    letterSpacing: 1,
                                    fontFamily: "Roboto",
                                    color: linkColor,
                                    _hover: {
                                        textDecoration: "none",
                                        color: linkHoverColor,
                                        fontWeight: 800
                                    },
                                    children: navItem.label
                                })
                            }),
                            navItem.children && /*#__PURE__*/ _jsx(PopoverContent, {
                                border: 0,
                                boxShadow: "xl",
                                bg: popoverContentBgColor,
                                p: 4,
                                rounded: "xl",
                                minW: "sm",
                                children: /*#__PURE__*/ _jsx(Stack, {
                                    children: navItem.children.map((child)=>/*#__PURE__*/ _jsx(DesktopSubNav, {
                                            ...child
                                        }, child.label)
                                    )
                                })
                            })
                        ]
                    })
                }, navItem.label)
            ),
            user && /*#__PURE__*/ _jsx(Flex, {
                direction: "column",
                align: "center",
                children: /*#__PURE__*/ _jsx(Image, {
                    borderRadius: "full",
                    boxSize: "32px",
                    src: user?.photoURL,
                    alt: "image"
                })
            })
        ]
    });
};
const DesktopSubNav = ({ label , href , subLabel  })=>{
    return /*#__PURE__*/ _jsx(Link, {
        href: href,
        role: "group",
        display: "block",
        p: 2,
        rounded: "md",
        _hover: {
            bg: useColorModeValue("#FF7A08", "gray.900")
        },
        children: /*#__PURE__*/ _jsxs(Stack, {
            direction: "row",
            align: "center",
            children: [
                /*#__PURE__*/ _jsxs(Box, {
                    children: [
                        /*#__PURE__*/ _jsx(Text, {
                            transition: "all .3s ease",
                            _groupHover: {
                                color: "gray.400"
                            },
                            fontWeight: 500,
                            children: label
                        }),
                        /*#__PURE__*/ _jsx(Text, {
                            fontSize: "sm",
                            children: subLabel
                        })
                    ]
                }),
                /*#__PURE__*/ _jsx(Flex, {
                    transition: "all .3s ease",
                    transform: "translateX(-10px)",
                    opacity: 0,
                    _groupHover: {
                        opacity: "100%",
                        transform: "translateX(0)"
                    },
                    justify: "flex-end",
                    align: "center",
                    flex: 1,
                    children: /*#__PURE__*/ _jsx(Icon, {
                        color: "pink.400",
                        w: 5,
                        h: 5,
                        as: ChevronRightIcon
                    })
                })
            ]
        })
    });
};
const MobileNav = ()=>{
    return /*#__PURE__*/ _jsx(Stack, {
        bg: useColorModeValue("#FF7A08", "#0a0b09"),
        p: 4,
        display: {
            md: "none"
        },
        children: NAV_ITEMS.map((navItem)=>/*#__PURE__*/ _jsx(MobileNavItem, {
                ...navItem
            }, navItem.label)
        )
    });
};
const MobileNavItem = ({ label , children , href  })=>{
    const { isOpen , onToggle  } = useDisclosure();
    return /*#__PURE__*/ _jsxs(Stack, {
        spacing: 4,
        onClick: children && onToggle,
        children: [
            /*#__PURE__*/ _jsxs(Flex, {
                py: 2,
                as: Link,
                href: href ?? "#",
                justify: "space-between",
                align: "center",
                _hover: {
                    textDecoration: "none",
                    color: "#FF7A08"
                },
                children: [
                    /*#__PURE__*/ _jsx(Text, {
                        _hover: {
                            textDecoration: "none",
                            color: "#FF7A08"
                        },
                        fontWeight: 600,
                        color: useColorModeValue("white", "gray.200"),
                        children: label
                    }),
                    children && /*#__PURE__*/ _jsx(Icon, {
                        as: ChevronDownIcon,
                        transition: "all .25s ease-in-out",
                        transform: isOpen ? "rotate(180deg)" : "",
                        w: 6,
                        h: 6
                    })
                ]
            }),
            /*#__PURE__*/ _jsx(Collapse, {
                in: isOpen,
                animateOpacity: true,
                style: {
                    marginTop: "0!important"
                },
                children: /*#__PURE__*/ _jsx(Stack, {
                    mt: 2,
                    pl: 4,
                    borderLeft: 1,
                    borderStyle: "solid",
                    borderColor: useColorModeValue("gray.200", "gray.700"),
                    align: "start",
                    children: children && children.map((child)=>/*#__PURE__*/ _jsx(Link, {
                            py: 2,
                            href: child.href,
                            children: child.label
                        }, child.label)
                    )
                })
            })
        ]
    });
};
const NAV_ITEMS = [
    {
        label: "Home",
        href: "/"
    },
    {
        label: "Nossa Hist\xf3ria",
        href: "/"
    },
    {
        label: "Card\xe1pio",
        href: "/"
    },
    {
        label: "Contato",
        href: "/"
    }, 
];

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2264:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ NavBar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4513);
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _botao__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8719);




const Links = [
    "Home",
    "Nossa Hist\xf3ria",
    "Card\xe1pio",
    "Fale Conosco"
];
const NavLink = ({ children  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
        px: 2,
        py: 1,
        color: "white",
        rounded: "md",
        _hover: {
            textDecoration: "none",
            bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("orange", "gray.700")
        },
        href: "#",
        children: children
    })
;
function NavBar() {
    const { isOpen , onOpen , onClose  } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useDisclosure)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
            bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("#825221", "gray.900"),
            px: 4,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                    h: 16,
                    alignItems: "center",
                    justifyContent: "space-between",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.IconButton, {
                            size: "md",
                            icon: isOpen ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2__.CloseIcon, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2__.HamburgerIcon, {}),
                            "aria-label": "Open Menu",
                            display: {
                                md: "none"
                            },
                            onClick: isOpen ? onClose : onOpen
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.HStack, {
                            spacing: 8,
                            alignItems: "center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
                                        src: "images/logosite-final.png",
                                        h: "55px",
                                        alt: "Logotipo",
                                        paddingTop: 2
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.HStack, {
                                    as: "nav",
                                    spacing: 4,
                                    display: {
                                        base: "none",
                                        md: "flex"
                                    },
                                    children: Links.map((link)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NavLink, {
                                            children: link
                                        }, link)
                                    )
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                            alignItems: "center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_botao__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Menu, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.MenuButton, {
                                            as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button,
                                            rounded: "full",
                                            variant: "link",
                                            cursor: "pointer",
                                            minW: 0
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.MenuList, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.MenuItem, {
                                                    children: "Link 1"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.MenuItem, {
                                                    children: "Link 2"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.MenuDivider, {}),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.MenuItem, {
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
                isOpen ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                    pb: 4,
                    display: {
                        md: "none"
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                        as: "nav",
                        spacing: 4,
                        children: Links.map((link)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NavLink, {
                                children: link
                            }, link)
                        )
                    })
                }) : null
            ]
        })
    });
};


/***/ }),

/***/ 7921:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1173);





function Rodape({ empresa  }) {
    const linkColor = useColorModeValue("whiteAlpha.600", "gray.600");
    const linkHoverColor = useColorModeValue("#FF7A08", "white");
    return /*#__PURE__*/ _jsxs(_Fragment, {
        children: [
            /*#__PURE__*/ _jsxs(Flex, {
                justify: "center",
                direction: [
                    "column",
                    "column",
                    "column",
                    "row"
                ],
                h: [
                    350,
                    350,
                    350,
                    300,
                    300
                ],
                mt: 28,
                bg: "#825221",
                children: [
                    /*#__PURE__*/ _jsx(Flex, {
                        direction: "column",
                        justify: "center",
                        children: /*#__PURE__*/ _jsx(Image, {
                            src: "images/logosite-final.png",
                            h: [
                                "120px",
                                "120px",
                                "120px",
                                "90px"
                            ],
                            alt: "Logo",
                            px: 12
                        })
                    }),
                    /*#__PURE__*/ _jsxs(Flex, {
                        direction: "column",
                        justify: "center",
                        px: [
                            10,
                            10,
                            10,
                            0,
                            0
                        ],
                        children: [
                            /*#__PURE__*/ _jsxs(Flex, {
                                mt: 6,
                                direction: "row",
                                w: [
                                    150,
                                    150,
                                    150,
                                    300,
                                    300
                                ],
                                children: [
                                    /*#__PURE__*/ _jsx(Flex, {
                                        mr: 2,
                                        mt: 1,
                                        children: /*#__PURE__*/ _jsx(FaMapPin, {
                                            color: "#FF7A08"
                                        })
                                    }),
                                    /*#__PURE__*/ _jsxs(Flex, {
                                        direction: "column",
                                        children: [
                                            /*#__PURE__*/ _jsx(Text, {
                                                color: "whiteAlpha.800",
                                                fontWeight: "600",
                                                children: empresa.nome
                                            }),
                                            /*#__PURE__*/ _jsx(Text, {
                                                color: "whiteAlpha.600",
                                                children: empresa.endereco
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ _jsxs(Flex, {
                                mt: 3,
                                direction: "row",
                                w: [
                                    150,
                                    150,
                                    150,
                                    300,
                                    300
                                ],
                                children: [
                                    /*#__PURE__*/ _jsx(Flex, {
                                        mr: 2,
                                        mt: 1,
                                        children: /*#__PURE__*/ _jsx(FaPhone, {
                                            color: "#FF7A08"
                                        })
                                    }),
                                    /*#__PURE__*/ _jsx(Link, {
                                        href: `https://wa.me/55${empresa.telefone.replace(/[^\d.]/g, "")}?text=Ol%C3%A1%2C%20voc%C3%AAs%20podem%20me%20ajudar%3F`,
                                        children: /*#__PURE__*/ _jsx(Text, {
                                            color: "whiteAlpha.800",
                                            fontWeight: "500",
                                            children: empresa.telefone
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ _jsxs(Flex, {
                flexFlow: "wrap-reverse",
                justify: "center",
                h: 30,
                pb: 5,
                bg: "#825221",
                children: [
                    /*#__PURE__*/ _jsx(Link, {
                        href: `https://www.facebook.com/${empresa.facebook}`,
                        children: /*#__PURE__*/ _jsx(Image, {
                            mx: 1,
                            w: "26px",
                            src: "facebook.svg",
                            alt: "Facebook"
                        })
                    }),
                    /*#__PURE__*/ _jsx(Link, {
                        href: `https://www.instagram.com/${empresa.instagram}`,
                        children: /*#__PURE__*/ _jsx(Image, {
                            mx: 1,
                            w: "26px",
                            src: "instagram.svg",
                            alt: "Instagram"
                        })
                    }),
                    /*#__PURE__*/ _jsx(Link, {
                        href: `https://www.youtube.com/${empresa.youtube}`,
                        children: /*#__PURE__*/ _jsx(Image, {
                            mx: 1,
                            w: "26px",
                            src: "youtube.svg",
                            alt: "Youtube"
                        })
                    })
                ]
            })
        ]
    });
}
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Rodape)));


/***/ }),

/***/ 1173:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "iZ": () => (/* binding */ PRIMARY_COLOR)
/* harmony export */ });
/* unused harmony exports EMPRESA, NAVITEMS */
const EMPRESA = "Kalla Rio Tecnologia";
const PRIMARY_COLOR = "##825221";
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