//                        QUESTION: 59
/*
Question 59: Add a Special Number: Make a program that creates custom adders. These adders can add a specific number to any other number you give them later.
*/
//Making a program that creates custom adders.
 function createAdder(specificeNumber:number) : (numberToAdd : number) => number {
         return function(numberToAdd : number) : number {
             return specificeNumber + numberToAdd;
         }
}
//create adders
let addFive = createAdder(5);
let addTen = createAdder(10);
let addMinusFive = createAdder(-5);

//using the created adders
console.log(`Add 3 to 5 : ${addFive(3)}`);
console.log(`Add 10 to 10 : ${addTen(10)}`);
console.log(`Add 22 to -5 : ${addMinusFive(22)}`);