// console.log('Hello....')

// // Fshare
// function readFile() {
//     // call api
//     return new Promise(function(resolve, reject) {
//         console.log('Reading file...');
//         setTimeout(function() {
//             var isError = false;
//             if (isError) {
//                 reject('Error')
//             } else {
//                 resolve('File');
//             }
//         }, 5000);
//     })
// }

// readFile().then(function(res) {
//     console.log(res);
//     downloadFile(res);
// }).catch(function(err) {
//     console.log(err);
// });

// function displayAds() {
//     console.log('Ads....');
// }

// displayAds();

// function downloadFile(file) {
//     console.log(file + ' downloaded!');
// }

var sanPhamService = new SanPhamService();

function getEle(id) {
  return document.getElementById(id);
}

var getProducts = function () {
  sanPhamService
    .getProductsApi()
    .then(function (res) {
      // Success
      renderTable(res.data);
      setLocalStorage(res.data);
    })
    .catch(function (err) {
      // Error
      console.log(err);
    });
};

getProducts();

var addProduct = function () {
  /**
   * Lấy thông tin từ form
   */
  var tenSP = getEle('TenSP').value;
  var gia = getEle('GiaSP').value;
  var hinhAnh = getEle('HinhSP').value;
  var moTa = getEle('moTa').value;

  /**
   * Khởi tạo sanpham từ lớp đối tượng SanPham
   */
  var sanPham = new SanPham(tenSP, gia, hinhAnh, moTa);

  /**
   * Gọi api để lưu data xuống database
   */
  sanPhamService
    .addProductApi(sanPham)
    .then(function (res) {
      document.querySelector('.close').click();
      getProducts();
    })
    .catch(function (err) {
      console.log(err);
    });
};

getEle('btnThemSP').addEventListener('click', function () {
  var modalFooter = document.querySelector('.modal-footer');
  modalFooter.innerHTML =
    '<butotn class="btn btn-success" onclick="addProduct()">Thêm sản phẩm</butotn>';
});

var deleteProduct = function (id) {
  sanPhamService
    .deleteProductApi(id)
    .then(function (res) {
      alert('Success');
      getProducts();
    })
    .catch(function (err) {
      console.log(err);
    });
};

var updateProduct = function (id) {
  /**
   * Lấy thông tin mới từ form
   */
  var tenSP = getEle('TenSP').value;
  var gia = getEle('GiaSP').value;
  var hinhAnh = getEle('HinhSP').value;
  var moTa = getEle('moTa').value;

  var sanPhamUpdate = new SanPham(tenSP, gia, hinhAnh, moTa);

  /**
   * Cập nhật thông tin mới xuống database
   */
  sanPhamService.updateProductApi(id, sanPhamUpdate)
    .then(function(res) {
        getProducts();

        // Ẩn modal sau khi cập nhật thành công
        document.querySelector('.close').click();
    })
    .catch(function(err) {
        console.log(err);
    })

};

var editProduct = function (id) {
  sanPhamService
    .getProductById(id)
    .then(function (res) {
      var sp = res.data;

      // Mở modal
      getEle('btnThemSP').click();

      // Đổ data trả về lên modal
      getEle('TenSP').value = sp.tenSP;
      getEle('GiaSP').value = sp.gia;
      getEle('HinhSP').value = sp.hinhAnh;
      getEle('moTa').value = sp.moTa;

      // Thêm button cập nhật cho modal
      var modalFooter = document.querySelector('.modal-footer');
      modalFooter.innerHTML = `<butotn class="btn btn-success" onclick="updateProduct('${sp.id}')">Cập nhật</butotn>`;
    })
    .catch(function (err) {
      console.log(err);
    });
};

getEle('ipSearch').addEventListener('keyup', function() {
    var listProduct = getLocalStorage();
    var keyword = getEle('ipSearch').value;

    var listSearchResult = sanPhamService.searchProduct(listProduct, keyword);
    renderTable(listSearchResult);    
})

function renderTable(products) {
  var content = '';
  products.forEach(function (product, index) {
    content += `
            <tr>
                <td>${index + 1}</td>
                <td>${product.tenSP}</td>
                <td>${product.gia}</td>
                <td>
                    <img src="${
                      product.hinhAnh
                    }" style="width: 80px; height: 80px" />
                </td>
                <td>${product.moTa}</td>
                <td>
                    <button class="btn btn-success" onclick="editProduct('${
                      product.id
                    }')">Xem</button>
                    <button class="btn btn-danger" onclick="deleteProduct('${
                      product.id
                    }')">Xoá</button>
                </td>
            </tr>
        `;
  });
  getEle('tblDanhSachSP').innerHTML = content;
}


function setLocalStorage(listProduct) {
    localStorage.setItem('listProduct', JSON.stringify(listProduct));
}

function getLocalStorage() {
    if (localStorage.getItem('listProduct')) {
        return JSON.parse(localStorage.getItem('listProduct'));
    }
}