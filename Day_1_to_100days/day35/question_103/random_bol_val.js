//                          QUESTION: 103
/*
Write a function that returns a random boolean value, true or false.
*/
//This function return random boolean value
function getRandomBol() {
    return Math.random() > 0.5;
    // return true if random value is greater than 0.5
}
;
console.log(getRandomBol());
