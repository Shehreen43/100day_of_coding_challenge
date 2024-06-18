//                 QUESTION: 70
/*
Understanding let in Loops: Write a function that uses a loop with the let keyword to print numbers from 1 to 5.
 Explain how the let keyword affects the visibility of the loop variable.
*/
function printNumbers() {
    for (let i = 1; i <= 5; i++) {

         console.log(i);

    }
    // console.log(i); // This will cause an error because i is not defined outside the loop
  };
  
  console.log(printNumbers());
  