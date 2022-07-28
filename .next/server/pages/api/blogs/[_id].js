"use strict";
(() => {
var exports = {};
exports.id = 482;
exports.ids = [482];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 384:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _models_Blog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5134);
/* harmony import */ var _config_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4949);


(0,_config_database__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{
    switch(req.method){
        case "GET":
            await getBlog(req, res);
            break;
        case "PUT":
            await updateBlog(req, res);
            break;
        case "DELETE":
            await deleteBlog(req, res);
            break;
    }
});
const getBlog = async (req, res)=>{
    try {
        const { _id  } = req.query;
        const blog = await _models_Blog__WEBPACK_IMPORTED_MODULE_0__/* ["default"].findById */ .Z.findById(_id);
        if (!blog) return res.status(400).json({
            err: "Essa publica\xe7\xe3o n\xe3o existe."
        });
        res.json({
            blog
        });
    } catch (err) {
        return res.status(500).json({
            err: err.message
        });
    }
};
const updateBlog = async (req, res)=>{
    try {
        const { id  } = req.query;
        const { titulo , resumo , texto , categoria , imagemUrl , videoId , data_publicao , ativo  } = req.body;
        await _models_Blog__WEBPACK_IMPORTED_MODULE_0__/* ["default"].findOneAndUpdate */ .Z.findOneAndUpdate({
            _id: id
        }, {
            titulo,
            resumo,
            texto,
            categoria,
            imagemUrl,
            videoId,
            data_publicao,
            ativo
        });
        res.json({
            msg: "Success! Updated a product"
        });
    } catch (err) {
        return res.status(500).json({
            err: err.message
        });
    }
};
const deleteBlog = async (req, res)=>{
    try {
        const { id  } = req.query;
        await _models_Blog__WEBPACK_IMPORTED_MODULE_0__/* ["default"].findByIdAndDelete */ .Z.findByIdAndDelete(id);
        res.json({
            msg: "Deleted a product."
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
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [920], () => (__webpack_exec__(384)));
module.exports = __webpack_exports__;

})();