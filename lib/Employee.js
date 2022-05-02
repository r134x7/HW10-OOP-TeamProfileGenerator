class Employee {
    constructor(name, id, email){
        
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName(){
        return this.name;
    }

    getId(){ 
        if (typeof this.id !== "number" || isNaN(this.id) || this.id < 1) { // taken from 10-OOP: 16-Organising Tests Activity
            throw new Error("Id must be a positive integer.");
          }

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