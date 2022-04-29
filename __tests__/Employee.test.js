const Employee = require("../lib/Employee")

describe("Employee", () => {
    it("getName should return the name of the Employee", () => {
        const name = "testName";
        const id = 1;
        const email = "test@test.com"
        
        const result = new Employee(name, id, email).getName();

        expect(result).toEqual(name); // expect true

        // need to make name Like This...
        // must throw an error
    })

    it("getId should return the ID number of the Employee", () => {
        const name = "testName";
        const id = 1;
        const email = "test@test.com"

        // need to force positive numbers
        // must throw an error
        
        const result = new Employee(name, id, email).getId();

        expect(result).toEqual(id); 
    })

    it("getEmail should return the email of the Employee", () => {
        const name = "testName";
        const id = 1;
        const email = "test@test.com"

        // need to force email into lower case
        // must throw an error

        const result = new Employee(name, id, email).getEmail();

        expect(result).toEqual(email) 
    })

    describe("getRole should return the role of the Employee", () => {
        const name = "testName";
        const id = 1;
        const email = "test@test.com"
        const role = "Employee";
        
        const result = new Employee(name, id, email).getRole();

        expect(result).toEqual(role) 
    })
});