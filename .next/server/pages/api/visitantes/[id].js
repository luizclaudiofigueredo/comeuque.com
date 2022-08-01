"use strict";
(() => {
var exports = {};
exports.id = 7;
exports.ids = [7];
exports.modules = {

/***/ 2245:
/***/ ((module) => {

module.exports = require("moment");

/***/ }),

/***/ 7290:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ executeQuery)
});

;// CONCATENATED MODULE: external "serverless-mysql"
const external_serverless_mysql_namespaceObject = require("serverless-mysql");
var external_serverless_mysql_default = /*#__PURE__*/__webpack_require__.n(external_serverless_mysql_namespaceObject);
;// CONCATENATED MODULE: ./lib/db.js

const db = external_serverless_mysql_default()({
    config: {
        host: "127.0.0.1",
        port: "3306",
        database: "projetovidamendes_production",
        user: "root",
        password: "16031973"
    }
});
async function executeQuery({ query , values  }) {
    try {
        const results = await db.query(query, values);
        await db.end();
        return results;
    } catch (error) {
        return {
            error
        };
    }
};


/***/ }),

/***/ 1046:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7290);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{
    switch(req.method){
        case "GET":
            return await getVisitante(req, res);
        case "DELETE":
            return await deleteVisitante(req, res);
        case "PUT":
            return await updateVisitante(req, res);
    }
});
const getVisitante = async (req, res)=>{
    try {
        const visitante = await (0,_lib_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)({
            query: "SELECT * FROM visitantes WHERE id=?",
            values: [
                req.query.id
            ]
        });
        res.json({
            status: "success",
            result: visitante.length,
            visitante
        });
    } catch (error) {
        console.log(error);
    }
};
const updateVisitante = async (req, res)=>{
    try {
        const { nome  } = req.body;
        const { sobrenome  } = req.body;
        const { telefone  } = req.body;
        const { grupo  } = req.body;
        const { observacoes  } = req.body;
        const updated_at = moment__WEBPACK_IMPORTED_MODULE_1___default()(new Date()).format("YYYY-MM-DD HH:mm:ss");
        const visitante = await (0,_lib_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)({
            query: "UPDATE visitantes SET nome=?, sobrenome=?, telefone=?, grupo=?, observacoes=?, updated_at=? WHERE id=?",
            values: [
                nome,
                sobrenome,
                telefone,
                grupo,
                observacoes,
                updated_at,
                req.query.id
            ]
        });
        res.json({
            status: "success",
            result: visitante.length,
            visitante
        });
    } catch (error) {
        console.log(error);
    }
};
const deleteVisitante = async (req, res)=>{
    try {
        const visitante = await (0,_lib_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)({
            query: "DELETE FROM visitantes WHERE id=?",
            values: [
                req.query.id
            ]
        });
        res.json({
            status: "success"
        });
    } catch (error) {
        console.log(error);
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1046));
module.exports = __webpack_exports__;

})();