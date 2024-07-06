//                      QUESTION: 108
/*
Compare two strings to check if they are identical, ignoring case sensitivity.
*/
// This function compares two strings, ignoring case sensitivity.
function areStringsEqualIgnoreCase(str1, str2) {
    return str1.toLowerCase() === str2.toLowerCase();
}
;
console.log(areStringsEqualIgnoreCase('hello', 'Hello'));
console.log(areStringsEqualIgnoreCase('word', 'World'));
