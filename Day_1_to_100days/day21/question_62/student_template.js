// Example student object
var exampleStudent = {
    name: 'John Doe',
    age: 20,
    classes: [
        'Mathematics',
        'Computer Science',
        'Chemistry',
        'English Literature'
    ]
};
function printStudentInfo(student) {
    console.log("Student Name: ".concat(student.name));
    console.log("Age: ".concat(student.age));
    console.log('Classes:');
    student.classes.forEach(function (cls, index) {
        console.log("  ".concat(index + 1, ". ").concat(cls));
    });
}
printStudentInfo(exampleStudent);
