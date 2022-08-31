"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/db/createUser";
exports.ids = ["pages/api/db/createUser"];
exports.modules = {

/***/ "@sanity/client":
/*!*********************************!*\
  !*** external "@sanity/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@sanity/client");

/***/ }),

/***/ "(api)/./lib/sanity.js":
/*!***********************!*\
  !*** ./lib/sanity.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"client\": () => (/* binding */ client)\n/* harmony export */ });\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sanity/client */ \"@sanity/client\");\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sanity_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst client = _sanity_client__WEBPACK_IMPORTED_MODULE_0___default()({\n    projectId: process.env.SANITY_PROJECT_ID,\n    dataset: 'production',\n    apiVersion: 'v1',\n    token: process.env.SANITY_TOKEN,\n    useCdn: false\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvc2FuaXR5LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUF5QztBQUVsQyxLQUFLLENBQUNDLE1BQU0sR0FBR0QscURBQVksQ0FBQyxDQUFDO0lBQ2xDRSxTQUFTLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxpQkFBaUI7SUFDeENDLE9BQU8sRUFBRSxDQUFZO0lBQ3JCQyxVQUFVLEVBQUUsQ0FBSTtJQUNoQkMsS0FBSyxFQUFFTCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0ssWUFBWTtJQUMvQkMsTUFBTSxFQUFFLEtBQUs7QUFDZixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdWJlci1jbG9uZS1ibG9ja2NoYWluLy4vbGliL3Nhbml0eS5qcz9kOGJhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzYW5pdHlDbGllbnQgZnJvbSAnQHNhbml0eS9jbGllbnQnXHJcblxyXG5leHBvcnQgY29uc3QgY2xpZW50ID0gc2FuaXR5Q2xpZW50KHtcclxuICBwcm9qZWN0SWQ6IHByb2Nlc3MuZW52LlNBTklUWV9QUk9KRUNUX0lELFxyXG4gIGRhdGFzZXQ6ICdwcm9kdWN0aW9uJyxcclxuICBhcGlWZXJzaW9uOiAndjEnLFxyXG4gIHRva2VuOiBwcm9jZXNzLmVudi5TQU5JVFlfVE9LRU4sXHJcbiAgdXNlQ2RuOiBmYWxzZSxcclxufSlcclxuIl0sIm5hbWVzIjpbInNhbml0eUNsaWVudCIsImNsaWVudCIsInByb2plY3RJZCIsInByb2Nlc3MiLCJlbnYiLCJTQU5JVFlfUFJPSkVDVF9JRCIsImRhdGFzZXQiLCJhcGlWZXJzaW9uIiwidG9rZW4iLCJTQU5JVFlfVE9LRU4iLCJ1c2VDZG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/sanity.js\n");

/***/ }),

/***/ "(api)/./pages/api/db/createUser.js":
/*!************************************!*\
  !*** ./pages/api/db/createUser.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_sanity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/sanity */ \"(api)/./lib/sanity.js\");\n\nconst createUserInSanity = async (req, res)=>{\n    try {\n        const userDoc = {\n            _type: 'users',\n            _id: req.body.userWalletAddress,\n            name: req.body.name,\n            walletAddress: req.body.userWalletAddress\n        };\n        await _lib_sanity__WEBPACK_IMPORTED_MODULE_0__.client.createIfNotExists(userDoc);\n        res.status(200).send({\n            message: 'success'\n        });\n    } catch (error) {\n        res.status(500).send({\n            message: 'error',\n            data: error.message\n        });\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createUserInSanity);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZGIvY3JlYXRlVXNlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUE0QztBQUU1QyxLQUFLLENBQUNDLGtCQUFrQixVQUFVQyxHQUFHLEVBQUVDLEdBQUcsR0FBSyxDQUFDO0lBQzlDLEdBQUcsQ0FBQyxDQUFDO1FBQ0gsS0FBSyxDQUFDQyxPQUFPLEdBQUcsQ0FBQztZQUNmQyxLQUFLLEVBQUUsQ0FBTztZQUNkQyxHQUFHLEVBQUVKLEdBQUcsQ0FBQ0ssSUFBSSxDQUFDQyxpQkFBaUI7WUFDL0JDLElBQUksRUFBRVAsR0FBRyxDQUFDSyxJQUFJLENBQUNFLElBQUk7WUFDbkJDLGFBQWEsRUFBRVIsR0FBRyxDQUFDSyxJQUFJLENBQUNDLGlCQUFpQjtRQUMzQyxDQUFDO1FBRUQsS0FBSyxDQUFDUixpRUFBd0IsQ0FBQ0ksT0FBTztRQUV0Q0QsR0FBRyxDQUFDUyxNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUMsQ0FBQztZQUFDQyxPQUFPLEVBQUUsQ0FBUztRQUFDLENBQUM7SUFDN0MsQ0FBQyxDQUFDLEtBQUssRUFBRUMsS0FBSyxFQUFFLENBQUM7UUFDZlosR0FBRyxDQUFDUyxNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUMsQ0FBQztZQUFDQyxPQUFPLEVBQUUsQ0FBTztZQUFFRSxJQUFJLEVBQUVELEtBQUssQ0FBQ0QsT0FBTztRQUFDLENBQUM7SUFDaEUsQ0FBQztBQUNILENBQUM7QUFFRCxpRUFBZWIsa0JBQWtCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdWJlci1jbG9uZS1ibG9ja2NoYWluLy4vcGFnZXMvYXBpL2RiL2NyZWF0ZVVzZXIuanM/NzE0NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjbGllbnQgfSBmcm9tICcuLi8uLi8uLi9saWIvc2FuaXR5J1xyXG5cclxuY29uc3QgY3JlYXRlVXNlckluU2FuaXR5ID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHVzZXJEb2MgPSB7XHJcbiAgICAgIF90eXBlOiAndXNlcnMnLFxyXG4gICAgICBfaWQ6IHJlcS5ib2R5LnVzZXJXYWxsZXRBZGRyZXNzLFxyXG4gICAgICBuYW1lOiByZXEuYm9keS5uYW1lLFxyXG4gICAgICB3YWxsZXRBZGRyZXNzOiByZXEuYm9keS51c2VyV2FsbGV0QWRkcmVzcyxcclxuICAgIH1cclxuXHJcbiAgICBhd2FpdCBjbGllbnQuY3JlYXRlSWZOb3RFeGlzdHModXNlckRvYylcclxuXHJcbiAgICByZXMuc3RhdHVzKDIwMCkuc2VuZCh7IG1lc3NhZ2U6ICdzdWNjZXNzJyB9KVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXMuc3RhdHVzKDUwMCkuc2VuZCh7IG1lc3NhZ2U6ICdlcnJvcicsIGRhdGE6IGVycm9yLm1lc3NhZ2UgfSlcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVVzZXJJblNhbml0eVxyXG4iXSwibmFtZXMiOlsiY2xpZW50IiwiY3JlYXRlVXNlckluU2FuaXR5IiwicmVxIiwicmVzIiwidXNlckRvYyIsIl90eXBlIiwiX2lkIiwiYm9keSIsInVzZXJXYWxsZXRBZGRyZXNzIiwibmFtZSIsIndhbGxldEFkZHJlc3MiLCJjcmVhdGVJZk5vdEV4aXN0cyIsInN0YXR1cyIsInNlbmQiLCJtZXNzYWdlIiwiZXJyb3IiLCJkYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/db/createUser.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/db/createUser.js"));
module.exports = __webpack_exports__;

})();