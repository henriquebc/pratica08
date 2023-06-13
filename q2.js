/*questão 02*/
function clonarArrays(obj) {
    return obj.slice();
}
var a = [2,5,7,8,9];
var c = clonarArrays(a);
console.log(clonarArrays(c));

