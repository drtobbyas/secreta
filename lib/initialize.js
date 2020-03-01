const fs = require("fs-extra");
const path = require("path");

module.exports = () => {
  try {
    const source = path.join(__dirname, "../template/.secreta");
    const currentWorkingDir = process.cwd();
    const configPathFolder = path.join(currentWorkingDir, ".secreta");

    console.log("🍊 Initializing secreta ...");
    fs.copySync(source, configPathFolder);
    console.log("🥝 Initialization completed successfully ...");
    return;
  } catch (error) {
    console.log(`🍉 Iniatialization failed. error: ${error.message}`);
    return;
  }
};
