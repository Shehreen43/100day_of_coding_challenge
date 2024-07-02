//                        QUESTION: 67
/*
Arithmetic with Mixed Types: Write a function that takes two parameters: a number and a string that represents a number (e.g., `5`).
 Return their sum as a number.
*/
function addNumbers(num1: number, num2: string): number {
  // Convert the string representation of the number to a number
  const num2AsNumber = parseInt(num2);

  // Check if the conversion was successful
  if (isNaN(num2AsNumber)) {
    console.log('Invalid input: second parameter must be a number');
  }

  // Return the sum of the two numbers
  return num1 + num2AsNumber;
} 

addNumbers(5, "10");
//addNumbers(10, "two");