function multiply() {
    var n1 = parseFloat(document.getElementById("num1").value);
    var n2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("result").innerHTML = n1 * n2;
}

function divide() {
    var n1 = parseFloat(document.getElementById("num1").value);
    var n2 = parseFloat(document.getElementById("num2").value);
    if (n2 === 0) {
        document.getElementById("result").innerHTML = "Không thể chia cho 0!";
    } else {
        document.getElementById("result").innerHTML = n1 / n2;
    }
}
