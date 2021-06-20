/**
 * Object (kiểu đối tượng)
 */

var person = {
    // key: value
    // Đối tượngL có 2 thành phần là thuộc tính (properties) và phương thức (methods)
    // Thuộc tính của đối tượng person
    name: 'Tay',
    age: 18,
    class: 'FE68',

    // Phương thức của đối tượng person
    greeting: function() {
        console.log('Hello!');
    }
}

// Truy xuất thuộc tính, phương của đối tượng
// C1
console.log(person.name);
console.log(person.class);
console.log(person.greeting());

// C2
var _age = 'age';
console.log(person['age']);
console.log(person[_age]);

// Thay đổi giá trị thuộc tính
person.name = 'Dong';
person['name'] = 'Nam';
console.log(person);

// Thêm thuộc tính mới vào object
person.height = 170;
console.log(person);

// Xoá thuộc tính trong object
delete person.age;
delete person['class'];
console.log(person);

var employee = {
    // Thuộc tính
    id: '1234',
    fullName: 'Chu Ho Tay',
    email: 'taych@gmail.com',

    // Phương thức
    tinhLuong: function() {},
    tinhTongSoGioLam: function() {},

    // Phương thức (shorthand)
    tinhTongNgayNghi() {
        console.log('shorthand method');
    }
}