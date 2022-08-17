// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title project title?:',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Description of your project:',
    },
    {
        type: 'list',
        name: 'license',
        choices: ['MIT','Apache','GPL','BSD','compliant'],
        message: 'Choose license for your project:',
    },
    {
        type: 'input',
        name: 'username',
        message: 'Enter your GitHub username:',
    },
    {
        type: 'input',
        name: 'githublink',
        message: 'Your project link:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
    }

];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        throw err;
      } else {
        console.log("readme file has created.");
      }
    });
  }
  
  // // TODO: Create a function to initialize app
  function init() {
    inquirer.prompt(questions).then((data) => {
      console.log(data);
      writeToFile("readme.md", generateMarkdown(data));
    });
  }
    
// Function call to initialize app
init();