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
  return `#${data.Title}
  ![license badge](${renderLicenseBadge(data)})
  * [Description](#description)
  * [Installation](#installation)
  * [Contributors](#contributors)
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
  ## PRG Installation Link
  [Installation Link](https://toddgarner@gmail.com)
`;
}
module.exports = generateMarkdown;



// Test //
// Node.js provides users with the abilty to run test by using "Jest", a JavaScript testing solution system.
// 


// description
// Professional README Generator is a user friendly application that is created to give users the ability to generate a automated README.md file//   
// through the Node.js system.// 






