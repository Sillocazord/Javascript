var prompt = require('prompt-sync')();
let cadastroName = ['Carlos Roque'];

let nome;

do {
    nome = prompt("Digite seu nome ou digite 'sair' para encerrar): ").trim();

    if (nome.toLowerCase() === "sair") {
        break;
    }
    const existe = cadastroName.some(n => n.toLowerCase() === nome.toLowerCase());
    if (existe) {
        console.log("Cadastra inválido, o nome já é utilizado.");
    } else {
        cadastroName.push(nome);
        console.log("Cadastro criado... adicionado ao sistema.");
    }

}while (true);

console.log("Lista final:", cadastroName);