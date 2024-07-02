//             QUESTION: 42
/*
Great Magicians: Start with a copy of your program from Exercise 39.
Write a function called make_great() that modifies the array of magicians by adding
the phrase the Great to each magician’s name. Call show_magicians() to
see that the list has actually been modified.
*/
// Define an array of modifies magician names
let magiciancs:string[] = ["David Copperfield", "Alice", "Chris"]
  
// Define the function show_magicians which takes an array of strings as input and prints each string
function show_magicians(magiciance:string[]):void {
    magiciancs.forEach(magiciance => console.log(magiciance));
    };
    show_magicians(magiciancs);

// Define the function make_great which modifies the array of magicians by adding "the Great" to each magician's name
function make_great(magiciancs:string[]) {
    for (let i = 0; i < magiciancs.length; i++) {
         magiciancs[i] = "The great " + magiciancs[i];
    }
};
make_great(magiciancs); // Modifies the original array
show_magicians(magiciancs); // Shows modified names
