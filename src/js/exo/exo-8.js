let section8 = document.querySelector("#exo-8");
let input1 = section8.querySelector("#input-1");
let input2 = section8.querySelector("#input-2");
let btn = section8.querySelector("#egale");
let reponse = section8.querySelector("#reponse");
let inputs = section8.querySelectorAll('input');
let btnreset = section8.querySelector('#reset');
let operateur = section8.querySelector('#operateur');
let lesOperateurs = section8.querySelectorAll('#operateur-1')
//ne pas permetre le glisser
input1.ondrop = function (event) {
    return false
}
input2.ondrop = function (event) {
    return false
}
let addition = function () {
    //prendr le nombre dans l'input 1
    let nombre1 = input1.value;
    //prendre le nombre dans l'input 2
    let nombre2 = input2.value;
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
    return false

}
let check = function (input) {
    if (input.value === "") {
        //on va mettre un message erreur
        input.classList.add('error');
        input.value = "champs obligatoire";
        //enlever le focus de l'element actif
        input.blur();
        return false;
    }
}

let checkSpan = function (input) {
    if (operateur.innerText === "") {
        //on va mettre un message erreur
        reponse.innerText = "choisir operateur";
        return false;
    }
}
let verifError = function (input) {
    //verifier qu'il nest pas en error
    if (input.classList.contains('error')) {
        return false;
    }
}
let enleverError = function () {
    inputs.forEach(function (element) {
        if (element.classList.contains('error')) {
            //enlever le code error
            element.classList.remove('error');
            //ENLEVER LE TEXTE du input
            element.value = "";
        }
    });
}
// Vérifier que l'on introduit bien nombre
let checkNumber = function () {
    // Définition d'un expression régulière
    let reg = /^-?[0-9]*\.?[0-9]*$/;
    // Vérifier si la valeur est bien un nombre
    while (!reg.test(this.value)) {
        // Récupérer la longeur de la chaine de caractère
        let longueurText = this.value.length;
        // Enlever le dernier cractère
        this.value = this.value.substr(0, longueurText - 1);
    }
}


function clear() {
    input1.value = "";
    input2.value = "";
    reponse.innerText = "";
}
function choisirOperateur() {
    //prendre la valeur
    let unOperateur = this.innerText;
    //le mettre dans le span
    operateur.innerText = unOperateur;
}

let focus2 = function () {
    input2.focus();
}

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



