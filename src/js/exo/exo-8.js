let section8 = document.querySelector("#exo-8");
let input1 = section8.querySelector("#input-1");
let input2 = section8.querySelector("#input-2");
let btn = section8.querySelector("button");
let reponse = section8.querySelector("span");
let inputs = section8.querySelectorAll('input');

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

    if (check(input1) === false || check(input2) === false) {
        return false;
    }
    if (verifError(input1) === false || verifError(input2) === false) {
        return false;
    }
    enleverError();

    //les addit
    reponse.innerText = parseFloat(nombre1) + parseFloat(nombre2);
    return false
    quedeschiffres(input1);
    quedeschiffres(input2);
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

let quedeschiffres = function () {
    this.value = this.value.replace(/\D/g, '');
}
btn.addEventListener('click', addition);
inputs.forEach(function (element) {
    element.addEventListener('click', enleverError);
});
input1.addEventListener('keyup', quedeschiffres);
input2.addEventListener('keyup', quedeschiffres);