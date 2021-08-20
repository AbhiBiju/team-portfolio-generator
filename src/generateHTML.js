const fs = require("fs");
const path = require("path");

const createCards = (employees) => {
  let finalHTML = "";
  employees.forEach((employee) => {
    let icon =
      employee.getRole() == "Manager"
        ? `<i class="fas fa-user-tie"></i>`
        : employee.getRole() == "Engineer"
        ? `<i class="fas fa-glasses"></i>`
        : `<i class="fas fa-graduation-cap"></i>`;

    console.log(icon);

    let special = employee.officeNumber ? `Office Number: ${employee.officeNumber}` : employee.github ? `Github: ${employee.github}` : `School: ${employee.school}`;

    console.log(special);

    finalHTML += `<div class="card">
      <div class="card-body">
        <h5 class="card-title">${employee.name}</h5>
        <h5 class="card-title">${icon}${employee.getRole()}</h5>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${employee.id}</li>
        <li class="list-group-item">Email: <a>${employee.email}</a></li>
        <li class="list-group-item">${special}</li>
      </ul>
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
    <script src="https://kit.fontawesome.com/d831f70b1e.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="./style.css" />
    <title>Our Team Page</title>
  </head>
  <body>
    <header class="jumbotron bg-info p-3"><h1 class="text-center">Our Team Page</h1></header>
    <main class="container main-wrapper min-vh-100">
      <div class="row">
      ${content}
      </div>
    </main>
  </body>
</html>`;
  writeToFile("index.html", html);
};

// Creates files using path and fs
const writeToFile = (fileName, content) => {
  // Create file path
  fs.writeFileSync(path.join(process.cwd(), "/dist/", fileName), content);
};

module.exports = createCards;
