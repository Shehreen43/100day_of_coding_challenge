//              QUESTION: 25
/*
Alien Colors #1: Imagine an alien was just shot down in a game. Create a
variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.

• Write an if statement to test whether the alien’s color is green. If it is, print
a message that the player just earned 5 points.

• Write one version of this program that passes the if test and another that
fails. (console.log("You just earned 5 points!");
 output.)
*/

//Alien Colors: Imagine an alien was just shot down in a game.

// version that passes
console.log('Version that passes.');
let alien_color = 'green';
if (alien_color === 'green') {
    console.log('Congratulation! you just earn 5 points.');
    };

//version that false
console.log('\nVersion that not passes.');
alien_color = 'red';
if (alien_color === 'green') {
    console.log(' You just earn 5 points.');
};


