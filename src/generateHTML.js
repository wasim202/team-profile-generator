function renderManager(manager) {
  return `  
  
  <div class="col-4">
          <div class="card text-bg-primary mb-3" style="max-width: 18rem">
            <div class="card-header"><h3>${manager.name}</h3></div>
            <div class="card-body">
              <h5 class="card-title">Manager</h5>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${manager.id}</li>
                <li class="list-group-item">Email: 
                  <a href="mailto:${manager.email}">${manager.email}</a>
                </li>
                <li class="list-group-item">
                  Office Number: ${manager.officeNumber}
                </li>
              </ul>
            </div>
          </div>
        </div>
       
    `;
}

function renderEngineer(engineer) {
  return `  
  <div class="col-4">
  <div class="card text-bg-primary mb-3" style="max-width: 18rem">
    <div class="card-header"><h3>${engineer.name}</h3></div>
    <div class="card-body">
      <h5 class="card-title">Engineer</h5>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${engineer.id}</li>
        <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
        <li class="list-group-item">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></li>
      </ul>
    </div>
  </div>
</div>

    `;
}

function renderIntern(intern) {
  return `  
  <div class="col-4">
  <div class="card text-bg-primary mb-3" style="max-width: 18rem">
    <div class="card-header"><h3>${intern.name}</h3></div>
    <div class="card-body">
      <h5 class="card-title">Intern</h5>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${intern.id}</li>
        <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
        <li class="list-group-item">School: ${intern.school}</li>
      </ul>
    </div>
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
      </header>
      <br />
      <br />
      <div class="container">
        <div class="row">`;
  const htmlBottom = `</div>
  </div>
  <!-- JavaScript Bundle with Popper -->
  <script
    src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa"
    crossorigin="anonymous"
  ></script>
  <script src="index.js"></script>
</body>
</html>
`;
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
  }
  return `
  ${htmlTop}
  ${card.join("")}
  ${htmlBottom}
  `;
};
