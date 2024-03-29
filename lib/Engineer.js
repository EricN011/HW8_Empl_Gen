const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
    this.title = "Engineer";
  }

  getGit() {
    return this.github;
  }

  getRole() {
    return this.title;
  }
}

module.exports = Engineer;
