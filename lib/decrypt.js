
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
const configPathFolder = path.join(currentWorkingDir, '.secreta')

module.exports = () => {
  inquirer.prompt(questions).then(answer => {

    // TODO: add validation to user input to make it strong
    try {
     const encryptedData =  fs.readJsonSync(path.join(configPathFolder, "/secreta.json"));
     const plainConfig = decryptAesGCM(encryptedData.encryptedConfig, answer.key)
      // TODO: check if key is development, staging, production and decrypt accordingly
      // console.log(plainConfig)
      const tempDir = '../node_modules/secreta/temp/secreta.plain.json'
      fs.ensureDirSync(tempDir)
    fs.moveSync(path.join(configPathFolder, tempDir), path.join(configPathFolder, 'secreta.plain.json'), { overwrite: true})
    console.log("🥝 decrypting successful ...");
    return plainConfig

    } catch (error) {
     return console.log(`🍉 configuration loading failed. error: ${error.message}`);
      
    }
  });
};

