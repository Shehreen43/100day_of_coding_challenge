//                        QUESTION: 59
/*
Question 59: Add a Special Number: Make a program that creates custom adders. These adders can add a specific number to any other number you give them later.
*/
//Making a program that creates custom adders.
 function create_adder(specificeNumber:number) : (numberToAdd : number) => number {
         return function(numberToAdd : number) : number {
             return specificeNumber + numberToAdd;
         }
}
//create adders
let add_five = create_adder(5);
let add_ten = create_adder(10);
let add_minusFive = create_adder(-5);

//using the created adders
console.log(`Add 3 to 5 : ${add_five(3)}`);
console.log(`Add 10 to 10 : ${add_ten(10)}`);
console.log(`Add 22 to -5 : ${add_minusFive(22)}`);