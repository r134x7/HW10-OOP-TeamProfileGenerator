const Employee = require("./Employee");

class Intern extends Employee {
    constructor(school) {
        this.school = school;

        super(name, id, email);
    }

    getSchool(){ // assuming it's a function to return a school name...
        return this.school;
    }

    getRole(){
        return "Intern";
    }
}