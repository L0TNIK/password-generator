const lowerCase = document.getElementById("lowerCase");
const upperCase = document.getElementById("upperCase");
const numbers = document.getElementById("numbers");
const specialCharacters = document.getElementById("specialCharacters");
const Password = document.getElementById("Password");

function generator() {
  let number = document.getElementById("number").value;
  number = Number(number);

  let generatedPassword = "";
  let allowedChars = "";
  Password.textContent = "";

  if (lowerCase.checked) {
    allowedChars += "abcdefghijklmnopqrstuvwxyz";
  }
  if (upperCase.checked) {
    allowedChars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (numbers.checked) {
    allowedChars += "1234567890";
  }
  if (specialCharacters.checked) {
    allowedChars += "!@#$%^&*()_-+=";
  }
  if (allowedChars.length === 0) {
    Password.textContent = "check at least 1 option";
    return;
  }
  console.log(allowedChars);

  for (let i = 0; i < number; i++) {
    let random = Math.floor(Math.random() * allowedChars.length);
    generatedPassword += allowedChars[random];
  }
  Password.textContent = "password: " + generatedPassword;
}
