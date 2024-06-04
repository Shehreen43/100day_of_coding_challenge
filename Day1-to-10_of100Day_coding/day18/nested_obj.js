// Create an object that conforms to the interfaces
var programmer = {
    name: 'harry',
    skills: {
        codingLanguages: ['JavaScript', 'Typescript', 'Python', 'C+'],
        tools: ['Git', 'Docker', 'Webpack'],
        frameworks: ['React', 'Angular', 'Vue']
    }
};
// Function to get specific skills
function getSpecificSkills(programmer) {
    var _a = programmer.skills, codingLanguages = _a.codingLanguages, tools = _a.tools, frameworks = _a.frameworks;
    // Extract three specific skills (one from each category)
    var selectedSkills = [codingLanguages[1], tools[0], frameworks[0]];
    return selectedSkills;
}
// Display the specific skills
var skillsToShow = getSpecificSkills(programmer);
console.log("Three Specific Skills:", skillsToShow);
