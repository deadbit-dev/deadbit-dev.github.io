"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkdeadbit_dev"] = self["webpackChunkdeadbit_dev"] || []).push([["src_components_Screen_jsx"],{

/***/ "./src/components/Screen.jsx":
/*!***********************************!*\
  !*** ./src/components/Screen.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Screen)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_fps_stats__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-fps-stats */ \"./node_modules/react-fps-stats/dist/index.js\");\n/* harmony import */ var _ThemeSwitch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ThemeSwitch */ \"./src/components/ThemeSwitch.jsx\");\n/* harmony import */ var _Preloader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Preloader */ \"./src/components/Preloader.jsx\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\nvar Scene = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(function () {\n  return Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_juggle_resize-observer_lib_exports_resize-observer_js-node_modules_react-94dc5a\"), __webpack_require__.e(\"src_components_Scene_jsx\")]).then(__webpack_require__.bind(__webpack_require__, /*! ./Scene */ \"./src/components/Scene.jsx\"));\n});\nfunction Screen() {\n  var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();\n\n  if (window.screen.orientation) {\n    var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(window.screen.orientation.angle),\n        _useState2 = _slicedToArray(_useState, 2),\n        angle = _useState2[0],\n        setAngle = _useState2[1];\n\n    window.screen.orientation.onchange = function (event) {\n      setAngle(event.currentTarget.angle);\n    };\n\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n      switch (angle) {\n        case 0:\n          ref.current.style.display = \"block\";\n          document.body.classList.remove(\"turnDeviceNotification\");\n          break;\n\n        case 180:\n          ref.current.style.display = \"block\";\n          document.body.classList.remove(\"turnDeviceNotification\");\n          break;\n\n        case 90:\n          ref.current.style.display = \"none\";\n          document.body.classList.add(\"turnDeviceNotification\");\n          break;\n\n        case -90:\n          ref.current.style.display = \"none\";\n          document.body.classList.add(\"turnDeviceNotification\");\n          break;\n      }\n    });\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    ref: ref,\n    id: \"screen\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_fps_stats__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ThemeSwitch__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {\n    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Preloader__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Scene, null)));\n}\n\n//# sourceURL=webpack://deadbit-dev/./src/components/Screen.jsx?");

/***/ }),

/***/ "./src/components/ThemeSwitch.jsx":
/*!****************************************!*\
  !*** ./src/components/ThemeSwitch.jsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ThemeSwitch)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_switch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-switch */ \"./node_modules/react-switch/index.js\");\n/* harmony import */ var _utils_preset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/preset */ \"./src/utils/preset.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\nfunction ThemeSwitch() {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      _useState2 = _slicedToArray(_useState, 2),\n      checked = _useState2[0],\n      setState = _useState2[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    _utils_preset__WEBPACK_IMPORTED_MODULE_2__.preset.darkTheme = checked;\n    document.body.style.backgroundColor = checked ? \"#202124\" : \"white\";\n  });\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"theme-switch\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_switch__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    onChange: setState,\n    checked: checked,\n    offColor: \"#202124\",\n    onColor: \"#fff\",\n    offHandleColor: \"#fff\",\n    onHandleColor: \"#202124\",\n    activeBoxShadow: \"\",\n    uncheckedIcon: false,\n    checkedIcon: false\n  }));\n}\n\n//# sourceURL=webpack://deadbit-dev/./src/components/ThemeSwitch.jsx?");

/***/ }),

/***/ "./src/utils/preset.js":
/*!*****************************!*\
  !*** ./src/utils/preset.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"preset\": () => (/* binding */ preset)\n/* harmony export */ });\n/* harmony import */ var valtio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! valtio */ \"./node_modules/valtio/esm/vanilla.js\");\n\nvar preset = (0,valtio__WEBPACK_IMPORTED_MODULE_0__.proxy)({\n  darkTheme: false\n});\n\n//# sourceURL=webpack://deadbit-dev/./src/utils/preset.js?");

/***/ })

}]);