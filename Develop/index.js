const fs = require('fs');
const inquirer = require('inquirer');

const promptUser = () => {

    return inquirer.prompt([
        {
            type: "input",
            name: "project_title",
            message: "What is the title of your project?"
        },
      
    ]);
}

promptUser();