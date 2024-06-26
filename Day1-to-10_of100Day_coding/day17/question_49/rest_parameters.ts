//                              QUESTION: 49
//Function with Rest Parameters: Write a function that takes a rest parameter representing multiple hobbies.
// It should log each hobby with a statement saying you enjoy that hobby.

function logsHobbies(...hobbies: string[]) {
    for (const hobby of hobbies) {
        console.log(`I Enjoy ${hobby}.`); 
    }
}
logsHobbies("reading", "painting", "coding");

/* 
output:
I enjoy reading.
I enjoy painting.
I enjoy coding.

*/