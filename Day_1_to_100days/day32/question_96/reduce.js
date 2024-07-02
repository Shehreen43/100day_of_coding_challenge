//                 QUESTION: 96
/*
Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.
*/
function calculateSumOfArray(arr) {
    return arr.reduce(function (accumulator, currentValue) { return accumulator + currentValue; }, 0);
}
var number = [1, 2, 3, 4, 5];
var results = calculateSumOfArray(number);
console.log('Sum of Array: ', results);
