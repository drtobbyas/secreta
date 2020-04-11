
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

    try {
     const data =  fs.readJsonSync(path.join(configPathFolder, "/secreta.json"));
     if (!data.encryptedConfig) {
      console.log("🥝 config is not encrypted. Please encrypt first before using this option...");
      return
     }
     const config = JSON.parse(decryptAesGCM(data.encryptedConfig, answer.key))

     fs.writeJsonSync(path.join(configPathFolder, 'secreta.json'), config)

      console.log("🥝 decrypting successful ...");
    return plainConfig

    } catch (error) {
     return console.log(`🍉 configuration loading failed. error: ${error.message}`);
      
    }
  });
};

