const Employee = require("../lib/Employee")

describe("Employee", () => {
    describe("getName", () => {
        const name = "testName";
        
        const result = new Employee().getName(name);

        expect(result).toEqual(name) 
    })

    describe("getId", () => {
        const name = "testName";
        
        const result = new Employee().getName(name);

        expect(result).toEqual(name) 
    })

    describe("getEmail", () => {
        const name = "testName";
        
        const result = new Employee().getName(name);

        expect(result).toEqual(name) 
    })

    describe("getRole", () => {
        const name = "testName";
        
        const result = new Employee().getName(name);

        expect(result).toEqual(name) 
    })
});