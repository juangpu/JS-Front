let nome = document.getElementById('nome');
let pais = document.getElementById('pais');
let form = document.getElementById('contato-form');

nome.addEventListener("focus", function () {
    this.style.backgroundColor = "#EEE";
});

nome.addEventListener("blur", function () {
    this.style.backgroundColor = "#FFF";
});

pais.addEventListener("change", function () {
    console.log(this.value);
});

let erro = true;

form.addEventListener("submit", function (event) {
    // validações
    if(erro === true) {
        event.preventDefault();
    }
});