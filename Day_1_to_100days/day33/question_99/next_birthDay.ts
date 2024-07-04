//                  QUESTION: 99
/*
Generate a date object representing your next birthday and log it to the console.
*/          
  
// Generates a Date object for the next occurrence of a specific birthday
function getNextBirthday(month: number, day: number): Date {
    const today = new Date();
    let year = today.getFullYear();
    
    // Months are 0-indexed
    const birthday = new Date(year, month - 1, day); 
    if (birthday < today) {
  // If the birthday this year has already passed, use next year's date
      birthday.setFullYear(year + 1);
    }
    return birthday;
  }
  
  // Replace with your birth month and day
  const nextBirthday = getNextBirthday(3, 3); 
  console.log("Your next birthday on:", nextBirthday.toLocaleDateString());
  // Shows the date of the next birthday.
                