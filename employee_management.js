// Task 1
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

// Task 2
class Department {
  constructor(name) {
    this.name = name;
    this.employees = [];
  }

  // Adds an employee to the department
  addEmployee(employee) {
    this.employees.push(employee);
  }

  // Calculates total salary for the department (without bonuses)
  getDepartmentSalary() {
    return this.employees.reduce((total, employee) => total + employee.salary, 0);
  }
}
