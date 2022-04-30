const Manager = require("../lib/Manager");

describe("Manager", () => {
    it("Should return inherited methods: getName", () => {
        const name = "test";

        const result = new Manager("test", 1, "test@", 12345).getName();

        expect(result).toEqual(name);
    })

    it("Should return inherited methods: getId", () => {
        const id = 1;

        const result = new Manager("test", 1, "test@", 12345).getId();

        expect(result).toEqual(id);
    })

    it("Should return inherited methods: getEmail", () => {
        const email = "test@";

        const result = new Manager("test", 1, "test@", 12345).getEmail();

        expect(result).toEqual(email);
    })

    it("Should return office number", () => {
        const offNumber = 12345;
        
        const result = new Manager("test", 1, "test@", 12345);
        
        expect(result.officeNumber).toEqual(offNumber);
    })
    
    it("getRole should return the role of the Manager", () => {
        const role = "Manager";

        const result = new Manager("test", 1, "test@", 12345).getRole();
    
        expect(result).toEqual(role);
    })

});