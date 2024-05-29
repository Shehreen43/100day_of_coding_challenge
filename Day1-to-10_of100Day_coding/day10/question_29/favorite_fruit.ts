//            QUESTION:29
/*
 Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.

• Make an array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement,
such as You really like bananas!
*/

//Write five if statements
//Make an array of your three favorite fruits
let favorite_fruits:string[] = ['Apple', 'Peach', 'Mango'];
if (favorite_fruits.includes('Apple')) {
    console.log('\nYou really like Apple!');
};
 if (favorite_fruits.includes('Grapes')) {
    console.log('You really like Grapes!');
} ;
if (favorite_fruits.includes('Pinapple')) {
    console.log('You really like Pinapple!');
};
if (favorite_fruits.includes('Mango')) {
    console.log('You really like Mango!');
} ;
if (favorite_fruits.includes('Peach')) {
    console.log('You really like Peach!');
};