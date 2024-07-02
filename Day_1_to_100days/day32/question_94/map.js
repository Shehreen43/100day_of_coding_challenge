//                  QUESTION: 94
/*
Use the .map() method to create a new array that contains the length of each word from an array of words.
*/
function getWordLengths(words) {
    return words.map(function (word) { return word.length; });
}
// Example usage
var names = ["Shehreen", "Noureen", "Asma", "", "Iqra", "Awais"];
var lengthsArray = getWordLengths(names);
console.log(lengthsArray); // Output: 
