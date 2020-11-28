// function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}
[![License: ${data.license}](https://img.shields.io/badge/License-${data.license}-${data.color}.svg)](https://opensource.org/licenses/MIT) 

## Project Description: 
${data.description}

## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Test](#test)
  * [Credits](#credits)
  * [License](#license)
  * [Questions](#questions)
     
## Installation
${data.installation}

## Usage
${data.usage}

## Test
${data.test}

## Credits
${data.credits}

## License
This project is licensed under the ${data.license} License.

## Questions
  * Github: https://github.com/${data.userName}
  * Please feel free to reach out to me on Github (above) or send an email to ${data.email} if you have any questions about my application!
`;
}

module.exports = generateMarkdown;
