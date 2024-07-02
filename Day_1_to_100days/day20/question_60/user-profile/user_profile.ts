//                   QUESTION:60
/*
Self-Running User Profile: Create a quick, self-setup profile for a user that can tell you the user's name and age.
*/
import inquirer from 'inquirer';

type UserProfile = {
   name: string;
   age: number;
};

async function getUserProfile() {
    const answers = await inquirer.prompt([
        {
            type: {input: String},
            name: 'name',
            message: 'What is your name?',
            validate: (input: string) => {
                if (input.trim().length === 0) {
                    return 'Please enter a valid name';
                }
                return true;

            }
        },
        {
            type: 'number',
            name: 'age',
            message: 'What is your age?',
            validate: (value) => {
                if (!value) {
                    return 'Please enter a valid number.';
                }
                return true;
            }
        }
    ]);

    const userProfile = {
        name: answers.name,
        age: answers.age,
    }


    return userProfile;
}
(async () => {
    try {
        const userProfile = await getUserProfile();
        console.log(`Your name is ${userProfile.name} and you are ${userProfile.age} years old.`);
    } catch (error) {
        console.error('Error:', error);
    }
})();
