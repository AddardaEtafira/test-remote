//recuperer les element dont on va se servir
let section5 = document.querySelector("#exo-5");
let inputchanger = section5.querySelector("#title-content");
let btn4 = section5.querySelector("#change-title");
let h4Exo4 = section5.querySelector("#title-to-change");
//ecrire les fonctionnalites
let changerTitre = function () {
    //prendre le contenu de l'input
    let newTitle = inputchanger.value;
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
}
let viderlechamps = function () {
    if (inputchanger.classList.contains('error')) {
        inputchanger.value = "";
        //retirer la class error
        inputchanger.classList.remove('error');

    }
}
//ecouter les evenement provoque par l'utilisateur ou autre
btn4.addEventListener('click', changerTitre);
inputchanger.addEventListener('click', viderlechamps);