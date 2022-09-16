// License Badge //
function renderLicenseBadge(data) {
  var licensePicked = data.License;
  let licenseBadge = ''
  if (licensePicked === "MIT"){
    licenseBadge = "[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    return licenseBadge; 
  }

  if (licensePicked === "Apache"){
    licenseBadge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    return licenseBadge; 
  }

  if (licensePicked === "BSD-3 Clause"){
    licenseBadge = "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    return licenseBadge; 
  }

  if (licensePicked === "None"){
    return ""; 
  }
}

// License Verification Section //
function renderLicenseSection(data) {

  if (data.License === "None") {
    return "";
    } else {
      return `## License
${renderLicenseBadge(data)}`
    }
    
}

// License Verification Section //
function renderLicenseTOC(data) {

    if (data.License === "None") {
      return ""; 
      } else {
        return `* [License](#license)` 
      }
  
}

// Create README Section //
function generateMarkdown(data) {
  return `# ${data.Title}
  ## https://github.com/${data.Username}/${data.Title}
  * [Description](#description)
  * [Installation](#installation)
  * [Contribute](#contribute)
  ${renderLicenseTOC(data)}
  * [Test](#test)
    ## Description 
  ${data.Description}
  ## Installation
  ${data.Installation}
  ## Contributors
  ${data.Contributors}
  ${renderLicenseSection(data)}
  ## Test
  You can use Jest to run test one the code.
  ## Video Link
  [link test](https://toddgarner@gmail.com)
`;
}
module.exports = generateMarkdown;













