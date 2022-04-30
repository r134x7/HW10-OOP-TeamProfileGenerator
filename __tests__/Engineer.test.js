const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    it("Should return inherited methods: getName", () => {
        const name = "test";

        const result = new Engineer("test", 1, "test@", "userName").getName();

        expect(result).toEqual(name);
    })

    it("Should return inherited methods: getId", () => {
        const id = 1;

        const result = new Engineer("test", 1, "test@", "userName").getId();

        expect(result).toEqual(id);
    })

    it("Should return inherited methods: getEmail", () => {
        const email = "test@";

        const result = new Engineer("test", 1, "test@", "userName").getEmail();

        expect(result).toEqual(email);
    })

    it("Should return github username", () => {
        const github = "userName";
        
        const result = new Engineer("test", 1, "test@", "userName").getGithub();
        
        expect(result).toEqual(github);
    })
    
    it("getRole should return the role of the Engineer", () => {
        const role = "Engineer";

        const result = new Engineer("test", 1, "test@", "userName").getRole();
    
        expect(result).toEqual(role);
    })

});