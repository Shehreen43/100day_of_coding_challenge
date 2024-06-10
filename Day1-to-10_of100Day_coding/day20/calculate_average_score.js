//                         QUESTION: 58
/*
Average Score Calculator: Write a simple program that can take lots of scores and find their average.
*/ /*

function calculateAverageScore(...scores: number[]): number {
  // Check if the input array is empty
  if (scores.length === 0) {
    throw new Error('No scores provided');
  }

  // Calculate the sum of all scores
  const sum = scores.reduce((acc, score) => acc + score, 0);

  // Calculate the average score
  const averageScore = sum / scores.length;

  return averageScore;
}
calculateAverageScore(10, 20, 30, 40, 50);
// Example usage


// Code editor example
function turnOnLight(isDay: boolean) {
    let powerGrid = {
        switchOn: function (device: string) {
            console.log(`Turning on ${device}`);
        }
    };
    if (!isDay) {
        powerGrid.switchOn('lights');
    }
}
turnOnLight(true)

// Code editor example
function navigateMazee(steps: number) {
    let robot = {
        Function (direction: string) {
            console.log(`Turning to the ${direction}`);
        },
        moveForward: function () {
            console.log('Moving forward');
        },
        detectObstacle: function () {
            console.log('Detecting obstacle');
            return false;
        },
        turnRight: function () {
            this.Function('right');
        },
        turnLeft: function () {
            this.Function('left');
        }
    }
    for (let i = 0; i < steps; i++) {
        if (robot.detectObstacle()) {
            robot.turnRight();
        } else {
            robot.moveForward();
        }
    }
}
navigateMazee(5)
*/
// Corrected Code
function navigateMaze(steps) {
    var robot = {
        turn: function (direction) {
            console.log("Turning to the ".concat(direction));
        },
        moveForward: function () {
            console.log('Moving forward');
        },
        detectObstacle: function () {
            console.log('Detecting obstacle');
            return false; // Assume no obstacle for now
        },
        turnRight: function () {
            this.turn('right');
        },
        turnLeft: function () {
            this.turn('left');
        }
    };
    for (var i = 0; i < steps; i++) {
        if (robot.detectObstacle()) {
            robot.turnRight();
        }
        else {
            robot.moveForward();
        }
    }
}
navigateMaze(5);
