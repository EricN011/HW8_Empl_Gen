//import Employee from "./Employee";
const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, college) {
    super(name, id, email);
    this.college = school;
    this.title = "Intern";
  }

  getSchool() {
    return this.college;
  }

  getRole() {
    return this.title;
  }
}

module.exports = Intern;
