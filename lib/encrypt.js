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
     let userConfig =  JSON.stringify(fs.readJsonSync(path.join(configPathFolder, 'secreta.plain.json')));
      
      // TODO: generate key according to number of environment
      const encData = encryptAesGCM(userConfig, answer.key)
      
      const config = `{
          "encryptedConfig": "${encData}",
          "key": "${answer.key}"
      }`;
      const tempDir = '../node_modules/secreta/temp/secreta.plain.json'
      fs.ensureDirSync(tempDir)
      fs.outputFileSync(path.join(configPathFolder, 'secreta.json'), config);
      fs.moveSync(path.join(configPathFolder, 'secreta.plain.json'), path.join(configPathFolder, tempDir), { overwrite: true})
      console.log("🥝 encryption successful ...");
      return
    } catch (error) {
      console.log(`🍉 configuration loading failed. error: ${error.message}`);
    }
  });
};


