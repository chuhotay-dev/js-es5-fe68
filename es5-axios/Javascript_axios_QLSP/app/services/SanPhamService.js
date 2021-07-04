function SanPhamService() {}

SanPhamService.prototype.getProductsApi = function () {
  // GET: lấy dữ liệu từ server
  // axios sẽ trả về 1 promise
  return axios({
    url: 'https://60e023e46b689e001788c8eb.mockapi.io/products',
    method: 'GET',
  });
};

SanPhamService.prototype.addProductApi = function (product) {
  // POST: thêm dữ liệu mới vào database
  // data: truyền dữ liệu cần thêm vào database
  return axios({
    url: 'https://60e023e46b689e001788c8eb.mockapi.io/products',
    method: 'POST',
    data: product,
  });
};

SanPhamService.prototype.deleteProductApi = function (id) {
  // DELETE: xoá data thông qua id
  return axios({
    url: `https://60e023e46b689e001788c8eb.mockapi.io/products/${id}`,
    method: 'DELETE',
  });
};

SanPhamService.prototype.getProductById = function (id) {
  return axios({
    url: `https://60e023e46b689e001788c8eb.mockapi.io/products/${id}`,
    method: 'GET',
  });
};

SanPhamService.prototype.updateProductApi = function (id, product) {
  return axios({
    url: `https://60e023e46b689e001788c8eb.mockapi.io/products/${id}`,
    method: 'PUT',
    data: product,
  });
};

SanPhamService.prototype.searchProduct = function (listProduct, keyword) {
    return listProduct.filter(function(product) {
        return product.tenSP.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
    });
}
