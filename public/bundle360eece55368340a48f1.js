/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  height: 100vh;\n  width: 80vw;\n  margin: 0 auto;\n}\n\n.panel {\n  background: white;\n  color: grey;\n  box-shadow: 2px 2px 5px grey;\n  border-radius: 5px;\n  width: 50vw;\n  height: 70px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 30px;\n  margin-bottom: 30px;\n  font-family: sans-serif;\n}\n\n.gameboard {\n  width: 90vw;\n  height: 90vw;\n  max-width: 750px;\n  max-height: 750px;\n  display: grid;\n  box-shadow: 2px 2px 5px grey;\n  grid-template-columns: repeat(12, 1fr);\n  grid-template-rows: repeat(12, 1fr);\n  margin-bottom: 30px;\n}\n\n.route {\n  min-height: 20px;\n  min-width: 20px;\n  border: 0.1px black solid;\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.snake-part {\n  min-height: 80%;\n  min-width: 80%;\n  font-size: 18px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.buttons {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n}\n\n.btn {\n  height: 45px;\n  width: 45px;\n  border-radius: 50%;\n  border: 1px solid black;\n  font-size: 25px;\n}", "",{"version":3,"sources":["webpack://./src/styles/main.scss"],"names":[],"mappings":"AAAA;EACI,SAAA;EAAW,UAAA;AAEf;;AACA;EACI,aAAA;EAAe,uBAAA;EACf,sBAAA;EACA,mBAAA;EAAqB,aAAA;EAAe,WAAA;EACpC,cAAA;AAKJ;;AAFA;EACI,iBAAA;EAAmB,WAAA;EACnB,4BAAA;EACA,kBAAA;EACA,WAAA;EAAa,YAAA;EACb,aAAA;EAAe,mBAAA;EAAqB,uBAAA;EACpC,eAAA;EAAiB,mBAAA;EAAqB,uBAAA;AAW1C;;AARA;EACI,WAAA;EAAa,YAAA;EACb,gBAAA;EAAkB,iBAAA;EAClB,aAAA;EAAe,4BAAA;EACf,sCAAA;EACA,mCAAA;EACA,mBAAA;AAcJ;;AAXA;EACI,gBAAA;EAAkB,eAAA;EAClB,yBAAA;EACA,YAAA;EACA,aAAA;EAAe,uBAAA;EAAyB,mBAAA;AAiB5C;;AAdA;EACI,eAAA;EAAiB,cAAA;EAAgB,eAAA;EACjC,kBAAA;EACA,aAAA;EAAe,mBAAA;EAAqB,uBAAA;AAqBxC;;AAlBA;EACI,aAAA;EACA,qCAAA;AAqBJ;;AAlBA;EACI,YAAA;EAAc,WAAA;EACd,kBAAA;EACA,uBAAA;EACA,eAAA;AAsBJ","sourcesContent":["* {\r\n    margin: 0; padding: 0;\r\n}\r\n\r\nbody {\r\n    display: flex; justify-content: center;\r\n    flex-direction: column;\r\n    align-items: center; height: 100vh; width: 80vw;\r\n    margin: 0 auto;\r\n}\r\n\r\n.panel {\r\n    background: white; color: grey;\r\n    box-shadow: 2px 2px 5px grey;\r\n    border-radius: 5px;\r\n    width: 50vw; height: 70px;\r\n    display: flex; align-items: center; justify-content: center;\r\n    font-size: 30px; margin-bottom: 30px; font-family: sans-serif;\r\n}\r\n\r\n.gameboard {\r\n    width: 90vw; height: 90vw;\r\n    max-width: 750px; max-height: 750px; \r\n    display: grid; box-shadow: 2px 2px 5px grey;\r\n    grid-template-columns: repeat(12, 1fr);\r\n    grid-template-rows: repeat(12, 1fr);\r\n    margin-bottom: 30px;\r\n}\r\n\r\n.route {\r\n    min-height: 20px; min-width: 20px;\r\n    border: 0.1px black solid;\r\n    color: white;\r\n    display: flex; justify-content: center; align-items: center;\r\n}\r\n\r\n.snake-part {\r\n    min-height: 80%; min-width: 80%; font-size: 18px;\r\n    border-radius: 50%;\r\n    display: flex; align-items: center; justify-content: center;\r\n}\r\n\r\n.buttons {\r\n    display: grid;\r\n    grid-template-columns: repeat(3, 1fr);\r\n}\r\n\r\n.btn {\r\n    height: 45px; width: 45px;\r\n    border-radius: 50%;\r\n    border: 1px solid black;\r\n    font-size: 25px;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/controller.ts":
/*!***************************!*\
  !*** ./src/controller.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeSpeed": () => (/* binding */ changeSpeed),
/* harmony export */   "stopTheSnake": () => (/* binding */ stopTheSnake)
/* harmony export */ });
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ "./src/model.ts");

const btn_up = document.querySelector(".btn-up");
const btn_left = document.querySelector(".btn-left");
const btn_right = document.querySelector(".btn-right");
const btn_down = document.querySelector(".btn-down");
let interval;
startGame();
function startGame() {
    const directions = ["NORTH", "SOUTH", "WEST", "EAST"];
    const startRetning = directions[Math.floor(Math.random() * 4)];
    interval = setInterval(() => (0,_model__WEBPACK_IMPORTED_MODULE_0__.moveSnake)(startRetning), 500);
}
function changeSpeed(direction) {
    if (!(0,_model__WEBPACK_IMPORTED_MODULE_0__.statusGameOver)()) {
        clearInterval(interval);
        interval = setInterval(() => (0,_model__WEBPACK_IMPORTED_MODULE_0__.moveSnake)(direction), (0,_model__WEBPACK_IMPORTED_MODULE_0__.getSpeed)());
    }
}
function changeDir(direction) {
    if (!(0,_model__WEBPACK_IMPORTED_MODULE_0__.statusGameOver)()) {
        clearInterval(interval);
        interval = setInterval(() => (0,_model__WEBPACK_IMPORTED_MODULE_0__.moveSnake)(direction), (0,_model__WEBPACK_IMPORTED_MODULE_0__.getSpeed)());
    }
}
function stopTheSnake() {
    clearInterval(interval);
}
// Adding event listeners
btn_left.addEventListener("click", () => changeDir("WEST"));
btn_up.addEventListener("click", () => changeDir("NORTH"));
btn_right.addEventListener("click", () => changeDir("EAST"));
btn_down.addEventListener("click", () => changeDir("SOUTH"));
document.addEventListener("keydown", evt => {
    if (evt.code === "ArrowUp")
        changeDir("NORTH");
    else if (evt.code === "ArrowDown")
        changeDir("SOUTH");
    else if (evt.code === "ArrowLeft")
        changeDir("WEST");
    else if (evt.code === "ArrowRight")
        changeDir("EAST");
});


/***/ }),

/***/ "./src/model.ts":
/*!**********************!*\
  !*** ./src/model.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSpeed": () => (/* binding */ getSpeed),
/* harmony export */   "moveSnake": () => (/* binding */ moveSnake),
/* harmony export */   "statusGameOver": () => (/* binding */ statusGameOver),
/* harmony export */   "updateScore": () => (/* binding */ updateScore)
/* harmony export */ });
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view */ "./src/view.ts");
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controller */ "./src/controller.ts");


const snake = [];
const treasures = [];
let score = 0;
let speed = 500;
let isGameOver = false;
const noRows = 12;
const noCols = 12;
const noTreasures = 9;
let snakeDir = "";
let prevSnakeDir = "";
// Create and shows the snakehead
const headPos = createSnakeHead(noRows, noCols);
const headRow = headPos[0];
const headCol = headPos[1];
snake.push([headRow, headCol]);
(0,_view__WEBPACK_IMPORTED_MODULE_0__.showSnakePart)(headRow, headCol, "O");
// Create and show the treasures
for (let i = 0; i < 2; i++) {
    createAndShowTreasure("red");
    createAndShowTreasure("blue");
    createAndShowTreasure("green");
}
// MODEL functions
function createSnakeHead(noRows, noCols) {
    let row = Math.floor(Math.random() * noRows);
    let col = Math.floor(Math.random() * noCols);
    return [row, col];
}
function createAndShowTreasure(color) {
    let row = Math.floor(Math.random() * noRows);
    let col = Math.floor(Math.random() * noCols);
    treasures.push([row, col, color]);
    (0,_view__WEBPACK_IMPORTED_MODULE_0__.showTreasure)(row, col, color);
}
function moveSnake(dir) {
    let length = snake.length;
    let head = snake[0];
    let back = snake[length - 1];
    let headRow = head[0];
    let headCol = head[1];
    let backRow = back[0];
    let backCol = back[1];
    if (prevSnakeDir !== "SOUTH" && dir === "NORTH") {
        snakeDir = "NORTH";
        headRow--;
    }
    else if (prevSnakeDir !== "NORTH" && dir === "SOUTH") {
        snakeDir = "SOUTH";
        headRow++;
    }
    else if (prevSnakeDir !== "WEST" && dir === "EAST") {
        snakeDir = "EAST";
        headCol++;
    }
    else if (prevSnakeDir !== "EAST" && dir === "WEST") {
        snakeDir = "WEST";
        headCol--;
    }
    // Update the snake's back position, deletes it and moves it in front
    back[0] = headRow;
    back[1] = headCol;
    let bakreDel = snake.pop();
    snake.unshift(bakreDel);
    if (back[0] === noRows || back[1] === noCols || back[0] === -1 || back[1] === -1) {
        (0,_controller__WEBPACK_IMPORTED_MODULE_1__.stopTheSnake)();
        (0,_view__WEBPACK_IMPORTED_MODULE_0__.gameOver)();
        return;
    }
    (0,_view__WEBPACK_IMPORTED_MODULE_0__.removeSnakePart)(backRow, backCol);
    (0,_view__WEBPACK_IMPORTED_MODULE_0__.showSnakePart)(back[0], back[1], "O");
    // Important that the former front part is drawn as X instead of O
    if (snake.length > 1)
        (0,_view__WEBPACK_IMPORTED_MODULE_0__.showSnakePart)(snake[1][0], snake[1][1], "");
    headCrashControl();
    treasureControl(headRow, headCol, backRow, backCol);
    prevSnakeDir = snakeDir;
}
function headCrashControl() {
    snake.forEach(part => {
        if (part[0] === snake[0][0] && part[1] === snake[0][1] && snake.indexOf(part) != 0) {
            (0,_controller__WEBPACK_IMPORTED_MODULE_1__.stopTheSnake)();
            (0,_view__WEBPACK_IMPORTED_MODULE_0__.gameOver)();
            isGameOver = true;
        }
    });
}
function treasureControl(headRow, headCol, backRow, backCol) {
    treasures.forEach(treasure => {
        if (treasure[0] === headRow && treasure[1] === headCol) {
            snake.push([backRow, backCol]);
            (0,_view__WEBPACK_IMPORTED_MODULE_0__.showSnakePart)(backRow, backCol, "");
            if (treasure[2] === "blue")
                createAndShowTreasure("blue");
            else if (treasure[2] === "red")
                createAndShowTreasure("red");
            else if (treasure[2] === "green")
                createAndShowTreasure("green");
            speed -= 20;
            console.log(speed);
            updateScore();
            (0,_controller__WEBPACK_IMPORTED_MODULE_1__.changeSpeed)(snakeDir);
        }
    });
}
function updateScore() {
    (0,_view__WEBPACK_IMPORTED_MODULE_0__.showScore)(++score);
}
function getSpeed() {
    return speed;
}
function statusGameOver() {
    return isGameOver;
}


/***/ }),

/***/ "./src/view.ts":
/*!*********************!*\
  !*** ./src/view.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gameOver": () => (/* binding */ gameOver),
/* harmony export */   "removeSnakePart": () => (/* binding */ removeSnakePart),
/* harmony export */   "showScore": () => (/* binding */ showScore),
/* harmony export */   "showSnakePart": () => (/* binding */ showSnakePart),
/* harmony export */   "showTreasure": () => (/* binding */ showTreasure)
/* harmony export */ });
const score = document.querySelector(".score");
const gameboard = document.querySelector(".gameboard");
const routes = [];
const noRows = 12;
const noCols = 12;
// Filling the routes array with arrays to making a matrix
for (let i = 0; i < noRows; i++) {
    routes[i] = [];
}
// Drawing routes
drawBoard(noRows, noCols, gameboard, routes);
// VIEW functions
function drawBoard(noRows, noCols, gameboard, routes) {
    for (let row = 0; row < noRows; row++) {
        for (let col = 0; col < noCols; col++) {
            let route = document.createElement("div");
            route.className = "route";
            let snakePart = document.createElement("div");
            snakePart.className = "snake-part";
            route.appendChild(snakePart);
            gameboard.appendChild(route);
            routes[row][col] = route;
        }
    }
}
function showSnakePart(row, col, part) {
    let snakePart = routes[row][col].firstChild;
    snakePart.innerHTML = part;
    snakePart.style.background = "#112233";
    snakePart.style.color = "white";
}
function removeSnakePart(row, col) {
    let snakePart = routes[row][col].firstChild;
    snakePart.innerHTML = "";
    snakePart.style.background = "white";
}
function showTreasure(row, col, color) {
    let treasureColor = color;
    let snakePart = routes[row][col].firstChild;
    snakePart.innerHTML = "&#128176";
    snakePart.style.color = treasureColor;
    snakePart.style.fontSize = "18px";
}
function showScore(newScore) {
    score.innerHTML = "Score: " + newScore.toString();
}
function gameOver() {
    score.innerHTML = "GAME OVER";
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ "./src/model.ts");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view */ "./src/view.ts");
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controller */ "./src/controller.ts");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");





})();

/******/ })()
;
//# sourceMappingURL=bundle360eece55368340a48f1.js.map