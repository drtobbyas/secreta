// import argv from 'yargs'
const fs = require('fs-extra')
const path = require('path')
const { decryptAesGCM } = require('./common')

const currentWorkingDir = process.cwd();
const configPathFolder = path.join(currentWorkingDir, '.secreta')

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

















