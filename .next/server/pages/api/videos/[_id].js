"use strict";
(() => {
var exports = {};
exports.id = 553;
exports.ids = [553];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 2591:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _models_Video__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5293);
/* harmony import */ var _config_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4949);


(0,_config_database__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{
    switch(req.method){
        case "GET":
            await getVideo(req, res);
            break;
        case "PUT":
            await updateVideo(req, res);
            break;
        case "DELETE":
            await deleteVideo(req, res);
            break;
    }
});
const getVideo = async (req, res)=>{
    try {
        const { _id  } = req.query;
        const video = await _models_Video__WEBPACK_IMPORTED_MODULE_0__/* ["default"].findById */ .Z.findById(_id);
        if (!video) return res.status(400).json({
            err: "Essa publica\xe7\xe3o n\xe3o existe!!!"
        });
        res.json({
            video
        });
    } catch (err) {
        return res.status(500).json({
            err: err.message
        });
    }
};
const updateVideo = async (req, res)=>{
    try {
        const result = await auth(req, res);
        if (result.role !== "admin") return res.status(400).json({
            err: "Authentication is not valid."
        });
        const { id  } = req.query;
        const { title , price , inStock , description , content , category , images  } = req.body;
        if (!title || !price || !inStock || !description || !content || category === "all" || images.length === 0) return res.status(400).json({
            err: "Please add all the fields."
        });
        await _models_Video__WEBPACK_IMPORTED_MODULE_0__/* ["default"].findOneAndUpdate */ .Z.findOneAndUpdate({
            _id: id
        }, {
            title: title.toLowerCase(),
            price,
            inStock,
            description,
            content,
            category,
            images
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
const deleteVideo = async (req, res)=>{
    try {
        const result = await auth(req, res);
        if (result.role !== "admin") return res.status(400).json({
            err: "Authentication is not valid."
        });
        const { id  } = req.query;
        await _models_Video__WEBPACK_IMPORTED_MODULE_0__/* ["default"].findByIdAndDelete */ .Z.findByIdAndDelete(id);
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
var __webpack_exports__ = __webpack_require__.X(0, [27], () => (__webpack_exec__(2591)));
module.exports = __webpack_exports__;

})();