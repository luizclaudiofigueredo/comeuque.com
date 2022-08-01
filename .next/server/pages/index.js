"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

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

/***/ 7586:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/layout.js + 2 modules
var layout = __webpack_require__(235);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
;// CONCATENATED MODULE: ./config/fetchDados.js
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

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "react-slick"
const external_react_slick_namespaceObject = require("react-slick");
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_namespaceObject);
;// CONCATENATED MODULE: external "react-icons/bs"
const bs_namespaceObject = require("react-icons/bs");
// EXTERNAL MODULE: external "react-icons/fi"
var fi_ = __webpack_require__(2750);
// EXTERNAL MODULE: ./components/botao.js + 1 modules
var botao = __webpack_require__(6198);
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
            dots: true,
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
                    h: [
                        20,
                        20,
                        20,
                        40
                    ],
                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                        fontSize: 24,
                        color: "#825221",
                        fontWeight: "bold",
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

// EXTERNAL MODULE: ./components/useWindowDimensions.js
var useWindowDimensions = __webpack_require__(9643);
;// CONCATENATED MODULE: external "react-icons/md"
const md_namespaceObject = require("react-icons/md");
;// CONCATENATED MODULE: external "emailjs-com"
const external_emailjs_com_namespaceObject = require("emailjs-com");
var external_emailjs_com_default = /*#__PURE__*/__webpack_require__.n(external_emailjs_com_namespaceObject);
// EXTERNAL MODULE: ./lib/constant.js
var constant = __webpack_require__(1173);
;// CONCATENATED MODULE: ./components/form_contato.js







function Contato(props) {
    function handleSubmit(e) {
        e.preventDefault(); //This is important, i'm not sure why, but the email won't send without it
        external_emailjs_com_default().sendForm("service_ikge4sk", "template_32a0hfj", e.target, "8Hh2hSzRwdOGAe58h").then((result)=>{
            window.location.reload() //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
            ;
        }, (error)=>{
            console.log(error.text);
        });
    }
    const Logo = (props)=>{
        return /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
            justify: "center",
            py: 8,
            children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Image, {
                src: "images/logosite-final.png",
                h: "120px",
                alt: "Logotipo",
                paddingTop: 2
            })
        });
    };
    const FormularioContato = ()=>{
        return /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
            direction: "column",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                onSubmit: handleSubmit,
                className: "w-full max-w-sm",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Center, {
                        flexDirection: "column",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.FormControl, {
                                w: "full",
                                mb: 3,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.FormLabel, {
                                        htmlFor: "nome",
                                        color: constant/* DARK_COLOR */.cu,
                                        children: "Seu nome"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.InputGroup, {
                                        borderColor: "gray.800",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(react_.InputLeftElement, {
                                                pointerEvents: "none",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(bs_namespaceObject.BsPerson, {
                                                    color: "gray.800"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Input, {
                                                name: "nome",
                                                type: "string",
                                                placeholder: "Nome",
                                                color: "white"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.FormControl, {
                                w: "full",
                                mb: 3,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.FormLabel, {
                                        htmlFor: "email",
                                        color: constant/* DARK_COLOR */.cu,
                                        children: "Seu Email"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.InputGroup, {
                                        borderColor: "gray.800",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(react_.InputLeftElement, {
                                                pointerEvents: "none",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(md_namespaceObject.MdOutlineEmail, {
                                                    color: "gray.800"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Input, {
                                                name: "email",
                                                type: "string",
                                                placeholder: "Email",
                                                color: "white"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.FormControl, {
                                w: "full",
                                mb: 3,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.FormLabel, {
                                        htmlFor: "observacoes",
                                        color: constant/* DARK_COLOR */.cu,
                                        children: "Mensagem"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.InputGroup, {
                                        borderColor: "gray.800",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Textarea, {
                                            name: "observacoes",
                                            placeholder: "Mensagem"
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Center, {
                        flexDirection: "column",
                        mt: 6,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
                            direction: "row",
                            w: "full",
                            alignItems: "center",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                                py: 6,
                                type: "submit",
                                bg: constant/* DARK_COLOR */.cu,
                                color: "white",
                                w: "sm",
                                _hover: {
                                    bg: constant/* LIGHT_COLOR */.$U,
                                    color: "white"
                                },
                                children: "Enviar Mensagem"
                            })
                        })
                    })
                ]
            })
        });
    };
    const Social = ()=>{
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.HStack, {
            mt: {
                lg: 10,
                md: 10
            },
            spacing: 5,
            px: 5,
            alignItems: "center",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    href: `https://facebook.com/${props.empresa.facebook}`,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.IconButton, {
                        "aria-label": "facebook",
                        variant: "ghost",
                        size: "lg",
                        isRound: true,
                        _hover: {
                            bg: "#0D74FF"
                        },
                        icon: /*#__PURE__*/ jsx_runtime_.jsx(md_namespaceObject.MdFacebook, {
                            size: "28px"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    href: `https://instagram.com/${props.empresa.instagram}`,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.IconButton, {
                        "aria-label": "instagram",
                        variant: "ghost",
                        size: "lg",
                        isRound: true,
                        _hover: {
                            bg: "#0D74FF"
                        },
                        icon: /*#__PURE__*/ jsx_runtime_.jsx(bs_namespaceObject.BsInstagram, {
                            size: "28px"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    href: `https://youtube.com/${props.empresa.youtube}`,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.IconButton, {
                        "aria-label": "youtube",
                        variant: "ghost",
                        size: "lg",
                        isRound: true,
                        _hover: {
                            bg: "#0D74FF"
                        },
                        icon: /*#__PURE__*/ jsx_runtime_.jsx(bs_namespaceObject.BsYoutube, {
                            size: "28px"
                        })
                    })
                })
            ]
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
        bg: "#fdc319",
        boxShadow: "md",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Logo, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                direction: [
                    "column",
                    "column",
                    "column",
                    "row"
                ],
                justify: "space-evenly",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
                        p: [
                            6,
                            6,
                            6,
                            10,
                            10
                        ],
                        justify: "flex-start",
                        direction: "column",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.VStack, {
                            minW: 350,
                            spacing: 2,
                            gap: 3,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(react_.Heading, {
                                    mb: 4,
                                    color: "gray.800",
                                    children: "Contato"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(FormularioContato, {})
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
                        p: [
                            4,
                            4,
                            4,
                            10,
                            10
                        ],
                        justify: "flex-start",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.VStack, {
                            minW: 350,
                            gap: 2,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(react_.Heading, {
                                    mb: 4,
                                    color: "gray.800",
                                    children: "Redes Sociais"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Social, {})
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
                        p: [
                            4,
                            4,
                            4,
                            10,
                            10
                        ],
                        maxW: 420,
                        justify: "flex-start",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.VStack, {
                            minW: 350,
                            spacing: 2,
                            gap: 3,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(react_.Heading, {
                                    mb: 4,
                                    color: "gray.800",
                                    children: props.empresa.nome
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                    children: props.empresa.endereco
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                                    href: `https://wa.me/55${props.empresa.telefone.replace(/[^\d.]/g, "")}?text=Ol%C3%A1%2C%20voc%C3%AAs%20podem%20me%20ajudar%3F`,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                        color: constant/* DARK_COLOR */.cu,
                                        fontSize: 28,
                                        fontWeight: "800",
                                        children: props.empresa.telefone
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: external "react-mapbox-gl"
const external_react_mapbox_gl_namespaceObject = require("react-mapbox-gl");
var external_react_mapbox_gl_default = /*#__PURE__*/__webpack_require__.n(external_react_mapbox_gl_namespaceObject);
;// CONCATENATED MODULE: ./components/mapa.js




function Mapa() {
    const Map = external_react_mapbox_gl_default()({
        accessToken: "pk.eyJ1Ijoia2FsbGFyaW8iLCJhIjoiY2w2YXBoc291MXFpMzNvbjM1bzB6em55MiJ9.Cyi-lwLrpwX5mx9SZFOTDA"
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Map, {
        style: "mapbox://styles/mapbox/streets-v9",
        containerStyle: {
            height: [
                "400px"
            ],
            width: "100%"
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                children: "Mapas"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_mapbox_gl_namespaceObject.Layer, {
                type: "symbol",
                id: "marker",
                layout: {
                    "icon-image": "marker-17"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_mapbox_gl_namespaceObject.Feature, {
                        coordinates: [
                            -22.6105485,
                            -43.7130127
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_mapbox_gl_namespaceObject.ZoomControl, {})
                ]
            })
        ]
    });
}
/* harmony default export */ const mapa = (Mapa);

;// CONCATENATED MODULE: ./components/hero.js





class Hero extends external_react_.Component {
    render() {
        const images = this.props.images;
        var settings = {
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            speed: 1200,
            autoplaySpeed: 3600,
            cssEase: "linear"
        };
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_slick_default()), {
                ...settings,
                children: images.map((d)=>/*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Image, {
                            src: "http://comeuque.kallario.com.br" + d.my_url_slide,
                            alt: `Picture of ${d.titulo}`,
                            w: "full",
                            marginTop: "95px"
                        })
                    }, d.id)
                )
            })
        });
    }
};

;// CONCATENATED MODULE: ./pages/index.js










function Home(props) {
    const { 0: slides , 1: setSlide  } = (0,external_react_.useState)(props.slides);
    const { height , width  } = (0,useWindowDimensions/* default */.Z)();
    (0,external_react_.useEffect)(()=>{
        setSlide(props.slides);
    }, [
        props.slides
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
        direction: "column",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(layout/* default */.Z, {
            empresa: props.empresa,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Hero, {
                    images: slides
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
                    direction: "column",
                    w: "full",
                    px: [
                        "10px",
                        "10px",
                        "10px",
                        "20px"
                    ],
                    justifyContent: "space-between",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Galeria, {
                        width: width
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
                    w: "full",
                    justify: "center",
                    align: "center",
                    alignItems: "center",
                    h: 40,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                        fontSize: 24,
                        color: "gray.700",
                        children: "Card\xe1pio"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(mapa, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(Contato, {
                    empresa: props.empresa
                })
            ]
        })
    });
};
async function getServerSideProps() {
    const slides_res = await getDados(`slides`);
    const empresas = await getDados(`empresas/1`);
    return {
        props: {
            slides: slides_res,
            empresa: empresas
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
var __webpack_exports__ = __webpack_require__.X(0, [235], () => (__webpack_exec__(7586)));
module.exports = __webpack_exports__;

})();