function tambah(a, b) {
  return a + b;
}

function kurang(a, b) {
  return a - b;
}

function kali(a, b) {
  return a * b;
}

function bagi(a, b) {
  if (b === 0) {
    return "Tidak bisa dibagi nol";
  }
  return a / b;
}

function hitung(operasi) {
  const angka1 = parseFloat(document.getElementById("angka1").value);
  const angka2 = parseFloat(document.getElementById("angka2").value);

  if (isNaN(angka1) || isNaN(angka2)) {
    document.getElementById("hasil").textContent = "Hasil: Isi kedua angka dulu!";
    return;
  }

  let hasil;
  if (operasi === "tambah") hasil = tambah(angka1, angka2);
  else if (operasi === "kurang") hasil = kurang(angka1, angka2);
  else if (operasi === "kali") hasil = kali(angka1, angka2);
  else if (operasi === "bagi") hasil = bagi(angka1, angka2);

  document.getElementById("hasil").textContent = "Hasil: " + hasil;
}