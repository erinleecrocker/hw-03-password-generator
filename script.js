// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); {
}

//password criteria 

function generatePassword() {

  
  var passwordLength = prompt("How many characters? Choose between 8 and 128");
  console.log(passwordLength);
  
  if (passwordLength < 8 || passwordLength > 128) {
    alert("You must choose between 8 and 128.")
  }else {
    confirmUppercase = confirm("Will this contain Uppercase letters?");
    console.log(confirmUppercase);
    confirmLowercase = confirm("Will this contain Lowercase letters?");
    console.log(confirmLowercase)
    confirmNumber = confirm("Will this contain numbers?");
    console.log(confirmNumber);
    confirmSpecialCharacter = confirm("Will this contain special characters?");
    console.log(confirmSpecialCharacter);
    
    
};
  

  //var passwordLowerCrit = prompt ("Include lowercase characters?");
  //console.log(passwordLowerCrit)
  //var passwordUpperCrit = prompt ("Include uppercase characters?");
  //console.log(passwordUpperCrit)
  //var passwordNumCrit = prompt ("Include numeric characters?");
  //console.log(passwordNumCrit)
  //var passwordSpecialCrit = prompt ("Include special characters?");
  //console.log(passwordSpecialCrit)
}