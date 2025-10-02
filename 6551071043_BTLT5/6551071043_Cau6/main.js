var a = parseFloat(prompt("Nhap a: "));
var b = parseFloat(prompt("Nhap b: "));
var c = parseFloat(prompt("Nhap b: "));

var delta = b * b - 4 * a * c;

if(delta > 0) {
    var x1 = (-b + Math.sqrt(delta)) / (2*a);
    var x2 = (-b - Math.sqrt(delta)) / (2*a);
    console.log(x1);
    console.log(x2);
} else if (delta === 0) {
    var x1 = -b/(2*a);
    console.log(x1);
}
else {
    console.log("Phương trình vô nghiệm");
}
