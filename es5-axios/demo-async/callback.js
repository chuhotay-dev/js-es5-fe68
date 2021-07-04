// S = ((a + b) / 2) * h;

// cong (3s)
// chia (2s)
// nhan (1s)

function cong(num1, num2, callback) {
  console.log('Cộng....')
  setTimeout(function () {
    callback(num1 + num2);
  }, 3000);
}

// cong(1, 2, function(res) {
//     console.log(res);
// })

function chia(num1, num2, callback) {
  console.log('Chia....')
  setTimeout(function () {
    callback(num1 / num2);
  }, 2000);
}

function nhan(num1, num2, callback) {
  console.log('Nhân....')
  setTimeout(function () {
    callback(num1 * num2);
  });
}

function dienTichHT(a, b, h, callback) {
  cong(a, b, function (resCong) {
    chia(resCong, 2, function (resChia) {
      nhan(resChia, h, function (resNhan) {
        callback(resNhan);
      });
    });
  });
}

dienTichHT(1, 2, 3, function(res) {
    console.log('Kết quả:', res);
});
