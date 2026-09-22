function tokoRoti(pesanan) {
    return new Promise(function (resolve, reject) {
        console.log("Pesanan sedang di proses...");

        setTimeout(() => {
            if (pesanan === "Roti Coklat") {
                resolve("Selamat menikmati pesanan Anda ><");
            } else {
                reject("Maaf, stok roti coklat sudah habis!.");
            }
        }, 1500);
    });
}

async function prosesPesanan() {
    try {
        const hasil = await tokoRoti("Roti Coklat");
        console.log(hasil);
    } catch (error) {
        console.log("Gagal pesan", error);
    } finally {
        console.log("Proses selesai!");
    }
}
prosesPesanan();  