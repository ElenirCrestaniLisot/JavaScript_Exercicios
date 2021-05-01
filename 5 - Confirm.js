var mes = prompt("informe o seu mes da sorte");
var dia = prompt("informe o seu dia da sorte");

var result = confirm("Confirme se o me é: " + mes + " E o dia é: " + dia);

if (result == true){
    console.log("Respondeu ok")
} else {
    console.log("Cancelou");
}

