// Assignment code here

// create criteria options
const lowerCaseObj = {
  string: "lower case",
  chars: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
  selected: false
};

const upperCaseObj = {
  string: "upper case",
  chars: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
  selected: false
};

const numericObj = {
  string: "numeric",
  chars: [0,1,2,3,4,5,6,7,8,9],
  selected: false
};

const specialObj = {
  string: "special",
  chars: [" ","!","\"","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"],
  selected: false
};

// choose character at random
const chooseRandom = max => {
  Math.floor(Math.random()*max);
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
  generatePassword(selectedCriteria);
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", passwordCriteriaHandler);
