function deepEqual(x, y) {
    // primeiro verifica se x é idêntico a y
    if (x === y) {
        return true;
    }
    // caso x seja um objeto, y também seja um objeto e ambos não sejam
    //nulos, inicia a verificação profunda
    else if ((typeof x == "object" && x != null) && (typeof y == "object"
    && y != null)) {
        // primeira estratégia é verificar a quantidade de propriedades com
        //o método key
        if (Object.keys(x).length != Object.keys(y).length) {
             return false;
         }
    // caso seja a mesma quantidade inicia um loop em cada propriedade
    //de x
   
    for (var prop in x) {
    // verifica se existe a mesma propriedade em y com o método
    //hasOwnProperty
        if (y.hasOwnProperty(prop)) {
             // caso exista a mesma propriedade utiliza o primeiro if na
             // recursão para verificar se são idênticas
             if (!deepEqual(x[prop], y[prop])) {
                 return false;
             }
         } else {
             // caso não exista, descarta o restante das propriedades
              return false;
              }
          }
            // caso passe em todas as verificações do for, retorna true
           return true;
         } else {
          return false;
          }
    }
    var convidado1 = {idade: 21};
    var convidado2 = convidado1;
    var convidado3 = {idade: 21};
    console.log(deepEqual(convidado1, convidado3));

    console.log(deepEqual(convidado1, {idade: 21}));