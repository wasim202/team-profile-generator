// const manager = require("../Manager");
// const engineer = require("../Engineer");
// const intern = require("../Intern");
//const fs = require("fs");

function renderManager(manager) {
  return `   
  <div id="card-manager">
  <h3>${manager.name}</h3>
  <h3>Manager</h3>
  <div id="manager-id">
    <span>ID: ${manager.id}</span>
  </div>
  <div id="manager-email">
    <span>Email: ${manager.email}</span>
  </div>
  <div id="manager-officeNo">
    <apsn>Office Number: ${manager.officeNumber}</apsn>
  </div>
</div>
    `;
}

function renderEngineer(engineer) {
  return `  

  <div id="card-engineer">
  <h3>${engineer.name}</h3>
  <h3>Engineer</h3>
  <div id="engineer-id">
     <span>ID: ${engineer.id}</span> 
  </div> 
  <div id="engineer-email">
      <span>Email: ${engineer.email}</span>
  </div>
  <div id="engineer-github">
      <span>Github: ${engineer.github}</span>
  </div>
</div>
    `;
}

function renderIntern(intern) {
  return `  
  <div id="card-intern">
  <h3>${intern.name}</h3>
  <h3>Intern</h3>
  <div id="intern-id">
    <span>ID: ${intern.id}</span>
  </div>
  <div id="intern-email">
    <span>Email: ${intern.email}</span>
  </div>
  <div id="intern-school">
    <span>School: ${intern.school}</span>
  </div>
</div>
      `;
}

module.exports = function (data) {
  const card = [];
  const htmlTop = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <!-- CSS only -->
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
        crossorigin="anonymous"
      />
      <link rel="stylesheet" href="./style.css" />
      <title>Team Profile</title>
    </head>
    <body>
      <header>
        <h1>My Team</h1>
      </header>`;
  const htmlBottom = `<script
  src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"
  integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa"
  crossorigin="anonymous"
></script>
<script src="index.js"></script>
</body>
</html>`;
  for (let i = 0; i < data.length; i++) {
    switch (data[i].getRole()) {
      case "Manager":
        card.push(renderManager(data[i]));
        break;
      case "Engineer":
        card.push(renderEngineer(data[i]));
        break;
      case "Intern":
        card.push(renderIntern(data[i]));
        break;
    }
    //return card.join(" ");
    return `
    ${htmlTop}
    ${card.join("")}
    ${htmlBottom}
    `;
  }
};