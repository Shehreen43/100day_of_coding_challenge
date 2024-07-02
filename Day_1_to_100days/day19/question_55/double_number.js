//                        QUESTION :55
/*
Question 55: Double Numbers in an Array: Make a list of numbers.
 Then, use a trick to make a new list where each number is twice its original value.
*/
// Make a list of numbers.
var numbers = [1, 2, 3, 4, 5];
// Make a new list where each number is twice its original value.
var doubleNumbers = numbers.map(function (num) { return num * 2; });
console.log("List Of Original Number: ".concat(numbers));
console.log("List Of Double Number: ".concat(doubleNumbers));
