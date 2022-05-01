const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateHTML = require("./src/generateHTML");

// will need const for the lib files that take the data from the questions...

// going to try making an empty array so that every class created gets pushed into the array allowing all classes created to be managed from one array.............

const teamMembers = [];

const questions = [
    "What is the name of the Team Manager?", 
    "What is their ID number?", 
    "What is their email address?", 
    "What is the Team Manager's office number?",
    "What type of Team Member would you like to add?",
    "What is the name of the Engineer?",
    "What is the Engineer's GitHub username?",
    "What is the name of the Intern?",
    "What is the name of the Intern's School?"
    ]; // 

function makeManager() {

    inquirer // inquirer is called in the init function
.prompt([ // prompt method to bring up questions for input
    {
      type: 'input',
      name: 'name',
      message: questions[0],
    },
    {
        type: 'input',
        name: 'id',
        message: questions[1],
    },
    {
      type: 'input',
      name: 'email',
      message: questions[2],
    },
    {
      type: "input",
      name: "officeNumber",
      message: questions[3],
    },
    {
      type: "list",
      name: "teamMember",
      message: questions[4],
      choices: ['Engineer', 'Intern', 'None, end selection.',],
    },
])
    .then(function (data) {
        // new Manager(data.name, data.id, data.email, data.officeNumber).getId() // ....................
        // generateHTML.testManager(new Manager(data.name, data.id, data.email, data.officeNumber))
        // generateHTML.genHTML(test)

        teamMembers.push(new Manager(data.name, data.id, data.email, data.officeNumber))

        if (data.teamMember === "Engineer"){
            makeEngineer();
        } else if (data.teamMember === "Intern"){
            makeIntern();
        } else {
            console.log("oops");
            console.log(teamMembers);
        }
    })

    // I have to take the data and put it into the relevant class eg new Intern and then........ I take that input and create a profile and then I repeat the process...............
    // and probably then the html file is produced probably...
    // .then((data) => writeToFile("parameter1", parameter2) // 
}

// function writeToFile(fileName, data) {

    // fs.writeFile(fileName, data, (err) => err ? console.log(err) : console.log("HTML file generated.")) // if there is an error, an error is shown on the terminal, else the terminal says file was written successfully.
// }

function makeEngineer() {

    inquirer // inquirer is called in the init function
.prompt([ // prompt method to bring up questions for input
    {
      type: 'input',
      name: 'name',
      message: questions[5],
    },
    {
      type: 'input',
      name: 'id',
      message: questions[1],
    },
    {
      type: 'input',
      name: 'email',
      message: questions[2],
    },
    {
      type: "input",
      name: "username",
      message: questions[6],
    },
    {
      type: "list",
      name: "teamMember",
      message: questions[4],
      choices: ['Engineer', 'Intern', 'None, end selection.',],
    },
])
    .then(function (data) {
        teamMembers.push(new Engineer(data.name, data.id, data.email, data.username))
        
        if (data.teamMember === "Engineer"){
            makeEngineer(); // recursion
        } else if (data.teamMember === "Intern"){
            makeIntern(); // go to
        } else {
            console.log("oops");
            console.log(teamMembers);
        }

    })
}

function makeIntern() {

    inquirer // inquirer is called in the init function
.prompt([ // prompt method to bring up questions for input
    {
      type: 'input',
      name: 'name',
      message: questions[7],
    },
    {
      type: 'input',
      name: 'id',
      message: questions[1],
    },
    {
      type: 'input',
      name: 'email',
      message: questions[2],
    },
    {
      type: "input",
      name: "school",
      message: questions[8],
    },
    {
      type: "list",
      name: "teamMember",
      message: questions[4],
      choices: ['Engineer', 'Intern', 'None, end selection.',],
    },
])
.then(function (data) {
        teamMembers.push(new Intern(data.name, data.id, data.email, data.school))

        if (data.teamMember === "Engineer"){
            makeEngineer(); // go to
        } else if (data.teamMember === "Intern"){
            makeIntern(); // recursion
        } else {
            console.log("oops");
            console.log(teamMembers);
        }
    })
}


makeManager(); 

// module.exports = {makeManager} // not used as of this time