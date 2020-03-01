#!/usr/bin/env node

const program = require('commander');
const initialize = require("../lib/initialize");
const encrypt = require("../lib/encrypt");
const decrypt = require("../lib/decrypt");

program
  .command("init")
  .alias("i")
  .description("initialize secreta... config and secret manangement module")
  .action(() => {
    initialize();
  });

program
  .command("encrypt")
  .alias("e")
  .description(
    "encrypt secrets and configs... config and secret manangement module"
  )
  .action(() => {
    encrypt();
  });

program
  .command("decrypt")
  .alias("d")
  .description(
    "decrypt secrets and configs back to its original unencrypted form... config and secret manangement module"
  )
  .action(() => {
    decrypt();
  });


  program.parse(process.argv)

