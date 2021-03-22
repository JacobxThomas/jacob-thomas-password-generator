// user variables
var length;
var numbers;
var characters;
var uppercase;
var lowercase;
//global variables
var userSelection;

// alphabetical characters
var alphabetLowercase = "a b c d e f g h i j k l m n o p q r s t u v w x y z"
var alphabet = alphabetLowercase.split (' ');
// convert letters to uppercase 
var upperCase = function(capitalise) {
    return capitalise.toUpperCase();
};
// variable for uppercase characters
var alphabetUppercase = alphabet.map(upperCase);
// numbers
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// special characters
var character = ["!", "@", "#", "$", "%", "&", "*", "_", "-", "=", "+", "~", ">", "<", "[", "]", "{", "}", "|"]

// generate button assigned to variable generateBtn
var generateBtn = document.querySelector('#generate')
// event listener for generateBtn
generateBtn.addEventListener("click", function() {
    // when the button is clicked, run function generatePassword and insert text into id="password"
    password = generatePassword();
    document.getElementById("password").placeholder = password;
});

//function to generate password
function generatePassword() {
    
    //parseInt makes the output a number
    var passwordLength = parseInt(prompt("Number of characters: 8 - 128", "8")); 
    
    if (!passwordLength) {
        //if input isnt a number display this error alert
        alert("Error: Must input a number")
    } else if (passwordLength < 8 || passwordLength > 128) {
        //if the number isn't between 8-128 display this error alert
        passwordLength = parseInt(prompt("Error: You must choose a number between 8-128"));
    } else {
        // prompts for the user to select the parameters of the password
        numbers = confirm("Would you like to include numbers? (cancel for no)");
        characters = confirm("Would you like to include symbols? (cancel for no)");
        confirmUpper = confirm("Would you like to include uppercase characters? (cancel for no)");
        lowercase = confirm("Would you like to include lowercase characters? (cancel for no)");
    };

    //if statements for different user selections

    //4 negative selections
    if (!numbers && !characters && !confirmUpper && !lowercase) {
        userSelection = alert("You must choose at least one character type!");
    }
    //4 positive selections
    else if (numbers && characters && confirmUpper && lowercase) {
        userSelection = character.concat(numbers, alphabet, alphabetUppercase)
    }
    //3 positive selections
    else if (numbers && characters && lowercase){
        userSelection = character.concat(numbers, alphabet)
    } else if (numbers && characters && confirmUpper){
        userSelection = character.concat(numbers, alphabetUppercase)
    } else if (numbers && confirmUpper && lowercase){
        userSelection = numbers.concat(alphabet, alphabetUppercase)
    } else if (characters && confirmUpper && lowercase){
        userSelection = character.concat(alphabet, alphabetUppercase)
    }
    //2 positive selections
    else if (numbers && characters){
        userSelection = numbers.concat(character)
    } else if (numbers && confirmUpper){
        userSelection = numbers.concat(alphabetUppercase)
    } else if (numbers && lowercase){
        userSelection = numbers.concat(alphabet)
    } else if (characters && confirmUpper){
        userSelection = character.concat(alphabetUppercase)
    } else if (characters && lowercase){
        userSelection = character.concat(alphabet)
    } else if (confirmUpper && lowercase){
        userSelection = alphabet.concat(alphabetUppercase);
    }
    //1 positive selection
    else if (numbers) {
        userSelection = numbers;
    } else if (characters) {
        userSelection = character;
    } else if (lowercase) {
        userSelection = alphabet
    } else if (confirmUpper) {
        userSelection = alphabetUppercase;
    }
    //variable for an empty array to store final password
    var finalPassword = [""];
    //randomly select characters based on userSelection
    for (var i = 0; i < passwordLength; i++) {
    var randomPassword = userSelection[Math.floor(Math.random() * userSelection.length)];
    //.push adds the array passed to it to the empty array assigned to finalPassword
    finalPassword.push(randomPassword);
    }

    //.join gets the returned array from finalPassword and joins them together
    var password = finalPassword.join('');
    
    userInput(password);
    return password;
}
//inputs the password into the element password
function userInput(password) {
    document.getElementById("password").textContent = password;
}
