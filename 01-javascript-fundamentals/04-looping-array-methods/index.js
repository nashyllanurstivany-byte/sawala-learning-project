// ==========================================
// Materi: Looping & Array Methods
// (map, filter, find, forEach, reduce)
// ==========================================

const daftarSiswa = [
  { nama: "Rina", nilai: 85 },
  { nama: "Andi", nilai: 60 },
  { nama: "Sinta", nilai: 90 },
  { nama: "Budi", nilai: 70 },
  { nama: "Dewi", nilai: 55 },
];

// forEach -> looping biasa, cetak tiap nama
daftarSiswa.forEach((siswa) => {
  console.log(siswa.nama);
});

// map -> bikin array BARU berisi cuma nama-nama siswa
const namaSiswa = daftarSiswa.map((siswa) => siswa.nama);
console.log(namaSiswa);

// filter -> bikin array BARU berisi siswa yang nilainya >= 75 (lulus)
const siswaLulus = daftarSiswa.filter((siswa) => siswa.nilai >= 75);
console.log(siswaLulus);

// find -> cari SATU siswa pertama yang cocok
const cariSinta = daftarSiswa.find((siswa) => siswa.nama === "Sinta");
console.log(cariSinta);

// reduce -> "meringkas" array jadi satu nilai (total nilai semua siswa)
const totalNilai = daftarSiswa.reduce((acc, siswa) => acc + siswa.nilai, 0);
console.log(totalNilai);

// bonus: hitung rata-rata pakai hasil reduce di atas
const rataRata = totalNilai / daftarSiswa.length;
console.log(rataRata);