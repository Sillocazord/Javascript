var prompt = require('prompt-sync')();
let nota1 = prompt("Digite sua nota moço (sem mentir viu seu dedin nervoso): ");
let nota2 = prompt("Digite sua nota moço (sem mentir viu seu dedin nervoso): ");
let nota3 = prompt("Digite sua nota moço (sem mentir viu seu dedin nervoso): ");
let nota4 = prompt("Digite sua nota moço (sem mentir viu seu dedin nervoso): ");

let nota = nota1 + nota2 + nota3 + nota4 / 4;
if (nota < 5){
    console.log("Você não passou de ano. Sua nota foi:")
    console.log(nota)
} else if (nota >= 5){
    console.log("Você passou! foi por pouco hein! Sua nota foi :")
    console.log(nota);
} else {
    console.log ("Isso lá é nota?")
}