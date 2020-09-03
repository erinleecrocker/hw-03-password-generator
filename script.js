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

  var UppercaseChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  console.log(UppercaseChar);
  var LowercaseChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  console.log(LowercaseChar);
  var NumberChar = [0,1,2,3,4,5,6,7,8,9];
  console.log(NumberChar);
  var SpecialChar = ["!","?"];
  console.log(SpecialChar);
  
  // How many Characters in password prompt
  var passwordLength = prompt("How many characters would you like your password to contain? Choose between 8 and 128");
    // Loop back if outside of range
    while (passwordLength < 9 || passwordLength > 129) {
      alert("You must choose between 8 and 128");
      var passwordLength = (prompt("How many characters would you like your password to contain?"));
    }  
  //if correct confirm ok or cancel for other password specifications
  console.log(passwordLength);
  confirmUppercase = confirm("Will this contain Uppercase letters?");
  console.log(confirmUppercase)
  confirmLowercase = confirm("Will this contain Lowercase letters?");
  console.log(confirmLowercase)
  confirmNumber = confirm("Will this contain numbers?");
  console.log(confirmNumber);
  confirmSpecialCharacter = confirm("Will this contain special characters?");
  console.log(confirmSpecialCharacter);
  // Loop back if nothing is chosen
    while (!confirmUppercase && !confirmLowercase && !confirmNumber && !confirmSpecialCharacter){
      alert("You need to select at least one character type.");
      confirmUppercase = confirm("Will this contain Uppercase letters?");
      confirmLowercase = confirm("Will this contain Lowercase letters?");
      confirmNumber = confirm("Will this contain numbers?");
      confirmSpecialCharacter = confirm("Will this contain special characters?");
    }
  
};
  

  //var passwordLowerCrit = prompt ("Include lowercase characters?");
  //console.log(passwordLowerCrit)
  //var passwordUpperCrit = prompt ("Include uppercase characters?");
  //console.log(passwordUpperCrit)
  //var passwordNumCrit = prompt ("Include numeric characters?");
  //console.log(passwordNumCrit)
  //var passwordSpecialCrit = prompt ("Include special characters?");
  //console.log(passwordSpecialCrit)
