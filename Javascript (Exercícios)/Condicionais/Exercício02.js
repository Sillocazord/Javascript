//Verificar se o usuário pode tirar a carteira de motorista
var prompt = require('prompt-sync')();
let idade = prompt("Insira sua idade para verificar se você está apto a obter uma carteira de motorista: ")
if (idade >= 18){
    console.log("Você está apto a tirar a carteira de motorista👴")
} else if (idade < 18){
console.log("Você não está apto a tirar a carteira de motorista")
} else {
    console.log ("Dado invalido")
}