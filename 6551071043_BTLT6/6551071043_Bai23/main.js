
function tinhLuong () {
    var luong = parseFloat(document.querySelector("#Luong input").value);
    var heSo = parseFloat(document.querySelector("#heSoLuong input").value);
    
    var kq = luong * heSo;
    document.getElementById("ketQua").innerHTML = kq.toLocaleString() + "VNĐ";
}