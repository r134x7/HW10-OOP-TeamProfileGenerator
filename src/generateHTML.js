const fs = require('fs');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');

function generateTeamMembers(data) {

    const team = []; // empty array to put member profiles into

    for (let i = 0; i < data.length; i++) {
        data[i]["name"]
        data[i]["id"]
        data[i]["email"]
        
        if (data[i]["constructor"]["name"] === "Manager"){ // we get the class name to find the role
           var x = data[i]["officeNumber"];
           var y = new Manager().getRole(); // gets the returned role of the class

            team.push(`
            <div class="id">
            <h3>${data[i]["name"]}</h3>
            <h3> &#x1F469&#x200D&#x1F4BC ${y}</h3><br>
            <table>
            <tr>
            <td>
            ID: ${data[i]["id"]}
            </td>
            </tr>
            <tr>
            <td>
            Email: <a href="mailto:${data[i]["email"]}">${data[i]["email"]}</a>
            </td>
            </tr>
            <tr>
            <td>
            Office number: ${x}
            </td>
            </tr>
            </table>
            </div>`)

        } else if (data[i]["constructor"]["name"] === "Engineer"){ // we get the class name to find the role
           var x = data[i]["github"];
           var y = new Engineer().getRole(); // gets the returned role of the class

           team.push(`
           <div class="id">
           <h3>${data[i]["name"]}</h3>
           <h3> &#x1F469&#x200D&#x1F4BB ${y}</h3><br>
           <table>
           <tr>
           <td>
           ID: ${data[i]["id"]}
           </td>
           </tr>
           <tr>
           <td>
           Email: <a href="mailto:${data[i]["email"]}">${data[i]["email"]}</a>
           </td>
           </tr>
           <tr>
           <td>
           GitHub: <a href="https://github.com/${x}">${x}</a>
           </td>
           </tr>
           </table>
           </div>`)

        } else if (data[i]["constructor"]["name"] === "Intern"){ // we get the class name to find the role
           var x = data[i]["school"];
           var y = new Intern().getRole(); // gets the returned role of the class

           team.push(`
           <div class="id">
           <h3>${data[i]["name"]}</h3>
           <h3> &#x1F469&#x200D&#x1F393 ${y}</h3><br>
           <table>
           <tr>
           <td>
           ID: ${data[i]["id"]}
           </td>
           </tr>
           <tr>
           <td>
           Email: <a href="mailto:${data[i]["email"]}">${data[i]["email"]}</a>
           </td>
           </tr>
           <tr>
           <td>
           School: ${x}
           </td>
           </tr>
           </table>
           </div>`)
        }

    }

    return generateHTML(team);
}

function generateHTML(data) {

    const top = `<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" type="text/css" href="style.css" />
        <title>Team Profile</title>
    </head>
    <body>
    <header>
        <h1>My Team</h1>
    </header>
    <div id="gridLayout">
    `

    const bottom = `
    </div>
    </body>
    </html>
    `

    var middle = ``; // need a mutable state
    
    for (let i = 0; i < data.length; i++) { // this for loop is to prevent the issue of commas from the array indexes ending up in the html file
        middle = middle + `
        ${data[i]}
        `; // adding like i++ increments
    }

    const z = top + middle + bottom; // concatenate
    
    return writeToFile("./dist/index.html", z)
}

function writeToFile(fileName, data) { // will be using fs here to generate the html file

    fs.writeFile(fileName, data, (err) => err ? console.log(err) : console.log("HTML file generated.")) // if there is an error, an error is shown on the terminal, else the terminal says file was written successfully.
}

module.exports = {
    generateTeamMembers, 
    generateHTML
};