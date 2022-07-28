"use strict";
(() => {
var exports = {};
exports.id = 842;
exports.ids = [842];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 6206:
/***/ ((module) => {

module.exports = require("console");

/***/ }),

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

/***/ 519:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

// EXTERNAL MODULE: external "console"
var external_console_ = __webpack_require__(6206);
// EXTERNAL MODULE: external "mongoose"
var external_mongoose_ = __webpack_require__(1185);
var external_mongoose_default = /*#__PURE__*/__webpack_require__.n(external_mongoose_);
;// CONCATENATED MODULE: ./models/Slide.js


const slideSchema = new (external_mongoose_default()).Schema({
    titulo: {
        type: String,
        trim: true,
        required: true
    },
    descricao: {
        type: String,
        trim: true,
        required: true
    },
    url: {
        type: String,
        trim: true
    }
}, {
    timestamps: true
});
/* harmony default export */ const Slide = ((external_mongoose_default()).models.Slide || external_mongoose_default().model("Slide", slideSchema));

// EXTERNAL MODULE: ./config/database.js
var database = __webpack_require__(4949);
;// CONCATENATED MODULE: ./pages/api/slides/index.js


async function handler(req, res) {
    const { method  } = req;
    await (0,database/* default */.Z)();
    if (method === "GET") {
        try {
            const empresas = await Empresa.find();
            res.status(200).json(empresas);
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    }
    if (method === "POST") {
        try {
            const empresa = await Empresa.create(req.body);
            res.status(201).json(empresa);
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    }
};
const slides_images = [
    "images/Image1.jpg",
    `images/Image${current.getMonth() + 1}.jpg`,
    `images/120Slide.jpg`
];


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(519));
module.exports = __webpack_exports__;

})();