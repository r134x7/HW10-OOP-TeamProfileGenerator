const Employee = require("./Employee");

class Manager extends Employee {
    constructor(officeNumber) {
        this.officeNumber = officeNumber;

        super(name, id, email);
    }

    // no getOfficeNumber function...

    getRole(){
        return "Manager";
    }
}