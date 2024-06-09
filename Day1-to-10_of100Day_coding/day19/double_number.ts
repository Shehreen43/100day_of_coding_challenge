//                        QUESTION :55
/*
Question 55: Double Numbers in an Array: Make a list of numbers.
 Then, use a trick to make a new list where each number is twice its original value.
*/
// Make a list of numbers.
let numbers: number[] = [1, 2, 3, 4, 5];

// Make a new list where each number is twice its original value.
let doubleNumbers: number[] = numbers.map(num => num * 2);

console.log(`List Of Original Number: ${numbers}`);

console.log(`List Of Double Number: ${doubleNumbers}`);




