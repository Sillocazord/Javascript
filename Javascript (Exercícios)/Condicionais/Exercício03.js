var prompt = require('prompt-sync')();
let numero = prompt("Digite um número: ");
if (numero %2 == 0){
    console.log("Seu número é Par")
} else if (numero %2 == 1 ){
    console.log("Seu numero é impar")
} else {
    console.log("Dado invalido")
}