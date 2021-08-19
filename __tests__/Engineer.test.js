const Engineer = require("../lib/Engineer.js");

const engineer = new Engineer("bob", 1, "bob@test.com", 'gitBob');

test("Creates an Engineer object", () => {
  expect(engineer).toEqual(expect.any(Object));
});

test("Engineer object has a valid name", () => {
  expect(engineer.name).toBe("bob");
  expect(engineer.getName()).toEqual(engineer.name);
});

test("Engineer object has a valid id", () => {
  expect(engineer.id).toBe(1);
  expect(engineer.getId()).toEqual(engineer.id);
});

test("Engineer object has a valid email", () => {
  expect(engineer.email).toBe("bob@test.com");
  expect(engineer.getEmail()).toEqual(engineer.email);
});

test("Engineer object has a valid github", () => {
  expect(engineer.github).toBe("gitBob");
  expect(engineer.getGithub()).toEqual(engineer.github);
});

test("Engineer object has a valid role", () => {
  expect(engineer.getRole()).toEqual("Engineer");
});
