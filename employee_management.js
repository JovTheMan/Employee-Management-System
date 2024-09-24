class Employee {
  constructor(name, salary, position, department) {
    this.name = name;
    this.salary = salary;
    this.position = position;
    this.department = department;
  }

  // Returns a string containing the employee's details
  getDetails() {
    return `Name: ${this.name}, Position: ${this.position}, Salary: $${this.salary}`;
  }
}
