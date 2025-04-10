//Uma escola quer REGISTRAR as turmas disponíveis para o turno da manhã
var prompt = require('prompt-sync')();
let manha = ["turma 1", "turma 2", "turma 3"]
console.log(manha)
let log = prompt("Registre aqui turmas da manhã: ");
manha.push(log)
console.log(manha)