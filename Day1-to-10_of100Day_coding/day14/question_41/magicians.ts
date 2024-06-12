//          QUESTION: 41
/*
 Magicians: Make a array of magician’s names. Pass the array to a function
called show_magicians(), which prints the name of each magician in the array.
*/
let magiciancs:string[] = ["David Copperfield", "Alice", "Chris"]
  
function show_magicians(magiciance:string[]):void {
    magiciancs.forEach(magiciance => console.log('.',magiciance));
    };
    show_magicians(magiciancs);
