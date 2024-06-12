//           QUESTION: 37
/*
 Large Shirts: Modify the make_shirt() function so that shirts are large
by default with a message that reads I love TypeScript. Make a large shirt and a
medium shirt with the default message, and a shirt of any size with a different
message.
*/
//define function for make_shirt
function make_shirt(size = 'larg', message = 'I love code.') {
    console.log(`\nMaking a ${size} t-shirt with the message: '${message}'`);
}
;
//call the function with the larg shirt by defoult message
make_shirt();
//call the fuction with the medium shirt by defoult message
make_shirt('medium');
// Creating a small shirt with a different message
make_shirt('small', 'Keep calm and code on!');
export {};
