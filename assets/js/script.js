// Assignment code here

// create criteria options
const lowerCaseObj = {
  string: "lower case",
  chars: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
};

const upperCaseObj = {
  string: "upper case",
  chars: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
};

const numericObj = {
  string: "numeric",
  chars: [0,1,2,3,4,5,6,7,8,9]
};

const specialObj = {
  string: "special",
  chars: [" ","!","\"","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"]
};

// choose character at random
const chooseRandom = max => {
  return Math.floor(Math.random()*max);
}

// Create password criteria
const passwordCriteriaHandler = () => {
  // criteria options
  let criteria = [lowerCaseObj,upperCaseObj,numericObj,specialObj];
  let selectedCriteria = [];
  
  for (let obj of criteria){
    // check what criteria options to add
    let addObj = confirm(`Would you like to add ${obj.string} characters to your password? Cancel to skip.`);

    if(addObj) {
      selectedCriteria.push(obj.chars);
    }

  }
  
  // verify selection was made
  if(!selectedCriteria.length) {
    alert("You must select at least one character set.");
    passwordCriteriaHandler();
  }
  // pass on selected criteria
  return generatePassword(selectedCriteria);
}

// get password length
const getPasswordLength = () => {
  passwordLength = parseFloat(prompt("How many character would you like your password? Must be between 8 and 128 characters."));
  if(passwordLength < 8 || passwordLength > 128) {
    alert("Password must be between 8 and 128 charcters!");
    passwordLength = getPasswordLength();
    return passwordLength;
  } else if (!passwordLength) {
    alert("Numbers Only!");
    passwordLength = getPasswordLength();
    return passwordLength;
  } else {
    return passwordLength;
  }
}

// generate password
const generatePassword = selectedCriteria => {
  // choose password length
  let passwordLength = getPasswordLength();
  let createdPassword = [];

  if (selectedCriteria.length > 1) {
    for (let i = 0; i < passwordLength; i++){
      // choose random charcter set then random character
      let charSetSelected = selectedCriteria[chooseRandom(selectedCriteria.length)];
      let charSelected = charSetSelected[chooseRandom(charSetSelected.length)];
      
      createdPassword.push(charSelected);
    }
  } else {
    for(let i = 0; i < passwordLength; i++){
      // choose random character
      let charSelected = selectedCriteria[0][chooseRandom(selectedCriteria[0].length)];

      createdPassword.push(charSelected);
    }
  };
  return createdPassword.join('');
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var password = passwordCriteriaHandler();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

