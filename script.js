// Assignment Code
var generateBtn = document.querySelector("#generate");






//Generate password
function generatePassword() {
  alert('test')
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// GENERATE FUNCTIONS

function getRandomLower() {

  console.log(String.fromCharCode(100))


}
