var numeros = [10, 18, 1, 15, 2, 12, 21, 33, 100];

var pares = function(item) {
    return !(item % 2);
}

var dobrados = function(item) {
    return item * 2;
}

var maiores = function(item) {
    return item >= 10;
}

var media = function(total, item, indice) {
    return (total + item) / (indice + 1);
}

var mediaDobrada =
numeros.filter(pares).map(dobrados).filter(maiores).reduce(media, 0);

console.log(mediaDobrada);