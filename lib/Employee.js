// const { makeManager } = require(".."); // not being used as of this time

class Employee {
    constructor(name, id, email){
        
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName(){ // assuming it's a function to return a name...
        return this.name;
    }

    getId(){ // assuming it's a function to return an id...
        if (typeof this.id !== "number" || isNaN(this.id) || this.id < 1) { // taken from 10-OOP: 16-Organising Tests Activity
            throw new Error("Id must be a positive integer.");
            // makeManager(); // not being used as of this time
          }

        return this.id;
    }

    getEmail(){ // assuming it's a function to return an email address...
        return this.email;
    }

    getRole(){ // assuming it's a function to return a role...
        return "Employee";
    }
}

module.exports = Employee;