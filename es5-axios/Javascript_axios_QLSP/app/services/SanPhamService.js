function SanPhamService() {

}

SanPhamService.prototype.getProductsApi = function() {
    // GET: lấy dữ liệu từ server
    // axios sẽ trả về 1 promise
    return axios({
        url: 'https://60e023e46b689e001788c8eb.mockapi.io/products',
        method: 'GET',
    });
}