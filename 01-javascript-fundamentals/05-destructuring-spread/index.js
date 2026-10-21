const siswa = {nama: "Nashylla", kelas: "XII", jurusan: "pplg"};

// Destructuring object -> "membongkar" object jadi variabel terpisah
const { nama, kelas } = siswa;
console.log(nama);
console.log(kelas);

const hobi = ["membaca", "menggambar", "coding"];

// Destructuring array -> ambil elemen berdasarkan urutan
const [hobiPertama, hobiKedua] = hobi;
console.log(hobiPertama);
console.log(hobiKedua);

// Spread operator pada array -> gabung array lama + elemen baru
// tanpa mengubah array aslinya
const hobiBaru = [...hobi, "olahraga"];
console.log(hobi);
console.log(hobiBaru);

// Spread operator pada object -> gabung/override object lama
const siswaBaru = {...siswa, jurusan: "Teknik Informaatika"};
console.log(siswa);
console.log(siswaBaru);
