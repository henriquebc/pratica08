var a;
a = [1,2,3,4];
/*questão 01*/
function verificaArray (obj){
    if(Array.isArray(obj)){
        console.log("É array");
    }else{
        console.log("não é array");
    }
    
}

verificaArray(a);
