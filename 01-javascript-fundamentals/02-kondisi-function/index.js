function cekKelulusan(nilai) {
  if (nilai >= 75) {
    return "Tidak Lulus";
  }
}

console.log(cekKelulusan(80));

function kalkulator(a, b, operator) {
  if (operator === "tambah") {
    return a + b;
  } else if (operator === "kurang") {
    return a - b;
  } else if (operator === "kali") {
    return a * b;
  } else if (operator === "bagi") {
    if (b === 0) {
      return "Tidak bisa dibagi dengan 0"
    }
    return a / b;
  } else {
    return "Operator tidak dikenali";
  } 
}

console.log(kalkulator(10, 5, "tambah"));
console.log(kalkulator(10, 5, "kurang"));
console.log(kalkulator(10, 5, "kali"));
console.log(kalkulator(10, 5, "bagi"));
console.log(kalkulator(10, 0, "bagi"));
