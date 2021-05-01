var x = 0;
while (x < 20) {
    if (x == 10){
        console.log("Sou o numero %%%% 10 %%%%");
    } else {
        console.log("Diferente de 10 - sou o numero " + x)
    }
 
    if (x == 20) {
        y++
    } 
    x++;
    if (x == 15) {
        break;
    }
}