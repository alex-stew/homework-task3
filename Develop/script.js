// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function userInputCriteria(){
  var length = prompt("How long would you like your new password to be? ");
  if (length < 8 || length >128){
    alert("You have choosen an invalid length for your new password, please input a number between 8 and 128.");
    return""
  }
  else {
    var lowerCase = confirm("Include lower-case letters? ");
    var upperCase = confirm("Include upper-case letters? ");
    var special = confirm("Include special characters? ");
    var numeric = confirm("include numerical characters? ");
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", userInputCriteria);
