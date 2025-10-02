var year = 2025;
if ((year % 400 == 0) || (year % 4 == 0 && year % 100 != 0)) {
    window.alert("Năm nhuận")
} else {
    window.alert("Năm không nhuận")
}
