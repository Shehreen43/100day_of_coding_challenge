//                         QUESTION: 57
/*
Question 57: Find the Average Grade: Given a list of grades, calculate the average grade.
*/

// Define an array of grades.
const _grades = [85, 92, 77, 88, 91];

// Calculates the average grade
const average_grade = _grades.reduce((total, grade) => total + grade, 0 )/ _grades.length;

// Shows the average grade
console.log(`The average grade is: ${average_grade}%`);