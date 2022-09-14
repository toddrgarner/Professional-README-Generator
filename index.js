// Required Packages for Project //
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// Questions //
const questions = [
  {
    type: "input",
    name: "Title",
    message: "Type your title here",
  },
  {
    type: "input",
    name: "Description",
    message: "Type your description here",
  },

  { type: "input", name: "Username", message: "What is your GitHub username" },

  {
    type: "input",
    name: "Email",
    message: "What is your email?",
  },

  {
    type: "input",
    name: "Installation",
    message: "What dependencies were installed?",
  },
  {
    type: "List",
    name: "License",
    message: "Type your title here",
    choices: ["None", "MIT", "Apache", "BSD-3 Clause"],
  },

  {
    type: "input",
    name: "Test",
    message: "How did you test this project?",
  },

  {
    type: "input",
    name: "Usage",
    message: "What steps did you take to get this app running?",
  },

  {
    type: "input",
    name: "Contributors",
    message: "Who were the contributors on this project?",
  },
];

// Creates generateMarkdown to README file
const writeFile = (fileName, data) => {
  fs.writeFile(fileName, data, function (err) {
    console.log(data),
      err ? console.log(err) : console.log("README.md successfully created!");
  });
};

// Initializes app
const init = () => {
  inquirer.prompt(questions).then(function (data) {
    writeFile("README.md", generateMarkdown(data));
    console.log(data);
  });
};

init();
