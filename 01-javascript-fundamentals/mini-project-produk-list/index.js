import { produk } from "./data.js";

produk.forEach((item) => {
    console.log(item.nama);
});

function filterByKategori(kategori) {
    return produk.filter((item) => item.kategori === kategori);
}
function cariProduk(keyword) {
    return produk.filter((item) => item.nama.toLowerCase().includes(keyword.toLowerCase()));
}
console.log(filterByKategori("Fashion"));
console.log(cariProduk("kopi"));