//           QUESTION:83
/*
Converting to Upper and Lower Case: Create a function that takes a string, converts it to uppercase, then to lowercase, and logs both.
*/

// Define a function that convert string into upercase and then into lowercase
function stringConvertCase(str : string) {

    return `Uppercase: ${str.toUpperCase()}, Lowercase: ${str.toLowerCase()}`
}

console.log(stringConvertCase('Hello, I am a Programar.'));