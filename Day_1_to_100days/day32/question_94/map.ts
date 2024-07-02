//                  QUESTION: 94
/*
Use the .map() method to create a new array that contains the length of each word from an array of words.
*/
function getWordLengths(words: string[]): number[] {
    return words.map(word => word.length);
}

// Example usage
let names = ["Shehreen", "Noureen", "Asma", "", "Iqra", "Awais"];
let arrayLengths = getWordLengths(names);

console.log(arrayLengths); // Output: [ 8, 7, 4, 0, 4, 5 ]



