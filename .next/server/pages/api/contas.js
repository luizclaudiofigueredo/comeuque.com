"use strict";
(() => {
var exports = {};
exports.id = 973;
exports.ids = [973];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 4149:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ contas)
});

// EXTERNAL MODULE: ./models/Conta.js
var Conta = __webpack_require__(272);
// EXTERNAL MODULE: ./config/database.js
var database = __webpack_require__(4949);
;// CONCATENATED MODULE: external "jsonwebtoken"
const external_jsonwebtoken_namespaceObject = require("jsonwebtoken");
var external_jsonwebtoken_default = /*#__PURE__*/__webpack_require__.n(external_jsonwebtoken_namespaceObject);
// EXTERNAL MODULE: external "mongoose"
var external_mongoose_ = __webpack_require__(1185);
var external_mongoose_default = /*#__PURE__*/__webpack_require__.n(external_mongoose_);
;// CONCATENATED MODULE: ./models/Usuario.js

const usuarioSchema = new (external_mongoose_default()).Schema({
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: "user"
    },
    root: {
        type: Boolean,
        default: false
    },
    avatar: {
        type: String,
        default: "https://res.cloudinary.com/devatchannel/image/upload/v1602752402/avatar/avatar_cugq40.png"
    }
}, {
    timestamps: true
});
let Dataset = (external_mongoose_default()).models.Usuario || external_mongoose_default().model("Usuario", usuarioSchema);
/* harmony default export */ const Usuario = (Dataset);

;// CONCATENATED MODULE: ./middleware/auth.js


const auth = async (req, res)=>{
    const token = req.headers.authorization;
    if (!token) return res.status(400).json({
        err: "Invalid Authentication."
    });
    const decoded = external_jsonwebtoken_default().verify(token, "YOUR_ACCESS_TOKEN_SECRET");
    if (!decoded) return res.status(400).json({
        err: "Invalid Authentication."
    });
    const usuario = await Usuario.findOne({
        _id: decoded.id
    });
    return {
        id: user._id,
        role: user.role,
        root: user.root
    };
};
/* harmony default export */ const middleware_auth = (auth);

;// CONCATENATED MODULE: ./pages/api/contas/index.js



(0,database/* default */.Z)();
/* harmony default export */ const contas = (async (req, res)=>{
    switch(req.method){
        case "GET":
            await getContas(req, res);
            break;
        case "POST":
            await createConta(req, res);
            break;
    }
});
class APIfeatures {
    constructor(query, queryString){
        this.query = query;
        this.queryString = queryString;
    }
    filtering() {
        const queryObj = {
            ...this.queryString
        };
        const excludeFields = [
            "page",
            "sort",
            "limit"
        ];
        excludeFields.forEach((el)=>delete queryObj[el]
        );
        if (queryObj.category !== "all") this.query.find({
            category: queryObj.category
        });
        if (queryObj.title !== "all") this.query.find({
            title: {
                $regex: queryObj.title
            }
        });
        this.query.find();
        return this;
    }
    sorting() {
        if (this.queryString.sort) {
            const sortBy = this.queryString.sort.split(",").join("");
            this.query = this.query.sort(sortBy);
        } else {
            this.query = this.query.sort("-createdAt");
        }
        return this;
    }
    paginating() {
        const page = this.queryString.page * 1 || 1;
        const limit = this.queryString.limit * 1 || 6;
        const skip = (page - 1) * limit;
        this.query = this.query.skip(skip).limit(limit);
        return this;
    }
}
const getContas = async (req, res)=>{
    try {
        const features = new APIfeatures(Conta/* default.find */.Z.find(), req.query).filtering().sorting().paginating();
        const contas = await features.query;
        res.json({
            status: "success",
            result: contas.length,
            contas
        });
    } catch (err) {
        return res.status(500).json({
            err: err.message
        });
    }
};
const createConta = async (req, res)=>{
    try {
        const result = await middleware_auth(req, res);
        if (result.role !== "K1a6l0l3a") return res.status(400).json({
            err: "Authentication is not valid."
        });
        const { title , price , inStock , description , content , category , images  } = req.body;
        if (!title || !price || !inStock || !description || !content || category === "all" || images.length === 0) return res.status(400).json({
            err: "Please add all the fields."
        });
        const newProduct = new Products({
            title: title.toLowerCase(),
            price,
            inStock,
            description,
            content,
            category,
            images
        });
        await newProduct.save();
        res.json({
            msg: "Success! Created a new product"
        });
    } catch (err) {
        return res.status(500).json({
            err: err.message
        });
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [914], () => (__webpack_exec__(4149)));
module.exports = __webpack_exports__;

})();