// Assignment code here
function generatePassword() {
    var length = 0;
    var lowercase = false;
    var uppercase = false;
    var numeric = false; 
    var special = false; 


length = prompt("Enter the numeric length of your passcode. It must be between 8 and 128 character.");
if(length<8 || length>128){
    alert("Enter a password that is at least 8 characters and no more than 128 characters.");
    return "";
}

numeric = confirm("Would you like your password to contain numeric characters? Please click OK for yes or cancel for No");
special = confirm("Would you like your password to contain special characters? Please click OK for yes or cancel for No");
lowercase = confirm("Would you like your password to contain any special characters? Please click OK for yes or cancel for No");
uppercase = confirm("Would you like your password to contain any uppercase characters? Please click OK for yes or cancel for No");

if(!numeric && !special && !lowercase && !uppercase) {
    alert("You must choose at least one type of character to generate your password!");
    return "";
}

var numberChs = "0123456789";
var specialChs = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var lowerChs = "abcdefghijklmnopqrstuvwxyz";
var upperChs = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var chosenChs = "";
if(numeric){
    chosenChs += numberChs;
}

if(special) {
    chosenChs += specialChs;
}

if(uppercase) {
    chosenChs += upperChs;
}

if(lowercase) {
    chosenChs += lowerChs;

}


var code = "";
for (var i=0; i<length; i++) {
    var randomCode = Math.floor(Math.random() * chosenChs.length);
    code += chosenChs[randomCode];
}

return code;
};

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
 var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
