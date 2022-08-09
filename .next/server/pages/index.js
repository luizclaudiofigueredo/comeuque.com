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

/***/ 1923:
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
const baseUrl = "http://painel.kallario.com.br/api";
const getDados = async (url, token)=>{
    try {
        const res = await fetch(`${baseUrl}/${url}`, {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + "eyJhbGciOiJIUzI1NiJ9.eyJ1c3VhcmlvX2lkIjoyfQ.12jVgTMmJvPrrdsM9yxmokUHzqxL4ZKmcaxzZeAa5VA"
            }
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
// EXTERNAL MODULE: ./components/botao.js + 1 modules
var botao = __webpack_require__(6198);
;// CONCATENATED MODULE: external "sweetalert2"
const external_sweetalert2_namespaceObject = require("sweetalert2");
var external_sweetalert2_default = /*#__PURE__*/__webpack_require__.n(external_sweetalert2_namespaceObject);
;// CONCATENATED MODULE: ./components/produtos.js





function ProductAddToCart(props) {
    const nome = (0,external_react_.useState)(props.data.nome);
    const descricao = (0,external_react_.useState)(props.data.descricao);
    const imagem = (0,external_react_.useState)("http://painel.kallario.com.br" + props.data.url_imagem);
    function handleShowClick() {
        external_sweetalert2_default().fire({
            title: nome,
            text: descricao,
            imageUrl: imagem,
            imageWidth: 400,
            imageHeight: 300,
            imageAlt: "Custom image",
            color: "#ffffff",
            background: "#f58634",
            confirmButtonText: "Fazer Pedido!",
            confirmButtonColor: "#f7180d",
            showCloseButton: true
        });
    }
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
                /*#__PURE__*/ jsx_runtime_.jsx(react_.Image, {
                    src: imagem,
                    alt: nome,
                    roundedTop: "lg",
                    onClick: ()=>handleShowClick()
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
                                children: nome
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
                            justifyContent: "space-between",
                            alignContent: "center",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(botao/* default */.Z, {})
                        })
                    ]
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./components/galeria.js





class Galeria extends external_react_.Component {
    render() {
        const width = this.props.width;
        const data = this.props.produtos;
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
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
            id: "cardapio",
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
                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Heading, {
                        color: "#825221",
                        children: "Destaques"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_slick_default()), {
                        ...settings,
                        children: data.map((d, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(ProductAddToCart, {
                                    data: d
                                })
                            }, index)
                        )
                    })
                })
            ]
        });
    }
};

// EXTERNAL MODULE: ./components/useWindowDimensions.js
var useWindowDimensions = __webpack_require__(9643);
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
                            src: "http://painel.kallario.com.br" + d.url_imagem,
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

;// CONCATENATED MODULE: external "react-map-gl"
const external_react_map_gl_namespaceObject = require("react-map-gl");
var external_react_map_gl_default = /*#__PURE__*/__webpack_require__.n(external_react_map_gl_namespaceObject);
;// CONCATENATED MODULE: ./components/mymap.js





function MyMap(props) {
    const lat = props.empresa.latitude;
    const lgt = props.empresa.longitude;
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
                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Heading, {
                    color: "#825221",
                    children: "Onde estamos?"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_map_gl_default()), {
                    mapboxAccessToken: "pk.eyJ1Ijoia2FsbGFyaW8iLCJhIjoiY2w2YXBoc291MXFpMzNvbjM1bzB6em55MiJ9.Cyi-lwLrpwX5mx9SZFOTDA",
                    style: {
                        height: "500px",
                        width: "100%"
                    },
                    initialViewState: {
                        longitude: lgt,
                        latitude: lat,
                        zoom: 17.0
                    },
                    mapStyle: "mapbox://styles/mapbox/streets-v11",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_namespaceObject.GeolocateControl, {
                            positionOptions: {
                                enableHighAccuracy: true
                            },
                            trackUserLocation: true
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_namespaceObject.Marker, {
                            longitude: lgt,
                            latitude: lat
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_namespaceObject.FullscreenControl, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_namespaceObject.NavigationControl, {})
                    ]
                })
            })
        ]
    });
}
/* harmony default export */ const mymap = (MyMap);

;// CONCATENATED MODULE: external "react-icons/md"
const md_namespaceObject = require("react-icons/md");
;// CONCATENATED MODULE: external "react-icons/bs"
const bs_namespaceObject = require("react-icons/bs");
// EXTERNAL MODULE: ./lib/constant.js
var constant = __webpack_require__(1173);
;// CONCATENATED MODULE: external "emailjs-com"
const external_emailjs_com_namespaceObject = require("emailjs-com");
var external_emailjs_com_default = /*#__PURE__*/__webpack_require__.n(external_emailjs_com_namespaceObject);
;// CONCATENATED MODULE: ./components/form_contact.js








const ContactUs = ()=>{
    const { 0: nome , 1: setNome  } = (0,external_react_.useState)("");
    const { 0: email , 1: setEmail  } = (0,external_react_.useState)("");
    const { 0: mensagem , 1: setMensagem  } = (0,external_react_.useState)("");
    const form = (0,external_react_.useRef)();
    const handleSubmit = async (e)=>{
        e.preventDefault();
        sendEmail(e);
        external_sweetalert2_default().fire("Mensagem enviada com sucesso!", "", "success");
        setNome("");
        setEmail("");
        setMensagem("");
    };
    function sendEmail(e) {
        e.preventDefault(); //This is important, i'm not sure why, but the email won't send without it
        external_emailjs_com_default().sendForm("service_0zd9evo", "template_c7eep5s", e.target, "YQsqvFEGr6f5vFWum").then((result)=>{
            console.log("Ok");
        }, (error)=>{
            console.log(error.text);
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.VStack, {
        w: "full",
        h: "full",
        p: 10,
        spacing: 10,
        alignItems: "flex-start",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.VStack, {
                spacing: 3,
                alignItems: "flex-start",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Heading, {
                        color: constant/* DARK_COLOR */.cu,
                        children: "Contato"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                        children: "Tem alguma d\xfavida? Algum problema? Quer apenas conversar? Esse aqui \xe9 o seu espa\xe7o."
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                ref: form,
                onSubmit: handleSubmit,
                className: "w-full max-w-md",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.FormControl, {
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
                                        placeholder: "Seu Nome",
                                        bg: "white",
                                        color: "gray.800",
                                        _placeholder: {
                                            color: "gray.500"
                                        },
                                        onChange: (event)=>setNome(event.target.value)
                                        ,
                                        value: nome
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.FormControl, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.FormLabel, {
                                htmlFor: "email",
                                color: constant/* DARK_COLOR */.cu,
                                mt: 2,
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
                                        placeholder: "Seu Email",
                                        bg: "white",
                                        color: "gray.800",
                                        _placeholder: {
                                            color: "gray.500"
                                        },
                                        onChange: (event)=>setEmail(event.target.value)
                                        ,
                                        value: email
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.FormControl, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.FormLabel, {
                                htmlFor: "observacoes",
                                color: constant/* DARK_COLOR */.cu,
                                mt: 2,
                                children: "Mensagem"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.InputGroup, {
                                borderColor: "gray.800",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Textarea, {
                                    name: "mensagem",
                                    placeholder: "Deixe sua mensagem",
                                    bg: "white",
                                    color: "gray.800",
                                    _placeholder: {
                                        color: "gray.500"
                                    },
                                    onChange: (event)=>setMensagem(event.target.value)
                                    ,
                                    value: mensagem
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                        type: "submit",
                        bg: constant/* DARK_COLOR */.cu,
                        color: "white",
                        my: 4,
                        size: "lg",
                        w: "full",
                        _hover: {
                            bg: "#916601"
                        },
                        children: "Enviar Mensagem"
                    })
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/form_contato.js








function FaleConosco(props1) {
    const Logo = (props)=>{
        return /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
            justify: "center",
            py: 8,
            children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Image, {
                src: "http://painel.kallario.com.br" + props.imagem,
                h: "120px",
                alt: "Logotipo",
                paddingTop: 2
            })
        });
    };
    const Social = ()=>{
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.VStack, {
            w: "full",
            h: "full",
            p: 10,
            spacing: 10,
            alignItems: "flex-start",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.VStack, {
                    spacing: 3,
                    alignItems: "flex-start",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Heading, {
                            color: constant/* DARK_COLOR */.cu,
                            children: "Redes Sociais"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                            children: "Nos Acompanhe nas Redes Sociais e Fique por dentro das Novidades e Promo\xe7\xf5es!"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(react_.SimpleGrid, {
                    rowGap: 6,
                    w: "full",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.GridItem, {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.HStack, {
                            w: "full",
                            mt: {
                                lg: 10,
                                md: 10
                            },
                            spacing: 5,
                            px: 5,
                            justify: "center",
                            alignItems: "center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: `https://facebook.com/${props1.empresa.facebook}`,
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
                                    href: `https://instagram.com/${props1.empresa.instagram}`,
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
                                    href: `https://youtube.com/${props1.empresa.youtube}`,
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
                        })
                    })
                })
            ]
        });
    };
    const Pedidos = ()=>{
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.VStack, {
            w: "full",
            h: "full",
            p: 10,
            spacing: 6,
            alignItems: "flex-start",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(react_.VStack, {
                    w: "full",
                    alignItems: "center",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Logo, {
                        imagem: props1.empresa.url_imagem
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.VStack, {
                    alignItems: "flex-start",
                    w: "full",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                            children: props1.empresa.endereco
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Text, {
                            children: [
                                props1.empresa.bairro,
                                ", ",
                                props1.empresa.cidade,
                                "/",
                                props1.empresa.estado
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                            direction: "row",
                            justify: "center",
                            alignItems: "center",
                            w: "full",
                            mb: 4,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(react_.IconButton, {
                                    "aria-label": "youtube",
                                    variant: "ghost",
                                    size: "lg",
                                    isRound: true,
                                    color: constant/* DARK_COLOR */.cu,
                                    _hover: {
                                        bg: "#0D74FF"
                                    },
                                    icon: /*#__PURE__*/ jsx_runtime_.jsx(bs_namespaceObject.BsWhatsapp, {
                                        size: "28px"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: `https://wa.me/55${props1.empresa.whatsapp.replace(/[^\d.]/g, "")}?text=Ol%C3%A1%2C%20voc%C3%AAs%20podem%20me%20ajudar%3F`,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                        fontFamily: "Mont-Heavy",
                                        color: constant/* DARK_COLOR */.cu,
                                        fontSize: 24,
                                        children: props1.empresa.whatsapp
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(botao/* default */.Z, {
                            paddingY: 6,
                            mt: 4
                        })
                    ]
                })
            ]
        });
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
        bg: "#fdc319",
        id: "contato",
        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Container, {
            maxW: "container.xl",
            p: 0,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                h: {
                    base: "auto",
                    md: "fit-content"
                },
                py: [
                    0,
                    10,
                    20
                ],
                direction: {
                    base: "column-reverse",
                    md: "row"
                },
                justify: "space-evenly",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(ContactUs, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(Social, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(Pedidos, {})
                ]
            })
        })
    });
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
                        width: width,
                        produtos: props.produtos
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(mymap, {
                    empresa: props.empresa
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(FaleConosco, {
                    empresa: props.empresa
                })
            ]
        })
    });
};
async function getServerSideProps() {
    const p = await getDados(`produtos`);
    const s = await getDados(`slides`);
    const e = await getDados(`empresas/1`);
    return {
        props: {
            produtos: p,
            slides: s,
            empresa: e
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
var __webpack_exports__ = __webpack_require__.X(0, [235], () => (__webpack_exec__(1923)));
module.exports = __webpack_exports__;

})();