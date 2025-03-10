// Ini file javascript
function replaceName() {
  let name = prompt("Masukkan Nama Anda?", "");
  document.getElementById("name-user").innerHTML = name;
}

replaceName();

// document.getElementById("tombol").addEventListener("click", function () {
//   replaceName();
// });

function setSenderUI(name, birthDate, gender, messages) {
  document.getElementById("sender-full-name").innerHTML = name;
  document.getElementById("sender-birth-date").innerHTML = birthDate;
  document.getElementById("sender-gender").innerHTML = gender;
  document.getElementById("sender-messages").innerHTML = messages;
}

function validateForm() {
  const name = document.forms["message-form"]["full-name"].value;
  const birthDate = document.forms["message-form"]["birth-date"].value;
  const gender = document.forms["message-form"]["gender"].value;
  const messages = document.forms["message-form"]["messages"].value;

  if (name == "" || birthDate == "" || gender == "" || messages == "") {
    alert("Semua field harus diisi!");
    return false;
  }

  setSenderUI(name, birthDate, gender, messages);

  return false;
}
