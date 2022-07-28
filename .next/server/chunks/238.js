"use strict";
exports.id = 238;
exports.ids = [238];
exports.modules = {

/***/ 9238:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HD": () => (/* binding */ AuthContextProvider),
/* harmony export */   "aC": () => (/* binding */ useAuth)
/* harmony export */ });
/* unused harmony export AuthContext */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(401);
/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2881);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_auth__WEBPACK_IMPORTED_MODULE_2__, _lib_firebase__WEBPACK_IMPORTED_MODULE_3__]);
([firebase_auth__WEBPACK_IMPORTED_MODULE_2__, _lib_firebase__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const AuthContextProvider = ({ children ,  })=>{
    const { 0: user1 , 1: setUser  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: isLoggedIn , 1: setisLoggedIn  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const unsubscribe = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.onAuthStateChanged)(_lib_firebase__WEBPACK_IMPORTED_MODULE_3__/* .auth */ .I, (user)=>{
            if (user) {
                setisLoggedIn(true);
                setUser({
                    uid: user.uid,
                    email: user.email,
                    displayName: user.displayName,
                    photoURL: user.photoURL
                });
            } else {
                setisLoggedIn(false);
                setUser(null);
            }
        });
        return ()=>unsubscribe()
        ;
    }, []);
    const login = ()=>{
        const provider = new firebase_auth__WEBPACK_IMPORTED_MODULE_2__.GoogleAuthProvider();
        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.signInWithPopup)(_lib_firebase__WEBPACK_IMPORTED_MODULE_3__/* .auth */ .I, provider).then((re)=>{
            setisLoggedIn(true);
            setUser({
                uid: re.user.uid,
                email: re.user.email,
                displayName: re.user.displayName,
                photoURL: re.user.photoURL
            });
        }).catch((err)=>{
            console.log(err);
        });
    };
    const logout = async ()=>{
        try {
            await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.signOut)(_lib_firebase__WEBPACK_IMPORTED_MODULE_3__/* .auth */ .I);
            setisLoggedIn(false);
        } catch (err) {
            console.log(err);
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AuthContext.Provider, {
        value: {
            user: user1,
            login,
            logout,
            isLoggedIn
        },
        children: children
    });
};
const useAuth = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext)
;


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2881:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ auth)
/* harmony export */ });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3745);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(401);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__]);
([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const firebaseConfig = {
    apiKey: "AIzaSyAUP4gIDZZQBd5OGI4Gf4KMKYj1t1EBrcI",
    authDomain: "projetovidamendes-469b7.firebaseapp.com",
    projectId: "projetovidamendes-469b7",
    storageBucket: "projetovidamendes-469b7.appspot.com",
    messagingSenderId: "746849240192",
    appId: "1:746849240192:web:7ef2c6d51e02cbb2885265"
};
let app = firebase_app__WEBPACK_IMPORTED_MODULE_0__.FirebaseApp;
if (firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApps.length) {
    app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApp)();
} else {
    app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);
}
const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)(app);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;