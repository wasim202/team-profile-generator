const Employee = require("./employee");
class Manager extends Employee {
  constructor(id, name, email, officNumer) {
    super(id, name, email);
    this.officNumer = officNumer;
  }
  getOfficeNumber() {
    return this.getOfficeNumber;
  }
  getRole() {
    return "Manager";
  }
}
module.exports = Manager;
