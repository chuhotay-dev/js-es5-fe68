function cong(num1, num2) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(num1 + num2);
    }, 3000);
  });
}

function chia(num1, num2) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(num1 / num2);
    }, 3000);
  });
}

function nhan(num1, num2) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(num1 * num2);
    }, 3000);
  });
}

function dienTichHT(a, b, h) {
  return cong(a, b)
    .then(function (resCong) {
      return chia(resCong, 2);
    })
    .then(function (resChia) {
      return nhan(resChia, h);
    });
}

dienTichHT(1, 2, 3).then(function (res) {
  console.log('Kết quả: ', res);
});
