// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
          # ${data.description}
          # ${data.installation}
          # ${data.usage}
          # ${data.credits}
          # ${data.license}
`;
}

module.exports = generateMarkdown;
