const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        
        this.github = github;
    }

    getGithub(){ // assuming it's a function to return a github username...
        return this.github;
    }

    getRole(){
        return "Engineer";
    }
}