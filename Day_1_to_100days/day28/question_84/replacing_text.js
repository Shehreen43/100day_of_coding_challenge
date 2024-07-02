//            QUESTION : 84
/*
Replacing Text in a String: Write a function that takes a sentence and replaces all instances of the word `JavaScript` with `TypeScript`.
*/
function replacing_text(sentence) {
    return sentence.replace(/Javascript/g, "Typescript");
}
console.log(replacing_text("I am starting learn about Javascript. Javascript is a awesome and i love Javascript."));
