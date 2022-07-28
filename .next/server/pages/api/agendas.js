"use strict";
(() => {
var exports = {};
exports.id = 686;
exports.ids = [686];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 6206:
/***/ ((module) => {

module.exports = require("console");

/***/ }),

/***/ 7078:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _models_Agenda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8246);
/* harmony import */ var _config_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4949);


async function handler(req, res) {
    const { method  } = req;
    await (0,_config_database__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
    if (method === "GET") {
        try {
            const agendas = await _models_Agenda__WEBPACK_IMPORTED_MODULE_0__/* ["default"].find */ .Z.find().where("data_evento <= " + Date.now);
            res.status(200).json(agendas);
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    }
    if (method === "POST") {
        try {
            const agenda = await _models_Agenda__WEBPACK_IMPORTED_MODULE_0__/* ["default"].create */ .Z.create(req.body);
            res.status(201).json(agenda);
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
var __webpack_exports__ = __webpack_require__.X(0, [735], () => (__webpack_exec__(7078)));
module.exports = __webpack_exports__;

})();