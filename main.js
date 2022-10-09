var hoTen = "";
var thuNhap = 0;
var soNguoi = 0;
var tienThue = 0;

function tinhTienThue() {
    var hoTen = document.getElementById("hoTen").value;
    var thuNhap = Number(document.getElementById("thuNhap").value);
    var soNguoi = Number(document.getElementById("soNguoi").value);

    const thuNhapChiuThue = thuNhap - 4e+6 - (soNguoi * 1.6e+6);

    if (0 < thuNhapChiuThue && thuNhapChiuThue <= 60e+6) {
        tienThue = thuNhapChiuThue * 0.05;
        document.getElementById("txtResult3").innerHTML = "Họ tên "+ hoTen + " Tiền thuế phải chịu là: " + tienThue + "VND";
        
    } else if (60e+6 < thuNhapChiuThue && thuNhapChiuThue <= 120e+6) {
        tienThue = thuNhapChiuThue * 0.1;
        document.getElementById("txtResult3").innerHTML = "Họ tên "+ hoTen + " Tiền thuế phải chịu là: " + tienThue + "VND";

    } else if (120e+6 < thuNhapChiuThue && thuNhapChiuThue <= 210e+6) {
        tienThue = thuNhapChiuThue * 0.15;
        document.getElementById("txtResult3").innerHTML = "Họ tên "+ hoTen + " Tiền thuế phải chịu là: " + tienThue + "VND";
        
    } else if (210e+6 < thuNhapChiuThue && thuNhapChiuThue <= 384e+6) {
        tienThue = thuNhapChiuThue * 0.2;
        document.getElementById("txtResult3").innerHTML = "Họ tên "+ hoTen + " Tiền thuế phải chịu là: " + tienThue + "VND";

    } else if (384e+6 < thuNhapChiuThue && thuNhapChiuThue <= 624e+6) {
        tienThue = thuNhapChiuThue * 0.25;
        document.getElementById("txtResult3").innerHTML = "Họ tên "+ hoTen + " Tiền thuế phải chịu là: " + tienThue + "VND";

    } else if (624e+6 < thuNhapChiuThue && thuNhapChiuThue <= 960e+6) {
        tienThue = thuNhapChiuThue * 0.3;
        document.getElementById("txtResult3").innerHTML = "Họ tên "+ hoTen + " Tiền thuế phải chịu là: " + tienThue + "VND";
        
    } else {
        tienThue = thuNhapChiuThue * 0.35;
        document.getElementById("txtResult3").innerHTML = "Họ tên "+ hoTen + " Tiền thuế phải chịu là: " + tienThue + "VND";
    }
}
document.getElementById("tinhTienThue").onclick = tinhTienThue;

// Bài 4
function clickShowConnections() {
    //B1: DOM
    let clients = document.getElementById('clients').value;
    let connections = document.getElementById('num3');
    //B2: So sánh nếu là company()
    if (clients === "company") {
        connections.style.display = "block";
    } else {
        connections.style.display = "none";
    }
}

function pay() {
    //B1: DOM
    let clients = document.getElementById('clients').value;
    let clientNumber = +document.getElementById('num1').value;
    let channels = +document.getElementById('num2').value;
    let connections = +document.getElementById('num3').value;
    let currentFomat = new Intl.NumberFormat('vn-VN');
    //B2:Hiển thị trên màn hình
    document.getElementById('txtResult4').style.display = "block";
    document.getElementById('txtResult4').innerHTML = "Mã khách hàng: " + clientNumber + "-    Tiền cap: $" + currentFomat.format(calcPay(clients, channels, connections));
}
//channels: số kênh thuê
//connections: số kết nối
function calcPay(clients, channels, connections) {
    //B1: Tạo variable price = 0
    let price = 0;
    //B2: So sánh và áp dụng công thức tính
    // 4.5: phí xử lý hóa đơn
    // 20.5: Phí dịch vụ cơ bản
    // 7.5: tiền thuê/kênh
    //citizenHouse: nhà dân
    if (clients === "citizenHouse") {
        price = 4.5 + 20.5 + channels * 7.5;
    } else if (clients === "company") { // 15:phí xử lý hóa đơn,75:Phí dịch vụ cơ bản cho 10 kết nối đầu;50:tiền thuê/kênh
        if (connections <= 10) {
            price = 15 + 75 + channels * 50;
        } else {
            price = 15 + 75 + (connections - 10) * 5 + channels * 50;
        }
    } else {
        alert("Vui lòng chọn đối tượng");
        return;
    }
    return price;
}
