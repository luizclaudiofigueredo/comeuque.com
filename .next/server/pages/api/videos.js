"use strict";
(() => {
var exports = {};
exports.id = 277;
exports.ids = [277];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 3429:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _models_Video__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5293);
/* harmony import */ var _config_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4949);


//import auth from '../../../middleware/auth'
(0,_config_database__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{
    switch(req.method){
        case "GET":
            await getVideos(req, res);
            break;
        case "POST":
            await createVideo(req, res);
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
            categoria: queryObj.category
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
const getVideos = async (req, res)=>{
    try {
        const features = new APIfeatures(_models_Video__WEBPACK_IMPORTED_MODULE_0__/* ["default"].find */ .Z.find(), req.query).filtering().sorting().paginating();
        const videos = await features.query;
        res.json({
            status: "success",
            result: videos.length,
            videos
        });
    } catch (err) {
        return res.status(500).json({
            err: err.message
        });
    }
};
const createVideo = async (req, res)=>{
    try {
        //const result = await auth(req, res)
        const { titulo , imagemUrl , videoId , categoria , data_publicacao , ativo  } = req.body;
        const newVideo = new _models_Video__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z({
            titulo,
            imagemUrl,
            videoId,
            categoria,
            data_publicacao,
            ativo
        });
        await newVideo.save();
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
var __webpack_exports__ = __webpack_require__.X(0, [27], () => (__webpack_exec__(3429)));
module.exports = __webpack_exports__;

})();