class Employee {
    constructor(name, id, email){
        
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName(){ // returns this.name when using Employee().getName() or Engineer().getName(), etc
        return this.name;
    }

    getId(){ // would throw an error if input is not a number or is less than 1.
        if (typeof this.id !== "number" || isNaN(this.id) || this.id < 1) { // taken from 10-OOP: 16-Organising Tests Activity
            throw new Error("Id must be a positive integer.");
          } // Was writing validation tests but didn't have time to get it applied into the inquirer questions. Regardless, validation tests were not a requirement for this assignment.

        return this.id;
    }

    getEmail(){ 
        return this.email;
    }

    getRole(){ 
        return "Employee";
    }
}

module.exports = Employee;