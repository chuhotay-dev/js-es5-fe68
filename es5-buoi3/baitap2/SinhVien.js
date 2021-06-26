// Lớp đối tượng:  constructor function
function SinhVien(_ma, _ten, _email, _matKhau, _ngaySinh, _khoaHoc, _dToan, _dLy, _dHoa) {
    // Thuộc tính
    this.ma = _ma;
    this.ten = _ten;
    this.email = _email;
    this.matKhau = _matKhau;
    this.ngaySinh = _ngaySinh;
    this.khoaHoc = _khoaHoc;
    this.diemToan = _dToan;
    this.diemLy = _dLy;
    this.diemHoa = _dHoa;

    // Phương thức
    this.tinhDTB = function() {
        return (parseFloat(this.diemToan) + parseFloat(this.diemLy) + parseFloat(this.diemHoa)) / 3;
    }
}

// Khởi tạo 1 đối tượng sinh viên từ lớp đối tượng SinhVien
// var sv1 = new SinhVien('SV1', 'Tay', 'taych@gmail.com', '12345', '08/06', 'FE68', 4, 5, 6);
// console.log(sv1);


/**
 * Cách thức hoạt động của toán tử new
 * 4 bước: 
 * - b1: Tạo ra 1 object rỗng (empty object => {})
 * - b2: Gọi function SinhVien và đồng thời gán object rỗng được tạo ở bước 1 vào biến this (this = {})
 * - b3: Trở object rỗng (b1) đến object prototype trong constructor func (SinhVien)
 * - b4: Return về obj rỗng được tạo ra ở bước 1
 */

/**
 * 'this' keyword / variable: tồn tại ở trong function, giá trị của biến this chính là object mà func đó thuộc về, giá trị của 'this' không cố định và được xác định tại thời điểm mà func đó được thực thi
 * - Regular func: this = global object (window)
 * - 'new; operator (constructor func): this = empty object được tạo ra từ constructor func
 * - Func là method của object: this = object chứa method đó
 * - Event handler: this = element xảy ra event 
 */


// var _sinhVien = function(ma, ten, lop) {
//     var emptyObject = {};
//     var _this = emptyObject;

//     _this.ma = ma;
//     _this.ten = ten;
//     _this.lop = lop;
//     return emptyObject;
// }

// var sv2 = _sinhVien('1', 'tay', '2');
// console.log(sv2);

