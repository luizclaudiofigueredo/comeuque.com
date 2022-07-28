"use strict";
(() => {
var exports = {};
exports.id = 619;
exports.ids = [619];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 8556:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _models_Empresa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3004);
/* harmony import */ var _config_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4949);


async function handler(req, res) {
    await (0,_config_database__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
    switch(req.method){
        case "GET":
            return await getEmpresa(req, res);
        case "DELETE":
            return await deleteEmpresa(req, res);
        case "PUT":
            return await updateEmpresa(req, res);
    }
};
const getEmpresa = async (req, res)=>{
    try {
        const empresa = await _models_Empresa__WEBPACK_IMPORTED_MODULE_0__/* ["default"].findOne */ .Z.findOne({
            _id: req.query
        });
        return res.status(200).json(empresa);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};
const updateEmpresa = async (req, res)=>{
    const { _id , nome , cnpj , endereco , bairro , cidade , estado , telefone , email , qrcode , copia_cola , ativo  } = req.body;
    try {
        const empresa = await _models_Empresa__WEBPACK_IMPORTED_MODULE_0__/* ["default"].updateOne */ .Z.updateOne({
            _id: req.query
        }, {
            nome,
            cnpj,
            endereco,
            bairro,
            cidade,
            estado,
            telefone,
            email,
            qrcode,
            copia_cola,
            ativo
        });
        res.status(201).json(empresa);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};
const deleteEmpresa = async (req, res)=>{
    try {
        const empresa = await _models_Empresa__WEBPACK_IMPORTED_MODULE_0__/* ["default"].deleteOne */ .Z.deleteOne({
            _id: req.query
        });
        res.status(201).json(empresa);
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
var __webpack_exports__ = __webpack_require__.X(0, [469], () => (__webpack_exec__(8556)));
module.exports = __webpack_exports__;

})();