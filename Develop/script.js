// Assignment Code //
var generateBtn = document.querySelector("#generate");

// Write password to the #password input //
function writePassword(){
  var password = generatePassword()
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//user selected criteria and error messaging for incorrect inputs //
function generatePassword(){
  var length = prompt("How long would you like your new password to be? ");
  if (length < 8 || length >128){
    alert("You have choosen an invalid length for your new password, please input a number between 8 and 128. ");
    return (" ");
  }
  var lowerCase = confirm("Include lower-case letters? ");
  var upperCase = confirm("Include upper-case letters? ");
  var special = confirm("Include special characters? ");
  var numeric = confirm("include numerical characters? ");
  
  if(!upperCase && !lowerCase && !special && !numeric){
    alert("Ensure to select SOME character sets for me to work with...what do you want, a password made of air? ");
  }

  // adding the selected user inputs to a string variable based on confirm //
  var charSelect = (" ");
    if (lowerCase){
      charSelect+="abcdefghijklmnopqrxtuvyxyz";
    }
    if (upperCase){
      charSelect+="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (special){
      charSelect+="#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    }
    if (numeric){
      charSelect+="0123456789";
    }

  // adding a for loop to use the charSelect variable to randomly select for its avaliable list of characters and add them until they reach the determined password length //
  var password = (" ");
  
  for (var i=0; i<length; i++){
    var randomNum = Math.floor(Math.random() * (charSelect.length+1));
    password += charSelect[randomNum];
    console.log(password);
  }
  return password
}

// Add event listener to the generate button which calls the function, initiating the application //
generateBtn.addEventListener("click", writePassword);
