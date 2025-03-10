// Ini file javascript
function replaceName() {
  let name = prompt("Masukkan Nama Anda?", "");
  document.getElementById("name").innerHTML = name;
}

replaceName();

document.getElementById("tombol").addEventListener("click", function () {
  replaceName();
});
