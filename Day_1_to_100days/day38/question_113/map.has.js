"use strict";
//                     QUESTION: 113
/*
Write a function that checks if a Map contains a key for `Canada` and logs the capital if it exists.
*/
// Creates a new Map to store countries and their capitals
const countries = new Map();
countries.set("USA", "Washington D.C.");
countries.set("France", "Paris");
countries.set("Canada", "Ottawa");
function logCountriesCapitsl(country) {
    if (country.has('Canada')) {
        console.log(`The Capital of Canada is ${country.get('Canada')}`);
    }
    else {
        console.log("Canada is not found in the Map");
    }
}
;
//call the function 
logCountriesCapitsl(countries);
