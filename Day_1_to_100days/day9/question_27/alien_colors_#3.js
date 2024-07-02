//              QUESTION: 27
/*
Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.

• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each message is printed for the appropriate color alien.
*/
//Version 1: If the alien's color is green:
let alienColor = 'green';
if (alienColor == 'green') {
    console.log('Congratulation! you earned 5 points for shooting the color alien is "green".');
}
else if (alienColor == 'yellow') {
    console.log('Congratulation! you earned 10 points for shooting the color alien is "yellow".');
}
else if (alienColor == 'red') {
    console.log('Congratulation! you earned 15 points for shooting the color alien is "red".');
}
;
//Version 2: If the alien's color is yellow:
alienColor = 'yellow';
if (alienColor == 'green') {
    console.log('Congratulation! you earned 5 points for shooting the color alien is "green".');
}
else if (alienColor == 'yellow') {
    console.log('Congratulation! you earned 10 points for shooting the color alien is "yellow".');
}
else if (alienColor == 'red') {
    console.log('Congratulation! you earned 15 points for shooting the color alien is "red".');
}
;
//Version 3: If the alien's color is red:
alienColor = 'red';
if (alienColor == 'green') {
    console.log('Congratulation! you earned 5 points for shooting the color alien is "green".');
}
else if (alienColor == 'yellow') {
    console.log('Congratulation! you earned 10 points for shooting the color alien is "yellow".');
}
else if (alienColor == 'red') {
    console.log('Congratulation! you earned 15 points for shooting the color alien is "red".');
}
;
export {};
