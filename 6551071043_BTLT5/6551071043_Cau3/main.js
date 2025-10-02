var a = [15, 28, 9];
var max = a[0];
for(i in a) {
    if(a[i] > max) {
        max = a[i];
    }
}

window.alert(max);