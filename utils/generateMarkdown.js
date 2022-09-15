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
    return; 
  }
}

// License Verification Section //
function renderLicenseSection(data) {
var renderLicenseLink = data.License;
  if (data.license === "None") {
    return;
    } else {
      return `# License
${renderLicenseBadge(data)}`
    }
    
}

// License Verification Section //
function renderLicenseTOC(data) {
  var renderLicenseLink = data.License;
    if (data.license === "None") {
      return;
      } else {
        return `* [License](#license)` 
      }
  
}


// Create README Section //
function generateMarkdown(data) {
  return `# ${data.Title}
`;
}

module.exports = generateMarkdown;

// # <Your-Project-Title>



// ## Table of Contents (Optional)

// * Description
// * Installation 
// * Contribute
// * License
// * Test

// ## Description
// Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:

// - [Installation](#installation)

// ## Installation

// ## Contribute

// ## License

// ## Test

// Provide instructions and examples for use. Include screenshots as needed.

// To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:






