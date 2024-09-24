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

// Task 3
class Manager extends Employee {
  constructor(name, salary, position, department, bonus) {
    super(name, salary, position, department);
    this.bonus = bonus;
  }

  // Overriding the getDetails method to include the bonus
  getDetails() {
    return `${super.getDetails()}, Bonus: $${this.bonus}`;
  }
}

// Task 4
// Method added to Department class to calculate total salary including bonuses
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

  // Calculates total salary for the department including bonuses for managers
  calculateTotalSalaryWithBonus() {
    return this.employees.reduce((total, employee) => {
      if (employee instanceof Manager) {
        return total + employee.salary + employee.bonus;
      }
      return total + employee.salary;
    }, 0);
  }
}

// Task 5
// Create departments
const engineering = new Department("Engineering");
const marketing = new Department("Marketing");

// Create employees and managers
const alice = new Employee("Alice", 80000, "Developer", "Engineering");
const bob = new Employee("Bob", 75000, "Designer", "Marketing");
const charlie = new Manager("Charlie", 120000, "Engineering Manager", "Engineering", 20000);
const diana = new Manager("Diana", 130000, "Marketing Manager", "Marketing", 25000);

// Add employees to their respective departments
engineering.addEmployee(alice);
engineering.addEmployee(charlie);
marketing.addEmployee(bob);
marketing.addEmployee(diana);

// Calculate total salary for each department
console.log(`Total salary for Engineering: $${engineering.getDepartmentSalary()}`);
console.log(`Total salary with bonuses for Engineering: $${engineering.calculateTotalSalaryWithBonus()}`);
console.log(`Total salary for Marketing: $${marketing.getDepartmentSalary()}`);
console.log(`Total salary with bonuses for Marketing: $${marketing.calculateTotalSalaryWithBonus()}`);
