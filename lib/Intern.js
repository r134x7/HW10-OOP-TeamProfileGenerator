const Employee = require("./Employee");

class Intern extends Employee {
    constructor(school) {
        super(name, id, email);
        this.school = school;
    }

    getSchool(){ // assuming it's a function to return a school name...
        // something
    }

    getRole(){
        // return "Intern"
    }
}