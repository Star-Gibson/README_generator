// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # Project Title : ${data.title}

  ## Project Description: 
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Test](#test)
  * [Credits](#credits)
  * [License](#license)
     
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Test
  ${data.test}

  ## Credits
  ${data.credits}

  ## License
  ${data.license}
`;
}

module.exports = generateMarkdown;
