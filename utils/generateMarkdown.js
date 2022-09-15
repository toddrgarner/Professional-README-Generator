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
function renderLicenseLink(license) {
var renderLicenseLink = data.License;
  if (data.license === "MIT")
    data.licenseLink = "MIT";
}

function renderLicenseLink(license) {
  if (data.license === "Apache")
      data.licenseLink = "Apache";
  }

  function renderLicenseLink(license) {
    if (data.license === "BSD-3 Clause")
        data.licenseLink = "BSD-3 Clause";
    }

    if (data.license === "None"){
      return 
    }
    
// Returns License Section of README

function renderLicenseSection(license) {
  if (data.license === "None")
  return
}

// Create README Section //
function generateMarkdown(data) {
  return `# ${data.License}
`;
}

module.exports = generateMarkdown;

// # <Your-Project-Title>

// ## Description
// Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:

// ## Table of Contents (Optional)



// If your README is long, add a table of contents to make it easy for users to find what they need.

// - [Installation](#installation)

// - [Usage](#usage)
// - [Credits](#credits)
// - [License](#license)

// ## Installation



// What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.

// ## Usage

// Provide instructions and examples for use. Include screenshots as needed.

// To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

//     ```md
//     ![alt text](assets/images/screenshot.png)
//     ```

// ## Credits

// List your collaborators, if any, with links to their GitHub profiles.

// If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

// If you followed tutorials, include links to those here as well.

// ## License

// The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).

// ---

// ## Features

// If your project has a lot of features, list them here.

// ## How to Contribute

// If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.

// ## Tests
// If you'd like to run tests on the code for this app you can do so using jest.//


## Deployed Live URL:
 https://toddrgarner.github.io/Weather-Dashboard/

## Github Repository URL:
https://github.com/toddrgarner/Weather-Dashboard

## Weather Dashboard GIF:
![ezgif com-gif-maker (1)](https://user-images.githubusercontent.com/110719370/189460119-36abf568-af29-40c7-be04-960d54d386f8.gif)

## © 2022 Todd Garner. Confidential and Proprietary. All Rights Reserved.
