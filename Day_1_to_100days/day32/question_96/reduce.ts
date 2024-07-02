//                 QUESTION: 96
/*
Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.
*/

function calculateSumOfArray(arr: number[]): number {
  return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

let number = [1, 2, 3, 4, 5];
let results = calculateSumOfArray(number);
console.log('Sum of Array: ',results);