window.onload = function() {
 let parrafo = document.querySelector('p');
 parrafo.innerHTML = escusa;
 };

let who = ['the dog', 'my granma', 'his turtle', 'my bird'];
let what = ['eat', 'pissed', 'crushed', 'broked'];
let when = ['before the class', 'right in time', 'when I finished', 'during my lunch', 'while I was praying'];


let escusa = "";


function aleatorio(min, max) {
     return Math.floor(Math.random()*(max - min)) + min ;
    }

escusa += who[aleatorio(0, 4)]+' ' + what[aleatorio(0, 4)]+' ' + when[aleatorio(0, 5)];

