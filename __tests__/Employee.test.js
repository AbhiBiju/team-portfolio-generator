const Employee = require("../lib/Employee.js");

const employee = new Employee("bob", 1, "bob@test.com");

test("Creates an Employee object", () => {
  expect(employee).toEqual(expect.any(Object));
});

test("Employee object has a valid name", () => {
  expect(employee.name).toBe("bob");
  expect(employee.getName()).toEqual(employee.name);
});

test("Employee object has a valid id", () => {
  expect(employee.id).toBe(1);
  expect(employee.getId()).toEqual(employee.id);
});

test("Employee object has a valid email", () => {
  expect(employee.email).toBe("bob@test.com");
  expect(employee.getEmail()).toEqual(employee.email);
});

test("Employee object has a valid role", () => {
  expect(employee.getRole()).toEqual("Employee");
});
