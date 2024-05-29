//                  QUESTION: 3
/*
Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
*/

let Name:string = 'Shehreen';
//print the name in lowerCase.
console.log('LowerCase:',Name.toLowerCase());

//print the name in upperCase.
console.log('UpperrCase:',Name.toUpperCase());

//print the name in titleCase
console.log('TitleCase:',Name.charAt(0).toUpperCase() + Name.slice(1).toLowerCase());

