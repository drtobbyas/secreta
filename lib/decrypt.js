
const fs = require("fs-extra");
const path = require("path");
const inquirer = require("inquirer");
const { decryptAesGCM } = require('./common')

const questions = [
  {
    type: "input",
    name: "key",
    message: "Please provide your encryption/decryption key"
  }
];

const currentWorkingDir = process.cwd();

module.exports = () => {
  inquirer.prompt(questions).then(answer => {
    console.log("🥝 decrypting configs ...");

    // TODO: add validation to user input to make it strong
    try {
     const encryptedData =  fs.readJsonSync(path.join(currentWorkingDir, ".secreta/secreta.json"));
     const plainConfig = decryptAesGCM(encryptedData.encryptedConfig, answer.key)
      // TODO: check if key is development, staging, production and decrypt accordingly
      // console.log(plainConfig)
     return plainConfig

    } catch (error) {
     return console.log(`🍉 configuration loading failed. error: ${error.message}`);
      
    }
  });
};

