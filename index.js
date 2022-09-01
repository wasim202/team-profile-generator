const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./dist/generateHTML");
// const { default: nodeTest } = require("node:test");
// const Engineer = require("./Engineer");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is the team manager's name? ",
      name: "manager-name",
    },
    {
      type: "input",
      message: "What is the team manager's id? ",
      name: "manager-id",
    },
    {
      type: "input",
      message: "What is the team manager's email? ",
      name: "manager-email",
    },
    {
      type: "input",
      message: "What is the team manager's office number ",
      name: "manager-oficeNumber",
    },
    {
      type: "list",
      massage: "which type of team member would you like to add? ",
      name: "engInt-list",
      choices: ["Engineer", "Intern", "I don't want to add any team members"],
    },
  ])

  .then((Response) => {
    // if (inquirer.prompt[4].choices === "Engineer") {
    //   return askengineer();
    // } else if (inquirer.prompt[4].choices === "Intern") {
    //   return askIntern();
    // } else {
    //   return rapingUp();
    // }

    switch (Response.engIntlist) {
      case "Engineer":
        askengineer();
        break;
      case "Intern":
        askIntern();
        break;
      case "I don't want to add any team members":
        rapingUp();
        break;
    }

    console.log(Response);
  });
// engneer function
askengineer();
{
  const inquirer = require("inquirer");
  const fs = require("fs");

  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your engineer's name? ",
        name: "engneer-name",
      },
      {
        type: "input",
        message: "What is your engineer's id? ",
        name: "engineer-id",
      },
      {
        type: "input",
        message: "What is your engineer's email? ",
        name: "engineer-email",
      },
      {
        type: "input",
        message: "What is your engineer's Github username? ",
        name: "engineer-github",
      },
      {
        type: "list",
        massage: "which type of team member would you like to add? ",
        name: "eng-int-list",
        choices: ["Engineer", "Intern", "I don't want to add any team members"],
      },
    ])
    .then((Response) => {
      console.log(Response);
    });
}
// intern function
askIntern();
{
  const inquirer = require("inquirer");
  //const fs = require("fs");

  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your intern's name? ",
        name: "intern-name",
      },
      {
        type: "input",
        message: "What is your intern's id? ",
        name: "intern-id",
      },
      {
        type: "input",
        message: "What is your intern's email? ",
        name: "intern-email",
      },
      {
        type: "input",
        message: "What is your intern's school? ",
        name: "intern-school",
      },
      {
        type: "list",
        massage: "which type of team member would you like to add? ",
        name: "eng-int-list",
        choices: ["Engineer", "Intern", "I don't want to add any team members"],
      },
    ])
    .then((Response) => {
      console.log(Response);
    });
}
// rapingUp function
rapingUp();
{
  process.exit();
}
