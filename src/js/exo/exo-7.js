//recup element
let section7 = document.querySelector("#exo-7");
let btn = section7.querySelectorAll('button');

//supprimer un enfant
let supprimerElement = function () {
    // //recup parent
    // let parent = this.parentElement;
    // //le parent supprime l'enfant
    // parent.removeChild(this);
    //creation d'un span
    let createSpan = document.createElement("span");
    createSpan.style.width = "95px";
    createSpan.style.display = "inline-block";
    //echanger la place entre le span et le button
    this.parentNode.replaceChild(createSpan, this);

    //creation d'un button
    let createBtn = document.createElement("button");
    // Mettre du texte dans l'élément li
    let contenu = document.createTextNode("delete me");
    createBtn.appendChild(contenu);
    //ajouter une classe
    createBtn.className = "btn btn-success";
    //ajouter dans le parent
    section7.appendChild(createBtn);
    //ajouter un ecouteur d'evenement
    createBtn.addEventListener('click', supprimerElement)

}

//ecouteur d'evement

btn.forEach(function (element) {
    element.addEventListener('click', supprimerElement);
});
