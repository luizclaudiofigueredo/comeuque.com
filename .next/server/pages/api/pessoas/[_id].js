"use strict";
(() => {
var exports = {};
exports.id = 850;
exports.ids = [850];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 2932:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _models_Pessoa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(761);
/* harmony import */ var _config_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4949);


async function handler(req, res) {
    await (0,_config_database__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
    switch(req.method){
        case "GET":
            return await getPessoa(req, res);
        case "DELETE":
            return await deletePessoa(req, res);
        case "PUT":
            return await updatePessoa(req, res);
    }
};
const getPessoa = async (req, res)=>{
    try {
        const pessoa = await _models_Pessoa__WEBPACK_IMPORTED_MODULE_0__/* ["default"].findOne */ .Z.findOne({
            _id: req.query
        });
        return res.status(200).json(pessoa);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};
const updatePessoa = async (req, res)=>{
    const { _id , nome , telefone , grupo , observacoes , data_cadastro , data_encontro , data_batismo , data_alianca , lider_celula , evangelico , ativo  } = req.body;
    try {
        const pessoa = await _models_Pessoa__WEBPACK_IMPORTED_MODULE_0__/* ["default"].updateOne */ .Z.updateOne({
            _id: req.query
        }, {
            nome,
            telefone,
            grupo,
            observacoes,
            data_cadastro,
            data_encontro,
            data_batismo,
            data_alianca,
            lider_celula,
            evangelico,
            ativo
        });
        res.status(201).json(pessoa);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};
const deletePessoa = async (req, res)=>{
    try {
        const pessoa = await _models_Pessoa__WEBPACK_IMPORTED_MODULE_0__/* ["default"].deleteOne */ .Z.deleteOne({
            _id: req.query
        });
        res.status(201).json(pessoa);
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
var __webpack_exports__ = __webpack_require__.X(0, [356], () => (__webpack_exec__(2932)));
module.exports = __webpack_exports__;

})();