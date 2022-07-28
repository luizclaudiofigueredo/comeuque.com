"use strict";
(() => {
var exports = {};
exports.id = 266;
exports.ids = [266];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 6206:
/***/ ((module) => {

module.exports = require("console");

/***/ }),

/***/ 8215:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _models_Agenda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8246);
/* harmony import */ var _config_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4949);


async function handler(req, res) {
    await (0,_config_database__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
    switch(req.method){
        case "GET":
            return await getAgenda(req, res);
        case "DELETE":
            return await deleteAgenda(req, res);
        case "PUT":
            return await updateAgenda(req, res);
    }
};
const getAgenda = async (req, res)=>{
    try {
        const agenda = await _models_Agenda__WEBPACK_IMPORTED_MODULE_0__/* ["default"].findOne */ .Z.findOne({
            _id: req.query
        });
        return res.status(200).json(agenda);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};
const updateAgenda = async (req, res)=>{
    const { _id , evento , descricao , url , data_evento , ativo  } = req.body;
    try {
        const agenda = await _models_Agenda__WEBPACK_IMPORTED_MODULE_0__/* ["default"].updateOne */ .Z.updateOne({
            _id: req.query
        }, {
            evento,
            descricao,
            url,
            data_evento,
            ativo
        });
        res.status(201).json(agenda);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};
const deleteAgenda = async (req, res)=>{
    try {
        const agenda = await _models_Agenda__WEBPACK_IMPORTED_MODULE_0__/* ["default"].deleteOne */ .Z.deleteOne({
            _id: req.query
        });
        res.status(201).json(agenda);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [735], () => (__webpack_exec__(8215)));
module.exports = __webpack_exports__;

})();