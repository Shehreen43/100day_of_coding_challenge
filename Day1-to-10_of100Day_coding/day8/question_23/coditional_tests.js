//                QUESTION: 23
/*
Print a statement describing each test and your prediction for the results of each test.
Your code should look something like this:

let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')

• Look closely at your results, and make sure you understand why each line evaluates to True or False.

• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
*/
// Write a series of conditional 10 tests which from atleast 5 true and 5 false .
let car = "shubaru";
// Test 1
console.log("Is car == 'shubaru'? I predicate true");
console.log(car == 'shubaru');
// Test 2
console.log("Is car == 'Toyoto'? I predicate false");
console.log(car == 'Toyoto');
// Test 3
console.log("Is car.length >0 ? I predicate true");
console.log(car.length > 0);
// Test 4
console.log("Is car.length < 5 ? I predicate false");
console.log(car.length < 5);
// Test 5
console.log("Is car.toUpperCase() == 'SHUBARU'? I predicate true");
console.log(car.toUpperCase() == 'SHUBARU');
//Test 6
console.log("Is car == 'SHUBARU'? I predicate false");
console.log(car == 'SHUBARU');
// Test 7
console.log("Is car.includes('u')? I predicate true");
console.log(car.includes('u'));
// Test 8
console.log("Is car.includes('v')? I predicate false");
console.log(car.includes('v'));
// Test 9
console.log("Is car.startswith('sh')? I predicate true");
console.log(car.startsWith('sh'));
//Test 10
console.log("Is car.endswith('sh')? I predicate false");
console.log(car.endsWith('sh'));
export {};
