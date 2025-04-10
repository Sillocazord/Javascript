var prompt = require('prompt-sync')();
console.log("Opções: 1- Gatinhos. 2- Cachorros. 3- Fantasma. 4-Sair")
let numero = prompt("Escolha uma opção do Menu: ");
do{
    if(numero == 1) {
        console.log("😼")
    } else if(numero == 2){
        console.log("🐕")
    } else if (numero == 3){
        console.log("BOOOO👻")
    } else {
        console.log("Invalido, só numeros de 1 a 4 meu cria")
    }
    numero = prompt("Escolha uma opção do Menu: ");
} while (numero !=4)
    console.log("Bye bye 👋")