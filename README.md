
![secreta logo](https://res.cloudinary.com/drtob/image/upload/v1586612535/xnvxpxpqhcddtwpofj7e.png)
<!-- [link:eva] [![npm][badge:license]]() [![Build Status][badge:github-actions]][link:github-actions] [![Coverage Status][badge:coveralls]][link:coveralls] -->

> **SECRETA** - A smarter secret and config manangement package

**SECRETA** – ***A secret is a secret if and only if it is kept secret***

<!-- [Documentation][link:doc-homepage] -->

Secreta is a secret and config manangement module that allows you to smartly manage your app configurations and secrets. 
It provides a way to secure API keys, External Service Links, Database credentials, app configs and more with Industry-grade encryption denying unauthorized access.
It provides a permission level which enables each member of the team have access to the exact permission and access to secrets they need to do their work. 
It eliminates the need to worry about secrets being committed to git repos. All secrets are encrypted with industry-standard encryption algorithm. No one can decrypt without a matching key.

100% Free and Open Source!

## What's included

- **One key -** You only need to remember one key to manage all your secrets.

- **Access control to secrets and configs -** with hierarchical permission level.

- **Industry-grade encryption -** to protect against unauthorized access even if configs where released into wrong hands.

- **Predefined environment configuration template -** Consisting of development (default), staging and production configs. More can be added at wish

- **Eleminates worries of unintentional configs commit -** You can now safely commit your configs to gitHub, Bitbucket, Gitlab e.t.c. All configs are encrypted

- **Configs are inherited -** No need to re-declare properties for every environment, just a subtle overwrite. You are done!


# Motivation
Keeping organized and remembering app configs especially when you have loads of secrets to manage, database configs (host, username, and passwords), app ID, external API keys and variable enviroment configuration is really daunting. And more importantly being able to define enviroment variables in a single file and load at runtime any given enviroment configuration seems to be a luxury.
Also, exposing your whole system configs to third party, adhoc staff and one-time freelancers is not something you want for your organization.

Having the ability to manage all your secrets, database configs, API keys and more with just `ONE KEY` is not bad (~ if not splendid ~). Also being able to optionally secure your secrets with industry-grade encryption when your feel you need more protection while working with third-parties is plus. Above all, have the ease of switching and testing all your enviroments (development, staging, production) variables from a single point.

## What makes  `secreta` different from other config manangement modules'
### secreta vs dotenv
| features | dotenv                 | secreta                                                                                                          |
| ---- | --------------------- | -------------------------------------------------------------------------------------------------------------------- |
| Dynamic Loading  |  Does not support dynamic environment variables loading.                    | Support dynamic environment variables loading                                                                                            |
| DataTypes  | .env file only natively support string. Does not support boolean or number values without additionally overhead            | Full support for all DataTypes includes Array, boolean, number e.t.c. Support all DataTypes that can be stored with json                                                                                    |
| File  | .env file          | .json file                                                                                              |
| Encryption  | Does not provide encryption. Relies on ignnoring .env file to git commit to prevent accidental config commit             | Provides industry-grade encryption to encrypt configs. No worries if config is committed to git (as long as it is encrypted, no one can see your secrets)                                                                                |
| Duplication  | Requires you to define separate environment variables for each environment  | Configs can be the inhereted. No need for duplication. General configs can be set in development (default) environment and other enviroments can overwrite and add more environment-specific variables|


## Quick Start

Install secreta:

```bash
npm i secreta
```
or use yarn

```bash
yarn add secreta
```

Initialize Secreta: 
This will generate a .secreta folder with secreta file where configs and secrets can be safely stored and used in your app

```bash
secreta init
```

Define your configs: 
### Open `<project-root>/.secreta/secreta.json` and define your configs. 
### set your key and environment in `<project-root>/.secreta/config.js' file. Boom! All done.

Load config: 
### Config can be loaded either in encrypted or unencrypted state

```js
import { config }  from "secreta";

console.log(config.MYSQL_PASSWORD)

```

### You can encrypt your config prior to pushing to git repo (gitHub, gitLab, Bitbucket, e.t.c)
### Or even create pre-push hook https://www.npmjs.com/package/pre-push to enhance workflow

Encrypt configs: 
This encrypts your secrets and configs with Industry-grade encryption algorithm

```bash
secreta encrypt
```

### You may wish to decrypt your config after encryption

Decrypt configs:
This decrypts your configs, if for any reason you need to see the plain version

```bash
secreta decrypt
```

Configuring environment: 
### Config can be loaded based on environment (development, staging, production or any other you defined in secreta.json)
### open `<project-root>/.secreta/config.js' file and make variable reference to `key` and `environment` properties.

```js

const { load } = require('secreta')

module.exports = load({key: process.env.MY_ONLY_KEY, environment: process.env.NODE_ENV})

```

### Testing
You can clone the repo and move the sandbox folder to a folder on the same level with secreta
Run the following command in secreta folder
```bash
npm link
```

Run the following command in sandbox folder
```bash
npm link secreta
```
You can now play as you like in the sandbox!


## How can I support the developers?
- Star our GitHub repo :star:
- Create pull requests, submit bugs, suggest new features or documentation updates :wrench:
<!-- - Read us on [Medium][link:akveo-medium] -->
- Follow us on [Twitter][link:drtobbyas-twitter]
<!-- - Like our page on [Facebook][link:akveo-facebook] -->

## License
[MIT](LICENSE.txt) license.



## From Developers
Made with :heart: by [Tobbyas Techwares][link:tobbyas-techwares-homepage]. Follow us on [Twitter][link:drtobbyas-twitter] to get the latest news first!
We're always happy to receive your feedback!


[link:tobbyas-techwares-homepage]: https://tobbyas.com
[link:drtobbyas-twitter]: https://twitter.com/drtobbyas

