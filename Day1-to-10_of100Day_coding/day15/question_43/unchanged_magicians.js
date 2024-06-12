//           QUESTION: 43
/*
Unchanged Magicians: Start with your work from Exercise 40. Call the
function make_great() with a copy of the array of magicians’ names. Because the
original array will be unchanged, return the new array and store it in a separate array.
Call show_magicians() with each array to show that you have one array of the original
names and one array with the Great added to each magician’s name.
*/
//Define an array of modifies magician names
let magicians = ["David Copperfield", "Alice", "Chris"];
// Define the function show_magicians which takes an array of strings as input and prints each string
function show_magicians(magicians) {
    magicians.forEach(magician => console.log('-', magician));
}
;
// Define the function make_great which modifies the array of magicians by adding "the Great" to each magician's name
function make_great(magicians) {
    const greatMagicians = [];
    for (let i = 0; i < magicians.length; i++) {
        greatMagicians.push("The Great " + magicians[i]);
    }
    return greatMagicians;
}
;
const greatMagicians = make_great([...magicians]);
console.log("\n Original Megicians:");
show_magicians(magicians); //  the original names
console.log("\nThe Great Megicians:");
show_magicians(greatMagicians); // the show  modifies name with 'the great'
export {};
