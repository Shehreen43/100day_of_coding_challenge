//                           QUESTION: 56
/*
Question 56: Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.
*/   
//Store a mix of different types of items.
let mixed_array = ["hello", 1, "world", 2, true, , {name: 'shehreen'},"typescript", 3];

//Pick out only the words.
let only_strings = mixed_array.filter(
  (item) => typeof item === "string"
);

// Print the only the words.
console.log(only_strings);

