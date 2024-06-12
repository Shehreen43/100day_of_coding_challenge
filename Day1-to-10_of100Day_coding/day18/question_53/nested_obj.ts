//                              UESTION : 53
/*
Question 53: Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer programmer knows,
 like coding languages, tools, and software frameworks. Find a way to get three specific skills from this list and show them.

 */
// Define interfaces for the structure
interface Programmer {
    name: string;
    skills: {
        codingLanguages: string[];
        tools: string[];
        frameworks: string[];
    };
}

// Create an object that conforms to the interfaces
const programmer : Programmer ={
    name: 'harry',
    skills: {
  
      codingLanguages: ['JavaScript', 'Typescript', 'Python', 'C+'],
        tools: ['Git', 'Docker', 'Webpack'],
        frameworks: ['React', 'Angular', 'Vue']
    }
};
// Function to get specific skills
function getSpecificSkills(programmer: Programmer): string[] {
    const { codingLanguages, tools, frameworks } = programmer.skills;

    // Extract three specific skills (one from each category)
    const selectedSkills: string[] = [codingLanguages[1], tools[0], frameworks[0]];
    return selectedSkills;
}

// Display the specific skills
const skillsToShow = getSpecificSkills(programmer);
console.log("Three Specific Skills:", skillsToShow);
