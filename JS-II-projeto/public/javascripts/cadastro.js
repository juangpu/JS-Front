function selectId(id) {
    return document.getElementById(id);
}

function empty(input) {
    return input.value.trim() === "";
}

function errorMessage(message) {
    errorListUl.innerHTML += "<li>" + message + "</li>";
}

let form = selectId('contato-form');
let nome = selectId('nome');
let errorListUl = document.querySelector('#error-list ul');
let errorList = selectId('error-list')

form.addEventListener("submit", function(event) {
    errorListUl.innerHTML = ' ';

    if (empty(nome)) {
        errorMessage("Campo <b>nome</b> não preenchido");
    }
    if (empty(email)) {
        errorMessage("Campo <b>email</b> não preenchido");
    }
    if (empty(pais)) {
        errorMessage("Campo <b>pais</b> não preenchido");
    }

    if(errorListUl.querySelectorAll('li').length > 0) {
        event.preventDefault();
        errorList.hidden = '';
    }
})