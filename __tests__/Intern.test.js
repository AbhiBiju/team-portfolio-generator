const Intern = require("../lib/Intern.js");

const intern = new Intern("bob", 1, "bob@test.com", "UM");

test("Creates an Intern object", () => {
  expect(intern).toEqual(expect.any(Object));
});

test("Intern object has a valid name", () => {
  expect(intern.name).toBe("bob");
expect(intern.getName()).toEqual(intern.name);
});

test("Intern object has a valid id", () => {
  expect(intern.id).toBe(1);
expect(intern.getId()).toEqual(intern.id);
});

test("Intern object has a valid email", () => {
  expect(intern.email).toBe("bob@test.com");
expect(intern.getEmail()).toEqual(intern.email);
});

test("Intern object has a valid college name", () => {
  expect(intern.school).toBe("UM");
  expect(intern.getSchool()).toEqual(intern.school);
});

test("Intern object has a valid role", () => {
  expect(intern.getRole()).toEqual("Intern");
});
