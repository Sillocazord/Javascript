var prompt = require('prompt-sync')();
let idade = 0;
do{
    idade = prompt("Infome uma idade: ");
} while (idade <= 0)
    console.log("Boa, idade valida")