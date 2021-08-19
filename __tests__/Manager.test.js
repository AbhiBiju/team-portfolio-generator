const Manager = require("../lib/Manager.js");

const manager = new Manager("bob", 1, "bob@test.com", 123 - 123 - 1234);

test("Creates an Manager object", () => {
  expect(manager).toEqual(expect.any(Object));
});

test("Manager object has a valid name", () => {
  expect(manager.name).toBe("bob");
  expect(manager.getName()).toEqual(manager.name);
});

test("Manager object has a valid id", () => {
  expect(manager.id).toBe(1);
  expect(manager.getId()).toEqual(manager.id);
});

test("Manager object has a valid email", () => {
  expect(manager.email).toBe("bob@test.com");
  expect(manager.getEmail()).toEqual(manager.email);
});

test("Manager object has a valid office number", () => {
  expect(manager.officeNumber).toBe(123 - 123 - 1234);
  expect(manager.getOfficeNumber()).toEqual(manager.officeNumber);
});

test("Manager object has a valid role", () => {
  expect(manager.getRole()).toEqual("Manager");
});
