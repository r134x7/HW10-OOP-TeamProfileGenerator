const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        
        this.school = school;
    }

    getSchool(){ // assuming it's a function to return a school name...
        return this.school;
    }

    getRole(){
        return "Intern";
    }
}