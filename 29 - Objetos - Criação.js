//Exemplo 1 - criação
var amigos = {nome: "Daniel", idade: "45", genero: "Masculino",
dataNascimento: "20/05/1970", cpf: "837.222.730-44"}
console.log(amigos);

//Exemplo 2 - criação
var amigos = {nome: "Daniel", idade: "45", genero: "Masculino",
dataNascimento: {dia: 20, mes:05, ano:1970}, cpf: "837.222.730-44"}
console.log(amigos);


//Exemplo 3 - acesso
var amigos = {nome: "Daniel", idade: "45", genero: "Masculino",
dataNascimento: {dia: 20, mes:05, ano:1970}, cpf: "837.222.730-44"}
console.log("Nome: " + amigos.nome + " Mes Nascto:" + amigos.dataNascimento.mes);
console.log(amigos.idade, amigos.genero, amigos.cpf);
console.log(amigos.idade + " " + amigos.genero);

var xidade = amigos.idade;
var xcpf = amigos.cpf;
console.log ("Var idade: " + xidade + " Var cpf: " + xcpf);

