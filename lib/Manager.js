const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) { // constructor needs parent parameters before adding ones specific to Manager
        super(name, id, email); // parent parameters
        
        this.officeNumber = officeNumber;

    }

    // no getOfficeNumber function to return this.officeNumber... the assignment criteria made no mention of using a getOfficeNumber function so I am not going to add one.

    getRole(){ // will return Manager when Manager().getRole() is called
        return "Manager";
    }
}

module.exports = Manager;
