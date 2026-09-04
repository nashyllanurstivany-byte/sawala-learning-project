const daftarSiswa = [
  { nama: "Sari", nilai: 90, kelas: "12 IPA" },
  { nama: "Budi", nilai: 65, kelas: "12 IPS" },
  { nama: "Andi", nilai: 78, kelas: "12 IPA" },
  { nama: "Rina", nilai: 55, kelas: "12 IPS" },
  { nama: "Dedi", nilai: 88, kelas: "12 IPA" }
];

// 1. Ambil hanya nama semua siswa (pakai map)
const namaSiswa = daftarSiswa.map(siswa => siswa.nama);
console.log("Nama semua siswa:", namaSiswa);

// 2. Cari siswa yang lulus (nilai >= 70) (pakai filter)
const siswaLulus = daftarSiswa.filter(siswa => siswa.nilai >= 70);
console.log("Siswa lulus:", siswaLulus);

// 3. Hitung rata-rata nilai (pakai reduce)
const totalNilai = daftarSiswa.reduce((total, siswa) => total + siswa.nilai, 0);
const rataRata = totalNilai / daftarSiswa.length;
console.log("Rata-rata nilai:", rataRata);

// 4. Cari siswa dengan nilai tertinggi (pakai find + urutkan, atau reduce)
const nilaiTertinggi = daftarSiswa.reduce((tertinggi, siswa) =>
  siswa.nilai > tertinggi.nilai ? siswa : tertinggi
);
console.log("Nilai tertinggi:", nilaiTertinggi);