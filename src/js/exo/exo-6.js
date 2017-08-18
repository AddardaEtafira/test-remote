// récupérer les éléments 
let tab_6 = document.querySelector('#exo-6');
let btn = tab_6.querySelector('button');
let ul = tab_6.querySelector('ul');
let section6 = document.querySelector("#exo-6");
let inputchanger = section6.querySelector("#title-content");



// définir les fonctionnalités 



// Ajouter un élément
let ajouterElement = function () {
    // Créer un élément li
    let li = document.createElement("li");
    //recuper ce qu'il y a dansl'input
    let newTitle = inputchanger.value;
    //verifier que newtitle n'est pas vide
    if (newTitle === "") {
        //on va mettre un message erreur
        inputchanger.classList.add('error');
        //inputchanger.setAttribute("placeholder", "champs obligatoire"); --> c'est moins pratique
        inputchanger.value = "champs obligatoire";
        //enlever le focus de l'element actif
        inputchanger.blur();

    }
    //verifier qu'il nest pas en error
    if (inputchanger.classList.contains('error')) {
        return false;
    }
    //sinon on le contenu dans le titre
    else {
        // Mettre du texte dans l'élément li
        let contenu = document.createTextNode(newTitle);
        li.appendChild(contenu);
        //ajout une classe au li
        li.className = "list-group-item";

        // Ajouter l'élément li à la fin de l'élément ul
        ul.appendChild(li);
        //enlever le code error
        inputchanger.classList.remove('error');
        //ENLEVER LE TEXTE du input
        newTitle = inputchanger.value = "";

    }
}

//elever l'error
let viderchamp = function () {
    //verifier si le champs est error
    if (inputchanger.classList.contains('error')) {
        //vider le value
        inputchanger.value = "";
        //retirer la classe error
        inputchanger.classList.remove('error');
    }
}


//localisation de la ouche entree et la mettre en fonction
let keyupEntre = function () {
    console.log(event);
    if (event.code == "Enter" || event.code == "NumpadEnter") {
        ajouterElement();
    }


}


// ajouter les écouteurs d'événement

btn.addEventListener('click', ajouterElement);
inputchanger.addEventListener('click', viderchamp);
inputchanger.addEventListener('keyup', keyupEntre);