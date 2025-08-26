function hitung(operasi) {
  let a = document.getElementById("angka1").value;
  let b = document.getElementById("angka2").value;
  let hasil = document.getElementById("hasil");

  // reset animasi dulu
  hasil.classList.remove("slide-in");

  // Validasi input
  if (isNaN(a) || isNaN(b) || a.trim() === "" || b.trim() === "") {
    hasil.innerHTML = "<span class='error'>⚠ Harap masukkan angka yang valid!</span>";
    return;
  }

  a = parseFloat(a);
  b = parseFloat(b);

  let output;
  switch (operasi) {
    case '+':
      output = a + b;
      break;
    case '-':
      output = a - b;
      break;
    case '*':
      output = a * b;
      break;
    case '/':
      if (b === 0) {
        hasil.innerHTML = "<span class='error'>⚠ Tidak bisa dibagi dengan 0!</span>";
        return;
      }
      output = a / b;
      break;
    default:
      output = "Operasi tidak dikenal";
  }

  hasil.innerHTML = `Hasil: ${a} ${operasi} ${b} = <strong>${output}</strong>`;

  // tambahkan animasi slide-in
  setTimeout(() => {
    hasil.classList.add("slide-in");
  }, 10);
}

function resetInput() {
  document.getElementById("angka1").value = "";
  document.getElementById("angka2").value = "";
  document.getElementById("hasil").innerHTML = "";
}
