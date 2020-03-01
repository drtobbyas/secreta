// import argv from 'yargs'
const fs = require('fs-extra')
const path = require('path')
const { decryptAesGCM } = require('./common')

const currentWorkingDir = process.cwd();
const configPathFolder = path.join(currentWorkingDir, '.secreta')

exports.load = () => {

    // decrypt file
    try {
       const data = fs.readJsonSync(path.join(configPathFolder, 'secreta.json'))
       const config = JSON.parse(decryptAesGCM(data.encryptedConfig, data.key))
       // TODO: check type of key provided
       let combinedConfig;
       if (data.key.includes('development')) {
       combinedConfig = {
           ...config.development,
       }
    } else if (data.key.includes('staging')) {
        combinedConfig = {
            ...config.development,
            ...config.staging,
        }
     } else if (data.key.includes('production')) {
        combinedConfig = {
            ...config.development,
            ...config.production,
        }
     } else {
        combinedConfig = {
            ...config.development,
            ...config.staging,
            ...config.production,
        }
     }
        
        return combinedConfig;
    } catch(error) {
        console.log(`🍉 configuration loading failed. error: ${error.message}`);
        return;
    }
}

















