const fs = require("fs-extra");
const path = require("path");
const inquirer = require("inquirer");
const { encryptAesGCM } = require('./common')

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
     let userConfig =  JSON.stringify(fs.readJsonSync(path.join(configPathFolder, 'secreta.json')));
     if (userConfig.encryptedConfig) {
      console.log("🥝 config is already encrypted. You can decrypt and re-encrypt...");
      return 
     } 

      // TODO: generate key according to number of environment
      const encData = encryptAesGCM(userConfig, answer.key)
      
      const config = {
          "encryptedConfig": `${encData}`
      };
      fs.writeJsonSync(path.join(configPathFolder, 'secreta.json'), config)
      console.log("🥝 encryption successful ...");
      return
    } catch (error) {
      console.log(`🍉 configuration loading failed. error: ${error.message}`);
    }
  });
};


