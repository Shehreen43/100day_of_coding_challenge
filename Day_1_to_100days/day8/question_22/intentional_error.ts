//                   QUESTION:22
/*
Intentional Error:If you haven’t received an array index error in one of your programs yet, 
try to make one happen. Change an index in one of your programs to produce an index error.
 Make sure you correct the error before closing the program.
*/
// storing hobbies
let hobbies:string[] = ["reading", "writting", "painting"];

// Intentional error: Arrays are start frome zero-indexed, so index 3 is out of bounds.
console.log(`\n Intentional Error: ${hobbies[3]}`);

// Correcting the error by accessing a valid index.
console.log("After correcting the error:",hobbies[2]);