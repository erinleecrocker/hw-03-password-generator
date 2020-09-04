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

//---------------- Generate Password : 

function generatePassword() {
  //--------------password variables for criteria 
  var uppercaseChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  //console.log(uppercaseChar);
  var lowercaseChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  //console.log(lowercaseChar);
  var numberChar = [0,1,2,3,4,5,6,7,8,9];
  //console.log(numberChar);
  var specialChar = ["!", "@", "#", "$", "%", "^", "&","*"];
  //console.log(specialChar);
  var randomPassword = ""
  
  // --------------How many Characters in password prompt
  var passwordLength = prompt("How many characters would you like your password to contain? Choose between 8 and 128");
    //----------------- Loop back if outside of range
    while (passwordLength < 7 || passwordLength > 129) {
      alert("You must choose between 8 and 128");
      var passwordLength = (prompt("How many characters would you like your password to contain?"));
    } 


  console.log(passwordLength);
  //------------Confirm Uppercase, Lowercase, Number, and Special Characters
  confirmUppercase = confirm("Will this password contain uppercase characters?"); 
  console.log(confirmUppercase)
  confirmLowercase = confirm("Will this password contain lowercase characters?");
  console.log(confirmLowercase)
  confirmNumber = confirm("Will this password contain numbers?");
  console.log(confirmNumber);
  confirmSpecialCharacter = confirm("Will this password contain special characters?");
  console.log(confirmSpecialCharacter);
  //------------- Loop back if nothing is chosen
    while (!confirmUppercase && !confirmLowercase && !confirmNumber && !confirmSpecialCharacter){
      alert("You need to select at least one character type.");
      confirmUppercase = confirm("Will this password contain Uppercase letters?");
      confirmLowercase = confirm("Will this password contain Lowercase letters?");
      confirmNumber = confirm("Will this password contain numbers?");
      confirmSpecialCharacter = confirm("Will this password contain special characters?");
    }
      //---- idea: get a loop going runit until it reaches the password length have it assign each 
      //that has been approved by confirms?
  
  while (randomPassword.length < passwordLength) {
    
    if (confirmUppercase === true) {
      randomPassword += uppercaseChar[Math.floor(Math.random() * uppercaseChar.length)];
    }
    if (confirmLowercase === true) {
      randomPassword += lowercaseChar[Math.floor(Math.random() * lowercaseChar.length)];
    } 
    if (confirmNumber === true) {
      randomPassword += numberChar[Math.floor(Math.random() * numberChar.length)];
    }
    if (confirmSpecialCharacter === true) {
      randomPassword += specialChar[Math.floor(Math.random() * specialChar.length)]; 
    }
  }
  randomPassword = randomPassword.substr(0,passwordLength)
  return(randomPassword)
};




