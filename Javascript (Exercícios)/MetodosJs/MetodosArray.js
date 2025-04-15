//AAAAAAARRAAAAAAAAAY👻👻👻 .legth:tamanho

// let frutas = ["Maça","Kiwi","Banana","Carambola","Morango","Ameixa","Abacaxi","Abacate","Jabuticaba","Romã","Seriguela","Embu","Caqui","Uva Verde","Uva Roxa"];
// console.log(frutas.length);

// let numeros = [5,10,15];
// console.log(numeros.length);
//---------------------------------------------
// //Reverse() -> reverte o nosso array
// let numeros = [70,10,20,30]
// numeros.reverse();
// console.log(numeros);
//---------------------------------------------
// let nomes = ["Valdemir","Edson","Anna","Zezaaun"]

// //.push = Adiciona um item no final de nosso array(indice final)
// nomes.push("CJ")
// console.log(nomes);

// //unshitft = Adiciona um item ao primeiro lugar do nosso Array(indice 0)
// //shift = Remove um item no inicio do Array
// nomes.unshift("Ryanzito")
// console.log(nomes)

// //shift = Remove um item no inicio do Array
// // nomes.shift();

// //pop = Remove o item no final do nosso Array(indice final)
// //Se utilizar o pop dessa seguinte maneira, o pop vai exibir também o item removido
// console.log(nomes.pop());
// console.log(nomes);

// // splice = remove um item especifico do Array (Você seleciona o numero a partir do qual você quer apagar no array, e depois quantos numeros quer apagar a partir dele)
// nomes.splice(3,2)
// console.log(nomes);

//---------------------------------------------

// let nomesDeAnimais = ["Julie","Meg","Mel","Kiara","Lola","Sol"];
// //.include() = verifica se um item existe no array, caso esse item exista, ele retornara true, caso não exista, retornará false
// console.log(nomesDeAnimais.includes(""));

//---------------------------------------------

// let valores = [30,55,90,85];
// //filter = me ajuda a filtrar os valores e exibe apenas os valores que passaram no filtro
// let maiores = valores.filter(num => num < 80);
// console.log(maiores);
// // < (menor) ; > (maior)

//---------------------------------------------

// //.map = métodos do array que transforma os elemntos do array original em novos valores, criando um novo array, sem modificar o original

// //lista de alunos e suas notas
// let alunos = [
//     {nome : "Sillas", nota : 10},
//     {nome : "Spada", nota : 5},
//     {nome : "Pedrinha", nota : 7},
//     {nome : "Meneguinhas", nota : 11}
// ];
// let nomeAlunos = alunos.map(function(elements){ //(jeito da teachr:)let nomeAlunos = alunos.map(aluno => aluno.nome)
//     return elements.nome;
// })
// console.log(nomeAlunos)

// let notaAlunos = alunos.map(function(elements){ //(Exemplo da teacher:) let notaAlunos = alunos.map(alunos => aluno.nota)
//     return elements.nota;
// })
// console.log(notaAlunos)

//---------------------------------------------

//criar um array com mensagens persnoalizadas (shishishishishishishi kkkkkkkkkkkkkkkkkkkkk)

// let nomes = ["Caio","Ryan","Vinicius","Dani"]

// let mensagem = nomes.map(itemDoArrayNomes => `Olá, ${itemDoArrayNomes}`) //let mensagem = nomes.map(itemDoArrayNomes => "Olá, " + {itemDoArrayNomes})
// console.log(mensagem);
//---------------------------------------------
// //Cria um array que lista apenas as iniciais dos nomes
// let nomes  = ["Orton","Tite","CM Punk"];

// let inicialNomes = nomes.map(element => element[0]);
// console.log(inicialNomes);

//---------------------------------------------
//Lista apenas os dominios dos Emails (ratoeira juijitsu kkkkkkkkkkkkkkk)
let email = ["Dataminer@gmail.com","Ryanzito@yahoo.com","Bruno@outlook.com"]

let dominios = email.map(element => element.split("@")[1]);
console.log(dominios);
//---------------------------------------------