//                QUESTION:24
/*
More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests.
Have at least one True and one False result for each of the following:

• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array
*/

// More Conditional Tests: You don’t have to limit the number of tests you create to 10.)
let first_name:string = 'Qasim';
let last_name:string = 'Qadeer';

// Tests for equality and inequality with strings
console.log('\n Tests for equality and inequality with strings:');
console.log(first_name ==='Qasim');
console.log(first_name === last_name);
console.log('program' === 'program');
console.log(first_name == "qasim");

//Tests using the lower case function
console.log('\n Tests using the lower case function');
console.log(first_name.toLowerCase() == "qasim");
console.log(last_name.toLowerCase() !== "qadeer");

//Numerical tests involving equality and inequality
console.log('\n Numerical tests involving equality and inequality:');
let num1:number = 5
console.log(num1 === 5);
console.log(5 !== 5);

// Numerical tests greater than and less than, greater than or equal to
console.log('Test Greater than, 2 - 10 > 5:', 2 - 10 > 5);
console.log('Test less than,7 + 2 < 3:',7 + 2 < 3);
console.log('Test equal to 3 + 5 == 8:',3 + 5 == 8 );
//less than or equal to
console.log('less than or equal to  5 <= 3: ', 5 <= 3);

//Tests using "and" and "or" operators
console.log('\n Tests with "and" and "or".');
console.log(true && !false);
console.log(!true || false);
console.log(2 > 1 && 3<4);
console.log(2<0 || 0>2);

//Test whether an item is in a array ?
console.log('\nTest an item is in a array');
let items:string[] = ["sugar", "salt", "chees", "oil"];
console.log('Is "chees" in items ?',items.includes("chees"));
console.log('Is "milk" in items ?',items.includes("milk"));

//Test whether an item is not in a array ?
console.log('\nTest an item is not in a array');
console.log('Is "milk"not in items ?',!items.includes("milk"));
console.log('Is "sugar" not in items ?',!items.includes("sugar"));


