var palestra = [];

while(true) {
    var nome = prompt("Digite o nome da pessoa ou S para sair");
    var idade = Number(prompt("Digite a idade da pessoa"));
    var cpf = prompt("Digite o CPF da pessoa");

    if (nome == "S") {
        break;
    } else {
        palestra.push({nome: nome, idade: idade, cpf: cpf});
            }
}
console.log(palestra);
