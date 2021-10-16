const Employee = require("./employee");

class Manager extends Employee {
    // create Employee class and assign each data that will be inputted by user
    constructor(name, id, email, officeNumber, title) {
        super(name, id, email);
        // officer number/title will be unique based off user data
        this.officeNumber = officeNumber;
        this.title = title;
    }
    getRole() {
        return this.title;
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;