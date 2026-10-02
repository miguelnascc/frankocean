let titulo = document.getElementById("titulo");

let contador = 0;

setInterval(function() {

    contador++;

    titulo.innerHTML = "Olá, turma! " + contador;

}, 3000);