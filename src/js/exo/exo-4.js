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