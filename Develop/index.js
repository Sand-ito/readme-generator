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
};

const readmeTemplate = (answers) => {
    return `# ${answers.title}
  #### Table of Contents
  1. [Description](#description)
  2. [Installation](#installation)
  3. [Usage](#usage)
  4. [Contributions](#Contributions)
  5. [Test Instructions](#test-instructions)
  6. [Contact](#Contact)
  ## Description
  ${answers.description}
  ## Installation
  ${answers.installation}
  ## Usage
  ${answers.usage}
  ## Contributions
  ${answers.contributions}
  ## Test
  ${answers.test}
  ## Contact
  You can reach me at ${answers.email}
  Feel free to checkout my Github: [${answers.github}](http://github.com/${answers.github})`;
}

readmePrompt()
    .then((answers) => {
        const newREADME = readmeTemplate(answers)
        fs.writeFile('README.md', newREADME, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log('Success!');
            }
        })
    })
    .then(() => {
        console.log('Your readme has been successfully created!')
    });
