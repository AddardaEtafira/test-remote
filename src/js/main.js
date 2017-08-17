//définir une phrase d'accueil
let phrase = "Bonjours tout le monde";
//faire apparaitre le contnu de la variable phrase dans la console
console.log(phrase);

//exo 2
//selectionner un element
let element = document.querySelector('#element-to-select');
//afficher dns la console
console.log(element);
console.log(element.innerText);
element.innerText = "ceci est le contenu modifier en js";
console.log(element.innerText);

//exo 3


//recuperer les element dont on va se servir
let btn3 = document.querySelector("#first-event");
//ecrire les fonctionnalites
let direbonjour = function () {
    console.log("on me click");
}
//ecouter les evenement provoque par l'utilisateur ou autre
btn3.addEventListener('click', direbonjour);

//exo 4
//recuperer les element dont on va se servir
let inputchanger = document.querySelector("#title-content");
let btn4 = document.querySelector("#change-title");
let h4Exo4 = document.querySelector("#title-to-change");
//ecrire les fonctionnalites
let changerTitre = function () {
    //prendre le contenu de l'input
    let newTitle = inputchanger.value;
    //mettre le contenu dans le h4
    h4Exo4.innerText = newTitle;
}
//ecouter les evenement provoque par l'utilisateur ou autre
btn4.addEventListener('click', changerTitre);