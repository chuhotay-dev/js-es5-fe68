/**
 * Khởi tạo dsnv từ lớp đối tượng DanhSachNhanVien
 */
var dsnv = new DanhSachNhanVien();

var getEle = function(id) {
    return document.getElementById(id);
};

var renderDSNV = function(dsnv) {
    var content = '';
    dsnv.forEach(function(nv, index) {
        /**
         * nv: đại diện cho 1 phần từ trong mảng (object nhân viên)
         * index: số chỉ mục của phần trong mảng
         */
        // ``: string template
        content += `
            <tr>
                <td>${nv.maNV}</td>
                <td>${nv.hoTen}</td>
                <td>${nv.email}</td>
                <td>${nv.ngaySinh}</td>
                <td>${nv.chucVu}</td>
                <td>
                    <button class="btn btn-success">Xem</button>
                    <button class="btn btn-danger" onclick="xoaNhanVien('${nv.maNV}')">Xoá</button>
                </td>
            </tr>
        `;

    });
    getEle('tableDanhSach').innerHTML = content;
};

function xoaNhanVien(maNV) {
    dsnv.xoaNhanVien(maNV);
    renderDSNV(dsnv.arr);
    setLocalStorage();
};

// Lấy data từ local storage
getLocalStorage();

getEle('btnThem').addEventListener('click', function() {
    getEle('btnCapNhat').style.display = 'none';
});

getEle('btnThemNV').addEventListener('click', function() {
    /**
     * Lấy thông tin từ người dùng nhập
     */
    var maNV = getEle('msnv').value;
    var hoTen = getEle('name').value;
    var email = getEle('email').value;
    var matKhau = getEle('password').value;
    var ngaySinh = getEle('datepicker').value;
    var chucVu = getEle('chucvu').value;

    /**
     * Khởi tạo đối tượng nhanVien từ lớp đối tượng NhanVien 
     */ 
    var nhanVien = new NhanVien(maNV, hoTen, email, matKhau, ngaySinh, chucVu);

    /**
     * Thêm đối tượng nhanVien vào mảng
     */
    dsnv.themNhanVien(nhanVien);

    /**
     * Render danh sách nhân viên ra giao diện
     */
    renderDSNV(dsnv.arr);

    /**
     * Đóng modal
     */
    getEle('btnDong').click();

    /**
     * Lưu data xuống local storage
     */
    setLocalStorage();
});

function getLocalStorage() {
    /**
     * Lấy data từ local storage
     */
    if (localStorage.getItem('DSNV')) {
        dsnv.arr = JSON.parse(localStorage.getItem('DSNV'));
        renderDSNV(dsnv.arr);
    }
}

function setLocalStorage() {
    /**
     * Lưu data xuống local storage, chuyển thành định dạng JSON
     */
    localStorage.setItem('DSNV', JSON.stringify(dsnv.arr));
};
