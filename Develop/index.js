const fs = require('fs');
const inquirer = require('inquirer');

const readmePrompt = () => {

    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the title of your project?"
        },
        {
            type: "input",
            name: "description",
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

const generateREADME = (answers) => {
    return `# ${answers.title}
      
  #### Table of Contents
  1. [Description](#description)
  2. [Installation](#installation)
  3. [Usage](#usage)
  4. [Contributions](#Contributions)
  5. [Test Instructions](#test-instructions)
  6. [License](#license)
  7. [Contact](#Contact)
  ## Description
  * ${answers.description}
  ## Installation
  * ${answers.install}
  ## Usage
  * ${answers.use}
  ## Contributions
  * ${answers.contributions}
  ## Test Instructions
  * ${answers.test}
  ## License
  * ${answers.license}
  ## Contact
  * You can reach me at ${answers.email}
  * Feel free to checkout my Github: [${answers.github}](http://github.com/${answers.github})`;
}

promptUser();