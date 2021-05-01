// Exemplo 1 
/* parâmetro deleteCount não foi específicado - todos os
elementos a partir do 1 serão apagados. */
var funcionarios = ["João", "Pedro", "Ana"];
console.log(funcionarios);

funcionarios.splice(1);
console.log(funcionarios);

// Exemplo 2
/* parâmetro deleteCount foi específicado - 1 elemento
após a posição 1 será apagado.*/
var funcionarios = ["João", "Pedro", "Ana"];
console.log(funcionarios)

funcionarios.splice(1, 1); 
console.log(funcionarios);


//Exemplo 3
/* // parâmetro deleteCount foi
específicado - 1 elemento após a posição 1 será apagado. E também o
elemento "Mauricio" e "Valquiria" serão adicionados na posição especificada. */
var funcionarios = ["João", "Pedro", "Ana"];
console.log(funcionarios)

funcionarios.splice(1, 1, "Mauricio","Valquiria"); 
console.log(funcionarios);