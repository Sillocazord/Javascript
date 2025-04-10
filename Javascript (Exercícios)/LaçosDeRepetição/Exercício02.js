var prompt = require('prompt-sync')();
let num = Number(prompt("Digite um numero:  " ));
let soma = 0;

while(num !== 0){
    soma += num;
    num = Number(prompt("Digite um numero(Caso queira sair, digite 0):  " ));
}
console.log(soma);