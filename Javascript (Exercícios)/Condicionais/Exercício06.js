var prompt = require('prompt-sync')();
let dia = Number(prompt("Digite um número do dia da semana (1 a 7): " ));

switch(dia) {
    case 1:
        console.log ("Domingo")
        break;
    case 2:
        console.log ("Segunda")
        break;
    case 3:
        console.log ("Terça")
        break;
    case 4:
        console.log ("Quarta")
        break;
    case 5:
        console.log ("Quinta")
        break;
    case 6:
        console.log ("Sexta")
        break;
    case 7:
        console.log ("Sabádo")
        break;
        default: console.log("Dado invalido");
} 