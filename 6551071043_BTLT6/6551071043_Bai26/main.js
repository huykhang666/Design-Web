function tinhCanChi() {
    const nam = parseInt(document.getElementById("Nam").value);
    const output = document.getElementById("ketQua");

    const can = [
        "Giáp", "Ất", "Bính", "Đinh", "Mậu",
        "Kỷ", "Canh", "Tân", "Nhâm", "Quý"
    ]

    const chi = [
        "Tý", "Sửu", "Dần", "Mão", "Thìn", "Tỵ",
        "Ngọ", "Mùi", "Thân", "Dậu", "Tuất", "Hợi"
    ]

    const canIndex = (nam + 6) % 10; 
    const chiIndex = (nam + 8) % 12;

    const canChi = `${can[canIndex]} ${chi[chiIndex]}`;
    output.value = canChi;
}