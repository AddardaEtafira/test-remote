//recuperer les element dont on va se servir
let btn3 = document.querySelector("#first-event");
//ecrire les fonctionnalites
let direbonjour = function () {
    console.log("on me click");
}
//ecouter les evenement provoque par l'utilisateur ou autre
btn3.addEventListener('click', direbonjour);