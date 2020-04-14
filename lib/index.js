// import argv from 'yargs'
const fs = require('fs-extra')
const path = require('path')
const { decryptAesGCM } = require('./common')



const currentWorkingDir = process.cwd();
const configPathFolder = path.join(currentWorkingDir, '.secreta')
let config;

exports.load = (options) => {

    try {
       const data = fs.readJsonSync(path.join(configPathFolder, 'secreta.json'))
       let config;
       if (data.encryptedConfig) {
           // config is encrypted, decrypt before use
           config = JSON.parse(decryptAesGCM(data.encryptedConfig, options.key))

       } else {
            config = data
       }
       
       // TODO: check type of key provided
       let combinedConfig;
       if (options.environment === 'development') {
       combinedConfig = {
           ...config.development,
       }
    } else {
        combinedConfig = {
            ...config.development,
            ...config[options.environment],
        }
     } 
        
        return combinedConfig;
    } catch(error) {
        console.log(`🍉 configuration loading failed. error: ${error.message}`);
        return;
    }
}

try {
    config = require(`${configPathFolder}/config.js`)

} catch(error) {
    console.log(`🍉 configuration loading failed. Please run "secreta init" to initialize configuration. error: ${error.message}`);
    return;
}

exports.config = config

















