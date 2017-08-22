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
module.exports = __webpack_require__(4);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(3);

/***/ }),
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var section8 = document.querySelector("#exo-8");
var input1 = section8.querySelector("#input-1");
var input2 = section8.querySelector("#input-2");
var btn = section8.querySelector("#egale");
var reponse = section8.querySelector("#reponse");
var inputs = section8.querySelectorAll('input');
var btnreset = section8.querySelector('#reset');
var operateur = section8.querySelector('#operateur');
var lesOperateurs = section8.querySelectorAll('#operateur-1');
//ne pas permetre le glisser
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
    //predn la valeur du dans le selecteur
    if (check(input1) === false || check(input2) === false) {
        return false;
    }

    if (checkSpan(operateur) === false) {
        return false;
    }
    if (verifError(input1) === false || verifError(input2) === false) {
        return false;
    }
    enleverError();

    //les addit
    switch (operateur.innerText) {
        case "+":
            reponse.innerText = parseFloat(nombre1) + parseFloat(nombre2);
            break;
        case "-":
            reponse.innerText = parseFloat(nombre1) - parseFloat(nombre2);
            break;
        case "*":
            reponse.innerText = parseFloat(nombre1) * parseFloat(nombre2);
            break;
        case "/":
            reponse.innerText = parseFloat(nombre1) / parseFloat(nombre2);
            break;
    }
    return false;
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

var checkSpan = function checkSpan(input) {
    if (operateur.innerText === "") {
        //on va mettre un message erreur
        reponse.innerText = "choisir operateur";
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
// Vérifier que l'on introduit bien nombre
var checkNumber = function checkNumber() {
    // Définition d'un expression régulière
    var reg = /^-?[0-9]*\.?[0-9]*$/;
    // Vérifier si la valeur est bien un nombre
    while (!reg.test(this.value)) {
        // Récupérer la longeur de la chaine de caractère
        var longueurText = this.value.length;
        // Enlever le dernier cractère
        this.value = this.value.substr(0, longueurText - 1);
    }
};

function clear() {
    input1.value = "";
    input2.value = "";
    reponse.innerText = "";
}
function choisirOperateur() {
    //prendre la valeur
    var unOperateur = this.innerText;
    //le mettre dans le span
    operateur.innerText = unOperateur;
}

var focus2 = function focus2() {
    input2.focus();
};

//ecouteurs 
btn.addEventListener('click', addition);
inputs.forEach(function (element) {
    element.addEventListener('click', enleverError);
});

btnreset.addEventListener('click', clear);

inputs.forEach(function (input) {
    input.addEventListener('keyup', checkNumber);
});
lesOperateurs.forEach(function (element) {
    element.addEventListener('click', choisirOperateur);
});
lesOperateurs.forEach(function (element) {
    element.addEventListener('click', focus2);
});

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);