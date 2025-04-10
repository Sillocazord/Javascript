var prompt = require('prompt-sync')();
let senha = prompt("Digite uma senha: ");
while (senha != "aoba"){
    console.log("Insira a senha correta");
    senha = prompt("Digite uma senha: ");
}
console.log("Bem-Vindo")