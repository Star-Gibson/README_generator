//Requiring Dependencies inquirer, file system, and generateMarkdown
const inquirer = require('inquirer'); 
const fs = require('fs');
const generateMarkdown = require('./util/generateMarkdown.js');


// array of questions for user
const questions = [ 
    {   type: 'input',
        message: 'What is your github username?',
        name: 'userName', // data.userName
    },
    {   type: 'input',
        message: 'What is your email address?',
        name: 'email', // data.email
    },
    {   type: 'input',
        message: 'What is the name of your application?',
        name: 'title', // data.title
    },
   
    {   type: 'input',
        message: 'How would you describe your application?',
        name: 'description', // data.description
    },
   
    {   type: 'input',
        message: 'What are the steps required to install your project?',
        name: 'installation', // data.installation
    },
   
    {   type: 'input',
        message: 'Provide instructions on how to use your application.',
        name: 'usage', // data.usage
    },

    {   type: 'input',
        message: 'Provide an example on how to test your application.',
        name: 'test', // data.test
    },
   
    {   type: 'input',
        message: 'Who contributed to the development of this application?',
        name: 'credits', // data.credits
        default: 'Sole Contributor/Names of Group Members'
    },
    {   type: 'list',
        message: 'Which license would you like to include on your README?',
        name: 'license', // data.license
        choices: ["MIT", "Apache2.0","GPL", "BSD", "lglpl_2_1"]
    },
    {   type: 'list',
        message: 'What color license would you like to include on your README?',
        name: 'color', // data.color
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


// function to initialize program
function init() {
   inquirer.prompt(questions).then(data => 
    {    
        let genMD = generateMarkdown(data);   
        writeToFile('README.md', genMD); //`'${data.title}.md'` - Can use if input is title otherwise name README.md
     }
   )}

// function call to initialize program
init();
