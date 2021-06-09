const fs = require('fs');
const inquirer = require('inquirer');

const promptUser = () => {

    return inquirer.prompt([
        {
            type: "input",
            name: "project_title",
            message: "What is the title of your project?"
        },
        {
            type: "input",
            name: "project_description",
            message: "Give a description of your project"
        },
        {
            type: "input",
            name: "installation",
            message: "Are there any installations required for your project?"
        },
        {
            type: "input",
            name: "usage",
            message: "How do you use your project/ Website?"
        },
        {
            type: "input",
            name: "contributions",
            message: "Please talk about and contributions or contributors."
        },
        {
            type: "input",
            name: "test",
            message: "Please provide test instructions if applicable"
        },
        {
            type: "checkbox",
            message: "License?",
            name: "license",
            choices: [
                "[MIT License](LICENSE.txt)"
            ]
        },
        {
            type: "input",
            name: "email",
            message: "Enter your email account"
        },
        {
            type: "input",
            name: "github",
            message: "Enter your github username"
        }
    ]);
}

promptUser();