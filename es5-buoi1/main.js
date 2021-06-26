// Dùng cho việc debug
console.log('Hello World!');

// alert('Hello');

/**
 * Biến và kiểu dữ liệu:
 * - Kiểu nguyên thuỷ (primitive type): string, number, boolean, undefined, null, bigint, symbol
 * - null là kiểu object => bug
 * - Còn lại là object
 * - Phép gán (=)
 * - Dynamic type
 * - Đặt tên biến theo kiểu camelCase (kiểu lạc đà) và phải có ý nghĩa
 * - Không bắt đầu bằng số và kí tự đặc biệt, không được chứa kí tự đặc biệt ngoại trừ dấu gạch dưới
 * - Không đặt tên biến có khoảng trắng
 * - Không đặt tên biến trùng với các keywords của JS: if, else, function, var,...
 * - Hằng số (constant):
 *      + Lưu trữ những giá trị không bao giờ thay đổi
 *      + Không thể gán lại giá trị mới được
 *      + Bắt buộc phải gán giá trị ngay lúc khởi tạo biến
 *      + Khai báo hằng số nên viết IN_HOA
 */

var fullName = 'Chu Ho Tay'; // string
console.log(typeof fullName);

var age = 18; // number
console.log(typeof age);

age = '18';
console.log(typeof age);

var isStudent = true; // boolean
console.log(typeof isStudent);

var height; // undefined
console.log(typeof height);

var weight = null; // object => bug
console.log(typeof weight);


// var _a => ok
// var 2a = ''; => toang
// var a2 = ''; => ok
// var ?a = ''; => toang
// var a-b = ''; => toang
// var a_b = ''; => ok
// var if = ''; => toang

// const PI; => toang
const PI = 3.14;
// PI = 3.15; => toang

/**
 * Câu lệnh điều kiện:
 * - if 
 * - if else 
 * - ternary operator (toán tử 3 ngôi)
 * - else if
 * - switch case: chỉ so sánh bằng
 * Phép so sánh:
 * - ==: Chỉ so sánh giá trị
 * - ===: So sánh giá trị và kiểu dữ liệu
 * - >, <, >=, <=, !=, !==
 * Biểu thức điều kiện
 * - AND (&&): tất cả true thì cả biểu thức true, 1 thằng false thì cả biểu thức false
 *  + Nếu biểu thức trước && mà true => chạy tiếp
 *  + Nếu biểu thức trước && mà false => dừng và trả lại giá trị tại ví trí đó
 * - OR (||): chỉ cần 1 thằng true thì cả biểu thức true, tất cả false thì cả biểu thức false
 *  + Nếu biểu thức trước || mà false => chạy tiếp
 *  + Nếu biểu thức trưỡc || mà true => dừng và trả lại giá trị tại ví trí đó
 * - NOT (!): nghịch đảo lại giá trị boolean hiện tại, vd: !tru => false, !false => true
 * Truthy và Falsy values
 * - false: 0, '', "", ``, null, undefined, false, NaN (Not a Number)
 * - true: còn lại
 */

// Phép so sánh
console.log(3 == '3'); // true
console.log(3 === '3') // false
console.log(3 != 3); // false
console.log(3 !== '3'); // true

// if
var isGirl = false;

if (isGirl) {
    alert('Hey girl!');
}

// If else
var isAdult = false;

if (isAdult) {
    console.log('You can access this page!');
} else {
    console.log('FBI warning!!!');
}

// Ternary operator (toán tử 3 ngôi)
1 === 2 ? console.log("Điều kiện đúng") : console.log('Điều kiện sai');
var res = isGirl ? 'Hello Girl' : 'Hello Boy';
console.log(res);

// Else if
var trafficLight = 'green';

if (trafficLight == 'green') {
    console.log('Đi đi');
} else if (trafficLight == 'yellow') {
    console.log('Chạy chậm lại');
} else if (trafficLight == 'red') {
    console.log('Dừng lại');
} else {
    console.log('Cúp điện rồi');
}

// Switch case
var number = 1;

switch (number) {
    case 1:
        console.log('Một');
        break;
    case 2:
        console.log('Hai');
        break;
    case 3: 
        console.log('Ba');
        break;
    case 4: 
        console.log('Bốn');
        break;
    case 5: 
        console.log('Năm');
        break;
    default:
        console.log('Không xác định');                
}


// Biểu thức điều kiện (LOGICAL OPERATOR)
var A = true;
var B = false;

console.log(A && B); // false
console.log(A || B); // true
console.log(!(!A || B)); // true


/**
 * Hàm (Function)
 * - 3 loại: declaration func, expression func, arrow func (es6)
 * - Hàm không tham số, không có giá trị trả về
 * - Hàm có tham số, không có giá trị trả về
 * - Hàm vừa có tham số vừa có giá trị trả về
 * - Tên function phải có ý nghĩa, nên bắt đầu bằng động từ
 * - Hoisting: Là cơ chế đẩy một biến được khai lên trên cùng scope chứa nó => có thể truy cập được biến trước khi khai báo
 *      + Đối với biến: hoisting chỉ xảy ra với từ khoá var
 *      + Đối với func: hoisting chỉ xảy ra với declaration func
 */


// delaration func
// Hàm không tham số, không có giá trị trả về
function sayHello() {
    console.log('Hello there!');
}


// Hàm có tham số, không có giá trị trả về
function sayHelloToSomeone(name) {
    console.log('Hello ' + name)
}

// Hàm vừa có tham số vừa có giá trị trả về
function calculateGPA(score1, score2, score3) {
    var gpa = (score1 + score2 + score3) / 3;
    return gpa;
}

// Gọi function
// sayHello();
sayHelloToSomeone('Tay');
var _gpa = calculateGPA(7, 5, 8);
console.log(_gpa);

// _sayHello('Y'); => toang

// expresstion func
var _sayHello = function(name) {
    console.log('Hello ' + name)
}


_sayHello('Tay');


// Hoisting
// var demoHoisting;
console.log(demoHoisting);
var demoHoisting = 'hoisting';

// console.log(hoistingConst); // => toang
const hoistingConst = 'hoisting';


/**
 * BT1: Tính điểm TB và xếp loại SV
 */
var tinhDiemTB = function(dToan, dLy, dHoa) {
    return (dToan + dLy + dHoa) / 3;
}

var xepLoai = function() {
    var dtb = tinhDiemTB(1, 1, 1);
    var xepLoai = '';

    if (dtb >= 9 && dtb <= 10) {
        xepLoai = 'Xuất sắc';
    } else if (dtb >= 8 && dtb < 9) {
        xepLoai = 'Giỏi';
    } else if (dtb >= 7 && dtb < 8) {
        xepLoai = 'Khá';
    } else if (dtb >=6 && dtb < 7) {
        xepLoai = 'TB khá';
    } else if (dtb >= 5 && dtb < 6) {
        xepLoai = 'Trung bình';
    } else {
        xepLoai = 'Yếu';
    }

    console.log('Xếp loại: ' + xepLoai);

}

xepLoai();



