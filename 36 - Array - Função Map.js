//Exemplo 1
var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var multiplica = function(item) {
    return item * 2;
}

var emdobro = numeros.map(multiplica);

console.log(numeros);
console.log(emdobro);

//Exemplo 2
var todos = [{nome: "felipe", vip: false}, {nome: "danIEl", vip:
true}, {nome: "João", vip: true}];
console.log(todos);

var emMaiusculo = todos.map(function(item) {
    return {nome: item.nome.toUpperCase(), vip: item.vip};
    });

// Da forma abaixo não mostra o atributo vip
//var emMaiusculo = todos.map(function(item) {
//   return Object.assign(item, {nome: item.nome.toUpperCase()});
//});

console.log(emMaiusculo);

