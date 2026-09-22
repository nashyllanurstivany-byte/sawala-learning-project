function pesanMakanan(namaResto, restoBuka) {
    return new Promise((resolve, reject) => {
        console.log(`Memesan Makanan dari ${namaResto}...`);

        setTimeout(() => {
            if (restoBuka) {
                resolve(`Makanan dari ${namaResto} sudah sampai!`);
            } else {
                reject(`Maaf, ${namaResto} sedang tutup.`);
            }
        }, 2000);
    });
}

async function prosesPesanan() {
    try {
        const hasil = await pesanMakanan("Warung Bu Sari", true);
        console.log(hasil);
    } catch (error) {
        console.log("Gagal pesan:", error);
    }

    console.log("---");

    try {
        const hasil2 = await pesanMakanan("Resto XYZ", false);
        console.log(hasil2);
    } catch (error) {
        console.log("Gagal pesan:", error);
    } finally {
        console.log("Proses pesanan selesai")
    }
}

prosesPesanan();



