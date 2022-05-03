const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) { // constructor needs parent parameters before adding ones specific to Intern
        super(name, id, email); // parent parameters
        
        this.school = school;
    }

    getSchool(){ // will return this.school when calling Intern().getSchool()
        return this.school;
    }

    getRole(){ // will return Intern when Intern().getRole() is called
        return "Intern";
    }
}

module.exports = Intern;