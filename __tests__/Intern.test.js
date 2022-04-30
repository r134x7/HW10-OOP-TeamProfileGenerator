const Intern = require("../lib/Intern");

describe("Intern", () => {
    it("Should return inherited methods: getName", () => {
        const name = "test";

        const result = new Intern("test", 1, "test@", "school").getName();

        expect(result).toEqual(name);
    })

    it("Should return inherited methods: getId", () => {
        const id = 1;

        const result = new Intern("test", 1, "test@", "school").getId();

        expect(result).toEqual(id);
    })

    it("Should return inherited methods: getEmail", () => {
        const email = "test@";

        const result = new Intern("test", 1, "test@", "school").getEmail();

        expect(result).toEqual(email);
    })

    it("Should return intern's school", () => {
        const school = "school";
        
        const result = new Intern("test", 1, "test@", "school").getSchool();
        
        expect(result).toEqual(school);
    })
    
    it("getRole should return the role of the Intern", () => {
        const role = "Intern";

        const result = new Intern("test", 1, "test@", "school").getRole();
    
        expect(result).toEqual(role);
    })

});