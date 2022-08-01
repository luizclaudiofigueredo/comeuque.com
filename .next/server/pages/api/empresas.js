"use strict";
(() => {
var exports = {};
exports.id = 891;
exports.ids = [891];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 9340:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _models_Empresa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3004);
/* harmony import */ var _config_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4949);


async function handler(req, res) {
    const { method  } = req;
    await (0,_config_database__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
    if (method === "GET") {
        try {
            const empresas = await _models_Empresa__WEBPACK_IMPORTED_MODULE_0__/* ["default"].find */ .Z.find();
            res.status(200).json(empresas);
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    }
    if (method === "POST") {
        try {
            const empresa = await _models_Empresa__WEBPACK_IMPORTED_MODULE_0__/* ["default"].create */ .Z.create(req.body);
            res.status(201).json(empresa);
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [469], () => (__webpack_exec__(9340)));
module.exports = __webpack_exports__;

})();