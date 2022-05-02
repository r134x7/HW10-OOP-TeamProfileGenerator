const Employee = require("../lib/Employee")

describe("Employee", () => {
    it("getName should return the name of the Employee", () => {
        const name = "testName";
        const id = 1;
        const email = "test@test.com"
        
        const result = new Employee(name, id, email).getName();

        expect(result).toEqual(name); // expect true
    })

    it("getId should return the ID number of the Employee", () => {
        const name = "testName";
        const id = 1;
        const email = "test@test.com"
        
        const result = new Employee(name, id, email).getId();

        expect(result).toEqual(id); 
    })

    it("Entering 0 for Id will throw an error", () => {
        const cb = () => new Employee("test", 0, "test").getId();  
        
        expect(cb).toThrow(); 
    });

    it("Entering a negative number for Id will throw an error", () => {
        const cb = () => new Employee("test", -19, "test").getId();  
        
        expect(cb).toThrow(); 
    });

    it("Entering anything that is not a number type for Id will throw an error", () => {
        const cb = () => new Employee("test", "one", "test").getId();  
        
        expect(cb).toThrow(); 
    });

    it("getEmail should return the email of the Employee", () => {
        const name = "testName";
        const id = 1;
        const email = "test@test.com"

        const result = new Employee(name, id, email).getEmail();

        expect(result).toEqual(email) 
    })

    it("getRole should return the role of the Employee", () => {
        const name = "testName";
        const id = 1;
        const email = "test@test.com"
        const role = "Employee";
        
        const result = new Employee(name, id, email).getRole();

        expect(result).toEqual(role) 
    })
});