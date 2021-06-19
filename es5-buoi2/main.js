/**
 * Array (mảng)
 */

// var fullName = 'Chu Ho Tay'; => mỗi biến chỉ chứa được một giá trị

// Khởi tạo mảng
// C1:              // 0  // 1  // 2
var listSinhVien = ['Tay', 'Y', 'Vy'];
// console.log(typeof listSinhVien); => object

// C2: 
var listNhanVien = new Array('Tay', 'Y', 'Vy');

// Truy xuất phần tử trong mảng
console.log(listSinhVien[0]);

// Cập nhật giá trị
listSinhVien[0] = 'Dong';
console.log(listSinhVien[0]);

// Thêm phần tử vào mảng
listNhanVien.push('Dong'); // Thêm 1 phần tử vào cuối mảng
listNhanVien.unshift('Nam'); // Thêm 1 phần tử vào đầu mảng
console.log(listNhanVien);

// Xoá phần tử khỏi mảng
listNhanVien.pop(); // Xoá 1 phần tử cuối mảng
listNhanVien.shift(); // Xoá 1 phần tử đầu mảng
console.log(listNhanVien);

console.log(listNhanVien.length);

// Duyệt mảng (vòng lặp for)
// debugger
for (var i = 0; i < listNhanVien.length; i++) {
    console.log(listNhanVien[i]);
}


/**
 * DOM:
 * - DOM thông qua ID: getElementById (trả về 1 element)
 * - DOM thông qua TAGNAME: getElementsByTagName (trả về 1 danh sách)
 * - DOM thông qua CLASS: getElementsByClassName (trả về 1 danh sách)
 */

// DOM thông qua id
var tagHelloDOM = document.getElementById('helloDOM');
// Thay đổi nội dung của element
tagHelloDOM.innerHTML = 'Hello DOM ne';

// Thay đổi style của element
tagHelloDOM.style.backgroundColor = 'red';

// DOM thông qua tagname
var tagHeading = document.getElementsByTagName('h2');
console.log(tagHeading[0]);

// DOM thông qua classname
var classWelcome = document.getElementsByClassName('welcome');
classWelcome[2].style.color = 'blue';


// Xử lý sự kiện click
// C1
// var handleClickChaoTheGioi = function() {
//     alert('Chào thế giới!!');
// }

// C2
// document.getElementById('btnChaoTheGioi').onclick = function() {
//     alert('Chào thế giới');
// }

// C3
// callback function: 
    // + Là func mà làm tham số của 1 func khác
    // + Được thực thi hay không là dựa vào một func khác
var cbFn = function() {
    alert('Hello');
}
  
document.getElementById('btnChaoTheGioi').addEventListener('click', cbFn);


//======================================
var tagP = document.getElementById('tagP');

document.getElementById('btnNhanEmDi').onclick = function() {
    tagP.innerHTML = 'Đã thay đổi rồi nè!';
}

//=======================================
document.getElementById('btnBatDen').onclick = function() {
    document.getElementById('imgDen').src = './img/pic_bulbon.gif'
}

document.getElementById('btnTatDen').onclick = function() {
    document.getElementById('imgDen').src = './img/pic_bulboff.gif'
}