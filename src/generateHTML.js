const fs = require("fs");
const path = require("path");
const generateCSS = require("./generateCSS");

const createCards = (employees) => {
  let finalHTML = "";
  employees.forEach((employee) => {
    let icon =
      employee.getRole() == "Manager"
        ? `<i class="fas fa-user-tie"></i>`
        : employee.getRole() == "Engineer"
        ? `<i class="fas fa-glasses"></i>`
        : `<i class="fas fa-graduation-cap"></i>`;

    let special = employee.officeNumber
      ? `Office Number: ${employee.officeNumber}`
      : employee.github
      ? `Github: <a href="https://github.com/${employee.github}/">${employee.github}</a>`
      : `School: ${employee.school}`;

    finalHTML += `<div class="col">
      <div class="card rounded-lg">
        <div class="card-body rounded-top bg-dark text-info">
          <h5 class="card-title">${employee.name}</h5>
          <h5 class="card-title">${icon} ${employee.getRole()}</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${employee.id}</li>
          <li class="list-group-item">Email: <a href="mailto:${employee.email}">${employee.email}</a></li>
          <li class="list-group-item">${special}</li>
        </ul>
      </div>
    </div>`;
  });
  generateHTML(finalHTML);
};

let generateHTML = (content) => {
  let html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
      crossorigin="anonymous" />
      <link
      rel="stylesheet"
      type="text/css"
      href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900,"/>
    <script src="https://kit.fontawesome.com/d831f70b1e.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="./style.css" />
    <title>Our Team Page</title>
  </head>
  <body>
    <header class="jumbotron d-flex flex-row flex-wrap justify-content-center p-0"><div class='d-flex flex-row justify-content-center align-items-center text-center' id="title">
      <i class="far fa-address-book"></i>
      <h1 class="text-center p-3 fw-bold">Our Team Page</h1>
    </div><div id="heroImg"></div></header>
    <main class="container main-wrapper min-vh-100">
      <div class="d-flex justify-content-center p-4">
        <div class="row row-cols-1 row-cols-md-2 g-5 w-85">
        ${content}
        </div>
      </div>
    </main>
  </body>
</html>`;
  writeToFile("index.html", html);
  writeToFile("style.css", generateCSS.styles());
};

// Creates files using path and fs
const writeToFile = (fileName, content) => {
  // Create file path
  fs.writeFileSync(path.join(process.cwd(), "/dist/", fileName), content);
};

module.exports = createCards;
