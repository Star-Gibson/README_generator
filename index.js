//Requiring inquirer and file system
const inquirer = require('inquirer'); 

const fs = require('fs');


// array of questions for user
const questions = [ 
    {   type: 'input',
        message: 'What is the name of your application?',
        name: 'title',
    },
   
    {   type: 'input',
        message: 'How would you describe your application?',
        name: 'description',
    },
   
    {   type: 'input',
        message: 'What are the steps required to install your project?',
        name: 'installation',
    },
   
    {   type: 'input',
        message: 'Provide instructions on how to use your application.',
        name: 'usage',
    },

    {   type: 'input',
        message: 'Provide an example on how to test your application.',
        name: 'test',
    },
   
    {   type: 'confirm',
        message: 'Were there any outside contributions or collaborators to your application?',
        name: 'credits',

    },
    {   type: 'checkbox',
        message: 'Which license would you like to include on your readme?',
        name: 'license',
        choices: ['MIT', 'Apache License 2.0', 'Boost Software', 'GNU AGPLv3']
    },
   
];
console.log(questions) // Check for Questions - Take out upon completion

// function to write README file
function writeToFile(fileName , data) {
}

// function to initialize program
function init() {
   

}

// function call to initialize program
init();
