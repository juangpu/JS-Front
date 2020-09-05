// alert('Olá');

// let confirmacao = confirm("Deseja realmente excluir essas informações?");

// console.log(confirmacao);

let nome = prompt("Digite seu nome: ");

alert('Olá, ' + nome);

document.querySelector("h1").innerText += ' ' + nome;
document.querySelector("p").innerText += ' ' + nome;

window.addEventListener('load', function() {

    let linkContato = document.getElementById('contato');
        linkContato.addEventListener("click", function() {
        alert('A pagina de contato está em reforma');
    });

});

let home = document.getElementById('home');

home.onclick = function () {
    this.style.transform = "scale(1.5)";
};

home.ondblclick = function () {
    this.style.transform = "scale(1)";
};