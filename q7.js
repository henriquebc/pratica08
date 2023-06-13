function maisFrequente(obj){
    var cont1=0;
    var maiorfreq =[];
    var aux= obj;
    
    for(var i = 0; i < aux.length; i++){
        var num = aux[i];
        var cont=0;
        for(var j = 0; j < aux.length; j++)
        {
            if(num == aux[j]){
                cont++;
                cont1 = cont;
                /*console.log(cont1);*/
            }else{
                cont = cont+0;
            }
        }
        maiorfreq.push(cont1);
        

    }
    /*console.log(maiorfreq)*/
    return obj[MaiorElemento(maiorfreq)];
}
function MaiorElemento(ex) {
    var aux =Math.max(...ex);
    for(var j = 0; j < ex.length; j++)
        {
            if(aux == ex[j]){
                return j;
            }
                
        }
}
var p = [1,2,3,2,3,2];
console.log(maisFrequente(p));

var a = [23,5,56,56,56,23,23];
console.log(maisFrequente(a));
/*quando tem dois valores muito frequentes o primeiro na ordem do vetor é q será exibido */