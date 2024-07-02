//               QUESTION: 80
/*
Updating Object Properties: Add a property named `color` to the existing car object, and then update the `year` property to `2021`.
 Show how to perform these operations.
*/
//define type to the Car object
type Car = {
    make : string,
    model : string,
    year : number,
    color? : string // optional property
}

//define a _car object with initial properties
let _car : Car = {
    make : 'Toyota',
    model : 'Corolla',
    year : 2020
}
  
//add a new property color to the _car object
_car.color = 'red';

//update the `year` property to `2021`.
_car.year = 2021

//log _car object
console.log(_car); // { make: 'Toyota', model: 'Corolla', year: 2021, color: 'red' }
