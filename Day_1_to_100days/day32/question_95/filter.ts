//                  QUESTION: 95
/*
Write a function that uses the .filter() method to return an array of numbers greater than 10.
*/
function getNumbersGreaterThan10(numbers: number[]): number[] {
  return numbers.filter(num => num > 10);
}

let numbers = [1, 15, 10, 25, 9, 11, 2, 8];

let result = getNumbersGreaterThan10(numbers);
console.log(result); // Output: [15, 25, 11]

