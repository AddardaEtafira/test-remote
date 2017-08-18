//recuper les element

//definir les fonctionnalite
//ajouter un element
let ajouterunevenement = function () {
    //cree un element li
    //mettre du text e dans l'element li
    //ajouter l'element li a la fin de l'element ul
}
//ajouter lesecouteur d'evenement


// récupérer les éléments 
let tab_6 = document.querySelector('#exo-6');
let btn = tab_6.querySelector('button');
let ul = tab_6.querySelector('ul');



// définir les fonctionnalités 

// Ajouter un élément
let ajouterElement = function () {
    // Créer un élément li
    let li = document.createElement("li");

    // Mettre du texte dans l'élément li
    let contenu = document.createTextNode("New Element");
    li.appendChild(contenu);

    // Ajouter l'élément li à la fin de l'élément ul
    ul.appendChild(li);
}


// ajouter les écouteurs d'événement

btn.addEventListener('click', ajouterElement);



// let li = document.createElement("li");
// let contenu = document.createTextNode("New Element");
// ul.appendChild(li);
// li.appendChild(contenu);