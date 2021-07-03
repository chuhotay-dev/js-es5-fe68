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

var getProducts = function() {
    sanPhamService.getProductsApi()
        .then(function(res) {
            // Success
            console.log(res.data);
            renderTable(res.data);
        })
        .catch(function(err) {
            // Error
            console.log(err);
        })
}

getProducts();

function renderTable(products) {
    var content = '';
    products.forEach(function(product, index) {
        content += `
            <tr>
                <td>${index + 1}</td>
                <td>${product.tenSP}</td>
                <td>${product.gia}</td>
                <td>
                    <img src="${product.hinhAnh}" style="width: 80px; height: 80px" />
                </td>
                <td>${product.moTa}</td>
                <td>
                    <button class="btn btn-success">Xem</button>
                    <button class="btn btn-danger">Xoá</button>
                </td>
            </tr>
        `;
    });
    getEle('tblDanhSachSP').innerHTML = content;
}
