async function ambilData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/999");

        if (!response.ok) {
            // response.ok itu true kalau status code 200-299, false kalau di luar itu
            console.log("Gagal ambil data, status:", response.status);
            return;
        }

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Terjadi error:", error.message);
    }
}

ambilData();