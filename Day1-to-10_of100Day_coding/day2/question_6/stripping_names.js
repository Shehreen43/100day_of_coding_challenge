//                   QUESTION: 6
/*
 Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name.
 Make sure you use each character combination, "\t" and "\n", at least once.
 Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

*/
let nameWithWhitespace = "\t \n Muhammad Owais \n\t";
// Print the name with whitespace
console.log("Name with whitespace:", nameWithWhitespace);
// Strip whitespace and print the name
let strippedName = nameWithWhitespace.trim();
console.log("Stripped name:", strippedName);
export {};
