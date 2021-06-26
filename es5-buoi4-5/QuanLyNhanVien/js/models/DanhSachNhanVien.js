function DanhSachNhanVien() {
    this.arr = [];

    this.themNhanVien = function(nhanVien) {
        this.arr.push(nhanVien);
    };

    this.timViTri = function(maNV) {
        /**
         * findIndex:
         * - Tìm thấy => trả về index
         * - Không tìm thấy => trả về -1
         */
       return this.arr.findIndex(function(nv) {
            return maNV === nv.maNV;
        });
    }

    this.xoaNhanVien = function(maNV) {
       var viTri = this.timViTri(maNV);
       if (viTri !== -1) {
           this.arr.splice(viTri, 1);
       }
    }
}