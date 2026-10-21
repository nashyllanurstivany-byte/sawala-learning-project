// 1. Tipe Data Dasar
let nama: string = "Nashylla";
let umur: number = 17;
let sudahLulus: boolean = false;

// 2. Array dengan tipe
let hobi: string[] = ["olahraga", "memasak", "membaca"];

// 3. Interface - "cetakan" bentuk object
export interface Siswa {
    nama: string;
    umur: number;
    jurusan: string;
}

// 4. Function dengan tipe parameter dan return value
export function sapaSiswa(siswa: Siswa): string {
    return `Halo, ${siswa.nama}, dari jurusan ${siswa.jurusan}!`;
}

