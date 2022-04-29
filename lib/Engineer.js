const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(github) {
        this.github = github;

        super(name, id, email);
    }

    getGithub(){ // assuming it's a function to return a github username...
        return this.github;
    }

    getRole(){
        return "Engineer";
    }
}