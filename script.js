//Assignemnt code here
var generateBtn = document.querySelector("#generate");

const specialCharacters = "!@#$%^&*()";



// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
    var numbers = false;
    var upperCase = false;
    var lowerCase = false;
    var special = false;
    var passwordLength = prompt("How long would you like the password to be? (Must be at least 8 characters and no more than 128)");
    while (passwordLength < 8 || passwordLength > 128){
      alert("password MUST be at least 8 characters and no more than 128");
      var passwordLength = prompt("How long would you like the password to be? (Must be at least 8 characters and no more than 128)")
    }

    numbers = confirm("Would you like the password to include numbers?");

    upperCase = confirm("Would you like to include upper case characters?");

    lowerCase = confirm("Would you like to include lower case characters?");

    special = confirm("Would you like to include special characters?");

    var randomFunctions = {
        getNumbers: function() {
            return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
        },

        getUpperCases: function(){
            return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
        },
        getLowerCases: function(){
            return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
        },
        getSpecial: function(){
            return specialCharacters[Math.floor(Math.random()* specialCharacters.length)]
        },
    };

    var functionNames = ["getNumbers", "getUpperCases", "getLowerCases", "getSpecial"];

    if (numbers === false){
      functionNames.splice(0, 1)
    }
  
    if (upperCase === false){
      functionNames.splice(1, 1)
    } 

    if (lowerCase === false){
      functionNames.splice(2, 1)
    }

    if (special === false){
      functionNames.splice(3, 1)
    } 
    var randomPassword = "";

    for (let i = 0; i< (parseInt(passwordLength)); i++) {
        var randomFunctionToCall = Math.floor(Math.random() * functionNames.length);
        var selectedRandomFunction = functionNames[randomFunctionToCall];
        randomPassword += randomFunctions[selectedRandomFunction]();
        
    }
    return randomPassword
  }
  