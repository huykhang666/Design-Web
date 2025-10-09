function xuatThu() {
    const inputs = document.querySelectorAll("input");
    const ngay = parseFloat(inputs[0].value);
    const thang = parseFloat(inputs[1].value);
    const nam = parseFloat(inputs[2].value);

    const date = new Date(nam,thang-1,ngay);
    const thuTrongTuan = [
        "Chủ nhật",
        "Thứ hai",
        "Thứ ba",
        "Thứ tư",
        "Thứ năm",
        "Thứ sáu",
        "Thứ bảy"
    ];

    const thu = thuTrongTuan[date.getDay()];
    document.getElementById("ketQua").innerText =
        `${thu}, ngày ${ngay}/${thang}/${nam}`;
}