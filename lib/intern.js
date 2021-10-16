const Employee = require("./employee");

class Intern extends Employee {
    // create Employee class and assign each data that will be inputted by user
    constructor(name, id, email, school, title) {
        // super constructor for previusly made data
        super(name, id, email);
        // school/title will be unique based off user data
        this.school = school;
        this.title = title;
    }
    getRole() {
        return this.title;
    }
    getSchool() {
        return this.school;
    }
}

module.exports = Intern;