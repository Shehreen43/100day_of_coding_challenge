"use strict";
//                   QUESTION: 114
/*
Iterate over a Map of student IDs and names, and log each pair to the console.
*/
const students = new Map();
students.set(1001, 'Ali');
students.set(1002, 'Sana');
students.set(1003, 'Afsa');
students.forEach((name, id) => {
    console.log(`Student ID: ${id}, Name: ${name}`);
});
