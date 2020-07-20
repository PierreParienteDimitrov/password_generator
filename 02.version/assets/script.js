// DOM Elements
var generateBtnEl = document.querySelector('#generateBtn')

// Defining Arrays
const lowercaseCharCode = lowerToHigh(97,122)
const uppercaseCharCode = lowerToHigh(65,90)
const numberCharCode = lowerToHigh(48,57)
const symbolCharCode = lowerToHigh(33,47).concat(lowerToHigh(58,64)).concat(lowerToHigh(91,96)).concat(lowerToHigh(123,126))

// console.log(lowercaseCharCode)
// console.log(symbolCharCode)

// Generate Password
function generatePassword() {
    
    // Ask user choices
    const getLength = charLength()
    const getUppercase = confirm('Do you want to use lowercases?')
    const getNumbers = confirm('Do you want to use numbers?')
    const getSymbols = confirm('Do you want to use symbols?')
    
    // Defining the array of characters. Lowercase is default.
    let charCodes = lowercaseCharCode
    if(getUppercase) charCodes = charCodes.concat(uppercaseCharCode)
    if(getNumbers) charCodes = charCodes.concat(numberCharCode)
    if (getSymbols) charCodes = charCodes.concat(symbolCharCode)

    // Initializing password characters array
    const passwordCharacter = []
    for (let i = 0; i < getLength; i++) {
        var characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
        passwordCharacter.push(String.fromCharCode(characterCode))
    }
    return passwordCharacter.join('')
}

// Generate character code arrays
function lowerToHigh(low, high) {
    var charCodeArr = []
    for(let i = low; i <= high; i++) {
        charCodeArr.push(i)
    }
    return charCodeArr
}

// Ask user input for password length
function charLength() {
    var userInput
    do {
        userInput = prompt('Please chose a password length between 8 and 128 characters.')
        } while (parseInt(userInput) < 8 || parseInt(userInput) > 128 || isNaN(parseInt(userInput)))
    return userInput
}

// Write Password
function writePassword() {
    var finalPassword = generatePassword()
    var passwordEl = document.querySelector('#password')
    passwordEl.value = finalPassword
}

// Event listener
generateBtnEl.addEventListener('click', writePassword)


