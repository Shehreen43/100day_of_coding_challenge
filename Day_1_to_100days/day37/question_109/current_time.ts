//                          QUESTION: 109
/*
Write an if statement that logs `Good Morning` if the current time is before 12 PM.
*/

// Get the current time in hours
const currentTime = new Date().getHours();

if (currentTime < 12) {

    // If the current time is before 12 PM, log "Good Morning"
    console.log(`Good Morning!`);
    
};