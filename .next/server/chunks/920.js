"use strict";
exports.id = 920;
exports.ids = [920];
exports.modules = {

/***/ 4949:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const dbConnect = ()=>{
    if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connections[0].readyState)) {
        console.log("Already connected.");
        return;
    }
    mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect("mongodb+srv://projetovidamendes:pvmendes1705@cluster0.m0mxv.mongodb.net/pvmendes?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err)=>{
        if (err) throw err;
        console.log("Connected to mongodb.");
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);


/***/ }),

/***/ 5134:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const blogSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({
    titulo: {
        type: String,
        trim: true,
        required: true
    },
    resumo: {
        type: String,
        trim: true,
        required: true
    },
    texto: {
        type: String,
        trim: true
    },
    categoria: {
        type: String,
        enum: [
            "campus",
            "about",
            "celula",
            "mapa"
        ],
        required: true
    },
    imagemUrl: {
        type: String,
        trim: true
    },
    videoId: {
        type: String,
        trim: true
    },
    data_publicacao: {
        type: Date,
        default: Date.now
    },
    ativo: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.Blog) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model("Blog", blogSchema));


/***/ })

};
;