// const write = require("../index");
const fs = require('fs');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');

function generateTeamMembers(data) {
    // we get the teamMembers array... and then we organise it... and then we put it into the generateHTML somehow... must find way using string literals...

    console.log(data);

    const team = [];

    // const team = data;
    // for (let i = 0; i < data.length; i++) {
    //     for (const key in data[i]) {
    //         console.log(` ${i}: ${key} ${data[i][key]}`);

    //     }
    // }

    for (let i = 0; i < data.length; i++) {
        data[i]["name"]
        data[i]["id"]
        data[i]["email"]
        
        if (data[i]["constructor"]["name"] === "Manager"){
           var x = data[i]["officeNumber"];
           var y = new Manager().getRole();
        } else if (data[i]["constructor"]["name"] === "Engineer"){
           var x = data[i]["github"];
           var y = new Engineer().getRole();
        } else if (data[i]["constructor"]["name"] === "Intern"){
           var x = data[i]["school"];
           var y = new Intern().getRole();
        }

        team
        .push(`
        ${data[i]["name"]}
        ${data[i]["id"]}
        ${data[i]["email"]}
        ${x}
        ${y}`)

    }

    // // console.log(team);
    // console.log("oops");
    // console.log(data[0]);
    // console.log("oops");
    // console.log(data[1]);
    // console.log("oops");
    // console.log(data[0]["name"]);
    return generateHTML(team);
    // console.log(team)
    // return 
}

function generateHTML(data) {

    const x = `<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
    `

    const y = `
    </body>
    </html>
    `

    var t = ``;
    
    for (let i = 0; i < data.length; i++) {
        t = t + `
        ${data[i]}
        `;
    }

    const z = x + t + y;
    
    return writeToFile("index.html", z)
}

function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, (err) => err ? console.log(err) : console.log("HTML file generated.")) // if there is an error, an error is shown on the terminal, else the terminal says file was written successfully.
}

// you forgot to export....

module.exports = {
    generateTeamMembers, 
    generateHTML
};