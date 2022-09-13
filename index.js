// Packages Required //

const inquirer = require("inquirer");


// packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown")


// Questions //
const questions = [
{   type: "input",
    name: "username",
    message: "What is your GitHub username",
}

{
    type: "input", 
    name: "email", 
    message: "What is your email?",
},

{
    type: "input", 
    name: "projectTitle", 
    message: "Type you title here",
}, 

]