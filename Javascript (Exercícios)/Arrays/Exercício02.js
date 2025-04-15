//Uma escola quer REGISTRAR as turmas disponíveis para o turno da manhã
var prompt = require('prompt-sync')();
let manha = ["TurmaDeDev", "TurmaDeRedes", "TurmaDeGames"];
console.log("Exibindo turmas da manhã....(manha)",manha);
let log = prompt("Registre aqui turmas da manhã: ");
manha.push(log)
console.log(manha)