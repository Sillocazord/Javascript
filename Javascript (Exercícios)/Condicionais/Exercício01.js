var prompt = require('prompt-sync')();
let fixo = prompt("Salve meu cria, mande um numero pra nois, vou responder se é positivo ou negativo: ");
if (fixo > 0 ){
    return console.log("Seu numero é positivo")
} else if (fixo == 0){
    return console.log("Seu número é zero")
} else if (fixo < 0){
    return console.log("Seu número é negativo")
} else {
    return console.log ("Dado invalido")
}