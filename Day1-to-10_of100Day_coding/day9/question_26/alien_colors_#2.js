//                  QUESTION: 26
/*
 Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and
write an if-else chain.

• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

• If the alien’s color isn’t green, print a statement that the player just earned 10 points.

• Write one version of this program that runs the if block and another that runs the else block.
*/
// an if-else chain.)
//Version 1: If the alien's color is green:
console.log('\nVersion 1:');
let alien_color = "green";
if (alien_color === "green") {
    console.log('congratulation! you earned 5 points for shooting the alien.');
}
else {
    console.log('you just earned 10 points.');
}
;
//Version 2: that runs the else block
console.log('\nVersion 2:');
alien_color = 'yellow';
if (alien_color === "green") {
    console.log('congratulation! you earned 5 points for shooting the alien.');
}
else {
    console.log('you just earned 10 points.');
}
;
export {};
