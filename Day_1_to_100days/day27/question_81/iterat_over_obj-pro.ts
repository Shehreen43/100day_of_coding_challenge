//
/*
Iterating Over Object Properties: Write a function that takes an object as an argument and logs all of its properties and values.
*/

function iteratingObj_Prop(obj : object) {
    for (const property in obj ) {
        console.log(`${property} : ${obj[property]}`); // show the property name and its value 
    }
};


type iteratingObj_Prop = {
    make : 'Toyota',
    model : 'Corolla',
    year : 2020,
    color : 'Blue'
}

