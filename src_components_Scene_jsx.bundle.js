"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkdeadbit_dev"] = self["webpackChunkdeadbit_dev"] || []).push([["src_components_Scene_jsx"],{

/***/ "./src/components/Box.jsx":
/*!********************************!*\
  !*** ./src/components/Box.jsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Box)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @react-three/drei */ \"./node_modules/@react-three/drei/core/Text.js\");\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @react-three/drei */ \"./node_modules/@react-three/drei/web/useCursor.js\");\n/* harmony import */ var valtio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! valtio */ \"./node_modules/valtio/esm/index.js\");\n/* harmony import */ var _utils_preset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/preset */ \"./src/utils/preset.js\");\n/* harmony import */ var _utils_fonts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/fonts */ \"./src/utils/fonts.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\nfunction Box(props) {\n  console.log(\"Box\");\n  var snapPreset = (0,valtio__WEBPACK_IMPORTED_MODULE_3__.useSnapshot)(_utils_preset__WEBPACK_IMPORTED_MODULE_1__.preset);\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      _useState2 = _slicedToArray(_useState, 2),\n      isHover = _useState2[0],\n      hover = _useState2[1];\n\n  var WeightText = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_three_drei__WEBPACK_IMPORTED_MODULE_4__.Text, {\n    name: \"BoxWeightText\",\n    anchorX: \"center\",\n    anchorY: \"middle\",\n    fontSize: 0.07,\n    font: _utils_fonts__WEBPACK_IMPORTED_MODULE_2__[\"default\"].VT323,\n    color: snapPreset.darkTheme ? \"#fff\" : \"#000\",\n    position: [0, 0, props.size.z * 0.5 + 0.01]\n  }, props.weight, \"%\");\n  (0,_react_three_drei__WEBPACK_IMPORTED_MODULE_5__.useCursor)(isHover, \"pointer\", \"grab\");\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"group\", {\n    name: \"Box\",\n    position: props.position,\n    onClick: props.onClick,\n    onPointerOver: function onPointerOver(event) {\n      event.stopPropagation();\n      hover(true);\n    },\n    onPointerOut: function onPointerOut(event) {\n      event.stopPropagation();\n      hover(false);\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"mesh\", {\n    name: \"BoxMesh\",\n    castShadow: true,\n    geometry: props.geometry,\n    material: snapPreset.darkTheme ? props.materials.dark : props.materials.white,\n    scale: props.scale\n  }), isHover ? WeightText : null);\n}\n\n//# sourceURL=webpack://deadbit-dev/./src/components/Box.jsx?");

/***/ }),

/***/ "./src/components/Column.jsx":
/*!***********************************!*\
  !*** ./src/components/Column.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Column)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @react-three/drei */ \"./node_modules/@react-three/drei/core/Text.js\");\n/* harmony import */ var valtio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! valtio */ \"./node_modules/valtio/esm/index.js\");\n/* harmony import */ var _utils_preset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/preset */ \"./src/utils/preset.js\");\n/* harmony import */ var _utils_fonts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/fonts */ \"./src/utils/fonts.js\");\n/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Box */ \"./src/components/Box.jsx\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\nfunction Column(props) {\n  console.log(\"Column\");\n  var snapPreset = (0,valtio__WEBPACK_IMPORTED_MODULE_4__.useSnapshot)(_utils_preset__WEBPACK_IMPORTED_MODULE_1__.preset);\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      _useState2 = _slicedToArray(_useState, 2),\n      isClick = _useState2[0],\n      click = _useState2[1];\n\n  var reps = Object.entries(props.reps);\n  var startY = 0;\n  var boxes = new Array();\n  var columnWeight = 0;\n  var columnScaleY = 0;\n  var columnSizeY = 0;\n  var columnPosY = startY;\n  var idx = 0;\n\n  var _loop = function _loop() {\n    var _reps$_i = _slicedToArray(_reps[_i2], 2),\n        rep = _reps$_i[0],\n        weight = _reps$_i[1];\n\n    var scaleY = weight / 10;\n    var sizeY = props.size.y * scaleY;\n    columnWeight += weight;\n    columnScaleY += scaleY;\n    columnSizeY += sizeY;\n    columnPosY += sizeY;\n    boxes.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Box__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      key: rep,\n      geometry: props.geometry,\n      materials: props.materials,\n      position: [0, columnPosY - sizeY * 0.5 + props.distY * idx++, 0],\n      scale: [1, scaleY, 1],\n      size: props.size,\n      isActive: isClick,\n      weight: weight,\n      onClick: function onClick(event) {\n        event.stopPropagation();\n        console.log(rep);\n      }\n    }));\n  };\n\n  for (var _i2 = 0, _reps = reps; _i2 < _reps.length; _i2++) {\n    _loop();\n  }\n\n  var Column = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Box__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    geometry: props.geometry,\n    materials: props.materials,\n    position: [0, columnPosY - columnSizeY * 0.5, 0],\n    scale: [1, columnScaleY, 1],\n    size: props.size,\n    weight: columnWeight,\n    onClick: function onClick(event) {\n      event.stopPropagation();\n      click(!isClick);\n    }\n  });\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"group\", {\n    name: \"Column\",\n    position: props.position\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_three_drei__WEBPACK_IMPORTED_MODULE_5__.Text, {\n    name: \"LangText\",\n    textAlign: \"center\",\n    anchorX: \"center\",\n    anchorY: \"middle\",\n    fontSize: 0.07,\n    font: _utils_fonts__WEBPACK_IMPORTED_MODULE_2__[\"default\"].VT323,\n    color: snapPreset.darkTheme ? \"#fff\" : \"#000\",\n    position: [0, 0.01, props.size.x],\n    rotation: [-1.57, 0, 0]\n  }, props.lang), isClick || boxes.length == 1 ? boxes : Column);\n}\n\n//# sourceURL=webpack://deadbit-dev/./src/components/Column.jsx?");

/***/ }),

/***/ "./src/components/Graph.jsx":
/*!**********************************!*\
  !*** ./src/components/Graph.jsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Graph)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @react-three/drei */ \"./node_modules/@react-three/drei/core/useGLTF.js\");\n/* harmony import */ var valtio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! valtio */ \"./node_modules/valtio/esm/index.js\");\n/* harmony import */ var _utils_preset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/preset */ \"./src/utils/preset.js\");\n/* harmony import */ var _utils_API__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/API */ \"./src/utils/API.js\");\n/* harmony import */ var _Column__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Column */ \"./src/components/Column.jsx\");\n/* harmony import */ var _assets_models_scene_glb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/models/scene.glb */ \"./src/assets/models/scene.glb\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\n\n\n_react_three_drei__WEBPACK_IMPORTED_MODULE_5__.useGLTF.preload(_assets_models_scene_glb__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\nvar materials = {\n  dark: new three__WEBPACK_IMPORTED_MODULE_6__.MeshStandardMaterial({\n    color: new three__WEBPACK_IMPORTED_MODULE_6__.Color('black')\n  }),\n  white: new three__WEBPACK_IMPORTED_MODULE_6__.MeshStandardMaterial({\n    color: new three__WEBPACK_IMPORTED_MODULE_6__.Color('white')\n  })\n};\nfunction Graph() {\n  console.log(\"Graph\");\n  var snapPreset = (0,valtio__WEBPACK_IMPORTED_MODULE_7__.useSnapshot)(_utils_preset__WEBPACK_IMPORTED_MODULE_1__.preset);\n\n  var _useGLTF = (0,_react_three_drei__WEBPACK_IMPORTED_MODULE_5__.useGLTF)(_assets_models_scene_glb__WEBPACK_IMPORTED_MODULE_4__[\"default\"]),\n      nodes = _useGLTF.nodes;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),\n      _useState2 = _slicedToArray(_useState, 2),\n      response = _useState2[0],\n      setResponse = _useState2[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    var response = (0,_utils_API__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    setResponse(response);\n  }, []);\n  var dataArray = Object.entries(response);\n  var size = new three__WEBPACK_IMPORTED_MODULE_6__.Vector3(Math.abs(nodes.Cube.geometry.boundingBox.min.x - nodes.Cube.geometry.boundingBox.max.x), Math.abs(nodes.Cube.geometry.boundingBox.min.y - nodes.Cube.geometry.boundingBox.max.y), Math.abs(nodes.Cube.geometry.boundingBox.min.z - nodes.Cube.geometry.boundingBox.max.z));\n  var dist = new three__WEBPACK_IMPORTED_MODULE_6__.Vector2(size.x * 0.5, size.y * 0.5);\n  var start = new three__WEBPACK_IMPORTED_MODULE_6__.Vector2(0 - (dataArray.length - 1) * (size.x + dist.x) * 0.5, nodes.Hex.geometry.boundingBox.max.y);\n  var columns = new Array();\n\n  for (var _i2 = 0, _dataArray = dataArray; _i2 < _dataArray.length; _i2++) {\n    var _posX;\n\n    var _dataArray$_i = _slicedToArray(_dataArray[_i2], 3),\n        lang = _dataArray$_i[0],\n        reps = _dataArray$_i[1],\n        _dataArray$_i$ = _dataArray$_i[2],\n        posX = _dataArray$_i$ === void 0 ? (_posX = posX) !== null && _posX !== void 0 ? _posX : start.x : _dataArray$_i$;\n\n    columns.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Column__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      key: lang,\n      lang: lang,\n      reps: reps,\n      geometry: nodes.Cube.geometry,\n      materials: materials,\n      position: new three__WEBPACK_IMPORTED_MODULE_6__.Vector3(posX, start.y, 0),\n      size: size,\n      distY: dist.y\n    }));\n    posX += size.x + dist.x;\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"group\", {\n    name: \"Graph\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"mesh\", {\n    name: \"Hex\",\n    receiveShadow: true,\n    geometry: nodes.Hex.geometry,\n    material: snapPreset.darkTheme ? materials.dark : materials.white,\n    position: [0, 0, 0]\n  }), columns);\n}\n\n//# sourceURL=webpack://deadbit-dev/./src/components/Graph.jsx?");

/***/ }),

/***/ "./src/components/Scene.jsx":
/*!**********************************!*\
  !*** ./src/components/Scene.jsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Scene)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-three/fiber */ \"./node_modules/@react-three/fiber/dist/react-three-fiber.esm.js\");\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @react-three/drei */ \"./node_modules/@react-three/drei/core/Environment.js\");\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @react-three/drei */ \"./node_modules/@react-three/drei/core/OrbitControls.js\");\n/* harmony import */ var _juggle_resize_observer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @juggle/resize-observer */ \"./node_modules/@juggle/resize-observer/lib/exports/resize-observer.js\");\n/* harmony import */ var _Graph__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Graph */ \"./src/components/Graph.jsx\");\n\n\n\n\n\nfunction Scene() {\n  console.log(window.innerHeight);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_three_fiber__WEBPACK_IMPORTED_MODULE_3__.Canvas, {\n    shadows: true,\n    resize: {\n      polyfill: _juggle_resize_observer__WEBPACK_IMPORTED_MODULE_1__.ResizeObserver\n    },\n    dpr: Math.max(window.devicePixelRatio, 2),\n    camera: {\n      position: [0, 2.5, 3.5],\n      fov: 50\n    },\n    frameloop: \"demand\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"spotLight\", {\n    castShadow: true,\n    position: [-5, 10, -5],\n    angle: 0.5\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Graph__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_three_drei__WEBPACK_IMPORTED_MODULE_4__.Environment, {\n    preset: \"city\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_three_drei__WEBPACK_IMPORTED_MODULE_5__.OrbitControls, {\n    minPolarAngle: 0,\n    maxPolarAngle: Math.PI / 2,\n    enableZoom: false,\n    enablePan: false\n  }));\n}\n\n//# sourceURL=webpack://deadbit-dev/./src/components/Scene.jsx?");

/***/ }),

/***/ "./src/utils/API.js":
/*!**************************!*\
  !*** ./src/utils/API.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ API)\n/* harmony export */ });\nfunction API() {\n  return {\n    'cpp': {\n      'repo3': 55\n    },\n    'python': {\n      'repo1': 5,\n      'repo2': 15\n    },\n    'js': {\n      'repo2': 25,\n      'repo1': 15\n    },\n    'lua': {\n      'repo3': 32,\n      'repo1': 7,\n      'repo2': 17\n    }\n  };\n}\n\n//# sourceURL=webpack://deadbit-dev/./src/utils/API.js?");

/***/ }),

/***/ "./src/utils/fonts.js":
/*!****************************!*\
  !*** ./src/utils/fonts.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_fonts_VT323_Regular_ttf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/fonts/VT323-Regular.ttf */ \"./src/assets/fonts/VT323-Regular.ttf\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  VT323: _assets_fonts_VT323_Regular_ttf__WEBPACK_IMPORTED_MODULE_0__\n});\n\n//# sourceURL=webpack://deadbit-dev/./src/utils/fonts.js?");

/***/ }),

/***/ "./src/assets/models/scene.glb":
/*!*************************************!*\
  !*** ./src/assets/models/scene.glb ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"a599db12c9ecc2f74d5b5dd70d240a6a.glb\");\n\n//# sourceURL=webpack://deadbit-dev/./src/assets/models/scene.glb?");

/***/ }),

/***/ "./src/assets/fonts/VT323-Regular.ttf":
/*!********************************************!*\
  !*** ./src/assets/fonts/VT323-Regular.ttf ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bddd705ec7f7fc153ad8.ttf\";\n\n//# sourceURL=webpack://deadbit-dev/./src/assets/fonts/VT323-Regular.ttf?");

/***/ })

}]);