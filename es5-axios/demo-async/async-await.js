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

  async function dienTichHT(a, b, h) {
    var resCong = await cong(a, b);
    var resChia =  await chia(resCong, 2);
    var resNhan = await nhan(resChia, h);

    console.log('Kết quả:', resNhan);
  }

  dienTichHT(1, 2, 3);