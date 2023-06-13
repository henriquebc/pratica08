function removeDupli(obj) {
    var aux=[];
    var aux1=[];
    var aux2=[];
    for(var j = 0; j < obj.length; j++)
    {
        aux.push(obj[j].toLowerCase());
    }
    var aux1 = aux;
    for(var i = 0; i < aux.length; i++){
        var num = aux[i];
        for(var c = 0; c < aux.length; c++)
        {
            if(num == aux[c]){
              aux2.push( aux1.splice(c,1));
            }
        }
    }
        return aux1;
        
  }
  
  // Exemplo de uso
  var a = ["Jaca", "Josa", "jaca", "bola", "ola", "olA", "jaca"];
  console.log(removeDupli(a));
  
  /*me perdi um pouco na lógica*/