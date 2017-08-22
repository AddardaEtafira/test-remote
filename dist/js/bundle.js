/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(3);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(2);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var section8 = document.querySelector("#exo-8");
var input1 = section8.querySelector("#input-1");
var input2 = section8.querySelector("#input-2");
var btn = section8.querySelector("button");
var reponse = section8.querySelector("span");
var inputs = section8.querySelectorAll('input');

input1.ondrop = function (event) {
    return false;
};
input2.ondrop = function (event) {
    return false;
};
var addition = function addition() {
    //prendr le nombre dans l'input 1
    var nombre1 = input1.value;
    //prendre le nombre dans l'input 2
    var nombre2 = input2.value;

    if (check(input1) === false || check(input2) === false) {
        return false;
    }
    if (verifError(input1) === false || verifError(input2) === false) {
        return false;
    }
    enleverError();

    //les addit
    reponse.innerText = parseFloat(nombre1) + parseFloat(nombre2);
    return false;
    quedeschiffres(input1);
    quedeschiffres(input2);
};
var check = function check(input) {
    if (input.value === "") {
        //on va mettre un message erreur
        input.classList.add('error');
        input.value = "champs obligatoire";
        //enlever le focus de l'element actif
        input.blur();
        return false;
    }
};
var verifError = function verifError(input) {
    //verifier qu'il nest pas en error
    if (input.classList.contains('error')) {
        return false;
    }
};
var enleverError = function enleverError() {
    inputs.forEach(function (element) {
        if (element.classList.contains('error')) {
            //enlever le code error
            element.classList.remove('error');
            //ENLEVER LE TEXTE du input
            element.value = "";
        }
    });
};

var quedeschiffres = function quedeschiffres() {
    this.value = this.value.replace(/\D/g, '');
};
btn.addEventListener('click', addition);
inputs.forEach(function (element) {
    element.addEventListener('click', enleverError);
});
input1.addEventListener('keyup', quedeschiffres);
input2.addEventListener('keyup', quedeschiffres);

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);