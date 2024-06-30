//               QUESTION: 77
/*
Default Parameters: Write a function that greets a user. It should take the users name as a parameter and say hello.
 If no name is given, it should greet an anonymous user.
*/
function greetUser(name: string = "Anonymous"): string {
    return `Hello, ${name}!`;
}

// Examples
console.log(greetUser("Alice")); // Output: Hello, Alice!
console.log(greetUser());        // Output: Hello, Anonymous!
