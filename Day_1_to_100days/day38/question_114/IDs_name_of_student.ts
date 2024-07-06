//                   QUESTION: 114
/*
Iterate over a Map of student IDs and names, and log each pair to the console.
*/
// Creates a Map to store student IDs (keys) and names (values)
const students = new Map<number, string>();
students.set(1001, 'Ali');
students.set(1002, 'Sana');
students.set(1003, 'Afsa');

// Iterates over the Map and logs each student ID and name
students.forEach((name, id) => {
    console.log(`Student ID: ${id}, Name: ${name}`);

})
