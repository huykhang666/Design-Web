var a = 5;
var b = 6;
var c = 7;
var p = (a+b+c)/2;
var kq = Math.sqrt(p * (p-a) * (p-b) * (p-c));

console.log(kq);
window.alert(kq.toFixed(2));
document.writeln("Dien tich tam giac a b c: "+ kq.toFixed(2));