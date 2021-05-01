// Exemplo 1
var numeros = [20,8,50,100,10, 28, 1, 15,2];

var maiorQue10 = function(yyy) {
    return yyy > 10;
}
var novosNumeros = numeros.filter(maiorQue10);

console.log(novosNumeros);

//Exemplo 2
var nomes = ["Bruno", "Zezinho", "Fulano", "Douglas"];

var convidados = nomes.filter(function(item){
    return item.charAt(0) == "Z";
});

console.log(convidados);

//Exemplo 3
var numeros = [10, 18, 1, 15, 2, 12, 21, 33, 100];

var pares = function(item) {
    return !(item % 2);
}

var impares = function(item) {
    return item % 2;
}

var numerosPar = numeros.filter(pares);
var numerosImpar = numeros.filter(impares);

console.log(numerosPar);

console.log(numerosImpar);
