function somValores(obj, obj1) {
    var som = [];
    var tam = Math.max(obj.length, obj1.length);
  
    for (var i = 0; i < tam; i++) {
        if(!isNaN(obj[i]) && !isNaN(obj1[i]) ){
            som.push(obj[i]+obj1[i]);
        }else if(isNaN(obj[i]) && !isNaN(obj1[i]) ){
            som.push(obj1[i]+0);
        }else if(isNaN(obj1[i]) && !isNaN(obj[i])){
            som.push(obj[i]+0);
        }
    }
  
    return som;
  }
  
  // Exemplo de uso
  var a = [1,5,3,1];
  var b = [4,5,8];

 console.log(somValores(a,b));