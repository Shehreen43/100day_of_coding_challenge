//                        QUESTION :55
/*
Question 55: Double Numbers in an Array: Make a list of numbers.
 Then, use a trick to make a new list where each number is twice its original value.
*/
// Make a list of numbers.
let num: number[] = [1, 2, 3, 4, 5];

// Make a new list where each number is twice its original value.
let double_numbers: number[] = num.map(num => num * 2);

console.log(`List Of Original Number: ${num}`);

console.log(`List Of Double Number: ${double_numbers}`);




