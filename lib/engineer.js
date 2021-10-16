const Employee = require("./employee");

// create Employee class and assign each data that will be inputted by user
class Engineer extends Employee {
    constructor(name, id, email, github, title) {
        // super function for previously made data
        super(name, id, email);
        // github/title will be unique since based off user input
        this.github = github;
        this.title = title;
    }
    getGithub() {
        return this.github;
    }
    getRole() {
        return this.title;
    }
}

module.exports = Engineer;