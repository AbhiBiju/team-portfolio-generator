const Employee = require("../lib/Employee.js");

const employee = new Employee("bob", 1, "bob@test.com");

test("Creates an Employee object", () => {
  expect(employee).toEqual(expect.any(Object));
});

test("Employee object has a valid name", () => {
  expect(employee.getName()).toEqual(expect.any(String));
});

test("Employee object has a valid id", () => {
  expect(employee.getId()).toEqual(expect.any(Number));
});

test("Employee object has a valid email", () => {
  expect(employee.getEmail()).toMatch(/^\S+@\S+\.\S+$/i);
});
