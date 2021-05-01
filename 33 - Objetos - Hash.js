// Exemplo 1
var contatos = {};
contatos["da39a3ee5e6b4b0das55bfef95231890afd80709"] = {nome: "Ferdinando",
idade: 27};
contatos["da39a3ee5e6b4b0d3255bfef95601890afd80709"] = {nome: "Breno",
idade: 29};
console.log(contatos);

//Exemplo 2
var contatos = {};
contatos["da39a3ee5e6b4b0das55bfef95231890afd80709"] = {nome: "Ferdinando",
idade: 27};
contatos["da39a3ee5e6b4b0d3255bfef95601890afd80709"] = {nome: "Breno",
idade: 29};
console.log(contatos);

for (var id in contatos) {
    console.log(contatos[id]);
}
