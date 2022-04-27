const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(github) {
        super(name, id, email);
        this.github = github;
    }

    getGithub(){ // assuming it's a function to return a github username...
        // something
    }

    getRole(){
        // return "Engineer"
    }
}