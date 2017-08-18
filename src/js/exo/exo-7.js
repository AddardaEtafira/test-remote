//recup element
let section7 = document.querySelector("#exo-7");
let btn = section7.querySelectorAll('button');

//supprimer un enfant
let supprimerElement = function () {
    let parent = this.parentElement;
    parent.removeChild(this);
}

//ecouteur d'evement

btn.forEach(function (element) {
    element.addEventListener('click', supprimerElement);
});
