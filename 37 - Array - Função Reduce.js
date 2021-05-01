//Exemplo 1
var valores = [200.88, 150, 1.5, 2, 4, 25,10,45,67];

var somatoria = valores.reduce(function(total, item) {
    return total + item;
}, 0);

console.log(somatoria);

//Exemplo 2
var valores = [200.88, 150, 1.5, 2, 4, 25,10,45,67];

var media = valores.reduce((total, item, indice, array) => {
    total += item;

    if (indice === array.length - 1) {
        return total / array.length;
    }

    return total;
}, 0);

console.log(media);


//Exemplo 3
var valores = [200.88, 150, 1.5, 2, 4, 25,10,45,67];
var dobrados = valores.reduce(function(total, item) {
    console.log("Valor do item: " + item);
    return total.concat(item * 2);
}, []);

console.log(dobrados);

//Exemplo 4
var valores = [200.88, 150, 1.5, 2, 4, 25,10,45,67];

var novosValores = valores.reduce(function(total, item) {
    if(item > 10) {
        total.push(item);
    }
    return total;
}, []);

console.log(novosValores);
