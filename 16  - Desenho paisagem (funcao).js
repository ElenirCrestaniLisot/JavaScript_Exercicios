var paisagem = function() {
    var res = "";
    
    var vale = function(quant) {
        for (var c = 0; c < quant; c++) {
        res += "_";
        }
    };

    var montanha = function(quant) {
        res += "/";
        for (var c = 0; c < quant; c++) {
            res += "'";
       }

        res += "\\";
    };

    vale(3);
    montanha(4);
    vale(6);
    montanha(1);
    vale(1);

    return res;
};

console.log(paisagem());

