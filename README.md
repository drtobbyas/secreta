
<!-- # SECRETA [<img src="https://i.imgur.com/oMcxwZ0.png" alt="Eva Design System" height="20px" />][link:eva] [![npm][badge:license]]() [![Build Status][badge:github-actions]][link:github-actions] [![Coverage Status][badge:coveralls]][link:coveralls] -->
# SECRETA

**SECRETA** – ***A secret is a secret if and only if it is kept secret***

<!-- [Documentation][link:doc-homepage] -->

Secreta is a secret and config manangement module that allows you to smartly manage your app configurations and secrets. 
It provides a way to secure API keys, External Service Links, Database credentials, app configs and more with Industry-grade encryption denying unauthorized access.
It provides a permission level which enables each member of the team have access to the exact permission and access to secrets they need to do their work. 
It eliminates the need to worry about secrets being committed to git repos. All secrets are encrypted with industry-standard encryption algorithm. No one can decrypt without a matching key.

100% Free and Open Source!

<!-- ![Kitten Material](https://camo.githubusercontent.com/f0487d92194f3c685213539c53e9784113cd8a4b/68747470733a2f2f692e696d6775722e636f6d2f58384f344748622e706e67) -->

<!-- [<img src="https://i.imgur.com/pYl0trU.jpg">][link:doc-homepage] -->

## What's included

- **One key -** You only need to remember one key to manage all your secrets.

- **Access control to secrets and configs -** with hierarchical permission level.

- **Industry-grade encryption -** to protect against unauthorized access even if configs where released into wrong hands.

- **Predefined environment configuration template -** Consisting of development (default), staging and production configs. More can be added at wish

- **Eleminates worries of unintentional configs commit -** You can now safely commit your configs to gitHub, Bitbucket, Gitlab e.t.c. All configs are encrypted

- **Configs are inherited -** No need to re-declare properties for every environment, just a subtle overwrite. You are done!

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

Load config: 
### Config can be loaded either in encrypted or unencrypted state

```js
import { load } from "secreta";

const config = load({key: 'myonlysecretkey', environment: 'development'});

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



## How can I support the developers?
- Star our GitHub repo :star:
- Create pull requests, submit bugs, suggest new features or documentation updates :wrench:
<!-- - Read us on [Medium][link:akveo-medium] -->
- Follow us on [Twitter][link:drtobbyas-twitter]
<!-- - Like our page on [Facebook][link:akveo-facebook] -->

## License
[MIT](LICENSE.txt) license.

<!-- ## More from Akveo
- [Eva Icons][link:eva-icons] - 480+ beautiful Open Source icons -->

## From Developers
Made with :heart: by [Tobbyas Techwares][link:tobbyas-techwares-homepage]. Follow us on [Twitter][link:drtobbyas-twitter] to get the latest news first!
We're always happy to receive your feedback!

<!-- [badge:license]: https://img.shields.io/npm/l/react-native-ui-kitten.svg -->
<!-- [badge:github-actions]: https://github.com/akveo/react-native-ui-kitten/workflows/Build/badge.svg
[badge:coveralls]: https://coveralls.io/repos/github/akveo/react-native-ui-kitten/badge.svg?branch=master -->

<!-- [link:eva]: https://hubs.ly/H0n6Dd90 -->
<!-- [link:github-actions]: https://github.com/akveo/react-native-ui-kitten/actions -->
<!-- [link:coveralls]: https://coveralls.io/github/akveo/react-native-ui-kitten?branch=master -->
<!-- [link:doc-homepage]: https://hubs.ly/H0n6CZJ0 -->
<!-- [link:doc-where-start]: https://hubs.ly/H0n6Ddg0 -->
<!-- [link:kitten-tricks]: https://github.com/akveo/kittenTricks -->
<!-- [link:eva-icons]: https://github.com/akveo/eva-icons -->
[link:tobbyas-techwares-homepage]: https://tobbyas.com
<!-- [link:akveo-medium]: https://medium.com/akveo-engineering -->
[link:drtobbyas-twitter]: https://twitter.com/drtobbyas
<!-- [link:akveo-facebook]: https://www.facebook.com/ -->
<!-- [link:ui-kitten-bundles]: https://hubs.ly/H0n6Ddn0 -->
<!-- [link:ui-kitten-bundle-java]: https://hubs.ly/H0n6C-00 -->
<!-- [link:ui-kitten-bundle-dotnet-core]: https://hubs.ly/H0n6C-10 -->
