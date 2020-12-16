// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  var length = prompt("How long would you like your new password to be?");
    if (length < 8 || length >128){
      alert("You have choosen an invalid length, please input a length between 8 and 1128 characters.")
      return""
    }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
