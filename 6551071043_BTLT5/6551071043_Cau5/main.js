var a = parseInt(prompt("Nhập số nguyên dương: "));

var isPrime = true;

if(a<=1) {
    isPrime = false;
} else {
    for(var i = 2;i < Math.sqrt(a);i++) {
        if(a % i == 0) {
            isPrime = false;
            break;
        }
    }
}

if(isPrime) {
    console.log(a + " là số nguyên tố")
} else {
    console.log(a + " không phải số nguyên tố")
}