// DOM elements


var userLengthInput = prompt("enter a value between 8 and 126")

while(parseInt(userLengthInput) < 8 && parseInt(userLengthInput) > 128) {
    var userLengthInput = prompt("False choice. Enter a value between 8 and 126")
}

// broken: function () {
//     alert("You can't drive your car anymore, it needs a tune up. Press t")
//     while(letter.toLowerCase() != 't') {
//         letter = prompt('You need to press t')
//     }
//     this.isWorking = true  
// }


const length = userLengthInput

alert(length)





// const randomChar = {
//     lower: getRandomLower,
//     upper: getRandomUpper,
//     number: getNumbers,
//     specialchar: getRandomSpecialChar
// }



// // Function Character Generators https://www.owasp.org/index.php/Password_special_characters

// function getRandomLower () {
//     const randomNumber = Math.floor(Math.random() * 26 + 97)
//     console.log(String.fromCharCode(randomNumber))
// }

// function getRandomUpper () {
//     const randomNumber = Math.floor(Math.random() * 26 + 65)
//     console.log(String.fromCharCode(randomNumber))
// }

// function getNumbers () {
//     const randomNumber = Math.floor(Math.random() * 10 + 48)
//     console.log(String.fromCharCode(randomNumber))
// }

// function getRandomSpecialChar () {
//     const randomNumber = Math.floor(Math.random() * 15 + 33)
//     console.log(String.fromCharCode(randomNumber))
// }








// let randomNumber = Math.floor(Math.random() * 26 + 97)

// console.log(randomNumber)

// console.log(String.fromCharCode(randomNumber))