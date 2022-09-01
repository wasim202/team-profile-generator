const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./src/generateHTML");
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");

const myteam = [];

inquirer
  .prompt([
    {
      type: "input",
      message: "What is the team manager's name? ",
      name: "name",
    },
    {
      type: "input",
      message: "What is the team manager's id? ",
      name: "id",
    },
    {
      type: "input",
      message: "What is the team manager's email? ",
      name: "email",
    },
    {
      type: "input",
      message: "What is the team manager's office number ",
      name: "officeNumber",
    },
    {
      type: "list",
      massage: "which type of team member would you like to add? ",
      name: "engIntlist",
      choices: ["Engineer", "Intern", "I don't want to add any team members"],
    },
  ])

  .then((Response) => {
    const manager = new Manager(
      Response.id,
      Response.name,
      Response.email,
      Response.officeNumber
    );
    myteam.push(manager);

    switch (Response.engIntlist) {
      case "Engineer":
        askengineer();
        break;
      case "Intern":
        askIntern();
        break;
      case "I don't want to add any team members":
        wrapingUp(myteam);
        break;
    }
  });
// engneer function
function askengineer() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your engineer's name? ",
        name: "name",
      },
      {
        type: "input",
        message: "What is your engineer's id? ",
        name: "id",
      },
      {
        type: "input",
        message: "What is your engineer's email? ",
        name: "email",
      },
      {
        type: "input",
        message: "What is your engineer's Github username? ",
        name: "github",
      },
      {
        type: "list",
        massage: "which type of team member would you like to add? ",
        name: "engIntlist",
        choices: ["Engineer", "Intern", "I don't want to add any team members"],
      },
    ])
    .then((Response) => {
      const engineer = new Engineer(
        Response.id,
        Response.name,
        Response.email,
        Response.github
      );
      myteam.push(engineer);
      switch (Response.engIntlist) {
        case "Engineer":
          askengineer();
          break;
        case "Intern":
          askIntern();
          break;
        case "I don't want to add any team members":
          wrapingUp(myteam);
          break;
      }
    });
}
// intern function
function askIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your intern's name? ",
        name: "name",
      },
      {
        type: "input",
        message: "What is your intern's id? ",
        name: "id",
      },
      {
        type: "input",
        message: "What is your intern's email? ",
        name: "email",
      },
      {
        type: "input",
        message: "What is your intern's school? ",
        name: "school",
      },
      {
        type: "list",
        massage: "which type of team member would you like to add? ",
        name: "engIntlist",
        choices: ["Engineer", "Intern", "I don't want to add any team members"],
      },
    ])
    .then((Response) => {
      const intern = new Intern(
        Response.id,
        Response.name,
        Response.email,
        Response.school
      );
      myteam.push(intern);
      switch (Response.engIntlist) {
        case "Engineer":
          askengineer();
          break;
        case "Intern":
          askIntern();
          break;
        case "I don't want to add any team members":
          wrapingUp(myteam);
          break;
      }
    });
}
// wrapingUp function
function wrapingUp(data) {
  const card = generateHTML(data);
  console.log(card);
  fs.writeFile("./dist/index.html", card, (err) =>
    err ? console.log(err) : console.log("Success!")
  );
  //process.exit();
}
