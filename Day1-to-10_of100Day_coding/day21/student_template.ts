//                               QUESTION: 62
/*
 Making a Student Template: Create a blueprint for student information, including their name, age, 
and the classes they're taking, and then fill in this blueprint with an example student.
*/
interface Student {
    name: string;
    age: number;
    classes: string[];
}

// Example student object
const exampleStudent: Student = {
    name: 'John Doe',
    age: 20,
    classes: [
        'Mathematics',
        'Computer Science',
        'Chemistry',
        'English Literature'
    ]
};

function printStudentInfo(student: Student): void {
    console.log(`Student Name: ${student.name}`);
    console.log(`Age: ${student.age}`);
    console.log('Classes:');
    student.classes.forEach((cls, index) => {
        console.log(`  ${index + 1}. ${cls}`);
    });
}

printStudentInfo(exampleStudent);
