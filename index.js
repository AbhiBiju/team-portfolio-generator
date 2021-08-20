const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const pageGen = require("./src/generateHTML");


const inquirer = require("inquirer");

let employeeList = [];

const managerQs = [
  {
    type: "input",
    name: "name",
    message: "What is the Manager's Name?",
    default: "John Smith",
  },
  {
    type: "input",
    name: "id",
    message: "What is the Manager's Id?",
    default: "1",
  },
  {
    type: "input",
    name: "email",
    message: "What is the Manager's Email?",
    default: "johnSmith@gmail.com",
  },
  {
    type: "input",
    name: "officeNum",
    message: "What is the Manager's Office Number?",
    default: "90210",
  },
];

const nextEmployee = [
  {
    type: "list",
    name: "menu",
    message: "What would you like to do next?",
    choices: [
      {
        name: "Add an Engineer",
        value: "Engineer",
      },
      {
        name: "Add an Intern",
        value: "Intern",
      },
      {
        name: "Build my Site",
        value: "Build",
      },
    ],
  },
];

const engineerQs = [
  {
    type: "input",
    name: "name",
    message: "What is the Engineer's Name?",
    default: "Jane Doe",
  },
  {
    type: "input",
    name: "id",
    message: "What is the Engineer's Id?",
    default: "2",
  },
  {
    type: "input",
    name: "email",
    message: "What is the Engineer's Email?",
    default: "janeDoe@gmail.com",
  },
  {
    type: "input",
    name: "github",
    message: "What is the Engineer's Github Username?",
    default: "janeDoe",
  },
];

const internQs = [
  {
    type: "input",
    name: "name",
    message: "What is the Intern's Name?",
    default: "Jack Ryan",
  },
  {
    type: "input",
    name: "id",
    message: "What is the Intern's Id?",
    default: "3",
  },
  {
    type: "input",
    name: "email",
    message: "What is the Intern's Email?",
    default: "jackRyan@gmail.com",
  },
  {
    type: "input",
    name: "school",
    message: "What is the Intern's School?",
    default: "UM",
  },
];

const init = () => {
  console.log("Lets build your team a page!");

  getInfo(managerQs);
};

const getInfo = (questions) => {
  inquirer.prompt(questions).then((answers) => {
    let { name, id, email, ...rest } = answers;
    let special = Object.entries(rest)[0][1];

    questions[0].message.includes("Manager")
      ? employeeList.push(new Manager(name, id, email, special))
      : questions[0].message.includes("Engineer")
      ? employeeList.push(new Engineer(name, id, email, special))
      : questions[0].message.includes("Intern")
      ? employeeList.push(new Intern(name, id, email, special))
      : pageGen();

    console.log(employeeList);
    console.log(answers);
    inquirer.prompt(nextEmployee).then((answer) => {
      switch (answer.menu) {
        case "Engineer":
          getInfo(engineerQs);
          break;
        case "Intern":
          getInfo(internQs);
          break;
        case "Build":
          pageGen(employeeList);
      }
    });
  });
};

init();
