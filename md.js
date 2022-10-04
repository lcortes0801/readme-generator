function generateMd(answers){
    return `# ${answers.projectTitle}
![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)

This application is covered under ${answers.license} license.

## Contributing
${answers.contribution}

## Tests
${answers.tests}

## Questions
${answers.questions}

Contact Me

[![](http://www.github.com/${answers.username}.png?size=36) ${answers.username}](http://github.com/${answers.username}) on Github 

[:email: ${answers.email}](mailto:${answers.email})


<br/><br/>

<span style="font-size:.75em">Made with [Markdown Generator](https://github.com/lcortes080/mdgen)</span>
`;
}




module.exports = {generateMd};