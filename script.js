// Assignment Code
var generateBtn = document.querySelector("#generate");
var generatePswrd = document.getElementById("password")


// Write password to the #password input
function writePassword() {

  var passwordText = document.querySelector("#password");
  var passwordLength = 18;
  passwordText.value = password;
  


}

function makePass(chars, num) {

  var chars = [1,2,3,4,5,6,7,8,9,0,'q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m','Q','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M','!','@','#','$','%','^','&','*','(',')'];
  document.getElementById("password").innerHTML= (chars[(Math.floor(Math.random() * chars.length))]);
  document.getElementById("password").innerHTML= (chars[(Math.floor(Math.random() * chars.length))]);
  document.getElementById("password").innerHTML= (chars[(Math.floor(Math.random() * chars.length))]);
  document.getElementById("password").innerHTML= (chars[(Math.floor(Math.random() * chars.length))]);
  document.getElementById("password").innerHTML= (chars[(Math.floor(Math.random() * chars.length))]);
  document.getElementById("password").innerHTML= (chars[(Math.floor(Math.random() * chars.length))]);
  document.getElementById("password").innerHTML= (chars[(Math.floor(Math.random() * chars.length))]);
  document.getElementById("password").innerHTML= (chars[(Math.floor(Math.random() * chars.length))]);
  document.getElementById("password").innerHTML= (chars[(Math.floor(Math.random() * chars.length))]);
  document.getElementById("password").innerHTML= (chars[(Math.floor(Math.random() * chars.length))]);
  document.getElementById("password").innerHTML= (chars[(Math.floor(Math.random() * chars.length))]);
  document.getElementById("password").innerHTML= (chars[(Math.floor(Math.random() * chars.length))]);
  document.getElementById("password").innerHTML= (chars[(Math.floor(Math.random() * chars.length))]);
  document.getElementById("password").innerHTML= (chars[(Math.floor(Math.random() * chars.length))]);
  document.getElementById("password").innerHTML= (chars[(Math.floor(Math.random() * chars.length))]);
  document.getElementById("password").innerHTML= (chars[(Math.floor(Math.random() * chars.length))]);
  document.getElementById("password").innerHTML= (chars[(Math.floor(Math.random() * chars.length))]);
  document.getElementById("password").innerHTML= (chars[(Math.floor(Math.random() * chars.length))]);
  
}
// Add event listener to generate button
generateBtn.addEventListener("click", makePass);


var chars = [1,2,3,4,5,6,7,8,9,0,'q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m','Q','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M','!','@','#','$','%','^','&','*','(',')'];
document.getElementById("password").innerHTML= (chars[(Math.floor(Math.random() * chars.length))]);

var chars = [1,2,3,4,5,6,7,8,9,0,'q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m','Q','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M','!','@','#','$','%','^','&','*','(',')'];
document.getElementById("password").innerHTML= (chars[(Math.floor(Math.random() * chars.length))]);