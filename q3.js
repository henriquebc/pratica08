/*questão 03*/

function primeirosElementos(obj, n){
    if(n>= obj.length){
        console.log("N é maior q o tamanho do array");
    }else{
        return obj.slice(0,n);
    }
}

var a = [2,5,7,8,9];
console.log(primeirosElementos(a, 2));
console.log(primeirosElementos(a, 4));
console.log(primeirosElementos(a, 5));

