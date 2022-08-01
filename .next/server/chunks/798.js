"use strict";
exports.id = 798;
exports.ids = [798];
exports.modules = {

/***/ 1865:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



function Breadcrumbs({ pagina , anterior  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
        direction: "row",
        w: "full",
        px: [
            "10px",
            "10px",
            "10px",
            "60px",
            "60px"
        ],
        py: "40px",
        mt: "32px",
        justifyContent: "space-between",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                fontSize: "1.2rem",
                fontWeight: 600,
                color: "#fafbfc",
                children: pagina
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                fontSize: "0.85rem",
                fontWeight: 500,
                color: "#fafbfc",
                children: anterior !== "" && anterior + " / " + pagina
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Breadcrumbs);


/***/ }),

/***/ 9031:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Yu": () => (/* binding */ getData)
/* harmony export */ });
/* unused harmony exports postData, putData, patchData, deleteData */
const baseUrl = "https://www.projetovidamendes.com";
const getData = async (url, token)=>{
    const res = await fetch(`${baseUrl}/api/${url}`, {
        method: "GET"
    });
    const data = await res.json();
    return data;
};
const postData = async (url, post)=>{
    console.log(post);
    const res = await fetch(`${baseUrl}/api/${url}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(post)
    });
    const data = await res.json();
    return data;
};
const putData = async (url, post, token)=>{
    const res = await fetch(`${baseUrl}/api/${url}`, {
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
const patchData = async (url, post, token)=>{
    const res = await fetch(`${baseUrl}/api/${url}`, {
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
const deleteData = async (url, token)=>{
    const res = await fetch(`${baseUrl}/api/${url}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": token
        }
    });
    const data = await res.json();
    return data;
};


/***/ })

};
;