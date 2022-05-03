const inquirer = require('inquirer');
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateHTML = require("./src/generateHTML");

const teamMembers = []; // empty array for generated team members

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
    ]; 

function makeManager() { // the first function that is called when node index.js is run

    inquirer
.prompt([
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

        teamMembers.push(new Manager(data.name, data.id, data.email, data.officeNumber)) // pushes the class into the empty array

        if (data.teamMember === "Engineer"){ // if you chose to add an engineer
            makeEngineer();
        } else if (data.teamMember === "Intern"){ // if you chose to add an intern
            makeIntern();
        } else {
            generateHTML.generateTeamMembers(teamMembers); // finish and generate html
        }
    })
}


function makeEngineer() {
    
    inquirer
    .prompt([
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
        name: "username", // was mistakenly using this key when the key for github username was github, the key name changed once it was put through the Engineer class
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
    teamMembers.push(new Engineer(data.name, data.id, data.email, data.username)) // pushes the class into the empty array
    
    if (data.teamMember === "Engineer"){ // if wanting to add another engineer
        makeEngineer(); // recursion
    } else if (data.teamMember === "Intern"){ // if wanting to add an intern
        makeIntern(); // go to
    } else {
        generateHTML.generateTeamMembers(teamMembers); // finish and generate html
    }
    
})
}

function makeIntern() {
    
    inquirer
    .prompt([
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
        teamMembers.push(new Intern(data.name, data.id, data.email, data.school)) // pushes the class into the empty array

        if (data.teamMember === "Engineer"){ // if wanting to add an engineer
            makeEngineer(); // go to
        } else if (data.teamMember === "Intern"){ // if wanting to add another intern
            makeIntern(); // recursion
        } else {
            generateHTML.generateTeamMembers(teamMembers); // finish and generate html
        }
    })
}

makeManager(); 