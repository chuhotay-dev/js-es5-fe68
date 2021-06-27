/**
 * Khởi tạo dsnv từ lớp đối tượng DanhSachNhanVien
 */
var dsnv = new DanhSachNhanVien();
var validator = new Validator();

var getEle = function (id) {
  return document.getElementById(id);
};

var renderDSNV = function (dsnv) {
  var content = '';
  dsnv.forEach(function (nv, index) {
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
                    <button class="btn btn-success" data-toggle="modal" data-target="#myModal" onclick="suaNhanVien('${nv.maNV}')">Xem</button>
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
}

function suaNhanVien(maNV) {
  getEle('btnThemNV').style.display = 'none';
  getEle('btnCapNhat').style.display = 'block';
  getEle('msnv').disabled = 'true';
  // getEle('msnv').setAttribute('disabled', true);

  var nhanVien = dsnv.layThongTinNhanVien(maNV);

  /**
   * Đổ data nhanVien lên modal
   */
  getEle('msnv').value = nhanVien.maNV;
  getEle('name').value = nhanVien.hoTen;
  getEle('email').value = nhanVien.email;
  getEle('password').value = nhanVien.matKhau;
  getEle('datepicker').value = nhanVien.ngaySinh;
  getEle('chucvu').value = nhanVien.chucVu;
}

var validateInput = function (maNV, hoTen, email, matKhau) {
  var isValid = true;

  isValid &=
    validator.kiemTraRong(maNV, 'tbMaNV', 'Mã nhân viên không được để trống') &&
    validator.kiemTraDoDaiKyTu(
      maNV,
      'tbMaNV',
      'Vui lòng nhập từ 4 - 10 ký tự',
      4,
      10
    );

  isValid &=
    validator.kiemTraRong(hoTen, 'tbTen', 'Họ tên không được để trống') &&
    validator.kiemTraChuoi(hoTen, 'tbTen', 'Họ tên không hợp lệ');

  isValid &=
    validator.kiemTraRong(email, 'tbEmail', 'Email không được để trống') &&
    validator.kiemTraEmail(email, 'tbEmail', 'Email không đúng định dạng');

  isValid &=
    validator.kiemTraRong(
      matKhau,
      'tbMatKhau',
      'Mật khẩu không được để trống'
    ) &&
    validator.kiemTraDoDaiKyTu(
      matKhau,
      'tbMatKhau',
      'Vui lòng nhập từ 6 - 8 ký tự',
      6,
      8
    );

  isValid &= validator.kiemTraChucVu(
    'chucvu',
    'tbChucVu',
    'Bạn chưa chọn chức vụ'
  );

  return isValid;
};

/**
 * Cập nhật nhân viên
 */
getEle('btnCapNhat').addEventListener('click', function () {
  /**
   * Lấy thông tin mới từ ô input
   */
  var maNV = getEle('msnv').value;
  var hoTen = getEle('name').value;
  var email = getEle('email').value;
  var matKhau = getEle('password').value;
  var ngaySinh = getEle('datepicker').value;
  var chucVu = getEle('chucvu').value;

  /**
   * Kiểm tra dữ liệu
   */
  if (!validateInput(maNV, hoTen, email, matKhau)) return;

  var nhanVien = new NhanVien(maNV, hoTen, email, matKhau, ngaySinh, chucVu);
  dsnv.capNhatNhanVien(nhanVien);
  getEle('btnDong').click();
  renderDSNV(dsnv.arr);
  setLocalStorage();
});

getEle('searchName').addEventListener('keyup', function() {
    var keyword = getEle('searchName').value;
    var mangTimKiem = dsnv.timKiemNhanVien(keyword);
    renderDSNV(mangTimKiem);
});

// Lấy data từ local storage
getLocalStorage();

getEle('btnThem').addEventListener('click', function () {
  getEle('btnCapNhat').style.display = 'none';
  getEle('btnThemNV').style.display = 'block';
});

getEle('btnThemNV').addEventListener('click', function () {
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
   * Kiểm tra dữ liệu
   */
  if (!validateInput(maNV, hoTen, email, matKhau)) return;

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
}
