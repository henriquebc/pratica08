function poeTracos(obj) {
    var obj2 = obj.toString(); 
    var objTotal = "";
    for (var i = 0; i < obj2.length; i++) {
        objTotal =objTotal+ obj2[i]; 
        /*console.log(objTotal = obj2[i])*/
      if (parseInt(obj2[i]) % 2 === 0 && parseInt(obj2[i + 1]) % 2 === 0) {
        objTotal += "(ㆆ_ㆆ)"; 
      }
    }
    return objTotal;
  }
  var a;
  a = 12346788;
  var c = poeTracos(a);
  console.log(c);
  /**/