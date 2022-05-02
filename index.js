const inquirer = require('inquirer');
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateHTML = require("./src/generateHTML");

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

        teamMembers.push(new Manager(data.name, data.id, data.email, data.officeNumber))

        if (data.teamMember === "Engineer"){
            makeEngineer();
        } else if (data.teamMember === "Intern"){
            makeIntern();
        } else {
            console.log("oops");
            generateHTML.generateTeamMembers(teamMembers);
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
    teamMembers.push(new Engineer(data.name, data.id, data.email, data.username))
    
    if (data.teamMember === "Engineer"){
        makeEngineer(); // recursion
    } else if (data.teamMember === "Intern"){
        makeIntern(); // go to
    } else {
        console.log("oops");
        generateHTML.generateTeamMembers(teamMembers);
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
        teamMembers.push(new Intern(data.name, data.id, data.email, data.school))

        if (data.teamMember === "Engineer"){
            makeEngineer(); // go to
        } else if (data.teamMember === "Intern"){
            makeIntern(); // recursion
        } else {
            console.log("oops");
            generateHTML.generateTeamMembers(teamMembers);
        }
    })
}

makeManager(); 