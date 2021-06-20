/**
 * Cách ép kiểu chuỗi -> số
 * - parseInt('number'); -> chuỗi sang số nguyên
 * - parseFloat('number') -> chuỗi sang số thập phân
 * - Number('number');
 * - +'number': tương ứng với Number
 */

var getEle = function(id) {
    return document.getElementById(id);
}

var tinhDTB = function(dToan, dVan) {
    return (Number(dToan) + Number(dVan)) / 2;
}

var xepLoai = function(dtb) {
    var loai = '';

    if (dtb >= 8 && dtb <= 10) {
        loai = 'Giỏi';
    } else if (dtb >= 6.5 && dtb < 8) {
        loai = 'Khá';
    } else if (dtb >= 5 && dtb < 6.5) {
        loai = 'Trung bình';
    } else { 
        loai = 'Yếu';
    }

    return loai;
}

var hienThiThongTin = function() {
    /**
     * Lấy thông tin từ người dùng nhập
     */
    var maSV = getEle('txtMaSV').value;
    var tenSV = getEle('txtTenSV').value;
    var hoanCanh = getEle('loaiSV').value;
    var diemToan = getEle('txtDiemToan').value;
    var diemVan = getEle('txtDiemVan').value;

    /**
     * Hiển thị thông tin
     */
    var dtb = tinhDTB(diemToan, diemVan);
    getEle('spanTenSV').innerHTML = tenSV;
    getEle('spanMaSV').innerHTML = maSV;
    getEle('spanLoaiSV').innerHTML = hoanCanh;
    getEle('spanDTB').innerHTML = dtb;
    getEle('spanXepLoai').innerHTML = xepLoai(dtb);
}

