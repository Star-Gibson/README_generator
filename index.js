//Requiring Dependencies inquirer, file system, and generateMarkdown
const inquirer = require('inquirer'); 
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');


// array of questions for user
const questions = [ 
    {   type: 'input',
        message: 'What is your github username?',
        name: 'userName',
    },
    {   type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
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
   
    {   type: 'input',
        message: 'Who contributed to the development of this application?',
        name: 'credits',
        default: 'Sole Contributor/Names of Group Members'

    },
    {   type: 'input',
        message: 'Which license would you like to include on your README?',
        name: 'license',
        default: 'MIT, Apache License 2.0, Boost Software, GNU AGPLv3'
    },
    {   type: 'list',
        message: 'What color license would you like to include on your README?',
        name: 'color',
        choices: ['green', 'red', 'blue', 'yellow']
},
   
];


// function to write README file
function writeToFile(fileName , data) {
    fs.writeFile(fileName, data, function (err) {
        if (err){
            return console.log(err); //Logs error
        }
            console.log("Success!"); //Logs Success
    })
}


// function to initialize program - Need to figure out how to link github information from terminal input.
function init() {
   inquirer.prompt(questions).then(data => 
    {    
        let genMD = generateMarkdown(data);   
        writeToFile('README.md', genMD); //`'${data.title}.md'` - Can use if input is title otherwise name README.md
     }
   )}

// function call to initialize program
init();
