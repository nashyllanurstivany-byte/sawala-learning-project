// ==========================================
// Materi: Error Handling (try-catch-finally)
// ==========================================

// 1. Contoh dasar try-catch
try {
    const angka = 10;
    console.log(angka.toUpperCase()); // ERROR: number tidak punya method toUpperCase
    console.log("Baris ini tidak akan pernah jalan");
} catch (error) {
    console.log("Ada error:", error.message);
}

console.log("Program tetap lanjut ke sini walau ada error di atas");

console.log("---");

// 2. try-catch-finally
try {
    console.log("Mencoba sesuatu...");
    throw new Error("Sengaja dibuat gagal!");
} catch (error) {
    console.log("Ditangkap:", error.message);
} finally {
    console.log("Ini selalu jalan, error atau tidak");
}

console.log("---");

// 3. Custom error untuk validasi manual
function bagi(a, b) {
    if (b === 0) {
        throw new Error("Tidak bisa membagi dengan nol!");
    }
    return a / b;
}

try {
    console.log(bagi(10, 2));
    console.log(bagi(10, 0)); // ini yang bakal error
} catch (error) {
    console.log("Error:", error.message);
}

console.log("---");

// 4. Error handling dengan fetch (async)
async function ambilData(url) {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Request gagal, status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Data berhasil diambil:", data);
        return data;
    } catch (error) {
        console.log("Terjadi kesalahan saat fetch:", error.message);
        return null;
    }
}

// Coba dengan URL yang valid
ambilData("https://jsonplaceholder.typicode.com/users/1");

// Coba dengan URL yang sengaja salah (id tidak ada)
ambilData("https://jsonplaceholder.typicode.com/users/9999");


