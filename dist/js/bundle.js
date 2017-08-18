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
module.exports = __webpack_require__(8);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(2);

__webpack_require__(3);

__webpack_require__(4);

__webpack_require__(5);

__webpack_require__(6);

__webpack_require__(7);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//définir une phrase d'accueil
var phrase = "Bonjours tout le monde";
//faire apparaitre le contnu de la variable phrase dans la console
console.log(phrase);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//selectionner un element
var element = document.querySelector('#element-to-select');
//afficher dns la console
console.log(element);
console.log(element.innerText);
element.innerText = "ceci est le contenu modifier en js";
console.log(element.innerText);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//recuperer les element dont on va se servir
var btn3 = document.querySelector("#first-event");
//ecrire les fonctionnalites
var direbonjour = function direbonjour() {
    console.log("on me click");
};
//ecouter les evenement provoque par l'utilisateur ou autre
btn3.addEventListener('click', direbonjour);

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//recuperer les element dont on va se servir
var inputchanger = document.querySelector("#title-content");
var btn4 = document.querySelector("#change-title");
var h4Exo4 = document.querySelector("#title-to-change");
//ecrire les fonctionnalites
var changerTitre = function changerTitre() {
    //prendre le contenu de l'input
    var newTitle = inputchanger.value;
    //mettre le contenu dans le h4
    h4Exo4.innerText = newTitle;
};
//ecouter les evenement provoque par l'utilisateur ou autre
btn4.addEventListener('click', changerTitre);

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//recuperer les element dont on va se servir
var section5 = document.querySelector("#exo-5");
var inputchanger = section5.querySelector("#title-content");
var btn4 = section5.querySelector("#change-title");
var h4Exo4 = section5.querySelector("#title-to-change");
//ecrire les fonctionnalites
var changerTitre = function changerTitre() {
    //prendre le contenu de l'input
    var newTitle = inputchanger.value;
    //verifier que newtitle n'est pas vide
    if (newTitle === "") {
        //on va mettre un message erreur
        inputchanger.classList.add('error');
        inputchanger.setAttribute("placeholder", "champs obligatoire");
    }
    //sinon on le contenu dans le titre
    else {
            //mettre le contenu dans le h4
            h4Exo4.innerText = newTitle;
            //enlever le code error
            inputchanger.classList.remove('error');
        }
};
var viderlechamps = function viderlechamps() {
    if (inputchanger.classList.contains('error')) {
        inputchanger.value = "";
        //retirer la class error
        inputchanger.classList.remove('error');
    }
};
//ecouter les evenement provoque par l'utilisateur ou autre
btn4.addEventListener('click', changerTitre);
inputchanger.addEventListener('click', viderlechamps);

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//recuper les element

//definir les fonctionnalite
//ajouter un element
var ajouterunevenement = function ajouterunevenement() {}
//cree un element li
//mettre du text e dans l'element li
//ajouter l'element li a la fin de l'element ul

//ajouter lesecouteur d'evenement


// récupérer les éléments 
;var tab_6 = document.querySelector('#exo-6');
var btn = tab_6.querySelector('button');
var ul = tab_6.querySelector('ul');

// définir les fonctionnalités 

// Ajouter un élément
var ajouterElement = function ajouterElement() {
    // Créer un élément li
    var li = document.createElement("li");

    // Mettre du texte dans l'élément li
    var contenu = document.createTextNode("New Element");
    li.appendChild(contenu);

    // Ajouter l'élément li à la fin de l'élément ul
    ul.appendChild(li);
};

// ajouter les écouteurs d'événement

btn.addEventListener('click', ajouterElement);

// let li = document.createElement("li");
// let contenu = document.createTextNode("New Element");
// ul.appendChild(li);
// li.appendChild(contenu);

/***/ }),
/* 8 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);