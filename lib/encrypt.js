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
    console.log("🥝 encrypting configs ...");

    // TODO: add validation to user input to make it strong
    // TODO: read .secreta file and stringify
    try {
     let userConfig =  JSON.stringify(fs.readJsonSync(path.join(configPathFolder, 'secreta.plain.json')));
      // console.log(userConfig)

      const encData = encryptAesGCM(userConfig, answer.key)

      const config = `{
          "encryptedConfig": "${encData}",
          "key": "${answer.key}"
      }`;

      fs.outputFileSync(path.join(configPathFolder, 'secreta.json'), config);

    } catch (error) {
      console.log(`🍉 configuration loading failed. error: ${error.message}`);
    }
  });
};


