//               QUESTION: 77
/*
Default Parameters: Write a function that greets a user. It should take the users name as a parameter and say hello.
 If no name is given, it should greet an anonymous user.
*/
function greetUser(name) {
    if (name === void 0) { name = "Anonymous"; }
    return "Hello, ".concat(name, "!");
}
// Examples
console.log(greetUser("Alice")); // Output: Hello, Alice!
console.log(greetUser()); // Output: Hello, Anonymous!
