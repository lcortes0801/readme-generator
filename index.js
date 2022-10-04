const inquirer = require('inquirer');
const fs = require('fs');
const md = require('./md');


questions = [
    {
        name: 'projectTitle',
        message: 'What is the title of your project?'
    },
    {
        name: 'description',
        message: 'Write a brief description of your project:'
    },
    {
        name: 'installation',
        message: 'Describe the instalation process:'
    },
    {
        name: 'usage',
        message: 'Type in a description and examples on how to use your project:'
    },
    {
        name: 'contribution',
        message: 'How can others contribute to this project?'
    },
    {
        name: 'tests',
        message: 'Test performed:'
    },
    {
        type: "list",
        name: "license",
        message: "Chose the appropriate license for this project: ",
        choices: [
            "Apache",
            "Academic",
            "GNU",
            "ISC",
            "MIT",
            "Mozilla",
            "Open"
        ]
    },
    {
        type: "input",
        name: "questions",
        message: "Questions:"
    },
    {
        type: "input",
        name: "username",
        message: "Enter your GitHub username: "
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email: "
    }
];

inquirer.prompt(questions)
.then(answers => {
    const content = md.generateMd(answers);
    fs.writeFile('./README.md', content, e=>{
        if (e)
            console.log(e);
        else
            console.log('README.md generated successfully')
    });
});