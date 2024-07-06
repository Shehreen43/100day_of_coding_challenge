//                 QUESTION: 110
/*
Create a function that assigns a grade (A, B, C, D, F) based on a students score.
*/
function assignsGrade(score) {
    if (score >= 80 && score < 100) {
        return 'Your Grade is A';
    }
    else if (score >= 70 && score < 80) {
        return 'Your Grade is B';
    }
    else if (score >= 60 && score < 70) {
        return 'Your Grade is C';
    }
    else if (score >= 50 && score < 60) {
        return 'Your Grade is D';
    }
    else {
        return 'Your Grade is F';
    }
}
console.log(assignsGrade(95));
