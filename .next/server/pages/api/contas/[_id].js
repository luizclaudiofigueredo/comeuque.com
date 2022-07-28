"use strict";
(() => {
var exports = {};
exports.id = 766;
exports.ids = [766];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 6611:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _models_Conta__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(272);
/* harmony import */ var _config_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4949);


async function handler(req, res) {
    await (0,_config_database__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
    switch(req.method){
        case "GET":
            return await getConta(req, res);
        case "DELETE":
            return await deleteConta(req, res);
        case "PUT":
            return await updateConta(req, res);
    }
};
const getConta = async (req, res)=>{
    try {
        const conta = await _models_Conta__WEBPACK_IMPORTED_MODULE_0__/* ["default"].findOne */ .Z.findOne({
            _id: req.query
        });
        return res.status(200).json(conta);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};
const updateConta = async (req, res)=>{
    const { _id , numero_banco , banco , agencia , conta , qrcode , logo , ativo  } = req.body;
    try {
        const contas = await _models_Conta__WEBPACK_IMPORTED_MODULE_0__/* ["default"].updateOne */ .Z.updateOne({
            _id: req.query
        }, {
            numero_banco,
            banco,
            agencia,
            conta,
            qrcode,
            logo,
            ativo
        });
        res.status(201).json(contas);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};
const deleteConta = async (req, res)=>{
    try {
        const conta = await _models_Conta__WEBPACK_IMPORTED_MODULE_0__/* ["default"].deleteOne */ .Z.deleteOne({
            _id: req.query
        });
        res.status(201).json(conta);
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
var __webpack_exports__ = __webpack_require__.X(0, [914], () => (__webpack_exec__(6611)));
module.exports = __webpack_exports__;

})();