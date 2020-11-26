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
  ${data.license}

  ## Questions
  Github: https://github.com/${data.userName}
  
  Please feel free to reach out to me at ${data.email}, if you have any questions about my application!

`;
}

module.exports = generateMarkdown;
