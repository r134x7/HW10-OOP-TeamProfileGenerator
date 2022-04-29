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