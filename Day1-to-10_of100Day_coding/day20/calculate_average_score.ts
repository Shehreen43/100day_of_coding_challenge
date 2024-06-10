//                                  QUESTION: 58
/*
Average Score Calculator: Write a simple program that can take lots of scores and find their average.
*/

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




