const inquirer = require('inquirer');
const fs = require('fs');
// will need const for the lib files that take the data from the questions...

const questions = []; // 

function init() {

    inquirer // inquirer is called in the init function
.prompt([ // prompt method to bring up questions for input
    
  ])
    // .then((data) => writeToFile("parameter1", parameter2) //
}

// function writeToFile(fileName, data) {

    // fs.writeFile(fileName, data, (err) => err ? console.log(err) : console.log("HTML file generated.")) // if there is an error, an error is shown on the terminal, else the terminal says file was written successfully.
// }

init(); 