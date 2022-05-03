const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) { // constructor needs parent parameters before adding ones specific to Engineer
        super(name, id, email); // parent parameters
        
        this.github = github;
    }

    getGithub(){ // will return this.github when calling Engineer().getGithub()
        return this.github;
    }

    getRole(){ // will return Engineer when Engineer().getRole() is called
        return "Engineer";
    }
}

module.exports = Engineer;